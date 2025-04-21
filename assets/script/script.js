const body = document.querySelector("body");
const menuDrop = document.getElementById("menu_drop");
const buttonDrop = document.getElementById("data-dropdown");
const menuDropOne = document.getElementById("menu_drop1");
const buttonDropOne = document.getElementById("data-dropdown1");
const arrow = document.getElementById("arrow");
const arrowTwo = document.getElementById("arrowTwo");
const menuMobile = document.getElementById("btn-nav");
const btnImg = document.getElementById("btn-img");
const navItems = document.getElementById("nav_items");

function menuHam() {
  navItems.classList.toggle("active");
}

function onMenuDrop() {
  menuDrop.classList.toggle("active");
  arrow.classList.toggle("giro");
}

function onMenuDropOne() {
  menuDropOne.classList.toggle("active");
  arrowTwo.classList.toggle("giro");
}

function menuOn() {
  btnImg.src = "./images/icon-close-menu.svg";
  body.style.background = "rgb(0 0 0 / 37%)";
}

function menuOff() {
  btnImg.src = "./images/icon-menu.svg";
  body.style.background = "none";
}

function menuOnOffMobile() {
  if (btnImg.src.includes("icon-menu.svg")) {
    menuOn();
  } else {
    menuOff();
  }
}

buttonDrop.addEventListener("click", onMenuDrop);
buttonDropOne.addEventListener("click", onMenuDropOne);
menuMobile.addEventListener("click", menuHam);
menuMobile.addEventListener("click", menuOnOffMobile);
