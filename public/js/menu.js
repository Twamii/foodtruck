function showCategoryMenu(menuCategory) {

  const burgersMenu = document.getElementById("burgers-category");
  const formulasMenu = document.getElementById("formulas-category");
  const extrasMenu = document.getElementById("extras-category");

  let menuCategoryTitle = document.getElementById('menu-category-title')
  let menuCategoryContent = document.getElementById('menu-category-content')

  if (menuCategory === "burgers-category") {
    burgersMenu.style.display = "flex";
    formulasMenu.style.display = "none";
    extrasMenu.style.display = "none";
    document.getElementById("menu-category-dropdown").style.display = "none";

    menuCategoryTitle.innerHTML = "Nos burgers";
    menuCategoryContent.innerHTML = "Chaque burger est servi avec sa <strong> portion de frites croustillantes</strong>, même en dehors des formules. Préparés maison avec des produits locaux de qualité, nos burgers allient générosité et authenticité. Entre pain moelleux, garnitures savoureuses et cuisson maîtrisée, chaque bouchée est un vrai plaisir fait avec passion.";
  }

  else if (menuCategory === "formulas-category") {
    burgersMenu.style.display = "none";
    formulasMenu.style.display = "flex";
    extrasMenu.style.display = "none";
    document.getElementById("menu-category-dropdown").style.display = "none";

    menuCategoryTitle.innerHTML = "Nos formules";
    menuCategoryContent.innerHTML = "Nos formules comprennent un <strong>burger maison au choix accompagné d'une portion de frites croustillantes, une boisson fraîche, et un dessert</strong> selon disponibilité. Nous proposons chaque jour une sélection de douceurs prêtes à régaler, en fonction des arrivages et du stock. Une formule simple, efficace, pour se faire plaisir sans prise de tête.";
  }

  else if (menuCategory === "extras-category"){
    burgersMenu.style.display = "none";
    formulasMenu.style.display = "none";
    extrasMenu.style.display = "flex";
    document.getElementById("menu-category-dropdown").style.display = "none";

    menuCategoryTitle.innerHTML = "Nos extras";
    menuCategoryContent.innerHTML = "Envie d’un petit plus pour compléter votre repas ? Dans notre section Extras, vous trouverez un choix de <strong>boissons fraîches</strong> à l’unité, de <strong>portions de frites</strong> dorées à souhait, et de <strong>desserts gourmands</strong> disponibles selon le stock du jour. L’idéal pour personnaliser votre menu ou simplement se faire un petit plaisir en plus.";
  }
}

function toggleMenuCategory() {
  let phoneMenuCategory = document.getElementById("menu-category-dropdown");
  phoneMenuCategory.style.display = phoneMenuCategory.style.display === "flex" ? "none" : "flex";
}

window.addEventListener("resize", function () {
  let phoneMenuCategory = document.getElementById("menu-category-dropdown");
  let hiddenMenuBtns = document.getElementById("menu-btns-hidden-on-phone");
  let menuCategoryBtns = document.getElementById("menu-category-btns");

  if (window.innerWidth > 660) {
    phoneMenuCategory.style.display = "none";
    hiddenMenuBtns.style.display = "flex";
    menuCategoryBtns.style.display = "none";
  }

  else {
    hiddenMenuBtns.style.display = "none";
    menuCategoryBtns.style.display = "flex";
  }
});
