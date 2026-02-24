/**
 * main.js
 * Entry point — imports and initialises all modules.
 * Uses ES modules (type="module" in index.html).
 */

import { initTerminal } from "./terminal.js";
import { initScroll } from "./scroll.js";
import { initNav } from "./nav.js";

// Wait for the DOM to be fully parsed
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initTerminal();
  initScroll();

  // Init Lucide icons (loaded via CDN script tag)
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
