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
"[project]/src/lib/utils/localStorage.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Safe localStorage wrapper to handle SSR and errors
__turbopack_context__.s({
    "safeLocalStorage": ()=>safeLocalStorage
});
const safeLocalStorage = {
    getItem: (key)=>{
        try {
            if ("TURBOPACK compile-time truthy", 1) {
                return localStorage.getItem(key);
            }
        } catch (error) {
            console.error('Error accessing localStorage:', error);
        }
        return null;
    },
    setItem: (key, value)=>{
        try {
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem(key, value);
            }
        } catch (error) {
            console.error('Error writing to localStorage:', error);
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ChatPlaceholderView.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ChatPlaceholderView = (param)=>{
    let { taskType, isChatHistoryLoaded, isTestMode, inputType = 'text', viewOnly = false, responseType = 'chat' } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center h-full w-full",
        children: !isChatHistoryLoaded && !isTestMode ? // Loading spinner while chat history is loading
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-10 h-10 border-2 border-white border-t-transparent rounded-full animate-spin mb-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ChatPlaceholderView.tsx",
                lineNumber: 25,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ChatPlaceholderView.tsx",
            lineNumber: 24,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0)) : // Show placeholder text only when history is loaded but empty
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl font-light text-white mb-6 text-center",
                    children: viewOnly ? 'No activity yet' : taskType === 'learning_material' ? 'Have a question?' : responseType === 'exam' ? 'Ready to test your knowledge?' : 'Ready for a challenge?'
                }, void 0, false, {
                    fileName: "[project]/src/components/ChatPlaceholderView.tsx",
                    lineNumber: 30,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-400 text-center max-w-md mx-6 sm:mx-auto mb-8",
                    children: viewOnly ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "There is no chat history for this quiz"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatPlaceholderView.tsx",
                        lineNumber: 42,
                        columnNumber: 31
                    }, ("TURBOPACK compile-time value", void 0)) : taskType === 'learning_material' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Ask your doubt here and AI will help you understand the material better"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatPlaceholderView.tsx",
                        lineNumber: 44,
                        columnNumber: 35
                    }, ("TURBOPACK compile-time value", void 0)) : responseType === 'exam' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1a1a1a] rounded-xl px-6 py-5 flex flex-col items-center justify-center max-w-lg mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-400 text-lg",
                                        style: {
                                            fontWeight: 300
                                        },
                                        children: "●"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatPlaceholderView.tsx",
                                        lineNumber: 49,
                                        columnNumber: 49
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-400 font-light text-base",
                                        children: "One-time Submission"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatPlaceholderView.tsx",
                                        lineNumber: 50,
                                        columnNumber: 49
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatPlaceholderView.tsx",
                                lineNumber: 48,
                                columnNumber: 45
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-300 font-light text-center mt-1",
                                children: inputType === 'code' ? "Think through your answer carefully, then write your code in the code editor. You can attempt the question only once. Be careful and confident." : "Think through your answer carefully, then ".concat(inputType === 'audio' ? 'record' : 'type', " it here. You can attempt the question only once. Be careful and confident.")
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatPlaceholderView.tsx",
                                lineNumber: 52,
                                columnNumber: 45
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatPlaceholderView.tsx",
                        lineNumber: 47,
                        columnNumber: 41
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: inputType === 'code' ? "Think through your answer, then write your code in the code editor. You can also type your response below if you want to ask or say something that is not code. You will receive instant feedback and support throughout your journey" : "Think through your answer, then ".concat(inputType === 'audio' ? 'record' : 'type', " it here. You will receive instant feedback and support throughout your journey")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatPlaceholderView.tsx",
                        lineNumber: 60,
                        columnNumber: 41
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ChatPlaceholderView.tsx",
                    lineNumber: 40,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/ChatPlaceholderView.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ChatPlaceholderView;
const __TURBOPACK__default__export__ = ChatPlaceholderView;
var _c;
__turbopack_context__.k.register(_c, "ChatPlaceholderView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ChatHistoryView.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.28.0_react@19.1.1/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-markdown@10.1.0_@types+react@19.1.9_react@19.1.1/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$gfm$40$4$2e$0$2e$1$2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/remark-gfm@4.0.1/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
// Code message display component
const CodeMessageDisplay = (param)=>{
    let { code, language } = param;
    // Check if the code contains language headers (e.g., "// JAVASCRIPT", "// HTML", etc.)
    const hasLanguageHeaders = code.includes('// ') && code.includes('\n');
    if (hasLanguageHeaders) {
        // Split the code by language sections
        const sections = code.split(/\/\/ ([A-Z]+)\n/).filter(Boolean);
        // Create an array of [language, code] pairs
        const languageSections = [];
        for(let i = 0; i < sections.length; i += 2){
            if (i + 1 < sections.length) {
                languageSections.push([
                    sections[i],
                    sections[i + 1]
                ]);
            }
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full rounded bg-[#1D1D1D] overflow-hidden",
            children: languageSections.map((param, index)=>{
                let [lang, codeSection] = param;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-2 last:mb-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between bg-[#2D2D2D] px-3 py-1.5 text-xs text-gray-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: lang
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatHistoryView.tsx",
                                lineNumber: 28,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChatHistoryView.tsx",
                            lineNumber: 27,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "p-3 overflow-x-auto text-xs text-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: codeSection
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatHistoryView.tsx",
                                lineNumber: 31,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChatHistoryView.tsx",
                            lineNumber: 30,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/ChatHistoryView.tsx",
                    lineNumber: 26,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/src/components/ChatHistoryView.tsx",
            lineNumber: 24,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    // If no language headers, display as a single code block
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full rounded bg-[#1D1D1D] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between bg-[#2D2D2D] px-3 py-1.5 text-xs text-gray-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: language || 'code'
                }, void 0, false, {
                    fileName: "[project]/src/components/ChatHistoryView.tsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ChatHistoryView.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                className: "p-3 overflow-x-auto text-xs text-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    children: code
                }, void 0, false, {
                    fileName: "[project]/src/components/ChatHistoryView.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ChatHistoryView.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChatHistoryView.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CodeMessageDisplay;
const ChatHistoryView = (param)=>{
    let { chatHistory, onViewScorecard, isAiResponding, showPreparingReport, currentQuestionConfig, taskType, onRetry, showLearnerView = false, onShowLearnerViewChange, isAdminView = false } = param;
    _s();
    const chatContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // State for current thinking message
    const [currentThinkingMessage, setCurrentThinkingMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // State to track animation transition
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Ref to store the interval ID for proper cleanup
    const messageIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Ref to store the timeout ID for proper cleanup
    const transitionTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Ref to store the current thinking message to avoid dependency issues
    const currentThinkingMessageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    // Ref to track if initial message has been set
    const initialMessageSetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Preset list of thinking messages for the AI typing animation
    const thinkingMessages = taskType === 'learning_material' ? [
        "Thinking",
        "Preparing a response",
        "Gathering relevant details",
        "Crafting a clear explanation",
        "Finding the best way to help",
        "Putting together a helpful answer"
    ] : [
        "Analyzing your response",
        "Thinking",
        "Processing your answer",
        "Considering different angles",
        "Evaluating your submission",
        "Looking at your approach",
        "Checking against criteria",
        "Formulating feedback",
        "Preparing a thoughtful response",
        "Finding the best way to help",
        "Reflecting on your answer",
        "Connecting the dots",
        "Crafting personalized feedback",
        "Examining your reasoning",
        "Assessing key concepts"
    ];
    // Update the ref when the state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatHistoryView.useEffect": ()=>{
            currentThinkingMessageRef.current = currentThinkingMessage;
        }
    }["ChatHistoryView.useEffect"], [
        currentThinkingMessage
    ]);
    // Effect to change the thinking message every 2 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatHistoryView.useEffect": ()=>{
            // Only set up the interval if AI is responding
            if (!isAiResponding) {
                // Clear any existing intervals/timeouts when AI stops responding
                if (messageIntervalRef.current) {
                    clearInterval(messageIntervalRef.current);
                    messageIntervalRef.current = null;
                }
                if (transitionTimeoutRef.current) {
                    clearTimeout(transitionTimeoutRef.current);
                    transitionTimeoutRef.current = null;
                }
                // Reset the initial message flag when AI stops responding
                initialMessageSetRef.current = false;
                return;
            }
            // Set initial message only if it hasn't been set yet
            if (!initialMessageSetRef.current) {
                const randomMessage = thinkingMessages[Math.floor(Math.random() * thinkingMessages.length)];
                setCurrentThinkingMessage(randomMessage);
                setIsTransitioning(false);
                initialMessageSetRef.current = true;
            }
            // Set interval to change message every 2 seconds
            messageIntervalRef.current = setInterval({
                "ChatHistoryView.useEffect": ()=>{
                    // First set transition state to true (starting the fade-out)
                    setIsTransitioning(true);
                    // After a short delay, change the message and reset transition state
                    transitionTimeoutRef.current = setTimeout({
                        "ChatHistoryView.useEffect": ()=>{
                            // Get current message from the ref to avoid dependency issues
                            const currentMessage = currentThinkingMessageRef.current;
                            // Filter out the current message to avoid repetition
                            const availableMessages = thinkingMessages.filter({
                                "ChatHistoryView.useEffect.availableMessages": (msg)=>msg !== currentMessage
                            }["ChatHistoryView.useEffect.availableMessages"]);
                            // Select a random message from the filtered list
                            const newRandomIndex = Math.floor(Math.random() * availableMessages.length);
                            setCurrentThinkingMessage(availableMessages[newRandomIndex]);
                            // Reset transition state (starting the fade-in)
                            setIsTransitioning(false);
                        }
                    }["ChatHistoryView.useEffect"], 200); // Short delay for the transition effect
                }
            }["ChatHistoryView.useEffect"], 2000);
            // Clean up interval and timeout on unmount or when dependencies change
            return ({
                "ChatHistoryView.useEffect": ()=>{
                    if (messageIntervalRef.current) {
                        clearInterval(messageIntervalRef.current);
                        messageIntervalRef.current = null;
                    }
                    if (transitionTimeoutRef.current) {
                        clearTimeout(transitionTimeoutRef.current);
                        transitionTimeoutRef.current = null;
                    }
                }
            })["ChatHistoryView.useEffect"];
        }
    }["ChatHistoryView.useEffect"], [
        isAiResponding
    ]);
    // Effect to scroll to the bottom of the chat when new messages are added
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatHistoryView.useEffect": ()=>{
            if (chatContainerRef.current) {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }
        }
    }["ChatHistoryView.useEffect"], [
        chatHistory
    ]);
    // Custom styles for the animations
    const customStyles = "\n    @keyframes pulsate {\n      0% {\n        transform: scale(0.9);\n        opacity: 0.8;\n      }\n      50% {\n        transform: scale(1.1);\n        opacity: 0.6;\n      }\n      100% {\n        transform: scale(0.9);\n        opacity: 0.8;\n      }\n    }\n    \n    .pulsating-circle {\n      animation: pulsate 1.5s ease-in-out infinite;\n    }\n\n    @keyframes highlightText {\n      0% {\n        background-position: -200% center;\n      }\n      100% {\n        background-position: 300% center;\n      }\n    }\n\n    .highlight-animation {\n      background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 50%, \n      rgba(255,255,255,0) 75%);\n      background-size: 200% auto;\n      color: rgba(255, 255, 255, 0.6);\n      background-clip: text;\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n      animation: highlightText 2s linear infinite;\n      transition: opacity 0.2s ease-in-out;\n    }\n\n    .message-transition-out {\n      opacity: 0.5;\n    }\n\n    .message-transition-in {\n      opacity: 1;\n    }\n    \n    /* Add custom word break for long words */\n    .break-anywhere {\n      overflow-wrap: break-word;\n      word-wrap: break-word;\n      word-break: break-word;\n      hyphens: none;\n    }\n    ";
    // Helper to determine if "View Report" button should be shown
    const shouldShowViewReport = (message)=>{
        // Check if message is from AI and has scorecard data
        return message.sender === 'ai' && message.scorecard && message.scorecard.length > 0 && // Check if the current question is configured for report responses
        (currentQuestionConfig === null || currentQuestionConfig === void 0 ? void 0 : currentQuestionConfig.questionType) === 'subjective';
    };
    // Helper to check if a message is an error message
    const isErrorMessage = (message)=>{
        return message.sender === 'ai' && message.isError;
    };
    // Find the last AI message index
    const lastAiMessageIndex = chatHistory.reduce((lastIndex, message, index)=>{
        return message.sender === 'ai' ? index : lastIndex;
    }, -1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: customStyles.__hash,
                children: customStyles
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: chatContainerRef,
                className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "h-full overflow-y-auto w-full hide-scrollbar pb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "flex flex-col space-y-6 pr-2",
                    children: [
                        chatHistory.map((message, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "flex ".concat(message.sender === 'user' ? 'justify-end' : 'justify-start'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "rounded-2xl px-4 py-2 ".concat(message.messageType === 'audio' ? 'w-full sm:w-[75%]' : message.messageType === 'code' ? 'bg-[#282828] text-white w-[90%]' : "".concat(message.sender === 'user' ? 'bg-[#333333] text-white' : 'bg-[#1A1A1A] text-white', " max-w-[75%]")),
                                        children: [
                                            message.sender === 'ai' && index === lastAiMessageIndex && (currentQuestionConfig === null || currentQuestionConfig === void 0 ? void 0 : currentQuestionConfig.responseType) === 'exam' && onShowLearnerViewChange && isAdminView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "-mx-4 -mt-2 mb-4 px-4 pt-3 pb-2 rounded-t-2xl border-b border-[#35363a] ".concat(message.is_correct !== undefined ? message.is_correct ? 'bg-green-900/40' : 'bg-red-900/40' : 'bg-[#232428]'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "flex items-center",
                                                            children: [
                                                                message.is_correct !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "mr-2 w-5 h-5 rounded-full flex items-center justify-center ".concat(message.is_correct ? 'bg-green-600' : 'bg-red-600'),
                                                                    children: message.is_correct ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "w-3 h-3 text-white",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 3,
                                                                            d: "M5 13l4 4L19 7",
                                                                            className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                                            lineNumber: 313,
                                                                            columnNumber: 73
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                                        lineNumber: 312,
                                                                        columnNumber: 69
                                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "w-3 h-3 text-white",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 3,
                                                                            d: "M6 18L18 6M6 6l12 12",
                                                                            className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                                            lineNumber: 317,
                                                                            columnNumber: 73
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                                        lineNumber: 316,
                                                                        columnNumber: 69
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                                    lineNumber: 309,
                                                                    columnNumber: 61
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "text-sm text-gray-300 font-light select-none",
                                                                    children: "Show result"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                                    lineNumber: 322,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onShowLearnerViewChange(!showLearnerView),
                                                            "aria-pressed": !showLearnerView,
                                                            "aria-label": "Show result toggle",
                                                            className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "relative cursor-pointer inline-flex h-6 w-11 items-center rounded-full border transition-colors duration-200 focus:outline-none\n                                                            ".concat(!showLearnerView ? 'bg-white border-gray-400' : 'bg-[#444950] border-[#444950]', "\n                                                        "),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "inline-block h-5 w-5 transform rounded-full bg-black shadow-md transition-transform duration-200\n                                                                ".concat(!showLearnerView ? 'translate-x-5' : 'translate-x-1', "\n                                                            ")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                lineNumber: 300,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            message.messageType === 'audio' && message.audioData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "flex flex-col space-y-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                    controls: true,
                                                    src: "data:audio/wav;base64,".concat(message.audioData),
                                                    className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "w-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                lineNumber: 342,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)) : message.messageType === 'code' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeMessageDisplay, {
                                                code: message.content,
                                                language: Array.isArray(currentQuestionConfig === null || currentQuestionConfig === void 0 ? void 0 : currentQuestionConfig.codingLanguages) && (currentQuestionConfig === null || currentQuestionConfig === void 0 ? void 0 : currentQuestionConfig.codingLanguages.length) > 0 ? currentQuestionConfig === null || currentQuestionConfig === void 0 ? void 0 : currentQuestionConfig.codingLanguages[0] : undefined
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                lineNumber: 350,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash),
                                                children: [
                                                    message.sender === 'ai' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "text-sm font-sans break-words break-anywhere markdown-content",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                                                            remarkPlugins: [
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$gfm$40$4$2e$0$2e$1$2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                                                            ],
                                                            children: message.content
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                            lineNumber: 363,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "text-sm break-words whitespace-pre-wrap break-anywhere font-sans",
                                                        children: message.content
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    shouldShowViewReport(message) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "my-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onViewScorecard(message.scorecard || []),
                                                            className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "bg-[#333333] text-white px-4 py-2 rounded-full text-xs hover:bg-[#444444] transition-colors cursor-pointer flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "h-4 w-4 mr-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                                                                        className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                                        lineNumber: 379,
                                                                        columnNumber: 61
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                                    lineNumber: 378,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "View Report"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                            lineNumber: 374,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    isErrorMessage(message) && onRetry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "my-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: onRetry,
                                                            className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "bg-[#333333] text-white px-4 py-2 mb-2 rounded-full text-xs hover:bg-[#444444] transition-colors cursor-pointer flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "h-4 w-4 mr-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                                                                        className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                                        lineNumber: 392,
                                                                        columnNumber: 61
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                                    lineNumber: 391,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "Retry"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                            lineNumber: 387,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                lineNumber: 360,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChatHistoryView.tsx",
                                        lineNumber: 288,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChatHistoryView.tsx",
                                    lineNumber: 285,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, message.id, false, {
                                fileName: "[project]/src/components/ChatHistoryView.tsx",
                                lineNumber: 284,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))),
                        showPreparingReport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "flex justify-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "rounded-2xl px-4 py-3 bg-[#1A1A1A] text-white max-w-[75%]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChatHistoryView.tsx",
                                            lineNumber: 410,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "text-sm font-light",
                                                    children: "Preparing report"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "text-xs text-gray-400 mt-1",
                                                    children: "This may take a moment"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ChatHistoryView.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ChatHistoryView.tsx",
                                            lineNumber: 411,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ChatHistoryView.tsx",
                                    lineNumber: 409,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatHistoryView.tsx",
                                lineNumber: 408,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChatHistoryView.tsx",
                            lineNumber: 407,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        isAiResponding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "flex justify-start items-center my-2 ml-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "flex items-center justify-center min-w-[20px] min-h-[20px] mr-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "w-2.5 h-2.5 bg-white rounded-full pulsating-circle"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatHistoryView.tsx",
                                        lineNumber: 424,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChatHistoryView.tsx",
                                    lineNumber: 423,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "".concat(isTransitioning ? 'message-transition-out' : 'message-transition-in'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-8e5e7e84f5f499e7 " + "jsx-".concat(customStyles.__hash) + " " + "highlight-animation text-sm",
                                        children: currentThinkingMessage
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatHistoryView.tsx",
                                        lineNumber: 429,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChatHistoryView.tsx",
                                    lineNumber: 428,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ChatHistoryView.tsx",
                            lineNumber: 422,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ChatHistoryView.tsx",
                    lineNumber: 282,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ChatHistoryView.tsx",
                lineNumber: 278,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "8e5e7e84f5f499e7",
                children: "@keyframes highlightText{0%{background-position:-200%}to{background-position:300%}}.highlight-animation{color:rgba(255,255,255,.6);-webkit-text-fill-color:transparent;background:linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.9) 25%,rgba(255,255,255,.9) 50%,rgba(255,255,255,0) 75%) 0 0/200%;-webkit-background-clip:text;background-clip:text;transition:opacity .2s ease-in-out;animation:2s linear infinite highlightText}.markdown-content{line-height:1.6}.markdown-content h1,.markdown-content h2,.markdown-content h3,.markdown-content h4,.markdown-content h5,.markdown-content h6{margin-top:1.5em;margin-bottom:.75em;font-weight:400;line-height:1.3}.markdown-content h1{font-size:1.5rem}.markdown-content h2{font-size:1.3rem}.markdown-content h3{font-size:1.2rem}.markdown-content h4,.markdown-content h5,.markdown-content h6{font-size:1.1rem}.markdown-content p{margin-bottom:1em}.markdown-content ul,.markdown-content ol{margin-top:.5em;margin-bottom:1em;padding-left:1.5em}.markdown-content li{margin-bottom:.3em}.markdown-content li>ul,.markdown-content li>ol{margin-top:.3em;margin-bottom:.5em}.markdown-content blockquote{color:#bbb;border-left:3px solid #444;margin:1em 0;padding-left:1em}.markdown-content pre{background-color:#282828;border-radius:4px;margin-top:.8em;margin-bottom:1em;padding:.8em;overflow-x:auto}.markdown-content code{background-color:rgba(40,40,40,.6);border-radius:3px;padding:.2em .4em;font-size:.9em}.markdown-content pre>code{background-color:transparent;border-radius:0;padding:0}.markdown-content table{border-collapse:collapse;width:100%;margin-top:1em;margin-bottom:1em}.markdown-content th,.markdown-content td{text-align:left;border:1px solid #444;padding:.5em .8em}.markdown-content th{background-color:#2d2d2d}.markdown-content hr{border:0;border-top:1px solid #444;margin-top:1.5em;margin-bottom:1.5em}.markdown-content img{max-width:100%;margin-top:.8em;margin-bottom:.8em}.markdown-content a{color:#5e9eff;text-decoration:none}.markdown-content a:hover{text-decoration:underline}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(ChatHistoryView, "eDNe1uxCte6Oa9wJnAkkyjsvO4o=");
_c1 = ChatHistoryView;
const __TURBOPACK__default__export__ = ChatHistoryView;
var _c, _c1;
__turbopack_context__.k.register(_c, "CodeMessageDisplay");
__turbopack_context__.k.register(_c1, "ChatHistoryView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/AudioInputComponent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>AudioInputComponent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Shared waveform rendering function to avoid duplication
const renderWaveformBar = function(value, index, total) {
    let isPlayed = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    // Apply exponential scaling to emphasize differences
    const scaledHeight = Math.pow(value, 0.7) * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex items-end justify-center",
        style: {
            width: "".concat(100 / total, "%")
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-1 rounded-sm ".concat(isPlayed ? 'bg-gradient-to-t from-white to-white/60' : 'bg-gradient-to-t from-white to-white/40'),
            style: {
                height: "".concat(Math.max(scaledHeight, 3), "%")
            }
        }, void 0, false, {
            fileName: "[project]/src/components/AudioInputComponent.tsx",
            lineNumber: 23,
            columnNumber: 13
        }, _this)
    }, index, false, {
        fileName: "[project]/src/components/AudioInputComponent.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, _this);
};
// Live Recording Waveform component
const LiveWaveform = (param)=>{
    let { waveformData } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex items-end justify-between px-1 mb-4",
        children: waveformData.map((value, index)=>renderWaveformBar(value, index, waveformData.length))
    }, void 0, false, {
        fileName: "[project]/src/components/AudioInputComponent.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LiveWaveform;
// Snapshot Waveform component for playback
const SnapshotWaveform = (param)=>{
    let { waveformData, playbackProgress } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex items-end justify-between relative px-1 mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 bottom-0 left-0 bg-white opacity-20 z-10 pointer-events-none",
                style: {
                    width: "".concat(playbackProgress * 100, "%")
                }
            }, void 0, false, {
                fileName: "[project]/src/components/AudioInputComponent.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            waveformData.map((value, index)=>{
                // Determine if this bar is in the played portion
                const isPlayed = index / waveformData.length < playbackProgress;
                return renderWaveformBar(value, index, waveformData.length, isPlayed);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AudioInputComponent.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = SnapshotWaveform;
// Function to get supported MIME type
const getSupportedMimeType = ()=>{
    const types = [
        'audio/webm',
        'audio/mp4',
        'audio/aac',
        'audio/ogg;codecs=opus',
        '' // empty string means browser default
    ];
    for (const type of types){
        if (!type || MediaRecorder.isTypeSupported(type)) {
            return type;
        }
    }
    return ''; // Return empty string as fallback (browser default)
};
function AudioInputComponent(param) {
    let { onAudioSubmit, isSubmitting, maxDuration = 120, isDisabled = false } = param;
    _s();
    // Basic states
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recordingDuration, setRecordingDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [audioBlob, setAudioBlob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [playbackProgress, setPlaybackProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Separate waveform data states for live recording and snapshot
    const [liveWaveformData, setLiveWaveformData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [snapshotWaveformData, setSnapshotWaveformData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Refs
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioPlayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize audio player
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioInputComponent.useEffect": ()=>{
            return ({
                "AudioInputComponent.useEffect": ()=>{
                    // Clean up on unmount
                    if (streamRef.current) {
                        streamRef.current.getTracks().forEach({
                            "AudioInputComponent.useEffect": (track)=>track.stop()
                        }["AudioInputComponent.useEffect"]);
                    }
                    if (animationFrameRef.current) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                    if (timerRef.current) {
                        clearInterval(timerRef.current);
                    }
                }
            })["AudioInputComponent.useEffect"];
        }
    }["AudioInputComponent.useEffect"], []);
    // Start recording function
    const startRecording = async ()=>{
        try {
            // Reset everything
            setLiveWaveformData([]);
            setSnapshotWaveformData([]);
            setAudioBlob(null);
            audioChunksRef.current = [];
            // Create audio context
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            audioContextRef.current = audioContext;
            // Get microphone stream
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            streamRef.current = stream;
            // Create and configure analyser
            const analyser = audioContext.createAnalyser();
            analyser.fftSize = 256;
            analyserRef.current = analyser;
            // Connect microphone stream to analyser
            const source = audioContext.createMediaStreamSource(stream);
            source.connect(analyser);
            // Replace the MediaRecorder initialization with:
            const mimeType = getSupportedMimeType();
            const mediaRecorder = new MediaRecorder(stream, mimeType ? {
                mimeType
            } : undefined);
            mediaRecorderRef.current = mediaRecorder;
            // When data becomes available, add it to our array
            mediaRecorder.ondataavailable = (event)=>{
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };
            // When recording stops
            mediaRecorder.onstop = ()=>{
                // Create audio blob from recorded chunks
                const audioBlob = new Blob(audioChunksRef.current, {
                    type: mimeType
                });
                setAudioBlob(audioBlob);
                // Set up audio player
                if (audioPlayerRef.current) {
                    const audioUrl = URL.createObjectURL(audioBlob);
                    audioPlayerRef.current.src = audioUrl;
                } else {
                    const audioPlayer = new Audio();
                    audioPlayer.src = URL.createObjectURL(audioBlob);
                    audioPlayerRef.current = audioPlayer;
                    // Set up event listeners
                    audioPlayer.addEventListener('ended', ()=>{
                        setIsPlaying(false);
                        setPlaybackProgress(0);
                    });
                    audioPlayer.addEventListener('timeupdate', ()=>{
                        if (audioPlayer.duration) {
                            setPlaybackProgress(audioPlayer.currentTime / audioPlayer.duration);
                        }
                    });
                }
                // Generate snapshot waveform from the recorded audio
                generateWaveformFromAudio(audioBlob);
                // Clean up
                if (streamRef.current) {
                    streamRef.current.getTracks().forEach((track)=>track.stop());
                }
            };
            // Set recording state first
            setIsRecording(true);
            // Start recording
            mediaRecorder.start();
            setRecordingDuration(0);
            // Set timer for recording duration
            timerRef.current = setInterval(()=>{
                setRecordingDuration((prev)=>{
                    if (prev >= maxDuration - 1) {
                        stopRecording();
                        return maxDuration;
                    }
                    return prev + 1;
                });
            }, 1000);
            // Start visualization after setting recording state
            updateLiveWaveform(analyser);
        } catch (error) {
            console.error('Error starting recording:', error);
        }
    };
    // Update the live waveform during recording
    const updateLiveWaveform = (analyser)=>{
        // This function gets called continuously by requestAnimationFrame
        const draw = ()=>{
            // Get time domain data for waveform visualization
            const bufferLength = analyser.fftSize;
            const dataArray = new Uint8Array(bufferLength);
            analyser.getByteTimeDomainData(dataArray);
            // Process the data to create the waveform (sample to ~40 points for visualization)
            const newWaveformData = [];
            const step = Math.floor(bufferLength / 40) || 1;
            for(let i = 0; i < bufferLength; i += step){
                let sum = 0;
                let count = 0;
                // Average a few points together
                for(let j = 0; j < step && i + j < bufferLength; j++){
                    // For time domain data, we want the absolute deviation from 128 (midpoint)
                    sum += Math.abs(dataArray[i + j] - 128);
                    count++;
                }
                // Normalize to 0-1 range
                const average = count > 0 ? sum / count / 128 : 0;
                newWaveformData.push(average);
                // Limit to 40 data points
                if (newWaveformData.length >= 40) break;
            }
            // Update live waveform state
            setLiveWaveformData(newWaveformData);
            // Continue the animation loop
            animationFrameRef.current = requestAnimationFrame(draw);
        };
        // Start the animation loop
        animationFrameRef.current = requestAnimationFrame(draw);
    };
    // Stop recording
    const stopRecording = ()=>{
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
            // Cancel animation frame here
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        }
    };
    // Toggle audio playback
    const togglePlayback = ()=>{
        if (!audioPlayerRef.current || !audioBlob) return;
        if (isPlaying) {
            audioPlayerRef.current.pause();
            setIsPlaying(false);
        } else {
            audioPlayerRef.current.play();
            setIsPlaying(true);
            // If snapshot waveform data is empty, try to generate it from the recorded audio
            if (snapshotWaveformData.length === 0 && audioBlob) {
                generateWaveformFromAudio(audioBlob);
            }
        }
    };
    // Function to generate snapshot waveform data from an audio blob
    const generateWaveformFromAudio = async (blob)=>{
        try {
            // Create a new audio context
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            // Convert blob to array buffer
            const arrayBuffer = await blob.arrayBuffer();
            // Decode the audio data
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
            // Get the channel data
            const channelData = audioBuffer.getChannelData(0);
            // Sample the audio data to create waveform
            const samples = 40;
            const blockSize = Math.floor(channelData.length / samples);
            const sampledData = [];
            for(let i = 0; i < samples; i++){
                let sum = 0;
                for(let j = 0; j < blockSize; j++){
                    const index = i * blockSize + j;
                    if (index < channelData.length) {
                        sum += Math.abs(channelData[index]);
                    }
                }
                // Average and normalize (audio data is -1 to 1)
                // Use a different normalization factor to accentuate differences
                const normalized = sum / (blockSize * 0.8); // Increase visibility by reducing divisor
                sampledData.push(Math.min(normalized, 1)); // Cap at 1
            }
            // Apply some smoothing to make the waveform look more natural
            const smoothedData = [];
            for(let i = 0; i < sampledData.length; i++){
                const prev = i > 0 ? sampledData[i - 1] : sampledData[i];
                const current = sampledData[i];
                const next = i < sampledData.length - 1 ? sampledData[i + 1] : sampledData[i];
                // Weighted average with current sample having more weight
                smoothedData.push(prev * 0.2 + current * 0.6 + next * 0.2);
            }
            // Update snapshot waveform data
            setSnapshotWaveformData(smoothedData);
            // Close the audio context
            audioContext.close();
        } catch (error) {
            console.error('Error generating waveform:', error);
        }
    };
    // Seek in audio playback
    const handleSeek = (e)=>{
        if (!audioPlayerRef.current || !audioBlob) return;
        const container = e.currentTarget;
        const rect = container.getBoundingClientRect();
        const clickPosition = e.clientX - rect.left;
        const containerWidth = rect.width;
        const seekPercentage = clickPosition / containerWidth;
        if (audioPlayerRef.current) {
            audioPlayerRef.current.currentTime = seekPercentage * audioPlayerRef.current.duration;
            setPlaybackProgress(seekPercentage);
            if (isPlaying) {
                audioPlayerRef.current.play();
            }
        }
    };
    // Submit recorded audio
    const handleSubmit = ()=>{
        if (audioBlob && !isSubmitting) {
            onAudioSubmit(audioBlob);
            setAudioBlob(null);
            setLiveWaveformData([]);
            setSnapshotWaveformData([]);
            // Close the delete confirmation dialog if it's open
            setShowDeleteConfirmation(false);
        }
    };
    // Format time for display
    const formatTime = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return "".concat(mins, ":").concat(secs < 10 ? '0' : '').concat(secs);
    };
    // New function to handle delete button click
    const handleDeleteClick = ()=>{
        setShowDeleteConfirmation(true);
    };
    // New function to confirm deletion
    const confirmDelete = ()=>{
        // Stop playback if it's playing
        if (isPlaying && audioPlayerRef.current) {
            audioPlayerRef.current.pause();
            setIsPlaying(false);
        }
        // Reset all audio-related states
        setAudioBlob(null);
        setLiveWaveformData([]);
        setSnapshotWaveformData([]);
        setPlaybackProgress(0);
        // Close confirmation dialog
        setShowDeleteConfirmation(false);
        // Clear audio player source if it exists
        if (audioPlayerRef.current) {
            audioPlayerRef.current.src = '';
        }
    };
    // New function to cancel deletion
    const cancelDelete = ()=>{
        setShowDeleteConfirmation(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-10 left-0 right-0 text-center flex items-center justify-center z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black/80 rounded-full px-4 py-2 shadow-md flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AudioInputComponent.tsx",
                            lineNumber: 445,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red-500 font-light text-sm",
                            children: [
                                "Recording ",
                                formatTime(recordingDuration)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AudioInputComponent.tsx",
                            lineNumber: 446,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AudioInputComponent.tsx",
                    lineNumber: 444,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AudioInputComponent.tsx",
                lineNumber: 443,
                columnNumber: 17
            }, this),
            showDeleteConfirmation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-20 left-0 right-0 bg-[#222222] rounded-lg p-3 shadow-lg z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white text-sm mb-2",
                        children: "Are you sure you want to delete this recording?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AudioInputComponent.tsx",
                        lineNumber: 454,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-white text-xs bg-transparent hover:bg-[#333333] px-2 py-1 rounded-md cursor-pointer",
                                onClick: cancelDelete,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AudioInputComponent.tsx",
                                lineNumber: 456,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-white text-xs bg-red-500 hover:bg-red-600 px-2 py-1 rounded-md cursor-pointer",
                                onClick: confirmDelete,
                                children: "Delete"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AudioInputComponent.tsx",
                                lineNumber: 462,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AudioInputComponent.tsx",
                        lineNumber: 455,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AudioInputComponent.tsx",
                lineNumber: 453,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center bg-[#111111] rounded-full overflow-hidden border border-[#222222] px-3 py-2",
                children: [
                    isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AudioInputComponent.tsx",
                        lineNumber: 476,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 rounded-full flex items-center justify-center bg-[#222222] text-white hover:bg-[#333333] cursor-pointer mr-3",
                        onClick: isRecording ? stopRecording : audioBlob ? togglePlayback : startRecording,
                        disabled: isDisabled,
                        type: "button",
                        children: isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-3 h-3 bg-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AudioInputComponent.tsx",
                            lineNumber: 485,
                            columnNumber: 29
                        }, this) : audioBlob ? isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/components/AudioInputComponent.tsx",
                            lineNumber: 487,
                            columnNumber: 41
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    size: 14,
                                    className: "sm:hidden"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AudioInputComponent.tsx",
                                    lineNumber: 487,
                                    columnNumber: 65
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    size: 16,
                                    className: "hidden sm:block"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AudioInputComponent.tsx",
                                    lineNumber: 487,
                                    columnNumber: 106
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/components/AudioInputComponent.tsx",
                            lineNumber: 489,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AudioInputComponent.tsx",
                        lineNumber: 478,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-full items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-10 flex items-center justify-center relative cursor-pointer ".concat(audioBlob ? 'flex-1 max-w-[calc(100%-80px)] sm:max-w-none' // Add max-width constraint on mobile
                                     : 'w-full'),
                                    onClick: audioBlob && !isRecording ? handleSeek : undefined,
                                    children: isRecording && liveWaveformData.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiveWaveform, {
                                        waveformData: liveWaveformData
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AudioInputComponent.tsx",
                                        lineNumber: 508,
                                        columnNumber: 33
                                    }, this) : audioBlob && snapshotWaveformData.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SnapshotWaveform, {
                                        waveformData: snapshotWaveformData,
                                        playbackProgress: playbackProgress
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AudioInputComponent.tsx",
                                        lineNumber: 510,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-400 text-xs sm:text-sm",
                                        children: "Click the microphone to start recording"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AudioInputComponent.tsx",
                                        lineNumber: 515,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AudioInputComponent.tsx",
                                    lineNumber: 499,
                                    columnNumber: 25
                                }, this),
                                audioBlob && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-2 sm:ml-3 flex-shrink-0 flex space-x-1 sm:space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-[#222222] text-white hover:bg-[#333333] cursor-pointer",
                                            onClick: handleDeleteClick,
                                            disabled: isSubmitting || isDisabled,
                                            "aria-label": "Delete audio",
                                            type: "button",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 14,
                                                    className: "sm:hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AudioInputComponent.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 16,
                                                    className: "hidden sm:block"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AudioInputComponent.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AudioInputComponent.tsx",
                                            lineNumber: 523,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white cursor-pointer",
                                            onClick: handleSubmit,
                                            disabled: isSubmitting || isDisabled,
                                            "aria-label": "Submit audio",
                                            type: "button",
                                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-4 h-4 sm:w-5 sm:h-5 border-2 border-black border-t-transparent rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AudioInputComponent.tsx",
                                                lineNumber: 543,
                                                columnNumber: 41
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "sm:hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M5 12H19M19 12L12 5M19 12L12 19",
                                                            stroke: "black",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AudioInputComponent.tsx",
                                                            lineNumber: 547,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AudioInputComponent.tsx",
                                                        lineNumber: 546,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "hidden sm:block",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M5 12H19M19 12L12 5M19 12L12 19",
                                                            stroke: "black",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AudioInputComponent.tsx",
                                                            lineNumber: 550,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AudioInputComponent.tsx",
                                                        lineNumber: 549,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AudioInputComponent.tsx",
                                            lineNumber: 535,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AudioInputComponent.tsx",
                                    lineNumber: 521,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AudioInputComponent.tsx",
                            lineNumber: 497,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AudioInputComponent.tsx",
                        lineNumber: 495,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AudioInputComponent.tsx",
                lineNumber: 473,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AudioInputComponent.tsx",
        lineNumber: 440,
        columnNumber: 9
    }, this);
}
_s(AudioInputComponent, "QH9884jmdy/oBqvojgMBPy/RPXw=");
_c2 = AudioInputComponent;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LiveWaveform");
__turbopack_context__.k.register(_c1, "SnapshotWaveform");
__turbopack_context__.k.register(_c2, "AudioInputComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/CodeEditorView.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CodePreview": ()=>CodePreview,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.28.0_react@19.1.1/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$monaco$2d$editor$2b$react$40$4$2e$7$2e$0_$5f$8c8cf720cb7e5db1be243a31428b65f5$2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@monaco-editor+react@4.7.0__8c8cf720cb7e5db1be243a31428b65f5/node_modules/@monaco-editor/react/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$monaco$2d$editor$2b$react$40$4$2e$7$2e$0_$5f$8c8cf720cb7e5db1be243a31428b65f5$2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@monaco-editor+react@4.7.0__8c8cf720cb7e5db1be243a31428b65f5/node_modules/@monaco-editor/react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
const CodePreview = (param)=>{
    let { isRunning, previewContent, output, isWebPreview, executionTime, onClear, onBack, isMobileView = false } = param;
    _s();
    const [isIframeLoading, setIsIframeLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Reset loading state when new content is provided
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodePreview.useEffect": ()=>{
            if (previewContent) {
                setIsIframeLoading(true);
            }
        }
    }["CodePreview.useEffect"], [
        previewContent
    ]);
    // Format console output with syntax highlighting
    const formatConsoleOutput = (text)=>{
        if (!text) return 'Run your code to see output here';
        // Replace [ERROR], [WARN], and [INFO] tags with styled spans
        return text.replace(/\[ERROR\]/g, '<span class="text-red-500 font-bold">[ERROR]</span>').replace(/\[WARN\]/g, '<span class="text-yellow-500 font-bold">[WARN]</span>').replace(/\[INFO\]/g, '<span class="text-blue-500 font-bold">[INFO]</span>').replace(/---.*?---/g, '<span class="text-gray-400">$&</span>').replace(/→ Return value:/g, '<span class="text-green-500 font-semibold">→ Return value:</span>').replace(/(Error:[\s\S]*?)(?=\n\n|$)/g, '<span class="text-red-500">$1</span>').replace(/(Compilation Error:[\s\S]*?)(?=\n\n|$)/g, '<span class="text-red-500">$1</span>');
    };
    // Create a modified HTML content with a loading indicator
    const enhancedPreviewContent = isWebPreview && previewContent ? "\n        ".concat(previewContent.replace('</body>', "\n            <style>\n                #iframe-loading-indicator {\n                    position: fixed;\n                    top: 0;\n                    left: 0;\n                    width: 100%;\n                    height: 100%;\n                    background-color: #1a1a1a;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    z-index: 9999;\n                    transition: opacity 0.3s ease-out;\n                }\n                #iframe-loading-indicator.hidden {\n                    opacity: 0;\n                    pointer-events: none;\n                }\n                .iframe-spinner {\n                    width: 40px;\n                    height: 40px;\n                    border: 4px solid #2a2a2a;\n                    border-top: 4px solid #a0a0a0;\n                    border-radius: 50%;\n                    animation: spin 1s linear infinite;\n                }\n                @keyframes spin {\n                    0% { transform: rotate(0deg); }\n                    100% { transform: rotate(360deg); }\n                }\n            </style>\n            <div id=\"iframe-loading-indicator\">\n                <div class=\"iframe-spinner\"></div>\n            </div>\n            <script>\n                // Hide the loading indicator when the page is fully loaded\n                window.addEventListener('load', function() {\n                    setTimeout(function() {\n                        document.getElementById('iframe-loading-indicator').classList.add('hidden');\n                    }, 500); // Small delay to ensure everything is rendered\n                });\n            </script>\n            </body>\n            "), "\n    ") : previewContent;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col bg-[#111111] overflow-hidden h-full ".concat(isMobileView ? 'mobile-preview-container' : ''),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 bg-[#222222] text-white font-medium flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm py-2",
                            children: isWebPreview ? 'Preview' : 'Output'
                        }, void 0, false, {
                            fileName: "[project]/src/components/CodeEditorView.tsx",
                            lineNumber: 120,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CodeEditorView.tsx",
                        lineNumber: 119,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "items-center gap-2 flex",
                        children: [
                            !isWebPreview && output && onClear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClear,
                                className: "hidden md:block text-sm text-gray-400 hover:text-white px-2 py-1 rounded hover:bg-[#333333] transition-colors cursor-pointer",
                                "aria-label": "Clear output",
                                children: "Clear"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CodeEditorView.tsx",
                                lineNumber: 124,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            isMobileView && onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onBack,
                                className: "text-sm text-gray-400 hover:text-white p-1 rounded hover:bg-[#333333] transition-colors",
                                "aria-label": "Close preview",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CodeEditorView.tsx",
                                    lineNumber: 138,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/CodeEditorView.tsx",
                                lineNumber: 133,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CodeEditorView.tsx",
                        lineNumber: 122,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CodeEditorView.tsx",
                lineNumber: 118,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto",
                children: isRunning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-6 w-6 border-t-2 border-white"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CodeEditorView.tsx",
                        lineNumber: 146,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/CodeEditorView.tsx",
                    lineNumber: 145,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : !previewContent && !output ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center h-full preview-placeholder",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "64",
                            height: "64",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M14 4L18 8M18 8V18M18 8H8M6 20L10 16M10 16H20M10 16V6",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CodeEditorView.tsx",
                                lineNumber: 151,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CodeEditorView.tsx",
                            lineNumber: 150,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Run your code to see the preview here"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CodeEditorView.tsx",
                            lineNumber: 153,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs mt-2 text-center px-4",
                            children: "For HTML/CSS/JavaScript/React, you will see a live preview. For other languages, you will see the console output."
                        }, void 0, false, {
                            fileName: "[project]/src/components/CodeEditorView.tsx",
                            lineNumber: 154,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CodeEditorView.tsx",
                    lineNumber: 149,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : isWebPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-full",
                    children: [
                        isIframeLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center justify-center bg-white z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-10 w-10 border-4 border-[#f3f3f3] border-t-[#3498db]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CodeEditorView.tsx",
                                lineNumber: 160,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CodeEditorView.tsx",
                            lineNumber: 159,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            srcDoc: enhancedPreviewContent,
                            title: "Code Preview",
                            className: "w-full h-full bg-white",
                            sandbox: "allow-scripts",
                            onLoad: ()=>setIsIframeLoading(false)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CodeEditorView.tsx",
                            lineNumber: 163,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CodeEditorView.tsx",
                    lineNumber: 157,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 text-white font-mono text-sm terminal-output bg-[#1A1A1A]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "whitespace-pre-wrap",
                        dangerouslySetInnerHTML: {
                            __html: formatConsoleOutput(output)
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/CodeEditorView.tsx",
                        lineNumber: 173,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/CodeEditorView.tsx",
                    lineNumber: 172,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/CodeEditorView.tsx",
                lineNumber: 143,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CodeEditorView.tsx",
        lineNumber: 117,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CodePreview, "szYqk0/h+PZkTGJD0uPaJbyBO9w=");
_c = CodePreview;
const DEFAULT_LANGUAGE_CONTENTS = {
    'javascript': 'function changeText() {\n  document.getElementById("greeting").textContent = "Hello from JavaScript!";\n}\n\nconsole.log("Hello, world!");\n',
    'html': '<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1 id="greeting">Hello, world!</h1>\n  <button onclick="changeText()">Change Text</button>\n</body>\n</html>\n',
    'css': 'body {\n  font-family: sans-serif;\n  margin: 20px;\n}\n\nh1 {\n  color: navy;\n}\n',
    'react': '// === REACT PLAYGROUND GUIDE ===\n// \n// This playground runs React 18 directly in the browser using Babel for JSX transformation.\n// Here\'s how to use this editor effectively:\n//\n// 1. COMPONENT DEFINITION:\n//    - Define your components using either function or class syntax\n//    - Example: function MyComponent() { return <div>Hello</div>; }\n//\n// 2. USING HOOKS:\n//    - React hooks work normally (useState, useEffect, etc.)\n//    - Access them directly from the React object (React.useState)\n//\n// 3. RENDERING TO DOM:\n//    - IMPORTANT: Always render your main component to the "root" div\n//    - Use React 18\'s createRoot API as shown below\n// \n// 4. LIMITATIONS:\n//    - No npm imports (use only built-in React functionality)\n//    - Libraries like React Router won\'t work here\n//    - For CSS, add inline styles or use the CSS tab\n//\n// The example below demonstrates a basic counter component:\n// ======\n\n// Define your main component\nfunction App() {\n  // Use React hooks just like in a normal React app\n  const [count, setCount] = React.useState(0);\n\n  return (\n    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "50px" }}>\n      <h1>Hello from React!</h1>\n      <p>You clicked the button {count} times</p>\n      <button \n        onClick={() => setCount(count + 1)}\n        style={{\n          padding: "8px 16px",\n          borderRadius: "4px",\n          backgroundColor: "#0070f3",\n          color: "white",\n          border: "none",\n          cursor: "pointer"\n        }}\n      >\n        Click me\n      </button>\n    </div>\n  );\n}\n\n// REQUIRED: Create a root and render your App component\n// This is the React 18 way of rendering components\nconst rootElement = document.getElementById("root");\nconst root = ReactDOM.createRoot(rootElement);\nroot.render(<App />);\n\n// You can add more components above the App component\n// Just make sure your final component is rendered to the DOM\n',
    'python': 'print("Hello, world!")\n',
    'java': 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, world!");\n  }\n}\n',
    'c': '#include <stdio.h>\n\nint main() {\n  printf("Hello, world!\\n");\n  return 0;\n}\n',
    'cpp': '#include <iostream>\n\nint main() {\n  std::cout << "Hello, world!" << std::endl;\n  return 0;\n}\n',
    'csharp': 'using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello, world!");\n  }\n}\n',
    'ruby': 'puts "Hello, world!"\n',
    'typescript': 'const message: string = "Hello, world!";\nconsole.log(message);\n',
    'php': '<?php\necho "Hello, world!";\n?>\n',
    'nodejs': "// Node.js example\n// Data processing example\nconst users = [\n  { id: 1, name: 'Alice', age: 28, role: 'developer' },\n  { id: 2, name: 'Bob', age: 35, role: 'manager' },\n  { id: 3, name: 'Charlie', age: 24, role: 'designer' },\n  { id: 4, name: 'Diana', age: 31, role: 'developer' },\n  { id: 5, name: 'Evan', age: 40, role: 'admin' }\n];\n\n// Filter developers\nconst developers = users.filter(user => user.role === 'developer');\nconsole.log('Developers in the team:');\ndevelopers.forEach(dev => console.log(` - ${dev.name}, ${dev.age} years old`));\n\n// Calculate average age\nconst totalAge = users.reduce((sum, user) => sum + user.age, 0);\nconst averageAge = totalAge / users.length;\nconsole.log(`\nAverage team age: ${averageAge.toFixed(1)} years`);\n\n// Find oldest team member\nconst oldest = users.reduce((oldest, user) => user.age > oldest.age ? user : oldest, users[0]);\nconsole.log(`Oldest team member: ${oldest.name} (${oldest.age} years old, ${oldest.role})`);",
    'sql': "-- SQL PLAYGROUND GUIDE\n-- \n-- This is a SQLite playground that allows you to practice SQL operations\n-- Here's how to use this editor effectively:\n--\n-- === STRUCTURE YOUR SQL CODE IN THIS ORDER ===\n--\n-- 1. CREATE TABLES:\n--    - Define your schema with appropriate data types\n--    - Set up primary keys and foreign key relationships\n--    - Example below creates customers and orders tables\n--\n-- 2. INSERT DATA:\n--    - Populate your tables with sample data\n--    - Use INSERT INTO statements with specific values\n--    - Ensure foreign key references exist before inserting\n--\n-- 3. QUERY DATA:\n--    - Write SELECT statements to retrieve and analyze your data\n--    - Use joins, where clauses, aggregations, etc.\n--    - Always test your queries after inserting data\n--\n-- === EXAMPLE BELOW ===\n\n-- Step 1: Create your tables\nCREATE TABLE customers (\n    customer_id INT PRIMARY KEY,\n    name VARCHAR(100),\n    email VARCHAR(100)\n);\n\nCREATE TABLE orders (\n    order_id INT PRIMARY KEY,\n    customer_id INT,\n    amount DECIMAL(10, 2),\n    order_date DATE,\n    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)\n);\n\n-- Step 2: Insert sample data\nINSERT INTO customers (customer_id, name, email) VALUES\n(1, 'John Doe', 'john@example.com'),\n(2, 'Jane Smith', 'jane@example.com'),\n(3, 'Bob Johnson', 'bob@example.com'),\n(4, 'Alice Brown', 'alice@example.com'),\n(5, 'Charlie Davis', 'charlie@example.com');\n\nINSERT INTO orders (order_id, customer_id, amount, order_date) VALUES\n(101, 1, 150.50, '2023-01-15'),\n(102, 1, 75.25, '2023-02-20'),\n(103, 2, 200.00, '2023-01-10'),\n(104, 3, 50.75, '2023-03-05'),\n(105, 3, 125.30, '2023-03-15'),\n(106, 3, 45.80, '2023-04-02'),\n(107, 5, 350.00, '2023-02-28');\n\n-- Step 3: Query the data\nSELECT \n    customers.customer_id,\n    customers.name,\n    customers.email,\n    COUNT(orders.order_id) AS total_orders,\n    SUM(orders.amount) AS total_spent\nFROM \n    customers\nLEFT JOIN \n    orders ON customers.customer_id = orders.customer_id\nGROUP BY \n    customers.customer_id\nHAVING \n    COUNT(orders.order_id) > 0\nORDER BY \n    total_spent DESC\nLIMIT 10;"
};
// Map language to Monaco editor language identifiers
const LANGUAGE_MAPPING = {
    'javascript': 'javascript',
    'js': 'javascript',
    'html': 'html',
    'css': 'css',
    'python': 'python',
    'py': 'python',
    'java': 'java',
    'c': 'c',
    'cpp': 'cpp',
    'c++': 'cpp',
    'csharp': 'csharp',
    'c#': 'csharp',
    'ruby': 'ruby',
    'typescript': 'typescript',
    'ts': 'typescript',
    'php': 'php',
    'react': 'javascript',
    'nodejs': 'javascript',
    'sql': 'sql'
};
// Prettier language display names
const LANGUAGE_DISPLAY_NAMES = {
    'javascript': 'JavaScript',
    'html': 'HTML',
    'css': 'CSS',
    'python': 'Python',
    'java': 'Java',
    'c': 'C',
    'cpp': 'C++',
    'csharp': 'C#',
    'ruby': 'Ruby',
    'typescript': 'TypeScript',
    'php': 'PHP',
    'react': 'React'
};
// Judge0 language IDs - see https://judge0.com/
const JUDGE0_LANGUAGE_IDS = {
    'python': 71,
    'sql': 82,
    'javascript': 63,
    'nodejs': 63
};
// Judge0 API URL - using environment variables for flexibility
const JUDGE0_API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.JUDGE0_API_URL || '';
// Whether to use proxy approach to avoid CORS issues
const USE_PROXY_API = true;
const CodeEditorView = /*#__PURE__*/ _s1((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = _s1((param, ref)=>{
    let { initialCode = {}, languages = [
        'javascript'
    ], handleCodeSubmit, onCodeRun } = param;
    _s1();
    // Check if React is in the original languages array
    const hasReact = languages.some((lang)=>lang.toLowerCase() === 'react');
    const hasNodejs = languages.some((lang)=>lang.toLowerCase() === 'nodejs');
    // When only React is selected, don't normalize languages (skip the mapping to JavaScript)
    let normalizedLanguages;
    if (hasReact) {
        // When React is the only language, skip normalization and just use React
        normalizedLanguages = [
            'react'
        ];
    } else if (hasNodejs) {
        // When Node.js is the only language, skip normalization and just use Node.js
        normalizedLanguages = [
            'nodejs'
        ];
    } else {
        // Otherwise normalize languages as usual
        normalizedLanguages = languages.map((lang)=>LANGUAGE_MAPPING[lang.toLowerCase()] || lang.toLowerCase()).filter((lang, index, self)=>// Remove duplicates
            self.indexOf(lang) === index && // Ensure we have a default content for this language
            Object.keys(LANGUAGE_MAPPING).includes(lang));
    }
    // Helper method to setup code state with defaults
    const setupCodeState = (initial)=>{
        const state = {};
        // Add entries for all valid languages
        normalizedLanguages.forEach((lang)=>{
            state[lang] = initial[lang] || DEFAULT_LANGUAGE_CONTENTS[lang] || '';
        });
        return state;
    };
    // Initialize code state with provided initialCode or defaults
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CodeEditorView.useState": ()=>{
            return setupCodeState(initialCode);
        }
    }["CodeEditorView.useState"]);
    // State for the active language tab
    const [activeLanguage, setActiveLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(normalizedLanguages[0]);
    // Preview state
    const [previewContent, setPreviewContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [output, setOutput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [executionTime, setExecutionTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Input state (for languages that need stdin)
    const [showInputPanel, setShowInputPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stdInput, setStdInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Reset active language when languages prop changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditorView.useEffect": ()=>{
            if (normalizedLanguages.length > 0) {
                setActiveLanguage(normalizedLanguages[0]);
            }
        }
    }["CodeEditorView.useEffect"], [
        languages
    ]);
    // Mobile preview state
    const [showMobilePreview, setShowMobilePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check if web preview is available (HTML, CSS, JS)
    const hasWebLanguages = normalizedLanguages.some((lang)=>[
            'html',
            'css',
            'javascript'
        ].includes(lang));
    // Add state for input validation and toast
    const [inputError, setInputError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showToast, setShowToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toastData, setToastData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        emoji: ''
    });
    // Check if we're on a mobile device
    const [isMobileView, setIsMobileView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Effect to detect mobile devices
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditorView.useEffect": ()=>{
            const checkMobileView = {
                "CodeEditorView.useEffect.checkMobileView": ()=>{
                    setIsMobileView(window.innerWidth < 1024);
                }
            }["CodeEditorView.useEffect.checkMobileView"];
            // Initial check
            checkMobileView();
            // Listen for window resize events
            window.addEventListener('resize', checkMobileView);
            // Cleanup event listener
            return ({
                "CodeEditorView.useEffect": ()=>{
                    window.removeEventListener('resize', checkMobileView);
                }
            })["CodeEditorView.useEffect"];
        }
    }["CodeEditorView.useEffect"], []);
    // Auto-close toast after 5 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditorView.useEffect": ()=>{
            if (showToast) {
                const timer = setTimeout({
                    "CodeEditorView.useEffect.timer": ()=>{
                        setShowToast(false);
                    }
                }["CodeEditorView.useEffect.timer"], 5000);
                // Cleanup the timer when component unmounts or showToast changes
                return ({
                    "CodeEditorView.useEffect": ()=>clearTimeout(timer)
                })["CodeEditorView.useEffect"];
            }
        }
    }["CodeEditorView.useEffect"], [
        showToast
    ]);
    // Update code state when initialCode changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditorView.useEffect": ()=>{
            setCode(setupCodeState(initialCode));
        }
    }["CodeEditorView.useEffect"], [
        initialCode
    ]);
    // Handle code change for the active language
    const handleCodeChange = (value)=>{
        if (value !== undefined) {
            setCode((prevCode)=>({
                    ...prevCode,
                    [activeLanguage]: value
                }));
        }
    };
    // Handle mobile back button click
    const handleMobileBackClick = ()=>{
        setShowMobilePreview(false);
        // Notify parent that preview was closed
        if (onCodeRun) {
            // Signal that the preview is closed with empty content
            // This doesn't clear the actual content but just signals UI state change
            onCodeRun('', output, executionTime, false);
        }
    };
    // Function to count the number of input() calls in Python code
    const countPythonInputs = (code)=>{
        // Match different variations of input calls
        // This regex matches:
        // 1. Standard input() calls
        // 2. input("prompt") with any string prompt
        // 3. Assigned input() calls like x = input()
        // 4. Complex variations like x = int(input())
        // Remove comments first
        const codeWithoutComments = code.replace(/#.*$/gm, '');
        // Look for different input patterns
        const patterns = [
            /\binput\s*\([^)]*\)/g
        ];
        // Count all occurrences of input calls
        let totalInputCalls = 0;
        patterns.forEach((pattern)=>{
            const matches = codeWithoutComments.match(pattern);
            if (matches) {
                // Count all occurrences, not just unique ones
                totalInputCalls += matches.length;
            }
        });
        return totalInputCalls;
    };
    // Function to count the number of provided inputs
    const countProvidedInputs = (input)=>{
        if (!input) return 0;
        // Count all lines
        return input.split('\n').length;
    };
    // Handle code run with input validation
    const handleCodeRun = ()=>{
        setInputError(false); // Reset input error state
        // Check for Python input validation
        if (activeLanguage === 'python') {
            const requiredInputs = countPythonInputs(code['python']);
            if (requiredInputs > 0) {
                const providedInputs = countProvidedInputs(stdInput);
                // If inputs are required but input panel is not open, show it
                if (!showInputPanel) {
                    setShowInputPanel(true);
                    setInputError(true); // Add error state when automatically opening input panel
                    setToastData({
                        title: 'Input Required',
                        description: "Your code requires ".concat(requiredInputs, " input").concat(requiredInputs > 1 ? 's' : '', ". Please provide ").concat(requiredInputs > 1 ? 'them' : 'it', " in the input panel."),
                        emoji: '⌨️'
                    });
                    setShowToast(true);
                    return; // Don't run code yet
                }
                // If insufficient inputs, show error
                if (providedInputs < requiredInputs) {
                    setInputError(true);
                    setToastData({
                        title: 'Insufficient Inputs',
                        description: "Your code requires ".concat(requiredInputs, " input").concat(requiredInputs > 1 ? 's' : '', ", but ").concat(providedInputs === 0 ? 'no input was provided' : "only ".concat(providedInputs, " ").concat(providedInputs === 1 ? 'input was' : 'inputs were', " provided")),
                        emoji: '⚠️'
                    });
                    setShowToast(true);
                    return; // Don't run code with insufficient inputs
                }
            }
        }
        setIsRunning(true);
        // If on mobile, show the preview
        if (isMobileView) {
            setShowMobilePreview(true);
        }
        try {
            // For React code
            if (activeLanguage === 'react') {
                // Create a basic HTML template with React and ReactDOM loaded from CDN with specific version
                const reactTemplate = '\n                <!DOCTYPE html>\n                <html>\n                <head>\n                    <meta charset="UTF-8">\n                    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n                    <title>React Preview</title>\n                    <!-- Load React and ReactDOM from CDN with specific version -->\n                    <script src="https://unpkg.com/react@18.2.0/umd/react.development.js"></script>\n                    <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>\n                    <!-- Load Babel for JSX support -->\n                    <script src="https://unpkg.com/@babel/standalone@7.21.4/babel.min.js"></script>\n                    '.concat(code['css'] ? "<style>".concat(code['css'], "</style>") : '', '\n                </head>\n                <body>\n                    <div id="root"></div>\n                    <script type="text/babel">\n                    ').concat(code['react'], "\n                    </script>\n                </body>\n                </html>");
                setPreviewContent(reactTemplate);
                setOutput('React preview updated');
                // Notify parent component
                if (onCodeRun) {
                    onCodeRun(reactTemplate, 'React preview updated', undefined, true);
                }
                // Delay setting isRunning to false to give time for the iframe to start loading
                setTimeout(()=>{
                    setIsRunning(false);
                    // Update parent again when loading is complete
                    if (onCodeRun) {
                        onCodeRun(reactTemplate, 'React preview updated', undefined, false);
                    }
                }, 300);
            } else if (hasWebLanguages) {
                // For SQL, we'll handle the preview later in executeWithJudge0
                if (activeLanguage === 'sql') {
                    executeWithJudge0(activeLanguage, code[activeLanguage]);
                } else {
                    // Generate HTML preview with CSS and JavaScript
                    const htmlContent = code['html'] || '';
                    const cssContent = code['css'] ? "<style>".concat(code['css'], "</style>") : '';
                    const jsContent = code['javascript'] ? "<script>".concat(code['javascript'], "</script>") : '';
                    // Combine all content
                    const fullHtmlContent = htmlContent.replace('</head>', "".concat(cssContent, "</head>")).replace('</body>', "".concat(jsContent, "</body>"));
                    setPreviewContent(fullHtmlContent);
                    setOutput('Preview updated');
                    // Notify parent component
                    if (onCodeRun) {
                        onCodeRun(fullHtmlContent, 'Preview updated', undefined, true);
                    }
                    // Delay setting isRunning to false to give time for the iframe to start loading
                    setTimeout(()=>{
                        setIsRunning(false);
                        // Update parent again when loading is complete
                        if (onCodeRun) {
                            onCodeRun(fullHtmlContent, 'Preview updated', undefined, false);
                        }
                    }, 300);
                }
            } else {
                // Send all supported languages to Judge0, including JavaScript and Node.js
                if (Object.keys(JUDGE0_LANGUAGE_IDS).includes(activeLanguage)) {
                    // Notify parent component that code execution is starting
                    if (onCodeRun) {
                        // Pass isRunning=true to indicate execution has started
                        onCodeRun('', 'Executing code...', undefined, true);
                    }
                    executeWithJudge0(activeLanguage, code[activeLanguage]);
                } else {
                    // For other languages, show placeholder message
                    const outputMessage = "Code execution for ".concat(LANGUAGE_DISPLAY_NAMES[activeLanguage] || activeLanguage, " would happen on a server.");
                    setOutput(outputMessage);
                    // Notify parent component for other languages
                    if (onCodeRun) {
                        onCodeRun('', outputMessage);
                    }
                    setIsRunning(false);
                }
            }
        } catch (error) {
            const errorMessage = "Error: ".concat(error.message);
            setOutput(errorMessage);
            setExecutionTime(''); // Reset execution time on error
            // Notify parent component
            if (onCodeRun) {
                onCodeRun('', errorMessage, undefined, false);
            }
            // Set isRunning to false in case of an error
            setIsRunning(false);
        }
    };
    // Execute code using Judge0 API
    const executeWithJudge0 = async (language, sourceCode)=>{
        try {
            setIsRunning(true);
            setExecutionTime(''); // Reset execution time when starting new execution
            // If on mobile, show the preview
            if (isMobileView) {
                setShowMobilePreview(true);
            }
            // Check if language is supported by Judge0
            const languageId = JUDGE0_LANGUAGE_IDS[language];
            if (!languageId) {
                throw new Error("Language '".concat(language, "' is not supported for execution"));
            }
            // Prepare request data
            const requestData = {
                source_code: sourceCode,
                language_id: languageId,
                stdin: stdInput,
                expected_output: null,
                cpu_time_limit: 2,
                cpu_extra_time: 0.5,
                wall_time_limit: 5,
                memory_limit: 128000,
                stack_limit: 64000,
                max_processes_and_or_threads: 60,
                enable_per_process_and_thread_time_limit: false,
                enable_per_process_and_thread_memory_limit: false,
                compiler_options: '',
                command_line_arguments: ''
            };
            let token;
            // Step 1: Create a submission (using proxy if needed)
            // Using Next.js API route to proxy the request and avoid CORS issues
            const createResponse = await fetch("/api/code/submit", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });
            if (!createResponse.ok) {
                throw new Error("Failed to submit code: ".concat(createResponse.status));
            }
            const submission = await createResponse.json();
            token = submission.token;
            if (!token) {
                throw new Error('No token received from Judge0');
            }
            // Step 2: Poll for results
            let result;
            let attempts = 0;
            const maxAttempts = 10;
            while(attempts < maxAttempts){
                attempts++;
                await new Promise((resolve)=>setTimeout(resolve, 1000)); // Wait 1 second
                let statusResponse;
                // Using Next.js API route to proxy the request
                statusResponse = await fetch("/api/code/status?token=".concat(token));
                if (!statusResponse.ok) {
                    throw new Error("Failed to get submission status: ".concat(statusResponse.status));
                }
                result = await statusResponse.json();
                // Check if processing is complete
                // 1 = In Queue, 2 = Processing, 3 = Accepted, 4+ = Various errors
                if (result.status_id >= 3) {
                    break;
                }
            }
            // Step 3: Handle the result
            if (!result) {
                throw new Error('Failed to get execution result');
            }
            let outputText = '';
            // Build output based on what's available
            if (result.compile_output) {
                outputText += "Compilation Error:\n".concat(result.compile_output, "\n");
            }
            if (result.stderr) {
                outputText += "Error:\n".concat(result.stderr, "\n");
                if (result.message) {
                    outputText += "".concat(result.message);
                }
            }
            // For SQL results, create HTML table instead of showing raw output
            if (language === 'sql') {
                try {
                    // Generate HTML table from SQL results
                    const sqlOutput = result.stdout ? result.stdout.trim() : '';
                    if (sqlOutput) {
                        // Check if there are query results (not just success messages from CREATE/INSERT)
                        if (sqlOutput.includes('|')) {
                            // Create HTML table preview content
                            const tableHtml = generateTableFromSqlOutput(sqlOutput);
                            // Set preview content with styled table
                            const htmlContent = "\n                            <!DOCTYPE html>\n                            <html>\n                            <head>\n                                <style>\n                                    body {\n                                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;\n                                        padding: 16px;\n                                        background-color: #1a1a1a;\n                                        color: #e2e2e2;\n                                        font-size: 12px;\n                                    }\n                                    table {\n                                        width: 100%;\n                                        border-collapse: collapse;\n                                        font-size: 12px;\n                                    }\n                                    th {\n                                        font-weight: 500;\n                                        text-align: left;\n                                        padding: 6px 8px;\n                                        border-bottom: 1px solid #333;\n                                        color: #a0a0a0;\n                                    }\n                                    td {\n                                        padding: 6px 8px;\n                                        border-bottom: 1px solid #222;\n                                    }\n                                    tr:hover {\n                                        background-color: #222;\n                                    }\n                                    .sql-results-title {\n                                        margin-bottom: 12px;\n                                        color: #e2e2e2;\n                                        font-size: 14px;\n                                        font-weight: 500;\n                                    }\n                                    .no-results {\n                                        color: #a0a0a0;\n                                        padding: 16px;\n                                        text-align: center;\n                                        font-size: 12px;\n                                        background-color: #222;\n                                        border-radius: 3px;\n                                    }\n                                </style>\n                            </head>\n                            <body>\n                                ".concat(tableHtml, "\n                            </body>\n                            </html>");
                            setPreviewContent(htmlContent);
                            // Still set a minimal text output
                            outputText = "Query executed successfully. Results displayed in the table.";
                            // Notify parent component with both HTML content and text output
                            if (onCodeRun) {
                                // Use true for isWebPreview
                                onCodeRun(htmlContent, outputText, result.time, false);
                            }
                        } else {
                            // For non-query operations (CREATE, INSERT, etc.)
                            outputText = sqlOutput;
                            // Show a message in the preview
                            const htmlContent = "\n                            <!DOCTYPE html>\n                            <html>\n                            <head>\n                                <style>\n                                    body {\n                                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;\n                                        padding: 16px;\n                                        background-color: #1a1a1a;\n                                        color: #e2e2e2;\n                                        font-size: 12px;\n                                    }\n                                    .message {\n                                        padding: 12px 16px;\n                                        background-color: #252525;\n                                        border-radius: 3px;\n                                        margin-bottom: 16px;\n                                        font-size: 12px;\n                                    }\n                                    .message h3 {\n                                        font-weight: 500;\n                                        font-size: 13px;\n                                        margin-top: 0;\n                                        margin-bottom: 8px;\n                                        color: #e2e2e2;\n                                    }\n                                    .message p {\n                                        margin: 4px 0;\n                                        color: #a0a0a0;\n                                    }\n                                </style>\n                            </head>\n                            <body>\n                                <div class=\"message\">\n                                    <h3>SQL Operation Successful</h3>\n                                    <p>Your SQL commands executed successfully.</p>\n                                    <p>Run a SELECT query to see results in a table format.</p>\n                                </div>\n                            </body>\n                            </html>";
                            setPreviewContent(htmlContent);
                            if (onCodeRun) {
                                // Use true for isWebPreview
                                onCodeRun(htmlContent, outputText, result.time, false);
                            }
                        }
                    } else {
                        // Empty result
                        const htmlContent = "\n                        <!DOCTYPE html>\n                        <html>\n                        <head>\n                            <style>\n                                body {\n                                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;\n                                    padding: 16px;\n                                    background-color: #1a1a1a;\n                                    color: #e2e2e2;\n                                    font-size: 12px;\n                                }\n                                .message {\n                                    padding: 16px;\n                                    background-color: #252525;\n                                    border-radius: 3px;\n                                    text-align: center;\n                                    font-size: 12px;\n                                    color: #a0a0a0;\n                                }\n                            </style>\n                        </head>\n                        <body>\n                            <div class=\"message\">\n                                <p>Your query did not return any results. Run a SELECT query to see results in a table format.</p>\n                            </div>\n                        </body>\n                        </html>";
                        setPreviewContent(htmlContent);
                        outputText = "Query executed successfully, but returned no results.";
                        if (onCodeRun) {
                            // Use true for isWebPreview
                            onCodeRun(htmlContent, outputText, result.time, false);
                        }
                    }
                } catch (error) {
                    console.error("Error formatting SQL results:", error);
                    // If table generation fails, fall back to regular output display
                    outputText += "".concat(result.stdout);
                }
            } else if (result.stdout) {
                // For non-SQL languages, use normal output display
                outputText += "".concat(result.stdout);
            }
            // Store execution time separately instead of adding to output
            if (result.time) {
                setExecutionTime(result.time);
            }
            // If no output was generated
            if (!outputText) {
                outputText = 'No output generated.';
            }
            setOutput(outputText);
            // For non-SQL languages, make sure to notify parent component with updated outputs
            if (language !== 'sql' && onCodeRun) {
                onCodeRun('', outputText, result.time, false);
            }
            // Only set isRunning to false after everything is complete
            setIsRunning(false);
        } catch (error) {
            const errorMessage = "Error: ".concat(error.message);
            setOutput(errorMessage);
            setExecutionTime(''); // Reset execution time on error
            // Notify parent component
            if (onCodeRun) {
                onCodeRun('', errorMessage, undefined, false);
            }
            // Set isRunning to false in case of an error
            setIsRunning(false);
        }
    };
    // Submit the code
    const handleSubmit = ()=>{
        handleCodeSubmit(code);
    };
    // Monaco editor setup
    const handleEditorDidMount = (editor, monaco)=>{
        // You can customize the editor here if needed
        editor.focus();
    };
    // Get the correct Monaco editor language based on active language
    const getMonacoLanguage = (lang)=>{
        if (lang === 'react' || lang === 'nodejs') {
            return 'javascript'; // React and Node.js use JavaScript syntax
        }
        return lang;
    };
    // Helper function to generate HTML table from SQL output
    const generateTableFromSqlOutput = (sqlOutput)=>{
        // Split output into lines
        const lines = sqlOutput.trim().split('\n');
        if (lines.length < 3) {
            return '<div class="no-results">No data returned from query</div>';
        }
        // Start building HTML table
        let tableHtml = '<table><tbody>';
        for(let i = 0; i < lines.length; i++){
            const line = lines[i].trim();
            if (!line) continue; // Skip empty lines
            // Replace multiple spaces with a single delimiter
            const normalizedLine = line.replace(/\s{2,}/g, '|');
            const cells = normalizedLine.split('|').map((c)=>c.trim()).filter((c)=>c);
            tableHtml += '<tr>';
            cells.forEach((cell)=>{
                // Handle NULL values with italic styling
                const cellContent = cell === 'NULL' ? '<em style="color: #a0aec0;">NULL</em>' : cell;
                // Treat all rows the same - no special header row
                tableHtml += "<td>".concat(cellContent, "</td>");
            });
            tableHtml += '</tr>';
        }
        tableHtml += '</tbody></table>';
        return tableHtml;
    };
    // Effect to notify parent when mobile preview changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditorView.useEffect": ()=>{
            if (isMobileView && onCodeRun) {
                // When mobile preview is shown/hidden, notify parent to help with layout adjustments
                onCodeRun(previewContent, output, executionTime, isRunning);
            }
        }
    }["CodeEditorView.useEffect"], [
        showMobilePreview,
        isMobileView
    ]);
    // Use useImperativeHandle to expose getCurrentCode method
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "CodeEditorView.useImperativeHandle": ()=>({
                getCurrentCode: ({
                    "CodeEditorView.useImperativeHandle": ()=>code
                })["CodeEditorView.useImperativeHandle"]
            })
    }["CodeEditorView.useImperativeHandle"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-ac5fccbf86c7ae9e" + " " + "flex flex-col h-full overflow-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                show: showToast,
                title: toastData.title,
                description: toastData.description,
                emoji: toastData.emoji,
                onClose: ()=>setShowToast(false),
                isMobileView: isMobileView
            }, void 0, false, {
                fileName: "[project]/src/components/CodeEditorView.tsx",
                lineNumber: 1157,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "ac5fccbf86c7ae9e",
                children: "@media (max-width:1024px){.mobile-preview-container{z-index:1000;background-color:#111;animation:.3s ease-out slide-up;position:fixed;top:0;bottom:0;left:0;right:0}@keyframes slide-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}.hidden-on-mobile{display:none!important}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            isMobileView && showMobilePreview && (previewContent || output) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ac5fccbf86c7ae9e" + " " + "fixed inset-0 z-50 bg-[#111111]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodePreview, {
                    isRunning: isRunning,
                    previewContent: previewContent,
                    output: output,
                    isWebPreview: hasWebLanguages || activeLanguage === 'react' || activeLanguage === 'sql',
                    executionTime: executionTime,
                    onBack: handleMobileBackClick,
                    isMobileView: true
                }, void 0, false, {
                    fileName: "[project]/src/components/CodeEditorView.tsx",
                    lineNumber: 1198,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/CodeEditorView.tsx",
                lineNumber: 1197,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : null,
            normalizedLanguages.length > 0 && !isMobileView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ac5fccbf86c7ae9e" + " " + "flex items-center overflow-x-auto bg-[#1D1D1D] hide-scrollbar",
                children: normalizedLanguages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setActiveLanguage(lang);
                        },
                        className: "jsx-ac5fccbf86c7ae9e" + " " + "px-4 py-2 text-sm font-medium transition-colors cursor-pointer ".concat(activeLanguage === lang ? 'bg-[#2D2D2D] text-white border-b-2 border-white' : 'text-gray-400 hover:text-white hover:bg-[#222222]'),
                        children: LANGUAGE_DISPLAY_NAMES[lang] || lang
                    }, lang, false, {
                        fileName: "[project]/src/components/CodeEditorView.tsx",
                        lineNumber: 1215,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/CodeEditorView.tsx",
                lineNumber: 1212,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            normalizedLanguages.length > 0 && isMobileView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ac5fccbf86c7ae9e" + " " + "flex items-center overflow-x-auto bg-[#1D1D1D] hide-scrollbar",
                children: normalizedLanguages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setActiveLanguage(lang);
                        },
                        className: "jsx-ac5fccbf86c7ae9e" + " " + "px-3 py-1 text-xs font-medium transition-colors cursor-pointer ".concat(activeLanguage === lang ? 'bg-[#2D2D2D] text-white border-b-2 border-white' : 'text-gray-400 hover:text-white hover:bg-[#222222]'),
                        children: LANGUAGE_DISPLAY_NAMES[lang] || lang
                    }, lang, false, {
                        fileName: "[project]/src/components/CodeEditorView.tsx",
                        lineNumber: 1236,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/CodeEditorView.tsx",
                lineNumber: 1233,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ac5fccbf86c7ae9e" + " " + "flex-1 overflow-auto flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ac5fccbf86c7ae9e" + " " + "".concat(showInputPanel ? 'flex-none' : 'flex-1', " ").concat(showInputPanel ? 'h-2/3' : ''),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$monaco$2d$editor$2b$react$40$4$2e$7$2e$0_$5f$8c8cf720cb7e5db1be243a31428b65f5$2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                            height: "100%",
                            language: getMonacoLanguage(activeLanguage),
                            value: code[activeLanguage],
                            onChange: handleCodeChange,
                            theme: "vs-dark",
                            options: {
                                minimap: {
                                    enabled: false
                                },
                                fontSize: 12,
                                scrollBeyondLastLine: false,
                                automaticLayout: true,
                                tabSize: 2,
                                wordWrap: 'on',
                                lineNumbers: 'off'
                            },
                            onMount: handleEditorDidMount
                        }, void 0, false, {
                            fileName: "[project]/src/components/CodeEditorView.tsx",
                            lineNumber: 1256,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CodeEditorView.tsx",
                        lineNumber: 1255,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    showInputPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ac5fccbf86c7ae9e" + " " + "flex-none h-1/3 border-t border-[#444444] flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ac5fccbf86c7ae9e" + " " + "px-4 py-2 ".concat(inputError ? 'bg-red-800' : 'bg-[#222222]', " text-white text-sm font-medium flex justify-between items-center"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-ac5fccbf86c7ae9e",
                                    children: inputError ? 'Input Required' : 'Add inputs for testing'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CodeEditorView.tsx",
                                    lineNumber: 1279,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/CodeEditorView.tsx",
                                lineNumber: 1278,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                ref: inputRef,
                                value: stdInput,
                                onChange: (e)=>{
                                    setStdInput(e.target.value);
                                    setInputError(false); // Clear error on input change
                                },
                                placeholder: "Add every input to your program in a new line",
                                className: "jsx-ac5fccbf86c7ae9e" + " " + "flex-1 bg-[#1E1E1E] text-white p-4 resize-none font-mono text-sm ".concat(inputError ? 'border border-red-500' : '')
                            }, void 0, false, {
                                fileName: "[project]/src/components/CodeEditorView.tsx",
                                lineNumber: 1281,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CodeEditorView.tsx",
                        lineNumber: 1277,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CodeEditorView.tsx",
                lineNumber: 1253,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ac5fccbf86c7ae9e" + " " + "flex items-center justify-between p-4 border-t border-[#222222]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ac5fccbf86c7ae9e",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCodeRun,
                            disabled: isRunning,
                            className: "jsx-ac5fccbf86c7ae9e" + " " + "flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-700 disabled:opacity-50 text-white rounded-full px-4 py-2 cursor-pointer",
                            children: isRunning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ac5fccbf86c7ae9e" + " " + "animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodeEditorView.tsx",
                                        lineNumber: 1305,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-ac5fccbf86c7ae9e",
                                        children: "Run"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodeEditorView.tsx",
                                        lineNumber: 1306,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodeEditorView.tsx",
                                        lineNumber: 1310,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-ac5fccbf86c7ae9e",
                                        children: "Run"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodeEditorView.tsx",
                                        lineNumber: 1311,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CodeEditorView.tsx",
                            lineNumber: 1298,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CodeEditorView.tsx",
                        lineNumber: 1297,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    [
                        'python'
                    ].includes(activeLanguage) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ac5fccbf86c7ae9e",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setShowInputPanel(!showInputPanel);
                                // Focus the input textarea when showing
                                setTimeout(()=>{
                                    if (!showInputPanel && inputRef.current) {
                                        inputRef.current.focus();
                                    }
                                }, 100);
                            },
                            className: "jsx-ac5fccbf86c7ae9e" + " " + "flex items-center space-x-2 ".concat(showInputPanel ? 'bg-[#444444] text-white' : inputError ? 'bg-red-700 text-white' : 'bg-[#333333] hover:bg-[#444444] text-white', " rounded-full px-4 py-2 cursor-pointer"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CodeEditorView.tsx",
                                    lineNumber: 1333,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-ac5fccbf86c7ae9e",
                                    children: "Input"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CodeEditorView.tsx",
                                    lineNumber: 1334,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CodeEditorView.tsx",
                            lineNumber: 1320,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CodeEditorView.tsx",
                        lineNumber: 1319,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ac5fccbf86c7ae9e",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSubmit,
                            className: "jsx-ac5fccbf86c7ae9e" + " " + "flex items-center space-x-2 bg-white hover:bg-gray-200 text-black rounded-full px-4 py-2 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CodeEditorView.tsx",
                                    lineNumber: 1344,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-ac5fccbf86c7ae9e",
                                    children: "Submit"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CodeEditorView.tsx",
                                    lineNumber: 1345,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CodeEditorView.tsx",
                            lineNumber: 1340,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CodeEditorView.tsx",
                        lineNumber: 1339,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CodeEditorView.tsx",
                lineNumber: 1296,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CodeEditorView.tsx",
        lineNumber: 1155,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
}, "MIVuSO9KGLZ7GOiPsCfPw4rcC9s=")), "MIVuSO9KGLZ7GOiPsCfPw4rcC9s=");
_c2 = CodeEditorView;
const __TURBOPACK__default__export__ = CodeEditorView;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CodePreview");
__turbopack_context__.k.register(_c1, "CodeEditorView$forwardRef");
__turbopack_context__.k.register(_c2, "CodeEditorView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ChatView.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.28.0_react@19.1.1/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatPlaceholderView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChatPlaceholderView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatHistoryView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChatHistoryView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AudioInputComponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AudioInputComponent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodeEditorView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CodeEditorView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEqual.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
const ChatView = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s((param, ref)=>{
    let { currentChatHistory, isAiResponding, showPreparingReport, isChatHistoryLoaded, isTestMode, taskType, currentQuestionConfig, isSubmitting, currentAnswer, handleInputChange, handleSubmitAnswer, handleAudioSubmit, handleViewScorecard, viewOnly = false, completedQuestionIds, currentQuestionId = '', handleRetry, onCodeStateChange, initialIsViewingCode = false, showLearnerView = false, onShowLearnerViewChange, isAdminView = false, userId } = param;
    _s();
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Add ref for CodeEditorView
    const codeEditorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Add state for code editor toggle and preview
    const [isViewingCode, setIsViewingCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialIsViewingCode);
    const [codeContent, setCodeContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [previewContent, setPreviewContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [output, setOutput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [executionTime, setExecutionTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Determine if this is a coding question
    const isCodingQuestion = (currentQuestionConfig === null || currentQuestionConfig === void 0 ? void 0 : currentQuestionConfig.inputType) === 'code';
    // Get coding languages from question config
    const codingLanguages = (currentQuestionConfig === null || currentQuestionConfig === void 0 ? void 0 : currentQuestionConfig.codingLanguages) || [
        'javascript'
    ];
    // Check if web preview is available (HTML, CSS, JS)
    const hasWebLanguages = codingLanguages.some((lang)=>[
            'html',
            'css',
            'javascript',
            'js',
            'sql',
            'react'
        ].includes(lang === null || lang === void 0 ? void 0 : lang.toLowerCase()));
    // Determine if this question is completed
    const isQuestionCompleted = currentQuestionId ? completedQuestionIds[currentQuestionId] : false;
    // Store the previous state for comparison
    const prevStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Update view state when question config changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatView.useEffect": ()=>{
            // Don't set viewing code in viewOnly mode
            if (isCodingQuestion && !viewOnly) {
                // For completed exam questions, always show chat view to see the confirmation
                if ((currentQuestionConfig === null || currentQuestionConfig === void 0 ? void 0 : currentQuestionConfig.responseType) === 'exam' && isQuestionCompleted) {
                    setIsViewingCode(false);
                } else {
                    setIsViewingCode(true);
                }
            } else {
                setIsViewingCode(false);
            }
        }
    }["ChatView.useEffect"], [
        currentQuestionConfig,
        isCodingQuestion,
        viewOnly,
        taskType,
        isQuestionCompleted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "ChatView.useImperativeHandle": ()=>({
                toggleCodeView: ({
                    "ChatView.useImperativeHandle": ()=>{
                        setIsViewingCode({
                            "ChatView.useImperativeHandle": (prev)=>!prev
                        }["ChatView.useImperativeHandle"]);
                    }
                })["ChatView.useImperativeHandle"]
            })
    }["ChatView.useImperativeHandle"]);
    // Extract code from chat history for coding questions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatView.useEffect": ()=>{
            if (!isCodingQuestion) {
                return;
            }
            // Function to extract code from chat history
            const extractCodeFromChatHistory = {
                "ChatView.useEffect.extractCodeFromChatHistory": ()=>{
                    if (currentChatHistory.length === 0) {
                        setCodeContent({});
                        return;
                    }
                    // Filter messages to find code type messages
                    const codeMessages = currentChatHistory.filter({
                        "ChatView.useEffect.extractCodeFromChatHistory.codeMessages": (message)=>message.messageType === 'code' && message.sender === 'user'
                    }["ChatView.useEffect.extractCodeFromChatHistory.codeMessages"]);
                    // Use the most recent code message if any exists
                    if (codeMessages.length > 0) {
                        const lastCodeMessage = codeMessages[codeMessages.length - 1];
                        const codeContent = lastCodeMessage.content;
                        const codeByLanguage = {};
                        try {
                            // Try to parse code sections based on language markers
                            const languagePattern = /\/\/ ([A-Z]+)\n([\s\S]*?)(?=\/\/ [A-Z]+\n|$)/g;
                            let match;
                            let foundAnyMatches = false;
                            while((match = languagePattern.exec(codeContent)) !== null){
                                foundAnyMatches = true;
                                const lang = match[1].toLowerCase();
                                const code = match[2].trim();
                                // Map common language variations
                                const normalizedLang = lang === 'javascript' || lang === 'js' ? 'javascript' : lang === 'html' ? 'html' : lang === 'css' ? 'css' : lang === 'python' || lang === 'py' ? 'python' : lang === 'typescript' || lang === 'ts' ? 'typescript' : lang;
                                codeByLanguage[normalizedLang] = code;
                            }
                            // If no language headers were found, use the content as the first language
                            if (!foundAnyMatches && codingLanguages.length > 0) {
                                codeByLanguage[codingLanguages[0].toLowerCase()] = codeContent;
                            }
                            // Ensure all configured languages have an entry
                            codingLanguages.forEach({
                                "ChatView.useEffect.extractCodeFromChatHistory": (lang)=>{
                                    const normalizedLang = lang.toLowerCase();
                                    if (!codeByLanguage[normalizedLang]) {
                                        // If a language doesn't have code yet, initialize with empty string
                                        codeByLanguage[normalizedLang] = '';
                                    }
                                }
                            }["ChatView.useEffect.extractCodeFromChatHistory"]);
                            // Set the code content for the editor
                            setCodeContent(codeByLanguage);
                        } catch (error) {
                            console.error('Error parsing code from chat history:', error);
                        }
                    }
                }
            }["ChatView.useEffect.extractCodeFromChatHistory"];
            // Check for saved code drafts first
            const fetchSavedCode = {
                "ChatView.useEffect.fetchSavedCode": async ()=>{
                    if (!userId || !currentQuestionId) {
                        return null;
                    }
                    try {
                        const response = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/code/user/").concat(userId, "/question/").concat(currentQuestionId));
                        if (response.ok) {
                            const codeDraft = await response.json();
                            if (codeDraft && codeDraft.code && Array.isArray(codeDraft.code)) {
                                const savedCodeByLanguage = {};
                                codeDraft.code.forEach({
                                    "ChatView.useEffect.fetchSavedCode": (langCode)=>{
                                        savedCodeByLanguage[langCode.language.toLowerCase()] = langCode.value;
                                    }
                                }["ChatView.useEffect.fetchSavedCode"]);
                                return savedCodeByLanguage;
                            }
                        }
                    } catch (error) {
                        console.error('Error fetching saved code:', error);
                    }
                    return null;
                }
            }["ChatView.useEffect.fetchSavedCode"];
            if (isTestMode) {
                extractCodeFromChatHistory();
                return;
            }
            // Try to get saved code first
            fetchSavedCode().then({
                "ChatView.useEffect": (savedCode)=>{
                    if (savedCode && Object.keys(savedCode).length > 0) {
                        setCodeContent(savedCode);
                        return;
                    }
                    // Extract code from chat history if no saved code exists
                    extractCodeFromChatHistory();
                }
            }["ChatView.useEffect"]);
        }
    }["ChatView.useEffect"], [
        currentChatHistory,
        isCodingQuestion,
        codingLanguages,
        userId,
        currentQuestionId
    ]);
    // Notify parent of code state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatView.useEffect": ()=>{
            if (onCodeStateChange && isCodingQuestion) {
                const currentState = {
                    isViewingCode,
                    isRunning,
                    previewContent,
                    output,
                    hasWebLanguages: hasWebLanguages,
                    executionTime
                };
                // Only call onCodeStateChange if the state has actually changed
                if (!prevStateRef.current || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prevStateRef.current, currentState)) {
                    prevStateRef.current = currentState;
                    onCodeStateChange(currentState);
                }
            }
        }
    }["ChatView.useEffect"], [
        isViewingCode,
        isRunning,
        previewContent,
        output,
        hasWebLanguages,
        isCodingQuestion,
        onCodeStateChange,
        executionTime
    ]);
    // Handle code run
    const handleCodeRun = (newPreviewContent, newOutput, newExecutionTime, newIsRunning)=>{
        setPreviewContent(newPreviewContent);
        setOutput(newOutput);
        // Update isRunning based on the parameter if provided, otherwise use previous logic
        if (newIsRunning !== undefined) {
            setIsRunning(newIsRunning);
        } else if (newPreviewContent) {
            // Only set isRunning to false for web preview
            setIsRunning(false);
        }
        if (newExecutionTime !== undefined) {
            setExecutionTime(newExecutionTime);
        }
        // Update parent component with current state
        if (onCodeStateChange) {
            onCodeStateChange({
                isViewingCode,
                isRunning: newIsRunning !== undefined ? newIsRunning : newPreviewContent ? false : isRunning,
                previewContent: newPreviewContent,
                output: newOutput,
                hasWebLanguages: hasWebLanguages,
                executionTime: newExecutionTime || executionTime
            });
        }
    };
    // Handle code submission
    const handleCodeSubmit = async (code)=>{
        // Add code to chat history as a user message
        if (Object.values(code).some((content)=>content.trim())) {
            // Format the code for display in the chat
            // You could display just the active language or all languages
            // For simplicity, we'll combine all languages with headers
            let formattedCode = '';
            // Create a formatted version of the code with language headers
            Object.entries(code).forEach((param)=>{
                let [lang, content] = param;
                if (content.trim()) {
                    formattedCode += "// ".concat(lang.toUpperCase(), "\n").concat(content, "\n\n");
                }
            });
            // Use the existing handleSubmitAnswer, but first set the currentAnswer to the code
            // This is a workaround to reuse existing logic
            handleInputChange({
                target: {
                    value: formattedCode.trim()
                }
            });
            // Then call the submit function
            handleSubmitAnswer('code');
            // Delete any existing code for this question before submitting new code
            if (userId && currentQuestionId) {
                try {
                    await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/code/user/").concat(userId, "/question/").concat(currentQuestionId), {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                } catch (error) {
                    console.error('Error deleting existing code:', error);
                // Continue with submission even if delete fails
                }
            }
            // For exam questions, keep the code editor visible so that users can review their code
            if ((currentQuestionConfig === null || currentQuestionConfig === void 0 ? void 0 : currentQuestionConfig.responseType) !== 'exam') {
                setIsViewingCode(false);
            }
        }
    };
    // Function to adjust textarea height based on content
    const adjustTextareaHeight = ()=>{
        const textarea = textareaRef.current;
        if (!textarea) return;
        // Reset height to auto to get the correct scrollHeight
        textarea.style.height = 'auto';
        // Calculate new height (capped at approximately 6 lines)
        const lineHeight = 24; // Approximate line height in pixels
        const maxHeight = lineHeight * 6; // Max height for 6 lines
        const newHeight = Math.min(textarea.scrollHeight, maxHeight);
        // Set the new height
        textarea.style.height = "".concat(newHeight, "px");
        // Add scrolling if content exceeds maxHeight - ensure this isn't overridden by CSS
        if (textarea.scrollHeight > maxHeight) {
            textarea.style.overflowY = 'scroll';
        } else {
            textarea.style.overflowY = 'hidden';
        }
    };
    // Adjust height when content changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatView.useEffect": ()=>{
            adjustTextareaHeight();
        }
    }["ChatView.useEffect"], [
        currentAnswer
    ]);
    // Reset textarea height when messages are sent
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatView.useEffect": ()=>{
            if (currentAnswer === '' && textareaRef.current) {
                textareaRef.current.style.height = 'auto';
                textareaRef.current.style.overflowY = 'hidden';
            }
        }
    }["ChatView.useEffect"], [
        currentAnswer
    ]);
    // Focus the textarea when the component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatView.useEffect": ()=>{
            if (textareaRef.current && !isViewingCode) {
                textareaRef.current.focus();
            }
        }
    }["ChatView.useEffect"], [
        isViewingCode
    ]);
    // Modified handleKeyPress for textarea
    const handleTextareaKeyDown = (e)=>{
        // Submit on Enter key without shift key
        if (e.key === 'Enter' && !e.shiftKey && currentAnswer.trim()) {
            e.preventDefault(); // Prevent new line
            handleSubmitAnswer();
        }
    };
    // Handle suggestion click
    const handleSuggestionClick = (suggestion)=>{
        // Use the handleInputChange to set the value in the input
        handleInputChange({
            target: {
                value: suggestion
            }
        });
        // Focus the textarea after setting the value
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    };
    // Handle save functionality
    const [showSaveToast, setShowSaveToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSave = async ()=>{
        if (!codeEditorRef.current || !currentQuestionId || isSaving) {
            return;
        }
        setIsSaving(true);
        const currentCode = codeEditorRef.current.getCurrentCode();
        // Convert code object to CodeDraft array
        const codeDrafts = Object.entries(currentCode).map((param)=>{
            let [language, value] = param;
            return {
                language,
                value
            };
        });
        // Only save if there's actual code content
        if (codeDrafts.length === 0 || codeDrafts.every((draft)=>!draft.value.trim())) {
            setIsSaving(false);
            return;
        }
        const requestBody = {
            user_id: parseInt(userId || '0'),
            question_id: parseInt(currentQuestionId),
            code: codeDrafts
        };
        try {
            const response = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/code/"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
            if (!response.ok) {
                throw new Error('Failed to save code');
            }
            console.log('here');
            // Show success toast
            setShowSaveToast(true);
        } catch (error) {
            console.error('Error saving code:', error);
        // Optionally show error feedback
        } finally{
            setIsSaving(false);
        }
    };
    // Auto-hide save toast after 3 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatView.useEffect": ()=>{
            if (showSaveToast) {
                const timer = setTimeout({
                    "ChatView.useEffect.timer": ()=>{
                        setShowSaveToast(false);
                    }
                }["ChatView.useEffect.timer"], 3000);
                return ({
                    "ChatView.useEffect": ()=>clearTimeout(timer)
                })["ChatView.useEffect"];
            }
        }
    }["ChatView.useEffect"], [
        showSaveToast
    ]);
    // Render the code editor or chat view based on state
    const renderMainContent = ()=>{
        // If viewing code and not in viewOnly mode, show the code editor
        if (isViewingCode && isCodingQuestion && !viewOnly) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodeEditorView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ref: codeEditorRef,
                initialCode: codeContent,
                languages: codingLanguages,
                handleCodeSubmit: handleCodeSubmit,
                onCodeRun: handleCodeRun
            }, void 0, false, {
                fileName: "[project]/src/components/ChatView.tsx",
                lineNumber: 482,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0));
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    currentChatHistory.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatPlaceholderView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        taskType: taskType,
                        isChatHistoryLoaded: isChatHistoryLoaded,
                        isTestMode: isTestMode,
                        inputType: currentQuestionConfig === null || currentQuestionConfig === void 0 ? void 0 : currentQuestionConfig.inputType,
                        viewOnly: viewOnly,
                        responseType: currentQuestionConfig === null || currentQuestionConfig === void 0 ? void 0 : currentQuestionConfig.responseType
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatView.tsx",
                        lineNumber: 494,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto messages-container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatHistoryView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            chatHistory: currentChatHistory,
                            onViewScorecard: handleViewScorecard,
                            isAiResponding: isAiResponding,
                            showPreparingReport: showPreparingReport,
                            currentQuestionConfig: currentQuestionConfig,
                            taskType: taskType,
                            onRetry: handleRetry,
                            showLearnerView: showLearnerView,
                            onShowLearnerViewChange: onShowLearnerViewChange,
                            isAdminView: isAdminView
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChatView.tsx",
                            lineNumber: 504,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatView.tsx",
                        lineNumber: 503,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    !viewOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2 bg-[#111111] input-container",
                        children: [
                            taskType === 'learning_material' && currentChatHistory.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-400 text-sm mb-2 flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                size: 16,
                                                className: "mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatView.tsx",
                                                lineNumber: 526,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "A few suggestions to get started"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatView.tsx",
                                                lineNumber: 527,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChatView.tsx",
                                        lineNumber: 525,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "px-3 py-1.5 bg-[#222222] rounded-full text-sm text-white hover:bg-[#333333] transition-colors cursor-pointer",
                                                onClick: ()=>handleSuggestionClick("Explain using an example"),
                                                children: "Explain using an example"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatView.tsx",
                                                lineNumber: 530,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "px-3 py-1.5 bg-[#222222] rounded-full text-sm text-white hover:bg-[#333333] transition-colors cursor-pointer",
                                                onClick: ()=>handleSuggestionClick("Summarise it with clear takeaways"),
                                                children: "Summarise it with clear takeaways"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatView.tsx",
                                                lineNumber: 536,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "px-3 py-1.5 bg-[#222222] rounded-full text-sm text-white hover:bg-[#333333] transition-colors cursor-pointer",
                                                onClick: ()=>handleSuggestionClick("Why is this important to understand"),
                                                children: "Why is this important to understand"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatView.tsx",
                                                lineNumber: 542,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChatView.tsx",
                                        lineNumber: 529,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatView.tsx",
                                lineNumber: 524,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)),
                            !((currentQuestionConfig === null || currentQuestionConfig === void 0 ? void 0 : currentQuestionConfig.responseType) === 'exam' && isQuestionCompleted) && /* Input area - conditional render based on input type */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: (currentQuestionConfig === null || currentQuestionConfig === void 0 ? void 0 : currentQuestionConfig.inputType) === 'audio' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full sm:w-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AudioInputComponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        onAudioSubmit: handleAudioSubmit,
                                        isSubmitting: isSubmitting || isAiResponding,
                                        maxDuration: (currentQuestionConfig === null || currentQuestionConfig === void 0 ? void 0 : currentQuestionConfig.audioMaxDuration) || 120
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatView.tsx",
                                        lineNumber: 557,
                                        columnNumber: 45
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChatView.tsx",
                                    lineNumber: 556,
                                    columnNumber: 41
                                }, ("TURBOPACK compile-time value", void 0)) : /* Hide the text input for coding questions in exam mode */ !((currentQuestionConfig === null || currentQuestionConfig === void 0 ? void 0 : currentQuestionConfig.responseType) === 'exam' && isCodingQuestion) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex items-center bg-[#111111] rounded-3xl py-1 overflow-hidden border border-[#222222]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                id: "no-border-textarea",
                                                ref: textareaRef,
                                                placeholder: taskType === 'quiz' ? "Type your answer here" : "Type your question here",
                                                className: "ml-2 w-full bg-transparent text-white auto-expanding-textarea",
                                                value: currentAnswer,
                                                onChange: handleInputChange,
                                                onKeyDown: handleTextareaKeyDown,
                                                autoFocus: true,
                                                disabled: false,
                                                rows: 1,
                                                style: {
                                                    border: "none",
                                                    outline: "none",
                                                    boxShadow: "none",
                                                    padding: "12px 24px",
                                                    resize: "none"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatView.tsx",
                                                lineNumber: 568,
                                                columnNumber: 53
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChatView.tsx",
                                            lineNumber: 567,
                                            columnNumber: 49
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-white rounded-full w-10 h-10 mr-2 cursor-pointer flex items-center justify-center ".concat(isSubmitting || isAiResponding ? 'opacity-50' : ''),
                                            onClick: ()=>handleSubmitAnswer('text'),
                                            disabled: !currentAnswer.trim() || isSubmitting || isAiResponding,
                                            "aria-label": "Submit answer",
                                            type: "button",
                                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatView.tsx",
                                                lineNumber: 596,
                                                columnNumber: 57
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5 12H19M19 12L12 5M19 12L12 19",
                                                    stroke: "black",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ChatView.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 61
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatView.tsx",
                                                lineNumber: 598,
                                                columnNumber: 57
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChatView.tsx",
                                            lineNumber: 588,
                                            columnNumber: 49
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ChatView.tsx",
                                    lineNumber: 566,
                                    columnNumber: 45
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatView.tsx",
                        lineNumber: 521,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-dd6e499df404ba0" + " " + "flex-1 flex flex-col px-3 sm:px-6 py-6 overflow-auto h-full chat-view-wrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "dd6e499df404ba0",
                children: "#no-border-textarea{box-shadow:none!important;-webkit-appearance:none!important;border:none!important;outline:none!important}#no-border-textarea:focus,#no-border-textarea:focus-within,#no-border-textarea:active{box-shadow:none!important;-webkit-box-shadow:none!important;-moz-box-shadow:none!important;border:none!important;outline:none!important}#no-border-textarea:focus-visible{box-shadow:none!important;-webkit-box-shadow:none!important;-moz-box-shadow:none!important;border:none!important;outline:none!important}.auto-expanding-textarea{min-height:48px;max-height:144px;resize:none!important;line-height:24px!important;overflow-y:auto!important}.hide-scrollbar::-webkit-scrollbar{display:none}.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}@media (max-width:1024px){.chat-view-wrapper{flex-direction:column!important;height:100%!important;max-height:100%!important;padding-top:.75rem!important;padding-bottom:.75rem!important;display:flex!important;overflow:auto!important}.messages-container{flex:1!important;min-height:0!important;max-height:none!important;overflow-y:auto!important}.input-container{flex-shrink:0!important;margin-top:auto!important}.mobile-code-preview{z-index:50!important;background-color:#111!important;position:fixed!important;top:0!important;bottom:0!important;left:0!important;right:0!important}.mobile-code-preview-enter{animation:.3s ease-out slide-up!important}@keyframes slide-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}.mobile-back-button{z-index:60!important;color:#fff!important;background-color:rgba(0,0,0,.5)!important;border:none!important;border-radius:50%!important;justify-content:center!important;align-items:center!important;width:36px!important;height:36px!important;display:flex!important;position:absolute!important;top:12px!important;left:12px!important}}.code-toggle-switch{background-color:#111;border:1px solid #333;border-radius:16px;height:32px;display:inline-block;position:relative;overflow:hidden;box-shadow:0 2px 4px rgba(0,0,0,.2)}.code-toggle-option{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#999;z-index:2;justify-content:center;align-items:center;height:100%;padding:0 12px;font-size:12px;transition:all .2s;display:inline-flex;position:relative}.code-toggle-option.active{color:#fff;background-color:#222}@media (max-width:640px){audio,.audio-recorder-container{width:100%!important}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            !viewOnly && isCodingQuestion && // Hide toggle for exam questions that are completed
            !((currentQuestionConfig === null || currentQuestionConfig === void 0 ? void 0 : currentQuestionConfig.responseType) === 'exam' && isQuestionCompleted) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-dd6e499df404ba0" + " " + "flex items-center mb-4 ".concat(isViewingCode && !isTestMode ? 'justify-between' : 'justify-end'),
                children: [
                    isViewingCode && !isTestMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSave,
                        disabled: isSaving,
                        className: "jsx-dd6e499df404ba0" + " " + "px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition-colors cursor-pointer flex items-center ".concat(isSaving ? 'opacity-75' : ''),
                        children: [
                            isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-dd6e499df404ba0" + " " + "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatView.tsx",
                                lineNumber: 781,
                                columnNumber: 37
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                size: 16,
                                className: "mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatView.tsx",
                                lineNumber: 783,
                                columnNumber: 37
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-dd6e499df404ba0",
                                children: "Save"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatView.tsx",
                                lineNumber: 785,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatView.tsx",
                        lineNumber: 775,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dd6e499df404ba0" + " " + "code-toggle-switch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setIsViewingCode(false),
                                className: "jsx-dd6e499df404ba0" + " " + "code-toggle-option ".concat(!isViewingCode ? 'active' : ''),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        size: 16,
                                        className: "mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatView.tsx",
                                        lineNumber: 795,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-dd6e499df404ba0",
                                        children: "Chat"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatView.tsx",
                                        lineNumber: 796,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatView.tsx",
                                lineNumber: 791,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setIsViewingCode(true),
                                className: "jsx-dd6e499df404ba0" + " " + "code-toggle-option ".concat(isViewingCode ? 'active' : ''),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                        size: 16,
                                        className: "mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatView.tsx",
                                        lineNumber: 802,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-dd6e499df404ba0",
                                        children: "Code"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatView.tsx",
                                        lineNumber: 803,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatView.tsx",
                                lineNumber: 798,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatView.tsx",
                        lineNumber: 790,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChatView.tsx",
                lineNumber: 772,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)),
            renderMainContent(),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                show: showSaveToast,
                title: "Code Saved",
                description: "The code will be restored when you return to this question",
                emoji: "✅",
                onClose: ()=>setShowSaveToast(false)
            }, void 0, false, {
                fileName: "[project]/src/components/ChatView.tsx",
                lineNumber: 813,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChatView.tsx",
        lineNumber: 616,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
}, "353/DwQhuJ9H083eRkFgoSjOpjM=")), "353/DwQhuJ9H083eRkFgoSjOpjM=");
_c1 = ChatView;
const __TURBOPACK__default__export__ = ChatView;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChatView$forwardRef");
__turbopack_context__.k.register(_c1, "ChatView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/LearningMaterialViewer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>LearningMaterialViewer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.28.0_react@19.1.1/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/list-checks.js [app-client] (ecmascript) <export default as ListChecks>");
// Import the BlockNoteEditor component
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlockNoteEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BlockNoteEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$localStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/localStorage.ts [app-client] (ecmascript)");
// Add import for ChatView
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChatView.tsx [app-client] (ecmascript)");
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
function LearningMaterialViewer(param) {
    let { taskId, userId = '', isDarkMode = true, className = "", readOnly = true, viewOnly = false, onMarkComplete } = param;
    _s();
    const editorContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [taskData, setTaskData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Add state for button animation
    const [showButtonEntrance, setShowButtonEntrance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showButtonPulse, setShowButtonPulse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check if user has clicked the button before
    const [hasClickedFabButton, setHasClickedFabButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add state for mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mobileMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Add state for chat view
    const [showChatView, setShowChatView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chatHistory, setChatHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isAiResponding, setIsAiResponding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentAnswer, setCurrentAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add state to track viewport size
    const [isMobileView, setIsMobileView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add state for chat exit animation
    const [isChatClosing, setIsChatClosing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Mobile view mode for responsive layout
    const [mobileViewMode, setMobileViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('split');
    const initialContent = (taskData === null || taskData === void 0 ? void 0 : taskData.blocks) && taskData.blocks.length > 0 ? taskData.blocks : undefined;
    // Fetch task data when taskId changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearningMaterialViewer.useEffect": ()=>{
            if (taskId) {
                setIsLoading(true);
                // Use AbortController to cancel any in-flight requests
                const controller = new AbortController();
                fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/tasks/").concat(taskId), {
                    signal: controller.signal
                }).then({
                    "LearningMaterialViewer.useEffect": (response)=>{
                        if (!response.ok) {
                            throw new Error("Failed to fetch task: ".concat(response.status));
                        }
                        return response.json();
                    }
                }["LearningMaterialViewer.useEffect"]).then({
                    "LearningMaterialViewer.useEffect": (data)=>{
                        setTaskData(data);
                        setIsLoading(false);
                    }
                }["LearningMaterialViewer.useEffect"]).catch({
                    "LearningMaterialViewer.useEffect": (error)=>{
                        // Ignore AbortError as it's expected when navigating away
                        if (error.name !== 'AbortError') {
                            console.error("Error fetching task data:", error);
                        }
                        setIsLoading(false);
                    }
                }["LearningMaterialViewer.useEffect"]);
                // Clean up function will abort the fetch if the component unmounts
                // or if the effect runs again (i.e., taskId changes)
                return ({
                    "LearningMaterialViewer.useEffect": ()=>{
                        controller.abort();
                    }
                })["LearningMaterialViewer.useEffect"];
            }
        }
    }["LearningMaterialViewer.useEffect"], [
        taskId
    ]);
    // Check localStorage on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearningMaterialViewer.useEffect": ()=>{
            const hasClicked = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$localStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLocalStorage"].getItem('hasClickedLMActionsButton') === 'true';
            setHasClickedFabButton(hasClicked);
        }
    }["LearningMaterialViewer.useEffect"], []);
    // Add effect to manage button animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearningMaterialViewer.useEffect": ()=>{
            // Start entrance animation
            setShowButtonEntrance(true);
            // After entrance animation completes, only start pulse if user hasn't clicked before
            const timer = setTimeout({
                "LearningMaterialViewer.useEffect.timer": ()=>{
                    setShowButtonEntrance(false);
                    // Only show pulse animation if user hasn't clicked the button before
                    if (!hasClickedFabButton) {
                        setShowButtonPulse(true);
                    }
                }
            }["LearningMaterialViewer.useEffect.timer"], 1000);
            return ({
                "LearningMaterialViewer.useEffect": ()=>clearTimeout(timer)
            })["LearningMaterialViewer.useEffect"];
        }
    }["LearningMaterialViewer.useEffect"], [
        hasClickedFabButton
    ]);
    // Function to toggle mobile menu
    const toggleMobileMenu = ()=>{
        setIsMobileMenuOpen((prev)=>!prev);
        // If opening the menu, stop pulse animation and save to localStorage
        if (!isMobileMenuOpen) {
            setShowButtonPulse(false);
            // If this is the first time clicking, save to localStorage
            if (!hasClickedFabButton) {
                setHasClickedFabButton(true);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$localStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLocalStorage"].setItem('hasClickedFabButton', 'true');
            }
        }
    };
    // Add effect to handle clicks outside the mobile menu
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearningMaterialViewer.useEffect": ()=>{
            function handleClickOutside(event) {
                if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.mobile-action-toggle-button')) {
                    setIsMobileMenuOpen(false);
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "LearningMaterialViewer.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["LearningMaterialViewer.useEffect"];
        }
    }["LearningMaterialViewer.useEffect"], []);
    // Add effect to handle viewport size changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearningMaterialViewer.useEffect": ()=>{
            const checkMobileView = {
                "LearningMaterialViewer.useEffect.checkMobileView": ()=>{
                    setIsMobileView(window.innerWidth <= 1024);
                }
            }["LearningMaterialViewer.useEffect.checkMobileView"];
            // Initial check
            checkMobileView();
            // Set up event listener for window resize
            window.addEventListener('resize', checkMobileView);
            // Clean up event listener
            return ({
                "LearningMaterialViewer.useEffect": ()=>{
                    window.removeEventListener('resize', checkMobileView);
                }
            })["LearningMaterialViewer.useEffect"];
        }
    }["LearningMaterialViewer.useEffect"], []);
    // Handle chat input change
    const handleChatInputChange = (e)=>{
        setCurrentAnswer(e.target.value);
    };
    // Create a handle retry function to resubmit the last user message
    const handleRetry = ()=>{
        // Find the last user message
        const lastUserMessage = [
            ...chatHistory
        ].reverse().find((msg)=>msg.sender === 'user');
        if (lastUserMessage) {
            // Store the message content and type before modifying chat history
            const messageContent = lastUserMessage.content;
            const messageType = lastUserMessage.messageType === 'code' ? 'code' : 'text';
            // Filter the chat history to remove error messages and the last user message
            const filteredChatHistory = chatHistory.filter((msg)=>!msg.isError).filter((msg)=>msg.id !== lastUserMessage.id);
            // Update the chat history state
            setChatHistory(filteredChatHistory);
            // Call handleChatSubmit with the filtered history
            handleChatSubmit(messageType, messageContent, filteredChatHistory);
        }
    };
    // Handle chat submit
    const handleChatSubmit = async function() {
        let responseType = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'text', currentResponse = arguments.length > 1 ? arguments[1] : void 0, currentChatHistory = arguments.length > 2 ? arguments[2] : void 0;
        // Use currentResponse if provided (for retry), otherwise use currentAnswer
        const messageContent = currentResponse || currentAnswer;
        if (!messageContent.trim() || !taskId) return;
        // Add user message to chat history
        const newMessage = {
            id: Date.now().toString(),
            content: messageContent,
            sender: 'user',
            timestamp: new Date(),
            messageType: responseType
        };
        const chatHistoryToUse = currentChatHistory ? currentChatHistory : chatHistory;
        // Use the updated chat history instead of relying on the chatHistory state
        const formattedChatHistory = chatHistoryToUse.map((msg)=>({
                role: msg.sender === 'user' ? 'user' : 'assistant',
                content: msg.content,
                response_type: msg.messageType
            }));
        setChatHistory((prev)=>[
                ...prev,
                newMessage
            ]);
        // Only clear currentAnswer if we're not using an override
        if (!currentResponse) {
            setCurrentAnswer('');
        }
        // Set AI responding state
        setIsAiResponding(true);
        setIsSubmitting(true);
        try {
            var _response_body;
            // Prepare the request body
            const responseContent = messageContent.trim();
            const requestBody = {
                user_response: responseContent,
                response_type: 'text',
                task_id: parseInt(taskId),
                chat_history: formattedChatHistory,
                task_type: 'learning_material',
                user_id: userId
            };
            let receivedAnyResponse = false;
            // Make the API call
            const response = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8001"), "/ai/chat"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
            if (!response.ok) {
                throw new Error("API request failed with status ".concat(response.status));
            }
            // Get the response body as a readable stream
            const reader = (_response_body = response.body) === null || _response_body === void 0 ? void 0 : _response_body.getReader();
            if (!reader) {
                throw new Error('ReadableStream not supported');
            }
            // Create a unique ID for the AI message
            const aiMessageId = Date.now().toString();
            // Add initial empty AI message to chat history
            const aiMessage = {
                id: aiMessageId,
                content: '',
                sender: 'ai',
                timestamp: new Date(),
                messageType: 'text'
            };
            // Process the stream
            let accumulatedContent = '';
            const processStream = async ()=>{
                try {
                    while(true){
                        const { done, value } = await reader.read();
                        if (done) {
                            break;
                        }
                        // Decode the value to text
                        const text = new TextDecoder().decode(value);
                        // Split the text into chunks (assuming each chunk is a JSON object)
                        const chunks = text.split('\n').filter((chunk)=>chunk.trim() !== '');
                        for (const chunk of chunks){
                            try {
                                const data = JSON.parse(chunk);
                                // Process the response field if it exists
                                if (data.response) {
                                    // Replace content instead of accumulating it
                                    accumulatedContent = data.response;
                                    if (!receivedAnyResponse) {
                                        receivedAnyResponse = true;
                                        // Stop showing the animation
                                        setIsAiResponding(false);
                                        setChatHistory((prev)=>[
                                                ...prev,
                                                {
                                                    ...aiMessage,
                                                    content: accumulatedContent
                                                }
                                            ]);
                                    } else {
                                        // Update the AI message with the latest content
                                        setChatHistory((prev)=>prev.map((msg)=>msg.id === aiMessageId ? {
                                                    ...msg,
                                                    content: accumulatedContent
                                                } : msg));
                                    }
                                }
                            } catch (e) {
                                console.error('Error parsing JSON chunk:', e);
                            }
                        }
                    }
                } catch (error) {
                    console.error('Error reading stream:', error);
                } finally{
                    // If we never received any feedback, also reset the AI responding state
                    if (!receivedAnyResponse) {
                        setIsAiResponding(false);
                    }
                    setIsSubmitting(false);
                }
            };
            // Start processing the stream
            await processStream();
        } catch (error) {
            console.error('Error in chat submission:', error);
            // Add error message to chat history
            const errorMessage = {
                id: Date.now().toString(),
                content: 'There was an error while processing your response. Please try again.',
                sender: 'ai',
                timestamp: new Date(),
                messageType: 'text',
                isError: true
            };
            setChatHistory((prev)=>[
                    ...prev,
                    errorMessage
                ]);
            // Reset states
            setIsAiResponding(false);
            setIsSubmitting(false);
        }
    };
    // Function to handle audio submission
    const handleAudioSubmit = (audioBlob)=>{};
    // Function to handle viewing scorecard
    const handleViewScorecard = (scorecard)=>{};
    // Handle ask doubt button click
    const handleAskDoubt = ()=>{
        if (showChatView && isMobileView) {
            // For mobile view, start closing animation first
            setIsChatClosing(true);
            // Wait for animation to complete before hiding chat
            setTimeout(()=>{
                setShowChatView(false);
                setIsChatClosing(false);
            }, 300); // Match this with animation duration
        } else {
            setShowChatView((prev)=>!prev);
        }
    };
    // Apply CSS classes based on mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearningMaterialViewer.useEffect": ()=>{
            const container = document.querySelector('.material-view-container');
            if (container) {
                // Remove existing mode classes
                container.classList.remove('mode-split', 'mode-content-full', 'mode-chat-full');
                // Add current mode class
                container.classList.add("mode-".concat(mobileViewMode));
            }
        }
    }["LearningMaterialViewer.useEffect"], [
        mobileViewMode
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-testid": "loading-spinner",
                className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"
            }, void 0, false, {
                fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                lineNumber: 420,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/LearningMaterialViewer.tsx",
            lineNumber: 419,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-70fea8a166baf738" + " " + "w-full h-full ".concat(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "70fea8a166baf738",
                children: '.two-column-grid.jsx-70fea8a166baf738{grid-template-columns:1fr 1fr;height:100%;display:grid}@media (max-width:1024px){.two-column-grid.jsx-70fea8a166baf738{grid-template-rows:50% 50%;grid-template-columns:1fr;height:100%;overflow:hidden}}.material-view-container.jsx-70fea8a166baf738{height:100%!important;max-height:100%!important;display:grid!important;overflow:hidden!important}@media (max-width:1024px){.material-view-container.jsx-70fea8a166baf738{grid-template-rows:50% 50%!important;grid-template-columns:1fr!important;height:100%!important;max-height:100%!important;display:grid!important;overflow:hidden!important}.content-container.jsx-70fea8a166baf738{grid-row:1!important;height:100%!important;max-height:100%!important;overflow-y:auto!important}.chat-container.jsx-70fea8a166baf738{flex-direction:column!important;grid-row:2!important;height:100%!important;max-height:100%!important;display:flex!important;overflow:hidden!important}.chat-container.jsx-70fea8a166baf738 .messages-container.jsx-70fea8a166baf738{flex:1!important;min-height:0!important;overflow-y:auto!important}.chat-container.jsx-70fea8a166baf738 .input-container.jsx-70fea8a166baf738{z-index:10!important;background-color:#111!important;border-top:1px solid #222!important;flex-shrink:0!important;padding-top:.5rem!important;position:-webkit-sticky!important;position:sticky!important;bottom:0!important}.material-view-container.mode-content-full.jsx-70fea8a166baf738{grid-template-rows:100% 0%!important}.material-view-container.mode-content-full.jsx-70fea8a166baf738 .content-container.jsx-70fea8a166baf738{height:100%!important;display:block!important}.material-view-container.mode-content-full.jsx-70fea8a166baf738 .chat-container.jsx-70fea8a166baf738{display:none!important}.material-view-container.mode-chat-full.jsx-70fea8a166baf738{grid-template-rows:0% 100%!important}.material-view-container.mode-chat-full.jsx-70fea8a166baf738 .content-container.jsx-70fea8a166baf738{display:none!important}.material-view-container.mode-chat-full.jsx-70fea8a166baf738 .chat-container.jsx-70fea8a166baf738{height:100%!important;display:flex!important}.material-view-container.mode-split.jsx-70fea8a166baf738{grid-template-rows:50% 50%!important}}@keyframes slide-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes slide-down{0%{transform:translateY(0)}to{transform:translateY(100%)}}@media (max-width:1024px){.content-container.jsx-70fea8a166baf738 .dark-editor.jsx-70fea8a166baf738{max-height:calc(100% - 80px)!important;overflow:auto!important}.mobile-chat-container.jsx-70fea8a166baf738{z-index:50!important;background-color:#111!important;flex-direction:column!important;animation:.3s ease-out forwards slide-up!important;display:flex!important;position:fixed!important;top:0!important;bottom:0!important;left:0!important;right:0!important;overflow:hidden!important}.mobile-chat-container.slide-down.jsx-70fea8a166baf738{animation:.3s ease-out forwards slide-down!important}}@keyframes pulse-ring{0%{box-shadow:0 0 rgba(147,51,234,.7)}70%{box-shadow:0 0 0 10px rgba(147,51,234,0)}to{box-shadow:0 0 rgba(147,51,234,0)}}@keyframes pulse-dot{0%{transform:scale(.95)}70%{transform:scale(1.05)}to{transform:scale(.95)}}@keyframes button-entrance{0%{opacity:0;transform:scale(.5)translateY(20px)}60%{transform:scale(1.1)translateY(-5px)}80%{transform:scale(.95)translateY(2px)}to{opacity:1;transform:scale(1)translateY(0)}}.button-entrance.jsx-70fea8a166baf738{animation:.8s cubic-bezier(.215,.61,.355,1) forwards button-entrance}.button-pulse.jsx-70fea8a166baf738{animation:1.5s cubic-bezier(.215,.61,.355,1) infinite pulse-ring}.button-pulse.jsx-70fea8a166baf738:after{content:"";border-radius:50%;animation:1.5s cubic-bezier(.455,.03,.515,.955) infinite pulse-dot;position:absolute;top:0;bottom:0;left:0;right:0;box-shadow:0 0 8px 4px rgba(147,51,234,.5)}.mobile-action-button.jsx-70fea8a166baf738{width:3.5rem;height:3.5rem;bottom:1.5rem}.mobile-icon.jsx-70fea8a166baf738{margin-right:0}@media (min-width:1025px){.mobile-action-button.jsx-70fea8a166baf738{width:auto;height:3rem;padding:0 1.5rem;bottom:6rem}.mobile-icon.jsx-70fea8a166baf738{margin-right:.5rem}}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-70fea8a166baf738" + " " + "bg-[#111111] material-view-container ".concat(showChatView ? isMobileView ? 'mode-chat-full' : 'two-column-grid rounded-md overflow-hidden split-view-container' : 'mode-content-full'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            overflow: 'auto'
                        },
                        ref: editorContainerRef,
                        className: "jsx-70fea8a166baf738" + " " + "py-6 flex flex-col bg-[#1A1A1A] h-full content-container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-70fea8a166baf738" + " " + "flex-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlockNoteEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                initialContent: initialContent,
                                onChange: ()=>{},
                                isDarkMode: isDarkMode,
                                readOnly: true,
                                className: "dark-editor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                lineNumber: 674,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                            lineNumber: 673,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                        lineNumber: 668,
                        columnNumber: 17
                    }, this),
                    showChatView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-70fea8a166baf738" + " " + "".concat(isMobileView ? "mobile-chat-container ".concat(isChatClosing ? 'slide-down' : '') : 'flex flex-col bg-[#111111] h-full overflow-hidden lg:border-l lg:border-t-0 sm:border-t sm:border-l-0 border-[#222222]', " chat-container"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-70fea8a166baf738" + " " + "chat-header flex justify-between items-center px-4 py-2 border-b border-[#222222]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-70fea8a166baf738" + " " + "text-white text-sm font-light",
                                        children: "Ask your doubts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                        lineNumber: 688,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleAskDoubt,
                                        "aria-label": "Close chat",
                                        className: "jsx-70fea8a166baf738" + " " + "text-white hover:bg-[#222222] rounded-full p-1 transition-colors cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                            lineNumber: 695,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                        lineNumber: 690,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                lineNumber: 687,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                currentChatHistory: chatHistory,
                                isAiResponding: isAiResponding,
                                showPreparingReport: false,
                                isChatHistoryLoaded: true,
                                isTestMode: false,
                                taskType: "learning_material",
                                isSubmitting: isSubmitting,
                                currentAnswer: currentAnswer,
                                handleInputChange: handleChatInputChange,
                                handleSubmitAnswer: handleChatSubmit,
                                handleAudioSubmit: handleAudioSubmit,
                                handleViewScorecard: handleViewScorecard,
                                completedQuestionIds: {},
                                handleRetry: handleRetry
                            }, void 0, false, {
                                fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                lineNumber: 698,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                        lineNumber: 686,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                lineNumber: 666,
                columnNumber: 13
            }, this),
            !showChatView && !viewOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            // For desktop view OR mobile view with no onMarkComplete, directly trigger handleAskDoubt
                            if (!isMobileView || !onMarkComplete) {
                                // For desktop view direct click
                                if (!hasClickedFabButton) {
                                    setHasClickedFabButton(true);
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$localStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLocalStorage"].setItem('hasClickedFabButton', 'true');
                                }
                                handleAskDoubt();
                            } else {
                                // Only toggle menu in mobile view when onMarkComplete exists
                                toggleMobileMenu();
                            }
                        },
                        style: {
                            bottom: '100px'
                        },
                        "aria-label": isMobileMenuOpen ? "Close menu" : "Ask a doubt",
                        className: "jsx-70fea8a166baf738" + " " + "fixed right-6 bottom-12 mobile-action-toggle-button mobile-action-button rounded-full bg-purple-700 text-white flex items-center justify-center shadow-lg z-20 cursor-pointer transition-transform duration-300 focus:outline-none ".concat(showButtonEntrance ? 'button-entrance' : '', " ").concat(showButtonPulse ? 'button-pulse' : ''),
                        children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                            lineNumber: 743,
                            columnNumber: 33
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-70fea8a166baf738" + " " + "lg:hidden",
                                    children: !onMarkComplete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        className: "h-6 w-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                        lineNumber: 753,
                                        columnNumber: 45
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"], {
                                        className: "h-6 w-6",
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                        lineNumber: 755,
                                        columnNumber: 45
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                    lineNumber: 751,
                                    columnNumber: 37
                                }, this),
                                "                                    ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-70fea8a166baf738" + " " + "hidden lg:flex lg:items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                            className: "h-5 w-5 mobile-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                            lineNumber: 758,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-70fea8a166baf738" + " " + "lg:ml-2",
                                            children: "Ask a doubt"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                            lineNumber: 759,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                    lineNumber: 757,
                                    columnNumber: 80
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                        lineNumber: 723,
                        columnNumber: 25
                    }, this),
                    isMobileMenuOpen && onMarkComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)'
                        },
                        "aria-hidden": "true",
                        onClick: ()=>setIsMobileMenuOpen(false),
                        className: "jsx-70fea8a166baf738" + " " + "fixed inset-0 z-10"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                        lineNumber: 767,
                        columnNumber: 29
                    }, this),
                    isMobileMenuOpen && onMarkComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            bottom: '170px'
                        },
                        ref: mobileMenuRef,
                        className: "jsx-70fea8a166baf738" + " " + "lg:hidden fixed right-6 flex flex-col gap-4 items-end z-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-70fea8a166baf738" + " " + "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-70fea8a166baf738" + " " + "bg-black text-white py-2 px-4 rounded-full text-sm shadow-md",
                                        children: "Ask a doubt"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                        lineNumber: 780,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setIsMobileMenuOpen(false);
                                            handleAskDoubt();
                                        },
                                        "aria-label": "Ask a doubt",
                                        className: "jsx-70fea8a166baf738" + " " + "mobile-action-button rounded-full bg-white text-black flex items-center justify-center shadow-md cursor-pointer hover:bg-purple-600 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                            lineNumber: 791,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                        lineNumber: 783,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                lineNumber: 779,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-70fea8a166baf738" + " " + "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-70fea8a166baf738" + " " + "bg-black text-white py-2 px-4 rounded-full text-sm shadow-md",
                                        children: "Mark as complete"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                        lineNumber: 797,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setIsMobileMenuOpen(false);
                                            onMarkComplete();
                                        },
                                        "aria-label": "Mark as complete",
                                        className: "jsx-70fea8a166baf738" + " " + "mobile-action-button rounded-full bg-green-700 text-white flex items-center justify-center shadow-md cursor-pointer hover:bg-purple-600 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                            lineNumber: 808,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                        lineNumber: 800,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                                lineNumber: 796,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LearningMaterialViewer.tsx",
                        lineNumber: 777,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LearningMaterialViewer.tsx",
        lineNumber: 426,
        columnNumber: 9
    }, this);
}
_s(LearningMaterialViewer, "yVT6pqQH9PhsXn+qqB/cTh4T7oU=");
_c = LearningMaterialViewer;
var _c;
__turbopack_context__.k.register(_c, "LearningMaterialViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/LearningMaterialViewer.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/LearningMaterialViewer.tsx [app-client] (ecmascript)"));
}),
}]);

//# sourceMappingURL=src_da2202ed._.js.map