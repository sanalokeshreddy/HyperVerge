(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/BlockNoteEditor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>BlockNoteEditor
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$blocknote$2b$react$40$0$2e$24$2e$2_$40$ti_7a4f54769274384574accf8df543f8ed$2f$node_modules$2f40$blocknote$2f$react$2f$dist$2f$blocknote$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@blocknote+react@0.24.2_@ti_7a4f54769274384574accf8df543f8ed/node_modules/@blocknote/react/dist/blocknote-react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$blocknote$2b$mantine$40$0$2e$24$2e$2_$40$_b697ee42125c36cc7dc7cb4de5c4067a$2f$node_modules$2f40$blocknote$2f$mantine$2f$dist$2f$blocknote$2d$mantine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@blocknote+mantine@0.24.2_@_b697ee42125c36cc7dc7cb4de5c4067a/node_modules/@blocknote/mantine/dist/blocknote-mantine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$blocknote$2b$core$40$0$2e$24$2e$2_$40$types$2b$hast$40$3$2e$0$2e$4$2f$node_modules$2f40$blocknote$2f$core$2f$dist$2f$blocknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@blocknote+core@0.24.2_@types+hast@3.0.4/node_modules/@blocknote/core/dist/blocknote.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Toast.tsx [app-client] (ecmascript)");
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
// Uploads a file and returns the URL to the uploaded file
async function uploadFile(file) {
    if (!file.type.startsWith('image/') && !file.type.startsWith('audio/') && !file.type.startsWith('video/')) {
        return '';
    }
    let presigned_url = '';
    try {
        // First, get a presigned URL for the file
        const presignedUrlResponse = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/file/presigned-url/create"), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content_type: file.type
            })
        });
        if (!presignedUrlResponse.ok) {
            throw new Error('Failed to get presigned URL');
        }
        const presignedData = await presignedUrlResponse.json();
        presigned_url = presignedData.presigned_url;
    } catch (error) {
        console.error("Error getting presigned URL for file:", error);
    }
    if (!presigned_url) {
        // If we couldn't get a presigned URL, try direct upload to the backend
        try {
            console.log("Attempting direct upload to backend");
            // Create FormData for the file upload
            const formData = new FormData();
            formData.append('file', file, file.name);
            formData.append('content_type', file.type);
            // Upload directly to the backend
            const uploadResponse = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/file/upload-local"), {
                method: 'POST',
                body: formData
            });
            if (!uploadResponse.ok) {
                throw new Error("Failed to upload audio to backend: ".concat(uploadResponse.status));
            }
            const uploadData = await uploadResponse.json();
            const file_static_path = uploadData.static_url;
            const static_url = "".concat(("TURBOPACK compile-time value", "http://localhost:8001")).concat(file_static_path);
            console.log('File uploaded successfully to backend');
            return static_url;
        } catch (error) {
            console.error('Error with direct upload to backend:', error);
            throw error;
        }
    } else {
        // Upload the file to S3 using the presigned URL
        try {
            let fileBlob = new Blob([
                file
            ], {
                type: file.type
            });
            // Upload to S3 using the presigned URL with WAV content type
            const uploadResponse = await fetch(presigned_url, {
                method: 'PUT',
                body: fileBlob,
                headers: {
                    'Content-Type': file.type
                }
            });
            if (!uploadResponse.ok) {
                throw new Error("Failed to upload file to S3: ".concat(uploadResponse.status));
            }
            console.log('File uploaded successfully to S3');
            // Update the request body with the file information
            return uploadResponse.url;
        } catch (error) {
            console.error('Error uploading file to S3:', error);
            throw error;
        }
    }
}
async function resolveFileUrl(url) {
    var _url_split_pop, _url_split_pop1;
    if (!url || !url.includes("?X-Amz-Algorithm=AWS4-HMAC-SHA256")) {
        return url;
    }
    if (url.includes("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/"))) {
        return url;
    }
    let uuid = ((_url_split_pop = url.split('/').pop()) === null || _url_split_pop === void 0 ? void 0 : _url_split_pop.split('.')[0]) || '';
    let fileType = ((_url_split_pop1 = url.split('.').pop()) === null || _url_split_pop1 === void 0 ? void 0 : _url_split_pop1.split('?')[0]) || '';
    try {
        // Get presigned URL
        const presignedResponse = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/file/presigned-url/get?uuid=").concat(uuid, "&file_extension=").concat(fileType), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!presignedResponse.ok) {
            throw new Error('Failed to get presigned URL for file');
        }
        const { url } = await presignedResponse.json();
        return url;
    } catch (error) {
        console.error('Error fetching file:', error);
    }
}
// Function to check if a URL is a YouTube link
function isYouTubeLink(url) {
    return url.includes('youtube.com') || url.includes('youtu.be');
}
function BlockNoteEditor(param) {
    let { initialContent = [], onChange, isDarkMode = true, className = "", readOnly = false, placeholder = "Enter text or type '/' for commands", onEditorReady, allowMedia = true } = param;
    _s();
    const locale = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$blocknote$2b$core$40$0$2e$24$2e$2_$40$types$2b$hast$40$3$2e$0$2e$4$2f$node_modules$2f40$blocknote$2f$core$2f$dist$2f$blocknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locales"]["en"];
    const editorContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isUpdatingContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Replace the boolean showToast with a toast object
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        title: '',
        description: '',
        emoji: ''
    });
    // Add a timeout ref to store the timeout ID
    const toastTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Extract blocks we don't want based on configuration
    let enabledBlocks;
    if (allowMedia) {
        // If media is allowed, exclude only these blocks
        const { table, file, ...allowedBlockSpecs } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$blocknote$2b$core$40$0$2e$24$2e$2_$40$types$2b$hast$40$3$2e$0$2e$4$2f$node_modules$2f40$blocknote$2f$core$2f$dist$2f$blocknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultBlockSpecs"];
        enabledBlocks = allowedBlockSpecs;
    } else {
        // If media is not allowed, also exclude all media blocks
        const { table, video, audio, file, image, ...allowedBlockSpecs } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$blocknote$2b$core$40$0$2e$24$2e$2_$40$types$2b$hast$40$3$2e$0$2e$4$2f$node_modules$2f40$blocknote$2f$core$2f$dist$2f$blocknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultBlockSpecs"];
        enabledBlocks = allowedBlockSpecs;
    }
    // Create a schema with only the allowed blocks
    const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$blocknote$2b$core$40$0$2e$24$2e$2_$40$types$2b$hast$40$3$2e$0$2e$4$2f$node_modules$2f40$blocknote$2f$core$2f$dist$2f$blocknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockNoteSchema"].create({
        blockSpecs: enabledBlocks
    });
    // Creates a new editor instance with the custom schema
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$blocknote$2b$react$40$0$2e$24$2e$2_$40$ti_7a4f54769274384574accf8df543f8ed$2f$node_modules$2f40$blocknote$2f$react$2f$dist$2f$blocknote$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateBlockNote"])({
        initialContent: initialContent.length > 0 ? initialContent : undefined,
        uploadFile,
        resolveFileUrl,
        schema,
        dictionary: {
            ...locale,
            placeholders: {
                ...locale.placeholders,
                emptyDocument: placeholder
            }
        }
    });
    // Store the editor instance in a ref for later use
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlockNoteEditor.useEffect": ()=>{
            if (editor) {
                editorRef.current = editor;
            }
        }
    }["BlockNoteEditor.useEffect"], [
        editor
    ]);
    // Update the function to handle closing the toast
    const handleCloseToast = ()=>{
        setToast((prev)=>({
                ...prev,
                show: false
            }));
        // Clear any existing timeout
        if (toastTimeoutRef.current) {
            clearTimeout(toastTimeoutRef.current);
            toastTimeoutRef.current = null;
        }
    };
    // Update the effect that checks for YouTube links
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlockNoteEditor.useEffect": ()=>{
            if (editor && allowMedia) {
                const handleVideoBlockChange = {
                    "BlockNoteEditor.useEffect.handleVideoBlockChange": ()=>{
                        // Skip checking during programmatic updates
                        if (isUpdatingContent.current) return;
                        // Get all video blocks
                        const blocks = editor.document;
                        blocks.forEach({
                            "BlockNoteEditor.useEffect.handleVideoBlockChange": (block)=>{
                                // Check if this is a video block
                                // @ts-ignore - TypeScript doesn't recognize custom block types
                                if (block.type === "video") {
                                    var _block_props;
                                    // Check if the URL is a YouTube link
                                    // @ts-ignore - TypeScript doesn't recognize props on custom block types
                                    const videoUrl = ((_block_props = block.props) === null || _block_props === void 0 ? void 0 : _block_props.url) || "";
                                    if (videoUrl && isYouTubeLink(videoUrl)) {
                                        // Show toast with customized properties
                                        setToast({
                                            show: true,
                                            title: "Cannot embed YouTube videos yet",
                                            description: "Please use video file URLs (e.g. link to a mp4 file) instead",
                                            emoji: "🚫"
                                        });
                                        // Clear any existing timeout
                                        if (toastTimeoutRef.current) {
                                            clearTimeout(toastTimeoutRef.current);
                                        }
                                        // Set a new timeout to auto-hide the toast after 5 seconds
                                        toastTimeoutRef.current = setTimeout({
                                            "BlockNoteEditor.useEffect.handleVideoBlockChange": ()=>{
                                                setToast({
                                                    "BlockNoteEditor.useEffect.handleVideoBlockChange": (prev)=>({
                                                            ...prev,
                                                            show: false
                                                        })
                                                }["BlockNoteEditor.useEffect.handleVideoBlockChange"]);
                                            }
                                        }["BlockNoteEditor.useEffect.handleVideoBlockChange"], 5000);
                                    }
                                }
                            }
                        }["BlockNoteEditor.useEffect.handleVideoBlockChange"]);
                    }
                }["BlockNoteEditor.useEffect.handleVideoBlockChange"];
                // Listen for content changes to detect YouTube links
                editor.onEditorContentChange(handleVideoBlockChange);
                // Cleanup function to clear timeout when component unmounts
                return ({
                    "BlockNoteEditor.useEffect": ()=>{
                        if (toastTimeoutRef.current) {
                            clearTimeout(toastTimeoutRef.current);
                        }
                    }
                })["BlockNoteEditor.useEffect"];
            }
        }
    }["BlockNoteEditor.useEffect"], [
        editor,
        allowMedia
    ]);
    // Provide the editor instance to the parent component if onEditorReady is provided
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlockNoteEditor.useEffect": ()=>{
            if (onEditorReady && editor) {
                onEditorReady(editor);
            }
        }
    }["BlockNoteEditor.useEffect"], [
        editor,
        onEditorReady
    ]);
    // Update editor content when initialContent changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlockNoteEditor.useEffect": ()=>{
            if (editor && initialContent && initialContent.length > 0) {
                // Set flag to prevent triggering onChange during programmatic update
                isUpdatingContent.current = true;
                try {
                    // Only replace blocks if the content has actually changed
                    const currentContentStr = JSON.stringify(editor.document);
                    const newContentStr = JSON.stringify(initialContent);
                    if (currentContentStr !== newContentStr) {
                        editor.replaceBlocks(editor.document, initialContent);
                        lastContent.current = initialContent;
                    }
                } catch (error) {
                    console.error("Error updating editor content:", error);
                } finally{
                    // Reset flag after update
                    isUpdatingContent.current = false;
                }
            }
        }
    }["BlockNoteEditor.useEffect"], [
        editor,
        initialContent
    ]);
    // Handle content changes with debouncing to avoid rapid state updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlockNoteEditor.useEffect": ()=>{
            if (onChange && editor) {
                const handleChange = {
                    "BlockNoteEditor.useEffect.handleChange": ()=>{
                        // Prevent handling changes if we're currently updating content
                        if (isUpdatingContent.current) return;
                        const currentContent = editor.document;
                        onChange(currentContent);
                    }
                }["BlockNoteEditor.useEffect.handleChange"];
                // Add change listener
                editor.onEditorContentChange(handleChange);
            }
        }
    }["BlockNoteEditor.useEffect"], [
        editor,
        onChange
    ]);
    // Add a method to focus the editor
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlockNoteEditor.useEffect": ()=>{
            if (editor && editorRef.current) {
                // Add a focus method to the editor ref
                // Use a different name for the method to avoid potential name conflicts
                editorRef.current.focusEditor = ({
                    "BlockNoteEditor.useEffect": ()=>{
                        try {
                            var _editorContainerRef_current;
                            // Check if we're already focused to prevent recursion
                            const activeElement = document.activeElement;
                            const editorElement = (_editorContainerRef_current = editorContainerRef.current) === null || _editorContainerRef_current === void 0 ? void 0 : _editorContainerRef_current.querySelector('[contenteditable="true"]');
                            // Only focus if we're not already focused
                            if (editorElement && activeElement !== editorElement) {
                                editor.focus();
                            }
                        } catch (err) {
                            console.error("Error focusing editor:", err);
                        }
                    }
                })["BlockNoteEditor.useEffect"];
            }
        }
    }["BlockNoteEditor.useEffect"], [
        editor
    ]);
    // Add effect to handle clicks in the empty space of editor blocks
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlockNoteEditor.useEffect": ()=>{
            if (editor && editorContainerRef.current && !readOnly) {
                const handleEditorClick = {
                    "BlockNoteEditor.useEffect.handleEditorClick": (e)=>{
                        // Don't interfere with normal clicks on content
                        const target = e.target;
                        // Check if we're clicking on the editor container but not on an actual block content
                        const isEditorContainer = target.classList.contains('bn-block-content');
                        if (isEditorContainer) {
                            var _editorContainerRef_current;
                            // Find the closest block element to the click
                            const blockElements = (_editorContainerRef_current = editorContainerRef.current) === null || _editorContainerRef_current === void 0 ? void 0 : _editorContainerRef_current.querySelectorAll('.bn-block');
                            if (!blockElements || blockElements.length === 0) return;
                            // Find the block at the click position
                            let closestBlock = null;
                            let minDistance = Infinity;
                            blockElements.forEach({
                                "BlockNoteEditor.useEffect.handleEditorClick": (block)=>{
                                    const rect = block.getBoundingClientRect();
                                    // Check if the click is on the same line as this block (y-axis)
                                    if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
                                        const distance = Math.abs(e.clientY - (rect.top + rect.height / 2));
                                        if (distance < minDistance) {
                                            minDistance = distance;
                                            closestBlock = block;
                                        }
                                    }
                                }
                            }["BlockNoteEditor.useEffect.handleEditorClick"]);
                            if (closestBlock) {
                                // Explicitly reassert the type right where we need it
                                const block = closestBlock;
                                // Get the editable element within the block
                                const editableContent = block.querySelector('.bn-inline-content');
                                if (editableContent) {
                                    // Focus and place cursor at the end
                                    editableContent.focus();
                                    // Set selection to the end of the content
                                    const range = document.createRange();
                                    const sel = window.getSelection();
                                    range.selectNodeContents(editableContent);
                                    range.collapse(false); // false means collapse to end
                                    if (sel) {
                                        sel.removeAllRanges();
                                        sel.addRange(range);
                                    }
                                    e.preventDefault();
                                    e.stopPropagation();
                                }
                            }
                        }
                    }
                }["BlockNoteEditor.useEffect.handleEditorClick"];
                const editorContainer = editorContainerRef.current;
                editorContainer.addEventListener('click', handleEditorClick);
                return ({
                    "BlockNoteEditor.useEffect": ()=>{
                        editorContainer.removeEventListener('click', handleEditorClick);
                    }
                })["BlockNoteEditor.useEffect"];
            }
        }
    }["BlockNoteEditor.useEffect"], [
        editor,
        readOnly
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: editorContainerRef,
        className: "h-full dark-editor-container ".concat(className),
        // Add click handler to prevent event propagation
        onClick: (e)=>{
            e.stopPropagation();
        },
        // Prevent mousedown from bubbling up which can cause focus issues
        onMouseDown: (e)=>{
            e.stopPropagation();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$blocknote$2b$mantine$40$0$2e$24$2e$2_$40$_b697ee42125c36cc7dc7cb4de5c4067a$2f$node_modules$2f40$blocknote$2f$mantine$2f$dist$2f$blocknote$2d$mantine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockNoteView"], {
                editor: editor,
                theme: isDarkMode ? "dark" : "light",
                className: isDarkMode ? "dark-editor" : "",
                editable: !readOnly
            }, void 0, false, {
                fileName: "[project]/src/components/BlockNoteEditor.tsx",
                lineNumber: 433,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                show: toast.show,
                title: toast.title,
                description: toast.description,
                emoji: toast.emoji,
                onClose: handleCloseToast
            }, void 0, false, {
                fileName: "[project]/src/components/BlockNoteEditor.tsx",
                lineNumber: 441,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BlockNoteEditor.tsx",
        lineNumber: 421,
        columnNumber: 9
    }, this);
}
_s(BlockNoteEditor, "/0HTYHBNouHXREqPEj/O4yrpRDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$blocknote$2b$react$40$0$2e$24$2e$2_$40$ti_7a4f54769274384574accf8df543f8ed$2f$node_modules$2f40$blocknote$2f$react$2f$dist$2f$blocknote$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateBlockNote"]
    ];
});
_c = BlockNoteEditor;
var _c;
__turbopack_context__.k.register(_c, "BlockNoteEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PublishConfirmationDialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ConfirmationDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$datepicker$40$8$2e$4$2e$0_reac_4f3984e4bf0a90fce0103bc21df8c5a7$2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-datepicker@8.4.0_reac_4f3984e4bf0a90fce0103bc21df8c5a7/node_modules/react-datepicker/dist/index.es.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const PublishConfirmationDialog = (param)=>{
    let { show, onConfirm, onCancel, isLoading = false, errorMessage = null, title, message } = param;
    _s();
    // State for scheduling
    const [scheduleForLater, setScheduleForLater] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scheduledDate, setScheduledDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Validate scheduled date
    const verifyScheduledDateAndSchedulePublish = (date)=>{
        if (!date) {
            return;
        }
        if (date < new Date()) {
            return; // Don't allow dates in the past
        }
        setScheduledDate(date);
    };
    // Reset scheduling state when dialog is closed
    if (!show) {
        if (scheduleForLater) setScheduleForLater(false);
        if (scheduledDate) setScheduledDate(null);
    }
    // Handle confirmation with scheduling data
    const handleConfirm = ()=>{
        let scheduledDateISOString = null;
        if (scheduleForLater && scheduledDate) {
            scheduledDateISOString = scheduledDate.toISOString();
        }
        onConfirm(scheduledDateISOString);
    };
    // Render the scheduler UI
    const renderScheduleOptions = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center ".concat(scheduleForLater ? 'mb-3' : ''),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            id: "schedule-for-later",
                            checked: scheduleForLater,
                            onChange: (e)=>{
                                setScheduleForLater(e.target.checked);
                                // Set default scheduled date to tomorrow at same time if nothing is set
                                if (e.target.checked && !scheduledDate) {
                                    const tomorrow = new Date();
                                    tomorrow.setDate(tomorrow.getDate() + 1);
                                    setScheduledDate(tomorrow);
                                }
                            },
                            className: "mr-2 h-4 w-4 cursor-pointer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PublishConfirmationDialog.tsx",
                            lineNumber: 62,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "schedule-for-later",
                            className: "text-white cursor-pointer flex items-center",
                            children: "Schedule time to publish"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PublishConfirmationDialog.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PublishConfirmationDialog.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                scheduleForLater && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$datepicker$40$8$2e$4$2e$0_reac_4f3984e4bf0a90fce0103bc21df8c5a7$2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    selected: scheduledDate,
                    onChange: (date)=>verifyScheduledDateAndSchedulePublish(date),
                    showTimeSelect: true,
                    timeFormat: "HH:mm",
                    timeIntervals: 15,
                    dateFormat: "MMMM d, yyyy h:mm aa",
                    timeCaption: "Time",
                    minDate: new Date(),
                    className: "bg-[#333333] rounded-md p-2 px-4 w-full text-white cursor-pointer",
                    wrapperClassName: "w-full",
                    calendarClassName: "bg-[#242424] text-white border border-gray-700 rounded-lg shadow-lg cursor-pointer"
                }, void 0, false, {
                    fileName: "[project]/src/components/PublishConfirmationDialog.tsx",
                    lineNumber: 83,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PublishConfirmationDialog.tsx",
            lineNumber: 60,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmationDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        open: show,
        title: title,
        message: message,
        onConfirm: handleConfirm,
        onCancel: onCancel,
        isLoading: isLoading,
        errorMessage: errorMessage,
        type: "publish",
        confirmButtonText: scheduleForLater ? "Schedule" : "Publish Now",
        children: renderScheduleOptions()
    }, void 0, false, {
        fileName: "[project]/src/components/PublishConfirmationDialog.tsx",
        lineNumber: 102,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PublishConfirmationDialog, "RUaLl4ly7v6ZS1K9zzOFASz/akA=");
_c = PublishConfirmationDialog;
const __TURBOPACK__default__export__ = PublishConfirmationDialog;
var _c;
__turbopack_context__.k.register(_c, "PublishConfirmationDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/LearningMaterialEditor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Import the BlockNoteEditor component
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlockNoteEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BlockNoteEditor.tsx [app-client] (ecmascript)");
// Add import for PublishConfirmationDialog
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
// Use forwardRef to pass the ref from parent to this component
const LearningMaterialEditor = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s((param, ref)=>{
    let { onChange, isDarkMode = true, className = "", readOnly = false, viewOnly = false, showPublishConfirmation = false, onPublishConfirm, onPublishCancel, taskId, userId = '', onPublishSuccess, onSaveSuccess, scheduledPublishAt = null } = param;
    _s();
    const editorContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPublishing, setIsPublishing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [publishError, setPublishError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [taskData, setTaskData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [editorContent, setEditorContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Reference to the editor instance
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Add a ref to store the original data for reverting on cancel
    const originalDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Function to set the editor reference
    const setEditorInstance = (editor)=>{
        editorRef.current = editor;
    };
    // Handle editor changes
    const handleEditorChange = (content)=>{
        // Avoid unnecessary state updates if content hasn't changed
        if (JSON.stringify(content) !== JSON.stringify(editorContent)) {
            setEditorContent(content);
            if (onChange && !isPublishing) {
                onChange(content);
            }
        }
    };
    const initialContent = (taskData === null || taskData === void 0 ? void 0 : taskData.blocks) && taskData.blocks.length > 0 ? taskData.blocks : undefined;
    // Fetch task data when taskId changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearningMaterialEditor.useEffect": ()=>{
            if (taskId) {
                setIsLoading(true);
                // Use AbortController to cancel any in-flight requests
                const controller = new AbortController();
                fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/tasks/").concat(taskId), {
                    signal: controller.signal
                }).then({
                    "LearningMaterialEditor.useEffect": (response)=>{
                        if (!response.ok) {
                            throw new Error("Failed to fetch task: ".concat(response.status));
                        }
                        return response.json();
                    }
                }["LearningMaterialEditor.useEffect"]).then({
                    "LearningMaterialEditor.useEffect": (data)=>{
                        // We only use the data fetched from our own API call
                        // Title updates only happen after publishing, not during editing
                        if (!data.blocks || data.blocks.length === 0) {
                            data.blocks = [
                                {
                                    type: "heading",
                                    props: {
                                        level: 2
                                    },
                                    content: [
                                        {
                                            "text": "Welcome to the Learning material editor!",
                                            "type": "text",
                                            styles: {}
                                        }
                                    ]
                                },
                                {
                                    type: "paragraph",
                                    content: [
                                        {
                                            "text": "This is where you will create your learning material. You can either modify this template or remove it entirely to start from scratch.",
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
                                            "text": "Key Features",
                                            "type": "text",
                                            styles: {}
                                        }
                                    ]
                                },
                                {
                                    type: "bulletListItem",
                                    content: [
                                        {
                                            "text": "Add new blocks by clicking the + icon that appears between blocks",
                                            "type": "text",
                                            styles: {}
                                        }
                                    ]
                                },
                                {
                                    type: "bulletListItem",
                                    content: [
                                        {
                                            "text": "Reorder blocks using the side menu (hover near the left edge of any block and drag the button with 6 dots to reorder)",
                                            "type": "text",
                                            styles: {}
                                        }
                                    ]
                                },
                                {
                                    type: "bulletListItem",
                                    content: [
                                        {
                                            "text": "Format text using the toolbar that appears when you select text",
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
                                            "text": "Here are examples of nested content:",
                                            "type": "text",
                                            styles: {}
                                        }
                                    ]
                                },
                                {
                                    type: "paragraph",
                                    content: [
                                        {
                                            "text": "Nested Lists Example",
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
                                    type: "bulletListItem",
                                    content: [
                                        {
                                            "text": "Main topic 2",
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
                                            "text": "Nested Numbered Lists",
                                            "type": "text",
                                            styles: {
                                                "bold": true
                                            }
                                        }
                                    ]
                                },
                                {
                                    type: "numberedListItem",
                                    content: [
                                        {
                                            "text": "First step",
                                            "type": "text",
                                            styles: {}
                                        }
                                    ],
                                    children: [
                                        {
                                            type: "numberedListItem",
                                            props: {
                                                indent: 1
                                            },
                                            content: [
                                                {
                                                    "text": "Substep 1.1 (indented with Tab)",
                                                    "type": "text",
                                                    styles: {}
                                                }
                                            ]
                                        },
                                        {
                                            type: "numberedListItem",
                                            props: {
                                                indent: 1
                                            },
                                            content: [
                                                {
                                                    "text": "Substep 1.2",
                                                    "type": "text",
                                                    styles: {}
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: "numberedListItem",
                                    content: [
                                        {
                                            "text": "Second step",
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
                                            "text": "Tips for working with nested content:",
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
                                            "text": "To unnest/outdent an item, press Shift+Tab",
                                            "type": "text",
                                            styles: {}
                                        }
                                    ]
                                },
                                {
                                    type: "bulletListItem",
                                    content: [
                                        {
                                            "text": "You can mix bullet and numbered lists in your nesting hierarchy",
                                            "type": "text",
                                            styles: {}
                                        }
                                    ]
                                },
                                {
                                    type: "bulletListItem",
                                    content: [
                                        {
                                            "text": "Nesting helps create a clear organizational structure for complex topics",
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
                                            "text": "Publishing Your Content",
                                            "type": "text",
                                            styles: {}
                                        }
                                    ]
                                },
                                {
                                    type: "paragraph",
                                    content: [
                                        {
                                            "text": "When you are ready to make your content available to learners, click the Publish button. You can always edit and republish your content later.",
                                            "type": "text",
                                            styles: {}
                                        }
                                    ]
                                },
                                {
                                    type: "paragraph",
                                    content: [
                                        {
                                            "text": "Feel free to delete or modify this template to create your own learning material!",
                                            "type": "text",
                                            styles: {}
                                        }
                                    ]
                                }
                            ];
                        }
                        setTaskData(data);
                        // Store the original data for reverting on cancel
                        originalDataRef.current = {
                            ...data
                        };
                        // Initialize editorContent with the blocks from taskData
                        if (data.blocks && data.blocks.length > 0) {
                            setEditorContent(data.blocks);
                        }
                        setIsLoading(false);
                    }
                }["LearningMaterialEditor.useEffect"]).catch({
                    "LearningMaterialEditor.useEffect": (error)=>{
                        // Ignore AbortError as it's expected when navigating away
                        if (error.name !== 'AbortError') {
                            console.error("Error fetching task data:", error);
                        }
                        setIsLoading(false);
                    }
                }["LearningMaterialEditor.useEffect"]);
                // Clean up function will abort the fetch if the component unmounts
                // or if the effect runs again (i.e., taskId changes)
                return ({
                    "LearningMaterialEditor.useEffect": ()=>{
                        controller.abort();
                    }
                })["LearningMaterialEditor.useEffect"];
            } else {
                // If no taskId is provided, set loading to false immediately
                // so the component can render the editor
                setIsLoading(false);
            }
        }
    }["LearningMaterialEditor.useEffect"], [
        taskId
    ]);
    // Handle cancel in edit mode - revert to original data
    const handleCancel = ()=>{
        var _document_querySelector_parentElement, _document_querySelector;
        if (!originalDataRef.current) return;
        // Restore the original data
        setTaskData(originalDataRef.current);
        // Return the original title to the dialog header
        const dialogTitleElement = (_document_querySelector = document.querySelector('.dialog-content-editor')) === null || _document_querySelector === void 0 ? void 0 : (_document_querySelector_parentElement = _document_querySelector.parentElement) === null || _document_querySelector_parentElement === void 0 ? void 0 : _document_querySelector_parentElement.querySelector('h2');
        if (dialogTitleElement && originalDataRef.current.title) {
            dialogTitleElement.textContent = originalDataRef.current.title;
        }
    };
    const handleConfirmPublish = async (scheduledPublishAt)=>{
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
            const currentTitle = (dialogTitleElement === null || dialogTitleElement === void 0 ? void 0 : dialogTitleElement.textContent) || (taskData === null || taskData === void 0 ? void 0 : taskData.title) || "";
            // Use the current editor content
            const currentContent = editorContent.length > 0 ? editorContent : (taskData === null || taskData === void 0 ? void 0 : taskData.blocks) || [];
            // Add scheduled publishing data if selected
            const publishData = {
                title: currentTitle,
                blocks: currentContent,
                scheduled_publish_at: scheduledPublishAt
            };
            // Make POST request to publish the learning material content
            const response = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/tasks/").concat(taskId, "/learning_material"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(publishData)
            });
            if (!response.ok) {
                throw new Error("Failed to publish learning material: ".concat(response.status));
            }
            // Get the updated task data from the response
            const updatedTaskData = await response.json();
            // Ensure the status is set correctly based on scheduled status
            const publishedTaskData = {
                ...updatedTaskData,
                status: 'published',
                title: currentTitle,
                scheduled_publish_at: scheduledPublishAt // Include scheduled date
            };
            // Update our local state with the data from the API
            setTaskData(publishedTaskData);
            // First set publishing to false to avoid state updates during callbacks
            setIsPublishing(false);
            // Call the original onPublishConfirm callback if provided
            if (onPublishConfirm) {
                onPublishConfirm();
            }
            // Call the onPublishSuccess callback if provided
            if (onPublishSuccess) {
                // Use setTimeout to break the current render cycle
                setTimeout(()=>{
                    onPublishSuccess(publishedTaskData);
                }, 0);
            }
        } catch (error) {
            console.error("Error publishing learning material:", error);
            setPublishError(error instanceof Error ? error.message : "Failed to publish learning material");
            setIsPublishing(false);
        }
    };
    const handleCancelPublish = ()=>{
        setPublishError(null);
        if (onPublishCancel) {
            onPublishCancel();
        }
    };
    // Handle saving changes when in edit mode
    const handleSave = async ()=>{
        if (!taskId) {
            console.error("Cannot save: taskId is not provided");
            return;
        }
        try {
            var _document_querySelector_parentElement, _document_querySelector;
            // Get the current title from the dialog - it may have been edited
            const dialogTitleElement = (_document_querySelector = document.querySelector('.dialog-content-editor')) === null || _document_querySelector === void 0 ? void 0 : (_document_querySelector_parentElement = _document_querySelector.parentElement) === null || _document_querySelector_parentElement === void 0 ? void 0 : _document_querySelector_parentElement.querySelector('h2');
            const currentTitle = (dialogTitleElement === null || dialogTitleElement === void 0 ? void 0 : dialogTitleElement.textContent) || (taskData === null || taskData === void 0 ? void 0 : taskData.title) || "";
            // Use the current editor content
            const currentContent = editorContent.length > 0 ? editorContent : (taskData === null || taskData === void 0 ? void 0 : taskData.blocks) || [];
            // Use the scheduledPublishAt prop instead of taskData.scheduled_publish_at
            const currentScheduledPublishAt = scheduledPublishAt !== undefined ? scheduledPublishAt : (taskData === null || taskData === void 0 ? void 0 : taskData.scheduled_publish_at) || null;
            // Make POST request to update the learning material content, keeping the same status
            const response = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/tasks/").concat(taskId, "/learning_material"), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: currentTitle,
                    blocks: currentContent,
                    scheduled_publish_at: currentScheduledPublishAt,
                    status: taskData === null || taskData === void 0 ? void 0 : taskData.status
                })
            });
            if (!response.ok) {
                throw new Error("Failed to save learning material: ".concat(response.status));
            }
            // Get the updated task data from the response
            const updatedTaskData = await response.json();
            // Create updated data with the current title
            const updatedData = {
                ...updatedTaskData,
                title: currentTitle // Use the current title from the dialog
            };
            // Update our local state with the data from the API
            setTaskData(updatedData);
            // Call the onSaveSuccess callback if provided
            if (onSaveSuccess) {
                // Use setTimeout to break the current render cycle
                setTimeout(()=>{
                    onSaveSuccess(updatedData);
                }, 0);
            }
        } catch (error) {
            console.error("Error saving learning material:", error);
        }
    };
    // Update the content when it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearningMaterialEditor.useEffect": ()=>{
            if (onChange && (taskData === null || taskData === void 0 ? void 0 : taskData.blocks)) {
                onChange(taskData.blocks);
            }
        }
    }["LearningMaterialEditor.useEffect"], [
        taskData === null || taskData === void 0 ? void 0 : taskData.blocks,
        onChange
    ]);
    // Expose methods via the forwarded ref
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "LearningMaterialEditor.useImperativeHandle": ()=>({
                save: handleSave,
                cancel: handleCancel,
                hasContent: ({
                    "LearningMaterialEditor.useImperativeHandle": ()=>{
                        // First check the editorContent state
                        const checkContent = {
                            "LearningMaterialEditor.useImperativeHandle.checkContent": (content)=>{
                                if (!content || content.length === 0) return false;
                                // Check if there are any blocks beyond the first default paragraph
                                if (content.length > 1) return true;
                                // If there's only one block, check if it has actual content
                                if (content.length === 1) {
                                    const block = content[0];
                                    // Use stringify to check if there's actual content
                                    const blockContent = JSON.stringify(block.content);
                                    // Check if it's not just an empty paragraph
                                    if (blockContent && blockContent !== '{}' && blockContent !== '[]' && blockContent !== 'null' && blockContent !== '{"text":[]}' && blockContent !== '{"text":""}') {
                                        return true;
                                    }
                                }
                                return false;
                            }
                        }["LearningMaterialEditor.useImperativeHandle.checkContent"];
                        // First check editorContent (which might be updated if user made changes)
                        if (checkContent(editorContent)) {
                            return true;
                        }
                        // If editorContent is empty but we have taskData, check that as a fallback
                        if (taskData === null || taskData === void 0 ? void 0 : taskData.blocks) {
                            return checkContent(taskData.blocks);
                        }
                        return false;
                    }
                })["LearningMaterialEditor.useImperativeHandle"],
                hasChanges: ({
                    "LearningMaterialEditor.useImperativeHandle": ()=>{
                        var _document_querySelector_parentElement, _document_querySelector;
                        // If we don't have original data to compare with, assume no changes
                        if (!originalDataRef.current) return false;
                        // Check if title has changed
                        const dialogTitleElement = (_document_querySelector = document.querySelector('.dialog-content-editor')) === null || _document_querySelector === void 0 ? void 0 : (_document_querySelector_parentElement = _document_querySelector.parentElement) === null || _document_querySelector_parentElement === void 0 ? void 0 : _document_querySelector_parentElement.querySelector('h2');
                        const currentTitle = (dialogTitleElement === null || dialogTitleElement === void 0 ? void 0 : dialogTitleElement.textContent) || "";
                        const originalTitle = originalDataRef.current.title || "";
                        if (currentTitle !== originalTitle) {
                            return true;
                        }
                        // Check if content has changed
                        const originalContent = originalDataRef.current.blocks || [];
                        // Convert both to JSON strings for deep comparison
                        const currentContentStr = JSON.stringify(editorContent);
                        const originalContentStr = JSON.stringify(originalContent);
                        // Return true if there are changes
                        return currentContentStr !== originalContentStr;
                    }
                })["LearningMaterialEditor.useImperativeHandle"]
            })
    }["LearningMaterialEditor.useImperativeHandle"]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-testid": "editor-loading-spinner",
                className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white",
                "aria-label": "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/components/LearningMaterialEditor.tsx",
                lineNumber: 585,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/LearningMaterialEditor.tsx",
            lineNumber: 584,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full ".concat(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col my-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "editor-container h-full min-h-screen overflow-y-auto overflow-hidden relative z-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlockNoteEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        initialContent: initialContent,
                        onChange: handleEditorChange,
                        isDarkMode: isDarkMode,
                        readOnly: readOnly,
                        className: "dark-editor min-h-screen",
                        onEditorReady: setEditorInstance
                    }, void 0, false, {
                        fileName: "[project]/src/components/LearningMaterialEditor.tsx",
                        lineNumber: 599,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/LearningMaterialEditor.tsx",
                    lineNumber: 598,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/LearningMaterialEditor.tsx",
                lineNumber: 597,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PublishConfirmationDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                show: showPublishConfirmation,
                title: "Ready to publish?",
                message: "Make sure your content is complete and reviewed for errors before publishing",
                onConfirm: handleConfirmPublish,
                onCancel: handleCancelPublish,
                isLoading: isPublishing,
                errorMessage: publishError
            }, void 0, false, {
                fileName: "[project]/src/components/LearningMaterialEditor.tsx",
                lineNumber: 611,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LearningMaterialEditor.tsx",
        lineNumber: 596,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
}, "YvS8dhj1OphuL6x7sotWNSd84Jk=")), "YvS8dhj1OphuL6x7sotWNSd84Jk=");
_c1 = LearningMaterialEditor;
// Add display name for better debugging
LearningMaterialEditor.displayName = 'LearningMaterialEditor';
const __TURBOPACK__default__export__ = LearningMaterialEditor;
var _c, _c1;
__turbopack_context__.k.register(_c, "LearningMaterialEditor$forwardRef");
__turbopack_context__.k.register(_c1, "LearningMaterialEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/LearningMaterialEditor.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/LearningMaterialEditor.tsx [app-client] (ecmascript)"));
}),
}]);

//# sourceMappingURL=src_components_729110a6._.js.map