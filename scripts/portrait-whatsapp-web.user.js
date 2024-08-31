// ==UserScript==
// @name         Portrait WhatsApp
// @source       https://github.com/LucasEsposito/MyMonkeyScripts
// @version      0.2.1
// @description  Removes What's App Web left menu and reduces the size of the chats column, making it less cluttered and better fitting for portrait screens.
// @author       Lucas Esposito
// @match        *://web.whatsapp.com/*
// @grant        none
// @tag          style
// @run-at       document-idle
// @updateURL    https://raw.githubusercontent.com/LucasEsposito/MyMonkeyScripts/main/scripts/portrait-whatsapp-web.user.js
// @downloadURL  https://raw.githubusercontent.com/LucasEsposito/MyMonkeyScripts/main/scripts/portrait-whatsapp-web.user.js
// @supportURL   https://github.com/LucasEsposito/MyMonkeyScripts/issues
// ==/UserScript==

(function() {
    'use strict';

    function stylize() {
        // Remove left header bar from the main screen
        const divs = document.querySelectorAll('div.two._aigs');
        divs.forEach(div => {
            const header = div.querySelector('header');
            if (header) {
                div.removeChild(header);
            }
        });

        // Remove it too for other screens (e.g., new group, archived chats, etc.)
        // Those screens have a left marging set to the size of the bar we just removed
        document.documentElement.style.setProperty('--navbar-width', '0');

        // Reduce the size of the 'chats' column from 45% to 40%
        const style = document.createElement('style');
        style.type = 'text/css';
        const css = '._aigw { flex: 0 0 40% !important; max-width: 40% !important; }';
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }

    // Wait for the HTML to be properly rendering before editing it,
    // otherwise only CSS changes will take effect
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList' || mutation.type === 'attributes') {
                // Run modifications if specific elements are found
                stylize();
            }
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
