(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/@blocknote+core@0.24.2_@types+hast@3.0.4/node_modules/@blocknote/core/dist/blocknote.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "AudioBlock": ()=>Ki,
    "BlockNoteEditor": ()=>go,
    "BlockNoteSchema": ()=>fe,
    "COLORS_DARK_MODE_DEFAULT": ()=>Bs,
    "COLORS_DEFAULT": ()=>Ss,
    "CodeBlock": ()=>qi,
    "DEFAULT_LINK_PROTOCOL": ()=>Zr,
    "EMPTY_CELL_HEIGHT": ()=>hs,
    "EMPTY_CELL_WIDTH": ()=>Xt,
    "Exporter": ()=>Ts,
    "FILE_AUDIO_ICON_SVG": ()=>Vi,
    "FILE_ICON_SVG": ()=>Oi,
    "FILE_IMAGE_ICON_SVG": ()=>fn,
    "FILE_VIDEO_ICON_SVG": ()=>Rn,
    "FileBlock": ()=>cn,
    "FilePanelProsemirrorPlugin": ()=>Or,
    "FilePanelView": ()=>Hr,
    "FormattingToolbarProsemirrorPlugin": ()=>zr,
    "FormattingToolbarView": ()=>Rr,
    "HTMLToBlocks": ()=>lo,
    "ImageBlock": ()=>vn,
    "LinkToolbarProsemirrorPlugin": ()=>qr,
    "PageBreak": ()=>Qi,
    "SideMenuProsemirrorPlugin": ()=>la,
    "SideMenuView": ()=>aa,
    "SuggestionMenuProseMirrorPlugin": ()=>ua,
    "TableHandlesProsemirrorPlugin": ()=>ga,
    "TableHandlesView": ()=>fa,
    "UniqueID": ()=>ue,
    "UnreachableCaseError": ()=>D,
    "VALID_LINK_PROTOCOLS": ()=>Xr,
    "VideoBlock": ()=>Wn,
    "addIdsToBlock": ()=>Ia,
    "addIdsToBlocks": ()=>Aa,
    "addInlineContentAttributes": ()=>at,
    "addInlineContentKeyboardShortcuts": ()=>Ii,
    "addStyleAttributes": ()=>Di,
    "applyNonSelectableBlockFix": ()=>Mi,
    "assertEmpty": ()=>ls,
    "audioBlockConfig": ()=>Fi,
    "audioParse": ()=>$i,
    "audioPropSchema": ()=>zi,
    "audioRender": ()=>Gi,
    "audioToExternalHTML": ()=>Wi,
    "blockToNode": ()=>J,
    "blocksToMarkdown": ()=>vr,
    "camelToDataKebab": ()=>ye,
    "checkBlockHasDefaultProp": ()=>_s,
    "checkBlockIsDefaultType": ()=>Zn,
    "checkBlockIsFileBlock": ()=>gs,
    "checkBlockIsFileBlockWithPlaceholder": ()=>ks,
    "checkBlockIsFileBlockWithPreview": ()=>bs,
    "checkBlockTypeHasDefaultProp": ()=>Jn,
    "checkDefaultBlockTypeInSchema": ()=>L,
    "checkDefaultInlineContentTypeInSchema": ()=>Xn,
    "checkPageBreakBlocksInSchema": ()=>Qn,
    "cleanHTMLToMarkdown": ()=>Xe,
    "combineByGroup": ()=>Is,
    "contentNodeToInlineContent": ()=>Se,
    "contentNodeToTableContent": ()=>Ht,
    "createAddFileButton": ()=>Hi,
    "createBlockSpec": ()=>he,
    "createBlockSpecFromStronglyTypedTiptapNode": ()=>$,
    "createDefaultBlockDOMOutputSpec": ()=>R,
    "createExternalHTMLExporter": ()=>Ee,
    "createFigureWithCaption": ()=>We,
    "createFileBlockWrapper": ()=>$e,
    "createFileNameWithIcon": ()=>Ri,
    "createInlineContentSpec": ()=>us,
    "createInlineContentSpecFromTipTapNode": ()=>Pi,
    "createInternalBlockSpec": ()=>Dt,
    "createInternalHTMLSerializer": ()=>Si,
    "createInternalInlineContentSpec": ()=>Ai,
    "createInternalStyleSpec": ()=>Rt,
    "createLinkWithCaption": ()=>Te,
    "createResizableFileBlockWrapper": ()=>$t,
    "createStronglyTypedTiptapNode": ()=>G,
    "createStyleSpec": ()=>ps,
    "createStyleSpecFromTipTapMark": ()=>W,
    "createSuggestionMenu": ()=>Es,
    "customizeCodeBlock": ()=>ms,
    "defaultBlockSchema": ()=>Kn,
    "defaultBlockSpecs": ()=>Zt,
    "defaultBlockToHTML": ()=>rt,
    "defaultCodeBlockPropSchema": ()=>Oe,
    "defaultInlineContentSchema": ()=>qn,
    "defaultInlineContentSpecs": ()=>Yt,
    "defaultProps": ()=>C,
    "defaultStyleSchema": ()=>fs,
    "defaultStyleSpecs": ()=>Jt,
    "esmDependencies": ()=>Q,
    "fileBlockConfig": ()=>an,
    "fileParse": ()=>ln,
    "filePropSchema": ()=>rn,
    "fileRender": ()=>sn,
    "fileToExternalHTML": ()=>dn,
    "filenameFromURL": ()=>cs,
    "filterSuggestionItems": ()=>vs,
    "formatKeyboardShortcut": ()=>V,
    "formattingToolbarPluginKey": ()=>Vr,
    "getBlockFromPos": ()=>Ti,
    "getBlockInfo": ()=>X,
    "getBlockInfoFromResolvedPos": ()=>pe,
    "getBlockInfoFromSelection": ()=>_,
    "getBlockInfoWithManualOffset": ()=>Ge,
    "getBlockNoteExtensions": ()=>Ca,
    "getBlockSchemaFromSpecs": ()=>Ut,
    "getDefaultEmojiPickerItems": ()=>Ls,
    "getDefaultSlashMenuItems": ()=>ys,
    "getInlineContentParseRules": ()=>Ni,
    "getInlineContentSchemaFromSpecs": ()=>Ot,
    "getNearestBlockPos": ()=>z,
    "getNodeById": ()=>A,
    "getPageBreakSlashMenuItems": ()=>xs,
    "getParseRules": ()=>Li,
    "getStyleParseRules": ()=>Ui,
    "getStyleSchemaFromSpecs": ()=>Vt,
    "imageBlockConfig": ()=>bn,
    "imageParse": ()=>_n,
    "imagePropSchema": ()=>gn,
    "imageRender": ()=>kn,
    "imageToExternalHTML": ()=>yn,
    "inheritedProps": ()=>jt,
    "initializeESMDependencies": ()=>qe,
    "inlineContentToNodes": ()=>U,
    "insertOrUpdateBlock": ()=>T,
    "isAppleOS": ()=>Bi,
    "isLinkInlineContent": ()=>it,
    "isPartialLinkInlineContent": ()=>Tt,
    "isSafari": ()=>ds,
    "isStyledTextInlineContent": ()=>de,
    "linkToolbarPluginKey": ()=>Kr,
    "locales": ()=>ss,
    "mappingFactory": ()=>Ms,
    "markdownToBlocks": ()=>Tr,
    "mergeCSSClasses": ()=>F,
    "nodeToBlock": ()=>w,
    "nodeToCustomInlineContent": ()=>He,
    "pageBreakConfig": ()=>Xi,
    "pageBreakParse": ()=>Ji,
    "pageBreakRender": ()=>Zi,
    "pageBreakSchema": ()=>Qt,
    "pageBreakToExternalHTML": ()=>Yi,
    "parseEmbedElement": ()=>dt,
    "parseFigureElement": ()=>Be,
    "partialBlockToBlockForTesting": ()=>bo,
    "partialBlocksToBlocksForTesting": ()=>As,
    "propsToAttributes": ()=>me,
    "shikiHighlighterPromiseSymbol": ()=>Le,
    "shikiParserSymbol": ()=>lt,
    "sideMenuPluginKey": ()=>sa,
    "stylePropsToAttributes": ()=>ji,
    "tableContentToNodes": ()=>Ce,
    "tableHandlesPluginKey": ()=>se,
    "updateBlock": ()=>pn,
    "updateBlockCommand": ()=>S,
    "uploadToTmpFilesDotOrg_DEV_ONLY": ()=>Cs,
    "videoBlockConfig": ()=>zn,
    "videoParse": ()=>Gn,
    "videoPropSchema": ()=>Vn,
    "videoRender": ()=>Fn,
    "videoToExternalHTML": ()=>$n,
    "withPageBreak": ()=>ws,
    "wrapInBlockStructure": ()=>be
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-model@1.25.2/node_modules/prosemirror-model/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tiptap+core@2.26.1_@tiptap+pm@2.26.1/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-state@1.4.3/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$highlight$40$0$2e$9$2e$0_b04c224c4ea8eb10efaf40c9f6860b36$2f$node_modules$2f$prosemirror$2d$highlight$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-highlight@0.9.0_b04c224c4ea8eb10efaf40c9f6860b36/node_modules/prosemirror-highlight/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$highlight$40$0$2e$9$2e$0_b04c224c4ea8eb10efaf40c9f6860b36$2f$node_modules$2f$prosemirror$2d$highlight$2f$dist$2f$shiki$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-highlight@0.9.0_b04c224c4ea8eb10efaf40c9f6860b36/node_modules/prosemirror-highlight/dist/shiki.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shiki$40$1$2e$29$2e$2$2f$node_modules$2f$shiki$2f$dist$2f$langs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shiki$40$1$2e$29$2e$2$2f$node_modules$2f$shiki$2f$dist$2f$bundle$2d$full$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/bundle-full.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$bold$40$2$2e$26_22ad8c7682c29a033e016daa8e93a483$2f$node_modules$2f40$tiptap$2f$extension$2d$bold$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tiptap+extension-bold@2.26_22ad8c7682c29a033e016daa8e93a483/node_modules/@tiptap/extension-bold/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$code$40$2$2e$26_4430715cab05490b3fbfd488969392ee$2f$node_modules$2f40$tiptap$2f$extension$2d$code$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tiptap+extension-code@2.26_4430715cab05490b3fbfd488969392ee/node_modules/@tiptap/extension-code/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$italic$40$2$2e$_dadb9088ac1601d4514e39fcdefcc223$2f$node_modules$2f40$tiptap$2f$extension$2d$italic$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tiptap+extension-italic@2._dadb9088ac1601d4514e39fcdefcc223/node_modules/@tiptap/extension-italic/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$strike$40$2$2e$_9d48da7de18b1a8d03c4e7280c96617c$2f$node_modules$2f40$tiptap$2f$extension$2d$strike$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tiptap+extension-strike@2._9d48da7de18b1a8d03c4e7280c96617c/node_modules/@tiptap/extension-strike/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$underline_21faaec7af5ec0862327cf5a79907da8$2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tiptap+extension-underline_21faaec7af5ec0862327cf5a79907da8/node_modules/@tiptap/extension-underline/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$10$2e$4$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-transform@1.10.4/node_modules/prosemirror-transform/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$table$2d$cel_5e867c9678665f6c6c1b8baaa61d917f$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$cell$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tiptap+extension-table-cel_5e867c9678665f6c6c1b8baaa61d917f/node_modules/@tiptap/extension-table-cell/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$table$2d$hea_8ef30ca3990a16aa089ace8834061aa5$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$header$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tiptap+extension-table-hea_8ef30ca3990a16aa089ace8834061aa5/node_modules/@tiptap/extension-table-header/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$table$2d$row_524bb9b2025409ae035fe620fda198e0$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$row$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tiptap+extension-table-row_524bb9b2025409ae035fe620fda198e0/node_modules/@tiptap/extension-table-row/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$tables$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$tables$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-tables@1.7.1/node_modules/prosemirror-tables/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$gapcursor_1aa6cf5191c13c1d9cbdb78c5ff27546$2f$node_modules$2f40$tiptap$2f$extension$2d$gapcursor$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tiptap+extension-gapcursor_1aa6cf5191c13c1d9cbdb78c5ff27546/node_modules/@tiptap/extension-gapcursor/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$hard$2d$brea_6e943ba8cfd6fbd82bbc2aa24b2092fc$2f$node_modules$2f40$tiptap$2f$extension$2d$hard$2d$break$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tiptap+extension-hard-brea_6e943ba8cfd6fbd82bbc2aa24b2092fc/node_modules/@tiptap/extension-hard-break/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$history$40$2_672e48f7f8597914ae8a64923169a03a$2f$node_modules$2f40$tiptap$2f$extension$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tiptap+extension-history@2_672e48f7f8597914ae8a64923169a03a/node_modules/@tiptap/extension-history/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$link$40$2$2e$26_78dc7b864e3f5e606f6a2a621b9177e0$2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tiptap+extension-link@2.26_78dc7b864e3f5e606f6a2a621b9177e0/node_modules/@tiptap/extension-link/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$text$40$2$2e$26_8f74268efa469e06252de0428e41e948$2f$node_modules$2f40$tiptap$2f$extension$2d$text$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tiptap+extension-text@2.26_8f74268efa469e06252de0428e41e948/node_modules/@tiptap/extension-text/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$collabora_002eb8456e34e723cbf083913afe12e5$2f$node_modules$2f40$tiptap$2f$extension$2d$collaboration$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tiptap+extension-collabora_002eb8456e34e723cbf083913afe12e5/node_modules/@tiptap/extension-collaboration/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$collabora_4d2e72688ff4cbf14571663631003101$2f$node_modules$2f40$tiptap$2f$extension$2d$collaboration$2d$cursor$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tiptap+extension-collabora_4d2e72688ff4cbf14571663631003101/node_modules/@tiptap/extension-collaboration-cursor/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$40$2e$1$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-view@1.40.1/node_modules/prosemirror-view/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$dropcursor$40$1$2e$8$2e$2$2f$node_modules$2f$prosemirror$2d$dropcursor$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-dropcursor@1.8.2/node_modules/prosemirror-dropcursor/dist/index.js [app-client] (ecmascript)");
var ko = Object.defineProperty;
var _o = (e, t, o)=>t in e ? ko(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : e[t] = o;
var p = (e, t, o)=>_o(e, typeof t != "symbol" ? t + "" : t, o);
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
;
;
;
;
;
;
;
;
;
const oi = {
    slash_menu: {
        heading: {
            title: "عنوان 1",
            subtext: "يستخدم لعناوين المستوى الأعلى",
            aliases: [
                "ع",
                "عنوان1",
                "ع1"
            ],
            group: "العناوين"
        },
        heading_2: {
            title: "عنوان 2",
            subtext: "يستخدم للأقسام الرئيسية",
            aliases: [
                "ع2",
                "عنوان2",
                "عنوان فرعي"
            ],
            group: "العناوين"
        },
        heading_3: {
            title: "عنوان 3",
            subtext: "يستخدم للأقسام الفرعية والعناوين المجموعة",
            aliases: [
                "ع3",
                "عنوان3",
                "عنوان فرعي"
            ],
            group: "العناوين"
        },
        numbered_list: {
            title: "قائمة مرقمة",
            subtext: "تستخدم لعرض قائمة مرقمة",
            aliases: [
                "ق",
                "عناصر قائمة",
                "قائمة",
                "قائمة مرقمة"
            ],
            group: "الكتل الأساسية"
        },
        bullet_list: {
            title: "قائمة نقطية",
            subtext: "تستخدم لعرض قائمة غير مرتبة",
            aliases: [
                "ق",
                "عناصر قائمة",
                "قائمة",
                "قائمة نقطية"
            ],
            group: "الكتل الأساسية"
        },
        check_list: {
            title: "قائمة تحقق",
            subtext: "تستخدم لعرض قائمة بمربعات التحقق",
            aliases: [
                "قوائم غير مرتبة",
                "عناصر قائمة",
                "قائمة",
                "قائمة تحقق",
                "قائمة التحقق",
                "قائمة مشطوبة",
                "مربع التحقق"
            ],
            group: "الكتل الأساسية"
        },
        paragraph: {
            title: "فقرة",
            subtext: "تستخدم لنص الوثيقة الأساسي",
            aliases: [
                "ف",
                "فقرة"
            ],
            group: "الكتل الأساسية"
        },
        code_block: {
            title: "كود",
            subtext: "يستخدم لعرض الكود مع تحديد الصيغة",
            aliases: [
                "كود",
                "مسبق"
            ],
            group: "الكتل الأساسية"
        },
        page_break: {
            title: "فاصل الصفحة",
            subtext: "فاصل الصفحة",
            aliases: [
                "page",
                "break",
                "separator",
                "فاصل",
                "الصفحة"
            ],
            group: "الكتل الأساسية"
        },
        table: {
            title: "جدول",
            subtext: "يستخدم للجداول",
            aliases: [
                "جدول"
            ],
            group: "متقدم"
        },
        image: {
            title: "صورة",
            subtext: "إدراج صورة",
            aliases: [
                "صورة",
                "رفع صورة",
                "تحميل",
                "صورة",
                "صورة",
                "وسائط",
                "رابط"
            ],
            group: "وسائط"
        },
        video: {
            title: "فيديو",
            subtext: "إدراج فيديو",
            aliases: [
                "فيديو",
                "رفع فيديو",
                "تحميل",
                "فيديو",
                "فيلم",
                "وسائط",
                "رابط"
            ],
            group: "وسائط"
        },
        audio: {
            title: "صوت",
            subtext: "إدراج صوت",
            aliases: [
                "صوت",
                "رفع صوت",
                "تحميل",
                "صوت",
                "صوت",
                "وسائط",
                "رابط"
            ],
            group: "وسائط"
        },
        file: {
            title: "ملف",
            subtext: "إدراج ملف",
            aliases: [
                "ملف",
                "تحميل",
                "تضمين",
                "وسائط",
                "رابط"
            ],
            group: "وسائط"
        },
        emoji: {
            title: "الرموز التعبيرية",
            subtext: "تُستخدم لإدراج رمز تعبيري",
            aliases: [
                "رمز تعبيري",
                "إيموجي",
                "إيموت",
                "عاطفة",
                "وجه"
            ],
            group: "آخرون"
        }
    },
    placeholders: {
        default: "أدخل نصًا أو اكتب '/' للأوامر",
        heading: "عنوان",
        bulletListItem: "قائمة",
        numberedListItem: "قائمة",
        checkListItem: "قائمة"
    },
    file_blocks: {
        image: {
            add_button_text: "إضافة صورة"
        },
        video: {
            add_button_text: "إضافة فيديو"
        },
        audio: {
            add_button_text: "إضافة صوت"
        },
        file: {
            add_button_text: "إضافة ملف"
        }
    },
    // from react package:
    side_menu: {
        add_block_label: "إضافة محتوي",
        drag_handle_label: "فتح قائمة المحتويات"
    },
    drag_handle: {
        delete_menuitem: "حذف",
        colors_menuitem: "ألوان"
    },
    table_handle: {
        delete_column_menuitem: "حذف عمود",
        delete_row_menuitem: "حذف صف",
        add_left_menuitem: "إضافة عمود إلى اليسار",
        add_right_menuitem: "إضافة عمود إلى اليمين",
        add_above_menuitem: "إضافة صف أعلى",
        add_below_menuitem: "إضافة صف أسفل"
    },
    suggestion_menu: {
        no_items_title: "لم يتم العثور على عناصر",
        loading: "جارٍ التحميل…"
    },
    color_picker: {
        text_title: "نص",
        background_title: "خلفية",
        colors: {
            default: "افتراضي",
            gray: "رمادي",
            brown: "بني",
            red: "أحمر",
            orange: "برتقالي",
            yellow: "أصفر",
            green: "أخضر",
            blue: "أزرق",
            purple: "أرجواني",
            pink: "وردي"
        }
    },
    formatting_toolbar: {
        bold: {
            tooltip: "عريض",
            secondary_tooltip: "Mod+B"
        },
        italic: {
            tooltip: "مائل",
            secondary_tooltip: "Mod+I"
        },
        underline: {
            tooltip: "تحته خط",
            secondary_tooltip: "Mod+U"
        },
        strike: {
            tooltip: "مشطوب",
            secondary_tooltip: "Mod+Shift+X"
        },
        code: {
            tooltip: "كود",
            secondary_tooltip: ""
        },
        colors: {
            tooltip: "ألوان"
        },
        link: {
            tooltip: "إنشاء رابط",
            secondary_tooltip: "Mod+K"
        },
        file_caption: {
            tooltip: "تحرير التسمية التوضيحية",
            input_placeholder: "تحرير التسمية التوضيحية"
        },
        file_replace: {
            tooltip: {
                image: "استبدال الصورة",
                video: "استبدال الفيديو",
                audio: "استبدال الصوت",
                file: "استبدال الملف"
            }
        },
        file_rename: {
            tooltip: {
                image: "إعادة تسمية الصورة",
                video: "إعادة تسمية الفيديو",
                audio: "إعادة تسمية الصوت",
                file: "إعادة تسمية الملف"
            },
            input_placeholder: {
                image: "إعادة تسمية الصورة",
                video: "إعادة تسمية الفيديو",
                audio: "إعادة تسمية الصوت",
                file: "إعادة تسمية الملف"
            }
        },
        file_download: {
            tooltip: {
                image: "تنزيل الصورة",
                video: "تنزيل الفيديو",
                audio: "تنزيل الصوت",
                file: "تنزيل الملف"
            }
        },
        file_delete: {
            tooltip: {
                image: "حذف الصورة",
                video: "حذف الفيديو",
                audio: "حذف الصوت",
                file: "حذف الملف"
            }
        },
        file_preview_toggle: {
            tooltip: "تبديل المعاينة"
        },
        nest: {
            tooltip: "محتويات متداخلة",
            secondary_tooltip: "Tab"
        },
        unnest: {
            tooltip: "إلغاء التداخل",
            secondary_tooltip: "Shift+Tab"
        },
        align_left: {
            tooltip: "محاذاة النص إلى اليسار"
        },
        align_center: {
            tooltip: "محاذاة النص في المنتصف"
        },
        align_right: {
            tooltip: "محاذاة النص إلى اليمين"
        },
        align_justify: {
            tooltip: "ضبط النص"
        },
        comment: {
            tooltip: "إضافة ملاحظة"
        }
    },
    file_panel: {
        upload: {
            title: "تحميل",
            file_placeholder: {
                image: "تحميل صورة",
                video: "تحميل فيديو",
                audio: "تحميل صوت",
                file: "تحميل ملف"
            },
            upload_error: "خطأ: فشل التحميل"
        },
        embed: {
            title: "تضمين",
            embed_button: {
                image: "تضمين صورة",
                video: "تضمين فيديو",
                audio: "تضمين صوت",
                file: "تضمين ملف"
            },
            url_placeholder: "أدخل الرابط"
        }
    },
    link_toolbar: {
        delete: {
            tooltip: "إزالة الرابط"
        },
        edit: {
            text: "تحرير الرابط",
            tooltip: "تحرير"
        },
        open: {
            tooltip: "فتح في تبويب جديد"
        },
        form: {
            title_placeholder: "تحرير العنوان",
            url_placeholder: "تحرير الرابط"
        }
    },
    generic: {
        ctrl_shortcut: "Ctrl"
    }
}, ii = {
    slash_menu: {
        heading: {
            title: "Überschrift 1",
            subtext: "Hauptebene Überschrift",
            aliases: [
                "h",
                "überschrift1",
                "h1"
            ],
            group: "Überschriften"
        },
        heading_2: {
            title: "Überschrift 2",
            subtext: "Wichtige Abschnittsüberschrift",
            aliases: [
                "h2",
                "überschrift2",
                "unterüberschrift"
            ],
            group: "Überschriften"
        },
        heading_3: {
            title: "Überschrift 3",
            subtext: "Unterabschnitts- und Gruppenüberschrift",
            aliases: [
                "h3",
                "überschrift3",
                "unterüberschrift"
            ],
            group: "Überschriften"
        },
        numbered_list: {
            title: "Nummerierte Liste",
            subtext: "Liste mit nummerierten Elementen",
            aliases: [
                "ol",
                "li",
                "liste",
                "nummerierteliste",
                "nummerierte liste"
            ],
            group: "Grundlegende blöcke"
        },
        bullet_list: {
            title: "Aufzählungsliste",
            subtext: "Liste mit unnummerierten Elementen",
            aliases: [
                "ul",
                "li",
                "liste",
                "aufzählungsliste",
                "aufzählung liste"
            ],
            group: "Grundlegende blöcke"
        },
        check_list: {
            title: "Checkliste",
            subtext: "Liste mit Kontrollkästchen",
            aliases: [
                "ul",
                "li",
                "liste",
                "checkliste",
                "check liste",
                "geprüfte liste",
                "kontrollkästchen"
            ],
            group: "Grundlegende blöcke"
        },
        paragraph: {
            title: "Absatz",
            subtext: "Der Hauptteil Ihres Dokuments",
            aliases: [
                "p",
                "absatz"
            ],
            group: "Grundlegende blöcke"
        },
        code_block: {
            title: "Codeblock",
            subtext: "Codeblock mit Syntaxhervorhebung",
            aliases: [
                "code",
                "pre"
            ],
            group: "Grundlegende blöcke"
        },
        page_break: {
            title: "Seitenumbruch",
            subtext: "Seitentrenner",
            aliases: [
                "page",
                "break",
                "separator",
                "seitenumbruch",
                "trenner"
            ],
            group: "Grundlegende Blöcke"
        },
        table: {
            title: "Tabelle",
            subtext: "Tabelle mit editierbaren Zellen",
            aliases: [
                "tabelle"
            ],
            group: "Erweitert"
        },
        image: {
            title: "Bild",
            subtext: "Größenveränderbares Bild mit Beschriftung",
            aliases: [
                "bild",
                "bildhochladen",
                "hochladen",
                "img",
                "bild",
                "medien",
                "url"
            ],
            group: "Medien"
        },
        video: {
            title: "Video",
            subtext: "Größenveränderbares Video mit Beschriftung",
            aliases: [
                "video",
                "videoupload",
                "hochladen",
                "mp4",
                "film",
                "medien",
                "url"
            ],
            group: "Medien"
        },
        audio: {
            title: "Audio",
            subtext: "Eingebettetes Audio mit Beschriftung",
            aliases: [
                "audio",
                "audioupload",
                "hochladen",
                "mp3",
                "ton",
                "medien",
                "url"
            ],
            group: "Medien"
        },
        file: {
            title: "Datei",
            subtext: "Eingebettete Datei",
            aliases: [
                "datei",
                "hochladen",
                "einbetten",
                "medien",
                "url"
            ],
            group: "Medien"
        },
        emoji: {
            title: "Emoji",
            subtext: "Nach Emoji suchen und einfügen",
            aliases: [
                "emoji",
                "emote",
                "emotion",
                "gesicht"
            ],
            group: "Andere"
        }
    },
    placeholders: {
        default: "Text eingeben oder '/' für Befehle tippen",
        heading: "Überschrift",
        bulletListItem: "Liste",
        numberedListItem: "Liste",
        checkListItem: "Liste"
    },
    file_blocks: {
        image: {
            add_button_text: "Bild hinzufügen"
        },
        video: {
            add_button_text: "Video hinzufügen"
        },
        audio: {
            add_button_text: "Audio hinzufügen"
        },
        file: {
            add_button_text: "Datei hinzufügen"
        }
    },
    side_menu: {
        add_block_label: "Block hinzufügen",
        drag_handle_label: "Blockmenü öffnen"
    },
    drag_handle: {
        delete_menuitem: "Löschen",
        colors_menuitem: "Farben"
    },
    table_handle: {
        delete_column_menuitem: "Spalte löschen",
        delete_row_menuitem: "Zeile löschen",
        add_left_menuitem: "Spalte links hinzufügen",
        add_right_menuitem: "Spalte rechts hinzufügen",
        add_above_menuitem: "Zeile oberhalb hinzufügen",
        add_below_menuitem: "Zeile unterhalb hinzufügen"
    },
    suggestion_menu: {
        no_items_title: "Keine Elemente gefunden",
        loading: "Laden…"
    },
    color_picker: {
        text_title: "Text",
        background_title: "Hintergrund",
        colors: {
            default: "Standard",
            gray: "Grau",
            brown: "Braun",
            red: "Rot",
            orange: "Orange",
            yellow: "Gelb",
            green: "Grün",
            blue: "Blau",
            purple: "Lila",
            pink: "Rosa"
        }
    },
    formatting_toolbar: {
        bold: {
            tooltip: "Fett",
            secondary_tooltip: "Mod+B"
        },
        italic: {
            tooltip: "Kursiv",
            secondary_tooltip: "Mod+I"
        },
        underline: {
            tooltip: "Unterstrichen",
            secondary_tooltip: "Mod+U"
        },
        strike: {
            tooltip: "Durchgestrichen",
            secondary_tooltip: "Mod+Shift+S"
        },
        code: {
            tooltip: "Code",
            secondary_tooltip: ""
        },
        colors: {
            tooltip: "Farben"
        },
        link: {
            tooltip: "Link erstellen",
            secondary_tooltip: "Mod+K"
        },
        file_caption: {
            tooltip: "Beschriftung bearbeiten",
            input_placeholder: "Beschriftung bearbeiten"
        },
        file_replace: {
            tooltip: {
                image: "Bild ersetzen",
                video: "Video ersetzen",
                audio: "Audio ersetzen",
                file: "Datei ersetzen"
            }
        },
        file_rename: {
            tooltip: {
                image: "Bild umbenennen",
                video: "Video umbenennen",
                audio: "Audio umbenennen",
                file: "Datei umbenennen"
            },
            input_placeholder: {
                image: "Bild umbenennen",
                video: "Video umbenennen",
                audio: "Audio umbenennen",
                file: "Datei umbenennen"
            }
        },
        file_download: {
            tooltip: {
                image: "Bild herunterladen",
                video: "Video herunterladen",
                audio: "Audio herunterladen",
                file: "Datei herunterladen"
            }
        },
        file_delete: {
            tooltip: {
                image: "Bild löschen",
                video: "Video löschen",
                audio: "Audio löschen",
                file: "Datei löschen"
            }
        },
        file_preview_toggle: {
            tooltip: "Vorschau umschalten"
        },
        nest: {
            tooltip: "Block verschachteln",
            secondary_tooltip: "Tab"
        },
        unnest: {
            tooltip: "Block entnesten",
            secondary_tooltip: "Shift+Tab"
        },
        align_left: {
            tooltip: "Text linksbündig"
        },
        align_center: {
            tooltip: "Text zentrieren"
        },
        align_right: {
            tooltip: "Text rechtsbündig"
        },
        align_justify: {
            tooltip: "Text Blocksatz"
        },
        comment: {
            tooltip: "Kommentar hinzufügen"
        }
    },
    file_panel: {
        upload: {
            title: "Hochladen",
            file_placeholder: {
                image: "Bild hochladen",
                video: "Video hochladen",
                audio: "Audio hochladen",
                file: "Datei hochladen"
            },
            upload_error: "Fehler: Hochladen fehlgeschlagen"
        },
        embed: {
            title: "Einbetten",
            embed_button: {
                image: "Bild einbetten",
                video: "Video einbetten",
                audio: "Audio einbetten",
                file: "Datei einbetten"
            },
            url_placeholder: "URL eingeben"
        }
    },
    link_toolbar: {
        delete: {
            tooltip: "Link entfernen"
        },
        edit: {
            text: "Link bearbeiten",
            tooltip: "Bearbeiten"
        },
        open: {
            tooltip: "In neuem Tab öffnen"
        },
        form: {
            title_placeholder: "Titel bearbeiten",
            url_placeholder: "URL bearbeiten"
        }
    },
    generic: {
        ctrl_shortcut: "Strg"
    }
}, Bt = {
    slash_menu: {
        heading: {
            title: "Heading 1",
            subtext: "Top-level heading",
            aliases: [
                "h",
                "heading1",
                "h1"
            ],
            group: "Headings"
        },
        heading_2: {
            title: "Heading 2",
            subtext: "Key section heading",
            aliases: [
                "h2",
                "heading2",
                "subheading"
            ],
            group: "Headings"
        },
        heading_3: {
            title: "Heading 3",
            subtext: "Subsection and group heading",
            aliases: [
                "h3",
                "heading3",
                "subheading"
            ],
            group: "Headings"
        },
        numbered_list: {
            title: "Numbered List",
            subtext: "List with ordered items",
            aliases: [
                "ol",
                "li",
                "list",
                "numberedlist",
                "numbered list"
            ],
            group: "Basic blocks"
        },
        bullet_list: {
            title: "Bullet List",
            subtext: "List with unordered items",
            aliases: [
                "ul",
                "li",
                "list",
                "bulletlist",
                "bullet list"
            ],
            group: "Basic blocks"
        },
        check_list: {
            title: "Check List",
            subtext: "List with checkboxes",
            aliases: [
                "ul",
                "li",
                "list",
                "checklist",
                "check list",
                "checked list",
                "checkbox"
            ],
            group: "Basic blocks"
        },
        paragraph: {
            title: "Paragraph",
            subtext: "The body of your document",
            aliases: [
                "p",
                "paragraph"
            ],
            group: "Basic blocks"
        },
        code_block: {
            title: "Code Block",
            subtext: "Code block with syntax highlighting",
            aliases: [
                "code",
                "pre"
            ],
            group: "Basic blocks"
        },
        page_break: {
            title: "Page Break",
            subtext: "Page separator",
            aliases: [
                "page",
                "break",
                "separator"
            ],
            group: "Basic blocks"
        },
        table: {
            title: "Table",
            subtext: "Table with editable cells",
            aliases: [
                "table"
            ],
            group: "Advanced"
        },
        image: {
            title: "Image",
            subtext: "Resizable image with caption",
            aliases: [
                "image",
                "imageUpload",
                "upload",
                "img",
                "picture",
                "media",
                "url"
            ],
            group: "Media"
        },
        video: {
            title: "Video",
            subtext: "Resizable video with caption",
            aliases: [
                "video",
                "videoUpload",
                "upload",
                "mp4",
                "film",
                "media",
                "url"
            ],
            group: "Media"
        },
        audio: {
            title: "Audio",
            subtext: "Embedded audio with caption",
            aliases: [
                "audio",
                "audioUpload",
                "upload",
                "mp3",
                "sound",
                "media",
                "url"
            ],
            group: "Media"
        },
        file: {
            title: "File",
            subtext: "Embedded file",
            aliases: [
                "file",
                "upload",
                "embed",
                "media",
                "url"
            ],
            group: "Media"
        },
        emoji: {
            title: "Emoji",
            subtext: "Search for and insert an emoji",
            aliases: [
                "emoji",
                "emote",
                "emotion",
                "face"
            ],
            group: "Others"
        }
    },
    placeholders: {
        default: "Enter text or type '/' for commands",
        heading: "Heading",
        bulletListItem: "List",
        numberedListItem: "List",
        checkListItem: "List"
    },
    file_blocks: {
        image: {
            add_button_text: "Add image"
        },
        video: {
            add_button_text: "Add video"
        },
        audio: {
            add_button_text: "Add audio"
        },
        file: {
            add_button_text: "Add file"
        }
    },
    // from react package:
    side_menu: {
        add_block_label: "Add block",
        drag_handle_label: "Open block menu"
    },
    drag_handle: {
        delete_menuitem: "Delete",
        colors_menuitem: "Colors"
    },
    table_handle: {
        delete_column_menuitem: "Delete column",
        delete_row_menuitem: "Delete row",
        add_left_menuitem: "Add column left",
        add_right_menuitem: "Add column right",
        add_above_menuitem: "Add row above",
        add_below_menuitem: "Add row below"
    },
    suggestion_menu: {
        no_items_title: "No items found",
        loading: "Loading…"
    },
    color_picker: {
        text_title: "Text",
        background_title: "Background",
        colors: {
            default: "Default",
            gray: "Gray",
            brown: "Brown",
            red: "Red",
            orange: "Orange",
            yellow: "Yellow",
            green: "Green",
            blue: "Blue",
            purple: "Purple",
            pink: "Pink"
        }
    },
    formatting_toolbar: {
        bold: {
            tooltip: "Bold",
            secondary_tooltip: "Mod+B"
        },
        italic: {
            tooltip: "Italic",
            secondary_tooltip: "Mod+I"
        },
        underline: {
            tooltip: "Underline",
            secondary_tooltip: "Mod+U"
        },
        strike: {
            tooltip: "Strike",
            secondary_tooltip: "Mod+Shift+S"
        },
        code: {
            tooltip: "Code",
            secondary_tooltip: ""
        },
        colors: {
            tooltip: "Colors"
        },
        link: {
            tooltip: "Create link",
            secondary_tooltip: "Mod+K"
        },
        file_caption: {
            tooltip: "Edit caption",
            input_placeholder: "Edit caption"
        },
        file_replace: {
            tooltip: {
                image: "Replace image",
                video: "Replace video",
                audio: "Replace audio",
                file: "Replace file"
            }
        },
        file_rename: {
            tooltip: {
                image: "Rename image",
                video: "Rename video",
                audio: "Rename audio",
                file: "Rename file"
            },
            input_placeholder: {
                image: "Rename image",
                video: "Rename video",
                audio: "Rename audio",
                file: "Rename file"
            }
        },
        file_download: {
            tooltip: {
                image: "Download image",
                video: "Download video",
                audio: "Download audio",
                file: "Download file"
            }
        },
        file_delete: {
            tooltip: {
                image: "Delete image",
                video: "Delete video",
                audio: "Delete audio",
                file: "Delete file"
            }
        },
        file_preview_toggle: {
            tooltip: "Toggle preview"
        },
        nest: {
            tooltip: "Nest block",
            secondary_tooltip: "Tab"
        },
        unnest: {
            tooltip: "Unnest block",
            secondary_tooltip: "Shift+Tab"
        },
        align_left: {
            tooltip: "Align text left"
        },
        align_center: {
            tooltip: "Align text center"
        },
        align_right: {
            tooltip: "Align text right"
        },
        align_justify: {
            tooltip: "Justify text"
        },
        comment: {
            tooltip: "Add comment"
        }
    },
    file_panel: {
        upload: {
            title: "Upload",
            file_placeholder: {
                image: "Upload image",
                video: "Upload video",
                audio: "Upload audio",
                file: "Upload file"
            },
            upload_error: "Error: Upload failed"
        },
        embed: {
            title: "Embed",
            embed_button: {
                image: "Embed image",
                video: "Embed video",
                audio: "Embed audio",
                file: "Embed file"
            },
            url_placeholder: "Enter URL"
        }
    },
    link_toolbar: {
        delete: {
            tooltip: "Remove link"
        },
        edit: {
            text: "Edit link",
            tooltip: "Edit"
        },
        open: {
            tooltip: "Open in new tab"
        },
        form: {
            title_placeholder: "Edit title",
            url_placeholder: "Edit URL"
        }
    },
    generic: {
        ctrl_shortcut: "Ctrl"
    }
}, ni = {
    slash_menu: {
        heading: {
            title: "Encabezado 1",
            subtext: "Encabezado de primer nivel",
            aliases: [
                "h",
                "encabezado1",
                "h1"
            ],
            group: "Encabezados"
        },
        heading_2: {
            title: "Encabezado 2",
            subtext: "Encabezado de sección principal",
            aliases: [
                "h2",
                "encabezado2",
                "subencabezado"
            ],
            group: "Encabezados"
        },
        heading_3: {
            title: "Encabezado 3",
            subtext: "Encabezado de subsección y grupo",
            aliases: [
                "h3",
                "encabezado3",
                "subencabezado"
            ],
            group: "Encabezados"
        },
        numbered_list: {
            title: "Lista Numerada",
            subtext: "Lista con elementos ordenados",
            aliases: [
                "ol",
                "li",
                "lista",
                "lista numerada"
            ],
            group: "Bloques básicos"
        },
        bullet_list: {
            title: "Lista con Viñetas",
            subtext: "Lista con elementos no ordenados",
            aliases: [
                "ul",
                "li",
                "lista",
                "lista con viñetas"
            ],
            group: "Bloques básicos"
        },
        check_list: {
            title: "Lista de Verificación",
            subtext: "Lista con casillas de verificación",
            aliases: [
                "ul",
                "li",
                "lista",
                "lista de verificación",
                "lista de chequeo",
                "checkbox"
            ],
            group: "Bloques básicos"
        },
        paragraph: {
            title: "Párrafo",
            subtext: "El cuerpo de tu documento",
            aliases: [
                "p",
                "párrafo"
            ],
            group: "Bloques básicos"
        },
        code_block: {
            title: "Bloque de Código",
            subtext: "Bloque de código con resaltado de sintaxis",
            aliases: [
                "code",
                "pre"
            ],
            group: "Bloques básicos"
        },
        page_break: {
            title: "Salto de página",
            subtext: "Separador de página",
            aliases: [
                "page",
                "break",
                "separator",
                "salto",
                "separador"
            ],
            group: "Bloques básicos"
        },
        table: {
            title: "Tabla",
            subtext: "Tabla con celdas editables",
            aliases: [
                "tabla"
            ],
            group: "Avanzado"
        },
        image: {
            title: "Imagen",
            subtext: "Imagen redimensionable con leyenda",
            aliases: [
                "imagen",
                "subir imagen",
                "cargar",
                "img",
                "foto",
                "media",
                "url"
            ],
            group: "Medios"
        },
        video: {
            title: "Vídeo",
            subtext: "Vídeo redimensionable con leyenda",
            aliases: [
                "video",
                "subir vídeo",
                "cargar",
                "mp4",
                "película",
                "media",
                "url"
            ],
            group: "Medios"
        },
        audio: {
            title: "Audio",
            subtext: "Audio incrustado con leyenda",
            aliases: [
                "audio",
                "subir audio",
                "cargar",
                "mp3",
                "sonido",
                "media",
                "url"
            ],
            group: "Medios"
        },
        file: {
            title: "Archivo",
            subtext: "Archivo incrustado",
            aliases: [
                "archivo",
                "cargar",
                "incrustar",
                "media",
                "url"
            ],
            group: "Medios"
        },
        emoji: {
            title: "Emoji",
            subtext: "Busca e inserta un emoji",
            aliases: [
                "emoji",
                "emoticono",
                "emoción",
                "cara"
            ],
            group: "Otros"
        }
    },
    placeholders: {
        default: "Escribe o teclea '/' para comandos",
        heading: "Encabezado",
        bulletListItem: "Lista",
        numberedListItem: "Lista",
        checkListItem: "Lista"
    },
    file_blocks: {
        image: {
            add_button_text: "Agregar imagen"
        },
        video: {
            add_button_text: "Agregar vídeo"
        },
        audio: {
            add_button_text: "Agregar audio"
        },
        file: {
            add_button_text: "Agregar archivo"
        }
    },
    side_menu: {
        add_block_label: "Agregar bloque",
        drag_handle_label: "Abrir menú de bloque"
    },
    drag_handle: {
        delete_menuitem: "Eliminar",
        colors_menuitem: "Colores"
    },
    table_handle: {
        delete_column_menuitem: "Eliminar columna",
        delete_row_menuitem: "Eliminar fila",
        add_left_menuitem: "Agregar columna a la izquierda",
        add_right_menuitem: "Agregar columna a la derecha",
        add_above_menuitem: "Agregar fila arriba",
        add_below_menuitem: "Agregar fila abajo"
    },
    suggestion_menu: {
        no_items_title: "No se encontraron elementos",
        loading: "Cargando…"
    },
    color_picker: {
        text_title: "Texto",
        background_title: "Fondo",
        colors: {
            default: "Por defecto",
            gray: "Gris",
            brown: "Marrón",
            red: "Rojo",
            orange: "Naranja",
            yellow: "Amarillo",
            green: "Verde",
            blue: "Azul",
            purple: "Morado",
            pink: "Rosa"
        }
    },
    formatting_toolbar: {
        bold: {
            tooltip: "Negrita",
            secondary_tooltip: "Mod+B"
        },
        italic: {
            tooltip: "Cursiva",
            secondary_tooltip: "Mod+I"
        },
        underline: {
            tooltip: "Subrayado",
            secondary_tooltip: "Mod+U"
        },
        strike: {
            tooltip: "Tachado",
            secondary_tooltip: "Mod+Shift+S"
        },
        code: {
            tooltip: "Código",
            secondary_tooltip: ""
        },
        colors: {
            tooltip: "Colores"
        },
        link: {
            tooltip: "Crear enlace",
            secondary_tooltip: "Mod+K"
        },
        file_caption: {
            tooltip: "Editar leyenda",
            input_placeholder: "Editar leyenda"
        },
        file_replace: {
            tooltip: {
                image: "Reemplazar imagen",
                video: "Reemplazar vídeo",
                audio: "Reemplazar audio",
                file: "Reemplazar archivo"
            }
        },
        file_rename: {
            tooltip: {
                image: "Renombrar imagen",
                video: "Renombrar vídeo",
                audio: "Renombrar audio",
                file: "Renombrar archivo"
            },
            input_placeholder: {
                image: "Renombrar imagen",
                video: "Renombrar vídeo",
                audio: "Renombrar audio",
                file: "Renombrar archivo"
            }
        },
        file_download: {
            tooltip: {
                image: "Descargar imagen",
                video: "Descargar vídeo",
                audio: "Descargar audio",
                file: "Descargar archivo"
            }
        },
        file_delete: {
            tooltip: {
                image: "Eliminar imagen",
                video: "Eliminar vídeo",
                audio: "Eliminar audio",
                file: "Eliminar archivo"
            }
        },
        file_preview_toggle: {
            tooltip: "Alternar vista previa"
        },
        nest: {
            tooltip: "Anidar bloque",
            secondary_tooltip: "Tab"
        },
        unnest: {
            tooltip: "Desanidar bloque",
            secondary_tooltip: "Shift+Tab"
        },
        align_left: {
            tooltip: "Alinear texto a la izquierda"
        },
        align_center: {
            tooltip: "Alinear texto al centro"
        },
        align_right: {
            tooltip: "Alinear texto a la derecha"
        },
        align_justify: {
            tooltip: "Justificar texto"
        },
        comment: {
            tooltip: "Agregar comentario"
        }
    },
    file_panel: {
        upload: {
            title: "Subir",
            file_placeholder: {
                image: "Subir imagen",
                video: "Subir vídeo",
                audio: "Subir audio",
                file: "Subir archivo"
            },
            upload_error: "Error: Fallo en la subida"
        },
        embed: {
            title: "Incrustar",
            embed_button: {
                image: "Incrustar imagen",
                video: "Incrustar vídeo",
                audio: "Incrustar audio",
                file: "Incrustar archivo"
            },
            url_placeholder: "Introduce la URL"
        }
    },
    link_toolbar: {
        delete: {
            tooltip: "Eliminar enlace"
        },
        edit: {
            text: "Editar enlace",
            tooltip: "Editar"
        },
        open: {
            tooltip: "Abrir en nueva pestaña"
        },
        form: {
            title_placeholder: "Editar título",
            url_placeholder: "Editar URL"
        }
    },
    generic: {
        ctrl_shortcut: "Ctrl"
    }
}, ri = {
    slash_menu: {
        heading: {
            title: "Titre 1",
            subtext: "Utilisé pour un titre de premier niveau",
            aliases: [
                "h",
                "titre1",
                "h1"
            ],
            group: "Titres"
        },
        heading_2: {
            title: "Titre 2",
            subtext: "Titre de deuxième niveau Utilisé pour les sections clés",
            aliases: [
                "h2",
                "titre2",
                "sous-titre"
            ],
            group: "Titres"
        },
        heading_3: {
            title: "Titre 3",
            subtext: "Titre de troisième niveau utilisé pour les sous-sections et les titres de groupe",
            aliases: [
                "h3",
                "titre3",
                "sous-titre"
            ],
            group: "Titres"
        },
        numbered_list: {
            title: "Liste Numérotée",
            subtext: "Utilisé pour afficher une liste numérotée",
            aliases: [
                "ol",
                "li",
                "liste",
                "listenumérotée",
                "liste numérotée"
            ],
            group: "Blocs de base"
        },
        bullet_list: {
            title: "Liste à puces",
            subtext: "Utilisé pour afficher une liste à puce non numérotée",
            aliases: [
                "ul",
                "li",
                "liste",
                "listeàpuces",
                "liste à puces",
                "bullet points",
                "bulletpoints"
            ],
            group: "Blocs de base"
        },
        check_list: {
            title: "Liste de tâches",
            subtext: "Utilisé pour afficher une liste avec des cases à cocher",
            aliases: [
                "ul",
                "li",
                "liste",
                "liste de vérification",
                "liste cochée",
                "case à cocher",
                "checklist",
                "checkbox",
                "check box",
                "to do",
                "todo"
            ],
            group: "Blocs de base"
        },
        paragraph: {
            title: "Paragraphe",
            subtext: "Utilisé pour le corps de votre document",
            aliases: [
                "p",
                "paragraphe",
                "texte"
            ],
            group: "Blocs de base"
        },
        code_block: {
            title: "Bloc de code",
            subtext: "Bloc de code avec coloration syntaxique",
            aliases: [
                "code",
                "pre"
            ],
            group: "Blocs de base"
        },
        page_break: {
            title: "Saut de page",
            subtext: "Séparateur de page",
            aliases: [
                "page",
                "break",
                "separator",
                "saut",
                "séparateur"
            ],
            group: "Blocs de base"
        },
        table: {
            title: "Tableau",
            subtext: "Utilisé pour les tableaux",
            aliases: [
                "tableau",
                "grille"
            ],
            group: "Avancé"
        },
        image: {
            title: "Image",
            subtext: "Insérer une image",
            aliases: [
                "image",
                "uploadImage",
                "télécharger image",
                "téléverser image",
                "uploader image",
                "img",
                "photo",
                "média",
                "url"
            ],
            group: "Médias"
        },
        video: {
            title: "Vidéo",
            subtext: "Insérer une vidéo",
            aliases: [
                "vidéo",
                "télécharger vidéo",
                "téléverser vidéo",
                "mp4",
                "film",
                "média",
                "url"
            ],
            group: "Média"
        },
        audio: {
            title: "Audio",
            subtext: "Insérer un audio",
            aliases: [
                "audio",
                "télécharger audio",
                "téléverser audio",
                "mp3",
                "son",
                "média",
                "url"
            ],
            group: "Média"
        },
        file: {
            title: "Fichier",
            subtext: "Insérer un fichier",
            aliases: [
                "fichier",
                "téléverser fichier",
                "intégrer fichier",
                "insérer fichier",
                "média",
                "url"
            ],
            group: "Média"
        },
        emoji: {
            title: "Emoji",
            subtext: "Utilisé pour insérer un emoji",
            aliases: [
                "emoji",
                "émoticône",
                "émotion",
                "visage",
                "smiley"
            ],
            group: "Autres"
        }
    },
    placeholders: {
        default: "Entrez du texte ou tapez '/' pour faire apparaître les options de mise en page",
        heading: "Titre",
        bulletListItem: "Liste",
        numberedListItem: "Liste",
        checkListItem: "Liste"
    },
    file_blocks: {
        image: {
            add_button_text: "Ajouter une image"
        },
        video: {
            add_button_text: "Ajouter une vidéo"
        },
        audio: {
            add_button_text: "Ajouter un audio"
        },
        file: {
            add_button_text: "Ajouter un fichier"
        }
    },
    // from react package:
    side_menu: {
        add_block_label: "Ajouter un bloc",
        drag_handle_label: "Ouvrir le menu du bloc"
    },
    drag_handle: {
        delete_menuitem: "Supprimer",
        colors_menuitem: "Couleurs"
    },
    table_handle: {
        delete_column_menuitem: "Supprimer la colonne",
        delete_row_menuitem: "Supprimer la ligne",
        add_left_menuitem: "Ajouter une colonne à gauche",
        add_right_menuitem: "Ajouter une colonne à droite",
        add_above_menuitem: "Ajouter une ligne au-dessus",
        add_below_menuitem: "Ajouter une ligne en dessous"
    },
    suggestion_menu: {
        no_items_title: "Aucun élément trouvé",
        loading: "Chargement…"
    },
    color_picker: {
        text_title: "Texte",
        background_title: "Fond",
        colors: {
            default: "Défaut",
            gray: "Gris",
            brown: "Marron",
            red: "Rouge",
            orange: "Orange",
            yellow: "Jaune",
            green: "Vert",
            blue: "Bleu",
            purple: "Violet",
            pink: "Rose"
        }
    },
    formatting_toolbar: {
        bold: {
            tooltip: "Gras",
            secondary_tooltip: "Mod+B"
        },
        italic: {
            tooltip: "Italique",
            secondary_tooltip: "Mod+I"
        },
        underline: {
            tooltip: "Souligner",
            secondary_tooltip: "Mod+U"
        },
        strike: {
            tooltip: "Barré",
            secondary_tooltip: "Mod+Shift+X"
        },
        code: {
            tooltip: "Code",
            secondary_tooltip: ""
        },
        colors: {
            tooltip: "Couleurs"
        },
        link: {
            tooltip: "Créer un lien",
            secondary_tooltip: "Mod+K"
        },
        file_caption: {
            tooltip: "Modifier la légende",
            input_placeholder: "Modifier la légende"
        },
        file_replace: {
            tooltip: {
                image: "Remplacer l'image",
                video: "Remplacer la vidéo",
                audio: "Remplacer l'audio",
                file: "Remplacer le fichier"
            }
        },
        file_rename: {
            tooltip: {
                image: "Renommer l'image",
                video: "Renommer la vidéo",
                audio: "Renommer l'audio",
                file: "Renommer le fichier"
            },
            input_placeholder: {
                image: "Renommer l'image",
                video: "Renommer la vidéo",
                audio: "Renommer l'audio",
                file: "Renommer le fichier"
            }
        },
        file_download: {
            tooltip: {
                image: "Télécharger l'image",
                video: "Télécharger la vidéo",
                audio: "Télécharger l'audio",
                file: "Télécharger le fichier"
            }
        },
        file_delete: {
            tooltip: {
                image: "Supprimer l'image",
                video: "Supprimer la vidéo",
                audio: "Supprimer l'audio",
                file: "Supprimer le fichier"
            }
        },
        file_preview_toggle: {
            tooltip: "Basculer l'aperçu"
        },
        nest: {
            tooltip: "Augmenter le retrait du bloc",
            secondary_tooltip: "Tab"
        },
        unnest: {
            tooltip: "Diminuer le retait du bloc",
            secondary_tooltip: "Shift+Tab"
        },
        align_left: {
            tooltip: "Aligner le texte à gauche"
        },
        align_center: {
            tooltip: "Aligner le texte au centre"
        },
        align_right: {
            tooltip: "Aligner le texte à droite"
        },
        align_justify: {
            tooltip: "Justifier le texte"
        },
        comment: {
            tooltip: "Ajouter un commentaire"
        }
    },
    file_panel: {
        upload: {
            title: "Télécharger",
            file_placeholder: {
                image: "Télécharger une image",
                video: "Télécharger une vidéo",
                audio: "Télécharger un fichier audio",
                file: "Télécharger un fichier"
            },
            upload_error: "Erreur : échec du téléchargement"
        },
        embed: {
            title: "Intégrer",
            embed_button: {
                image: "Intégrer une image",
                video: "Intégrer une vidéo",
                audio: "Intégrer un fichier audio",
                file: "Intégrer un fichier"
            },
            url_placeholder: "Entrez l'URL"
        }
    },
    link_toolbar: {
        delete: {
            tooltip: "Supprimer le lien"
        },
        edit: {
            text: "Modifier le lien",
            tooltip: "Modifier"
        },
        open: {
            tooltip: "Ouvrir dans un nouvel onglet"
        },
        form: {
            title_placeholder: "Modifier le titre",
            url_placeholder: "Modifier l'URL"
        }
    },
    generic: {
        ctrl_shortcut: "Ctrl"
    }
}, ai = {
    slash_menu: {
        heading: {
            title: "Naslov 1",
            subtext: "Glavni naslov",
            aliases: [
                "h",
                "naslov1",
                "h1"
            ],
            group: "Naslovi"
        },
        heading_2: {
            title: "Naslov 2",
            subtext: "Naslov poglavlja",
            aliases: [
                "h2",
                "naslov2",
                "podnaslov"
            ],
            group: "Naslovi"
        },
        heading_3: {
            title: "Naslov 3",
            subtext: "Naslov podpoglavlja",
            aliases: [
                "h3",
                "naslov3",
                "podnaslov"
            ],
            group: "Naslovi"
        },
        numbered_list: {
            title: "Numerirani popis",
            subtext: "Popis s numeriranim stavkama",
            aliases: [
                "poredaniPopis",
                "stavkaPopisa",
                "popis",
                "numeriraniPopis",
                "numerirani popis"
            ],
            group: "Osnovni blokovi"
        },
        bullet_list: {
            title: "Popis s oznakama",
            subtext: "Popis s grafičkim oznakama",
            aliases: [
                "neporedaniPopis",
                "stavkaPopisa",
                "popis",
                "popisSOznakama",
                "popis s oznakama"
            ],
            group: "Osnovni blokovi"
        },
        check_list: {
            title: "Check lista",
            subtext: "Popis s kućicama za označavanje",
            aliases: [
                "neporedaniPopis",
                "stavkaPopisa",
                "popis",
                "popisZaProvjeru",
                "check lista",
                "označeni popis",
                "kućicaZaOznačavanje"
            ],
            group: "Osnovni blokovi"
        },
        paragraph: {
            title: "Normalan tekst",
            subtext: "Tekst paragrafa",
            aliases: [
                "p",
                "paragraf"
            ],
            group: "Osnovni blokovi"
        },
        table: {
            title: "Tablica",
            subtext: "Tablica s podesivim ćelijama",
            aliases: [
                "tablica"
            ],
            group: "Napredno"
        },
        page_break: {
            title: "Prijelom stranice",
            subtext: "Razdjelnik stranice",
            aliases: [
                "page",
                "break",
                "separator",
                "prijelom",
                "razdjelnik"
            ],
            group: "Osnovni blokovi"
        },
        image: {
            title: "Slika",
            subtext: "Slika s podesivom veličinom i natpisom",
            aliases: [
                "slika",
                "učitavanjeSlike",
                "učitaj",
                "img",
                "fotografija",
                "medij",
                "url"
            ],
            group: "Mediji"
        },
        video: {
            title: "Video",
            subtext: "Video s podesivom veličinom i natpisom",
            aliases: [
                "video",
                "učitavanjeVidea",
                "učitaj",
                "mp4",
                "film",
                "medij",
                "url"
            ],
            group: "Mediji"
        },
        audio: {
            title: "Audio",
            subtext: "Audio s natpisom",
            aliases: [
                "audio",
                "učitavanjeAudija",
                "učitaj",
                "mp3",
                "zvuk",
                "medij",
                "url"
            ],
            group: "Mediji"
        },
        file: {
            title: "Datoteka",
            subtext: "Ugrađena datoteka",
            aliases: [
                "datoteka",
                "učitaj",
                "ugradi",
                "medij",
                "url"
            ],
            group: "Mediji"
        },
        emoji: {
            title: "Emoji",
            subtext: "Pretraži i umetni emoji",
            aliases: [
                "emoji",
                "emotikon",
                "emocija",
                "lice"
            ],
            group: "Ostalo"
        }
    },
    placeholders: {
        default: "Unesi tekst ili upiši ‘/’ za naredbe",
        heading: "Naslov",
        bulletListItem: "Lista",
        numberedListItem: "Lista",
        checkListItem: "Lista"
    },
    file_blocks: {
        image: {
            add_button_text: "Dodaj sliku"
        },
        video: {
            add_button_text: "Dodaj video"
        },
        audio: {
            add_button_text: "Dodaj audio"
        },
        file: {
            add_button_text: "Dodaj datoteku"
        }
    },
    // from react package:
    side_menu: {
        add_block_label: "Dodaj blok",
        drag_handle_label: "Meni za dodavanje bloka"
    },
    drag_handle: {
        delete_menuitem: "Ukloni",
        colors_menuitem: "Boje"
    },
    table_handle: {
        delete_column_menuitem: "Ukloni stupac",
        delete_row_menuitem: "Ukloni redak",
        add_left_menuitem: "Dodaj stupac lijevo",
        add_right_menuitem: "Dodaj stupac desno",
        add_above_menuitem: "Dodaj redak iznad",
        add_below_menuitem: "Dodaj redak ispod"
    },
    suggestion_menu: {
        no_items_title: "Stavke nisu pronađene",
        loading: "Učitavanje…"
    },
    color_picker: {
        text_title: "Tekst",
        background_title: "Pozadina",
        colors: {
            default: "Zadano",
            gray: "Siva",
            brown: "Smeđa",
            red: "Crvena",
            orange: "Narančasta",
            yellow: "Žuta",
            green: "Zelena",
            blue: "Plava",
            purple: "Ljubičasta",
            pink: "Ružičasta"
        }
    },
    formatting_toolbar: {
        bold: {
            tooltip: "Podebljano",
            secondary_tooltip: "Mod+B"
        },
        italic: {
            tooltip: "Kurziv",
            secondary_tooltip: "Mod+I"
        },
        underline: {
            tooltip: "Podcrtano",
            secondary_tooltip: "Mod+U"
        },
        strike: {
            tooltip: "Precrtano",
            secondary_tooltip: "Mod+Shift+S"
        },
        code: {
            tooltip: "Kod",
            secondary_tooltip: ""
        },
        colors: {
            tooltip: "Boja"
        },
        link: {
            tooltip: "Kreiraj poveznicu",
            secondary_tooltip: "Mod+K"
        },
        file_caption: {
            tooltip: "Uredi natpis",
            input_placeholder: "Uredi natpis"
        },
        file_replace: {
            tooltip: {
                image: "Zamijeni sliku",
                video: "Zamijeni video",
                audio: "Zamijeni audio",
                file: "Zamijeni datoteku"
            }
        },
        file_rename: {
            tooltip: {
                image: "Preimenuj sliku",
                video: "Preimenuj video",
                audio: "Preimenuj audio",
                file: "Preimenuj datoteku"
            },
            input_placeholder: {
                image: "Preimenuj sliku",
                video: "Preimenuj video",
                audio: "Preimenuj audio",
                file: "Preimenuj datoteku"
            }
        },
        file_download: {
            tooltip: {
                image: "Preuzmi sliku",
                video: "Preuzmi video",
                audio: "Preuzmi audio",
                file: "Preuzmi datoteku"
            }
        },
        file_delete: {
            tooltip: {
                image: "Ukloni sliku",
                video: "Ukloni video",
                audio: "Ukloni audio",
                file: "Ukloni datoteku"
            }
        },
        file_preview_toggle: {
            tooltip: "Prikaži/sakrij pregled"
        },
        nest: {
            tooltip: "Ugnijezdi blok",
            secondary_tooltip: "Tab"
        },
        unnest: {
            tooltip: "Razgnijezdi blok",
            secondary_tooltip: "Shift+Tab"
        },
        align_left: {
            tooltip: "Poravnaj tekst lijevo"
        },
        align_center: {
            tooltip: "Poravnaj tekst po sredini"
        },
        align_right: {
            tooltip: "Poravnaj tekst desno"
        },
        align_justify: {
            tooltip: "Poravnaj tekst obostrano"
        },
        comment: {
            tooltip: "Dodaj komentar"
        }
    },
    file_panel: {
        upload: {
            title: "Učitaj",
            file_placeholder: {
                image: "Učitaj sliku",
                video: "Učitaj video",
                audio: "Učitaj audio",
                file: "Učitaj datoteku"
            },
            upload_error: "Pogreška: Učitavanje nije uspjelo"
        },
        embed: {
            title: "Ugradi",
            embed_button: {
                image: "Ugradi sliku",
                video: "Ugradi video",
                audio: "Ugradi audio",
                file: "Ugradi datoteku"
            },
            url_placeholder: "Dodaj URL"
        }
    },
    link_toolbar: {
        delete: {
            tooltip: "Ukloni poveznicu"
        },
        edit: {
            text: "Uredi poveznicu",
            tooltip: "Uredi"
        },
        open: {
            tooltip: "Otvori u novoj kartici"
        },
        form: {
            title_placeholder: "Uredi naslov",
            url_placeholder: "Uredi URL"
        }
    },
    generic: {
        ctrl_shortcut: "Ctrl"
    }
}, si = {
    slash_menu: {
        heading: {
            title: "Fyrirsögn 1",
            subtext: "Notað fyrir efstu fyrirsögn",
            aliases: [
                "h",
                "fyrirsogn1",
                "h1"
            ],
            group: "Fyrirsagnir"
        },
        heading_2: {
            title: "Fyrirsögn 2",
            subtext: "Notað fyrir lykilhluta",
            aliases: [
                "h2",
                "fyrirsogn2",
                "undirfyrirsogn"
            ],
            group: "Fyrirsagnir"
        },
        heading_3: {
            title: "Fyrirsögn 3",
            subtext: "Notað fyrir undirhluta og hópfyrirsagnir",
            aliases: [
                "h3",
                "fyrirsogn3",
                "undirfyrirsogn"
            ],
            group: "Fyrirsagnir"
        },
        numbered_list: {
            title: "Númeruð listi",
            subtext: "Notað til að birta númeraðan lista",
            aliases: [
                "ol",
                "li",
                "listi",
                "numeradurlisti"
            ],
            group: "Grunnblokkar"
        },
        bullet_list: {
            title: "Punktalisti",
            subtext: "Notað til að birta óraðaðan lista",
            aliases: [
                "ul",
                "li",
                "listi",
                "punktalisti"
            ],
            group: "Grunnblokkar"
        },
        check_list: {
            title: "Athugunarlisti",
            subtext: "Notað til að sýna lista með gátreitum",
            aliases: [
                "ul",
                "li",
                "listi",
                "athugunarlisti",
                "merktur listi"
            ],
            group: "Grunnblokkar"
        },
        paragraph: {
            title: "Málsgrein",
            subtext: "Notað fyrir meginmál skjalsins",
            aliases: [
                "p",
                "malsgrein"
            ],
            group: "Grunnblokkar"
        },
        code_block: {
            title: "Kóðablokk",
            subtext: "Kóðablokkur með litskiptingu",
            aliases: [
                "kóði",
                "pre"
            ],
            group: "Grunnblokkar"
        },
        page_break: {
            title: "Síðubrot",
            subtext: "Síðuskil",
            aliases: [
                "page",
                "break",
                "separator",
                "síðubrot",
                "síðuskil"
            ],
            group: "Grunnblokkir"
        },
        table: {
            title: "Tafla",
            subtext: "Notað fyrir töflur",
            aliases: [
                "tafla"
            ],
            group: "Ítarlegt"
        },
        image: {
            title: "Mynd",
            subtext: "Settu inn mynd",
            aliases: [
                "mynd",
                "myndaupphlaed",
                "upphlaed",
                "img",
                "mynd",
                "media",
                "url"
            ],
            group: "Miðlar"
        },
        video: {
            title: "Myndband",
            subtext: "Setja inn myndband",
            aliases: [
                "myndband",
                "videoUpphala",
                "hlaða upp",
                "mp4",
                "kvikmynd",
                "miðill",
                "url"
            ],
            group: "Miðill"
        },
        audio: {
            title: "Hljóð",
            subtext: "Setja inn hljóð",
            aliases: [
                "hljóð",
                "audioUpphala",
                "hlaða upp",
                "mp3",
                "hljóð",
                "miðill",
                "url"
            ],
            group: "Miðlar"
        },
        file: {
            title: "Skrá",
            subtext: "Setja inn skrá",
            aliases: [
                "skrá",
                "hlaða upp",
                "fella inn",
                "miðill",
                "url"
            ],
            group: "Miðlar"
        },
        emoji: {
            title: "Emoji",
            subtext: "Notað til að setja inn smámynd",
            aliases: [
                "emoji",
                "andlitsávísun",
                "tilfinningar",
                "andlit"
            ],
            group: "Annað"
        }
    },
    placeholders: {
        default: "Sláðu inn texta eða skrifaðu '/' fyrir skipanir",
        heading: "Fyrirsögn",
        bulletListItem: "Listi",
        numberedListItem: "Listi",
        checkListItem: "Listi"
    },
    file_blocks: {
        image: {
            add_button_text: "Bæta við mynd"
        },
        video: {
            add_button_text: "Bæta við myndbandi"
        },
        audio: {
            add_button_text: "Bæta við hljóði"
        },
        file: {
            add_button_text: "Bæta við skrá"
        }
    },
    side_menu: {
        add_block_label: "Bæta við blokki",
        drag_handle_label: "Opna blokkarvalmynd"
    },
    drag_handle: {
        delete_menuitem: "Eyða",
        colors_menuitem: "Litir"
    },
    table_handle: {
        delete_column_menuitem: "Eyða dálki",
        delete_row_menuitem: "Eyða röð",
        add_left_menuitem: "Bæta dálki við til vinstri",
        add_right_menuitem: "Bæta dálki við til hægri",
        add_above_menuitem: "Bæta röð við fyrir ofan",
        add_below_menuitem: "Bæta röð við fyrir neðan"
    },
    suggestion_menu: {
        no_items_title: "Engir hlutir fundust",
        loading: "Hleður…"
    },
    color_picker: {
        text_title: "Texti",
        background_title: "Bakgrunnur",
        colors: {
            default: "Sjálfgefið",
            gray: "Grár",
            brown: "Brúnn",
            red: "Rauður",
            orange: "Appelsínugulur",
            yellow: "Gulur",
            green: "Grænn",
            blue: "Blár",
            purple: "Fjólublár",
            pink: "Bleikur"
        }
    },
    formatting_toolbar: {
        bold: {
            tooltip: "Feitletrað",
            secondary_tooltip: "Mod+B"
        },
        italic: {
            tooltip: "Skáletrað",
            secondary_tooltip: "Mod+I"
        },
        underline: {
            tooltip: "Undirstrikað",
            secondary_tooltip: "Mod+U"
        },
        strike: {
            tooltip: "Yfirstrikað",
            secondary_tooltip: "Mod+Shift+X"
        },
        code: {
            tooltip: "Kóði",
            secondary_tooltip: ""
        },
        colors: {
            tooltip: "Litir"
        },
        link: {
            tooltip: "Búa til tengil",
            secondary_tooltip: "Mod+K"
        },
        file_caption: {
            tooltip: "Breyta myndatexta",
            input_placeholder: "Breyta myndatexta"
        },
        file_replace: {
            tooltip: {
                image: "Skipta um mynd",
                video: "Skipta um myndband",
                audio: "Skipta um hljóð",
                file: "Skipta um skrá"
            }
        },
        file_rename: {
            tooltip: {
                image: "Endurnefna mynd",
                video: "Endurnefna myndband",
                audio: "Endurnefna hljóð",
                file: "Endurnefna skrá"
            },
            input_placeholder: {
                image: "Endurnefna mynd",
                video: "Endurnefna myndband",
                audio: "Endurnefna hljóð",
                file: "Endurnefna skrá"
            }
        },
        file_download: {
            tooltip: {
                image: "Sækja mynd",
                video: "Sækja myndband",
                audio: "Sækja hljóð",
                file: "Sækja skrá"
            }
        },
        file_delete: {
            tooltip: {
                image: "Eyða mynd",
                video: "Eyða myndbandi",
                audio: "Eyða hljóði",
                file: "Eyða skrá"
            }
        },
        file_preview_toggle: {
            tooltip: "Skipta um forskoðun"
        },
        nest: {
            tooltip: "Fella blokk saman",
            secondary_tooltip: "Tab"
        },
        unnest: {
            tooltip: "Afþýða blokk",
            secondary_tooltip: "Shift+Tab"
        },
        align_left: {
            tooltip: "Vinstrijafna texta"
        },
        align_center: {
            tooltip: "Miðjustilla texta"
        },
        align_right: {
            tooltip: "Hægrijafna texta"
        },
        align_justify: {
            tooltip: "Jafna texta"
        },
        comment: {
            tooltip: "Bæta við athugun"
        }
    },
    file_panel: {
        upload: {
            title: "Hlaða upp",
            file_placeholder: {
                image: "Hlaða upp mynd",
                video: "Hlaða upp myndband",
                audio: "Hlaða upp hljóð",
                file: "Hlaða upp skrá"
            },
            upload_error: "Villa: Upphleðsla mistókst"
        },
        embed: {
            title: "Innsetja",
            embed_button: {
                image: "Innsetja mynd",
                video: "Innsetja myndband",
                audio: "Innsetja hljóð",
                file: "Innsetja skrá"
            },
            url_placeholder: "Sláðu inn URL"
        }
    },
    link_toolbar: {
        delete: {
            tooltip: "Fjarlægja tengil"
        },
        edit: {
            text: "Breyta tengli",
            tooltip: "Breyta"
        },
        open: {
            tooltip: "Opna í nýjum flipa"
        },
        form: {
            title_placeholder: "Breyta titli",
            url_placeholder: "Breyta URL"
        }
    },
    generic: {
        ctrl_shortcut: "Ctrl"
    }
}, li = {
    slash_menu: {
        heading: {
            title: "Intestazione 1",
            subtext: "Intestazione di primo livello",
            aliases: [
                "h",
                "intestazione1",
                "h1"
            ],
            group: "Intestazioni"
        },
        heading_2: {
            title: "Intestazione 2",
            subtext: "Intestazione di sezione chiave",
            aliases: [
                "h2",
                "intestazione2",
                "sottotitolo"
            ],
            group: "Intestazioni"
        },
        heading_3: {
            title: "Intestazione 3",
            subtext: "Intestazione di sottosezione e gruppo",
            aliases: [
                "h3",
                "intestazione3",
                "sottotitolo"
            ],
            group: "Intestazioni"
        },
        numbered_list: {
            title: "Elenco Numerato",
            subtext: "Elenco con elementi ordinati",
            aliases: [
                "ol",
                "li",
                "elenco",
                "elenconumerato",
                "elenco numerato"
            ],
            group: "Blocchi Base"
        },
        bullet_list: {
            title: "Elenco Puntato",
            subtext: "Elenco con elementi non ordinati",
            aliases: [
                "ul",
                "li",
                "elenco",
                "elencopuntato",
                "elenco puntato"
            ],
            group: "Blocchi Base"
        },
        check_list: {
            title: "Elenco di Controllo",
            subtext: "Elenco con caselle di controllo",
            aliases: [
                "ul",
                "li",
                "elenco",
                "elencocontrollo",
                "elenco controllo",
                "elenco verificato",
                "casella di controllo"
            ],
            group: "Blocchi Base"
        },
        paragraph: {
            title: "Paragrafo",
            subtext: "Il corpo del tuo documento",
            aliases: [
                "p",
                "paragrafo"
            ],
            group: "Blocchi Base"
        },
        code_block: {
            title: "Blocco di Codice",
            subtext: "Blocco di codice con evidenziazione della sintassi",
            aliases: [
                "code",
                "pre"
            ],
            group: "Blocchi Base"
        },
        page_break: {
            title: "Interruzione di Pagina",
            subtext: "Separatore di pagina",
            aliases: [
                "pagina",
                "interruzione",
                "separatore"
            ],
            group: "Blocchi base"
        },
        table: {
            title: "Tabella",
            subtext: "Tabella con celle modificabili",
            aliases: [
                "tabella"
            ],
            group: "Avanzato"
        },
        image: {
            title: "Immagine",
            subtext: "Immagine ridimensionabile con didascalia",
            aliases: [
                "immagine",
                "caricaImmagine",
                "carica",
                "img",
                "foto",
                "media",
                "url"
            ],
            group: "Media"
        },
        video: {
            title: "Video",
            subtext: "Video ridimensionabile con didascalia",
            aliases: [
                "video",
                "caricaVideo",
                "carica",
                "mp4",
                "film",
                "media",
                "url"
            ],
            group: "Media"
        },
        audio: {
            title: "Audio",
            subtext: "Audio incorporato con didascalia",
            aliases: [
                "audio",
                "caricaAudio",
                "carica",
                "mp3",
                "suono",
                "media",
                "url"
            ],
            group: "Media"
        },
        file: {
            title: "File",
            subtext: "File incorporato",
            aliases: [
                "file",
                "carica",
                "embed",
                "media",
                "url"
            ],
            group: "Media"
        },
        emoji: {
            title: "Emoji",
            subtext: "Cerca e inserisci un'emoji",
            aliases: [
                "emoji",
                "emote",
                "emozione",
                "faccia"
            ],
            group: "Altri"
        }
    },
    placeholders: {
        default: "Inserisci testo o digita '/' per i comandi",
        heading: "Intestazione",
        bulletListItem: "Elenco",
        numberedListItem: "Elenco",
        checkListItem: "Elenco"
    },
    file_blocks: {
        image: {
            add_button_text: "Aggiungi immagine"
        },
        video: {
            add_button_text: "Aggiungi video"
        },
        audio: {
            add_button_text: "Aggiungi audio"
        },
        file: {
            add_button_text: "Aggiungi file"
        }
    },
    // from react package:
    side_menu: {
        add_block_label: "Aggiungi blocco",
        drag_handle_label: "Apri menu blocco"
    },
    drag_handle: {
        delete_menuitem: "Elimina",
        colors_menuitem: "Colori"
    },
    table_handle: {
        delete_column_menuitem: "Elimina colonna",
        delete_row_menuitem: "Elimina riga",
        add_left_menuitem: "Aggiungi colonna a sinistra",
        add_right_menuitem: "Aggiungi colonna a destra",
        add_above_menuitem: "Aggiungi riga sopra",
        add_below_menuitem: "Aggiungi riga sotto"
    },
    suggestion_menu: {
        no_items_title: "Nessun elemento trovato",
        loading: "Caricamento…"
    },
    color_picker: {
        text_title: "Testo",
        background_title: "Sfondo",
        colors: {
            default: "Predefinito",
            gray: "Grigio",
            brown: "Marrone",
            red: "Rosso",
            orange: "Arancione",
            yellow: "Giallo",
            green: "Verde",
            blue: "Blu",
            purple: "Viola",
            pink: "Rosa"
        }
    },
    formatting_toolbar: {
        bold: {
            tooltip: "Grassetto",
            secondary_tooltip: "Cmd+B"
        },
        italic: {
            tooltip: "Corsivo",
            secondary_tooltip: "Cmd+I"
        },
        underline: {
            tooltip: "Sottolineato",
            secondary_tooltip: "Cmd+U"
        },
        strike: {
            tooltip: "Barrato",
            secondary_tooltip: "Cmd+Shift+S"
        },
        code: {
            tooltip: "Codice",
            secondary_tooltip: ""
        },
        colors: {
            tooltip: "Colori"
        },
        link: {
            tooltip: "Crea link",
            secondary_tooltip: "Cmd+K"
        },
        file_caption: {
            tooltip: "Modifica didascalia",
            input_placeholder: "Modifica didascalia"
        },
        file_replace: {
            tooltip: {
                image: "Sostituisci immagine",
                video: "Sostituisci video",
                audio: "Sostituisci audio",
                file: "Sostituisci file"
            }
        },
        file_rename: {
            tooltip: {
                image: "Rinomina immagine",
                video: "Rinomina video",
                audio: "Rinomina audio",
                file: "Rinomina file"
            },
            input_placeholder: {
                image: "Rinomina immagine",
                video: "Rinomina video",
                audio: "Rinomina audio",
                file: "Rinomina file"
            }
        },
        file_download: {
            tooltip: {
                image: "Scarica immagine",
                video: "Scarica video",
                audio: "Scarica audio",
                file: "Scarica file"
            }
        },
        file_delete: {
            tooltip: {
                image: "Elimina immagine",
                video: "Elimina video",
                audio: "Elimina audio",
                file: "Elimina file"
            }
        },
        file_preview_toggle: {
            tooltip: "Attiva/disattiva anteprima"
        },
        nest: {
            tooltip: "Annida blocco",
            secondary_tooltip: "Tab"
        },
        unnest: {
            tooltip: "Disannida blocco",
            secondary_tooltip: "Shift+Tab"
        },
        align_left: {
            tooltip: "Allinea testo a sinistra"
        },
        align_center: {
            tooltip: "Allinea testo al centro"
        },
        align_right: {
            tooltip: "Allinea testo a destra"
        },
        align_justify: {
            tooltip: "Giustifica testo"
        },
        comment: {
            tooltip: "Aggiungi commento"
        }
    },
    file_panel: {
        upload: {
            title: "Carica",
            file_placeholder: {
                image: "Carica immagine",
                video: "Carica video",
                audio: "Carica audio",
                file: "Carica file"
            },
            upload_error: "Errore: Caricamento fallito"
        },
        embed: {
            title: "Incorpora",
            embed_button: {
                image: "Incorpora immagine",
                video: "Incorpora video",
                audio: "Incorpora audio",
                file: "Incorpora file"
            },
            url_placeholder: "Inserisci URL"
        }
    },
    link_toolbar: {
        delete: {
            tooltip: "Rimuovi link"
        },
        edit: {
            text: "Modifica link",
            tooltip: "Modifica"
        },
        open: {
            tooltip: "Apri in una nuova scheda"
        },
        form: {
            title_placeholder: "Modifica titolo",
            url_placeholder: "Modifica URL"
        }
    },
    generic: {
        ctrl_shortcut: "Ctrl"
    }
}, di = {
    slash_menu: {
        heading: {
            title: "見出し１",
            subtext: "トップレベルの見出しに使用",
            aliases: [
                "h",
                "見出し１",
                "h1",
                "大見出し"
            ],
            group: "見出し"
        },
        heading_2: {
            title: "見出し２",
            subtext: "重要なセクションに使用",
            aliases: [
                "h2",
                "見出し2",
                "subheading",
                "中見出し"
            ],
            group: "見出し"
        },
        heading_3: {
            title: "見出し３",
            subtext: "セクションやグループの見出しに使用",
            aliases: [
                "h3",
                "見出し3",
                "subheading",
                "小見出し"
            ],
            group: "見出し"
        },
        numbered_list: {
            title: "番号付リスト",
            subtext: "番号付リストを表示するために使用",
            aliases: [
                "ol",
                "li",
                "numberedlist",
                "numbered list",
                "リスト",
                "番号付リスト",
                "番号 リスト"
            ],
            group: "基本ブロック"
        },
        bullet_list: {
            title: "箇条書き",
            subtext: "箇条書きを表示するために使用",
            aliases: [
                "ul",
                "li",
                "bulletlist",
                "bullet list",
                "リスト",
                "箇条書きリスト"
            ],
            group: "基本ブロック"
        },
        check_list: {
            title: "チェックリスト",
            subtext: "チェックボックス付きリストを表示するために使用されます",
            aliases: [
                "ul",
                "li",
                "list",
                "checklist",
                "checked list",
                "リスト",
                "チェックリスト",
                "チェックされたリスト"
            ],
            group: "基本ブロック"
        },
        paragraph: {
            title: "標準テキスト",
            subtext: "本文に使用",
            aliases: [
                "p",
                "paragraph",
                "標準テキスト"
            ],
            group: "基本ブロック"
        },
        code_block: {
            title: "コードブロック",
            subtext: "シンタックスハイライト付きのコードブロック",
            aliases: [
                "code",
                "pre",
                "コード",
                "コードブロック"
            ],
            group: "基本ブロック"
        },
        page_break: {
            title: "改ページ",
            subtext: "ページ区切り",
            aliases: [
                "page",
                "break",
                "separator",
                "改ページ",
                "区切り"
            ],
            group: "基本ブロック"
        },
        table: {
            title: "表",
            subtext: "表に使用",
            aliases: [
                "table",
                "表",
                "テーブル"
            ],
            group: "高度なブロック"
        },
        image: {
            title: "画像",
            subtext: "画像を挿入",
            aliases: [
                "image",
                "imageUpload",
                "upload",
                "img",
                "picture",
                "media",
                "url",
                "画像"
            ],
            group: "メディア"
        },
        video: {
            title: "ビデオ",
            subtext: "ビデオを挿入",
            aliases: [
                "video",
                "videoUpload",
                "upload",
                "mp4",
                "film",
                "media",
                "url",
                "ビデオ"
            ],
            group: "メディア"
        },
        audio: {
            title: "オーディオ",
            subtext: "オーディオを挿入",
            aliases: [
                "audio",
                "audioUpload",
                "upload",
                "mp3",
                "sound",
                "media",
                "url",
                "オーディオ"
            ],
            group: "メディア"
        },
        file: {
            title: "ファイル",
            subtext: "ファイルを挿入",
            aliases: [
                "file",
                "upload",
                "embed",
                "media",
                "url",
                "ファイル"
            ],
            group: "メディア"
        },
        emoji: {
            title: "絵文字",
            subtext: "絵文字を挿入するために使用します",
            aliases: [
                "絵文字",
                "顔文字",
                "感情表現",
                "顔"
            ],
            group: "その他"
        }
    },
    placeholders: {
        default: "テキストを入力するか'/' を入力してコマンド選択",
        heading: "見出し",
        bulletListItem: "リストを追加",
        numberedListItem: "リストを追加",
        checkListItem: "リストを追加"
    },
    file_blocks: {
        image: {
            add_button_text: "画像を追加"
        },
        video: {
            add_button_text: "ビデオを追加"
        },
        audio: {
            add_button_text: "オーディオを追加"
        },
        file: {
            add_button_text: "ファイルを追加"
        }
    },
    // from react package:
    side_menu: {
        add_block_label: "ブロックを追加",
        drag_handle_label: "ブロックメニュー"
    },
    drag_handle: {
        delete_menuitem: "削除",
        colors_menuitem: "色を変更"
    },
    table_handle: {
        delete_column_menuitem: "列を削除",
        delete_row_menuitem: "行を削除",
        add_left_menuitem: "左に列を追加",
        add_right_menuitem: "右に列を追加",
        add_above_menuitem: "上に行を追加",
        add_below_menuitem: "下に行を追加"
    },
    suggestion_menu: {
        no_items_title: "アイテムが見つかりません",
        loading: "読込中…"
    },
    color_picker: {
        text_title: "文字色",
        background_title: "背景色",
        colors: {
            default: "デフォルト",
            gray: "グレー",
            brown: "茶色",
            red: "赤",
            orange: "オレンジ",
            yellow: "黄色",
            green: "緑",
            blue: "青",
            purple: "紫",
            pink: "ピンク"
        }
    },
    formatting_toolbar: {
        bold: {
            tooltip: "太字",
            secondary_tooltip: "Mod+B"
        },
        italic: {
            tooltip: "斜体",
            secondary_tooltip: "Mod+I"
        },
        underline: {
            tooltip: "下線",
            secondary_tooltip: "Mod+U"
        },
        strike: {
            tooltip: "打ち消し",
            secondary_tooltip: "Mod+Shift+X"
        },
        code: {
            tooltip: "コード",
            secondary_tooltip: ""
        },
        colors: {
            tooltip: "色"
        },
        link: {
            tooltip: "リンク",
            secondary_tooltip: "Mod+K"
        },
        file_caption: {
            tooltip: "キャプションを編集",
            input_placeholder: "キャプションを編集"
        },
        file_replace: {
            tooltip: {
                image: "画像を置換",
                video: "ビデオを置換",
                audio: "オーディオを置換",
                file: "ファイルを置換"
            }
        },
        file_rename: {
            tooltip: {
                image: "画像の名前を変更",
                video: "ビデオの名前を変更",
                audio: "オーディオの名前を変更",
                file: "ファイルの名前を変更"
            },
            input_placeholder: {
                image: "画像の名前を変更",
                video: "ビデオの名前を変更",
                audio: "オーディオの名前を変更",
                file: "ファイルの名前を変更"
            }
        },
        file_download: {
            tooltip: {
                image: "画像をダウンロード",
                video: "ビデオをダウンロード",
                audio: "オーディオをダウンロード",
                file: "ファイルをダウンロード"
            }
        },
        file_delete: {
            tooltip: {
                image: "画像を削除",
                video: "ビデオを削除",
                audio: "オーディオを削除",
                file: "ファイルを削除"
            }
        },
        file_preview_toggle: {
            tooltip: "プレビューの切り替え"
        },
        nest: {
            tooltip: "インデント増",
            secondary_tooltip: "Tab"
        },
        unnest: {
            tooltip: "インデント減",
            secondary_tooltip: "Shift+Tab"
        },
        align_left: {
            tooltip: "左揃え"
        },
        align_center: {
            tooltip: "中央揃え"
        },
        align_right: {
            tooltip: "右揃え"
        },
        align_justify: {
            tooltip: "両端揃え"
        },
        comment: {
            tooltip: "コメントを追加"
        }
    },
    file_panel: {
        upload: {
            title: "アップロード",
            file_placeholder: {
                image: "画像をアップロード",
                video: "ビデオをアップロード",
                audio: "オーディオをアップロード",
                file: "ファイルをアップロード"
            },
            upload_error: "エラー: アップロードが失敗しました"
        },
        embed: {
            title: "埋め込み",
            embed_button: {
                image: "画像を埋め込む",
                video: "ビデオを埋め込む",
                audio: "オーディオを埋め込む",
                file: "ファイルを埋め込む"
            },
            url_placeholder: "URLを入力"
        }
    },
    link_toolbar: {
        delete: {
            tooltip: "リンクを解除"
        },
        edit: {
            text: "リンクを編集",
            tooltip: "編集"
        },
        open: {
            tooltip: "新しいタブでリンクを開く"
        },
        form: {
            title_placeholder: "タイトルを編集",
            url_placeholder: "URLを編集"
        }
    },
    generic: {
        ctrl_shortcut: "Ctrl"
    }
}, ci = {
    slash_menu: {
        heading: {
            title: "제목1",
            subtext: "섹션 제목(대)",
            aliases: [
                "h",
                "제목1",
                "h1",
                "대제목"
            ],
            group: "제목"
        },
        heading_2: {
            title: "제목2",
            subtext: "섹션 제목(중)",
            aliases: [
                "h2",
                "제목2",
                "중제목"
            ],
            group: "제목"
        },
        heading_3: {
            title: "제목3",
            subtext: "섹션 제목(소)",
            aliases: [
                "h3",
                "제목3",
                "subheading"
            ],
            group: "제목"
        },
        numbered_list: {
            title: "번호 매기기 목록",
            subtext: "번호가 매겨진 목록을 추가합니다.",
            aliases: [
                "ol",
                "li",
                "목록",
                "번호 매기기 목록",
                "번호 목록"
            ],
            group: "기본 블록"
        },
        bullet_list: {
            title: "글머리 기호 목록",
            subtext: "간단한 글머리 기호를 추가합니다.",
            aliases: [
                "ul",
                "li",
                "목록",
                "글머리 기호 목록",
                "글머리 목록"
            ],
            group: "기본 블록"
        },
        check_list: {
            title: "체크리스트",
            subtext: "체크박스가 있는 목록을 표시하는 데 사용",
            aliases: [
                "ul",
                "li",
                "목록",
                "체크리스트",
                "체크 리스트",
                "체크된 목록",
                "체크박스"
            ],
            group: "기본 블록"
        },
        paragraph: {
            title: "본문",
            subtext: "일반 텍스트",
            aliases: [
                "p",
                "paragraph",
                "본문"
            ],
            group: "기본 블록"
        },
        code_block: {
            title: "코드 블록",
            subtext: "구문 강조가 있는 코드 블록",
            aliases: [
                "code",
                "pre"
            ],
            group: "기본 블록"
        },
        page_break: {
            title: "페이지 나누기",
            subtext: "페이지 구분자",
            aliases: [
                "page",
                "break",
                "separator",
                "페이지",
                "구분자"
            ],
            group: "기본 블록"
        },
        table: {
            title: "표",
            subtext: "간단한 표를 추가합니다.",
            aliases: [
                "표"
            ],
            group: "고급"
        },
        image: {
            title: "이미지",
            subtext: "이미지 파일을 업로드합니다.",
            aliases: [
                "image",
                "imageUpload",
                "upload",
                "img",
                "picture",
                "media",
                "이미지",
                "url"
            ],
            group: "미디어"
        },
        video: {
            title: "비디오",
            subtext: "비디오 삽입",
            aliases: [
                "video",
                "videoUpload",
                "upload",
                "mp4",
                "film",
                "media",
                "동영상",
                "url"
            ],
            group: "미디어"
        },
        audio: {
            title: "오디오",
            subtext: "오디오 삽입",
            aliases: [
                "audio",
                "audioUpload",
                "upload",
                "mp3",
                "sound",
                "media",
                "오디오",
                "url"
            ],
            group: "미디어"
        },
        file: {
            title: "파일",
            subtext: "파일 삽입",
            aliases: [
                "file",
                "upload",
                "embed",
                "media",
                "파일",
                "url"
            ],
            group: "미디어"
        },
        emoji: {
            title: "이모지",
            subtext: "이모지 삽입용으로 사용됩니다",
            aliases: [
                "이모지",
                "emoji",
                "감정 표현",
                "emotion expression",
                "표정",
                "face expression",
                "얼굴",
                "face"
            ],
            group: "기타"
        }
    },
    placeholders: {
        default: "텍스트를 입력하거나 /를 입력하여 명령을 입력하세요.",
        heading: "제목",
        bulletListItem: "목록",
        numberedListItem: "목록",
        checkListItem: "목록"
    },
    file_blocks: {
        image: {
            add_button_text: "이미지 추가"
        },
        video: {
            add_button_text: "비디오 추가"
        },
        audio: {
            add_button_text: "오디오 추가"
        },
        file: {
            add_button_text: "파일 추가"
        }
    },
    // from react package:
    side_menu: {
        add_block_label: "블록 추가",
        drag_handle_label: "블록 메뉴 열기"
    },
    drag_handle: {
        delete_menuitem: "삭제",
        colors_menuitem: "색깔"
    },
    table_handle: {
        delete_column_menuitem: "열 1개 삭제",
        delete_row_menuitem: "행 삭제",
        add_left_menuitem: "왼쪽에 열 1개 추가",
        add_right_menuitem: "오른쪽에 열 1개 추가",
        add_above_menuitem: "위에 행 1개 추가",
        add_below_menuitem: "아래에 행 1개 추가"
    },
    suggestion_menu: {
        no_items_title: "항목을 찾을 수 없음",
        loading: "로딩 중…"
    },
    color_picker: {
        text_title: "텍스트",
        background_title: "배경",
        colors: {
            default: "기본",
            gray: "회색",
            brown: "갈색",
            red: "빨간색",
            orange: "주황색",
            yellow: "노란색",
            green: "녹색",
            blue: "파란색",
            purple: "보라색",
            pink: "분홍색"
        }
    },
    formatting_toolbar: {
        bold: {
            tooltip: "진하게",
            secondary_tooltip: "Mod+B"
        },
        italic: {
            tooltip: "기울임",
            secondary_tooltip: "Mod+I"
        },
        underline: {
            tooltip: "밑줄",
            secondary_tooltip: "Mod+U"
        },
        strike: {
            tooltip: "취소선",
            secondary_tooltip: "Mod+Shift+X"
        },
        code: {
            tooltip: "코드",
            secondary_tooltip: ""
        },
        colors: {
            tooltip: "색깔"
        },
        link: {
            tooltip: "링크 만들기",
            secondary_tooltip: "Mod+K"
        },
        file_caption: {
            tooltip: "이미지 캡션 수정",
            input_placeholder: "이미지 캡션 수정"
        },
        file_replace: {
            tooltip: {
                image: "이미지 교체",
                video: "비디오 교체",
                audio: "오디오 교체",
                file: "파일 교체"
            }
        },
        file_rename: {
            tooltip: {
                image: "이미지 이름 변경",
                video: "비디오 이름 변경",
                audio: "오디오 이름 변경",
                file: "파일 이름 변경"
            },
            input_placeholder: {
                image: "이미지 이름 변경",
                video: "비디오 이름 변경",
                audio: "오디오 이름 변경",
                file: "파일 이름 변경"
            }
        },
        file_download: {
            tooltip: {
                image: "이미지 다운로드",
                video: "비디오 다운로드",
                audio: "오디오 다운로드",
                file: "파일 다운로드"
            }
        },
        file_delete: {
            tooltip: {
                image: "이미지 삭제",
                video: "비디오 삭제",
                audio: "오디오 삭제",
                file: "파일 삭제"
            }
        },
        file_preview_toggle: {
            tooltip: "미리보기 전환"
        },
        nest: {
            tooltip: "중첩 블록",
            secondary_tooltip: "Tab"
        },
        unnest: {
            tooltip: "비중첩 블록",
            secondary_tooltip: "Shift+Tab"
        },
        align_left: {
            tooltip: "텍스트 왼쪽 맞춤"
        },
        align_center: {
            tooltip: "텍스트 가운데 맞춤"
        },
        align_right: {
            tooltip: "텍스트 오른쪽 맞춤"
        },
        align_justify: {
            tooltip: "텍스트 양쪽 맞춤"
        },
        comment: {
            tooltip: "코멘트 추가"
        }
    },
    file_panel: {
        upload: {
            title: "업로드",
            file_placeholder: {
                image: "이미지 업로드",
                video: "비디오 업로드",
                audio: "오디오 업로드",
                file: "파일 업로드"
            },
            upload_error: "오류: 업로드 실패"
        },
        embed: {
            title: "임베드",
            embed_button: {
                image: "이미지 삽입",
                video: "비디오 삽입",
                audio: "오디오 삽입",
                file: "파일 삽입"
            },
            url_placeholder: "URL을 입력하세요."
        }
    },
    link_toolbar: {
        delete: {
            tooltip: "링크 삭제"
        },
        edit: {
            text: "링크 수정",
            tooltip: "수정"
        },
        open: {
            tooltip: "새 탭으로 열기"
        },
        form: {
            title_placeholder: "제목 수정",
            url_placeholder: "URL 수정"
        }
    },
    generic: {
        ctrl_shortcut: "Ctrl"
    }
}, ui = {
    slash_menu: {
        heading: {
            title: "Kop 1",
            subtext: "Gebruikt voor een hoofdkop",
            aliases: [
                "h",
                "kop1",
                "h1"
            ],
            group: "Koppen"
        },
        heading_2: {
            title: "Kop 2",
            subtext: "Gebruikt voor belangrijke secties",
            aliases: [
                "h2",
                "kop2",
                "subkop"
            ],
            group: "Koppen"
        },
        heading_3: {
            title: "Kop 3",
            subtext: "Gebruikt voor subsecties en groepskoppen",
            aliases: [
                "h3",
                "kop3",
                "subkop"
            ],
            group: "Koppen"
        },
        numbered_list: {
            title: "Genummerde Lijst",
            subtext: "Gebruikt om een genummerde lijst weer te geven",
            aliases: [
                "ol",
                "li",
                "lijst",
                "genummerdelijst",
                "genummerde lijst"
            ],
            group: "Basisblokken"
        },
        bullet_list: {
            title: "Puntenlijst",
            subtext: "Gebruikt om een ongeordende lijst weer te geven",
            aliases: [
                "ul",
                "li",
                "lijst",
                "puntenlijst",
                "punten lijst"
            ],
            group: "Basisblokken"
        },
        check_list: {
            title: "Controlelijst",
            subtext: "Gebruikt om een lijst met selectievakjes weer te geven",
            aliases: [
                "ul",
                "li",
                "lijst",
                "aangevinkte lijst",
                "selectievakje"
            ],
            group: "Basisblokken"
        },
        paragraph: {
            title: "Paragraaf",
            subtext: "Gebruikt voor de hoofdtekst van uw document",
            aliases: [
                "p",
                "paragraaf"
            ],
            group: "Basisblokken"
        },
        code_block: {
            title: "Codeblok",
            subtext: "Codeblok met syntax highlighting",
            aliases: [
                "code",
                "pre"
            ],
            group: "Basisblokken"
        },
        page_break: {
            title: "Pagina-einde",
            subtext: "Paginascheiding",
            aliases: [
                "page",
                "break",
                "separator",
                "pagina",
                "scheiding"
            ],
            group: "Basisblokken"
        },
        table: {
            title: "Tabel",
            subtext: "Gebruikt voor tabellen",
            aliases: [
                "tabel"
            ],
            group: "Geavanceerd"
        },
        image: {
            title: "Afbeelding",
            subtext: "Voeg een afbeelding in",
            aliases: [
                "afbeelding",
                "imageUpload",
                "upload",
                "img",
                "foto",
                "media",
                "url"
            ],
            group: "Media"
        },
        video: {
            title: "Video",
            subtext: "Voeg een video in",
            aliases: [
                "video",
                "videoUploaden",
                "upload",
                "mp4",
                "film",
                "media",
                "url",
                "drive",
                "dropbox"
            ],
            group: "Media"
        },
        audio: {
            title: "Audio",
            subtext: "Voeg audio in",
            aliases: [
                "audio",
                "audioUploaden",
                "upload",
                "mp3",
                "geluid",
                "media",
                "url"
            ],
            group: "Media"
        },
        file: {
            title: "Bestand",
            subtext: "Voeg een bestand in",
            aliases: [
                "bestand",
                "upload",
                "insluiten",
                "media",
                "url"
            ],
            group: "Media"
        },
        emoji: {
            title: "Emoji",
            subtext: "Gebruikt voor het invoegen van een emoji",
            aliases: [
                "emoji",
                "emotie-uitdrukking",
                "gezichtsuitdrukking",
                "gezicht"
            ],
            group: "Overig"
        }
    },
    placeholders: {
        default: "Voer tekst in of type '/' voor commando's",
        heading: "Kop",
        bulletListItem: "Lijst",
        numberedListItem: "Lijst",
        checkListItem: "Lijst"
    },
    file_blocks: {
        image: {
            add_button_text: "Afbeelding toevoegen"
        },
        video: {
            add_button_text: "Video toevoegen"
        },
        audio: {
            add_button_text: "Audio toevoegen"
        },
        file: {
            add_button_text: "Bestand toevoegen"
        }
    },
    // from react package:
    side_menu: {
        add_block_label: "Nieuw blok",
        drag_handle_label: "Open blok menu"
    },
    drag_handle: {
        delete_menuitem: "Verwijder",
        colors_menuitem: "Kleuren"
    },
    table_handle: {
        delete_column_menuitem: "Verwijder kolom",
        delete_row_menuitem: "Verwijder rij",
        add_left_menuitem: "Voeg kolom links toe",
        add_right_menuitem: "Voeg kolom rechts toe",
        add_above_menuitem: "Voeg rij boven toe",
        add_below_menuitem: "Voeg rij onder toe"
    },
    suggestion_menu: {
        no_items_title: "Geen items gevonden",
        loading: "Laden…"
    },
    color_picker: {
        text_title: "Tekst",
        background_title: "Achtergrond",
        colors: {
            default: "Standaard",
            gray: "Grijs",
            brown: "Bruin",
            red: "Rood",
            orange: "Oranje",
            yellow: "Geel",
            green: "Groen",
            blue: "Blauw",
            purple: "Paars",
            pink: "Roze"
        }
    },
    formatting_toolbar: {
        bold: {
            tooltip: "Vet",
            secondary_tooltip: "Mod+B"
        },
        italic: {
            tooltip: "Cursief",
            secondary_tooltip: "Mod+I"
        },
        underline: {
            tooltip: "Onderstrepen",
            secondary_tooltip: "Mod+U"
        },
        strike: {
            tooltip: "Doorstrepen",
            secondary_tooltip: "Mod+Shift+X"
        },
        code: {
            tooltip: "Code",
            secondary_tooltip: ""
        },
        colors: {
            tooltip: "Kleuren"
        },
        link: {
            tooltip: "Maak link",
            secondary_tooltip: "Mod+K"
        },
        file_caption: {
            tooltip: "Bewerk onderschrift",
            input_placeholder: "Bewerk onderschrift"
        },
        file_replace: {
            tooltip: {
                image: "Afbeelding vervangen",
                video: "Video vervangen",
                audio: "Audio vervangen",
                file: "Bestand vervangen"
            }
        },
        file_rename: {
            tooltip: {
                image: "Afbeelding hernoemen",
                video: "Video hernoemen",
                audio: "Audio hernoemen",
                file: "Bestand hernoemen"
            },
            input_placeholder: {
                image: "Afbeelding hernoemen",
                video: "Video hernoemen",
                audio: "Audio hernoemen",
                file: "Bestand hernoemen"
            }
        },
        file_download: {
            tooltip: {
                image: "Afbeelding downloaden",
                video: "Video downloaden",
                audio: "Audio downloaden",
                file: "Bestand downloaden"
            }
        },
        file_delete: {
            tooltip: {
                image: "Afbeelding verwijderen",
                video: "Video verwijderen",
                audio: "Audio verwijderen",
                file: "Bestand verwijderen"
            }
        },
        file_preview_toggle: {
            tooltip: "Voorbeeldschakelaar"
        },
        nest: {
            tooltip: "Nest blok",
            secondary_tooltip: "Tab"
        },
        unnest: {
            tooltip: "Ontnest blok",
            secondary_tooltip: "Shift+Tab"
        },
        align_left: {
            tooltip: "Tekst links uitlijnen"
        },
        align_center: {
            tooltip: "Tekst centreren"
        },
        align_right: {
            tooltip: "Tekst rechts uitlijnen"
        },
        align_justify: {
            tooltip: "Tekst uitvullen"
        },
        comment: {
            tooltip: "Commentaar toevoegen"
        }
    },
    file_panel: {
        upload: {
            title: "Upload",
            file_placeholder: {
                image: "Afbeelding uploaden",
                video: "Video uploaden",
                audio: "Audio uploaden",
                file: "Bestand uploaden"
            },
            upload_error: "Fout: Upload mislukt"
        },
        embed: {
            title: "Insluiten",
            embed_button: {
                image: "Afbeelding insluiten",
                video: "Video insluiten",
                audio: "Audio insluiten",
                file: "Bestand insluiten"
            },
            url_placeholder: "Voer URL in"
        }
    },
    link_toolbar: {
        delete: {
            tooltip: "Verwijder link"
        },
        edit: {
            text: "Bewerk link",
            tooltip: "Bewerk"
        },
        open: {
            tooltip: "Open in nieuw tabblad"
        },
        form: {
            title_placeholder: "Bewerk titel",
            url_placeholder: "Bewerk URL"
        }
    },
    generic: {
        ctrl_shortcut: "Ctrl"
    }
}, pi = {
    slash_menu: {
        heading: {
            title: "Overskrift 1",
            subtext: "Toppnivåoverskrift",
            aliases: [
                "h",
                "overskrift1",
                "h1"
            ],
            group: "Overskrifter"
        },
        heading_2: {
            title: "Overskrift 2",
            subtext: "Hovedseksjonsoverskrift",
            aliases: [
                "h2",
                "overskrift2",
                "underoverskrift"
            ],
            group: "Overskrifter"
        },
        heading_3: {
            title: "Overskrift 3",
            subtext: "Underseksjon og gruppeoverskrift",
            aliases: [
                "h3",
                "overskrift3",
                "underoverskrift"
            ],
            group: "Overskrifter"
        },
        numbered_list: {
            title: "Nummerert liste",
            subtext: "Liste med ordnede elementer",
            aliases: [
                "ol",
                "li",
                "liste",
                "nummerertliste",
                "nummerert liste"
            ],
            group: "Grunnleggende blokker"
        },
        bullet_list: {
            title: "Punktliste",
            subtext: "Liste med uordnede elementer",
            aliases: [
                "ul",
                "li",
                "liste",
                "punktliste",
                "punkt liste"
            ],
            group: "Grunnleggende blokker"
        },
        check_list: {
            title: "Sjekkliste",
            subtext: "Liste med avmerkingsbokser",
            aliases: [
                "ul",
                "li",
                "liste",
                "sjekkliste",
                "sjekk liste",
                "avmerket liste",
                "avmerkingsboks"
            ],
            group: "Grunnleggende blokker"
        },
        paragraph: {
            title: "Avsnitt",
            subtext: "Hoveddelen av dokumentet ditt",
            aliases: [
                "p",
                "avsnitt"
            ],
            group: "Grunnleggende blokker"
        },
        code_block: {
            title: "Kodeblokk",
            subtext: "Kodeblokk med syntaksfremheving",
            aliases: [
                "kode",
                "pre"
            ],
            group: "Grunnleggende blokker"
        },
        page_break: {
            title: "Sideskift",
            subtext: "Sideskilletegn",
            aliases: [
                "side",
                "skift",
                "skilletegn"
            ],
            group: "Grunnleggende blokker"
        },
        table: {
            title: "Tabell",
            subtext: "Tabell med redigerbare celler",
            aliases: [
                "tabell"
            ],
            group: "Avansert"
        },
        image: {
            title: "Bilde",
            subtext: "Justerbart bilde med bildetekst",
            aliases: [
                "bilde",
                "bildeopplasting",
                "opplasting",
                "img",
                "bilde",
                "media",
                "url"
            ],
            group: "Media"
        },
        video: {
            title: "Video",
            subtext: "Justerbar video med bildetekst",
            aliases: [
                "video",
                "videoopplasting",
                "opplasting",
                "mp4",
                "film",
                "media",
                "url"
            ],
            group: "Media"
        },
        audio: {
            title: "Lyd",
            subtext: "legg til lyd med bildetekst",
            aliases: [
                "lyd",
                "lydopplasting",
                "opplasting",
                "mp3",
                "lyd",
                "media",
                "url"
            ],
            group: "Media"
        },
        file: {
            title: "Fil",
            subtext: "Innebygd fil",
            aliases: [
                "fil",
                "opplasting",
                "innebygd",
                "media",
                "url"
            ],
            group: "Media"
        },
        emoji: {
            title: "Emoji",
            subtext: "Søk etter og legg til en emoji",
            aliases: [
                "emoji",
                "emote",
                "emosjon",
                "ansikt"
            ],
            group: "Andre"
        }
    },
    placeholders: {
        default: "Skriv tekst eller skriv '/' for å vise kommandoer",
        heading: "Overskrift",
        bulletListItem: "Liste",
        numberedListItem: "Liste",
        checkListItem: "Liste"
    },
    file_blocks: {
        image: {
            add_button_text: "Legg til bilde"
        },
        video: {
            add_button_text: "Legg til video"
        },
        audio: {
            add_button_text: "Legg til lyd"
        },
        file: {
            add_button_text: "Legg til fil"
        }
    },
    side_menu: {
        add_block_label: "Legg til blokk",
        drag_handle_label: "Åpne blokkmeny"
    },
    drag_handle: {
        delete_menuitem: "Slett",
        colors_menuitem: "Farger"
    },
    table_handle: {
        delete_column_menuitem: "Slett kolonne",
        delete_row_menuitem: "Slett rad",
        add_left_menuitem: "Legg til kolonne til venstre",
        add_right_menuitem: "Legg til kolonne til høyre",
        add_above_menuitem: "Legg til rad over",
        add_below_menuitem: "Legg til rad under"
    },
    suggestion_menu: {
        no_items_title: "Ingen elementer funnet",
        loading: "Laster…"
    },
    color_picker: {
        text_title: "Tekst",
        background_title: "Bakgrunn",
        colors: {
            default: "Standard",
            gray: "Grå",
            brown: "Brun",
            red: "Rød",
            orange: "Oransje",
            yellow: "Gul",
            green: "Grønn",
            blue: "Blå",
            purple: "Lilla",
            pink: "Rosa"
        }
    },
    formatting_toolbar: {
        bold: {
            tooltip: "Fet",
            secondary_tooltip: "Mod+B"
        },
        italic: {
            tooltip: "Kursiv",
            secondary_tooltip: "Mod+I"
        },
        underline: {
            tooltip: "Understrek",
            secondary_tooltip: "Mod+U"
        },
        strike: {
            tooltip: "Gjennomstrek",
            secondary_tooltip: "Mod+Shift+S"
        },
        code: {
            tooltip: "Kode",
            secondary_tooltip: ""
        },
        colors: {
            tooltip: "Farger"
        },
        link: {
            tooltip: "Opprett lenke",
            secondary_tooltip: "Mod+K"
        },
        file_caption: {
            tooltip: "Rediger bildetekst",
            input_placeholder: "Rediger bildetekst"
        },
        file_replace: {
            tooltip: {
                image: "Bytt ut bilde",
                video: "Bytt ut video",
                audio: "Bytt ut lyd",
                file: "Bytt ut fil"
            }
        },
        file_rename: {
            tooltip: {
                image: "Endre navn på bilde",
                video: "Endre navn på video",
                audio: "Endre navn på lyd",
                file: "Endre navn på fil"
            },
            input_placeholder: {
                image: "Endre navn på bilde",
                video: "Endre navn på video",
                audio: "Endre navn på lyd",
                file: "Endre navn på fil"
            }
        },
        file_download: {
            tooltip: {
                image: "Last ned bilde",
                video: "Last ned video",
                audio: "Last ned lyd",
                file: "Last ned fil"
            }
        },
        file_delete: {
            tooltip: {
                image: "Slett bilde",
                video: "Slett video",
                audio: "Slett lyd",
                file: "Slett fil"
            }
        },
        file_preview_toggle: {
            tooltip: "Veksle forhåndsvisning"
        },
        nest: {
            tooltip: "Plasser blokk inni",
            secondary_tooltip: "Tab"
        },
        unnest: {
            tooltip: "Ta blokk ut",
            secondary_tooltip: "Shift+Tab"
        },
        align_left: {
            tooltip: "Venstrejuster tekst"
        },
        align_center: {
            tooltip: "Midtstill tekst"
        },
        align_right: {
            tooltip: "Høyrejuster tekst"
        },
        align_justify: {
            tooltip: "Juster tekst"
        },
        comment: {
            tooltip: "Legg til kommentar"
        }
    },
    file_panel: {
        upload: {
            title: "Last opp",
            file_placeholder: {
                image: "Last opp bilde",
                video: "Last opp video",
                audio: "Last opp lyd",
                file: "Last opp fil"
            },
            upload_error: "Feil: Opplasting mislyktes"
        },
        embed: {
            title: "Bygg inn",
            embed_button: {
                image: "Bygg inn bilde",
                video: "Bygg inn video",
                audio: "Bygg inn lyd",
                file: "Bygg inn fil"
            },
            url_placeholder: "Skriv inn URL"
        }
    },
    link_toolbar: {
        delete: {
            tooltip: "Fjern lenke"
        },
        edit: {
            text: "Rediger lenke",
            tooltip: "Rediger"
        },
        open: {
            tooltip: "Åpne i ny fane"
        },
        form: {
            title_placeholder: "Rediger tittel",
            url_placeholder: "Rediger URL"
        }
    },
    generic: {
        ctrl_shortcut: "Ctrl"
    }
}, mi = {
    slash_menu: {
        heading: {
            title: "Nagłówek 1",
            subtext: "Używany dla nagłówka najwyższego poziomu",
            aliases: [
                "h",
                "naglowek1",
                "h1"
            ],
            group: "Nagłówki"
        },
        heading_2: {
            title: "Nagłówek 2",
            subtext: "Używany dla kluczowych sekcji",
            aliases: [
                "h2",
                "naglowek2",
                "podnaglowek"
            ],
            group: "Nagłówki"
        },
        heading_3: {
            title: "Nagłówek 3",
            subtext: "Używany dla podsekcji i grup nagłówków",
            aliases: [
                "h3",
                "naglowek3",
                "podnaglowek"
            ],
            group: "Nagłówki"
        },
        numbered_list: {
            title: "Lista numerowana",
            subtext: "Używana do wyświetlania listy numerowanej",
            aliases: [
                "ol",
                "li",
                "lista",
                "numerowana lista"
            ],
            group: "Podstawowe bloki"
        },
        bullet_list: {
            title: "Lista punktowana",
            subtext: "Używana do wyświetlania listy bez numeracji",
            aliases: [
                "ul",
                "li",
                "lista",
                "punktowana lista"
            ],
            group: "Podstawowe bloki"
        },
        check_list: {
            title: "Lista z polami wyboru",
            subtext: "Używana do wyświetlania listy z polami wyboru",
            aliases: [
                "ul",
                "li",
                "lista",
                "lista z polami wyboru",
                "pole wyboru"
            ],
            group: "Podstawowe bloki"
        },
        paragraph: {
            title: "Akapit",
            subtext: "Używany dla treści dokumentu",
            aliases: [
                "p",
                "akapit"
            ],
            group: "Podstawowe bloki"
        },
        code_block: {
            title: "Blok kodu",
            subtext: "Blok kodu z podświetleniem składni",
            aliases: [
                "kod",
                "pre"
            ],
            group: "Podstawowe bloki"
        },
        page_break: {
            title: "Podział strony",
            subtext: "Separator strony",
            aliases: [
                "page",
                "break",
                "separator",
                "podział",
                "separator"
            ],
            group: "Podstawowe bloki"
        },
        table: {
            title: "Tabela",
            subtext: "Używana do tworzenia tabel",
            aliases: [
                "tabela"
            ],
            group: "Zaawansowane"
        },
        image: {
            title: "Zdjęcie",
            subtext: "Wstaw zdjęcie",
            aliases: [
                "obraz",
                "wrzućZdjęcie",
                "wrzuć",
                "img",
                "zdjęcie",
                "media",
                "url"
            ],
            group: "Media"
        },
        video: {
            title: "Wideo",
            subtext: "Wstaw wideo",
            aliases: [
                "wideo",
                "wrzućWideo",
                "wrzuć",
                "mp4",
                "film",
                "media",
                "url"
            ],
            group: "Media"
        },
        audio: {
            title: "Audio",
            subtext: "Wstaw audio",
            aliases: [
                "audio",
                "wrzućAudio",
                "wrzuć",
                "mp3",
                "dźwięk",
                "media",
                "url"
            ],
            group: "Media"
        },
        file: {
            title: "Plik",
            subtext: "Wstaw plik",
            aliases: [
                "plik",
                "wrzuć",
                "wstaw",
                "media",
                "url"
            ],
            group: "Media"
        },
        emoji: {
            title: "Emoji",
            subtext: "Używane do wstawiania emoji",
            aliases: [
                "emoji",
                "emotka",
                "wyrażenie emocji",
                "twarz"
            ],
            group: "Inne"
        }
    },
    placeholders: {
        default: "Wprowadź tekst lub wpisz '/' aby użyć poleceń",
        heading: "Nagłówek",
        bulletListItem: "Lista",
        numberedListItem: "Lista",
        checkListItem: "Lista"
    },
    file_blocks: {
        image: {
            add_button_text: "Dodaj zdjęcie"
        },
        video: {
            add_button_text: "Dodaj wideo"
        },
        audio: {
            add_button_text: "Dodaj audio"
        },
        file: {
            add_button_text: "Dodaj plik"
        }
    },
    side_menu: {
        add_block_label: "Dodaj blok",
        drag_handle_label: "Otwórz menu bloków"
    },
    drag_handle: {
        delete_menuitem: "Usuń",
        colors_menuitem: "Kolory"
    },
    table_handle: {
        delete_column_menuitem: "Usuń kolumnę",
        delete_row_menuitem: "Usuń wiersz",
        add_left_menuitem: "Dodaj kolumnę po lewej",
        add_right_menuitem: "Dodaj kolumnę po prawej",
        add_above_menuitem: "Dodaj wiersz powyżej",
        add_below_menuitem: "Dodaj wiersz poniżej"
    },
    suggestion_menu: {
        no_items_title: "Nie znaleziono elementów",
        loading: "Ładowanie…"
    },
    color_picker: {
        text_title: "Tekst",
        background_title: "Tło",
        colors: {
            default: "Domyślny",
            gray: "Szary",
            brown: "Brązowy",
            red: "Czerwony",
            orange: "Pomarańczowy",
            yellow: "Żółty",
            green: "Zielony",
            blue: "Niebieski",
            purple: "Fioletowy",
            pink: "Różowy"
        }
    },
    formatting_toolbar: {
        bold: {
            tooltip: "Pogrubienie",
            secondary_tooltip: "Mod+B"
        },
        italic: {
            tooltip: "Kursywa",
            secondary_tooltip: "Mod+I"
        },
        underline: {
            tooltip: "Podkreślenie",
            secondary_tooltip: "Mod+U"
        },
        strike: {
            tooltip: "Przekreślenie",
            secondary_tooltip: "Mod+Shift+X"
        },
        code: {
            tooltip: "Kod",
            secondary_tooltip: ""
        },
        colors: {
            tooltip: "Kolory"
        },
        link: {
            tooltip: "Utwórz link",
            secondary_tooltip: "Mod+K"
        },
        file_caption: {
            tooltip: "Zmień podpis",
            input_placeholder: "Zmień podpis"
        },
        file_replace: {
            tooltip: {
                image: "Zmień obraz",
                video: "Zmień wideo",
                audio: "Zmień audio",
                file: "Zmień plik"
            }
        },
        file_rename: {
            tooltip: {
                image: "Zmień nazwę zdjęcia",
                video: "Zmień nazwę wideo",
                audio: "Zmień nazwę audio",
                file: "Zmień nazwę pliku"
            },
            input_placeholder: {
                image: "Zmień nazwę zdjęcia",
                video: "Zmień nazwę wideo",
                audio: "Zmień nazwę audio",
                file: "Zmień nazwę pliku"
            }
        },
        file_download: {
            tooltip: {
                image: "Pobierz zdjęcie",
                video: "Pobierz wideo",
                audio: "Pobierz audio",
                file: "Pobierz plik"
            }
        },
        file_delete: {
            tooltip: {
                image: "Usuń zdjęcie",
                video: "Usuń wideo",
                audio: "Usuń audio",
                file: "Usuń plik"
            }
        },
        file_preview_toggle: {
            tooltip: "Przełącz podgląd"
        },
        nest: {
            tooltip: "Zagnieźdź blok",
            secondary_tooltip: "Tab"
        },
        unnest: {
            tooltip: "Odgagnieźdź blok",
            secondary_tooltip: "Shift+Tab"
        },
        align_left: {
            tooltip: "Wyrównaj tekst do lewej"
        },
        align_center: {
            tooltip: "Wyśrodkuj tekst"
        },
        align_right: {
            tooltip: "Wyrównaj tekst do prawej"
        },
        align_justify: {
            tooltip: "Wyjustuj tekst"
        },
        comment: {
            tooltip: "Dodaj komentarz"
        }
    },
    file_panel: {
        upload: {
            title: "Wrzuć",
            file_placeholder: {
                image: "Wrzuć zdjęcie",
                video: "Wrzuć wideo",
                audio: "Wrzuć audio",
                file: "Wrzuć plik"
            },
            upload_error: "Błąd: Przesyłanie nie powiodło się"
        },
        embed: {
            title: "Wstaw",
            embed_button: {
                image: "Wstaw zdjęice",
                video: "Wstaw wideo",
                audio: "Wstaw audio",
                file: "Wstaw plik"
            },
            url_placeholder: "Wprowadź URL"
        }
    },
    link_toolbar: {
        delete: {
            tooltip: "Usuń link"
        },
        edit: {
            text: "Edytuj link",
            tooltip: "Edytuj"
        },
        open: {
            tooltip: "Otwórz w nowej karcie"
        },
        form: {
            title_placeholder: "Edytuj tytuł",
            url_placeholder: "Edytuj URL"
        }
    },
    generic: {
        ctrl_shortcut: "Ctrl"
    }
}, hi = {
    slash_menu: {
        heading: {
            title: "Título",
            subtext: "Usado para um título de nível superior",
            aliases: [
                "h",
                "titulo1",
                "h1"
            ],
            group: "Títulos"
        },
        heading_2: {
            title: "Título 2",
            subtext: "Usado para seções principais",
            aliases: [
                "h2",
                "titulo2",
                "subtitulo"
            ],
            group: "Títulos"
        },
        heading_3: {
            title: "Título 3",
            subtext: "Usado para subseções e títulos de grupo",
            aliases: [
                "h3",
                "titulo3",
                "subtitulo"
            ],
            group: "Títulos"
        },
        numbered_list: {
            title: "Lista Numerada",
            subtext: "Usado para exibir uma lista numerada",
            aliases: [
                "ol",
                "li",
                "lista",
                "listanumerada",
                "lista numerada"
            ],
            group: "Blocos básicos"
        },
        bullet_list: {
            title: "Lista com Marcadores",
            subtext: "Usado para exibir uma lista não ordenada",
            aliases: [
                "ul",
                "li",
                "lista",
                "listamarcadores",
                "lista com marcadores"
            ],
            group: "Blocos básicos"
        },
        check_list: {
            title: "Lista de verificação",
            subtext: "Usado para exibir uma lista com caixas de seleção",
            aliases: [
                "ul",
                "li",
                "lista",
                "lista de verificação",
                "lista marcada",
                "caixa de seleção"
            ],
            group: "Blocos básicos"
        },
        paragraph: {
            title: "Parágrafo",
            subtext: "Usado para o corpo do seu documento",
            aliases: [
                "p",
                "paragrafo"
            ],
            group: "Blocos básicos"
        },
        code_block: {
            title: "Bloco de Código",
            subtext: "Usado para exibir código com destaque de sintaxe",
            aliases: [
                "codigo",
                "pre"
            ],
            group: "Blocos básicos"
        },
        page_break: {
            title: "Quebra de página",
            subtext: "Separador de página",
            aliases: [
                "page",
                "break",
                "separator",
                "quebra",
                "separador"
            ],
            group: "Blocos básicos"
        },
        table: {
            title: "Tabela",
            subtext: "Usado para tabelas",
            aliases: [
                "tabela"
            ],
            group: "Avançado"
        },
        image: {
            title: "Imagem",
            subtext: "Inserir uma imagem",
            aliases: [
                "imagem",
                "uploadImagem",
                "upload",
                "img",
                "foto",
                "media",
                "url"
            ],
            group: "Mídia"
        },
        video: {
            title: "Vídeo",
            subtext: "Inserir um vídeo",
            aliases: [
                "vídeo",
                "uploadVídeo",
                "upload",
                "mp4",
                "filme",
                "mídia",
                "url"
            ],
            group: "Mídia"
        },
        audio: {
            title: "Áudio",
            subtext: "Inserir um áudio",
            aliases: [
                "áudio",
                "uploadÁudio",
                "upload",
                "mp3",
                "som",
                "mídia",
                "url"
            ],
            group: "Mídia"
        },
        file: {
            title: "Arquivo",
            subtext: "Inserir um arquivo",
            aliases: [
                "arquivo",
                "upload",
                "incorporar",
                "mídia",
                "url"
            ],
            group: "Mídia"
        },
        emoji: {
            title: "Emoji",
            subtext: "Usado para inserir um emoji",
            aliases: [
                "emoji",
                "emoticon",
                "expressão emocional",
                "rosto"
            ],
            group: "Outros"
        }
    },
    placeholders: {
        default: "Digite texto ou use '/' para comandos",
        heading: "Título",
        bulletListItem: "Lista",
        numberedListItem: "Lista",
        checkListItem: "Lista"
    },
    file_blocks: {
        image: {
            add_button_text: "Adicionar imagem"
        },
        video: {
            add_button_text: "Adicionar vídeo"
        },
        audio: {
            add_button_text: "Adicionar áudio"
        },
        file: {
            add_button_text: "Adicionar arquivo"
        }
    },
    // from react package:
    side_menu: {
        add_block_label: "Adicionar bloco",
        drag_handle_label: "Abrir menu do bloco"
    },
    drag_handle: {
        delete_menuitem: "Excluir",
        colors_menuitem: "Cores"
    },
    table_handle: {
        delete_column_menuitem: "Excluir coluna",
        delete_row_menuitem: "Excluir linha",
        add_left_menuitem: "Adicionar coluna à esquerda",
        add_right_menuitem: "Adicionar coluna à direita",
        add_above_menuitem: "Adicionar linha acima",
        add_below_menuitem: "Adicionar linha abaixo"
    },
    suggestion_menu: {
        no_items_title: "Nenhum item encontrado",
        loading: "Carregando…"
    },
    color_picker: {
        text_title: "Texto",
        background_title: "Fundo",
        colors: {
            default: "Padrão",
            gray: "Cinza",
            brown: "Marrom",
            red: "Vermelho",
            orange: "Laranja",
            yellow: "Amarelo",
            green: "Verde",
            blue: "Azul",
            purple: "Roxo",
            pink: "Rosa"
        }
    },
    formatting_toolbar: {
        bold: {
            tooltip: "Negrito",
            secondary_tooltip: "Mod+B"
        },
        italic: {
            tooltip: "Itálico",
            secondary_tooltip: "Mod+I"
        },
        underline: {
            tooltip: "Sublinhado",
            secondary_tooltip: "Mod+U"
        },
        strike: {
            tooltip: "Riscado",
            secondary_tooltip: "Mod+Shift+X"
        },
        code: {
            tooltip: "Código",
            secondary_tooltip: ""
        },
        colors: {
            tooltip: "Cores"
        },
        link: {
            tooltip: "Criar link",
            secondary_tooltip: "Mod+K"
        },
        file_caption: {
            tooltip: "Editar legenda",
            input_placeholder: "Editar legenda"
        },
        file_replace: {
            tooltip: {
                image: "Substituir imagem",
                video: "Substituir vídeo",
                audio: "Substituir áudio",
                file: "Substituir arquivo"
            }
        },
        file_rename: {
            tooltip: {
                image: "Renomear imagem",
                video: "Renomear vídeo",
                audio: "Renomear áudio",
                file: "Renomear arquivo"
            },
            input_placeholder: {
                image: "Renomear imagem",
                video: "Renomear vídeo",
                audio: "Renomear áudio",
                file: "Renomear arquivo"
            }
        },
        file_download: {
            tooltip: {
                image: "Baixar imagem",
                video: "Baixar vídeo",
                audio: "Baixar áudio",
                file: "Baixar arquivo"
            }
        },
        file_delete: {
            tooltip: {
                image: "Excluir imagem",
                video: "Excluir vídeo",
                audio: "Excluir áudio",
                file: "Excluir arquivo"
            }
        },
        file_preview_toggle: {
            tooltip: "Alternar visualização"
        },
        nest: {
            tooltip: "Aninhar bloco",
            secondary_tooltip: "Tab"
        },
        unnest: {
            tooltip: "Desaninhar bloco",
            secondary_tooltip: "Shift+Tab"
        },
        align_left: {
            tooltip: "Alinhar à esquerda"
        },
        align_center: {
            tooltip: "Alinhar ao centro"
        },
        align_right: {
            tooltip: "Alinhar à direita"
        },
        align_justify: {
            tooltip: "Justificar texto"
        },
        comment: {
            tooltip: "Adicionar comentário"
        }
    },
    file_panel: {
        upload: {
            title: "Upload",
            file_placeholder: {
                image: "Upload de imagem",
                video: "Upload de vídeo",
                audio: "Upload de áudio",
                file: "Upload de arquivo"
            },
            upload_error: "Erro: Falha no upload"
        },
        embed: {
            title: "Incorporar",
            embed_button: {
                image: "Incorporar imagem",
                video: "Incorporar vídeo",
                audio: "Incorporar áudio",
                file: "Incorporar arquivo"
            },
            url_placeholder: "Insira a URL"
        }
    },
    link_toolbar: {
        delete: {
            tooltip: "Remover link"
        },
        edit: {
            text: "Editar link",
            tooltip: "Editar"
        },
        open: {
            tooltip: "Abrir em nova aba"
        },
        form: {
            title_placeholder: "Editar título",
            url_placeholder: "Editar URL"
        }
    },
    generic: {
        ctrl_shortcut: "Ctrl"
    }
}, fi = {
    slash_menu: {
        heading: {
            title: "Заголовок 1 уровня",
            subtext: "Используется для заголовка верхнего уровня",
            aliases: [
                "h",
                "heading1",
                "h1",
                "заголовок1"
            ],
            group: "Заголовки"
        },
        heading_2: {
            title: "Заголовок 2 уровня",
            subtext: "Используется для ключевых разделов",
            aliases: [
                "h2",
                "heading2",
                "subheading",
                "заголовок2",
                "подзаголовок"
            ],
            group: "Заголовки"
        },
        heading_3: {
            title: "Заголовок 3 уровня",
            subtext: "Используется для подразделов и групп",
            aliases: [
                "h3",
                "heading3",
                "subheading",
                "заголовок3",
                "подзаголовок"
            ],
            group: "Заголовки"
        },
        numbered_list: {
            title: "Нумерованный список",
            subtext: "Используется для отображения нумерованного списка",
            aliases: [
                "ol",
                "li",
                "list",
                "numberedlist",
                "numbered list",
                "список",
                "нумерованный список"
            ],
            group: "Базовые блоки"
        },
        bullet_list: {
            title: "Маркированный список",
            subtext: "Для отображения неупорядоченного списка.",
            aliases: [
                "ul",
                "li",
                "list",
                "bulletlist",
                "bullet list",
                "список",
                "маркированный список"
            ],
            group: "Базовые блоки"
        },
        check_list: {
            title: "Контрольный список",
            subtext: "Для отображения списка с флажками",
            aliases: [
                "ul",
                "li",
                "list",
                "checklist",
                "check list",
                "checked list",
                "checkbox",
                "список"
            ],
            group: "Базовые блоки"
        },
        paragraph: {
            title: "Параграф",
            subtext: "Основной текст",
            aliases: [
                "p",
                "paragraph",
                "параграф"
            ],
            group: "Базовые блоки"
        },
        code_block: {
            title: "Блок кода",
            subtext: "Блок кода с подсветкой синтаксиса",
            aliases: [
                "code",
                "pre",
                "блок кода"
            ],
            group: "Базовые блоки"
        },
        page_break: {
            title: "Разрыв страницы",
            subtext: "Разделитель страницы",
            aliases: [
                "page",
                "break",
                "separator",
                "разрыв",
                "разделитель"
            ],
            group: "Основные блоки"
        },
        table: {
            title: "Таблица",
            subtext: "Используется для таблиц",
            aliases: [
                "table",
                "таблица"
            ],
            group: "Продвинутый"
        },
        image: {
            title: "Картинка",
            subtext: "Вставить изображение",
            aliases: [
                "image",
                "imageUpload",
                "upload",
                "img",
                "picture",
                "media",
                "url",
                "загрузка",
                "картинка",
                "рисунок"
            ],
            group: "Медиа"
        },
        video: {
            title: "Видео",
            subtext: "Вставить видео",
            aliases: [
                "video",
                "videoUpload",
                "upload",
                "mp4",
                "film",
                "media",
                "url",
                "загрузка",
                "видео"
            ],
            group: "Медиа"
        },
        audio: {
            title: "Аудио",
            subtext: "Вставить аудио",
            aliases: [
                "audio",
                "audioUpload",
                "upload",
                "mp3",
                "sound",
                "media",
                "url",
                "загрузка",
                "аудио",
                "звук",
                "музыка"
            ],
            group: "Медиа"
        },
        file: {
            title: "Файл",
            subtext: "Вставить файл",
            aliases: [
                "file",
                "upload",
                "embed",
                "media",
                "url",
                "загрузка",
                "файл"
            ],
            group: "Медиа"
        },
        emoji: {
            title: "Эмодзи",
            subtext: "Используется для вставки эмодзи",
            aliases: [
                "эмодзи",
                "смайлик",
                "выражение эмоций",
                "лицо"
            ],
            group: "Прочее"
        }
    },
    placeholders: {
        default: "Ведите текст или введите «/» для команд",
        heading: "Заголовок",
        bulletListItem: "Список",
        numberedListItem: "Список",
        checkListItem: "Список"
    },
    file_blocks: {
        image: {
            add_button_text: "Добавить изображение"
        },
        video: {
            add_button_text: "Добавить видео"
        },
        audio: {
            add_button_text: "Добавить аудио"
        },
        file: {
            add_button_text: "Добавить файл"
        }
    },
    // from react package:
    side_menu: {
        add_block_label: "Добавить блок",
        drag_handle_label: "Открыть меню блока"
    },
    drag_handle: {
        delete_menuitem: "Удалить",
        colors_menuitem: "Цвета"
    },
    table_handle: {
        delete_column_menuitem: "Удалить столбец",
        delete_row_menuitem: "Удалить строку",
        add_left_menuitem: "Добавить столбец слева",
        add_right_menuitem: "Добавить столбец справа",
        add_above_menuitem: "Добавить строку выше",
        add_below_menuitem: "Добавить строку ниже"
    },
    suggestion_menu: {
        no_items_title: "ничего не найдено",
        loading: "Загрузка…"
    },
    color_picker: {
        text_title: "Текст",
        background_title: "Задний фон",
        colors: {
            default: "По умолчинию",
            gray: "Серый",
            brown: "Коричневый",
            red: "Красный",
            orange: "Оранжевый",
            yellow: "Жёлтый",
            green: "Зелёный",
            blue: "Голубой",
            purple: "Фиолетовый",
            pink: "Розовый"
        }
    },
    formatting_toolbar: {
        bold: {
            tooltip: "Жирный",
            secondary_tooltip: "Mod+B"
        },
        italic: {
            tooltip: "Курсив",
            secondary_tooltip: "Mod+I"
        },
        underline: {
            tooltip: "Подчёркнутый",
            secondary_tooltip: "Mod+U"
        },
        strike: {
            tooltip: "Зачёркнутый",
            secondary_tooltip: "Mod+Shift+X"
        },
        code: {
            tooltip: "Код",
            secondary_tooltip: ""
        },
        colors: {
            tooltip: "Цвета"
        },
        link: {
            tooltip: "Создать ссылку",
            secondary_tooltip: "Mod+K"
        },
        file_caption: {
            tooltip: "Изменить подпись",
            input_placeholder: "Изменить подпись"
        },
        file_replace: {
            tooltip: {
                image: "Заменить изображение",
                video: "Заменить видео",
                audio: "Заменить аудио",
                file: "Заменить файл"
            }
        },
        file_rename: {
            tooltip: {
                image: "Переименовать изображение",
                video: "Переименовать видео",
                audio: "Переименовать аудио",
                file: "Переименовать файл"
            },
            input_placeholder: {
                image: "Переименовать изображение",
                video: "Переименовать видео",
                audio: "Переименовать аудио",
                file: "Переименовать файл"
            }
        },
        file_download: {
            tooltip: {
                image: "Скачать картинку",
                video: "Скачать видео",
                audio: "Скачать аудио",
                file: "Скачать файл"
            }
        },
        file_delete: {
            tooltip: {
                image: "Удалить картинку",
                video: "Удалить видео",
                audio: "Удалить аудио",
                file: "Удалить файл"
            }
        },
        file_preview_toggle: {
            tooltip: "Переключить предварительный просмотр"
        },
        nest: {
            tooltip: "Сдвинуть вправо",
            secondary_tooltip: "Tab"
        },
        unnest: {
            tooltip: "Сдвинуть влево",
            secondary_tooltip: "Shift+Tab"
        },
        align_left: {
            tooltip: "Текст по левому краю"
        },
        align_center: {
            tooltip: "Текст по середине"
        },
        align_right: {
            tooltip: "Текст по правому краю"
        },
        align_justify: {
            tooltip: "По середине текст"
        },
        comment: {
            tooltip: "Добавить комментарий"
        }
    },
    file_panel: {
        upload: {
            title: "Загрузить",
            file_placeholder: {
                image: "Загрузить картинки",
                video: "Загрузить видео",
                audio: "Загрузить аудио",
                file: "Загрузить файл"
            },
            upload_error: "Ошибка: не удалось загрузить"
        },
        embed: {
            title: "Вставить",
            embed_button: {
                image: "Вставить картинку",
                video: "Вставить видео",
                audio: "Вставить аудио",
                file: "Вставить файл"
            },
            url_placeholder: "Введите URL"
        }
    },
    link_toolbar: {
        delete: {
            tooltip: "Удалить ссылку"
        },
        edit: {
            text: "Изменить ссылку",
            tooltip: "Редактировать"
        },
        open: {
            tooltip: "Открыть в новой вкладке"
        },
        form: {
            title_placeholder: "Изменить заголовок",
            url_placeholder: "Изменить URL"
        }
    },
    generic: {
        ctrl_shortcut: "Ctrl"
    }
}, gi = {
    slash_menu: {
        heading: {
            title: "Заголовок 1",
            subtext: "Заголовок найвищого рівня",
            aliases: [
                "h",
                "heading1",
                "h1",
                "заголовок1"
            ],
            group: "Заголовки"
        },
        heading_2: {
            title: "Заголовок 2",
            subtext: "Основний заголовок розділу",
            aliases: [
                "h2",
                "heading2",
                "subheading",
                "заголовок2"
            ],
            group: "Заголовки"
        },
        heading_3: {
            title: "Заголовок 3",
            subtext: "Підзаголовок і груповий заголовок",
            aliases: [
                "h3",
                "heading3",
                "subheading",
                "заголовок3"
            ],
            group: "Заголовки"
        },
        numbered_list: {
            title: "Нумерований список",
            subtext: "Список із впорядкованими елементами",
            aliases: [
                "ol",
                "li",
                "list",
                "numberedlist",
                "numbered list",
                "список",
                "нумерований список"
            ],
            group: "Базові блоки"
        },
        bullet_list: {
            title: "Маркований список",
            subtext: "Список із невпорядкованими елементами",
            aliases: [
                "ul",
                "li",
                "list",
                "bulletlist",
                "bullet list",
                "список",
                "маркований список"
            ],
            group: "Базові блоки"
        },
        check_list: {
            title: "Чек-лист",
            subtext: "Список із чекбоксами",
            aliases: [
                "ul",
                "li",
                "list",
                "checklist",
                "check list",
                "checked list",
                "checkbox",
                "чекбокс",
                "чек-лист"
            ],
            group: "Базові блоки"
        },
        paragraph: {
            title: "Параграф",
            subtext: "Основний текст документа",
            aliases: [
                "p",
                "paragraph",
                "параграф"
            ],
            group: "Базові блоки"
        },
        code_block: {
            title: "Блок коду",
            subtext: "Блок коду з підсвіткою синтаксису",
            aliases: [
                "code",
                "pre",
                "блок коду"
            ],
            group: "Базові блоки"
        },
        page_break: {
            title: "Розрив сторінки",
            subtext: "Роздільник сторінки",
            aliases: [
                "page",
                "break",
                "separator",
                "розрив сторінки",
                "розділювач"
            ],
            group: "Базові блоки"
        },
        table: {
            title: "Таблиця",
            subtext: "Таблиця з редагованими клітинками",
            aliases: [
                "table",
                "таблиця"
            ],
            group: "Розширені"
        },
        image: {
            title: "Зображення",
            subtext: "Масштабоване зображення з підписом",
            aliases: [
                "image",
                "imageUpload",
                "upload",
                "img",
                "picture",
                "media",
                "url",
                "зображення",
                "медіа"
            ],
            group: "Медіа"
        },
        video: {
            title: "Відео",
            subtext: "Масштабоване відео з підписом",
            aliases: [
                "video",
                "videoUpload",
                "upload",
                "mp4",
                "film",
                "media",
                "url",
                "відео",
                "медіа"
            ],
            group: "Медіа"
        },
        audio: {
            title: "Аудіо",
            subtext: "Вбудоване аудіо з підписом",
            aliases: [
                "audio",
                "audioUpload",
                "upload",
                "mp3",
                "sound",
                "media",
                "url",
                "аудіо",
                "медіа"
            ],
            group: "Медіа"
        },
        file: {
            title: "Файл",
            subtext: "Вбудований файл",
            aliases: [
                "file",
                "upload",
                "embed",
                "media",
                "url",
                "файл",
                "медіа"
            ],
            group: "Медіа"
        },
        emoji: {
            title: "Емодзі",
            subtext: "Пошук і вставка емодзі",
            aliases: [
                "emoji",
                "emote",
                "emotion",
                "face",
                "смайлик",
                "емодзі"
            ],
            group: "Інше"
        }
    },
    placeholders: {
        default: "Введіть текст або наберіть '/' для команд",
        heading: "Заголовок",
        bulletListItem: "Список",
        numberedListItem: "Список",
        checkListItem: "Список"
    },
    file_blocks: {
        image: {
            add_button_text: "Додати зображення"
        },
        video: {
            add_button_text: "Додати відео"
        },
        audio: {
            add_button_text: "Додати аудіо"
        },
        file: {
            add_button_text: "Додати файл"
        }
    },
    // from react package:
    side_menu: {
        add_block_label: "Додати блок",
        drag_handle_label: "Відкрити меню блока"
    },
    drag_handle: {
        delete_menuitem: "Видалити",
        colors_menuitem: "Кольори"
    },
    table_handle: {
        delete_column_menuitem: "Видалити стовпець",
        delete_row_menuitem: "Видалити рядок",
        add_left_menuitem: "Додати стовпець зліва",
        add_right_menuitem: "Додати стовпець справа",
        add_above_menuitem: "Додати рядок вище",
        add_below_menuitem: "Додати рядок нижче"
    },
    suggestion_menu: {
        no_items_title: "Нічого не знайдено",
        loading: "Завантаження…"
    },
    color_picker: {
        text_title: "Текст",
        background_title: "Фон",
        colors: {
            default: "За замовчуванням",
            gray: "Сірий",
            brown: "Коричневий",
            red: "Червоний",
            orange: "Помаранчевий",
            yellow: "Жовтий",
            green: "Зелений",
            blue: "Блакитний",
            purple: "Фіолетовий",
            pink: "Рожевий"
        }
    },
    formatting_toolbar: {
        bold: {
            tooltip: "Жирний",
            secondary_tooltip: "Mod+B"
        },
        italic: {
            tooltip: "Курсив",
            secondary_tooltip: "Mod+I"
        },
        underline: {
            tooltip: "Підкреслений",
            secondary_tooltip: "Mod+U"
        },
        strike: {
            tooltip: "Закреслений",
            secondary_tooltip: "Mod+Shift+X"
        },
        code: {
            tooltip: "Код",
            secondary_tooltip: ""
        },
        colors: {
            tooltip: "Кольори"
        },
        link: {
            tooltip: "Створити посилання",
            secondary_tooltip: "Mod+K"
        },
        file_caption: {
            tooltip: "Редагувати підпис",
            input_placeholder: "Редагувати підпис"
        },
        file_replace: {
            tooltip: {
                image: "Замінити зображення",
                video: "Замінити відео",
                audio: "Замінити аудіо",
                file: "Замінити файл"
            }
        },
        file_rename: {
            tooltip: {
                image: "Перейменувати зображення",
                video: "Перейменувати відео",
                audio: "Перейменувати аудіо",
                file: "Перейменувати файл"
            },
            input_placeholder: {
                image: "Перейменувати зображення",
                video: "Перейменувати відео",
                audio: "Перейменувати аудіо",
                file: "Перейменувати файл"
            }
        },
        file_download: {
            tooltip: {
                image: "Завантажити зображення",
                video: "Завантажити відео",
                audio: "Завантажити аудіо",
                file: "Завантажити файл"
            }
        },
        file_delete: {
            tooltip: {
                image: "Видалити зображення",
                video: "Видалити відео",
                audio: "Видалити аудіо",
                file: "Видалити файл"
            }
        },
        file_preview_toggle: {
            tooltip: "Перемкнути попередній перегляд"
        },
        nest: {
            tooltip: "Вкладений блок",
            secondary_tooltip: "Tab"
        },
        unnest: {
            tooltip: "Розгрупувати блок",
            secondary_tooltip: "Shift+Tab"
        },
        align_left: {
            tooltip: "Вирівняти за лівим краєм"
        },
        align_center: {
            tooltip: "Вирівняти по центру"
        },
        align_right: {
            tooltip: "Вирівняти за правим краєм"
        },
        align_justify: {
            tooltip: "Вирівняти за шириною"
        },
        comment: {
            tooltip: "Додати коментар"
        }
    },
    file_panel: {
        upload: {
            title: "Завантажити",
            file_placeholder: {
                image: "Завантажити зображення",
                video: "Завантажити відео",
                audio: "Завантажити аудіо",
                file: "Завантажити файл"
            },
            upload_error: "Помилка: не вдалося завантажити"
        },
        embed: {
            title: "Вставити",
            embed_button: {
                image: "Вставити зображення",
                video: "Вставити відео",
                audio: "Вставити аудіо",
                file: "Вставити файл"
            },
            url_placeholder: "Введіть URL"
        }
    },
    link_toolbar: {
        delete: {
            tooltip: "Видалити посилання"
        },
        edit: {
            text: "Редагувати посилання",
            tooltip: "Редагувати"
        },
        open: {
            tooltip: "Відкрити в новій вкладці"
        },
        form: {
            title_placeholder: "Редагувати заголовок",
            url_placeholder: "Редагувати URL"
        }
    },
    generic: {
        ctrl_shortcut: "Ctrl"
    }
}, bi = {
    slash_menu: {
        heading: {
            title: "Tiêu đề H1",
            subtext: "Sử dụng cho tiêu đề cấp cao nhất",
            aliases: [
                "h",
                "tieude1",
                "dd1"
            ],
            group: "Tiêu đề"
        },
        heading_2: {
            title: "Tiêu đề H2",
            subtext: "Sử dụng cho các phần chính",
            aliases: [
                "h2",
                "tieude2",
                "tieudephu"
            ],
            group: "Tiêu đề"
        },
        heading_3: {
            title: "Tiêu đề H3",
            subtext: "Sử dụng cho phụ đề và tiêu đề nhóm",
            aliases: [
                "h3",
                "tieude3",
                "tieudephu"
            ],
            group: "Tiêu đề"
        },
        numbered_list: {
            title: "Danh sách đánh số",
            subtext: "Sử dụng để hiển thị danh sách có đánh số",
            aliases: [
                "ol",
                "li",
                "ds",
                "danhsachdso",
                "danh sach danh so"
            ],
            group: "Khối cơ bản"
        },
        bullet_list: {
            title: "Danh sách",
            subtext: "Sử dụng để hiển thị danh sách không đánh số",
            aliases: [
                "ul",
                "li",
                "ds",
                "danhsach",
                "danh sach"
            ],
            group: "Khối cơ bản"
        },
        check_list: {
            title: "Danh sách kiểm tra",
            subtext: "Dùng để hiển thị danh sách có hộp kiểm",
            aliases: [
                "ul",
                "li",
                "danh sach",
                "danh sach kiem tra",
                "danh sach da kiem tra",
                "hop kiem"
            ],
            group: "Khối cơ bản"
        },
        paragraph: {
            title: "Đoạn văn",
            subtext: "Sử dụng cho nội dung chính của tài liệu",
            aliases: [
                "p",
                "doanvan"
            ],
            group: "Khối cơ bản"
        },
        code_block: {
            title: "Mã",
            subtext: "Sử dụng để hiển thị mã với cú pháp",
            aliases: [
                "code",
                "pre"
            ],
            group: "Khối cơ bản"
        },
        page_break: {
            title: "Ngắt trang",
            subtext: "Phân cách trang",
            aliases: [
                "page",
                "break",
                "separator",
                "ngắt",
                "phân cách"
            ],
            group: "Khối cơ bản"
        },
        table: {
            title: "Bảng",
            subtext: "Sử dụng để tạo bảng",
            aliases: [
                "bang"
            ],
            group: "Nâng cao"
        },
        image: {
            title: "Hình ảnh",
            subtext: "Chèn hình ảnh",
            aliases: [
                "anh",
                "tai-len-anh",
                "tai-len",
                "img",
                "hinh",
                "media",
                "url"
            ],
            group: "Phương tiện"
        },
        video: {
            title: "Video",
            subtext: "Chèn video",
            aliases: [
                "video",
                "tai-len-video",
                "tai-len",
                "mp4",
                "phim",
                "media",
                "url"
            ],
            group: "Phương tiện"
        },
        audio: {
            title: "Âm thanh",
            subtext: "Chèn âm thanh",
            aliases: [
                "âm thanh",
                "tai-len-am-thanh",
                "tai-len",
                "mp3",
                "am thanh",
                "media",
                "url"
            ],
            group: "Phương tiện"
        },
        file: {
            title: "Tệp",
            subtext: "Chèn tệp",
            aliases: [
                "tep",
                "tai-len",
                "nhung",
                "media",
                "url"
            ],
            group: "Phương tiện"
        },
        emoji: {
            title: "Biểu tượng cảm xúc",
            subtext: "Dùng để chèn biểu tượng cảm xúc",
            aliases: [
                "biểu tượng cảm xúc",
                "emoji",
                "emoticon",
                "cảm xúc expression",
                "khuôn mặt",
                "face"
            ],
            group: "Khác"
        }
    },
    placeholders: {
        default: "Nhập văn bản hoặc gõ '/' để thêm định dạng",
        heading: "Tiêu đề",
        bulletListItem: "Danh sách",
        numberedListItem: "Danh sách",
        checkListItem: "Danh sách"
    },
    file_blocks: {
        image: {
            add_button_text: "Thêm ảnh"
        },
        video: {
            add_button_text: "Thêm video"
        },
        audio: {
            add_button_text: "Thêm âm thanh"
        },
        file: {
            add_button_text: "Thêm tệp"
        }
    },
    // từ gói phản ứng:
    side_menu: {
        add_block_label: "Thêm khối",
        drag_handle_label: "Mở trình đơn khối"
    },
    drag_handle: {
        delete_menuitem: "Xóa",
        colors_menuitem: "Màu sắc"
    },
    table_handle: {
        delete_column_menuitem: "Xóa cột",
        delete_row_menuitem: "Xóa hàng",
        add_left_menuitem: "Thêm cột bên trái",
        add_right_menuitem: "Thêm cột bên phải",
        add_above_menuitem: "Thêm hàng phía trên",
        add_below_menuitem: "Thêm hàng phía dưới"
    },
    suggestion_menu: {
        no_items_title: "Không tìm thấy mục nào",
        loading: "Đang tải..."
    },
    color_picker: {
        text_title: "Văn bản",
        background_title: "Nền",
        colors: {
            default: "Mặc định",
            gray: "Xám",
            brown: "Nâu",
            red: "Đỏ",
            orange: "Cam",
            yellow: "Vàng",
            green: "Xanh lá",
            blue: "Xanh dương",
            purple: "Tím",
            pink: "Hồng"
        }
    },
    formatting_toolbar: {
        bold: {
            tooltip: "In đậm",
            secondary_tooltip: "Mod+B"
        },
        italic: {
            tooltip: "In nghiêng",
            secondary_tooltip: "Mod+I"
        },
        underline: {
            tooltip: "Gạch dưới",
            secondary_tooltip: "Mod+U"
        },
        strike: {
            tooltip: "Gạch ngang",
            secondary_tooltip: "Mod+Shift+X"
        },
        code: {
            tooltip: "Code",
            secondary_tooltip: ""
        },
        colors: {
            tooltip: "Màu sắc"
        },
        link: {
            tooltip: "Tạo liên kết",
            secondary_tooltip: "Mod+K"
        },
        file_caption: {
            tooltip: "Chỉnh sửa chú thích",
            input_placeholder: "Chỉnh sửa chú thích"
        },
        file_replace: {
            tooltip: {
                image: "Thay thế hình ảnh",
                video: "Thay thế video",
                audio: "Thay thế âm thanh",
                file: "Thay thế tệp"
            }
        },
        file_rename: {
            tooltip: {
                image: "Đổi tên hình ảnh",
                video: "Đổi tên video",
                audio: "Đổi tên âm thanh",
                file: "Đổi tên tệp"
            },
            input_placeholder: {
                image: "Đổi tên hình ảnh",
                video: "Đổi tên video",
                audio: "Đổi tên âm thanh",
                file: "Đổi tên tệp"
            }
        },
        file_download: {
            tooltip: {
                image: "Tải xuống hình ảnh",
                video: "Tải xuống video",
                audio: "Tải xuống âm thanh",
                file: "Tải xuống tệp"
            }
        },
        file_delete: {
            tooltip: {
                image: "Xóa hình ảnh",
                video: "Xóa video",
                audio: "Xóa âm thanh",
                file: "Xóa tệp"
            }
        },
        file_preview_toggle: {
            tooltip: "Chuyển đổi xem trước"
        },
        nest: {
            tooltip: "Lồng khối",
            secondary_tooltip: "Tab"
        },
        unnest: {
            tooltip: "Bỏ lồng khối",
            secondary_tooltip: "Shift+Tab"
        },
        align_left: {
            tooltip: "Căn trái văn bản"
        },
        align_center: {
            tooltip: "Căn giữa văn bản"
        },
        align_right: {
            tooltip: "Căn phải văn bản"
        },
        align_justify: {
            tooltip: "Căn đều văn bản"
        },
        comment: {
            tooltip: "Thêm bình luận"
        }
    },
    file_panel: {
        upload: {
            title: "Tải lên",
            file_placeholder: {
                image: "Tải lên hình ảnh",
                video: "Tải lên video",
                audio: "Tải lên âm thanh",
                file: "Tải lên tệp"
            },
            upload_error: "Lỗi: Tải lên thất bại"
        },
        embed: {
            title: "Nhúng",
            embed_button: {
                image: "Nhúng hình ảnh",
                video: "Nhúng video",
                audio: "Nhúng âm thanh",
                file: "Nhúng tệp"
            },
            url_placeholder: "Nhập URL"
        }
    },
    link_toolbar: {
        delete: {
            tooltip: "Xóa liên kết"
        },
        edit: {
            text: "Chỉnh sửa liên kết",
            tooltip: "Chỉnh sửa"
        },
        open: {
            tooltip: "Mở trong tab mới"
        },
        form: {
            title_placeholder: "Chỉnh sửa tiêu đề",
            url_placeholder: "Chỉnh sửa URL"
        }
    },
    generic: {
        ctrl_shortcut: "Ctrl"
    }
}, ki = {
    slash_menu: {
        heading: {
            title: "一级标题",
            subtext: "用于顶级标题",
            aliases: [
                "h",
                "heading1",
                "h1",
                "标题",
                "一级标题"
            ],
            group: "标题"
        },
        heading_2: {
            title: "二级标题",
            subtext: "用于关键部分",
            aliases: [
                "h2",
                "heading2",
                "subheading",
                "标题",
                "二级标题",
                "副标题"
            ],
            group: "标题"
        },
        heading_3: {
            title: "三级标题",
            subtext: "用于小节和分组标题",
            aliases: [
                "h3",
                "heading3",
                "subheading",
                "标题",
                "三级标题"
            ],
            group: "标题"
        },
        numbered_list: {
            title: "有序列表",
            subtext: "用于显示有序列表",
            aliases: [
                "ol",
                "li",
                "list",
                "numberedlist",
                "numbered list",
                "列表",
                "有序列表"
            ],
            group: "基础"
        },
        bullet_list: {
            title: "无序列表",
            subtext: "用于显示无序列表",
            aliases: [
                "ul",
                "li",
                "list",
                "bulletlist",
                "bullet list",
                "列表",
                "无序列表"
            ],
            group: "基础"
        },
        check_list: {
            title: "检查清单",
            subtext: "用于显示带有复选框的列表",
            aliases: [
                "ul",
                "li",
                "checklist",
                "checked list",
                "列表",
                "检查清单",
                "勾选列表",
                "复选框"
            ],
            group: "基础"
        },
        paragraph: {
            title: "段落",
            subtext: "用于文档正文",
            aliases: [
                "p",
                "paragraph",
                "text",
                "正文"
            ],
            group: "基础"
        },
        code_block: {
            title: "代码块",
            subtext: "用于显示带有语法高亮的代码块",
            aliases: [
                "code",
                "pre",
                "代码",
                "预格式"
            ],
            group: "基础"
        },
        page_break: {
            title: "分页符",
            subtext: "页面分隔符",
            aliases: [
                "page",
                "break",
                "separator",
                "分页",
                "分隔符"
            ],
            group: "基础"
        },
        table: {
            title: "表格",
            subtext: "使用表格",
            aliases: [
                "table",
                "表格"
            ],
            group: "高级功能"
        },
        image: {
            title: "图片",
            subtext: "插入图片",
            aliases: [
                "图片",
                "上传图片",
                "上传",
                "image",
                "img",
                "相册",
                "媒体",
                "url"
            ],
            group: "媒体"
        },
        video: {
            title: "视频",
            subtext: "插入视频",
            aliases: [
                "视频",
                "视频上传",
                "上传",
                "video",
                "mp4",
                "电影",
                "媒体",
                "url",
                "驱动",
                "dropbox"
            ],
            group: "媒体"
        },
        audio: {
            title: "音频",
            subtext: "插入音频",
            aliases: [
                "音频",
                "音频上传",
                "上传",
                "audio",
                "mp3",
                "声音",
                "媒体",
                "url",
                "驱动",
                "dropbox"
            ],
            group: "媒体"
        },
        file: {
            title: "文件",
            subtext: "插入文件",
            aliases: [
                "文件",
                "上传",
                "file",
                "嵌入",
                "媒体",
                "url"
            ],
            group: "媒体"
        },
        emoji: {
            title: "表情符号",
            subtext: "用于插入表情符号",
            aliases: [
                "表情符号",
                "emoji",
                "face",
                "emote",
                "表情",
                "表情表达",
                "表情"
            ],
            group: "其他"
        }
    },
    placeholders: {
        default: "输入 '/' 以使用命令",
        heading: "标题",
        bulletListItem: "列表",
        numberedListItem: "列表",
        checkListItem: "列表"
    },
    file_blocks: {
        image: {
            add_button_text: "添加图片"
        },
        video: {
            add_button_text: "添加视频"
        },
        audio: {
            add_button_text: "添加音频"
        },
        file: {
            add_button_text: "添加文件"
        }
    },
    // from react package:
    side_menu: {
        add_block_label: "添加块",
        drag_handle_label: "打开菜单"
    },
    drag_handle: {
        delete_menuitem: "删除",
        colors_menuitem: "颜色"
    },
    table_handle: {
        delete_column_menuitem: "删除列",
        delete_row_menuitem: "删除行",
        add_left_menuitem: "左侧添加列",
        add_right_menuitem: "右侧添加列",
        add_above_menuitem: "上方添加行",
        add_below_menuitem: "下方添加行"
    },
    suggestion_menu: {
        no_items_title: "无匹配项",
        loading: "加载中…"
    },
    color_picker: {
        text_title: "文本",
        background_title: "背景色",
        colors: {
            default: "默认",
            gray: "灰色",
            brown: "棕色",
            red: "红色",
            orange: "橙色",
            yellow: "黄色",
            green: "绿色",
            blue: "蓝色",
            purple: "紫色",
            pink: "粉色"
        }
    },
    formatting_toolbar: {
        bold: {
            tooltip: "加粗",
            secondary_tooltip: "Mod+B"
        },
        italic: {
            tooltip: "斜体",
            secondary_tooltip: "Mod+I"
        },
        underline: {
            tooltip: "下划线",
            secondary_tooltip: "Mod+U"
        },
        strike: {
            tooltip: "删除线",
            secondary_tooltip: "Mod+Shift+X"
        },
        code: {
            tooltip: "代码标记",
            secondary_tooltip: ""
        },
        colors: {
            tooltip: "颜色"
        },
        link: {
            tooltip: "添加链接",
            secondary_tooltip: "Mod+K"
        },
        file_caption: {
            tooltip: "编辑标题",
            input_placeholder: "编辑标题"
        },
        file_replace: {
            tooltip: {
                image: "替换图片",
                video: "替换视频",
                audio: "替换音频",
                file: "替换文件"
            }
        },
        file_rename: {
            tooltip: {
                image: "重命名图片",
                video: "重命名视频",
                audio: "重命名音频",
                file: "重命名文件"
            },
            input_placeholder: {
                image: "重命名图片",
                video: "重命名视频",
                audio: "重命名音频",
                file: "重命名文件"
            }
        },
        file_download: {
            tooltip: {
                image: "下载图片",
                video: "下载视频",
                audio: "下载音频",
                file: "下载文件"
            }
        },
        file_delete: {
            tooltip: {
                image: "删除图片",
                video: "删除视频",
                audio: "删除音频",
                file: "删除文件"
            }
        },
        file_preview_toggle: {
            tooltip: "切换预览"
        },
        nest: {
            tooltip: "嵌套",
            secondary_tooltip: "Tab"
        },
        unnest: {
            tooltip: "取消嵌套",
            secondary_tooltip: "Shift+Tab"
        },
        align_left: {
            tooltip: "左对齐"
        },
        align_center: {
            tooltip: "居中"
        },
        align_right: {
            tooltip: "右对齐"
        },
        align_justify: {
            tooltip: "文本对齐"
        },
        comment: {
            tooltip: "添加评论"
        }
    },
    file_panel: {
        upload: {
            title: "上传",
            file_placeholder: {
                image: "上传图片",
                video: "上传视频",
                audio: "上传音频",
                file: "上传文件"
            },
            upload_error: "Error：上传失败"
        },
        embed: {
            title: "嵌入",
            embed_button: {
                image: "嵌入图片",
                video: "嵌入视频",
                audio: "嵌入音频",
                file: "嵌入文件"
            },
            url_placeholder: "输入图片地址"
        }
    },
    link_toolbar: {
        delete: {
            tooltip: "清除链接"
        },
        edit: {
            text: "编辑链接",
            tooltip: "编辑"
        },
        open: {
            tooltip: "新窗口打开"
        },
        form: {
            title_placeholder: "编辑标题",
            url_placeholder: "编辑链接地址"
        }
    },
    generic: {
        ctrl_shortcut: "Ctrl"
    }
}, ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    ar: oi,
    de: ii,
    en: Bt,
    es: ni,
    fr: ri,
    hr: ai,
    is: si,
    it: li,
    ja: di,
    ko: ci,
    nl: ui,
    no: pi,
    pl: mi,
    pt: hi,
    ru: fi,
    uk: gi,
    vi: bi,
    zh: ki
}, Symbol.toStringTag, {
    value: "Module"
}));
class D extends Error {
    constructor(t){
        super("Unreachable case: ".concat(t));
    }
}
function ls(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const { "data-test": o, ...i } = e;
    if (Object.keys(i).length > 0 && t) throw new Error("Object must be empty " + JSON.stringify(e));
}
function _i(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : JSON.stringify;
    const o = {};
    return e.filter((i)=>{
        const n = t(i);
        return Object.prototype.hasOwnProperty.call(o, n) ? !1 : o[n] = !0;
    });
}
function yi(e) {
    const t = e.filter((i, n)=>e.indexOf(i) !== n);
    return _i(t);
}
const ue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "uniqueID",
    // we’ll set a very high priority to make sure this runs first
    // and is compatible with `appendTransaction` hooks of other extensions
    priority: 1e4,
    addOptions () {
        return {
            attributeName: "id",
            types: [],
            setIdAttribute: !1,
            generateID: ()=>{
                if (typeof window < "u" && window.__TEST_OPTIONS) {
                    const e = window.__TEST_OPTIONS;
                    return e.mockID === void 0 ? e.mockID = 0 : e.mockID++, e.mockID.toString();
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            },
            filterTransaction: null
        };
    },
    addGlobalAttributes () {
        return [
            {
                types: this.options.types,
                attributes: {
                    [this.options.attributeName]: {
                        default: null,
                        parseHTML: (e)=>e.getAttribute("data-".concat(this.options.attributeName)),
                        renderHTML: (e)=>{
                            const t = {
                                ["data-".concat(this.options.attributeName)]: e[this.options.attributeName]
                            };
                            return this.options.setIdAttribute ? {
                                ...t,
                                id: e[this.options.attributeName]
                            } : t;
                        }
                    }
                }
            }
        ];
    },
    // check initial content for missing ids
    // onCreate() {
    //   // Don’t do this when the collaboration extension is active
    //   // because this may update the content, so Y.js tries to merge these changes.
    //   // This leads to empty block nodes.
    //   // See: https://github.com/ueberdosis/tiptap/issues/2400
    //   if (
    //     this.editor.extensionManager.extensions.find(
    //       (extension) => extension.name === "collaboration"
    //     )
    //   ) {
    //     return;
    //   }
    //   const { view, state } = this.editor;
    //   const { tr, doc } = state;
    //   const { types, attributeName, generateID } = this.options;
    //   const nodesWithoutId = findChildren(doc, (node) => {
    //     return (
    //       types.includes(node.type.name) && node.attrs[attributeName] === null
    //     );
    //   });
    //   nodesWithoutId.forEach(({ node, pos }) => {
    //     tr.setNodeMarkup(pos, undefined, {
    //       ...node.attrs,
    //       [attributeName]: generateID(),
    //     });
    //   });
    //   tr.setMeta("addToHistory", false);
    //   view.dispatch(tr);
    // },
    addProseMirrorPlugins () {
        let e = null, t = !1;
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("uniqueID"),
                appendTransaction: (o, i, n)=>{
                    const r = o.some((f)=>f.docChanged) && !i.doc.eq(n.doc), a = this.options.filterTransaction && o.some((f)=>{
                        let g, b;
                        return !(!((b = (g = this.options).filterTransaction) === null || b === void 0) && b.call(g, f));
                    });
                    if (!r || a) return;
                    const { tr: s } = n, { types: l, attributeName: d, generateID: c } = this.options, u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineTransactionSteps"])(i.doc, o), { mapping: m } = u;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChangedRanges"])(u).forEach((param)=>{
                        let { newRange: f } = param;
                        const g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findChildrenInRange"])(n.doc, f, (v)=>l.includes(v.type.name)), b = g.map((param)=>{
                            let { node: v } = param;
                            return v.attrs[d];
                        }).filter((v)=>v !== null), k = yi(b);
                        g.forEach((param)=>{
                            let { node: v, pos: y } = param;
                            let P;
                            const Y = (P = s.doc.nodeAt(y)) === null || P === void 0 ? void 0 : P.attrs[d];
                            if (Y === null) {
                                const x = i.doc.type.createAndFill().content;
                                if (i.doc.content.findDiffStart(x) === null) {
                                    const Je = JSON.parse(JSON.stringify(n.doc.toJSON()));
                                    if (Je.content[0].content[0].attrs.id = "initialBlockId", JSON.stringify(Je.content) === JSON.stringify(x.toJSON())) {
                                        s.setNodeMarkup(y, void 0, {
                                            ...v.attrs,
                                            [d]: "initialBlockId"
                                        });
                                        return;
                                    }
                                }
                                s.setNodeMarkup(y, void 0, {
                                    ...v.attrs,
                                    [d]: c()
                                });
                                return;
                            }
                            const { deleted: ge } = m.invert().mapResult(y);
                            ge && k.includes(Y) && s.setNodeMarkup(y, void 0, {
                                ...v.attrs,
                                [d]: c()
                            });
                        });
                    }), !!s.steps.length) return s;
                },
                // we register a global drag handler to track the current drag source element
                view (o) {
                    const i = (n)=>{
                        let r;
                        e = !((r = o.dom.parentElement) === null || r === void 0) && r.contains(n.target) ? o.dom.parentElement : null;
                    };
                    return window.addEventListener("dragstart", i), {
                        destroy () {
                            window.removeEventListener("dragstart", i);
                        }
                    };
                },
                props: {
                    // `handleDOMEvents` is called before `transformPasted` so we can do
                    // some checks before. However, `transformPasted` only runs when
                    // editor content is pasted - not external content.
                    handleDOMEvents: {
                        // only create new ids for dropped content while holding `alt`
                        // or content is dragged from another editor
                        drop: (o, i)=>{
                            let n;
                            return e !== o.dom.parentElement || ((n = i.dataTransfer) === null || n === void 0 ? void 0 : n.effectAllowed) === "copy" ? t = !0 : t = !1, e = null, !1;
                        },
                        // always create new ids on pasted content
                        paste: ()=>(t = !0, !1)
                    },
                    // we’ll remove ids for every pasted node
                    // so we can create a new one within `appendTransaction`
                    transformPasted: (o)=>{
                        if (!t) return o;
                        const { types: i, attributeName: n } = this.options, r = (a)=>{
                            const s = [];
                            return a.forEach((l)=>{
                                if (l.isText) {
                                    s.push(l);
                                    return;
                                }
                                if (!i.includes(l.type.name)) {
                                    s.push(l.copy(r(l.content)));
                                    return;
                                }
                                const d = l.type.create({
                                    ...l.attrs,
                                    [n]: null
                                }, r(l.content), l.marks);
                                s.push(d);
                            }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(s);
                        };
                        return t = !1, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](r(o.content), o.openStart, o.openEnd);
                    }
                }
            })
        ];
    }
});
function it(e) {
    return e.type === "link";
}
function Tt(e) {
    return typeof e != "string" && e.type === "link";
}
function de(e) {
    return typeof e != "string" && e.type === "text";
}
function nt(e, t, o, i) {
    const n = [];
    for (const [a, s] of Object.entries(e.styles)){
        const l = o[a];
        if (!l) throw new Error("style ".concat(a, " not found in styleSchema"));
        if (l.propSchema === "boolean") n.push(t.mark(a));
        else if (l.propSchema === "string") n.push(t.mark(a, {
            stringValue: s
        }));
        else throw new D(l.propSchema);
    }
    return !i || !t.nodes[i].spec.code ? e.text.split(/(\n)/g).filter((a)=>a.length > 0).map((a)=>a === "\n" ? t.nodes.hardBreak.createChecked() : t.text(a, n)) : [
        t.text(e.text, n)
    ];
}
function vi(e, t, o) {
    const i = t.marks.link.create({
        href: e.href
    });
    return Ue(e.content, t, o).map((n)=>{
        if (n.type.name === "text") return n.mark([
            ...n.marks,
            i
        ]);
        if (n.type.name === "hardBreak") return n;
        throw new Error("unexpected node type");
    });
}
function Ue(e, t, o, i) {
    const n = [];
    if (typeof e == "string") return n.push(...nt({
        type: "text",
        text: e,
        styles: {}
    }, t, o, i)), n;
    for (const r of e)n.push(...nt(r, t, o, i));
    return n;
}
function U(e, t, o, i) {
    const n = [];
    for (const r of e)typeof r == "string" ? n.push(...Ue(r, t, o, i)) : Tt(r) ? n.push(...vi(r, t, o)) : de(r) ? n.push(...Ue([
        r
    ], t, o, i)) : n.push(Mt(r, t, o));
    return n;
}
function Ce(e, t, o) {
    var n;
    const i = [];
    for (const r of e.rows){
        const a = [];
        for(let l = 0; l < r.cells.length; l++){
            const d = r.cells[l];
            let c;
            if (!d) c = t.nodes.tableParagraph.createChecked({});
            else if (typeof d == "string") c = t.nodes.tableParagraph.createChecked({}, t.text(d));
            else {
                const m = U(d, t, o);
                c = t.nodes.tableParagraph.createChecked({}, m);
            }
            const u = t.nodes.tableCell.createChecked({
                // The colwidth array should have multiple values when the colspan of
                // a cell is greater than 1. However, this is not yet implemented so
                // we can always assume a length of 1.
                colwidth: (n = e.columnWidths) != null && n[l] ? [
                    e.columnWidths[l]
                ] : null
            }, c);
            a.push(u);
        }
        const s = t.nodes.tableRow.createChecked({}, a);
        i.push(s);
    }
    return i;
}
function Mt(e, t, o) {
    let i, n = e.type;
    if (n === void 0 && (n = "paragraph"), !t.nodes[n]) throw new Error("node type ".concat(n, " not found in schema"));
    if (!e.content) i = t.nodes[n].createChecked(e.props);
    else if (typeof e.content == "string") {
        const r = U([
            e.content
        ], t, o, n);
        i = t.nodes[n].createChecked(e.props, r);
    } else if (Array.isArray(e.content)) {
        const r = U(e.content, t, o, n);
        i = t.nodes[n].createChecked(e.props, r);
    } else if (e.content.type === "tableContent") {
        const r = Ce(e.content, t, o);
        i = t.nodes[n].createChecked(e.props, r);
    } else throw new D(e.content.type);
    return i;
}
function J(e, t, o) {
    let i = e.id;
    i === void 0 && (i = ue.options.generateID());
    const n = [];
    if (e.children) for (const a of e.children)n.push(J(a, t, o));
    if (!e.type || // can happen if block.type is not defined (this should create the default node)
    t.nodes[e.type].isInGroup("blockContent")) {
        const a = Mt(e, t, o), s = n.length > 0 ? t.nodes.blockGroup.createChecked({}, n) : void 0;
        return t.nodes.blockContainer.createChecked({
            id: i,
            ...e.props
        }, s ? [
            a,
            s
        ] : a);
    } else {
        if (t.nodes[e.type].isInGroup("bnBlock")) return t.nodes[e.type].createChecked({
            id: i,
            ...e.props
        }, n);
        throw new Error("block type ".concat(e.type, " doesn't match blockContent or bnBlock group"));
    }
}
function Lt(e) {
    const t = [
        ...e.classList
    ].filter((o)=>!o.startsWith("bn-")) || [];
    t.length > 0 ? e.className = t.join(" ") : e.removeAttribute("class");
}
function It(e, t, o, i) {
    let n;
    if (t) if (typeof t == "string") n = U([
        t
    ], e.pmSchema, e.schema.styleSchema);
    else if (Array.isArray(t)) n = U(t, e.pmSchema, e.schema.styleSchema);
    else if (t.type === "tableContent") n = Ce(t, e.pmSchema, e.schema.styleSchema);
    else throw new D(t.type);
    else throw new Error("blockContent is required");
    const r = o.serializeFragment(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(n), i);
    return r.nodeType === 1 && Lt(r), r;
}
function wi(e, t, o, i, n, r, a) {
    var g, b, k, v, y, P, Y, ge;
    var _ref;
    const s = (_ref = a == null ? void 0 : a.document) !== null && _ref !== void 0 ? _ref : document, l = t.pmSchema.nodes.blockContainer;
    let d = o.props;
    if (!o.props) {
        d = {};
        for (const [E, x] of Object.entries(t.schema.blockSchema[o.type].propSchema))x.default !== void 0 && (d[E] = x.default);
    }
    const u = [
        ...((b = (g = l.spec) == null ? void 0 : g.toDOM) == null ? void 0 : b.call(g, l.create({
            id: o.id,
            ...d
        }))).dom.attributes
    ], m = t.blockImplementations[o.type].implementation.toExternalHTML({
        ...o,
        props: d
    }, t), h = s.createDocumentFragment();
    if (m.dom.classList.contains("bn-block-content")) {
        const E = [
            ...u,
            ...m.dom.attributes
        ].filter((x)=>x.name.startsWith("data") && x.name !== "data-content-type" && x.name !== "data-file-block" && x.name !== "data-node-view-wrapper" && x.name !== "data-node-type" && x.name !== "data-id" && x.name !== "data-index" && x.name !== "data-editable");
        for (const x of E)m.dom.firstChild.setAttribute(x.name, x.value);
        Lt(m.dom.firstChild), h.append(...m.dom.childNodes);
    } else h.append(m.dom);
    if (m.contentDOM && o.content) {
        const E = It(t, o.content, // TODO
        i, a);
        m.contentDOM.appendChild(E);
    }
    let f;
    if (n.has(o.type) ? f = "OL" : r.has(o.type) && (f = "UL"), f) {
        if (((k = e.lastChild) == null ? void 0 : k.nodeName) !== f) {
            const x = s.createElement(f);
            f === "OL" && d != null && d.start && (d == null ? void 0 : d.start) !== 1 && x.setAttribute("start", d.start + ""), e.append(x);
        }
        const E = s.createElement("li");
        E.append(h), e.lastChild.appendChild(E);
    } else e.append(h);
    if (o.children && o.children.length > 0) {
        const E = s.createDocumentFragment();
        if (At(E, t, o.children, i, n, r, a), ((v = e.lastChild) == null ? void 0 : v.nodeName) === "UL" || ((y = e.lastChild) == null ? void 0 : y.nodeName) === "OL") for(; ((P = E.firstChild) == null ? void 0 : P.nodeName) === "UL" || ((Y = E.firstChild) == null ? void 0 : Y.nodeName) === "OL";)e.lastChild.lastChild.appendChild(E.firstChild);
        t.pmSchema.nodes[o.type].isInGroup("blockContent") ? e.append(E) : (ge = m.contentDOM) == null || ge.append(E);
    }
}
const At = (e, t, o, i, n, r, a)=>{
    for (const s of o)wi(e, t, s, i, n, r, a);
}, xi = (e, t, o, i, n, r)=>{
    var _ref;
    const s = ((_ref = r == null ? void 0 : r.document) !== null && _ref !== void 0 ? _ref : document).createDocumentFragment();
    return At(s, e, t, o, i, n, r), s;
}, Ee = (e, t)=>{
    const o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMSerializer"].fromSchema(e);
    return {
        exportBlocks: (i, n)=>{
            const r = xi(t, i, o, /* @__PURE__ */ new Set([
                "numberedListItem"
            ]), /* @__PURE__ */ new Set([
                "bulletListItem",
                "checkListItem"
            ]), n), a = document.createElement("div");
            return a.append(r), a.innerHTML;
        },
        exportInlineContent: (i, n)=>{
            const r = It(t, i, o, n), a = document.createElement("div");
            return a.append(r.cloneNode(!0)), a.innerHTML;
        }
    };
};
function Ci(e, t, o, i, n) {
    let r;
    if (t) if (typeof t == "string") r = U([
        t
    ], e.pmSchema, e.schema.styleSchema, i);
    else if (Array.isArray(t)) r = U(t, e.pmSchema, e.schema.styleSchema, i);
    else if (t.type === "tableContent") r = Ce(t, e.pmSchema, e.schema.styleSchema);
    else throw new D(t.type);
    else throw new Error("blockContent is required");
    return o.serializeFragment(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(r), n);
}
function Ei(e, t, o, i, n) {
    var u, m, h, f, g;
    const r = e.pmSchema.nodes.blockContainer;
    let a = t.props;
    if (!t.props) {
        a = {};
        for (const [b, k] of Object.entries(e.schema.blockSchema[t.type].propSchema))k.default !== void 0 && (a[b] = k.default);
    }
    const l = e.blockImplementations[t.type].implementation.toInternalHTML({
        ...t,
        props: a
    }, e);
    if (t.type === "numberedListItem" && l.dom.setAttribute("data-index", i.toString()), l.contentDOM && t.content) {
        const b = Ci(e, t.content, // TODO
        o, t.type, n);
        l.contentDOM.appendChild(b);
    }
    if (e.pmSchema.nodes[t.type].isInGroup("bnBlock")) {
        if (t.children && t.children.length > 0) {
            const b = Pt(e, t.children, o, n);
            (u = l.contentDOM) == null || u.append(b);
        }
        return l.dom;
    }
    const c = (h = (m = r.spec) == null ? void 0 : m.toDOM) == null ? void 0 : h.call(m, r.create({
        id: t.id,
        ...a
    }));
    return (f = c.contentDOM) == null || f.appendChild(l.dom), t.children && t.children.length > 0 && ((g = c.contentDOM) == null || g.appendChild(Nt(e, t.children, o, n))), c.dom;
}
function Pt(e, t, o, i) {
    var _ref;
    const r = ((_ref = i == null ? void 0 : i.document) !== null && _ref !== void 0 ? _ref : document).createDocumentFragment();
    let a = 0;
    for (const s of t){
        s.type === "numberedListItem" ? a++ : a = 0;
        const l = Ei(e, s, o, a, i);
        r.appendChild(l);
    }
    return r;
}
const Nt = (e, t, o, i)=>{
    var s;
    const n = e.pmSchema.nodes.blockGroup, r = n.spec.toDOM(n.create({})), a = Pt(e, t, o, i);
    return (s = r.contentDOM) == null || s.appendChild(a), r.dom;
}, Si = (e, t)=>{
    const o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMSerializer"].fromSchema(e);
    return {
        serializeBlocks: (i, n)=>Nt(t, i, o, n).outerHTML
    };
};
function z(e, t) {
    const o = e.resolve(t);
    if (o.nodeAfter && o.nodeAfter.type.isInGroup("bnBlock")) return {
        posBeforeNode: o.pos,
        node: o.nodeAfter
    };
    let i = o.depth, n = o.node(i);
    for(; i > 0;){
        if (n.type.isInGroup("bnBlock")) return {
            posBeforeNode: o.before(i),
            node: n
        };
        i--, n = o.node(i);
    }
    const r = [];
    e.descendants((s, l)=>{
        s.type.isInGroup("bnBlock") && r.push(l);
    }), console.warn("Position ".concat(t, " is not within a blockContainer node."));
    const a = e.resolve(r.find((s)=>s >= t) || r[r.length - 1]);
    return {
        posBeforeNode: a.pos,
        node: a.nodeAfter
    };
}
function Ge(e, t) {
    if (!e.type.isInGroup("bnBlock")) throw new Error("Attempted to get bnBlock node at position but found node of different type ".concat(e.type));
    const o = e, i = t, n = i + o.nodeSize, r = {
        node: o,
        beforePos: i,
        afterPos: n
    };
    if (o.type.name === "blockContainer") {
        let a, s;
        if (o.forEach((l, d)=>{
            if (l.type.spec.group === "blockContent") {
                const c = l, u = i + d + 1, m = u + l.nodeSize;
                a = {
                    node: c,
                    beforePos: u,
                    afterPos: m
                };
            } else if (l.type.name === "blockGroup") {
                const c = l, u = i + d + 1, m = u + l.nodeSize;
                s = {
                    node: c,
                    beforePos: u,
                    afterPos: m
                };
            }
        }), !a) throw new Error("blockContainer node does not contain a blockContent node in its children: ".concat(o));
        return {
            isBlockContainer: !0,
            bnBlock: r,
            blockContent: a,
            childContainer: s,
            blockNoteType: a.node.type.name
        };
    } else {
        if (!r.node.type.isInGroup("childContainer")) throw new Error("bnBlock node is not in the childContainer group: ".concat(r.node));
        return {
            isBlockContainer: !1,
            bnBlock: r,
            childContainer: r,
            blockNoteType: r.node.type.name
        };
    }
}
function X(e) {
    return Ge(e.node, e.posBeforeNode);
}
function pe(e) {
    if (!e.nodeAfter) throw new Error("Attempted to get blockContainer node at position ".concat(e.pos, " but a node at this position does not exist"));
    return Ge(e.nodeAfter, e.pos);
}
function _(e) {
    const t = z(e.doc, e.selection.anchor);
    return X(t);
}
function A(e, t) {
    let o, i;
    if (t.firstChild.descendants((n, r)=>o ? !1 : !n.type.isInGroup("bnBlock") || n.attrs.id !== e ? !0 : (o = n, i = r + 1, !1)), !(o === void 0 || i === void 0)) return {
        node: o,
        posBeforeNode: i
    };
}
const Bi = ()=>typeof navigator < "u" && (/Mac/.test(navigator.platform) || /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent));
function V(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Ctrl";
    return Bi() ? e.replace("Mod", "⌘") : e.replace("Mod", t);
}
function F() {
    for(var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++){
        e[_key] = arguments[_key];
    }
    return e.filter((t)=>t).join(" ");
}
const ds = ()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent);
function R(e, t, o, i) {
    const n = document.createElement("div");
    n.className = F("bn-block-content", o.class), n.setAttribute("data-content-type", e);
    for (const [a, s] of Object.entries(o))a !== "class" && n.setAttribute(a, s);
    const r = document.createElement(t);
    r.className = F("bn-inline-content", i.class);
    for (const [a, s] of Object.entries(i))a !== "class" && r.setAttribute(a, s);
    return n.appendChild(r), {
        dom: n,
        contentDOM: r
    };
}
const rt = (e, t)=>{
    let o = J(e, t.pmSchema, t.schema.styleSchema);
    o.type.name === "blockContainer" && (o = o.firstChild);
    const i = t.pmSchema.nodes[o.type.name].spec.toDOM;
    if (i === void 0) throw new Error("This block has no default HTML serialization as its corresponding TipTap node doesn't implement `renderHTML`.");
    const n = i(o);
    if (typeof n != "object" || !("dom" in n)) throw new Error("Cannot use this block's default HTML serialization as its corresponding TipTap node's `renderHTML` function does not return an object with the `dom` property.");
    return n;
}, C = {
    backgroundColor: {
        default: "default"
    },
    textColor: {
        default: "default"
    },
    textAlignment: {
        default: "left",
        values: [
            "left",
            "center",
            "right",
            "justify"
        ]
    }
}, jt = [
    "backgroundColor",
    "textColor"
];
function ye(e) {
    return "data-" + e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function cs(e) {
    const t = e.split("/");
    return !t.length || // invalid?
    t[t.length - 1] === "" ? e : t[t.length - 1];
}
function me(e) {
    const t = {};
    return Object.entries(e).filter((param)=>{
        let [o, i] = param;
        return !jt.includes(o);
    }).forEach((param)=>{
        let [o, i] = param;
        t[o] = {
            default: i.default,
            keepOnSplit: !0,
            // Props are displayed in kebab-case as HTML attributes. If a prop's
            // value is the same as its default, we don't display an HTML
            // attribute for it.
            parseHTML: (n)=>{
                const r = n.getAttribute(ye(o));
                if (r === null) return null;
                if (i.default === void 0 && i.type === "boolean" || i.default !== void 0 && typeof i.default == "boolean") return r === "true" ? !0 : r === "false" ? !1 : null;
                if (i.default === void 0 && i.type === "number" || i.default !== void 0 && typeof i.default == "number") {
                    const a = parseFloat(r);
                    return !Number.isNaN(a) && Number.isFinite(a) ? a : null;
                }
                return r;
            },
            renderHTML: (n)=>n[o] !== i.default ? {
                    [ye(o)]: n[o]
                } : {}
        };
    }), t;
}
function Ti(e, t, o, i) {
    if (typeof e == "boolean") throw new Error("Cannot find node position as getPos is a boolean, not a function.");
    const n = e(), a = o.state.doc.resolve(n).node().attrs.id;
    if (!a) throw new Error("Block doesn't have id");
    const s = t.getBlock(a);
    if (s.type !== i) throw new Error("Block type does not match");
    return s;
}
function be(e, t, o, i) {
    let n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, r = arguments.length > 5 ? arguments[5] : void 0;
    const a = document.createElement("div");
    if (r !== void 0) for (const [s, l] of Object.entries(r))s !== "class" && a.setAttribute(s, l);
    a.className = F("bn-block-content", (r == null ? void 0 : r.class) || ""), a.setAttribute("data-content-type", t);
    for (const [s, l] of Object.entries(o)){
        const c = i[s].default;
        !jt.includes(s) && l !== c && a.setAttribute(ye(s), l);
    }
    return n && a.setAttribute("data-file-block", ""), a.appendChild(e.dom), e.contentDOM !== void 0 && (e.contentDOM.className = F("bn-inline-content", e.contentDOM.className), e.contentDOM.setAttribute("data-editable", "")), {
        ...e,
        dom: a
    };
}
function G(e) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create(e);
}
function Dt(e, t) {
    return {
        config: e,
        implementation: t
    };
}
function $(e, t, o) {
    return Dt({
        type: e.name,
        content: e.config.content === "inline*" ? "inline" : e.config.content === "tableRow+" ? "table" : "none",
        propSchema: t
    }, {
        node: e,
        requiredExtensions: o,
        toInternalHTML: rt,
        toExternalHTML: rt
    });
}
function Ut(e) {
    return Object.fromEntries(Object.entries(e).map((param)=>{
        let [t, o] = param;
        return [
            t,
            o.config
        ];
    }));
}
function Mi(e, t) {
    e.stopEvent = (o)=>(o.type === "mousedown" && setTimeout(()=>{
            t.view.dom.blur();
        }, 10), !0);
}
function Li(e, t) {
    const o = [
        {
            tag: "[data-content-type=" + e.type + "]",
            contentElement: "[data-editable]"
        }
    ];
    return t && o.push({
        tag: "*",
        getAttrs (i) {
            if (typeof i == "string") return !1;
            const n = t == null ? void 0 : t(i);
            return n === void 0 ? !1 : n;
        }
    }), o;
}
function he(e, t) {
    var _e_isSelectable;
    const o = G({
        name: e.type,
        content: e.content === "inline" ? "inline*" : "",
        group: "blockContent",
        selectable: (_e_isSelectable = e.isSelectable) !== null && _e_isSelectable !== void 0 ? _e_isSelectable : !0,
        isolating: !0,
        addAttributes () {
            return me(e.propSchema);
        },
        parseHTML () {
            return Li(e, t.parse);
        },
        renderHTML (param) {
            let { HTMLAttributes: i } = param;
            const n = document.createElement("div");
            return be({
                dom: n,
                contentDOM: e.content === "inline" ? n : void 0
            }, e.type, {}, e.propSchema, e.isFileBlock, i);
        },
        addNodeView () {
            return (param)=>{
                let { getPos: i } = param;
                var d;
                const n = this.options.editor, r = Ti(i, n, this.editor, e.type), a = ((d = this.options.domAttributes) == null ? void 0 : d.blockContent) || {}, s = t.render(r, n), l = be(s, r.type, r.props, e.propSchema, a);
                return e.isSelectable === !1 && Mi(l, this.editor), l;
            };
        }
    });
    if (o.name !== e.type) throw new Error("Node name does not match block type. This is a bug in BlockNote.");
    return Dt(e, {
        node: o,
        toInternalHTML: (i, n)=>{
            var s;
            const r = ((s = o.options.domAttributes) == null ? void 0 : s.blockContent) || {}, a = t.render(i, n);
            return be(a, i.type, i.props, e.propSchema, e.isFileBlock, r);
        },
        // TODO: this should not have wrapInBlockStructure and generally be a lot simpler
        // post-processing in externalHTMLExporter should not be necessary
        toExternalHTML: (i, n)=>{
            var s, l;
            const r = ((s = o.options.domAttributes) == null ? void 0 : s.blockContent) || {};
            let a = (l = t.toExternalHTML) == null ? void 0 : l.call(t, i, n);
            return a === void 0 && (a = t.render(i, n)), be(a, i.type, i.props, e.propSchema, r);
        }
    });
}
function Ht(e, t, o) {
    const i = {
        type: "tableContent",
        columnWidths: [],
        rows: []
    };
    return e.content.forEach((n, r, a)=>{
        const s = {
            cells: []
        };
        a === 0 && n.content.forEach((l)=>{
            var d;
            i.columnWidths.push(((d = l.attrs.colwidth) == null ? void 0 : d[0]) || void 0);
        }), n.content.forEach((l)=>{
            s.cells.push(Se(l.firstChild, t, o));
        }), i.rows.push(s);
    }), i;
}
function Se(e, t, o) {
    const i = [];
    let n;
    return e.content.forEach((r)=>{
        if (r.type.name === "hardBreak") {
            if (n) if (de(n)) n.text += "\n";
            else if (it(n)) n.content[n.content.length - 1].text += "\n";
            else throw new Error("unexpected");
            else n = {
                type: "text",
                text: "\n",
                styles: {}
            };
            return;
        }
        if (r.type.name !== "link" && r.type.name !== "text") {
            if (!t[r.type.name]) {
                console.warn("unrecognized inline content type", r.type.name);
                return;
            }
            n && (i.push(n), n = void 0), i.push(He(r, t, o));
            return;
        }
        const a = {};
        let s;
        for (const l of r.marks)if (l.type.name === "link") s = l;
        else {
            const d = o[l.type.name];
            if (!d) {
                if (l.type.spec.blocknoteIgnore) continue;
                throw new Error("style ".concat(l.type.name, " not found in styleSchema"));
            }
            if (d.propSchema === "boolean") a[d.type] = !0;
            else if (d.propSchema === "string") a[d.type] = l.attrs.stringValue;
            else throw new D(d.propSchema);
        }
        n ? de(n) ? s ? (i.push(n), n = {
            type: "link",
            href: s.attrs.href,
            content: [
                {
                    type: "text",
                    text: r.textContent,
                    styles: a
                }
            ]
        }) : JSON.stringify(n.styles) === JSON.stringify(a) ? n.text += r.textContent : (i.push(n), n = {
            type: "text",
            text: r.textContent,
            styles: a
        }) : it(n) && (s ? n.href === s.attrs.href ? JSON.stringify(n.content[n.content.length - 1].styles) === JSON.stringify(a) ? n.content[n.content.length - 1].text += r.textContent : n.content.push({
            type: "text",
            text: r.textContent,
            styles: a
        }) : (i.push(n), n = {
            type: "link",
            href: s.attrs.href,
            content: [
                {
                    type: "text",
                    text: r.textContent,
                    styles: a
                }
            ]
        }) : (i.push(n), n = {
            type: "text",
            text: r.textContent,
            styles: a
        })) : s ? n = {
            type: "link",
            href: s.attrs.href,
            content: [
                {
                    type: "text",
                    text: r.textContent,
                    styles: a
                }
            ]
        } : n = {
            type: "text",
            text: r.textContent,
            styles: a
        };
    }), n && i.push(n), i;
}
function He(e, t, o) {
    if (e.type.name === "text" || e.type.name === "link") throw new Error("unexpected");
    const i = {}, n = t[e.type.name];
    for (const [s, l] of Object.entries(e.attrs)){
        if (!n) throw Error("ic node is of an unrecognized type: " + e.type.name);
        const d = n.propSchema;
        s in d && (i[s] = l);
    }
    let r;
    return n.content === "styled" ? r = Se(e, t, o) : r = void 0, {
        type: e.type.name,
        props: i,
        content: r
    };
}
function w(e, t, o, i, n) {
    var f;
    if (!e.type.isInGroup("bnBlock")) throw Error("Node must be in bnBlock group, but is of type" + e.type.name);
    const r = n == null ? void 0 : n.get(e);
    if (r) return r;
    const a = Ge(e, 0);
    let s = a.bnBlock.node.attrs.id;
    s === null && (s = ue.options.generateID());
    const l = t[a.blockNoteType];
    if (!l) throw Error("Block is of an unrecognized type: " + a.blockNoteType);
    const d = {};
    for (const [g, b] of Object.entries({
        ...e.attrs,
        ...a.isBlockContainer ? a.blockContent.node.attrs : {}
    })){
        const k = l.propSchema;
        g in k && !(k[g].default === void 0 && b === void 0) && (d[g] = b);
    }
    const c = t[a.blockNoteType], u = [];
    (f = a.childContainer) == null || f.node.forEach((g)=>{
        u.push(w(g, t, o, i, n));
    });
    let m;
    if (c.content === "inline") {
        if (!a.isBlockContainer) throw new Error("impossible");
        m = Se(a.blockContent.node, o, i);
    } else if (c.content === "table") {
        if (!a.isBlockContainer) throw new Error("impossible");
        m = Ht(a.blockContent.node, o, i);
    } else if (c.content === "none") m = void 0;
    else throw new D(c.content);
    const h = {
        id: s,
        type: c.type,
        props: d,
        content: m,
        children: u
    };
    return n == null || n.set(e, h), h;
}
function at(e, t, o, i) {
    return e.dom.setAttribute("data-inline-content-type", t), Object.entries(o).filter((param)=>{
        let [n, r] = param;
        const a = i[n];
        return r !== a.default;
    }).map((param)=>{
        let [n, r] = param;
        return [
            ye(n),
            r
        ];
    }).forEach((param)=>{
        let [n, r] = param;
        return e.dom.setAttribute(n, r);
    }), e.contentDOM !== void 0 && e.contentDOM.setAttribute("data-editable", ""), e;
}
function Ii(e) {
    return {
        Backspace: (param)=>{
            let { editor: t } = param;
            const o = t.state.selection.$from;
            return t.state.selection.empty && o.node().type.name === e.type && o.parentOffset === 0;
        }
    };
}
function Ai(e, t) {
    return {
        config: e,
        implementation: t
    };
}
function Pi(e, t) {
    return Ai({
        type: e.name,
        propSchema: t,
        content: e.config.content === "inline*" ? "styled" : "none"
    }, {
        node: e
    });
}
function Ot(e) {
    return Object.fromEntries(Object.entries(e).map((param)=>{
        let [t, o] = param;
        return [
            t,
            o.config
        ];
    }));
}
function Ni(e) {
    return [
        {
            tag: '[data-inline-content-type="'.concat(e.type, '"]'),
            contentElement: (t)=>{
                const o = t;
                return o.matches("[data-editable]") ? o : o.querySelector("[data-editable]") || o;
            }
        }
    ];
}
function us(e, t) {
    const o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
        name: e.type,
        inline: !0,
        group: "inline",
        selectable: e.content === "styled",
        atom: e.content === "none",
        content: e.content === "styled" ? "inline*" : "",
        addAttributes () {
            return me(e.propSchema);
        },
        addKeyboardShortcuts () {
            return Ii(e);
        },
        parseHTML () {
            return Ni(e);
        },
        renderHTML (param) {
            let { node: i } = param;
            const n = this.options.editor, r = t.render(He(i, n.schema.inlineContentSchema, n.schema.styleSchema), // TODO: fix cast
            ()=>{}, n);
            return at(r, e.type, i.attrs, e.propSchema);
        },
        addNodeView () {
            return (param)=>{
                let { node: i, getPos: n } = param;
                const r = this.options.editor, a = t.render(He(i, r.schema.inlineContentSchema, r.schema.styleSchema), // TODO: fix cast
                (s)=>{
                    if (typeof n == "boolean") return;
                    const l = U([
                        s
                    ], r._tiptapEditor.schema, r.schema.styleSchema);
                    r.dispatch(r.prosemirrorView.state.tr.replaceWith(n(), n() + i.nodeSize, l));
                }, r);
                return at(a, e.type, i.attrs, e.propSchema);
            };
        }
    });
    return Pi(o, e.propSchema);
}
function ji(e) {
    return e === "boolean" ? {} : {
        stringValue: {
            default: void 0,
            keepOnSplit: !0,
            parseHTML: (t)=>t.getAttribute("data-value"),
            renderHTML: (t)=>t.stringValue !== void 0 ? {
                    "data-value": t.stringValue
                } : {}
        }
    };
}
function Di(e, t, o, i) {
    return e.dom.setAttribute("data-style-type", t), i === "string" && e.dom.setAttribute("data-value", o), e.contentDOM !== void 0 && e.contentDOM.setAttribute("data-editable", ""), e;
}
function Rt(e, t) {
    return {
        config: e,
        implementation: t
    };
}
function W(e, t) {
    return Rt({
        type: e.name,
        propSchema: t
    }, {
        mark: e
    });
}
function Vt(e) {
    return Object.fromEntries(Object.entries(e).map((param)=>{
        let [t, o] = param;
        return [
            t,
            o.config
        ];
    }));
}
function Ui(e) {
    return [
        {
            tag: '[data-style-type="'.concat(e.type, '"]'),
            contentElement: (t)=>{
                const o = t;
                return o.matches("[data-editable]") ? o : o.querySelector("[data-editable]") || o;
            }
        }
    ];
}
function ps(e, t) {
    const o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"].create({
        name: e.type,
        addAttributes () {
            return ji(e.propSchema);
        },
        parseHTML () {
            return Ui(e);
        },
        renderHTML (param) {
            let { mark: i } = param;
            let n;
            if (e.propSchema === "boolean") n = t.render();
            else if (e.propSchema === "string") n = t.render(i.attrs.stringValue);
            else throw new D(e.propSchema);
            return Di(n, e.type, i.attrs.stringValue, e.propSchema);
        }
    });
    return Rt(e, {
        mark: o
    });
}
const Be = (e, t)=>{
    const o = e.querySelector(t);
    if (!o) return;
    var _ref;
    const i = e.querySelector("figcaption"), n = (_ref = i == null ? void 0 : i.textContent) !== null && _ref !== void 0 ? _ref : void 0;
    return {
        targetElement: o,
        caption: n
    };
}, Hi = (e, t, o, i)=>{
    const n = document.createElement("div");
    n.className = "bn-add-file-button";
    const r = document.createElement("div");
    r.className = "bn-add-file-button-icon", i ? r.appendChild(i) : r.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 8L9.00319 2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8ZM10 4V9H5V20H19V4H10Z"></path></svg>', n.appendChild(r);
    const a = document.createElement("p");
    a.className = "bn-add-file-button-text", a.innerHTML = o || t.dictionary.file_blocks.file.add_button_text, n.appendChild(a);
    const s = (d)=>{
        d.preventDefault();
    }, l = ()=>{
        t.dispatch(t._tiptapEditor.state.tr.setMeta(t.filePanel.plugin, {
            block: e
        }));
    };
    return n.addEventListener("mousedown", s, !0), n.addEventListener("click", l, !0), {
        dom: n,
        destroy: ()=>{
            n.removeEventListener("mousedown", s, !0), n.removeEventListener("click", l, !0);
        }
    };
}, Oi = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 8L9.00319 2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8ZM10 4V9H5V20H19V4H10Z"></path></svg>', Ri = (e)=>{
    const t = document.createElement("div");
    t.className = "bn-file-name-with-icon";
    const o = document.createElement("div");
    o.className = "bn-file-icon", o.innerHTML = Oi, t.appendChild(o);
    const i = document.createElement("p");
    return i.className = "bn-file-name", i.textContent = e.props.name, t.appendChild(i), {
        dom: t
    };
}, $e = (e, t, o, i, n)=>{
    const r = document.createElement("div");
    if (r.className = "bn-file-block-content-wrapper", e.props.url === "") {
        const s = Hi(e, t, i, n);
        r.appendChild(s.dom);
        const l = t.onUploadStart((d)=>{
            if (d === e.id) {
                r.removeChild(s.dom);
                const c = document.createElement("div");
                c.className = "bn-file-loading-preview", c.textContent = "Loading...", r.appendChild(c);
            }
        });
        return {
            dom: r,
            destroy: ()=>{
                l(), s.destroy();
            }
        };
    }
    const a = {
        dom: r
    };
    if (e.props.showPreview === !1 || !o) {
        const s = Ri(e);
        r.appendChild(s.dom), a.destroy = ()=>{
            var l;
            (l = s.destroy) == null || l.call(s);
        };
    } else r.appendChild(o.dom);
    if (e.props.caption) {
        const s = document.createElement("p");
        s.className = "bn-file-caption", s.textContent = e.props.caption, r.appendChild(s);
    }
    return a;
}, We = (e, t)=>{
    const o = document.createElement("figure"), i = document.createElement("figcaption");
    return i.textContent = t, o.appendChild(e), o.appendChild(i), {
        dom: o
    };
}, Te = (e, t)=>{
    const o = document.createElement("div"), i = document.createElement("p");
    return i.textContent = t, o.appendChild(e), o.appendChild(i), {
        dom: o
    };
}, st = (e)=>({
        url: e.src || void 0
    }), Vi = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 16.0001H5.88889L11.1834 20.3319C11.2727 20.405 11.3846 20.4449 11.5 20.4449C11.7761 20.4449 12 20.2211 12 19.9449V4.05519C12 3.93977 11.9601 3.8279 11.887 3.73857C11.7121 3.52485 11.3971 3.49335 11.1834 3.66821L5.88889 8.00007H2C1.44772 8.00007 1 8.44778 1 9.00007V15.0001C1 15.5524 1.44772 16.0001 2 16.0001ZM23 12C23 15.292 21.5539 18.2463 19.2622 20.2622L17.8445 18.8444C19.7758 17.1937 21 14.7398 21 12C21 9.26016 19.7758 6.80629 17.8445 5.15557L19.2622 3.73779C21.5539 5.75368 23 8.70795 23 12ZM18 12C18 10.0883 17.106 8.38548 15.7133 7.28673L14.2842 8.71584C15.3213 9.43855 16 10.64 16 12C16 13.36 15.3213 14.5614 14.2842 15.2841L15.7133 16.7132C17.106 15.6145 18 13.9116 18 12Z"></path></svg>', zi = {
    backgroundColor: C.backgroundColor,
    // File name.
    name: {
        default: ""
    },
    // File url.
    url: {
        default: ""
    },
    // File caption.
    caption: {
        default: ""
    },
    showPreview: {
        default: !0
    }
}, Fi = {
    type: "audio",
    propSchema: zi,
    content: "none",
    isFileBlock: !0,
    fileBlockAccept: [
        "audio/*"
    ]
}, Gi = (e, t)=>{
    const o = document.createElement("div");
    o.innerHTML = Vi;
    const i = document.createElement("audio");
    return i.className = "bn-audio", t.resolveFileUrl ? t.resolveFileUrl(e.props.url).then((n)=>{
        i.src = n;
    }) : i.src = e.props.url, i.controls = !0, i.contentEditable = "false", i.draggable = !1, $e(e, t, {
        dom: i
    }, t.dictionary.file_blocks.audio.add_button_text, o.firstElementChild);
}, $i = (e)=>{
    if (e.tagName === "AUDIO") return st(e);
    if (e.tagName === "FIGURE") {
        const t = Be(e, "audio");
        if (!t) return;
        const { targetElement: o, caption: i } = t;
        return {
            ...st(o),
            caption: i
        };
    }
}, Wi = (e)=>{
    if (!e.props.url) {
        const o = document.createElement("p");
        return o.textContent = "Add audio", {
            dom: o
        };
    }
    let t;
    return e.props.showPreview ? (t = document.createElement("audio"), t.src = e.props.url) : (t = document.createElement("a"), t.href = e.props.url, t.textContent = e.props.name || e.props.url), e.props.caption ? e.props.showPreview ? We(t, e.props.caption) : Te(t, e.props.caption) : {
        dom: t
    };
}, Ki = he(Fi, {
    render: Gi,
    parse: $i,
    toExternalHTML: Wi
}), zt = [
    {
        id: "text",
        name: "Plain Text",
        match: [
            "text",
            "txt",
            "plain"
        ]
    },
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shiki$40$1$2e$29$2e$2$2f$node_modules$2f$shiki$2f$dist$2f$langs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bundledLanguagesInfo"].filter((e)=>[
            "c",
            "cpp",
            "css",
            "glsl",
            "graphql",
            "haml",
            "html",
            "java",
            "javascript",
            "json",
            "jsonc",
            "jsonl",
            "jsx",
            "julia",
            "less",
            "markdown",
            "mdx",
            "php",
            "postcss",
            "pug",
            "python",
            "r",
            "regexp",
            "sass",
            "scss",
            "shellscript",
            "sql",
            "svelte",
            "typescript",
            "vue",
            "vue-html",
            "wasm",
            "wgsl",
            "xml",
            "yaml"
        ].includes(e.id)).map((e)=>({
            match: [
                e.id,
                ...e.aliases || []
            ],
            id: e.id,
            name: e.name
        })),
    {
        id: "tsx",
        name: "TSX",
        match: [
            "tsx",
            "typescriptreact"
        ]
    },
    {
        id: "haskell",
        name: "Haskell",
        match: [
            "haskell",
            "hs"
        ]
    },
    {
        id: "csharp",
        name: "C#",
        match: [
            "c#",
            "csharp",
            "cs"
        ]
    },
    {
        id: "latex",
        name: "LaTeX",
        match: [
            "latex"
        ]
    },
    {
        id: "lua",
        name: "Lua",
        match: [
            "lua"
        ]
    },
    {
        id: "mermaid",
        name: "Mermaid",
        match: [
            "mermaid",
            "mmd"
        ]
    },
    {
        id: "ruby",
        name: "Ruby",
        match: [
            "ruby",
            "rb"
        ]
    },
    {
        id: "rust",
        name: "Rust",
        match: [
            "rust",
            "rs"
        ]
    },
    {
        id: "scala",
        name: "Scala",
        match: [
            "scala"
        ]
    },
    {
        id: "swift",
        name: "Swift",
        match: [
            "swift"
        ]
    },
    {
        id: "kotlin",
        name: "Kotlin",
        match: [
            "kotlin",
            "kt",
            "kts"
        ]
    },
    {
        id: "objective-c",
        name: "Objective C",
        match: [
            "objective-c",
            "objc"
        ]
    }
], lt = Symbol.for("blocknote.shikiParser"), Le = Symbol.for("blocknote.shikiHighlighterPromise"), Oe = {
    language: {
        default: "javascript",
        values: [
            ...zt.map((e)=>e.id)
        ]
    }
}, Ft = G({
    name: "codeBlock",
    content: "inline*",
    group: "blockContent",
    marks: "",
    code: !0,
    defining: !0,
    addOptions () {
        return {
            defaultLanguage: "javascript",
            indentLineWithTab: !0,
            supportedLanguages: zt
        };
    },
    addAttributes () {
        const e = this.options.supportedLanguages;
        return {
            language: {
                default: this.options.defaultLanguage,
                parseHTML: (t)=>{
                    var r;
                    let o = t, i = null;
                    (o == null ? void 0 : o.tagName) === "DIV" && (o == null ? void 0 : o.dataset.contentType) === "codeBlock" && (o = o.children[0]), (o == null ? void 0 : o.tagName) === "PRE" && (o = o == null ? void 0 : o.children[0]);
                    const n = o == null ? void 0 : o.getAttribute("data-language");
                    if (n) i = n.toLowerCase();
                    else {
                        const s = [
                            ...(o == null ? void 0 : o.className.split(" ")) || []
                        ].filter((l)=>l.startsWith("language-")).map((l)=>l.replace("language-", ""));
                        s.length > 0 && (i = s[0].toLowerCase());
                    }
                    return i ? ((r = e.find((param)=>{
                        let { match: a } = param;
                        return a.includes(i);
                    })) == null ? void 0 : r.id) || this.options.defaultLanguage : null;
                },
                renderHTML: (t)=>t.language && t.language !== "text" ? {
                        class: "language-".concat(t.language)
                    } : {}
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "div[data-content-type=" + this.name + "]",
                contentElement: "code"
            },
            {
                tag: "pre",
                contentElement: "code",
                preserveWhitespace: "full"
            }
        ];
    },
    renderHTML (param) {
        let { HTMLAttributes: e } = param;
        var n, r;
        const t = document.createElement("pre"), { dom: o, contentDOM: i } = R(this.name, "code", ((n = this.options.domAttributes) == null ? void 0 : n.blockContent) || {}, {
            ...((r = this.options.domAttributes) == null ? void 0 : r.inlineContent) || {},
            ...e
        });
        return o.removeChild(i), o.appendChild(t), t.appendChild(i), {
            dom: o,
            contentDOM: i
        };
    },
    addNodeView () {
        const e = this.options.supportedLanguages;
        return (param)=>{
            let { editor: t, node: o, getPos: i, HTMLAttributes: n } = param;
            var u, m;
            const r = document.createElement("pre"), a = document.createElement("select"), s = document.createElement("div"), { dom: l, contentDOM: d } = R(this.name, "code", {
                ...((u = this.options.domAttributes) == null ? void 0 : u.blockContent) || {},
                ...n
            }, ((m = this.options.domAttributes) == null ? void 0 : m.inlineContent) || {}), c = (h)=>{
                const f = h.target.value;
                t.commands.command((param)=>{
                    let { tr: g } = param;
                    return g.setNodeAttribute(i(), "language", f), !0;
                });
            };
            return e.forEach((param)=>{
                let { id: h, name: f } = param;
                const g = document.createElement("option");
                g.value = h, g.text = f, a.appendChild(g);
            }), s.contentEditable = "false", a.value = o.attrs.language || this.options.defaultLanguage, l.removeChild(d), l.appendChild(s), l.appendChild(r), r.appendChild(d), s.appendChild(a), a.addEventListener("change", c), {
                dom: l,
                contentDOM: d,
                update: (h)=>h.type === this.type,
                destroy: ()=>{
                    a.removeEventListener("change", c);
                }
            };
        };
    },
    addProseMirrorPlugins () {
        const e = this.options.supportedLanguages, t = globalThis;
        let o, i;
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$highlight$40$0$2e$9$2e$0_b04c224c4ea8eb10efaf40c9f6860b36$2f$node_modules$2f$prosemirror$2d$highlight$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHighlightPlugin"])({
                parser: (a)=>{
                    if (!o) return t[Le] = t[Le] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shiki$40$1$2e$29$2e$2$2f$node_modules$2f$shiki$2f$dist$2f$bundle$2d$full$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createHighlighter"])({
                        themes: [
                            "github-dark"
                        ],
                        langs: []
                    }), t[Le].then((l)=>{
                        o = l;
                    });
                    const s = a.language;
                    return s && s !== "text" && !o.getLoadedLanguages().includes(s) && e.find((param)=>{
                        let { id: l } = param;
                        return l === s;
                    }) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shiki$40$1$2e$29$2e$2$2f$node_modules$2f$shiki$2f$dist$2f$langs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bundledLanguagesInfo"].find((param)=>{
                        let { id: l } = param;
                        return l === s;
                    }) ? o.loadLanguage(s) : (i || (i = t[lt] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$highlight$40$0$2e$9$2e$0_b04c224c4ea8eb10efaf40c9f6860b36$2f$node_modules$2f$prosemirror$2d$highlight$2f$dist$2f$shiki$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createParser"])(o), t[lt] = i), i(a));
                },
                languageExtractor: (a)=>a.attrs.language,
                nodeTypes: [
                    this.name
                ]
            })
        ];
    },
    addInputRules () {
        const e = this.options.supportedLanguages;
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputRule"]({
                find: /^```(.*?)\s$/,
                handler: (param)=>{
                    let { state: t, range: o, match: i } = param;
                    var s;
                    const n = t.doc.resolve(o.from), r = i[1].trim(), a = {
                        language: ((s = e.find((param)=>{
                            let { match: l } = param;
                            return l.includes(r);
                        })) == null ? void 0 : s.id) || this.options.defaultLanguage
                    };
                    if (!n.node(-1).canReplaceWith(n.index(-1), n.indexAfter(-1), this.type)) return null;
                    t.tr.delete(o.from, o.to).setBlockType(o.from, o.from, this.type, a).setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].create(t.tr.doc, o.from));
                }
            })
        ];
    },
    addKeyboardShortcuts () {
        return {
            Delete: (param)=>{
                let { editor: e } = param;
                const { selection: t } = e.state, { $from: o } = t;
                if (e.isActive(this.name) && !o.parent.textContent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTextSelection"])(t)) {
                    const i = o.pos - o.parentOffset - 2;
                    return e.chain().setNodeSelection(i).deleteSelection().run(), !0;
                }
                return !1;
            },
            Tab: (param)=>{
                let { editor: e } = param;
                return this.options.indentLineWithTab && e.isActive(this.name) ? (e.commands.insertContent("  "), !0) : !1;
            },
            Enter: (param)=>{
                let { editor: e } = param;
                const { $from: t } = e.state.selection;
                if (!e.isActive(this.name)) return !1;
                const o = t.parentOffset === t.parent.nodeSize - 2, i = t.parent.textContent.endsWith("\n\n");
                return !o || !i ? (e.commands.insertContent("\n"), !0) : e.chain().command((param)=>{
                    let { tr: n } = param;
                    return n.delete(t.pos - 2, t.pos), !0;
                }).exitCode().run();
            },
            "Shift-Enter": (param)=>{
                let { editor: e } = param;
                const { $from: t } = e.state.selection;
                return e.isActive(this.name) ? (e.chain().insertContentAt(t.pos - t.parentOffset + t.parent.nodeSize, {
                    type: "paragraph"
                }).run(), !0) : !1;
            }
        };
    }
}), qi = $(Ft, Oe);
function ms(e) {
    var t;
    return $(Ft.configure(e), {
        language: {
            default: e.defaultLanguage || Oe.language.default,
            values: ((t = e.supportedLanguages) == null ? void 0 : t.map((o)=>o.id)) || Oe.language.values
        }
    });
}
const Xi = {
    type: "pageBreak",
    propSchema: {},
    content: "none",
    isFileBlock: !1,
    isSelectable: !1
}, Zi = ()=>{
    const e = document.createElement("div");
    return e.className = "bn-page-break", e.setAttribute("data-page-break", ""), {
        dom: e
    };
}, Ji = (e)=>{
    if (e.tagName === "DIV" && e.hasAttribute("data-page-break")) return {
        type: "pageBreak"
    };
}, Yi = ()=>{
    const e = document.createElement("div");
    return e.setAttribute("data-page-break", ""), {
        dom: e
    };
}, Qi = he(Xi, {
    render: Zi,
    parse: Ji,
    toExternalHTML: Yi
}), en = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"].create({
    name: "backgroundColor",
    addAttributes () {
        return {
            stringValue: {
                default: void 0,
                parseHTML: (e)=>e.getAttribute("data-background-color"),
                renderHTML: (e)=>({
                        "data-background-color": e.stringValue
                    })
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "span",
                getAttrs: (e)=>typeof e == "string" ? !1 : e.hasAttribute("data-background-color") ? {
                        stringValue: e.getAttribute("data-background-color")
                    } : !1
            }
        ];
    },
    renderHTML (param) {
        let { HTMLAttributes: e } = param;
        return [
            "span",
            e,
            0
        ];
    }
}), tn = W(en, "string"), on = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"].create({
    name: "textColor",
    addAttributes () {
        return {
            stringValue: {
                default: void 0,
                parseHTML: (e)=>e.getAttribute("data-text-color"),
                renderHTML: (e)=>({
                        "data-text-color": e.stringValue
                    })
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "span",
                getAttrs: (e)=>typeof e == "string" ? !1 : e.hasAttribute("data-text-color") ? {
                        stringValue: e.getAttribute("data-text-color")
                    } : !1
            }
        ];
    },
    renderHTML (param) {
        let { HTMLAttributes: e } = param;
        return [
            "span",
            e,
            0
        ];
    }
}), nn = W(on, "string"), dt = (e)=>({
        url: e.src || void 0
    }), rn = {
    backgroundColor: C.backgroundColor,
    // File name.
    name: {
        default: ""
    },
    // File url.
    url: {
        default: ""
    },
    // File caption.
    caption: {
        default: ""
    }
}, an = {
    type: "file",
    propSchema: rn,
    content: "none",
    isFileBlock: !0
}, sn = (e, t)=>$e(e, t), ln = (e)=>{
    if (e.tagName === "EMBED") return dt(e);
    if (e.tagName === "FIGURE") {
        const t = Be(e, "embed");
        if (!t) return;
        const { targetElement: o, caption: i } = t;
        return {
            ...dt(o),
            caption: i
        };
    }
}, dn = (e)=>{
    if (!e.props.url) {
        const o = document.createElement("p");
        return o.textContent = "Add file", {
            dom: o
        };
    }
    const t = document.createElement("a");
    return t.href = e.props.url, t.textContent = e.props.name || e.props.url, e.props.caption ? Te(t, e.props.caption) : {
        dom: t
    };
}, cn = he(an, {
    render: sn,
    parse: ln,
    toExternalHTML: dn
}), S = (e, t, o)=>(param)=>{
        let { state: i, dispatch: n } = param;
        const r = pe(i.doc.resolve(t));
        if (n) {
            const a = i.schema.nodes[r.blockNoteType], s = i.schema.nodes[o.type || r.blockNoteType], l = s.isInGroup("bnBlock") ? s : i.schema.nodes.blockContainer;
            if (r.isBlockContainer && s.isInGroup("blockContent")) ct(o, i, e, r), un(o, i, e, a, s, r);
            else if (!r.isBlockContainer && s.isInGroup("bnBlock")) ct(o, i, e, r);
            else {
                const d = w(r.bnBlock.node, e.schema.blockSchema, e.schema.inlineContentSchema, e.schema.styleSchema, e.blockCache);
                return i.tr.replaceWith(r.bnBlock.beforePos, r.bnBlock.afterPos, J({
                    children: d.children,
                    // if no children are passed in, use existing children
                    ...o
                }, i.schema, e.schema.styleSchema)), !0;
            }
            i.tr.setNodeMarkup(r.bnBlock.beforePos, l, {
                ...r.bnBlock.node.attrs,
                ...o.props
            });
        }
        return !0;
    };
function un(e, t, o, i, n, r) {
    let a = "keep";
    if (e.content) if (typeof e.content == "string") a = U([
        e.content
    ], t.schema, o.schema.styleSchema, n.name);
    else if (Array.isArray(e.content)) a = U(e.content, t.schema, o.schema.styleSchema, n.name);
    else if (e.content.type === "tableContent") a = Ce(e.content, t.schema, o.schema.styleSchema);
    else throw new D(e.content.type);
    else i.spec.content === "" || n.spec.content !== i.spec.content && (a = []);
    a === "keep" ? t.tr.setNodeMarkup(r.blockContent.beforePos, e.type === void 0 ? void 0 : t.schema.nodes[e.type], {
        ...r.blockContent.node.attrs,
        ...e.props
    }) : t.tr.replaceWith(r.blockContent.beforePos, r.blockContent.afterPos, n.createChecked({
        ...r.blockContent.node.attrs,
        ...e.props
    }, a));
}
function ct(e, t, o, i) {
    if (e.children !== void 0) {
        const n = e.children.map((r)=>J(r, t.schema, o.schema.styleSchema));
        if (i.childContainer) t.tr.step(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$10$2e$4$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReplaceStep"](i.childContainer.beforePos + 1, i.childContainer.afterPos - 1, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(n), 0, 0)));
        else {
            if (!i.isBlockContainer) throw new Error("impossible");
            t.tr.insert(i.blockContent.afterPos, t.schema.nodes.blockGroup.createChecked({}, n));
        }
    }
}
function pn(e, t, o) {
    const i = e._tiptapEditor, n = typeof t == "string" ? t : t.id, r = A(n, i.state.doc);
    if (!r) throw new Error("Block with ID ".concat(n, " not found"));
    i.commands.command((param)=>{
        let { state: s, dispatch: l } = param;
        return S(e, r.posBeforeNode, o)({
            state: s,
            dispatch: l
        }), !0;
    });
    const a = i.state.doc.resolve(r.posBeforeNode + 1).node();
    return w(a, e.schema.blockSchema, e.schema.inlineContentSchema, e.schema.styleSchema, e.blockCache);
}
const Gt = {
    ...C,
    level: {
        default: 1,
        values: [
            1,
            2,
            3
        ]
    }
}, mn = G({
    name: "heading",
    content: "inline*",
    group: "blockContent",
    addAttributes () {
        return me(Gt);
    },
    addInputRules () {
        return [
            ...[
                1,
                2,
                3
            ].map((e)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputRule"]({
                    find: new RegExp("^(#{".concat(e, "})\\s$")),
                    handler: (param)=>{
                        let { state: t, chain: o, range: i } = param;
                        const n = _(t);
                        !n.isBlockContainer || n.blockContent.node.type.spec.content !== "inline*" || o().command(S(this.options.editor, n.bnBlock.beforePos, {
                            type: "heading",
                            props: {
                                level: e
                            }
                        })).deleteRange({
                            from: i.from,
                            to: i.to
                        }).run();
                    }
                }))
        ];
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Alt-1": ()=>{
                const e = _(this.editor.state);
                return !e.isBlockContainer || e.blockContent.node.type.spec.content !== "inline*" ? !0 : this.editor.commands.command(S(this.options.editor, e.bnBlock.beforePos, {
                    type: "heading",
                    props: {
                        level: 1
                    }
                }));
            },
            "Mod-Alt-2": ()=>{
                const e = _(this.editor.state);
                return !e.isBlockContainer || e.blockContent.node.type.spec.content !== "inline*" ? !0 : this.editor.commands.command(S(this.options.editor, e.bnBlock.beforePos, {
                    type: "heading",
                    props: {
                        level: 2
                    }
                }));
            },
            "Mod-Alt-3": ()=>{
                const e = _(this.editor.state);
                return !e.isBlockContainer || e.blockContent.node.type.spec.content !== "inline*" ? !0 : this.editor.commands.command(S(this.options.editor, e.bnBlock.beforePos, {
                    type: "heading",
                    props: {
                        level: 3
                    }
                }));
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "div[data-content-type=" + this.name + "]"
            },
            {
                tag: "h1",
                attrs: {
                    level: 1
                },
                node: "heading"
            },
            {
                tag: "h2",
                attrs: {
                    level: 2
                },
                node: "heading"
            },
            {
                tag: "h3",
                attrs: {
                    level: 3
                },
                node: "heading"
            }
        ];
    },
    renderHTML (param) {
        let { node: e, HTMLAttributes: t } = param;
        var o, i;
        return R(this.name, "h".concat(e.attrs.level), {
            ...((o = this.options.domAttributes) == null ? void 0 : o.blockContent) || {},
            ...t
        }, ((i = this.options.domAttributes) == null ? void 0 : i.inlineContent) || {});
    }
}), hn = $(mn, Gt), $t = (e, t, o, i, n, r)=>{
    const { dom: a, destroy: s } = $e(e, t, o, n, r), l = a;
    e.props.url && e.props.showPreview && (l.style.width = "".concat(e.props.previewWidth, "px"));
    const d = document.createElement("div");
    d.className = "bn-resize-handle", d.style.left = "4px";
    const c = document.createElement("div");
    c.className = "bn-resize-handle", c.style.right = "4px";
    let u, m = e.props.previewWidth;
    const h = (y)=>{
        if (!u) {
            !t.isEditable && i.contains(d) && i.contains(c) && (i.removeChild(d), i.removeChild(c));
            return;
        }
        let P;
        e.props.textAlignment === "center" ? u.handleUsed === "left" ? P = u.initialWidth + (u.initialClientX - y.clientX) * 2 : P = u.initialWidth + (y.clientX - u.initialClientX) * 2 : u.handleUsed === "left" ? P = u.initialWidth + u.initialClientX - y.clientX : P = u.initialWidth + y.clientX - u.initialClientX, m = Math.max(P, 64), l.style.width = "".concat(m, "px");
    }, f = (y)=>{
        (!y.target || !l.contains(y.target) || !t.isEditable) && i.contains(d) && i.contains(c) && (i.removeChild(d), i.removeChild(c)), u && (u = void 0, t.updateBlock(e, {
            props: {
                previewWidth: m
            }
        }));
    }, g = ()=>{
        t.isEditable && (i.appendChild(d), i.appendChild(c));
    }, b = (y)=>{
        y.relatedTarget === d || y.relatedTarget === c || u || t.isEditable && i.contains(d) && i.contains(c) && (i.removeChild(d), i.removeChild(c));
    }, k = (y)=>{
        y.preventDefault(), u = {
            handleUsed: "left",
            initialWidth: l.clientWidth,
            initialClientX: y.clientX
        };
    }, v = (y)=>{
        y.preventDefault(), u = {
            handleUsed: "right",
            initialWidth: l.clientWidth,
            initialClientX: y.clientX
        };
    };
    return window.addEventListener("mousemove", h), window.addEventListener("mouseup", f), l.addEventListener("mouseenter", g), l.addEventListener("mouseleave", b), d.addEventListener("mousedown", k), c.addEventListener("mousedown", v), {
        dom: l,
        destroy: ()=>{
            s == null || s(), window.removeEventListener("mousemove", h), window.removeEventListener("mouseup", f), l.removeEventListener("mouseenter", g), l.removeEventListener("mouseleave", b), d.removeEventListener("mousedown", k), c.removeEventListener("mousedown", v);
        }
    };
}, ut = (e)=>{
    const t = e.src || void 0, o = e.width || void 0;
    return {
        url: t,
        previewWidth: o
    };
}, fn = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 11.1005L7 9.1005L12.5 14.6005L16 11.1005L19 14.1005V5H5V11.1005ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10Z"></path></svg>', gn = {
    textAlignment: C.textAlignment,
    backgroundColor: C.backgroundColor,
    // File name.
    name: {
        default: ""
    },
    // File url.
    url: {
        default: ""
    },
    // File caption.
    caption: {
        default: ""
    },
    showPreview: {
        default: !0
    },
    // File preview width in px.
    previewWidth: {
        default: 512
    }
}, bn = {
    type: "image",
    propSchema: gn,
    content: "none",
    isFileBlock: !0,
    fileBlockAccept: [
        "image/*"
    ]
}, kn = (e, t)=>{
    const o = document.createElement("div");
    o.innerHTML = fn;
    const i = document.createElement("div");
    i.className = "bn-visual-media-wrapper";
    const n = document.createElement("img");
    return n.className = "bn-visual-media", t.resolveFileUrl ? t.resolveFileUrl(e.props.url).then((r)=>{
        n.src = r;
    }) : n.src = e.props.url, n.alt = e.props.name || e.props.caption || "BlockNote image", n.contentEditable = "false", n.draggable = !1, i.appendChild(n), $t(e, t, {
        dom: i
    }, i, t.dictionary.file_blocks.image.add_button_text, o.firstElementChild);
}, _n = (e)=>{
    if (e.tagName === "IMG") return ut(e);
    if (e.tagName === "FIGURE") {
        const t = Be(e, "img");
        if (!t) return;
        const { targetElement: o, caption: i } = t;
        return {
            ...ut(o),
            caption: i
        };
    }
}, yn = (e)=>{
    if (!e.props.url) {
        const o = document.createElement("p");
        return o.textContent = "Add image", {
            dom: o
        };
    }
    let t;
    return e.props.showPreview ? (t = document.createElement("img"), t.src = e.props.url, t.alt = e.props.name || e.props.caption || "BlockNote image", t.width = e.props.previewWidth) : (t = document.createElement("a"), t.href = e.props.url, t.textContent = e.props.name || e.props.url), e.props.caption ? e.props.showPreview ? We(t, e.props.caption) : Te(t, e.props.caption) : {
        dom: t
    };
}, vn = he(bn, {
    render: kn,
    parse: _n,
    toExternalHTML: yn
}), Wt = (e, t, o)=>(param)=>{
        let { state: i, dispatch: n } = param;
        const r = z(i.doc, e), a = X(r);
        if (!a.isBlockContainer) throw new Error("BlockContainer expected when calling splitBlock, position ".concat(e));
        const s = [
            {
                type: a.bnBlock.node.type,
                // always keep blockcontainer type
                attrs: o ? {
                    ...a.bnBlock.node.attrs,
                    id: void 0
                } : {}
            },
            {
                type: t ? a.blockContent.node.type : i.schema.nodes.paragraph,
                attrs: o ? {
                    ...a.blockContent.node.attrs
                } : {}
            }
        ];
        return n && i.tr.split(e, 2, s), !0;
    }, Ke = (e)=>{
    const t = e._tiptapEditor, o = _(t.state);
    if (!o.isBlockContainer) return !1;
    const { bnBlock: i, blockContent: n } = o, r = t.state.selection.anchor === t.state.selection.head;
    return !(n.node.type.name === "bulletListItem" || n.node.type.name === "numberedListItem" || n.node.type.name === "checkListItem") || !r ? !1 : t.commands.first((param)=>{
        let { state: a, chain: s, commands: l } = param;
        return [
            ()=>// Changes list item block to a paragraph block if the content is empty.
                l.command(()=>n.node.childCount === 0 ? l.command(S(e, i.beforePos, {
                        type: "paragraph",
                        props: {}
                    })) : !1),
            ()=>// Splits the current block, moving content inside that's after the cursor
                // to a new block of the same type below.
                l.command(()=>n.node.childCount > 0 ? (s().deleteSelection().command(Wt(a.selection.from, !0)).run(), !0) : !1)
        ];
    });
}, wn = {
    ...C
}, xn = G({
    name: "bulletListItem",
    content: "inline*",
    group: "blockContent",
    // This is to make sure that check list parse rules run before, since they
    // both parse `li` elements but check lists are more specific.
    priority: 90,
    addInputRules () {
        return [
            // Creates an unordered list when starting with "-", "+", or "*".
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputRule"]({
                find: new RegExp("^[-+*]\\s$"),
                handler: (param)=>{
                    let { state: e, chain: t, range: o } = param;
                    const i = _(e);
                    !i.isBlockContainer || i.blockContent.node.type.spec.content !== "inline*" || t().command(S(this.options.editor, i.bnBlock.beforePos, {
                        type: "bulletListItem",
                        props: {}
                    })).deleteRange({
                        from: o.from,
                        to: o.to
                    });
                }
            })
        ];
    },
    addKeyboardShortcuts () {
        return {
            Enter: ()=>Ke(this.options.editor),
            "Mod-Shift-8": ()=>{
                const e = _(this.editor.state);
                return !e.isBlockContainer || e.blockContent.node.type.spec.content !== "inline*" ? !0 : this.editor.commands.command(S(this.options.editor, e.bnBlock.beforePos, {
                    type: "bulletListItem",
                    props: {}
                }));
            }
        };
    },
    parseHTML () {
        return [
            // Case for regular HTML list structure.
            {
                tag: "div[data-content-type=" + this.name + "]"
            },
            {
                tag: "li",
                getAttrs: (e)=>{
                    if (typeof e == "string") return !1;
                    const t = e.parentElement;
                    return t === null ? !1 : t.tagName === "UL" || t.tagName === "DIV" && t.parentElement.tagName === "UL" ? {} : !1;
                },
                node: "bulletListItem"
            },
            // Case for BlockNote list structure.
            {
                tag: "p",
                getAttrs: (e)=>{
                    if (typeof e == "string") return !1;
                    const t = e.parentElement;
                    return t === null ? !1 : t.getAttribute("data-content-type") === "bulletListItem" ? {} : !1;
                },
                priority: 300,
                node: "bulletListItem"
            }
        ];
    },
    renderHTML (param) {
        let { HTMLAttributes: e } = param;
        var t, o;
        return R(this.name, // We use a <p> tag, because for <li> tags we'd need a <ul> element to put
        // them in to be semantically correct, which we can't have due to the
        // schema.
        "p", {
            ...((t = this.options.domAttributes) == null ? void 0 : t.blockContent) || {},
            ...e
        }, ((o = this.options.domAttributes) == null ? void 0 : o.inlineContent) || {});
    }
}), Cn = $(xn, wn), Kt = {
    ...C,
    checked: {
        default: !1
    }
}, En = G({
    name: "checkListItem",
    content: "inline*",
    group: "blockContent",
    addAttributes () {
        return me(Kt);
    },
    addInputRules () {
        return [
            // Creates a checklist when starting with "[]" or "[X]".
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputRule"]({
                find: new RegExp("\\[\\s*\\]\\s$"),
                handler: (param)=>{
                    let { state: e, chain: t, range: o } = param;
                    const i = _(e);
                    !i.isBlockContainer || i.blockContent.node.type.spec.content !== "inline*" || t().command(S(this.options.editor, i.bnBlock.beforePos, {
                        type: "checkListItem",
                        props: {
                            checked: !1
                        }
                    })).deleteRange({
                        from: o.from,
                        to: o.to
                    });
                }
            }),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputRule"]({
                find: new RegExp("\\[[Xx]\\]\\s$"),
                handler: (param)=>{
                    let { state: e, chain: t, range: o } = param;
                    const i = _(e);
                    !i.isBlockContainer || i.blockContent.node.type.spec.content !== "inline*" || t().command(S(this.options.editor, i.bnBlock.beforePos, {
                        type: "checkListItem",
                        props: {
                            checked: !0
                        }
                    })).deleteRange({
                        from: o.from,
                        to: o.to
                    });
                }
            })
        ];
    },
    addKeyboardShortcuts () {
        return {
            Enter: ()=>Ke(this.options.editor),
            "Mod-Shift-9": ()=>{
                const e = _(this.editor.state);
                return !e.isBlockContainer || e.blockContent.node.type.spec.content !== "inline*" ? !0 : this.editor.commands.command(S(this.options.editor, e.bnBlock.beforePos, {
                    type: "checkListItem",
                    props: {}
                }));
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "div[data-content-type=" + this.name + "]"
            },
            // Checkbox only.
            {
                tag: "input",
                getAttrs: (e)=>typeof e == "string" ? !1 : e.type === "checkbox" ? {
                        checked: e.checked
                    } : !1,
                node: "checkListItem"
            },
            // Container element for checkbox + label.
            {
                tag: "li",
                getAttrs: (e)=>{
                    if (typeof e == "string") return !1;
                    const t = e.parentElement;
                    if (t === null) return !1;
                    if (t.tagName === "UL" || t.tagName === "DIV" && t.parentElement.tagName === "UL") {
                        const o = e.querySelector("input[type=checkbox]") || null;
                        return o === null ? !1 : {
                            checked: o.checked
                        };
                    }
                    return !1;
                },
                node: "checkListItem"
            }
        ];
    },
    // Since there is no HTML checklist element, there isn't really any
    // standardization for what checklists should look like in the DOM. GDocs'
    // and Notion's aren't cross compatible, for example. This implementation
    // has a semantically correct DOM structure (though missing a label for the
    // checkbox) which is also converted correctly to Markdown by remark.
    renderHTML (param) {
        let { node: e, HTMLAttributes: t } = param;
        var r, a;
        const o = document.createElement("input");
        o.type = "checkbox", o.checked = e.attrs.checked, e.attrs.checked && o.setAttribute("checked", "");
        const { dom: i, contentDOM: n } = R(this.name, "p", {
            ...((r = this.options.domAttributes) == null ? void 0 : r.blockContent) || {},
            ...t
        }, ((a = this.options.domAttributes) == null ? void 0 : a.inlineContent) || {});
        return i.insertBefore(o, n), {
            dom: i,
            contentDOM: n
        };
    },
    // Need to render node view since the checkbox needs to be able to update the
    // node. This is only possible with a node view as it exposes `getPos`.
    addNodeView () {
        return (param)=>{
            let { node: e, getPos: t, editor: o, HTMLAttributes: i } = param;
            var c, u;
            const n = document.createElement("div"), r = document.createElement("div");
            r.contentEditable = "false";
            const a = document.createElement("input");
            a.type = "checkbox", a.checked = e.attrs.checked, e.attrs.checked && a.setAttribute("checked", "");
            const s = ()=>{
                if (!o.isEditable) {
                    a.checked = !a.checked;
                    return;
                }
                if (typeof t != "boolean") {
                    const m = z(o.state.doc, t());
                    if (m.node.type.name !== "blockContainer") throw new Error("Expected blockContainer node, got ".concat(m.node.type.name));
                    this.editor.commands.command(S(this.options.editor, m.posBeforeNode, {
                        type: "checkListItem",
                        props: {
                            checked: a.checked
                        }
                    }));
                }
            };
            a.addEventListener("change", s);
            const { dom: l, contentDOM: d } = R(this.name, "p", {
                ...((c = this.options.domAttributes) == null ? void 0 : c.blockContent) || {},
                ...i
            }, ((u = this.options.domAttributes) == null ? void 0 : u.inlineContent) || {});
            if (typeof t != "boolean") {
                const h = "label-" + this.editor.state.doc.resolve(t()).node().attrs.id;
                a.setAttribute("aria-labelledby", h), d.id = h;
            }
            return l.removeChild(d), l.appendChild(n), n.appendChild(r), n.appendChild(d), r.appendChild(a), {
                dom: l,
                contentDOM: d,
                destroy: ()=>{
                    a.removeEventListener("change", s);
                }
            };
        };
    }
}), Sn = $(En, Kt), Bn = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("numbered-list-indexing"), Tn = ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
        key: Bn,
        appendTransaction: (e, t, o)=>{
            const i = o.tr;
            i.setMeta("numberedListIndexing", !0);
            let n = !1;
            return o.doc.descendants((r, a)=>{
                var s;
                if (r.type.name === "blockContainer" && r.firstChild.type.name === "numberedListItem") {
                    let l = "".concat(r.firstChild.attrs.start || 1);
                    const d = X({
                        posBeforeNode: a,
                        node: r
                    });
                    if (!d.isBlockContainer) throw new Error("impossible");
                    const c = i.doc.resolve(d.bnBlock.beforePos).nodeBefore;
                    if (c) {
                        const f = X({
                            posBeforeNode: d.bnBlock.beforePos - c.nodeSize,
                            node: c
                        });
                        if (f.blockNoteType === "numberedListItem") {
                            if (!f.isBlockContainer) throw new Error("impossible");
                            const b = f.blockContent.node.attrs.index;
                            l = (parseInt(b) + 1).toString();
                        }
                    }
                    const u = d.blockContent.node, m = u.attrs.index, h = ((s = c == null ? void 0 : c.firstChild) == null ? void 0 : s.type.name) !== "numberedListItem";
                    if (m !== l || u.attrs.start && !h) {
                        n = !0;
                        const { start: f, ...g } = u.attrs;
                        i.setNodeMarkup(d.blockContent.beforePos, void 0, {
                            ...g,
                            index: l,
                            ...typeof f == "number" && h && {
                                start: f
                            }
                        });
                    }
                }
            }), n ? i : null;
        }
    }), qt = {
    ...C,
    start: {
        default: void 0,
        type: "number"
    }
}, Mn = G({
    name: "numberedListItem",
    content: "inline*",
    group: "blockContent",
    priority: 90,
    addAttributes () {
        return {
            ...me(qt),
            // the index attribute is only used internally (it's not part of the blocknote schema)
            // that's why it's defined explicitly here, and not part of the prop schema
            index: {
                default: null,
                parseHTML: (e)=>e.getAttribute("data-index"),
                renderHTML: (e)=>({
                        "data-index": e.index
                    })
            }
        };
    },
    addInputRules () {
        return [
            // Creates an ordered list when starting with "1.".
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputRule"]({
                find: new RegExp("^(\\d+)\\.\\s$"),
                handler: (param)=>{
                    let { state: e, chain: t, range: o, match: i } = param;
                    const n = _(e);
                    if (!n.isBlockContainer || n.blockContent.node.type.spec.content !== "inline*" || n.blockNoteType === "numberedListItem") return;
                    const r = parseInt(i[1]);
                    t().command(S(this.options.editor, n.bnBlock.beforePos, {
                        type: "numberedListItem",
                        props: r === 1 && {} || {
                            start: r
                        }
                    })).deleteRange({
                        from: o.from,
                        to: o.to
                    });
                }
            })
        ];
    },
    addKeyboardShortcuts () {
        return {
            Enter: ()=>Ke(this.options.editor),
            "Mod-Shift-7": ()=>{
                const e = _(this.editor.state);
                return !e.isBlockContainer || e.blockContent.node.type.spec.content !== "inline*" ? !0 : this.editor.commands.command(S(this.options.editor, e.bnBlock.beforePos, {
                    type: "numberedListItem",
                    props: {}
                }));
            }
        };
    },
    addProseMirrorPlugins () {
        return [
            Tn()
        ];
    },
    parseHTML () {
        return [
            {
                tag: "div[data-content-type=" + this.name + "]"
            },
            // Case for regular HTML list structure.
            // (e.g.: when pasting from other apps)
            {
                tag: "li",
                getAttrs: (e)=>{
                    if (typeof e == "string") return !1;
                    const t = e.parentElement;
                    if (t === null) return !1;
                    if (t.tagName === "OL" || t.tagName === "DIV" && t.parentElement.tagName === "OL") {
                        const o = parseInt(t.getAttribute("start") || "1") || 1;
                        return e.previousSibling || o === 1 ? {} : {
                            start: o
                        };
                    }
                    return !1;
                },
                node: "numberedListItem"
            },
            // Case for BlockNote list structure.
            // (e.g.: when pasting from blocknote)
            {
                tag: "p",
                getAttrs: (e)=>{
                    if (typeof e == "string") return !1;
                    const t = e.parentElement;
                    return t === null ? !1 : t.getAttribute("data-content-type") === "numberedListItem" ? {} : !1;
                },
                priority: 300,
                node: "numberedListItem"
            }
        ];
    },
    renderHTML (param) {
        let { HTMLAttributes: e } = param;
        var t, o;
        return R(this.name, // We use a <p> tag, because for <li> tags we'd need an <ol> element to
        // put them in to be semantically correct, which we can't have due to the
        // schema.
        "p", {
            ...((t = this.options.domAttributes) == null ? void 0 : t.blockContent) || {},
            ...e
        }, ((o = this.options.domAttributes) == null ? void 0 : o.inlineContent) || {});
    }
}), Ln = $(Mn, qt), In = {
    ...C
}, An = G({
    name: "paragraph",
    content: "inline*",
    group: "blockContent",
    addKeyboardShortcuts () {
        return {
            "Mod-Alt-0": ()=>{
                const e = _(this.editor.state);
                return !e.isBlockContainer || e.blockContent.node.type.spec.content !== "inline*" ? !0 : this.editor.commands.command(S(this.options.editor, e.bnBlock.beforePos, {
                    type: "paragraph",
                    props: {}
                }));
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "div[data-content-type=" + this.name + "]"
            },
            {
                tag: "p",
                priority: 200,
                getAttrs: (e)=>{
                    var t;
                    return typeof e == "string" || !((t = e.textContent) != null && t.trim()) ? !1 : {};
                },
                node: "paragraph"
            }
        ];
    },
    renderHTML (param) {
        let { HTMLAttributes: e } = param;
        var t, o;
        return R(this.name, "p", {
            ...((t = this.options.domAttributes) == null ? void 0 : t.blockContent) || {},
            ...e
        }, ((o = this.options.domAttributes) == null ? void 0 : o.inlineContent) || {});
    }
}), Pn = $(An, In), Nn = 35, Xt = 120, hs = 31, jn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "BlockNoteTableExtension",
    addProseMirrorPlugins: ()=>[
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$tables$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$tables$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["columnResizing"])({
                cellMinWidth: Nn,
                defaultCellMinWidth: Xt,
                // We set this to null as we implement our own node view in the table
                // block content. This node view is the same as what's used by default,
                // but is wrapped in a `blockContent` HTML element.
                View: null
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$tables$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$tables$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableEditing"])()
        ],
    addKeyboardShortcuts () {
        return {
            // Makes enter create a new line within the cell.
            Enter: ()=>this.editor.state.selection.empty && this.editor.state.selection.$head.parent.type.name === "tableParagraph" ? (this.editor.commands.setHardBreak(), !0) : !1,
            // Ensures that backspace won't delete the table if the text cursor is at
            // the start of a cell and the selection is empty.
            Backspace: ()=>{
                const e = this.editor.state.selection, t = e.empty, o = e.$head.parentOffset === 0, i = e.$head.node().type.name === "tableParagraph";
                return t && o && i;
            },
            // Enables navigating cells using the tab key.
            Tab: ()=>this.editor.commands.command((param)=>{
                    let { state: e, dispatch: t, view: o } = param;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$tables$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$tables$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goToNextCell"])(1)(e, t, o);
                }),
            "Shift-Tab": ()=>this.editor.commands.command((param)=>{
                    let { state: e, dispatch: t, view: o } = param;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$tables$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$tables$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goToNextCell"])(-1)(e, t, o);
                })
        };
    },
    extendNodeSchema (e) {
        const t = {
            name: e.name,
            options: e.options,
            storage: e.storage
        };
        return {
            tableRole: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(e, "tableRole", t))
        };
    }
}), Dn = {
    textColor: C.textColor
}, Un = G({
    name: "table",
    content: "tableRow+",
    group: "blockContent",
    tableRole: "table",
    isolating: !0,
    parseHTML () {
        return [
            {
                tag: "table"
            }
        ];
    },
    renderHTML (param) {
        let { HTMLAttributes: e } = param;
        var t, o;
        return R(this.name, "table", {
            ...((t = this.options.domAttributes) == null ? void 0 : t.blockContent) || {},
            ...e
        }, ((o = this.options.domAttributes) == null ? void 0 : o.inlineContent) || {});
    },
    // This node view is needed for the `columnResizing` plugin. By default, the
    // plugin adds its own node view, which overrides how the node is rendered vs
    // `renderHTML`. This means that the wrapping `blockContent` HTML element is
    // no longer rendered. The `columnResizing` plugin uses the `TableView` as its
    // default node view. `BlockNoteTableView` extends it by wrapping it in a
    // `blockContent` element, so the DOM structure is consistent with other block
    // types.
    addNodeView () {
        return (param)=>{
            let { node: e, HTMLAttributes: t } = param;
            var i;
            class o extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$tables$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$tables$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableView"] {
                ignoreMutation(r) {
                    return !r.target.closest(".tableWrapper-inner") || super.ignoreMutation(r);
                }
                constructor(r, a, s){
                    super(r, a), this.node = r, this.cellMinWidth = a, this.blockContentHTMLAttributes = s;
                    const l = document.createElement("div");
                    l.className = F("bn-block-content", s.class), l.setAttribute("data-content-type", "table");
                    for (const [m, h] of Object.entries(s))m !== "class" && l.setAttribute(m, h);
                    const d = this.dom, c = document.createElement("div");
                    c.className = "tableWrapper-inner", c.appendChild(d.firstChild), d.appendChild(c), l.appendChild(d);
                    const u = document.createElement("div");
                    u.className = "table-widgets-container", u.style.position = "relative", d.appendChild(u), this.dom = l;
                }
            }
            return new o(e, Xt, {
                ...((i = this.options.domAttributes) == null ? void 0 : i.blockContent) || {},
                ...t
            });
        };
    }
}), Hn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: "tableParagraph",
    group: "tableContent",
    content: "inline*",
    parseHTML () {
        return [
            {
                preserveWhitespace: "full",
                // set this rule as high priority so it takes precedence over the default paragraph rule,
                // but only if we're in the tableContent context
                priority: 210,
                context: "tableContent",
                tag: "p",
                getAttrs: (e)=>({})
            },
            {
                tag: "p",
                getAttrs: (e)=>{
                    if (typeof e == "string" || !e.textContent) return !1;
                    const t = e.parentElement;
                    return t === null ? !1 : t.tagName === "TD" ? {} : !1;
                }
            }
        ];
    },
    renderHTML (param) {
        let { HTMLAttributes: e } = param;
        return [
            "p",
            e,
            0
        ];
    }
}), On = $(Un, Dn, [
    jn,
    Hn,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$table$2d$hea_8ef30ca3990a16aa089ace8834061aa5$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$header$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"].extend({
        content: "tableContent"
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$table$2d$cel_5e867c9678665f6c6c1b8baaa61d917f$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$cell$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"].extend({
        content: "tableContent"
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$table$2d$row_524bb9b2025409ae035fe620fda198e0$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$row$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"]
]), pt = (e)=>{
    const t = e.src || void 0, o = e.width || void 0;
    return {
        url: t,
        previewWidth: o
    };
}, Rn = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 5V19H16V5H8ZM4 5V7H6V5H4ZM18 5V7H20V5H18ZM4 9V11H6V9H4ZM18 9V11H20V9H18ZM4 13V15H6V13H4ZM18 13V15H20V13H18ZM4 17V19H6V17H4ZM18 17V19H20V17H18Z"></path></svg>', Vn = {
    textAlignment: C.textAlignment,
    backgroundColor: C.backgroundColor,
    // File name.
    name: {
        default: ""
    },
    // File url.
    url: {
        default: ""
    },
    // File caption.
    caption: {
        default: ""
    },
    showPreview: {
        default: !0
    },
    // File preview width in px.
    previewWidth: {
        default: 512
    }
}, zn = {
    type: "video",
    propSchema: Vn,
    content: "none",
    isFileBlock: !0,
    fileBlockAccept: [
        "video/*"
    ]
}, Fn = (e, t)=>{
    const o = document.createElement("div");
    o.innerHTML = Rn;
    const i = document.createElement("div");
    i.className = "bn-visual-media-wrapper";
    const n = document.createElement("video");
    return n.className = "bn-visual-media", t.resolveFileUrl ? t.resolveFileUrl(e.props.url).then((r)=>{
        n.src = r;
    }) : n.src = e.props.url, n.controls = !0, n.contentEditable = "false", n.draggable = !1, n.width = e.props.previewWidth, i.appendChild(n), $t(e, t, {
        dom: i
    }, i, t.dictionary.file_blocks.video.add_button_text, o.firstElementChild);
}, Gn = (e)=>{
    if (e.tagName === "VIDEO") return pt(e);
    if (e.tagName === "FIGURE") {
        const t = Be(e, "video");
        if (!t) return;
        const { targetElement: o, caption: i } = t;
        return {
            ...pt(o),
            caption: i
        };
    }
}, $n = (e)=>{
    if (!e.props.url) {
        const o = document.createElement("p");
        return o.textContent = "Add video", {
            dom: o
        };
    }
    let t;
    return e.props.showPreview ? (t = document.createElement("video"), t.src = e.props.url, t.width = e.props.previewWidth) : (t = document.createElement("a"), t.href = e.props.url, t.textContent = e.props.name || e.props.url), e.props.caption ? e.props.showPreview ? We(t, e.props.caption) : Te(t, e.props.caption) : {
        dom: t
    };
}, Wn = he(zn, {
    render: Fn,
    parse: Gn,
    toExternalHTML: $n
}), Zt = {
    paragraph: Pn,
    heading: hn,
    codeBlock: qi,
    bulletListItem: Cn,
    numberedListItem: Ln,
    checkListItem: Sn,
    table: On,
    file: cn,
    image: vn,
    video: Wn,
    audio: Ki
}, Kn = Ut(Zt), Jt = {
    bold: W(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$bold$40$2$2e$26_22ad8c7682c29a033e016daa8e93a483$2f$node_modules$2f40$tiptap$2f$extension$2d$bold$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], "boolean"),
    italic: W(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$italic$40$2$2e$_dadb9088ac1601d4514e39fcdefcc223$2f$node_modules$2f40$tiptap$2f$extension$2d$italic$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], "boolean"),
    underline: W(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$underline_21faaec7af5ec0862327cf5a79907da8$2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], "boolean"),
    strike: W(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$strike$40$2$2e$_9d48da7de18b1a8d03c4e7280c96617c$2f$node_modules$2f40$tiptap$2f$extension$2d$strike$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], "boolean"),
    code: W(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$code$40$2$2e$26_4430715cab05490b3fbfd488969392ee$2f$node_modules$2f40$tiptap$2f$extension$2d$code$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], "boolean"),
    textColor: nn,
    backgroundColor: tn
}, fs = Vt(Jt), Yt = {
    text: {
        config: "text",
        implementation: {}
    },
    link: {
        config: "link",
        implementation: {}
    }
}, qn = Ot(Yt);
function L(e, t) {
    return e in t.schema.blockSchema && t.schema.blockSchema[e] === Kn[e];
}
function Xn(e, t) {
    return e in t.schema.inlineContentSchema && t.schema.inlineContentSchema[e] === qn[e];
}
function Zn(e, t, o) {
    return t.type === e && t.type in o.schema.blockSchema && L(t.type, o);
}
function gs(e, t) {
    return e.type in t.schema.blockSchema && t.schema.blockSchema[e.type].isFileBlock || !1;
}
function bs(e, t) {
    return e.type in t.schema.blockSchema && t.schema.blockSchema[e.type].isFileBlock && "showPreview" in t.schema.blockSchema[e.type].propSchema || !1;
}
function ks(e, t) {
    return t.schema.blockSchema[e.type].isFileBlock && !e.props.url;
}
function Jn(e, t, o) {
    return t in o.schema.blockSchema && e in o.schema.blockSchema[t].propSchema && o.schema.blockSchema[t].propSchema[e] === C[e];
}
function _s(e, t, o) {
    return Jn(e, t.type, o);
}
function Yn(e) {
    let t = e.getTextCursorPosition().block, o = e.schema.blockSchema[t.type].content;
    for(; o === "none";)t = e.getTextCursorPosition().nextBlock, o = e.schema.blockSchema[t.type].content, e.setTextCursorPosition(t, "end");
}
function T(e, t) {
    const o = e.getTextCursorPosition().block;
    if (o.content === void 0) throw new Error("Slash Menu open in a block that doesn't contain content.");
    let i;
    return Array.isArray(o.content) && (o.content.length === 1 && de(o.content[0]) && o.content[0].type === "text" && o.content[0].text === "/" || o.content.length === 0) ? (i = e.updateBlock(o, t), e.setTextCursorPosition(i)) : (i = e.insertBlocks([
        t
    ], o, "after")[0], e.setTextCursorPosition(e.getTextCursorPosition().nextBlock)), Yn(e), i;
}
function ys(e) {
    const t = [];
    return L("heading", e) && t.push({
        onItemClick: ()=>{
            T(e, {
                type: "heading",
                props: {
                    level: 1
                }
            });
        },
        badge: V("Mod-Alt-1"),
        key: "heading",
        ...e.dictionary.slash_menu.heading
    }, {
        onItemClick: ()=>{
            T(e, {
                type: "heading",
                props: {
                    level: 2
                }
            });
        },
        badge: V("Mod-Alt-2"),
        key: "heading_2",
        ...e.dictionary.slash_menu.heading_2
    }, {
        onItemClick: ()=>{
            T(e, {
                type: "heading",
                props: {
                    level: 3
                }
            });
        },
        badge: V("Mod-Alt-3"),
        key: "heading_3",
        ...e.dictionary.slash_menu.heading_3
    }), L("numberedListItem", e) && t.push({
        onItemClick: ()=>{
            T(e, {
                type: "numberedListItem"
            });
        },
        badge: V("Mod-Shift-7"),
        key: "numbered_list",
        ...e.dictionary.slash_menu.numbered_list
    }), L("bulletListItem", e) && t.push({
        onItemClick: ()=>{
            T(e, {
                type: "bulletListItem"
            });
        },
        badge: V("Mod-Shift-8"),
        key: "bullet_list",
        ...e.dictionary.slash_menu.bullet_list
    }), L("checkListItem", e) && t.push({
        onItemClick: ()=>{
            T(e, {
                type: "checkListItem"
            });
        },
        badge: V("Mod-Shift-9"),
        key: "check_list",
        ...e.dictionary.slash_menu.check_list
    }), L("paragraph", e) && t.push({
        onItemClick: ()=>{
            T(e, {
                type: "paragraph"
            });
        },
        badge: V("Mod-Alt-0"),
        key: "paragraph",
        ...e.dictionary.slash_menu.paragraph
    }), L("codeBlock", e) && t.push({
        onItemClick: ()=>{
            T(e, {
                type: "codeBlock"
            });
        },
        badge: V("Mod-Alt-c"),
        key: "code_block",
        ...e.dictionary.slash_menu.code_block
    }), L("table", e) && t.push({
        onItemClick: ()=>{
            T(e, {
                type: "table",
                content: {
                    type: "tableContent",
                    rows: [
                        {
                            cells: [
                                "",
                                "",
                                ""
                            ]
                        },
                        {
                            cells: [
                                "",
                                "",
                                ""
                            ]
                        }
                    ]
                }
            });
        },
        badge: void 0,
        key: "table",
        ...e.dictionary.slash_menu.table
    }), L("image", e) && t.push({
        onItemClick: ()=>{
            const o = T(e, {
                type: "image"
            });
            e.dispatch(e._tiptapEditor.state.tr.setMeta(e.filePanel.plugin, {
                block: o
            }));
        },
        key: "image",
        ...e.dictionary.slash_menu.image
    }), L("video", e) && t.push({
        onItemClick: ()=>{
            const o = T(e, {
                type: "video"
            });
            e.dispatch(e._tiptapEditor.state.tr.setMeta(e.filePanel.plugin, {
                block: o
            }));
        },
        key: "video",
        ...e.dictionary.slash_menu.video
    }), L("audio", e) && t.push({
        onItemClick: ()=>{
            const o = T(e, {
                type: "audio"
            });
            e.dispatch(e._tiptapEditor.state.tr.setMeta(e.filePanel.plugin, {
                block: o
            }));
        },
        key: "audio",
        ...e.dictionary.slash_menu.audio
    }), L("file", e) && t.push({
        onItemClick: ()=>{
            const o = T(e, {
                type: "file"
            });
            e.dispatch(e._tiptapEditor.state.tr.setMeta(e.filePanel.plugin, {
                block: o
            }));
        },
        key: "file",
        ...e.dictionary.slash_menu.file
    }), t.push({
        onItemClick: ()=>{
            e.openSuggestionMenu(":", {
                deleteTriggerCharacter: !0,
                ignoreQueryLength: !0
            });
        },
        key: "emoji",
        ...e.dictionary.slash_menu.emoji
    }), t;
}
function vs(e, t) {
    return e.filter((param)=>{
        let { title: o, aliases: i } = param;
        return o.toLowerCase().includes(t.toLowerCase()) || i && i.filter((n)=>n.toLowerCase().includes(t.toLowerCase())).length !== 0;
    });
}
function Ie(e) {
    return e && Object.fromEntries(Object.entries(e).filter((param)=>{
        let [, t] = param;
        return t !== void 0;
    }));
}
class fe {
    static create(t) {
        return new fe(t);
    }
    constructor(t){
        p(this, "blockSpecs");
        p(this, "inlineContentSpecs");
        p(this, "styleSpecs");
        p(this, "blockSchema");
        p(this, "inlineContentSchema");
        p(this, "styleSchema");
        // Helper so that you can use typeof schema.BlockNoteEditor
        p(this, "BlockNoteEditor", "only for types");
        p(this, "Block", "only for types");
        p(this, "PartialBlock", "only for types");
        this.blockSpecs = Ie(t == null ? void 0 : t.blockSpecs) || Zt, this.inlineContentSpecs = Ie(t == null ? void 0 : t.inlineContentSpecs) || Yt, this.styleSpecs = Ie(t == null ? void 0 : t.styleSpecs) || Jt, this.blockSchema = Ut(this.blockSpecs), this.inlineContentSchema = Ot(this.inlineContentSpecs), this.styleSchema = Vt(this.styleSpecs);
    }
}
const Qt = fe.create({
    blockSpecs: {
        pageBreak: Qi
    }
}), ws = (e)=>fe.create({
        blockSpecs: {
            ...e.blockSpecs,
            ...Qt.blockSpecs
        },
        inlineContentSpecs: e.inlineContentSpecs,
        styleSpecs: e.styleSpecs
    });
function Qn(e) {
    return "pageBreak" in e.schema.blockSchema && e.schema.blockSchema.pageBreak === Qt.blockSchema.pageBreak;
}
function xs(e) {
    const t = [];
    return Qn(e) && t.push({
        ...e.dictionary.slash_menu.page_break,
        onItemClick: ()=>{
            T(e, {
                type: "pageBreak"
            });
        },
        key: "page_break"
    }), t;
}
const Cs = async (e)=>{
    const t = new FormData();
    return t.append("file", e), (await (await fetch("https://tmpfiles.org/api/v1/upload", {
        method: "POST",
        body: t
    })).json()).data.url.replace("tmpfiles.org/", "tmpfiles.org/dl/");
};
function er(e, t, o) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "before";
    const n = typeof o == "string" ? o : o.id, r = [];
    for (const l of t)r.push(J(l, e.pmSchema, e.schema.styleSchema));
    const a = A(n, e._tiptapEditor.state.doc);
    if (!a) throw new Error("Block with ID ".concat(n, " not found"));
    i === "before" && e.dispatch(e._tiptapEditor.state.tr.insert(a.posBeforeNode, r)), i === "after" && e.dispatch(e._tiptapEditor.state.tr.insert(a.posBeforeNode + a.node.nodeSize, r));
    const s = [];
    for (const l of r)s.push(w(l, e.schema.blockSchema, e.schema.inlineContentSchema, e.schema.styleSchema, e.blockCache));
    return s;
}
function tr(e) {
    const t = e._tiptapEditor.state, o = t.selection, i = z(t.doc, o.anchor);
    if (o instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$tables$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$tables$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CellSelection"]) return {
        type: "cell",
        anchorBlockId: i.node.attrs.id,
        anchorCellOffset: o.$anchorCell.pos - i.posBeforeNode,
        headCellOffset: o.$headCell.pos - i.posBeforeNode
    };
    if (e._tiptapEditor.state.selection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"]) return {
        type: "node",
        anchorBlockId: i.node.attrs.id
    };
    {
        const n = z(t.doc, o.head);
        return {
            type: "text",
            anchorBlockId: i.node.attrs.id,
            headBlockId: n.node.attrs.id,
            anchorOffset: o.anchor - i.posBeforeNode,
            headOffset: o.head - n.posBeforeNode
        };
    }
}
function or(e, t) {
    var n, r;
    const o = (n = A(t.anchorBlockId, e._tiptapEditor.state.doc)) == null ? void 0 : n.posBeforeNode;
    if (o === void 0) throw new Error("Could not find block with ID ".concat(t.anchorBlockId, " to update selection"));
    let i;
    if (t.type === "cell") i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$tables$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$tables$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CellSelection"].create(e._tiptapEditor.state.doc, o + t.anchorCellOffset, o + t.headCellOffset);
    else if (t.type === "node") i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"].create(e._tiptapEditor.state.doc, o + 1);
    else {
        const a = (r = A(t.headBlockId, e._tiptapEditor.state.doc)) == null ? void 0 : r.posBeforeNode;
        if (a === void 0) throw new Error("Could not find block with ID ".concat(t.headBlockId, " to update selection"));
        i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].create(e._tiptapEditor.state.doc, o + t.anchorOffset, a + t.headOffset);
    }
    e.dispatch(e._tiptapEditor.state.tr.setSelection(i));
}
function Re(e) {
    return e.map((t)=>t.type === "columnList" ? t.children.map((o)=>Re(o.children)).flat() : {
            ...t,
            children: Re(t.children)
        }).flat();
}
function eo(e, t, o) {
    var r;
    const i = ((r = e.getSelection()) == null ? void 0 : r.blocks) || [
        e.getTextCursorPosition().block
    ], n = tr(e);
    e.removeBlocks(i), e.insertBlocks(Re(i), t, o), or(e, n);
}
function to(e) {
    return !e || e.type !== "columnList";
}
function oo(e, t, o) {
    let i, n;
    if (t ? t.children.length > 0 ? (i = t.children[t.children.length - 1], n = "after") : (i = t, n = "before") : o && (i = o, n = "before"), !i || !n) return;
    const r = e.getParentBlock(i);
    return to(r) ? {
        referenceBlock: i,
        placement: n
    } : oo(e, n === "after" ? i : e.getPrevBlock(i), r);
}
function io(e, t, o) {
    let i, n;
    if (t ? t.children.length > 0 ? (i = t.children[0], n = "before") : (i = t, n = "after") : o && (i = o, n = "after"), !i || !n) return;
    const r = e.getParentBlock(i);
    return to(r) ? {
        referenceBlock: i,
        placement: n
    } : io(e, n === "before" ? i : e.getNextBlock(i), r);
}
function ir(e) {
    const t = e.getSelection(), o = (t == null ? void 0 : t.blocks[0]) || e.getTextCursorPosition().block, i = oo(e, e.getPrevBlock(o), e.getParentBlock(o));
    i && eo(e, i.referenceBlock, i.placement);
}
function nr(e) {
    const t = e.getSelection(), o = (t == null ? void 0 : t.blocks[(t == null ? void 0 : t.blocks.length) - 1]) || e.getTextCursorPosition().block, i = io(e, e.getNextBlock(o), e.getParentBlock(o));
    i && eo(e, i.referenceBlock, i.placement);
}
function rr(e, t) {
    return function(param) {
        let { state: o, dispatch: i } = param;
        const { $from: n, $to: r } = o.selection, a = n.blockRange(r, (c)=>c.childCount > 0 && (c.type.name === "blockGroup" || c.type.name === "column"));
        if (!a) return !1;
        const s = a.startIndex;
        if (s === 0) return !1;
        const d = a.parent.child(s - 1);
        if (d.type !== e) return !1;
        if (i) {
            const c = d.lastChild && d.lastChild.type === t, u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(c ? e.create() : null), m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(e.create(null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(t.create(null, u)))), c ? 3 : 1, 0), h = a.start, f = a.end;
            i(o.tr.step(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$10$2e$4$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReplaceAroundStep"](h - (c ? 3 : 1), f, h, f, m, 1, !0)).scrollIntoView());
        }
        return !0;
    };
}
function no(e) {
    return e._tiptapEditor.commands.command(rr(e._tiptapEditor.schema.nodes.blockContainer, e._tiptapEditor.schema.nodes.blockGroup));
}
function ar(e) {
    e._tiptapEditor.commands.liftListItem("blockContainer");
}
function sr(e) {
    const { bnBlock: t } = _(e._tiptapEditor.state);
    return e._tiptapEditor.state.doc.resolve(t.beforePos).nodeBefore !== null;
}
function lr(e) {
    const { bnBlock: t } = _(e._tiptapEditor.state);
    return e._tiptapEditor.state.doc.resolve(t.beforePos).depth > 1;
}
function ro(e, t, o) {
    const i = e._tiptapEditor;
    let n = i.state.tr;
    const r = [];
    for (const u of o)r.push(J(u, e.pmSchema, e.schema.styleSchema));
    const a = new Set(t.map((u)=>typeof u == "string" ? u : u.id)), s = [], l = typeof t[0] == "string" ? t[0] : t[0].id;
    let d = 0;
    if (i.state.doc.descendants((u, m)=>{
        if (a.size === 0) return !1;
        if (!u.type.isInGroup("bnBlock") || !a.has(u.attrs.id)) return !0;
        if (s.push(w(u, e.schema.blockSchema, e.schema.inlineContentSchema, e.schema.styleSchema, e.blockCache)), a.delete(u.attrs.id), o.length > 0 && u.attrs.id === l) {
            const b = n.doc.nodeSize;
            n = n.insert(m, r);
            const k = n.doc.nodeSize;
            d += b - k;
        }
        const h = n.doc.nodeSize, f = n.doc.resolve(m - d);
        f.node().type.name === "blockGroup" && f.node(f.depth - 1).type.name !== "doc" && f.node().childCount === 1 ? n = n.delete(f.before(), f.after()) : n = n.delete(m - d, m - d + u.nodeSize);
        const g = n.doc.nodeSize;
        return d += h - g, !1;
    }), a.size > 0) {
        const u = [
            ...a
        ].join("\n");
        throw Error("Blocks with the following IDs could not be found in the editor: " + u);
    }
    e.dispatch(n);
    const c = [];
    for (const u of r)c.push(w(u, e.schema.blockSchema, e.schema.inlineContentSchema, e.schema.styleSchema, e.blockCache));
    return {
        insertedBlocks: c,
        removedBlocks: s
    };
}
function dr(e, t, o) {
    return ro(e, t, o);
}
function cr(e, t) {
    return ro(e, t, []).removedBlocks;
}
function ur(e, t) {
    const o = typeof t == "string" ? t : t.id, i = A(o, e._tiptapEditor.state.doc);
    if (i) return w(i.node, e.schema.blockSchema, e.schema.inlineContentSchema, e.schema.styleSchema, e.blockCache);
}
function pr(e, t) {
    const o = typeof t == "string" ? t : t.id, i = A(o, e._tiptapEditor.state.doc);
    if (!i) return;
    const r = e._tiptapEditor.state.doc.resolve(i.posBeforeNode).nodeBefore;
    if (r) return w(r, e.schema.blockSchema, e.schema.inlineContentSchema, e.schema.styleSchema, e.blockCache);
}
function mr(e, t) {
    const o = typeof t == "string" ? t : t.id, i = A(o, e._tiptapEditor.state.doc);
    if (!i) return;
    const r = e._tiptapEditor.state.doc.resolve(i.posBeforeNode + i.node.nodeSize).nodeAfter;
    if (r) return w(r, e.schema.blockSchema, e.schema.inlineContentSchema, e.schema.styleSchema, e.blockCache);
}
function hr(e, t) {
    const o = typeof t == "string" ? t : t.id, i = A(o, e._tiptapEditor.state.doc);
    if (!i) return;
    const n = e._tiptapEditor.state.doc.resolve(i.posBeforeNode), r = n.node(), a = n.node(-1), s = a.type.name !== "doc" ? r.type.name === "blockGroup" ? a : r : void 0;
    if (s) return w(s, e.schema.blockSchema, e.schema.inlineContentSchema, e.schema.styleSchema, e.blockCache);
}
function fr(e, t, o) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
        updateSelection: !0
    };
    const n = o._tiptapEditor.state.tr;
    let { from: r, to: a } = typeof e == "number" ? {
        from: e,
        to: e
    } : {
        from: e.from,
        to: e.to
    }, s = !0, l = !0, d = "";
    if (t.forEach((c)=>{
        c.check(), s && c.isText && c.marks.length === 0 ? d += c.text : s = !1, l = l ? c.isBlock : !1;
    }), r === a && l) {
        const { parent: c } = n.doc.resolve(r);
        c.isTextblock && !c.type.spec.code && !c.childCount && (r -= 1, a += 1);
    }
    return s ? n.insertText(d, r, a) : n.replaceWith(r, a, t), i.updateSelection && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectionToInsertionEnd"])(n, n.steps.length - 1, -1), o.dispatch(n), !0;
}
function gr(e) {
    const t = e._tiptapEditor.state;
    if (t.selection.empty || "node" in t.selection) return;
    const o = t.doc.resolve(z(t.doc, t.selection.from).posBeforeNode), i = t.doc.resolve(z(t.doc, t.selection.to).posBeforeNode), n = (d, c)=>{
        const u = o.posAtIndex(d, c), m = t.doc.resolve(u).nodeAfter;
        if (!m) throw new Error("Error getting selection - node not found at position ".concat(u));
        return w(m, e.schema.blockSchema, e.schema.inlineContentSchema, e.schema.styleSchema, e.blockCache);
    }, r = [], a = o.sharedDepth(i.pos), s = o.index(a), l = i.index(a);
    if (o.depth > a) {
        r.push(w(o.nodeAfter, e.schema.blockSchema, e.schema.inlineContentSchema, e.schema.styleSchema, e.blockCache));
        for(let d = o.depth; d > a; d--)if (o.node(d).type.isInGroup("childContainer")) {
            const u = o.index(d) + 1, m = o.node(d).childCount;
            for(let h = u; h < m; h++)r.push(n(h, d));
        }
    } else r.push(n(s, a));
    for(let d = s + 1; d <= l; d++)r.push(n(d, a));
    if (r.length === 0) throw new Error("Error getting selection - selection doesn't span any blocks (".concat(t.selection, ")"));
    return {
        blocks: r
    };
}
function br(e, t, o) {
    const i = typeof t == "string" ? t : t.id, n = typeof o == "string" ? o : o.id;
    if (i === n) throw new Error("Attempting to set selection with the same anchor and head blocks (id ".concat(i, ")"));
    const r = e._tiptapEditor.state.doc, a = A(i, r);
    if (!a) throw new Error("Block with ID ".concat(i, " not found"));
    const s = A(n, r);
    if (!s) throw new Error("Block with ID ".concat(n, " not found"));
    const l = X(a), d = X(s), c = e.schema.blockSchema[l.blockNoteType], u = e.schema.blockSchema[d.blockNoteType];
    if (!l.isBlockContainer || c.content === "none") throw new Error("Attempting to set selection anchor in block without content (id ".concat(i, ")"));
    if (!d.isBlockContainer || u.content === "none") throw new Error("Attempting to set selection anchor in block without content (id ".concat(n, ")"));
    let m, h;
    if (c.content === "table") {
        const f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$tables$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$tables$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(l.blockContent.node);
        m = l.blockContent.beforePos + f.positionAt(0, 0, l.blockContent.node) + 1 + 2;
    } else m = l.blockContent.beforePos + 1;
    if (u.content === "table") {
        const f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$tables$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$tables$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(d.blockContent.node), g = d.blockContent.beforePos + f.positionAt(f.height - 1, f.width - 1, d.blockContent.node) + 1, b = r.resolve(g).nodeAfter.nodeSize;
        h = g + b - 2;
    } else h = d.blockContent.afterPos - 1;
    e._tiptapEditor.dispatch(e._tiptapEditor.state.tr.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].create(e._tiptapEditor.state.doc, m, h)));
}
function kr(e) {
    const { bnBlock: t } = _(e._tiptapEditor.state), o = e._tiptapEditor.state.doc.resolve(t.beforePos), i = o.nodeBefore, n = e._tiptapEditor.state.doc.resolve(t.afterPos).nodeAfter;
    let r;
    return o.depth > 1 && (r = o.node(), r.type.isInGroup("bnBlock") || (r = o.node(o.depth - 1))), {
        block: w(t.node, e.schema.blockSchema, e.schema.inlineContentSchema, e.schema.styleSchema, e.blockCache),
        prevBlock: i === null ? void 0 : w(i, e.schema.blockSchema, e.schema.inlineContentSchema, e.schema.styleSchema, e.blockCache),
        nextBlock: n === null ? void 0 : w(n, e.schema.blockSchema, e.schema.inlineContentSchema, e.schema.styleSchema, e.blockCache),
        parentBlock: r === void 0 ? void 0 : w(r, e.schema.blockSchema, e.schema.inlineContentSchema, e.schema.styleSchema, e.blockCache)
    };
}
function ao(e, t) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "start";
    const i = typeof t == "string" ? t : t.id, n = A(i, e._tiptapEditor.state.doc);
    if (!n) throw new Error("Block with ID ".concat(i, " not found"));
    const r = X(n), a = e.schema.blockSchema[r.blockNoteType].content;
    if (r.isBlockContainer) {
        const s = r.blockContent;
        if (a === "none") {
            e._tiptapEditor.commands.setNodeSelection(s.beforePos);
            return;
        }
        if (a === "inline") o === "start" ? e._tiptapEditor.commands.setTextSelection(s.beforePos + 1) : e._tiptapEditor.commands.setTextSelection(s.afterPos - 1);
        else if (a === "table") o === "start" ? e._tiptapEditor.commands.setTextSelection(s.beforePos + 4) : e._tiptapEditor.commands.setTextSelection(s.afterPos - 4);
        else throw new D(a);
    } else {
        const s = o === "start" ? r.childContainer.node.firstChild : r.childContainer.node.lastChild;
        ao(e, s.attrs.id, o);
    }
}
let Q;
async function qe() {
    if (Q) return Q;
    const e = await Promise.all([
        __turbopack_context__.r("[project]/node_modules/.pnpm/rehype-parse@8.0.5/node_modules/rehype-parse/index.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
        __turbopack_context__.r("[project]/node_modules/.pnpm/rehype-stringify@9.0.4/node_modules/rehype-stringify/index.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
        __turbopack_context__.r("[project]/node_modules/.pnpm/unified@10.1.2/node_modules/unified/index.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
        __turbopack_context__.r("[project]/node_modules/.pnpm/hast-util-from-dom@4.2.0/node_modules/hast-util-from-dom/index.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
        __turbopack_context__.r("[project]/node_modules/.pnpm/rehype-remark@9.1.2/node_modules/rehype-remark/index.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
        __turbopack_context__.r("[project]/node_modules/.pnpm/remark-gfm@3.0.1/node_modules/remark-gfm/index.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
        __turbopack_context__.r("[project]/node_modules/.pnpm/remark-stringify@10.0.3/node_modules/remark-stringify/index.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
        __turbopack_context__.r("[project]/node_modules/.pnpm/remark-parse@10.0.2/node_modules/remark-parse/index.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
        __turbopack_context__.r("[project]/node_modules/.pnpm/remark-rehype@10.1.0/node_modules/remark-rehype/index.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
        __turbopack_context__.r("[project]/node_modules/.pnpm/rehype-format@5.0.1/node_modules/rehype-format/index.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i)
    ]);
    return Q = {
        rehypeParse: e[0],
        rehypeStringify: e[1],
        unified: e[2],
        hastUtilFromDom: e[3],
        rehypeRemark: e[4],
        remarkGfm: e[5],
        remarkStringify: e[6],
        remarkParse: e[7],
        remarkRehype: e[8],
        rehypeFormat: e[9]
    }, Q;
}
function _r() {
    const e = (t)=>{
        let o = t.children.length;
        for(let i = 0; i < o; i++){
            const n = t.children[i];
            if (n.type === "element" && (e(n), n.tagName === "u")) if (n.children.length > 0) {
                t.children.splice(i, 1, ...n.children);
                const r = n.children.length - 1;
                o += r, i += r;
            } else t.children.splice(i, 1), o--, i--;
        }
    };
    return e;
}
function yr() {
    const e = Q;
    if (!e) throw new Error("addSpacesToCheckboxes requires ESM dependencies to be initialized");
    const t = (o)=>{
        var i;
        if (o.children && "length" in o.children && o.children.length) for(let n = o.children.length - 1; n >= 0; n--){
            const r = o.children[n], a = n + 1 < o.children.length ? o.children[n + 1] : void 0;
            r.type === "element" && r.tagName === "input" && ((i = r.properties) == null ? void 0 : i.type) === "checkbox" && (a == null ? void 0 : a.type) === "element" && a.tagName === "p" ? (a.tagName = "span", a.children.splice(0, 0, e.hastUtilFromDom.fromDom(document.createTextNode(" ")))) : t(r);
        }
    };
    return t;
}
function Xe(e) {
    const t = Q;
    if (!t) throw new Error("cleanHTMLToMarkdown requires ESM dependencies to be initialized");
    return t.unified.unified().use(t.rehypeParse.default, {
        fragment: !0
    }).use(_r).use(yr).use(t.rehypeRemark.default).use(t.remarkGfm.default).use(t.remarkStringify.default, {
        handlers: {
            text: {
                "Xe.use": (i)=>i.value
            }["Xe.use"]
        }
    }).processSync(e).value;
}
async function vr(e, t, o, i) {
    await qe();
    const r = Ee(t, o).exportBlocks(e, i);
    return Xe(r);
}
function wr(e) {
    return Array.prototype.indexOf.call(e.parentElement.childNodes, e);
}
function xr(e) {
    return e.nodeType === 3 && !/\S/.test(e.nodeValue || "");
}
function Cr(e) {
    e.querySelectorAll("li > ul, li > ol").forEach((t)=>{
        const o = wr(t), i = t.parentElement, n = Array.from(i.childNodes).slice(o + 1);
        t.remove(), n.forEach((r)=>{
            r.remove();
        }), i.insertAdjacentElement("afterend", t), n.reverse().forEach((r)=>{
            if (xr(r)) return;
            const a = document.createElement("li");
            a.append(r), t.insertAdjacentElement("afterend", a);
        }), i.childNodes.length === 0 && i.remove();
    });
}
function Er(e) {
    e.querySelectorAll("li + ul, li + ol").forEach((t)=>{
        var r, a;
        const o = t.previousElementSibling, i = document.createElement("div");
        o.insertAdjacentElement("afterend", i), i.append(o);
        const n = document.createElement("div");
        for(n.setAttribute("data-node-type", "blockGroup"), i.append(n); ((r = i.nextElementSibling) == null ? void 0 : r.nodeName) === "UL" || ((a = i.nextElementSibling) == null ? void 0 : a.nodeName) === "OL";)n.append(i.nextElementSibling);
    });
}
let mt = null;
function Sr() {
    return mt || (mt = document.implementation.createHTMLDocument("title"));
}
function so(e) {
    if (typeof e == "string") {
        const t = Sr().createElement("div");
        t.innerHTML = e, e = t;
    }
    return Cr(e), Er(e), e;
}
async function lo(e, t, o, i, n) {
    const r = so(e), s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMParser"].fromSchema(n).parse(r, {
        topNode: n.nodes.blockGroup.create()
    }), l = [];
    for(let d = 0; d < s.childCount; d++)l.push(w(s.child(d), t, o, i));
    return l;
}
function Br(e, t) {
    const o = t.value ? t.value : "", i = {};
    t.lang && (i["data-language"] = t.lang);
    let n = {
        type: "element",
        tagName: "code",
        properties: i,
        children: [
            {
                type: "text",
                value: o
            }
        ]
    };
    return t.meta && (n.data = {
        meta: t.meta
    }), e.patch(t, n), n = e.applyData(t, n), n = {
        type: "element",
        tagName: "pre",
        properties: {},
        children: [
            n
        ]
    }, e.patch(t, n), n;
}
async function Tr(e, t, o, i, n) {
    const r = await qe(), a = r.unified.unified().use(r.remarkParse.default).use(r.remarkGfm.default).use(r.remarkRehype.default, {
        handlers: {
            ...r.remarkRehype.defaultHandlers,
            code: Br
        }
    }).use(r.rehypeStringify.default).processSync(e);
    return lo(a.value, t, o, i, n);
}
const Ze = [
    "vscode-editor-data",
    "blocknote/html",
    "text/html",
    "text/plain",
    "Files"
];
function Mr(e, t) {
    if (!e.startsWith(".") || !t.startsWith(".")) throw new Error("The strings provided are not valid file extensions.");
    return e === t;
}
function Lr(e, t) {
    const o = e.split("/"), i = t.split("/");
    if (o.length !== 2) throw new Error("The string ".concat(e, " is not a valid MIME type."));
    if (i.length !== 2) throw new Error("The string ".concat(t, " is not a valid MIME type."));
    return o[1] === "*" || i[1] === "*" ? o[0] === i[0] : (o[0] === "*" || i[0] === "*" || o[0] === i[0]) && o[1] === i[1];
}
function ht(e, t, o) {
    let i;
    return Array.isArray(t.content) && t.content.length === 0 ? i = e.updateBlock(t, o).id : i = e.insertBlocks([
        o
    ], t, "after")[0].id, i;
}
async function co(e, t) {
    var a;
    if (!t.uploadFile) {
        console.warn("Attempted ot insert file, but uploadFile is not set in the BlockNote editor options");
        return;
    }
    const o = "dataTransfer" in e ? e.dataTransfer : e.clipboardData;
    if (o === null) return;
    let i = null;
    for (const s of Ze)if (o.types.includes(s)) {
        i = s;
        break;
    }
    if (i !== "Files") return;
    const n = o.items;
    if (!n) return;
    e.preventDefault();
    const r = Object.values(t.schema.blockSchema).filter((s)=>s.isFileBlock);
    for(let s = 0; s < n.length; s++){
        let l = "file";
        for (const c of r)for (const u of c.fileBlockAccept || []){
            const m = u.startsWith("."), h = n[s].getAsFile();
            if (h && (!m && h.type && Lr(n[s].type, u) || m && Mr("." + h.name.split(".").pop(), u))) {
                l = c.type;
                break;
            }
        }
        const d = n[s].getAsFile();
        if (d) {
            const c = {
                type: l,
                props: {
                    name: d.name
                }
            };
            let u;
            if (e.type === "paste") {
                const f = t.getTextCursorPosition().block;
                u = ht(t, f, c);
            } else if (e.type === "drop") {
                const f = {
                    left: e.clientX,
                    top: e.clientY
                }, g = (a = t.prosemirrorView) == null ? void 0 : a.posAtCoords(f);
                if (!g) return;
                const b = z(t._tiptapEditor.state.doc, g.pos);
                u = ht(t, t.getBlock(b.node.attrs.id), c);
            } else return;
            const m = await t.uploadFile(d, u), h = typeof m == "string" ? {
                props: {
                    url: m
                }
            } : {
                ...m
            };
            t.updateBlock(u, h);
        }
    }
}
const Ir = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
        name: "dropFile",
        addProseMirrorPlugins () {
            return [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
                    props: {
                        handleDOMEvents: {
                            drop (t, o) {
                                if (!e.isEditable) return;
                                let i = null;
                                for (const n of Ze)if (o.dataTransfer.types.includes(n)) {
                                    i = n;
                                    break;
                                }
                                return i === null ? !0 : i === "Files" ? (co(o, e), !0) : !1;
                            }
                        }
                    }
                })
            ];
        }
    });
async function Ar(e, t) {
    const { schema: o } = t.state;
    if (!e.clipboardData) return !1;
    const i = e.clipboardData.getData("text/plain");
    if (!i) return !1;
    if (!o.nodes.codeBlock) return t.pasteText(i), !0;
    const n = e.clipboardData.getData("vscode-editor-data"), r = n ? JSON.parse(n) : void 0, a = r == null ? void 0 : r.mode;
    return a ? (t.pasteHTML('<pre><code class="language-'.concat(a, '">').concat(i.replace(/\r\n?/g, "\n"), "</code></pre>")), !0) : !1;
}
const Pr = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
        name: "pasteFromClipboard",
        addProseMirrorPlugins () {
            return [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
                    props: {
                        handleDOMEvents: {
                            paste (t, o) {
                                if (o.preventDefault(), !e.isEditable) return;
                                let i;
                                for (const r of Ze)if (o.clipboardData.types.includes(r)) {
                                    i = r;
                                    break;
                                }
                                if (!i) return !0;
                                if (i === "vscode-editor-data") return Ar(o, t), !0;
                                if (i === "Files") return co(o, e), !0;
                                let n = o.clipboardData.getData(i);
                                return i === "blocknote/html" ? (t.pasteHTML(n), !0) : i === "text/html" ? (n = so(n.trim()).innerHTML, t.pasteHTML(n), !0) : (t.pasteText(n), !0);
                            }
                        }
                    }
                })
            ];
        }
    });
function uo(e, t) {
    const o = [];
    return e.descendants((i)=>{
        var n, r;
        return i.type.name === "blockContainer" && ((n = i.firstChild) == null ? void 0 : n.type.name) === "blockGroup" ? !0 : i.type.name === "columnList" && i.childCount === 1 ? ((r = i.firstChild) == null || r.forEach((a)=>{
            o.push(w(a, t.blockSchema, t.inlineContentSchema, t.styleSchema));
        }), !1) : i.type.isInGroup("bnBlock") ? (o.push(w(i, t.blockSchema, t.inlineContentSchema, t.styleSchema)), !1) : !0;
    }), o;
}
function Nr(e, t, o) {
    var s;
    let i = !1;
    const n = e.state.selection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$tables$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$tables$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CellSelection"];
    if (!n) {
        const l = e.state.doc.slice(e.state.selection.from, e.state.selection.to, !1).content, d = [];
        for(let c = 0; c < l.childCount; c++)d.push(l.child(c));
        i = d.find((c)=>c.type.isInGroup("bnBlock") || c.type.name === "blockGroup" || c.type.spec.group === "blockContent") === void 0, i && (t = l);
    }
    let r;
    const a = Ee(e.state.schema, o);
    if (n) {
        ((s = t.firstChild) == null ? void 0 : s.type.name) === "table" && (t = t.firstChild.content);
        const l = Ht(t, o.schema.inlineContentSchema, o.schema.styleSchema);
        r = "<table>".concat(a.exportInlineContent(l, {}), "</table>");
    } else if (i) {
        const l = Se(t, o.schema.inlineContentSchema, o.schema.styleSchema);
        r = a.exportInlineContent(l, {});
    } else {
        const l = uo(t, o.schema);
        r = a.exportBlocks(l, {});
    }
    return r;
}
function po(e, t) {
    "node" in e.state.selection && e.state.selection.node.type.spec.group === "blockContent" && t.dispatch(t._tiptapEditor.state.tr.setSelection(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"](e.state.doc.resolve(e.state.selection.from - 1))));
    const o = e.serializeForClipboard(e.state.selection.content()).dom.innerHTML, i = e.state.selection.content().content, n = Nr(e, i, t), r = Xe(n);
    return {
        clipboardHTML: o,
        externalHTML: n,
        markdown: r
    };
}
const ft = ()=>{
    const e = window.getSelection();
    if (!e || e.isCollapsed) return !0;
    let t = e.focusNode;
    for(; t;){
        if (t instanceof HTMLElement && t.getAttribute("contenteditable") === "false") return !0;
        t = t.parentElement;
    }
    return !1;
}, gt = (e, t, o)=>{
    o.preventDefault(), o.clipboardData.clearData();
    const { clipboardHTML: i, externalHTML: n, markdown: r } = po(t, e);
    o.clipboardData.setData("blocknote/html", i), o.clipboardData.setData("text/html", n), o.clipboardData.setData("text/plain", r);
}, jr = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
        name: "copyToClipboard",
        addProseMirrorPlugins () {
            return [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
                    props: {
                        handleDOMEvents: {
                            copy (t, o) {
                                return ft() || gt(e, t, o), !0;
                            },
                            cut (t, o) {
                                return ft() || (gt(e, t, o), t.editable && t.dispatch(t.state.tr.deleteSelection())), !0;
                            },
                            // This is for the use-case in which only a block without content
                            // is selected, e.g. an image block, and dragged (not using the
                            // drag handle).
                            dragstart (t, o) {
                                if (!("node" in t.state.selection) || t.state.selection.node.type.spec.group !== "blockContent") return;
                                e.dispatch(e._tiptapEditor.state.tr.setSelection(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"](t.state.doc.resolve(t.state.selection.from - 1)))), o.preventDefault(), o.dataTransfer.clearData();
                                const { clipboardHTML: i, externalHTML: n, markdown: r } = po(t, e);
                                return o.dataTransfer.setData("blocknote/html", i), o.dataTransfer.setData("text/html", n), o.dataTransfer.setData("text/plain", r), !0;
                            }
                        }
                    }
                })
            ];
        }
    }), Dr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "blockBackgroundColor",
    addGlobalAttributes () {
        return [
            {
                types: [
                    "blockContainer"
                ],
                attributes: {
                    backgroundColor: {
                        default: C.backgroundColor.default,
                        parseHTML: (e)=>e.hasAttribute("data-background-color") ? e.getAttribute("data-background-color") : C.backgroundColor.default,
                        renderHTML: (e)=>e.backgroundColor === C.backgroundColor.default ? {} : {
                                "data-background-color": e.backgroundColor
                            }
                    }
                }
            }
        ];
    }
}), Ur = (e)=>{
    var i;
    const t = [];
    t.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$collabora_002eb8456e34e723cbf083913afe12e5$2f$node_modules$2f40$tiptap$2f$extension$2d$collaboration$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
        fragment: e.fragment
    }));
    const o = (i = e.provider) == null ? void 0 : i.awareness;
    if (o) {
        const n = /* @__PURE__ */ new Map();
        e.showCursorLabels !== "always" && o.on("change", (param)=>{
            let { updated: s } = param;
            for (const l of s){
                const d = n.get(l);
                d && (d.element.setAttribute("data-active", ""), d.hideTimeout && clearTimeout(d.hideTimeout), n.set(l, {
                    element: d.element,
                    hideTimeout: setTimeout(()=>{
                        d.element.removeAttribute("data-active");
                    }, 2e3)
                }));
            }
        });
        const r = (s)=>{
            const l = document.createElement("span");
            l.classList.add("collaboration-cursor__base");
            const d = document.createElement("span");
            d.setAttribute("contentedEditable", "false"), d.classList.add("collaboration-cursor__caret"), d.setAttribute("style", "background-color: ".concat(s.color));
            const c = document.createElement("span");
            return c.classList.add("collaboration-cursor__label"), c.setAttribute("style", "background-color: ".concat(s.color)), c.insertBefore(document.createTextNode(s.name), null), d.insertBefore(c, null), l.insertBefore(document.createTextNode("⁠"), null), l.insertBefore(d, null), l.insertBefore(document.createTextNode("⁠"), null), l;
        }, a = (s)=>{
            var u;
            const l = [
                ...o.getStates().entries()
            ].find((m)=>m[1].user === s);
            if (!l) throw new Error("Could not find client state for user, " + JSON.stringify(s));
            const d = l[0];
            let c = n.get(d);
            if (!c) {
                const m = ((u = e == null ? void 0 : e.renderCursor) == null ? void 0 : u.call(e, s)) || r(s);
                (e == null ? void 0 : e.showCursorLabels) !== "always" && (m.addEventListener("mouseenter", ()=>{
                    const h = n.get(d);
                    h.element.setAttribute("data-active", ""), h.hideTimeout && (clearTimeout(h.hideTimeout), n.set(d, {
                        element: h.element,
                        hideTimeout: void 0
                    }));
                }), m.addEventListener("mouseleave", ()=>{
                    const h = n.get(d);
                    n.set(d, {
                        element: h.element,
                        hideTimeout: setTimeout(()=>{
                            h.element.removeAttribute("data-active");
                        }, 2e3)
                    });
                })), c = {
                    element: m,
                    hideTimeout: void 0
                }, n.set(d, c);
            }
            return c.element;
        };
        t.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$collabora_4d2e72688ff4cbf14571663631003101$2f$node_modules$2f40$tiptap$2f$extension$2d$collaboration$2d$cursor$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
            user: e.user,
            render: a,
            provider: e.provider
        }));
    }
    return t;
};
class ne {
    on(t, o) {
        return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(o), ()=>this.off(t, o);
    }
    emit(t) {
        for(var _len = arguments.length, o = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            o[_key - 1] = arguments[_key];
        }
        const i = this.callbacks[t];
        i && i.forEach((n)=>n.apply(this, o));
    }
    off(t, o) {
        const i = this.callbacks[t];
        i && (o ? this.callbacks[t] = i.filter((n)=>n !== o) : delete this.callbacks[t]);
    }
    removeAllListeners() {
        this.callbacks = {};
    }
    constructor(){
        // eslint-disable-next-line @typescript-eslint/ban-types
        p(this, "callbacks", {});
    }
}
class Hr {
    update(t, o) {
        var n, r;
        const i = this.pluginKey.getState(t.state);
        if (!((n = this.state) != null && n.show) && i.block && this.editor.isEditable) {
            const a = this.pmView.root.querySelector('[data-node-type="blockContainer"][data-id="'.concat(i.block.id, '"]'));
            if (!a) return;
            this.state = {
                show: !0,
                referencePos: a.getBoundingClientRect(),
                block: i.block
            }, this.emitUpdate();
            return;
        }
        (!t.state.selection.eq(o.selection) || !t.state.doc.eq(o.doc) || !this.editor.isEditable) && (r = this.state) != null && r.show && (this.state.show = !1, this.emitUpdate());
    }
    destroy() {
        this.pmView.dom.removeEventListener("mousedown", this.mouseDownHandler), this.pmView.dom.removeEventListener("dragstart", this.dragstartHandler), this.pmView.root.removeEventListener("scroll", this.scrollHandler, !0);
    }
    constructor(t, o, i, n){
        p(this, "state");
        p(this, "emitUpdate");
        p(this, "mouseDownHandler", ()=>{
            var t;
            (t = this.state) != null && t.show && (this.state.show = !1, this.emitUpdate());
        });
        // For dragging the whole editor.
        p(this, "dragstartHandler", ()=>{
            var t;
            (t = this.state) != null && t.show && (this.state.show = !1, this.emitUpdate());
        });
        p(this, "scrollHandler", ()=>{
            var t;
            if ((t = this.state) != null && t.show) {
                const o = this.pmView.root.querySelector('[data-node-type="blockContainer"][data-id="'.concat(this.state.block.id, '"]'));
                if (!o) return;
                this.state.referencePos = o.getBoundingClientRect(), this.emitUpdate();
            }
        });
        p(this, "closeMenu", ()=>{
            var t;
            (t = this.state) != null && t.show && (this.state.show = !1, this.emitUpdate());
        });
        this.editor = t, this.pluginKey = o, this.pmView = i, this.emitUpdate = ()=>{
            if (!this.state) throw new Error("Attempting to update uninitialized file panel");
            n(this.state);
        }, i.dom.addEventListener("mousedown", this.mouseDownHandler), i.dom.addEventListener("dragstart", this.dragstartHandler), i.root.addEventListener("scroll", this.scrollHandler, !0);
    }
}
const Ae = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("FilePanelPlugin");
class Or extends ne {
    get shown() {
        var o, i;
        return ((i = (o = this.view) == null ? void 0 : o.state) == null ? void 0 : i.show) || !1;
    }
    onUpdate(o) {
        return this.on("update", o);
    }
    constructor(o){
        super();
        p(this, "view");
        p(this, "plugin");
        p(this, "closeMenu", ()=>{
            var o;
            return (o = this.view) == null ? void 0 : o.closeMenu();
        });
        this.plugin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
            key: Ae,
            view: (i)=>(this.view = new Hr(o, Ae, i, (n)=>{
                    this.emit("update", n);
                }), this.view),
            props: {
                handleKeyDown: (i, n)=>{
                    var r;
                    return n.key === "Escape" && this.shown ? ((r = this.view) == null || r.closeMenu(), !0) : !1;
                }
            },
            state: {
                init: ()=>({
                        block: void 0
                    }),
                apply: (i)=>{
                    var r;
                    return {
                        block: (r = i.getMeta(Ae)) == null ? void 0 : r.block
                    };
                }
            }
        });
    }
}
class Rr {
    update(t, o) {
        var u, m;
        const { state: i, composing: n } = t, { selection: r } = i, a = o && o.selection.from === i.selection.from && o.selection.to === i.selection.to;
        if (n || a) return;
        const { ranges: s } = r, l = Math.min(...s.map((h)=>h.$from.pos)), d = Math.max(...s.map((h)=>h.$to.pos)), c = (u = this.shouldShow) == null ? void 0 : u.call(this, {
            view: t,
            state: i,
            from: l,
            to: d
        });
        if (!this.preventShow && (c || this.preventHide)) {
            this.state = {
                show: !0,
                referencePos: this.getSelectionBoundingBox()
            }, this.emitUpdate();
            return;
        }
        if ((m = this.state) != null && m.show && !this.preventHide && (!c || this.preventShow || !this.editor.isEditable)) {
            this.state.show = !1, this.emitUpdate();
            return;
        }
    }
    destroy() {
        this.pmView.dom.removeEventListener("mousedown", this.viewMousedownHandler), this.pmView.root.removeEventListener("mouseup", this.mouseupHandler), this.pmView.dom.removeEventListener("dragstart", this.dragHandler), this.pmView.dom.removeEventListener("dragover", this.dragHandler), this.pmView.dom.removeEventListener("blur", this.blurHandler), this.pmView.root.removeEventListener("scroll", this.scrollHandler, !0);
    }
    getSelectionBoundingBox() {
        const { state: t } = this.pmView, { selection: o } = t, { ranges: i } = o, n = Math.min(...i.map((a)=>a.$from.pos)), r = Math.max(...i.map((a)=>a.$to.pos));
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeSelection"])(o)) {
            const a = this.pmView.nodeDOM(n);
            if (a) return a.getBoundingClientRect();
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posToDOMRect"])(this.pmView, n, r);
    }
    constructor(t, o, i){
        p(this, "state");
        p(this, "emitUpdate");
        p(this, "preventHide", !1);
        p(this, "preventShow", !1);
        p(this, "shouldShow", (param)=>{
            let { state: t, from: o, to: i, view: n } = param;
            const { doc: r, selection: a } = t, { empty: s } = a, l = !r.textBetween(o, i).length && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTextSelection"])(t.selection);
            return a.$from.parent.type.spec.code || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeSelection"])(a) && a.node.type.spec.code ? !1 : !(!n.hasFocus() || s || l);
        });
        p(this, "blurHandler", (t)=>{
            var i;
            if (this.preventHide) {
                this.preventHide = !1;
                return;
            }
            const o = this.pmView.dom.parentElement;
            // An element is clicked.
            t && t.relatedTarget && // Element is inside the editor.
            (o === t.relatedTarget || o.contains(t.relatedTarget) || t.relatedTarget.matches(".bn-ui-container, .bn-ui-container *")) || (i = this.state) != null && i.show && (this.state.show = !1, this.emitUpdate());
        });
        p(this, "viewMousedownHandler", ()=>{
            this.preventShow = !0;
        });
        p(this, "mouseupHandler", ()=>{
            this.preventShow && (this.preventShow = !1, setTimeout(()=>this.update(this.pmView)));
        });
        // For dragging the whole editor.
        p(this, "dragHandler", ()=>{
            var t;
            (t = this.state) != null && t.show && (this.state.show = !1, this.emitUpdate());
        });
        p(this, "scrollHandler", ()=>{
            var t;
            (t = this.state) != null && t.show && (this.state.referencePos = this.getSelectionBoundingBox(), this.emitUpdate());
        });
        p(this, "closeMenu", ()=>{
            var t;
            (t = this.state) != null && t.show && (this.state.show = !1, this.emitUpdate());
        });
        this.editor = t, this.pmView = o, this.emitUpdate = ()=>{
            if (!this.state) throw new Error("Attempting to update uninitialized formatting toolbar");
            i(this.state);
        }, o.dom.addEventListener("mousedown", this.viewMousedownHandler), o.root.addEventListener("mouseup", this.mouseupHandler), o.dom.addEventListener("dragstart", this.dragHandler), o.dom.addEventListener("dragover", this.dragHandler), o.dom.addEventListener("blur", this.blurHandler), o.root.addEventListener("scroll", this.scrollHandler, !0);
    }
}
const Vr = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("FormattingToolbarPlugin");
class zr extends ne {
    get shown() {
        var o, i;
        return ((i = (o = this.view) == null ? void 0 : o.state) == null ? void 0 : i.show) || !1;
    }
    onUpdate(o) {
        return this.on("update", o);
    }
    constructor(o){
        super();
        p(this, "view");
        p(this, "plugin");
        p(this, "closeMenu", ()=>this.view.closeMenu());
        this.plugin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
            key: Vr,
            view: (i)=>(this.view = new Rr(o, i, (n)=>{
                    this.emit("update", n);
                }), this.view),
            props: {
                handleKeyDown: (i, n)=>n.key === "Escape" && this.shown ? (this.view.closeMenu(), !0) : !1
            }
        });
    }
}
const bt = (e, t)=>{
    const o = e.resolve(t);
    if (o.depth <= 1) return;
    const i = o.posAtIndex(o.index(o.depth - 1), o.depth - 1);
    return pe(e.resolve(i));
}, Ve = (e, t)=>{
    const o = e.resolve(t), i = o.index();
    if (i === 0) return;
    const n = o.posAtIndex(i - 1);
    return pe(e.resolve(n));
}, mo = (e, t)=>{
    for(; t.childContainer;){
        const o = t.childContainer.node, i = e.resolve(t.childContainer.beforePos + 1).posAtIndex(o.childCount - 1);
        t = pe(e.resolve(i));
    }
    return t;
}, Fr = (e, t)=>e.isBlockContainer && e.blockContent.node.type.spec.content === "inline*" && e.blockContent.node.childCount > 0 && t.isBlockContainer && t.blockContent.node.type.spec.content === "inline*", Gr = (e, t, o, i)=>{
    if (!i.isBlockContainer) throw new Error("Attempted to merge block at position ".concat(i.bnBlock.beforePos, " into previous block at position ").concat(o.bnBlock.beforePos, ", but next block is not a block container"));
    if (i.childContainer) {
        const n = e.doc.resolve(i.childContainer.beforePos + 1), r = e.doc.resolve(i.childContainer.afterPos - 1), a = n.blockRange(r);
        if (t) {
            const s = e.doc.resolve(i.bnBlock.beforePos);
            e.tr.lift(a, s.depth);
        }
    }
    if (t) {
        if (!o.isBlockContainer) throw new Error("Attempted to merge block at position ".concat(i.bnBlock.beforePos, " into previous block at position ").concat(o.bnBlock.beforePos, ", but previous block is not a block container"));
        t(e.tr.delete(o.blockContent.afterPos - 1, i.blockContent.beforePos + 1));
    }
    return !0;
}, kt = (e)=>(param)=>{
        let { state: t, dispatch: o } = param;
        const i = t.doc.resolve(e), n = pe(i), r = Ve(t.doc, n.bnBlock.beforePos);
        if (!r) return !1;
        const a = mo(t.doc, r);
        return Fr(a, n) ? Gr(t, o, a, n) : !1;
    }, $r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    priority: 50,
    // TODO: The shortcuts need a refactor. Do we want to use a command priority
    //  design as there is now, or clump the logic into a single function?
    addKeyboardShortcuts () {
        return {
            Backspace: ()=>this.editor.commands.first((param)=>{
                    let { chain: i, commands: n } = param;
                    return [
                        // Deletes the selection if it's not empty.
                        ()=>n.deleteSelection(),
                        // Undoes an input rule if one was triggered in the last editor state change.
                        ()=>n.undoInputRule(),
                        // Reverts block content type to a paragraph if the selection is at the start of the block.
                        ()=>n.command((param)=>{
                                let { state: r } = param;
                                const a = _(r);
                                if (!a.isBlockContainer) return !1;
                                const s = r.selection.from === a.blockContent.beforePos + 1, l = a.blockContent.node.type.name === "paragraph";
                                return s && !l ? n.command(S(this.options.editor, a.bnBlock.beforePos, {
                                    type: "paragraph",
                                    props: {}
                                })) : !1;
                            }),
                        // Removes a level of nesting if the block is indented if the selection is at the start of the block.
                        ()=>n.command((param)=>{
                                let { state: r } = param;
                                const a = _(r);
                                if (!a.isBlockContainer) return !1;
                                const { blockContent: s } = a;
                                return r.selection.from === s.beforePos + 1 ? n.liftListItem("blockContainer") : !1;
                            }),
                        // Merges block with the previous one if it isn't indented, and the selection is at the start of the
                        // block. The target block for merging must contain inline content.
                        ()=>n.command((param)=>{
                                let { state: r } = param;
                                const a = _(r);
                                if (!a.isBlockContainer) return !1;
                                const { bnBlock: s, blockContent: l } = a, d = r.selection.from === l.beforePos + 1, c = r.selection.empty, u = s.beforePos;
                                return d && c ? i().command(kt(u)).scrollIntoView().run() : !1;
                            }),
                        ()=>n.command((param)=>{
                                let { state: r, dispatch: a } = param;
                                const s = _(r);
                                if (!s.isBlockContainer || !(r.selection.from === s.blockContent.beforePos + 1) || Ve(r.doc, s.bnBlock.beforePos)) return !1;
                                const c = bt(r.doc, s.bnBlock.beforePos);
                                if ((c == null ? void 0 : c.blockNoteType) !== "column") return !1;
                                const u = c, m = bt(r.doc, u.bnBlock.beforePos);
                                if ((m == null ? void 0 : m.blockNoteType) !== "columnList") throw new Error("parent of column is not a column list");
                                const h = u.childContainer.node.childCount === 1, f = h && m.childContainer.node.childCount === 2, g = m.childContainer.node.firstChild === u.bnBlock.node;
                                if (a) {
                                    const b = r.doc.slice(s.bnBlock.beforePos, s.bnBlock.afterPos, !1);
                                    if (f) if (g) {
                                        r.tr.step(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$10$2e$4$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReplaceAroundStep"](// replace entire column list
                                        m.bnBlock.beforePos, m.bnBlock.afterPos, // select content of remaining column:
                                        u.bnBlock.afterPos + 1, m.bnBlock.afterPos - 2, b, b.size, // append existing content to blockToMove
                                        !1));
                                        const k = r.tr.doc.resolve(u.bnBlock.beforePos);
                                        r.tr.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].between(k, k));
                                    } else {
                                        r.tr.step(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$10$2e$4$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReplaceAroundStep"](// replace entire column list
                                        m.bnBlock.beforePos, m.bnBlock.afterPos, // select content of existing column:
                                        m.bnBlock.beforePos + 2, u.bnBlock.beforePos - 1, b, 0, // prepend existing content to blockToMove
                                        !1));
                                        const k = r.tr.doc.resolve(r.tr.mapping.map(u.bnBlock.beforePos - 1));
                                        r.tr.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].between(k, k));
                                    }
                                    else if (h) if (g) {
                                        r.tr.delete(u.bnBlock.beforePos, u.bnBlock.afterPos), r.tr.insert(m.bnBlock.beforePos, b.content);
                                        const k = r.tr.doc.resolve(m.bnBlock.beforePos);
                                        r.tr.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].between(k, k));
                                    } else r.tr.delete(u.bnBlock.beforePos - 1, u.bnBlock.beforePos + 1);
                                    else {
                                        r.tr.delete(s.bnBlock.beforePos, s.bnBlock.afterPos), g ? r.tr.insert(m.bnBlock.beforePos - 1, b.content) : r.tr.insert(u.bnBlock.beforePos - 1, b.content);
                                        const k = r.tr.doc.resolve(u.bnBlock.beforePos - 1);
                                        r.tr.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].between(k, k));
                                    }
                                }
                                return !0;
                            }),
                        // Deletes previous block if it contains no content and isn't a table,
                        // when the selection is empty and at the start of the block. Moves the
                        // current block into the deleted block's place.
                        ()=>n.command((param)=>{
                                let { state: r } = param;
                                const a = _(r);
                                if (!a.isBlockContainer) throw new Error("todo");
                                const s = r.selection.from === a.blockContent.beforePos + 1, l = r.selection.empty, d = Ve(r.doc, a.bnBlock.beforePos);
                                if (d && s && l) {
                                    const c = mo(r.doc, d);
                                    if (!c.isBlockContainer) throw new Error("todo");
                                    if (c.blockContent.node.type.spec.content === "" || c.blockContent.node.type.spec.content === "inline*" && c.blockContent.node.childCount === 0) return i().cut({
                                        from: a.bnBlock.beforePos,
                                        to: a.bnBlock.afterPos
                                    }, c.bnBlock.afterPos).deleteRange({
                                        from: c.bnBlock.beforePos,
                                        to: c.bnBlock.afterPos
                                    }).run();
                                }
                                return !1;
                            })
                    ];
                }),
            Delete: ()=>this.editor.commands.first((param)=>{
                    let { commands: i } = param;
                    return [
                        // Deletes the selection if it's not empty.
                        ()=>i.deleteSelection(),
                        // Merges block with the next one (at the same nesting level or lower),
                        // if one exists, the block has no children, and the selection is at the
                        // end of the block.
                        ()=>i.command((param)=>{
                                let { state: n } = param;
                                const r = _(n);
                                if (!r.isBlockContainer) return !1;
                                const { bnBlock: a, blockContent: s, childContainer: l } = r, { depth: d } = n.doc.resolve(a.beforePos), c = a.afterPos === n.doc.nodeSize - 3, u = n.selection.from === s.afterPos - 1, m = n.selection.empty;
                                if (!c && u && m && !(l !== void 0)) {
                                    let f = d, g = a.afterPos + 1, b = n.doc.resolve(g).depth;
                                    for(; b < f;)f = b, g += 2, b = n.doc.resolve(g).depth;
                                    return i.command(kt(g - 1));
                                }
                                return !1;
                            })
                    ];
                }),
            Enter: ()=>this.editor.commands.first((param)=>{
                    let { commands: i } = param;
                    return [
                        // Removes a level of nesting if the block is empty & indented, while the selection is also empty & at the start
                        // of the block.
                        ()=>i.command((param)=>{
                                let { state: n } = param;
                                const r = _(n);
                                if (!r.isBlockContainer) return !1;
                                const { bnBlock: a, blockContent: s } = r, { depth: l } = n.doc.resolve(a.beforePos), d = n.selection.$anchor.parentOffset === 0, c = n.selection.anchor === n.selection.head, u = s.node.childCount === 0, m = l > 1;
                                return d && c && u && m ? i.liftListItem("blockContainer") : !1;
                            }),
                        // Creates a new block and moves the selection to it if the current one is empty, while the selection is also
                        // empty & at the start of the block.
                        ()=>i.command((param)=>{
                                let { state: n, dispatch: r } = param;
                                const a = _(n);
                                if (!a.isBlockContainer) return !1;
                                const { bnBlock: s, blockContent: l } = a, d = n.selection.$anchor.parentOffset === 0, c = n.selection.anchor === n.selection.head, u = l.node.childCount === 0;
                                if (d && c && u) {
                                    const m = s.afterPos, h = m + 2;
                                    if (r) {
                                        const f = n.schema.nodes.blockContainer.createAndFill();
                                        n.tr.insert(m, f).scrollIntoView(), n.tr.setSelection(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"](n.doc.resolve(h)));
                                    }
                                    return !0;
                                }
                                return !1;
                            }),
                        // Splits the current block, moving content inside that's after the cursor to a new text block below. Also
                        // deletes the selection beforehand, if it's not empty.
                        ()=>i.command((param)=>{
                                let { state: n, chain: r } = param;
                                const a = _(n);
                                if (!a.isBlockContainer) return !1;
                                const { blockContent: s } = a, l = n.selection.$anchor.parentOffset === 0;
                                return s.node.childCount === 0 ? !1 : (r().deleteSelection().command(Wt(n.selection.from, l, l)).run(), !0);
                            })
                    ];
                }),
            // Always returning true for tab key presses ensures they're not captured by the browser. Otherwise, they blur the
            // editor since the browser will try to use tab for keyboard navigation.
            Tab: ()=>{
                var i, n, r;
                return this.options.tabBehavior !== "prefer-indent" && ((i = this.options.editor.formattingToolbar) != null && i.shown || (n = this.options.editor.linkToolbar) != null && n.shown || (r = this.options.editor.filePanel) != null && r.shown) ? !1 : no(this.options.editor);
            },
            "Shift-Tab": ()=>{
                var i, n, r;
                return this.options.tabBehavior !== "prefer-indent" && ((i = this.options.editor.formattingToolbar) != null && i.shown || (n = this.options.editor.linkToolbar) != null && n.shown || (r = this.options.editor.filePanel) != null && r.shown) ? !1 : (this.editor.commands.liftListItem("blockContainer"), !0);
            },
            "Shift-Mod-ArrowUp": ()=>(this.options.editor.moveBlocksUp(), !0),
            "Shift-Mod-ArrowDown": ()=>(this.options.editor.moveBlocksDown(), !0)
        };
    }
});
class Wr {
    editLink(t, o) {
        var n;
        const i = this.pmView.state.tr.insertText(o, this.linkMarkRange.from, this.linkMarkRange.to);
        i.addMark(this.linkMarkRange.from, this.linkMarkRange.from + o.length, this.pmView.state.schema.mark("link", {
            href: t
        })), this.editor.dispatch(i), this.pmView.focus(), (n = this.state) != null && n.show && (this.state.show = !1, this.emitUpdate());
    }
    deleteLink() {
        var t;
        this.editor.dispatch(this.pmView.state.tr.removeMark(this.linkMarkRange.from, this.linkMarkRange.to, this.linkMark.type).setMeta("preventAutolink", !0)), this.pmView.focus(), (t = this.state) != null && t.show && (this.state.show = !1, this.emitUpdate());
    }
    update(t, o) {
        var a;
        const { state: i } = t;
        if (o && o.selection.from === i.selection.from && o.selection.to === i.selection.to || !this.pmView.hasFocus()) return;
        const r = this.linkMark;
        if (this.linkMark = void 0, this.linkMarkRange = void 0, this.keyboardHoveredLinkMark = void 0, this.keyboardHoveredLinkMarkRange = void 0, this.pmView.state.selection.empty) {
            const s = this.pmView.state.selection.$from.marks();
            for (const l of s)if (l.type.name === this.pmView.state.schema.mark("link").type.name) {
                this.keyboardHoveredLinkMark = l, this.keyboardHoveredLinkMarkRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkRange"])(this.pmView.state.selection.$from, l.type, l.attrs) || void 0;
                break;
            }
        }
        if (this.mouseHoveredLinkMark && (this.linkMark = this.mouseHoveredLinkMark, this.linkMarkRange = this.mouseHoveredLinkMarkRange), this.keyboardHoveredLinkMark && (this.linkMark = this.keyboardHoveredLinkMark, this.linkMarkRange = this.keyboardHoveredLinkMarkRange), this.linkMark && this.editor.isEditable) {
            this.state = {
                show: !0,
                referencePos: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posToDOMRect"])(this.pmView, this.linkMarkRange.from, this.linkMarkRange.to),
                url: this.linkMark.attrs.href,
                text: this.pmView.state.doc.textBetween(this.linkMarkRange.from, this.linkMarkRange.to)
            }, this.emitUpdate();
            return;
        }
        if ((a = this.state) != null && a.show && r && (!this.linkMark || !this.editor.isEditable)) {
            this.state.show = !1, this.emitUpdate();
            return;
        }
    }
    destroy() {
        this.pmView.dom.removeEventListener("mouseover", this.mouseOverHandler), this.pmView.root.removeEventListener("scroll", this.scrollHandler, !0), this.pmView.root.removeEventListener("click", this.clickHandler, !0);
    }
    constructor(t, o, i){
        p(this, "state");
        p(this, "emitUpdate");
        p(this, "menuUpdateTimer");
        p(this, "startMenuUpdateTimer");
        p(this, "stopMenuUpdateTimer");
        p(this, "mouseHoveredLinkMark");
        p(this, "mouseHoveredLinkMarkRange");
        p(this, "keyboardHoveredLinkMark");
        p(this, "keyboardHoveredLinkMarkRange");
        p(this, "linkMark");
        p(this, "linkMarkRange");
        p(this, "mouseOverHandler", (t)=>{
            if (this.mouseHoveredLinkMark = void 0, this.mouseHoveredLinkMarkRange = void 0, this.stopMenuUpdateTimer(), t.target instanceof HTMLAnchorElement && t.target.nodeName === "A") {
                const o = t.target, i = this.pmView.posAtDOM(o, 0) + 1, n = this.pmView.state.doc.resolve(i), r = n.marks();
                for (const a of r)if (a.type.name === this.pmView.state.schema.mark("link").type.name) {
                    this.mouseHoveredLinkMark = a, this.mouseHoveredLinkMarkRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkRange"])(n, a.type, a.attrs) || void 0;
                    break;
                }
            }
            return this.startMenuUpdateTimer(), !1;
        });
        p(this, "clickHandler", (t)=>{
            var i;
            const o = this.pmView.dom.parentElement;
            // Toolbar is open.
            this.linkMark && // An element is clicked.
            t && t.target && // The clicked element is not the editor.
            !(o === t.target || o.contains(t.target)) && (i = this.state) != null && i.show && (this.state.show = !1, this.emitUpdate());
        });
        p(this, "scrollHandler", ()=>{
            var t;
            this.linkMark !== void 0 && (t = this.state) != null && t.show && (this.state.referencePos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posToDOMRect"])(this.pmView, this.linkMarkRange.from, this.linkMarkRange.to), this.emitUpdate());
        });
        p(this, "closeMenu", ()=>{
            var t;
            (t = this.state) != null && t.show && (this.state.show = !1, this.emitUpdate());
        });
        this.editor = t, this.pmView = o, this.emitUpdate = ()=>{
            if (!this.state) throw new Error("Attempting to update uninitialized link toolbar");
            i(this.state);
        }, this.startMenuUpdateTimer = ()=>{
            this.menuUpdateTimer = setTimeout(()=>{
                this.update(this.pmView);
            }, 250);
        }, this.stopMenuUpdateTimer = ()=>(this.menuUpdateTimer && (clearTimeout(this.menuUpdateTimer), this.menuUpdateTimer = void 0), !1), this.pmView.dom.addEventListener("mouseover", this.mouseOverHandler), this.pmView.root.addEventListener("click", this.clickHandler, !0), this.pmView.root.addEventListener("scroll", this.scrollHandler, !0);
    }
}
const Kr = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("LinkToolbarPlugin");
class qr extends ne {
    onUpdate(o) {
        return this.on("update", o);
    }
    get shown() {
        var o, i;
        return ((i = (o = this.view) == null ? void 0 : o.state) == null ? void 0 : i.show) || !1;
    }
    constructor(o){
        super();
        p(this, "view");
        p(this, "plugin");
        /**
     * Edit the currently hovered link.
     */ p(this, "editLink", (o, i)=>{
            this.view.editLink(o, i);
        });
        /**
     * Delete the currently hovered link.
     */ p(this, "deleteLink", ()=>{
            this.view.deleteLink();
        });
        /**
     * When hovering on/off links using the mouse cursor, the link toolbar will
     * open & close with a delay.
     *
     * This function starts the delay timer, and should be used for when the mouse
     * cursor enters the link toolbar.
     */ p(this, "startHideTimer", ()=>{
            this.view.startMenuUpdateTimer();
        });
        /**
     * When hovering on/off links using the mouse cursor, the link toolbar will
     * open & close with a delay.
     *
     * This function stops the delay timer, and should be used for when the mouse
     * cursor exits the link toolbar.
     */ p(this, "stopHideTimer", ()=>{
            this.view.stopMenuUpdateTimer();
        });
        p(this, "closeMenu", ()=>this.view.closeMenu());
        this.plugin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
            key: Kr,
            view: (i)=>(this.view = new Wr(o, i, (n)=>{
                    this.emit("update", n);
                }), this.view),
            props: {
                handleKeyDown: (i, n)=>n.key === "Escape" && this.shown ? (this.view.closeMenu(), !0) : !1
            }
        });
    }
}
const Xr = [
    "http",
    "https",
    "ftp",
    "ftps",
    "mailto",
    "tel",
    "callto",
    "sms",
    "cid",
    "xmpp"
], Zr = "https", Jr = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("node-selection-keyboard");
class Yr {
    constructor(){
        p(this, "plugin");
        this.plugin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
            key: Jr,
            props: {
                handleKeyDown: (t, o)=>{
                    if ("node" in t.state.selection) {
                        if (o.ctrlKey || o.metaKey) return !1;
                        if (o.key.length === 1) return o.preventDefault(), !0;
                        if (o.key === "Enter" && !o.shiftKey && !o.altKey && !o.ctrlKey && !o.metaKey) {
                            const i = t.state.tr;
                            return t.dispatch(i.insert(t.state.tr.selection.$to.after(), t.state.schema.nodes.paragraph.createChecked()).setSelection(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"](i.doc.resolve(t.state.tr.selection.$to.after() + 1)))), !0;
                        }
                    }
                    return !1;
                }
            }
        });
    }
}
const Qr = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("blocknote-placeholder");
class ea {
    constructor(t, o){
        p(this, "plugin");
        this.plugin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
            key: Qr,
            view: (i)=>{
                var d, c;
                const n = "placeholder-selector-".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])());
                i.dom.classList.add(n);
                const r = document.createElement("style"), a = t._tiptapEditor.options.injectNonce;
                a && r.setAttribute("nonce", a), ((d = t.prosemirrorView) == null ? void 0 : d.root) instanceof ShadowRoot ? t.prosemirrorView.root.append(r) : (c = t.prosemirrorView) == null || c.root.head.appendChild(r);
                const s = r.sheet, l = function() {
                    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
                    return ".".concat(n, " .bn-block-content").concat(u, " .bn-inline-content:has(> .ProseMirror-trailingBreak:only-child):before");
                };
                try {
                    const { default: u, emptyDocument: m, ...h } = o;
                    for (const [b, k] of Object.entries(h)){
                        const v = '[data-content-type="'.concat(b, '"]');
                        s.insertRule("".concat(l(v), " { content: ").concat(JSON.stringify(k), "; }"));
                    }
                    const f = "[data-is-only-empty-block]", g = "[data-is-empty-and-focused]";
                    s.insertRule("".concat(l(f), " { content: ").concat(JSON.stringify(m), "; }")), s.insertRule("".concat(l(g), " { content: ").concat(JSON.stringify(u), "; }"));
                } catch (u) {
                    console.warn("Failed to insert placeholder CSS rule - this is likely due to the browser not supporting certain CSS pseudo-element selectors (:has, :only-child:, or :before)", u);
                }
                return {
                    destroy: ()=>{
                        var u, m;
                        ((u = t.prosemirrorView) == null ? void 0 : u.root) instanceof ShadowRoot ? t.prosemirrorView.root.removeChild(r) : (m = t.prosemirrorView) == null || m.root.head.removeChild(r);
                    }
                };
            },
            props: {
                decorations: (i)=>{
                    const { doc: n, selection: r } = i;
                    if (!t.isEditable || !r.empty || r.$from.parent.type.spec.code) return;
                    const a = [];
                    i.doc.content.size === 6 && a.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$40$2e$1$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].node(2, 4, {
                        "data-is-only-empty-block": "true"
                    }));
                    const s = r.$anchor, l = s.parent;
                    if (l.content.size === 0) {
                        const d = s.before();
                        a.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$40$2e$1$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].node(d, d + l.nodeSize, {
                            "data-is-empty-and-focused": "true"
                        }));
                    }
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$40$2e$1$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorationSet"].create(n, a);
                }
            }
        });
    }
}
const _t = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("previous-blocks"), ta = {
    // Numbered List Items
    index: "index",
    // Headings
    level: "level",
    // All Blocks
    type: "type",
    depth: "depth",
    "depth-change": "depth-change"
};
class oa {
    constructor(){
        p(this, "plugin");
        let t;
        this.plugin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
            key: _t,
            view (o) {
                return {
                    update: async (i, n)=>{
                        var r;
                        ((r = this.key) == null ? void 0 : r.getState(i.state).updatedBlocks.size) > 0 && (t = setTimeout(()=>{
                            i.dispatch(i.state.tr.setMeta(_t, {
                                clearUpdate: !0
                            }));
                        }, 0));
                    },
                    destroy: ()=>{
                        t && clearTimeout(t);
                    }
                };
            },
            state: {
                init () {
                    return {
                        // Block attributes, by block ID, from just before the previous transaction.
                        prevTransactionOldBlockAttrs: {},
                        // Block attributes, by block ID, from just before the current transaction.
                        currentTransactionOldBlockAttrs: {},
                        // Set of IDs of blocks whose attributes changed from the current transaction.
                        updatedBlocks: /* @__PURE__ */ new Set()
                    };
                },
                apply (o, i, n, r) {
                    if (i.currentTransactionOldBlockAttrs = {}, i.updatedBlocks.clear(), !o.docChanged || n.doc.eq(r.doc)) return i;
                    const a = {}, s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findChildren"])(n.doc, (c)=>c.attrs.id), l = new Map(s.map((c)=>[
                            c.node.attrs.id,
                            c
                        ])), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findChildren"])(r.doc, (c)=>c.attrs.id);
                    for (const c of d){
                        const u = l.get(c.node.attrs.id), m = u == null ? void 0 : u.node.firstChild, h = c.node.firstChild;
                        if (u && m && h) {
                            const f = {
                                index: h.attrs.index,
                                level: h.attrs.level,
                                type: h.type.name,
                                depth: r.doc.resolve(c.pos).depth
                            };
                            let g = {
                                index: m.attrs.index,
                                level: m.attrs.level,
                                type: m.type.name,
                                depth: n.doc.resolve(u.pos).depth
                            };
                            a[c.node.attrs.id] = g, o.getMeta("numberedListIndexing") && (c.node.attrs.id in i.prevTransactionOldBlockAttrs && (g = i.prevTransactionOldBlockAttrs[c.node.attrs.id]), f.type === "numberedListItem" && (g.index = f.index)), i.currentTransactionOldBlockAttrs[c.node.attrs.id] = g, JSON.stringify(g) !== JSON.stringify(f) && (g["depth-change"] = g.depth - f.depth, i.updatedBlocks.add(c.node.attrs.id));
                        }
                    }
                    return i.prevTransactionOldBlockAttrs = a, i;
                }
            },
            props: {
                decorations (o) {
                    const i = this.getState(o);
                    if (i.updatedBlocks.size === 0) return;
                    const n = [];
                    return o.doc.descendants((r, a)=>{
                        if (!r.attrs.id || !i.updatedBlocks.has(r.attrs.id)) return;
                        const s = i.currentTransactionOldBlockAttrs[r.attrs.id], l = {};
                        for (const [c, u] of Object.entries(s))l["data-prev-" + ta[c]] = u || "none";
                        const d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$40$2e$1$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].node(a, a + r.nodeSize, {
                            ...l
                        });
                        n.push(d);
                    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$40$2e$1$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorationSet"].create(o.doc, n);
                }
            }
        });
    }
}
function ho(e, t) {
    var o, i;
    for(; e && e.parentElement && e.parentElement !== t.dom && ((o = e.getAttribute) == null ? void 0 : o.call(e, "data-node-type")) !== "blockContainer";)e = e.parentElement;
    if (((i = e.getAttribute) == null ? void 0 : i.call(e, "data-node-type")) === "blockContainer") return {
        node: e,
        id: e.getAttribute("data-id")
    };
}
class ee extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"] {
    static create(o, i) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : i;
        return new ee(o.resolve(i), o.resolve(n));
    }
    content() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(this.nodes), 0, 0);
    }
    eq(o) {
        if (!(o instanceof ee) || this.nodes.length !== o.nodes.length || this.from !== o.from || this.to !== o.to) return !1;
        for(let i = 0; i < this.nodes.length; i++)if (!this.nodes[i].eq(o.nodes[i])) return !1;
        return !0;
    }
    map(o, i) {
        const n = i.mapResult(this.from), r = i.mapResult(this.to);
        return r.deleted ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"].near(o.resolve(n.pos)) : n.deleted ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"].near(o.resolve(r.pos)) : new ee(o.resolve(n.pos), o.resolve(r.pos));
    }
    toJSON() {
        return {
            type: "node",
            anchor: this.anchor,
            head: this.head
        };
    }
    constructor(o, i){
        super(o, i);
        p(this, "nodes");
        const n = o.node();
        this.nodes = [], o.doc.nodesBetween(o.pos, i.pos, (r, a, s)=>{
            if (s !== null && s.eq(n)) return this.nodes.push(r), !1;
        });
    }
}
let O;
function ia(e, t) {
    let o, i;
    const n = t.resolve(e.from).node().type.spec.group === "blockContent", r = t.resolve(e.to).node().type.spec.group === "blockContent", a = Math.min(e.$anchor.depth, e.$head.depth);
    if (n && r) {
        const s = e.$from.start(a - 1), l = e.$to.end(a - 1);
        o = t.resolve(s - 1).pos, i = t.resolve(l + 1).pos;
    } else o = e.from, i = e.to;
    return {
        from: o,
        to: i
    };
}
function yt(e, t) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t;
    t === o && (o += e.state.doc.resolve(t + 1).node().nodeSize);
    const i = e.domAtPos(t).node.cloneNode(!0), n = e.domAtPos(t).node, r = (c, u)=>Array.prototype.indexOf.call(c.children, u), a = r(n, // Expects from position to be just before the first selected block.
    e.domAtPos(t + 1).node.parentElement), s = r(n, // Expects to position to be just after the last selected block.
    e.domAtPos(o - 1).node.parentElement);
    for(let c = n.childElementCount - 1; c >= 0; c--)(c > s || c < a) && i.removeChild(i.children[c]);
    fo(e.root), O = i;
    const d = e.dom.className.split(" ").filter((c)=>c !== "ProseMirror" && c !== "bn-root" && c !== "bn-editor").join(" ");
    O.className = O.className + " bn-drag-preview " + d, e.root instanceof ShadowRoot ? e.root.appendChild(O) : e.root.body.appendChild(O);
}
function fo(e) {
    O !== void 0 && (e instanceof ShadowRoot ? e.removeChild(O) : e.body.removeChild(O), O = void 0);
}
function na(e, t, o) {
    if (!e.dataTransfer) return;
    const i = o.prosemirrorView;
    if (!i) return;
    const n = A(t.id, i.state.doc);
    if (!n) throw new Error("Block with ID ".concat(t.id, " not found"));
    const r = n.posBeforeNode;
    if (r != null) {
        const a = i.state.selection, s = i.state.doc, { from: l, to: d } = ia(a, s), c = l <= r && r < d, u = a.$anchor.node() !== a.$head.node() || a instanceof ee;
        c && u ? (i.dispatch(i.state.tr.setSelection(ee.create(s, l, d))), yt(i, l, d)) : (i.dispatch(i.state.tr.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"].create(i.state.doc, r))), yt(i, r));
        const m = i.state.selection.content(), h = o.pmSchema, f = i.serializeForClipboard(m).dom.innerHTML, g = Ee(h, o), b = uo(m.content, o.schema), k = g.exportBlocks(b, {}), v = Xe(k);
        e.dataTransfer.clearData(), e.dataTransfer.setData("blocknote/html", f), e.dataTransfer.setData("text/html", k), e.dataTransfer.setData("text/plain", v), e.dataTransfer.effectAllowed = "move", e.dataTransfer.setDragImage(O, 0, 0);
    }
}
const ae = 0.1;
function ze(e, t, o) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
    const n = e.root.elementsFromPoint(// bit hacky - offset x position to right to account for the width of sidemenu itself
    t.left + (o === "editor" ? 50 : 0), t.top);
    for (const r of n)if (e.dom.contains(r)) return i && r.closest("[data-node-type=columnList]") ? ze(e, {
        left: t.left + 50,
        // bit hacky, but if we're inside a column, offset x position to right to account for the width of sidemenu itself
        top: t.top
    }, o, !1) : ho(r, e);
}
function ra(e, t, o) {
    if (!t.dom.firstChild) return;
    const i = t.dom.firstChild.getBoundingClientRect(), n = {
        left: e.x,
        top: e.y
    }, r = n.left < i.left, a = n.left > i.right;
    o === "viewport" && (r && (n.left = i.left + 10), a && (n.left = i.right - 10));
    let s = ze(t, n, o);
    if (!a && s) {
        const l = s.node.getBoundingClientRect();
        n.left = l.right - 10, s = ze(t, n, "viewport", !1);
    }
    return s;
}
class aa {
    createSyntheticEvent(t) {
        const o = new Event(t.type, t), i = this.pmView.dom.firstChild.getBoundingClientRect();
        return o.clientX = t.clientX, o.clientY = t.clientY, t.clientX < i.left && t.clientX > i.left - i.width * ae ? o.clientX = i.left + i.width * ae / 2 : t.clientX > i.right && t.clientX < i.right + i.width * ae ? o.clientX = i.right - i.width * ae / 2 : (t.clientX < i.left || t.clientX > i.right) && (o.clientX = i.left + ae * i.width * 2), o.clientY = Math.min(Math.max(t.clientY, i.top), i.top + i.height), o.dataTransfer = t.dataTransfer, o.preventDefault = ()=>t.preventDefault(), o.synthetic = !0, o;
    }
    // Needed in cases where the editor state updates without the mouse cursor
    // moving, as some state updates can require a side menu update. For example,
    // adding a button to the side menu which removes the block can cause the
    // block below to jump up into the place of the removed block when clicked,
    // allowing the user to click the button again without moving the cursor. This
    // would otherwise not update the side menu, and so clicking the button again
    // would attempt to remove the same block again, causing an error.
    update(t, o) {
        var n;
        !o.doc.eq(this.pmView.state.doc) && (n = this.state) != null && n.show && this.updateStateFromMousePos();
    }
    destroy() {
        var t;
        (t = this.state) != null && t.show && (this.state.show = !1, this.emitUpdate(this.state)), this.pmView.root.removeEventListener("mousemove", this.onMouseMove, !0), this.pmView.root.removeEventListener("dragstart", this.onDragStart), this.pmView.root.removeEventListener("dragover", this.onDragOver), this.pmView.root.removeEventListener("drop", this.onDrop, !0), this.pmView.root.removeEventListener("dragend", this.onDragEnd, !0), this.pmView.root.removeEventListener("keydown", this.onKeyDown, !0), this.pmView.root.removeEventListener("scroll", this.onScroll, !0);
    }
    constructor(t, o, i, n){
        p(this, "state");
        p(this, "emitUpdate");
        p(this, "mousePos");
        p(this, "hoveredBlock");
        p(this, "menuFrozen", !1);
        p(this, "isDragOrigin", !1);
        p(this, "updateState", (t)=>{
            this.state = t, this.emitUpdate(this.state);
        });
        p(this, "updateStateFromMousePos", ()=>{
            var i, n, r, a;
            if (this.menuFrozen || !this.mousePos) return;
            const t = ra(this.mousePos, this.pmView, this.sideMenuDetection);
            if (!t || !this.editor.isEditable) {
                (i = this.state) != null && i.show && (this.state.show = !1, this.updateState(this.state));
                return;
            }
            if ((n = this.state) != null && n.show && (r = this.hoveredBlock) != null && r.hasAttribute("data-id") && ((a = this.hoveredBlock) == null ? void 0 : a.getAttribute("data-id")) === t.id) return;
            this.hoveredBlock = t.node;
            const o = t.node.firstChild;
            if (o && this.editor.isEditable) {
                const s = o.getBoundingClientRect(), l = t.node.closest("[data-node-type=column]");
                this.updateState({
                    show: !0,
                    referencePos: new DOMRect(l ? // We take the first child as column elements have some default
                    // padding. This is a little weird since this child element will
                    // be the first block, but since it's always non-nested and we
                    // only take the x coordinate, it's ok.
                    l.firstElementChild.getBoundingClientRect().x : this.pmView.dom.firstChild.getBoundingClientRect().x, s.y, s.width, s.height),
                    block: this.editor.getBlock(this.hoveredBlock.getAttribute("data-id"))
                });
            }
        });
        p(this, "onDrop", (t)=>{
            var n, r;
            if (this.pmView.dragging === null) return;
            this.editor._tiptapEditor.commands.blur();
            const o = t.target instanceof Node && ((n = t.target instanceof HTMLElement ? t.target : t.target.parentElement) == null ? void 0 : n.closest(".bn-editor")) || null;
            if (o && (!this.isDragOrigin && this.pmView.dom === o ? this.pmView.dispatch(this.pmView.state.tr.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].create(this.pmView.state.tr.doc, this.pmView.state.tr.selection.to))) : this.isDragOrigin && this.pmView.dom !== o && setTimeout(()=>this.pmView.dispatch(this.pmView.state.tr.deleteSelection()), 0)), this.sideMenuDetection === "editor" || t.synthetic || !((r = t.dataTransfer) != null && r.types.includes("blocknote/html"))) return;
            const i = this.pmView.posAtCoords({
                left: t.clientX,
                top: t.clientY
            });
            if (!i || i.inside === -1) {
                const a = this.createSyntheticEvent(t);
                this.pmView.dom.dispatchEvent(a);
            }
        });
        p(this, "onDragEnd", ()=>{
            this.pmView.dragging = null;
        });
        /**
     * If a block is being dragged, ProseMirror usually gets the context of what's
     * being dragged from `view.dragging`, which is automatically set when a
     * `dragstart` event fires in the editor. However, if the user tries to drag
     * and drop blocks between multiple editors, only the one in which the drag
     * began has that context, so we need to set it on the others manually. This
     * ensures that PM always drops the blocks in between other blocks, and not
     * inside them.
     *
     * After the `dragstart` event fires on the drag handle, it sets
     * `blocknote/html` data on the clipboard. This handler fires right after,
     * parsing the `blocknote/html` data into nodes and setting them on
     * `view.dragging`.
     *
     * Note: Setting `view.dragging` on `dragover` would be better as the user
     * could then drag between editors in different windows, but you can only
     * access `dataTransfer` contents on `dragstart` and `drop` events.
     */ p(this, "onDragStart", (t)=>{
            var a;
            const o = (a = t.dataTransfer) == null ? void 0 : a.getData("blocknote/html");
            if (!o) return;
            if (this.pmView.dragging) throw new Error("New drag was started while an existing drag is ongoing");
            const i = document.createElement("div");
            i.innerHTML = o;
            const r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMParser"].fromSchema(this.pmView.state.schema).parse(i, {
                topNode: this.pmView.state.schema.nodes.blockGroup.create()
            });
            this.pmView.dragging = {
                slice: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](r.content, 0, 0),
                move: !0
            };
        });
        /**
     * If the event is outside the editor contents,
     * we dispatch a fake event, so that we can still drop the content
     * when dragging / dropping to the side of the editor
     */ p(this, "onDragOver", (t)=>{
            var i;
            if (this.sideMenuDetection === "editor" || t.synthetic || !((i = t.dataTransfer) != null && i.types.includes("blocknote/html"))) return;
            const o = this.pmView.posAtCoords({
                left: t.clientX,
                top: t.clientY
            });
            if (!o || o.inside === -1 && this.pmView.dom.firstChild) {
                const n = this.createSyntheticEvent(t);
                this.pmView.dom.dispatchEvent(n);
            }
        });
        p(this, "onKeyDown", (t)=>{
            var o;
            (o = this.state) != null && o.show && this.editor.isFocused() && (this.state.show = !1, this.emitUpdate(this.state));
        });
        p(this, "onMouseMove", (t)=>{
            var r;
            if (this.menuFrozen) return;
            this.mousePos = {
                x: t.clientX,
                y: t.clientY
            };
            const o = this.pmView.dom.getBoundingClientRect(), i = this.mousePos.x > o.left && this.mousePos.x < o.right && this.mousePos.y > o.top && this.mousePos.y < o.bottom, n = this.pmView.dom.parentElement;
            if (// Cursor is within the editor area
            i && // An element is hovered
            t && t.target && // Element is outside the editor
            !(n === t.target || n.contains(t.target))) {
                (r = this.state) != null && r.show && (this.state.show = !1, this.emitUpdate(this.state));
                return;
            }
            this.updateStateFromMousePos();
        });
        p(this, "onScroll", ()=>{
            var t;
            (t = this.state) != null && t.show && (this.state.referencePos = this.hoveredBlock.getBoundingClientRect(), this.emitUpdate(this.state));
        });
        this.editor = t, this.sideMenuDetection = o, this.pmView = i, this.emitUpdate = ()=>{
            if (!this.state) throw new Error("Attempting to update uninitialized side menu");
            n(this.state);
        }, this.pmView.root.addEventListener("dragstart", this.onDragStart), this.pmView.root.addEventListener("dragover", this.onDragOver), this.pmView.root.addEventListener("drop", this.onDrop, !0), this.pmView.root.addEventListener("dragend", this.onDragEnd, !0), qe(), this.pmView.root.addEventListener("mousemove", this.onMouseMove, !0), this.pmView.root.addEventListener("keydown", this.onKeyDown, !0), i.root.addEventListener("scroll", this.onScroll, !0);
    }
}
const sa = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("SideMenuPlugin");
class la extends ne {
    onUpdate(o) {
        return this.on("update", o);
    }
    constructor(o, i){
        super();
        p(this, "view");
        p(this, "plugin");
        /**
     * Handles drag & drop events for blocks.
     */ p(this, "blockDragStart", (o, i)=>{
            this.view && (this.view.isDragOrigin = !0), na(o, i, this.editor);
        });
        /**
     * Handles drag & drop events for blocks.
     */ p(this, "blockDragEnd", ()=>{
            this.editor.prosemirrorView && fo(this.editor.prosemirrorView.root), this.view && (this.view.isDragOrigin = !1);
        });
        /**
     * Freezes the side menu. When frozen, the side menu will stay
     * attached to the same block regardless of which block is hovered by the
     * mouse cursor.
     */ p(this, "freezeMenu", ()=>{
            this.view.menuFrozen = !0, this.view.state.show = !0, this.view.emitUpdate(this.view.state);
        });
        /**
     * Unfreezes the side menu. When frozen, the side menu will stay
     * attached to the same block regardless of which block is hovered by the
     * mouse cursor.
     */ p(this, "unfreezeMenu", ()=>{
            this.view.menuFrozen = !1, this.view.state.show = !1, this.view.emitUpdate(this.view.state);
        });
        this.editor = o, this.plugin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
            key: sa,
            view: (n)=>(this.view = new aa(o, i, n, (r)=>{
                    this.emit("update", r);
                }), this.view)
        });
    }
}
const da = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNode"])((e)=>e.type.name === "blockContainer");
class ca {
    update(t, o) {
        var d;
        const i = te.getState(o), n = te.getState(t.state), r = i === void 0 && n !== void 0, a = i !== void 0 && n === void 0;
        if (!r && !(i !== void 0 && n !== void 0) && !a) return;
        if (this.pluginState = a ? i : n, a || !this.editor.isEditable) {
            this.state.show = !1, this.emitUpdate(this.pluginState.triggerCharacter);
            return;
        }
        const l = (d = this.rootEl) == null ? void 0 : d.querySelector('[data-decoration-id="'.concat(this.pluginState.decorationId, '"]'));
        this.editor.isEditable && l && (this.state = {
            show: !0,
            referencePos: l.getBoundingClientRect(),
            query: this.pluginState.query
        }, this.emitUpdate(this.pluginState.triggerCharacter));
    }
    destroy() {
        var t;
        (t = this.rootEl) == null || t.removeEventListener("scroll", this.handleScroll, !0);
    }
    constructor(t, o){
        p(this, "state");
        p(this, "emitUpdate");
        p(this, "rootEl");
        p(this, "pluginState");
        p(this, "handleScroll", ()=>{
            var t, o;
            if ((t = this.state) != null && t.show) {
                const i = (o = this.rootEl) == null ? void 0 : o.querySelector('[data-decoration-id="'.concat(this.pluginState.decorationId, '"]'));
                if (!i) return;
                this.state.referencePos = i.getBoundingClientRect(), this.emitUpdate(this.pluginState.triggerCharacter);
            }
        });
        p(this, "closeMenu", ()=>{
            this.editor.dispatch(this.editor._tiptapEditor.state.tr.setMeta(te, null));
        });
        p(this, "clearQuery", ()=>{
            this.pluginState !== void 0 && this.editor._tiptapEditor.chain().focus().deleteRange({
                from: this.pluginState.queryStartPos - (this.pluginState.deleteTriggerCharacter ? this.pluginState.triggerCharacter.length : 0),
                to: this.editor._tiptapEditor.state.selection.from
            }).run();
        });
        var i, n;
        this.editor = t, this.pluginState = void 0, this.emitUpdate = (r)=>{
            var a;
            if (!this.state) throw new Error("Attempting to update uninitialized suggestions menu");
            o(r, {
                ...this.state,
                ignoreQueryLength: (a = this.pluginState) == null ? void 0 : a.ignoreQueryLength
            });
        }, this.rootEl = (i = this.editor.prosemirrorView) == null ? void 0 : i.root, (n = this.rootEl) == null || n.addEventListener("scroll", this.handleScroll, !0);
    }
}
const te = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("SuggestionMenuPlugin");
class ua extends ne {
    onUpdate(o, i) {
        return this.triggerCharacters.includes(o) || this.addTriggerCharacter(o), this.on("update ".concat(o), i);
    }
    get shown() {
        var o, i;
        return ((i = (o = this.view) == null ? void 0 : o.state) == null ? void 0 : i.show) || !1;
    }
    constructor(o){
        super();
        p(this, "view");
        p(this, "plugin");
        p(this, "triggerCharacters", []);
        p(this, "addTriggerCharacter", (o)=>{
            this.triggerCharacters.push(o);
        });
        // TODO: Should this be called automatically when listeners are removed?
        p(this, "removeTriggerCharacter", (o)=>{
            this.triggerCharacters = this.triggerCharacters.filter((i)=>i !== o);
        });
        p(this, "closeMenu", ()=>this.view.closeMenu());
        p(this, "clearQuery", ()=>this.view.clearQuery());
        const i = this.triggerCharacters;
        this.plugin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
            key: te,
            view: ()=>(this.view = new ca(o, (n, r)=>{
                    this.emit("update ".concat(n), r);
                }), this.view),
            state: {
                // Initialize the plugin's internal state.
                init () {},
                // Apply changes to the plugin state from an editor transaction.
                apply (n, r, a, s) {
                    if (n.getMeta("orderedListIndexing") !== void 0 || n.selection.$from.parent.type.spec.code) return r;
                    const l = n.getMeta(te);
                    if (typeof l == "object" && l !== null && r === void 0) return {
                        triggerCharacter: l.triggerCharacter,
                        deleteTriggerCharacter: l.deleteTriggerCharacter !== !1,
                        queryStartPos: s.selection.from,
                        query: "",
                        decorationId: "id_".concat(Math.floor(Math.random() * 4294967295)),
                        ignoreQueryLength: l == null ? void 0 : l.ignoreQueryLength
                    };
                    if (r === void 0) return r;
                    if (// Highlighting text should hide the menu.
                    s.selection.from !== s.selection.to || // Transactions with plugin metadata should hide the menu.
                    l === null || // Certain mouse events should hide the menu.
                    // TODO: Change to global mousedown listener.
                    n.getMeta("focus") || n.getMeta("blur") || n.getMeta("pointer") || // Moving the caret before the character which triggered the menu should hide it.
                    r.triggerCharacter !== void 0 && s.selection.from < r.queryStartPos) return;
                    const d = {
                        ...r
                    };
                    return d.query = s.doc.textBetween(r.queryStartPos, s.selection.from), d;
                }
            },
            props: {
                handleTextInput (n, r, a, s) {
                    const l = this.getState(n.state);
                    return i.includes(s) && l === void 0 ? (n.dispatch(n.state.tr.insertText(s).scrollIntoView().setMeta(te, {
                        triggerCharacter: s
                    })), !0) : !1;
                },
                // Setup decorator on the currently active suggestion.
                decorations (n) {
                    const r = this.getState(n);
                    if (r === void 0) return null;
                    if (!r.deleteTriggerCharacter) {
                        const a = da(n.selection);
                        if (a) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$40$2e$1$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorationSet"].create(n.doc, [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$40$2e$1$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].node(a.pos, a.pos + a.node.nodeSize, {
                                nodeName: "span",
                                class: "bn-suggestion-decorator",
                                "data-decoration-id": r.decorationId
                            })
                        ]);
                    }
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$40$2e$1$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorationSet"].create(n.doc, [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$40$2e$1$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].inline(r.queryStartPos - r.triggerCharacter.length, r.queryStartPos, {
                            nodeName: "span",
                            class: "bn-suggestion-decorator",
                            "data-decoration-id": r.decorationId
                        })
                    ]);
                }
            }
        });
    }
}
function Es(e, t) {
    e.suggestionMenus.addTriggerCharacter(t);
}
let M;
function vt(e) {
    M || (M = document.createElement("div"), M.innerHTML = "_", M.style.opacity = "0", M.style.height = "1px", M.style.width = "1px", e instanceof Document ? e.body.appendChild(M) : e.appendChild(M));
}
function pa(e) {
    M && (e instanceof Document ? e.body.removeChild(M) : e.removeChild(M), M = void 0);
}
function ke(e) {
    return Array.prototype.indexOf.call(e.parentElement.childNodes, e);
}
function ma(e) {
    let t = e;
    for(; t && t.nodeName !== "TD" && t.nodeName !== "TH" && !t.classList.contains("tableWrapper");){
        if (t.classList.contains("ProseMirror")) return;
        const o = t.parentNode;
        if (!o || !(o instanceof Element)) return;
        t = o;
    }
    return t.nodeName === "TD" || t.nodeName === "TH" ? {
        type: "cell",
        domNode: t,
        tbodyNode: t.closest("tbody")
    } : {
        type: "wrapper",
        domNode: t,
        tbodyNode: t.querySelector("tbody")
    };
}
function ha(e, t) {
    const o = t.querySelectorAll(e);
    for(let i = 0; i < o.length; i++)o[i].style.visibility = "hidden";
}
class fa {
    // Updates drag handles when the table is modified or removed.
    update() {
        if (!this.state || !this.state.show) return;
        if (this.state.block = this.editor.getBlock(this.state.block.id), !this.state.block) {
            this.state.show = !1, this.state.showAddOrRemoveRowsButton = !1, this.state.showAddOrRemoveColumnsButton = !1, this.emitUpdate();
            return;
        }
        const t = this.state.block.content.rows.length, o = this.state.block.content.rows[0].cells.length;
        this.state.rowIndex !== void 0 && this.state.colIndex !== void 0 && (this.state.rowIndex >= t && (this.state.rowIndex = t - 1), this.state.colIndex >= o && (this.state.colIndex = o - 1));
        const i = this.tableElement.querySelector("tbody");
        if (!i) throw new Error("Table block does not contain a 'tbody' HTML element. This should never happen.");
        if (this.state.rowIndex !== void 0 && this.state.colIndex !== void 0) {
            const r = i.children[this.state.rowIndex].children[this.state.colIndex];
            this.state.referencePosCell = r.getBoundingClientRect();
        }
        this.state.referencePosTable = i.getBoundingClientRect(), this.emitUpdate();
    }
    destroy() {
        this.pmView.dom.removeEventListener("mousemove", this.mouseMoveHandler), window.removeEventListener("mouseup", this.mouseUpHandler), this.pmView.dom.removeEventListener("mousedown", this.viewMousedownHandler), this.pmView.root.removeEventListener("dragover", this.dragOverHandler), this.pmView.root.removeEventListener("drop", this.dropHandler);
    }
    constructor(t, o, i){
        p(this, "state");
        p(this, "emitUpdate");
        p(this, "tableId");
        p(this, "tablePos");
        p(this, "tableElement");
        p(this, "menuFrozen", !1);
        p(this, "mouseState", "up");
        p(this, "prevWasEditable", null);
        p(this, "viewMousedownHandler", ()=>{
            this.mouseState = "down";
        });
        p(this, "mouseUpHandler", (t)=>{
            this.mouseState = "up", this.mouseMoveHandler(t);
        });
        p(this, "mouseMoveHandler", (t)=>{
            var d, c, u, m;
            if (this.menuFrozen || this.mouseState === "selecting" || !(t.target instanceof Element) || !this.pmView.dom.contains(t.target)) return;
            const o = ma(t.target);
            if ((o == null ? void 0 : o.type) === "cell" && this.mouseState === "down" && !((d = this.state) != null && d.draggingState)) {
                this.mouseState = "selecting", (c = this.state) != null && c.show && (this.state.show = !1, this.state.showAddOrRemoveRowsButton = !1, this.state.showAddOrRemoveColumnsButton = !1, this.emitUpdate());
                return;
            }
            if (!o || !this.editor.isEditable) {
                (u = this.state) != null && u.show && (this.state.show = !1, this.state.showAddOrRemoveRowsButton = !1, this.state.showAddOrRemoveColumnsButton = !1, this.emitUpdate());
                return;
            }
            if (!o.tbodyNode) return;
            const i = o.tbodyNode.getBoundingClientRect(), n = ho(o.domNode, this.pmView);
            if (!n) return;
            this.tableElement = n.node;
            let r;
            const a = A(n.id, this.editor._tiptapEditor.state.doc);
            if (!a) throw new Error("Block with ID ".concat(n.id, " not found"));
            const s = w(a.node, this.editor.schema.blockSchema, this.editor.schema.inlineContentSchema, this.editor.schema.styleSchema, this.editor.blockCache);
            if (Zn("table", s, this.editor) && (this.tablePos = a.posBeforeNode + 1, r = s), !r) return;
            this.tableId = n.id;
            const l = (m = o.domNode.closest(".tableWrapper")) == null ? void 0 : m.querySelector(".table-widgets-container");
            if ((o == null ? void 0 : o.type) === "wrapper") {
                const h = t.clientY >= i.bottom - 1 && // -1 to account for fractions of pixels in "bottom"
                t.clientY < i.bottom + 20, f = t.clientX >= i.right - 1 && t.clientX < i.right + 20, g = t.clientX > i.right || t.clientY > i.bottom;
                this.state = {
                    ...this.state,
                    show: !0,
                    showAddOrRemoveRowsButton: h,
                    showAddOrRemoveColumnsButton: f,
                    referencePosTable: i,
                    block: r,
                    widgetContainer: l,
                    colIndex: g ? void 0 : this.state.colIndex,
                    rowIndex: g ? void 0 : this.state.rowIndex,
                    referencePosCell: g ? void 0 : this.state.referencePosCell
                };
            } else {
                const h = ke(o.domNode), f = ke(o.domNode.parentElement), g = o.domNode.getBoundingClientRect();
                if (this.state !== void 0 && this.state.show && this.tableId === n.id && this.state.rowIndex === f && this.state.colIndex === h) return;
                this.state = {
                    show: !0,
                    showAddOrRemoveColumnsButton: h === r.content.rows[0].cells.length - 1,
                    showAddOrRemoveRowsButton: f === r.content.rows.length - 1,
                    referencePosTable: i,
                    block: r,
                    draggingState: void 0,
                    referencePosCell: g,
                    colIndex: h,
                    rowIndex: f,
                    widgetContainer: l
                };
            }
            return this.emitUpdate(), !1;
        });
        p(this, "dragOverHandler", (t)=>{
            var m;
            if (((m = this.state) == null ? void 0 : m.draggingState) === void 0) return;
            t.preventDefault(), t.dataTransfer.dropEffect = "move", ha(".prosemirror-dropcursor-block, .prosemirror-dropcursor-inline", this.pmView.root);
            const o = {
                left: Math.min(Math.max(t.clientX, this.state.referencePosTable.left + 1), this.state.referencePosTable.right - 1),
                top: Math.min(Math.max(t.clientY, this.state.referencePosTable.top + 1), this.state.referencePosTable.bottom - 1)
            }, i = this.pmView.root.elementsFromPoint(o.left, o.top).filter((h)=>h.tagName === "TD" || h.tagName === "TH");
            if (i.length === 0) throw new Error("Could not find table cell element that the mouse cursor is hovering over.");
            const n = i[0];
            let r = !1;
            const a = ke(n.parentElement), s = ke(n), l = this.state.draggingState.draggedCellOrientation === "row" ? this.state.rowIndex : this.state.colIndex, c = (this.state.draggingState.draggedCellOrientation === "row" ? a : s) !== l;
            (this.state.rowIndex !== a || this.state.colIndex !== s) && (this.state.rowIndex = a, this.state.colIndex = s, this.state.referencePosCell = n.getBoundingClientRect(), r = !0);
            const u = this.state.draggingState.draggedCellOrientation === "row" ? o.top : o.left;
            this.state.draggingState.mousePos !== u && (this.state.draggingState.mousePos = u, r = !0), r && this.emitUpdate(), c && this.editor.dispatch(this.pmView.state.tr.setMeta(se, !0));
        });
        p(this, "dropHandler", (t)=>{
            if (this.mouseState = "up", this.state === void 0 || this.state.draggingState === void 0) return;
            if (this.state.rowIndex === void 0 || this.state.colIndex === void 0) throw new Error("Attempted to drop table row or column, but no table block was hovered prior.");
            t.preventDefault();
            const { draggingState: o, colIndex: i, rowIndex: n } = this.state, r = this.state.block.content.rows;
            if (o.draggedCellOrientation === "row") {
                const a = r[o.originalIndex];
                r.splice(o.originalIndex, 1), r.splice(n, 0, a);
            } else {
                const a = r.map((s)=>s.cells[o.originalIndex]);
                r.forEach((s, l)=>{
                    s.cells.splice(o.originalIndex, 1), s.cells.splice(i, 0, a[l]);
                });
            }
            this.editor.updateBlock(this.state.block, {
                type: "table",
                content: {
                    type: "tableContent",
                    rows: r
                }
            }), this.editor.setTextCursorPosition(this.state.block.id);
        });
        this.editor = t, this.pmView = o, this.emitUpdate = ()=>{
            if (!this.state) throw new Error("Attempting to update uninitialized image toolbar");
            i(this.state);
        }, o.dom.addEventListener("mousemove", this.mouseMoveHandler), o.dom.addEventListener("mousedown", this.viewMousedownHandler), window.addEventListener("mouseup", this.mouseUpHandler), o.root.addEventListener("dragover", this.dragOverHandler), o.root.addEventListener("drop", this.dropHandler);
    }
}
const se = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("TableHandlesPlugin");
class ga extends ne {
    onUpdate(o) {
        return this.on("update", o);
    }
    constructor(o){
        super();
        p(this, "view");
        p(this, "plugin");
        /**
     * Callback that should be set on the `dragStart` event for whichever element
     * is used as the column drag handle.
     */ p(this, "colDragStart", (o)=>{
            if (this.view.state === void 0 || this.view.state.colIndex === void 0) throw new Error("Attempted to drag table column, but no table block was hovered prior.");
            if (this.view.state.draggingState = {
                draggedCellOrientation: "col",
                originalIndex: this.view.state.colIndex,
                mousePos: o.clientX
            }, this.view.emitUpdate(), this.editor.dispatch(this.editor._tiptapEditor.state.tr.setMeta(se, {
                draggedCellOrientation: this.view.state.draggingState.draggedCellOrientation,
                originalIndex: this.view.state.colIndex,
                newIndex: this.view.state.colIndex,
                tablePos: this.view.tablePos
            })), !this.editor.prosemirrorView) throw new Error("Editor view not initialized.");
            vt(this.editor.prosemirrorView.root), o.dataTransfer.setDragImage(M, 0, 0), o.dataTransfer.effectAllowed = "move";
        });
        /**
     * Callback that should be set on the `dragStart` event for whichever element
     * is used as the row drag handle.
     */ p(this, "rowDragStart", (o)=>{
            if (this.view.state === void 0 || this.view.state.rowIndex === void 0) throw new Error("Attempted to drag table row, but no table block was hovered prior.");
            if (this.view.state.draggingState = {
                draggedCellOrientation: "row",
                originalIndex: this.view.state.rowIndex,
                mousePos: o.clientY
            }, this.view.emitUpdate(), this.editor.dispatch(this.editor._tiptapEditor.state.tr.setMeta(se, {
                draggedCellOrientation: this.view.state.draggingState.draggedCellOrientation,
                originalIndex: this.view.state.rowIndex,
                newIndex: this.view.state.rowIndex,
                tablePos: this.view.tablePos
            })), !this.editor.prosemirrorView) throw new Error("Editor view not initialized.");
            vt(this.editor.prosemirrorView.root), o.dataTransfer.setDragImage(M, 0, 0), o.dataTransfer.effectAllowed = "copyMove";
        });
        /**
     * Callback that should be set on the `dragEnd` event for both the element
     * used as the row drag handle, and the one used as the column drag handle.
     */ p(this, "dragEnd", ()=>{
            if (this.view.state === void 0) throw new Error("Attempted to drag table row, but no table block was hovered prior.");
            if (this.view.state.draggingState = void 0, this.view.emitUpdate(), this.editor.dispatch(this.editor._tiptapEditor.state.tr.setMeta(se, null)), !this.editor.prosemirrorView) throw new Error("Editor view not initialized.");
            pa(this.editor.prosemirrorView.root);
        });
        /**
     * Freezes the drag handles. When frozen, they will stay attached to the same
     * cell regardless of which cell is hovered by the mouse cursor.
     */ p(this, "freezeHandles", ()=>{
            this.view.menuFrozen = !0;
        });
        /**
     * Unfreezes the drag handles. When frozen, they will stay attached to the
     * same cell regardless of which cell is hovered by the mouse cursor.
     */ p(this, "unfreezeHandles", ()=>{
            this.view.menuFrozen = !1;
        });
        this.editor = o, this.plugin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
            key: se,
            view: (i)=>(this.view = new fa(o, i, (n)=>{
                    this.emit("update", n);
                }), this.view),
            // We use decorations to render the drop cursor when dragging a table row
            // or column. The decorations are updated in the `dragOverHandler` method.
            props: {
                decorations: (i)=>{
                    if (this.view === void 0 || this.view.state === void 0 || this.view.state.draggingState === void 0 || this.view.tablePos === void 0) return;
                    const n = this.view.state.draggingState.draggedCellOrientation === "row" ? this.view.state.rowIndex : this.view.state.colIndex;
                    if (n === void 0) return;
                    const r = [];
                    if (n === this.view.state.draggingState.originalIndex) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$40$2e$1$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorationSet"].create(i.doc, r);
                    const a = i.doc.resolve(this.view.tablePos + 1), s = a.node();
                    if (this.view.state.draggingState.draggedCellOrientation === "row") {
                        const l = i.doc.resolve(a.posAtIndex(n) + 1), d = l.node();
                        for(let c = 0; c < d.childCount; c++){
                            const u = i.doc.resolve(l.posAtIndex(c) + 1), m = u.node(), h = u.pos + (n > this.view.state.draggingState.originalIndex ? m.nodeSize - 2 : 0);
                            r.push(// The widget is a small bar which spans the width of the cell.
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$40$2e$1$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].widget(h, ()=>{
                                const f = document.createElement("div");
                                return f.className = "bn-table-drop-cursor", f.style.left = "0", f.style.right = "0", n > this.view.state.draggingState.originalIndex ? f.style.bottom = "-2px" : f.style.top = "-3px", f.style.height = "4px", f;
                            }));
                        }
                    } else for(let l = 0; l < s.childCount; l++){
                        const d = i.doc.resolve(a.posAtIndex(l) + 1), c = i.doc.resolve(d.posAtIndex(n) + 1), u = c.node(), m = c.pos + (n > this.view.state.draggingState.originalIndex ? u.nodeSize - 2 : 0);
                        r.push(// The widget is a small bar which spans the height of the cell.
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$40$2e$1$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].widget(m, ()=>{
                            const h = document.createElement("div");
                            return h.className = "bn-table-drop-cursor", h.style.top = "0", h.style.bottom = "0", n > this.view.state.draggingState.originalIndex ? h.style.right = "-2px" : h.style.left = "-3px", h.style.width = "4px", h;
                        }));
                    }
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$40$2e$1$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorationSet"].create(i.doc, r);
                }
            }
        });
    }
}
const ba = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "textAlignment",
    addGlobalAttributes () {
        return [
            {
                // Attribute is applied to block content instead of container so that child blocks don't inherit the text
                // alignment styling.
                types: [
                    "paragraph",
                    "heading",
                    "bulletListItem",
                    "numberedListItem",
                    "checkListItem"
                ],
                attributes: {
                    textAlignment: {
                        default: "left",
                        parseHTML: (e)=>e.getAttribute("data-text-alignment"),
                        renderHTML: (e)=>e.textAlignment === "left" ? {} : {
                                "data-text-alignment": e.textAlignment
                            }
                    }
                }
            }
        ];
    }
}), ka = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "blockTextColor",
    addGlobalAttributes () {
        return [
            {
                types: [
                    "blockContainer"
                ],
                attributes: {
                    textColor: {
                        default: C.textColor.default,
                        parseHTML: (e)=>e.hasAttribute("data-text-color") ? e.getAttribute("data-text-color") : C.textColor.default,
                        renderHTML: (e)=>e.textColor === C.textColor.default ? {} : {
                                "data-text-color": e.textColor
                            }
                    }
                }
            }
        ];
    }
}), _a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "trailingNode",
    addProseMirrorPlugins () {
        const e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"](this.name);
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
                key: e,
                appendTransaction: (t, o, i)=>{
                    const { doc: n, tr: r, schema: a } = i, s = e.getState(i), l = n.content.size - 2, d = a.nodes.blockContainer, c = a.nodes.paragraph;
                    if (s) return r.insert(l, d.create(void 0, c.create()));
                },
                state: {
                    init: (t, o)=>{},
                    apply: (t, o)=>{
                        if (!t.docChanged) return o;
                        let i = t.doc.lastChild;
                        if (!i || i.type.name !== "blockGroup") throw new Error("Expected blockGroup");
                        if (i = i.lastChild, !i || i.type.name !== "blockContainer") return !0;
                        const n = i.firstChild;
                        if (!n) throw new Error("Expected blockContent");
                        return i.nodeSize > 4 || n.type.spec.content !== "inline*";
                    }
                }
            })
        ];
    }
}), ya = {
    blockColor: "data-block-color",
    blockStyle: "data-block-style",
    id: "data-id",
    depth: "data-depth",
    depthChange: "data-depth-change"
}, va = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: "blockContainer",
    group: "blockGroupChild bnBlock",
    // A block always contains content, and optionally a blockGroup which contains nested blocks
    content: "blockContent blockGroup?",
    // Ensures content-specific keyboard handlers trigger first.
    priority: 50,
    defining: !0,
    parseHTML () {
        return [
            {
                tag: "div",
                getAttrs: (e)=>{
                    if (typeof e == "string") return !1;
                    const t = {};
                    for (const [o, i] of Object.entries(ya))e.getAttribute(i) && (t[o] = e.getAttribute(i));
                    return e.getAttribute("data-node-type") === "blockContainer" ? t : !1;
                }
            }
        ];
    },
    renderHTML (param) {
        let { HTMLAttributes: e } = param;
        var n;
        const t = document.createElement("div");
        t.className = "bn-block-outer", t.setAttribute("data-node-type", "blockOuter");
        for (const [r, a] of Object.entries(e))r !== "class" && t.setAttribute(r, a);
        const o = {
            ...((n = this.options.domAttributes) == null ? void 0 : n.block) || {},
            ...e
        }, i = document.createElement("div");
        i.className = F("bn-block", o.class), i.setAttribute("data-node-type", this.name);
        for (const [r, a] of Object.entries(o))r !== "class" && i.setAttribute(r, a);
        return t.appendChild(i), {
            dom: t,
            contentDOM: i
        };
    }
}), wa = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: "blockGroup",
    group: "childContainer",
    content: "blockGroupChild+",
    parseHTML () {
        return [
            {
                tag: "div",
                getAttrs: (e)=>typeof e == "string" ? !1 : e.getAttribute("data-node-type") === "blockGroup" ? null : !1
            }
        ];
    },
    renderHTML (param) {
        let { HTMLAttributes: e } = param;
        var i;
        const t = {
            ...((i = this.options.domAttributes) == null ? void 0 : i.blockGroup) || {},
            ...e
        }, o = document.createElement("div");
        o.className = F("bn-block-group", t.class), o.setAttribute("data-node-type", "blockGroup");
        for (const [n, r] of Object.entries(t))n !== "class" && o.setAttribute(n, r);
        return {
            dom: o,
            contentDOM: o
        };
    }
}), xa = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: "doc",
    topNode: !0,
    content: "blockGroup"
}), Ca = (e)=>{
    const t = {}, o = Ea(e);
    for (const n of o)t[n.name] = n;
    var _e_animations;
    t.formattingToolbar = new zr(e.editor), t.linkToolbar = new qr(e.editor), t.sideMenu = new la(e.editor, e.sideMenuDetection), t.suggestionMenus = new ua(e.editor), t.filePanel = new Or(e.editor), t.placeholder = new ea(e.editor, e.placeholders), ((_e_animations = e.animations) !== null && _e_animations !== void 0 ? _e_animations : !0) && (t.animations = new oa()), e.tableHandles && (t.tableHandles = new ga(e.editor)), t.dropCursor = {
        plugin: e.dropCursor({
            width: 5,
            color: "#ddeeff",
            editor: e.editor
        })
    }, t.nodeSelectionKeyboard = new Yr();
    const i = e.disableExtensions || [];
    for (const n of i)delete t[n];
    return t;
}, Ea = (e)=>{
    const t = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extensions"].ClipboardTextSerializer,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extensions"].Commands,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extensions"].Editable,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extensions"].FocusEvents,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extensions"].Tabindex,
        // DevTools,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$gapcursor_1aa6cf5191c13c1d9cbdb78c5ff27546$2f$node_modules$2f40$tiptap$2f$extension$2d$gapcursor$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gapcursor"],
        // DropCursor,
        ue.configure({
            // everything from bnBlock group (nodes that represent a BlockNote block should have an id)
            types: [
                "blockContainer",
                "columnList",
                "column"
            ],
            setIdAttribute: e.setIdAttribute
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$hard$2d$brea_6e943ba8cfd6fbd82bbc2aa24b2092fc$2f$node_modules$2f40$tiptap$2f$extension$2d$hard$2d$break$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HardBreak"].extend({
            priority: 10
        }),
        // Comments,
        // basics:
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$text$40$2$2e$26_8f74268efa469e06252de0428e41e948$2f$node_modules$2f40$tiptap$2f$extension$2d$text$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"],
        // marks:
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$link$40$2$2e$26_78dc7b864e3f5e606f6a2a621b9177e0$2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"].extend({
            inclusive: !1
        }).configure({
            defaultProtocol: Zr,
            protocols: Xr
        }),
        ...Object.values(e.styleSpecs).map((o)=>o.implementation.mark.configure({
                editor: e.editor
            })),
        ka,
        Dr,
        ba,
        // make sure escape blurs editor, so that we can tab to other elements in the host page (accessibility)
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
            name: "OverrideEscape",
            addKeyboardShortcuts () {
                return {
                    Escape: ()=>e.editor.suggestionMenus.shown ? !1 : this.editor.commands.blur()
                };
            }
        }),
        // nodes
        xa,
        va.configure({
            editor: e.editor,
            domAttributes: e.domAttributes
        }),
        $r.configure({
            editor: e.editor,
            tabBehavior: e.tabBehavior
        }),
        wa.configure({
            domAttributes: e.domAttributes
        }),
        ...Object.values(e.inlineContentSpecs).filter((o)=>o.config !== "link" && o.config !== "text").map((o)=>o.implementation.node.configure({
                editor: e.editor
            })),
        ...Object.values(e.blockSpecs).flatMap((o)=>[
                // dependent nodes (e.g.: tablecell / row)
                ...(o.implementation.requiredExtensions || []).map((i)=>i.configure({
                        editor: e.editor,
                        domAttributes: e.domAttributes
                    })),
                // the actual node itself
                o.implementation.node.configure({
                    editor: e.editor,
                    domAttributes: e.domAttributes
                })
            ]),
        jr(e.editor),
        Pr(e.editor),
        Ir(e.editor),
        // This needs to be at the bottom of this list, because Key events (such as enter, when selecting a /command),
        // should be handled before Enter handlers in other components like splitListItem
        ...e.trailingBlock === void 0 || e.trailingBlock ? [
            _a
        ] : []
    ];
    return e.collaboration ? t.push(...Ur(e.collaboration)) : t.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$history$40$2_672e48f7f8597914ae8a64923169a03a$2f$node_modules$2f40$tiptap$2f$extension$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["History"]), t;
};
function Sa(e, t) {
    const o = [];
    return e.forEach((i, n, r)=>{
        r !== t && o.push(i);
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(o);
}
function Ba(e, t) {
    const o = [];
    for(let i = 0; i < e.childCount; i++)if (e.child(i).type.name === "tableRow") if (o.length > 0 && o[o.length - 1].type.name === "table") {
        const n = o[o.length - 1], r = n.copy(n.content.addToEnd(e.child(i)));
        o[o.length - 1] = r;
    } else {
        const n = t.nodes.table.createChecked(void 0, e.child(i));
        o.push(n);
    }
    else o.push(e.child(i));
    return e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(o), e;
}
function Ta(e, t) {
    let o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(e.content);
    if (o = Ba(o, t.state.schema), !Ma(o, t)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](o, e.openStart, e.openEnd);
    for(let i = 0; i < o.childCount; i++)if (o.child(i).type.spec.group === "blockContent") {
        const n = [
            o.child(i)
        ];
        if (i + 1 < o.childCount && o.child(i + 1).type.name === "blockGroup") {
            const a = o.child(i + 1).child(0).child(0);
            (a.type.name === "bulletListItem" || a.type.name === "numberedListItem" || a.type.name === "checkListItem") && (n.push(o.child(i + 1)), o = Sa(o, i + 1));
        }
        const r = t.state.schema.nodes.blockContainer.createChecked(void 0, n);
        o = o.replaceChild(i, r);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](o, e.openStart, e.openEnd);
}
function Ma(e, t) {
    var r, a;
    const o = e.childCount === 1, i = ((r = e.firstChild) == null ? void 0 : r.type.spec.content) === "inline*", n = ((a = e.firstChild) == null ? void 0 : a.type.spec.content) === "tableRow+";
    if (o) {
        if (i) return !1;
        if (n) {
            const s = _(t.state);
            if (s.isBlockContainer) return !(s.blockContent.node.type.spec.content === "tableRow+");
        }
    }
    return !0;
}
const we = class we extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"] {
    get state() {
        return this.view && (this._state = this.view.state), this._state;
    }
    dispatch(o) {
        this.view ? this.view.dispatch(o) : this._state = this.state.apply(o);
    }
    /**
   * Replace the default `createView` method with a custom one - which we call on mount
   */ createViewAlternative(o) {
        this.contentComponent = o;
        const i = {};
        this.extensionManager.extensions.forEach((r)=>{
            r.type === "mark" && r.config.addMarkView && (i[r.name] = r.config.addMarkView);
        }), this.view = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$40$2e$1$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorView"]({
            mount: this.options.element
        }, // use mount option so that we reuse the existing element instead of creating a new one
        {
            ...this.options.editorProps,
            // @ts-ignore
            dispatchTransaction: this.dispatchTransaction.bind(this),
            state: this.state,
            markViews: i
        });
        const n = this.state.reconfigure({
            plugins: this.extensionManager.plugins
        });
        this.view.updateState(n), this.createNodeViews(), this.commands.focus(this.options.autofocus), this.emit("create", {
            editor: this
        }), this.isInitialized = !0;
    }
    constructor(o, i){
        super({
            ...o,
            content: void 0
        });
        p(this, "_state");
        /**
     * Mounts / unmounts the editor to a dom element
     *
     * @param element DOM element to mount to, ur null / undefined to destroy
     */ p(this, "mount", (o, i)=>{
            o ? (this.options.element = o, this.createViewAlternative(i)) : this.destroy();
        });
        const n = this.schema;
        let r;
        const a = n.nodes.doc.createAndFill;
        n.nodes.doc.createAndFill = function() {
            for(var _len = arguments.length, l = new Array(_len), _key = 0; _key < _len; _key++){
                l[_key] = arguments[_key];
            }
            if (r) return r;
            const d = a.apply(n.nodes.doc, l), c = JSON.parse(JSON.stringify(d.toJSON()));
            return c.content[0].content[0].attrs.id = "initialBlockId", r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$2$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].fromJSON(n, c), r;
        };
        let s;
        try {
            const l = o == null ? void 0 : o.content.map((d)=>J(d, this.schema, i).toJSON());
            s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDocument"])({
                type: "doc",
                content: [
                    {
                        type: "blockGroup",
                        content: l
                    }
                ]
            }, this.schema, this.options.parseOptions);
        } catch (l) {
            throw console.error("Error creating document from blocks passed as `initialContent`. Caused by exception: ", l), new Error("Error creating document from blocks passed as `initialContent`:\n" + +JSON.stringify(o.content));
        }
        this._state = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$3$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorState"].create({
            doc: s,
            schema: this.schema
        });
    }
};
p(we, "create", (o, i)=>{
    var r, a;
    const n = (r = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : r.setTimeout;
    typeof ((a = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : a.setTimeout) < "u" && (globalThis.window.setTimeout = ()=>0);
    try {
        return new we(o, i);
    } finally{
        n && (globalThis.window.setTimeout = n);
    }
});
let ve = we;
ve.prototype.createView = function() {
    this.options.onPaste = this.options.onDrop = void 0;
};
const La = {
    enableInputRules: !0,
    enablePasteRules: !0,
    enableCoreExtensions: !1
};
class go {
    get pmSchema() {
        return this._pmSchema;
    }
    static create() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return new go(t);
    }
    dispatch(t) {
        this._tiptapEditor.dispatch(t);
    }
    get prosemirrorView() {
        return this._tiptapEditor.view;
    }
    get domElement() {
        var t;
        return (t = this.prosemirrorView) == null ? void 0 : t.dom;
    }
    isFocused() {
        var t;
        return ((t = this.prosemirrorView) == null ? void 0 : t.hasFocus()) || !1;
    }
    focus() {
        var t;
        (t = this.prosemirrorView) == null || t.focus();
    }
    onUploadStart(t) {
        return this.onUploadStartCallbacks.push(t), ()=>{
            const o = this.onUploadStartCallbacks.indexOf(t);
            o > -1 && this.onUploadStartCallbacks.splice(o, 1);
        };
    }
    onUploadEnd(t) {
        return this.onUploadEndCallbacks.push(t), ()=>{
            const o = this.onUploadEndCallbacks.indexOf(t);
            o > -1 && this.onUploadEndCallbacks.splice(o, 1);
        };
    }
    /**
   * @deprecated, use `editor.document` instead
   */ get topLevelBlocks() {
        return this.document;
    }
    /**
   * Gets a snapshot of all top-level (non-nested) blocks in the editor.
   * @returns A snapshot of all top-level (non-nested) blocks in the editor.
   */ get document() {
        const t = [];
        return this._tiptapEditor.state.doc.firstChild.descendants((o)=>(t.push(w(o, this.schema.blockSchema, this.schema.inlineContentSchema, this.schema.styleSchema, this.blockCache)), !1)), t;
    }
    /**
   * Gets a snapshot of an existing block from the editor.
   * @param blockIdentifier The identifier of an existing block that should be
   * retrieved.
   * @returns The block that matches the identifier, or `undefined` if no
   * matching block was found.
   */ getBlock(t) {
        return ur(this, t);
    }
    /**
   * Gets a snapshot of the previous sibling of an existing block from the
   * editor.
   * @param blockIdentifier The identifier of an existing block for which the
   * previous sibling should be retrieved.
   * @returns The previous sibling of the block that matches the identifier.
   * `undefined` if no matching block was found, or it's the first child/block
   * in the document.
   */ getPrevBlock(t) {
        return pr(this, t);
    }
    /**
   * Gets a snapshot of the next sibling of an existing block from the editor.
   * @param blockIdentifier The identifier of an existing block for which the
   * next sibling should be retrieved.
   * @returns The next sibling of the block that matches the identifier.
   * `undefined` if no matching block was found, or it's the last child/block in
   * the document.
   */ getNextBlock(t) {
        return mr(this, t);
    }
    /**
   * Gets a snapshot of the parent of an existing block from the editor.
   * @param blockIdentifier The identifier of an existing block for which the
   * parent should be retrieved.
   * @returns The parent of the block that matches the identifier. `undefined`
   * if no matching block was found, or the block isn't nested.
   */ getParentBlock(t) {
        return hr(this, t);
    }
    /**
   * Traverses all blocks in the editor depth-first, and executes a callback for each.
   * @param callback The callback to execute for each block. Returning `false` stops the traversal.
   * @param reverse Whether the blocks should be traversed in reverse order.
   */ forEachBlock(t) {
        let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        const i = this.document.slice();
        o && i.reverse();
        function n(r) {
            for (const a of r){
                if (t(a) === !1) return !1;
                const s = o ? a.children.slice().reverse() : a.children;
                if (!n(s)) return !1;
            }
            return !0;
        }
        n(i);
    }
    /**
   * Executes a callback whenever the editor's contents change.
   * @param callback The callback to execute.
   */ onEditorContentChange(t) {
        this._tiptapEditor.on("update", t);
    }
    /**
   * Executes a callback whenever the editor's selection changes.
   * @param callback The callback to execute.
   */ onEditorSelectionChange(t) {
        this._tiptapEditor.on("selectionUpdate", t);
    }
    /**
   * Gets a snapshot of the current text cursor position.
   * @returns A snapshot of the current text cursor position.
   */ getTextCursorPosition() {
        return kr(this);
    }
    /**
   * Sets the text cursor position to the start or end of an existing block. Throws an error if the target block could
   * not be found.
   * @param targetBlock The identifier of an existing block that the text cursor should be moved to.
   * @param placement Whether the text cursor should be placed at the start or end of the block.
   */ setTextCursorPosition(t) {
        let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "start";
        ao(this, t, o);
    }
    /**
   * Gets a snapshot of the current selection.
   */ getSelection() {
        return gr(this);
    }
    setSelection(t, o) {
        br(this, t, o);
    }
    /**
   * Checks if the editor is currently editable, or if it's locked.
   * @returns True if the editor is editable, false otherwise.
   */ get isEditable() {
        if (!this._tiptapEditor) {
            if (!this.headless) throw new Error("no editor, but also not headless?");
            return !1;
        }
        return this._tiptapEditor.isEditable === void 0 ? !0 : this._tiptapEditor.isEditable;
    }
    /**
   * Makes the editor editable or locks it, depending on the argument passed.
   * @param editable True to make the editor editable, or false to lock it.
   */ set isEditable(t) {
        if (!this._tiptapEditor) {
            if (!this.headless) throw new Error("no editor, but also not headless?");
            return;
        }
        this._tiptapEditor.options.editable !== t && this._tiptapEditor.setEditable(t);
    }
    /**
   * Inserts new blocks into the editor. If a block's `id` is undefined, BlockNote generates one automatically. Throws an
   * error if the reference block could not be found.
   * @param blocksToInsert An array of partial blocks that should be inserted.
   * @param referenceBlock An identifier for an existing block, at which the new blocks should be inserted.
   * @param placement Whether the blocks should be inserted just before, just after, or nested inside the
   * `referenceBlock`.
   */ insertBlocks(t, o) {
        let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "before";
        return er(this, t, o, i);
    }
    /**
   * Updates an existing block in the editor. Since updatedBlock is a PartialBlock object, some fields might not be
   * defined. These undefined fields are kept as-is from the existing block. Throws an error if the block to update could
   * not be found.
   * @param blockToUpdate The block that should be updated.
   * @param update A partial block which defines how the existing block should be changed.
   */ updateBlock(t, o) {
        return pn(this, t, o);
    }
    /**
   * Removes existing blocks from the editor. Throws an error if any of the blocks could not be found.
   * @param blocksToRemove An array of identifiers for existing blocks that should be removed.
   */ removeBlocks(t) {
        return cr(this, t);
    }
    /**
   * Replaces existing blocks in the editor with new blocks. If the blocks that should be removed are not adjacent or
   * are at different nesting levels, `blocksToInsert` will be inserted at the position of the first block in
   * `blocksToRemove`. Throws an error if any of the blocks to remove could not be found.
   * @param blocksToRemove An array of blocks that should be replaced.
   * @param blocksToInsert An array of partial blocks to replace the old ones with.
   */ replaceBlocks(t, o) {
        return dr(this, t, o);
    }
    /**
   * Insert a piece of content at the current cursor position.
   *
   * @param content can be a string, or array of partial inline content elements
   */ insertInlineContent(t) {
        const o = U(t, this.pmSchema, this.schema.styleSchema);
        fr({
            from: this._tiptapEditor.state.selection.from,
            to: this._tiptapEditor.state.selection.to
        }, o, this);
    }
    /**
   * Gets the active text styles at the text cursor position or at the end of the current selection if it's active.
   */ getActiveStyles() {
        const t = {}, o = this._tiptapEditor.state.selection.$to.marks();
        for (const i of o){
            const n = this.schema.styleSchema[i.type.name];
            if (!n) {
                // Links are not considered styles in blocknote
                i.type.name !== "link" && // "blocknoteIgnore" tagged marks (such as comments) are also not considered BlockNote "styles"
                !i.type.spec.blocknoteIgnore && console.warn("mark not found in styleschema", i.type.name);
                continue;
            }
            n.propSchema === "boolean" ? t[n.type] = !0 : t[n.type] = i.attrs.stringValue;
        }
        return t;
    }
    /**
   * Adds styles to the currently selected content.
   * @param styles The styles to add.
   */ addStyles(t) {
        for (const [o, i] of Object.entries(t)){
            const n = this.schema.styleSchema[o];
            if (!n) throw new Error("style ".concat(o, " not found in styleSchema"));
            if (n.propSchema === "boolean") this._tiptapEditor.commands.setMark(o);
            else if (n.propSchema === "string") this._tiptapEditor.commands.setMark(o, {
                stringValue: i
            });
            else throw new D(n.propSchema);
        }
    }
    /**
   * Removes styles from the currently selected content.
   * @param styles The styles to remove.
   */ removeStyles(t) {
        for (const o of Object.keys(t))this._tiptapEditor.commands.unsetMark(o);
    }
    /**
   * Toggles styles on the currently selected content.
   * @param styles The styles to toggle.
   */ toggleStyles(t) {
        for (const [o, i] of Object.entries(t)){
            const n = this.schema.styleSchema[o];
            if (!n) throw new Error("style ".concat(o, " not found in styleSchema"));
            if (n.propSchema === "boolean") this._tiptapEditor.commands.toggleMark(o);
            else if (n.propSchema === "string") this._tiptapEditor.commands.toggleMark(o, {
                stringValue: i
            });
            else throw new D(n.propSchema);
        }
    }
    /**
   * Gets the currently selected text.
   */ getSelectedText() {
        return this._tiptapEditor.state.doc.textBetween(this._tiptapEditor.state.selection.from, this._tiptapEditor.state.selection.to);
    }
    /**
   * Gets the URL of the last link in the current selection, or `undefined` if there are no links in the selection.
   */ getSelectedLinkUrl() {
        return this._tiptapEditor.getAttributes("link").href;
    }
    /**
   * Creates a new link to replace the selected content.
   * @param url The link URL.
   * @param text The text to display the link with.
   */ createLink(t, o) {
        if (t === "") return;
        const { from: i, to: n } = this._tiptapEditor.state.selection;
        o || (o = this._tiptapEditor.state.doc.textBetween(i, n));
        const r = this.pmSchema.mark("link", {
            href: t
        });
        this.dispatch(this._tiptapEditor.state.tr.insertText(o, i, n).addMark(i, i + o.length, r));
    }
    /**
   * Checks if the block containing the text cursor can be nested.
   */ canNestBlock() {
        return sr(this);
    }
    /**
   * Nests the block containing the text cursor into the block above it.
   */ nestBlock() {
        no(this);
    }
    /**
   * Checks if the block containing the text cursor is nested.
   */ canUnnestBlock() {
        return lr(this);
    }
    /**
   * Lifts the block containing the text cursor out of its parent.
   */ unnestBlock() {
        ar(this);
    }
    /**
   * Moves the selected blocks up. If the previous block has children, moves
   * them to the end of its children. If there is no previous block, but the
   * current blocks share a common parent, moves them out of & before it.
   */ moveBlocksUp() {
        ir(this);
    }
    /**
   * Moves the selected blocks down. If the next block has children, moves
   * them to the start of its children. If there is no next block, but the
   * current blocks share a common parent, moves them out of & after it.
   */ moveBlocksDown() {
        nr(this);
    }
    /**
   * Exports blocks into a simplified HTML string. To better conform to HTML standards, children of blocks which aren't list
   * items are un-nested in the output HTML.
   *
   * @param blocks An array of blocks that should be serialized into HTML.
   * @returns The blocks, serialized as an HTML string.
   */ async blocksToHTMLLossy() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.document;
        return Ee(this.pmSchema, this).exportBlocks(t, {});
    }
    /**
   * Serializes blocks into an HTML string in the format that would normally be rendered by the editor.
   *
   * Use this method if you want to server-side render HTML (for example, a blog post that has been edited in BlockNote)
   * and serve it to users without loading the editor on the client (i.e.: displaying the blog post)
   *
   * @param blocks An array of blocks that should be serialized into HTML.
   * @returns The blocks, serialized as an HTML string.
   */ async blocksToFullHTML(t) {
        return Si(this.pmSchema, this).serializeBlocks(t, {});
    }
    /**
   * Parses blocks from an HTML string. Tries to create `Block` objects out of any HTML block-level elements, and
   * `InlineNode` objects from any HTML inline elements, though not all element types are recognized. If BlockNote
   * doesn't recognize an HTML element's tag, it will parse it as a paragraph or plain text.
   * @param html The HTML string to parse blocks from.
   * @returns The blocks parsed from the HTML string.
   */ async tryParseHTMLToBlocks(t) {
        return lo(t, this.schema.blockSchema, this.schema.inlineContentSchema, this.schema.styleSchema, this.pmSchema);
    }
    /**
   * Serializes blocks into a Markdown string. The output is simplified as Markdown does not support all features of
   * BlockNote - children of blocks which aren't list items are un-nested and certain styles are removed.
   * @param blocks An array of blocks that should be serialized into Markdown.
   * @returns The blocks, serialized as a Markdown string.
   */ async blocksToMarkdownLossy() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.document;
        return vr(t, this.pmSchema, this, {});
    }
    /**
   * Creates a list of blocks from a Markdown string. Tries to create `Block` and `InlineNode` objects based on
   * Markdown syntax, though not all symbols are recognized. If BlockNote doesn't recognize a symbol, it will parse it
   * as text.
   * @param markdown The Markdown string to parse blocks from.
   * @returns The blocks parsed from the Markdown string.
   */ async tryParseMarkdownToBlocks(t) {
        return Tr(t, this.schema.blockSchema, this.schema.inlineContentSchema, this.schema.styleSchema, this.pmSchema);
    }
    /**
   * Updates the user info for the current user that's shown to other collaborators.
   */ updateCollaborationUserInfo(t) {
        if (!this.options.collaboration) throw new Error("Cannot update collaboration user info when collaboration is disabled.");
        this._tiptapEditor.commands.updateUser(t);
    }
    /**
   * A callback function that runs whenever the editor's contents change.
   *
   * @param callback The callback to execute.
   * @returns A function to remove the callback.
   */ onChange(t) {
        if (this.headless) return;
        const o = ()=>{
            t(this);
        };
        return this._tiptapEditor.on("update", o), ()=>{
            this._tiptapEditor.off("update", o);
        };
    }
    /**
   * A callback function that runs whenever the text cursor position or selection changes.
   *
   * @param callback The callback to execute.
   * @returns A function to remove the callback.
   */ onSelectionChange(t) {
        if (this.headless) return;
        const o = ()=>{
            t(this);
        };
        return this._tiptapEditor.on("selectionUpdate", o), ()=>{
            this._tiptapEditor.off("selectionUpdate", o);
        };
    }
    openSuggestionMenu(t, o) {
        var r;
        const i = (r = this.prosemirrorView) == null ? void 0 : r.state.tr;
        if (!i) return;
        const n = o && o.deleteTriggerCharacter ? i.insertText(t) : i;
        this.prosemirrorView.focus(), this.prosemirrorView.dispatch(n.scrollIntoView().setMeta(this.suggestionMenus.plugin, {
            triggerCharacter: t,
            deleteTriggerCharacter: (o == null ? void 0 : o.deleteTriggerCharacter) || !1,
            ignoreQueryLength: (o == null ? void 0 : o.ignoreQueryLength) || !1
        }));
    }
    constructor(t){
        p(this, "_pmSchema");
        /**
     * extensions that are added to the editor, can be tiptap extensions or prosemirror plugins
     */ p(this, "extensions", {});
        /**
     * Boolean indicating whether the editor is in headless mode.
     * Headless mode means we can use features like importing / exporting blocks,
     * but there's no underlying editor (UI) instantiated.
     *
     * You probably don't need to set this manually, but use the `server-util` package instead that uses this option internally
     */ p(this, "headless", !1);
        p(this, "_tiptapEditor");
        // TODO: Type should actually reflect that it can be `undefined` in headless mode
        /**
     * Used by React to store a reference to an `ElementRenderer` helper utility to make sure we can render React elements
     * in the correct context (used by `ReactRenderUtil`)
     */ p(this, "elementRenderer", null);
        /**
     * Cache of all blocks. This makes sure we don't have to "recompute" blocks if underlying Prosemirror Nodes haven't changed.
     * This is especially useful when we want to keep track of the same block across multiple operations,
     * with this cache, blocks stay the same object reference (referential equality with ===).
     */ p(this, "blockCache", /* @__PURE__ */ new WeakMap());
        /**
     * The dictionary contains translations for the editor.
     */ p(this, "dictionary");
        /**
     * The schema of the editor. The schema defines which Blocks, InlineContent, and Styles are available in the editor.
     */ p(this, "schema");
        p(this, "blockImplementations");
        p(this, "inlineContentImplementations");
        p(this, "styleImplementations");
        p(this, "formattingToolbar");
        p(this, "linkToolbar");
        p(this, "sideMenu");
        p(this, "suggestionMenus");
        p(this, "filePanel");
        p(this, "tableHandles");
        /**
     * The `uploadFile` method is what the editor uses when files need to be uploaded (for example when selecting an image to upload).
     * This method should set when creating the editor as this is application-specific.
     *
     * `undefined` means the application doesn't support file uploads.
     *
     * @param file The file that should be uploaded.
     * @returns The URL of the uploaded file OR an object containing props that should be set on the file block (such as an id)
     */ p(this, "uploadFile");
        p(this, "onUploadStartCallbacks", []);
        p(this, "onUploadEndCallbacks", []);
        p(this, "resolveFileUrl");
        /**
     * Mount the editor to a parent DOM element. Call mount(undefined) to clean up
     *
     * @warning Not needed to call manually when using React, use BlockNoteView to take care of mounting
     */ p(this, "mount", (t, o)=>{
            this._tiptapEditor.mount(t, o);
        });
        var l, d, c, u, m, h, f;
        this.options = t;
        const o = t;
        if (o.onEditorContentChange) throw new Error("onEditorContentChange initialization option is deprecated, use <BlockNoteView onChange={...} />, the useEditorChange(...) hook, or editor.onChange(...)");
        if (o.onTextCursorPositionChange) throw new Error("onTextCursorPositionChange initialization option is deprecated, use <BlockNoteView onSelectionChange={...} />, the useEditorSelectionChange(...) hook, or editor.onSelectionChange(...)");
        if (o.onEditorReady) throw new Error("onEditorReady is deprecated. Editor is immediately ready for use after creation.");
        if (o.editable) throw new Error("editable initialization option is deprecated, use <BlockNoteView editable={true/false} />, or alternatively editor.isEditable = true/false");
        this.dictionary = t.dictionary || Bt;
        const i = {
            defaultStyles: !0,
            schema: t.schema || fe.create(),
            _headless: !1,
            ...t,
            placeholders: {
                ...this.dictionary.placeholders,
                ...t.placeholders
            }
        };
        var _i_animations, _this_options_dropCursor;
        if (this.schema = i.schema, this.blockImplementations = i.schema.blockSpecs, this.inlineContentImplementations = i.schema.inlineContentSpecs, this.styleImplementations = i.schema.styleSpecs, this.extensions = Ca({
            editor: this,
            domAttributes: i.domAttributes || {},
            blockSpecs: this.schema.blockSpecs,
            styleSpecs: this.schema.styleSpecs,
            inlineContentSpecs: this.schema.inlineContentSpecs,
            collaboration: i.collaboration,
            trailingBlock: i.trailingBlock,
            disableExtensions: i.disableExtensions,
            setIdAttribute: i.setIdAttribute,
            animations: (_i_animations = i.animations) !== null && _i_animations !== void 0 ? _i_animations : !0,
            tableHandles: L("table", this),
            dropCursor: (_this_options_dropCursor = this.options.dropCursor) !== null && _this_options_dropCursor !== void 0 ? _this_options_dropCursor : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$dropcursor$40$1$2e$8$2e$2$2f$node_modules$2f$prosemirror$2d$dropcursor$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dropCursor"],
            placeholders: i.placeholders,
            tabBehavior: i.tabBehavior,
            sideMenuDetection: i.sideMenuDetection || "viewport"
        }), (((l = i._tiptapOptions) == null ? void 0 : l.extensions) || []).forEach((g)=>{
            this.extensions[g.name] = g;
        }), Object.entries(i._extensions || {}).forEach((param)=>{
            let [g, b] = param;
            typeof b == "function" && (b = b(this)), this.extensions[g] = b;
        }), this.formattingToolbar = this.extensions.formattingToolbar, this.linkToolbar = this.extensions.linkToolbar, this.sideMenu = this.extensions.sideMenu, this.suggestionMenus = this.extensions.suggestionMenus, this.filePanel = this.extensions.filePanel, this.tableHandles = this.extensions.tableHandles, i.uploadFile) {
            const g = i.uploadFile;
            this.uploadFile = async (b, k)=>{
                this.onUploadStartCallbacks.forEach((v)=>v.apply(this, [
                        k
                    ]));
                try {
                    return await g(b, k);
                } finally{
                    this.onUploadEndCallbacks.forEach((v)=>v.apply(this, [
                            k
                        ]));
                }
            };
        }
        this.resolveFileUrl = i.resolveFileUrl, this.headless = i._headless;
        const n = "collaboration" in this.extensions || "liveblocksExtension" in this.extensions;
        n && i.initialContent && console.warn("When using Collaboration, initialContent might cause conflicts, because changes should come from the collaboration provider");
        const r = i.initialContent || (n ? [
            {
                type: "paragraph",
                id: "initialBlockId"
            }
        ] : [
            {
                type: "paragraph",
                id: ue.options.generateID()
            }
        ]);
        if (!Array.isArray(r) || r.length === 0) throw new Error("initialContent must be a non-empty array of blocks, received: " + r);
        const a = [
            ...Object.entries(this.extensions).map((param)=>{
                let [g, b] = param;
                if (b instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"] || b instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"] || b instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"]) return b;
                if (!b.plugin) throw new Error("Extension should either be a TipTap extension or a ProseMirror plugin in a plugin property");
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
                    name: g,
                    addProseMirrorPlugins: ()=>[
                            b.plugin
                        ]
                });
            })
        ], s = {
            ...La,
            ...i._tiptapOptions,
            content: r,
            extensions: a,
            editorProps: {
                ...(d = i._tiptapOptions) == null ? void 0 : d.editorProps,
                attributes: {
                    // As of TipTap v2.5.0 the tabIndex is removed when the editor is not
                    // editable, so you can't focus it. We want to revert this as we have
                    // UI behaviour that relies on it.
                    tabIndex: "0",
                    ...(u = (c = i._tiptapOptions) == null ? void 0 : c.editorProps) == null ? void 0 : u.attributes,
                    ...(m = i.domAttributes) == null ? void 0 : m.editor,
                    class: F("bn-editor", i.defaultStyles ? "bn-default-styles" : "", ((f = (h = i.domAttributes) == null ? void 0 : h.editor) == null ? void 0 : f.class) || "")
                },
                transformPasted: Ta
            }
        };
        this.headless ? this._pmSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$core$40$2$2e$26$2e$1_$40$tiptap$2b$pm$40$2$2e$26$2e$1$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSchema"])(s.extensions) : (this._tiptapEditor = ve.create(s, this.schema.styleSchema), this._pmSchema = this._tiptapEditor.schema);
    }
}
const Ss = {
    gray: {
        text: "#9b9a97",
        background: "#ebeced"
    },
    brown: {
        text: "#64473a",
        background: "#e9e5e3"
    },
    red: {
        text: "#e03e3e",
        background: "#fbe4e4"
    },
    orange: {
        text: "#d9730d",
        background: "#f6e9d9"
    },
    yellow: {
        text: "#dfab01",
        background: "#fbf3db"
    },
    green: {
        text: "#4d6461",
        background: "#ddedea"
    },
    blue: {
        text: "#0b6e99",
        background: "#ddebf1"
    },
    purple: {
        text: "#6940a5",
        background: "#eae4f2"
    },
    pink: {
        text: "#ad1a72",
        background: "#f4dfeb"
    }
}, Bs = {
    gray: {
        text: "#bebdb8",
        background: "#9b9a97"
    },
    brown: {
        text: "#8e6552",
        background: "#64473a"
    },
    red: {
        text: "#ec4040",
        background: "#be3434"
    },
    orange: {
        text: "#e3790d",
        background: "#b7600a"
    },
    yellow: {
        text: "#dfab01",
        background: "#b58b00"
    },
    green: {
        text: "#6b8b87",
        background: "#4d6461"
    },
    blue: {
        text: "#0e87bc",
        background: "#0b6e99"
    },
    purple: {
        text: "#8552d7",
        background: "#6940a5"
    },
    pink: {
        text: "#da208f",
        background: "#ad1a72"
    }
};
class Ts {
    async resolveFile(t) {
        var i;
        if (!((i = this.options) != null && i.resolveFileUrl)) return (await fetch(t)).blob();
        const o = await this.options.resolveFileUrl(t);
        return o instanceof Blob ? o : (await fetch(o)).blob();
    }
    mapStyles(t) {
        return Object.entries(t).map((param)=>{
            let [i, n] = param;
            return this.mappings.styleMapping[i](n, this);
        });
    }
    mapInlineContent(t) {
        return this.mappings.inlineContentMapping[t.type](t, this);
    }
    transformInlineContent(t) {
        return t.map((o)=>this.mapInlineContent(o));
    }
    async mapBlock(t, o, i) {
        return this.mappings.blockMapping[t.type](t, this, o, i);
    }
    constructor(t, o, i){
        this.mappings = o, this.options = i;
    }
}
function Ms(e) {
    return {
        createBlockMapping: (t)=>t,
        createInlineContentMapping: (t)=>t,
        createStyleMapping: (t)=>t
    };
}
let _e, Pe;
async function Ls(e, t) {
    if (!Xn("text", e)) return [];
    if (!_e) {
        _e = __turbopack_context__.r("[project]/node_modules/.pnpm/@emoji-mart+data@1.2.1/node_modules/@emoji-mart/data/sets/15/native.json (json, async loader)")(__turbopack_context__.i), Pe = await __turbopack_context__.r("[project]/node_modules/.pnpm/emoji-mart@5.6.0/node_modules/emoji-mart/dist/module.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
        const n = (await _e).default;
        await Pe.init({
            data: n
        });
    }
    const o = (await _e).default;
    return (t.trim() === "" ? Object.values(o.emojis) : await Pe.SearchIndex.search(t)).map((n)=>({
            id: n.skins[0].native,
            onItemClick: ()=>e.insertInlineContent(n.skins[0].native + " ")
        }));
}
function Is(e) {
    for(var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        t[_key - 1] = arguments[_key];
    }
    const o = [
        ...e
    ];
    for (const i of t)for (const n of i){
        const r = o.findLastIndex((a)=>a.group === n.group);
        r === -1 ? o.push(n) : o.splice(r + 1, 0, n);
    }
    return o;
}
function Ne() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return typeof e == "string" ? [
        {
            type: "text",
            text: e,
            styles: {}
        }
    ] : e;
}
function le(e) {
    return typeof e == "string" ? Ne(e) : Array.isArray(e) ? e.flatMap((t)=>typeof t == "string" ? Ne(t) : Tt(t) ? {
            ...t,
            content: Ne(t.content)
        } : de(t) ? t : {
            props: {},
            ...t,
            content: le(t.content)
        }) : (e == null ? void 0 : e.type) === "tableContent" ? {
        type: "tableContent",
        columnWidths: e.columnWidths,
        rows: e.rows.map((t)=>({
                ...t,
                cells: t.cells.map((o)=>le(o))
            }))
    } : e;
}
function As(e, t) {
    return t.map((o)=>bo(e.blockSchema, o));
}
function bo(e, t) {
    var n;
    const o = e[t.type].content, i = {
        id: "",
        type: t.type,
        props: {},
        content: o === "inline" ? [] : o === "table" ? {
            type: "tableContent",
            columnWidths: [],
            rows: []
        } : void 0,
        children: [],
        ...t
    };
    if (Object.entries(e[t.type].propSchema).forEach((param)=>{
        let [r, a] = param;
        i.props[r] === void 0 && a.default !== void 0 && (i.props[r] = a.default);
    }), o === "inline") {
        const r = i.content;
        i.content = le(r);
    } else if (o === "table") {
        const r = i.content;
        i.content = {
            type: "tableContent",
            columnWidths: (r == null ? void 0 : r.columnWidths) || ((n = r == null ? void 0 : r.rows[0]) == null ? void 0 : n.cells.map(()=>{})) || [],
            rows: (r == null ? void 0 : r.rows.map((a)=>({
                    cells: a.cells.map((s)=>le(s))
                }))) || []
        };
    }
    return {
        ...i,
        content: le(i.content),
        children: i.children.map((r)=>bo(e, r))
    };
}
function Ia(e) {
    e.id || (e.id = ue.options.generateID()), e.children && Aa(e.children);
}
function Aa(e) {
    for (const t of e)Ia(t);
}
;
 //# sourceMappingURL=blocknote.js.map
}),
}]);

//# sourceMappingURL=45981_%40blocknote_core_dist_blocknote_c46b3ec3.js.map