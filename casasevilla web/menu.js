const navToggle = document.querySelector(".nav-toggle");
const navbarUl = document.querySelector(".navbar__ul");

navToggle.addEventListener("click", () => {
    navbarUl.classList.toggle("navbar__ul-active");
});