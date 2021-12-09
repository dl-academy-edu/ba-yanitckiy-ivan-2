var contact = document.querySelector(".slider__button");
var popup = document.querySelector(".form__container");
var close = document.querySelector(".form__close");
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