const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const counters = document.querySelectorAll("[data-count]");

const animateCounter = (counter) => {
  const target = Number(counter.dataset.count);
  const suffix = target >= 100 ? "+" : "+";
  const start = performance.now();
  const duration = 1200;

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    counter.textContent = `${Math.floor(target * eased)}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 }
  );

  counters.forEach((counter) => observer.observe(counter));
} else {
  counters.forEach(animateCounter);
}
