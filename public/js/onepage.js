function showSection(section) {

  const homePageSection = document.getElementById("homepage-section");
  const menuSection = document.getElementById("menu-section");
  const emplacementsSection = document.getElementById("emplacements-section");
  const contactSection = document.getElementById("contact-section");
  const footer = document.getElementById("footer-section");
  const footerImg = document.querySelector("#footer-section-separator");
  const navbarDropdown = document.querySelector(".menu-dropdown");

  if (section === "homepage") {
    homePageSection.style.display = "block";
    menuSection.style.display = "none";
    emplacementsSection.style.display = "none";
    contactSection.style.display = "none";

    footer.style.backgroundColor = "#F9EFE6";
    footerImg.src = "/img/vector-img/separator2.svg";
  }

  else if (section === "menu") {
    homePageSection.style.display = "none";
    menuSection.style.display = "flex";
    emplacementsSection.style.display = "none";
    contactSection.style.display = "none";
    navbarDropdown.style.display ="none";

    footer.style.backgroundColor = "white";
    footerImg.src = "/img/vector-img/Vector2.png";
  }

  else if (section === "emplacements") {
    homePageSection.style.display = "none";
    menuSection.style.display = "none";
    emplacementsSection.style.display = "block";
    contactSection.style.display = "none";
    navbarDropdown.style.display ="none";

    footer.style.backgroundColor = "white";
    footerImg.src = "/img/vector-img/Vector2.png";
  }

  else if (section === "contact") {
    homePageSection.style.display = "none";
    menuSection.style.display = "none";
    emplacementsSection.style.display = "none";
    contactSection.style.display = "block";
    navbarDropdown.style.display ="none";

    footer.style.backgroundColor = "white";
    footerImg.src = "/img/vector-img/Vector2.png";
  }

  window.dispatchEvent(new Event('resize'));
}
