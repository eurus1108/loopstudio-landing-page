const hamburgerMenu = document.querySelector(".header__hamburger");
const modalMenu = document.querySelector(".modal");
const body = document.querySelector("body");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("header__hamburger--active");

  if (hamburgerMenu.classList.contains("header__hamburger--active")) {
    body.classList.add("no-scroll");
    modalMenu.classList.add("modal--active");
  } else {
    body.classList.remove("no-scroll");
    modalMenu.classList.remove("modal--active");
  }
});
