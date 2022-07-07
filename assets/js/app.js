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

// let navbarlinks = select('.navbar-link', true);
// const navbarlinksActive = () => {
//   let position = window.scrollY + 200;
//   navbarlinks.forEach(navbarlink => {
//     if (!navbarlink.hash) return;
//     let section = select(navbarlink.hash);
//     if (!section) return;
//     if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
//       navbarlink.classList.add('active');
//     } else {
//       navbarlink.classList.remove('active');
//     }
//   });
// };
// window.addEventListener('load', navbarlinksActive);
// onscroll(document, navbarlinksActive);
