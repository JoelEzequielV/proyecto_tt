const nav = document.querySelector("#nav");
const navul = document.querySelector("#navul");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    navul.classList.remove("navbar-nav");
    navul.classList.add("navbar-nav-resp");
    cerrar.classList.add("ver");
    abrir.classList.remove("menu_open");
    abrir.classList.add("nover");
})

cerrar.addEventListener("click", () => {
    navul.classList.remove("navbar-nav-resp");
    navul.classList.add("navbar-nav");
    cerrar.classList.remove("ver");
    abrir.classList.remove("nover");
    abrir.classList.add("menu_open");
})