/**
 * scroll.js
 * - Intersection Observer for .fade-in elements
 * - Active nav link highlighting based on scroll position
 */

export function initScroll() {
  // ── Fade-in observer ──
  const fadeEls = document.querySelectorAll(".fade-in");

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Unobserve after reveal — no need to keep watching
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  fadeEls.forEach((el) => fadeObserver.observe(el));

  // ── Active nav section observer ──
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`,
            );
          });
        }
      });
    },
    { threshold: 0.4 },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}
