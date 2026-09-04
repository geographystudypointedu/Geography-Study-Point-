/**
 * ============================================================================
 * 🚨 GEO STUDY POINT - MASTER SECURITY & MAINTENANCE CONTROLLER 🚨
 * Status: ALL SECURITY FEATURES DISABLED BY DEFAULT (As requested)
 * ============================================================================
 */

// 🟢 ALL CONTROLLERS SET TO FALSE (No blocks, no restrictions)
const KILL_SWITCH_ACTIVE = false;      // Maintained false so website never locks down
const STRICT_SECURITY_ACTIVE = false;  // Disabled right-click/F12 blocks so you can test smoothly

/**
 * ----------------------------------------------------------------------------
 * 1. GTranslate Automatic Language Enforcement
 * Ensures default to Bengali safely without breaking UI layers.
 * ----------------------------------------------------------------------------
 */
if (document.cookie.indexOf('googtrans') === -1) {
    document.cookie = 'googtrans=/en/bn; path=/';
    document.cookie = 'googtrans=/en/bn; domain=' + window.location.hostname + '; path=/';
}

/**
 * ----------------------------------------------------------------------------
 * 2. Maintenance Mode / Kill Switch 
 * (Completely bypassed because KILL_SWITCH_ACTIVE is false)
 * ----------------------------------------------------------------------------
 */
if (KILL_SWITCH_ACTIVE) {
    // Will only execute if explicitly enabled by Admin later
    console.warn("⚠️ Kill switch is active.");
}

/**
 * ----------------------------------------------------------------------------
 * 3. Frontend Strict Protection 
 * (Completely bypassed because STRICT_SECURITY_ACTIVE is false)
 * ----------------------------------------------------------------------------
 */
if (STRICT_SECURITY_ACTIVE) {
    // Will only execute if explicitly enabled later
    document.addEventListener("contextmenu", (e) => { e.preventDefault(); }); 
}
