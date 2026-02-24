/**
 * nav.js
 * Handles nav border appearance on scroll,
 * smooth scroll for anchor links,
 * and mobile hamburger menu toggle.
 */

export function initNav() {
  const nav = document.querySelector(".nav");
  const burger = document.getElementById("navBurger");
  const drawer = document.getElementById("navDrawer");

  if (!nav) return;

  // ── Scrolled class for border ──
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ── Hamburger toggle ──
  if (burger && drawer) {
    burger.addEventListener("click", () => {
      const isOpen = burger.classList.toggle("is-open");
      drawer.classList.toggle("is-open", isOpen);
      burger.setAttribute("aria-expanded", isOpen);
      drawer.setAttribute("aria-hidden", !isOpen);
    });

    // Close drawer when a link inside it is clicked
    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        burger.classList.remove("is-open");
        drawer.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        drawer.setAttribute("aria-hidden", "true");
      });
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !drawer.contains(e.target)) {
        burger.classList.remove("is-open");
        drawer.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        drawer.setAttribute("aria-hidden", "true");
      }
    });
  }

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
