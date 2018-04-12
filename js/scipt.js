var contactsButton = document.querySelector(".contacts-button");

var popup = document.querySelector(".popup");
var popupClose = popup.querySelector(".popup-close");

var form = popup.querySelector("form");
var formName = popup.querySelector("#popup-form-name");
var formMail = popup.querySelector("#popup-form-email");
var formText = popup.querySelector("#popup-form-text");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}

contactsButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("popup-show");
});

popupClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("popup-show");
	popup.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
	if (!formName.value || !formMail.value) {
		evt.preventDefault();
		popup.classList.remove("popup-error");
      popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("popup-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("name", formName.value);
			localStorage.setItem("email", formMail.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("popup-show")) {
			popup.classList.remove("popup-show");
			popup.classList.remove("popup-error");
		}
	}
});
