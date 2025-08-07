(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/QuizEditor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "extractTextFromBlocks": ()=>extractTextFromBlocks,
    "getKnowledgeBaseContent": ()=>getKnowledgeBaseContent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pen$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Pen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/clipboard-check.js [app-client] (ecmascript) <export default as ClipboardCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
// Import the BlockNoteEditor component
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlockNoteEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BlockNoteEditor.tsx [app-client] (ecmascript)");
// Import the LearnerQuizView component
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LearnerQuizView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LearnerQuizView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ConfirmationDialog.tsx [app-client] (ecmascript)");
// Import the new Dropdown component
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Dropdown.tsx [app-client] (ecmascript)");
// Import the ScorecardPickerDialog component
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScorecardPickerDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScorecardPickerDialog.tsx [app-client] (ecmascript)");
// Import the new Scorecard component
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Scorecard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Scorecard.tsx [app-client] (ecmascript)");
// Import dropdown options
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dropdownOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dropdownOptions.ts [app-client] (ecmascript)");
// Add import for LearningMaterialLinker
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LearningMaterialLinker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LearningMaterialLinker.tsx [app-client] (ecmascript)");
// Import Toast component
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Toast.tsx [app-client] (ecmascript)");
// Import the PublishConfirmationDialog component
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PublishConfirmationDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PublishConfirmationDialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Default configuration for new questions
const defaultQuestionConfig = {
    inputType: 'text',
    responseType: 'chat',
    questionType: 'objective',
    knowledgeBaseBlocks: [],
    linkedMaterialIds: [],
    title: ''
};
const extractTextFromBlocks = (blocks)=>{
    if (!blocks || blocks.length === 0) return "";
    return blocks.map((block)=>{
        // Handle different block types
        if (block.type === "paragraph") {
            // For paragraph blocks, extract text content
            return block.content ? block.content.map((item)=>typeof item === 'string' ? item : item.text || "").join("") : "";
        } else if (block.type === "heading") {
            // For heading blocks, extract text content
            return block.content ? block.content.map((item)=>typeof item === 'string' ? item : item.text || "").join("") : "";
        } else if (block.type === "bulletListItem" || block.type === "numberedListItem" || block.type === "checkListItem") {
            // For list items, extract text content
            return block.content ? block.content.map((item)=>typeof item === 'string' ? item : item.text || "").join("") : "";
        } else if (block.type === "codeBlock") {
            // For code blocks, extract text content from content array
            return block.content ? block.content.map((item)=>typeof item === 'string' ? item : item.text || "").join("") : "";
        } else if (block.text) {
            // Fallback for blocks with direct text property
            return block.text;
        }
        return "";
    }).join("\n").trim();
};
const getKnowledgeBaseContent = (config)=>{
    // Check for knowledgeBaseBlocks
    const knowledgeBaseBlocks = config.knowledgeBaseBlocks || [];
    const linkedMaterialIds = config.linkedMaterialIds || [];
    // Extract text from blocks to check if they contain actual content
    const hasNonEmptyBlocks = knowledgeBaseBlocks.length > 0 && extractTextFromBlocks(knowledgeBaseBlocks).trim().length > 0;
    // Check if there are any linked materials
    const hasLinkedMaterials = linkedMaterialIds.length > 0;
    // If we have either valid blocks or linked materials, return the knowledge base data
    if (hasNonEmptyBlocks || hasLinkedMaterials) {
        return {
            blocks: hasNonEmptyBlocks ? knowledgeBaseBlocks : [],
            linkedMaterialIds: hasLinkedMaterials ? linkedMaterialIds : []
        };
    }
    // If no valid knowledge base content, return null
    return null;
};
const QuizEditor = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s((param, ref)=>{
    let { initialQuestions = [], onChange, isDarkMode = true, className = "", isPreviewMode = false, readOnly = false, taskId, status = 'draft', onPublishSuccess, showPublishConfirmation = false, onPublishCancel, isEditMode = false, onSaveSuccess, taskType = 'quiz', currentQuestionId, onQuestionChange, onSubmitAnswer, userId, schoolId, onValidationError, courseId, scheduledPublishAt = null, onQuestionChangeWithUnsavedScorecardChanges } = param;
    var _currentQuestion_config_linkedMaterialIds, _currentQuestion_config, _currentQuestion_config_knowledgeBaseBlocks, _currentQuestion_config1, _currentQuestion_config2, _currentQuestion_config3, _currentQuestionConfig_scorecardData, _currentQuestionConfig_scorecardData1, _currentQuestionConfig_scorecardData2, _currentQuestionConfig_scorecardData3, _currentQuestionConfig_scorecardData4, _originalScorecardData_get, _currentQuestionConfig_scorecardData5, _originalScorecardData_get1;
    _s();
    // For published quizzes: data is always fetched from the API
    // For draft quizzes: always start with empty questions
    // initialQuestions prop is no longer used
    // Initialize questions state - always start with empty array
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Store the original data for cancel functionality
    const originalQuestionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Add a ref to store the original title
    const originalTitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    // Add ref to store pending action when unsaved scorecard changes are detected
    const pendingScorecardActionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Add loading state for fetching questions
    const [isLoadingQuestions, setIsLoadingQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Track if data has been fetched to prevent infinite loops
    const [hasFetchedData, setHasFetchedData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add state for school scorecards
    const [schoolScorecards, setSchoolScorecards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Add loading state for fetching scorecards
    const [isLoadingScorecards, setIsLoadingScorecards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add state to track original scorecard data for change detection
    const [originalScorecardData, setOriginalScorecardData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Map());
    // Add ref to track if we're currently saving a scorecard
    const isSavingScorecardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Add toast state
    const [showToast, setShowToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toastTitle, setToastTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [toastMessage, setToastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [toastEmoji, setToastEmoji] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("🚀");
    // Add useEffect to automatically hide toast after 5 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuizEditor.useEffect": ()=>{
            if (showToast) {
                const timer = setTimeout({
                    "QuizEditor.useEffect.timer": ()=>{
                        setShowToast(false);
                    }
                }["QuizEditor.useEffect.timer"], 5000);
                // Cleanup the timer when component unmounts or showToast changes
                return ({
                    "QuizEditor.useEffect": ()=>clearTimeout(timer)
                })["QuizEditor.useEffect"];
            }
        }
    }["QuizEditor.useEffect"], [
        showToast
    ]);
    // Make sure we reset questions when component mounts for draft quizzes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuizEditor.useEffect": ()=>{
            if (status === 'draft') {
                setQuestions([]);
            }
        }
    }["QuizEditor.useEffect"], [
        status
    ]);
    // Fetch school scorecards when component mounts for draft quizzes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuizEditor.useEffect": ()=>{
            const fetchSchoolScorecards = {
                "QuizEditor.useEffect.fetchSchoolScorecards": async ()=>{
                    if (schoolId) {
                        setIsLoadingScorecards(true);
                        try {
                            const response = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/scorecards/?org_id=").concat(schoolId));
                            if (!response.ok) {
                                throw new Error('Failed to fetch school scorecards');
                            }
                            const data = await response.json();
                            // Transform the API response to ScorecardTemplate format
                            if (data && Array.isArray(data)) {
                                const transformedScorecards = data.map({
                                    "QuizEditor.useEffect.fetchSchoolScorecards.transformedScorecards": (scorecard)=>({
                                            id: scorecard.id,
                                            name: scorecard.title,
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                size: 16,
                                                className: "text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuizEditor.tsx",
                                                lineNumber: 216,
                                                columnNumber: 35
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            is_template: false,
                                            new: scorecard.status === 'draft',
                                            criteria: scorecard.criteria.map({
                                                "QuizEditor.useEffect.fetchSchoolScorecards.transformedScorecards": (criterion)=>({
                                                        name: criterion.name,
                                                        description: criterion.description,
                                                        maxScore: criterion.max_score,
                                                        minScore: criterion.min_score,
                                                        passScore: criterion.pass_score
                                                    })
                                            }["QuizEditor.useEffect.fetchSchoolScorecards.transformedScorecards"]) || []
                                        })
                                }["QuizEditor.useEffect.fetchSchoolScorecards.transformedScorecards"]);
                                setSchoolScorecards(transformedScorecards);
                                // Now that we have the scorecards, fetch the questions
                                await fetchQuestions(transformedScorecards);
                            } else {
                                // If no scorecard data, fetch questions with empty scorecards
                                await fetchQuestions();
                            }
                        } catch (error) {
                            console.error('Error fetching school scorecards:', error);
                        } finally{
                            setIsLoadingScorecards(false);
                        }
                    } else {
                        // If no schoolId, just fetch questions with empty scorecards
                        await fetchQuestions();
                    }
                }
            }["QuizEditor.useEffect.fetchSchoolScorecards"];
            // Define the fetchQuestions function that takes scorecards as a parameter
            const fetchQuestions = {
                "QuizEditor.useEffect.fetchQuestions": async function() {
                    let availableScorecards = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                    // Only fetch if we have a taskId, the status is published, and we haven't already fetched
                    if (taskId && !hasFetchedData) {
                        try {
                            const response = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/tasks/").concat(taskId));
                            if (!response.ok) {
                                throw new Error('Failed to fetch task details');
                            }
                            const data = await response.json();
                            // Update the questions with the fetched data
                            if (data && data.questions && data.questions.length > 0) {
                                const updatedQuestions = data.questions.map({
                                    "QuizEditor.useEffect.fetchQuestions.updatedQuestions": (question)=>{
                                        // Map API question type to local questionType
                                        const questionType = question.type;
                                        // Use answer blocks directly from the API if available,
                                        // otherwise create a default paragraph block
                                        const correctAnswer = question.answer ? question.answer : [
                                            {
                                                type: "paragraph",
                                                content: [
                                                    {
                                                        type: "text",
                                                        text: question.answer || "",
                                                        styles: {}
                                                    }
                                                ]
                                            }
                                        ];
                                        // Handle scorecard data if scorecard_id is present
                                        let scorecardData = undefined;
                                        if (question.scorecard_id && availableScorecards.length > 0) {
                                            // Find matching scorecard from school scorecards
                                            const matchingScorecard = availableScorecards.find({
                                                "QuizEditor.useEffect.fetchQuestions.updatedQuestions.matchingScorecard": (sc)=>parseInt(sc.id) === question.scorecard_id
                                            }["QuizEditor.useEffect.fetchQuestions.updatedQuestions.matchingScorecard"]);
                                            if (matchingScorecard) {
                                                scorecardData = {
                                                    id: matchingScorecard.id,
                                                    name: matchingScorecard.name,
                                                    new: matchingScorecard.new,
                                                    criteria: matchingScorecard.criteria.map({
                                                        "QuizEditor.useEffect.fetchQuestions.updatedQuestions": (criterion)=>({
                                                                ...criterion,
                                                                minScore: criterion.minScore
                                                            })
                                                    }["QuizEditor.useEffect.fetchQuestions.updatedQuestions"])
                                                };
                                            }
                                        }
                                        // Extract knowledgeBaseBlocks and linkedMaterialIds from context if it exists
                                        let knowledgeBaseBlocks = [];
                                        let linkedMaterialIds = [];
                                        if (question.context) {
                                            // Extract blocks for knowledge base if they exist
                                            if (question.context.blocks && Array.isArray(question.context.blocks)) {
                                                knowledgeBaseBlocks = question.context.blocks;
                                            }
                                            // Extract linkedMaterialIds if they exist
                                            if (question.context.linkedMaterialIds && Array.isArray(question.context.linkedMaterialIds)) {
                                                linkedMaterialIds = question.context.linkedMaterialIds;
                                            }
                                        }
                                        return {
                                            id: String(question.id),
                                            content: question.blocks || [],
                                            config: {
                                                inputType: question.input_type || 'text',
                                                responseType: question.response_type,
                                                correctAnswer: correctAnswer,
                                                questionType: questionType,
                                                scorecardData: scorecardData,
                                                knowledgeBaseBlocks: knowledgeBaseBlocks,
                                                linkedMaterialIds: linkedMaterialIds,
                                                codingLanguages: question.coding_languages || [],
                                                title: question.title
                                            }
                                        };
                                    }
                                }["QuizEditor.useEffect.fetchQuestions.updatedQuestions"]);
                                // Update questions state
                                setQuestions(updatedQuestions);
                                // Store original scorecard data for change detection
                                const originalData = new Map();
                                updatedQuestions.forEach({
                                    "QuizEditor.useEffect.fetchQuestions": (question)=>{
                                        if (question.config.scorecardData) {
                                            // Store original data for all scorecards fetched from API (including draft ones)
                                            const scorecardId = question.config.scorecardData.id;
                                            if (!originalData.has(scorecardId)) {
                                                originalData.set(scorecardId, {
                                                    name: question.config.scorecardData.name,
                                                    criteria: JSON.parse(JSON.stringify(question.config.scorecardData.criteria))
                                                });
                                            }
                                        }
                                    }
                                }["QuizEditor.useEffect.fetchQuestions"]);
                                setOriginalScorecardData(originalData);
                                // Notify parent component about the update, but only once and after our state is updated
                                if (onChange) {
                                    // Use setTimeout to break the current render cycle
                                    setTimeout({
                                        "QuizEditor.useEffect.fetchQuestions": ()=>{
                                            onChange(updatedQuestions);
                                        }
                                    }["QuizEditor.useEffect.fetchQuestions"], 0);
                                }
                                // Store the original data for cancel operation
                                originalQuestionsRef.current = JSON.parse(JSON.stringify(updatedQuestions));
                            }
                            // Mark that we've fetched the data - do this regardless of whether questions were found
                            setHasFetchedData(true);
                        } catch (error) {
                            console.error('Error fetching quiz questions:', error);
                            // Even on error, mark as fetched to prevent infinite retry loops
                            setHasFetchedData(true);
                        } finally{
                            setIsLoadingQuestions(false);
                        }
                    } else {
                        setIsLoadingQuestions(false);
                    }
                }
            }["QuizEditor.useEffect.fetchQuestions"];
            fetchSchoolScorecards();
        }
    }["QuizEditor.useEffect"], [
        taskId,
        status
    ]);
    // Reset hasFetchedData when taskId changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuizEditor.useEffect": ()=>{
            setHasFetchedData(false);
        }
    }["QuizEditor.useEffect"], [
        taskId
    ]);
    // Cleanup effect - clear questions when component unmounts or taskId changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuizEditor.useEffect": ()=>{
            // Return cleanup function
            return ({
                "QuizEditor.useEffect": ()=>{
                    // Clear questions state and refs when component unmounts
                    setQuestions([]);
                    originalQuestionsRef.current = [];
                }
            })["QuizEditor.useEffect"];
        }
    }["QuizEditor.useEffect"], [
        taskId
    ]);
    // Store the original title when it changes in the dialog (for cancel operation)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuizEditor.useEffect": ()=>{
            var _document_querySelector_parentElement, _document_querySelector;
            const dialogTitleElement = (_document_querySelector = document.querySelector('.dialog-content-editor')) === null || _document_querySelector === void 0 ? void 0 : (_document_querySelector_parentElement = _document_querySelector.parentElement) === null || _document_querySelector_parentElement === void 0 ? void 0 : _document_querySelector_parentElement.querySelector('h2');
            if (dialogTitleElement) {
                originalTitleRef.current = dialogTitleElement.textContent || "";
            }
        }
    }["QuizEditor.useEffect"], []);
    // Current question index
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Internal state to track the current question ID for preview mode
    const [activeQuestionId, setActiveQuestionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "QuizEditor.useState": ()=>{
            var _questions_;
            // Initialize with currentQuestionId if provided, otherwise use first question id if questions exist
            if (currentQuestionId) {
                return currentQuestionId;
            }
            return questions.length > 0 ? (_questions_ = questions[0]) === null || _questions_ === void 0 ? void 0 : _questions_.id : undefined;
        }
    }["QuizEditor.useState"]);
    // Update current question index when currentQuestionId changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuizEditor.useEffect": ()=>{
            if (currentQuestionId && questions.length > 0) {
                const index = questions.findIndex({
                    "QuizEditor.useEffect.index": (q)=>q.id === currentQuestionId
                }["QuizEditor.useEffect.index"]);
                if (index !== -1) {
                    setCurrentQuestionIndex(index);
                }
            }
        }
    }["QuizEditor.useEffect"], [
        currentQuestionId,
        questions
    ]);
    // Update activeQuestionId when currentQuestionIndex changes in preview mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuizEditor.useEffect": ()=>{
            if (questions.length > 0 && currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
                const newActiveId = questions[currentQuestionIndex].id;
                setActiveQuestionId(newActiveId);
            }
        }
    }["QuizEditor.useEffect"], [
        currentQuestionIndex,
        questions
    ]);
    // State to track if a new question was just added (for animation)
    const [newQuestionAdded, setNewQuestionAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // State for delete confirmation
    const [showDeleteConfirm, setShowDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add state for scorecard delete confirmation
    const [showScorecardDeleteConfirm, setShowScorecardDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add state to track if scorecard is used by multiple questions
    const [scorecardUsedByMultiple, setScorecardUsedByMultiple] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add state for scorecard save confirmation
    const [showScorecardSaveConfirm, setShowScorecardSaveConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // State for tracking publishing status
    const [isPublishing, setIsPublishing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // State for tracking publishing errors
    const [publishError, setPublishError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Reference to the current BlockNote editor instance
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Use ref to track the last edit to prevent unnecessary updates
    const lastContentUpdateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    // Reference to the correct answer editor
    const correctAnswerEditorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Reference to the knowledge base editor
    const knowledgeBaseEditorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // State for scorecard templates dialog
    const [showScorecardDialog, setShowScorecardDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scorecardDialogPosition, setScorecardDialogPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const scorecardButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // We don't need the hasScorecard state anymore since we're using currentQuestionConfig.scorecardData
    // If needed for the scorecard title, we'll keep that state
    const [scorecardTitle, setScorecardTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Scorecard");
    // Reference to the scorecard component
    const scorecardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // State for tracking active tab (question or answer)
    const [activeEditorTab, setActiveEditorTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('question');
    // State to track which field is being highlighted for validation errors
    const [highlightedField, setHighlightedField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // State to track if the question count should be highlighted (after adding a new question)
    const [questionCountHighlighted, setQuestionCountHighlighted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add validation utility functions to reduce duplication
    // These functions can validate both the current question and any question by index
    /**
     * Highlights a field (question or answer) to draw attention to a validation error
     * @param field The field to highlight
     */ const highlightField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[highlightField]": (field)=>{
            // Set the highlighted field
            setHighlightedField(field);
            // Clear the highlight after 4 seconds
            setTimeout({
                "QuizEditor.useCallback[highlightField]": ()=>{
                    setHighlightedField(null);
                }
            }["QuizEditor.useCallback[highlightField]"], 4000);
        }
    }["QuizEditor.useCallback[highlightField]"], []);
    /**
     * Validates if question content is non-empty
     * @param content The content blocks to validate
     * @returns True if content has non-empty text or contains media blocks, false otherwise
     */ const validateQuestionContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[validateQuestionContent]": (content)=>{
            if (!content || content.length === 0) {
                return false;
            }
            // Check for text content
            const textContent = extractTextFromBlocks(content);
            if (textContent.trim().length > 0) {
                return true;
            }
            // If no text content, check if there are any media blocks (image, audio, video)
            const hasMediaBlocks = content.some({
                "QuizEditor.useCallback[validateQuestionContent].hasMediaBlocks": (block)=>block.type === 'image' || block.type === 'audio' || block.type === 'video'
            }["QuizEditor.useCallback[validateQuestionContent].hasMediaBlocks"]);
            return hasMediaBlocks;
        }
    }["QuizEditor.useCallback[validateQuestionContent]"], []);
    /**
     * Validates if a question has a non-empty correct answer
     * @param questionConfig The question configuration containing the answer
     * @returns True if correct answer exists and is non-empty, false otherwise
     */ const validateCorrectAnswer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[validateCorrectAnswer]": (questionConfig)=>{
            if (questionConfig.correctAnswer && questionConfig.correctAnswer.length > 0) {
                const textContent = extractTextFromBlocks(questionConfig.correctAnswer);
                return textContent.trim().length > 0;
            }
            return false;
        }
    }["QuizEditor.useCallback[validateCorrectAnswer]"], []);
    /**
     * Validates if a question has a valid scorecard attached
     * @param questionConfig The question configuration containing the scorecard data
     * @returns True if a valid scorecard with criteria exists, false otherwise
     */ const validateScorecard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[validateScorecard]": (questionConfig)=>{
            return !!(questionConfig.scorecardData && questionConfig.scorecardData.criteria && questionConfig.scorecardData.criteria.length > 0);
        }
    }["QuizEditor.useCallback[validateScorecard]"], []);
    /**
     * Validates scorecard criteria for empty names and descriptions
     * @param scorecard The scorecard data to validate
     * @param callbacks Object containing callback functions for validation actions
     * @returns True if all criteria are valid, false if any validation fails
     */ const validateScorecardCriteria = (scorecard, callbacks)=>{
        // If no scorecard or not a user-created scorecard (new), return true (valid)
        if (!scorecard) {
            return true;
        }
        const { setActiveTab, showErrorMessage, questionIndex } = callbacks;
        // Check each criterion for empty name or description
        for(let i = 0; i < scorecard.criteria.length; i++){
            const criterion = scorecard.criteria[i];
            // Check for empty name
            if (!criterion.name || criterion.name.trim() === '') {
                // Switch to scorecard tab first
                setActiveTab('scorecard');
                // Use a self-invoking function for delayed highlight and error message
                (function(index) {
                    setTimeout(()=>{
                        // Create event to highlight the problematic row
                        const event = new CustomEvent('highlight-criterion', {
                            detail: {
                                index,
                                field: 'name'
                            }
                        });
                        document.dispatchEvent(event);
                        // Show error message if callback is provided
                        if (showErrorMessage) {
                            const suffix = questionIndex !== undefined ? " for question ".concat(questionIndex + 1) : '';
                            showErrorMessage("Empty Scorecard Parameter", "Please provide a name for parameter ".concat(index + 1, " in the scorecard").concat(suffix), "🚫");
                        }
                    }, 250);
                })(i);
                return false;
            }
            // Check for empty description
            if (!criterion.description || criterion.description.trim() === '') {
                // Switch to scorecard tab first
                setActiveTab('scorecard');
                // Use a self-invoking function for delayed highlight and error message
                (function(index, name) {
                    setTimeout(()=>{
                        // Create event to highlight the problematic row
                        const event = new CustomEvent('highlight-criterion', {
                            detail: {
                                index,
                                field: 'description'
                            }
                        });
                        document.dispatchEvent(event);
                        // Show error message if callback is provided
                        if (showErrorMessage) {
                            const parameterName = name || "parameter ".concat(index + 1);
                            const suffix = questionIndex !== undefined ? " for question ".concat(questionIndex + 1) : '';
                            showErrorMessage("Empty Scorecard Parameter", "Please provide a description for ".concat(parameterName, " in the scorecard").concat(suffix), "🚫");
                        }
                    }, 250);
                })(i, criterion.name);
                return false;
            }
        }
        // If all criteria passed validation
        return true;
    };
    /**
     * Validates all questions in the quiz and navigates to the first invalid question
     * @returns True if all questions are valid, false otherwise
     */ const validateAllQuestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[validateAllQuestions]": ()=>{
            // Check if there are any questions
            if (questions.length === 0) {
                if (onValidationError) {
                    onValidationError("No Questions", "Please add at least one question before publishing");
                }
                return false;
            }
            // Validate all questions
            for(let i = 0; i < questions.length; i++){
                const question = questions[i];
                // Check if question has content
                if (!validateQuestionContent(question.content)) {
                    // Navigate to the question with missing content
                    setCurrentQuestionIndex(i);
                    setActiveEditorTab('question');
                    // Highlight the question field
                    highlightField('question');
                    // Notify parent about validation error
                    if (onValidationError) {
                        onValidationError("Empty Question", "Question ".concat(i + 1, " is empty. Please add details to the question"));
                    }
                    return false;
                }
                // For coding questions, check if coding languages are set
                if (question.config.inputType === 'code') {
                    if (!question.config.codingLanguages || !Array.isArray(question.config.codingLanguages) || question.config.codingLanguages.length === 0) {
                        // Navigate to the question with missing coding languages
                        setCurrentQuestionIndex(i);
                        // Highlight the coding language field
                        highlightField('codingLanguage');
                        // Notify parent about validation error
                        if (onValidationError) {
                            onValidationError("Missing Coding Languages", "Question ".concat(i + 1, " does not have any programming language selected"));
                        }
                        return false;
                    } else {
                        console.log("question.config.codingLanguages is not empty");
                    }
                }
                // For objective questions, check if correct answer is set
                if (question.config.questionType === 'objective') {
                    if (!validateCorrectAnswer(question.config)) {
                        // Navigate to the question with missing answer
                        setCurrentQuestionIndex(i);
                        setActiveEditorTab('answer');
                        // Highlight the answer field
                        highlightField('answer');
                        // Notify parent about validation error
                        if (onValidationError) {
                            onValidationError("Empty Correct Answer", "Question ".concat(i + 1, " has no correct answer. Please add a correct answer"));
                        }
                        return false;
                    }
                }
                // For subjective questions, check if scorecard is set
                if (question.config.questionType === 'subjective') {
                    if (!validateScorecard(question.config)) {
                        // Navigate to the question with missing scorecard
                        setCurrentQuestionIndex(i);
                        setActiveEditorTab('scorecard');
                        // Notify parent about validation error
                        if (onValidationError) {
                            onValidationError("Missing Scorecard", "Question ".concat(i + 1, " has no scorecard. Please add a scorecard for evaluating the answer"));
                        }
                        return false;
                    }
                    // Check for empty criterion names or descriptions in the scorecard
                    if (question.config.scorecardData) {
                        // Navigate to the question with the problematic scorecard first
                        setCurrentQuestionIndex(i);
                        // Use the shared validation function for scorecards
                        const isValid = validateScorecardCriteria(question.config.scorecardData, {
                            setActiveTab: setActiveEditorTab,
                            showErrorMessage: onValidationError,
                            questionIndex: i
                        });
                        if (!isValid) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }
    }["QuizEditor.useCallback[validateAllQuestions]"], [
        questions,
        onValidationError,
        validateQuestionContent,
        validateCorrectAnswer,
        validateScorecard,
        setCurrentQuestionIndex,
        setActiveEditorTab,
        validateScorecardCriteria,
        highlightField
    ]);
    // Function to handle opening the scorecard templates dialog
    const handleOpenScorecardDialog = ()=>{
        const buttonElement = scorecardButtonRef.current;
        if (buttonElement) {
            const rect = buttonElement.getBoundingClientRect();
            // Approximate height of the dialog (templates + header)
            const estimatedDialogHeight = 325;
            // Position the bottom of the dialog above the button with some spacing
            setScorecardDialogPosition({
                top: Math.max(10, schoolScorecards.length > 0 ? rect.top - estimatedDialogHeight - 80 : rect.top - estimatedDialogHeight - 10),
                left: Math.max(10, rect.left - 120) // Center horizontally but ensure it's not off-screen
            });
            setShowScorecardDialog(true);
        }
    };
    // Add a reusable function for creating scorecards
    const createScorecard = async (title, criteria)=>{
        if (!schoolId) {
            throw new Error('School ID is required to create scorecard');
        }
        const response = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/scorecards/"), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                org_id: schoolId,
                criteria: criteria.map((criterion)=>({
                        name: criterion.name,
                        description: criterion.description,
                        min_score: criterion.minScore,
                        max_score: criterion.maxScore,
                        pass_score: criterion.passScore
                    }))
            })
        });
        if (!response.ok) {
            throw new Error("Failed to create scorecard: ".concat(response.status));
        }
        return await response.json();
    };
    // Function to handle creating a new scorecard
    const handleCreateNewScorecard = async ()=>{
        setShowScorecardDialog(false);
        const newScorecardTitle = "New Scorecard";
        // Set the scorecard title
        setScorecardTitle(newScorecardTitle);
        try {
            // Use the reusable function to create scorecard
            const createdScorecard = await createScorecard(newScorecardTitle, [
                {
                    name: '',
                    description: '',
                    minScore: 1,
                    maxScore: 5,
                    passScore: 3
                }
            ]);
            // Create scorecard data using the backend ID
            const newScorecardData = {
                id: createdScorecard.id,
                name: createdScorecard.title,
                new: true,
                is_template: false,
                criteria: [
                    {
                        name: '',
                        description: '',
                        minScore: 1,
                        maxScore: 5,
                        passScore: 3
                    }
                ]
            };
            // Add the new scorecard to the question's config
            handleConfigChange({
                scorecardData: newScorecardData
            });
            // Update school scorecards state with new scorecard
            const updatedScorecards = [
                ...schoolScorecards,
                newScorecardData
            ];
            setSchoolScorecards(updatedScorecards);
            // Add the new scorecard to originalScorecardData as the baseline for change detection
            const updatedOriginalData = new Map(originalScorecardData);
            updatedOriginalData.set(newScorecardData.id, {
                name: newScorecardData.name,
                criteria: JSON.parse(JSON.stringify(newScorecardData.criteria))
            });
            setOriginalScorecardData(updatedOriginalData);
            // Switch to the scorecard tab
            setActiveEditorTab('scorecard');
            // Focus on the scorecard title after a short delay to allow rendering
            setTimeout(()=>{
                var _scorecardRef_current;
                (_scorecardRef_current = scorecardRef.current) === null || _scorecardRef_current === void 0 ? void 0 : _scorecardRef_current.focusName();
            }, 100);
        } catch (error) {
            console.error('Error creating scorecard:', error);
            // Show error toast
            setToastTitle("Creation Failed");
            setToastMessage("Failed to create scorecard. Please try again.");
            setToastEmoji("❌");
            setShowToast(true);
        }
    };
    // Function to handle selecting a scorecard template
    const handleSelectScorecardTemplate = async (template)=>{
        setShowScorecardDialog(false);
        // Set the scorecard title
        setScorecardTitle(template.name || "Scorecard Template");
        let scorecard;
        if (template.is_template) {
            // Creating from a hardcoded template - use the reusable function
            try {
                const createdScorecard = await createScorecard(template.name, template.criteria);
                // Use the backend ID for the new scorecard
                scorecard = {
                    id: createdScorecard.id,
                    name: createdScorecard.title,
                    new: true,
                    is_template: false,
                    criteria: template.criteria
                };
                // Update school scorecards state with new scorecard
                const updatedScorecards = [
                    ...schoolScorecards,
                    scorecard
                ];
                setSchoolScorecards(updatedScorecards);
            } catch (error) {
                console.error('Error creating scorecard from template:', error);
                // Show error toast
                setToastTitle("Creation Failed");
                setToastMessage("Failed to create scorecard from template. Please try again.");
                setToastEmoji("❌");
                setShowToast(true);
                return;
            }
        } else {
            // one of the user generated scorecards - could be both published scorecards or newly created scorecards in this session itself
            scorecard = {
                id: template.id,
                name: template.name,
                new: template.new,
                is_template: false,
                criteria: template.criteria
            };
        }
        // Add the new scorecard to originalScorecardData as the baseline for change detection
        const updatedOriginalData = new Map(originalScorecardData);
        updatedOriginalData.set(scorecard.id, {
            name: scorecard.name,
            criteria: JSON.parse(JSON.stringify(scorecard.criteria))
        });
        setOriginalScorecardData(updatedOriginalData);
        // Add the scorecard data to the question's config
        handleConfigChange({
            scorecardData: scorecard
        });
        // Switch to the scorecard tab
        setActiveEditorTab('scorecard');
        // Focus on the scorecard title after a short delay to allow rendering
        if (scorecard.new) {
            setTimeout(()=>{
                var _scorecardRef_current;
                (_scorecardRef_current = scorecardRef.current) === null || _scorecardRef_current === void 0 ? void 0 : _scorecardRef_current.focusName();
            }, 100);
        }
    };
    // Function to set the editor reference
    const setEditorInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[setEditorInstance]": (editor)=>{
            editorRef.current = editor;
        }
    }["QuizEditor.useCallback[setEditorInstance]"], []);
    // Memoize the current question content and config to prevent unnecessary re-renders
    const currentQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuizEditor.useMemo[currentQuestion]": ()=>questions[currentQuestionIndex] || {
                content: [],
                config: defaultQuestionConfig
            }
    }["QuizEditor.useMemo[currentQuestion]"], [
        questions,
        currentQuestionIndex
    ]);
    const currentQuestionContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuizEditor.useMemo[currentQuestionContent]": ()=>currentQuestion.content || []
    }["QuizEditor.useMemo[currentQuestionContent]"], [
        currentQuestion
    ]);
    const currentQuestionConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuizEditor.useMemo[currentQuestionConfig]": ()=>currentQuestion.config || defaultQuestionConfig
    }["QuizEditor.useMemo[currentQuestionConfig]"], [
        currentQuestion
    ]);
    // Function to set the correct answer editor reference
    const setCorrectAnswerEditorInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[setCorrectAnswerEditorInstance]": (editor)=>{
            correctAnswerEditorRef.current = editor;
        }
    }["QuizEditor.useCallback[setCorrectAnswerEditorInstance]"], []);
    // Function to set the knowledge base editor reference
    const setKnowledgeBaseEditorInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[setKnowledgeBaseEditorInstance]": (editor)=>{
            knowledgeBaseEditorRef.current = editor;
        }
    }["QuizEditor.useCallback[setKnowledgeBaseEditorInstance]"], []);
    // Handle content change for the current question - use useCallback to memoize
    const handleQuestionContentChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[handleQuestionContentChange]": (content)=>{
            if (questions.length === 0) return;
            // Simply update the content without all the complexity
            const updatedQuestions = [
                ...questions
            ];
            updatedQuestions[currentQuestionIndex] = {
                ...updatedQuestions[currentQuestionIndex],
                content
            };
            // Update state
            setQuestions(updatedQuestions);
            // Call onChange callback if provided
            if (onChange) {
                onChange(updatedQuestions);
            }
        }
    }["QuizEditor.useCallback[handleQuestionContentChange]"], [
        questions,
        currentQuestionIndex,
        onChange
    ]);
    // Handle correct answer content change
    const handleCorrectAnswerChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[handleCorrectAnswerChange]": (content)=>{
            if (questions.length === 0) return;
            // Store blocks but don't extract text on every change
            const updatedQuestions = [
                ...questions
            ];
            updatedQuestions[currentQuestionIndex] = {
                ...updatedQuestions[currentQuestionIndex],
                config: {
                    ...updatedQuestions[currentQuestionIndex].config,
                    correctAnswer: content
                }
            };
            setQuestions(updatedQuestions);
            if (onChange) {
                onChange(updatedQuestions);
            }
        }
    }["QuizEditor.useCallback[handleCorrectAnswerChange]"], [
        questions,
        currentQuestionIndex,
        onChange
    ]);
    // Handle configuration change for the current question
    const handleConfigChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[handleConfigChange]": (configUpdate, options)=>{
            if (questions.length === 0) return;
            const updatedQuestions = [
                ...questions
            ];
            updatedQuestions[currentQuestionIndex] = {
                ...updatedQuestions[currentQuestionIndex],
                config: {
                    ...updatedQuestions[currentQuestionIndex].config,
                    ...configUpdate
                }
            };
            // If updateTemplate flag is true and we have a newQuestionType, update the template content
            if ((options === null || options === void 0 ? void 0 : options.updateTemplate) && options.newQuestionType && options.newInputType && status === 'draft') {
                const currentContent = updatedQuestions[currentQuestionIndex].content || [];
                // Check if any block has an ID (indicating user modification)
                const hasUserModifiedContent = currentContent.some({
                    "QuizEditor.useCallback[handleConfigChange].hasUserModifiedContent": (block)=>'id' in block
                }["QuizEditor.useCallback[handleConfigChange].hasUserModifiedContent"]);
                if (!hasUserModifiedContent) {
                    // Generate new template blocks based on the new question type
                    const newTemplateContent = getQuestionTemplateBlocks(options.newQuestionType, options.newInputType);
                    // Update the content with the new template
                    updatedQuestions[currentQuestionIndex].content = newTemplateContent;
                }
            }
            setQuestions(updatedQuestions);
            if (onChange) {
                onChange(updatedQuestions);
            }
        }
    }["QuizEditor.useCallback[handleConfigChange]"], [
        questions,
        currentQuestionIndex,
        onChange,
        status
    ]);
    const removeScorecardFromSchoolScoreboards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[removeScorecardFromSchoolScoreboards]": ()=>{
            let scorecardForQuestion = questions[currentQuestionIndex].config.scorecardData;
            if (!scorecardForQuestion) {
                return;
            }
            // Check if this scorecard is used by multiple questions
            // const questionsUsingThisScorecard = questions.filter(q =>
            //     q.config.scorecardData && q.config.scorecardData.id === scorecardForQuestion.id
            // );
            // const isUsedByMultiple = questionsUsingThisScorecard.length > 1;
            let updatedQuestions;
            // if (isUsedByMultiple) {
            // Only remove from current question without affecting others
            updatedQuestions = [
                ...questions
            ];
            updatedQuestions[currentQuestionIndex] = {
                ...updatedQuestions[currentQuestionIndex],
                config: {
                    ...updatedQuestions[currentQuestionIndex].config,
                    scorecardData: undefined
                }
            };
            setQuestions(updatedQuestions);
            // }
            // {
            //     // Original behavior: remove from all questions and schoolScorecards if new
            //     if (scorecardForQuestion && scorecardForQuestion.new) {
            //         const updatedScorecards = schoolScorecards.filter(scorecard => scorecard.id !== scorecardForQuestion.id);
            //         setSchoolScorecards(updatedScorecards);
            //     }
            //     updatedQuestions = [...questions];
            //     for (let i = 0; i < updatedQuestions.length; i++) {
            //         if (updatedQuestions[i].config.scorecardData && updatedQuestions[i].config.scorecardData?.id === scorecardForQuestion.id) {
            //             updatedQuestions[i].config.scorecardData = undefined;
            //         }
            //     }
            //     setQuestions(updatedQuestions);
            // }
            if (onChange) {
                onChange(updatedQuestions);
            }
        }
    }["QuizEditor.useCallback[removeScorecardFromSchoolScoreboards]"], [
        questions,
        currentQuestionIndex,
        schoolScorecards,
        onChange
    ]);
    // Function to get template blocks based on question type
    const getQuestionTemplateBlocks = (questionType, inputType)=>{
        // Common blocks that appear in all templates
        const commonBlocks = [
            {
                type: "heading",
                props: {
                    level: 2
                },
                content: [
                    {
                        "text": "Welcome to the Question Editor!",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "This is where you will create your question. You can modify this template or remove it to start from scratch.",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "heading",
                props: {
                    level: 3
                },
                content: [
                    {
                        "text": "Question Types",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "You can select from these question types:",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "bulletListItem",
                content: [
                    {
                        "text": "Objective",
                        "type": "text",
                        styles: {
                            "bold": true
                        }
                    },
                    {
                        "text": ": For questions with specific correct answers (multiple choice, true/false, etc.)",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "bulletListItem",
                content: [
                    {
                        "text": "Subjective",
                        "type": "text",
                        styles: {
                            "bold": true
                        }
                    },
                    {
                        "text": ": For questions that don't have a single correct answer.",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "bulletListItem",
                content: [
                    {
                        "text": "Coding",
                        "type": "text",
                        styles: {
                            "bold": true
                        }
                    },
                    {
                        "text": ": For questions that require learners to write code as their answer",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "",
                        "type": "text",
                        styles: {}
                    }
                ]
            }
        ];
        // Answer type section - not shown for coding questions
        const answerTypeBlocks = [
            {
                type: "heading",
                props: {
                    level: 3
                },
                content: [
                    {
                        "text": "Answer Types",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "You can select from these answer types:",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "bulletListItem",
                content: [
                    {
                        "text": "Text",
                        "type": "text",
                        styles: {
                            "bold": true
                        }
                    },
                    {
                        "text": ": Learners need to type their answer",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "bulletListItem",
                content: [
                    {
                        "text": "Audio",
                        "type": "text",
                        styles: {
                            "bold": true
                        }
                    },
                    {
                        "text": ": Learners need to record their answer",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "bulletListItem",
                content: [
                    {
                        "text": "Code",
                        "type": "text",
                        styles: {
                            "bold": true
                        }
                    },
                    {
                        "text": ": Learners need to write code as their answer in a code editor. They can run their code and see the output without leaving the editor and submit when they are done.",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "",
                        "type": "text",
                        styles: {}
                    }
                ]
            }
        ];
        // Programming languages section - only shown for coding questions
        const programmingLanguagesBlocks = inputType === 'code' ? [
            {
                type: "heading",
                props: {
                    level: 3
                },
                content: [
                    {
                        "text": "Programming Languages",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "You should select the programming languages learners will use to answer the question. You can select multiple languages from the dropdown.",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "",
                        "type": "text",
                        styles: {}
                    }
                ]
            }
        ] : [];
        // Tabs explanation - dependent on question type
        let tabsExplanationBlocks = [];
        if (questionType === 'objective') {
            tabsExplanationBlocks = [
                {
                    type: "heading",
                    props: {
                        level: 3
                    },
                    content: [
                        {
                            "text": "Editor Tabs",
                            "type": "text",
                            styles: {}
                        }
                    ]
                },
                {
                    type: "paragraph",
                    content: [
                        {
                            "text": "The Question Editor has three tabs for this question type:",
                            "type": "text",
                            styles: {}
                        }
                    ]
                },
                {
                    type: "bulletListItem",
                    content: [
                        {
                            "text": "Question",
                            "type": "text",
                            styles: {
                                "bold": true
                            }
                        },
                        {
                            "text": ": (Current tab) Where you write the question text",
                            "type": "text",
                            styles: {}
                        }
                    ]
                },
                {
                    type: "bulletListItem",
                    content: [
                        {
                            "text": "Correct Answer",
                            "type": "text",
                            styles: {
                                "bold": true
                            }
                        },
                        {
                            "text": ": Where you provide the expected answer for automatic evaluation",
                            "type": "text",
                            styles: {}
                        }
                    ]
                },
                {
                    type: "bulletListItem",
                    content: [
                        {
                            "text": "AI Training",
                            "type": "text",
                            styles: {
                                "bold": true
                            }
                        },
                        {
                            "text": ": Where you can add knowledge base content to help AI evaluate learner responses",
                            "type": "text",
                            styles: {}
                        }
                    ]
                }
            ];
        } else if (questionType === 'subjective') {
            tabsExplanationBlocks = [
                {
                    type: "heading",
                    props: {
                        level: 3
                    },
                    content: [
                        {
                            "text": "Editor Tabs",
                            "type": "text",
                            styles: {}
                        }
                    ]
                },
                {
                    type: "paragraph",
                    content: [
                        {
                            "text": "The Question Editor has three tabs for this question type:",
                            "type": "text",
                            styles: {}
                        }
                    ]
                },
                {
                    type: "bulletListItem",
                    content: [
                        {
                            "text": "Question",
                            "type": "text",
                            styles: {
                                "bold": true
                            }
                        },
                        {
                            "text": ": (Current tab) Where you write the question text",
                            "type": "text",
                            styles: {}
                        }
                    ]
                },
                {
                    type: "bulletListItem",
                    content: [
                        {
                            "text": "Scorecard",
                            "type": "text",
                            styles: {
                                "bold": true
                            }
                        },
                        {
                            "text": ": Where you define grading criteria for subjective responses",
                            "type": "text",
                            styles: {}
                        }
                    ]
                },
                {
                    type: "bulletListItem",
                    content: [
                        {
                            "text": "AI Training",
                            "type": "text",
                            styles: {
                                "bold": true
                            }
                        },
                        {
                            "text": ": Where you can add knowledge base content to help AI evaluate learner responses",
                            "type": "text",
                            styles: {}
                        }
                    ]
                }
            ];
        } else {
            tabsExplanationBlocks = [
                {
                    type: "heading",
                    props: {
                        level: 3
                    },
                    content: [
                        {
                            "text": "Editor Tabs",
                            "type": "text",
                            styles: {}
                        }
                    ]
                },
                {
                    type: "paragraph",
                    content: [
                        {
                            "text": "The Question Editor has three tabs for this question type:",
                            "type": "text",
                            styles: {}
                        }
                    ]
                },
                {
                    type: "bulletListItem",
                    content: [
                        {
                            "text": "Question",
                            "type": "text",
                            styles: {
                                "bold": true
                            }
                        },
                        {
                            "text": ": (Current tab) Where you write the question text",
                            "type": "text",
                            styles: {}
                        }
                    ]
                },
                {
                    type: "bulletListItem",
                    content: [
                        {
                            "text": "Correct Answer",
                            "type": "text",
                            styles: {
                                "bold": true
                            }
                        },
                        {
                            "text": ": Where you provide the expected code solution",
                            "type": "text",
                            styles: {}
                        }
                    ]
                },
                {
                    type: "bulletListItem",
                    content: [
                        {
                            "text": "AI Training",
                            "type": "text",
                            styles: {
                                "bold": true
                            }
                        },
                        {
                            "text": ": Where you can add knowledge base content to help AI evaluate learner code solutions",
                            "type": "text",
                            styles: {}
                        }
                    ]
                }
            ];
        }
        // Available block types (from learning material editor)
        const blockTypesBlocks = [
            {
                type: "heading",
                props: {
                    level: 3
                },
                content: [
                    {
                        "text": "Available Block Types",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "Here are some examples of the different types of blocks you can use:",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "heading",
                props: {
                    level: 2
                },
                content: [
                    {
                        "text": "Headings (like this one)",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "bulletListItem",
                content: [
                    {
                        "text": "Bullet lists (like this)",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "numberedListItem",
                content: [
                    {
                        "text": "Numbered lists (like this)",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "checkListItem",
                content: [
                    {
                        "text": "Check lists (like this)",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "Regular paragraphs for your main content",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "Insert images/videos/audio clips by clicking the + icon on the left and selecting Image/Video/Audio",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "Insert code blocks by clicking the + icon on the left and selecting Code Block",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "heading",
                props: {
                    level: 3
                },
                content: [
                    {
                        "text": "Creating Nested Content",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "You can create nested content in two ways:",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "bulletListItem",
                content: [
                    {
                        "text": "Using the Tab key: Simply press Tab while your cursor is on a block to indent it",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "bulletListItem",
                content: [
                    {
                        "text": "Using the side menu: Hover near the left edge of a block, click the menu icon (the button with 6 dots), and drag the block to the desired nested position inside another block",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "Here is an example of a nested list:",
                        "type": "text",
                        styles: {
                            "bold": true
                        }
                    }
                ]
            },
            {
                type: "bulletListItem",
                content: [
                    {
                        "text": "Main topic 1",
                        "type": "text",
                        styles: {}
                    }
                ],
                children: [
                    {
                        type: "bulletListItem",
                        props: {
                            indent: 1
                        },
                        content: [
                            {
                                "text": "Subtopic 1.1 (indented using Tab or side menu)",
                                "type": "text",
                                styles: {}
                            }
                        ]
                    },
                    {
                        type: "bulletListItem",
                        props: {
                            indent: 1
                        },
                        content: [
                            {
                                "text": "Subtopic 1.2",
                                "type": "text",
                                styles: {}
                            }
                        ],
                        children: [
                            {
                                type: "bulletListItem",
                                props: {
                                    indent: 2
                                },
                                content: [
                                    {
                                        "text": "Further nested item (press Tab again to create deeper nesting)",
                                        "type": "text",
                                        styles: {}
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "",
                        "type": "text",
                        styles: {}
                    }
                ]
            }
        ];
        // Writing effective questions section
        const effectiveQuestionsBlocks = [
            {
                type: "heading",
                props: {
                    level: 3
                },
                content: [
                    {
                        "text": "Writing Effective Questions",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "For best results:",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "bulletListItem",
                content: [
                    {
                        "text": "Be clear and specific in your question text",
                        "type": "text",
                        styles: {}
                    }
                ]
            }
        ];
        // Question type specific tips
        let questionTypeTipsBlocks = [];
        if (questionType === 'subjective') {
            questionTypeTipsBlocks = [
                {
                    type: "bulletListItem",
                    content: [
                        {
                            "text": "Create a detailed scorecard with clear evaluation criteria or pick one of the templates already provided",
                            "type": "text",
                            styles: {}
                        }
                    ]
                }
            ];
        } else if (inputType === 'code') {
            questionTypeTipsBlocks = [
                {
                    type: "bulletListItem",
                    content: [
                        {
                            "text": "Provide a clear problem statement and any constraints or performance requirements along with the expected code solution",
                            "type": "text",
                            styles: {}
                        }
                    ]
                }
            ];
        } else {
            questionTypeTipsBlocks = [
                {
                    type: "bulletListItem",
                    content: [
                        {
                            "text": "Make sure your correct answer is complete and matches the expected format",
                            "type": "text",
                            styles: {}
                        }
                    ]
                }
            ];
        }
        // Preview and publish explanation
        const previewPublishBlocks = [
            {
                type: "paragraph",
                content: [
                    {
                        "text": "",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "heading",
                props: {
                    level: 3
                },
                content: [
                    {
                        "text": "Preview and Publishing",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "When you're ready to test your quiz:",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "bulletListItem",
                content: [
                    {
                        "text": "Preview Button",
                        "type": "text",
                        styles: {
                            "bold": true
                        }
                    },
                    {
                        "text": ": Lets you see and answer the question exactly as a learner will see it",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "bulletListItem",
                content: [
                    {
                        "text": "Publish Button",
                        "type": "text",
                        styles: {
                            "bold": true
                        }
                    },
                    {
                        "text": ": Makes the quiz available to learners. You can always edit and publish again",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            {
                type: "paragraph",
                content: [
                    {
                        "text": "Delete this template when you are ready to create your own question!",
                        "type": "text",
                        styles: {}
                    }
                ]
            }
        ];
        // Combine all blocks based on question type
        return [
            ...commonBlocks,
            ...answerTypeBlocks,
            ...programmingLanguagesBlocks,
            ...tabsExplanationBlocks,
            {
                type: "paragraph",
                content: [
                    {
                        "text": "",
                        "type": "text",
                        styles: {}
                    }
                ]
            },
            ...blockTypesBlocks,
            ...effectiveQuestionsBlocks,
            ...questionTypeTipsBlocks,
            ...previewPublishBlocks
        ];
    };
    // Add a new question
    const addQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[addQuestion]": ()=>{
            if (checkUnsavedScorecardChanges()) {
                // Store the add question action as pending
                pendingScorecardActionRef.current = ({
                    "QuizEditor.useCallback[addQuestion]": ()=>{
                        // Execute the add question logic without checking for unsaved changes
                        executeAddQuestion();
                    }
                })["QuizEditor.useCallback[addQuestion]"];
                if (onQuestionChangeWithUnsavedScorecardChanges) {
                    onQuestionChangeWithUnsavedScorecardChanges();
                }
                return;
            }
            executeAddQuestion();
        }
    }["QuizEditor.useCallback[addQuestion]"], [
        questions,
        onChange
    ]);
    // Extract the actual add question logic to a separate function
    const executeAddQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[executeAddQuestion]": ()=>{
            // Get the previous question's configuration if available
            // Otherwise, use default values
            let questionType = 'objective';
            let inputType = 'text';
            let codingLanguages = [];
            let responseType = 'chat';
            // If there's at least one question (to be used as a reference)
            if (questions.length > 0) {
                const previousQuestion = questions[questions.length - 1];
                if (previousQuestion && previousQuestion.config) {
                    // Use the previous question's type
                    questionType = previousQuestion.config.questionType;
                    // Use the previous question's input type (answer type)
                    inputType = previousQuestion.config.inputType;
                    // Use the previous question's coding languages if available
                    if (previousQuestion.config.codingLanguages && Array.isArray(previousQuestion.config.codingLanguages) && previousQuestion.config.codingLanguages.length > 0) {
                        codingLanguages = [
                            ...previousQuestion.config.codingLanguages
                        ];
                    }
                    responseType = previousQuestion.config.responseType;
                }
            }
            const newQuestion = {
                id: "question-".concat(Date.now()),
                content: getQuestionTemplateBlocks(questionType, inputType),
                config: {
                    ...defaultQuestionConfig,
                    questionType: questionType,
                    inputType: inputType,
                    codingLanguages: codingLanguages,
                    responseType: responseType,
                    title: 'Question ' + (questions.length + 1)
                }
            };
            const updatedQuestions = [
                ...questions,
                newQuestion
            ];
            setQuestions(updatedQuestions);
            setCurrentQuestionIndex(updatedQuestions.length - 1);
            // Reset last content update ref
            lastContentUpdateRef.current = "";
            // Trigger animation
            setNewQuestionAdded(true);
            // Trigger question count highlight animation
            setQuestionCountHighlighted(true);
            // Reset animation flags after animation completes
            setTimeout({
                "QuizEditor.useCallback[executeAddQuestion]": ()=>{
                    setNewQuestionAdded(false);
                }
            }["QuizEditor.useCallback[executeAddQuestion]"], 800); // slightly longer than animation duration to ensure it completes
            setTimeout({
                "QuizEditor.useCallback[executeAddQuestion]": ()=>{
                    setQuestionCountHighlighted(false);
                }
            }["QuizEditor.useCallback[executeAddQuestion]"], 1000); // Animation duration for the question counter highlight
            if (onChange) {
                onChange(updatedQuestions);
            }
            setActiveEditorTab('question');
        // Removed slash menu opening after adding a new question
        }
    }["QuizEditor.useCallback[executeAddQuestion]"], [
        questions,
        onChange
    ]);
    // Navigate to previous question
    const goToPreviousQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[goToPreviousQuestion]": ()=>{
            if (currentQuestionIndex == 0) return;
            if (checkUnsavedScorecardChanges()) {
                // Store the previous question action as pending
                pendingScorecardActionRef.current = ({
                    "QuizEditor.useCallback[goToPreviousQuestion]": ()=>{
                        // Execute the previous question logic without checking for unsaved changes
                        executeGoToPreviousQuestion();
                    }
                })["QuizEditor.useCallback[goToPreviousQuestion]"];
                if (onQuestionChangeWithUnsavedScorecardChanges) {
                    onQuestionChangeWithUnsavedScorecardChanges();
                }
                return;
            }
            executeGoToPreviousQuestion();
        }
    }["QuizEditor.useCallback[goToPreviousQuestion]"], [
        currentQuestionIndex,
        onQuestionChange,
        questions,
        activeEditorTab,
        isPreviewMode
    ]);
    // Extract the actual previous question logic to a separate function
    const executeGoToPreviousQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[executeGoToPreviousQuestion]": ()=>{
            // Reset last content update ref when navigating to a different question
            lastContentUpdateRef.current = "";
            const newIndex = currentQuestionIndex - 1;
            // Reset active tab to question when navigating
            // Only change active tab if the current tab is not available in the next question
            const nextQuestion = questions[newIndex];
            if (activeEditorTab === 'scorecard' && nextQuestion.config.questionType !== 'subjective') {
                setActiveEditorTab('question');
            } else if (activeEditorTab === 'answer' && nextQuestion.config.questionType == 'subjective') {
                setActiveEditorTab('question');
            }
            setCurrentQuestionIndex(newIndex);
            // Call the onQuestionChange callback if provided
            if (onQuestionChange && questions[newIndex] && !isPreviewMode) {
                onQuestionChange(questions[newIndex].id);
            }
        }
    }["QuizEditor.useCallback[executeGoToPreviousQuestion]"], [
        currentQuestionIndex,
        onQuestionChange,
        questions,
        activeEditorTab,
        isPreviewMode
    ]);
    // Navigate to next question
    const goToNextQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[goToNextQuestion]": ()=>{
            if (currentQuestionIndex == questions.length - 1) return;
            if (checkUnsavedScorecardChanges()) {
                // Store the next question action as pending
                pendingScorecardActionRef.current = ({
                    "QuizEditor.useCallback[goToNextQuestion]": ()=>{
                        // Execute the next question logic without checking for unsaved changes
                        executeGoToNextQuestion();
                    }
                })["QuizEditor.useCallback[goToNextQuestion]"];
                if (onQuestionChangeWithUnsavedScorecardChanges) {
                    onQuestionChangeWithUnsavedScorecardChanges();
                }
                return;
            }
            executeGoToNextQuestion();
        }
    }["QuizEditor.useCallback[goToNextQuestion]"], [
        currentQuestionIndex,
        questions.length,
        onQuestionChange,
        questions,
        activeEditorTab,
        isPreviewMode
    ]);
    // Extract the actual next question logic to a separate function
    const executeGoToNextQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[executeGoToNextQuestion]": ()=>{
            // Reset last content update ref when navigating to a different question
            lastContentUpdateRef.current = "";
            const newIndex = currentQuestionIndex + 1;
            // Reset active tab to question when navigating
            const nextQuestion = questions[newIndex];
            if (activeEditorTab === 'scorecard' && nextQuestion.config.questionType !== 'subjective') {
                setActiveEditorTab('question');
            } else if (activeEditorTab === 'answer' && nextQuestion.config.questionType == 'subjective') {
                setActiveEditorTab('question');
            }
            setCurrentQuestionIndex(newIndex);
            // Call the onQuestionChange callback if provided
            if (onQuestionChange && questions[newIndex] && !isPreviewMode) {
                onQuestionChange(questions[newIndex].id);
            }
        }
    }["QuizEditor.useCallback[executeGoToNextQuestion]"], [
        currentQuestionIndex,
        questions.length,
        onQuestionChange,
        questions,
        activeEditorTab,
        isPreviewMode
    ]);
    // Delete current question
    const deleteQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[deleteQuestion]": ()=>{
            if (questions.length <= 1) {
                // If only one question, just clear the questions array
                setQuestions([]);
                setShowDeleteConfirm(false);
                if (onChange) {
                    onChange([]);
                }
                return;
            }
            const updatedQuestions = [
                ...questions
            ];
            updatedQuestions.splice(currentQuestionIndex, 1);
            setQuestions(updatedQuestions);
            // Adjust current index if necessary
            if (currentQuestionIndex >= updatedQuestions.length) {
                setCurrentQuestionIndex(updatedQuestions.length - 1);
            }
            if (onChange) {
                onChange(updatedQuestions);
            }
            // Hide confirmation dialog
            setShowDeleteConfirm(false);
            // Reset last content update ref when deleting a question
            lastContentUpdateRef.current = "";
        }
    }["QuizEditor.useCallback[deleteQuestion]"], [
        questions,
        currentQuestionIndex,
        onChange
    ]);
    // Effect to initialize lastContentUpdateRef when changing questions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuizEditor.useEffect": ()=>{
            if (questions.length > 0) {
                lastContentUpdateRef.current = JSON.stringify(currentQuestionContent);
            }
        }
    }["QuizEditor.useEffect"], [
        currentQuestionIndex,
        questions.length,
        currentQuestionContent
    ]);
    // Placeholder component for empty quiz
    const EmptyQuizPlaceholder = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-full w-full text-center p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-light text-white mb-3",
                    children: "Questions are the gateway to learning"
                }, void 0, false, {
                    fileName: "[project]/src/components/QuizEditor.tsx",
                    lineNumber: 1684,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 max-w-md mb-8",
                    children: "Add questions to create an interactive quiz for your learners"
                }, void 0, false, {
                    fileName: "[project]/src/components/QuizEditor.tsx",
                    lineNumber: 1685,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                status === 'draft' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: addQuestion,
                    className: "flex items-center px-5 py-2.5 text-sm text-black bg-white hover:bg-gray-100 rounded-md transition-colors cursor-pointer",
                    disabled: readOnly,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-4 h-4 rounded-full border border-black flex items-center justify-center mr-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 10,
                                className: "text-black"
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuizEditor.tsx",
                                lineNumber: 1695,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/QuizEditor.tsx",
                            lineNumber: 1694,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Add question"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/QuizEditor.tsx",
                    lineNumber: 1689,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QuizEditor.tsx",
            lineNumber: 1683,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    const handleCancelPublish = ()=>{
        if (onPublishCancel) {
            onPublishCancel();
        }
    };
    const updateDraftQuiz = async function(scheduledPublishAt) {
        let status = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'published';
        if (!taskId) {
            console.error("Cannot publish: taskId is not provided");
            setPublishError("Cannot publish: Task ID is missing");
            return;
        }
        setIsPublishing(true);
        setPublishError(null);
        try {
            var _document_querySelector_parentElement, _document_querySelector;
            // Get the current title from the dialog - it may have been edited
            const dialogTitleElement = (_document_querySelector = document.querySelector('.dialog-content-editor')) === null || _document_querySelector === void 0 ? void 0 : (_document_querySelector_parentElement = _document_querySelector.parentElement) === null || _document_querySelector_parentElement === void 0 ? void 0 : _document_querySelector_parentElement.querySelector('h2');
            const currentTitle = (dialogTitleElement === null || dialogTitleElement === void 0 ? void 0 : dialogTitleElement.textContent) || '';
            // Format questions for the API
            const formattedQuestions = questions.map((question)=>{
                // Map questionType to API type
                const questionType = question.config.questionType;
                // Map inputType
                const inputType = question.config.inputType;
                let scorecardId = null;
                if (question.config.scorecardData) {
                    // Use our helper function to determine if this is an API scorecard
                    scorecardId = question.config.scorecardData.id;
                }
                // Return the formatted question object for all questions, not just those with scorecards
                return {
                    blocks: question.content,
                    answer: question.config.correctAnswer || [],
                    input_type: inputType,
                    response_type: question.config.responseType,
                    coding_languages: question.config.codingLanguages || [],
                    generation_model: null,
                    type: questionType,
                    max_attempts: question.config.responseType === 'exam' ? 1 : null,
                    is_feedback_shown: question.config.responseType === 'exam' ? false : true,
                    scorecard_id: scorecardId,
                    context: getKnowledgeBaseContent(question.config),
                    title: question.config.title
                };
            });
            // Make POST request to update the quiz
            const response = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/tasks/").concat(taskId, "/quiz"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: currentTitle,
                    questions: formattedQuestions,
                    scheduled_publish_at: scheduledPublishAt,
                    status: status
                })
            });
            if (!response.ok) {
                throw new Error("Failed to publish quiz: ".concat(response.status));
            }
            // Get the updated task data from the response
            const updatedTaskData = await response.json();
            const updatedData = {
                ...updatedTaskData,
                status: status,
                title: currentTitle,
                scheduled_publish_at: scheduledPublishAt,
                id: taskId // Ensure the ID is included for proper updating in the module list
            };
            console.log("Draft quiz updated successfully");
            // Set publishing to false to avoid state updates during callbacks
            setIsPublishing(false);
            // Call the onPublishSuccess callback if provided
            const callback = status === 'published' ? onPublishSuccess : onSaveSuccess;
            if (callback) {
                // Use setTimeout to break the current render cycle
                setTimeout(()=>{
                    callback(updatedData);
                }, 0);
            }
        } catch (error) {
            console.error("Error publishing quiz:", error);
            setPublishError(error instanceof Error ? error.message : "Failed to publish quiz");
            setIsPublishing(false);
        }
    };
    // Modified handleSavePublishedQuiz for edit mode to send raw blocks of the correct answer
    const handleSavePublishedQuiz = async ()=>{
        if (!taskId) {
            console.error("Cannot save: taskId is not provided");
            return;
        }
        try {
            var _document_querySelector_parentElement, _document_querySelector;
            // Get the current title from the dialog - it may have been edited
            const dialogTitleElement = (_document_querySelector = document.querySelector('.dialog-content-editor')) === null || _document_querySelector === void 0 ? void 0 : (_document_querySelector_parentElement = _document_querySelector.parentElement) === null || _document_querySelector_parentElement === void 0 ? void 0 : _document_querySelector_parentElement.querySelector('h2');
            const currentTitle = (dialogTitleElement === null || dialogTitleElement === void 0 ? void 0 : dialogTitleElement.textContent) || '';
            // Format questions for the API
            const formattedQuestions = questions.map((question)=>{
                // Map questionType to API type
                const questionType = question.config.questionType;
                // Get input_type from the current config
                const inputType = question.config.inputType;
                let scorecardId = null;
                if (question.config.scorecardData) {
                    // Use our helper function to determine if this is an API scorecard
                    scorecardId = question.config.scorecardData.id;
                }
                return {
                    id: question.id,
                    blocks: question.content,
                    answer: question.config.correctAnswer || [],
                    coding_languages: question.config.codingLanguages || [],
                    type: questionType,
                    input_type: inputType,
                    response_type: question.config.responseType,
                    scorecard_id: scorecardId,
                    context: getKnowledgeBaseContent(question.config),
                    title: question.config.title
                };
            });
            // Make PUT request to update the quiz content, keeping the same status
            const response = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/tasks/").concat(taskId, "/quiz"), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: currentTitle,
                    questions: formattedQuestions,
                    scheduled_publish_at: scheduledPublishAt
                })
            });
            if (!response.ok) {
                throw new Error("Failed to save quiz: ".concat(response.status));
            }
            // Get the updated task data from the response
            const updatedTaskData = await response.json();
            // Create updated data with the current title
            const updatedData = {
                ...updatedTaskData,
                title: currentTitle,
                id: taskId
            };
            // Call the onSaveSuccess callback if provided
            if (onSaveSuccess) {
                setTimeout(()=>{
                    onSaveSuccess(updatedData);
                }, 0);
            }
        } catch (error) {
            console.error("Error saving quiz:", error);
        }
    };
    // Handle cancel in edit mode - revert to original data
    const handleCancel = ()=>{
        var _document_querySelector_parentElement, _document_querySelector;
        if (originalQuestionsRef.current.length === 0) return;
        // Restore the original questions
        setQuestions(JSON.parse(JSON.stringify(originalQuestionsRef.current)));
        // Return the original title to the dialog header
        const dialogTitleElement = (_document_querySelector = document.querySelector('.dialog-content-editor')) === null || _document_querySelector === void 0 ? void 0 : (_document_querySelector_parentElement = _document_querySelector.parentElement) === null || _document_querySelector_parentElement === void 0 ? void 0 : _document_querySelector_parentElement.querySelector('h2');
        if (dialogTitleElement && originalTitleRef.current) {
            dialogTitleElement.textContent = originalTitleRef.current;
        }
    };
    // Check if the current question has coding languages set
    const hasCodingLanguages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[hasCodingLanguages]": ()=>{
            if (questions.length === 0 || currentQuestionIndex < 0 || currentQuestionIndex >= questions.length) {
                return false;
            }
            const question = questions[currentQuestionIndex];
            if (question.config.inputType !== 'code') {
                return true; // Not relevant for non-coding questions
            }
            // Check if coding languages array exists and has at least one value
            return !!(question.config.codingLanguages && Array.isArray(question.config.codingLanguages) && question.config.codingLanguages.length > 0);
        }
    }["QuizEditor.useCallback[hasCodingLanguages]"], [
        questions,
        currentQuestionIndex
    ]);
    // Add function to check for unsaved scorecard changes across all questions
    const checkUnsavedScorecardChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[checkUnsavedScorecardChanges]": ()=>{
            // Check only the current question
            if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
                const question = questions[currentQuestionIndex];
                // Check if this question has a scorecard
                if (question.config.scorecardData) {
                    const scorecardId = question.config.scorecardData.id;
                    const originalData = originalScorecardData.get(scorecardId);
                    // If this is a new scorecard (not in original data), skip the check
                    if (!originalData) {
                        return false;
                    }
                    // Check if scorecard name has changed
                    if (question.config.scorecardData.name !== originalData.name) {
                        return true;
                    }
                    // Check if criteria have changed
                    const currentCriteria = question.config.scorecardData.criteria;
                    const originalCriteria = originalData.criteria;
                    // Check if criteria length has changed
                    if (currentCriteria.length !== originalCriteria.length) {
                        return true;
                    }
                    // Check if any criterion has changed
                    for(let j = 0; j < currentCriteria.length; j++){
                        const current = currentCriteria[j];
                        const original = originalCriteria[j];
                        if (!original) {
                            return true;
                        }
                        if (current.name !== original.name || current.description !== original.description || current.minScore !== original.minScore || current.maxScore !== original.maxScore) {
                            return true;
                        }
                    }
                }
            }
            return false; // No unsaved changes found
        }
    }["QuizEditor.useCallback[checkUnsavedScorecardChanges]"], [
        questions,
        originalScorecardData,
        currentQuestionIndex
    ]);
    // Expose methods to parent component via the ref
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "QuizEditor.useImperativeHandle": ()=>({
                saveDraft: ({
                    "QuizEditor.useImperativeHandle": ()=>updateDraftQuiz(null, 'draft')
                })["QuizEditor.useImperativeHandle"],
                savePublished: handleSavePublishedQuiz,
                cancel: handleCancel,
                hasContent: ({
                    "QuizEditor.useImperativeHandle": ()=>questions.length > 0
                })["QuizEditor.useImperativeHandle"],
                hasQuestionContent: ({
                    "QuizEditor.useImperativeHandle": ()=>{
                        const isValid = validateQuestionContent(currentQuestionContent);
                        if (!isValid) {
                            // Switch to question tab
                            setActiveEditorTab('question');
                            // Highlight the question field to draw attention to the error
                            highlightField('question');
                        }
                        return isValid;
                    }
                })["QuizEditor.useImperativeHandle"],
                getCurrentQuestionType: ({
                    "QuizEditor.useImperativeHandle": ()=>{
                        // Return null if there are no questions
                        if (questions.length === 0) return null;
                        // Return the current question's type, defaulting to 'objective' if not set
                        return currentQuestionConfig.questionType;
                    }
                })["QuizEditor.useImperativeHandle"],
                getCurrentQuestionInputType: ({
                    "QuizEditor.useImperativeHandle": ()=>{
                        // Return null if there are no questions
                        if (questions.length === 0) return null;
                        // Return the current question's input type, defaulting to 'text' if not set
                        return currentQuestionConfig.inputType;
                    }
                })["QuizEditor.useImperativeHandle"],
                hasCorrectAnswer: ({
                    "QuizEditor.useImperativeHandle": ()=>{
                        const isValid = validateCorrectAnswer(currentQuestionConfig);
                        if (!isValid) {
                            // Switch to answer tab
                            setActiveEditorTab('answer');
                            // Highlight the answer field to draw attention to the error
                            highlightField('answer');
                        }
                        return isValid;
                    }
                })["QuizEditor.useImperativeHandle"],
                hasScorecard: ({
                    "QuizEditor.useImperativeHandle": ()=>validateScorecard(currentQuestionConfig)
                })["QuizEditor.useImperativeHandle"],
                hasCodingLanguages: ({
                    "QuizEditor.useImperativeHandle": ()=>{
                        const isValid = hasCodingLanguages();
                        if (!isValid) {
                            // Highlight the coding language field to draw attention to the error
                            highlightField('codingLanguage');
                        }
                        return isValid;
                    }
                })["QuizEditor.useImperativeHandle"],
                setActiveTab: ({
                    "QuizEditor.useImperativeHandle": (tab)=>{
                        // Set the active editor tab
                        setActiveEditorTab(tab);
                    }
                })["QuizEditor.useImperativeHandle"],
                validateBeforePublish: validateAllQuestions,
                getCurrentQuestionConfig: ({
                    "QuizEditor.useImperativeHandle": ()=>{
                        // Return undefined if there are no questions
                        if (questions.length === 0) return undefined;
                        // Return the current question's configuration
                        return currentQuestionConfig;
                    }
                })["QuizEditor.useImperativeHandle"],
                validateScorecardCriteria: ({
                    "QuizEditor.useImperativeHandle": (scorecard, callbacks)=>validateScorecardCriteria(scorecard, callbacks)
                })["QuizEditor.useImperativeHandle"],
                hasChanges: ({
                    "QuizEditor.useImperativeHandle": ()=>{
                        var _document_querySelector_parentElement, _document_querySelector;
                        // If we don't have original questions to compare with, assume no changes
                        if (originalQuestionsRef.current.length === 0 && questions.length === 0) return false;
                        // Check if title has changed
                        const dialogTitleElement = (_document_querySelector = document.querySelector('.dialog-content-editor')) === null || _document_querySelector === void 0 ? void 0 : (_document_querySelector_parentElement = _document_querySelector.parentElement) === null || _document_querySelector_parentElement === void 0 ? void 0 : _document_querySelector_parentElement.querySelector('h2');
                        const currentTitle = (dialogTitleElement === null || dialogTitleElement === void 0 ? void 0 : dialogTitleElement.textContent) || "";
                        const originalTitle = originalTitleRef.current || "";
                        if (currentTitle !== originalTitle) {
                            return true;
                        }
                        // Check if questions have changed (number, content, or configuration)
                        if (questions.length !== originalQuestionsRef.current.length) {
                            return true;
                        }
                        // Convert both to JSON strings for deep comparison
                        const currentQuestionsStr = JSON.stringify(questions);
                        const originalQuestionsStr = JSON.stringify(originalQuestionsRef.current);
                        // Return true if there are changes
                        return currentQuestionsStr !== originalQuestionsStr;
                    }
                })["QuizEditor.useImperativeHandle"],
                hasUnsavedScorecardChanges: checkUnsavedScorecardChanges,
                handleScorecardChangesRevert: handleScorecardRevert
            })
    }["QuizEditor.useImperativeHandle"]);
    // Update the MemoizedLearnerQuizView to include the correct answer
    const MemoizedLearnerQuizView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuizEditor.useMemo[MemoizedLearnerQuizView]": ()=>{
            // No validation checks - directly use the questions array
            // Make a deep copy of questions
            let questionsWithCorrectAnswers = JSON.parse(JSON.stringify(questions));
            // Update the current question with the latest correct answer blocks if possible
            if (correctAnswerEditorRef.current && currentQuestionIndex >= 0 && currentQuestionIndex < questionsWithCorrectAnswers.length) {
                const currentCorrectAnswer = correctAnswerEditorRef.current.document || [];
                questionsWithCorrectAnswers[currentQuestionIndex].config = {
                    ...questionsWithCorrectAnswers[currentQuestionIndex].config,
                    correctAnswer: currentCorrectAnswer
                };
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LearnerQuizView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                questions: questionsWithCorrectAnswers,
                isDarkMode: isDarkMode,
                className: "w-full h-full",
                onSubmitAnswer: onSubmitAnswer,
                currentQuestionId: activeQuestionId,
                onQuestionChange: {
                    "QuizEditor.useMemo[MemoizedLearnerQuizView]": (questionId)=>{
                        // Find the index for this question ID
                        const index = questions.findIndex({
                            "QuizEditor.useMemo[MemoizedLearnerQuizView].index": (q)=>q.id === questionId
                        }["QuizEditor.useMemo[MemoizedLearnerQuizView].index"]);
                        if (index !== -1) {
                            // Update our internal state
                            setCurrentQuestionIndex(index);
                        }
                    }
                }["QuizEditor.useMemo[MemoizedLearnerQuizView]"],
                userId: userId,
                taskId: taskId,
                isTestMode: true
            }, void 0, false, {
                fileName: "[project]/src/components/QuizEditor.tsx",
                lineNumber: 2072,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
        }
    }["QuizEditor.useMemo[MemoizedLearnerQuizView]"], [
        questions,
        isDarkMode,
        readOnly,
        onSubmitAnswer,
        taskType,
        activeQuestionId,
        userId,
        currentQuestionIndex
    ]);
    // Define dropdown options
    // Now removed and imported from dropdownOptions.ts
    // Get dropdown option objects based on config values
    const getQuestionTypeOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[getQuestionTypeOption]": function() {
            let type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'objective';
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dropdownOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questionTypeOptions"].find({
                "QuizEditor.useCallback[getQuestionTypeOption]": (option)=>option.value === type
            }["QuizEditor.useCallback[getQuestionTypeOption]"]) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dropdownOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questionTypeOptions"][0];
        }
    }["QuizEditor.useCallback[getQuestionTypeOption]"], []);
    const getAnswerTypeOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[getAnswerTypeOption]": function() {
            let type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'text';
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dropdownOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["answerTypeOptions"].find({
                "QuizEditor.useCallback[getAnswerTypeOption]": (option)=>option.value === type
            }["QuizEditor.useCallback[getAnswerTypeOption]"]) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dropdownOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["answerTypeOptions"][0];
        }
    }["QuizEditor.useCallback[getAnswerTypeOption]"], []);
    const getPurposeOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[getPurposeOption]": function() {
            let purpose = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'practice';
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dropdownOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questionPurposeOptions"].find({
                "QuizEditor.useCallback[getPurposeOption]": (option)=>option.value === purpose
            }["QuizEditor.useCallback[getPurposeOption]"]) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dropdownOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questionPurposeOptions"][0];
        }
    }["QuizEditor.useCallback[getPurposeOption]"], []);
    // Handle title change
    const handleQuestionTitleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[handleQuestionTitleChange]": (newTitle)=>{
            // Update the question config with the new question title
            handleConfigChange({
                title: newTitle
            });
        }
    }["QuizEditor.useCallback[handleQuestionTitleChange]"], [
        handleConfigChange
    ]);
    // Handle question title input validation
    const handleQuestionTitleInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[handleQuestionTitleInput]": (e)=>{
            const el = e.currentTarget;
            if (el.textContent && el.textContent.length > 200) {
                el.textContent = el.textContent.slice(0, 200);
                const range = document.createRange();
                const sel = window.getSelection();
                range.selectNodeContents(el);
                range.collapse(false);
                sel === null || sel === void 0 ? void 0 : sel.removeAllRanges();
                sel === null || sel === void 0 ? void 0 : sel.addRange(range);
            }
        }
    }["QuizEditor.useCallback[handleQuestionTitleInput]"], []);
    // Handle question title blur
    const handleQuestionTitleBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[handleQuestionTitleBlur]": (e)=>{
            var _e_currentTarget_textContent;
            const newValue = (_e_currentTarget_textContent = e.currentTarget.textContent) === null || _e_currentTarget_textContent === void 0 ? void 0 : _e_currentTarget_textContent.trim();
            if (newValue !== currentQuestionConfig.title) {
                handleQuestionTitleChange(newValue || 'Question ' + (currentQuestionIndex + 1));
            }
        }
    }["QuizEditor.useCallback[handleQuestionTitleBlur]"], [
        currentQuestionConfig.title,
        handleQuestionTitleChange,
        currentQuestionIndex
    ]);
    // Handle question title key down
    const handleQuestionTitleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[handleQuestionTitleKeyDown]": (e)=>{
            if (e.key === 'Enter') {
                e.preventDefault();
                e.currentTarget.blur();
            }
        }
    }["QuizEditor.useCallback[handleQuestionTitleKeyDown]"], []);
    // Handle question type change
    const handleQuestionTypeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[handleQuestionTypeChange]": (option)=>{
            // We know this is a single-select dropdown
            if (!Array.isArray(option)) {
                setSelectedQuestionType(option);
                // Get the new question type
                const newQuestionType = option.value;
                // Update the question config with the new question type and also update template if needed
                handleConfigChange({
                    questionType: newQuestionType
                }, {
                    updateTemplate: true,
                    newQuestionType: newQuestionType,
                    newInputType: currentQuestionConfig.inputType
                });
                // Set active tab to question whenever question type changes
                setActiveEditorTab('question');
            }
        }
    }["QuizEditor.useCallback[handleQuestionTypeChange]"], [
        handleConfigChange,
        status,
        questions,
        currentQuestionIndex,
        onChange,
        currentQuestionConfig.inputType
    ]);
    // Handle purpose change
    const handlePurposeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[handlePurposeChange]": (option)=>{
            // We know this is a single-select dropdown
            if (!Array.isArray(option)) {
                setSelectedPurpose(option);
                // Get the new purpose
                const newPurpose = option.value;
                // Update the question config with the new purpose
                handleConfigChange({
                    responseType: newPurpose === 'exam' ? 'exam' : 'chat'
                });
            }
        }
    }["QuizEditor.useCallback[handlePurposeChange]"], [
        handleConfigChange
    ]);
    // Handle answer type change
    const handleAnswerTypeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[handleAnswerTypeChange]": (option)=>{
            // We know this is a single-select dropdown
            if (!Array.isArray(option)) {
                setSelectedAnswerType(option);
                // Update the question config with the new input type
                handleConfigChange({
                    inputType: option.value
                }, {
                    updateTemplate: true,
                    newQuestionType: currentQuestionConfig.questionType,
                    newInputType: option.value
                });
            }
        }
    }["QuizEditor.useCallback[handleAnswerTypeChange]"], [
        handleConfigChange,
        status,
        questions,
        currentQuestionIndex,
        onChange,
        currentQuestionConfig.questionType
    ]);
    // Handle coding language change
    const handleCodingLanguageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[handleCodingLanguageChange]": (option)=>{
            // Cast to array since we know this is a multiselect dropdown
            const selectedOptions = Array.isArray(option) ? option : [
                option
            ];
            // Define exclusive languages
            const exclusiveLanguages = [
                'react',
                'sql',
                'python',
                'nodejs'
            ];
            // Validation logic for language combinations
            let validatedOptions = [
                ...selectedOptions
            ];
            let invalidMessage = "";
            // Find all exclusive languages in the selection
            const exclusiveSelectedLanguages = selectedOptions.filter({
                "QuizEditor.useCallback[handleCodingLanguageChange].exclusiveSelectedLanguages": (opt)=>exclusiveLanguages.includes(opt.value)
            }["QuizEditor.useCallback[handleCodingLanguageChange].exclusiveSelectedLanguages"]);
            // Check if any exclusive language is selected
            if (exclusiveSelectedLanguages.length > 0) {
                // If there are multiple exclusive languages, get the last one selected
                const lastExclusiveLanguage = exclusiveSelectedLanguages[exclusiveSelectedLanguages.length - 1];
                // If we have more than one language selected and at least one is exclusive,
                // we need to filter out all other languages
                if (selectedOptions.length > 1) {
                    // Keep only the last exclusive language
                    validatedOptions = [
                        lastExclusiveLanguage
                    ];
                    // Get a nice display name for the exclusive language
                    const displayName = lastExclusiveLanguage.label;
                    invalidMessage = "".concat(displayName, " must be used alone. Other languages cannot be added along with it.");
                }
            } else {
                // No exclusive languages, check for HTML and CSS combination
                const hasCSS = selectedOptions.some({
                    "QuizEditor.useCallback[handleCodingLanguageChange].hasCSS": (opt)=>opt.value === 'css'
                }["QuizEditor.useCallback[handleCodingLanguageChange].hasCSS"]);
                const hasHTML = selectedOptions.some({
                    "QuizEditor.useCallback[handleCodingLanguageChange].hasHTML": (opt)=>opt.value === 'html'
                }["QuizEditor.useCallback[handleCodingLanguageChange].hasHTML"]);
                if (hasCSS && !hasHTML) {
                    // Find the HTML option in the coding language options
                    const htmlOption = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dropdownOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codingLanguageOptions"].find({
                        "QuizEditor.useCallback[handleCodingLanguageChange].htmlOption": (opt)=>opt.value === 'html'
                    }["QuizEditor.useCallback[handleCodingLanguageChange].htmlOption"]);
                    if (htmlOption) {
                        // Add HTML to the validated options
                        validatedOptions.push(htmlOption);
                        invalidMessage = "HTML has been automatically selected because CSS requires HTML";
                    }
                }
            }
            // Set the validated options
            setSelectedCodingLanguages(validatedOptions);
            // Update the question config with the validated options
            handleConfigChange({
                codingLanguages: validatedOptions.map({
                    "QuizEditor.useCallback[handleCodingLanguageChange]": (opt)=>opt.value
                }["QuizEditor.useCallback[handleCodingLanguageChange]"])
            });
            // Show feedback to the user if there was an invalid combination
            if (invalidMessage) {
                // Use setTimeout to ensure state is updated before showing the feedback
                setTimeout({
                    "QuizEditor.useCallback[handleCodingLanguageChange]": ()=>{
                        // Show a toast notification
                        setToastTitle("Language Selection Updated");
                        setToastMessage(invalidMessage);
                        setToastEmoji("⚠️");
                        setShowToast(true);
                    }
                }["QuizEditor.useCallback[handleCodingLanguageChange]"], 100);
            }
        }
    }["QuizEditor.useCallback[handleCodingLanguageChange]"], [
        handleConfigChange
    ]);
    // State for type dropdown
    const [selectedQuestionType, setSelectedQuestionType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dropdownOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questionTypeOptions"][0]);
    const [selectedAnswerType, setSelectedAnswerType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dropdownOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["answerTypeOptions"][0]);
    const [selectedCodingLanguages, setSelectedCodingLanguages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dropdownOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codingLanguageOptions"][0]
    ]);
    const [selectedPurpose, setSelectedPurpose] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dropdownOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questionPurposeOptions"][0]);
    // Update the selected options based on the current question's config
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuizEditor.useEffect": ()=>{
            if (questions.length > 0 && currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
                const currentConfig = questions[currentQuestionIndex].config;
                // Set question type based on config
                setSelectedQuestionType(getQuestionTypeOption(currentConfig.questionType));
                // Set answer type based on config.inputType or default to 'text'
                setSelectedAnswerType(getAnswerTypeOption(currentConfig.inputType));
                // Set purpose based on config.purpose or default to 'practice'
                setSelectedPurpose(getPurposeOption(currentConfig.responseType));
                // Set coding languages based on config.codingLanguages or default to first option
                if (currentConfig.codingLanguages && currentConfig.codingLanguages.length > 0) {
                    const selectedLanguages = currentConfig.codingLanguages.map({
                        "QuizEditor.useEffect.selectedLanguages": (langValue)=>{
                            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dropdownOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codingLanguageOptions"].find({
                                "QuizEditor.useEffect.selectedLanguages": (opt)=>opt.value === langValue
                            }["QuizEditor.useEffect.selectedLanguages"]) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dropdownOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codingLanguageOptions"][0];
                        }
                    }["QuizEditor.useEffect.selectedLanguages"]).filter(Boolean);
                    setSelectedCodingLanguages(selectedLanguages.length > 0 ? selectedLanguages : [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dropdownOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codingLanguageOptions"][0]
                    ]);
                } else {
                    setSelectedCodingLanguages([]);
                }
            }
        }
    }["QuizEditor.useEffect"], [
        currentQuestionIndex,
        questions,
        getQuestionTypeOption,
        getAnswerTypeOption,
        getPurposeOption
    ]);
    const isUserCreatedNewScorecard = (scorecardData)=>{
        return scorecardData && !scorecardData.new && !scorecardData.is_template;
    };
    const isLinkedScorecard = (scorecardData)=>{
        if (scorecardData.new) return false;
        return isUserCreatedNewScorecard(scorecardData);
    };
    // New function to sync all questions with a source scorecard when it changes
    const syncLinkedScorecards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[syncLinkedScorecards]": (sourceId, newName, newCriteria)=>{
            if (!sourceId) return;
            // Update all questions that have scorecard linked to this source
            const updatedQuestions = questions.map({
                "QuizEditor.useCallback[syncLinkedScorecards].updatedQuestions": (question)=>{
                    // Check if this question has a linked scorecard with the matching id
                    if (question.config.scorecardData && question.config.scorecardData.id === sourceId) {
                        // Create an updated scorecard data
                        const updatedScorecardData = {
                            ...question.config.scorecardData,
                            name: newName !== undefined ? newName : question.config.scorecardData.name,
                            criteria: newCriteria !== undefined ? newCriteria : question.config.scorecardData.criteria
                        };
                        // Return updated question with synced scorecard
                        return {
                            ...question,
                            config: {
                                ...question.config,
                                scorecardData: updatedScorecardData
                            }
                        };
                    }
                    // Return question unchanged if it doesn't have a matching scorecard
                    return question;
                }
            }["QuizEditor.useCallback[syncLinkedScorecards].updatedQuestions"]);
            // Update questions state and notify parent
            setQuestions(updatedQuestions);
            if (onChange) {
                onChange(updatedQuestions);
            }
        }
    }["QuizEditor.useCallback[syncLinkedScorecards]"], [
        questions,
        onChange
    ]);
    // Function to handle saving published scorecard changes
    const handleSaveScorecardChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[handleSaveScorecardChanges]": async ()=>{
            if (!currentQuestionConfig.scorecardData || !schoolId || isSavingScorecardRef.current) {
                return;
            }
            const scorecardData = currentQuestionConfig.scorecardData;
            // Don't ask for confirmation if this is a new scorecard
            if (scorecardData.new) {
                performScorecardSave();
                return;
            }
            // Show confirmation dialog instead of saving directly
            setShowScorecardSaveConfirm(true);
        }
    }["QuizEditor.useCallback[handleSaveScorecardChanges]"], [
        currentQuestionConfig.scorecardData,
        schoolId,
        originalScorecardData
    ]);
    // Function that actually performs the scorecard save operation
    const performScorecardSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[performScorecardSave]": async ()=>{
            if (!currentQuestionConfig.scorecardData || !schoolId || isSavingScorecardRef.current) {
                return;
            }
            const scorecardData = currentQuestionConfig.scorecardData;
            // Only save if this is a published scorecard (not new)
            // if (scorecardData.new) {
            //     return;
            // }
            isSavingScorecardRef.current = true;
            try {
                // Prepare the scorecard data for the API
                const scorecardPayload = {
                    title: scorecardData.name,
                    criteria: scorecardData.criteria.map({
                        "QuizEditor.useCallback[performScorecardSave]": (criterion)=>({
                                name: criterion.name,
                                description: criterion.description,
                                min_score: criterion.minScore,
                                max_score: criterion.maxScore,
                                pass_score: criterion.passScore
                            })
                    }["QuizEditor.useCallback[performScorecardSave]"])
                };
                // Make the API call to update the scorecard
                const response = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/scorecards/").concat(scorecardData.id), {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(scorecardPayload)
                });
                if (!response.ok) {
                    throw new Error("Failed to save scorecard: ".concat(response.status));
                }
                // Create the new original data immediately
                const newOriginalData = {
                    name: scorecardData.name,
                    criteria: JSON.parse(JSON.stringify(scorecardData.criteria))
                };
                // Update the original scorecard data to reflect the saved state
                const updatedOriginalData = new Map(originalScorecardData);
                updatedOriginalData.set(scorecardData.id, newOriginalData);
                setOriginalScorecardData(updatedOriginalData);
                // Also update the ref immediately for synchronous access
                // This ensures that any immediate checks will see the updated data
                originalScorecardData.set(scorecardData.id, newOriginalData);
                // Show success toast if this is not a new scorecard
                if (scorecardData.new) {
                    return;
                }
                setToastTitle("Scorecard Saved");
                setToastMessage("All questions using this scorecard have been updated");
                setToastEmoji("✅");
                setShowToast(true);
            } catch (error) {
                console.error('Error saving scorecard:', error);
                // Show error toast
                setToastTitle("Save Failed");
                setToastMessage("Failed to save scorecard changes. Please try again.");
                setToastEmoji("❌");
                setShowToast(true);
            } finally{
                isSavingScorecardRef.current = false;
            }
        }
    }["QuizEditor.useCallback[performScorecardSave]"], [
        currentQuestionConfig.scorecardData,
        schoolId,
        originalScorecardData,
        setToastTitle,
        setToastMessage,
        setToastEmoji,
        setShowToast
    ]);
    // New function to handle complete scorecard revert
    const handleScorecardRevert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuizEditor.useCallback[handleScorecardRevert]": ()=>{
            if (!currentQuestionConfig.scorecardData) {
                return;
            }
            const scorecardId = currentQuestionConfig.scorecardData.id;
            const originalData = originalScorecardData.get(scorecardId);
            if (!originalData) {
                return; // No original data to revert to
            }
            // Create the reverted scorecard data
            const revertedScorecardData = {
                ...currentQuestionConfig.scorecardData,
                name: originalData.name,
                criteria: [
                    ...originalData.criteria
                ]
            };
            // Update the question config atomically
            handleConfigChange({
                scorecardData: revertedScorecardData
            });
            // Update the scorecard in schoolScorecards state
            const updatedScorecards = schoolScorecards.map({
                "QuizEditor.useCallback[handleScorecardRevert].updatedScorecards": (sc)=>sc.id === scorecardId ? {
                        ...sc,
                        name: originalData.name,
                        criteria: [
                            ...originalData.criteria
                        ]
                    } : sc
            }["QuizEditor.useCallback[handleScorecardRevert].updatedScorecards"]);
            setSchoolScorecards(updatedScorecards);
            // Sync all linked scorecards to reflect the reverted changes
            syncLinkedScorecards(scorecardId, originalData.name, originalData.criteria);
        }
    }["QuizEditor.useCallback[handleScorecardRevert]"], [
        currentQuestionConfig.scorecardData,
        originalScorecardData,
        handleConfigChange,
        schoolScorecards,
        syncLinkedScorecards
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full relative ".concat(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                show: showScorecardDeleteConfirm && !isPreviewMode,
                title: "Remove scorecard",
                message: "Are you sure you want to remove this scorecard from this question? This will not affect other questions using this scorecard.",
                onConfirm: ()=>{
                    removeScorecardFromSchoolScoreboards();
                    setShowScorecardDeleteConfirm(false);
                },
                onCancel: ()=>setShowScorecardDeleteConfirm(false),
                type: "delete",
                confirmButtonText: "Remove"
            }, void 0, false, {
                fileName: "[project]/src/components/QuizEditor.tsx",
                lineNumber: 2487,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                show: showDeleteConfirm && !isPreviewMode,
                title: "Delete Question",
                message: "Are you sure you want to delete this question? This action cannot be undone.",
                onConfirm: deleteQuestion,
                onCancel: ()=>setShowDeleteConfirm(false),
                type: "delete"
            }, void 0, false, {
                fileName: "[project]/src/components/QuizEditor.tsx",
                lineNumber: 2501,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                show: showScorecardSaveConfirm && !isPreviewMode,
                onConfirm: ()=>{
                    performScorecardSave();
                    setShowScorecardSaveConfirm(false);
                },
                title: "Are you sure you want to save?",
                message: "These changes will be applied to all the questions across quizzes using this scorecard. If you want to make changes only to this question, you can duplicate the scorecard and add your changes there.",
                onCancel: ()=>setShowScorecardSaveConfirm(false),
                type: "save",
                isLoading: isSavingScorecardRef.current
            }, void 0, false, {
                fileName: "[project]/src/components/QuizEditor.tsx",
                lineNumber: 2511,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PublishConfirmationDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                show: showPublishConfirmation,
                title: "Ready to publish?",
                message: "After publishing, you won't be able to add or remove questions, but you can still edit existing ones",
                onConfirm: updateDraftQuiz,
                onCancel: handleCancelPublish,
                isLoading: isPublishing,
                errorMessage: publishError
            }, void 0, false, {
                fileName: "[project]/src/components/QuizEditor.tsx",
                lineNumber: 2525,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isLoadingQuestions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[#1A1A1A] bg-opacity-80 z-10 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"
                }, void 0, false, {
                    fileName: "[project]/src/components/QuizEditor.tsx",
                    lineNumber: 2538,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/QuizEditor.tsx",
                lineNumber: 2537,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 gap-0 ".concat(newQuestionAdded ? 'animate-new-question' : '', " ").concat(isPreviewMode ? 'h-full' : ''),
                children: isPreviewMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full",
                        onClick: (e)=>e.stopPropagation(),
                        onMouseDown: (e)=>e.stopPropagation(),
                        children: MemoizedLearnerQuizView
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuizEditor.tsx",
                        lineNumber: 2546,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: questions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex justify-center items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyQuizPlaceholder, {}, void 0, false, {
                            fileName: "[project]/src/components/QuizEditor.tsx",
                            lineNumber: 2558,
                            columnNumber: 33
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuizEditor.tsx",
                        lineNumber: 2557,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-64 h-full bg-[#121212] border-r flex flex-col overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 border-b bg-[#0A0A0A] flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-light text-white",
                                                children: "Questions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuizEditor.tsx",
                                                lineNumber: 2566,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-1 rounded-full text-xs transition-all duration-300 ".concat(questionCountHighlighted ? 'bg-green-700 font-semibold shadow-lg animate-question-highlight' : 'bg-[#2A2A2A] border-[#3A3A3A]', " text-gray-300"),
                                                children: questions.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuizEditor.tsx",
                                                lineNumber: 2567,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                        lineNumber: 2565,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !readOnly && status === 'draft' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 border-b",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: addQuestion,
                                            className: "w-full flex items-center justify-center px-4 py-2 text-sm text-black bg-white hover:bg-gray-100 rounded-md transition-colors cursor-pointer",
                                            disabled: readOnly,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-4 h-4 rounded-full border border-black flex items-center justify-center mr-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        size: 10,
                                                        className: "text-black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                                        lineNumber: 2584,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                    lineNumber: 2583,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Add question"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/QuizEditor.tsx",
                                            lineNumber: 2578,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                        lineNumber: 2577,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-y-auto",
                                        children: questions.map((question, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-3 cursor-pointer flex items-center justify-between group border-l-2 ".concat(index === currentQuestionIndex ? "bg-[#222222] border-green-500" : "hover:bg-[#1A1A1A] border-transparent"),
                                                onClick: ()=>{
                                                    if (checkUnsavedScorecardChanges()) {
                                                        pendingScorecardActionRef.current = ()=>{
                                                            setCurrentQuestionIndex(index);
                                                            setActiveEditorTab('question');
                                                            if (onQuestionChange && !isPreviewMode) {
                                                                onQuestionChange(question.id);
                                                            }
                                                        };
                                                        if (onQuestionChangeWithUnsavedScorecardChanges) {
                                                            onQuestionChangeWithUnsavedScorecardChanges();
                                                        }
                                                        return;
                                                    }
                                                    setCurrentQuestionIndex(index);
                                                    setActiveEditorTab('question');
                                                    if (onQuestionChange && !isPreviewMode) {
                                                        onQuestionChange(question.id);
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center flex-1 min-w-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm ".concat(index === currentQuestionIndex ? "text-white" : "text-gray-300", " break-words whitespace-normal"),
                                                                    "data-testid": "sidebar-question-label",
                                                                    children: question.config.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                                    lineNumber: 2624,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs truncate ".concat(index === currentQuestionIndex ? "text-gray-300" : "text-gray-500"),
                                                                    children: [
                                                                        question.config.responseType === 'chat' ? 'Practice' : 'Exam',
                                                                        " • ",
                                                                        question.config.questionType === 'objective' ? 'Objective' : 'Subjective',
                                                                        " • ",
                                                                        question.config.inputType
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                                    lineNumber: 2630,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/QuizEditor.tsx",
                                                            lineNumber: 2623,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                                        lineNumber: 2622,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    !readOnly && status === 'draft' && index === currentQuestionIndex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            setShowDeleteConfirm(true);
                                                        },
                                                        className: "opacity-0 cursor-pointer group-hover:opacity-100 ml-2 p-1 text-red-400 hover:text-red-300 transition-all duration-200",
                                                        "aria-label": "Delete question",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuizEditor.tsx",
                                                            lineNumber: 2647,
                                                            columnNumber: 57
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                                        lineNumber: 2639,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, question.id, true, {
                                                fileName: "[project]/src/components/QuizEditor.tsx",
                                                lineNumber: 2594,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                        lineNumber: 2592,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/QuizEditor.tsx",
                                lineNumber: 2563,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col space-y-2 p-4 border-b bg-[#111111]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-500 text-sm flex-shrink-0 w-1/6 mr-2 flex items-center hover:bg-[#2A2A2A] px-3 py-2 rounded-md",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mr-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                                    lineNumber: 2661,
                                                                    columnNumber: 72
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/QuizEditor.tsx",
                                                                lineNumber: 2661,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Title"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                                        lineNumber: 2660,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-base text-white w-full outline-none p-1 rounded-md",
                                                        contentEditable: !readOnly,
                                                        suppressContentEditableWarning: true,
                                                        onBlur: handleQuestionTitleBlur,
                                                        onInput: handleQuestionTitleInput,
                                                        onKeyDown: handleQuestionTitleKeyDown,
                                                        onClick: (e)=>e.stopPropagation(),
                                                        "data-testid": "question-title-span",
                                                        children: currentQuestionConfig.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                                        lineNumber: 2664,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/QuizEditor.tsx",
                                                lineNumber: 2659,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                                        lineNumber: 2679,
                                                        columnNumber: 55
                                                    }, void 0),
                                                    title: "Purpose",
                                                    options: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dropdownOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questionPurposeOptions"],
                                                    selectedOption: selectedPurpose,
                                                    onChange: handlePurposeChange,
                                                    disabled: readOnly
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                    lineNumber: 2678,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuizEditor.tsx",
                                                lineNumber: 2677,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                                        lineNumber: 2690,
                                                        columnNumber: 55
                                                    }, void 0),
                                                    title: "Question Type",
                                                    options: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dropdownOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questionTypeOptions"],
                                                    selectedOption: selectedQuestionType,
                                                    onChange: handleQuestionTypeChange,
                                                    disabled: readOnly
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                    lineNumber: 2689,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuizEditor.tsx",
                                                lineNumber: 2688,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pen$3e$__["Pen"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                    lineNumber: 2699,
                                                    columnNumber: 51
                                                }, void 0),
                                                title: "Answer Type",
                                                options: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dropdownOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["answerTypeOptions"],
                                                selectedOption: selectedAnswerType,
                                                onChange: handleAnswerTypeChange,
                                                disabled: readOnly
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuizEditor.tsx",
                                                lineNumber: 2698,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            selectedAnswerType.value == 'code' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full ".concat(highlightedField === 'codingLanguage' ? 'outline outline-2 outline-red-400 shadow-md shadow-red-900/50 animate-pulse bg-[#2D1E1E] rounded-md' : ''),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuizEditor.tsx",
                                                            lineNumber: 2710,
                                                            columnNumber: 63
                                                        }, void 0),
                                                        title: "Languages",
                                                        options: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dropdownOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codingLanguageOptions"],
                                                        selectedOptions: selectedCodingLanguages,
                                                        onChange: handleCodingLanguageChange,
                                                        disabled: readOnly,
                                                        multiselect: true,
                                                        placeholder: "Select one or more languages"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                                        lineNumber: 2709,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                    lineNumber: 2708,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuizEditor.tsx",
                                                lineNumber: 2707,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                        lineNumber: 2658,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center py-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex bg-[#222222] rounded-lg p-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex items-center px-4 py-2 rounded-md text-sm font-medium cursor-pointer ".concat(activeEditorTab === 'question' ? 'bg-[#333333] text-white' : 'text-gray-400 hover:text-white'),
                                                    onClick: ()=>setActiveEditorTab('question'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                                            size: 16,
                                                            className: "mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuizEditor.tsx",
                                                            lineNumber: 2734,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Question"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                    lineNumber: 2727,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                selectedQuestionType.value !== 'subjective' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex items-center px-4 py-2 rounded-md text-sm font-medium cursor-pointer ".concat(activeEditorTab === 'answer' ? 'bg-[#333333] text-white' : 'text-gray-400 hover:text-white'),
                                                    onClick: ()=>setActiveEditorTab('answer'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            size: 16,
                                                            className: "mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuizEditor.tsx",
                                                            lineNumber: 2745,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Correct Answer"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                    lineNumber: 2738,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex items-center px-4 py-2 rounded-md text-sm font-medium cursor-pointer ".concat(activeEditorTab === 'scorecard' ? 'bg-[#333333] text-white' : 'text-gray-400 hover:text-white'),
                                                    onClick: ()=>setActiveEditorTab('scorecard'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {
                                                            size: 16,
                                                            className: "mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuizEditor.tsx",
                                                            lineNumber: 2756,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Scorecard"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                    lineNumber: 2749,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex items-center px-4 py-2 rounded-md text-sm font-medium cursor-pointer ".concat(activeEditorTab === 'knowledge' ? 'bg-[#333333] text-white' : 'text-gray-400 hover:text-white'),
                                                    onClick: ()=>setActiveEditorTab('knowledge'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                            size: 16,
                                                            className: "mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuizEditor.tsx",
                                                            lineNumber: 2767,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "AI Training Resources"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                    lineNumber: 2760,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/QuizEditor.tsx",
                                            lineNumber: 2726,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                        lineNumber: 2725,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-hidden",
                                        children: activeEditorTab === 'question' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "editor-container h-full min-h-screen overflow-y-auto overflow-hidden relative z-0 ".concat(highlightedField === 'question' ? 'm-2 outline outline-2 outline-red-400 shadow-md shadow-red-900/50 animate-pulse bg-[#2D1E1E]' : ''),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlockNoteEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    initialContent: currentQuestionContent,
                                                    onChange: handleQuestionContentChange,
                                                    isDarkMode: isDarkMode,
                                                    readOnly: readOnly,
                                                    onEditorReady: setEditorInstance,
                                                    className: "quiz-editor"
                                                }, "quiz-editor-question-".concat(currentQuestionIndex), false, {
                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                    lineNumber: 2779,
                                                    columnNumber: 53
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuizEditor.tsx",
                                                lineNumber: 2778,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QuizEditor.tsx",
                                            lineNumber: 2777,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0)) : activeEditorTab === 'answer' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "editor-container h-full min-h-screen overflow-y-auto overflow-hidden relative z-0 ".concat(highlightedField === 'answer' ? 'm-2 outline outline-2 outline-red-400 shadow-md shadow-red-900/50 animate-pulse bg-[#2D1E1E]' : ''),
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                // Ensure the correct answer editor keeps focus
                                                if (correctAnswerEditorRef.current) {
                                                    try {
                                                        // Try to focus the editor
                                                        correctAnswerEditorRef.current.focusEditor();
                                                    } catch (err) {
                                                        console.error("Error focusing correct answer editor:", err);
                                                    }
                                                }
                                            },
                                            onMouseDown: (e)=>{
                                                e.stopPropagation();
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlockNoteEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                initialContent: currentQuestionConfig.correctAnswer,
                                                onChange: handleCorrectAnswerChange,
                                                isDarkMode: isDarkMode,
                                                readOnly: readOnly,
                                                onEditorReady: setCorrectAnswerEditorInstance,
                                                className: "correct-answer-editor",
                                                placeholder: "Enter the correct answer here",
                                                allowMedia: false
                                            }, "correct-answer-editor-".concat(currentQuestionIndex), false, {
                                                fileName: "[project]/src/components/QuizEditor.tsx",
                                                lineNumber: 2808,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QuizEditor.tsx",
                                            lineNumber: 2791,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0)) : activeEditorTab === 'knowledge' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full flex flex-row overflow-y-auto p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[20%]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-[#222222] p-3 rounded-md",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                size: 16,
                                                                className: "text-amber-400 mb-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/QuizEditor.tsx",
                                                                lineNumber: 2825,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 text-xs leading-tight mb-2",
                                                                    children: [
                                                                        "These resources are ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-white",
                                                                            children: "optional"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/QuizEditor.tsx",
                                                                            lineNumber: 2828,
                                                                            columnNumber: 85
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        " and will ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-white",
                                                                            children: "not be shown to learners"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/QuizEditor.tsx",
                                                                            lineNumber: 2828,
                                                                            columnNumber: 149
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        " but can be used by AI to provide more accurate and helpful feedback"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                                    lineNumber: 2827,
                                                                    columnNumber: 61
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/QuizEditor.tsx",
                                                                lineNumber: 2826,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                                        lineNumber: 2824,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                    lineNumber: 2823,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[80%] flex flex-col",
                                                    children: readOnly && !(currentQuestion === null || currentQuestion === void 0 ? void 0 : (_currentQuestion_config = currentQuestion.config) === null || _currentQuestion_config === void 0 ? void 0 : (_currentQuestion_config_linkedMaterialIds = _currentQuestion_config.linkedMaterialIds) === null || _currentQuestion_config_linkedMaterialIds === void 0 ? void 0 : _currentQuestion_config_linkedMaterialIds.length) && (!(currentQuestion === null || currentQuestion === void 0 ? void 0 : (_currentQuestion_config1 = currentQuestion.config) === null || _currentQuestion_config1 === void 0 ? void 0 : (_currentQuestion_config_knowledgeBaseBlocks = _currentQuestion_config1.knowledgeBaseBlocks) === null || _currentQuestion_config_knowledgeBaseBlocks === void 0 ? void 0 : _currentQuestion_config_knowledgeBaseBlocks.length) || extractTextFromBlocks((currentQuestion === null || currentQuestion === void 0 ? void 0 : (_currentQuestion_config2 = currentQuestion.config) === null || _currentQuestion_config2 === void 0 ? void 0 : _currentQuestion_config2.knowledgeBaseBlocks) || []).trim().length === 0) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full flex flex-col items-center justify-center p-8 text-center rounded-lg bg-[#1A1A1A] h-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "max-w-md",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-xl font-light text-white mb-3",
                                                                    children: "No knowledge base found"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                                    lineNumber: 2842,
                                                                    columnNumber: 65
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 mb-6",
                                                                    children: "This question does not have any knowledge base attached to it"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                                    lineNumber: 2843,
                                                                    columnNumber: 65
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/QuizEditor.tsx",
                                                            lineNumber: 2841,
                                                            columnNumber: 61
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                                        lineNumber: 2840,
                                                        columnNumber: 57
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-4 ml-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LearningMaterialLinker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    courseId: courseId || '',
                                                                    linkedMaterialIds: (currentQuestion === null || currentQuestion === void 0 ? void 0 : (_currentQuestion_config3 = currentQuestion.config) === null || _currentQuestion_config3 === void 0 ? void 0 : _currentQuestion_config3.linkedMaterialIds) || [],
                                                                    readOnly: readOnly,
                                                                    onMaterialsChange: (linkedMaterialIds)=>{
                                                                        // Update the question config with the new linked material IDs
                                                                        const updatedQuestions = [
                                                                            ...questions
                                                                        ];
                                                                        const currentQuestion = updatedQuestions[currentQuestionIndex];
                                                                        const currentConfig = currentQuestion.config || {};
                                                                        updatedQuestions[currentQuestionIndex] = {
                                                                            ...currentQuestion,
                                                                            config: {
                                                                                ...currentConfig,
                                                                                linkedMaterialIds: linkedMaterialIds
                                                                            }
                                                                        };
                                                                        setQuestions(updatedQuestions);
                                                                        if (onChange) {
                                                                            onChange(updatedQuestions);
                                                                        }
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                                    lineNumber: 2852,
                                                                    columnNumber: 65
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/QuizEditor.tsx",
                                                                lineNumber: 2851,
                                                                columnNumber: 61
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full flex-1 bg-[#1A1A1A] rounded-md overflow-hidden relative z-0",
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    // Ensure the knowledge base editor keeps focus
                                                                    if (knowledgeBaseEditorRef.current) {
                                                                        try {
                                                                            // Try to focus the editor
                                                                            knowledgeBaseEditorRef.current.focusEditor();
                                                                        } catch (err) {
                                                                            console.error("Error focusing knowledge base editor:", err);
                                                                        }
                                                                    }
                                                                },
                                                                onMouseDown: (e)=>{
                                                                    e.stopPropagation();
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlockNoteEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    initialContent: currentQuestionConfig.knowledgeBaseBlocks || [],
                                                                    onChange: (content)=>{
                                                                        // Store blocks
                                                                        const updatedQuestions = [
                                                                            ...questions
                                                                        ];
                                                                        updatedQuestions[currentQuestionIndex] = {
                                                                            ...updatedQuestions[currentQuestionIndex],
                                                                            config: {
                                                                                ...updatedQuestions[currentQuestionIndex].config,
                                                                                knowledgeBaseBlocks: content
                                                                            }
                                                                        };
                                                                        setQuestions(updatedQuestions);
                                                                        if (onChange) {
                                                                            onChange(updatedQuestions);
                                                                        }
                                                                    },
                                                                    isDarkMode: isDarkMode,
                                                                    readOnly: readOnly,
                                                                    onEditorReady: setKnowledgeBaseEditorInstance,
                                                                    className: "knowledge-base-editor",
                                                                    placeholder: "Link existing materials using the button above or add new material here",
                                                                    allowMedia: false
                                                                }, "knowledge-base-editor-".concat(currentQuestionIndex), false, {
                                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                                    lineNumber: 2896,
                                                                    columnNumber: 65
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/QuizEditor.tsx",
                                                                lineNumber: 2879,
                                                                columnNumber: 61
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                                        lineNumber: 2849,
                                                        columnNumber: 57
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                    lineNumber: 2835,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/QuizEditor.tsx",
                                            lineNumber: 2821,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0)) : // Scorecard tab - show empty table if scorecard is selected, otherwise show placeholder
                                        currentQuestionConfig.scorecardData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full overflow-y-auto w-full p-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Scorecard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                ref: scorecardRef,
                                                name: ((_currentQuestionConfig_scorecardData = currentQuestionConfig.scorecardData) === null || _currentQuestionConfig_scorecardData === void 0 ? void 0 : _currentQuestionConfig_scorecardData.name) || scorecardTitle,
                                                criteria: ((_currentQuestionConfig_scorecardData1 = currentQuestionConfig.scorecardData) === null || _currentQuestionConfig_scorecardData1 === void 0 ? void 0 : _currentQuestionConfig_scorecardData1.criteria) || [],
                                                onDelete: ()=>{
                                                    // Check if scorecard is used by multiple questions
                                                    const scorecardForQuestion = questions[currentQuestionIndex].config.scorecardData;
                                                    if (scorecardForQuestion) {
                                                        const questionsUsingThisScorecard = questions.filter((q)=>q.config.scorecardData && q.config.scorecardData.id === scorecardForQuestion.id);
                                                        setScorecardUsedByMultiple(questionsUsingThisScorecard.length > 1);
                                                    }
                                                    setShowScorecardDeleteConfirm(true);
                                                },
                                                new: (_currentQuestionConfig_scorecardData2 = currentQuestionConfig.scorecardData) === null || _currentQuestionConfig_scorecardData2 === void 0 ? void 0 : _currentQuestionConfig_scorecardData2.new,
                                                readOnly: readOnly,
                                                linked: isLinkedScorecard(currentQuestionConfig.scorecardData),
                                                scorecardId: (_currentQuestionConfig_scorecardData3 = currentQuestionConfig.scorecardData) === null || _currentQuestionConfig_scorecardData3 === void 0 ? void 0 : _currentQuestionConfig_scorecardData3.id,
                                                allQuestions: questions,
                                                onSave: handleSaveScorecardChanges,
                                                originalName: ((_currentQuestionConfig_scorecardData4 = currentQuestionConfig.scorecardData) === null || _currentQuestionConfig_scorecardData4 === void 0 ? void 0 : _currentQuestionConfig_scorecardData4.id) ? (_originalScorecardData_get = originalScorecardData.get(currentQuestionConfig.scorecardData.id)) === null || _originalScorecardData_get === void 0 ? void 0 : _originalScorecardData_get.name : undefined,
                                                originalCriteria: ((_currentQuestionConfig_scorecardData5 = currentQuestionConfig.scorecardData) === null || _currentQuestionConfig_scorecardData5 === void 0 ? void 0 : _currentQuestionConfig_scorecardData5.id) ? (_originalScorecardData_get1 = originalScorecardData.get(currentQuestionConfig.scorecardData.id)) === null || _originalScorecardData_get1 === void 0 ? void 0 : _originalScorecardData_get1.criteria : undefined,
                                                onRevert: handleScorecardRevert,
                                                onDuplicate: async ()=>{
                                                    if (!currentQuestionConfig.scorecardData) {
                                                        return;
                                                    }
                                                    const originalScorecard = currentQuestionConfig.scorecardData;
                                                    try {
                                                        // Use the reusable function to create duplicated scorecard
                                                        const createdScorecard = await createScorecard("".concat(originalScorecard.name, " (Copy)"), originalScorecard.criteria);
                                                        // Create a duplicate scorecard with the backend ID
                                                        const duplicatedScorecard = {
                                                            id: createdScorecard.id,
                                                            name: createdScorecard.title,
                                                            new: true,
                                                            is_template: false,
                                                            criteria: [
                                                                ...originalScorecard.criteria
                                                            ] // Deep copy the criteria
                                                        };
                                                        // Update the current question to use the duplicated scorecard
                                                        handleConfigChange({
                                                            scorecardData: duplicatedScorecard
                                                        });
                                                        // Add the duplicated scorecard to school scorecards
                                                        const updatedScorecards = [
                                                            ...schoolScorecards,
                                                            duplicatedScorecard
                                                        ];
                                                        setSchoolScorecards(updatedScorecards);
                                                        // Add the new scorecard to originalScorecardData as the baseline for change detection
                                                        const updatedOriginalData = new Map(originalScorecardData);
                                                        updatedOriginalData.set(duplicatedScorecard.id, {
                                                            name: duplicatedScorecard.name,
                                                            criteria: JSON.parse(JSON.stringify(duplicatedScorecard.criteria))
                                                        });
                                                        setOriginalScorecardData(updatedOriginalData);
                                                        // Focus on the scorecard name for editing
                                                        setTimeout(()=>{
                                                            var _scorecardRef_current;
                                                            (_scorecardRef_current = scorecardRef.current) === null || _scorecardRef_current === void 0 ? void 0 : _scorecardRef_current.focusName();
                                                        }, 100);
                                                    } catch (error) {
                                                        console.error('Error duplicating scorecard:', error);
                                                        // Show error toast
                                                        setToastTitle("Duplication Failed");
                                                        setToastMessage("Failed to duplicate scorecard. Please try again.");
                                                        setToastEmoji("❌");
                                                        setShowToast(true);
                                                    }
                                                },
                                                onNameChange: (newName)=>{
                                                    if (!currentQuestionConfig.scorecardData) {
                                                        return;
                                                    }
                                                    const currentScorecardData = currentQuestionConfig.scorecardData;
                                                    // Update the title of the current scorecard
                                                    const updatedScorecardData = {
                                                        ...currentScorecardData,
                                                        name: newName
                                                    };
                                                    handleConfigChange({
                                                        scorecardData: updatedScorecardData
                                                    });
                                                    // Update the scorecard in schoolScorecards state
                                                    const updatedScorecards = schoolScorecards.map((sc)=>sc.id === currentScorecardData.id ? {
                                                            ...sc,
                                                            name: newName
                                                        } : sc);
                                                    setSchoolScorecards(updatedScorecards);
                                                    // sync all linked scorecards to reflect the name change
                                                    syncLinkedScorecards(currentScorecardData.id, newName);
                                                },
                                                onChange: (updatedCriteria)=>{
                                                    if (!currentQuestionConfig.scorecardData) {
                                                        return;
                                                    }
                                                    const currentScorecardData = currentQuestionConfig.scorecardData;
                                                    // Update the current question's scorecard
                                                    const updatedScorecardData = {
                                                        ...currentScorecardData,
                                                        criteria: updatedCriteria
                                                    };
                                                    handleConfigChange({
                                                        scorecardData: updatedScorecardData
                                                    });
                                                    // Update the scorecard in schoolScorecards state
                                                    const updatedScorecards = schoolScorecards.map((sc)=>sc.id === currentScorecardData.id ? {
                                                            ...sc,
                                                            criteria: updatedCriteria
                                                        } : sc);
                                                    setSchoolScorecards(updatedScorecards);
                                                    // sync all linked scorecards to reflect the criteria changes
                                                    syncLinkedScorecards(currentScorecardData.id, undefined, updatedCriteria);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuizEditor.tsx",
                                                lineNumber: 2931,
                                                columnNumber: 53
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QuizEditor.tsx",
                                            lineNumber: 2930,
                                            columnNumber: 49
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full flex flex-col items-center justify-center p-8 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-w-md",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-light text-white mb-3",
                                                        children: "What is a scorecard?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                                        lineNumber: 3067,
                                                        columnNumber: 57
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-400 mb-6",
                                                        children: "A scorecard is a set of parameters used to grade the answer to an open-ended question - either use one of our templates or create your own"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                                        lineNumber: 3068,
                                                        columnNumber: 57
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "flex items-center px-5 py-2.5 text-sm text-black bg-white hover:bg-gray-100 rounded-md transition-colors cursor-pointer mx-auto",
                                                        ref: scorecardButtonRef,
                                                        onClick: handleOpenScorecardDialog,
                                                        disabled: readOnly,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-5 h-5 rounded-full border border-black flex items-center justify-center mr-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    size: 12,
                                                                    className: "text-black"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuizEditor.tsx",
                                                                    lineNumber: 3078,
                                                                    columnNumber: 65
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/QuizEditor.tsx",
                                                                lineNumber: 3077,
                                                                columnNumber: 61
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Add a scorecard"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                                        lineNumber: 3071,
                                                        columnNumber: 57
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/QuizEditor.tsx",
                                                lineNumber: 3066,
                                                columnNumber: 53
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QuizEditor.tsx",
                                            lineNumber: 3065,
                                            columnNumber: 49
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QuizEditor.tsx",
                                        lineNumber: 2774,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/QuizEditor.tsx",
                                lineNumber: 2656,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true)
                }, void 0, false)
            }, void 0, false, {
                fileName: "[project]/src/components/QuizEditor.tsx",
                lineNumber: 2543,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScorecardPickerDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showScorecardDialog,
                onClose: ()=>setShowScorecardDialog(false),
                onCreateNew: handleCreateNewScorecard,
                onSelectTemplate: handleSelectScorecardTemplate,
                position: scorecardDialogPosition || undefined,
                schoolScorecards: schoolScorecards
            }, "scorecard-picker-".concat(schoolScorecards.length), false, {
                fileName: "[project]/src/components/QuizEditor.tsx",
                lineNumber: 3095,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                show: showToast,
                title: toastTitle,
                description: toastMessage,
                emoji: toastEmoji,
                onClose: ()=>setShowToast(false)
            }, void 0, false, {
                fileName: "[project]/src/components/QuizEditor.tsx",
                lineNumber: 3106,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "quiz-".concat(taskId, "-").concat(isEditMode ? 'edit' : 'view'), true, {
        fileName: "[project]/src/components/QuizEditor.tsx",
        lineNumber: 2485,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
}, "KXq/+NKDqmnwYfCuYUdPTgFalVI=")), "KXq/+NKDqmnwYfCuYUdPTgFalVI=");
_c1 = QuizEditor;
QuizEditor.displayName = 'QuizEditor';
const __TURBOPACK__default__export__ = QuizEditor;
var _c, _c1;
__turbopack_context__.k.register(_c, "QuizEditor$forwardRef");
__turbopack_context__.k.register(_c1, "QuizEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_QuizEditor_tsx_22912480._.js.map