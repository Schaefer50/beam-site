// Every outside address the site links to, in one place.
// Fill these in as each one goes live; anything left empty shows as
// "Coming soon" instead of a dead link.
window.BEAMOS_LINKS = {
  // The App Store page, once BeamOS is released.
  appStore: "",
  // The public TestFlight beta.
  testFlight: "https://testflight.apple.com/join/h7VmeSqz",
  // The Discourse forum and its categories.
  community: "",
  announcements: "",
  bugs: "",
  suggestions: "",
  general: "",
};

document.addEventListener("DOMContentLoaded", () => {
  const links = window.BEAMOS_LINKS;
  document.querySelectorAll("[data-link]").forEach((el) => {
    const url = links[el.dataset.link];
    if (url) {
      el.href = url;
      if (/^https?:/.test(url)) el.rel = "noopener";
    } else {
      el.removeAttribute("href");
      el.setAttribute("aria-disabled", "true");
      el.classList.add("soon");
      const label = el.querySelector("[data-soon]") || el;
      if (el.dataset.soonText) label.textContent = el.dataset.soonText;
    }
  });
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }
});
