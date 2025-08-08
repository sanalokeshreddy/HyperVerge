"use client"

import { useState, useRef, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, Upload, File, Sparkles, Lightbulb, Send, CheckCircle, XCircle, Bot, User, Brain, Download } from 'lucide-react';

// --- Interfaces ---
interface GenerationResult {
    assessment_json_path: string | null;
    annotated_doc_path: string | null; // Added for download link
    unique_id: string;
}

interface ChatMessage {
    role: 'assistant' | 'user' | 'system' | 'explanation' | 'hint';
    content: string;
    options?: string[];
    questionId?: number;
    isCorrect?: boolean;
    citation?: { page_number: number; };
}

type AssessmentStep = 'AWAITING_FILE' | 'GENERATING' | 'AWAITING_NAME' | 'AWAITING_ID' | 'IN_PROGRESS' | 'COMPLETED';

// --- Main Component ---
export default function GenerateQuizDialog({ open, onClose }: { open: boolean; onClose: () => void; }) {
    const [quizFile, setQuizFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<GenerationResult | null>(null);
    const [assessmentStep, setAssessmentStep] = useState<AssessmentStep>('AWAITING_FILE');
    const [userName, setUserName] = useState<string>('');
    const [userId, setUserId] = useState<string>('');
    const [questions, setQuestions] = useState<any[]>([]);
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [userInput, setUserInput] = useState<string>('');
    const [isChatLoading, setIsChatLoading] = useState(false);
    const [annotatedDocPath, setAnnotatedDocPath] = useState<string | null>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => { 
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory]);

    const resetState = () => {
        setQuizFile(null); setError(null); setResult(null); setQuestions([]);
        setChatHistory([]); setCurrentQuestionIdx(0); setUserInput('');
        setIsChatLoading(false); setAssessmentStep('AWAITING_FILE');
        setUserName(''); setUserId(''); setAnnotatedDocPath(null);
    };

    const handleDialogClose = () => { resetState(); onClose(); };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) { setError(null); setQuizFile(file); }
    };

    const handleGenerateClick = async () => {
        if (!quizFile) { setError('Please select a document.'); return; }
        setAssessmentStep('GENERATING');
        const formData = new FormData();
        formData.append("file", quizFile);
        try {
            const response = await fetch("http://127.0.0.1:8001/assessment/generate", { method: "POST", body: formData });
            const resData: GenerationResult = await response.json();
            if (!response.ok) { throw new Error(resData.detail || 'Failed to generate.'); }
            
            console.log("Generation Result:", resData); // For debugging
            setResult(resData);
            setAnnotatedDocPath(resData.annotated_doc_path); 

            const questionsRes = await fetch(`http://127.0.0.1:8001/${resData.assessment_json_path}`);
            if (!questionsRes.ok) throw new Error("Could not fetch questions.");
            const assessmentJson = await questionsRes.json();
            
            const mcqs = (assessmentJson.multiple_choice_questions || []).map(q => ({ ...q, type: "MCQ" }));
            const saqs = (assessmentJson.short_answer_questions || []).map(q => ({ ...q, type: "SAQ" }));
            setQuestions([...mcqs, ...saqs]);

            setAssessmentStep('AWAITING_NAME');
            setChatHistory([{ role: "assistant", content: "Assessment ready! Let's start. What is your name?" }]);
        } catch (err: any) {
            setError(err.message || "An unknown error occurred.");
            setAssessmentStep('AWAITING_FILE');
        }
    };

    const handleInitialInfoSubmit = () => {
        if (!userInput.trim()) return;
        let nextStep: AssessmentStep = 'AWAITING_ID';
        let prompt = `Nice to meet you, **${userInput}**! What is your student ID?`;

        if (assessmentStep === 'AWAITING_NAME') { setUserName(userInput); } 
        else if (assessmentStep === 'AWAITING_ID') {
            setUserId(userInput);
            nextStep = 'IN_PROGRESS';
            prompt = `Thanks, **${userName}**! Let's begin the assessment.\n\nThis test has 15 Multiple-Choice Questions and 5 Short-Answer Questions. Good luck!`;
        }
        setChatHistory(prev => [...prev, { role: 'user', content: userInput }, { role: 'assistant', content: prompt }]);
        setUserInput('');
        setAssessmentStep(nextStep);
        if (nextStep === 'IN_PROGRESS') {
            setTimeout(() => presentQuestion(0), 1500);
        }
    };

    const presentQuestion = (index: number) => {
        if (index < questions.length) {
            const q = questions[index];
            let questionText = `**Question ${index + 1} (${q.type}):** ${q.question}`;
            if (q.citation?.page_number) {
                questionText += `\n\n*Source: Page ${q.citation.page_number}*`;
            }
            setChatHistory(prev => [...prev, { role: 'assistant', content: questionText, options: q.options, questionId: q.id }]);
        } else {
            setAssessmentStep('COMPLETED');
            setChatHistory(prev => [...prev, { role: 'assistant', content: "You've finished the assessment! Let's see how you did..." }]);
            fetchFinalScore();
        }
    };
    
    const submitAnswer = async (answer: string) => {
        if (!result || isChatLoading) return;
        setIsChatLoading(true);
        const currentQ = questions[currentQuestionIdx];
        
        setChatHistory(prev => [...prev, { role: 'user', content: answer }]);
        
        const submission = new FormData();
        submission.append('question_id', currentQ.id.toString());
        submission.append('hint_requested', "False");
        submission.append('name', userName);
        submission.append('user_id', userId);
        submission.append('answer', answer);

        try {
            const response = await fetch(`http://127.0.0.1:8001/assessment/chatbot/${result.unique_id}/submit`, { method: "POST", body: submission });
            if (!response.ok) throw new Error((await response.json()).detail);
            const feedback = await response.json();

            const feedbackMessage: ChatMessage = {
                role: 'system',
                content: `You scored **${feedback.marks}** marks. The correct answer was: **${feedback.correct_answer}**`,
                isCorrect: feedback.is_correct,
                citation: feedback.citation,
                questionId: currentQ.id,
            };
            setChatHistory(prev => [...prev, feedbackMessage]);
            const nextIdx = currentQuestionIdx + 1;
            setCurrentQuestionIdx(nextIdx);
            setTimeout(() => presentQuestion(nextIdx), 3000);
        } catch (err: any) {
            setChatHistory(prev => [...prev, { role: 'system', content: `Error: ${err.message}` }]);
        } finally {
            setIsChatLoading(false);
            setUserInput('');
        }
    };
    
    const handleHintClick = async (questionId: number) => {
        if (!result || isChatLoading) return;
        setIsChatLoading(true);
        setChatHistory(prev => [...prev, { role: 'user', content: `(Requested a hint for Q${questionId})` }]);
        
        const submission = new FormData();
        submission.append('question_id', String(questionId));
        submission.append('hint_requested', "True");
        submission.append('name', userName);
        submission.append('user_id', userId);

        try {
            const response = await fetch(`http://127.0.0.1:8001/assessment/chatbot/${result.unique_id}/submit`, { method: "POST", body: submission });
            if (!response.ok) throw new Error((await response.json()).detail);
            const feedback = await response.json();
            setChatHistory(prev => [...prev, { role: 'hint', content: feedback.hint }]);
        } catch (err: any) {
            setChatHistory(prev => [...prev, { role: 'system', content: `Error getting hint: ${err.message}` }]);
        } finally {
            setIsChatLoading(false);
        }
    };

    const handleExplainClick = async (questionId: number) => {
        if (isChatLoading || !result) return;
        setIsChatLoading(true);
        console.log(`Requesting explanation for Question ID: ${questionId}`);
        try {
            const response = await fetch(`http://127.0.0.1:8001/assessment/chatbot/${result.unique_id}/explain`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question_id: questionId })
            });
            console.log("Response status from /explain:", response.status);
            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error from /explain endpoint:", errorData);
                throw new Error(errorData.detail || "Failed to fetch explanation.");
            }
            const data = await response.json();
            console.log("Received explanation:", data.explanation);
            setChatHistory(prev => [...prev, { role: 'explanation', content: data.explanation }]);
        } catch (err: any) {
            console.error("Caught error in handleExplainClick:", err);
            setChatHistory(prev => [...prev, { role: 'system', content: `Error fetching explanation: ${err.message}` }]);
        } finally {
            setIsChatLoading(false);
        }
    };
    
    const fetchFinalScore = async () => {
        if (!result) return;
        setIsChatLoading(true);
        try {
            const response = await fetch(`http://127.0.0.1:8001/assessment/chatbot/${result.unique_id}/score?user_id=${userId}`);
            if (!response.ok) throw new Error("Failed to fetch score.");
            const scoreData = await response.json();
            setChatHistory(prev => [...prev, { role: 'assistant', content: `### Your Final Score: ${scoreData.total_score}\n\n**Feedback & Areas for Improvement:**\n\n${scoreData.improvement_areas}` }]);
        } catch (err: any) {
            setChatHistory(prev => [...prev, { role: 'system', content: `Error fetching score: ${err.message}` }]);
        } finally {
            setIsChatLoading(false);
        }
    };

    const handleSendAction = () => {
        if (assessmentStep === 'AWAITING_NAME' || assessmentStep === 'AWAITING_ID') {
            handleInitialInfoSubmit();
        } else if (assessmentStep === 'IN_PROGRESS' && userInput.trim()) {
            submitAnswer(userInput);
        }
    };

    const isInitialPhase = assessmentStep === 'AWAITING_FILE' || assessmentStep === 'GENERATING';

    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={handleDialogClose}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                     <div className="fixed inset-0 bg-black/60" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className="w-full max-w-4xl h-[90vh] transform overflow-hidden rounded-2xl bg-[#1A1A1A] text-white shadow-2xl transition-all flex flex-col">
                                <div className="p-5 border-b border-gray-700 flex justify-between items-center flex-shrink-0">
                                    <Dialog.Title as="h3" className="text-xl font-light flex items-center gap-3"><Sparkles className="text-purple-400"/> Interactive Assessment</Dialog.Title>
                                    <button onClick={handleDialogClose} className="text-gray-400 hover:text-white"><X/></button>
                                </div>
                                
                                {isInitialPhase ? (
                                    <div className="p-8 flex flex-col justify-center items-center h-full text-center">
                                        <p className="text-gray-400 mb-6 max-w-md">Upload a document (PDF, DOCX, PPTX) to begin a personalized assessment powered by AI.</p>
                                        <div onClick={() => fileInputRef.current?.click()} className="w-full max-w-sm h-40 flex flex-col justify-center items-center bg-[#0A0A0A] rounded-lg cursor-pointer border-2 border-dashed border-gray-600 hover:border-purple-400 transition-colors">
                                            <input ref={fileInputRef} id="file-upload" type="file" onChange={handleFileChange} accept=".pdf,.docx,.pptx" className="hidden"/>
                                            {quizFile ? <><File className="mb-2" size={30}/><span>{quizFile.name}</span></> : <><Upload size={30} className="mb-2 text-gray-500"/><span className="text-gray-400">Click to Upload</span></>}
                                        </div>
                                        {error && <div className="text-red-400 mt-4">{error}</div>}
                                        <button onClick={handleGenerateClick} disabled={assessmentStep === 'GENERATING' || !quizFile} className="mt-8 px-10 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
                                            {assessmentStep === 'GENERATING' ? <><div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div><span>Generating...</span></> : <>Start Assessment</>}
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex-grow flex flex-col p-6 overflow-hidden">
                                        <div ref={chatContainerRef} className="flex-grow overflow-y-auto pr-4 space-y-6">
                                            {chatHistory.map((msg, idx) => {
                                                const Icon = msg.role === 'user' ? User : msg.role === 'explanation' ? Brain : Bot;
                                                const bubbleColor = msg.role === 'user' ? 'bg-blue-600' : 'bg-[#282828]';
                                                
                                                if (msg.role === 'hint') {
                                                    return (
                                                        <div key={idx} className="p-3 rounded-lg bg-yellow-900/50 text-yellow-300 flex items-start gap-3">
                                                            <Lightbulb size={18} className="flex-shrink-0 mt-1 text-yellow-400" />
                                                            <div><strong>Hint:</strong> {msg.content}</div>
                                                        </div>
                                                    )
                                                }

                                                if (msg.role === 'system') {
                                                    return (
                                                        <div key={idx} className={`p-3 rounded-lg flex flex-col gap-2 ${msg.isCorrect ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
                                                            <div className="flex items-center gap-2 font-bold">{msg.isCorrect ? <CheckCircle/> : <XCircle/>} {msg.isCorrect ? 'Correct!' : 'Incorrect.'}</div>
                                                            <div dangerouslySetInnerHTML={{ __html: msg.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                                            <button onClick={() => handleExplainClick(msg.questionId!)} disabled={isChatLoading} className="mt-2 text-left text-sm text-blue-400 hover:underline">Why? Click to see explanation.</button>
                                                        </div>
                                                    )
                                                }

                                                return (
                                                <div key={idx} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0"><Icon size={18}/></div>
                                                    <div className={`p-4 rounded-xl max-w-lg ${bubbleColor}`}>
                                                        <div dangerouslySetInnerHTML={{__html: msg.content.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') .replace(/### (.*?)/g, '<h3 class="text-lg font-bold mt-2">$1</h3>')}}/>
                                                        {msg.options && assessmentStep === 'IN_PROGRESS' && (
                                                            <div className="mt-3 flex flex-wrap gap-2">
                                                                {msg.options.map((opt, i) => <button key={i} onClick={() => submitAnswer(opt)} disabled={isChatLoading} className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-sm rounded-lg transition">{opt}</button>)}
                                                            </div>
                                                        )}
                                                         {msg.role === 'assistant' && msg.questionId && <button onClick={() => handleHintClick(msg.questionId!)} disabled={isChatLoading} className="mt-3 flex items-center gap-2 text-sm text-yellow-400 hover:text-yellow-300 transition"><Lightbulb size={16}/> Get a Hint</button>}
                                                    </div>
                                                </div>
                                            )})}
                                             {isChatLoading && <div className="text-purple-400 text-sm self-center animate-pulse">Assistant is thinking...</div>}
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-gray-700 flex-shrink-0">
                                            {assessmentStep === 'COMPLETED' ? (
                                                <div className="p-4 bg-gray-800 rounded-lg text-center">
                                                    <h4 className="font-bold text-lg">Assessment Complete!</h4>
                                                    {annotatedDocPath && (
                                                        <>
                                                            <p className="text-sm text-gray-400 mt-1 mb-3">Download your original document, now highlighted with the source location for each question.</p>
                                                            <a
                                                                href={`http://127.0.0.1:8001/${annotatedDocPath}`}
                                                                download
                                                                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                                                            >
                                                                <Download size={18} />
                                                                Download Annotated File
                                                            </a>
                                                        </>
                                                    )}
                                                </div>
                                            ) : (
                                                <form className="flex gap-4" onSubmit={e => { e.preventDefault(); handleSendAction(); }}>
                                                    <input type="text" value={userInput} onChange={e => setUserInput(e.target.value)} placeholder={assessmentStep === 'IN_PROGRESS' ? "Type your short answer here..." : "Type your response..."} disabled={isChatLoading} className="w-full px-4 py-3 bg-[#282828] rounded-lg border border-transparent focus:border-purple-500 focus:ring-0 transition"/>
                                                    <button type="submit" disabled={!userInput || isChatLoading} className="px-5 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"><Send/></button>
                                                </form>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}