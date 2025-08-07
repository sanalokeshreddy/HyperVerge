(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/oniguruma-to-es@2.3.0/node_modules/oniguruma-to-es/dist/esm/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/utils.js
__turbopack_context__.s({
    "EmulatedRegExp": ()=>EmulatedRegExp,
    "toDetails": ()=>toDetails,
    "toOnigurumaAst": ()=>toOnigurumaAst,
    "toRegExp": ()=>toRegExp
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
// src/transform.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$emoji$2d$regex$2d$xs$40$1$2e$0$2e$0$2f$node_modules$2f$emoji$2d$regex$2d$xs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/emoji-regex-xs@1.0.0/node_modules/emoji-regex-xs/index.mjs [app-client] (ecmascript)");
// src/generate.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$regex$40$5$2e$1$2e$1$2f$node_modules$2f$regex$2f$src$2f$internals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/regex@5.1.1/node_modules/regex/src/internals.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$regex$40$5$2e$1$2e$1$2f$node_modules$2f$regex$2f$src$2f$subclass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/regex@5.1.1/node_modules/regex/src/subclass.js [app-client] (ecmascript)");
// src/index.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$regex$40$5$2e$1$2e$1$2f$node_modules$2f$regex$2f$src$2f$atomic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/regex@5.1.1/node_modules/regex/src/atomic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$regex$2d$recursion$40$5$2e$1$2e$1$2f$node_modules$2f$regex$2d$recursion$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/regex-recursion@5.1.1/node_modules/regex-recursion/src/index.js [app-client] (ecmascript)");
;
;
;
;
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "[p{Alpha}p{Nd}]"
    ], [
        "[\\p{Alpha}\\p{Nd}]"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "p{Alpha}"
    ], [
        "\\p{Alpha}"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "p{ASCII}"
    ], [
        "\\p{ASCII}"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "[p{Zs}	]"
    ], [
        "[\\p{Zs}\\t]"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
function _templateObject4() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "p{cntrl}"
    ], [
        "\\p{cntrl}"
    ]);
    _templateObject4 = function() {
        return data;
    };
    return data;
}
function _templateObject5() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "p{Nd}"
    ], [
        "\\p{Nd}"
    ]);
    _templateObject5 = function() {
        return data;
    };
    return data;
}
function _templateObject6() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "[P{space}&&P{cntrl}&&P{Cn}&&P{Cs}]"
    ], [
        "[\\P{space}&&\\P{cntrl}&&\\P{Cn}&&\\P{Cs}]"
    ]);
    _templateObject6 = function() {
        return data;
    };
    return data;
}
function _templateObject7() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "p{Lower}"
    ], [
        "\\p{Lower}"
    ]);
    _templateObject7 = function() {
        return data;
    };
    return data;
}
function _templateObject8() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "[[P{space}&&P{cntrl}&&P{Cn}&&P{Cs}]p{Zs}]"
    ], [
        "[[\\P{space}&&\\P{cntrl}&&\\P{Cn}&&\\P{Cs}]\\p{Zs}]"
    ]);
    _templateObject8 = function() {
        return data;
    };
    return data;
}
function _templateObject9() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "[p{P}p{S}]"
    ], [
        "[\\p{P}\\p{S}]"
    ]);
    _templateObject9 = function() {
        return data;
    };
    return data;
}
function _templateObject10() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "p{space}"
    ], [
        "\\p{space}"
    ]);
    _templateObject10 = function() {
        return data;
    };
    return data;
}
function _templateObject11() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "p{Upper}"
    ], [
        "\\p{Upper}"
    ]);
    _templateObject11 = function() {
        return data;
    };
    return data;
}
function _templateObject12() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "[p{Alpha}p{M}p{Nd}p{Pc}]"
    ], [
        "[\\p{Alpha}\\p{M}\\p{Nd}\\p{Pc}]"
    ]);
    _templateObject12 = function() {
        return data;
    };
    return data;
}
function _templateObject13() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "p{AHex}"
    ], [
        "\\p{AHex}"
    ]);
    _templateObject13 = function() {
        return data;
    };
    return data;
}
function _templateObject14() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "[^?"
    ], [
        "\\[\\^?"
    ]);
    _templateObject14 = function() {
        return data;
    };
    return data;
}
function _templateObject15() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "[pP]{(?:^?[- _]*[A-Za-z][- w]*})?"
    ], [
        "[pP]\\{(?:\\^?[-\\x20_]*[A-Za-z][-\\x20\\w]*\\})?"
    ]);
    _templateObject15 = function() {
        return data;
    };
    return data;
}
function _templateObject16() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "x[89A-Fa-f]p{AHex}(?:\\x[89A-Fa-f]p{AHex})*"
    ], [
        "x[89A-Fa-f]\\p{AHex}(?:\\\\x[89A-Fa-f]\\p{AHex})*"
    ]);
    _templateObject16 = function() {
        return data;
    };
    return data;
}
function _templateObject17() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "u(?:p{AHex}{4})? | x{[^}]*}? | xp{AHex}{0,2}"
    ], [
        "u(?:\\p{AHex}{4})? | x\\{[^\\}]*\\}? | x\\p{AHex}{0,2}"
    ]);
    _templateObject17 = function() {
        return data;
    };
    return data;
}
function _templateObject18() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "o{[^}]*}?"
    ], [
        "o\\{[^\\}]*\\}?"
    ]);
    _templateObject18 = function() {
        return data;
    };
    return data;
}
function _templateObject19() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "d{1,3}"
    ], [
        "\\d{1,3}"
    ]);
    _templateObject19 = function() {
        return data;
    };
    return data;
}
function _templateObject20() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  \\ (?:\n    ",
        "\n    | [gk]<[^>]*>?\n    | [gk]'[^']*'?\n    | .\n  )\n  | ( (?: ? (?:\n    [:=!>(]\n    | <[=!]\n    | <[^>]*>\n    | '[^']*'\n    | ~|?\n    | # (?:[^)\\] | \\.?)*\n    | [imx-]+[:)]\n  )?)?\n  | ",
        "\n  | ",
        "\n  | .\n"
    ], [
        "\n  \\\\ (?:\n    ",
        "\n    | [gk]<[^>]*>?\n    | [gk]'[^']*'?\n    | .\n  )\n  | \\( (?: \\? (?:\n    [:=!>(]\n    | <[=!]\n    | <[^>]*>\n    | '[^']*'\n    | ~\\|?\n    | # (?:[^)\\\\] | \\\\.?)*\n    | [imx\\-]+[:)]\n  )?)?\n  | ",
        "\n  | ",
        "\n  | .\n"
    ]);
    _templateObject20 = function() {
        return data;
    };
    return data;
}
function _templateObject21() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  \\ (?:\n    ",
        "\n    | .\n  )\n  | [:[^:]*:]\n  | ",
        "\n  | &&\n  | .\n"
    ], [
        "\n  \\\\ (?:\n    ",
        "\n    | .\n  )\n  | \\[:[^:]*:\\]\n  | ",
        "\n  | &&\n  | .\n"
    ]);
    _templateObject21 = function() {
        return data;
    };
    return data;
}
function _templateObject22() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "A"
    ], [
        "\\A"
    ]);
    _templateObject22 = function() {
        return data;
    };
    return data;
}
function _templateObject23() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "Z"
    ], [
        "\\Z"
    ]);
    _templateObject23 = function() {
        return data;
    };
    return data;
}
function _templateObject24() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "o{"
    ], [
        "\\o{"
    ]);
    _templateObject24 = function() {
        return data;
    };
    return data;
}
function _templateObject25() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        'Incomplete escape ""'
    ], [
        'Incomplete escape "\\"'
    ]);
    _templateObject25 = function() {
        return data;
    };
    return data;
}
function _templateObject26() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        'Octal encoded byte above 177 unsupported "',
        '"'
    ]);
    _templateObject26 = function() {
        return data;
    };
    return data;
}
function _templateObject27() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "Subroutine uses a group name that's not defined \"g<",
        '>"'
    ], [
        "Subroutine uses a group name that's not defined \"\\g<",
        '>"'
    ]);
    _templateObject27 = function() {
        return data;
    };
    return data;
}
function _templateObject28() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        'Subroutine uses a duplicate group name "g<',
        '>"'
    ], [
        'Subroutine uses a duplicate group name "\\g<',
        '>"'
    ]);
    _templateObject28 = function() {
        return data;
    };
    return data;
}
function _templateObject29() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "B"
    ], [
        "\\B"
    ]);
    _templateObject29 = function() {
        return data;
    };
    return data;
}
function _templateObject30() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        'Unicode property "p{',
        '}" unsupported in Oniguruma'
    ], [
        'Unicode property "\\p{',
        '}" unsupported in Oniguruma'
    ]);
    _templateObject30 = function() {
        return data;
    };
    return data;
}
function _templateObject31() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "(?=z|\n)"
    ], [
        "(?=\\z|\\n)"
    ]);
    _templateObject31 = function() {
        return data;
    };
    return data;
}
function _templateObject32() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "(?<=A|\n(?!z))"
    ], [
        "(?<=\\A|\\n(?!\\z))"
    ]);
    _templateObject32 = function() {
        return data;
    };
    return data;
}
function _templateObject33() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        'Uses "G" in a way that requires a subclass'
    ], [
        'Uses "\\G" in a way that requires a subclass'
    ]);
    _templateObject33 = function() {
        return data;
    };
    return data;
}
function _templateObject34() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "(?=\n?z)"
    ], [
        "(?=\\n?\\z)"
    ]);
    _templateObject34 = function() {
        return data;
    };
    return data;
}
function _templateObject35() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "[^\n]"
    ], [
        "[^\\n]"
    ]);
    _templateObject35 = function() {
        return data;
    };
    return data;
}
function _templateObject36() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        'Uses "K" in a way that\'s unsupported'
    ], [
        'Uses "\\K" in a way that\'s unsupported'
    ]);
    _templateObject36 = function() {
        return data;
    };
    return data;
}
function _templateObject37() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        'Uses "G" in a way that requires non-strict accuracy'
    ], [
        'Uses "\\G" in a way that requires non-strict accuracy'
    ]);
    _templateObject37 = function() {
        return data;
    };
    return data;
}
function _templateObject38() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        'Use of "X" requires non-strict accuracy'
    ], [
        'Use of "\\X" requires non-strict accuracy'
    ]);
    _templateObject38 = function() {
        return data;
    };
    return data;
}
function _templateObject39() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "p{RGI_Emoji}"
    ], [
        "\\p{RGI_Emoji}"
    ]);
    _templateObject39 = function() {
        return data;
    };
    return data;
}
function _templateObject40() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "(?>\r\n|",
        "|P{M}p{M}*)"
    ], [
        "(?>\\r\\n|",
        "|\\P{M}\\p{M}*)"
    ]);
    _templateObject40 = function() {
        return data;
    };
    return data;
}
function _templateObject41() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "[p{L}p{M}p{N}p{Pc}]"
    ], [
        "[\\p{L}\\p{M}\\p{N}\\p{Pc}]"
    ]);
    _templateObject41 = function() {
        return data;
    };
    return data;
}
function _templateObject42() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "	"
    ], [
        "\\t"
    ]);
    _templateObject42 = function() {
        return data;
    };
    return data;
}
function _templateObject43() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n"
    ], [
        "\\n"
    ]);
    _templateObject43 = function() {
        return data;
    };
    return data;
}
function _templateObject44() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\v"
    ], [
        "\\v"
    ]);
    _templateObject44 = function() {
        return data;
    };
    return data;
}
function _templateObject45() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\f"
    ], [
        "\\f"
    ]);
    _templateObject45 = function() {
        return data;
    };
    return data;
}
function _templateObject46() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\r"
    ], [
        "\\r"
    ]);
    _templateObject46 = function() {
        return data;
    };
    return data;
}
function _templateObject47() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\u2028"
    ], [
        "\\u2028"
    ]);
    _templateObject47 = function() {
        return data;
    };
    return data;
}
function _templateObject48() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\u2029"
    ], [
        "\\u2029"
    ]);
    _templateObject48 = function() {
        return data;
    };
    return data;
}
function _templateObject49() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\uFEFF"
    ], [
        "\\uFEFF"
    ]);
    _templateObject49 = function() {
        return data;
    };
    return data;
}
function _templateObject50() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "B"
    ], [
        "\\B"
    ]);
    _templateObject50 = function() {
        return data;
    };
    return data;
}
function _templateObject51() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\b"
    ], [
        "\\b"
    ]);
    _templateObject51 = function() {
        return data;
    };
    return data;
}
function _templateObject52() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "[^\n]"
    ], [
        "[^\\n]"
    ]);
    _templateObject52 = function() {
        return data;
    };
    return data;
}
function _templateObject53() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "D"
    ], [
        "\\D"
    ]);
    _templateObject53 = function() {
        return data;
    };
    return data;
}
function _templateObject54() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "d"
    ], [
        "\\d"
    ]);
    _templateObject54 = function() {
        return data;
    };
    return data;
}
function _templateObject55() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "P"
    ], [
        "\\P"
    ]);
    _templateObject55 = function() {
        return data;
    };
    return data;
}
function _templateObject56() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "p"
    ], [
        "\\p"
    ]);
    _templateObject56 = function() {
        return data;
    };
    return data;
}
function _templateObject57() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "W"
    ], [
        "\\W"
    ]);
    _templateObject57 = function() {
        return data;
    };
    return data;
}
function _templateObject58() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "w"
    ], [
        "\\w"
    ]);
    _templateObject58 = function() {
        return data;
    };
    return data;
}
function _templateObject59() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "g<",
        "&R=",
        ">"
    ], [
        "\\g<",
        "&R=",
        ">"
    ]);
    _templateObject59 = function() {
        return data;
    };
    return data;
}
var /**
  @private
  @type {string | null}
  */ _strategy;
var cp = String.fromCodePoint;
var r = String.raw;
var envSupportsFlagGroups = (()=>{
    try {
        new RegExp("(?i:)");
    } catch (e) {
        return false;
    }
    return true;
})();
var envSupportsFlagV = (()=>{
    try {
        new RegExp("", "v");
    } catch (e) {
        return false;
    }
    return true;
})();
function getNewCurrentFlags(current, param) {
    let { enable, disable } = param;
    return {
        dotAll: !(disable === null || disable === void 0 ? void 0 : disable.dotAll) && !!((enable === null || enable === void 0 ? void 0 : enable.dotAll) || current.dotAll),
        ignoreCase: !(disable === null || disable === void 0 ? void 0 : disable.ignoreCase) && !!((enable === null || enable === void 0 ? void 0 : enable.ignoreCase) || current.ignoreCase)
    };
}
function getOrCreate(map, key, defaultValue) {
    if (!map.has(key)) {
        map.set(key, defaultValue);
    }
    return map.get(key);
}
function isMinTarget(target, min) {
    return EsVersion[target] >= EsVersion[min];
}
function throwIfNot(value, msg) {
    if (!value) {
        throw new Error(msg !== null && msg !== void 0 ? msg : "Value expected");
    }
    return value;
}
// src/options.js
var EsVersion = {
    ES2025: 2025,
    ES2024: 2024,
    ES2018: 2018
};
var Target = /** @type {const} */ {
    auto: "auto",
    ES2025: "ES2025",
    ES2024: "ES2024",
    ES2018: "ES2018"
};
function getOptions(options) {
    if ((options === null || options === void 0 ? void 0 : options.target) !== void 0 && !Target[options.target]) {
        throw new Error('Unexpected target "'.concat(options.target, '"'));
    }
    const opts = {
        // Sets the level of emulation rigor/strictness.
        accuracy: "default",
        // Disables advanced emulation that relies on returning a `RegExp` subclass, resulting in
        // certain patterns not being emulatable.
        avoidSubclass: false,
        // Oniguruma flags; a string with `i`, `m`, `x`, `D`, `S`, `W` in any order (all optional).
        // Oniguruma's `m` is equivalent to JavaScript's `s` (`dotAll`).
        flags: "",
        // Include JavaScript flag `g` (`global`) in the result.
        global: false,
        // Include JavaScript flag `d` (`hasIndices`) in the result.
        hasIndices: false,
        // JavaScript version used for generated regexes. Using `auto` detects the best value based on
        // your environment. Later targets allow faster processing, simpler generated source, and
        // support for additional features.
        target: "auto",
        // Disables optimizations that simplify the pattern when it doesn't change the meaning.
        verbose: false,
        ...options,
        // Advanced options that override standard behavior, error checking, and flags when enabled.
        rules: {
            // Useful with TextMate grammars that merge backreferences across patterns.
            allowOrphanBackrefs: false,
            // Use ASCII-based `\b` and `\B`, which increases search performance of generated regexes.
            asciiWordBoundaries: false,
            // Allow unnamed captures and numbered calls (backreferences and subroutines) when using
            // named capture. This is Oniguruma option `ONIG_OPTION_CAPTURE_GROUP`; on by default in
            // `vscode-oniguruma`.
            captureGroup: false,
            // Change the recursion depth limit from Oniguruma's `20` to an integer `2`–`20`.
            recursionLimit: 20,
            // `^` as `\A`; `$` as`\Z`. Improves search performance of generated regexes without changing
            // meaning if searching line by line. This is Oniguruma option `ONIG_OPTION_SINGLELINE`.
            singleline: false,
            ...options === null || options === void 0 ? void 0 : options.rules
        }
    };
    if (opts.target === "auto") {
        opts.target = envSupportsFlagGroups ? "ES2025" : envSupportsFlagV ? "ES2024" : "ES2018";
    }
    return opts;
}
// src/unicode.js
var CharsWithoutIgnoreCaseExpansion = /* @__PURE__ */ new Set([
    cp(304),
    // İ
    cp(305)
]);
function getIgnoreCaseMatchChars(char) {
    if (CharsWithoutIgnoreCaseExpansion.has(char)) {
        return [
            char
        ];
    }
    const set = /* @__PURE__ */ new Set();
    const lower = char.toLowerCase();
    const upper = lower.toUpperCase();
    const title = LowerToTitleCaseMap.get(lower);
    const altLower = LowerToAlternativeLowerCaseMap.get(lower);
    const altUpper = LowerToAlternativeUpperCaseMap.get(lower);
    if ([
        ...upper
    ].length === 1) {
        set.add(upper);
    }
    altUpper && set.add(altUpper);
    title && set.add(title);
    set.add(lower);
    altLower && set.add(altLower);
    return [
        ...set
    ];
}
var JsUnicodeProperties = new Set("C Other\nCc Control cntrl\nCf Format\nCn Unassigned\nCo Private_Use\nCs Surrogate\nL Letter\nLC Cased_Letter\nLl Lowercase_Letter\nLm Modifier_Letter\nLo Other_Letter\nLt Titlecase_Letter\nLu Uppercase_Letter\nM Mark Combining_Mark\nMc Spacing_Mark\nMe Enclosing_Mark\nMn Nonspacing_Mark\nN Number\nNd Decimal_Number digit\nNl Letter_Number\nNo Other_Number\nP Punctuation punct\nPc Connector_Punctuation\nPd Dash_Punctuation\nPe Close_Punctuation\nPf Final_Punctuation\nPi Initial_Punctuation\nPo Other_Punctuation\nPs Open_Punctuation\nS Symbol\nSc Currency_Symbol\nSk Modifier_Symbol\nSm Math_Symbol\nSo Other_Symbol\nZ Separator\nZl Line_Separator\nZp Paragraph_Separator\nZs Space_Separator\nASCII\nASCII_Hex_Digit AHex\nAlphabetic Alpha\nAny\nAssigned\nBidi_Control Bidi_C\nBidi_Mirrored Bidi_M\nCase_Ignorable CI\nCased\nChanges_When_Casefolded CWCF\nChanges_When_Casemapped CWCM\nChanges_When_Lowercased CWL\nChanges_When_NFKC_Casefolded CWKCF\nChanges_When_Titlecased CWT\nChanges_When_Uppercased CWU\nDash\nDefault_Ignorable_Code_Point DI\nDeprecated Dep\nDiacritic Dia\nEmoji\nEmoji_Component EComp\nEmoji_Modifier EMod\nEmoji_Modifier_Base EBase\nEmoji_Presentation EPres\nExtended_Pictographic ExtPict\nExtender Ext\nGrapheme_Base Gr_Base\nGrapheme_Extend Gr_Ext\nHex_Digit Hex\nIDS_Binary_Operator IDSB\nIDS_Trinary_Operator IDST\nID_Continue IDC\nID_Start IDS\nIdeographic Ideo\nJoin_Control Join_C\nLogical_Order_Exception LOE\nLowercase Lower\nMath\nNoncharacter_Code_Point NChar\nPattern_Syntax Pat_Syn\nPattern_White_Space Pat_WS\nQuotation_Mark QMark\nRadical\nRegional_Indicator RI\nSentence_Terminal STerm\nSoft_Dotted SD\nTerminal_Punctuation Term\nUnified_Ideograph UIdeo\nUppercase Upper\nVariation_Selector VS\nWhite_Space space\nXID_Continue XIDC\nXID_Start XIDS".split(/\s/));
var JsUnicodePropertiesMap = /* @__PURE__ */ new Map();
for (const p of JsUnicodeProperties){
    JsUnicodePropertiesMap.set(slug(p), p);
}
var JsUnicodePropertiesOfStrings = /* @__PURE__ */ new Set([
    // ES2024 properties of strings; none are supported by Oniguruma
    "Basic_Emoji",
    "Emoji_Keycap_Sequence",
    "RGI_Emoji",
    "RGI_Emoji_Flag_Sequence",
    "RGI_Emoji_Modifier_Sequence",
    "RGI_Emoji_Tag_Sequence",
    "RGI_Emoji_ZWJ_Sequence"
]);
var JsUnicodePropertiesOfStringsMap = /* @__PURE__ */ new Map();
for (const p of JsUnicodePropertiesOfStrings){
    JsUnicodePropertiesOfStringsMap.set(slug(p), p);
}
var LowerToAlternativeLowerCaseMap = /* @__PURE__ */ new Map([
    [
        "s",
        cp(383)
    ],
    // s, ſ
    [
        cp(383),
        "s"
    ]
]);
var LowerToAlternativeUpperCaseMap = /* @__PURE__ */ new Map([
    [
        cp(223),
        cp(7838)
    ],
    // ß, ẞ
    [
        cp(107),
        cp(8490)
    ],
    // k, K (Kelvin)
    [
        cp(229),
        cp(8491)
    ],
    // å, Å (Angstrom)
    [
        cp(969),
        cp(8486)
    ]
]);
var LowerToTitleCaseMap = new Map([
    titleEntry(453),
    titleEntry(456),
    titleEntry(459),
    titleEntry(498),
    ...titleRange(8072, 8079),
    ...titleRange(8088, 8095),
    ...titleRange(8104, 8111),
    titleEntry(8124),
    titleEntry(8140),
    titleEntry(8188)
]);
var PosixClassesMap = /* @__PURE__ */ new Map([
    [
        "alnum",
        r(_templateObject())
    ],
    [
        "alpha",
        r(_templateObject1())
    ],
    [
        "ascii",
        r(_templateObject2())
    ],
    [
        "blank",
        r(_templateObject3())
    ],
    [
        "cntrl",
        r(_templateObject4())
    ],
    [
        "digit",
        r(_templateObject5())
    ],
    [
        "graph",
        r(_templateObject6())
    ],
    [
        "lower",
        r(_templateObject7())
    ],
    [
        "print",
        r(_templateObject8())
    ],
    [
        "punct",
        r(_templateObject9())
    ],
    // New value from Oniguruma 6.9.9
    [
        "space",
        r(_templateObject10())
    ],
    [
        "upper",
        r(_templateObject11())
    ],
    [
        "word",
        r(_templateObject12())
    ],
    [
        "xdigit",
        r(_templateObject13())
    ]
]);
var PosixProperties = /* @__PURE__ */ new Set([
    "alnum",
    "blank",
    "graph",
    "print",
    "word",
    "xdigit"
]);
function range(start, end) {
    const range2 = [];
    for(let i = start; i <= end; i++){
        range2.push(i);
    }
    return range2;
}
function slug(name) {
    return name.replace(/[- _]+/g, "").toLowerCase();
}
function titleEntry(codePoint) {
    const char = cp(codePoint);
    return [
        char.toLowerCase(),
        char
    ];
}
function titleRange(start, end) {
    return range(start, end).map((codePoint)=>titleEntry(codePoint));
}
var UnicodePropertiesWithSpecificCase = /* @__PURE__ */ new Set([
    "Lower",
    "Lowercase",
    "Upper",
    "Uppercase",
    "Ll",
    "Lowercase_Letter",
    "Lt",
    "Titlecase_Letter",
    "Lu",
    "Uppercase_Letter"
]);
// src/tokenize.js
var TokenTypes = /** @type {const} */ {
    Alternator: "Alternator",
    Assertion: "Assertion",
    Backreference: "Backreference",
    Character: "Character",
    CharacterClassClose: "CharacterClassClose",
    CharacterClassHyphen: "CharacterClassHyphen",
    CharacterClassIntersector: "CharacterClassIntersector",
    CharacterClassOpen: "CharacterClassOpen",
    CharacterSet: "CharacterSet",
    Directive: "Directive",
    GroupClose: "GroupClose",
    GroupOpen: "GroupOpen",
    Subroutine: "Subroutine",
    Quantifier: "Quantifier",
    // These aren't allowed in char classes, so they aren't equivalent to JS `[\q{}]`
    VariableLengthCharacterSet: "VariableLengthCharacterSet",
    // Intermediate representation not included in results
    EscapedNumber: "EscapedNumber"
};
var TokenCharacterSetKinds = {
    any: "any",
    digit: "digit",
    dot: "dot",
    hex: "hex",
    non_newline: "non_newline",
    posix: "posix",
    property: "property",
    space: "space",
    word: "word"
};
var TokenDirectiveKinds = {
    flags: "flags",
    keep: "keep"
};
var TokenGroupKinds = {
    absent_repeater: "absent_repeater",
    atomic: "atomic",
    capturing: "capturing",
    group: "group",
    lookahead: "lookahead",
    lookbehind: "lookbehind"
};
var EscapeCharCodes = /* @__PURE__ */ new Map([
    [
        "a",
        7
    ],
    // alert/bell (Not available in JS)
    [
        "b",
        8
    ],
    // backspace (only in char classes)
    [
        "e",
        27
    ],
    // escape (Not available in JS)
    [
        "f",
        12
    ],
    // form feed
    [
        "n",
        10
    ],
    // line feed
    [
        "r",
        13
    ],
    // carriage return
    [
        "t",
        9
    ],
    // horizontal tab
    [
        "v",
        11
    ]
]);
var charClassOpenPattern = r(_templateObject14());
var sharedEscapesPattern = "c.? | C(?:-.?)?|".concat(// `\p{gc=L}` are invalid
r(_templateObject15()), "|").concat(r(_templateObject16()), "|").concat(r(_templateObject17()), "|").concat(r(_templateObject18()), "|").concat(r(_templateObject19()));
var quantifierRe = /[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/;
var tokenRe = new RegExp(r(_templateObject20(), sharedEscapesPattern, quantifierRe.source, charClassOpenPattern).replace(/\s+/g, ""), "gsu");
var charClassTokenRe = new RegExp(r(_templateObject21(), sharedEscapesPattern, charClassOpenPattern).replace(/\s+/g, ""), "gsu");
function tokenize(pattern) {
    let flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", rules = arguments.length > 2 ? arguments[2] : void 0;
    rules = {
        // `ONIG_OPTION_CAPTURE_GROUP`
        captureGroup: false,
        // `ONIG_OPTION_SINGLELINE`
        singleline: false,
        ...rules
    };
    if (typeof pattern !== "string") {
        throw new Error("String expected as pattern");
    }
    if (!/^[imxDSW]*$/.test(flags)) {
        throw new Error('Flags "'.concat(flags, '" includes unsupported value'));
    }
    const extended = flags.includes("x");
    const xStack = [
        extended
    ];
    const context = {
        captureGroup: rules.captureGroup,
        getCurrentModX: ()=>xStack.at(-1),
        numOpenGroups: 0,
        popModX () {
            xStack.pop();
        },
        pushModX (isXOn) {
            xStack.push(isXOn);
        },
        replaceCurrentModX (isXOn) {
            xStack[xStack.length - 1] = isXOn;
        },
        singleline: rules.singleline
    };
    let tokens = [];
    let match;
    tokenRe.lastIndex = 0;
    while(match = tokenRe.exec(pattern)){
        const result = getTokenWithDetails(context, pattern, match[0], tokenRe.lastIndex);
        if (result.tokens) {
            tokens.push(...result.tokens);
        } else if (result.token) {
            tokens.push(result.token);
        }
        if (result.lastIndex !== void 0) {
            tokenRe.lastIndex = result.lastIndex;
        }
    }
    const potentialUnnamedCaptureTokens = [];
    let numNamedAndOptInUnnamedCaptures = 0;
    tokens.forEach((t)=>{
        if (t.type === TokenTypes.GroupOpen) {
            if (t.kind === TokenGroupKinds.capturing) {
                t.number = ++numNamedAndOptInUnnamedCaptures;
            } else if (t.raw === "(") {
                potentialUnnamedCaptureTokens.push(t);
            }
        }
    });
    if (!numNamedAndOptInUnnamedCaptures) {
        potentialUnnamedCaptureTokens.forEach((t, i)=>{
            t.kind = TokenGroupKinds.capturing;
            t.number = i + 1;
        });
    }
    const numCaptures = numNamedAndOptInUnnamedCaptures || potentialUnnamedCaptureTokens.length;
    tokens = tokens.map((t)=>t.type === TokenTypes.EscapedNumber ? splitEscapedNumToken(t, numCaptures) : t).flat();
    return {
        tokens,
        flags: {
            ignoreCase: flags.includes("i"),
            // Flag m is called `multiline` in Onig, but that has a different meaning in JS. Onig flag m
            // is equivalent to JS flag s
            dotAll: flags.includes("m"),
            // Flag x is fully handled during tokenization
            extended,
            // Flags D, S, W are currently only supported as top-level flags
            digitIsAscii: flags.includes("D"),
            spaceIsAscii: flags.includes("S"),
            wordIsAscii: flags.includes("W")
        },
        rules
    };
}
function getTokenWithDetails(context, pattern, m, lastIndex) {
    const [m0, m1, m2] = m;
    if (m0 === "[") {
        const result = getAllTokensForCharClass(pattern, m, lastIndex);
        return {
            // Array of all of the char class's tokens
            tokens: result.tokens,
            // Jump forward to the end of the char class
            lastIndex: result.lastIndex
        };
    }
    if (m0 === "\\") {
        if ("AbBGzZ".includes(m1)) {
            return {
                token: createToken(TokenTypes.Assertion, m, {
                    kind: m
                })
            };
        }
        if (/^\\g[<']/.test(m)) {
            if (!/^\\g(?:<[^>]+>|'[^']+')$/.test(m)) {
                throw new Error('Invalid group name "'.concat(m, '"'));
            }
            return {
                token: createToken(TokenTypes.Subroutine, m)
            };
        }
        if (/^\\k[<']/.test(m)) {
            if (!/^\\k(?:<[^>]+>|'[^']+')$/.test(m)) {
                throw new Error('Invalid group name "'.concat(m, '"'));
            }
            return {
                token: createToken(TokenTypes.Backreference, m)
            };
        }
        if (m1 === "K") {
            return {
                token: createToken(TokenTypes.Directive, m, {
                    kind: TokenDirectiveKinds.keep
                })
            };
        }
        if (m1 === "N") {
            return {
                token: createToken(TokenTypes.CharacterSet, m, {
                    kind: TokenCharacterSetKinds.non_newline
                })
            };
        }
        if (m1 === "O") {
            return {
                token: createToken(TokenTypes.CharacterSet, m, {
                    kind: TokenCharacterSetKinds.any
                })
            };
        }
        if ("RX".includes(m1)) {
            return {
                token: createToken(TokenTypes.VariableLengthCharacterSet, m, {
                    kind: m
                })
            };
        }
        if ("yY".includes(m1)) {
            throw new Error('Unsupported grapheme boundary "'.concat(m, '"'));
        }
        const result = createTokenForSharedEscape(m, {
            inCharClass: false
        });
        return Array.isArray(result) ? {
            tokens: result
        } : {
            token: result
        };
    }
    if (m0 === "(") {
        if (m2 === "#") {
            if (pattern[lastIndex] !== ")") {
                throw new Error('Unclosed comment group "(?#"');
            }
            return {
                lastIndex: lastIndex + 1
            };
        }
        if ("-imx".includes(m2)) {
            return {
                token: createTokenForFlagMod(m, context)
            };
        }
        context.pushModX(context.getCurrentModX());
        context.numOpenGroups++;
        if (// Unnamed capture if no named captures present and `captureGroup` not enabled, else
        // noncapturing group
        m === "(" && !context.captureGroup || // Noncapturing group
        m === "(?:") {
            return {
                token: createToken(TokenTypes.GroupOpen, m, {
                    // For `(`, will later change to `capturing` and add `number` prop if no named captures
                    kind: TokenGroupKinds.group
                })
            };
        }
        if (m === "(?>") {
            return {
                token: createToken(TokenTypes.GroupOpen, m, {
                    kind: TokenGroupKinds.atomic
                })
            };
        }
        if (m === "(?=" || m === "(?!" || m === "(?<=" || m === "(?<!") {
            return {
                token: createToken(TokenTypes.GroupOpen, m, {
                    kind: m2 === "<" ? TokenGroupKinds.lookbehind : TokenGroupKinds.lookahead,
                    negate: m.endsWith("!")
                })
            };
        }
        if (m2 === "<" || m2 === "'" || m === "(" && context.captureGroup) {
            const token = createToken(TokenTypes.GroupOpen, m, {
                kind: TokenGroupKinds.capturing
            });
            if (m !== "(") {
                token.name = m.slice(3, -1);
            }
            return {
                token
            };
        }
        if (m2 === "~") {
            if (m === "(?~|") {
                throw new Error('Unsupported absent function kind "'.concat(m, '"'));
            }
            return {
                token: createToken(TokenTypes.GroupOpen, m, {
                    kind: TokenGroupKinds.absent_repeater
                })
            };
        }
        if (m2 === "(") {
            throw new Error('Unsupported conditional "'.concat(m, '"'));
        }
        if (m === "(?") {
            throw new Error("Invalid group");
        }
        throw new Error('Unexpected group "'.concat(m, '"'));
    }
    if (m === ")") {
        context.popModX();
        context.numOpenGroups--;
        if (context.numOpenGroups < 0) {
            throw new Error('Unmatched ")"');
        }
        return {
            token: createToken(TokenTypes.GroupClose, m)
        };
    }
    if (m === "#" && context.getCurrentModX()) {
        const end = pattern.indexOf("\n", lastIndex);
        return {
            // Jump forward to the end of the comment
            lastIndex: end === -1 ? pattern.length : end
        };
    }
    if (/^\s$/.test(m) && context.getCurrentModX()) {
        const re = /\s+/y;
        re.lastIndex = lastIndex;
        const rest = re.exec(pattern);
        return {
            // Jump forward to the end of the whitespace
            lastIndex: rest ? re.lastIndex : lastIndex
        };
    }
    if (m === ".") {
        return {
            token: createToken(TokenTypes.CharacterSet, m, {
                kind: TokenCharacterSetKinds.dot
            })
        };
    }
    if (m === "^" || m === "$") {
        const kind = context.singleline ? ({
            "^": r(_templateObject22()),
            "$": r(_templateObject23())
        })[m] : m;
        return {
            token: createToken(TokenTypes.Assertion, m, {
                kind
            })
        };
    }
    if (m === "|") {
        return {
            token: createToken(TokenTypes.Alternator, m)
        };
    }
    if (quantifierRe.test(m)) {
        return {
            token: createTokenForQuantifier(m)
        };
    }
    assertSingleCodePoint(m);
    return {
        token: createToken(TokenTypes.Character, m, {
            value: m.codePointAt(0)
        })
    };
}
function getAllTokensForCharClass(pattern, opener, lastIndex) {
    const tokens = [
        createToken(TokenTypes.CharacterClassOpen, opener, {
            negate: opener[1] === "^"
        })
    ];
    let numCharClassesOpen = 1;
    let match;
    charClassTokenRe.lastIndex = lastIndex;
    while(match = charClassTokenRe.exec(pattern)){
        const m = match[0];
        if (m[0] === "[" && m[1] !== ":") {
            numCharClassesOpen++;
            tokens.push(createToken(TokenTypes.CharacterClassOpen, m, {
                negate: m[1] === "^"
            }));
        } else if (m === "]") {
            if (tokens.at(-1).type === TokenTypes.CharacterClassOpen) {
                tokens.push(createToken(TokenTypes.Character, m, {
                    value: 93
                }));
            } else {
                numCharClassesOpen--;
                tokens.push(createToken(TokenTypes.CharacterClassClose, m));
                if (!numCharClassesOpen) {
                    break;
                }
            }
        } else {
            const result = createTokenForAnyTokenWithinCharClass(m);
            if (Array.isArray(result)) {
                tokens.push(...result);
            } else {
                tokens.push(result);
            }
        }
    }
    return {
        tokens,
        lastIndex: charClassTokenRe.lastIndex || pattern.length
    };
}
function createTokenForAnyTokenWithinCharClass(raw) {
    if (raw[0] === "\\") {
        return createTokenForSharedEscape(raw, {
            inCharClass: true
        });
    }
    if (raw[0] === "[") {
        const posix = RegExp("\\[:(?<negate>\\^?)(?<name>[a-z]+):\\]").exec(raw);
        if (!posix || !PosixClassesMap.get(posix.groups.name)) {
            throw new Error('Invalid POSIX class "'.concat(raw, '"'));
        }
        return createToken(TokenTypes.CharacterSet, raw, {
            kind: TokenCharacterSetKinds.posix,
            negate: !!posix.groups.negate,
            value: posix.groups.name
        });
    }
    if (raw === "-") {
        return createToken(TokenTypes.CharacterClassHyphen, raw);
    }
    if (raw === "&&") {
        return createToken(TokenTypes.CharacterClassIntersector, raw);
    }
    assertSingleCodePoint(raw);
    return createToken(TokenTypes.Character, raw, {
        value: raw.codePointAt(0)
    });
}
function createTokenForSharedEscape(raw, param) {
    let { inCharClass } = param;
    const char1 = raw[1];
    if (char1 === "c" || char1 === "C") {
        return createTokenForControlChar(raw);
    }
    if ("dDhHsSwW".includes(char1)) {
        return createTokenForShorthandCharClass(raw);
    }
    if (raw.startsWith(r(_templateObject24()))) {
        throw new Error('Incomplete, invalid, or unsupported octal code point "'.concat(raw, '"'));
    }
    if (/^\\[pP]\{/.test(raw)) {
        if (raw.length === 3) {
            throw new Error('Incomplete or invalid Unicode property "'.concat(raw, '"'));
        }
        return createTokenForUnicodeProperty(raw);
    }
    if (RegExp("^\\\\x[89A-Fa-f]\\p{AHex}", "u").test(raw)) {
        try {
            const bytes = raw.split(/\\x/).slice(1).map((hex)=>parseInt(hex, 16));
            const decoded = new TextDecoder("utf-8", {
                ignoreBOM: true,
                fatal: true
            }).decode(new Uint8Array(bytes));
            const encoder = new TextEncoder();
            const tokens = [
                ...decoded
            ].map((char)=>{
                const raw2 = [
                    ...encoder.encode(char)
                ].map((byte)=>"\\x".concat(byte.toString(16))).join("");
                return createToken(TokenTypes.Character, raw2, {
                    value: char.codePointAt(0)
                });
            });
            return tokens;
        } catch (e) {
            throw new Error('Multibyte code "'.concat(raw, '" incomplete or invalid in Oniguruma'));
        }
    }
    if (char1 === "u" || char1 === "x") {
        return createToken(TokenTypes.Character, raw, {
            value: getValidatedHexCharCode(raw)
        });
    }
    if (EscapeCharCodes.has(char1)) {
        return createToken(TokenTypes.Character, raw, {
            value: EscapeCharCodes.get(char1)
        });
    }
    if (/\d/.test(char1)) {
        return createToken(TokenTypes.EscapedNumber, raw, {
            inCharClass
        });
    }
    if (raw === "\\") {
        throw new Error(r(_templateObject25()));
    }
    if (char1 === "M") {
        throw new Error('Unsupported meta "'.concat(raw, '"'));
    }
    if ([
        ...raw
    ].length === 2) {
        return createToken(TokenTypes.Character, raw, {
            value: raw.codePointAt(1)
        });
    }
    throw new Error('Unexpected escape "'.concat(raw, '"'));
}
function createToken(type, raw, data) {
    return {
        type,
        raw,
        ...data
    };
}
function createTokenForControlChar(raw) {
    const char = raw[1] === "c" ? raw[2] : raw[3];
    if (!char || !/[A-Za-z]/.test(char)) {
        throw new Error('Unsupported control character "'.concat(raw, '"'));
    }
    return createToken(TokenTypes.Character, raw, {
        value: char.toUpperCase().codePointAt(0) - 64
    });
}
function createTokenForFlagMod(raw, context) {
    let { on, off } = RegExp("^\\(\\?(?<on>[imx]*)(?:-(?<off>[imx\\-]*))?").exec(raw).groups;
    off !== null && off !== void 0 ? off : off = "";
    const isXOn = (context.getCurrentModX() || on.includes("x")) && !off.includes("x");
    const enabledFlags = getFlagPropsForToken(on);
    const disabledFlags = getFlagPropsForToken(off);
    const flagChanges = {};
    enabledFlags && (flagChanges.enable = enabledFlags);
    disabledFlags && (flagChanges.disable = disabledFlags);
    if (raw.endsWith(")")) {
        context.replaceCurrentModX(isXOn);
        return createToken(TokenTypes.Directive, raw, {
            kind: TokenDirectiveKinds.flags,
            flags: flagChanges
        });
    }
    if (raw.endsWith(":")) {
        context.pushModX(isXOn);
        context.numOpenGroups++;
        const token = createToken(TokenTypes.GroupOpen, raw, {
            kind: TokenGroupKinds.group
        });
        if (enabledFlags || disabledFlags) {
            token.flags = flagChanges;
        }
        return token;
    }
    throw new Error('Unexpected flag modifier "'.concat(raw, '"'));
}
function createTokenForQuantifier(raw) {
    const data = {};
    if (raw[0] === "{") {
        const { min, max } = RegExp("^\\{(?<min>\\d*)(?:,(?<max>\\d*))?").exec(raw).groups;
        const limit = 1e5;
        if (+min > limit || +max > limit) {
            throw new Error("Quantifier value unsupported in Oniguruma");
        }
        data.min = +min;
        data.max = max === void 0 ? +min : max === "" ? Infinity : +max;
        data.greedy = !raw.endsWith("?");
        data.possessive = false;
    } else {
        data.min = raw[0] === "+" ? 1 : 0;
        data.max = raw[0] === "?" ? 1 : Infinity;
        data.greedy = raw[1] !== "?";
        data.possessive = raw[1] === "+";
    }
    return createToken(TokenTypes.Quantifier, raw, data);
}
function createTokenForShorthandCharClass(raw) {
    const lower = raw[1].toLowerCase();
    return createToken(TokenTypes.CharacterSet, raw, {
        kind: {
            "d": TokenCharacterSetKinds.digit,
            "h": TokenCharacterSetKinds.hex,
            // Not available in JS
            "s": TokenCharacterSetKinds.space,
            // Different than JS
            "w": TokenCharacterSetKinds.word
        }[lower],
        negate: raw[1] !== lower
    });
}
function createTokenForUnicodeProperty(raw) {
    const { p, neg, value } = RegExp("^\\\\(?<p>[pP])\\{(?<neg>\\^?)(?<value>[^}]+)").exec(raw).groups;
    const negate = p === "P" && !neg || p === "p" && !!neg;
    return createToken(TokenTypes.CharacterSet, raw, {
        kind: TokenCharacterSetKinds.property,
        negate,
        value
    });
}
function getFlagPropsForToken(flags) {
    const obj = {};
    if (flags.includes("i")) {
        obj.ignoreCase = true;
    }
    if (flags.includes("m")) {
        obj.dotAll = true;
    }
    if (flags.includes("x")) {
        obj.extended = true;
    }
    return Object.keys(obj).length ? obj : null;
}
function getValidatedHexCharCode(raw) {
    if (RegExp("^(?:\\\\u(?!\\p{AHex}{4})|\\\\x(?!\\p{AHex}{1,2}|\\{\\p{AHex}{1,8}\\}))", "u").test(raw)) {
        throw new Error('Incomplete or invalid escape "'.concat(raw, '"'));
    }
    const hex = raw[2] === "{" ? RegExp("^\\\\x\\{\\s*(?<hex>\\p{AHex}+)", "u").exec(raw).groups.hex : raw.slice(2);
    const dec = parseInt(hex, 16);
    return dec;
}
function splitEscapedNumToken(token, numCaptures) {
    const { raw, inCharClass } = token;
    const value = raw.slice(1);
    if (!inCharClass && // Single digit 1-9 outside a char class is always treated as a backref
    (value !== "0" && value.length === 1 || // Leading 0 makes it octal; backrefs can't include following literal digits
    value[0] !== "0" && +value <= numCaptures)) {
        return [
            createToken(TokenTypes.Backreference, raw)
        ];
    }
    const tokens = [];
    const matches = value.match(/^[0-7]+|\d/g);
    for(let i = 0; i < matches.length; i++){
        const m = matches[i];
        let value2;
        if (i === 0 && m !== "8" && m !== "9") {
            value2 = parseInt(m, 8);
            if (value2 > 127) {
                throw new Error(r(_templateObject26(), raw));
            }
        } else {
            value2 = m.codePointAt(0);
        }
        tokens.push(createToken(TokenTypes.Character, (i === 0 ? "\\" : "") + m, {
            value: value2
        }));
    }
    return tokens;
}
function assertSingleCodePoint(raw) {
    if ([
        ...raw
    ].length !== 1) {
        throw new Error('Expected "'.concat(raw, '" to be a single code point'));
    }
}
// src/utils-ast.js
function hasOnlyChild(param, kidFn) {
    let { alternatives } = param;
    return alternatives.length === 1 && alternatives[0].elements.length === 1 && (!kidFn || kidFn(alternatives[0].elements[0]));
}
function isAlwaysZeroLength(param) {
    let { type } = param;
    return type === AstTypes.Assertion || type === AstTypes.Directive;
}
function isAlwaysNonZeroLength(node) {
    const types = [
        AstTypes.Character,
        AstTypes.CharacterClass,
        AstTypes.CharacterSet
    ];
    return types.includes(node.type) || node.type === AstTypes.Quantifier && node.min && types.includes(node.element.type);
}
function isConsumptiveGroup(param) {
    let { type } = param;
    return type === AstTypes.CapturingGroup || type === AstTypes.Group;
}
function isLookaround(param) {
    let { type, kind } = param;
    return type === AstTypes.Assertion && (kind === AstAssertionKinds.lookahead || kind === AstAssertionKinds.lookbehind);
}
// src/traverse.js
function traverse(path, state, visitor) {
    let ast = path.node;
    while(ast.parent){
        ast = ast.parent;
    }
    function traverseArray(array, parent) {
        for(let i = 0; i < array.length; i++){
            const keyShift = traverseNode(array[i], parent, i, array);
            i = Math.max(-1, i + keyShift);
        }
    }
    function traverseNode(node) {
        let parent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, key = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, container = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
        let keyShift = 0;
        let skipTraversingKidsOfPath = false;
        const path2 = {
            node,
            parent,
            key,
            container,
            ast,
            remove () {
                throwIfNot(container, "Container expected").splice(Math.max(0, key + keyShift), 1);
                keyShift -= 1;
            },
            removeAllNextSiblings () {
                return throwIfNot(container, "Container expected").splice(key + 1);
            },
            removeAllPrevSiblings () {
                const shifted = key + keyShift;
                keyShift -= shifted;
                return throwIfNot(container, "Container expected").splice(0, Math.max(0, shifted));
            },
            replaceWith (newNode) {
                setParent(newNode, parent);
                if (container) {
                    container[Math.max(0, key + keyShift)] = newNode;
                } else {
                    parent[key] = newNode;
                }
            },
            skip () {
                skipTraversingKidsOfPath = true;
            }
        };
        const visitorKey = getAstTypeAliases(node).find((key2)=>!!visitor[key2]);
        const methods = visitorKey && visitor[visitorKey];
        const enterFn = typeof methods === "function" ? methods : methods === null || methods === void 0 ? void 0 : methods.enter;
        const exitFn = methods === null || methods === void 0 ? void 0 : methods.exit;
        enterFn === null || enterFn === void 0 ? void 0 : enterFn(path2, state);
        if (!skipTraversingKidsOfPath) {
            switch(node.type){
                case AstTypes.Regex:
                    traverseNode(node.pattern, node, "pattern");
                    traverseNode(node.flags, node, "flags");
                    break;
                case AstTypes.Alternative:
                case AstTypes.CharacterClass:
                    traverseArray(node.elements, node);
                    break;
                case AstTypes.Assertion:
                    if (isLookaround(node)) {
                        traverseArray(node.alternatives, node);
                    }
                    break;
                case AstTypes.Backreference:
                case AstTypes.Character:
                case AstTypes.CharacterSet:
                case AstTypes.Directive:
                case AstTypes.Flags:
                case AstTypes.Recursion:
                case AstTypes.Subroutine:
                case AstTypes.VariableLengthCharacterSet:
                    break;
                case AstTypes.AbsentFunction:
                case AstTypes.CapturingGroup:
                case AstTypes.Group:
                case AstTypes.Pattern:
                    traverseArray(node.alternatives, node);
                    break;
                case AstTypes.CharacterClassIntersection:
                    traverseArray(node.classes, node);
                    break;
                case AstTypes.CharacterClassRange:
                    traverseNode(node.min, node, "min");
                    traverseNode(node.max, node, "max");
                    break;
                case AstTypes.Quantifier:
                    traverseNode(node.element, node, "element");
                    break;
                default:
                    throw new Error('Unexpected node type "'.concat(node.type, '"'));
            }
        }
        exitFn === null || exitFn === void 0 ? void 0 : exitFn(path2, state);
        return keyShift;
    }
    traverseNode(path.node, path.parent, path.key, path.container);
}
var AstTypeAliases = {
    AnyGroup: "AnyGroup",
    AnyNode: "AnyNode"
};
function getAstTypeAliases(node) {
    const types = [
        AstTypeAliases.AnyNode
    ];
    if (isConsumptiveGroup(node) || isLookaround(node)) {
        types.push(AstTypeAliases.AnyGroup);
    }
    types.push(node.type);
    return types;
}
function setParent(node, parent) {
    if ("parent" in parent) {
        node.parent = parent;
    }
}
// src/parse.js
var AstTypes = {
    AbsentFunction: "AbsentFunction",
    Alternative: "Alternative",
    Assertion: "Assertion",
    Backreference: "Backreference",
    CapturingGroup: "CapturingGroup",
    Character: "Character",
    CharacterClass: "CharacterClass",
    CharacterClassIntersection: "CharacterClassIntersection",
    CharacterClassRange: "CharacterClassRange",
    CharacterSet: "CharacterSet",
    Directive: "Directive",
    Flags: "Flags",
    Group: "Group",
    Pattern: "Pattern",
    Quantifier: "Quantifier",
    Regex: "Regex",
    Subroutine: "Subroutine",
    VariableLengthCharacterSet: "VariableLengthCharacterSet",
    // Used only by the transformer for Regex+ ASTs
    Recursion: "Recursion"
};
var AstAbsentFunctionKinds = {
    // See <github.com/slevithan/oniguruma-to-es/issues/13>
    repeater: "repeater"
};
var AstAssertionKinds = {
    line_end: "line_end",
    line_start: "line_start",
    lookahead: "lookahead",
    lookbehind: "lookbehind",
    search_start: "search_start",
    string_end: "string_end",
    string_end_newline: "string_end_newline",
    string_start: "string_start",
    word_boundary: "word_boundary"
};
var AstCharacterSetKinds = TokenCharacterSetKinds;
var AstDirectiveKinds = TokenDirectiveKinds;
var AstVariableLengthCharacterSetKinds = {
    grapheme: "grapheme",
    newline: "newline"
};
function parse(param, options) {
    let { tokens, flags, rules } = param;
    const opts = {
        skipBackrefValidation: false,
        skipLookbehindValidation: false,
        skipPropertyNameValidation: false,
        verbose: false,
        ...options
    };
    const context = {
        capturingGroups: [],
        current: 0,
        hasNumberedRef: false,
        namedGroupsByName: /* @__PURE__ */ new Map(),
        parent: null,
        skipBackrefValidation: opts.skipBackrefValidation,
        skipLookbehindValidation: opts.skipLookbehindValidation,
        skipPropertyNameValidation: opts.skipPropertyNameValidation,
        subroutines: [],
        token: null,
        tokens,
        verbose: opts.verbose,
        walk
    };
    function walk(parent, state) {
        const token = tokens[context.current];
        context.parent = parent;
        context.token = token;
        context.current++;
        switch(token.type){
            case TokenTypes.Alternator:
                return createAlternative();
            case TokenTypes.Assertion:
                return createAssertionFromToken(token);
            case TokenTypes.Backreference:
                return parseBackreference(context);
            case TokenTypes.Character:
                return createCharacter(token.value, {
                    useLastValid: !!state.isCheckingRangeEnd
                });
            case TokenTypes.CharacterClassHyphen:
                return parseCharacterClassHyphen(context, state);
            case TokenTypes.CharacterClassOpen:
                return parseCharacterClassOpen(context, state);
            case TokenTypes.CharacterSet:
                return parseCharacterSet(context);
            case TokenTypes.Directive:
                return createDirectiveFromToken(token);
            case TokenTypes.GroupOpen:
                return parseGroupOpen(context, state);
            case TokenTypes.Quantifier:
                return parseQuantifier(context);
            case TokenTypes.Subroutine:
                return parseSubroutine(context);
            case TokenTypes.VariableLengthCharacterSet:
                return createVariableLengthCharacterSet(token.kind);
            default:
                throw new Error('Unexpected token type "'.concat(token.type, '"'));
        }
    }
    const ast = createRegex(createPattern(), createFlags(flags));
    let top = ast.pattern.alternatives[0];
    while(context.current < tokens.length){
        const node = walk(top, {});
        if (node.type === AstTypes.Alternative) {
            ast.pattern.alternatives.push(node);
            top = node;
        } else {
            top.elements.push(node);
        }
    }
    const { capturingGroups, hasNumberedRef, namedGroupsByName, subroutines } = context;
    if (hasNumberedRef && namedGroupsByName.size && !rules.captureGroup) {
        throw new Error("Numbered backref/subroutine not allowed when using named capture");
    }
    for (const { ref } of subroutines){
        if (typeof ref === "number") {
            if (ref > capturingGroups.length) {
                throw new Error("Subroutine uses a group number that's not defined");
            }
        } else if (!namedGroupsByName.has(ref)) {
            throw new Error(r(_templateObject27(), ref));
        } else if (namedGroupsByName.get(ref).length > 1) {
            throw new Error(r(_templateObject28(), ref));
        }
    }
    traverse({
        node: ast
    }, null, {
        AnyNode (param) {
            let { node, parent } = param;
            node.parent = parent;
        }
    });
    return ast;
}
function parseBackreference(context) {
    const { raw } = context.token;
    const hasKWrapper = /^\\k[<']/.test(raw);
    const ref = hasKWrapper ? raw.slice(3, -1) : raw.slice(1);
    const fromNum = function(num) {
        let isRelative = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        const numCapturesToLeft = context.capturingGroups.length;
        let orphan = false;
        if (num > numCapturesToLeft) {
            if (context.skipBackrefValidation) {
                orphan = true;
            } else {
                throw new Error('Not enough capturing groups defined to the left "'.concat(raw, '"'));
            }
        }
        context.hasNumberedRef = true;
        return createBackreference(isRelative ? numCapturesToLeft + 1 - num : num, {
            orphan
        });
    };
    if (hasKWrapper) {
        const numberedRef = RegExp("^(?<sign>-?)0*(?<num>[1-9]\\d*)$").exec(ref);
        if (numberedRef) {
            return fromNum(+numberedRef.groups.num, !!numberedRef.groups.sign);
        }
        if (/[-+]/.test(ref)) {
            throw new Error('Invalid backref name "'.concat(raw, '"'));
        }
        if (!context.namedGroupsByName.has(ref)) {
            throw new Error('Group name not defined to the left "'.concat(raw, '"'));
        }
        return createBackreference(ref);
    }
    return fromNum(+ref);
}
function parseCharacterClassHyphen(context, state) {
    const { parent, tokens, walk } = context;
    const prevSiblingNode = parent.elements.at(-1);
    const nextToken = tokens[context.current];
    if (!state.isCheckingRangeEnd && prevSiblingNode && prevSiblingNode.type !== AstTypes.CharacterClass && prevSiblingNode.type !== AstTypes.CharacterClassRange && nextToken && nextToken.type !== TokenTypes.CharacterClassOpen && nextToken.type !== TokenTypes.CharacterClassClose && nextToken.type !== TokenTypes.CharacterClassIntersector) {
        const nextNode = walk(parent, {
            ...state,
            isCheckingRangeEnd: true
        });
        if (prevSiblingNode.type === AstTypes.Character && nextNode.type === AstTypes.Character) {
            parent.elements.pop();
            return createCharacterClassRange(prevSiblingNode, nextNode);
        }
        throw new Error("Invalid character class range");
    }
    return createCharacter(45);
}
function parseCharacterClassOpen(context, state) {
    const { token, tokens, verbose, walk } = context;
    const firstClassToken = tokens[context.current];
    let node = createCharacterClass({
        negate: token.negate
    });
    const intersection = node.elements[0];
    let nextToken = throwIfUnclosedCharacterClass(firstClassToken);
    while(nextToken.type !== TokenTypes.CharacterClassClose){
        if (nextToken.type === TokenTypes.CharacterClassIntersector) {
            intersection.classes.push(createCharacterClass({
                negate: false,
                baseOnly: true
            }));
            context.current++;
        } else {
            const cc = intersection.classes.at(-1);
            cc.elements.push(walk(cc, state));
        }
        nextToken = throwIfUnclosedCharacterClass(tokens[context.current], firstClassToken);
    }
    if (!verbose) {
        optimizeCharacterClassIntersection(intersection);
    }
    if (intersection.classes.length === 1) {
        const cc = intersection.classes[0];
        cc.negate = node.negate !== cc.negate;
        node = cc;
    }
    context.current++;
    return node;
}
function parseCharacterSet(param) {
    let { token, skipPropertyNameValidation } = param;
    let { kind, negate, value } = token;
    if (kind === TokenCharacterSetKinds.property) {
        const normalized = slug(value);
        if (PosixProperties.has(normalized)) {
            kind = TokenCharacterSetKinds.posix;
            value = normalized;
        } else {
            return createUnicodeProperty(value, {
                negate,
                skipPropertyNameValidation
            });
        }
    }
    if (kind === TokenCharacterSetKinds.posix) {
        return {
            type: AstTypes.CharacterSet,
            kind: AstCharacterSetKinds.posix,
            negate,
            value
        };
    }
    return createCharacterSet(kind, {
        negate
    });
}
function parseGroupOpen(context, state) {
    const { token, tokens, capturingGroups, namedGroupsByName, skipLookbehindValidation, verbose, walk } = context;
    let node = createByGroupKind(token);
    const isAbsentFunction = node.type === AstTypes.AbsentFunction;
    const isLookbehind = node.kind === AstAssertionKinds.lookbehind;
    const isNegLookbehind = isLookbehind && node.negate;
    if (node.type === AstTypes.CapturingGroup) {
        capturingGroups.push(node);
        if (node.name) {
            getOrCreate(namedGroupsByName, node.name, []).push(node);
        }
    }
    if (isAbsentFunction && state.isInAbsentFunction) {
        throw new Error("Nested absent function not supported by Oniguruma");
    }
    let nextToken = throwIfUnclosedGroup(tokens[context.current]);
    while(nextToken.type !== TokenTypes.GroupClose){
        if (nextToken.type === TokenTypes.Alternator) {
            node.alternatives.push(createAlternative());
            context.current++;
        } else {
            const alt = node.alternatives.at(-1);
            const child = walk(alt, {
                ...state,
                isInAbsentFunction: state.isInAbsentFunction || isAbsentFunction,
                isInLookbehind: state.isInLookbehind || isLookbehind,
                isInNegLookbehind: state.isInNegLookbehind || isNegLookbehind
            });
            alt.elements.push(child);
            if ((isLookbehind || state.isInLookbehind) && !skipLookbehindValidation) {
                const msg = "Lookbehind includes a pattern not allowed by Oniguruma";
                if (isNegLookbehind || state.isInNegLookbehind) {
                    if (child.kind === AstAssertionKinds.lookahead || child.type === AstTypes.CapturingGroup) {
                        throw new Error(msg);
                    }
                } else {
                    if (child.kind === AstAssertionKinds.lookahead || child.kind === AstAssertionKinds.lookbehind && child.negate) {
                        throw new Error(msg);
                    }
                }
            }
        }
        nextToken = throwIfUnclosedGroup(tokens[context.current]);
    }
    if (!verbose) {
        node = getOptimizedGroup(node);
    }
    context.current++;
    return node;
}
function parseQuantifier(param) {
    let { token, parent } = param;
    const { min, max, greedy, possessive: possessive2 } = token;
    const quantifiedNode = parent.elements.at(-1);
    if (!quantifiedNode || quantifiedNode.type === AstTypes.Assertion || quantifiedNode.type === AstTypes.Directive) {
        throw new Error("Quantifier requires a repeatable token");
    }
    const node = createQuantifier(quantifiedNode, min, max, greedy, possessive2);
    parent.elements.pop();
    return node;
}
function parseSubroutine(context) {
    const { token, capturingGroups, subroutines } = context;
    let ref = token.raw.slice(3, -1);
    const numberedRef = RegExp("^(?<sign>[-+]?)0*(?<num>[1-9]\\d*)$").exec(ref);
    if (numberedRef) {
        const num = +numberedRef.groups.num;
        const numCapturesToLeft = capturingGroups.length;
        context.hasNumberedRef = true;
        ref = ({
            "": num,
            "+": numCapturesToLeft + num,
            "-": numCapturesToLeft + 1 - num
        })[numberedRef.groups.sign];
        if (ref < 1) {
            throw new Error("Invalid subroutine number");
        }
    } else if (ref === "0") {
        ref = 0;
    }
    const node = createSubroutine(ref);
    subroutines.push(node);
    return node;
}
function createAbsentFunction(kind) {
    if (kind !== AstAbsentFunctionKinds.repeater) {
        throw new Error('Unexpected absent function kind "'.concat(kind, '"'));
    }
    return {
        type: AstTypes.AbsentFunction,
        kind,
        alternatives: [
            createAlternative()
        ]
    };
}
function createAlternative() {
    return {
        type: AstTypes.Alternative,
        elements: []
    };
}
function createAssertion(kind, options) {
    const negate = !!(options === null || options === void 0 ? void 0 : options.negate);
    return {
        type: AstTypes.Assertion,
        kind,
        ...kind === AstAssertionKinds.word_boundary && {
            negate
        }
    };
}
function createAssertionFromToken(param) {
    let { kind } = param;
    return createAssertion(throwIfNot({
        "^": AstAssertionKinds.line_start,
        "$": AstAssertionKinds.line_end,
        "\\A": AstAssertionKinds.string_start,
        "\\b": AstAssertionKinds.word_boundary,
        "\\B": AstAssertionKinds.word_boundary,
        "\\G": AstAssertionKinds.search_start,
        "\\z": AstAssertionKinds.string_end,
        "\\Z": AstAssertionKinds.string_end_newline
    }[kind], 'Unexpected assertion kind "'.concat(kind, '"')), {
        negate: kind === r(_templateObject29())
    });
}
function createBackreference(ref, options) {
    const orphan = !!(options === null || options === void 0 ? void 0 : options.orphan);
    return {
        type: AstTypes.Backreference,
        ...orphan && {
            orphan
        },
        ref
    };
}
function createByGroupKind(param) {
    let { flags, kind, name, negate, number } = param;
    switch(kind){
        case TokenGroupKinds.absent_repeater:
            return createAbsentFunction(AstAbsentFunctionKinds.repeater);
        case TokenGroupKinds.atomic:
            return createGroup({
                atomic: true
            });
        case TokenGroupKinds.capturing:
            return createCapturingGroup(number, name);
        case TokenGroupKinds.group:
            return createGroup({
                flags
            });
        case TokenGroupKinds.lookahead:
        case TokenGroupKinds.lookbehind:
            return createLookaround({
                behind: kind === TokenGroupKinds.lookbehind,
                negate
            });
        default:
            throw new Error('Unexpected group kind "'.concat(kind, '"'));
    }
}
function createCapturingGroup(number, name) {
    const hasName = name !== void 0;
    if (hasName && !isValidGroupNameOniguruma(name)) {
        throw new Error('Group name "'.concat(name, '" invalid in Oniguruma'));
    }
    return {
        type: AstTypes.CapturingGroup,
        number,
        ...hasName && {
            name
        },
        alternatives: [
            createAlternative()
        ]
    };
}
function createCharacter(charCode, options) {
    const opts = {
        useLastValid: false,
        ...options
    };
    if (charCode > 1114111) {
        const hex = charCode.toString(16);
        if (opts.useLastValid) {
            charCode = 1114111;
        } else if (charCode > 1310719) {
            throw new Error('Invalid code point out of range "\\x{'.concat(hex, '}"'));
        } else {
            throw new Error('Invalid code point out of range in JS "\\x{'.concat(hex, '}"'));
        }
    }
    return {
        type: AstTypes.Character,
        value: charCode
    };
}
function createCharacterClass(options) {
    const opts = {
        baseOnly: false,
        negate: false,
        ...options
    };
    return {
        type: AstTypes.CharacterClass,
        negate: opts.negate,
        elements: opts.baseOnly ? [] : [
            createCharacterClassIntersection()
        ]
    };
}
function createCharacterClassIntersection() {
    return {
        type: AstTypes.CharacterClassIntersection,
        classes: [
            createCharacterClass({
                negate: false,
                baseOnly: true
            })
        ]
    };
}
function createCharacterClassRange(min, max) {
    if (max.value < min.value) {
        throw new Error("Character class range out of order");
    }
    return {
        type: AstTypes.CharacterClassRange,
        min,
        max
    };
}
function createCharacterSet(kind, param) {
    let { negate } = param;
    const node = {
        type: AstTypes.CharacterSet,
        kind: throwIfNot(AstCharacterSetKinds[kind], 'Unexpected character set kind "'.concat(kind, '"'))
    };
    if (kind === TokenCharacterSetKinds.digit || kind === TokenCharacterSetKinds.hex || kind === TokenCharacterSetKinds.space || kind === TokenCharacterSetKinds.word) {
        node.negate = negate;
    }
    return node;
}
function createDirectiveFromToken(param) {
    let { kind, flags } = param;
    const node = {
        type: AstTypes.Directive,
        kind: throwIfNot(AstDirectiveKinds[kind], 'Unexpected directive kind "'.concat(kind, '"'))
    };
    if (kind === TokenDirectiveKinds.flags) {
        node.flags = flags;
    }
    return node;
}
function createFlags(param) {
    let { ignoreCase, dotAll, extended, digitIsAscii, spaceIsAscii, wordIsAscii } = param;
    return {
        type: AstTypes.Flags,
        ignoreCase,
        dotAll,
        extended,
        digitIsAscii,
        spaceIsAscii,
        wordIsAscii
    };
}
function createGroup(options) {
    const atomic2 = options === null || options === void 0 ? void 0 : options.atomic;
    const flags = options === null || options === void 0 ? void 0 : options.flags;
    return {
        type: AstTypes.Group,
        ...atomic2 && {
            atomic: atomic2
        },
        ...flags && {
            flags
        },
        alternatives: [
            createAlternative()
        ]
    };
}
function createLookaround(options) {
    const opts = {
        behind: false,
        negate: false,
        ...options
    };
    return {
        type: AstTypes.Assertion,
        kind: opts.behind ? AstAssertionKinds.lookbehind : AstAssertionKinds.lookahead,
        negate: opts.negate,
        alternatives: [
            createAlternative()
        ]
    };
}
function createPattern() {
    return {
        type: AstTypes.Pattern,
        alternatives: [
            createAlternative()
        ]
    };
}
function createQuantifier(element, min, max) {
    let greedy = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, possessive2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    const node = {
        type: AstTypes.Quantifier,
        min,
        max,
        greedy,
        possessive: possessive2,
        element
    };
    if (max < min) {
        return {
            ...node,
            min: max,
            max: min,
            possessive: true
        };
    }
    return node;
}
function createRegex(pattern, flags) {
    return {
        type: AstTypes.Regex,
        pattern,
        flags
    };
}
function createSubroutine(ref) {
    return {
        type: AstTypes.Subroutine,
        ref
    };
}
function createUnicodeProperty(value, options) {
    const opts = {
        negate: false,
        skipPropertyNameValidation: false,
        ...options
    };
    return {
        type: AstTypes.CharacterSet,
        kind: AstCharacterSetKinds.property,
        value: opts.skipPropertyNameValidation ? value : getJsUnicodePropertyName(value),
        negate: opts.negate
    };
}
function createVariableLengthCharacterSet(kind) {
    return {
        type: AstTypes.VariableLengthCharacterSet,
        kind: throwIfNot({
            "\\R": AstVariableLengthCharacterSetKinds.newline,
            "\\X": AstVariableLengthCharacterSetKinds.grapheme
        }[kind], 'Unexpected varcharset kind "'.concat(kind, '"'))
    };
}
function getJsUnicodePropertyName(value) {
    const slugged = slug(value);
    if (JsUnicodePropertiesOfStringsMap.has(slugged)) {
        throw new Error(r(_templateObject30(), value));
    }
    const jsName = JsUnicodePropertiesMap.get(slugged);
    if (jsName) {
        return jsName;
    }
    return value.trim().replace(/[- _]+/g, "_").replace(/[A-Z][a-z]+(?=[A-Z])/g, "$&_").replace(/[A-Za-z]+/g, (m)=>m[0].toUpperCase() + m.slice(1).toLowerCase());
}
function getOptimizedGroup(node) {
    const firstAltFirstEl = node.alternatives[0].elements[0];
    if (node.type === AstTypes.Group && hasOnlyChild(node, (kid)=>kid.type === AstTypes.Group) && !(node.atomic && firstAltFirstEl.flags) && !(node.flags && (firstAltFirstEl.atomic || firstAltFirstEl.flags))) {
        if (node.atomic) {
            firstAltFirstEl.atomic = true;
        } else if (node.flags) {
            firstAltFirstEl.flags = node.flags;
        }
        return firstAltFirstEl;
    }
    return node;
}
function isValidGroupNameOniguruma(name) {
    return RegExp("^[\\p{Alpha}\\p{Pc}][^)]*$", "u").test(name);
}
function optimizeCharacterClassIntersection(intersection) {
    for(let i = 0; i < intersection.classes.length; i++){
        const cc = intersection.classes[i];
        const firstChild = cc.elements[0];
        if (cc.elements.length === 1 && firstChild.type === AstTypes.CharacterClass) {
            intersection.classes[i] = firstChild;
            firstChild.negate = cc.negate !== firstChild.negate;
        }
    }
}
function throwIfUnclosedCharacterClass(token, firstClassToken) {
    return throwIfNot(token, // Easier to understand error when applicable
    "".concat((firstClassToken === null || firstClassToken === void 0 ? void 0 : firstClassToken.value) === 93 ? "Empty" : "Unclosed", " character class"));
}
function throwIfUnclosedGroup(token) {
    return throwIfNot(token, "Unclosed group");
}
;
function transform(ast, options) {
    const opts = {
        // A couple edge cases exist where options `accuracy` and `bestEffortTarget` are used:
        // - `VariableLengthCharacterSet` kind `grapheme` (`\X`): An exact representation would require
        //   heavy Unicode data; a best-effort approximation requires knowing the target.
        // - `CharacterSet` kind `posix` with values `graph` and `print`: Their complex Unicode-based
        //   representations would be hard to change to ASCII-based after the fact in the generator
        //   based on `target`/`accuracy`, so produce the appropriate structure here.
        accuracy: "default",
        asciiWordBoundaries: false,
        avoidSubclass: false,
        bestEffortTarget: "ES2025",
        ...options
    };
    const firstPassState = {
        accuracy: opts.accuracy,
        asciiWordBoundaries: opts.asciiWordBoundaries,
        avoidSubclass: opts.avoidSubclass,
        flagDirectivesByAlt: /* @__PURE__ */ new Map(),
        jsGroupNameMap: /* @__PURE__ */ new Map(),
        minTargetEs2024: isMinTarget(opts.bestEffortTarget, "ES2024"),
        passedLookbehind: false,
        strategy: null,
        // Subroutines can appear before the groups they ref, so collect reffed nodes for a second pass 
        subroutineRefMap: /* @__PURE__ */ new Map(),
        supportedGNodes: /* @__PURE__ */ new Set(),
        digitIsAscii: ast.flags.digitIsAscii,
        spaceIsAscii: ast.flags.spaceIsAscii,
        wordIsAscii: ast.flags.wordIsAscii
    };
    traverse({
        node: ast
    }, firstPassState, FirstPassVisitor);
    const globalFlags = {
        dotAll: ast.flags.dotAll,
        ignoreCase: ast.flags.ignoreCase
    };
    const secondPassState = {
        currentFlags: globalFlags,
        prevFlags: null,
        globalFlags,
        groupOriginByCopy: /* @__PURE__ */ new Map(),
        groupsByName: /* @__PURE__ */ new Map(),
        multiplexCapturesToLeftByRef: /* @__PURE__ */ new Map(),
        openRefs: /* @__PURE__ */ new Map(),
        reffedNodesByReferencer: /* @__PURE__ */ new Map(),
        subroutineRefMap: firstPassState.subroutineRefMap
    };
    traverse({
        node: ast
    }, secondPassState, SecondPassVisitor);
    const thirdPassState = {
        groupsByName: secondPassState.groupsByName,
        highestOrphanBackref: 0,
        numCapturesToLeft: 0,
        reffedNodesByReferencer: secondPassState.reffedNodesByReferencer
    };
    traverse({
        node: ast
    }, thirdPassState, ThirdPassVisitor);
    ast._strategy = firstPassState.strategy;
    return ast;
}
var FirstPassVisitor = {
    AbsentFunction (param) {
        let { node, replaceWith } = param;
        const group = prepContainer(createGroup(), [
            adoptAndSwapKids(createLookaround({
                negate: true
            }), node.alternatives),
            createUnicodeProperty("Any")
        ]);
        const quantifier = createQuantifier(group, 0, Infinity);
        group.parent = quantifier;
        replaceWith(prepContainer(createGroup(), [
            quantifier
        ]));
    },
    Alternative: {
        enter (param, param1) {
            let { node, parent, key } = param, { flagDirectivesByAlt } = param1;
            const flagDirectives = node.elements.filter((el)=>el.kind === AstDirectiveKinds.flags);
            for(let i = key + 1; i < parent.alternatives.length; i++){
                const forwardSiblingAlt = parent.alternatives[i];
                getOrCreate(flagDirectivesByAlt, forwardSiblingAlt, []).push(...flagDirectives);
            }
        },
        exit (param, param1) {
            let { node } = param, { flagDirectivesByAlt } = param1;
            var _flagDirectivesByAlt_get;
            if ((_flagDirectivesByAlt_get = flagDirectivesByAlt.get(node)) === null || _flagDirectivesByAlt_get === void 0 ? void 0 : _flagDirectivesByAlt_get.length) {
                const flags = getCombinedFlagModsFromFlagNodes(flagDirectivesByAlt.get(node));
                if (flags) {
                    const flagGroup = prepContainer(createGroup({
                        flags
                    }), node.elements);
                    flagGroup.parent = node;
                    node.elements = [
                        flagGroup
                    ];
                }
            }
        }
    },
    Assertion (param, state) {
        let { node, key, container, ast, remove, replaceWith } = param;
        const { kind, negate } = node;
        const { asciiWordBoundaries, avoidSubclass, supportedGNodes, wordIsAscii } = state;
        if (kind === AstAssertionKinds.line_end) {
            replaceWith(parseFragment(r(_templateObject31())));
        } else if (kind === AstAssertionKinds.line_start) {
            replaceWith(parseFragment(r(_templateObject32()), {
                skipLookbehindValidation: true
            }));
        } else if (kind === AstAssertionKinds.lookbehind) {
            state.passedLookbehind = true;
        } else if (kind === AstAssertionKinds.search_start) {
            if (supportedGNodes.has(node)) {
                ast.flags.sticky = true;
                remove();
            } else {
                const prev = container[key - 1];
                if (prev && isAlwaysNonZeroLength(prev)) {
                    replaceWith(prepContainer(createLookaround({
                        negate: true
                    })));
                } else if (avoidSubclass) {
                    throw new Error(r(_templateObject33()));
                } else {
                    replaceWith(createAssertion(AstAssertionKinds.string_start));
                    state.strategy = "search_start_clip";
                }
            }
        } else if (kind === AstAssertionKinds.string_end_newline) {
            replaceWith(parseFragment(r(_templateObject34())));
        } else if (kind === AstAssertionKinds.word_boundary && !wordIsAscii && !asciiWordBoundaries) {
            const b = "(?:(?<=".concat(defaultWordChar, ")(?!").concat(defaultWordChar, ")|(?<!").concat(defaultWordChar, ")(?=").concat(defaultWordChar, "))");
            const B = "(?:(?<=".concat(defaultWordChar, ")(?=").concat(defaultWordChar, ")|(?<!").concat(defaultWordChar, ")(?!").concat(defaultWordChar, "))");
            replaceWith(parseFragment(negate ? B : b));
        }
    },
    Backreference (param, param1) {
        let { node } = param, { jsGroupNameMap } = param1;
        let { ref } = node;
        if (typeof ref === "string" && !isValidGroupNameJs(ref)) {
            ref = getAndStoreJsGroupName(ref, jsGroupNameMap);
            node.ref = ref;
        }
    },
    CapturingGroup (param, param1) {
        let { node } = param, { jsGroupNameMap, subroutineRefMap } = param1;
        let { name } = node;
        if (name && !isValidGroupNameJs(name)) {
            name = getAndStoreJsGroupName(name, jsGroupNameMap);
            node.name = name;
        }
        subroutineRefMap.set(node.number, node);
        if (name) {
            subroutineRefMap.set(name, node);
        }
    },
    CharacterSet (param, param1) {
        let { node, replaceWith } = param, { accuracy, minTargetEs2024, digitIsAscii, spaceIsAscii, wordIsAscii } = param1;
        const { kind, negate, value } = node;
        if (digitIsAscii && (kind === AstCharacterSetKinds.digit || value === "digit")) {
            replaceWith(createCharacterSet(AstCharacterSetKinds.digit, {
                negate
            }));
            return;
        }
        if (spaceIsAscii && (kind === AstCharacterSetKinds.space || value === "space")) {
            replaceWith(setNegate(parseFragment(asciiSpaceChar), negate));
            return;
        }
        if (wordIsAscii && (kind === AstCharacterSetKinds.word || value === "word")) {
            replaceWith(createCharacterSet(AstCharacterSetKinds.word, {
                negate
            }));
            return;
        }
        if (kind === AstCharacterSetKinds.any) {
            replaceWith(createUnicodeProperty("Any"));
        } else if (kind === AstCharacterSetKinds.digit) {
            replaceWith(createUnicodeProperty("Nd", {
                negate
            }));
        } else if (kind === AstCharacterSetKinds.hex) {
            replaceWith(createUnicodeProperty("AHex", {
                negate
            }));
        } else if (kind === AstCharacterSetKinds.non_newline) {
            replaceWith(parseFragment(r(_templateObject35())));
        } else if (kind === AstCharacterSetKinds.space) {
            replaceWith(createUnicodeProperty("space", {
                negate
            }));
        } else if (kind === AstCharacterSetKinds.word) {
            replaceWith(setNegate(parseFragment(defaultWordChar), negate));
        } else if (kind === AstCharacterSetKinds.property) {
            if (!JsUnicodeProperties.has(value)) {
                node.key = "sc";
            }
        } else if (kind === AstCharacterSetKinds.posix) {
            if (!minTargetEs2024 && (value === "graph" || value === "print")) {
                if (accuracy === "strict") {
                    throw new Error('POSIX class "'.concat(value, '" requires min target ES2024 or non-strict accuracy'));
                }
                let ascii = {
                    graph: "!-~",
                    print: " -~"
                }[value];
                if (negate) {
                    ascii = "\0-".concat(cp(ascii.codePointAt(0) - 1)).concat(cp(ascii.codePointAt(2) + 1), "-􏿿");
                }
                replaceWith(parseFragment("[".concat(ascii, "]")));
            } else {
                replaceWith(setNegate(parseFragment(PosixClassesMap.get(value)), negate));
            }
        }
    },
    Directive (path, state) {
        const { node, parent, ast, remove, replaceWith, removeAllPrevSiblings, removeAllNextSiblings } = path;
        const { kind, flags } = node;
        if (kind === AstDirectiveKinds.flags) {
            if (!flags.enable && !flags.disable) {
                remove();
            } else {
                const flagGroup = prepContainer(createGroup({
                    flags
                }), removeAllNextSiblings());
                replaceWith(flagGroup);
                traverseReplacement(flagGroup, path, state, FirstPassVisitor);
            }
        } else if (kind === AstDirectiveKinds.keep) {
            const firstAltFirstEl = ast.pattern.alternatives[0].elements[0];
            const hasWrapperGroup = // Not emulatable if within a `CapturingGroup`
            hasOnlyChild(ast.pattern, (kid)=>kid.type === AstTypes.Group) && firstAltFirstEl.alternatives.length === 1;
            const topLevel = hasWrapperGroup ? firstAltFirstEl : ast.pattern;
            if (parent.parent !== topLevel || topLevel.alternatives.length > 1) {
                throw new Error(r(_templateObject36()));
            }
            replaceWith(prepContainer(createLookaround({
                behind: true
            }), removeAllPrevSiblings()));
        }
    },
    Flags (param) {
        let { node, parent } = param;
        [
            "digitIsAscii",
            // Flag D
            "extended",
            // Flag x
            "spaceIsAscii",
            // Flag S
            "wordIsAscii"
        ].forEach((f)=>delete node[f]);
        var _node_sticky;
        Object.assign(node, {
            // JS flag g; no Onig equiv
            global: false,
            // JS flag d; no Onig equiv
            hasIndices: false,
            // JS flag m; no Onig equiv but its behavior is always on in Onig. Onig's only line break
            // char is line feed, unlike JS, so this flag isn't used since it would produce inaccurate
            // results (also allows `^` and `$` to be used in the generator for string start and end)
            multiline: false,
            // JS flag y; no Onig equiv, but used for `\G` emulation
            sticky: (_node_sticky = node.sticky) !== null && _node_sticky !== void 0 ? _node_sticky : false
        });
        parent.options = {
            disable: {
                // Onig uses different rules for flag x than Regex+, so disable the implicit flag
                x: true,
                // Onig has no flag to control "named capture only" mode but contextually applies its
                // behavior when named capturing is used, so disable Regex+'s implicit flag for it
                n: true
            },
            force: {
                // Always add flag v because we're generating an AST that relies on it (it enables JS
                // support for Onig features nested classes, set intersection, Unicode properties, etc.).
                // However, the generator might disable flag v based on its `target` option
                v: true
            }
        };
    },
    Group (param) {
        let { node } = param;
        if (!node.flags) {
            return;
        }
        const { enable, disable } = node.flags;
        (enable === null || enable === void 0 ? void 0 : enable.extended) && delete enable.extended;
        (disable === null || disable === void 0 ? void 0 : disable.extended) && delete disable.extended;
        (enable === null || enable === void 0 ? void 0 : enable.dotAll) && (disable === null || disable === void 0 ? void 0 : disable.dotAll) && delete enable.dotAll;
        (enable === null || enable === void 0 ? void 0 : enable.ignoreCase) && (disable === null || disable === void 0 ? void 0 : disable.ignoreCase) && delete enable.ignoreCase;
        enable && !Object.keys(enable).length && delete node.flags.enable;
        disable && !Object.keys(disable).length && delete node.flags.disable;
        !node.flags.enable && !node.flags.disable && delete node.flags;
    },
    Pattern: {
        enter (param, param1) {
            let { node } = param, { supportedGNodes } = param1;
            const leadingGs = [];
            let hasAltWithLeadG = false;
            let hasAltWithoutLeadG = false;
            for (const alt of node.alternatives){
                if (alt.elements.length === 1 && alt.elements[0].kind === AstAssertionKinds.search_start) {
                    alt.elements.pop();
                } else {
                    const leadingG = getLeadingG(alt.elements);
                    if (leadingG) {
                        hasAltWithLeadG = true;
                        Array.isArray(leadingG) ? leadingGs.push(...leadingG) : leadingGs.push(leadingG);
                    } else {
                        hasAltWithoutLeadG = true;
                    }
                }
            }
            if (hasAltWithLeadG && !hasAltWithoutLeadG) {
                leadingGs.forEach((g)=>supportedGNodes.add(g));
            }
        },
        exit (_, param) {
            let { accuracy, passedLookbehind, strategy } = param;
            if (accuracy === "strict" && passedLookbehind && strategy) {
                throw new Error(r(_templateObject37()));
            }
        }
    },
    Quantifier (param) {
        let { node } = param;
        if (node.element.type === AstTypes.Quantifier) {
            const group = prepContainer(createGroup(), [
                node.element
            ]);
            group.parent = node;
            node.element = group;
        }
    },
    Subroutine (param, param1) {
        let { node } = param, { jsGroupNameMap } = param1;
        let { ref } = node;
        if (typeof ref === "string" && !isValidGroupNameJs(ref)) {
            ref = getAndStoreJsGroupName(ref, jsGroupNameMap);
            node.ref = ref;
        }
    },
    VariableLengthCharacterSet (param, param1) {
        let { node, replaceWith } = param, { accuracy, minTargetEs2024 } = param1;
        const { kind } = node;
        if (kind === AstVariableLengthCharacterSetKinds.newline) {
            replaceWith(parseFragment("(?>\r\n?|[\n\v\f\x85\u2028\u2029])"));
        } else if (kind === AstVariableLengthCharacterSetKinds.grapheme) {
            if (accuracy === "strict") {
                throw new Error(r(_templateObject38()));
            }
            const emoji = minTargetEs2024 ? r(_templateObject39()) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$emoji$2d$regex$2d$xs$40$1$2e$0$2e$0$2f$node_modules$2f$emoji$2d$regex$2d$xs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])().source.replace(/\\u\{/g, "\\x{");
            replaceWith(parseFragment(r(_templateObject40(), emoji), {
                skipPropertyNameValidation: true
            }));
        } else {
            throw new Error('Unexpected varcharset kind "'.concat(kind, '"'));
        }
    }
};
var SecondPassVisitor = {
    Backreference (param, param1) {
        let { node } = param, { multiplexCapturesToLeftByRef, reffedNodesByReferencer } = param1;
        const { orphan, ref } = node;
        if (!orphan) {
            reffedNodesByReferencer.set(node, [
                ...multiplexCapturesToLeftByRef.get(ref).map((param)=>{
                    let { node: node2 } = param;
                    return node2;
                })
            ]);
        }
    },
    CapturingGroup: {
        enter (param, param1) {
            let { node, replaceWith, skip } = param, { groupOriginByCopy, groupsByName, multiplexCapturesToLeftByRef, openRefs, reffedNodesByReferencer } = param1;
            const origin = groupOriginByCopy.get(node);
            if (origin && openRefs.has(node.number)) {
                const recursion2 = createRecursion(node.number);
                reffedNodesByReferencer.set(recursion2, openRefs.get(node.number));
                replaceWith(recursion2);
                skip();
                return;
            }
            openRefs.set(node.number, node);
            multiplexCapturesToLeftByRef.set(node.number, []);
            if (node.name) {
                getOrCreate(multiplexCapturesToLeftByRef, node.name, []);
            }
            var _node_name;
            const multiplexNodes = multiplexCapturesToLeftByRef.get((_node_name = node.name) !== null && _node_name !== void 0 ? _node_name : node.number);
            for(let i = 0; i < multiplexNodes.length; i++){
                const multiplex = multiplexNodes[i];
                if (// This group is from subroutine expansion, and there's a multiplex value from either the
                // origin node or a prior subroutine expansion group with the same origin
                origin === multiplex.node || origin && origin === multiplex.origin || // This group is not from subroutine expansion, and it comes after a subroutine expansion
                // group that refers to this group
                node === multiplex.origin) {
                    multiplexNodes.splice(i, 1);
                    break;
                }
            }
            multiplexCapturesToLeftByRef.get(node.number).push({
                node,
                origin
            });
            if (node.name) {
                multiplexCapturesToLeftByRef.get(node.name).push({
                    node,
                    origin
                });
            }
            if (node.name) {
                const groupsWithSameName = getOrCreate(groupsByName, node.name, /* @__PURE__ */ new Map());
                let hasDuplicateNameToRemove = false;
                if (origin) {
                    hasDuplicateNameToRemove = true;
                } else {
                    for (const groupInfo of groupsWithSameName.values()){
                        if (!groupInfo.hasDuplicateNameToRemove) {
                            hasDuplicateNameToRemove = true;
                            break;
                        }
                    }
                }
                groupsByName.get(node.name).set(node, {
                    node,
                    hasDuplicateNameToRemove
                });
            }
            if (origin) {
                node._originNumber = origin.number;
            }
        },
        exit (param, param1) {
            let { node } = param, { openRefs } = param1;
            openRefs.delete(node.number);
        }
    },
    Group: {
        enter (param, state) {
            let { node } = param;
            state.prevFlags = state.currentFlags;
            if (node.flags) {
                state.currentFlags = getNewCurrentFlags(state.currentFlags, node.flags);
            }
        },
        exit (_, state) {
            state.currentFlags = state.prevFlags;
        }
    },
    Recursion (param, param1) {
        let { node, parent } = param, { reffedNodesByReferencer } = param1;
        const { ref } = node;
        let reffed = parent;
        while(reffed = reffed.parent){
            if (reffed.type === AstTypes.CapturingGroup && (reffed.name === ref || reffed.number === ref)) {
                break;
            }
        }
        reffedNodesByReferencer.set(node, reffed);
    },
    Subroutine (path, state) {
        const { node, replaceWith } = path;
        const { ref } = node;
        const reffedGroupNode = state.subroutineRefMap.get(ref);
        const isGlobalRecursion = ref === 0;
        const expandedSubroutine = isGlobalRecursion ? createRecursion(0) : // The reffed group might itself contain subroutines, which are expanded during sub-traversal
        cloneCapturingGroup(reffedGroupNode, state.groupOriginByCopy, null);
        let replacement = expandedSubroutine;
        if (!isGlobalRecursion) {
            const reffedGroupFlagMods = getCombinedFlagModsFromFlagNodes(getAllParents(reffedGroupNode, (node2)=>{
                return node2.type === AstTypes.Group && !!node2.flags;
            }));
            const reffedGroupFlags = reffedGroupFlagMods ? getNewCurrentFlags(state.globalFlags, reffedGroupFlagMods) : state.globalFlags;
            if (!areFlagsEqual(reffedGroupFlags, state.currentFlags)) {
                replacement = prepContainer(createGroup({
                    flags: getFlagModsFromFlags(reffedGroupFlags)
                }), [
                    expandedSubroutine
                ]);
            }
        }
        replaceWith(replacement);
        if (!isGlobalRecursion) {
            traverseReplacement(replacement, path, state, SecondPassVisitor);
        }
    }
};
var ThirdPassVisitor = {
    Backreference (param, state) {
        let { node, replaceWith } = param;
        if (node.orphan) {
            state.highestOrphanBackref = Math.max(state.highestOrphanBackref, node.ref);
            return;
        }
        const reffedNodes = state.reffedNodesByReferencer.get(node);
        const participants = reffedNodes.filter((reffed)=>canParticipateWithNode(reffed, node));
        if (!participants.length) {
            replaceWith(prepContainer(createLookaround({
                negate: true
            })));
        } else if (participants.length > 1) {
            const alts = participants.map((reffed)=>adoptAndSwapKids(createAlternative(), [
                    createBackreference(reffed.number)
                ]));
            replaceWith(adoptAndSwapKids(createGroup(), alts));
        } else {
            node.ref = participants[0].number;
        }
    },
    CapturingGroup (param, state) {
        let { node } = param;
        node.number = ++state.numCapturesToLeft;
        if (node.name) {
            if (state.groupsByName.get(node.name).get(node).hasDuplicateNameToRemove) {
                delete node.name;
            }
        }
    },
    Recursion (param, state) {
        let { node } = param;
        if (node.ref === 0) {
            return;
        }
        node.ref = state.reffedNodesByReferencer.get(node).number;
    },
    Regex: {
        exit (param, state) {
            let { node } = param;
            const numCapsNeeded = Math.max(state.highestOrphanBackref - state.numCapturesToLeft, 0);
            for(let i = 0; i < numCapsNeeded; i++){
                const emptyCapture = createCapturingGroup();
                node.pattern.alternatives.at(-1).elements.push(emptyCapture);
            }
        }
    }
};
var asciiSpaceChar = "[	-\r ]";
var defaultWordChar = r(_templateObject41());
function adoptAndSwapKids(parent, kids) {
    kids.forEach((kid)=>kid.parent = parent);
    parent[getContainerAccessor(parent)] = kids;
    return parent;
}
function areFlagsEqual(a, b) {
    return a.dotAll === b.dotAll && a.ignoreCase === b.ignoreCase;
}
function canParticipateWithNode(capture, node) {
    let rightmostPoint = node;
    do {
        if (rightmostPoint.type === AstTypes.Pattern) {
            return false;
        }
        if (rightmostPoint.type === AstTypes.Alternative) {
            continue;
        }
        if (rightmostPoint === capture) {
            return false;
        }
        const kidsOfParent = getKids(rightmostPoint.parent);
        for (const kid of kidsOfParent){
            if (kid === rightmostPoint) {
                break;
            }
            if (kid === capture) {
                return true;
            }
            if (hasDescendant(kid, capture)) {
                return true;
            }
        }
    }while (rightmostPoint = rightmostPoint.parent)
    throw new Error("Unexpected path");
}
function cloneCapturingGroup(obj, originMap, up, up2) {
    const store = Array.isArray(obj) ? [] : {};
    for (const [key, value] of Object.entries(obj)){
        if (key === "parent") {
            store.parent = Array.isArray(up) ? up2 : up;
        } else if (value && typeof value === "object") {
            store[key] = cloneCapturingGroup(value, originMap, store, up);
        } else {
            if (key === "type" && value === AstTypes.CapturingGroup) {
                var _originMap_get;
                originMap.set(store, (_originMap_get = originMap.get(obj)) !== null && _originMap_get !== void 0 ? _originMap_get : obj);
            }
            store[key] = value;
        }
    }
    return store;
}
function createRecursion(ref) {
    return {
        type: AstTypes.Recursion,
        ref
    };
}
function getAllParents(node, filterFn) {
    const results = [];
    while(node = node.parent){
        if (!filterFn || filterFn(node)) {
            results.push(node);
        }
    }
    return results;
}
function getAndStoreJsGroupName(name, map) {
    if (map.has(name)) {
        return map.get(name);
    }
    const jsName = "$".concat(map.size, "_").concat(name.replace(RegExp("^[^$_\\p{IDS}]|[^$\\u200C\\u200D\\p{IDC}]", "ug"), "_"));
    map.set(name, jsName);
    return jsName;
}
function getContainerAccessor(node) {
    for (const accessor of [
        "alternatives",
        "classes",
        "elements"
    ]){
        if (node[accessor]) {
            return accessor;
        }
    }
    return null;
}
function getCombinedFlagModsFromFlagNodes(flagNodes) {
    const flagProps = [
        "dotAll",
        "ignoreCase"
    ];
    const combinedFlags = {
        enable: {},
        disable: {}
    };
    flagNodes.forEach((param)=>{
        let { flags } = param;
        flagProps.forEach((prop)=>{
            var _flags_enable, _flags_disable;
            if ((_flags_enable = flags.enable) === null || _flags_enable === void 0 ? void 0 : _flags_enable[prop]) {
                delete combinedFlags.disable[prop];
                combinedFlags.enable[prop] = true;
            }
            if ((_flags_disable = flags.disable) === null || _flags_disable === void 0 ? void 0 : _flags_disable[prop]) {
                combinedFlags.disable[prop] = true;
            }
        });
    });
    if (!Object.keys(combinedFlags.enable).length) {
        delete combinedFlags.enable;
    }
    if (!Object.keys(combinedFlags.disable).length) {
        delete combinedFlags.disable;
    }
    if (combinedFlags.enable || combinedFlags.disable) {
        return combinedFlags;
    }
    return null;
}
function getFlagModsFromFlags(param) {
    let { dotAll, ignoreCase } = param;
    const mods = {};
    if (dotAll || ignoreCase) {
        mods.enable = {};
        dotAll && (mods.enable.dotAll = true);
        ignoreCase && (mods.enable.ignoreCase = true);
    }
    if (!dotAll || !ignoreCase) {
        mods.disable = {};
        !dotAll && (mods.disable.dotAll = true);
        !ignoreCase && (mods.disable.ignoreCase = true);
    }
    return mods;
}
function getKids(node) {
    if (!node) {
        throw new Error("Node expected");
    }
    if (node.type === AstTypes.Quantifier) {
        return [
            node.element
        ];
    }
    const accessor = getContainerAccessor(node);
    return accessor && node[accessor];
}
function getLeadingG(els) {
    const firstToConsider = els.find((el)=>el.kind === AstAssertionKinds.search_start || isLoneGLookaround(el, {
            negate: false
        }) || !isAlwaysZeroLength(el));
    if (!firstToConsider) {
        return null;
    }
    if (firstToConsider.kind === AstAssertionKinds.search_start) {
        return firstToConsider;
    }
    if (isLookaround(firstToConsider)) {
        return firstToConsider.alternatives[0].elements[0];
    }
    if (isConsumptiveGroup(firstToConsider)) {
        const gNodesForGroup = [];
        for (const alt of firstToConsider.alternatives){
            const leadingG = getLeadingG(alt.elements);
            if (!leadingG) {
                return null;
            }
            Array.isArray(leadingG) ? gNodesForGroup.push(...leadingG) : gNodesForGroup.push(leadingG);
        }
        return gNodesForGroup;
    }
    return null;
}
function hasDescendant(node, descendant) {
    var _getKids;
    const kids = (_getKids = getKids(node)) !== null && _getKids !== void 0 ? _getKids : [];
    for (const kid of kids){
        if (kid === descendant || hasDescendant(kid, descendant)) {
            return true;
        }
    }
    return false;
}
function isLoneGLookaround(node, options) {
    const opts = {
        negate: null,
        ...options
    };
    return isLookaround(node) && (opts.negate === null || node.negate === opts.negate) && hasOnlyChild(node, (kid)=>kid.kind === AstAssertionKinds.search_start);
}
function isValidGroupNameJs(name) {
    return RegExp("^[$_\\p{IDS}][$\\u200C\\u200D\\p{IDC}]*$", "u").test(name);
}
function parseFragment(pattern, options) {
    const ast = parse(tokenize(pattern), options);
    const alts = ast.pattern.alternatives;
    if (alts.length > 1 || alts[0].elements.length > 1) {
        return adoptAndSwapKids(createGroup(), alts);
    }
    return alts[0].elements[0];
}
function prepContainer(node, kids) {
    const accessor = getContainerAccessor(node);
    node[accessor][0].parent = node;
    if (kids) {
        adoptAndSwapKids(node[accessor][0], kids);
    }
    return node;
}
function setNegate(node, negate) {
    node.negate = negate;
    return node;
}
function traverseReplacement(replacement, param, state, visitor) {
    let { parent, key, container } = param;
    traverse({
        // Don't use the `node` from `path`
        node: replacement,
        parent,
        key,
        container
    }, state, visitor);
}
;
function generate(ast, options) {
    const opts = getOptions(options);
    const minTargetEs2024 = isMinTarget(opts.target, "ES2024");
    const minTargetEs2025 = isMinTarget(opts.target, "ES2025");
    const recursionLimit = opts.rules.recursionLimit;
    if (!Number.isInteger(recursionLimit) || recursionLimit < 2 || recursionLimit > 20) {
        throw new Error("Invalid recursionLimit; use 2-20");
    }
    let hasCaseInsensitiveNode = null;
    let hasCaseSensitiveNode = null;
    if (!minTargetEs2025) {
        const iStack = [
            ast.flags.ignoreCase
        ];
        traverse({
            node: ast
        }, {
            getCurrentModI: ()=>iStack.at(-1),
            popModI () {
                iStack.pop();
            },
            pushModI (isIOn) {
                iStack.push(isIOn);
            },
            setHasCasedChar () {
                if (iStack.at(-1)) {
                    hasCaseInsensitiveNode = true;
                } else {
                    hasCaseSensitiveNode = true;
                }
            }
        }, FlagModifierVisitor);
    }
    const appliedGlobalFlags = {
        dotAll: ast.flags.dotAll,
        // - Turn global flag i on if a case insensitive node was used and no case sensitive nodes were
        //   used (to avoid unnecessary node expansion).
        // - Turn global flag i off if a case sensitive node was used (since case sensitivity can't be
        //   forced without the use of ES2025 flag groups)
        ignoreCase: !!((ast.flags.ignoreCase || hasCaseInsensitiveNode) && !hasCaseSensitiveNode)
    };
    let lastNode = null;
    const state = {
        accuracy: opts.accuracy,
        appliedGlobalFlags,
        avoidSubclass: opts.avoidSubclass,
        captureMap: /* @__PURE__ */ new Map(),
        currentFlags: {
            dotAll: ast.flags.dotAll,
            ignoreCase: ast.flags.ignoreCase
        },
        inCharClass: false,
        lastNode,
        recursionLimit,
        useAppliedIgnoreCase: !!(!minTargetEs2025 && hasCaseInsensitiveNode && hasCaseSensitiveNode),
        useFlagMods: minTargetEs2025,
        useFlagV: minTargetEs2024,
        verbose: opts.verbose
    };
    function gen(node) {
        state.lastNode = lastNode;
        lastNode = node;
        switch(node.type){
            case AstTypes.Regex:
                return {
                    pattern: gen(node.pattern),
                    flags: gen(node.flags),
                    options: {
                        ...node.options
                    }
                };
            case AstTypes.Alternative:
                return node.elements.map(gen).join("");
            case AstTypes.Assertion:
                return genAssertion(node, state, gen);
            case AstTypes.Backreference:
                return genBackreference(node, state);
            case AstTypes.CapturingGroup:
                return genCapturingGroup(node, state, gen);
            case AstTypes.Character:
                return genCharacter(node, state);
            case AstTypes.CharacterClass:
                return genCharacterClass(node, state, gen);
            case AstTypes.CharacterClassIntersection:
                if (!state.useFlagV) {
                    throw new Error("Use of class intersection requires min target ES2024");
                }
                return node.classes.map(gen).join("&&");
            case AstTypes.CharacterClassRange:
                return genCharacterClassRange(node, state);
            case AstTypes.CharacterSet:
                return genCharacterSet(node, state);
            case AstTypes.Flags:
                return genFlags(node, state);
            case AstTypes.Group:
                return genGroup(node, state, gen);
            case AstTypes.Pattern:
                return node.alternatives.map(gen).join("|");
            case AstTypes.Quantifier:
                return gen(node.element) + getQuantifierStr(node);
            case AstTypes.Recursion:
                return genRecursion(node, state);
            default:
                throw new Error('Unexpected node type "'.concat(node.type, '"'));
        }
    }
    const result = gen(ast);
    if (!minTargetEs2024) {
        delete result.options.force.v;
        result.options.disable.v = true;
        result.options.unicodeSetsPlugin = null;
    }
    return result;
}
var FlagModifierVisitor = {
    AnyGroup: {
        enter (param, state) {
            let { node } = param;
            const currentModI = state.getCurrentModI();
            state.pushModI(node.flags ? getNewCurrentFlags({
                ignoreCase: currentModI
            }, node.flags).ignoreCase : currentModI);
        },
        exit (_, state) {
            state.popModI();
        }
    },
    Backreference (_, state) {
        state.setHasCasedChar();
    },
    Character (param, state) {
        let { node } = param;
        if (charHasCase(cp(node.value))) {
            state.setHasCasedChar();
        }
    },
    CharacterClassRange (param, state) {
        let { node, skip } = param;
        skip();
        if (getCasesOutsideCharClassRange(node, {
            firstOnly: true
        }).length) {
            state.setHasCasedChar();
        }
    },
    CharacterSet (param, state) {
        let { node } = param;
        if (node.kind === AstCharacterSetKinds.property && UnicodePropertiesWithSpecificCase.has(node.value)) {
            state.setHasCasedChar();
        }
    }
};
var BaseEscapeChars = /* @__PURE__ */ new Set([
    "$",
    "(",
    ")",
    "*",
    "+",
    ".",
    "?",
    "[",
    "\\",
    "]",
    "^",
    "{",
    "|",
    "}"
]);
var CharClassEscapeChars = /* @__PURE__ */ new Set([
    "-",
    "\\",
    "]",
    "^",
    // Literal `[` doesn't require escaping with flag u, but this can help work around regex source
    // linters and regex syntax processors that expect unescaped `[` to create a nested class
    "["
]);
var CharClassEscapeCharsFlagV = /* @__PURE__ */ new Set([
    "(",
    ")",
    "-",
    "/",
    "[",
    "\\",
    "]",
    "^",
    "{",
    "|",
    "}",
    // Double punctuators; also includes already-listed `-` and `^`
    "!",
    "#",
    "$",
    "%",
    "&",
    "*",
    "+",
    ",",
    ".",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "`",
    "~"
]);
var CharCodeEscapeMap = /* @__PURE__ */ new Map([
    [
        9,
        r(_templateObject42())
    ],
    // horizontal tab
    [
        10,
        r(_templateObject43())
    ],
    // line feed
    [
        11,
        r(_templateObject44())
    ],
    // vertical tab
    [
        12,
        r(_templateObject45())
    ],
    // form feed
    [
        13,
        r(_templateObject46())
    ],
    // carriage return
    [
        8232,
        r(_templateObject47())
    ],
    // line separator
    [
        8233,
        r(_templateObject48())
    ],
    // paragraph separator
    [
        65279,
        r(_templateObject49())
    ]
]);
var casedRe = RegExp("^\\p{Cased}$", "u");
function charHasCase(char) {
    return casedRe.test(char);
}
function genAssertion(node, _, gen) {
    const { kind, negate, alternatives } = node;
    if (isLookaround(node)) {
        const prefix = "".concat(kind === AstAssertionKinds.lookahead ? "" : "<").concat(negate ? "!" : "=");
        return "(?".concat(prefix).concat(alternatives.map(gen).join("|"), ")");
    }
    if (kind === AstAssertionKinds.string_end) {
        return "$";
    }
    if (kind === AstAssertionKinds.string_start) {
        return "^";
    }
    if (kind === AstAssertionKinds.word_boundary) {
        return negate ? r(_templateObject50()) : r(_templateObject51());
    }
    throw new Error('Unexpected assertion kind "'.concat(kind, '"'));
}
function genBackreference(param, state) {
    let { ref } = param;
    if (typeof ref !== "number") {
        throw new Error("Unexpected named backref in transformed AST");
    }
    if (!state.useFlagMods && state.accuracy === "strict" && state.currentFlags.ignoreCase && !state.captureMap.get(ref).ignoreCase) {
        throw new Error("Use of case-insensitive backref to case-sensitive group requires target ES2025 or non-strict accuracy");
    }
    return "\\" + ref;
}
function genCapturingGroup(param, state, gen) {
    let { name, number, alternatives, _originNumber } = param;
    state.captureMap.set(number, {
        ignoreCase: state.currentFlags.ignoreCase
    });
    return "(".concat(name ? "?<".concat(name, ">") : "").concat(!state.avoidSubclass && _originNumber ? // All captures from/within expanded subroutines are marked as emulation groups, and some are
    // specially marked as emulation groups with transfer. `number` is based on the pattern after
    // subroutine expansion, whereas `_originNumber` points to the origin capture of an expanded
    // subroutine (or child capture) *prior* to subroutine expansion. `_originNumber` is
    // `undefined` if the current capture isn't from an expanded subroutine
    "".concat(_originNumber < number ? "$".concat(_originNumber) : "").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$regex$40$5$2e$1$2e$1$2f$node_modules$2f$regex$2f$src$2f$subclass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emulationGroupMarker"]) : "").concat(alternatives.map(gen).join("|"), ")");
}
function genCharacter(param, state) {
    let { value } = param;
    const char = cp(value);
    const escaped = getCharEscape(value, {
        isAfterBackref: state.lastNode.type === AstTypes.Backreference,
        inCharClass: state.inCharClass,
        useFlagV: state.useFlagV
    });
    if (escaped !== char) {
        return escaped;
    }
    if (state.useAppliedIgnoreCase && state.currentFlags.ignoreCase && charHasCase(char)) {
        const cases = getIgnoreCaseMatchChars(char);
        return state.inCharClass ? cases.join("") : cases.length > 1 ? "[".concat(cases.join(""), "]") : cases[0];
    }
    return char;
}
function genCharacterClass(param, state, gen) {
    let { negate, parent, elements } = param;
    var _elements_;
    const genClass = ()=>"[".concat(negate ? "^" : "").concat(elements.map(gen).join(""), "]");
    if (!state.inCharClass) {
        state.inCharClass = true;
        const result = genClass();
        state.inCharClass = false;
        return result;
    }
    const firstType = (_elements_ = elements[0]) === null || _elements_ === void 0 ? void 0 : _elements_.type;
    if (!negate && firstType && // Allows many nested classes to work with `target` ES2018 which doesn't support nesting
    ((!state.useFlagV || !state.verbose) && parent.type === AstTypes.CharacterClass && firstType !== AstTypes.CharacterClassIntersection || !state.verbose && parent.type === AstTypes.CharacterClassIntersection && // JS doesn't allow intersection with union or ranges
    elements.length === 1 && firstType !== AstTypes.CharacterClass && firstType !== AstTypes.CharacterClassRange)) {
        return elements.map(gen).join("");
    }
    if (!state.useFlagV && parent.type === AstTypes.CharacterClass) {
        throw new Error("Use of nested character class requires min target ES2024");
    }
    return genClass();
}
function genCharacterClassRange(node, state) {
    const min = node.min.value;
    const max = node.max.value;
    const escOpts = {
        isAfterBackref: false,
        inCharClass: true,
        useFlagV: state.useFlagV
    };
    const minStr = getCharEscape(min, escOpts);
    const maxStr = getCharEscape(max, escOpts);
    const extraChars = /* @__PURE__ */ new Set();
    if (state.useAppliedIgnoreCase && state.currentFlags.ignoreCase) {
        const charsOutsideRange = getCasesOutsideCharClassRange(node);
        const ranges = getCodePointRangesFromChars(charsOutsideRange);
        ranges.forEach((value)=>{
            extraChars.add(Array.isArray(value) ? "".concat(getCharEscape(value[0], escOpts), "-").concat(getCharEscape(value[1], escOpts)) : getCharEscape(value, escOpts));
        });
    }
    return "".concat(minStr, "-").concat(maxStr).concat([
        ...extraChars
    ].join(""));
}
function genCharacterSet(param, state) {
    let { kind, negate, value, key } = param;
    if (kind === AstCharacterSetKinds.dot) {
        return state.currentFlags.dotAll ? state.appliedGlobalFlags.dotAll || state.useFlagMods ? "." : "[^]" : // Onig's only line break char is line feed, unlike JS
        r(_templateObject52());
    }
    if (kind === AstCharacterSetKinds.digit) {
        return negate ? r(_templateObject53()) : r(_templateObject54());
    }
    if (kind === AstCharacterSetKinds.property) {
        if (state.useAppliedIgnoreCase && state.currentFlags.ignoreCase && UnicodePropertiesWithSpecificCase.has(value)) {
            throw new Error('Unicode property "'.concat(value, "\" can't be case-insensitive when other chars have specific case"));
        }
        return "".concat(negate ? r(_templateObject55()) : r(_templateObject56()), "{").concat(key ? "".concat(key, "=") : "").concat(value, "}");
    }
    if (kind === AstCharacterSetKinds.word) {
        return negate ? r(_templateObject57()) : r(_templateObject58());
    }
    throw new Error('Unexpected character set kind "'.concat(kind, '"'));
}
function genFlags(node, state) {
    return(// The transformer should never turn on the properties for flags d, g, and m since Onig doesn't
    // have equivs. Flag m is never relied on since Onig uses different line break chars than JS
    // (node.hasIndices ? 'd' : '') +
    // (node.global ? 'g' : '') +
    // (node.multiline ? 'm' : '') +
    (state.appliedGlobalFlags.ignoreCase ? "i" : "") + (node.dotAll ? "s" : "") + (node.sticky ? "y" : ""));
}
function genGroup(param, state, gen) {
    let { atomic: atomic2, flags, parent, alternatives } = param;
    const currentFlags = state.currentFlags;
    if (flags) {
        state.currentFlags = getNewCurrentFlags(currentFlags, flags);
    }
    const contents = alternatives.map(gen).join("|");
    const result = !state.verbose && alternatives.length === 1 && parent.type !== AstTypes.Quantifier && !atomic2 && (!state.useFlagMods || !flags) ? contents : "(?".concat(getGroupPrefix(atomic2, flags, state.useFlagMods)).concat(contents, ")");
    state.currentFlags = currentFlags;
    return result;
}
function genRecursion(param, state) {
    let { ref } = param;
    const limit = state.recursionLimit;
    return ref === 0 ? "(?R=".concat(limit, ")") : r(_templateObject59(), ref, limit);
}
function getCasesOutsideCharClassRange(node, options) {
    const firstOnly = !!(options === null || options === void 0 ? void 0 : options.firstOnly);
    const min = node.min.value;
    const max = node.max.value;
    const found = [];
    if (min < 65 && (max === 65535 || max >= 131071) || min === 65536 && max >= 131071) {
        return found;
    }
    for(let i = min; i <= max; i++){
        const char = cp(i);
        if (!charHasCase(char)) {
            continue;
        }
        const charsOutsideRange = getIgnoreCaseMatchChars(char).filter((caseOfChar)=>{
            const num = caseOfChar.codePointAt(0);
            return num < min || num > max;
        });
        if (charsOutsideRange.length) {
            found.push(...charsOutsideRange);
            if (firstOnly) {
                break;
            }
        }
    }
    return found;
}
function getCharEscape(codePoint, param) {
    let { isAfterBackref, inCharClass, useFlagV } = param;
    if (CharCodeEscapeMap.has(codePoint)) {
        return CharCodeEscapeMap.get(codePoint);
    }
    if (// Control chars, etc.; condition modeled on the Chrome developer console's display for strings
    codePoint < 32 || codePoint > 126 && codePoint < 160 || // Unicode planes 4-16; unassigned, special purpose, and private use area
    codePoint > 262143 || // Avoid corrupting a preceding backref by immediately following it with a literal digit
    isAfterBackref && isDigitCharCode(codePoint)) {
        return codePoint > 255 ? "\\u{".concat(codePoint.toString(16).toUpperCase(), "}") : "\\x".concat(codePoint.toString(16).toUpperCase().padStart(2, "0"));
    }
    const escapeChars = inCharClass ? useFlagV ? CharClassEscapeCharsFlagV : CharClassEscapeChars : BaseEscapeChars;
    const char = cp(codePoint);
    return (escapeChars.has(char) ? "\\" : "") + char;
}
function getCodePointRangesFromChars(chars) {
    const codePoints = chars.map((char)=>char.codePointAt(0)).sort((a, b)=>a - b);
    const values = [];
    let start = null;
    for(let i = 0; i < codePoints.length; i++){
        if (codePoints[i + 1] === codePoints[i] + 1) {
            start !== null && start !== void 0 ? start : start = codePoints[i];
        } else if (start === null) {
            values.push(codePoints[i]);
        } else {
            values.push([
                start,
                codePoints[i]
            ]);
            start = null;
        }
    }
    return values;
}
function getGroupPrefix(atomic2, flagMods, useFlagMods) {
    if (atomic2) {
        return ">";
    }
    let mods = "";
    if (flagMods && useFlagMods) {
        const { enable, disable } = flagMods;
        mods = ((enable === null || enable === void 0 ? void 0 : enable.ignoreCase) ? "i" : "") + ((enable === null || enable === void 0 ? void 0 : enable.dotAll) ? "s" : "") + (disable ? "-" : "") + ((disable === null || disable === void 0 ? void 0 : disable.ignoreCase) ? "i" : "") + ((disable === null || disable === void 0 ? void 0 : disable.dotAll) ? "s" : "");
    }
    return "".concat(mods, ":");
}
function getQuantifierStr(param) {
    let { min, max, greedy, possessive: possessive2 } = param;
    let base;
    if (!min && max === 1) {
        base = "?";
    } else if (!min && max === Infinity) {
        base = "*";
    } else if (min === 1 && max === Infinity) {
        base = "+";
    } else if (min === max) {
        base = "{".concat(min, "}");
    } else {
        base = "{".concat(min, ",").concat(max === Infinity ? "" : max, "}");
    }
    return base + (possessive2 ? "+" : greedy ? "" : "?");
}
function isDigitCharCode(value) {
    return value > 47 && value < 58;
}
;
var EmulatedRegExp = (_strategy = /*#__PURE__*/ new WeakMap(), class _EmulatedRegExp extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$regex$40$5$2e$1$2e$1$2f$node_modules$2f$regex$2f$src$2f$subclass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegExpSubclass"] {
    /**
  Called internally by all String/RegExp methods that use regexes. Provides special case handling
  that requires coupling with pattern changes during transpilation.
  @override
  @param {string} str
  @returns {RegExpExecArray | null}
  */ exec(str) {
        const exec = super.exec;
        const useLastIndex = this.global || this.sticky;
        const pos = this.lastIndex;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _strategy) === "search_start_clip" && useLastIndex && pos) {
            this.lastIndex = 0;
            const match = exec.call(this, str.slice(pos));
            if (match) {
                adjustMatchDetailsForOffset(match, this, str, pos);
                this.lastIndex += pos;
            }
            return match;
        }
        return exec.call(this, str);
    }
    /**
  @overload
  @param {string} pattern
  @param {string} [flags]
  @param {EmulatedRegExpOptions} [options]
  */ /**
  @overload
  @param {EmulatedRegExp} pattern
  @param {string} [flags]
  */ constructor(pattern, flags, options){
        if (pattern instanceof RegExp) {
            if (options) {
                throw new Error("Cannot provide options when copying a regexp");
            }
            super(pattern, flags), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _strategy, {
                writable: true,
                value: void 0
            }), /**
  Can be used to serialize the arguments used to create the instance.
  @type {{
    pattern: string;
    flags: string;
    options: EmulatedRegExpOptions;
  }}
  */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "rawArgs", void 0);
            if (pattern instanceof _EmulatedRegExp) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _strategy, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(pattern, _strategy));
                this.rawArgs = pattern.rawArgs;
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _strategy, null);
                this.rawArgs = {
                    pattern: pattern.source,
                    flags: pattern.flags,
                    options: {}
                };
            }
            if (flags !== void 0) {
                this.rawArgs.flags = flags;
            }
        } else {
            const opts = {
                strategy: null,
                useEmulationGroups: false,
                ...options
            };
            super(pattern, flags, {
                useEmulationGroups: opts.useEmulationGroups
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _strategy, {
                writable: true,
                value: void 0
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "rawArgs", void 0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _strategy, opts.strategy);
            this.rawArgs = {
                pattern,
                flags: flags !== null && flags !== void 0 ? flags : "",
                options: {
                    ...opts.strategy && {
                        strategy: opts.strategy
                    },
                    ...opts.useEmulationGroups && {
                        useEmulationGroups: true
                    }
                }
            };
        }
    }
});
function adjustMatchDetailsForOffset(match, re, input, offset) {
    match.input = input;
    match.index += offset;
    if (re.hasIndices) {
        const indices = match.indices;
        for(let i = 0; i < indices.length; i++){
            const arr = indices[i];
            if (arr) {
                indices[i] = [
                    arr[0] + offset,
                    arr[1] + offset
                ];
            }
        }
        const groupIndices = indices.groups;
        if (groupIndices) {
            Object.keys(groupIndices).forEach((key)=>{
                const arr = groupIndices[key];
                if (arr) {
                    groupIndices[key] = [
                        arr[0] + offset,
                        arr[1] + offset
                    ];
                }
            });
        }
    }
}
;
;
function toDetails(pattern, options) {
    const opts = getOptions(options);
    const avoidSubclass = opts.avoidSubclass;
    const tokenized = tokenize(pattern, opts.flags, {
        captureGroup: opts.rules.captureGroup,
        singleline: opts.rules.singleline
    });
    const onigurumaAst = parse(tokenized, {
        skipBackrefValidation: opts.rules.allowOrphanBackrefs,
        verbose: opts.verbose
    });
    const regexAst = transform(onigurumaAst, {
        accuracy: opts.accuracy,
        asciiWordBoundaries: opts.rules.asciiWordBoundaries,
        avoidSubclass,
        bestEffortTarget: opts.target
    });
    const generated = generate(regexAst, opts);
    const pluginData = {
        useEmulationGroups: !avoidSubclass
    };
    const result = {
        pattern: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$regex$40$5$2e$1$2e$1$2f$node_modules$2f$regex$2f$src$2f$atomic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atomic"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$regex$40$5$2e$1$2e$1$2f$node_modules$2f$regex$2f$src$2f$atomic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["possessive"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$regex$2d$recursion$40$5$2e$1$2e$1$2f$node_modules$2f$regex$2d$recursion$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recursion"])(generated.pattern, pluginData)), pluginData),
        flags: "".concat(opts.hasIndices ? "d" : "").concat(opts.global ? "g" : "").concat(generated.flags).concat(generated.options.disable.v ? "u" : "v")
    };
    const useEmulationGroups = !avoidSubclass && result.pattern.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$regex$40$5$2e$1$2e$1$2f$node_modules$2f$regex$2f$src$2f$subclass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emulationGroupMarker"]);
    const strategy = regexAst._strategy;
    if (useEmulationGroups || strategy) {
        result.options = {
            ...strategy && {
                strategy
            },
            ...useEmulationGroups && {
                useEmulationGroups
            }
        };
    }
    return result;
}
function toOnigurumaAst(pattern, options) {
    var _options_rules;
    var _options_flags;
    const flags = (_options_flags = options === null || options === void 0 ? void 0 : options.flags) !== null && _options_flags !== void 0 ? _options_flags : "";
    var _options_rules_captureGroup;
    const captureGroup = (_options_rules_captureGroup = options === null || options === void 0 ? void 0 : (_options_rules = options.rules) === null || _options_rules === void 0 ? void 0 : _options_rules.captureGroup) !== null && _options_rules_captureGroup !== void 0 ? _options_rules_captureGroup : false;
    return parse(tokenize(pattern, flags, {
        captureGroup
    }));
}
function toRegExp(pattern, options) {
    const result = toDetails(pattern, options);
    if (result.options) {
        return new EmulatedRegExp(result.pattern, result.flags, result.options);
    }
    return new RegExp(result.pattern, result.flags);
}
;
 //# sourceMappingURL=index.js.map
}),
}]);

//# sourceMappingURL=aca47_oniguruma-to-es_dist_esm_index_07b999e7.js.map