var contact = document.querySelector(".slider__button");
var popup = document.querySelector(".form__container");
var close = document.querySelector(".form__close");

var menuOpen = document.querySelector(".header__menu");
var menuClose = document.querySelector(".header__close");
var menu = document.querySelector(".header-popup");
var background = document.querySelector(".background");

var opened = false;

contact.addEventListener("click", function () {
	popup.classList.remove("form__container_close");
	document.querySelector("#contact_name").focus();
	opened = true;
});

close.addEventListener("click", function () {
	popup.classList.add("form__container_close");
	contact.focus();
	opened = false;
});

window.addEventListener("keydown", function (e) {
	if (opened && e.code == "Escape") {
		popup.classList.add("form__container_close");
		contact.focus();
		opened = false;
	}
});

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