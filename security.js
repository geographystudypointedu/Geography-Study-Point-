// 🚨 GEOGRAPHY STUDY POINT - GLOBAL SECURITY & MAINTENANCE KILL SWITCH 🚨

// 🟢 DEVELOPMENT MODE (Temporarily disabled for testing purposes)
// Change these to 'true' when you want to go live with security or maintenance.
const KILL_SWITCH_ACTIVE = false;      // false = Normal operation, true = Maintenance mode active
const STRICT_SECURITY_ACTIVE = false;  // false = Dev tools allowed, true = Right-click & Inspect Element blocked

// Check if the current page is the admin panel. Maintenance screen will not block the admin panel.
const isTeacherPanel = window.location.pathname.includes('teacher_panel.html');

// 1. GTranslate Auto-Bengali Cookie Logic (Always active to ensure default language)
if (document.cookie.indexOf('googtrans') === -1) {
    document.cookie = 'googtrans=/en/bn; path=/';
    document.cookie = 'googtrans=/en/bn; domain=' + window.location.hostname + '; path=/';
}

// 2. Maintenance Mode Logic (Executes only if KILL_SWITCH_ACTIVE is true)
if (KILL_SWITCH_ACTIVE && !isTeacherPanel) {
    document.addEventListener("DOMContentLoaded", () => {
        
        // Replacing main body content with the maintenance screen
        document.body.innerHTML = `
            <!-- 🌍 Premium GTranslate -->
            <div class="fixed top-4 right-4 sm:top-6 sm:right-6 z-[999] bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm rounded-full px-4 py-2 flex items-center gap-2">
                <span class="text-indigo-600 text-lg"><i class="fa-solid fa-language"></i></span>
                <div class="gtranslate_wrapper"></div>
            </div>

            <!-- Scrollable Wrapper -->
            <div class="min-h-screen bg-slate-100 flex flex-col justify-between items-center w-full font-sans">
                
                <!-- 🚧 Main Maintenance Box -->
                <div class="flex-grow flex flex-col items-center justify-center p-4 sm:p-8 w-full max-w-5xl xl:max-w-7xl text-center mt-20 mb-10">
                    <div class="text-5xl sm:text-7xl mb-6 animate-bounce">😊 ⚠️ 🚧</div>
                    <h1 class="text-3xl sm:text-5xl md:text-6xl font-black text-rose-600 tracking-tight uppercase mb-2 drop-shadow-sm">Temporarily Unavailable</h1>
                    <h2 class="text-lg sm:text-2xl font-extrabold text-slate-800 uppercase tracking-widest mb-10">System Maintenance</h2>

                    <div class="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-2xl border-t-8 border-rose-500 w-full max-w-3xl space-y-5 text-sm sm:text-base md:text-lg text-slate-700 font-medium text-left leading-relaxed">
                        <p class="font-bold text-slate-800 text-center text-lg sm:text-xl border-b pb-4 mb-4">Our platform is currently temporarily restricted for scheduled maintenance, security enhancements, and necessary system updates.</p>
                        <p class="flex gap-3 items-start"><span class="text-xl">🛠️</span> <span>Our team is carrying out necessary work to further improve the security, stability, and performance of the system.</span></p>
                        <p class="flex gap-3 items-start"><span class="text-xl">⏳</span> <span>Services will resume normally once the maintenance is complete.</span></p>
                        <p class="flex gap-3 items-start"><span class="text-xl">😔</span> <span>We sincerely apologize for the temporary inconvenience.</span></p>
                        <p class="flex gap-3 items-start"><span class="text-xl">🙏</span> <span>Thank you sincerely for your patience, cooperation, and trust.</span></p>
                        
                        <div class="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 mt-6 shadow-inner">
                            <p class="flex gap-3 items-start"><span class="text-xl">💙</span> <span>Sincere apologies on behalf of Geo Study Point and the Development Team.</span></p>
                            <p class="font-black mt-3 text-indigo-700 text-center">Ensuring a safer, more reliable, and advanced educational experience for you is our commitment.</p>
                        </div>
                        
                        <div class="mt-8 text-right border-t border-slate-200 pt-6">
                            <p class="font-black text-slate-900 text-lg">— Swastik Halder</p>
                            <p class="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Developer & Architect</p>
                            <p class="text-xs text-slate-500 font-bold uppercase tracking-widest">Geo Study Point</p>
                        </div>
                    </div>

                    <!-- 🔐 Admin Access Button -->
                    <div class="mt-12 flex flex-col items-center w-full max-w-sm">
                        <button onclick="window.location.href='teacher_panel.html'" class="w-full bg-slate-900 hover:bg-black text-white font-extrabold py-5 px-6 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 text-sm sm:text-base">
                            <span class="text-xl">🔐</span> <span>Admin Access</span>
                        </button>
                        <p class="text-[10px] text-slate-500 mt-3 font-bold uppercase tracking-widest">Authorized Personnel Only</p>
                    </div>
                </div>

                <!-- 🌐 Footer & Help Support -->
                <div class="w-full bg-white pt-10 pb-8 mt-auto rounded-t-[2.5rem] border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] relative z-10">
                    <div class="container mx-auto px-6 flex flex-col items-center text-center space-y-6 max-w-3xl relative z-10">
                        <div class="flex flex-col items-center gap-3">
                            <button onclick="window.location.href='mailto:geograpystudypoint.edu@gmail.com'" class="bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-full text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all">✉️ Email Support</button>
                            <a href="tel:+918670636716" class="text-xs text-slate-600 font-bold hover:text-indigo-600 transition-all">📞 Helpline: +91 86706 36716</a>
                        </div>
                        
                        <div class="flex gap-5 pt-2">
                            <a href="https://www.facebook.com/share/1Bz6MtVnVS/" target="_blank" class="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all text-xl shadow-md"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/subhasish4031?igsi=MTdpbGk2NXlieG9xYg==" target="_blank" class="w-12 h-12 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all text-xl shadow-md"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://wa.me/918670636716" target="_blank" class="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all text-xl shadow-md"><i class="fa-brands fa-whatsapp"></i></a>
                        </div>
                        
                        <div class="w-full max-w-lg bg-white border border-emerald-100 p-6 rounded-2xl mt-4 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative">
                            <div class="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 border border-emerald-200">
                                <span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>
                                Beta Version 0.1
                            </div>
                            <h3 class="text-lg sm:text-xl font-black text-slate-900 tracking-wide mt-1">Mr. Swastik Halder</h3>
                            <p class="text-xs text-indigo-600 font-extrabold uppercase tracking-widest mb-3">Lead Developer & System Architect</p>
                            <p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">🛠️ Designed • Developed • Architected</p>
                            <p class="text-[9px] text-slate-400 font-medium tracking-wide">UI/UX • System Architecture • Platform Development • Security • Performance</p>
                            <div class="mt-4 flex justify-center gap-3 text-2xl animate-bounce"><span>⚠️</span><span>🚧</span></div>
                        </div>
                        
                        <div class="flex flex-wrap justify-center gap-4 sm:gap-6 pt-4 border-t border-slate-100 w-full">
                            <a href="policy.html?doc=privacy" target="_blank" class="text-[11px] font-bold text-slate-600 hover:text-indigo-600 transition-colors">🔒 Privacy Policy</a>
                            <a href="policy.html?doc=terms" target="_blank" class="text-[11px] font-bold text-slate-600 hover:text-indigo-600 transition-colors">📜 Terms & Conditions</a>
                            <a href="policy.html?doc=cookie" target="_blank" class="text-[11px] font-bold text-slate-600 hover:text-indigo-600 transition-colors">🍪 Cookie Policy</a>
                            <a href="policy.html?doc=disclaimer" target="_blank" class="text-[11px] font-bold text-slate-600 hover:text-indigo-600 transition-colors">⚠️ Disclaimer</a>
                        </div>
                        
                        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 w-full text-left">
                            <p class="text-[10px] font-black text-slate-700 uppercase mb-1">© 2026 Geo Study Point. All Rights Reserved.</p>
                            <p class="text-[9px] text-slate-500 leading-relaxed text-justify">
                                <strong>Copyright & Content Protection Notice:</strong> Geo Study Point website, digital content, design, text, graphics, and system architecture cannot be copied, republished, or used commercially, in whole or in part, without permission. We reserve the right to take legal action against unauthorized use according to applicable laws.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        \`;

        // Restore body scrolling
        document.body.style.overflow = "auto";
        
        // Reloading GTranslate with detection disabled
        window.gtranslateSettings = { 
            "default_language": "en", 
            "languages": ["en", "bn", "hi"], 
            "wrapper_selector": ".gtranslate_wrapper", 
            "flag_size": 20,
            "detect_browser_language": false 
        };
        const script = document.createElement('script');
        script.src = "https://cdn.gtranslate.net/latest/lc.js";
        script.defer = true;
        document.body.appendChild(script);
    });
}

// 🛡️ 3. Extra Global Security Measures (Executes only if STRICT_SECURITY_ACTIVE is true)
if (STRICT_SECURITY_ACTIVE) {
    document.addEventListener("contextmenu", (e) => { e.preventDefault(); }); 
    document.addEventListener("keydown", (e) => {
        if (e.key === "F12") { e.preventDefault(); }
        if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) { e.preventDefault(); }
        if (e.ctrlKey && e.key === "U") { e.preventDefault(); }
    });
}
