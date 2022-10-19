const menuBtn = document.querySelector(".menu");
const navigation = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
     menuBtn.classList.toggle("active");
     navigation.classList.toggle("active");
});

const body = document.body;

const darkMode = document.querySelector(".darkmode");
const lightMode = document.querySelector(".lightmode");

lightMode.addEventListener("click", () => {
     lightMode.classList.remove("active");
     darkMode.classList.add("active");
     body.classList.add("dark");
});

darkMode.addEventListener("click", () => {
     darkMode.classList.remove("active");
     lightMode.classList.add("active");
     body.classList.remove("dark");
});

const navItems = document.querySelectorAll(".navbar-link");
navItems.forEach((item) => {
     item.onclick = () => {
          navItems.forEach((item) => item.classList.remove("active"));
          item.classList.add("active");
     };
});