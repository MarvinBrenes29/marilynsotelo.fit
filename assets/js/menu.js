export function initMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");

  if (!toggle || !menu) return; // protección profesional

  toggle.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menu.classList.add("flex");
    } else {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
    }
  });
}
