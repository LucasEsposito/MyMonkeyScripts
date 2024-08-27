// ==UserScript==
// @name         Bypass paste restrictions
// @source       https://github.com/LucasEsposito/MyMonkeyScripts
// @version      0.1.0
// @description  This script bypasses the restrictions set up on some sites, where pasting is disabled. To not break any site, it's recommended that you keep the script disabled and run it manually (while still keeping it disabled) only on the sites you want to.
// @author       Lucas Esposito
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// @updateURL    https://raw.githubusercontent.com/LucasEsposito/MyMonkeyScripts/main/scripts/bypass-paste-restrictions.user.js
// @downloadURL  https://raw.githubusercontent.com/LucasEsposito/MyMonkeyScripts/main/scripts/bypass-paste-restrictions.user.js
// ==/UserScript==

(function() {
    'use strict';

    const allowPaste = function(event){
        event.stopImmediatePropagation();
        return true;
    };

    document.addEventListener('paste', allowPaste, true);
})();
