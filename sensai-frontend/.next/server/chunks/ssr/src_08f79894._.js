module.exports = {

"[project]/src/components/Toast.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
;
;
const Toast = ({ show, title, description, emoji, onClose, isMobileView = false })=>{
    if (!show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed ${isMobileView ? 'top-0 left-0 right-0 w-full rounded-none' : 'bottom-4 right-4 rounded-lg max-w-md'} bg-white text-black px-6 py-4 shadow-lg z-100 flex items-center gap-4`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center w-10 h-10 bg-amber-50 rounded-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xl",
                    children: emoji
                }, void 0, false, {
                    fileName: "[project]/src/components/Toast.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Toast.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-medium text-base",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/Toast.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 mt-0.5 leading-tight",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/Toast.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Toast.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "text-gray-400 hover:text-gray-600 cursor-pointer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/src/components/Toast.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Toast.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Toast.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Toast;
}),
"[project]/src/components/ConfirmationDialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>ConfirmationDialog
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
"use client";
;
;
function ConfirmationDialog({ // Use either open or show prop for visibility
open, show, // Content props with defaults
title, message, // Action handlers
onConfirm, onCancel, onClickOutside, // Button text with defaults
confirmButtonText, cancelButtonText = "Cancel", // State props
isLoading = false, errorMessage = null, // Type with default
type = 'delete', // Custom content
children, // Close button props
showCloseButton = false, onClose }) {
    // Handle both 'open' and 'show' props for backward compatibility
    const isVisible = open !== undefined ? open : show !== undefined ? show : false;
    if (!isVisible) return null;
    // Default values based on type
    const defaultTitle = type === 'publish' ? "Ready to publish?" : type === 'save' ? "Save changes?" : "Confirm deletion";
    const defaultMessage = type === 'publish' ? "Make sure your content is complete and reviewed for errors before publishing" : type === 'save' ? "Do you want to save your changes?" : "Are you sure you want to delete? This action cannot be undone.";
    const defaultButtonText = type === 'publish' ? "Publish Now" : type === 'save' ? "Save" : "Delete";
    // Use provided values or defaults
    const displayTitle = title || defaultTitle;
    const displayMessage = message || defaultMessage;
    const buttonText = confirmButtonText || defaultButtonText;
    // Button styles based on type
    const buttonBgColor = type === 'publish' ? 'bg-green-800 hover:bg-green-900' : type === 'delete' ? 'bg-red-800 hover:bg-red-900' : type === 'save' ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'; // Default for custom type
    // Handle close button click
    const handleClose = ()=>{
        if (onClose) {
            onClose();
        } else {
            onCancel();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100] flex items-center justify-center p-4",
        onClick: (e)=>{
            e.stopPropagation();
            onClickOutside ? onClickOutside() : onCancel();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md bg-[#1A1A1A] rounded-lg shadow-2xl relative",
            onClick: (e)=>e.stopPropagation(),
            children: [
                showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "absolute top-4 right-4 text-gray-400 hover:text-white transition-colors focus:outline-none cursor-pointer",
                    onClick: (e)=>{
                        e.stopPropagation();
                        handleClose();
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/components/ConfirmationDialog.tsx",
                        lineNumber: 128,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ConfirmationDialog.tsx",
                    lineNumber: 121,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-light text-white mb-4",
                            children: displayTitle
                        }, void 0, false, {
                            fileName: "[project]/src/components/ConfirmationDialog.tsx",
                            lineNumber: 132,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-300",
                            children: displayMessage
                        }, void 0, false, {
                            fileName: "[project]/src/components/ConfirmationDialog.tsx",
                            lineNumber: 133,
                            columnNumber: 21
                        }, this),
                        errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-red-400 text-sm",
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/src/components/ConfirmationDialog.tsx",
                            lineNumber: 135,
                            columnNumber: 25
                        }, this),
                        children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/components/ConfirmationDialog.tsx",
                            lineNumber: 140,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ConfirmationDialog.tsx",
                    lineNumber: 131,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-4 p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                onCancel();
                            },
                            className: "px-4 py-2 text-gray-400 hover:text-white transition-colors focus:outline-none cursor-pointer",
                            disabled: isLoading,
                            children: cancelButtonText
                        }, void 0, false, {
                            fileName: "[project]/src/components/ConfirmationDialog.tsx",
                            lineNumber: 146,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                onConfirm();
                            },
                            className: `px-6 py-2 ${buttonBgColor} ${type === 'save' ? 'text-black' : 'text-white'} text-sm font-medium rounded-full transition-colors focus:outline-none cursor-pointer ${isLoading ? 'opacity-70' : ''}`,
                            disabled: isLoading,
                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ConfirmationDialog.tsx",
                                        lineNumber: 166,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: buttonText
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ConfirmationDialog.tsx",
                                        lineNumber: 167,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ConfirmationDialog.tsx",
                                lineNumber: 165,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    type === 'delete' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        size: 16,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ConfirmationDialog.tsx",
                                        lineNumber: 171,
                                        columnNumber: 55
                                    }, this),
                                    buttonText
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ConfirmationDialog.tsx",
                                lineNumber: 170,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ConfirmationDialog.tsx",
                            lineNumber: 156,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ConfirmationDialog.tsx",
                    lineNumber: 145,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ConfirmationDialog.tsx",
            lineNumber: 116,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ConfirmationDialog.tsx",
        lineNumber: 109,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/Tooltip.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Tooltip
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function Tooltip({ children, content, position = "top", delay = 300, disabled = false, className = "" }) {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clearTimeouts = ()=>{
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };
    // Clear timeout on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>clearTimeouts();
    }, []);
    const showTip = ()=>{
        clearTimeouts(); // Clear any existing timeouts first
        timeoutRef.current = setTimeout(()=>{
            setIsVisible(true);
        }, delay);
    };
    const hideTip = ()=>{
        clearTimeouts(); // Clear the show timeout
        setIsVisible(false);
    };
    // Position-based classes for the tooltip
    const positionClasses = {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2"
    };
    // Arrow classes based on position
    const arrowClasses = {
        top: "bottom-[-6px] left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent",
        bottom: "top-[-6px] left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent",
        left: "right-[-6px] top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent",
        right: "left-[-6px] top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent"
    };
    if (disabled) return children;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative inline-block cursor-pointer ${className}`,
        onMouseEnter: showTip,
        onMouseLeave: hideTip,
        onTouchStart: showTip,
        onTouchEnd: hideTip,
        children: [
            children,
            isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute px-3 py-2 text-sm font-light text-white bg-gray-900 rounded-md whitespace-nowrap pointer-events-none ${positionClasses[position]}`,
                role: "tooltip",
                "aria-hidden": !isVisible,
                style: {
                    zIndex: 9999
                },
                children: [
                    content,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute w-0 h-0 border-4 border-gray-900 ${arrowClasses[position]}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/Tooltip.tsx",
                        lineNumber: 83,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Tooltip.tsx",
                lineNumber: 76,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Tooltip.tsx",
        lineNumber: 66,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/lib/utils/dateFormat.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * Formats a scheduled date for display in tooltips and buttons
 * @param date The date to format
 * @returns A human-readable string representation of the date
 */ __turbopack_context__.s({
    "formatFullScheduleDate": ()=>formatFullScheduleDate,
    "formatScheduleDate": ()=>formatScheduleDate
});
const formatScheduleDate = (date)=>{
    if (!date) return "";
    // If the date is today, show "Today at [time]"
    const today = new Date();
    if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
        return `Today at ${date.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit'
        })}`;
    }
    // If the date is tomorrow, show "Tomorrow at [time]"
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (date.getDate() === tomorrow.getDate() && date.getMonth() === tomorrow.getMonth() && date.getFullYear() === tomorrow.getFullYear()) {
        return `Tomorrow at ${date.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit'
        })}`;
    }
    // Otherwise, show the full date
    return date.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};
const formatFullScheduleDate = (date)=>{
    if (!date) return "";
    return date.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};
}),
"[project]/src/components/CourseItemDialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/pencil.js [app-ssr] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ConfirmationDialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Tooltip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$datepicker$40$8$2e$4$2e$0_reac_4f3984e4bf0a90fce0103bc21df8c5a7$2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-datepicker@8.4.0_reac_4f3984e4bf0a90fce0103bc21df8c5a7/node_modules/react-datepicker/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$dateFormat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/dateFormat.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-ssr] (ecmascript)");
;
;
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
// Dynamically import the editor components
const DynamicLearningMaterialEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/LearningMaterialEditor.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-full w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"
            }, void 0, false, {
                fileName: "[project]/src/components/CourseItemDialog.tsx",
                lineNumber: 25,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/CourseItemDialog.tsx",
            lineNumber: 24,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
});
// Dynamically import the QuizEditor component
const DynamicQuizEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/QuizEditor.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-full w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"
            }, void 0, false, {
                fileName: "[project]/src/components/CourseItemDialog.tsx",
                lineNumber: 38,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/CourseItemDialog.tsx",
            lineNumber: 37,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
});
const CourseItemDialog = ({ isOpen, activeItem, activeModuleId, isEditMode, isPreviewMode, showPublishConfirmation, dialogTitleRef, dialogContentRef, onClose, onPublishConfirm, onPublishCancel, onSetShowPublishConfirmation, onSaveItem, onCancelEditMode, onEnableEditMode, onQuizContentChange, focusEditor, schoolId, courseId })=>{
    // Get authenticated user ID
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    // Add refs for the editor components
    const learningMaterialEditorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const quizEditorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Ref to store toast timeout ID
    const toastTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // State to track preview mode for quizzes
    const [quizPreviewMode, setQuizPreviewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // State for scheduled date
    const [scheduledDate, setScheduledDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showSchedulePicker, setShowSchedulePicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Toast state
    const [showToast, setShowToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toastTitle, setToastTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Published");
    const [toastDescription, setToastDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [toastEmoji, setToastEmoji] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("🚀");
    // Add state for close confirmation dialog
    const [showCloseConfirmation, setShowCloseConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add a new state variable to track which type of confirmation is being shown
    const [confirmationType, setConfirmationType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('exit_draft');
    // Add state for save confirmation dialog
    const [showSaveConfirmation, setShowSaveConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // State to track if quiz has questions (for publish/preview button visibility)
    const [hasQuizQuestions, setHasQuizQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add state for unsaved scorecard confirmation dialog
    const [showUnsavedScorecardConfirmation, setShowUnsavedScorecardConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showUnsavedScorecardChangesInfo, setShowUnsavedScorecardChangesInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Use useRef instead of useState for storing the pending action
    const pendingActionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Add a ref for the date picker container
    const datePickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize scheduledDate when activeItem changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeItem && activeItem.scheduled_publish_at) {
            setScheduledDate(new Date(activeItem.scheduled_publish_at));
        } else {
            setScheduledDate(null);
        }
    }, [
        activeItem
    ]);
    // Function to validate scheduled date
    const verifyScheduledDateAndSchedule = (date)=>{
        if (!date) {
            return;
        }
        if (date < new Date()) {
            // Show error toast for dates in the past
            displayToast("Invalid Date", "Scheduled date cannot be in the past", "⚠️");
            return;
        }
        setScheduledDate(date);
    };
    // Reset quiz preview mode when dialog is closed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) {
            setQuizPreviewMode(false);
            // Clear any active toast timeout when dialog closes
            if (toastTimeoutRef.current) {
                clearTimeout(toastTimeoutRef.current);
                toastTimeoutRef.current = null;
            }
            // Reset toast state when dialog closes to prevent stuck toasts
            setShowToast(false);
            // Make sure to clear questions from active item when the dialog closes for draft quizzes
            if (activeItem && activeItem.type === 'quiz' && activeItem.status === 'draft') {
                console.log('Cleaning up draft quiz questions on dialog close');
                activeItem.questions = [];
            }
        } else if (isOpen) {
            // Reset toast state when dialog opens to prevent lingering toasts
            if (toastTimeoutRef.current) {
                clearTimeout(toastTimeoutRef.current);
                toastTimeoutRef.current = null;
            }
            setShowToast(false);
            // When dialog opens, ensure hasQuizQuestions is correctly initialized
            // For draft quizzes, always start with false (no questions)
            if (activeItem && activeItem.type === 'quiz' && activeItem.status === 'draft') {
                // Reset to false when dialog opens for draft quizzes
                setHasQuizQuestions(false);
                // Also ensure activeItem.questions is cleared
                console.log('Clearing questions for draft quiz on dialog open');
                activeItem.questions = [];
            } else if (activeItem && activeItem.type === 'quiz' && activeItem.status === 'published') {
                // For published quizzes, initialize based on actual data
                // Will be updated when data is loaded by the QuizEditor
                setHasQuizQuestions(activeItem.questions && activeItem.questions.length > 0);
            } else {
                // For materials, always true
                setHasQuizQuestions(true);
            }
        }
    }, [
        isOpen,
        activeItem
    ]);
    // Add a capture phase event listener for Escape key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Handler function for keydown events in the capture phase
        const handleKeyDown = (e)=>{
            // If Escape key is pressed
            if (e.key === 'Escape') {
                // Check for active dialog element to ensure dialog is actually open
                const dialogElement = dialogContentRef.current;
                if (!dialogElement) return;
                // If close confirmation is already showing, don't do anything
                if (showCloseConfirmation) {
                    return;
                }
                // For published items in view mode, close directly
                if (activeItem?.status === 'published' && !isEditMode) {
                    onClose();
                    return;
                }
                // Prevent the default behavior and stop propagation
                e.preventDefault();
                e.stopPropagation();
                // Check if there are actual changes
                const hasChanges = activeItem.type === 'material' ? learningMaterialEditorRef.current?.hasChanges() || false : quizEditorRef.current?.hasChanges() || false;
                // If we're in edit mode for a published item
                if (activeItem?.status === 'published') {
                    // Only show confirmation if there are changes
                    if (hasChanges) {
                        setConfirmationType('exit_edit_publish');
                        setShowCloseConfirmation(true);
                    } else {
                        // No changes, just exit edit mode
                        onCancelEditMode();
                    }
                } else {
                    // For draft items
                    // Check if the editor/quiz has any content using the appropriate ref
                    const hasContent = activeItem.type === 'material' ? learningMaterialEditorRef.current?.hasContent() || false : quizEditorRef.current?.hasContent() || false;
                    // Check if the title has been changed from default
                    const titleElement = dialogTitleRef.current;
                    const currentTitle = titleElement?.textContent || '';
                    // Set default title based on item type
                    let defaultTitle = "New learning material";
                    if (activeItem.type === 'quiz') defaultTitle = "New quiz";
                    const isTitleChanged = currentTitle !== defaultTitle && currentTitle.trim() !== '';
                    // If there's no content and title hasn't changed, close without confirmation   
                    if (!hasContent && !isTitleChanged) {
                        onClose();
                        return;
                    }
                    // Only show confirmation if there are changes
                    if (hasChanges) {
                        setConfirmationType('exit_draft');
                        setShowCloseConfirmation(true);
                    } else {
                        // No changes, just close
                        onClose();
                    }
                    return;
                }
            }
        };
        // Add the event listener in the capture phase to intercept before other handlers
        document.addEventListener('keydown', handleKeyDown, true);
        // Clean up the event listener when the component unmounts or when dependencies change
        return ()=>{
            document.removeEventListener('keydown', handleKeyDown, true);
        };
    }, [
        activeItem,
        isEditMode,
        showCloseConfirmation,
        onClose,
        onCancelEditMode,
        dialogContentRef,
        dialogTitleRef
    ]);
    // Add a cleanup effect for the toast timeout when the component unmounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            // Clean up toast timeout on unmount
            if (toastTimeoutRef.current) {
                clearTimeout(toastTimeoutRef.current);
                toastTimeoutRef.current = null;
            }
        };
    }, []);
    // Handle clicking outside of the date picker
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
                setShowSchedulePicker(false);
            }
        };
        if (showSchedulePicker) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        showSchedulePicker
    ]);
    // Bail early if dialog isn't open or there's no active item
    if (!isOpen || !activeItem) return null;
    // Check if the quiz has questions using the local state variable
    // For non-quiz items, this is always true
    // Function to handle closing the dialog
    const handleCloseRequest = ()=>{
        // Check if there are actual changes
        const hasChanges = activeItem.type === 'material' ? learningMaterialEditorRef.current?.hasChanges() || false : quizEditorRef.current?.hasChanges() || false;
        // Case 1: Published learning material in edit mode 
        if (activeItem?.status === 'published' && isEditMode) {
            // Only show confirmation if there are changes
            if (hasChanges) {
                // For X button and backdrop click, we want to close the entire dialog after confirmation
                // Use a different confirmation type to differentiate from the Cancel button
                setConfirmationType('close');
                setShowCloseConfirmation(true);
            } else {
                // No changes, just close
                onClose();
            }
            return;
        }
        // Case 2: Draft items (check for content)
        if (activeItem?.status === 'draft') {
            // Check if the editor/quiz has any content using the appropriate ref
            const hasContent = activeItem.type === 'material' ? learningMaterialEditorRef.current?.hasContent() || false : quizEditorRef.current?.hasContent() || false;
            // Check if the title has been changed from default
            const titleElement = dialogTitleRef.current;
            const currentTitle = titleElement?.textContent || '';
            // Set default title based on item type
            let defaultTitle = "New learning material";
            if (activeItem.type === 'quiz') defaultTitle = "New quiz";
            const isTitleChanged = currentTitle !== defaultTitle && currentTitle.trim() !== '';
            // If there's no content and title hasn't changed, close without confirmation
            if (!hasContent && !isTitleChanged) {
                onClose();
                return;
            }
            // Only show confirmation if there are changes
            if (hasChanges) {
                // Set confirmation type for draft items
                setConfirmationType('exit_draft');
                setShowCloseConfirmation(true);
            } else {
                // No changes, just close
                onClose();
            }
            return;
        }
        onClose();
    };
    // Add a handler for the Cancel button in published items' edit mode
    const handleCancelEditClick = ()=>{
        // Check if there are actual changes
        const hasChanges = activeItem.type === 'material' ? learningMaterialEditorRef.current?.hasChanges() || false : quizEditorRef.current?.hasChanges() || false;
        // Only show confirmation if there are changes
        if (hasChanges) {
            // Show confirmation for published items in edit mode
            setConfirmationType('exit_edit_publish');
            setShowCloseConfirmation(true);
        } else {
            // No changes, just exit edit mode
            onCancelEditMode();
        }
    };
    const handleConfirmSaveDraft = ()=>{
        setShowCloseConfirmation(false);
        // Save logic for draft: call save and then close dialog
        if (activeItem?.type === 'material') {
            learningMaterialEditorRef.current?.save();
        } else if (activeItem?.type === 'quiz') {
            quizEditorRef.current?.saveDraft();
        }
        onClose();
    };
    // Handle confirmed close action
    const handleConfirmDiscardChanges = ()=>{
        setShowCloseConfirmation(false);
        if (confirmationType === 'exit_edit_publish') {
            // For published items in edit mode, just exit edit mode without closing the dialog
            if (activeItem?.type === 'material') {
                // Use the ref to call cancel directly to revert any changes
                learningMaterialEditorRef.current?.cancel();
            } else if (activeItem?.type === 'quiz') {
                // Use the ref to call cancel directly to revert any changes
                quizEditorRef.current?.cancel();
            }
            // Exit edit mode but keep the dialog open
            onCancelEditMode();
        } else {
            // For other confirmation types (draft items or X button click), close the entire dialog
            onClose();
        }
    };
    // Handle cancel close action
    const handleCancelClosingDialog = ()=>{
        setShowCloseConfirmation(false);
    };
    // Handle backdrop click to close dialog
    const handleDialogBackdropClick = (e)=>{
        // Only close if clicking directly on the backdrop, not on the dialog content
        if (dialogContentRef.current && !dialogContentRef.current.contains(e.target)) {
            handleCloseRequest();
        }
    };
    // Toggle quiz preview mode
    const toggleQuizPreviewMode = ()=>{
        // If we're not already in preview mode and trying to enter it
        if (!quizPreviewMode && quizEditorRef.current) {
            // Check if current question has content
            const hasContent = quizEditorRef.current.hasQuestionContent();
            if (!hasContent) {
                // Show toast notification
                displayToast("Empty Question", "Please add details to the question before previewing", "🚫");
                return; // Prevent entering preview mode
            }
            // Get the current question type and check for empty correct answer or missing scorecard
            const currentQuestionType = quizEditorRef.current.getCurrentQuestionType();
            const currentQuestionInputType = quizEditorRef.current.getCurrentQuestionInputType();
            if (currentQuestionInputType === 'code') {
                const hasCodingLanguages = quizEditorRef.current.hasCodingLanguages();
                if (!hasCodingLanguages) {
                    // Show toast notification for missing coding languages
                    displayToast("Missing Coding Languages", "Please select at least one programming language", "🚫");
                    return; // Prevent entering preview mode
                }
            }
            if (currentQuestionType === 'objective') {
                // For objective questions, check if correct answer is empty
                const hasCorrectAnswer = quizEditorRef.current.hasCorrectAnswer();
                if (!hasCorrectAnswer) {
                    // Show toast notification for empty correct answer
                    displayToast("Empty Correct Answer", "Please set a correct answer for this question before previewing", "🚫");
                    // Switch to answer tab
                    quizEditorRef.current.setActiveTab('answer');
                    return; // Prevent entering preview mode
                }
            } else if (currentQuestionType === 'subjective') {
                // For subjective questions, check if scorecard is set
                const hasScorecard = quizEditorRef.current.hasScorecard();
                if (!hasScorecard) {
                    // Show toast notification for missing scorecard
                    displayToast("Missing Scorecard", "Please set a scorecard for evaluating this question before previewing", "🚫");
                    // Switch to scorecard tab
                    quizEditorRef.current.setActiveTab('scorecard');
                    return; // Prevent entering preview mode
                }
                // Validate the scorecard criteria for subjective questions
                // Get the current question's scorecard data
                const currentQuestionConfig = quizEditorRef.current.getCurrentQuestionConfig?.();
                if (currentQuestionConfig?.scorecardData) {
                    // Use the shared validation function to validate the scorecard criteria
                    const isValid = quizEditorRef.current.validateScorecardCriteria(currentQuestionConfig.scorecardData, {
                        setActiveTab: quizEditorRef.current.setActiveTab,
                        showErrorMessage: displayToast
                    });
                    if (!isValid) {
                        return; // Prevent entering preview mode if validation fails
                    }
                }
            }
        }
        // Toggle preview mode if content exists or we're exiting preview mode
        setQuizPreviewMode(!quizPreviewMode);
    };
    // Handle showing and hiding toast
    const displayToast = (title, description, emoji = "🚀")=>{
        // Clear any existing timeout to prevent premature closing of new toast
        if (toastTimeoutRef.current) {
            clearTimeout(toastTimeoutRef.current);
            toastTimeoutRef.current = null;
        }
        // Set toast content
        setToastTitle(title);
        setToastDescription(description);
        setToastEmoji(emoji);
        setShowToast(true);
        // Set new timeout and store the ID for future reference
        toastTimeoutRef.current = setTimeout(()=>{
            setShowToast(false);
            toastTimeoutRef.current = null;
        }, 5000); // Auto-hide after 5 seconds
    };
    // Handle save button click - show confirmation
    const handleSaveClick = ()=>{
        checkUnsavedScorecardChangesBeforeAction(()=>{
            // For quizzes, validate before showing save confirmation
            if (activeItem?.type === 'quiz' && quizEditorRef.current) {
                // Run validation before opening the save confirmation
                const isValid = quizEditorRef.current.validateBeforePublish();
                if (!isValid) {
                    return; // Don't show confirmation if validation fails
                }
            }
            // For learning materials, validate content exists
            if (activeItem?.type === 'material' && learningMaterialEditorRef.current) {
                const hasContent = learningMaterialEditorRef.current.hasContent();
                if (!hasContent) {
                    // Show error message
                    displayToast("Empty learning material", "Please add content before saving", "🚫");
                    return; // Don't show confirmation if validation fails
                }
            }
            // If validation passes, show save confirmation
            setShowSaveConfirmation(true);
        });
    };
    // Function to check for unsaved scorecard changes and handle appropriately
    const checkUnsavedScorecardChangesBeforeAction = (action)=>{
        // For quizzes, check for unsaved scorecard changes first
        if (activeItem?.type === 'quiz' && quizEditorRef.current) {
            if (quizEditorRef.current.hasUnsavedScorecardChanges()) {
                pendingActionRef.current = action;
                setShowUnsavedScorecardConfirmation(true);
                return;
            }
        }
        // If no unsaved scorecard changes, proceed with the action
        action();
    };
    // Handle unsaved scorecard confirmation - navigate to question
    const handleGoBackToScorecard = ()=>{
        setShowUnsavedScorecardConfirmation(false);
        // Clear the pending action
        pendingActionRef.current = null;
    };
    // Handle discard unsaved scorecard changes
    const handleDiscardScorecardChanges = ()=>{
        setShowUnsavedScorecardConfirmation(false);
        // Execute the appropriate action based on what was being attempted
        if (pendingActionRef.current) {
            pendingActionRef.current();
        }
        // Clear the pending action
        pendingActionRef.current = null;
    };
    // Handle confirmed save action
    const handleConfirmSavePublished = ()=>{
        setShowSaveConfirmation(false);
        // Execute the actual save action based on item type
        if (activeItem?.type === 'material') {
            // Use the ref to call save directly
            learningMaterialEditorRef.current?.save();
        } else if (activeItem?.type === 'quiz') {
            // Use the ref to call save directly
            quizEditorRef.current?.savePublished();
        }
    };
    // Handle cancel save action
    const handleCancelSave = ()=>{
        setShowSaveConfirmation(false);
    };
    const isClosingDraft = confirmationType === 'exit_draft';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-[#111111] flex flex-col",
                onClick: handleDialogBackdropClick,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: dialogContentRef,
                    style: {
                        backgroundColor: '#1A1A1A',
                        border: 'none'
                    },
                    className: "w-full h-full flex flex-col",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-4 border-b",
                            style: {
                                backgroundColor: '#111111'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        ref: dialogTitleRef,
                                        contentEditable: activeItem?.status !== 'published' || isEditMode,
                                        suppressContentEditableWarning: true,
                                        onInput: (e)=>{
                                        // For both learning materials and quizzes, allow editing title 
                                        // but don't propagate changes upward yet (will be handled during save)
                                        // The current title will be stored in the DOM element
                                        // and will be sent to the API during save/publish
                                        },
                                        onKeyDown: (e)=>{
                                            if (e.key === 'Enter') {
                                                e.preventDefault();
                                                // Blur the element to trigger save
                                                e.target.blur();
                                            }
                                        },
                                        onClick: (e)=>{
                                            // Prevent click from bubbling up
                                            e.stopPropagation();
                                            // If not editable, don't continue
                                            if (activeItem?.status === 'published' && !isEditMode) {
                                                return;
                                            }
                                            // Set a flag to indicate the title is being edited
                                            const titleElement = e.currentTarget;
                                            titleElement.dataset.editing = "true";
                                            // Only set cursor at the end on first click (not on double-click)
                                            // This allows double-click to select text as expected
                                            if (!titleElement.dataset.clicked) {
                                                titleElement.dataset.clicked = "true";
                                                // Set cursor position at the end of text
                                                const range = document.createRange();
                                                const selection = window.getSelection();
                                                const textNode = titleElement.firstChild || titleElement;
                                                if (textNode) {
                                                    const textLength = textNode.textContent?.length || 0;
                                                    range.setStart(textNode, textLength);
                                                    range.setEnd(textNode, textLength);
                                                    selection?.removeAllRanges();
                                                    selection?.addRange(range);
                                                }
                                                // Reset the clicked flag after a short delay
                                                setTimeout(()=>{
                                                    titleElement.dataset.clicked = "";
                                                }, 300);
                                            }
                                        },
                                        className: `text-2xl font-light text-white outline-none empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400 empty:before:pointer-events-none cursor-text mr-4 ${activeItem?.status !== 'published' || isEditMode ? 'w-full min-w-[300px]' : ''}`,
                                        "data-placeholder": activeItem?.type === 'material' ? 'New learning material' : 'New quiz',
                                        children: activeItem?.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CourseItemDialog.tsx",
                                        lineNumber: 659,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CourseItemDialog.tsx",
                                    lineNumber: 658,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        activeItem?.type === 'quiz' && hasQuizQuestions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: toggleQuizPreviewMode,
                                            className: "flex items-center px-4 py-2 text-sm text-white bg-transparent border !border-blue-500 hover:bg-[#222222] focus:border-blue-500 active:border-blue-500 rounded-full transition-colors cursor-pointer",
                                            "aria-label": quizPreviewMode ? "Exit preview" : "Preview quiz",
                                            children: quizPreviewMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                        size: 16,
                                                        className: "mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                        lineNumber: 729,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Exit Preview"
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        size: 16,
                                                        className: "mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                        lineNumber: 734,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Preview"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CourseItemDialog.tsx",
                                            lineNumber: 722,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        activeItem?.status === 'draft' && (activeItem?.type === 'quiz' && hasQuizQuestions || activeItem?.type === 'material') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        checkUnsavedScorecardChangesBeforeAction(()=>{
                                                            handleConfirmSaveDraft();
                                                        });
                                                    },
                                                    className: "flex items-center px-4 py-2 text-sm text-white bg-transparent border !border-yellow-500 hover:bg-[#222222] focus:border-gray-500 active:border-gray-500 rounded-full transition-colors cursor-pointer mr-3",
                                                    "aria-label": `Save ${activeItem?.type} draft`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            size: 16,
                                                            className: "mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                            lineNumber: 756,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Save draft"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                    lineNumber: 747,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        checkUnsavedScorecardChangesBeforeAction(()=>{
                                                            // For quizzes, validate before showing publish confirmation
                                                            if (activeItem?.type === 'quiz' && quizEditorRef.current) {
                                                                // Run validation before opening the publish confirmation
                                                                const isValid = quizEditorRef.current.validateBeforePublish();
                                                                if (!isValid) {
                                                                    return; // Don't show confirmation if validation fails
                                                                }
                                                            }
                                                            // For learning materials, validate content exists
                                                            if (activeItem?.type === 'material' && learningMaterialEditorRef.current) {
                                                                const hasContent = learningMaterialEditorRef.current.hasContent();
                                                                if (!hasContent) {
                                                                    // Show error message
                                                                    displayToast("Empty learning material", "Please add content before publishing", "🚫");
                                                                    return; // Don't show confirmation if validation fails
                                                                }
                                                            }
                                                            // If validation passes, show publish confirmation
                                                            onSetShowPublishConfirmation(true);
                                                        });
                                                    },
                                                    className: "flex items-center px-4 py-2 text-sm text-white bg-transparent border !border-green-500 hover:bg-[#222222] focus:border-green-500 active:border-green-500 rounded-full transition-colors cursor-pointer",
                                                    "aria-label": `Publish ${activeItem?.type}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            size: 16,
                                                            className: "mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                            lineNumber: 793,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Publish"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                    lineNumber: 760,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true),
                                        activeItem?.status === 'published' && isEditMode && !quizPreviewMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                scheduledDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center mr-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setShowSchedulePicker(!showSchedulePicker),
                                                            className: "flex items-center px-4 py-2 text-sm text-white bg-transparent border !border-yellow-600 hover:bg-[#222222] focus:border-yellow-600 active:border-yellow-600 rounded-full transition-colors cursor-pointer",
                                                            "aria-label": "Set scheduled publication date",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "16",
                                                                    height: "16",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    className: "mr-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "12",
                                                                            cy: "12",
                                                                            r: "10"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                                            lineNumber: 809,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                            points: "12 6 12 12 16 14"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                                            lineNumber: 810,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                                    lineNumber: 808,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$dateFormat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatScheduleDate"])(scheduledDate)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                            lineNumber: 803,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        showSchedulePicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            ref: datePickerRef,
                                                            className: "absolute mt-2 top-16 z-50 bg-[#242424] p-3 border border-gray-700 rounded-lg shadow-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$datepicker$40$8$2e$4$2e$0_reac_4f3984e4bf0a90fce0103bc21df8c5a7$2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    selected: scheduledDate,
                                                                    onChange: (date)=>verifyScheduledDateAndSchedule(date),
                                                                    showTimeSelect: true,
                                                                    timeFormat: "HH:mm",
                                                                    timeIntervals: 15,
                                                                    dateFormat: "MMMM d, yyyy h:mm aa",
                                                                    timeCaption: "Time",
                                                                    minDate: new Date(),
                                                                    className: "bg-[#333333] rounded-md p-2 px-4 w-full text-white cursor-pointer",
                                                                    wrapperClassName: "w-full",
                                                                    calendarClassName: "bg-[#242424] text-white border border-gray-700 rounded-lg shadow-lg cursor-pointer",
                                                                    inline: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                                    lineNumber: 816,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 flex justify-end",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setShowSchedulePicker(false),
                                                                        className: "px-3 py-1 text-xs text-white bg-[#444444] hover:bg-[#555555] rounded-md",
                                                                        children: "Close"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                                        lineNumber: 831,
                                                                        columnNumber: 57
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                                    lineNumber: 830,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                            lineNumber: 815,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                    lineNumber: 802,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleSaveClick,
                                                    className: "flex items-center px-4 py-2 text-sm text-white bg-transparent border !border-green-500 hover:bg-[#222222] focus:border-green-500 active:border-green-500 rounded-full transition-colors cursor-pointer",
                                                    "aria-label": "Save changes",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            size: 16,
                                                            className: "mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                            lineNumber: 847,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Save"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                    lineNumber: 842,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleCancelEditClick,
                                                    className: "flex items-center px-4 py-2 text-sm text-white bg-transparent border !border-gray-500 hover:bg-[#222222] focus:border-gray-500 active:border-gray-500 rounded-full transition-colors cursor-pointer",
                                                    "aria-label": "Cancel editing",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            size: 16,
                                                            className: "mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                            lineNumber: 855,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Cancel"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                    lineNumber: 850,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true) : activeItem?.status === 'published' && !isEditMode && !quizPreviewMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                activeItem.scheduled_publish_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    content: `Scheduled for ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$dateFormat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatScheduleDate"])(new Date(activeItem.scheduled_publish_at))}`,
                                                    position: "top",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "flex items-center px-4 py-2 text-sm text-white bg-transparent border !border-yellow-600 hover:bg-[#222222] focus:border-yellow-600 active:border-yellow-600 rounded-full transition-colors",
                                                        "aria-label": "Scheduled publishing information",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "16",
                                                                height: "16",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                className: "mr-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "12",
                                                                        cy: "12",
                                                                        r: "10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                                        lineNumber: 868,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                        points: "12 6 12 12 16 14"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                                        lineNumber: 869,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                                lineNumber: 867,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Scheduled"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                        lineNumber: 863,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                    lineNumber: 862,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: onEnableEditMode,
                                                    className: "flex items-center px-4 py-2 text-sm text-white bg-transparent border !border-violet-600 hover:bg-[#222222] focus:border-violet-600 active:border-violet-600 rounded-full transition-colors cursor-pointer",
                                                    "aria-label": "Edit item",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                            size: 16,
                                                            className: "mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                            lineNumber: 880,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Edit"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CourseItemDialog.tsx",
                                                    lineNumber: 875,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CourseItemDialog.tsx",
                                    lineNumber: 719,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCloseRequest,
                                    className: "ml-2 p-2 text-white hover:text-white rounded-full hover:bg-[#333333] transition-colors cursor-pointer",
                                    "aria-label": "Close dialog",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CourseItemDialog.tsx",
                                        lineNumber: 893,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CourseItemDialog.tsx",
                                    lineNumber: 888,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CourseItemDialog.tsx",
                            lineNumber: 654,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto dialog-content-editor",
                            style: {
                                height: 'calc(100vh - 65px)'
                            },
                            onClick: (e)=>{
                                // Ensure the click event doesn't bubble up
                                e.stopPropagation();
                                // Only focus the editor if in editable mode
                                if (activeItem?.status !== 'published' || isEditMode) {
                                    // Focus the editor
                                    focusEditor();
                                }
                            },
                            children: activeItem?.type === 'material' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicLearningMaterialEditor, {
                                ref: learningMaterialEditorRef,
                                readOnly: activeItem.status === 'published' && !isEditMode,
                                showPublishConfirmation: showPublishConfirmation,
                                onPublishConfirm: onPublishConfirm,
                                onPublishCancel: onPublishCancel,
                                taskId: activeItem.id,
                                isDarkMode: true,
                                scheduledPublishAt: scheduledDate ? scheduledDate.toISOString() : null,
                                onPublishSuccess: (updatedData)=>{
                                    // Handle publish success
                                    if (updatedData) {
                                        // Properly update the UI state first
                                        // This will transform the publish button to edit button
                                        if (activeItem && updatedData.status === 'published') {
                                            activeItem.status = 'published';
                                            activeItem.title = updatedData.title;
                                            // Add the scheduled_publish_at value from updatedData to activeItem
                                            activeItem.scheduled_publish_at = updatedData.scheduled_publish_at;
                                            if (updatedData.scheduled_publish_at) {
                                                setScheduledDate(new Date(updatedData.scheduled_publish_at));
                                            } else {
                                                setScheduledDate(null);
                                            }
                                            if (updatedData.blocks) {
                                                // @ts-ignore - types may not perfectly match
                                                activeItem.content = updatedData.blocks;
                                            }
                                        }
                                        // Update will be handled by the parent component
                                        onPublishConfirm();
                                        // Show toast notification
                                        const publishMessage = updatedData.scheduled_publish_at ? "Your learning material has been scheduled for publishing" : "Your learning material has been published";
                                        displayToast("Published", publishMessage);
                                    }
                                    // Hide the publish confirmation dialog
                                    onSetShowPublishConfirmation(false);
                                },
                                onSaveSuccess: (updatedData)=>{
                                    // Handle save success - similar to publish success but without status change
                                    if (updatedData) {
                                        // Update the activeItem with new title and content
                                        if (activeItem) {
                                            activeItem.title = updatedData.title;
                                            // Add the scheduled_publish_at value when saving
                                            activeItem.scheduled_publish_at = updatedData.scheduled_publish_at;
                                            if (updatedData.blocks) {
                                                // @ts-ignore - types may not perfectly match
                                                activeItem.content = updatedData.blocks;
                                            }
                                        }
                                        // Call the parent's save function
                                        onSaveItem();
                                        // Show toast notification for save success
                                        displayToast("Saved", `Your learning material has been updated`);
                                    }
                                }
                            }, `material-${activeItem.id}-${isEditMode}`, false, {
                                fileName: "[project]/src/components/CourseItemDialog.tsx",
                                lineNumber: 913,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)) : activeItem?.type === 'quiz' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicQuizEditor, {
                                ref: quizEditorRef,
                                scheduledPublishAt: scheduledDate ? scheduledDate.toISOString() : null,
                                onChange: (questions)=>{
                                    // Track if there are questions for publish/preview button visibility
                                    setHasQuizQuestions(questions.length > 0);
                                    // Keep activeItem.questions updated for component state consistency
                                    if (activeItem) {
                                        activeItem.questions = questions;
                                    }
                                    // Notify parent component
                                    onQuizContentChange(questions);
                                },
                                isPreviewMode: quizPreviewMode,
                                isDarkMode: true,
                                readOnly: activeItem.status === 'published' && !isEditMode,
                                taskId: activeItem.id,
                                status: activeItem.status,
                                taskType: activeItem.type,
                                showPublishConfirmation: showPublishConfirmation,
                                onPublishCancel: onPublishCancel,
                                onValidationError: (message, description)=>{
                                    // Display toast notification for validation errors during publishing
                                    displayToast(message, description, "🚫");
                                },
                                courseId: courseId,
                                userId: user?.id,
                                onSaveSuccess: (updatedData)=>{
                                    // Handle save success
                                    if (updatedData) {
                                        // Update the activeItem with the updated title and questions
                                        if (activeItem) {
                                            activeItem.title = updatedData.title;
                                            // Add the scheduled_publish_at value when saving
                                            activeItem.scheduled_publish_at = updatedData.scheduled_publish_at;
                                            if (updatedData.questions) {
                                                activeItem.questions = updatedData.questions;
                                            }
                                        }
                                        // Call onSaveItem to exit edit mode
                                        onSaveItem();
                                        // Show toast notification for save success
                                        displayToast("Saved", `Your ${activeItem.type} has been updated`);
                                    }
                                },
                                onPublishSuccess: (updatedData)=>{
                                    // Handle publish success
                                    if (updatedData) {
                                        // Properly update the UI state first
                                        // Properly update the UI state first
                                        // This will transform the publish button to edit button
                                        if (activeItem && updatedData.status === 'published') {
                                            activeItem.status = 'published';
                                            activeItem.title = updatedData.title;
                                            // Add the scheduled_publish_at value from updatedData to activeItem
                                            activeItem.scheduled_publish_at = updatedData.scheduled_publish_at;
                                            if (updatedData.scheduled_publish_at) {
                                                setScheduledDate(new Date(updatedData.scheduled_publish_at));
                                            } else {
                                                setScheduledDate(null);
                                            }
                                            if (updatedData.questions) {
                                                activeItem.questions = updatedData.questions;
                                            }
                                        }
                                        // Update will be handled by the parent component
                                        // Pass the updated data to the parent component
                                        onPublishConfirm();
                                        // Show toast notification
                                        const publishMessage = updatedData.scheduled_publish_at ? `Your quiz has been scheduled for publishing` : `Your quiz has been published`;
                                        displayToast("Published", publishMessage);
                                    }
                                    // Hide the publish confirmation dialog
                                    onSetShowPublishConfirmation(false);
                                },
                                schoolId: schoolId,
                                onQuestionChangeWithUnsavedScorecardChanges: ()=>{
                                    setShowUnsavedScorecardChangesInfo(true);
                                }
                            }, `quiz-${activeItem.id}-${isEditMode}`, false, {
                                fileName: "[project]/src/components/CourseItemDialog.tsx",
                                lineNumber: 980,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)) : null
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseItemDialog.tsx",
                            lineNumber: 898,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CourseItemDialog.tsx",
                    lineNumber: 644,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/CourseItemDialog.tsx",
                lineNumber: 640,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: showCloseConfirmation,
                title: isClosingDraft ? "Save Your Progress" : "Unsaved Changes",
                message: isClosingDraft ? "Would you like to save your progress before leaving? If you don't save, all your progress will be lost." : "All your unsaved changes will be lost if you leave without saving. Are you sure you want to leave?",
                confirmButtonText: isClosingDraft ? "Save" : "Discard changes",
                cancelButtonText: isClosingDraft ? "Discard" : "Continue Editing",
                onConfirm: isClosingDraft ? handleConfirmSaveDraft : handleConfirmDiscardChanges,
                onCancel: isClosingDraft ? handleConfirmDiscardChanges : handleCancelClosingDialog,
                onClickOutside: isClosingDraft ? ()=>setShowCloseConfirmation(false) : handleCancelClosingDialog,
                type: isClosingDraft ? 'save' : 'delete',
                showCloseButton: isClosingDraft,
                onClose: ()=>setShowCloseConfirmation(false)
            }, void 0, false, {
                fileName: "[project]/src/components/CourseItemDialog.tsx",
                lineNumber: 1077,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: showSaveConfirmation,
                title: "Ready to save changes",
                message: "These changes will be reflected to learners immediately after saving. Are you sure you want to proceed?",
                confirmButtonText: "Save",
                cancelButtonText: "Continue Editing",
                onConfirm: handleConfirmSavePublished,
                onCancel: handleCancelSave,
                type: "publish"
            }, void 0, false, {
                fileName: "[project]/src/components/CourseItemDialog.tsx",
                lineNumber: 1096,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: showUnsavedScorecardConfirmation,
                title: "Unsaved Scorecard Changes",
                message: `The scorecard for this question has unsaved changes. Do you want to discard them and continue, or go back to save them?`,
                confirmButtonText: "Discard changes",
                cancelButtonText: "Go Back",
                onConfirm: handleDiscardScorecardChanges,
                onCancel: handleGoBackToScorecard,
                type: "delete"
            }, void 0, false, {
                fileName: "[project]/src/components/CourseItemDialog.tsx",
                lineNumber: 1108,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: showUnsavedScorecardChangesInfo,
                title: "You have unsaved changes",
                message: `Your scorecard has unsaved changes. Either save them or discard them.`,
                confirmButtonText: "Go back",
                cancelButtonText: "",
                onConfirm: ()=>{
                    setShowUnsavedScorecardChangesInfo(false);
                },
                onCancel: ()=>{
                    setShowUnsavedScorecardChangesInfo(false);
                },
                type: "custom"
            }, void 0, false, {
                fileName: "[project]/src/components/CourseItemDialog.tsx",
                lineNumber: 1119,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                show: showToast,
                title: toastTitle,
                description: toastDescription,
                emoji: toastEmoji,
                onClose: ()=>setShowToast(false)
            }, void 0, false, {
                fileName: "[project]/src/components/CourseItemDialog.tsx",
                lineNumber: 1135,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = CourseItemDialog;
}),
"[project]/src/components/CourseModuleList.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>CourseModuleList
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/trash.js [app-ssr] (ecmascript) <export default as Trash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-ssr] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CourseItemDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CourseItemDialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ConfirmationDialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Tooltip.tsx [app-ssr] (ecmascript)"); // Import the Tooltip component
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$dateFormat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/dateFormat.ts [app-ssr] (ecmascript)"); // Import the utility function
;
;
;
;
;
;
;
function CourseModuleList({ modules, mode, onToggleModule, onOpenItem, onMoveItemUp, onMoveItemDown, onDeleteItem, onAddLearningMaterial, onAddQuiz, onMoveModuleUp, onMoveModuleDown, onDeleteModule, onEditModuleTitle, expandedModules = {}, saveModuleTitle = ()=>{}, cancelModuleEditing = ()=>{}, completedTaskIds = {}, completedQuestionIds = {}, schoolId, courseId, // Dialog-related props
isDialogOpen = false, activeItem = null, activeModuleId = null, isEditMode = false, isPreviewMode = false, showPublishConfirmation = false, handleConfirmPublish = ()=>{}, handleCancelPublish = ()=>{}, closeDialog = ()=>{}, saveItem = ()=>{}, cancelEditMode = ()=>{}, enableEditMode = ()=>{}, handleQuizContentChange = ()=>{}, setShowPublishConfirmation = ()=>{}, onDuplicateItem }) {
    // Track completed items - initialize with completedTaskIds prop
    const [completedItems, setCompletedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(completedTaskIds);
    // State to track module deletion confirmation
    const [moduleToDelete, setModuleToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // State to track deletion in progress
    const [deletingTaskId, setDeletingTaskId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // State to track module deletion in progress
    const [deletingModuleId, setDeletingModuleId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // State to track task deletion confirmation
    const [taskToDelete, setTaskToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // States to track module swapping in progress
    const [swappingModuleUpId, setSwappingModuleUpId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [swappingModuleDownId, setSwappingModuleDownId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // States to track task swapping in progress
    const [swappingTaskUpId, setSwappingTaskUpId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [swappingTaskDownId, setSwappingTaskDownId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // State to track task duplication in progress
    const [duplicatingTaskId, setDuplicatingTaskId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Update completedItems when completedTaskIds changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only update the state if the values are actually different
        // This prevents an infinite update loop
        const hasChanged = JSON.stringify(completedItems) !== JSON.stringify(completedTaskIds);
        if (hasChanged) {
            setCompletedItems(completedTaskIds);
        }
    }, [
        completedTaskIds,
        completedItems
    ]);
    // Refs for the dialog
    const dialogTitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dialogContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Function to focus the editor
    const focusEditor = ()=>{
        // First, blur the title element
        if (dialogTitleRef.current) {
            dialogTitleRef.current.blur();
        }
        // Then try to find and focus the editor
        setTimeout(()=>{
            try {
                const selectors = [
                    '.bn-editor',
                    '.ProseMirror',
                    '.dialog-content-editor [contenteditable="true"]',
                    '.dialog-content-editor .bn-container',
                    '.dialog-content-editor [tabindex="0"]',
                    '.dialog-content-editor [role="textbox"]',
                    '.dialog-content-editor div[contenteditable]'
                ];
                for (const selector of selectors){
                    const el = document.querySelector(selector);
                    if (el instanceof HTMLElement) {
                        el.focus();
                        return; // Exit once we've focused an element
                    }
                }
            } catch (err) {
                console.error('Error focusing editor:', err);
            }
        }, 200);
    };
    // Function to handle swapping modules via API
    const swapModules = async (moduleId1, moduleId2)=>{
        if (!courseId) {
            console.error('Course ID is required for swapping modules');
            return;
        }
        try {
            const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/courses/${courseId}/milestones/swap`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    milestone_1_id: moduleId1,
                    milestone_2_id: moduleId2
                })
            });
            if (!response.ok) {
                throw new Error(`Failed to swap modules: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error swapping modules:', error);
            throw error;
        }
    };
    // Function to handle swapping tasks via API
    const swapTasks = async (taskId1, taskId2)=>{
        if (!courseId) {
            console.error('Course ID is required for swapping modules');
            return;
        }
        try {
            const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/courses/${courseId}/tasks/swap`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    task_1_id: taskId1,
                    task_2_id: taskId2
                })
            });
            if (!response.ok) {
                throw new Error(`Failed to swap tasks: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error swapping tasks:', error);
            throw error;
        }
    };
    // Function to handle moving a module up (with API call)
    const handleMoveModuleUp = async (moduleId)=>{
        // Find the module and its index
        const index = modules.findIndex((m)=>m.id === moduleId);
        if (index <= 0) return; // Can't move up if it's the first one
        // Get the previous module
        const previousModule = modules[index - 1];
        if (!previousModule) return;
        try {
            // Set loading state
            setSwappingModuleUpId(moduleId);
            // Call the API to swap modules
            await swapModules(moduleId, previousModule.id);
            // Update UI via the parent component's handler
            if (onMoveModuleUp) {
                onMoveModuleUp(moduleId);
            }
        } catch (error) {
            console.error('Failed to move module up:', error);
        // Could add a toast notification here
        } finally{
            // Clear loading state
            setSwappingModuleUpId(null);
        }
    };
    // Function to handle moving a module down (with API call)
    const handleMoveModuleDown = async (moduleId)=>{
        // Find the module and its index
        const index = modules.findIndex((m)=>m.id === moduleId);
        if (index === -1 || index === modules.length - 1) return; // Can't move down if it's the last one
        // Get the next module
        const nextModule = modules[index + 1];
        if (!nextModule) return;
        try {
            // Set loading state
            setSwappingModuleDownId(moduleId);
            // Call the API to swap modules
            await swapModules(moduleId, nextModule.id);
            // Update UI via the parent component's handler
            if (onMoveModuleDown) {
                onMoveModuleDown(moduleId);
            }
        } catch (error) {
            console.error('Failed to move module down:', error);
        // Could add a toast notification here
        } finally{
            // Clear loading state
            setSwappingModuleDownId(null);
        }
    };
    // Function to handle moving a task up (with API call)
    const handleMoveTaskUp = async (moduleId, taskId)=>{
        // Find the module
        const module = modules.find((m)=>m.id === moduleId);
        if (!module) return;
        // Find the task and its index
        const index = module.items.findIndex((item)=>item.id === taskId);
        if (index <= 0) return; // Can't move up if it's the first one
        // Get the previous task
        const previousTask = module.items[index - 1];
        if (!previousTask) return;
        try {
            // Set loading state
            setSwappingTaskUpId(taskId);
            // Call the API to swap tasks
            await swapTasks(taskId, previousTask.id);
            // Update UI via the parent component's handler
            if (onMoveItemUp) {
                onMoveItemUp(moduleId, taskId);
            }
        } catch (error) {
            console.error('Failed to move task up:', error);
        // Could add a toast notification here
        } finally{
            // Clear loading state
            setSwappingTaskUpId(null);
        }
    };
    // Function to handle moving a task down (with API call)
    const handleMoveTaskDown = async (moduleId, taskId)=>{
        // Find the module
        const module = modules.find((m)=>m.id === moduleId);
        if (!module) return;
        // Find the task and its index
        const index = module.items.findIndex((item)=>item.id === taskId);
        if (index === -1 || index === module.items.length - 1) return; // Can't move down if it's the last one
        // Get the next task
        const nextTask = module.items[index + 1];
        if (!nextTask) return;
        try {
            // Set loading state
            setSwappingTaskDownId(taskId);
            // Call the API to swap tasks
            await swapTasks(taskId, nextTask.id);
            // Update UI via the parent component's handler
            if (onMoveItemDown) {
                onMoveItemDown(moduleId, taskId);
            }
        } catch (error) {
            console.error('Failed to move task down:', error);
        // Could add a toast notification here
        } finally{
            // Clear loading state
            setSwappingTaskDownId(null);
        }
    };
    // Get the appropriate expanded state based on mode
    const getIsExpanded = (moduleId)=>{
        if (mode === 'edit') {
            return modules.find((m)=>m.id === moduleId)?.isExpanded || false;
        } else {
            return expandedModules[moduleId] || false;
        }
    };
    // Function to format unlock date for display
    const formatUnlockDate = (unlockAt)=>{
        const date = new Date(unlockAt);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    // Handle module click based on mode
    const handleModuleClick = (e, moduleId)=>{
        // Find the module
        const module = modules.find((m)=>m.id === moduleId);
        if (!module) return;
        // Prevent clicking on locked modules
        if (module.unlockAt) {
            return;
        }
        // If in edit mode and module is in editing mode, don't toggle expansion
        if (mode === 'edit' && module.isEditing) {
            return;
        }
        // Prevent toggling if clicking on buttons
        if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
            return;
        }
        onToggleModule(moduleId);
    };
    // Function to handle task deletion with API call
    const handleDeleteTask = async (moduleId, itemId)=>{
        try {
            setDeletingTaskId(itemId);
            // Make the API call to delete the task
            const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/tasks/${itemId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Failed to delete task: ${response.statusText}`);
            }
            // If the API call was successful, update the UI
            if (onDeleteItem) {
                onDeleteItem(moduleId, itemId);
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        // You could add a toast notification here for the error
        } finally{
            setDeletingTaskId(null);
        }
    };
    // Function to handle task delete confirmation
    const handleConfirmTaskDelete = ()=>{
        if (taskToDelete) {
            handleDeleteTask(taskToDelete.moduleId, taskToDelete.itemId);
        }
        setTaskToDelete(null);
    };
    // Function to cancel task deletion
    const handleCancelTaskDelete = ()=>{
        setTaskToDelete(null);
    };
    // Function to handle module delete confirmation
    const handleConfirmModuleDelete = async ()=>{
        if (moduleToDelete && onDeleteModule) {
            try {
                setDeletingModuleId(moduleToDelete);
                // Make the API call to delete the module (milestone)
                const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/milestones/${moduleToDelete}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error(`Failed to delete module: ${response.statusText}`);
                }
                // If the API call was successful, update the UI
                onDeleteModule(moduleToDelete);
            } catch (error) {
                console.error('Error deleting module:', error);
            // Could add a toast notification here for the error
            } finally{
                setDeletingModuleId(null);
            }
        }
        setModuleToDelete(null);
    };
    // Function to cancel module deletion
    const handleCancelModuleDelete = ()=>{
        setModuleToDelete(null);
    };
    // Function to get item type name for display
    const getItemTypeName = (type)=>{
        switch(type){
            case 'material':
                return 'learning material';
            case 'quiz':
                return 'quiz';
        }
    };
    // Function to handle task duplication with API call
    const handleDuplicateTask = async (moduleId, itemId)=>{
        if (!courseId) {
            console.error('Course ID is required for cloning tasks');
            return;
        }
        try {
            setDuplicatingTaskId(itemId);
            // Make the API call to duplicate the task
            const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/tasks/duplicate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    task_id: parseInt(itemId),
                    milestone_id: parseInt(moduleId),
                    course_id: parseInt(courseId)
                })
            });
            if (!response.ok) {
                throw new Error(`Failed to duplicate task: ${response.statusText}`);
            }
            const data = await response.json();
            // If the API call was successful, update the UI
            if (onDuplicateItem) {
                await onDuplicateItem(moduleId, data['task'], data['ordering']);
            }
        } catch (error) {
            console.error('Error duplicating task:', error);
        // You could add a toast notification here for the error
        } finally{
            setDuplicatingTaskId(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: modules.map((module, index)=>{
                    const moduleContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-none rounded-lg transition-colors",
                        style: {
                            backgroundColor: module.backgroundColor
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center p-4 pb-3 ${module.unlockAt ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`,
                                        onClick: (e)=>handleModuleClick(e, module.id),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    // Prevent toggling locked modules
                                                    if (module.unlockAt) return;
                                                    onToggleModule(module.id);
                                                },
                                                className: `hidden sm:block mr-2 transition-colors ${module.unlockAt ? 'text-gray-500 cursor-not-allowed' : 'text-gray-400 hover:text-white cursor-pointer'}`,
                                                "aria-label": getIsExpanded(module.id) ? "Collapse module" : "Expand module",
                                                disabled: !!module.unlockAt,
                                                children: getIsExpanded(module.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                    lineNumber: 558,
                                                    columnNumber: 69
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                    lineNumber: 558,
                                                    columnNumber: 103
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                lineNumber: 546,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 mr-2 sm:mr-4",
                                                children: mode === 'edit' && module.isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    contentEditable: true,
                                                    suppressContentEditableWarning: true,
                                                    className: "text-lg sm:text-xl font-light text-white outline-none empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400 empty:before:pointer-events-none",
                                                    "data-module-id": module.id,
                                                    "data-placeholder": "New Module",
                                                    onClick: (e)=>e.stopPropagation(),
                                                    children: module.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 45
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: `text-lg sm:text-xl font-light ${module.unlockAt ? 'text-gray-400' : 'text-white'}`,
                                                            children: module.title || "New Module"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                            lineNumber: 574,
                                                            columnNumber: 49
                                                        }, this),
                                                        module.unlockAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                            size: 16,
                                                            className: "ml-2 text-gray-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                            lineNumber: 580,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                    lineNumber: 573,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                lineNumber: 560,
                                                columnNumber: 37
                                            }, this),
                                            mode === 'edit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2",
                                                children: module.isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                saveModuleTitle(module.id);
                                                            },
                                                            className: "px-3 py-1 text-sm text-black bg-gray-300 hover:bg-gray-400 border border-black hover:border-gray-600 rounded-md transition-colors cursor-pointer flex items-center",
                                                            "aria-label": "Save module title",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "16",
                                                                    height: "16",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    className: "mr-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                            lineNumber: 600,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                            points: "17 21 17 13 7 13 7 21"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                            lineNumber: 601,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                            points: "7 3 7 8 15 8"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                            lineNumber: 602,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                    lineNumber: 599,
                                                                    columnNumber: 57
                                                                }, this),
                                                                "Save"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                            lineNumber: 591,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                cancelModuleEditing(module.id);
                                                            },
                                                            className: "px-3 py-1 text-sm text-gray-300 hover:text-white transition-colors focus:outline-none cursor-pointer flex items-center",
                                                            "aria-label": "Cancel editing",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "16",
                                                                    height: "16",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    className: "mr-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "18",
                                                                            y1: "6",
                                                                            x2: "6",
                                                                            y2: "18"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                            lineNumber: 615,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "6",
                                                                            y1: "6",
                                                                            x2: "18",
                                                                            y2: "18"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                            lineNumber: 616,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                    lineNumber: 614,
                                                                    columnNumber: 57
                                                                }, this),
                                                                "Cancel"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                            lineNumber: 606,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                if (onEditModuleTitle) {
                                                                    onEditModuleTitle(module.id);
                                                                }
                                                            },
                                                            className: "px-3 py-1 text-sm text-black bg-gray-300 hover:bg-gray-400 border border-black hover:border-gray-600 rounded-md transition-colors cursor-pointer flex items-center",
                                                            "aria-label": "Edit module title",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "16",
                                                                    height: "16",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    className: "mr-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                            lineNumber: 634,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                            lineNumber: 635,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                    lineNumber: 633,
                                                                    columnNumber: 57
                                                                }, this),
                                                                "Edit"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                            lineNumber: 623,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                handleMoveModuleUp(module.id);
                                                            },
                                                            disabled: index === 0 || swappingModuleUpId === module.id,
                                                            className: "p-1 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer",
                                                            "aria-label": "Move module up",
                                                            children: swappingModuleUpId === module.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "animate-spin w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                lineNumber: 649,
                                                                columnNumber: 61
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                lineNumber: 651,
                                                                columnNumber: 61
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                            lineNumber: 639,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                handleMoveModuleDown(module.id);
                                                            },
                                                            disabled: index === modules.length - 1 || swappingModuleDownId === module.id,
                                                            className: "p-1 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer",
                                                            "aria-label": "Move module down",
                                                            children: swappingModuleDownId === module.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "animate-spin w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                lineNumber: 664,
                                                                columnNumber: 61
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                lineNumber: 666,
                                                                columnNumber: 61
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                            lineNumber: 654,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                setModuleToDelete(module.id);
                                                            },
                                                            className: "p-1 text-gray-400 hover:text-white transition-colors cursor-pointer",
                                                            "aria-label": "Delete module",
                                                            disabled: deletingModuleId === module.id,
                                                            children: deletingModuleId === module.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "animate-spin w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                lineNumber: 679,
                                                                columnNumber: 61
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                lineNumber: 681,
                                                                columnNumber: 61
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                            lineNumber: 669,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                lineNumber: 588,
                                                columnNumber: 41
                                            }, this),
                                            mode === 'view' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    // Prevent toggling locked modules
                                                    if (module.unlockAt) return;
                                                    onToggleModule(module.id);
                                                },
                                                className: `flex items-center px-3 py-1 text-sm focus:outline-none focus:ring-0 focus:border-0 transition-colors rounded-full border ${module.unlockAt ? 'text-gray-500 border-gray-600 bg-gray-800 cursor-not-allowed' : 'text-gray-400 hover:text-white border-gray-700 bg-gray-900 cursor-pointer'}`,
                                                "aria-label": getIsExpanded(module.id) ? "Collapse module" : "Expand module",
                                                disabled: !!module.unlockAt,
                                                children: getIsExpanded(module.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                            size: 16,
                                                            className: "mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                            lineNumber: 706,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden sm:inline",
                                                            children: "Collapse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                            lineNumber: 707,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            size: 16,
                                                            className: "mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                            lineNumber: 711,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden sm:inline",
                                                            children: "Expand"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                            lineNumber: 712,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                lineNumber: 691,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CourseModuleList.tsx",
                                        lineNumber: 542,
                                        columnNumber: 33
                                    }, this),
                                    mode === 'view' && module.progress !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${module.unlockAt ? 'cursor-not-allowed' : 'cursor-pointer'}`,
                                        children: getIsExpanded(module.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 pb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end items-center mb-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-400",
                                                        children: [
                                                            module.progress,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseModuleList.tsx",
                                                        lineNumber: 725,
                                                        columnNumber: 53
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                    lineNumber: 724,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full bg-gray-700 h-2 rounded-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-green-500 h-2 rounded-full transition-all duration-300",
                                                        style: {
                                                            width: `${module.progress}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseModuleList.tsx",
                                                        lineNumber: 730,
                                                        columnNumber: 53
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                    lineNumber: 729,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                            lineNumber: 723,
                                            columnNumber: 45
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 pb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end items-center mb-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-400",
                                                        children: [
                                                            module.progress,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseModuleList.tsx",
                                                        lineNumber: 739,
                                                        columnNumber: 53
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                    lineNumber: 738,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full bg-gray-700 h-2 rounded-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-green-500 h-2 rounded-full transition-all duration-300",
                                                        style: {
                                                            width: `${module.progress}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseModuleList.tsx",
                                                        lineNumber: 744,
                                                        columnNumber: 53
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                    lineNumber: 743,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                            lineNumber: 737,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CourseModuleList.tsx",
                                        lineNumber: 721,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                lineNumber: 540,
                                columnNumber: 29
                            }, this),
                            getIsExpanded(module.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 pb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pl-2 sm:pl-6 border-l border-gray-400 ml-2 space-y-2",
                                    children: [
                                        module.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-testid": `module-item-${item.id}`,
                                                className: `flex items-center group p-2 rounded-md cursor-pointer transition-all relative mt-2 hover:bg-gray-700/50 ${completedItems[item.id] ? "opacity-60" : ""} ${item.isGenerating ? "opacity-40 pointer-events-none" : ""}`,
                                                onClick: ()=>onOpenItem && !item.isGenerating && onOpenItem(module.id, item.id),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex items-center justify-center mr-4 sm:mr-2 ${completedItems[item.id] ? "opacity-50" : "opacity-100"}`,
                                                        children: [
                                                            item.type === 'material' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-7 h-7 rounded-md flex items-center justify-center ${completedItems[item.id] ? "bg-green-500/15" : "bg-blue-500/15"}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                    size: 16,
                                                                    className: `${completedItems[item.id] ? "text-green-500" : "text-blue-400"}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                    lineNumber: 778,
                                                                    columnNumber: 61
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                lineNumber: 774,
                                                                columnNumber: 57
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-7 h-7 rounded-md flex items-center justify-center ${completedItems[item.id] ? "bg-green-500/15" : completedQuestionIds[item.id] && Object.keys(completedQuestionIds[item.id]).some((qId)=>completedQuestionIds[item.id][qId] === true) ? "bg-yellow-500/15" : "bg-purple-500/15"}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                                                                    size: 16,
                                                                    className: completedItems[item.id] ? "text-green-500" : completedQuestionIds[item.id] && Object.keys(completedQuestionIds[item.id]).some((qId)=>completedQuestionIds[item.id][qId] === true) ? "text-yellow-500" : "text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                    lineNumber: 791,
                                                                    columnNumber: 61
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                lineNumber: 784,
                                                                columnNumber: 57
                                                            }, this),
                                                            item.isGenerating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ml-2 animate-pulse",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                    size: 12,
                                                                    className: "animate-spin text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                    lineNumber: 804,
                                                                    columnNumber: 61
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                lineNumber: 803,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseModuleList.tsx",
                                                        lineNumber: 768,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-base font-light ${completedItems[item.id] ? "line-through text-white" : item.type === 'quiz' && completedQuestionIds[item.id] && Object.keys(completedQuestionIds[item.id]).some((qId)=>completedQuestionIds[item.id][qId] === true) ? "text-yellow-500" : "text-white"} outline-none empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400 empty:before:pointer-events-none mr-2`,
                                                            children: [
                                                                item.title,
                                                                item.type === 'quiz' && item.status !== 'draft' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `inline-block ml-2 text-sm font-normal ${!completedItems[item.id] && completedQuestionIds[item.id] && Object.keys(completedQuestionIds[item.id]).some((qId)=>completedQuestionIds[item.id][qId] === true) ? "text-yellow-500" : "text-gray-400"}`,
                                                                    children: [
                                                                        "(",
                                                                        completedQuestionIds[item.id] ? mode === 'view' && !completedItems[item.id] && Object.keys(completedQuestionIds[item.id]).some((qId)=>completedQuestionIds[item.id][qId] === true) ? `${Object.values(completedQuestionIds[item.id]).filter(Boolean).length} / ${item.numQuestions}` : `${Object.keys(completedQuestionIds[item.id]).length} question${Object.keys(completedQuestionIds[item.id]).length === 1 ? "" : "s"}` : `${item.numQuestions} question${item.numQuestions === 1 ? "" : "s"}`,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                    lineNumber: 821,
                                                                    columnNumber: 61
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                            lineNumber: 809,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseModuleList.tsx",
                                                        lineNumber: 808,
                                                        columnNumber: 49
                                                    }, this),
                                                    mode === 'edit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-2",
                                                        onClick: (e)=>e.stopPropagation(),
                                                        children: [
                                                            item.status === 'draft' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-red-500 text-white",
                                                                children: "DRAFT"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                lineNumber: 841,
                                                                columnNumber: 61
                                                            }, this),
                                                            item.status === 'published' && item.scheduled_publish_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                content: `Scheduled for ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$dateFormat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatScheduleDate"])(new Date(item.scheduled_publish_at))}`,
                                                                position: "top",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-yellow-900 text-white",
                                                                    children: "SCHEDULED"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                    lineNumber: 847,
                                                                    columnNumber: 65
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                lineNumber: 846,
                                                                columnNumber: 61
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                content: "Duplicate as draft",
                                                                position: "top",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        handleDuplicateTask(module.id, item.id);
                                                                    },
                                                                    disabled: duplicatingTaskId === item.id,
                                                                    className: "p-1 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer",
                                                                    "aria-label": "Duplicate task as draft",
                                                                    children: duplicatingTaskId === item.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "animate-spin w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                        lineNumber: 863,
                                                                        columnNumber: 69
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                        lineNumber: 865,
                                                                        columnNumber: 69
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                    lineNumber: 853,
                                                                    columnNumber: 61
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                lineNumber: 852,
                                                                columnNumber: 57
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    handleMoveTaskUp(module.id, item.id);
                                                                },
                                                                disabled: itemIndex === 0 || swappingTaskUpId === item.id,
                                                                className: "p-1 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer",
                                                                "aria-label": "Move item up",
                                                                children: swappingTaskUpId === item.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "animate-spin w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                    lineNumber: 879,
                                                                    columnNumber: 65
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                    lineNumber: 881,
                                                                    columnNumber: 65
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                lineNumber: 869,
                                                                columnNumber: 57
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    handleMoveTaskDown(module.id, item.id);
                                                                },
                                                                disabled: itemIndex === module.items.length - 1 || swappingTaskDownId === item.id,
                                                                className: "p-1 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer",
                                                                "aria-label": "Move item down",
                                                                children: swappingTaskDownId === item.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "animate-spin w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                    lineNumber: 894,
                                                                    columnNumber: 65
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                    lineNumber: 896,
                                                                    columnNumber: 65
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                lineNumber: 884,
                                                                columnNumber: 57
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    if (onDeleteItem) {
                                                                        setTaskToDelete({
                                                                            moduleId: module.id,
                                                                            itemId: item.id,
                                                                            itemType: item.type
                                                                        });
                                                                    }
                                                                },
                                                                className: "p-1 text-gray-400 hover:text-white transition-colors cursor-pointer",
                                                                "aria-label": "Delete item",
                                                                disabled: deletingTaskId === item.id,
                                                                children: deletingTaskId === item.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "animate-spin w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                    lineNumber: 915,
                                                                    columnNumber: 65
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                    lineNumber: 917,
                                                                    columnNumber: 65
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                lineNumber: 899,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseModuleList.tsx",
                                                        lineNumber: 839,
                                                        columnNumber: 53
                                                    }, this),
                                                    mode === 'view' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        onClick: (e)=>e.stopPropagation(),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: `w-5 h-5 rounded-full flex items-center justify-center transition-colors cursor-pointer ${completedItems[item.id] ? "bg-green-500 border-0" : "border border-gray-500 hover:border-white"}`,
                                                            "aria-label": completedItems[item.id] ? "Mark as incomplete" : "Mark as completed",
                                                            children: completedItems[item.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                size: 12,
                                                                className: "text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                lineNumber: 934,
                                                                columnNumber: 65
                                                            }, this) : null
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                                            lineNumber: 926,
                                                            columnNumber: 57
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseModuleList.tsx",
                                                        lineNumber: 925,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                lineNumber: 760,
                                                columnNumber: 45
                                            }, this)),
                                        mode === 'edit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex space-x-2 mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    content: "Add learning material to teach a topic in the module",
                                                    position: "top",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: async ()=>{
                                                            if (onAddLearningMaterial) {
                                                                try {
                                                                    await onAddLearningMaterial(module.id);
                                                                } catch (error) {
                                                                    console.error("Failed to add learning material:", error);
                                                                }
                                                            }
                                                        },
                                                        className: "flex items-center px-3 py-1.5 text-sm text-gray-300 hover:text-white border border-gray-400 rounded-full transition-colors cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                size: 14,
                                                                className: "mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                lineNumber: 958,
                                                                columnNumber: 57
                                                            }, this),
                                                            "Learning material"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseModuleList.tsx",
                                                        lineNumber: 946,
                                                        columnNumber: 53
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                    lineNumber: 945,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    content: "Create a quiz for practice or assessment",
                                                    position: "top",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: async ()=>{
                                                            if (onAddQuiz) {
                                                                try {
                                                                    await onAddQuiz(module.id);
                                                                } catch (error) {
                                                                    console.error("Failed to add quiz:", error);
                                                                }
                                                            }
                                                        },
                                                        className: "flex items-center px-3 py-1.5 text-sm text-gray-300 hover:text-white border border-gray-400 rounded-full transition-colors cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                size: 14,
                                                                className: "mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                                                lineNumber: 975,
                                                                columnNumber: 57
                                                            }, this),
                                                            "Quiz"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseModuleList.tsx",
                                                        lineNumber: 963,
                                                        columnNumber: 53
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                                    lineNumber: 962,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CourseModuleList.tsx",
                                            lineNumber: 944,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CourseModuleList.tsx",
                                    lineNumber: 758,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CourseModuleList.tsx",
                                lineNumber: 757,
                                columnNumber: 33
                            }, this)
                        ]
                    }, module.id, true, {
                        fileName: "[project]/src/components/CourseModuleList.tsx",
                        lineNumber: 535,
                        columnNumber: 25
                    }, this);
                    return module.unlockAt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        content: `Unlocks on ${formatUnlockDate(module.unlockAt)}`,
                        className: "w-full block",
                        position: "top",
                        children: moduleContent
                    }, module.id, false, {
                        fileName: "[project]/src/components/CourseModuleList.tsx",
                        lineNumber: 988,
                        columnNumber: 25
                    }, this) : moduleContent;
                })
            }, void 0, false, {
                fileName: "[project]/src/components/CourseModuleList.tsx",
                lineNumber: 532,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CourseItemDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isDialogOpen,
                activeItem: activeItem,
                activeModuleId: activeModuleId,
                isEditMode: isEditMode,
                isPreviewMode: isPreviewMode,
                showPublishConfirmation: showPublishConfirmation,
                dialogTitleRef: dialogTitleRef,
                dialogContentRef: dialogContentRef,
                onClose: closeDialog,
                onPublishConfirm: handleConfirmPublish,
                onPublishCancel: handleCancelPublish,
                onSetShowPublishConfirmation: setShowPublishConfirmation,
                onSaveItem: saveItem,
                onCancelEditMode: cancelEditMode,
                onEnableEditMode: enableEditMode,
                onQuizContentChange: handleQuizContentChange,
                focusEditor: focusEditor,
                schoolId: schoolId,
                courseId: courseId
            }, void 0, false, {
                fileName: "[project]/src/components/CourseModuleList.tsx",
                lineNumber: 998,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: moduleToDelete !== null,
                title: "Are you sure you want to delete this module?",
                message: "All tasks within this module will be permanently removed. This action cannot be undone.",
                confirmButtonText: "Delete",
                onConfirm: handleConfirmModuleDelete,
                onCancel: handleCancelModuleDelete,
                type: "delete",
                "data-testid": "module-delete-dialog"
            }, void 0, false, {
                fileName: "[project]/src/components/CourseModuleList.tsx",
                lineNumber: 1021,
                columnNumber: 13
            }, this),
            taskToDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: taskToDelete !== null,
                title: `Are you sure you want to delete this ${getItemTypeName(taskToDelete.itemType)}?`,
                message: `This ${getItemTypeName(taskToDelete.itemType)} will be permanently removed. This action cannot be undone.`,
                confirmButtonText: `Delete`,
                onConfirm: handleConfirmTaskDelete,
                onCancel: handleCancelTaskDelete,
                type: "delete",
                "data-testid": "task-delete-dialog"
            }, void 0, false, {
                fileName: "[project]/src/components/CourseModuleList.tsx",
                lineNumber: 1036,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/CoursePublishSuccessBanner.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.28.0_react@19.1.1/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
;
;
;
;
const CoursePublishSuccessBanner = ({ isOpen, onClose, cohortId, cohortName, schoolId, schoolSlug, courseCount = 0, courseNames = [], source = 'course' // Default to course page as the source
 })=>{
    const [isCopied, setIsCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!isOpen) return null;
    // Determine message based on source
    const isCohortSource = source === 'cohort';
    const title = isCohortSource ? "Courses are now live" : "Your course is now live";
    const description = isCohortSource ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            "Learners added to this cohort can see ",
            courseCount === 1 ? "this course" : "these courses",
            " now. Either add them manually from the ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "Learners"
            }, void 0, false, {
                fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                lineNumber: 40,
                columnNumber: 148
            }, ("TURBOPACK compile-time value", void 0)),
            " tab or send them an invite link."
        ]
    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            "Learners added to this cohort can see this course now. Either add them manually from the",
            ' ',
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: `/school/admin/${schoolId}/cohorts/${cohortId}`,
                className: "text-blue-600 hover:text-blue-800",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "cohort admin dashboard"
            }, void 0, false, {
                fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                lineNumber: 46,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            ' ',
            "or send them an invite link."
        ]
    }, void 0, true);
    // Generate the invite link
    const inviteLink = `${window.location.origin}/school/${schoolSlug}/join?cohortId=${cohortId}`;
    const handleCopyInviteLink = async ()=>{
        try {
            await navigator.clipboard.writeText(inviteLink);
            setIsCopied(true);
            // Reset the copied state after 2 seconds
            setTimeout(()=>{
                setIsCopied(false);
            }, 2000);
        } catch (error) {
            console.error('Failed to copy to clipboard:', error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-testid": "course-publish-success-banner",
        className: "jsx-6f554561ba2d7039" + " " + "fixed inset-0 flex items-center justify-center z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-6f554561ba2d7039" + " " + "absolute inset-0 bg-black bg-opacity-90"
            }, void 0, false, {
                fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-6f554561ba2d7039" + " " + "relative z-10 flex w-[600px] max-w-[90vw] h-[400px] max-h-[90vh] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6f554561ba2d7039" + " " + "w-1/3 bg-black flex flex-col items-center justify-center relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6f554561ba2d7039" + " " + "absolute inset-0 opacity-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6f554561ba2d7039" + " " + "absolute top-0 left-0 w-full h-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 200 200",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "jsx-6f554561ba2d7039" + " " + "w-full h-full opacity-30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "#FFFFFF",
                                            d: "M40,-65.9C53.2,-60.1,66.3,-52.7,73.7,-41.4C81.2,-30.1,83,-14.9,81.9,-0.6C80.8,13.6,76.9,27.1,69.5,39.3C62.1,51.5,51.2,62.2,38.5,67.5C25.8,72.8,11.3,72.6,-2.5,76.2C-16.3,79.8,-29.9,87.3,-41.9,85.3C-53.9,83.3,-64.3,71.9,-71.2,58.8C-78.2,45.7,-81.8,30.8,-82.9,16C-84,1.2,-82.5,-13.5,-76.8,-25.9C-71.1,-38.2,-61.2,-48.1,-49.2,-54.5C-37.2,-60.9,-23.1,-63.8,-8.9,-69.1C5.3,-74.4,26.8,-71.8,40,-65.9Z",
                                            transform: "translate(100 100)",
                                            style: {
                                                animation: "morphBackground 30s infinite alternate-reverse"
                                            },
                                            className: "jsx-6f554561ba2d7039"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                                            lineNumber: 88,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                                        lineNumber: 87,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                                    lineNumber: 86,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                                lineNumber: 85,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6f554561ba2d7039" + " " + "relative z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6f554561ba2d7039" + " " + "w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mb-6 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "40",
                                            height: "40",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "jsx-6f554561ba2d7039",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M20 6L9 17L4 12",
                                                stroke: "white",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "jsx-6f554561ba2d7039"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                                                lineNumber: 97,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                                            lineNumber: 96,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6f554561ba2d7039" + " " + "absolute w-full h-full rounded-full border border-white opacity-0 animate-ripple"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                                            lineNumber: 101,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                animationDelay: '1s'
                                            },
                                            className: "jsx-6f554561ba2d7039" + " " + "absolute w-full h-full rounded-full border border-white opacity-0 animate-ripple"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                                            lineNumber: 102,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                                lineNumber: 94,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6f554561ba2d7039" + " " + "w-2/3 bg-white flex flex-col justify-between p-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6f554561ba2d7039" + " " + "mb-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-6f554561ba2d7039" + " " + "text-3xl font-light text-black mb-6 animate-slideUp",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                                        lineNumber: 110,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            animationDelay: '0.2s'
                                        },
                                        className: "jsx-6f554561ba2d7039" + " " + "pl-3 border-l-2 border-gray-200 animate-slideUp",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-6f554561ba2d7039" + " " + "text-gray-600 text-sm",
                                            children: description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                                            lineNumber: 113,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                                        lineNumber: 112,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                                lineNumber: 109,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animationDelay: '0.5s'
                                },
                                className: "jsx-6f554561ba2d7039" + " " + "space-y-3 animate-fadeIn",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCopyInviteLink,
                                        className: "jsx-6f554561ba2d7039" + " " + `w-full py-3 border font-medium rounded-md transition-colors duration-300 cursor-pointer group flex items-center justify-center ${isCopied ? 'border-green-300 text-green-700 bg-green-50' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`,
                                        children: isCopied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 16,
                                                    className: "mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Copied"
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    size: 16,
                                                    className: "mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Copy invite link"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                                        lineNumber: 122,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "jsx-6f554561ba2d7039" + " " + "w-full py-3 border border-black text-black font-medium rounded-md hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer group",
                                        children: isCohortSource ? "Back to Cohort" : "Back to Course"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                                        lineNumber: 143,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                                lineNumber: 120,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "6f554561ba2d7039",
                children: '@keyframes ripple{0%{opacity:.8;transform:scale(1)}to{opacity:0;transform:scale(1.5)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes morphBackground{0%{d:path("M40,-65.9C53.2,-60.1,66.3,-52.7,73.7,-41.4C81.2,-30.1,83,-14.9,81.9,-0.6C80.8,13.6,76.9,27.1,69.5,39.3C62.1,51.5,51.2,62.2,38.5,67.5C25.8,72.8,11.3,72.6,-2.5,76.2C-16.3,79.8,-29.9,87.3,-41.9,85.3C-53.9,83.3,-64.3,71.9,-71.2,58.8C-78.2,45.7,-81.8,30.8,-82.9,16C-84,1.2,-82.5,-13.5,-76.8,-25.9C-71.1,-38.2,-61.2,-48.1,-49.2,-54.5C-37.2,-60.9,-23.1,-63.8,-8.9,-69.1C5.3,-74.4,26.8,-71.8,40,-65.9Z")}50%{d:path("M44.1,-76.5C56.3,-69.5,64.9,-54.3,70.6,-39.1C76.3,-23.9,79.2,-8.8,77.7,5.9C76.2,20.6,70.3,34.9,61.3,46.3C52.3,57.8,40.2,66.5,26.3,71.6C12.5,76.8,-3.1,78.5,-17.1,75.1C-31.1,71.7,-43.6,63.2,-54.1,52.2C-64.7,41.2,-73.2,27.5,-75.3,12.8C-77.4,-1.9,-73,-17.8,-65.7,-31.7C-58.4,-45.5,-48.2,-57.4,-36.1,-64.2C-24,-71,-12,-72.9,2.2,-76.5C16.3,-80,32.6,-85.2,44.1,-76.5Z")}to{d:path("M38.5,-64.9C47.6,-59,51.2,-42.5,59.3,-28C67.4,-13.5,80.1,-1,78.9,10.1C77.6,21.1,62.5,30.7,50.3,40.9C38.1,51.2,28.9,62.1,16.5,69.1C4.1,76,-11.5,79,-24,74.5C-36.5,69.9,-45.9,57.9,-52.9,45.6C-59.9,33.3,-64.5,20.7,-67.6,7.1C-70.7,-6.5,-72.2,-21.1,-67.2,-33.5C-62.1,-45.9,-50.5,-56.2,-37.5,-59.8C-24.6,-63.3,-10.3,-60.1,2.7,-64.7C15.8,-69.3,29.5,-81.8,38.5,-64.9Z")}}.animate-ripple.jsx-6f554561ba2d7039{animation:2s ease-out infinite ripple}.animate-fadeIn.jsx-6f554561ba2d7039{animation:.8s ease-out forwards fadeIn}.animate-slideUp.jsx-6f554561ba2d7039{animation:.8s ease-out forwards slideUp}'
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CoursePublishSuccessBanner.tsx",
        lineNumber: 76,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CoursePublishSuccessBanner;
}),
"[project]/src/components/DripPublishingConfig.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$datepicker$40$8$2e$4$2e$0_reac_4f3984e4bf0a90fce0103bc21df8c5a7$2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-datepicker@8.4.0_reac_4f3984e4bf0a90fce0103bc21df8c5a7/node_modules/react-datepicker/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Toast.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
// Time units for frequency selection
const TIME_UNITS = [
    'minute',
    'hour',
    'day',
    'week',
    'month',
    'year'
];
const DripPublishingConfig = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ onConfigChange }, ref)=>{
    const [isDripEnabled, setIsDripEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [frequencyValue, setFrequencyValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [frequencyUnit, setFrequencyUnit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('day');
    const [isReleaseDateEnabled, setIsReleaseDateEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [publishDate, setPublishDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        title: '',
        description: '',
        emoji: ''
    });
    // Notify parent of config changes without validation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (onConfigChange) {
            const config = isDripEnabled ? {
                is_drip_enabled: true,
                frequency_value: frequencyValue,
                frequency_unit: frequencyUnit,
                publish_at: isReleaseDateEnabled && publishDate ? publishDate : null
            } : undefined;
            onConfigChange(config);
        }
    }, [
        isDripEnabled,
        frequencyValue,
        frequencyUnit,
        isReleaseDateEnabled,
        publishDate
    ]);
    const handleValidationError = (error)=>{
        setToast({
            show: true,
            title: 'Invalid publish settings',
            description: error,
            emoji: '❌'
        });
        setTimeout(()=>{
            setToast((prev)=>({
                    ...prev,
                    show: false
                }));
        }, 4000);
    };
    const handleCloseToast = ()=>{
        setToast((prev)=>({
                ...prev,
                show: false
            }));
    };
    // Expose validation function to parent
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, ()=>({
            validateDripConfig: ()=>{
                if (isDripEnabled) {
                    if (!frequencyValue || frequencyValue < 1) {
                        const error = 'Please enter a valid value for the release schedule';
                        handleValidationError(error);
                        return error;
                    }
                    if (!frequencyUnit) {
                        const error = 'Please enter a valid unit for the release schedule';
                        handleValidationError(error);
                        return error;
                    }
                    if (isReleaseDateEnabled && !publishDate) {
                        const error = 'Please select a release date and time';
                        handleValidationError(error);
                        return error;
                    }
                }
                return null;
            }
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-gray-800 bg-[#23282d] rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center ${isDripEnabled ? 'mb-4' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                id: "drip-enabled",
                                checked: isDripEnabled,
                                onChange: (e)=>setIsDripEnabled(e.target.checked),
                                className: "mr-3 h-4 w-4 cursor-pointer bg-[#181818] border-gray-600 rounded focus:ring-2 focus:ring-[#016037] focus:ring-offset-0 checked:bg-[#016037] checked:border-[#016037] transition-colors"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DripPublishingConfig.tsx",
                                lineNumber: 100,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "drip-enabled",
                                className: "text-white text-sm font-light cursor-pointer select-none",
                                children: "Release modules gradually using a drip schedule"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DripPublishingConfig.tsx",
                                lineNumber: 107,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DripPublishingConfig.tsx",
                        lineNumber: 99,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    isDripEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-sm font-light select-none",
                                        children: "Every"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DripPublishingConfig.tsx",
                                        lineNumber: 116,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "1",
                                        value: frequencyValue || '',
                                        onChange: (e)=>setFrequencyValue(Number(e.target.value)),
                                        placeholder: "1",
                                        className: "w-20 p-2 bg-[#181818] text-white text-sm font-light px-3 rounded-md border-0 focus:ring-2 focus:ring-[#016037] transition-all outline-none appearance-none text-center"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DripPublishingConfig.tsx",
                                        lineNumber: 117,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: frequencyUnit || 'day',
                                        onChange: (e)=>setFrequencyUnit(e.target.value),
                                        className: "w-32 p-2 bg-[#181818] text-white text-sm font-light px-4 rounded-md border-0 focus:ring-2 focus:ring-[#016037] transition-all outline-none appearance-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                disabled: true,
                                                children: "Select unit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DripPublishingConfig.tsx",
                                                lineNumber: 130,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            TIME_UNITS.map((unit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: unit,
                                                    children: [
                                                        unit,
                                                        frequencyValue <= 1 ? '' : 's'
                                                    ]
                                                }, unit, true, {
                                                    fileName: "[project]/src/components/DripPublishingConfig.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DripPublishingConfig.tsx",
                                        lineNumber: 125,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DripPublishingConfig.tsx",
                                lineNumber: 115,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center ${isReleaseDateEnabled ? 'mb-4' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        id: "release-date-enabled",
                                        checked: isReleaseDateEnabled,
                                        onChange: (e)=>setIsReleaseDateEnabled(e.target.checked),
                                        className: "mr-3 h-4 w-4 cursor-pointer bg-[#181818] border-gray-600 rounded focus:ring-2 focus:ring-[#016037] focus:ring-offset-0 checked:bg-[#016037] checked:border-[#016037] transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DripPublishingConfig.tsx",
                                        lineNumber: 138,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "release-date-enabled",
                                        className: "text-white text-sm font-light cursor-pointer select-none",
                                        children: "Set a specific start date and time"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DripPublishingConfig.tsx",
                                        lineNumber: 145,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DripPublishingConfig.tsx",
                                lineNumber: 137,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            isReleaseDateEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm text-gray-300 font-light mb-1",
                                        children: "Release date & time"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DripPublishingConfig.tsx",
                                        lineNumber: 153,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$datepicker$40$8$2e$4$2e$0_reac_4f3984e4bf0a90fce0103bc21df8c5a7$2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        selected: publishDate,
                                        onChange: (date)=>setPublishDate(date),
                                        showTimeSelect: true,
                                        timeFormat: "HH:mm",
                                        timeIntervals: 15,
                                        dateFormat: "MMMM d, yyyy h:mm aa",
                                        timeCaption: "Time",
                                        minDate: new Date(),
                                        placeholderText: "Select release date and time",
                                        className: "bg-[#181818] rounded-md p-2 px-4 w-full text-sm text-white cursor-pointer",
                                        wrapperClassName: "w-full",
                                        calendarClassName: "bg-[#242424] text-white border border-gray-700 rounded-lg shadow-lg cursor-pointer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DripPublishingConfig.tsx",
                                        lineNumber: 154,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DripPublishingConfig.tsx",
                                lineNumber: 152,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DripPublishingConfig.tsx",
                        lineNumber: 113,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DripPublishingConfig.tsx",
                lineNumber: 97,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                show: toast.show,
                title: toast.title,
                description: toast.description,
                emoji: toast.emoji,
                onClose: handleCloseToast
            }, void 0, false, {
                fileName: "[project]/src/components/DripPublishingConfig.tsx",
                lineNumber: 175,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
});
DripPublishingConfig.displayName = 'DripPublishingConfig';
const __TURBOPACK__default__export__ = DripPublishingConfig;
}),
"[project]/src/components/CourseCohortSelectionDialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CourseCohortSelectionDialog": ()=>CourseCohortSelectionDialog
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DripPublishingConfig$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DripPublishingConfig.tsx [app-ssr] (ecmascript)");
;
;
;
;
const CourseCohortSelectionDialog = ({ isOpen, onClose, originButtonRef, isPublishing, onConfirm, showLoading, hasError, errorMessage, onRetry, cohorts, selectedCohort, onSelectCohort, onSearchChange, searchQuery, filteredCohorts, totalSchoolCohorts, schoolId, courseId, onCohortCreated, onOpenCreateCohortDialog, onAutoCreateAndPublish, onDripConfigChange })=>{
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dripConfigRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    // Calculate position when button or isOpen changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updatePosition = ()=>{
            if (isOpen && originButtonRef.current && dropdownRef.current) {
                const buttonRect = originButtonRef.current.getBoundingClientRect();
                const windowWidth = window.innerWidth;
                // Position dropdown below button
                // Use viewport-relative position (since fixed positioning is relative to viewport)
                const top = buttonRect.bottom;
                // Calculate left position to avoid going off-screen
                // Default to aligning with left edge of button
                let left = buttonRect.left;
                // If dropdown would go off right edge, align with right edge of button instead
                const dropdownWidth = 400; // Width of dropdown from CSS
                if (left + dropdownWidth > windowWidth) {
                    left = buttonRect.right - dropdownWidth;
                }
                // Apply the new position directly to the DOM element for immediate effect
                setPosition({
                    top,
                    left
                });
            }
        };
        // Initial position update
        updatePosition();
        // Add scroll and resize event listeners
        if (isOpen) {
            window.addEventListener('scroll', updatePosition, {
                passive: true
            });
            window.addEventListener('resize', updatePosition, {
                passive: true
            });
            // Add a more frequent position update for smoother following during scrolling
            const intervalId = setInterval(updatePosition, 16); // ~60fps
            return ()=>{
                window.removeEventListener('scroll', updatePosition);
                window.removeEventListener('resize', updatePosition);
                clearInterval(intervalId);
            };
        }
        return undefined;
    }, [
        isOpen,
        originButtonRef,
        dropdownRef
    ]);
    // Handle clicks outside of the dropdown
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleClickOutside(event) {
            const target = event.target;
            if (dropdownRef.current && !dropdownRef.current.contains(target) && !target.closest('[data-dropdown-toggle="true"]')) {
                onClose();
            }
        }
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        isOpen,
        onClose
    ]);
    // Update the click handler to use the new callback
    const handleCreateCohortClick = (e)=>{
        e.preventDefault();
        onOpenCreateCohortDialog();
    };
    const handleConfirm = ()=>{
        // Validate drip config if publishing and drip config is enabled
        if (isPublishing && dripConfigRef.current) {
            const dripError = dripConfigRef.current.validateDripConfig();
            if (dripError) {
                return;
            }
        }
        onConfirm();
    };
    if (!isOpen) return null;
    const buttonText = isPublishing ? showLoading ? "Publishing..." : "Publish course to selected cohort" : showLoading ? "Adding..." : "Add course to selected cohort";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: dropdownRef,
        className: "fixed z-50 py-2 w-[400px] bg-[#1A1A1A] rounded-lg shadow-xl",
        onClick: (e)=>e.stopPropagation(),
        style: {
            top: `${position.top}px`,
            left: `${position.left}px`,
            position: 'fixed'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white text-sm font-light mb-3",
                        children: "Select the cohort of learners to share this course with"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                        lineNumber: 171,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    !showLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: !hasError && cohorts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search for a cohort",
                                className: "w-full bg-[#111] rounded-md px-3 py-2 text-white",
                                value: searchQuery,
                                onChange: onSearchChange
                            }, void 0, false, {
                                fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                                lineNumber: 179,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                            lineNumber: 178,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                lineNumber: 169,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            showLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 border-2 border-t-green-500 border-r-green-500 border-b-transparent border-l-transparent rounded-full animate-spin",
                    "data-testid": "loading-spinner"
                }, void 0, false, {
                    fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                    lineNumber: 194,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                lineNumber: 193,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : hasError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-400 mb-2",
                        children: errorMessage
                    }, void 0, false, {
                        fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                        lineNumber: 198,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-green-400 hover:text-green-300 cursor-pointer",
                        onClick: onRetry,
                        children: "Try again"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                        lineNumber: 199,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                lineNumber: 197,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : filteredCohorts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 text-center",
                children: totalSchoolCohorts === 0 ? // School has no cohorts at all
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg text-white font-light mb-1",
                            children: "No cohorts available"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                            lineNumber: 211,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm",
                            children: "Create cohorts in your school that you can publish courses to"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                            lineNumber: 212,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCreateCohortClick,
                            className: "mt-4 inline-block px-4 py-2 text-sm bg-white text-black rounded-full hover:opacity-90 transition-opacity cursor-pointer",
                            children: "Create cohort"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                            lineNumber: 213,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true) : totalSchoolCohorts > 0 && cohorts.length === 0 ? // All cohorts have been assigned to the course already
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg text-white font-light mb-1",
                            children: "All cohorts assigned"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                            lineNumber: 223,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm",
                            children: "All available cohorts are already assigned to this course"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                            lineNumber: 224,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onAutoCreateAndPublish,
                            className: "mt-4 inline-block px-4 py-2 text-sm bg-white text-black rounded-full hover:opacity-90 transition-opacity cursor-pointer",
                            children: "Make a new cohort"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                            lineNumber: 225,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true) : // Search returned no results
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg text-white font-light mb-1",
                            children: "No matching cohorts"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                            lineNumber: 235,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm",
                            children: "Try a different search term"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                            lineNumber: 236,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                lineNumber: 207,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-[10rem] overflow-y-auto py-2 px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-0.5",
                            children: filteredCohorts.map((cohort)=>{
                                const isSelected = selectedCohort && selectedCohort.id === cohort.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center px-3 py-1.5 hover:bg-[#222] rounded-md cursor-pointer ${isSelected ? 'bg-[#222]' : ''}`,
                                    onClick: ()=>onSelectCohort(isSelected ? null : cohort),
                                    children: [
                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-4 h-4 bg-green-600 rounded-sm flex items-center justify-center mr-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                size: 12,
                                                className: "text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                                                lineNumber: 255,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                                            lineNumber: 254,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white text-sm font-light",
                                            children: cohort.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                                            lineNumber: 258,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, cohort.id, true, {
                                    fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                                    lineNumber: 248,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                            lineNumber: 244,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                        lineNumber: 243,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    isPublishing && selectedCohort && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-2 space-y-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DripPublishingConfig$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            ref: dripConfigRef,
                            onConfigChange: onDripConfigChange
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                            lineNumber: 268,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                        lineNumber: 267,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pb-4 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-full bg-[#016037] text-white py-3 rounded-full text-sm hover:bg-[#017045] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                                onClick: handleConfirm,
                                disabled: showLoading || !selectedCohort,
                                children: buttonText
                            }, void 0, false, {
                                fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                                lineNumber: 277,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-full bg-transparent border border-gray-600 text-white py-3 rounded-full text-sm hover:bg-[#222] transition-colors cursor-pointer",
                                onClick: onAutoCreateAndPublish,
                                disabled: showLoading,
                                children: "Make a new cohort"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                                lineNumber: 284,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
                        lineNumber: 276,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CourseCohortSelectionDialog.tsx",
        lineNumber: 159,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/GenerateWithAIDialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>GenerateWithAIDialog
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$7_rea_0ce2b2bc9c6002d78d2cb0b12b83e105$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@headlessui+react@2.2.7_rea_0ce2b2bc9c6002d78d2cb0b12b83e105/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$7_rea_0ce2b2bc9c6002d78d2cb0b12b83e105$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@headlessui+react@2.2.7_rea_0ce2b2bc9c6002d78d2cb0b12b83e105/node_modules/@headlessui/react/dist/components/transition/transition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/file.js [app-ssr] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$pdf$40$9$2e$2$2e$1_$40$types$2b$reac_2ecc3ad4e58b2de1d47902d9e342ff07$2f$node_modules$2f$react$2d$pdf$2f$dist$2f$esm$2f$Document$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Document$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-pdf@9.2.1_@types+reac_2ecc3ad4e58b2de1d47902d9e342ff07/node_modules/react-pdf/dist/esm/Document.js [app-ssr] (ecmascript) <export default as Document>");
"use client";
;
;
;
;
;
;
// Set worker source using CDN (keeps the bundle smaller)
// Only set this in non-test environments to avoid import.meta.url issues
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function GenerateWithAIDialog({ open, onClose, onSubmit, validationError }) {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        courseDescription: '',
        intendedAudience: '',
        referencePdf: null,
        instructionsForAI: ''
    });
    // Add form errors state
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Track which step the user is currently on
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('description');
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add inside the component, after the existing state declarations
    const [fileValidating, setFileValidating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fileError, setFileError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Reset state when dialog is opened
    const resetState = ()=>{
        setFormData({
            courseDescription: '',
            intendedAudience: '',
            referencePdf: null,
            instructionsForAI: ''
        });
        setFileName('');
        setCurrentStep('description');
        setIsSubmitting(false);
        setErrors({});
        setFileError(null);
    };
    const handleTextChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        // Clear error for this field when user types
        if (errors[name]) {
            setErrors((prev)=>({
                    ...prev,
                    [name]: undefined
                }));
        }
    };
    function onDocumentLoadSuccess({ numPages }) {
        setFileValidating(false);
        if (numPages > 100) {
            setFileError(`The PDF has too many pages (${numPages}). A maximum of 100 pages is supported at a time. Please upload a shorter document, or generate in multiple parts by uploading smaller sections.`);
            // Optionally remove the file if it's invalid
            removeFile();
        } else {
            console.log(`PDF validation passed: ${numPages} pages`);
        // We're keeping the file since it's valid
        }
    }
    const handleFileChange = (e)=>{
        const file = e.target.files?.[0] || null;
        if (file) {
            // Reset previous validation errors
            setFileError(null);
            // Check file type
            if (file.type !== 'application/pdf') {
                setErrors((prev)=>({
                        ...prev,
                        referencePdf: 'Please upload a PDF file'
                    }));
                return;
            }
            // Check file size (32MB = 32 * 1024 * 1024 bytes)
            const maxSize = 32 * 1024 * 1024; // 32MB in bytes
            if (file.size > maxSize) {
                setFileError("PDF file is too large. Please upload a file smaller than 32MB, or generate in multiple parts by uploading smaller sections.");
                return;
            }
            // Start validating
            setFileValidating(true);
            // Update form data with the file - page count validation will happen separately
            setFormData((prev)=>({
                    ...prev,
                    referencePdf: file
                }));
            setFileName(file.name);
            // Clear error if it exists
            if (errors.referencePdf) {
                setErrors((prev)=>({
                        ...prev,
                        referencePdf: undefined
                    }));
            }
        }
    };
    const triggerFileInput = ()=>{
        fileInputRef.current?.click();
    };
    const removeFile = ()=>{
        setFormData((prev)=>({
                ...prev,
                referencePdf: null
            }));
        setFileName('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    const handleSubmit = async ()=>{
        setIsSubmitting(true);
        try {
            // Call onSubmit (handleGenerateCourse) but don't wait for it 
            // since it handles its own state management
            onSubmit(formData);
            // Immediately close the dialog and reset its state
            resetState();
            onClose();
        } catch (error) {
            console.error('Error generating course:', error);
            setIsSubmitting(false);
        }
    };
    const validateCurrentStep = ()=>{
        let isValid = true;
        const newErrors = {};
        if (currentStep === 'description') {
            if (!formData.courseDescription.trim()) {
                newErrors.courseDescription = 'Please describe what the course is about';
                isValid = false;
            }
        }
        if (currentStep === 'audience') {
            if (!formData.intendedAudience.trim()) {
                newErrors.intendedAudience = 'Please specify who this course is for';
                isValid = false;
            }
        }
        if (currentStep === 'reference') {
            if (!formData.referencePdf) {
                newErrors.referencePdf = 'Please upload a reference material';
                isValid = false;
            }
        }
        setErrors(newErrors);
        return isValid;
    };
    const nextStep = ()=>{
        // Validate current step before proceeding
        if (!validateCurrentStep()) {
            return;
        }
        // Move to next step based on current step
        switch(currentStep){
            case 'description':
                setCurrentStep('audience');
                break;
            case 'audience':
                setCurrentStep('reference');
                break;
            case 'reference':
                setCurrentStep('instructions');
                break;
            case 'instructions':
                setCurrentStep('review');
                break;
            case 'review':
                handleSubmit();
                break;
        }
    };
    const prevStep = ()=>{
        // Clear errors when going back
        setErrors({});
        // Move to previous step based on current step
        switch(currentStep){
            case 'audience':
                setCurrentStep('description');
                break;
            case 'reference':
                setCurrentStep('audience');
                break;
            case 'instructions':
                setCurrentStep('reference');
                break;
            case 'review':
                setCurrentStep('instructions');
                break;
        }
    };
    // Create a handler that completely ignores outside clicks
    const handleDialogClose = ()=>{
        resetState();
        onClose();
    };
    // Simple no-op function that ignores all outside clicks
    const noop = ()=>{
    // Intentionally empty - this prevents the dialog from closing on outside clicks
    };
    // Get step heading and description based on current step
    const getStepContent = ()=>{
        switch(currentStep){
            case 'description':
                return {
                    heading: 'What is this course about?',
                    description: 'Describe what the course is about, the topics to be covered, and the main learning objectives'
                };
            case 'audience':
                return {
                    heading: 'Who is this course for?',
                    description: 'Describe who this course is for, their expected background and what they hope to achieve'
                };
            case 'reference':
                return {
                    heading: 'Upload reference material',
                    description: 'Add a PDF file to be used as reference to generate your course'
                };
            case 'instructions':
                return {
                    heading: 'Instructions for AI (optional)',
                    description: 'Provide any specific instructions for AI to keep in mind while generating your course. For example, the tone, style, and format of the course'
                };
            case 'review':
                return {
                    heading: 'Review and generate',
                    description: 'Review your inputs before starting the course generation'
                };
        }
    };
    // Calculate progress percentage
    const progressPercentage = (()=>{
        switch(currentStep){
            case 'description':
                return 20;
            case 'audience':
                return 40;
            case 'reference':
                return 60;
            case 'instructions':
                return 80;
            case 'review':
                return 100;
        }
    })();
    const stepContent = getStepContent();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$7_rea_0ce2b2bc9c6002d78d2cb0b12b83e105$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"], {
        appear: true,
        show: open,
        as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$7_rea_0ce2b2bc9c6002d78d2cb0b12b83e105$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
            as: "div",
            className: "relative z-50",
            onClose: noop,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$7_rea_0ce2b2bc9c6002d78d2cb0b12b83e105$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"].Child, {
                    as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"],
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/70"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                        lineNumber: 315,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                    lineNumber: 306,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-full items-center justify-center p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$7_rea_0ce2b2bc9c6002d78d2cb0b12b83e105$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"].Child, {
                            as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"],
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$7_rea_0ce2b2bc9c6002d78d2cb0b12b83e105$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"].Panel, {
                                className: "w-full max-w-lg transform overflow-hidden rounded-lg bg-[#1A1A1A] shadow-xl transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1 bg-gray-800 w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-white transition-all duration-300 ease-in-out",
                                            style: {
                                                width: `${progressPercentage}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                            lineNumber: 332,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                        lineNumber: 331,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleDialogClose,
                                        className: "absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer",
                                        "aria-label": "Close",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                            lineNumber: 344,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                        lineNumber: 339,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$7_rea_0ce2b2bc9c6002d78d2cb0b12b83e105$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"].Title, {
                                                as: "h3",
                                                className: "text-2xl font-light text-white",
                                                children: stepContent.heading
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                lineNumber: 348,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-400 mt-2 mb-6",
                                                children: stepContent.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                lineNumber: 355,
                                                columnNumber: 37
                                            }, this),
                                            currentStep === 'description' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        id: "courseDescription",
                                                        name: "courseDescription",
                                                        value: formData.courseDescription,
                                                        onChange: handleTextChange,
                                                        placeholder: "A comprehensive guide to personal finance for beginners, covering budgeting essentials, debt management, building credit, emergency funds, and basic investment principles for long-term financial stability.",
                                                        className: `w-full h-32 px-4 py-3 bg-[#0D0D0D] text-white rounded-lg font-light placeholder-gray-500 outline-none ${errors.courseDescription ? 'border-2 border-red-500' : 'border-none'} focus:ring-2 focus:ring-white/20`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 45
                                                    }, this),
                                                    errors.courseDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center text-red-500 text-sm mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                size: 14,
                                                                className: "mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                lineNumber: 372,
                                                                columnNumber: 53
                                                            }, this),
                                                            errors.courseDescription
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                lineNumber: 361,
                                                columnNumber: 41
                                            }, this),
                                            currentStep === 'audience' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        id: "intendedAudience",
                                                        name: "intendedAudience",
                                                        value: formData.intendedAudience,
                                                        onChange: handleTextChange,
                                                        placeholder: "Recent graduates and young professionals starting their first full-time job, individuals with no prior financial education, or anyone looking to establish healthy financial habits and avoid common money mistakes in early career stages.",
                                                        className: `w-full h-32 px-4 py-3 bg-[#0D0D0D] text-white rounded-lg font-light placeholder-gray-500 outline-none ${errors.intendedAudience ? 'border-2 border-red-500' : 'border-none'} focus:ring-2 focus:ring-white/20`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 45
                                                    }, this),
                                                    errors.intendedAudience && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center text-red-500 text-sm mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                size: 14,
                                                                className: "mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                lineNumber: 392,
                                                                columnNumber: 53
                                                            }, this),
                                                            errors.intendedAudience
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                lineNumber: 381,
                                                columnNumber: 41
                                            }, this),
                                            currentStep === 'reference' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        ref: fileInputRef,
                                                        onChange: handleFileChange,
                                                        accept: "application/pdf",
                                                        className: "hidden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 45
                                                    }, this),
                                                    !fileName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: triggerFileInput,
                                                        className: `flex items-center justify-center w-full h-36 px-4 py-3 bg-[#0A0A0A] rounded-lg cursor-pointer hover:bg-[#111] transition-colors ${errors.referencePdf || fileError ? 'border-2 border-red-500' : 'border border-dashed border-gray-600 hover:border-white'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center text-gray-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                    size: 24,
                                                                    className: "mb-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                    lineNumber: 416,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm",
                                                                    children: "Upload a PDF to use as reference material"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                    lineNumber: 417,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs mt-1",
                                                                    children: "Click or drag and drop"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                    lineNumber: 418,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                            lineNumber: 415,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 49
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between w-full px-4 py-4 bg-[#0A0A0A] border border-gray-700 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center text-white",
                                                                children: [
                                                                    fileValidating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "animate-spin mr-2 h-4 w-4 border-t-2 border-b-2 border-white rounded-full"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                        lineNumber: 425,
                                                                        columnNumber: 61
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                                        size: 20,
                                                                        className: "mr-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                        lineNumber: 427,
                                                                        columnNumber: 61
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm truncate max-w-xs",
                                                                        children: fileValidating ? "Validating PDF..." : fileName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                        lineNumber: 429,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                lineNumber: 423,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: removeFile,
                                                                className: "text-gray-400 hover:text-white cursor-pointer",
                                                                "aria-label": "Remove file",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                    lineNumber: 439,
                                                                    columnNumber: 57
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                lineNumber: 433,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 49
                                                    }, this),
                                                    (errors.referencePdf || fileError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start text-red-500 text-sm mt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                size: 14,
                                                                className: "mr-1 mt-1 flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                lineNumber: 446,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: fileError || errors.referencePdf
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                lineNumber: 447,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                lineNumber: 401,
                                                columnNumber: 41
                                            }, this),
                                            currentStep === 'instructions' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    id: "instructionsForAI",
                                                    name: "instructionsForAI",
                                                    value: formData.instructionsForAI,
                                                    onChange: handleTextChange,
                                                    placeholder: "Focus on practical, actionable advice rather than theory. Include real-world examples and templates for budgeting. Structure the course for a 4-week learning period with small, achievable weekly goals.",
                                                    className: "w-full h-32 px-4 py-3 bg-[#0D0D0D] text-white rounded-lg font-light placeholder-gray-500 outline-none border-none focus:ring-2 focus:ring-white/20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                    lineNumber: 458,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                lineNumber: 457,
                                                columnNumber: 41
                                            }, this),
                                            currentStep === 'review' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-white font-medium",
                                                                children: "Course Description"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                lineNumber: 473,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-300 bg-[#0D0D0D] p-3 rounded-lg whitespace-pre-wrap",
                                                                children: formData.courseDescription
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                lineNumber: 474,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                        lineNumber: 472,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-white font-medium",
                                                                children: "Intended Audience"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                lineNumber: 478,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-300 bg-[#0D0D0D] p-3 rounded-lg whitespace-pre-wrap",
                                                                children: formData.intendedAudience
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                lineNumber: 479,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                        lineNumber: 477,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-white font-medium",
                                                                children: "Reference Material"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                lineNumber: 483,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center text-gray-300 bg-[#0D0D0D] p-3 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                                        size: 16,
                                                                        className: "mr-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                        lineNumber: 485,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: fileName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                        lineNumber: 486,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                lineNumber: 484,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                        lineNumber: 482,
                                                        columnNumber: 45
                                                    }, this),
                                                    formData.instructionsForAI && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-white font-medium",
                                                                children: "Instructions for AI"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                lineNumber: 492,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-300 bg-[#0D0D0D] p-3 rounded-lg whitespace-pre-wrap",
                                                                children: formData.instructionsForAI
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                                lineNumber: 493,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                lineNumber: 471,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                        lineNumber: 347,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between px-6 py-4 bg-[#111] border-t border-gray-800",
                                        children: [
                                            currentStep !== 'description' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: prevStep,
                                                className: "flex items-center text-gray-400 hover:text-white transition-colors focus:outline-none cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                        size: 16,
                                                        className: "mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 45
                                                    }, this),
                                                    "Back"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                lineNumber: 503,
                                                columnNumber: 41
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                lineNumber: 512,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: nextStep,
                                                disabled: isSubmitting,
                                                className: "px-6 py-2 bg-white text-black text-sm font-medium rounded-full hover:opacity-90 transition-opacity flex items-center justify-center cursor-pointer",
                                                children: isSubmitting && currentStep === 'review' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-4 h-4 border-t-2 border-b-2 border-black rounded-full animate-spin mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                            lineNumber: 523,
                                                            columnNumber: 49
                                                        }, this),
                                                        "Generating..."
                                                    ]
                                                }, void 0, true) : currentStep === 'review' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Generate Course"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                            lineNumber: 528,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            size: 16,
                                                            className: "ml-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Continue"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                            lineNumber: 533,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 16,
                                                            className: "ml-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                            lineNumber: 534,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                                lineNumber: 515,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                        lineNumber: 501,
                                        columnNumber: 33
                                    }, this),
                                    formData.referencePdf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$pdf$40$9$2e$2$2e$1_$40$types$2b$reac_2ecc3ad4e58b2de1d47902d9e342ff07$2f$node_modules$2f$react$2d$pdf$2f$dist$2f$esm$2f$Document$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Document$3e$__["Document"], {
                                        file: formData.referencePdf,
                                        onLoadSuccess: onDocumentLoadSuccess
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                        lineNumber: 541,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                                lineNumber: 329,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                            lineNumber: 320,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                        lineNumber: 319,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
                    lineNumber: 318,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
            lineNumber: 301,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/GenerateWithAIDialog.tsx",
        lineNumber: 300,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/SettingsDialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>SettingsDialog
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/share.js [app-ssr] (ecmascript) <export default as Share>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Tooltip.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function SettingsDialog({ isOpen, onClose, courseName, dripConfig, schoolId, courseId, cohortId, onCopyCohortInviteLink }) {
    if (!isOpen) return null;
    const getFrequencyText = ()=>{
        const unit = dripConfig.frequency_unit.toLowerCase();
        const plural = dripConfig.frequency_value > 1 ? 's' : '';
        return `Every ${dripConfig.frequency_value} ${unit}${plural}`;
    };
    const formatDate = (date)=>{
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md bg-[#1A1A1A] rounded-lg shadow-2xl relative",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center p-6 pb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-light text-white",
                            children: "Settings"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SettingsDialog.tsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-white transition-colors focus:outline-none cursor-pointer",
                            "aria-label": "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsDialog.tsx",
                                lineNumber: 54,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/SettingsDialog.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SettingsDialog.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2 px-6 pt-4 pb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-base font-light",
                                    children: courseId ? 'Course' : 'Cohort'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsDialog.tsx",
                                    lineNumber: 61,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 ml-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            content: "Open",
                                            position: "top",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>window.open(`/school/admin/${schoolId}/${courseId ? 'courses' : 'cohorts'}/${courseId || cohortId}`, '_blank'),
                                                className: "text-gray-400 hover:text-white cursor-pointer flex items-center",
                                                "aria-label": "Open cohort page",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsDialog.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SettingsDialog.tsx",
                                                lineNumber: 64,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SettingsDialog.tsx",
                                            lineNumber: 63,
                                            columnNumber: 29
                                        }, this),
                                        cohortId && onCopyCohortInviteLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            content: "Copy invite link",
                                            position: "top",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onCopyCohortInviteLink(cohortId, courseName),
                                                className: "text-gray-400 hover:text-white cursor-pointer flex items-center",
                                                "aria-label": "Copy cohort invite link",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share$3e$__["Share"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsDialog.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SettingsDialog.tsx",
                                                lineNumber: 74,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SettingsDialog.tsx",
                                            lineNumber: 73,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SettingsDialog.tsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SettingsDialog.tsx",
                            lineNumber: 60,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white text-sm font-light",
                            children: courseName
                        }, void 0, false, {
                            fileName: "[project]/src/components/SettingsDialog.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SettingsDialog.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 pb-6 pt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white text-base font-light block mb-1",
                            children: "Course release schedule"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SettingsDialog.tsx",
                            lineNumber: 90,
                            columnNumber: 21
                        }, this),
                        dripConfig.is_drip_enabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-sm font-light",
                                    children: [
                                        getFrequencyText(),
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SettingsDialog.tsx",
                                    lineNumber: 93,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-sm font-light",
                                    children: `${dripConfig.publish_at ? `starting from ${formatDate(new Date(dripConfig.publish_at))}` : `after a learner joins the cohort`}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsDialog.tsx",
                                    lineNumber: 94,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SettingsDialog.tsx",
                            lineNumber: 92,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-sm font-light",
                                children: "This course is not using a drip schedule. Learners can access all modules from the start."
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsDialog.tsx",
                                lineNumber: 98,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/SettingsDialog.tsx",
                            lineNumber: 97,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SettingsDialog.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SettingsDialog.tsx",
            lineNumber: 42,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SettingsDialog.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/CreateCohortDialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>CreateCohortDialog
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DripPublishingConfig$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DripPublishingConfig.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function CreateCohortDialog({ open, onClose, onCreateCohort, schoolId, showDripPublishSettings }) {
    const [cohortName, setCohortName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [dripConfig, setDripConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dripConfigRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Reset form state when dialog is opened
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) {
            setCohortName('');
            setDripConfig(undefined);
            setError('');
            setIsLoading(false);
        }
    }, [
        open
    ]);
    const handleSubmit = async ()=>{
        // Validate cohort name
        if (!cohortName.trim()) {
            setError('Cohort name is required');
            return;
        }
        // Validate drip config if enabled and showDripPublishSettings is true
        if (showDripPublishSettings && dripConfigRef.current) {
            const dripError = dripConfigRef.current.validateDripConfig();
            if (dripError) {
                return;
            }
        }
        // Set loading state to true
        setIsLoading(true);
        try {
            // Make API call to create cohort
            const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/cohorts/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: cohortName,
                    org_id: schoolId ? parseInt(schoolId) : null
                })
            });
            // Handle API errors
            if (!response.ok) {
                throw new Error(`Failed to create cohort: ${response.status} ${response.statusText}`);
            }
            // Get the new cohort data
            const newCohortData = await response.json();
            // Pass the created cohort back to the parent with drip config if applicable
            onCreateCohort(newCohortData, showDripPublishSettings ? dripConfig : undefined);
            // Reset form state
            setCohortName('');
            setDripConfig(undefined);
            setError('');
        } catch (error) {
            console.error('Error creating cohort:', error);
            setError('Failed to create cohort. Please try again.');
        } finally{
            setIsLoading(false);
        }
    };
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md bg-[#1A1A1A] rounded-lg shadow-2xl",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 mb-2 font-light",
                                        children: "A cohort is a group of learners who will take your course together"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CreateCohortDialog.tsx",
                                        lineNumber: 99,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "cohortName",
                                        type: "text",
                                        value: cohortName,
                                        onChange: (e)=>{
                                            setCohortName(e.target.value);
                                            if (error) setError('');
                                        },
                                        placeholder: "What will you name this cohort?",
                                        className: `w-full px-4 py-3 bg-[#0D0D0D] text-white text-lg rounded-lg font-light placeholder-gray-500 outline-none ${error ? 'border border-red-500' : 'border-none'}`,
                                        disabled: isLoading
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CreateCohortDialog.tsx",
                                        lineNumber: 100,
                                        columnNumber: 29
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-red-500",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CreateCohortDialog.tsx",
                                        lineNumber: 113,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CreateCohortDialog.tsx",
                                lineNumber: 98,
                                columnNumber: 25
                            }, this),
                            showDripPublishSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DripPublishingConfig$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    ref: dripConfigRef,
                                    onConfigChange: setDripConfig
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CreateCohortDialog.tsx",
                                    lineNumber: 120,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CreateCohortDialog.tsx",
                                lineNumber: 119,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CreateCohortDialog.tsx",
                        lineNumber: 97,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CreateCohortDialog.tsx",
                    lineNumber: 96,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-4 p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-4 py-2 text-gray-400 hover:text-white transition-colors focus:outline-none cursor-pointer",
                            disabled: isLoading,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CreateCohortDialog.tsx",
                            lineNumber: 131,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSubmit,
                            className: `px-6 py-2 bg-white text-black text-sm font-medium rounded-full hover:opacity-90 transition-opacity focus:outline-none cursor-pointer ${isLoading ? 'opacity-70' : ''}`,
                            disabled: isLoading,
                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "animate-spin h-5 w-5 text-black",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "opacity-25",
                                            cx: "12",
                                            cy: "12",
                                            r: "10",
                                            stroke: "currentColor",
                                            strokeWidth: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CreateCohortDialog.tsx",
                                            lineNumber: 146,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            className: "opacity-75",
                                            fill: "currentColor",
                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CreateCohortDialog.tsx",
                                            lineNumber: 147,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CreateCohortDialog.tsx",
                                    lineNumber: 145,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CreateCohortDialog.tsx",
                                lineNumber: 144,
                                columnNumber: 29
                            }, this) : 'Create cohort'
                        }, void 0, false, {
                            fileName: "[project]/src/components/CreateCohortDialog.tsx",
                            lineNumber: 138,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CreateCohortDialog.tsx",
                    lineNumber: 130,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CreateCohortDialog.tsx",
            lineNumber: 91,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CreateCohortDialog.tsx",
        lineNumber: 90,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>CreateCourse
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CourseModuleList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CourseModuleList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ConfirmationDialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CoursePublishSuccessBanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CoursePublishSuccessBanner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$course$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/course.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CourseCohortSelectionDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CourseCohortSelectionDialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Tooltip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GenerateWithAIDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GenerateWithAIDialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SettingsDialog.tsx [app-ssr] (ecmascript)");
// Import the CreateCohortDialog
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CreateCohortDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CreateCohortDialog.tsx [app-ssr] (ecmascript)");
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
;
;
// Default configuration for new questions
const defaultQuestionConfig = {
    inputType: 'text',
    responseType: 'chat',
    questionType: 'objective',
    knowledgeBaseBlocks: [],
    linkedMaterialIds: []
};
function CreateCourse() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const schoolId = params.id;
    const courseId = params.courseId;
    const [schoolSlug, setSchoolSlug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [courseTitle, setCourseTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Loading course...");
    const [modules, setModules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeItem, setActiveItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeModuleId, setActiveModuleId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDialogOpen, setIsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPreviewMode, setIsPreviewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [lastUsedColorIndex, setLastUsedColorIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [isCourseTitleEditing, setIsCourseTitleEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditMode, setIsEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPublishConfirmation, setShowPublishConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPublishDialog, setShowPublishDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cohorts, setCohorts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingCohorts, setIsLoadingCohorts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cohortSearchQuery, setCohortSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [filteredCohorts, setFilteredCohorts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cohortError, setCohortError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Add state for course cohorts
    const [courseCohorts, setCourseCohorts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingCourseCohorts, setIsLoadingCourseCohorts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add state to track total cohorts in the school
    const [totalSchoolCohorts, setTotalSchoolCohorts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Add refs for both buttons to position the dropdown
    const publishButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const addCohortButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Add state to track which button opened the dialog
    const [dialogOrigin, setDialogOrigin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Add state for toast notifications
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        title: '',
        description: '',
        emoji: ''
    });
    // Add state for cohort removal confirmation
    const [cohortToRemove, setCohortToRemove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showRemoveCohortConfirmation, setShowRemoveCohortConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add state for celebratory banner
    const [showCelebratoryBanner, setShowCelebratoryBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [celebrationDetails, setCelebrationDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        cohortId: 0,
        cohortName: ''
    });
    // Add a new state for direct create cohort dialog
    const [showCreateCohortDialog, setShowCreateCohortDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add state for AI generation dialog
    const [showGenerateDialog, setShowGenerateDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add state for course generation loading state
    const [isGeneratingCourse, setIsGeneratingCourse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCourseStructureGenerated, setIsCourseStructureGenerated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add state for generation progress messages
    const [generationProgress, setGenerationProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Add a ref to store the WebSocket connection
    const wsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Add a ref for the heartbeat interval
    const heartbeatIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Add these new state variables after the existing state declarations
    const [totalTasksToGenerate, setTotalTasksToGenerate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [generatedTasksCount, setGeneratedTasksCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Add a new state variable to track generation completion
    const [isGenerationComplete, setIsGenerationComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add these refs after the existing refs declaration
    const isGeneratingCourseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const totalTasksToGenerateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const generatedTasksCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Add state for selected cohort
    const [selectedCohort, setSelectedCohort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dripConfig, setDripConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [selectedCohortForSettings, setSelectedCohortForSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Update the refs whenever the state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        isGeneratingCourseRef.current = isGeneratingCourse;
    }, [
        isGeneratingCourse
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        totalTasksToGenerateRef.current = totalTasksToGenerate;
    }, [
        totalTasksToGenerate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        generatedTasksCountRef.current = generatedTasksCount;
    }, [
        generatedTasksCount
    ]);
    // Extract fetchCourseDetails as a standalone function
    const fetchCourseDetails = async ()=>{
        try {
            setIsLoading(true);
            const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/courses/${courseId}?only_published=false`);
            if (!response.ok) {
                throw new Error(`Failed to fetch course details: ${response.status}`);
            }
            const data = await response.json();
            setCourseTitle(data.name);
            // Check if milestones are available in the response
            if (data.milestones && Array.isArray(data.milestones)) {
                // Use the shared utility function to transform the milestones to modules
                const transformedModules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$course$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformMilestonesToModules"])(data.milestones);
                // Add isEditing property required by the admin view
                const modulesWithEditing = transformedModules.map((module)=>({
                        ...module,
                        isEditing: false
                    }));
                // Check if any task in the course has isGenerating = true
                const totalTasksToGenerate = modulesWithEditing.reduce((count, module)=>count + (module.items?.filter((item)=>item.isGenerating !== null)?.length || 0), 0);
                const generatedTasksCount = modulesWithEditing.reduce((count, module)=>count + (module.items?.filter((item)=>item.isGenerating === false)?.length || 0), 0);
                // Set up WebSocket connection if any task is being generated
                if (totalTasksToGenerate && totalTasksToGenerate != generatedTasksCount) {
                    const ws = setupGenerationWebSocket();
                    if (!ws) {
                        throw new Error('Failed to setup WebSocket connection');
                    }
                    wsRef.current = ws;
                    console.log('WebSocket connection established for active generation task');
                    setIsGeneratingCourse(true);
                    setIsCourseStructureGenerated(true);
                    setIsGenerationComplete(false);
                    setTotalTasksToGenerate(totalTasksToGenerate);
                    setGeneratedTasksCount(generatedTasksCount);
                    setGenerationProgress([
                        "Uploaded reference material",
                        'Generating course plan',
                        'Course plan complete',
                        'Generating learning materials and quizzes'
                    ]);
                }
                // Set the modules state
                setModules(modulesWithEditing);
            }
            setIsLoading(false);
        } catch (err) {
            console.error("Error fetching course details:", err);
            setError("Failed to load course details. Please try again later.");
            setIsLoading(false);
        }
    };
    // Fetch course details from the backend
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchCourseDetails();
        // Also fetch cohorts assigned to this course
        fetchCourseCohorts();
        // Fetch school details to get the slug
        const fetchSchoolDetails = async ()=>{
            try {
                const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/organizations/${schoolId}`);
                if (response.ok) {
                    const schoolData = await response.json();
                    setSchoolSlug(schoolData.slug);
                }
            } catch (error) {
                console.error("Error fetching school details:", error);
            }
        };
        fetchSchoolDetails();
    }, [
        courseId
    ]);
    // Check for dark mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsDarkMode(true);
    // setIsDarkMode(document.documentElement.classList.contains('dark'));
    // Optional: Listen for changes to the dark mode
    // const observer = new MutationObserver((mutations) => {
    //     mutations.forEach((mutation) => {
    //         if (mutation.attributeName === 'class') {
    //             setIsDarkMode(document.documentElement.classList.contains('dark'));
    //         }
    //     });
    // });
    // observer.observe(document.documentElement, { attributes: true });
    // return () => {
    //     observer.disconnect();
    // };
    }, []);
    // Set initial content and focus on newly added modules and items
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Focus the newly added module
        if (activeModuleId) {
            const moduleElement = document.querySelector(`[data-module-id="${activeModuleId}"]`);
            if (moduleElement) {
                moduleElement.focus();
            }
        }
        // Focus the newly added item
        if (activeItem && activeItem.id) {
            const itemElement = document.querySelector(`[data-item-id="${activeItem.id}"]`);
            if (itemElement) {
                itemElement.focus();
            }
        }
    }, [
        modules,
        activeModuleId,
        activeItem
    ]);
    // Handle Escape key to close dialog
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleEscKey = (e)=>{
            if (e.key === 'Escape' && isDialogOpen) {
                closeDialog();
            }
        };
        window.addEventListener('keydown', handleEscKey);
        return ()=>{
            window.removeEventListener('keydown', handleEscKey);
        };
    }, [
        isDialogOpen
    ]);
    // Handle clicks outside of the dropdown for the publish dialog
    // Add back the handleKeyDown function for module titles
    const handleKeyDown = (e)=>{
        // Prevent creating a new line when pressing Enter
        if (e.key === "Enter") {
            e.preventDefault();
            // Remove focus
            e.currentTarget.blur();
        }
    };
    const updateModuleTitle = (id, title)=>{
        setModules((prevModules)=>prevModules.map((module)=>module.id === id ? {
                    ...module,
                    title
                } : module));
    };
    const toggleModuleEditing = (id, isEditing)=>{
        setModules((prevModules)=>prevModules.map((module)=>module.id === id ? {
                    ...module,
                    isEditing
                } : module));
    };
    const deleteModule = (id)=>{
        setModules((prevModules)=>{
            const filteredModules = prevModules.filter((module)=>module.id !== id);
            // Update positions after deletion
            return filteredModules.map((module, index)=>({
                    ...module,
                    position: index
                }));
        });
    };
    const moveModuleUp = (id)=>{
        setModules((prevModules)=>{
            const index = prevModules.findIndex((module)=>module.id === id);
            if (index <= 0) return prevModules;
            const newModules = [
                ...prevModules
            ];
            // Swap with previous module
            [newModules[index - 1], newModules[index]] = [
                newModules[index],
                newModules[index - 1]
            ];
            // Update positions
            return newModules.map((module, idx)=>({
                    ...module,
                    position: idx
                }));
        });
    };
    const moveModuleDown = (id)=>{
        setModules((prevModules)=>{
            const index = prevModules.findIndex((module)=>module.id === id);
            if (index === -1 || index === prevModules.length - 1) return prevModules;
            const newModules = [
                ...prevModules
            ];
            // Swap with next module
            [newModules[index], newModules[index + 1]] = [
                newModules[index + 1],
                newModules[index]
            ];
            // Update positions
            return newModules.map((module, idx)=>({
                    ...module,
                    position: idx
                }));
        });
    };
    const toggleModule = (id)=>{
        setModules((prevModules)=>prevModules.map((module)=>module.id === id ? {
                    ...module,
                    isExpanded: !module.isExpanded
                } : module));
    };
    // Add these new helper functions after the toggleModule function and before the addLearningMaterial function
    // Helper function to add an item to a module's items array at a specific position
    const addItemToState = (moduleId, newItem, position)=>{
        setActiveItem(newItem);
        setActiveModuleId(moduleId);
        setIsDialogOpen(true); // Open the dialog for the new item
        setModules((prevModules)=>prevModules.map((module)=>{
                if (module.id === moduleId) {
                    // Insert the new item at the correct position and update positions of items below
                    const items = [
                        ...module.items.slice(0, position),
                        newItem,
                        ...module.items.slice(position).map((item)=>({
                                ...item,
                                position: item.position + 1
                            }))
                    ];
                    return {
                        ...module,
                        items: items
                    };
                }
                return module;
            }));
        return newItem;
    };
    const addLearningMaterialToState = (moduleId, taskData, position)=>{
        const newItem = {
            id: taskData.id.toString(),
            title: taskData.title || "New learning material",
            position: position,
            type: 'material',
            content: [],
            status: 'draft',
            scheduled_publish_at: null
        };
        return addItemToState(moduleId, newItem, position);
    };
    const addQuizToState = (moduleId, taskData, position)=>{
        const newItem = {
            id: taskData.id.toString(),
            title: taskData.title || "New quiz",
            position: position,
            type: 'quiz',
            questions: taskData.questions || [],
            status: 'draft',
            scheduled_publish_at: null
        };
        return addItemToState(moduleId, newItem, position);
    };
    // Add handleDuplicateItem function to handle task duplication
    const handleDuplicateItem = async (moduleId, taskData, position)=>{
        try {
            // Find the original module for placement
            const module = modules.find((m)=>m.id === moduleId);
            if (!module) return;
            // Update the UI based on the task type
            if (taskData.type === "learning_material") {
                addLearningMaterialToState(moduleId, taskData, position);
            } else if (taskData.type === "quiz") {
                addQuizToState(moduleId, taskData, position);
            }
            // Auto-hide toast after 3 seconds
            setTimeout(()=>{
                setToast((prev)=>({
                        ...prev,
                        show: false
                    }));
            }, 3000);
        } catch (error) {
            console.error("Error handling duplicated item:", error);
            // Show error toast
            setToast({
                show: true,
                title: 'Cloning Failed',
                description: 'There was an error duplicating the task',
                emoji: '❌'
            });
            // Auto-hide toast after 3 seconds
            setTimeout(()=>{
                setToast((prev)=>({
                        ...prev,
                        show: false
                    }));
            }, 3000);
        }
    };
    // Modify the existing addLearningMaterial function to use the new helper
    const addLearningMaterial = async (moduleId)=>{
        try {
            // Make API request to create a new learning material
            const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/tasks/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    course_id: parseInt(courseId),
                    milestone_id: parseInt(moduleId),
                    type: "learning_material",
                    title: "New learning material",
                    status: "draft",
                    scheduled_publish_at: null
                })
            });
            if (!response.ok) {
                throw new Error(`Failed to create learning material: ${response.status}`);
            }
            // Get the learning material ID from the response
            const data = await response.json();
            // Update the UI using the abstracted helper function
            addLearningMaterialToState(moduleId, data, modules.find((m)=>m.id === moduleId)?.items.length || 0);
        } catch (error) {
            console.error("Error creating learning material:", error);
        // You might want to show an error message to the user here
        }
    };
    // Modify the existing addQuiz function to use the new helper
    const addQuiz = async (moduleId)=>{
        try {
            // Make API request to create a new quiz
            const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/tasks/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    course_id: parseInt(courseId),
                    milestone_id: parseInt(moduleId),
                    type: "quiz",
                    title: "New quiz",
                    status: "draft"
                })
            });
            if (!response.ok) {
                throw new Error(`Failed to create quiz: ${response.status}`);
            }
            // Get the quiz ID from the response
            const data = await response.json();
            // Update the UI using the abstracted helper function
            addQuizToState(moduleId, data, modules.find((m)=>m.id === moduleId)?.items.length || 0);
        } catch (error) {
            console.error("Error creating quiz:", error);
        // You might want to show an error message to the user here
        }
    };
    const deleteItem = (moduleId, itemId)=>{
        setModules((prevModules)=>prevModules.map((module)=>{
                if (module.id === moduleId) {
                    const filteredItems = module.items.filter((item)=>item.id !== itemId);
                    return {
                        ...module,
                        items: filteredItems.map((item, index)=>({
                                ...item,
                                position: index
                            }))
                    };
                }
                return module;
            }));
    };
    const moveItemUp = (moduleId, itemId)=>{
        setModules((prevModules)=>prevModules.map((module)=>{
                if (module.id === moduleId) {
                    const index = module.items.findIndex((item)=>item.id === itemId);
                    if (index <= 0) return module;
                    const newItems = [
                        ...module.items
                    ];
                    [newItems[index - 1], newItems[index]] = [
                        newItems[index],
                        newItems[index - 1]
                    ];
                    return {
                        ...module,
                        items: newItems.map((item, idx)=>({
                                ...item,
                                position: idx
                            }))
                    };
                }
                return module;
            }));
    };
    const moveItemDown = (moduleId, itemId)=>{
        setModules((prevModules)=>prevModules.map((module)=>{
                if (module.id === moduleId) {
                    const index = module.items.findIndex((item)=>item.id === itemId);
                    if (index === -1 || index === module.items.length - 1) return module;
                    const newItems = [
                        ...module.items
                    ];
                    [newItems[index], newItems[index + 1]] = [
                        newItems[index + 1],
                        newItems[index]
                    ];
                    return {
                        ...module,
                        items: newItems.map((item, idx)=>({
                                ...item,
                                position: idx
                            }))
                    };
                }
                return module;
            }));
    };
    // Open the dialog for editing a learning material or quiz
    const openItemDialog = (moduleId, itemId)=>{
        const module = modules.find((m)=>m.id === moduleId);
        if (!module) return;
        const item = module.items.find((i)=>i.id === itemId);
        if (!item) return;
        // Ensure quiz items have questions property initialized
        if (item.type === 'quiz' && !item.questions) {
            const updatedItem = {
                ...item,
                questions: [
                    {
                        id: `question-${Date.now()}`,
                        content: [],
                        config: {
                            ...defaultQuestionConfig
                        }
                    }
                ]
            };
            // Update the module with the fixed item
            setModules((prevModules)=>prevModules.map((m)=>m.id === moduleId ? {
                        ...m,
                        items: m.items.map((i)=>i.id === itemId ? updatedItem : i)
                    } : m));
            setActiveItem(updatedItem);
            setActiveModuleId(moduleId);
            setIsPreviewMode(false);
            setIsDialogOpen(true);
        } else if (item.type === 'material') {
            // For learning materials, we don't need to fetch content here
            // The LearningMaterialEditor will fetch its own data using the taskId
            setActiveItem(item);
            setActiveModuleId(moduleId);
            setIsPreviewMode(false);
            setIsDialogOpen(true);
        } else {
            // For other types like exams, just open the dialog
            setActiveItem(item);
            setActiveModuleId(moduleId);
            setIsPreviewMode(false);
            setIsDialogOpen(true);
        }
    };
    // Close the dialog
    const closeDialog = ()=>{
        // Dialog confirmation is handled by CourseItemDialog component
        setIsDialogOpen(false);
        setActiveItem(null);
        setActiveModuleId(null);
        setIsEditMode(false);
    };
    // Cancel edit mode and revert to original state
    const cancelEditMode = ()=>{
        // For learning materials, the LearningMaterialEditor has already reverted the changes
        // We need to revert the activeItem object to reflect the original state
        if (activeItem && activeModuleId && activeItem.type === 'material') {
            // Find the original module item from modules state
            const module = modules.find((m)=>m.id === activeModuleId);
            if (module) {
                const originalItem = module.items.find((i)=>i.id === activeItem.id);
                if (originalItem) {
                    // Reset activeItem to match the original state
                    setActiveItem({
                        ...originalItem
                    });
                }
            }
        }
        // Exit edit mode without saving changes
        setIsEditMode(false);
    };
    // Add a function to update quiz questions
    const updateQuizQuestions = (moduleId, itemId, questions)=>{
        setModules((prevModules)=>prevModules.map((module)=>{
                if (module.id === moduleId) {
                    return {
                        ...module,
                        items: module.items.map((item)=>{
                            if (item.id === itemId && item.type === 'quiz') {
                                return {
                                    ...item,
                                    questions
                                };
                            }
                            return item;
                        })
                    };
                }
                return module;
            }));
    };
    // Handle quiz content changes
    const handleQuizContentChange = (questions)=>{
        if (activeItem && activeModuleId && activeItem.type === 'quiz') {
            updateQuizQuestions(activeModuleId, activeItem.id, questions);
        }
    };
    // Add a new function to handle the actual publishing after confirmation
    const handleConfirmPublish = async ()=>{
        if (!activeItem || !activeModuleId) {
            console.error("Cannot publish: activeItem or activeModuleId is missing");
            setShowPublishConfirmation(false);
            return;
        }
        // For learning materials and quizzes, the API call is now handled in their respective components
        // We need to update the modules list to reflect the status change
        // The title update is handled in the CourseItemDialog's onPublishSuccess callback
        // Update the module item in the modules list with the updated status and title
        updateModuleItemAfterPublish(activeModuleId, activeItem.id, 'published', activeItem.title, activeItem.scheduled_publish_at);
        // Hide the confirmation dialog
        setShowPublishConfirmation(false);
    };
    // Add a function to update a module item's status and title
    const updateModuleItemAfterPublish = (moduleId, itemId, status, title, scheduled_publish_at)=>{
        setModules((prevModules)=>prevModules.map((module)=>{
                if (module.id === moduleId) {
                    return {
                        ...module,
                        items: module.items.map((item)=>{
                            if (item.id === itemId) {
                                // Get numQuestions from activeItem if available (for quizzes)
                                const numQuestions = activeItem && activeItem.type === 'quiz' && activeItem.questions ? activeItem.questions.length : undefined;
                                return {
                                    ...item,
                                    status,
                                    title,
                                    scheduled_publish_at,
                                    ...numQuestions !== undefined && item.type === 'quiz' ? {
                                        numQuestions
                                    } : {}
                                };
                            }
                            return item;
                        })
                    };
                }
                return module;
            }));
    };
    // Add a function to handle canceling the publish action
    const handleCancelPublish = ()=>{
        setShowPublishConfirmation(false);
    };
    const saveModuleTitle = async (moduleId)=>{
        // Find the heading element by data attribute
        const headingElement = document.querySelector(`[data-module-id="${moduleId}"]`);
        if (headingElement) {
            // Get the current content
            const newTitle = headingElement.textContent || "";
            try {
                // Make API call to update the milestone on the server
                const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/milestones/${moduleId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: newTitle
                    })
                });
                if (!response.ok) {
                    throw new Error(`Failed to update module title: ${response.status}`);
                }
                // If successful, update the state
                updateModuleTitle(moduleId, newTitle);
                console.log("Module title updated successfully");
                // Show toast notification
                setToast({
                    show: true,
                    title: 'A makeover',
                    description: `Module name updated successfully`,
                    emoji: '✨'
                });
                // Auto-hide toast after 3 seconds
                setTimeout(()=>{
                    setToast((prev)=>({
                            ...prev,
                            show: false
                        }));
                }, 3000);
            } catch (error) {
                console.error("Error updating module title:", error);
                // Still update the local state even if the API call fails
                // This provides a better user experience while allowing for retry later
                updateModuleTitle(moduleId, newTitle);
                // Show error toast
                setToast({
                    show: true,
                    title: 'Update Failed',
                    description: 'Failed to update module title, but changes were saved locally',
                    emoji: '⚠️'
                });
                // Auto-hide toast after 3 seconds
                setTimeout(()=>{
                    setToast((prev)=>({
                            ...prev,
                            show: false
                        }));
                }, 3000);
            }
        }
        // Turn off editing mode
        toggleModuleEditing(moduleId, false);
    };
    const cancelModuleEditing = (moduleId)=>{
        // Find the heading element
        const headingElement = document.querySelector(`[data-module-id="${moduleId}"]`);
        if (headingElement) {
            // Reset the content to the original title from state
            const module = modules.find((m)=>m.id === moduleId);
            if (module) {
                headingElement.textContent = module.title;
            }
        }
        // Turn off editing mode
        toggleModuleEditing(moduleId, false);
    };
    // Add this helper function before the return statement
    const hasAnyItems = ()=>{
        return modules.some((module)=>module.items.some((item)=>item.status !== 'draft'));
    };
    // Add these functions for course title editing
    const handleCourseTitleInput = (e)=>{
        // Just store the current text content, but don't update the state yet
        // This prevents React from re-rendering and resetting the cursor
        const newTitle = e.currentTarget.textContent || "";
    // We'll update the state when the user finishes editing
    };
    const saveCourseTitle = ()=>{
        if (titleRef.current) {
            const newTitle = titleRef.current.textContent || "";
            // Make a PUT request to update the course name
            fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/courses/${courseId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: newTitle
                })
            }).then((response)=>{
                if (!response.ok) {
                    throw new Error(`Failed to update course: ${response.status}`);
                }
                return response.json();
            }).then((data)=>{
                // Update the course title in the UI
                setCourseTitle(newTitle);
            }).catch((err)=>{
                console.error("Error updating course:", err);
                // Revert to the original title in case of error
                if (titleRef.current) {
                    titleRef.current.textContent = courseTitle;
                }
            });
            setIsCourseTitleEditing(false);
        }
    };
    const cancelCourseTitleEditing = ()=>{
        if (titleRef.current) {
            titleRef.current.textContent = courseTitle;
        }
        setIsCourseTitleEditing(false);
    };
    // Helper function to set cursor at the end of a contentEditable element
    const setCursorToEnd = (element)=>{
        if (!element) return;
        const range = document.createRange();
        const selection = window.getSelection();
        // Clear any existing selection first
        selection?.removeAllRanges();
        // Set range to end of content
        range.selectNodeContents(element);
        range.collapse(false); // false means collapse to end
        // Apply the selection
        selection?.addRange(range);
        element.focus();
    };
    // For course title editing
    const enableCourseTitleEditing = ()=>{
        setIsCourseTitleEditing(true);
        // Need to use setTimeout to ensure the element is editable before focusing
        setTimeout(()=>{
            if (titleRef.current) {
                setCursorToEnd(titleRef.current);
            }
        }, 0);
    };
    // For module title editing
    const enableModuleEditing = (moduleId)=>{
        toggleModuleEditing(moduleId, true);
        // More reliable method to set cursor at end with a sufficient delay
        setTimeout(()=>{
            const moduleElement = document.querySelector(`h2[contenteditable="true"]`);
            if (moduleElement && moduleElement.textContent) {
                // Create a text node at the end for more reliable cursor placement
                const textNode = moduleElement.firstChild;
                if (textNode) {
                    const selection = window.getSelection();
                    const range = document.createRange();
                    // Place cursor at the end of the text
                    range.setStart(textNode, textNode.textContent?.length || 0);
                    range.setEnd(textNode, textNode.textContent?.length || 0);
                    selection?.removeAllRanges();
                    selection?.addRange(range);
                }
                moduleElement.focus();
            }
        }, 100); // Increased delay for better reliability
    };
    // Modified function to enable edit mode
    const enableEditMode = ()=>{
        setIsEditMode(true);
    // Focus the title for editing is now handled in CourseModuleList
    };
    // Save the current item
    const saveItem = async ()=>{
        if (!activeItem || !activeModuleId) return;
        // Update the modules state to reflect any changes in the UI
        setModules((prevModules)=>prevModules.map((module)=>{
                if (module.id === activeModuleId) {
                    return {
                        ...module,
                        items: module.items.map((item)=>{
                            if (item.id === activeItem.id) {
                                // Common properties to update for all item types
                                const commonUpdates = {
                                    title: activeItem.title,
                                    scheduled_publish_at: activeItem.scheduled_publish_at
                                };
                                // Create updated items based on type with proper type assertions
                                if (item.type === 'material' && activeItem.type === 'material') {
                                    return {
                                        ...item,
                                        ...commonUpdates,
                                        content: activeItem.content
                                    };
                                } else if (item.type === 'quiz' && activeItem.type === 'quiz') {
                                    return {
                                        ...item,
                                        ...commonUpdates,
                                        questions: activeItem.questions
                                    };
                                }
                                // Default case - update common properties
                                return {
                                    ...item,
                                    ...commonUpdates
                                };
                            }
                            return item;
                        })
                    };
                }
                return module;
            }));
        // Exit edit mode
        setIsEditMode(false);
    };
    const handleCohortSearch = (e)=>{
        const query = e.target.value;
        setCohortSearchQuery(query);
        // Always filter the existing cohorts client-side
        if (cohorts.length > 0) {
            if (query.trim() === '') {
                // Show all available cohorts
                setFilteredCohorts(cohorts);
            } else {
                // Filter by search query
                const filtered = cohorts.filter((cohort)=>cohort.name.toLowerCase().includes(query.toLowerCase()));
                setFilteredCohorts(filtered);
            }
        }
    };
    // Update fetchCohorts to only be called once when dialog opens
    const fetchCohorts = async ()=>{
        try {
            setIsLoadingCohorts(true);
            setCohortError(null);
            // First, fetch cohorts that are already assigned to this course
            const courseCohortResponse = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/courses/${courseId}/cohorts`);
            let assignedCohortIds = [];
            if (courseCohortResponse.ok) {
                const courseCohortData = await courseCohortResponse.json();
                assignedCohortIds = courseCohortData.map((cohort)=>cohort.id);
                setCourseCohorts(courseCohortData);
            }
            // Then, fetch all cohorts for the organization
            const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/cohorts/?org_id=${schoolId}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch cohorts: ${response.status}`);
            }
            const data = await response.json();
            // Store the total number of cohorts in the school
            setTotalSchoolCohorts(data.length);
            // Filter out cohorts that are already assigned to the course
            const availableCohorts = data.filter((cohort)=>!assignedCohortIds.includes(cohort.id));
            setCohorts(availableCohorts);
            // Set all available cohorts as filtered cohorts initially
            setFilteredCohorts(availableCohorts);
            setIsLoadingCohorts(false);
        } catch (error) {
            console.error("Error fetching cohorts:", error);
            setCohortError("Failed to load cohorts. Please try again later.");
            setIsLoadingCohorts(false);
        }
    };
    // Function to select a cohort
    const selectCohort = (cohort)=>{
        // Set the selected cohort (replacing any previous selection)
        setSelectedCohort(cohort);
    };
    // Update to publish to selected cohort
    const publishCourseToSelectedCohort = async ()=>{
        if (!selectedCohort) {
            setShowPublishDialog(false);
            return;
        }
        try {
            setCohortError(null);
            // Show loading state
            setIsLoadingCohorts(true);
            // Link the course to the selected cohort
            await linkCourseToCohort(selectedCohort.id, selectedCohort.name, dripConfig);
            setDripConfig(undefined);
        } catch (error) {
            console.error("Error publishing course:", error);
            setCohortError("Failed to publish course. Please try again later.");
        } finally{
            setIsLoadingCohorts(false);
        }
    };
    // Create a reusable function for linking a course to cohorts
    const linkCourseToCohort = async (cohortId, cohortName, dripConfig)=>{
        // Make a single API call with all cohort IDs and drip config
        const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/courses/${courseId}/cohorts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cohort_ids: [
                    cohortId
                ],
                drip_config: dripConfig
            })
        });
        // Check if the request failed
        if (!response.ok) {
            throw new Error(`Failed to link course to cohorts: ${response.status}`);
        }
        // Update cohort details for the celebration - use the first cohort for single cohort display
        setCelebrationDetails({
            cohortId: cohortId,
            cohortName: cohortName
        });
        if (showPublishDialog) {
            setShowPublishDialog(false);
        }
        // Show the celebratory banner
        setShowCelebratoryBanner(true);
        // Reset selection
        setSelectedCohort(null);
        // Refresh the displayed cohorts
        fetchCourseCohorts();
    };
    // Function to fetch cohorts assigned to this course
    const fetchCourseCohorts = async ()=>{
        try {
            setIsLoadingCourseCohorts(true);
            const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/courses/${courseId}/cohorts`);
            if (!response.ok) {
                throw new Error(`Failed to fetch course cohorts: ${response.status}`);
            }
            const data = await response.json();
            setCourseCohorts(data);
        } catch (error) {
            console.error("Error fetching course cohorts:", error);
        // Silently fail - don't show an error message to the user
        } finally{
            setIsLoadingCourseCohorts(false);
        }
    };
    // Add a new function to initiate cohort removal with confirmation
    const initiateCohortRemoval = (cohortId, cohortName)=>{
        setCohortToRemove({
            id: cohortId,
            name: cohortName
        });
        setShowRemoveCohortConfirmation(true);
    };
    // Modify the existing removeCohortFromCourse function to handle the actual removal
    const removeCohortFromCourse = async (cohortId)=>{
        try {
            const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/courses/${courseId}/cohorts`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cohort_ids: [
                        cohortId
                    ]
                })
            });
            if (!response.ok) {
                throw new Error(`Failed to remove cohort from course: ${response.status}`);
            }
            // Show success toast
            setToast({
                show: true,
                title: 'Cohort unlinked',
                description: `This course has been removed from "${cohortToRemove?.name}"`,
                emoji: '🔓'
            });
            // Auto-hide toast after 5 seconds
            setTimeout(()=>{
                setToast((prev)=>({
                        ...prev,
                        show: false
                    }));
            }, 5000);
            // Refresh the displayed cohorts
            fetchCourseCohorts();
            // Reset the confirmation state
            setShowRemoveCohortConfirmation(false);
            setCohortToRemove(null);
        } catch (error) {
            console.error("Error removing cohort from course:", error);
            // Show error toast
            setToast({
                show: true,
                title: 'Error',
                description: 'Failed to unlink cohort. Please try again.',
                emoji: '❌'
            });
            // Auto-hide toast after 5 seconds
            setTimeout(()=>{
                setToast((prev)=>({
                        ...prev,
                        show: false
                    }));
            }, 5000);
            // Reset the confirmation state even on error
            setShowRemoveCohortConfirmation(false);
            setCohortToRemove(null);
        }
    };
    // Add toast close handler
    const handleCloseToast = ()=>{
        setToast((prev)=>({
                ...prev,
                show: false
            }));
    };
    // Add handler for closing the celebratory banner
    const closeCelebratoryBanner = ()=>{
        setShowCelebratoryBanner(false);
    };
    // Update to handle dialog opening from either button
    const openCohortSelectionDialog = async (origin)=>{
        // For publish action, check if we need to auto-create a cohort
        if (origin === 'publish') {
            try {
                // First, fetch all cohorts for the organization to check if any exist
                const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/cohorts/?org_id=${schoolId}`);
                if (response.ok) {
                    const allCohorts = await response.json();
                    // If no cohorts exist at all, auto-create one and publish
                    if (allCohorts.length === 0) {
                        openCreateCohortDialog();
                        return;
                    }
                    // Check cohorts already assigned to this course
                    const courseCohortResponse = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/courses/${courseId}/cohorts`);
                    let assignedCohortIds = [];
                    if (courseCohortResponse.ok) {
                        const courseCohortData = await courseCohortResponse.json();
                        assignedCohortIds = courseCohortData.map((cohort)=>cohort.id);
                    }
                    // Filter out cohorts that are already assigned to the course
                    const availableCohorts = allCohorts.filter((cohort)=>!assignedCohortIds.includes(cohort.id));
                // If all cohorts are already assigned, show the dialog (don't auto-create)
                // The dialog will handle showing the appropriate message and create button
                }
            } catch (error) {
                console.error("Error checking cohorts:", error);
            // Fall back to showing the dialog if there's an error
            }
        }
        // Toggle dialog if clicking the same button that opened it
        if (showPublishDialog && dialogOrigin === origin) {
            // Close the dialog if it's already open with the same origin
            setShowPublishDialog(false);
            setDialogOrigin(null);
        } else {
            // Open the dialog with the new origin
            setDialogOrigin(origin);
            setShowPublishDialog(true);
            setSelectedCohort(null); // Reset selected cohort
            fetchCohorts();
        }
    };
    // Update to handle dialog closing
    const closeCohortDialog = ()=>{
        setShowPublishDialog(false);
        setDialogOrigin(null);
        setCohortSearchQuery('');
        setFilteredCohorts([]);
        setCohortError(null);
        setDripConfig(undefined);
    };
    // Add handler for opening the create cohort dialog directly
    const openCreateCohortDialog = ()=>{
        // Close the cohort selection dialog first
        setShowPublishDialog(false);
        // Then open the create cohort dialog
        setShowCreateCohortDialog(true);
    };
    // Add handler for closing the create cohort dialog
    const closeCreateCohortDialog = ()=>{
        setShowCreateCohortDialog(false);
    };
    // Add handler for cohort creation and linking
    const handleCohortCreated = async (cohort, dripConfig)=>{
        try {
            // Close the create cohort dialog first
            setShowCreateCohortDialog(false);
            // Link the course to the newly created cohort using the reusable function
            await linkCourseToCohort(cohort.id, cohort.name, dripConfig);
        } catch (error) {
            console.error("Error linking course to cohort:", error);
            // Show error toast
            setToast({
                show: true,
                title: 'Error',
                description: 'Failed to link course to cohort. Please try again.',
                emoji: '❌'
            });
            // Auto-hide toast after 5 seconds
            setTimeout(()=>{
                setToast((prev)=>({
                        ...prev,
                        show: false
                    }));
            }, 5000);
        }
    };
    // Add useEffect for WebSocket cleanup
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Cleanup function
        return ()=>{
            // Close WebSocket when component unmounts
            if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
                wsRef.current.close();
            }
            // Clear heartbeat interval
            if (heartbeatIntervalRef.current) {
                clearInterval(heartbeatIntervalRef.current);
            }
        };
    }, []);
    // Add a useEffect to watch for completion of task generation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isGenerationComplete) {
            return;
        }
        // Check if all tasks have been generated
        if (totalTasksToGenerate > 0 && generatedTasksCount === totalTasksToGenerate) {
            // Add final completion message
            setGenerationProgress([
                "Course generation complete"
            ]);
            // Set generation as complete
            setIsGenerationComplete(true);
            // Close WebSocket connection when all tasks are completed
            if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
                wsRef.current.close();
                wsRef.current = null;
            }
        }
    }, [
        generatedTasksCount,
        totalTasksToGenerate
    ]);
    // Update the handleGenerationDone function to reset the isGenerationComplete state
    const handleGenerationDone = ()=>{
        setIsGeneratingCourse(false);
        setIsCourseStructureGenerated(false);
        setGenerationProgress([]);
        setGeneratedTasksCount(0);
        setTotalTasksToGenerate(0);
        setIsGenerationComplete(false);
    };
    const setupGenerationWebSocket = ()=>{
        // Set up WebSocket connection for real-time updates
        try {
            const websocketUrl = `${("TURBOPACK compile-time value", "http://localhost:8001")?.replace(/^http/, 'ws')}/ws/course/${courseId}/generation`;
            // Create new WebSocket and store in ref
            wsRef.current = new WebSocket(websocketUrl);
            wsRef.current.onopen = ()=>{
                console.log('WebSocket connection established for course generation');
                // Set up heartbeat to keep connection alive
                // Typically sending a ping every 30 seconds prevents timeout
                heartbeatIntervalRef.current = setInterval(()=>{
                    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
                        // Send a simple ping message to keep the connection alive
                        wsRef.current.send(JSON.stringify({
                            type: 'ping'
                        }));
                        console.log('Sent WebSocket heartbeat ping');
                    } else {
                        // Clear the interval if the WebSocket is closed
                        if (heartbeatIntervalRef.current) {
                            clearInterval(heartbeatIntervalRef.current);
                            heartbeatIntervalRef.current = null;
                        }
                    }
                }, 30000); // 30 seconds interval
            };
            wsRef.current.onmessage = (event)=>{
                try {
                    const data = JSON.parse(event.data);
                    if (data.event === 'module_created') {
                        // Add the new module to the list of modules
                        const newModule = {
                            id: data.module.id.toString(),
                            title: data.module.name,
                            position: data.module.ordering,
                            backgroundColor: data.module.color,
                            isExpanded: true,
                            isEditing: false,
                            items: []
                        };
                        setModules((prevModules)=>[
                                ...prevModules,
                                newModule
                            ]);
                    } else if (data.event === 'course_structure_completed') {
                        // Course structure generation is complete
                        const jobId = data.job_id;
                        setGenerationProgress((prev)=>[
                                ...prev,
                                "Course plan complete",
                                "Generating learning materials and quizzes"
                            ]);
                        setIsCourseStructureGenerated(true);
                        setGeneratedTasksCount(0); // Reset counter when starting task generation
                        // Now we can start the task generation
                        fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/ai/generate/course/${courseId}/tasks`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                job_uuid: jobId
                            })
                        }).then((response)=>{
                            if (!response.ok) {
                                throw new Error(`Failed to generate tasks: ${response.status}`);
                            }
                            return response.json();
                        }).catch((error)=>{
                            console.error('Error generating tasks:', error);
                            // Handle error appropriately
                            if (wsRef.current) {
                                wsRef.current.close();
                                wsRef.current = null;
                            }
                            setGenerationProgress((prev)=>[
                                    ...prev,
                                    "Error generating tasks. Please try again."
                                ]);
                        });
                    } else if (data.event === 'task_created') {
                        // Increment the generated tasks counter
                        setTotalTasksToGenerate((prev)=>prev + 1);
                        // Add the new task to the appropriate module
                        setModules((prevModules)=>{
                            return prevModules.map((module)=>{
                                if (module.id === data.task.module_id.toString()) {
                                    // Create appropriate item based on type
                                    let newItem;
                                    if (data.task.type === 'learning_material') {
                                        newItem = {
                                            id: data.task.id.toString(),
                                            title: data.task.name,
                                            position: data.task.ordering,
                                            type: 'material',
                                            content: [],
                                            status: 'draft',
                                            scheduled_publish_at: null,
                                            isGenerating: true
                                        };
                                    } else {
                                        newItem = {
                                            id: data.task.id.toString(),
                                            title: data.task.name,
                                            position: data.task.ordering,
                                            type: 'quiz',
                                            questions: [],
                                            status: 'draft',
                                            scheduled_publish_at: null,
                                            isGenerating: true
                                        };
                                    }
                                    return {
                                        ...module,
                                        items: [
                                            ...module.items,
                                            newItem
                                        ]
                                    };
                                }
                                return module;
                            });
                        });
                    } else if (data.event === 'task_completed') {
                        setGeneratedTasksCount(data.total_completed);
                        // Mark this specific task as no longer generating
                        const taskId = data.task.id.toString();
                        // Update the module item to remove the isGenerating flag
                        setModules((prevModules)=>{
                            return prevModules.map((module)=>{
                                // Update items in this module
                                const updatedItems = module.items.map((item)=>{
                                    if (item.id === taskId) {
                                        return {
                                            ...item,
                                            isGenerating: false
                                        };
                                    }
                                    return item;
                                });
                                return {
                                    ...module,
                                    items: updatedItems
                                };
                            });
                        });
                    }
                } catch (error) {
                    console.error('Error processing WebSocket message:', error);
                }
            };
            wsRef.current.onerror = (error)=>{
                console.error('WebSocket error:', error);
                setGenerationProgress((prev)=>[
                        ...prev,
                        "There was an error generating your course. Please try again."
                    ]);
            };
            wsRef.current.onclose = ()=>{
                console.log('WebSocket connection closed');
                // Clear heartbeat interval
                if (heartbeatIntervalRef.current) {
                    clearInterval(heartbeatIntervalRef.current);
                    heartbeatIntervalRef.current = null;
                }
                // Attempt to reconnect if generation is still in progress
                if (isGeneratingCourseRef.current && totalTasksToGenerateRef.current > 0 && generatedTasksCountRef.current < totalTasksToGenerateRef.current) {
                    console.log('Generation still in progress. Attempting to reconnect...');
                    // Add a small delay before attempting to reconnect
                    setTimeout(()=>{
                        // Try to setup a new WebSocket connection
                        const ws = setupGenerationWebSocket();
                        if (ws) {
                            wsRef.current = ws;
                            console.log('WebSocket reconnection successful');
                        } else {
                            console.error('WebSocket reconnection failed');
                        }
                    }, 500); // small delay before reconnection attempt
                }
            };
            return wsRef.current;
        } catch (wsError) {
            console.error('Error setting up WebSocket:', wsError);
        }
    };
    // Add handler for AI course generation
    const handleGenerateCourse = async (data)=>{
        if (!data.referencePdf) {
            throw new Error('Reference material is required');
        }
        try {
            // Close the dialog first
            setShowGenerateDialog(false);
            // Set generating state and initialize with first progress message
            setIsGeneratingCourse(true);
            setIsCourseStructureGenerated(false);
            setIsGenerationComplete(false); // Reset completion state
            // Clear any existing WebSocket connection
            if (wsRef.current) {
                wsRef.current.close();
                wsRef.current = null;
            }
            // Clear any existing heartbeat interval
            if (heartbeatIntervalRef.current) {
                clearInterval(heartbeatIntervalRef.current);
                heartbeatIntervalRef.current = null;
            }
            // For now, we'll just log the data
            // In a real implementation, this would be an API call to start the generation process
            let presigned_url = '';
            let file_key = '';
            setGenerationProgress([
                "Uploading reference material"
            ]);
            try {
                // First, get a presigned URL for the file
                const presignedUrlResponse = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/file/presigned-url/create`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        content_type: 'application/pdf'
                    })
                });
                if (!presignedUrlResponse.ok) {
                    throw new Error('Failed to get presigned URL');
                }
                const presignedData = await presignedUrlResponse.json();
                console.log('Presigned url generated');
                presigned_url = presignedData.presigned_url;
                file_key = presignedData.file_key;
            } catch (error) {
                console.error("Error getting presigned URL for file:", error);
            }
            if (!presigned_url) {
                // If we couldn't get a presigned URL, try direct upload to the backend
                try {
                    console.log("Attempting direct upload to backend");
                    // Create FormData for the file upload
                    const formData = new FormData();
                    formData.append('file', data.referencePdf, 'reference_material.pdf');
                    formData.append('content_type', 'application/pdf');
                    // Upload directly to the backend
                    const uploadResponse = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/file/upload-local`, {
                        method: 'POST',
                        body: formData
                    });
                    if (!uploadResponse.ok) {
                        throw new Error(`Failed to upload audio to backend: ${uploadResponse.status}`);
                    }
                    const uploadData = await uploadResponse.json();
                    file_key = uploadData.file_key;
                    console.log('Reference material uploaded successfully to backend');
                } catch (error) {
                    console.error('Error with direct upload to backend:', error);
                    throw error;
                }
            } else {
                // Upload the file to S3 using the presigned URL
                try {
                    // Use data.referencePdf instead of undefined 'file' variable
                    const pdfFile = data.referencePdf;
                    // Upload to S3 using the presigned URL
                    const uploadResponse = await fetch(presigned_url, {
                        method: 'PUT',
                        body: pdfFile,
                        headers: {
                            'Content-Type': 'application/pdf'
                        }
                    });
                    if (!uploadResponse.ok) {
                        throw new Error(`Failed to upload file to S3: ${uploadResponse.status}`);
                    }
                    console.log('File uploaded successfully to S3');
                } catch (error) {
                    console.error('Error uploading file to S3:', error);
                    throw error;
                }
            }
            setGenerationProgress([
                "Uploaded reference material",
                'Generating course plan'
            ]);
            // Set up WebSocket connection for real-time updates
            const ws = setupGenerationWebSocket();
            if (!ws) {
                throw new Error('Failed to setup WebSocket connection');
            }
            wsRef.current = ws;
            let jobId = '';
            // Make API request to generate course structure
            try {
                let response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/ai/generate/course/${courseId}/structure`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        course_description: data.courseDescription,
                        intended_audience: data.intendedAudience,
                        instructions: data.instructionsForAI || undefined,
                        reference_material_s3_key: file_key
                    })
                });
                if (!response.ok) {
                    // Close WebSocket on API error
                    if (wsRef.current) {
                        wsRef.current.close();
                        wsRef.current = null;
                    }
                    throw new Error(`Failed to generate course: ${response.status}`);
                }
                const result = await response.json();
            // We'll set a listener for the course structure completion
            // instead of immediately setting it as complete
            // Wait for the WebSocket to notify that the course structure is complete
            // Instead of immediately calling the tasks endpoint
            } catch (error) {
                console.error('Error making course generation API request:', error);
                // Close WebSocket on API error
                if (wsRef.current) {
                    wsRef.current.close();
                    wsRef.current = null;
                }
                throw error;
            }
        } catch (error) {
            console.error('Error generating course:', error);
            // Clean up WebSocket
            if (wsRef.current) {
                wsRef.current.close();
                wsRef.current = null;
            }
            // Clear heartbeat interval
            if (heartbeatIntervalRef.current) {
                clearInterval(heartbeatIntervalRef.current);
                heartbeatIntervalRef.current = null;
            }
            // Add error message to progress
            setGenerationProgress((prev)=>[
                    ...prev,
                    "There was an error generating your course. Please try again."
                ]);
            // Reset generating state after delay
            setTimeout(()=>{
                setIsGeneratingCourse(false);
                setIsCourseStructureGenerated(false);
                setGenerationProgress([]);
            }, 3000);
            return Promise.reject(error);
        }
    };
    // Add handler for copying cohort invite link
    const handleCopyCohortInviteLink = async (cohortId, cohortName)=>{
        try {
            const inviteLink = `${window.location.origin}/school/${schoolSlug}/join?cohortId=${cohortId}`;
            await navigator.clipboard.writeText(inviteLink);
            // Show success toast
            setToast({
                show: true,
                title: 'Link copied',
                description: `Share this link with your learners to let them join this cohort`,
                emoji: '📋'
            });
            // Auto-hide toast after 3 seconds
            setTimeout(()=>{
                setToast((prev)=>({
                        ...prev,
                        show: false
                    }));
            }, 3000);
        } catch (error) {
            console.error('Failed to copy to clipboard:', error);
            // Show error toast
            setToast({
                show: true,
                title: 'Copy failed',
                description: 'Unable to copy invite link to clipboard',
                emoji: '❌'
            });
            // Auto-hide toast after 3 seconds
            setTimeout(()=>{
                setToast((prev)=>({
                        ...prev,
                        show: false
                    }));
            }, 3000);
        }
    };
    // Function to handle opening settings dialog
    const handleOpenSettingsDialog = (cohort)=>{
        setSelectedCohortForSettings(cohort);
    };
    // Function to close settings dialog
    const handleCloseSettingsDialog = ()=>{
        setSelectedCohortForSettings(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
                showCreateCourseButton: false
            }, void 0, false, {
                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                lineNumber: 1826,
                columnNumber: 13
            }, this),
            isGeneratingCourse && !isCourseStructureGenerated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/70 backdrop-blur-[1px] z-40 flex items-center justify-center pointer-events-auto"
            }, void 0, false, {
                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                lineNumber: 1830,
                columnNumber: 17
            }, this),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-[calc(100vh-80px)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 border-t-2 border-b-2 border-white rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                    lineNumber: 1838,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                lineNumber: 1837,
                columnNumber: 17
            }, this) : /* Main content area - only shown after loading */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-12 grid grid-cols-5 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl ml-24 col-span-4 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/school/admin/${schoolId}#courses`,
                                className: "inline-flex items-center text-gray-400 hover:text-white transition-colors mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        size: 16,
                                        className: "mr-2 text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                        lineNumber: 1849,
                                        columnNumber: 29
                                    }, this),
                                    "Back to courses"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                lineNumber: 1845,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-8",
                                children: [
                                    error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-light text-red-400 w-3/4 mr-8",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                        lineNumber: 1855,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center w-3/4 mr-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                ref: titleRef,
                                                contentEditable: isCourseTitleEditing,
                                                suppressContentEditableWarning: true,
                                                onInput: handleCourseTitleInput,
                                                onKeyDown: handleKeyDown,
                                                className: `text-4xl font-light text-white outline-none ${isCourseTitleEditing ? 'border-b border-gray-700 pb-1' : ''}`,
                                                autoFocus: isCourseTitleEditing,
                                                children: courseTitle
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                lineNumber: 1860,
                                                columnNumber: 37
                                            }, this),
                                            !isCourseTitleEditing && courseCohorts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-4 px-3 py-1 bg-green-800/70 text-white text-xs rounded-full",
                                                children: "Published"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                lineNumber: 1874,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                        lineNumber: 1859,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3 ml-auto",
                                        children: isCourseTitleEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex items-center px-6 py-2 text-sm font-medium text-white bg-transparent border-2 !border-[#4F46E5] hover:bg-[#222222] outline-none rounded-full transition-all cursor-pointer shadow-md",
                                                    onClick: saveCourseTitle,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-2 text-base",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "16",
                                                                height: "16",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                                        lineNumber: 1890,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                        points: "17 21 17 13 7 13 7 21"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                                        lineNumber: 1891,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                        points: "7 3 7 8 15 8"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                                        lineNumber: 1892,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                                lineNumber: 1889,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                            lineNumber: 1888,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]",
                                                            children: "Save"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                            lineNumber: 1895,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                    lineNumber: 1884,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex items-center px-6 py-2 text-sm font-medium text-white bg-transparent border-2 !border-[#6B7280] hover:bg-[#222222] outline-none rounded-full transition-all cursor-pointer shadow-md",
                                                    onClick: cancelCourseTitleEditing,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-2 text-base",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                                lineNumber: 1902,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                            lineNumber: 1901,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]",
                                                            children: "Cancel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                            lineNumber: 1904,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                    lineNumber: 1897,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex items-center px-6 py-2 text-sm font-medium text-white bg-transparent border-2 !border-[#4F46E5] hover:bg-[#222222] outline-none rounded-full transition-all cursor-pointer shadow-md",
                                                    onClick: enableCourseTitleEditing,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-2 text-base",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "16",
                                                                height: "16",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                                        lineNumber: 1915,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                                        lineNumber: 1916,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                                lineNumber: 1914,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                            lineNumber: 1913,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]",
                                                            children: "Edit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                            lineNumber: 1919,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                    lineNumber: 1909,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex items-center px-6 py-2 text-sm font-medium text-white bg-transparent border-2 !border-[#EF4444] hover:bg-[#222222] outline-none rounded-full transition-all cursor-pointer shadow-md",
                                                    onClick: ()=>{
                                                        // Open preview in a new tab
                                                        window.open(`/school/admin/${schoolId}/courses/${courseId}/preview`, '_blank');
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-2 text-base",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "16",
                                                                height: "16",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                                        lineNumber: 1930,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "12",
                                                                        cy: "12",
                                                                        r: "3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                                        lineNumber: 1931,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                                lineNumber: 1929,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                            lineNumber: 1928,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]",
                                                            children: "Preview"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                            lineNumber: 1934,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                    lineNumber: 1921,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                        lineNumber: 1881,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                lineNumber: 1853,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addModule"])(courseId, schoolId, modules, setModules, setActiveModuleId, lastUsedColorIndex, setLastUsedColorIndex),
                                className: "mb-6 px-6 py-2 bg-white text-black text-sm font-medium rounded-full hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 cursor-pointer",
                                children: "Add module"
                            }, void 0, false, {
                                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                lineNumber: 1942,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CourseModuleList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                "data-testid": "course-module-list",
                                modules: modules,
                                mode: "edit",
                                onToggleModule: toggleModule,
                                onOpenItem: openItemDialog,
                                onMoveItemUp: moveItemUp,
                                onMoveItemDown: moveItemDown,
                                onDeleteItem: deleteItem,
                                onAddLearningMaterial: addLearningMaterial,
                                onAddQuiz: addQuiz,
                                onMoveModuleUp: moveModuleUp,
                                onMoveModuleDown: moveModuleDown,
                                onDeleteModule: deleteModule,
                                onEditModuleTitle: enableModuleEditing,
                                saveModuleTitle: saveModuleTitle,
                                cancelModuleEditing: cancelModuleEditing,
                                isDialogOpen: isDialogOpen,
                                activeItem: activeItem,
                                activeModuleId: activeModuleId,
                                isEditMode: isEditMode,
                                isPreviewMode: isPreviewMode,
                                showPublishConfirmation: showPublishConfirmation,
                                handleConfirmPublish: handleConfirmPublish,
                                handleCancelPublish: handleCancelPublish,
                                closeDialog: closeDialog,
                                saveItem: saveItem,
                                cancelEditMode: cancelEditMode,
                                enableEditMode: enableEditMode,
                                handleQuizContentChange: handleQuizContentChange,
                                setShowPublishConfirmation: setShowPublishConfirmation,
                                schoolId: schoolId,
                                courseId: courseId,
                                onDuplicateItem: handleDuplicateItem
                            }, void 0, false, {
                                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                lineNumber: 1949,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                        lineNumber: 1843,
                        columnNumber: 21
                    }, this),
                    hasAnyItems() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ref: publishButtonRef,
                                    "data-dropdown-toggle": "true",
                                    className: "flex items-center px-6 py-2 text-sm font-medium text-white bg-[#016037] border-0 hover:bg-[#017045] outline-none rounded-full transition-all cursor-pointer shadow-md",
                                    onClick: ()=>openCohortSelectionDialog('publish'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-2 text-base",
                                            children: "🚀"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                            lineNumber: 1996,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]",
                                            children: "Share with learners"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                            lineNumber: 1997,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                    lineNumber: 1990,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                lineNumber: 1989,
                                columnNumber: 29
                            }, this),
                            !isLoadingCourseCohorts && courseCohorts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-sm font-light text-gray-400 mb-1",
                                        children: "Cohorts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                        lineNumber: 2003,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mb-3 mr-4",
                                        children: "View the course settings for each cohort and add learners to it using an invite link from the settings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                        lineNumber: 2004,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-3",
                                        children: courseCohorts.map((cohort)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center bg-[#222] px-4 py-2 rounded-full group hover:bg-[#333] transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        content: "Settings",
                                                        position: "top",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleOpenSettingsDialog(cohort),
                                                            className: "text-gray-400 hover:text-white cursor-pointer flex items-center mr-2",
                                                            "aria-label": "View settings",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                                lineNumber: 2019,
                                                                columnNumber: 57
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                            lineNumber: 2014,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                        lineNumber: 2013,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white text-sm font-light",
                                                        children: cohort.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                        lineNumber: 2022,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        content: "Remove",
                                                        position: "top",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>initiateCohortRemoval(cohort.id, cohort.name),
                                                            className: "text-gray-400 hover:text-white cursor-pointer flex items-center ml-2",
                                                            "aria-label": "Remove cohort from course",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                                lineNumber: 2029,
                                                                columnNumber: 57
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                            lineNumber: 2024,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                        lineNumber: 2023,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, cohort.id, true, {
                                                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                lineNumber: 2009,
                                                columnNumber: 45
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                        lineNumber: 2007,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                lineNumber: 2002,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                        lineNumber: 1988,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                lineNumber: 1842,
                columnNumber: 17
            }, this),
            isGeneratingCourse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-4 right-4 z-50 w-72 bg-black border border-gray-800 rounded-xl shadow-lg overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-3 bg-[#111111] border-b border-gray-800 flex justify-between items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    size: 16,
                                    className: "text-white mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                    lineNumber: 2047,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-sm font-light",
                                    children: "AI Course Generation"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                    lineNumber: 2048,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                            lineNumber: 2046,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                        lineNumber: 2045,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 max-h-60 overflow-y-auto space-y-4",
                        children: [
                            generationProgress.map((message, index)=>{
                                const isLatest = index === generationProgress.length - 1;
                                // Show spinner only for latest message when generation is not complete
                                const showSpinner = isLatest && !isGenerationComplete;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0 mr-3",
                                            children: showSpinner ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-5 w-5 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-4 w-4 animate-spin text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                    lineNumber: 2063,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                lineNumber: 2062,
                                                columnNumber: 45
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-5 w-5 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "h-3 w-3 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                    lineNumber: 2067,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                                lineNumber: 2066,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                            lineNumber: 2060,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-${isLatest ? 'white' : 'gray-400'} font-light`,
                                            children: message
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                            lineNumber: 2071,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                    lineNumber: 2059,
                                    columnNumber: 33
                                }, this);
                            }),
                            isCourseStructureGenerated && totalTasksToGenerate > 0 && !isGenerationComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-xs text-gray-400 mb-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                generatedTasksCount,
                                                " / ",
                                                totalTasksToGenerate
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                            lineNumber: 2082,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                        lineNumber: 2081,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-gray-800 rounded-full h-2.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-green-600 h-2.5 rounded-full transition-all duration-300 ease-in-out",
                                            style: {
                                                width: `${Math.min(100, generatedTasksCount / totalTasksToGenerate * 100)}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                            lineNumber: 2085,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                        lineNumber: 2084,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                lineNumber: 2080,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                        lineNumber: 2051,
                        columnNumber: 21
                    }, this),
                    isGenerationComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleGenerationDone,
                            className: "px-6 py-2 bg-white text-black text-sm font-medium rounded-full hover:opacity-90 transition-opacity focus:outline-none cursor-pointer",
                            children: "Done"
                        }, void 0, false, {
                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                            lineNumber: 2098,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                        lineNumber: 2097,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                lineNumber: 2044,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-10 right-10 z-50",
                children: !isGeneratingCourse && !toast.show && !isDialogOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "flex items-center px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:opacity-90 transition-opacity shadow-lg cursor-pointer",
                    onClick: ()=>setShowGenerateDialog(true),
                    disabled: isGeneratingCourse,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mr-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                                lineNumber: 2118,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                            lineNumber: 2117,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Generate with AI"
                        }, void 0, false, {
                            fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                            lineNumber: 2120,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                    lineNumber: 2112,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                lineNumber: 2110,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CourseCohortSelectionDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CourseCohortSelectionDialog"], {
                "data-testid": "cohort-selection-dialog",
                isOpen: showPublishDialog,
                onClose: closeCohortDialog,
                originButtonRef: dialogOrigin === 'publish' ? publishButtonRef : addCohortButtonRef,
                isPublishing: dialogOrigin === 'publish',
                onConfirm: publishCourseToSelectedCohort,
                showLoading: isLoadingCohorts,
                hasError: !!cohortError,
                errorMessage: cohortError || '',
                onRetry: fetchCohorts,
                cohorts: cohorts,
                selectedCohort: selectedCohort,
                onSelectCohort: selectCohort,
                onSearchChange: handleCohortSearch,
                searchQuery: cohortSearchQuery,
                filteredCohorts: filteredCohorts,
                totalSchoolCohorts: totalSchoolCohorts,
                schoolId: schoolId,
                courseId: courseId,
                onCohortCreated: handleCohortCreated,
                onOpenCreateCohortDialog: openCreateCohortDialog,
                onAutoCreateAndPublish: openCreateCohortDialog,
                onDripConfigChange: setDripConfig
            }, void 0, false, {
                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                lineNumber: 2126,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-testid": "confirmation-dialog",
                open: showRemoveCohortConfirmation,
                title: "Remove course from cohort",
                message: `Are you sure you want to remove this course from "${cohortToRemove?.name}"? Learners in that cohort will no longer have access to this course`,
                onConfirm: ()=>cohortToRemove && removeCohortFromCourse(cohortToRemove.id),
                onCancel: ()=>{
                    setShowRemoveCohortConfirmation(false);
                    setCohortToRemove(null);
                },
                confirmButtonText: "Remove",
                type: "delete"
            }, void 0, false, {
                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                lineNumber: 2153,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-testid": "toast",
                show: toast.show,
                title: toast.title,
                description: toast.description,
                emoji: toast.emoji,
                onClose: handleCloseToast
            }, void 0, false, {
                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                lineNumber: 2168,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CoursePublishSuccessBanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-testid": "success-banner",
                isOpen: showCelebratoryBanner,
                onClose: closeCelebratoryBanner,
                cohortId: celebrationDetails.cohortId,
                cohortName: celebrationDetails.cohortName,
                schoolSlug: schoolSlug,
                schoolId: params.id
            }, void 0, false, {
                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                lineNumber: 2178,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CreateCohortDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-testid": "create-cohort-dialog",
                open: showCreateCohortDialog,
                onClose: closeCreateCohortDialog,
                onCreateCohort: handleCohortCreated,
                schoolId: schoolId,
                showDripPublishSettings: true
            }, void 0, false, {
                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                lineNumber: 2189,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GenerateWithAIDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-testid": "generate-ai-dialog",
                open: showGenerateDialog,
                onClose: ()=>setShowGenerateDialog(false),
                onSubmit: handleGenerateCourse
            }, void 0, false, {
                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                lineNumber: 2199,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-testid": "settings-dialog",
                isOpen: !!selectedCohortForSettings,
                onClose: handleCloseSettingsDialog,
                courseName: selectedCohortForSettings?.name,
                dripConfig: {
                    is_drip_enabled: selectedCohortForSettings?.drip_config?.is_drip_enabled,
                    frequency_value: selectedCohortForSettings?.drip_config?.frequency_value,
                    frequency_unit: selectedCohortForSettings?.drip_config?.frequency_unit,
                    publish_at: selectedCohortForSettings?.drip_config?.publish_at
                },
                schoolId: schoolId,
                courseId: undefined,
                cohortId: selectedCohortForSettings?.id,
                onCopyCohortInviteLink: handleCopyCohortInviteLink
            }, void 0, false, {
                fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
                lineNumber: 2207,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/school/admin/[id]/courses/[courseId]/page.tsx",
        lineNumber: 1824,
        columnNumber: 9
    }, this);
}
}),

};

//# sourceMappingURL=src_08f79894._.js.map