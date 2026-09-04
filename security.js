// ============================================================================
// 🚨 GEO STUDY POINT - GLOBAL SECURITY & MAINTENANCE KILL SWITCH 🚨
// ============================================================================

// ⚠️ KILL SWITCH CONTROLLER: 
// true = Maintenance Mode is ON (Website is hidden, maintenance screen is shown)
// false = Website runs normally
const KILL_SWITCH_ACTIVE = true; 

if (KILL_SWITCH_ACTIVE) {
    document.addEventListener("DOMContentLoaded", () => {
        
        // Hide existing body content and inject the Maintenance Screen
        document.body.innerHTML = `
            <!-- 🌍 Premium GTranslate Language Selector (Fixed Top Right) -->
            <div class="fixed top-12 right-4 sm:top-14 sm:right-6 z-[9999999] bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm rounded-full px-4 py-2 flex items-center gap-2 transition-all hover:shadow-md">
                <span class="text-indigo-600 text-lg"><i class="fa-solid fa-language"></i></span>
                <div class="gtranslate_wrapper"></div>
            </div>

            <div class="fixed inset-0 z-[999999] bg-slate-100 flex flex-col justify-between items-center w-full min-h-screen overflow-y-auto font-sans">
                
                <!-- 🚧 Main Maintenance Box (Responsive for 8K & Super Computers) -->
                <div class="flex-grow flex flex-col items-center justify-center p-4 sm:p-8 w-full max-w-5xl xl:max-w-7xl 2xl:max-w-[120rem] text-center my-10">
                    
                    <div class="text-5xl sm:text-7xl mb-6 animate-bounce">😊 ⚠️ 🚧</div>
                    <h1 class="text-3xl sm:text-5xl md:text-6xl font-black text-rose-600 tracking-tight uppercase mb-2 drop-shadow-sm">Temporarily Unavailable</h1>
                    <h2 class="text-lg sm:text-2xl font-extrabold text-slate-800 uppercase tracking-widest mb-10">System Maintenance</h2>

                    <div class="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-2xl border-t-8 border-rose-500 w-full max-w-3xl space-y-5 text-sm sm:text-base md:text-lg text-slate-700 font-medium text-left leading-relaxed">
                        
                        <p class="font-bold text-slate-800 text-center text-lg sm:text-xl border-b pb-4 mb-4">
                            Our platform is currently undergoing scheduled maintenance, security upgrades, and necessary system updates.
                        </p>
                        
                        <p class="flex gap-3 items-start"><span class="text-xl">🛠️</span> <span>Our team is working hard to enhance the security, stability, and performance of the system.</span></p>
                        <p class="flex gap-3 items-start"><span class="text-xl">⏳</span> <span>Services will resume normally once the maintenance is successfully completed.</span></p>
                        <p class="flex gap-3 items-start"><span class="text-xl">😔</span> <span>We sincerely apologize for the temporary inconvenience caused.</span></p>
                        <p class="flex gap-3 items-start"><span class="text-xl">🙏</span> <span>Thank you for your patience, cooperation, and continued trust in us.</span></p>
                        
                        <div class="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 mt-6 shadow-inner">
                            <p class="flex gap-3 items-start"><span class="text-xl">💙</span> <span>Sincere apologies from Geo Study Point and the Development Team.</span></p>
                            <p class="font-black mt-3 text-indigo-700 text-center">We are committed to ensuring a safer, more reliable, and advanced educational experience for you.</p>
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

                <!-- 🌐 Footer & Help Support (Original Design Preserved) -->
                <div class="w-full bg-white pt-10 pb-8 mt-auto rounded-t-[2.5rem] border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] relative overflow-hidden">
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
                                <strong>Copyright & Content Protection Notice:</strong> Geo Study Point website, digital content, design, text, graphics, and system architecture cannot be copied, republished, or commercially used in whole or in part without permission. The right to take legal action against unauthorized use is strictly reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Prevent background scrolling while maintenance mode is active
        document.body.style.overflow = "hidden";
        
        // Re-initialize GTranslate specifically for the injected HTML
        if (typeof window.gtranslateSettings !== 'undefined') {
            const script = document.createElement('script');
            script.src = "https://cdn.gtranslate.net/latest/lc.js";
            script.defer = true;
            document.body.appendChild(script);
        }
    });
}

// ============================================================================
// 🛡️ EXTRA GLOBAL SECURITY MEASURES (Active Always)
// ============================================================================

// Prevent Right Click
document.addEventListener("contextmenu", (e) => { e.preventDefault(); }); 

// Prevent Developer Tools & Source Code Viewing
document.addEventListener("keydown", (e) => {
    // Disable F12
    if (e.key === "F12") { e.preventDefault(); }
    
    // Disable Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C (Developer Tools)
    if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) { 
        e.preventDefault(); 
    }
    
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === "U") { 
        e.preventDefault(); 
    }
});
