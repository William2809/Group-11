const navIcon = document.getElementById("nav-icon");
const navItems = document.getElementById("nav-items");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

navIcon.addEventListener("click", () => {
    navItems.classList.toggle("show");
    hamburger.classList.toggle("hidden-hamburger");
    close.classList.toggle("display-close");
});