// ==UserScript==
// @name         Tahvel Discord Theme
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Изменяет сайт Tahvel.edu.ee под тему Discord
// @author       Your Name
// @match        *://tahvel.edu.ee/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = `
        body, html {
            background-color: #23272a !important;
            color: #ffffff !important;
            font-family: 'Times New Roman', sans-serif !important;
        }

        #main-wrapper, .md-toolbar, #site-sidenav, .slimScrollBar, .parent-list-item, .childActive {
            background-color: #2c2f33 !important;
        }

        a, button, md-button, span, h1, h2, h3, h4, h5, h6, p, li {
            color: #99aab5 !important;
        }

        .parentActive, .childActive, .md-icon-button, #mobile-menu-button-wrapper {
            background-color: #99aab5 !important;
            color: #ffffff !important;
        }

        *, *::before, *::after {
            box-shadow: none !important;
            border: none !important;
        }

        .md-content, .main-toolbar, .menu-item {
            padding: 10px !important;
        }
    `;
    document.head.appendChild(style);
})();
