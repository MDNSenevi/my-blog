let menuIcon = document.querySelector(".icon.menu");
let closeIcon = document.querySelector(".icon.close");
let navMenu = document.querySelector(".nav-menu");

menuIcon.addEventListener("click",(e) => {
     navMenu.classList.toggle("show");
});

closeIcon.addEventListener("click", (e) => {
     navMenu.classList.toggle("show");
});