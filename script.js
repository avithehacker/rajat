const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleText = document.querySelector(".theme-toggle-text");

const storedTheme = localStorage.getItem("molecule-theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const initialTheme = storedTheme || (prefersLight ? "light" : "dark");

const syncThemeControl = (theme) => {
  const isLight = theme === "light";
  document.documentElement.dataset.theme = theme;
  themeToggle?.setAttribute("aria-pressed", String(isLight));

  if (themeToggleText) {
    themeToggleText.textContent = isLight ? "Dark" : "Light";
  }
};

syncThemeControl(initialTheme);

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

themeToggle?.addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme || "dark";
  const nextTheme = currentTheme === "light" ? "dark" : "light";
  const rect = themeToggle.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const wipe = document.createElement("span");

  wipe.className = "theme-wipe";
  wipe.style.setProperty("--wipe-x", `${x}px`);
  wipe.style.setProperty("--wipe-y", `${y}px`);
  wipe.style.background = nextTheme === "light" ? "#f7f4ec" : "#070807";
  document.body.appendChild(wipe);

  requestAnimationFrame(() => {
    wipe.classList.add("is-spreading");
  });

  window.setTimeout(() => {
    syncThemeControl(nextTheme);
    localStorage.setItem("molecule-theme", nextTheme);
    wipe.classList.add("is-fading");
  }, 360);

  window.setTimeout(() => {
    wipe.remove();
  }, 760);
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
