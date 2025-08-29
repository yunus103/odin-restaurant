import "./styles.css";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadAboutPage from "./about.js";

const content = document.getElementById("content");

const btnHome = document.getElementById("home");
const btnMenu = document.getElementById("menu");
const btnAbout = document.getElementById("about");

loadHomePage();

btnHome.addEventListener("click", () => {
    content.replaceChildren();
    loadHomePage();
});

btnMenu.addEventListener("click", () => {
    content.replaceChildren();
    loadMenuPage();
});

btnAbout.addEventListener("click", () => {
    content.replaceChildren();
    loadAboutPage();
});
