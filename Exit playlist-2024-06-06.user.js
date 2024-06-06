// ==UserScript==
// @name         Exit playlist
// @namespace    http://tampermonkey.net/
// @version      2024-06-06
// @description  Watch YouTube video as a standalone video, not in a playlist.
// @author       Bartosz Tobiasz
// @match        https://www.youtube.com/watch?v=*&list=*
// @run-at       document-start
// @grant        none
// ==/UserScript==

const params = new URLSearchParams(window.location.search);
params.delete("list");
window.location.search = params;