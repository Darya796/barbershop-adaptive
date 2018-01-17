var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--no-js");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});


var link = document.querySelector(".login-form-link");
var popup = document.querySelector(".login-form");
var popup_wrapper = popup.querySelector(".login-form__wrapper");
var close = popup.querySelector(".login-form__btn-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");

var overlay = document.querySelector(".overlay");


link.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add("login-form-show");
  popup_wrapper.classList.add("login-form__wrapper-show");
  navMain.classList.add("main-nav--closed");
  navMain.classList.remove("main-nav--opened");
  overlay.classList.add("overlay-show");
  login.focus();

  if (storage) {
    login.value = storage;
    password.focus();
      overlay.classList.add("overlay-show");
  }
});


close.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("login-form-show");
  overlay.classList.remove("overlay-show");
});


form.addEventListener("submit", function (event) {
 if (!login.value || !password.value){
 event.preventDefault();
} else {
 localStorage.setItem("login", login.value);
}
});

window.addEventListener("keydown", function (event) {
 if (event.keyCode === 27) {
   if (popup.classList.contains("login-form-show")) {
     popup.classList.remove("login-form-show");
     overlay.classList.remove("overlay-show");
   }
 }
});

// var html = document.documentElement;
// html.className = html.className.replace("no-js", "js");
