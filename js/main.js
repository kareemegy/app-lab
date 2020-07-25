let nav = document.querySelector("nav");
let navMenu = document.querySelector("svg");
let navUl = document.querySelector("#nav_ul");
let navlis = document.querySelectorAll("ul li a");
console.log(navlis);
let toggleMenu = false;

navMenu.addEventListener("click", () => {
  if (!toggleMenu) {
    nav.classList.add("grid-col-2");
    navUl.classList.add("menu");
    navUl.classList.add("flex-start-nav");
    navUl.style.opacity = "1";
    navlis.forEach(el => {
      el.style.visibility = "visible";
    });
    toggleMenu = true;
  } else {
    nav.classList.remove("grid-col-2");
    navUl.classList.remove("menu");
    navUl.classList.remove("flex-start-nav");

    navlis.forEach(el => {
      el.style.visibility = "hidden";
    });
    toggleMenu = false;
  }
});
