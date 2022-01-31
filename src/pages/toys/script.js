var menuOpen = document.querySelector(".header__menu");
var menuClose = document.querySelector(".header__close");
var menu = document.querySelector(".header-popup");
var background = document.querySelector(".background");

menuOpen.addEventListener("click", function () {
	menu.classList.add("header-popup_open");
	menuOpen.classList.add("header__menu_h");
	menuClose.classList.add("header__close_v");
	background.classList.add("background_open");
	document.querySelector("body").classList.add("body_menu-open");
});

menuClose.addEventListener("click", function () {
	menu.classList.remove("header-popup_open");
	menuOpen.classList.remove("header__menu_h");
	menuClose.classList.remove("header__close_v");
	background.classList.remove("background_open");
	document.querySelector("body").classList.remove("body_menu-open");
});