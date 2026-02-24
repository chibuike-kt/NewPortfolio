/**
 * nav.js
 * Handles nav border appearance on scroll and
 * smooth scroll for anchor links.
 */

export function initNav() {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  // ── Scrolled class for border ──
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // Run on load in case page is already scrolled

  // ── Smooth anchor scroll ──
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;

      e.preventDefault();

      const navHeight = nav.offsetHeight;
      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - navHeight - 24;

      window.scrollTo({ top: targetTop, behavior: "smooth" });
    });
  });
}
