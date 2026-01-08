document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        menu.classList.add("flex");
    } else {
        menu.classList.add("hidden");
    }
});
