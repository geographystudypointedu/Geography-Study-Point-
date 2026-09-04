/**
 * ============================================================================
 * 🚨 GEO STUDY POINT - MASTER SECURITY & MAINTENANCE CONTROLLER 🚨
 * Architecture: Frontend Global Defense Layer
 * ============================================================================
 */

// 🟢 CONFIGURATION TOGGLES (Set to 'true' for Production / Live Mode)
const KILL_SWITCH_ACTIVE = false;      // Set 'true' to activate Global Maintenance Mode
const STRICT_SECURITY_ACTIVE = false;  // Set 'true' to block Right-Click, F12, and Inspect Element

// Identify if the current page is the Teacher/Admin Panel
const isTeacherPanel = window.location.pathname.includes('teacher_panel.html');

/**
 * ----------------------------------------------------------------------------
 * 1. GTranslate Automatic Language Enforcement (High Priority)
 * Ensures the platform defaults to Bengali for first-time visitors across all pages.
 * ----------------------------------------------------------------------------
 */
if (document.cookie.indexOf('googtrans') === -1) {
    document.cookie = 'googtrans=/en/bn; path=/';
    document.cookie = 'googtrans=/en/bn; domain=' + window.location.hostname + '; path=/';
}

/**
 * ----------------------------------------------------------------------------
 * 2. Global Maintenance Mode (Kill Switch)
 * Overwrites the entire DOM with a secure, professional maintenance screen.
 * Bypasses the Teacher Panel so admins can still manage the system.
 * ----------------------------------------------------------------------------
 */
if (KILL_SWITCH_ACTIVE && !isTeacherPanel) {
    document.addEventListener("DOMContentLoaded", () => {
        
        // Lock body scrolling
        document.body.style.overflow = "auto";
        document.body.className = "bg-slate-100 font-sans text-slate-800 selection:bg-indigo-500 selection:text-white";
        
        // Inject Maintenance UI (International Standard Glassmorphism)
        document.body.innerHTML = `
            <!-- 🌍 GTranslate inside Maintenance -->
            <div class="fixed top-4 right-4 sm:top-6 sm:right-6 z-[9999] group overflow-visible">
                <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-60 animate-pulse"></div>
                <div class="relative bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-full px-3 py-2 flex items-center gap-2">
                    <span class="text-indigo-600 text-lg"><i class="fa-solid fa-earth-americas"></i></span>
                    <div class="gtranslate_wrapper"></div>
                </div>
            </div>

            <!-- Maintenance Container -->
            <div class="min-h-screen flex flex-col justify-between items-center w-full relative overflow-hidden">
                
                <!-- Background Decorative Elements -->
                <div class="absolute top-10 left-10 w-48 h-48 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
                <div class="absolute bottom-10 right-10 w-48 h-48 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style="animation-delay: 2s;"></div>

                <div class="flex-grow flex flex-col items-center justify-center p-4 sm:p-8 w-full max-w-4xl text-center relative z-10 mt-16 mb-12">
                    
                    <div class="text-5xl sm:text-7xl mb-6 animate-bounce">
                        <i class="fa-solid fa-person-digging text-rose-500 drop-shadow-lg"></i>
                    </div>
                    
                    <h1 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase mb-2">Temporarily Unavailable</h1>
                    <h2 class="text-sm sm:text-lg font-bold text-indigo-600 uppercase tracking-widest mb-10 bg-indigo-100 inline-block px-4 py-1.5 rounded-full border border-indigo-200">
                        System Maintenance Active
                    </h2>

                    <div class="bg-white/90 backdrop-blur-xl p-8 sm:p-12 rounded-[2rem] shadow-2xl border-t-8 border-rose-500 w-full space-y-5 text-sm sm:text-base text-slate-700 font-medium text-left leading-relaxed">
                        <p class="font-black text-slate-900 text-center text-lg sm:text-xl border-b border-slate-200 pb-4 mb-4">
                            Our platform is undergoing scheduled maintenance and security enhancements.
                        </p>
                        
                        <ul class="space-y-4">
                            <li class="flex gap-3 items-start"><i class="fa-solid fa-screwdriver-wrench text-xl text-slate-400 mt-0.5"></i> <span>Our engineering team is deploying necessary updates to improve system stability and performance.</span></li>
                            <li class="flex gap-3 items-start"><i class="fa-solid fa-hourglass-half text-xl text-slate-400 mt-0.5"></i> <span>All services, including examinations and result portals, will resume shortly.</span></li>
                            <li class="flex gap-3 items-start"><i class="fa-solid fa-hands-praying text-xl text-slate-400 mt-0.5"></i> <span>We sincerely apologize for this temporary interruption and appreciate your patience.</span></li>
                        </ul>
                        
                        <div class="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 text-indigo-900 mt-8 shadow-inner">
                            <p class="font-black text-center text-indigo-800">Ensuring a secure, reliable, and advanced educational experience is our top priority.</p>
                        </div>
                        
                        <div class="mt-8 text-right border-t border-slate-200 pt-6">
                            <p class="font-black text-slate-900 text-lg uppercase tracking-wider">— Swastik Halder</p>
                            <p class="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Lead Developer & System Architect</p>
                        </div>
                    </div>

                    <!-- Admin Access Portal -->
                    <div class="mt-12 flex flex-col items-center w-full max-w-xs">
                        <button onclick="window.location.href='teacher_panel.html'" class="w-full bg-slate-900 hover:bg-black text-white font-black py-4 px-6 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                            <i class="fa-solid fa-unlock-keyhole"></i> <span>Admin Access</span>
                        </button>
                        <p class="text-[9px] text-slate-500 mt-3 font-bold uppercase tracking-widest">Authorized Personnel Only</p>
                    </div>
                </div>

                <!-- Footer -->
                <footer class="w-full bg-white border-t border-slate-200 py-6 text-center z-10">
                    <p class="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">© 2026 Geo Study Point. All Rights Reserved.</p>
                </footer>
            </div>
        `;

        // Re-initialize GTranslate script for the new DOM
        window.gtranslateSettings = { "default_language": "en", "languages": ["en", "bn", "hi"], "wrapper_selector": ".gtranslate_wrapper", "detect_browser_language": false };
        const script = document.createElement('script');
        script.src = "https://cdn.gtranslate.net/latest/lc.js";
        script.defer = true;
        document.body.appendChild(script);
    });
}

/**
 * ----------------------------------------------------------------------------
 * 3. Frontend Strict Protection (Anti-Cheat & Anti-Scraping)
 * Blocks Right-click, Inspect Element (F12), View Source (Ctrl+U), and Console.
 * Executed only if STRICT_SECURITY_ACTIVE is true.
 * ----------------------------------------------------------------------------
 */
if (STRICT_SECURITY_ACTIVE) {
    
    // Disable Right-Click
    document.addEventListener("contextmenu", (e) => { 
        e.preventDefault(); 
    }); 
    
    // Disable Keyboard Shortcuts for Developer Tools
    document.addEventListener("keydown", (e) => {
        // Prevent F12
        if (e.key === "F12") { 
            e.preventDefault(); 
        }
        // Prevent Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element Inspect)
        if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) { 
            e.preventDefault(); 
        }
        // Prevent Ctrl+U (View Source)
        if (e.ctrlKey && e.key === "U") { 
            e.preventDefault(); 
        }
    });

    // Optional: Advanced Console Clear (Deters casual console inspection)
    setInterval(() => {
        console.clear();
        console.log("%cGeo Study Point Security", "color: red; font-size: 20px; font-weight: bold;");
        console.log("%cUnauthorized access to this console is prohibited.", "color: grey; font-size: 14px;");
    }, 2000);
}
