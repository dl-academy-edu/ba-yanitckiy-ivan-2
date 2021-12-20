var menuOpen = document.querySelector(".header__menu");
var menuClose = document.querySelector(".header__close");
var menu = document.querySelector(".header__nav_m");
var background = document.querySelector(".header__background");

menuOpen.addEventListener("click", function () {
	menu.classList.add("header__nav_m_open");
	menuOpen.classList.toggle("header__menu_h");
	menuClose.classList.toggle("header__close_v");
	background.classList.toggle("header__background_open");
});

menuClose.addEventListener("click", function () {
	menu.classList.remove("header__nav_m_open");
	menuOpen.classList.toggle("header__menu_h");
	menuClose.classList.toggle("header__close_v");
	background.classList.toggle("header__background_open");
});