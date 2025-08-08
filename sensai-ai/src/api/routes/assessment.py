# sensai-ai/src/api/routes/assessment.py

from fastapi import APIRouter, UploadFile, File, HTTPException, Request, Form
from fastapi.responses import JSONResponse, FileResponse
from pathlib import Path
import shutil
import openai
import uuid
import csv
import json

# Note: The `score_mcq` and `score_short_answer` functions are no longer imported
from api.assessment_generator import AssessmentGenerator
from api.settings import settings
from api.config import UPLOAD_FOLDER_NAME
from thefuzz import fuzz # Import fuzz directly

router = APIRouter()

# Setup OpenAI Client
client = openai.OpenAI(
    api_key="sk-acTVFF7PJXIMfYxx-JTVjA", # The hardcoded key
    base_url="https://agent.dev.hyperverge.org"
)

# ==============================================================================
#  HELPER FUNCTION TO FIND A QUESTION
# ==============================================================================
def find_question_by_id(assessment: dict, question_id: int):
    """Finds a question in the assessment data by its ID."""
    for q_type_key in ["multiple_choice_questions", "short_answer_questions"]:
        for question in assessment.get(q_type_key, []):
            if question.get("id") == question_id:
                return question, "MCQ" if q_type_key == "multiple_choice_questions" else "SAQ"
    return None, None

# ==============================================================================
#  API ENDPOINTS
# ==============================================================================

@router.post("/test")
# ... (This endpoint remains unchanged)
async def test_ai_connection():
    try:
        response = client.chat.completions.create(
            model="openai/gpt-4o-mini",
            messages=[{"role": "user", "content": "Say 'hello'."}],
            temperature=0.1, max_tokens=5
        )
        return JSONResponse(status_code=200, content={"status": "success", "ai_response": response.choices[0].message.content})
    except Exception as e:
        raise HTTPException(status_code=401, detail=f"API connection failed. Error: {str(e)}")

@router.post("/generate")
# ... (This endpoint remains unchanged)
async def generate_assessment_from_document(file: UploadFile = File(...)):
    try:
        output_dir = Path(settings.local_upload_folder)
        output_dir.mkdir(exist_ok=True)
        temp_file_path = output_dir / file.filename
        with temp_file_path.open("wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        pipeline = AssessmentGenerator(output_dir=str(output_dir))
        generated_files = pipeline.run(str(temp_file_path))
        if generated_files:
            unique_id = Path(generated_files['json']).stem.replace('assessment_', '')
            csv_path = output_dir / "assessment_links.csv"
            with open(csv_path, 'a', newline='', encoding='utf-8') as csvfile:
                writer = csv.writer(csvfile)
                writer.writerow([unique_id, "", "", Path(generated_files['json']).name])
            return JSONResponse(status_code=200, content={
                "message": "Assessment generated successfully!",
                "assessment_json_path": f"{UPLOAD_FOLDER_NAME}/{Path(generated_files['json']).name}",
                "annotated_doc_path": f"{UPLOAD_FOLDER_NAME}/{Path(generated_files['annotated_doc']).name}",
                "unique_id": unique_id
            })
        else:
            raise HTTPException(status_code=500, detail="Pipeline failed to generate files.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

@router.post("/chatbot/{unique_id}/submit")
async def submit_answer(
    unique_id: str,
    question_id: int = Form(...),
    answer: str = Form(None),
    hint_requested: bool = Form(False),
    name: str = Form(...),
    user_id: str = Form(...),
):
    output_dir = Path(settings.local_upload_folder)
    json_path = output_dir / f"assessment_{unique_id}.json"
    if not json_path.exists():
        return JSONResponse(status_code=404, content={"error": "Assessment not found"})
    with open(json_path, "r", encoding="utf-8") as f:
        assessment = json.load(f)
    question, q_type = find_question_by_id(assessment, question_id)
    if not question:
        return JSONResponse(status_code=404, content={"error": "Question not found"})

    answers_csv = output_dir / f"submissions_{unique_id}.csv"

    if hint_requested:
        hint_text = question.get("hint", "No hint available for this question.")
        # Record that a hint was requested for scoring future answers
        submission = {"user_name": name, "user_id": user_id, "question_id": question_id, "question_type": q_type, "answer": "HINT_REQUESTED", "hint_requested": True, "marks": 0, "is_correct": False}
        with open(answers_csv, 'a', newline='', encoding='utf-8') as csvfile:
            fieldnames = submission.keys()
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            if csvfile.tell() == 0: writer.writeheader()
            writer.writerow(submission)
        return JSONResponse(content={"hint": hint_text})

    # --- Answer Submission & Scoring Logic ---
    marks = 0
    is_correct = False
    correct_answer = question.get("answer")
    
    # Check if a hint was previously requested for this question by this user
    hint_was_taken = False
    if Path(answers_csv).exists():
        with open(answers_csv, 'r', newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                if row.get("user_id") == user_id and int(row.get("question_id")) == question_id and row.get("hint_requested") == 'True':
                    hint_was_taken = True
                    break
    
    if q_type == "MCQ":
        is_correct = str(answer).lower().strip() == str(correct_answer).lower().strip()
        if is_correct:
            marks = 1 if hint_was_taken else 2
        else:
            marks = 0
    
    elif q_type == "SAQ":
        # Stage 1: Fuzzy Match
        match_ratio = fuzz.ratio(str(answer or "").lower().strip(), str(correct_answer or "").lower().strip())
        is_correct = match_ratio >= 70
        
        if is_correct:
            marks = 3 if hint_was_taken else 5
        else:
            # Stage 2: If fuzzy match fails, use LLM for semantic check
            print(f"Fuzzy match failed for Q{question_id}. Attempting LLM semantic check.")
            try:
                prompt = (
                    "You are an intelligent assessment grader. Compare the student's answer with the correct answer, considering the context of the question. "
                    "Does the student's answer convey the same core meaning as the correct answer? The student's answer does not need to be a word-for-word match. Focus on semantic similarity.\n\n"
                    f"**Question:** {question.get('question')}\n"
                    f"**Correct Answer:** {correct_answer}\n"
                    f"**Student's Answer:** {answer}\n\n"
                    'Respond with a single JSON object with one key, "is_semantically_correct", which must be a boolean (true or false).'
                )
                response = client.chat.completions.create(
                    model="openai/gpt-4o-mini",
                    messages=[{"role": "user", "content": prompt}],
                    response_format={"type": "json_object"},
                    temperature=0.0
                )
                llm_result = json.loads(response.choices[0].message.content)
                if llm_result.get("is_semantically_correct") is True:
                    print(f"LLM check PASSED for Q{question_id}. Awarding marks.")
                    is_correct = True
                    marks = 3 if hint_was_taken else 5
                else:
                    is_correct = False
                    marks = 0
            except Exception as e:
                print(f"LLM semantic check failed for Q{question_id} with error: {e}")
                is_correct = False
                marks = 0

    # Record submission
    submission = {"user_name": name, "user_id": user_id, "question_id": question_id, "question_type": q_type, "answer": answer, "hint_requested": False, "marks": marks, "is_correct": is_correct}
    with open(answers_csv, 'a', newline='', encoding='utf-8') as csvfile:
        fieldnames = submission.keys()
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        if csvfile.tell() == 0: writer.writeheader()
        writer.writerow(submission)

    return JSONResponse(content={"marks": marks, "is_correct": is_correct, "correct_answer": correct_answer, "citation": question.get("citation")})

@router.post("/chatbot/{unique_id}/explain")
# ... (This endpoint remains unchanged)
async def explain_answer(unique_id: str, request: Request):
    try:
        data = await request.json()
        question_id = data.get("question_id")
        print(f"Received request to explain Q{question_id} for assessment {unique_id}")
        output_dir = Path(settings.local_upload_folder)
        json_path = output_dir / f"assessment_{unique_id}.json"
        if not json_path.exists():
            raise HTTPException(status_code=404, detail="Assessment file not found")
        with open(json_path, "r", encoding="utf-8") as f:
            assessment = json.load(f)
        question, _ = find_question_by_id(assessment, question_id)
        if not question:
            raise HTTPException(status_code=404, detail="Question not found")
        prompt = (f"Based on the source material, please explain why the answer to the following question is correct. Be concise and clear.\n\n"
                  f"**Question:** {question.get('question')}\n"
                  f"**Correct Answer:** {question.get('answer')}\n"
                  f"**Source Quote from Document:** \"{question.get('source_quote')}\"\n\n"
                  f"Your explanation:")
        print("Sending prompt to LLM for explanation...")
        response = client.chat.completions.create(model="openai/gpt-4o-mini", messages=[{"role": "user", "content": prompt}], temperature=0.2, max_tokens=150)
        explanation = response.choices[0].message.content
        print("Received explanation from LLM.")
        return JSONResponse(content={"explanation": explanation})
    except Exception as e:
        print(f"ERROR in /explain endpoint: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to generate explanation: {str(e)}")


@router.get("/chatbot/{unique_id}/score")
# ... (This endpoint remains unchanged)
async def get_score(unique_id: str, user_id: str):
    output_dir = Path(settings.local_upload_folder)
    answers_csv = output_dir / f"submissions_{unique_id}.csv"
    json_path = output_dir / f"assessment_{unique_id}.json"
    total_score = 0
    submission_details = []
    if not answers_csv.exists() or not json_path.exists():
        return JSONResponse(content={"user_id": user_id, "total_score": 0, "details": [], "improvement_areas": "No submissions found to generate a report."})
    with open(answers_csv, 'r', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row.get("user_id") == user_id:
                if row.get("hint_requested") == 'False':
                    total_score += int(row.get("marks", 0))
                submission_details.append(row)
    with open(json_path, 'r', encoding='utf-8') as f:
        assessment = json.load(f)
    incorrect_questions = []
    for sub in submission_details:
        if sub.get('hint_requested') == 'False' and sub.get('is_correct') == 'False':
            question, _ = find_question_by_id(assessment, int(sub['question_id']))
            if question:
                incorrect_questions.append(f"- Question: \"{question.get('question')}\", Their Answer: \"{sub.get('answer')}\", Correct Answer: \"{question.get('answer')}\"")
    if not incorrect_questions:
        improvement_summary = "Excellent work! You answered all questions correctly. Keep up the great momentum in your learning journey."
    else:
        incorrect_list_str = "\n".join(incorrect_questions)
        prompt = (f"A student has completed an assessment. Their total score is {total_score}. "
                  f"Here are the questions they answered incorrectly:\n{incorrect_list_str}\n\n"
                  f"Please provide a concise, encouraging, and constructive summary of their areas for improvement. "
                  f"Identify the key topics or concepts they might be struggling with based on these errors. "
                  f"Structure your response in a friendly, coach-like tone. Start with a positive note before highlighting areas to focus on.")
        try:
            response = client.chat.completions.create(model="openai/gpt-4o-mini", messages=[{"role": "user", "content": prompt}], temperature=0.3, max_tokens=200)
            improvement_summary = response.choices[0].message.content
        except Exception:
            improvement_summary = "There was an error generating your feedback report, but please review the questions you missed to guide your studies."
    return JSONResponse(content={"user_id": user_id, "total_score": total_score, "details": submission_details, "improvement_areas": improvement_summary})