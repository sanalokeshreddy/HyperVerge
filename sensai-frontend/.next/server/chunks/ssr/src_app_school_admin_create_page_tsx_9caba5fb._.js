module.exports = {

"[project]/src/app/school/admin/create/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>CreateSchool
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_@babel+core@7.2_ed7b963b8b79c6973a19a9ac5bbdca45/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$12_reac_5b43fd040792bcb2acb99491a009e4d7$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.23.12_reac_5b43fd040792bcb2acb99491a009e4d7/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)"); // Import Framer Motion
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.477.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>"); // Import X icon
"use client";
;
;
;
;
;
;
;
function CreateSchool() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { schools, isLoading: isLoadingSchools } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSchools"])();
    // State for form fields
    const [firstName, setFirstName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [middleName, setMiddleName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [lastName, setLastName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [schoolName, setSchoolName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [slug, setSlug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add state for error message
    const [slugError, setSlugError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Add state for success dialog
    const [showSuccessDialog, setShowSuccessDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newSchoolId, setNewSchoolId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Check if user already has a school and redirect if they do
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (schools && schools.length > 0) {
            const ownedSchool = schools.find((school)=>school.role === 'owner');
            if (ownedSchool) {
                router.push(`/school/admin/${ownedSchool.id}`);
            }
        }
    }, [
        schools,
        router
    ]);
    // Base URL for the school (would come from environment variables in a real app)
    const baseUrl = `${("TURBOPACK compile-time value", "http://localhost:3000")}/school/`;
    // Play success sound effect - a distinctive sound for school creation
    const playSuccessSound = ()=>{
        try {
            const audioContext = new AudioContext();
            // Create a more elaborate, celebratory sound with multiple oscillators
            // First oscillator - descending chime sound
            const oscillator1 = audioContext.createOscillator();
            oscillator1.type = 'triangle'; // Triangle wave for a bell-like quality
            oscillator1.frequency.setValueAtTime(1200, audioContext.currentTime);
            oscillator1.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.3);
            // Second oscillator - ascending tone
            const oscillator2 = audioContext.createOscillator();
            oscillator2.type = 'sine';
            oscillator2.frequency.setValueAtTime(400, audioContext.currentTime + 0.15);
            oscillator2.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.45);
            // Third oscillator - higher pitch flourish
            const oscillator3 = audioContext.createOscillator();
            oscillator3.type = 'square'; // Square wave for a bright quality
            oscillator3.frequency.setValueAtTime(1400, audioContext.currentTime + 0.3);
            oscillator3.frequency.exponentialRampToValueAtTime(1800, audioContext.currentTime + 0.5);
            oscillator3.frequency.exponentialRampToValueAtTime(1600, audioContext.currentTime + 0.7);
            // Create gain nodes with different envelope shapes
            const gainNode1 = audioContext.createGain();
            gainNode1.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode1.gain.linearRampToValueAtTime(0.25, audioContext.currentTime + 0.05);
            gainNode1.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.4);
            const gainNode2 = audioContext.createGain();
            gainNode2.gain.setValueAtTime(0, audioContext.currentTime + 0.15);
            gainNode2.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.25);
            gainNode2.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.6);
            const gainNode3 = audioContext.createGain();
            gainNode3.gain.setValueAtTime(0, audioContext.currentTime + 0.3);
            gainNode3.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + 0.4);
            gainNode3.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.8);
            // Connect nodes
            oscillator1.connect(gainNode1);
            oscillator2.connect(gainNode2);
            oscillator3.connect(gainNode3);
            gainNode1.connect(audioContext.destination);
            gainNode2.connect(audioContext.destination);
            gainNode3.connect(audioContext.destination);
            // Start and stop oscillators with different timings
            oscillator1.start(audioContext.currentTime);
            oscillator1.stop(audioContext.currentTime + 0.5);
            oscillator2.start(audioContext.currentTime + 0.15);
            oscillator2.stop(audioContext.currentTime + 0.7);
            oscillator3.start(audioContext.currentTime + 0.3);
            oscillator3.stop(audioContext.currentTime + 0.9);
        } catch (error) {
            console.error("Error creating school creation sound:", error);
        }
    };
    // Function to handle form submission
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!user?.id) {
            console.error("User not authenticated");
            return;
        }
        setIsSubmitting(true);
        // Clear any previous errors
        setSlugError(null);
        try {
            // Create the school via API
            const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8001")}/organizations/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: schoolName,
                    slug: slug,
                    user_id: user.id
                })
            });
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({}));
                if (errorData.detail) {
                    if (errorData.detail.includes('already exists')) {
                        setSlugError('This school URL is already taken. Please choose another.');
                        throw new Error('Slug already exists');
                    } else {
                        throw new Error(errorData.detail);
                    }
                } else {
                    throw new Error(`API error: ${response.status}`);
                }
            }
            const data = await response.json();
            // Instead of redirecting, show success dialog
            setNewSchoolId(data.id.toString());
            setShowSuccessDialog(true);
            playSuccessSound();
        } catch (error) {
            console.error("Error creating school:", error);
        // Error is already set if it's a slug error
        } finally{
            setIsSubmitting(false);
        }
    };
    // Function to navigate to the new school
    const navigateToSchool = ()=>{
        if (newSchoolId) {
            // Replace client-side navigation with a full page navigation
            window.location.href = `/school/admin/${newSchoolId}`;
        }
    };
    // Effect to pre-fill name fields from user data if available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (user?.name) {
            const nameParts = user.name.split(" ");
            if (nameParts.length >= 1) setFirstName(nameParts[0]);
            if (nameParts.length >= 3) {
                setMiddleName(nameParts.slice(1, -1).join(" "));
                setLastName(nameParts[nameParts.length - 1]);
            } else if (nameParts.length === 2) {
                setLastName(nameParts[1]);
            }
        }
    }, [
        user
    ]);
    // Animation variants for shooting stars
    const shootingStarVariants = {
        initial: {
            opacity: 0,
            x: 0,
            y: 0,
            scale: 0,
            rotate: 215
        },
        animate: {
            opacity: [
                0,
                1,
                1,
                0
            ],
            x: "-100vw",
            y: "100vh",
            scale: [
                0,
                0.5
            ],
            rotate: 215,
            transition: {
                duration: 3,
                ease: "easeOut"
            }
        }
    };
    // Animation variants for orbs
    const orbVariants = {
        initial: {
            opacity: 0,
            y: 100,
            scale: 0.1
        },
        animate: {
            opacity: [
                0,
                0.8,
                0.8,
                0
            ],
            y: [
                -20,
                -120
            ],
            scale: [
                0.1,
                0.6,
                0.4,
                0.1
            ],
            transition: {
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop"
            }
        }
    };
    // Function to navigate back to home
    const handleGoBack = ()=>{
        router.push('/');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-screen flex-col bg-black text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-5 right-4 sm:right-6 md:right-8 lg:right-12 z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleGoBack,
                            className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors focus:outline-none focus:ring-0 focus:border-0 cursor-pointer",
                            "aria-label": "Close and return to home",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$477$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-4 h-4 sm:w-5 sm:h-5 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/app/school/admin/create/page.tsx",
                                lineNumber: 238,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/school/admin/create/page.tsx",
                            lineNumber: 233,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/school/admin/create/page.tsx",
                        lineNumber: 232,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "container mt-10 sm:mt-20 mx-auto px-4 sm:px-6 py-8 max-w-3xl",
                        children: isLoadingSchools ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center py-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 border-t-2 border-b-2 border-white rounded-full animate-spin",
                                "data-testid": "loading-spinner"
                            }, void 0, false, {
                                fileName: "[project]/src/app/school/admin/create/page.tsx",
                                lineNumber: 245,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/school/admin/create/page.tsx",
                            lineNumber: 244,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-light mb-6 sm:mb-8 text-center",
                                    children: "Create Your School"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/school/admin/create/page.tsx",
                                    lineNumber: 249,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "space-y-6 sm:space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl sm:text-2xl font-light mb-2",
                                                    children: "School Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/school/admin/create/page.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 text-sm mb-2",
                                                    children: "This is usually your name or the name of your organization."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/school/admin/create/page.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "schoolName",
                                                    type: "text",
                                                    value: schoolName,
                                                    onChange: (e)=>setSchoolName(e.target.value),
                                                    className: "w-full px-3 sm:px-4 py-3 rounded-md bg-[#161925] border border-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-white",
                                                    required: true,
                                                    maxLength: 40
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/school/admin/create/page.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right text-sm text-gray-400 mt-1",
                                                    children: [
                                                        schoolName.length,
                                                        "/40"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/school/admin/create/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/school/admin/create/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl sm:text-2xl font-light mb-2",
                                                    children: "School Link"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/school/admin/create/page.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 text-sm mb-2",
                                                    children: "This is how your school will be accessed online by your learners"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/school/admin/create/page.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `bg-[#161925] px-3 sm:px-4 py-3 rounded-t-md sm:rounded-l-md sm:rounded-tr-none text-gray-300 border border-gray-800 sm:text-sm md:text-base overflow-x-auto whitespace-nowrap ${slugError ? 'border-red-500' : ''}`,
                                                            children: baseUrl
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/school/admin/create/page.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "slug",
                                                            type: "text",
                                                            value: slug,
                                                            onChange: (e)=>setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '')),
                                                            className: `flex-1 px-3 sm:px-4 py-3 rounded-b-md sm:rounded-r-md sm:rounded-bl-none bg-[#161925] border border-gray-800 sm:border-l-0 border-t-0 sm:border-t text-white focus:outline-none focus:ring-1 focus:ring-white ${slugError ? 'border-red-500' : ''}`,
                                                            required: true,
                                                            pattern: "[a-z0-9-]+",
                                                            title: "Only lowercase letters, numbers, and hyphens are allowed",
                                                            maxLength: 121
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/school/admin/create/page.tsx",
                                                            lineNumber: 278,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/school/admin/create/page.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row justify-between text-sm mt-1",
                                                    children: [
                                                        slugError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 mb-1 sm:mb-0",
                                                            children: slugError
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/school/admin/create/page.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-gray-400 ${slugError ? 'sm:ml-auto' : 'w-full text-right'}`,
                                                            children: [
                                                                slug.length,
                                                                "/121"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/school/admin/create/page.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/school/admin/create/page.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/school/admin/create/page.tsx",
                                            lineNumber: 271,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-4 sm:pt-6 flex justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50",
                                                disabled: isSubmitting,
                                                children: isSubmitting ? 'Creating...' : 'Create School'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/school/admin/create/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/school/admin/create/page.tsx",
                                            lineNumber: 301,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/school/admin/create/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/school/admin/create/page.tsx",
                        lineNumber: 242,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/school/admin/create/page.tsx",
                lineNumber: 230,
                columnNumber: 13
            }, this),
            showSuccessDialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center overflow-hidden px-4",
                children: [
                    Array.from({
                        length: 8
                    }).map((_, i)=>{
                        const top = Math.random() * 40; // Random starting position
                        const left = Math.random() * 100 + 50; // Random starting position
                        const width = Math.random() * 100 + 40; // Adjusted for mobile: Between 40px and 140px
                        const delay = Math.random() * 2; // Random delay
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$12_reac_5b43fd040792bcb2acb99491a009e4d7$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: "initial",
                            animate: "animate",
                            variants: shootingStarVariants,
                            style: {
                                position: 'absolute',
                                top: `${top}%`,
                                left: `${left}%`,
                                width: `${width}px`,
                                height: '2px',
                                background: 'linear-gradient(90deg, #ffffff, rgba(255, 255, 255, 0))',
                                borderRadius: '999px',
                                filter: 'drop-shadow(0 0 6px rgba(105, 155, 255, 1))',
                                zIndex: 51
                            },
                            transition: {
                                delay,
                                duration: 3
                            }
                        }, `star-${i}`, false, {
                            fileName: "[project]/src/app/school/admin/create/page.tsx",
                            lineNumber: 327,
                            columnNumber: 29
                        }, this);
                    }),
                    Array.from({
                        length: 6
                    }).map((_, i)=>{
                        const left = i % 3 * 30 + 10; // 3 orbs per row, evenly spaced
                        const size = 6 + i % 3 * 3; // Smaller sizes for mobile: 6px, 9px, or 12px
                        const delay = i * 0.4; // Sequential delays
                        const hue = i % 2 === 0 ? 210 + i * 5 : 180 - i * 3; // Blues/purples
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$12_reac_5b43fd040792bcb2acb99491a009e4d7$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: "initial",
                            animate: "animate",
                            variants: orbVariants,
                            style: {
                                position: 'absolute',
                                left: `${left}%`,
                                bottom: '10%',
                                width: `${size}px`,
                                height: `${size}px`,
                                borderRadius: '50%',
                                background: `radial-gradient(circle at 30% 30%, hsla(${hue}, 80%, 75%, 0.8), hsla(${hue}, 80%, 75%, 0) 70%)`,
                                filter: 'blur(1px)',
                                boxShadow: `0 0 8px 2px hsla(${hue}, 80%, 70%, 0.3)`,
                                zIndex: 51
                            },
                            transition: {
                                delay,
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut"
                            }
                        }, `orb-${i}`, false, {
                            fileName: "[project]/src/app/school/admin/create/page.tsx",
                            lineNumber: 359,
                            columnNumber: 29
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$12_reac_5b43fd040792bcb2acb99491a009e4d7$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 0.5
                        },
                        className: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] rounded-lg max-w-md w-full mx-auto relative z-60",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-black rounded-lg p-6 sm:p-8 flex flex-col items-center text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl sm:text-4xl font-light text-white mb-3 sm:mb-4",
                                    children: "Your School is Ready!"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/school/admin/create/page.tsx",
                                    lineNumber: 395,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg sm:text-xl font-light text-white mb-6 sm:mb-8",
                                    children: "An epic journey begins now"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/school/admin/create/page.tsx",
                                    lineNumber: 396,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_$40$babel$2b$core$40$7$2e$2_ed7b963b8b79c6973a19a9ac5bbdca45$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: navigateToSchool,
                                    className: "w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:opacity-90 transition-opacity cursor-pointer",
                                    children: "Open My School"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/school/admin/create/page.tsx",
                                    lineNumber: 398,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/school/admin/create/page.tsx",
                            lineNumber: 394,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/school/admin/create/page.tsx",
                        lineNumber: 388,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/school/admin/create/page.tsx",
                lineNumber: 318,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
}),

};

//# sourceMappingURL=src_app_school_admin_create_page_tsx_9caba5fb._.js.map