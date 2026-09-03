// Geo Study Point - Global Security & Kill Switch Protocol
// Developer: Mr. Swastik Halder

document.addEventListener("DOMContentLoaded", function() {
    
    // ⚠️ Security Check: Admin Panel-এ যেন লকডাউন কাজ না করে
    if (window.location.pathname.includes("teacher_panel.html")) {
        return; 
    }

    // 1. অটোমেটিক লকডাউন স্ক্রিন (HTML) তৈরি করা
    const overlay = document.createElement('div');
    overlay.id = 'systemLockOverlay';
    overlay.className = 'fixed inset-0 z-[9999] bg-slate-900/95 backdrop-blur-xl hidden flex-col items-center justify-center p-6 text-center select-none';
    overlay.style.pointerEvents = 'all';
    
    overlay.innerHTML = `
        <div class="text-7xl mb-6 animate-pulse">🚧</div>
        <h1 class="text-3xl sm:text-4xl font-black text-white uppercase tracking-widest mb-3">System Maintenance</h1>
        <p class="text-slate-300 font-bold text-sm sm:text-base max-w-md mb-6 leading-relaxed">
            The platform is currently locked by the Super Admin for security upgrades and data maintenance. All portals are temporarily disabled.
        </p>
        <div class="bg-slate-800 p-5 rounded-2xl border border-slate-700 w-full max-w-sm shadow-2xl">
            <p class="text-xs text-red-400 font-black uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                <span>🔴</span> Access Denied
            </p>
            <p id="lockTimerDisplay" class="text-sm text-white font-mono font-bold mt-2 hidden">
                Estimated Unlock: <span id="unlockCountdown" class="text-emerald-400">Loading...</span>
            </p>
        </div>
    `;
    
    // পেজের বডিতে স্ক্রিনটা ইনজেক্ট করা
    document.body.appendChild(overlay);

    // 2. লকডাউন এনফোর্স লজিক (প্রতি সেকেন্ডে চেক করবে)
    function enforceLockdown() {
        const isLocked = localStorage.getItem('geoStudyLockdown') === 'true';
        
        if (isLocked) {
            overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // স্ক্রোলিং বন্ধ
            
            const unlockTime = localStorage.getItem('geoStudyUnlockTime');
            if (unlockTime) {
                document.getElementById('lockTimerDisplay').classList.remove('hidden');
                const now = new Date().getTime();
                const distance = unlockTime - now;
                
                if (distance < 0) {
                    // সময় শেষ হলে অটো-আনলক
                    localStorage.setItem('geoStudyLockdown', 'false');
                    localStorage.removeItem('geoStudyUnlockTime');
                    overlay.style.display = 'none';
                    document.body.style.overflow = 'auto';
                } else {
                    // কাউন্টডাউন দেখানো
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    document.getElementById('unlockCountdown').innerText = `${minutes}m ${seconds}s`;
                }
            } else {
                document.getElementById('lockTimerDisplay').classList.add('hidden');
            }
        } else {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // চালু করা
    setInterval(enforceLockdown, 1000);
    enforceLockdown();
});
