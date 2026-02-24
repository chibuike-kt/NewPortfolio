/**
 * terminal.js
 * Typewriter animation for the hero terminal block.
 * Cycles through an array of lines with configurable speeds.
 */

const TERMINAL_LINES = [
  "kingsley ~ php artisan serve",
  "money moves through code I write",
  "double entry ledgers, crypto rails, fiat gateways",
  "fraud systems, secure APIs, things that actually work",
  "status: available and building_",
];

const CONFIG = {
  typeSpeed: 38, // ms per character when typing
  eraseSpeed: 16, // ms per character when erasing
  pauseAfter: 1800, // ms to pause after fully typed
  pauseBefore: 320, // ms to pause before typing next line
};

export function initTerminal() {
  const outputEl = document.getElementById("terminal-output");
  if (!outputEl) return;

  let lineIdx = 0;
  let charIdx = 0;
  let erasing = false;

  function type() {
    const line = TERMINAL_LINES[lineIdx];

    if (!erasing) {
      outputEl.textContent = line.slice(0, charIdx + 1);
      charIdx++;

      if (charIdx === line.length) {
        erasing = true;
        setTimeout(erase, CONFIG.pauseAfter);
        return;
      }

      setTimeout(type, CONFIG.typeSpeed);
    }
  }

  function erase() {
    const line = TERMINAL_LINES[lineIdx];

    outputEl.textContent = line.slice(0, charIdx - 1);
    charIdx--;

    if (charIdx === 0) {
      erasing = false;
      lineIdx = (lineIdx + 1) % TERMINAL_LINES.length;
      setTimeout(type, CONFIG.pauseBefore);
      return;
    }

    setTimeout(erase, CONFIG.eraseSpeed);
  }

  // Kick off after a short delay so the page can settle
  setTimeout(type, 900);
}
