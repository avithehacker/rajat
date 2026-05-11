/* Molecule */

const menuBtn   = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");

/* ── MOBILE NAV ─────────────────────────────────────────── */
menuBtn?.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".mobile-nav a").forEach(a =>
  a.addEventListener("click", () => {
    mobileNav.classList.remove("is-open");
    menuBtn?.setAttribute("aria-expanded", "false");
  })
);

/* ── COUNTER ────────────────────────────────────────────── */
function runCounter(el) {
  const target = +el.dataset.count;
  const dur    = 1600;
  const t0     = performance.now();

  const tick = (now) => {
    const p = Math.min((now - t0) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(target * e) + "+";
    if (p < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

/* ── INTERSECTION OBSERVER ──────────────────────────────── */
const io = new IntersectionObserver((entries) => {
  for (const { isIntersecting, target } of entries) {
    if (!isIntersecting) continue;
    if (target.dataset.count !== undefined) runCounter(target);
    target.classList.add("in-view");
    io.unobserve(target);
  }
}, { threshold: 0.1 });

document.querySelectorAll("[data-count], [data-reveal], [data-stagger]")
  .forEach(el => io.observe(el));
