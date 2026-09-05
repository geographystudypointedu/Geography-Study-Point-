/**
 * ============================================================================
 * 🚨 GEO STUDY POINT - MASTER PROTOCOL & SECURITY CONTROLLER
 * Architecture: 2027 Zero-Trust Standard
 * ============================================================================
 */

'use strict';

const GeoMasterProtocol = (() => {
    
    // ⚙️ GLOBAL ACCESS SWITCHES (Central Control Panel)
    const CONFIG = {
        MAINTENANCE_MODE: true,  // 🔴 TRUE করলে সব পেজ একসাথে মেইনটেন্যান্সে চলে যাবে
        forceBengali: true,      // 🟢 অটোমেটিক বাংলা ভাষা সেট করবে
        enableShutter: true,     // 🟢 লোডিংয়ের সময় শাটার অ্যানিমেশন দেখাবে
        forceBoldText: true,     // 🟢 ওয়েবসাইটের সমস্ত লেখা বোল্ড (Bold) করবে
        strictSecurity: true     // 🛡️ ফ্রন্টএন্ড হ্যাকিং ডিটারেন্ট চালু রাখবে
    };

    /**
     * 🌐 1. AUTO BENGALI LANGUAGE INJECTION
     */
    const enforceBengali = () => {
        if (!CONFIG.forceBengali) return;
        window.gtranslateSettings = {
            "default_language": "bn",
            "native_language_names": true,
            "languages": ["bn", "en", "hi"],
            "wrapper_selector": ".gtranslate_wrapper",
            "detect_browser_language": false
        };
    };

    /**
     * 🔠 2. FORCE BOLD TYPOGRAPHY
     */
    const enforceBoldTypography = () => {
        if (!CONFIG.forceBoldText) return;
        const style = document.createElement('style');
        style.innerHTML = `
            body, p, h1, h2, h3, h4, h5, h6, span, a, div, button, input, select, textarea { 
                font-weight: 800 !important; 
            }
        `;
        document.head.appendChild(style);
    };

    /**
     * 🎬 3. SHUTTER ENTRY ANIMATION (Dynamically Injected)
     */
    const injectShutter = () => {
        if (!CONFIG.enableShutter) return;
        
        // শাটারের CSS
        const style = document.createElement('style');
        style.innerHTML = `
            .master-shutter { position: fixed; inset: 0; z-index: 999999; display: flex; pointer-events: none; }
            .shutter-l, .shutter-r { width: 50%; height: 100%; background: #0f172a; transition: transform 1.2s cubic-bezier(0.77, 0, 0.175, 1); }
            .shutter-l { border-right: 2px solid #6366f1; }
            .shutter-r { border-left: 2px solid #6366f1; }
            .shutter-content { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-weight: 900; z-index: 1000000; text-align: center; transition: opacity 0.5s; width: 100%; }
            .shutter-loaded .shutter-l { transform: translateX(-100%); }
            .shutter-loaded .shutter-r { transform: translateX(100%); }
            .shutter-loaded .shutter-content { opacity: 0; }
        `;
        document.head.appendChild(style);

        // শাটারের HTML
        const shutterDiv = document.createElement('div');
        shutterDiv.className = 'master-shutter';
        shutterDiv.id = 'masterShutter';
        shutterDiv.innerHTML = `
            <div class="shutter-l"></div>
            <div class="shutter-r"></div>
            <div class="shutter-content px-4">
                <i class="fa-solid fa-shield-halved" style="color:#6366f1; font-size:4rem; margin-bottom:1rem; animation: bounce 1s infinite;"></i>
                <h1 style="font-size: 2.5rem; text-transform: uppercase; letter-spacing: 2px; text-shadow: 0 4px 10px rgba(0,0,0,0.5);">Geo Study Point</h1>
                <p style="color:#34d399; font-size: 0.8rem; margin-top:15px; text-transform: uppercase; letter-spacing: 2px;">
                    <i class="fa-solid fa-circle-notch fa-spin"></i> Initializing Secure Environment...
                </p>
            </div>
        `;
        document.body.appendChild(shutterDiv);

        // পেজ লোড হওয়ার পর শাটার রিমুভ করা
        window.addEventListener('load', () => {
            setTimeout(() => {
                shutterDiv.classList.add('shutter-loaded');
                setTimeout(() => shutterDiv.remove(), 1500);
            }, 800);
        });
    };

    /**
     * 🔒 4. MAINTENANCE LOCKDOWN PROTOCOL
     */
    const activateMaintenance = () => {
        if (!CONFIG.MAINTENANCE_MODE) return;

        // মূল কন্টেন্টগুলো লুকিয়ে ফেলা (ফুটার ও মোডাল বাদে)
        const coreElements = document.querySelectorAll('section, main, .container');
        coreElements.forEach(el => el.style.display = 'none');

        // অ্যানাউন্সমেন্ট টিকার আপডেট করা
        const ticker = document.querySelector('.animate-marquee');
        if (ticker) {
            ticker.innerHTML = "⚠️ MAINTENANCE PROTOCOL ACTIVE: All core portals are temporarily suspended for scheduled security upgrades. Please stand by. ⚠️";
            if(ticker.parentElement) {
                ticker.parentElement.style.backgroundColor = '#e11d48'; // Rose 600
            }
        }

        // ফুটারের ডাইনামিক স্ট্যাটাস আপডেট করা
        const statusEl = document.getElementById('dynamic-status');
        if (statusEl) {
            statusEl.innerHTML = '<span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#f59e0b; margin-right:6px; animation: pulse 2s infinite;"></span> System Status: Maintenance';
            statusEl.style.color = '#d97706'; // Amber 600
        }

        // মেইনটেন্যান্স ব্লক ইনজেক্ট করা
        if (!document.getElementById('master-maintenance-block')) {
            const mDiv = document.createElement('div');
            mDiv.id = 'master-maintenance-block';
            mDiv.className = 'w-full pt-32 pb-20 px-4 sm:px-6 flex-grow flex items-center justify-center relative overflow-hidden';
            mDiv.style.background = 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)';
            
            mDiv.innerHTML = `
                <div style="background: rgba(255,255,255,0.9); backdrop-filter: blur(20px); padding: 3rem 2rem; border-radius: 2.5rem; border-top: 8px solid #e11d48; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); text-align: center; max-width: 800px; width: 100%;">
                    <div style="width: 90px; height: 90px; background: #ffe4e6; color: #e11d48; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 1.5rem; animation: pulse 2s infinite; box-shadow: inset 0 4px 6px rgba(0,0,0,0.1);">
                        <i class="fa-solid fa-lock"></i>
                    </div>
                    <h1 style="font-size: clamp(2rem, 5vw, 4rem); color: #0f172a; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; font-weight: 900;">System Locked</h1>
                    <h2 style="font-size: clamp(0.9rem, 2vw, 1.2rem); color: #e11d48; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1.5rem; font-weight: 800;">Scheduled Maintenance Protocol Active</h2>
                    <p style="color: #475569; font-size: clamp(1rem, 2vw, 1.2rem); line-height: 1.6; margin-bottom: 2rem; max-width: 600px; margin-inline: auto;">All authentication channels and student portals are temporarily suspended and encrypted for core security upgrades.</p>
                    <div style="display: inline-flex; align-items: center; gap: 10px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 10px 20px; border-radius: 12px;">
                        <span style="width: 10px; height: 10px; border-radius: 50%; background: #f59e0b; animation: pulse 2s infinite;"></span>
                        <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; color: #334155;"><i class="fa-solid fa-network-wired" style="color:#94a3b8; margin-right:5px;"></i> Encrypted Channel: Active</span>
                    </div>
                </div>
            `;
            
            const footer = document.querySelector('footer');
            if (footer && footer.parentNode) {
                footer.parentNode.insertBefore(mDiv, footer);
            } else {
                document.body.appendChild(mDiv);
            }
        }
    };

    /**
     * 🛡️ 5. FRONTEND DETERRENT LAYER
     */
    const enforceSecurity = () => {
        if (!CONFIG.strictSecurity) return;
        
        // Anti-Bot
        const isBot = navigator.webdriver || window.document.documentElement.getAttribute("webdriver");
        if (isBot) document.body.innerHTML = "<h1 style='color:red; text-align:center; margin-top:20%; font-size:3rem;'>Unauthorized Automation Detected.</h1>";

        // DevTools Trap
        setInterval(() => {
            const start = performance.now();
            debugger; 
            const end = performance.now();
            if (end - start > 100) window.location.replace("about:blank");
        }, 1000);

        // Block Keybindings
        document.addEventListener('contextmenu', e => e.preventDefault());
        document.addEventListener('keydown', e => {
            if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) || (e.ctrlKey && ['U', 'S', 'P'].includes(e.key))) {
                e.preventDefault();
            }
        }, { capture: true });
    };

    /**
     * 🚀 INITIALIZE MASTER PROTOCOL
     */
    const init = () => {
        enforceBengali();
        enforceBoldTypography();
        injectShutter();
        activateMaintenance();
        enforceSecurity();
    };

    return { init };
})();

// Execute the protocol immediately
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', GeoMasterProtocol.init);
} else {
    GeoMasterProtocol.init();
}
