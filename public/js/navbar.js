function toggleMenu() {
  let menu = document.querySelector(".menu-dropdown");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Fermer le menu si la fenêtre est agrandie
window.addEventListener("resize", function () {
  let menu = document.querySelector(".menu-dropdown");

  if (window.innerWidth > 768) {
    menu.style.display = "none"; // Cache le menu
  }
});

