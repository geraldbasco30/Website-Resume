// Theme (saved to localStorage)
const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.setAttribute("data-theme", savedTheme);

themeBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// Mobile menu dropdown
const menuBtn = document.getElementById("menuBtn");
const siteNav = document.getElementById("siteNav");
const backdrop = document.getElementById("menuBackdrop");

function openMenu() {
  siteNav.classList.add("open");
  backdrop.classList.add("open");
  menuBtn.setAttribute("aria-expanded", "true");
  menuBtn.textContent = "✕";
}

function closeMenu() {
  siteNav.classList.remove("open");
  backdrop.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.textContent = "☰";
}

if (menuBtn && siteNav && backdrop) {
  menuBtn.addEventListener("click", () => {
    const isOpen = siteNav.classList.contains("open");
    if (isOpen) closeMenu();
    else openMenu();
  });

  // Close when clicking backdrop
  backdrop.addEventListener("click", closeMenu);

  // Close when clicking a link
  siteNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  // Close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Close if screen resized bigger
  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) closeMenu();
  });
}

// Active nav link on scroll
const navLinks = Array.from(document.querySelectorAll(".nav a"));
const sections = navLinks
  .map(a => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.getAttribute("id");
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
  });
}, { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 });

sections.forEach(s => observer.observe(s));

// Contact form -> mailto
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(`Website Resume Contact — ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);

    // CHANGE THIS to your real email:
    window.location.href = `mailto:you@email.com?subject=${subject}&body=${body}`;
  });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
