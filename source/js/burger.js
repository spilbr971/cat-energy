var burgerMenu = document.querySelector(".burger-menu");
var burgerItem = burgerMenu.querySelector(".burger-menu__item");
var siteList = document.querySelector(".site-list");

burgerMenu.onclick = function () {
  burgerMenu.classList.toggle("burger-menu--active");
  burgerItem.classList.toggle("burger-menu__item--active");
  siteList.classList.toggle("site-list--active");
}
