(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
}]);

//# sourceMappingURL=src_lib_utils_localStorage_ts_a7e3736b._.js.map