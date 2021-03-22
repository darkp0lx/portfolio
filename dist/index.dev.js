"use strict";

console.log("loading");
var data = [{
  title: "Landing Page Pepsi",
  text: "Landing page bonita e interactiva",
  tec: ["css", "html", "javascript"],
  code: "https://github.com/darkp0lx/pepsiSlider",
  web: "https://darkp0lx.github.io/pepsiSlider/"
}, {
  title: "facebook clone",
  text: "Reecree un clon de facebook!! esta echo en React y tiene por backend firebase.En esta App se puede postear fotos y tambien comentarlas, inicia sesión con tu cuenta de gmail y pruebala :3",
  tec: ["svelte", "css", "html", "javascript"],
  code: "https://github.com/darkp0lx/facebook-clone",
  web: "https://facebook-clone-416f5.web.app"
}, {
  title: "Clon de Pinterest",
  text: "Aplicación echa en react con login y favoritos conectada con una Api(backend:firebase).",
  tecnologias: [],
  code: "https://github.com/darkp0lx/films2",
  web: "https://pinterest-8d55f.firebaseapp.com/"
}, {
  title: "Amazon Clone",
  text: "clon de Amazon con carrito de compras y pasarela de pago tiene como backend:firebase",
  tecnologías: [],
  code: "https://github.com/darkp0lx/amazon",
  web: "https://films0.herokuapp.com/"
}];
var theme = localStorage.getItem("theme");
var imagesAbout = document.getElementById("social_img");
var links = document.getElementsByClassName("link");
var imageProyect = document.getElementById("img-modal");
var modal = document.getElementById("modal");
/* modal */

var nameModal = document.querySelector(".name");
var textModal = document.querySelector(".description");
var githubModal = document.querySelector("#github");
var webModal = document.querySelector("#web");
console.log(textModal);

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

var _loop = function _loop(i) {
  links[i].addEventListener("click", function () {
    imageProyect.src = "./images/proyect".concat(i, ".jpg");
    nameModal.textContent = data[i].title;
    textModal.textContent = data[i].text;
    githubModal.href = data[i].code;
    webModal.href = data[i].web;
    modal.classList.toggle("active");
    modal.addEventListener("click", function () {
      modal.classList.remove("active");
    });
  });
};

for (var i = 0; i < links.length; i++) {
  _loop(i);
}

var themeDots = document.getElementsByClassName("theme-dot");

for (var _i = 0; _i < themeDots.length; _i++) {
  themeDots[_i].addEventListener("click", function () {
    var mode = this.dataset.mode;
    console.log("click on theme", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("link-style").href = "./dist/style.css";
    imagesAbout.src = "./images/coding_normal.svg";
  }

  if (mode == "blue") {
    document.getElementById("link-style").href = "./dist/blue.css";
    imagesAbout.src = "./images/coding_ blue.svg";
  }

  if (mode == "green") {
    document.getElementById("link-style").href = "./dist/green.css";
    imagesAbout.src = "./images/coding_green.svg";
  }

  if (mode == "purple") {
    document.getElementById("link-style").href = "./dist/purple.css";
    imagesAbout.src = "./images/coding_ purple.svg";
  }

  localStorage.setItem("theme", mode);
}

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above
  var form = document.getElementById("contact-form");
  var status = document.getElementById("status"); // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.innerHTML = "Correo recibido! Gracias";
  }

  function error() {
    status.innerHTML = "Oops! no pudimos enviar tu correo";
  } // handle the form submission event


  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    status.classList.add("activo");
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
}); // helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;

    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };

  xhr.send(data);
}