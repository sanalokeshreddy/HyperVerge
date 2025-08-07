(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/LearnerQuizView.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>LearnerQuizView
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.28.0_react@19.1.1/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$split$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SplitSquareVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/square-split-vertical.js [app-client] (ecmascript) <export default as SplitSquareVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlockNoteEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BlockNoteEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChatView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScorecardView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScorecardView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ConfirmationDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuizEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/QuizEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodeEditorView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CodeEditorView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$localStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/localStorage.ts [app-client] (ecmascript)");
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
function LearnerQuizView(param) {
    let { questions = [], onSubmitAnswer, isDarkMode = true, className = "", viewOnly = false, currentQuestionId, onQuestionChange, userId = '', isTestMode = false, taskId = '', completedQuestionIds: initialCompletedQuestionIds = {}, onAiRespondingChange, onMobileViewChange, isAdminView = false } = param;
    var _validQuestions_currentQuestionIndex, _validQuestions_currentQuestionIndex1, _validQuestions_currentQuestionIndex2, _validQuestions_currentQuestionIndex3;
    _s();
    // Constant message for exam submission confirmation
    const EXAM_CONFIRMATION_MESSAGE = "Thank you for your submission. We will review it shortly";
    // Add state for tracking view mode
    const [showLearnerView, setShowLearnerView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Current question index
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Update current question index when currentQuestionId changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearnerQuizView.useEffect": ()=>{
            if (currentQuestionId && questions.length > 0) {
                const index = questions.findIndex({
                    "LearnerQuizView.useEffect.index": (q)=>q.id === currentQuestionId
                }["LearnerQuizView.useEffect.index"]);
                if (index !== -1) {
                    setCurrentQuestionIndex(index);
                    // Reset to chat view when changing questions
                    setIsViewingScorecard(false);
                }
            }
        }
    }["LearnerQuizView.useEffect"], [
        currentQuestionId,
        questions
    ]);
    // Ensure we have valid questions
    const validQuestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LearnerQuizView.useMemo[validQuestions]": ()=>{
            // Don't filter out any questions, just convert format if needed
            return (questions || []).map({
                "LearnerQuizView.useMemo[validQuestions]": (q)=>{
                    // If the question is null or undefined, return it with default empty values
                    if (!q) {
                        return {
                            id: "question-".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9)),
                            content: [],
                            config: {
                                inputType: 'text',
                                responseType: 'chat',
                                questionType: 'objective',
                                correctAnswer: [],
                                audioMaxDuration: 120,
                                scorecardData: undefined,
                                codingLanguages: [] // Default code language
                            }
                        };
                    }
                    // If the question already has the right format, use it as is
                    if (q.content && Array.isArray(q.content)) {
                        var _q_config, _q_config1, _q_config2, _q_config3, _q_config4, _q_config5, _q_config6;
                        // Ensure config has all required properties with defaults
                        const completeConfig = {
                            ...q.config,
                            inputType: ((_q_config = q.config) === null || _q_config === void 0 ? void 0 : _q_config.inputType) || 'text',
                            responseType: (_q_config1 = q.config) === null || _q_config1 === void 0 ? void 0 : _q_config1.responseType,
                            questionType: (_q_config2 = q.config) === null || _q_config2 === void 0 ? void 0 : _q_config2.questionType,
                            correctAnswer: ((_q_config3 = q.config) === null || _q_config3 === void 0 ? void 0 : _q_config3.correctAnswer) || [],
                            audioMaxDuration: ((_q_config4 = q.config) === null || _q_config4 === void 0 ? void 0 : _q_config4.audioMaxDuration) || 120,
                            scorecardData: (_q_config5 = q.config) === null || _q_config5 === void 0 ? void 0 : _q_config5.scorecardData,
                            codingLanguages: ((_q_config6 = q.config) === null || _q_config6 === void 0 ? void 0 : _q_config6.codingLanguages) || [] // Ensure code language is set
                        };
                        return {
                            ...q,
                            config: completeConfig
                        };
                    }
                    // Handle API format where content might be in 'blocks' property
                    if (q.blocks && Array.isArray(q.blocks)) {
                        const config = q.config || {};
                        return {
                            id: q.id || "question-".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9)),
                            content: q.blocks,
                            config: {
                                ...config,
                                inputType: config.inputType || 'text',
                                responseType: config.responseType,
                                questionType: config.questionType,
                                correctAnswer: config.correctAnswer || [],
                                audioMaxDuration: config.audioMaxDuration || 120,
                                scorecardData: config.scorecardData,
                                codingLanguages: config.codingLanguages || [] // Ensure code language is set
                            }
                        };
                    }
                    // Return a default structure for any other case
                    const config = q.config || {};
                    return {
                        id: q.id || "question-".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9)),
                        content: [],
                        config: {
                            ...config,
                            inputType: config.inputType || 'text',
                            responseType: config.responseType,
                            questionType: config.questionType,
                            correctAnswer: config.correctAnswer || [],
                            audioMaxDuration: config.audioMaxDuration || 120,
                            scorecardData: config.scorecardData,
                            codingLanguages: config.codingLanguages || [] // Ensure code language is set
                        }
                    };
                }
            }["LearnerQuizView.useMemo[validQuestions]"]);
        }
    }["LearnerQuizView.useMemo[validQuestions]"], [
        questions
    ]);
    // Current answer input
    const [currentAnswer, setCurrentAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // State to track if an answer is being submitted
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Modify the state to track chat history per question
    const [chatHistories, setChatHistories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // State to track if AI is responding
    const [isAiResponding, setIsAiResponding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // State to track if chat history has been loaded
    const [isChatHistoryLoaded, setIsChatHistoryLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // State to track if we should show the preparing report button
    const [showPreparingReport, setShowPreparingReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // New state to track if we're viewing a scorecard
    const [isViewingScorecard, setIsViewingScorecard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // New state to track which scorecard we're viewing
    const [activeScorecard, setActiveScorecard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Add state to remember chat scroll position
    const [chatScrollPosition, setChatScrollPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Add state for navigation confirmation dialog
    const [showNavigationConfirmation, setShowNavigationConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingNavigation, setPendingNavigation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Reference to the input element to maintain focus
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Reference to the chat container for scrolling
    const chatContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Add a reference for the scorecard container
    const scorecardContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Reference to the ChatView component
    const chatViewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Store the current answer in a ref to avoid re-renders
    const currentAnswerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(currentAnswer);
    // Store the handleSubmitAnswer function in a ref to avoid circular dependencies
    const handleSubmitAnswerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "LearnerQuizView.useRef[handleSubmitAnswerRef]": ()=>{}
    }["LearnerQuizView.useRef[handleSubmitAnswerRef]"]);
    // Use a single state to track completed/submitted questions - initialize with props
    const [completedQuestionIds, setCompletedQuestionIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCompletedQuestionIds);
    // Update completedQuestionIds when the prop changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearnerQuizView.useEffect": ()=>{
            // To avoid infinite update loops, only update if there are actual differences
            const hasChanges = Object.keys(initialCompletedQuestionIds).some({
                "LearnerQuizView.useEffect.hasChanges": (id)=>initialCompletedQuestionIds[id] !== completedQuestionIds[id]
            }["LearnerQuizView.useEffect.hasChanges"]);
            if (hasChanges) {
                setCompletedQuestionIds({
                    "LearnerQuizView.useEffect": (prev)=>({
                            ...prev,
                            ...initialCompletedQuestionIds
                        })
                }["LearnerQuizView.useEffect"]);
            }
        }
    }["LearnerQuizView.useEffect"], [
        initialCompletedQuestionIds,
        completedQuestionIds
    ]);
    // State to track which questions are currently being submitted (waiting for API response)
    const [pendingSubmissionQuestionIds, setPendingSubmissionQuestionIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Update the ref when the state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearnerQuizView.useEffect": ()=>{
            currentAnswerRef.current = currentAnswer;
        }
    }["LearnerQuizView.useEffect"], [
        currentAnswer
    ]);
    // Effect to focus the input when the component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearnerQuizView.useEffect": ()=>{
            // Focus the input field when the component mounts
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    }["LearnerQuizView.useEffect"], []);
    // Reset chat history loaded state when taskId changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearnerQuizView.useEffect": ()=>{
            if (taskId) {
                setIsChatHistoryLoaded(false);
            }
        }
    }["LearnerQuizView.useEffect"], [
        taskId
    ]);
    // Get the current question's chat history
    const currentChatHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LearnerQuizView.useMemo[currentChatHistory]": ()=>{
            var _validQuestions_currentQuestionIndex, _validQuestions_currentQuestionIndex_config, _validQuestions_currentQuestionIndex1;
            const currentQuestionId = ((_validQuestions_currentQuestionIndex = validQuestions[currentQuestionIndex]) === null || _validQuestions_currentQuestionIndex === void 0 ? void 0 : _validQuestions_currentQuestionIndex.id) || '';
            const history = chatHistories[currentQuestionId] || [];
            // For exam questions with existing chat history, we need to filter what's shown
            if (((_validQuestions_currentQuestionIndex1 = validQuestions[currentQuestionIndex]) === null || _validQuestions_currentQuestionIndex1 === void 0 ? void 0 : (_validQuestions_currentQuestionIndex_config = _validQuestions_currentQuestionIndex1.config) === null || _validQuestions_currentQuestionIndex_config === void 0 ? void 0 : _validQuestions_currentQuestionIndex_config.responseType) === 'exam') {
                // Find any user messages in the history
                const userMessages = history.filter({
                    "LearnerQuizView.useMemo[currentChatHistory].userMessages": (msg)=>msg.sender === 'user'
                }["LearnerQuizView.useMemo[currentChatHistory].userMessages"]);
                // Check if this question has a user message and is properly submitted (not currently in the submission process)
                const isSubmitted = completedQuestionIds[currentQuestionId] && !pendingSubmissionQuestionIds[currentQuestionId];
                // If we have user messages and the question is already submitted (not pending)
                if (userMessages.length > 0 && isSubmitted) {
                    // Get the last user message
                    const lastUserMessage = userMessages[userMessages.length - 1];
                    // If showing learner view, return only the last user message and confirmation
                    if (showLearnerView) {
                        return [
                            lastUserMessage,
                            {
                                id: "ai-confirmation-".concat(currentQuestionId),
                                content: EXAM_CONFIRMATION_MESSAGE,
                                sender: 'ai',
                                timestamp: new Date(),
                                messageType: 'text',
                                audioData: undefined,
                                scorecard: []
                            }
                        ];
                    }
                    // Otherwise return the full history to show AI feedback
                    return history;
                }
            }
            return history;
        }
    }["LearnerQuizView.useMemo[currentChatHistory]"], [
        chatHistories,
        currentQuestionIndex,
        validQuestions,
        completedQuestionIds,
        pendingSubmissionQuestionIds,
        showLearnerView
    ]);
    // Get the last user message for the current question
    const getLastUserMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LearnerQuizView.useMemo[getLastUserMessage]": ()=>{
            // Filter for user messages only
            const userMessages = currentChatHistory.filter({
                "LearnerQuizView.useMemo[getLastUserMessage].userMessages": (msg)=>msg.sender === 'user'
            }["LearnerQuizView.useMemo[getLastUserMessage].userMessages"]);
            // Return the last user message if exists
            return userMessages.length > 0 ? userMessages[userMessages.length - 1] : null;
        }
    }["LearnerQuizView.useMemo[getLastUserMessage]"], [
        currentChatHistory
    ]);
    // Fetch chat history from backend when component mounts or task changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearnerQuizView.useEffect": ()=>{
            // Skip if we're in test mode or if userId is not available or if we've already loaded chat history
            // Also skip if taskId is not provided
            if (isTestMode || !userId || isChatHistoryLoaded || !taskId) {
                return;
            }
            const fetchChatHistory = {
                "LearnerQuizView.useEffect.fetchChatHistory": async ()=>{
                    if (!validQuestions || validQuestions.length === 0) {
                        return;
                    }
                    try {
                        var _validQuestions_currentQuestionIndex_config, _validQuestions_currentQuestionIndex;
                        // Make API call to fetch chat history using the provided taskId
                        const response = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/chat/user/").concat(userId, "/task/").concat(taskId));
                        if (!response.ok) {
                            throw new Error("Failed to fetch chat history: ".concat(response.status));
                        }
                        const chatData = await response.json();
                        // Organize chat messages by question ID
                        const chatHistoryByQuestion = {};
                        // Track which questions had user messages
                        const questionsWithResponses = {};
                        // Process messages sequentially with Promise.all for audio messages
                        await Promise.all(chatData.map({
                            "LearnerQuizView.useEffect.fetchChatHistory": async (message)=>{
                                const questionId = message.question_id.toString();
                                if (!chatHistoryByQuestion[questionId]) {
                                    chatHistoryByQuestion[questionId] = [];
                                }
                                // For audio messages, fetch the actual audio data
                                let audioData = undefined;
                                if (message.response_type === 'audio') {
                                    try {
                                        // Get presigned URL
                                        const file_uuid = message.content;
                                        const presignedResponse = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/file/presigned-url/get?uuid=").concat(file_uuid, "&file_extension=wav"), {
                                            method: 'GET',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            }
                                        });
                                        let audioResponse = null;
                                        if (!presignedResponse.ok) {
                                            audioResponse = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/file/download-local/?uuid=").concat(message.content, "&file_extension=wav"));
                                            if (!audioResponse.ok) {
                                                throw new Error('Failed to fetch audio data from backend');
                                            }
                                        } else {
                                            const { url: presignedUrl } = await presignedResponse.json();
                                            // Fetch the audio data using the presigned URL
                                            audioResponse = await fetch(presignedUrl);
                                            if (!audioResponse.ok) {
                                                throw new Error('Failed to fetch audio data from presigned URL');
                                            }
                                        }
                                        // Convert the audio data to base64
                                        const audioBlob = await audioResponse.blob();
                                        audioData = await blobToBase64(audioBlob);
                                    } catch (error) {
                                        console.error('Error fetching audio data:', error);
                                    }
                                }
                                // Convert API message to ChatMessage format
                                const chatMessage = {
                                    id: "".concat(message.role, "-").concat(message.id),
                                    content: message.content,
                                    sender: message.role === 'user' ? 'user' : 'ai',
                                    timestamp: new Date(message.created_at),
                                    messageType: message.response_type,
                                    audioData: audioData,
                                    scorecard: []
                                };
                                // If this is an AI message, try to parse the content as JSON
                                if (message.role === 'assistant') {
                                    try {
                                        // Try to parse the content as JSON
                                        const contentObj = JSON.parse(message.content);
                                        // Extract the feedback field to display as the message content
                                        if (contentObj && contentObj.feedback) {
                                            chatMessage.content = contentObj.feedback;
                                        }
                                        // Extract scorecard if available
                                        if (contentObj && contentObj.scorecard) {
                                            chatMessage.scorecard = contentObj.scorecard;
                                        }
                                        // Extract is_correct if available
                                        if (contentObj && contentObj.is_correct !== undefined) {
                                            chatMessage.is_correct = contentObj.is_correct;
                                        }
                                    } catch (error) {
                                    // If parsing fails, assume it's the old format (plain text)
                                    // Keep the original content as is - it's already set in chatMessage
                                    }
                                }
                                // Track questions with user responses for exam questions
                                if (message.role === 'user') {
                                    questionsWithResponses[questionId] = true;
                                }
                                chatHistoryByQuestion[questionId].push(chatMessage);
                            }
                        }["LearnerQuizView.useEffect.fetchChatHistory"]));
                        // Sort chat history by timestamp for each question to ensure correct order
                        Object.keys(chatHistoryByQuestion).forEach({
                            "LearnerQuizView.useEffect.fetchChatHistory": (questionId)=>{
                                chatHistoryByQuestion[questionId].sort({
                                    "LearnerQuizView.useEffect.fetchChatHistory": (a, b)=>a.timestamp.getTime() - b.timestamp.getTime()
                                }["LearnerQuizView.useEffect.fetchChatHistory"]);
                            }
                        }["LearnerQuizView.useEffect.fetchChatHistory"]);
                        // Update chat histories state
                        setChatHistories(chatHistoryByQuestion);
                        // For exam questions with responses, mark them as completed
                        if (((_validQuestions_currentQuestionIndex = validQuestions[currentQuestionIndex]) === null || _validQuestions_currentQuestionIndex === void 0 ? void 0 : (_validQuestions_currentQuestionIndex_config = _validQuestions_currentQuestionIndex.config) === null || _validQuestions_currentQuestionIndex_config === void 0 ? void 0 : _validQuestions_currentQuestionIndex_config.responseType) === 'exam') {
                            setCompletedQuestionIds({
                                "LearnerQuizView.useEffect.fetchChatHistory": (prev)=>({
                                        ...prev,
                                        ...questionsWithResponses
                                    })
                            }["LearnerQuizView.useEffect.fetchChatHistory"]);
                            // Clear any pending submissions for these questions since they're loaded from history
                            setPendingSubmissionQuestionIds({
                                "LearnerQuizView.useEffect.fetchChatHistory": (prev)=>{
                                    const newState = {
                                        ...prev
                                    };
                                    Object.keys(questionsWithResponses).forEach({
                                        "LearnerQuizView.useEffect.fetchChatHistory": (id)=>{
                                            delete newState[id];
                                        }
                                    }["LearnerQuizView.useEffect.fetchChatHistory"]);
                                    return newState;
                                }
                            }["LearnerQuizView.useEffect.fetchChatHistory"]);
                        }
                        setIsChatHistoryLoaded(true);
                    } catch (error) {
                        console.error("Error fetching chat history:", error);
                    }
                }
            }["LearnerQuizView.useEffect.fetchChatHistory"];
            fetchChatHistory();
        }
    }["LearnerQuizView.useEffect"], [
        isTestMode,
        userId,
        validQuestions,
        isChatHistoryLoaded,
        taskId
    ]);
    // Helper function to convert Blob to base64
    const blobToBase64 = (blob)=>{
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onloadend = ()=>{
                const base64String = reader.result;
                // Extract the base64 data portion (remove "data:audio/wav;base64," prefix)
                const base64Data = base64String.split(',')[1];
                resolve(base64Data);
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    };
    // Effect to focus the input when the question changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearnerQuizView.useEffect": ()=>{
            // Ensure the input is focused after a short delay to allow the DOM to fully render
            const timer = setTimeout({
                "LearnerQuizView.useEffect.timer": ()=>{
                    if (inputRef.current) {
                        inputRef.current.focus();
                    }
                }
            }["LearnerQuizView.useEffect.timer"], 100);
            return ({
                "LearnerQuizView.useEffect": ()=>clearTimeout(timer)
            })["LearnerQuizView.useEffect"];
        }
    }["LearnerQuizView.useEffect"], [
        currentQuestionIndex
    ]);
    // Effect to log and validate questions when they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearnerQuizView.useEffect": ()=>{
            if (validQuestions.length > 0 && currentQuestionIndex >= validQuestions.length) {
                setCurrentQuestionIndex(0);
            }
        }
    }["LearnerQuizView.useEffect"], [
        questions,
        validQuestions,
        currentQuestionIndex
    ]);
    // Effect to scroll to the bottom of the chat when new messages are added
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearnerQuizView.useEffect": ()=>{
            if (chatContainerRef.current) {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }
        }
    }["LearnerQuizView.useEffect"], [
        chatHistories
    ]);
    // Navigate to previous question
    const goToPreviousQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LearnerQuizView.useCallback[goToPreviousQuestion]": ()=>{
            // If AI is responding, show confirmation dialog
            if (isAiResponding) {
                setPendingNavigation('prev');
                setShowNavigationConfirmation(true);
                return;
            }
            // Otherwise proceed with navigation
            executeGoToPreviousQuestion();
        }
    }["LearnerQuizView.useCallback[goToPreviousQuestion]"], [
        currentQuestionIndex,
        onQuestionChange,
        validQuestions,
        isAiResponding
    ]);
    // Execute navigation to previous question without checks
    const executeGoToPreviousQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LearnerQuizView.useCallback[executeGoToPreviousQuestion]": ()=>{
            if (currentQuestionIndex > 0) {
                const newIndex = currentQuestionIndex - 1;
                setCurrentQuestionIndex(newIndex);
                setCurrentAnswer(""); // Reset answer when changing questions
                // Reset to chat view when changing questions
                setIsViewingScorecard(false);
                // Always notify parent component about question change
                if (onQuestionChange && validQuestions[newIndex]) {
                    onQuestionChange(validQuestions[newIndex].id);
                }
            }
        }
    }["LearnerQuizView.useCallback[executeGoToPreviousQuestion]"], [
        currentQuestionIndex,
        onQuestionChange,
        validQuestions
    ]);
    // Navigate to next question
    const goToNextQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LearnerQuizView.useCallback[goToNextQuestion]": ()=>{
            // If AI is responding, show confirmation dialog
            if (isAiResponding) {
                setPendingNavigation('next');
                setShowNavigationConfirmation(true);
                return;
            }
            // Otherwise proceed with navigation
            executeGoToNextQuestion();
        }
    }["LearnerQuizView.useCallback[goToNextQuestion]"], [
        currentQuestionIndex,
        validQuestions.length,
        onQuestionChange,
        validQuestions,
        isAiResponding
    ]);
    // Execute navigation to next question without checks
    const executeGoToNextQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LearnerQuizView.useCallback[executeGoToNextQuestion]": ()=>{
            if (currentQuestionIndex < validQuestions.length - 1) {
                const newIndex = currentQuestionIndex + 1;
                setCurrentQuestionIndex(newIndex);
                setCurrentAnswer(""); // Reset answer when changing questions
                // Reset to chat view when changing questions
                setIsViewingScorecard(false);
                // Always notify parent component about question change
                if (onQuestionChange && validQuestions[newIndex]) {
                    onQuestionChange(validQuestions[newIndex].id);
                }
            }
        }
    }["LearnerQuizView.useCallback[executeGoToNextQuestion]"], [
        currentQuestionIndex,
        validQuestions.length,
        onQuestionChange,
        validQuestions
    ]);
    // Handle navigation confirmation
    const handleNavigationConfirm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LearnerQuizView.useCallback[handleNavigationConfirm]": ()=>{
            setShowNavigationConfirmation(false);
            // Execute the navigation based on pending action
            if (pendingNavigation === 'next') {
                executeGoToNextQuestion();
            } else if (pendingNavigation === 'prev') {
                executeGoToPreviousQuestion();
            }
            setPendingNavigation(null);
        }
    }["LearnerQuizView.useCallback[handleNavigationConfirm]"], [
        executeGoToNextQuestion,
        executeGoToPreviousQuestion,
        pendingNavigation
    ]);
    // Handle navigation cancellation
    const handleNavigationCancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LearnerQuizView.useCallback[handleNavigationCancel]": ()=>{
            setShowNavigationConfirmation(false);
            setPendingNavigation(null);
        }
    }["LearnerQuizView.useCallback[handleNavigationCancel]"], []);
    // Handle input change with focus preservation
    const handleInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LearnerQuizView.useCallback[handleInputChange]": (e)=>{
            const newValue = e.target.value;
            setCurrentAnswer(newValue);
            currentAnswerRef.current = newValue;
        }
    }["LearnerQuizView.useCallback[handleInputChange]"], []); // No dependencies to ensure stability
    // Function to store chat history in backend
    const storeChatHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LearnerQuizView.useCallback[storeChatHistory]": async (questionId, userMessage, aiResponse)=>{
            var _currentQuestion_config, _currentQuestion_config1;
            if (!userId || isTestMode) return;
            // For quiz questions, use the completedQuestionIds state
            const userIsSolved = completedQuestionIds[questionId] || false;
            // For AI messages, check if it contains feedback about correctness
            // We'll extract the is_correct value from the message if it exists
            let aiIsSolved = false;
            try {
                // Try to parse the AI message as JSON to see if it contains is_correct
                if (aiResponse && typeof aiResponse.is_correct === 'boolean') {
                    aiIsSolved = aiResponse.is_correct;
                }
            } catch (e) {
                console.error('Error parsing AI message:', e);
            }
            // Get the response type from the current question config
            const currentQuestion = validQuestions.find({
                "LearnerQuizView.useCallback[storeChatHistory].currentQuestion": (q)=>q.id === questionId
            }["LearnerQuizView.useCallback[storeChatHistory].currentQuestion"]);
            // Create content based on the response type
            let contentObj = {};
            if ((currentQuestion === null || currentQuestion === void 0 ? void 0 : (_currentQuestion_config = currentQuestion.config) === null || _currentQuestion_config === void 0 ? void 0 : _currentQuestion_config.questionType) === 'subjective') {
                // For report type, include both feedback and scorecard
                contentObj = {
                    feedback: aiResponse.feedback,
                    scorecard: aiResponse.scorecard || []
                };
            } else {
                // For chat type or any other type, just include feedback
                contentObj = {
                    feedback: aiResponse.feedback,
                    is_correct: aiResponse.is_correct
                };
            }
            let aiContent = JSON.stringify(contentObj);
            const messages = [
                {
                    role: "user",
                    content: userMessage.content,
                    response_type: userMessage.messageType,
                    audio_data: userMessage.messageType === 'audio' ? userMessage.audioData : undefined,
                    created_at: userMessage.timestamp
                },
                {
                    role: "assistant",
                    content: aiContent,
                    response_type: null,
                    created_at: new Date()
                }
            ];
            const isComplete = (currentQuestion === null || currentQuestion === void 0 ? void 0 : (_currentQuestion_config1 = currentQuestion.config) === null || _currentQuestion_config1 === void 0 ? void 0 : _currentQuestion_config1.responseType) === 'exam' ? true : !userIsSolved && aiIsSolved;
            const requestBody = {
                user_id: parseInt(userId),
                question_id: parseInt(questionId),
                messages: messages,
                is_complete: isComplete
            };
            try {
                const response = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/chat/"), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                });
                if (!response.ok) {
                    throw new Error('Failed to store chat history');
                }
            } catch (error) {
                console.error('Error storing chat history:', error);
            }
        }
    }["LearnerQuizView.useCallback[storeChatHistory]"], [
        userId,
        isTestMode,
        completedQuestionIds,
        validQuestions
    ]);
    // Process a user response (shared logic between text and audio submission)
    const processUserResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LearnerQuizView.useCallback[processUserResponse]": async function(responseContent) {
            let responseType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'text', audioData = arguments.length > 2 ? arguments[2] : void 0;
            var _validQuestions_currentQuestionIndex_config, _validQuestions_currentQuestionIndex, _validQuestions_currentQuestionIndex_config1, _validQuestions_currentQuestionIndex1;
            if (!validQuestions || validQuestions.length === 0 || currentQuestionIndex >= validQuestions.length) {
                return;
            }
            const currentQuestionId = validQuestions[currentQuestionIndex].id;
            // Set submitting state to true
            setIsSubmitting(true);
            // Create the user message object
            const userMessage = {
                id: "user-".concat(Date.now()),
                content: responseContent,
                sender: 'user',
                timestamp: new Date(),
                messageType: responseType,
                audioData: audioData,
                scorecard: []
            };
            // Handle code type message differently for UI display
            // Only set messageType to 'code' when it actually comes from the code editor
            // or when the responseType is explicitly set to 'code'
            if (responseType === 'code') {
                userMessage.messageType = 'code';
            }
            // Don't automatically convert text messages to code messages for coding questions
            // Immediately add the user's message to chat history
            setChatHistories({
                "LearnerQuizView.useCallback[processUserResponse]": (prev)=>({
                        ...prev,
                        [currentQuestionId]: [
                            ...prev[currentQuestionId] || [],
                            userMessage
                        ]
                    })
            }["LearnerQuizView.useCallback[processUserResponse]"]);
            // Clear the input field after submission (only for text input)
            if (responseType === 'text' || responseType === 'code') {
                setCurrentAnswer("");
                currentAnswerRef.current = "";
                // Focus the input field again
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            }
            // Special case: For exam questions in test mode, don't make the API call
            // instead show confirmation immediately
            if (((_validQuestions_currentQuestionIndex = validQuestions[currentQuestionIndex]) === null || _validQuestions_currentQuestionIndex === void 0 ? void 0 : (_validQuestions_currentQuestionIndex_config = _validQuestions_currentQuestionIndex.config) === null || _validQuestions_currentQuestionIndex_config === void 0 ? void 0 : _validQuestions_currentQuestionIndex_config.responseType) === 'exam' && isTestMode) {
                // Mark this question as completed
                setCompletedQuestionIds({
                    "LearnerQuizView.useCallback[processUserResponse]": (prev)=>({
                            ...prev,
                            [currentQuestionId]: true
                        })
                }["LearnerQuizView.useCallback[processUserResponse]"]);
                // Call the onSubmitAnswer callback to mark completion
                if (onSubmitAnswer) {
                    onSubmitAnswer(currentQuestionId, responseType === 'audio' ? audioData || '' : responseContent);
                }
                // Add confirmation message immediately
                const confirmationMessage = {
                    id: "ai-".concat(Date.now()),
                    content: EXAM_CONFIRMATION_MESSAGE,
                    sender: 'ai',
                    timestamp: new Date(),
                    messageType: 'text',
                    audioData: undefined
                };
                // Update chat history with confirmation message
                setChatHistories({
                    "LearnerQuizView.useCallback[processUserResponse]": (prev)=>({
                            ...prev,
                            [currentQuestionId]: [
                                ...prev[currentQuestionId] || [],
                                confirmationMessage
                            ]
                        })
                }["LearnerQuizView.useCallback[processUserResponse]"]);
                // Reset states
                setIsSubmitting(false);
                return; // Skip the API call completely
            }
            // For exam questions, mark as pending submission
            if (((_validQuestions_currentQuestionIndex1 = validQuestions[currentQuestionIndex]) === null || _validQuestions_currentQuestionIndex1 === void 0 ? void 0 : (_validQuestions_currentQuestionIndex_config1 = _validQuestions_currentQuestionIndex1.config) === null || _validQuestions_currentQuestionIndex_config1 === void 0 ? void 0 : _validQuestions_currentQuestionIndex_config1.responseType) === 'exam') {
                setPendingSubmissionQuestionIds({
                    "LearnerQuizView.useCallback[processUserResponse]": (prev)=>({
                            ...prev,
                            [currentQuestionId]: true
                        })
                }["LearnerQuizView.useCallback[processUserResponse]"]);
            }
            // Show the AI typing animation
            setIsAiResponding(true);
            // Prepare the request body based on whether this is a teacher testing or a real learner
            let requestBody;
            if (isTestMode) {
                // In teacher testing mode, send chat_history and question data
                // Format the chat history for the current question
                const formattedChatHistory = (chatHistories[currentQuestionId] || []).map({
                    "LearnerQuizView.useCallback[processUserResponse].formattedChatHistory": (msg)=>({
                            role: msg.sender === 'user' ? 'user' : 'assistant',
                            content: msg.sender === 'user' ? msg.content : validQuestions[currentQuestionIndex].config.questionType === 'objective' ? JSON.stringify({
                                feedback: msg.content
                            }) : JSON.stringify({
                                feedback: msg.content,
                                scorecard: msg.scorecard
                            }),
                            response_type: msg.messageType,
                            audio_data: msg.audioData
                        })
                }["LearnerQuizView.useCallback[processUserResponse].formattedChatHistory"]);
                let scorecardId = undefined;
                if (validQuestions[currentQuestionIndex].config.questionType === 'subjective') {
                    var _validQuestions_currentQuestionIndex_config_scorecardData;
                    scorecardId = (_validQuestions_currentQuestionIndex_config_scorecardData = validQuestions[currentQuestionIndex].config.scorecardData) === null || _validQuestions_currentQuestionIndex_config_scorecardData === void 0 ? void 0 : _validQuestions_currentQuestionIndex_config_scorecardData.id;
                }
                // Create the request body for teacher testing mode
                requestBody = {
                    user_response: responseType === 'audio' ? audioData : responseContent,
                    ...responseType === 'audio' && {
                        response_type: "audio"
                    },
                    ...responseType === 'code' && {
                        response_type: "code"
                    },
                    chat_history: formattedChatHistory,
                    question: {
                        "blocks": validQuestions[currentQuestionIndex].content,
                        "response_type": validQuestions[currentQuestionIndex].config.responseType,
                        "answer": validQuestions[currentQuestionIndex].config.correctAnswer,
                        "type": validQuestions[currentQuestionIndex].config.questionType,
                        "input_type": validQuestions[currentQuestionIndex].config.inputType,
                        "scorecard_id": scorecardId,
                        "coding_languages": validQuestions[currentQuestionIndex].config.codingLanguages,
                        "context": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuizEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getKnowledgeBaseContent"])(validQuestions[currentQuestionIndex].config)
                    },
                    user_id: userId,
                    task_id: taskId,
                    task_type: 'quiz'
                };
            } else {
                // In normal mode, send question_id and user_id
                requestBody = {
                    user_response: responseType === 'audio' ? audioData : responseContent,
                    response_type: responseType,
                    question_id: currentQuestionId,
                    user_id: userId,
                    task_id: taskId,
                    task_type: 'quiz'
                };
            }
            // Create a message ID for the streaming response
            const aiMessageId = "ai-".concat(Date.now());
            // Create an initial empty message for streaming content
            const initialAiMessage = {
                id: aiMessageId,
                content: "",
                sender: 'ai',
                timestamp: new Date(),
                messageType: 'text',
                audioData: undefined,
                scorecard: []
            };
            let isCorrect = false;
            // Track if we've received any feedback
            let receivedAnyFeedback = false;
            // For audio responses, get a presigned URL to upload the audio file
            if (responseType === 'audio' && audioData) {
                let presigned_url = '';
                let file_uuid = '';
                try {
                    // First, get a presigned URL for the audio file
                    const presignedUrlResponse = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/file/presigned-url/create"), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            content_type: "audio/wav"
                        })
                    });
                    if (!presignedUrlResponse.ok) {
                        throw new Error('Failed to get presigned URL');
                    }
                    const presignedData = await presignedUrlResponse.json();
                    presigned_url = presignedData.presigned_url;
                    file_uuid = presignedData.file_uuid;
                } catch (error) {
                    console.error("Error getting presigned URL for audio:", error);
                }
                // Convert base64 audio data to a Blob
                const binaryData = atob(audioData);
                const arrayBuffer = new ArrayBuffer(binaryData.length);
                const uint8Array = new Uint8Array(arrayBuffer);
                for(let i = 0; i < binaryData.length; i++){
                    uint8Array[i] = binaryData.charCodeAt(i);
                }
                // Create audio blob with WAV format
                const audioBlob = new Blob([
                    uint8Array
                ], {
                    type: 'audio/wav'
                });
                if (!presigned_url) {
                    // If we couldn't get a presigned URL, try direct upload to the backend
                    try {
                        console.log("Attempting direct upload to backend");
                        // Create FormData for the file upload
                        const formData = new FormData();
                        formData.append('file', audioBlob, 'audio.wav');
                        formData.append('content_type', 'audio/wav');
                        // Upload directly to the backend
                        const uploadResponse = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/file/upload-local"), {
                            method: 'POST',
                            body: formData
                        });
                        if (!uploadResponse.ok) {
                            throw new Error("Failed to upload audio to backend: ".concat(uploadResponse.status));
                        }
                        const uploadData = await uploadResponse.json();
                        file_uuid = uploadData.file_uuid;
                        console.log('Audio file uploaded successfully to backend');
                        // Update the request body with the file information
                        requestBody.user_response = file_uuid || '';
                        userMessage.content = file_uuid || '';
                    } catch (error) {
                        console.error('Error with direct upload to backend:', error);
                        throw error;
                    }
                } else {
                    // Upload the audio file to S3 using the presigned URL
                    try {
                        // Upload to S3 using the presigned URL with WAV content type
                        const uploadResponse = await fetch(presigned_url, {
                            method: 'PUT',
                            body: audioBlob,
                            headers: {
                                'Content-Type': 'audio/wav'
                            }
                        });
                        if (!uploadResponse.ok) {
                            throw new Error("Failed to upload audio to S3: ".concat(uploadResponse.status));
                        }
                        console.log('Audio file uploaded successfully to S3');
                        // Update the request body with the file information
                        requestBody.user_response = file_uuid;
                        userMessage.content = file_uuid || '';
                    } catch (error) {
                        console.error('Error uploading audio to S3:', error);
                        throw error;
                    }
                }
            }
            // Call the API with the appropriate request body for streaming response
            fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/ai/chat"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            }).then({
                "LearnerQuizView.useCallback[processUserResponse]": (response)=>{
                    var _response_body;
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    // Get the response reader for streaming for both exam and quiz
                    const reader = (_response_body = response.body) === null || _response_body === void 0 ? void 0 : _response_body.getReader();
                    if (!reader) {
                        throw new Error('Failed to get response reader');
                    }
                    // Function to process the streaming chunks
                    const processStream = {
                        "LearnerQuizView.useCallback[processUserResponse].processStream": async ()=>{
                            try {
                                var _validQuestions_currentQuestionIndex_config, _validQuestions_currentQuestionIndex;
                                let accumulatedFeedback = "";
                                // Add a variable to collect the complete scorecard
                                let completeScorecard = [];
                                // Add a flag to track if streaming is done
                                let streamingComplete = false;
                                while(true){
                                    const { done, value } = await reader.read();
                                    if (done) {
                                        streamingComplete = true;
                                        break;
                                    }
                                    // Convert the chunk to text
                                    const chunk = new TextDecoder().decode(value);
                                    // Split by newlines to handle multiple JSON objects in a single chunk
                                    const jsonLines = chunk.split('\n').filter({
                                        "LearnerQuizView.useCallback[processUserResponse].processStream.jsonLines": (line)=>line.trim()
                                    }["LearnerQuizView.useCallback[processUserResponse].processStream.jsonLines"]);
                                    for (const line of jsonLines){
                                        try {
                                            var _validQuestions_currentQuestionIndex_config1, _validQuestions_currentQuestionIndex1;
                                            const data = JSON.parse(line);
                                            // Handle feedback updates
                                            if (data.feedback) {
                                                var _validQuestions_currentQuestionIndex_config2, _validQuestions_currentQuestionIndex2;
                                                // Append to accumulated feedback
                                                accumulatedFeedback = data.feedback;
                                                // For practice questions, update the UI as we receive chunks
                                                if (((_validQuestions_currentQuestionIndex2 = validQuestions[currentQuestionIndex]) === null || _validQuestions_currentQuestionIndex2 === void 0 ? void 0 : (_validQuestions_currentQuestionIndex_config2 = _validQuestions_currentQuestionIndex2.config) === null || _validQuestions_currentQuestionIndex_config2 === void 0 ? void 0 : _validQuestions_currentQuestionIndex_config2.responseType) === 'chat') {
                                                    // If this is the first feedback chunk we've received
                                                    if (!receivedAnyFeedback) {
                                                        receivedAnyFeedback = true;
                                                        // Stop showing the animation
                                                        setIsAiResponding(false);
                                                        // Add the AI message to chat history now that we have content
                                                        setChatHistories({
                                                            "LearnerQuizView.useCallback[processUserResponse].processStream": (prev)=>({
                                                                    ...prev,
                                                                    [currentQuestionId]: [
                                                                        ...prev[currentQuestionId] || [],
                                                                        {
                                                                            ...initialAiMessage,
                                                                            content: accumulatedFeedback
                                                                        }
                                                                    ]
                                                                })
                                                        }["LearnerQuizView.useCallback[processUserResponse].processStream"]);
                                                    } else {
                                                        // Update the existing AI message content for subsequent chunks
                                                        setChatHistories({
                                                            "LearnerQuizView.useCallback[processUserResponse].processStream": (prev)=>{
                                                                // Find the current question's chat history
                                                                const currentHistory = [
                                                                    ...prev[currentQuestionId] || []
                                                                ];
                                                                // Find the index of the AI message to update
                                                                const aiMessageIndex = currentHistory.findIndex({
                                                                    "LearnerQuizView.useCallback[processUserResponse].processStream.aiMessageIndex": (msg)=>msg.id === aiMessageId
                                                                }["LearnerQuizView.useCallback[processUserResponse].processStream.aiMessageIndex"]);
                                                                if (aiMessageIndex !== -1) {
                                                                    // Update the existing message
                                                                    currentHistory[aiMessageIndex] = {
                                                                        ...currentHistory[aiMessageIndex],
                                                                        content: accumulatedFeedback
                                                                    };
                                                                }
                                                                return {
                                                                    ...prev,
                                                                    [currentQuestionId]: currentHistory
                                                                };
                                                            }
                                                        }["LearnerQuizView.useCallback[processUserResponse].processStream"]);
                                                    }
                                                } else if (!receivedAnyFeedback) {
                                                    receivedAnyFeedback = true;
                                                }
                                            }
                                            // Handle scorecard data when available
                                            if (data.scorecard && data.scorecard.length > 0) {
                                                var _validQuestions_currentQuestionIndex_config3, _validQuestions_currentQuestionIndex3;
                                                // Show preparing report message if not already shown
                                                if (!showPreparingReport && ((_validQuestions_currentQuestionIndex3 = validQuestions[currentQuestionIndex]) === null || _validQuestions_currentQuestionIndex3 === void 0 ? void 0 : (_validQuestions_currentQuestionIndex_config3 = _validQuestions_currentQuestionIndex3.config) === null || _validQuestions_currentQuestionIndex_config3 === void 0 ? void 0 : _validQuestions_currentQuestionIndex_config3.responseType) === 'chat') {
                                                    setShowPreparingReport(true);
                                                }
                                                // Instead of immediately updating the chat message,
                                                // collect the scorecard data
                                                completeScorecard = data.scorecard;
                                            }
                                            // Handle is_correct when available - for practice questions
                                            if (((_validQuestions_currentQuestionIndex1 = validQuestions[currentQuestionIndex]) === null || _validQuestions_currentQuestionIndex1 === void 0 ? void 0 : (_validQuestions_currentQuestionIndex_config1 = _validQuestions_currentQuestionIndex1.config) === null || _validQuestions_currentQuestionIndex_config1 === void 0 ? void 0 : _validQuestions_currentQuestionIndex_config1.responseType) === 'chat' && data.is_correct !== undefined) {
                                                isCorrect = data.is_correct;
                                            }
                                        } catch (e) {
                                            console.error('Error parsing JSON chunk:', e);
                                        }
                                    }
                                }
                                // After processing all chunks (stream is complete)
                                // Only now update the chat message with the complete scorecard
                                if (completeScorecard.length > 0) {
                                    // Check if all criteria received maximum scores
                                    if (completeScorecard.length > 0) {
                                        // Set isCorrect to true only if all criteria have received their maximum score
                                        isCorrect = completeScorecard.every({
                                            "LearnerQuizView.useCallback[processUserResponse].processStream": (item)=>item.score !== undefined && (item.pass_score !== undefined && item.score >= item.pass_score || item.max_score !== undefined && item.score === item.max_score)
                                        }["LearnerQuizView.useCallback[processUserResponse].processStream"]);
                                    }
                                    // Update the existing AI message with the complete scorecard data
                                    setChatHistories({
                                        "LearnerQuizView.useCallback[processUserResponse].processStream": (prev)=>{
                                            // Find the current question's chat history
                                            const currentHistory = [
                                                ...prev[currentQuestionId] || []
                                            ];
                                            // Find the index of the AI message to update
                                            const aiMessageIndex = currentHistory.findIndex({
                                                "LearnerQuizView.useCallback[processUserResponse].processStream.aiMessageIndex": (msg)=>msg.id === aiMessageId
                                            }["LearnerQuizView.useCallback[processUserResponse].processStream.aiMessageIndex"]);
                                            if (aiMessageIndex !== -1) {
                                                // Update the existing message with the complete scorecard
                                                currentHistory[aiMessageIndex] = {
                                                    ...currentHistory[aiMessageIndex],
                                                    scorecard: completeScorecard
                                                };
                                            }
                                            return {
                                                ...prev,
                                                [currentQuestionId]: currentHistory
                                            };
                                        }
                                    }["LearnerQuizView.useCallback[processUserResponse].processStream"]);
                                    // Only now hide the preparing report message
                                    setTimeout({
                                        "LearnerQuizView.useCallback[processUserResponse].processStream": ()=>setShowPreparingReport(false)
                                    }["LearnerQuizView.useCallback[processUserResponse].processStream"], 0);
                                }
                                if (isCorrect) {
                                    // Mark this specific question as completed
                                    setCompletedQuestionIds({
                                        "LearnerQuizView.useCallback[processUserResponse].processStream": (prev)=>({
                                                ...prev,
                                                [currentQuestionId]: true
                                            })
                                    }["LearnerQuizView.useCallback[processUserResponse].processStream"]);
                                    // Call the onSubmitAnswer callback to mark completion
                                    if (onSubmitAnswer) {
                                        onSubmitAnswer(currentQuestionId, responseType === 'audio' ? audioData || '' : responseContent);
                                    }
                                }
                                // Handle exam questions completion
                                if (((_validQuestions_currentQuestionIndex = validQuestions[currentQuestionIndex]) === null || _validQuestions_currentQuestionIndex === void 0 ? void 0 : (_validQuestions_currentQuestionIndex_config = _validQuestions_currentQuestionIndex.config) === null || _validQuestions_currentQuestionIndex_config === void 0 ? void 0 : _validQuestions_currentQuestionIndex_config.responseType) === 'exam') {
                                    // Now that all chunks have been received, mark as complete
                                    // Mark this question as completed
                                    setCompletedQuestionIds({
                                        "LearnerQuizView.useCallback[processUserResponse].processStream": (prev)=>({
                                                ...prev,
                                                [currentQuestionId]: true
                                            })
                                    }["LearnerQuizView.useCallback[processUserResponse].processStream"]);
                                    // Call the onSubmitAnswer callback to mark completion
                                    if (onSubmitAnswer) {
                                        onSubmitAnswer(currentQuestionId, responseType === 'audio' ? audioData || '' : responseContent);
                                    }
                                    // For exam questions, clear the pending submission status
                                    setPendingSubmissionQuestionIds({
                                        "LearnerQuizView.useCallback[processUserResponse].processStream": (prev)=>{
                                            const newState = {
                                                ...prev
                                            };
                                            delete newState[currentQuestionId];
                                            return newState;
                                        }
                                    }["LearnerQuizView.useCallback[processUserResponse].processStream"]);
                                    initialAiMessage.content = EXAM_CONFIRMATION_MESSAGE;
                                    // Add exam confirmation message to chat history
                                    setChatHistories({
                                        "LearnerQuizView.useCallback[processUserResponse].processStream": (prev)=>({
                                                ...prev,
                                                [currentQuestionId]: [
                                                    ...prev[currentQuestionId] || [],
                                                    {
                                                        ...initialAiMessage,
                                                        content: EXAM_CONFIRMATION_MESSAGE,
                                                        scorecard: []
                                                    }
                                                ]
                                            })
                                    }["LearnerQuizView.useCallback[processUserResponse].processStream"]);
                                    // Stop showing the AI responding animation for exam questions
                                    setIsAiResponding(false);
                                }
                                // Store chat history in backend for quiz
                                if (!isTestMode) {
                                    const aiResponse = {
                                        feedback: accumulatedFeedback,
                                        is_correct: isCorrect,
                                        scorecard: completeScorecard
                                    };
                                    storeChatHistory(currentQuestionId, userMessage, aiResponse);
                                }
                            } catch (error) {
                                console.error('Error processing stream:', error);
                                // Only reset the preparing report state when an error occurs
                                // and we need to allow the user to try again
                                if (showPreparingReport) {
                                    setTimeout({
                                        "LearnerQuizView.useCallback[processUserResponse].processStream": ()=>setShowPreparingReport(false)
                                    }["LearnerQuizView.useCallback[processUserResponse].processStream"], 0);
                                }
                                throw error;
                            }
                        }
                    }["LearnerQuizView.useCallback[processUserResponse].processStream"];
                    // Start processing the stream for both exam and quiz
                    return processStream();
                }
            }["LearnerQuizView.useCallback[processUserResponse]"]).catch({
                "LearnerQuizView.useCallback[processUserResponse]": (error)=>{
                    var _validQuestions_currentQuestionIndex_config, _validQuestions_currentQuestionIndex;
                    console.error('Error fetching AI response:', error);
                    // Show error message to the user
                    const errorMessage = responseType === 'audio' ? "There was an error while processing your audio. Please try again." : "There was an error while processing your answer. Please try again.";
                    const errorResponse = {
                        id: "ai-error-".concat(Date.now()),
                        content: errorMessage,
                        sender: 'ai',
                        timestamp: new Date(),
                        messageType: 'text',
                        audioData: undefined,
                        scorecard: [],
                        isError: true
                    };
                    // For exam questions, clear the pending status so the user can try again
                    if (((_validQuestions_currentQuestionIndex = validQuestions[currentQuestionIndex]) === null || _validQuestions_currentQuestionIndex === void 0 ? void 0 : (_validQuestions_currentQuestionIndex_config = _validQuestions_currentQuestionIndex.config) === null || _validQuestions_currentQuestionIndex_config === void 0 ? void 0 : _validQuestions_currentQuestionIndex_config.responseType) === 'exam') {
                        setPendingSubmissionQuestionIds({
                            "LearnerQuizView.useCallback[processUserResponse]": (prev)=>{
                                const newState = {
                                    ...prev
                                };
                                delete newState[currentQuestionId];
                                return newState;
                            }
                        }["LearnerQuizView.useCallback[processUserResponse]"]);
                    }
                    // Add the error message to the chat history
                    // This is only for UI display and won't be saved to the database
                    setChatHistories({
                        "LearnerQuizView.useCallback[processUserResponse]": (prev)=>({
                                ...prev,
                                [currentQuestionId]: [
                                    ...prev[currentQuestionId] || [],
                                    errorResponse
                                ]
                            })
                    }["LearnerQuizView.useCallback[processUserResponse]"]);
                    // Reset report preparation state on error since the user needs to try again
                    setShowPreparingReport(false);
                }
            }["LearnerQuizView.useCallback[processUserResponse]"]).finally({
                "LearnerQuizView.useCallback[processUserResponse]": ()=>{
                    // Only reset submitting state when API call is done
                    setIsSubmitting(false);
                    // If we never received any feedback, also reset the AI responding state
                    if (!receivedAnyFeedback) {
                        setIsAiResponding(false);
                    }
                }
            }["LearnerQuizView.useCallback[processUserResponse]"]);
        }
    }["LearnerQuizView.useCallback[processUserResponse]"], [
        validQuestions,
        currentQuestionIndex,
        onSubmitAnswer,
        userId,
        isTestMode,
        chatHistories,
        storeChatHistory,
        completedQuestionIds,
        EXAM_CONFIRMATION_MESSAGE
    ]);
    // Add state for exam submission confirmation
    const [showExamSubmissionConfirmation, setShowExamSubmissionConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingExamSubmission, setPendingExamSubmission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Modified handleSubmitAnswer function to use shared logic
    const handleSubmitAnswer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LearnerQuizView.useCallback[handleSubmitAnswer]": function() {
            let responseType = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'text';
            var _validQuestions_currentQuestionIndex_config, _validQuestions_currentQuestionIndex;
            // Get the current answer from the ref
            const answer = currentAnswerRef.current;
            if (!answer.trim()) return;
            // For exam questions, show confirmation dialog
            if (((_validQuestions_currentQuestionIndex = validQuestions[currentQuestionIndex]) === null || _validQuestions_currentQuestionIndex === void 0 ? void 0 : (_validQuestions_currentQuestionIndex_config = _validQuestions_currentQuestionIndex.config) === null || _validQuestions_currentQuestionIndex_config === void 0 ? void 0 : _validQuestions_currentQuestionIndex_config.responseType) === 'exam') {
                setPendingExamSubmission({
                    responseContent: answer,
                    responseType
                });
                setShowExamSubmissionConfirmation(true);
                return;
            }
            // Use the shared processing function for non-exam questions
            processUserResponse(answer, responseType);
        }
    }["LearnerQuizView.useCallback[handleSubmitAnswer]"], [
        processUserResponse,
        validQuestions,
        currentQuestionIndex
    ]);
    // Handle exam submission confirmation
    const handleExamSubmissionConfirm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LearnerQuizView.useCallback[handleExamSubmissionConfirm]": ()=>{
            var _chatViewRef_current;
            if (pendingExamSubmission) {
                processUserResponse(pendingExamSubmission.responseContent, pendingExamSubmission.responseType, pendingExamSubmission.audioData);
            }
            setShowExamSubmissionConfirmation(false);
            setPendingExamSubmission(null);
            (_chatViewRef_current = chatViewRef.current) === null || _chatViewRef_current === void 0 ? void 0 : _chatViewRef_current.toggleCodeView();
        }
    }["LearnerQuizView.useCallback[handleExamSubmissionConfirm]"], [
        pendingExamSubmission,
        processUserResponse
    ]);
    // Handle exam submission cancellation
    const handleExamSubmissionCancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LearnerQuizView.useCallback[handleExamSubmissionCancel]": ()=>{
            setShowExamSubmissionConfirmation(false);
            setPendingExamSubmission(null);
        }
    }["LearnerQuizView.useCallback[handleExamSubmissionCancel]"], []);
    // New function to handle audio submission using shared logic
    const handleAudioSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LearnerQuizView.useCallback[handleAudioSubmit]": async (audioBlob)=>{
            try {
                // Convert the WebM audio blob to WAV format
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const arrayBuffer = await audioBlob.arrayBuffer();
                const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
                // Convert AudioBuffer to WAV format
                const wavBuffer = convertAudioBufferToWav(audioBuffer);
                const wavBlob = new Blob([
                    wavBuffer
                ], {
                    type: 'audio/wav'
                });
                // Convert the WAV blob to base64
                const reader = new FileReader();
                reader.readAsDataURL(wavBlob);
                reader.onloadend = ({
                    "LearnerQuizView.useCallback[handleAudioSubmit]": async ()=>{
                        const base64Audio = reader.result;
                        // Remove the data URL prefix (e.g., "data:audio/wav;base64,")
                        const base64Data = base64Audio.split(',')[1];
                        // Use the shared processing function with audio-specific parameters
                        processUserResponse('', 'audio', base64Data);
                    }
                })["LearnerQuizView.useCallback[handleAudioSubmit]"];
            } catch (error) {
                console.error("Error processing audio submission:", error);
                setIsSubmitting(false);
            }
        }
    }["LearnerQuizView.useCallback[handleAudioSubmit]"], [
        processUserResponse
    ]);
    // Helper function to convert AudioBuffer to WAV format
    const convertAudioBufferToWav = (audioBuffer)=>{
        const numOfChan = audioBuffer.numberOfChannels;
        const length = audioBuffer.length * numOfChan * 2;
        const buffer = new ArrayBuffer(44 + length);
        const view = new DataView(buffer);
        const sampleRate = audioBuffer.sampleRate;
        const channels = [];
        // Extract channels
        for(let i = 0; i < numOfChan; i++){
            channels.push(audioBuffer.getChannelData(i));
        }
        // RIFF identifier
        writeString(view, 0, 'RIFF');
        // File length
        view.setUint32(4, 36 + length, true);
        // RIFF type
        writeString(view, 8, 'WAVE');
        // Format chunk identifier
        writeString(view, 12, 'fmt ');
        // Format chunk length
        view.setUint32(16, 16, true);
        // Sample format (raw)
        view.setUint16(20, 1, true);
        // Channel count
        view.setUint16(22, numOfChan, true);
        // Sample rate
        view.setUint32(24, sampleRate, true);
        // Byte rate (sample rate * block align)
        view.setUint32(28, sampleRate * numOfChan * 2, true);
        // Block align (channel count * bytes per sample)
        view.setUint16(32, numOfChan * 2, true);
        // Bits per sample
        view.setUint16(34, 16, true);
        // Data chunk identifier
        writeString(view, 36, 'data');
        // Data chunk length
        view.setUint32(40, length, true);
        // Write PCM samples
        const offset = 44;
        let pos = 0;
        for(let i = 0; i < audioBuffer.length; i++){
            for(let channel = 0; channel < numOfChan; channel++){
                // Clamp the value to -1.0 - 1.0 range and convert to 16-bit
                const sample = Math.max(-1, Math.min(1, channels[channel][i]));
                const value = sample < 0 ? sample * 0x8000 : sample * 0x7FFF;
                view.setInt16(offset + pos, value, true);
                pos += 2;
            }
        }
        return buffer;
    };
    // Helper function to write strings to DataView
    const writeString = (view, offset, string)=>{
        for(let i = 0; i < string.length; i++){
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    };
    // Update the handleSubmitAnswerRef when handleSubmitAnswer changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearnerQuizView.useEffect": ()=>{
            handleSubmitAnswerRef.current = handleSubmitAnswer;
        }
    }["LearnerQuizView.useEffect"], [
        handleSubmitAnswer
    ]);
    // Get current question content
    const currentQuestionContent = ((_validQuestions_currentQuestionIndex = validQuestions[currentQuestionIndex]) === null || _validQuestions_currentQuestionIndex === void 0 ? void 0 : _validQuestions_currentQuestionIndex.content) || [];
    // Get current question config
    const currentQuestionConfig = (_validQuestions_currentQuestionIndex1 = validQuestions[currentQuestionIndex]) === null || _validQuestions_currentQuestionIndex1 === void 0 ? void 0 : _validQuestions_currentQuestionIndex1.config;
    // Focus the input field directly
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearnerQuizView.useEffect": ()=>{
            // Use requestAnimationFrame to ensure the DOM is fully rendered
            requestAnimationFrame({
                "LearnerQuizView.useEffect": ()=>{
                    if (inputRef.current) {
                        inputRef.current.focus();
                    }
                }
            }["LearnerQuizView.useEffect"]);
        }
    }["LearnerQuizView.useEffect"], [
        currentQuestionIndex
    ]); // Only re-focus when changing questions
    // Custom styles for hiding scrollbars
    const customStyles = "\n    /* Hide scrollbar for Chrome, Safari and Opera */\n    .hide-scrollbar::-webkit-scrollbar {\n      display: none;\n      width: 0;\n      height: 0;\n    }\n    \n    /* Hide scrollbar for IE, Edge and Firefox */\n    .hide-scrollbar {\n      -ms-overflow-style: none;  /* IE and Edge */\n      scrollbar-width: none;  /* Firefox */\n    }\n    ";
    // ScoreCard view toggle functions
    const handleViewScorecard = (scorecard)=>{
        // Save current chat scroll position before switching views
        if (chatContainerRef.current) {
            setChatScrollPosition(chatContainerRef.current.scrollTop);
        }
        setActiveScorecard(scorecard);
        setIsViewingScorecard(true);
        // Reset scroll position of scorecard view when opened
        setTimeout(()=>{
            if (scorecardContainerRef.current) {
                scorecardContainerRef.current.scrollTop = 0;
            }
        }, 0);
    };
    const handleBackToChat = ()=>{
        setIsViewingScorecard(false);
        // Focus the input field when returning to chat if appropriate
        setTimeout(()=>{
            if (inputRef.current) {
                inputRef.current.focus();
            }
            // Restore saved chat scroll position
            if (chatContainerRef.current) {
                chatContainerRef.current.scrollTop = chatScrollPosition;
            }
        }, 0);
    };
    // Function to handle retrying the last user message
    const handleRetry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LearnerQuizView.useCallback[handleRetry]": ()=>{
            if (!validQuestions || validQuestions.length === 0) {
                return;
            }
            const currentQuestionId = validQuestions[currentQuestionIndex].id;
            const currentHistory = chatHistories[currentQuestionId] || [];
            // Find the most recent user message
            const userMessages = currentHistory.filter({
                "LearnerQuizView.useCallback[handleRetry].userMessages": (msg)=>msg.sender === 'user'
            }["LearnerQuizView.useCallback[handleRetry].userMessages"]);
            if (userMessages.length === 0) {
                return; // No user message to retry
            }
            const lastUserMessage = userMessages[userMessages.length - 1];
            // If in test mode, first remove the last user message and AI response
            // Find all AI messages
            const aiMessages = currentHistory.filter({
                "LearnerQuizView.useCallback[handleRetry].aiMessages": (msg)=>msg.sender === 'ai'
            }["LearnerQuizView.useCallback[handleRetry].aiMessages"]);
            // If there are AI messages, remove the last user message and last AI message
            if (aiMessages.length > 0) {
                setChatHistories({
                    "LearnerQuizView.useCallback[handleRetry]": (prev)=>{
                        const updatedHistory = [
                            ...prev[currentQuestionId] || []
                        ];
                        // Remove the last two messages (last user message and last AI response)
                        updatedHistory.splice(updatedHistory.length - 2, 2);
                        return {
                            ...prev,
                            [currentQuestionId]: updatedHistory
                        };
                    }
                }["LearnerQuizView.useCallback[handleRetry]"]);
            } else {
                // If no AI messages (unusual case), just remove the last user message
                setChatHistories({
                    "LearnerQuizView.useCallback[handleRetry]": (prev)=>{
                        const updatedHistory = [
                            ...prev[currentQuestionId] || []
                        ];
                        // Remove just the last user message
                        updatedHistory.pop();
                        return {
                            ...prev,
                            [currentQuestionId]: updatedHistory
                        };
                    }
                }["LearnerQuizView.useCallback[handleRetry]"]);
            }
            // Now process the user response again
            // If it's an audio message, get the audio data
            if (lastUserMessage.messageType === 'audio') {
                if (lastUserMessage.audioData) {
                    processUserResponse('', 'audio', lastUserMessage.audioData);
                }
            } else {
                // For text messages, resubmit the text content
                processUserResponse(lastUserMessage.content);
            }
        }
    }["LearnerQuizView.useCallback[handleRetry]"], [
        validQuestions,
        currentQuestionIndex,
        chatHistories,
        processUserResponse,
        isTestMode
    ]);
    // Update the parent component when AI responding state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearnerQuizView.useEffect": ()=>{
            if (onAiRespondingChange) {
                onAiRespondingChange(isAiResponding);
            }
        }
    }["LearnerQuizView.useEffect"], [
        isAiResponding,
        onAiRespondingChange
    ]);
    // Add state for code view
    const [codeViewState, setCodeViewState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isViewingCode: false,
        isRunning: false,
        previewContent: '',
        output: '',
        hasWebLanguages: false
    });
    // Update the state with any code preview changes
    const handleCodeStateChange = (newState)=>{
        setCodeViewState((prevState)=>{
            const updatedState = {
                ...prevState,
                ...newState
            };
            // Remove the automatic view mode change when toggling between code and chat
            // to preserve the user's selected view mode
            // On mobile, when preview content is first loaded for a code run,
            // we still want to show it (but not when just toggling modes)
            const isMobileView = window.innerWidth < 1024;
            if (isMobileView && updatedState.previewContent && !prevState.previewContent && // Only switch if this is a fresh code run, not just a mode toggle
            updatedState.output) {
                // When preview content is first set on mobile, automatically go to full chat view
                // This ensures the preview is visible
                setMobileViewMode('chat-full');
                // Notify parent if needed
                if (onMobileViewChange) {
                    onMobileViewChange({
                        mode: 'chat-full'
                    });
                }
            }
            return updatedState;
        });
    };
    // Determine if we should show the 3-column layout
    const isCodeQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LearnerQuizView.useMemo[isCodeQuestion]": ()=>{
            var _validQuestions_currentQuestionIndex_config, _validQuestions_currentQuestionIndex;
            if (!validQuestions || validQuestions.length === 0) return false;
            return ((_validQuestions_currentQuestionIndex = validQuestions[currentQuestionIndex]) === null || _validQuestions_currentQuestionIndex === void 0 ? void 0 : (_validQuestions_currentQuestionIndex_config = _validQuestions_currentQuestionIndex.config) === null || _validQuestions_currentQuestionIndex_config === void 0 ? void 0 : _validQuestions_currentQuestionIndex_config.inputType) === 'code';
        }
    }["LearnerQuizView.useMemo[isCodeQuestion]"], [
        validQuestions,
        currentQuestionIndex
    ]);
    // Mobile view controls
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileViewMode, setMobileViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('split');
    const mobileMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Track if we should show the pulse animation
    const [showButtonPulse, setShowButtonPulse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Track if button has completed entrance animation
    const [showButtonEntrance, setShowButtonEntrance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Effect to start pulsing animation after entrance animation completes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearnerQuizView.useEffect": ()=>{
            // Check if user has clicked the FAB before
            const hasClickedFAB = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$localStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLocalStorage"].getItem('hasClickedQuizViewToggleButton') === 'true';
            if (hasClickedFAB) {
                // If user has clicked before, don't show animations
                setShowButtonPulse(false);
            } else {
                // For new users, start with entrance animation
                setShowButtonEntrance(true);
                // Wait for entrance animation to complete before starting the pulse
                const entranceTimer = setTimeout({
                    "LearnerQuizView.useEffect.entranceTimer": ()=>{
                        setShowButtonEntrance(false);
                        setShowButtonPulse(true);
                    }
                }["LearnerQuizView.useEffect.entranceTimer"], 800); // Match the duration of the entrance animation
                return ({
                    "LearnerQuizView.useEffect": ()=>clearTimeout(entranceTimer)
                })["LearnerQuizView.useEffect"];
            }
        }
    }["LearnerQuizView.useEffect"], []);
    // Handle clicks outside the mobile menu to close it
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearnerQuizView.useEffect": ()=>{
            function handleClickOutside(event) {
                if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                    setIsMobileMenuOpen(false);
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "LearnerQuizView.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["LearnerQuizView.useEffect"];
        }
    }["LearnerQuizView.useEffect"], []);
    // Toggle mobile menu
    const toggleMobileMenu = ()=>{
        setIsMobileMenuOpen((prev)=>!prev);
        // If the menu is being opened, stop the animation
        if (!isMobileMenuOpen) {
            setShowButtonPulse(false);
            // Save to localStorage that user has clicked the button
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$localStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLocalStorage"].setItem('hasClickedViewModeButton', 'true');
        }
    };
    // Direct handler for changing view mode
    const setViewMode = (mode)=>{
        setMobileViewMode(mode);
        setIsMobileMenuOpen(false);
    };
    // Apply CSS classes based on mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearnerQuizView.useEffect": ()=>{
            const quizContainer = document.querySelector('.quiz-view-container');
            if (quizContainer) {
                // Remove existing mode classes
                quizContainer.classList.remove('mode-split', 'mode-question-full', 'mode-chat-full');
                // Add current mode class
                quizContainer.classList.add("mode-".concat(mobileViewMode));
            }
        }
    }["LearnerQuizView.useEffect"], [
        mobileViewMode,
        codeViewState.isViewingCode
    ]); // Also reapply when code view toggle changes
    // Set initial showLearnerView based on isAdminView
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearnerQuizView.useEffect": ()=>{
            var _currentQuestion_config;
            const currentQuestion = questions.find({
                "LearnerQuizView.useEffect.currentQuestion": (q)=>q.id === currentQuestionId
            }["LearnerQuizView.useEffect.currentQuestion"]);
            if (!isAdminView && (currentQuestion === null || currentQuestion === void 0 ? void 0 : (_currentQuestion_config = currentQuestion.config) === null || _currentQuestion_config === void 0 ? void 0 : _currentQuestion_config.responseType) === 'exam') {
                setShowLearnerView(true);
            }
        }
    }["LearnerQuizView.useEffect"], [
        isAdminView,
        questions,
        currentQuestionId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "w-full h-full ".concat(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: customStyles.__hash,
                children: customStyles
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "422bfb6bd6e26d23",
                children: '.three-column-grid.jsx-422bfb6bd6e26d23{grid-template-columns:1fr 1fr .75fr;height:100%;display:grid}@media (max-width:1024px){.three-column-grid.jsx-422bfb6bd6e26d23{grid-template-rows:.5fr .5fr .5fr;grid-template-columns:1fr;height:100vh;overflow:hidden}}.two-column-grid.jsx-422bfb6bd6e26d23{grid-template-columns:1fr 1fr;height:100%;display:grid}@media (max-width:1024px){.two-column-grid.jsx-422bfb6bd6e26d23,.sidebar-visible.jsx-422bfb6bd6e26d23 .two-column-grid.jsx-422bfb6bd6e26d23{grid-template-rows:50% 50%;grid-template-columns:1fr;height:100%;overflow:hidden}}.preview-placeholder.jsx-422bfb6bd6e26d23{color:#666;text-align:center;background-color:#1a1a1a;flex-direction:column;justify-content:center;align-items:center;height:100%;padding:1rem;font-size:.9rem;display:flex}.preview-placeholder.jsx-422bfb6bd6e26d23 svg.jsx-422bfb6bd6e26d23{opacity:.5;margin-bottom:1rem}@media (max-width:1024px){.quiz-view-container.jsx-422bfb6bd6e26d23{grid-template-rows:50% 50%!important;grid-template-columns:1fr!important;height:100%!important;max-height:100%!important;display:grid!important;overflow:hidden!important}.question-container.jsx-422bfb6bd6e26d23{grid-row:1!important;height:100%!important;max-height:100%!important;overflow-y:auto!important}.chat-container.jsx-422bfb6bd6e26d23{flex-direction:column!important;grid-row:2!important;height:100%!important;max-height:100%!important;display:flex!important;overflow:hidden!important}.chat-container.jsx-422bfb6bd6e26d23 .messages-container.jsx-422bfb6bd6e26d23{flex:1!important;min-height:0!important;overflow-y:auto!important}.chat-container.jsx-422bfb6bd6e26d23 .input-container.jsx-422bfb6bd6e26d23{z-index:10!important;background-color:#111!important;border-top:1px solid #222!important;flex-shrink:0!important;padding-top:.5rem!important;position:-webkit-sticky!important;position:sticky!important;bottom:0!important}.question-container.jsx-422bfb6bd6e26d23 .quiz-viewer.jsx-422bfb6bd6e26d23,.question-container.jsx-422bfb6bd6e26d23 .quiz-viewer-preview.jsx-422bfb6bd6e26d23{max-height:calc(100% - 80px)!important;overflow:auto!important}}.mobile-view-button.jsx-422bfb6bd6e26d23{z-index:1000;color:#fff;cursor:pointer;background-color:#9333ea;border:none;border-radius:50%;outline:none;justify-content:center;align-items:center;width:50px;height:50px;transition:all .2s;display:none;position:fixed;box-shadow:0 4px 12px rgba(0,0,0,.15)}.mobile-view-button.jsx-422bfb6bd6e26d23:hover{background-color:#a855f7;transform:scale(1.05)}.mobile-view-menu.jsx-422bfb6bd6e26d23{z-index:1001;background-color:#333;border-radius:8px;width:180px;position:fixed;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,.2)}.mobile-view-menu-item.jsx-422bfb6bd6e26d23{color:#fff;cursor:pointer;align-items:center;padding:12px;transition:background-color .2s;display:flex}.mobile-view-menu-item.jsx-422bfb6bd6e26d23:hover{background-color:#444}.mobile-view-menu-item.jsx-422bfb6bd6e26d23 svg.jsx-422bfb6bd6e26d23{margin-right:8px}@keyframes pulse-ring{0%{box-shadow:0 0 rgba(147,51,234,.7)}70%{box-shadow:0 0 0 10px rgba(147,51,234,0)}to{box-shadow:0 0 rgba(147,51,234,0)}}@keyframes pulse-dot{0%{transform:scale(.95)}70%{transform:scale(1.05)}to{transform:scale(.95)}}@keyframes button-entrance{0%{opacity:0;transform:scale(.5)translateY(20px)}60%{transform:scale(1.1)translateY(-5px)}80%{transform:scale(.95)translateY(2px)}to{opacity:1;transform:scale(1)translateY(0)}}.button-entrance.jsx-422bfb6bd6e26d23{animation:.8s cubic-bezier(.215,.61,.355,1) forwards button-entrance}.button-pulse.jsx-422bfb6bd6e26d23{animation:1.5s cubic-bezier(.215,.61,.355,1) infinite pulse-ring}.button-pulse.jsx-422bfb6bd6e26d23:after{content:"";border-radius:50%;animation:1.5s cubic-bezier(.455,.03,.515,.955) infinite pulse-dot;position:absolute;top:0;bottom:0;left:0;right:0;box-shadow:0 0 8px 4px rgba(147,51,234,.5)}@media (max-width:1024px){.mobile-view-button.jsx-422bfb6bd6e26d23{display:flex}.quiz-view-container.mode-question-full.jsx-422bfb6bd6e26d23{grid-template-rows:100% 0%!important}.quiz-view-container.mode-question-full.jsx-422bfb6bd6e26d23 .question-container.jsx-422bfb6bd6e26d23{height:100%!important;display:block!important}.quiz-view-container.mode-question-full.jsx-422bfb6bd6e26d23 .chat-container.jsx-422bfb6bd6e26d23{display:none!important}.quiz-view-container.mode-chat-full.jsx-422bfb6bd6e26d23{grid-template-rows:0% 100%!important}.quiz-view-container.mode-chat-full.jsx-422bfb6bd6e26d23 .question-container.jsx-422bfb6bd6e26d23{display:none!important}.quiz-view-container.mode-chat-full.jsx-422bfb6bd6e26d23 .chat-container.jsx-422bfb6bd6e26d23{height:100%!important;display:flex!important}.quiz-view-container.mode-split.jsx-422bfb6bd6e26d23{grid-template-rows:50% 50%!important}}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "rounded-md overflow-hidden ".concat(isCodeQuestion && codeViewState.isViewingCode ? 'three-column-grid' : 'two-column-grid', " bg-[#111111] quiz-view-container"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            overflow: 'auto'
                        },
                        className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "p-6 border-r border-[#222222] flex flex-col bg-[#1A1A1A] lg:border-r lg:border-b-0 sm:border-b sm:border-r-0 question-container",
                        children: [
                            validQuestions.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "flex items-center justify-between w-full mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "w-10 h-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: goToPreviousQuestion,
                                            disabled: currentQuestionIndex <= 0,
                                            className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "w-10 h-10 rounded-full flex items-center justify-center bg-[#222222] text-white ".concat(currentQuestionIndex > 0 ? 'hover:bg-[#333333] cursor-pointer' : 'opacity-50 cursor-not-allowed'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LearnerQuizView.tsx",
                                                lineNumber: 1901,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LearnerQuizView.tsx",
                                            lineNumber: 1896,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LearnerQuizView.tsx",
                                        lineNumber: 1895,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "bg-[#222222] px-3 py-1 rounded-full text-white text-sm flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash),
                                                children: [
                                                    "Question ",
                                                    currentQuestionIndex + 1,
                                                    " / ",
                                                    validQuestions.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/LearnerQuizView.tsx",
                                                lineNumber: 1906,
                                                columnNumber: 33
                                            }, this),
                                            validQuestions[currentQuestionIndex] && completedQuestionIds && completedQuestionIds[validQuestions[currentQuestionIndex].id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                size: 14,
                                                className: "ml-2 text-green-500 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LearnerQuizView.tsx",
                                                lineNumber: 1910,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/LearnerQuizView.tsx",
                                        lineNumber: 1905,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "w-10 h-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: goToNextQuestion,
                                            disabled: currentQuestionIndex >= validQuestions.length - 1,
                                            className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "w-10 h-10 rounded-full flex items-center justify-center bg-[#222222] text-white ".concat(currentQuestionIndex < validQuestions.length - 1 ? 'hover:bg-[#333333] cursor-pointer' : 'opacity-50 cursor-not-allowed'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LearnerQuizView.tsx",
                                                lineNumber: 1920,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LearnerQuizView.tsx",
                                            lineNumber: 1915,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LearnerQuizView.tsx",
                                        lineNumber: 1914,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LearnerQuizView.tsx",
                                lineNumber: 1894,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "flex items-center justify-center w-full mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "bg-[#222222] px-3 py-1 rounded-full text-white text-sm",
                                    children: "Question"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LearnerQuizView.tsx",
                                    lineNumber: 1926,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/LearnerQuizView.tsx",
                                lineNumber: 1925,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "flex-1 ".concat(questions.length > 1 ? 'mt-4' : ''),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "ml-[-60px]",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlockNoteEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            initialContent: currentQuestionContent,
                                            onChange: ()=>{},
                                            isDarkMode: isDarkMode,
                                            readOnly: true,
                                            className: "!bg-transparent ".concat(isTestMode ? 'quiz-viewer-preview' : 'quiz-viewer'),
                                            placeholder: "Question content will appear here"
                                        }, "question-view-".concat(currentQuestionIndex), false, {
                                            fileName: "[project]/src/components/LearnerQuizView.tsx",
                                            lineNumber: 1935,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LearnerQuizView.tsx",
                                    lineNumber: 1934,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/LearnerQuizView.tsx",
                                lineNumber: 1932,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LearnerQuizView.tsx",
                        lineNumber: 1890,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "flex flex-col bg-[#111111] h-full overflow-auto lg:border-l lg:border-t-0 sm:border-t sm:border-l-0 border-[#222222] chat-container",
                        children: isViewingScorecard ? /* Use the ScorecardView component */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScorecardView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            activeScorecard: activeScorecard,
                            handleBackToChat: handleBackToChat,
                            lastUserMessage: getLastUserMessage
                        }, void 0, false, {
                            fileName: "[project]/src/components/LearnerQuizView.tsx",
                            lineNumber: 1952,
                            columnNumber: 25
                        }, this) : /* Use the ChatView component */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            currentChatHistory: currentChatHistory,
                            isAiResponding: isAiResponding,
                            showPreparingReport: showPreparingReport,
                            isChatHistoryLoaded: isChatHistoryLoaded,
                            isTestMode: isTestMode,
                            taskType: "quiz",
                            currentQuestionConfig: (_validQuestions_currentQuestionIndex2 = validQuestions[currentQuestionIndex]) === null || _validQuestions_currentQuestionIndex2 === void 0 ? void 0 : _validQuestions_currentQuestionIndex2.config,
                            isSubmitting: isSubmitting,
                            currentAnswer: currentAnswer,
                            handleInputChange: handleInputChange,
                            handleSubmitAnswer: handleSubmitAnswer,
                            handleAudioSubmit: handleAudioSubmit,
                            handleViewScorecard: handleViewScorecard,
                            viewOnly: viewOnly,
                            completedQuestionIds: completedQuestionIds,
                            currentQuestionId: (_validQuestions_currentQuestionIndex3 = validQuestions[currentQuestionIndex]) === null || _validQuestions_currentQuestionIndex3 === void 0 ? void 0 : _validQuestions_currentQuestionIndex3.id,
                            handleRetry: handleRetry,
                            onCodeStateChange: handleCodeStateChange,
                            initialIsViewingCode: isCodeQuestion,
                            showLearnerView: showLearnerView,
                            onShowLearnerViewChange: setShowLearnerView,
                            isAdminView: isAdminView,
                            userId: userId,
                            ref: chatViewRef
                        }, void 0, false, {
                            fileName: "[project]/src/components/LearnerQuizView.tsx",
                            lineNumber: 1959,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LearnerQuizView.tsx",
                        lineNumber: 1949,
                        columnNumber: 17
                    }, this),
                    isCodeQuestion && codeViewState.isViewingCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "border-l border-[#222222] bg-[#111111] h-full overflow-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodeEditorView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodePreview"], {
                            isRunning: codeViewState.isRunning,
                            previewContent: codeViewState.previewContent,
                            output: codeViewState.output,
                            isWebPreview: codeViewState.hasWebLanguages,
                            executionTime: codeViewState.executionTime,
                            onClear: ()=>{
                                // Clear the code output in the codeViewState
                                setCodeViewState((prev)=>({
                                        ...prev,
                                        previewContent: '',
                                        output: '',
                                        executionTime: ''
                                    }));
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/LearnerQuizView.tsx",
                            lineNumber: 1991,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LearnerQuizView.tsx",
                        lineNumber: 1990,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LearnerQuizView.tsx",
                lineNumber: 1888,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: showNavigationConfirmation,
                title: "What's the rush?",
                message: "Our AI is still reviewing your answer and will be ready with a response soon. If you navigate away now, you will not see the complete response. Are you sure you want to leave?",
                confirmButtonText: "Leave anyway",
                cancelButtonText: "Stay",
                onConfirm: handleNavigationConfirm,
                onCancel: handleNavigationCancel,
                type: "custom"
            }, void 0, false, {
                fileName: "[project]/src/components/LearnerQuizView.tsx",
                lineNumber: 2012,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: showExamSubmissionConfirmation,
                title: "Confirm Submission",
                message: "This is an exam question. You can only submit your answer once and won't be able to modify it. Are you sure you want to submit now?",
                confirmButtonText: "Submit",
                cancelButtonText: "Review again",
                onConfirm: handleExamSubmissionConfirm,
                onCancel: handleExamSubmissionCancel,
                type: "custom"
            }, void 0, false, {
                fileName: "[project]/src/components/LearnerQuizView.tsx",
                lineNumber: 2024,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleMobileMenu,
                style: {
                    bottom: '150px'
                },
                "aria-label": "View options",
                className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "fixed right-4 w-14 h-14 rounded-full bg-purple-700 text-white flex items-center justify-center shadow-lg z-20 cursor-pointer transition-transform duration-300 focus:outline-none mobile-view-button ".concat(showButtonEntrance ? 'button-entrance' : '', " ").concat(showButtonPulse ? 'button-pulse' : ''),
                children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/LearnerQuizView.tsx",
                    lineNumber: 2043,
                    columnNumber: 21
                }, this) : mobileViewMode === 'split' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$split$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SplitSquareVertical$3e$__["SplitSquareVertical"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/LearnerQuizView.tsx",
                    lineNumber: 2046,
                    columnNumber: 25
                }, this) : mobileViewMode === 'question-full' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/LearnerQuizView.tsx",
                    lineNumber: 2048,
                    columnNumber: 25
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/LearnerQuizView.tsx",
                    lineNumber: 2050,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/LearnerQuizView.tsx",
                lineNumber: 2036,
                columnNumber: 13
            }, this),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)'
                },
                "aria-hidden": "true",
                onClick: ()=>setIsMobileMenuOpen(false),
                className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "fixed inset-0 z-10"
            }, void 0, false, {
                fileName: "[project]/src/components/LearnerQuizView.tsx",
                lineNumber: 2057,
                columnNumber: 17
            }, this),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    bottom: '220px'
                },
                ref: mobileMenuRef,
                className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "fixed right-4 flex flex-col gap-4 items-end z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "bg-black text-white py-2 px-4 rounded-full text-sm shadow-md",
                                children: "Expand Question"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LearnerQuizView.tsx",
                                lineNumber: 2070,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setViewMode('question-full'),
                                "aria-label": "Show question only",
                                className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "w-12 h-12 rounded-full bg-purple-700 text-white flex items-center justify-center shadow-md cursor-pointer hover:bg-purple-600 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LearnerQuizView.tsx",
                                    lineNumber: 2078,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/LearnerQuizView.tsx",
                                lineNumber: 2073,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LearnerQuizView.tsx",
                        lineNumber: 2069,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "bg-black text-white py-2 px-4 rounded-full text-sm shadow-md",
                                children: "Expand Chat"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LearnerQuizView.tsx",
                                lineNumber: 2084,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setViewMode('chat-full'),
                                "aria-label": "Show chat only",
                                className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "w-12 h-12 rounded-full bg-purple-700 text-white flex items-center justify-center shadow-md cursor-pointer hover:bg-purple-600 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LearnerQuizView.tsx",
                                    lineNumber: 2092,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/LearnerQuizView.tsx",
                                lineNumber: 2087,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LearnerQuizView.tsx",
                        lineNumber: 2083,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "bg-black text-white py-2 px-4 rounded-full text-sm shadow-md",
                                children: "Split View"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LearnerQuizView.tsx",
                                lineNumber: 2098,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setViewMode('split'),
                                "aria-label": "Show split view",
                                className: "jsx-422bfb6bd6e26d23 " + "jsx-".concat(customStyles.__hash) + " " + "w-12 h-12 rounded-full bg-purple-700 text-white flex items-center justify-center shadow-md cursor-pointer hover:bg-purple-600 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$split$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SplitSquareVertical$3e$__["SplitSquareVertical"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LearnerQuizView.tsx",
                                    lineNumber: 2106,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/LearnerQuizView.tsx",
                                lineNumber: 2101,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LearnerQuizView.tsx",
                        lineNumber: 2097,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LearnerQuizView.tsx",
                lineNumber: 2067,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LearnerQuizView.tsx",
        lineNumber: 1622,
        columnNumber: 9
    }, this);
}
_s(LearnerQuizView, "FvI5MoiTAvuqaEBrXPS8gJOu8aw=");
_c = LearnerQuizView;
var _c;
__turbopack_context__.k.register(_c, "LearnerQuizView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_LearnerQuizView_tsx_4112db35._.js.map