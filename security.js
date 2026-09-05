/**
 * 🚨 GEO STUDY POINT - LAYER 1 (EXTREME DETERRENT)
 * WARNING: This script contains aggressive anti-debugging and anti-bot measures.
 */
'use strict';

const GeoExtremeSecurity = (() => {
    
    // 1. Anti-Bot & Headless Browser Detection
    const detectBots = () => {
        const isBot = navigator.webdriver || 
                      window.document.documentElement.getAttribute("webdriver") || 
                      !!window.callPhantom || 
                      !!window._phantom;
        
        if (isBot) {
            document.body.innerHTML = "<h1>Unauthorized Automation Detected. Connection Terminated.</h1>";
            while(true) { window.location.reload(); } // Infinite reload loop for bots
        }
    };

    // 2. Aggressive Anti-Debugging (Memory Trap)
    const trapDevTools = () => {
        setInterval(() => {
            const before = new Date().getTime();
            debugger; // Triggers pause if DevTools is open
            const after = new Date().getTime();
            
            if (after - before > 100) {
                // If paused, flood the console and clear document
                document.body.innerHTML = "";
                for(let i=0; i<1000; i++) {
                    console.error("%c🚨 SECURITY BREACH DETECTED 🚨", "font-size: 50px; color: red;");
                }
                window.location.replace("about:blank");
            }
        }, 500); // Checks every half second
    };

    // 3. Absolute Key & Context Menu Blocking
    const enforceBlocks = () => {
        document.addEventListener('contextmenu', e => e.preventDefault());
        document.addEventListener('keydown', e => {
            if (
                e.key === 'F12' || 
                (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
                (e.ctrlKey && ['U', 'S', 'P'].includes(e.key))
            ) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, { capture: true });
    };

    // 4. Overwrite Console to Prevent Data Leakage
    const silenceConsole = () => {
        const methods = ['log', 'warn', 'info', 'dir', 'trace'];
        methods.forEach(method => {
            console[method] = function() {
                // Silently swallow output
            };
        });
    };

    const init = () => {
        detectBots();
        trapDevTools();
        enforceBlocks();
        silenceConsole();
    };

    return { init };
})();

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', GeoExtremeSecurity.init);
} else {
    GeoExtremeSecurity.init();
}
