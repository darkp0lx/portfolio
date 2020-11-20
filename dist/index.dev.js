"use strict";

console.log("loading");
var data = [{
  title: "Landing Page Pepsi",
  text: "Landing page bonita e interactiva",
  tec: ["css", "html", "javascript"],
  code: "https://github.com/darkp0lx/pepsiSlider",
  web: "https://darkp0lx.github.io/pepsiSlider/"
}, {
  title: "Baamago Tatto",
  text: "Aplicacion que carga solo una vez",
  tec: ["svelte", "css", "html", "javascript"],
  code: "https://github.com/darkp0lx/baamago",
  web: "https://5f89c28cba3dad00070cd9ab--baamagotatto.netlify.app/"
}, {
  title: "Portal de peliculas",
  text: "Aplicacion creada en react para la consulta de informacion de todas las peliculas usando una API",
  tecnologias: [],
  code: "https://github.com/darkp0lx/films2",
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