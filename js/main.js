let nav = document.querySelector("#hamburger_menu");
let navMenu = document.querySelector("svg");
let toggleMenu = false;
if (window.matchMedia("(max-width:991px)")) {
  nav.classList.add("grid-col-2");
}
navMenu.addEventListener("click", () => {
  let ul = document.createElement("ul");
  let liTextNodes = ["Home", "Features", "Pricing", "Contact"];

  if (!toggleMenu) {
    liTextNodes.forEach(text => {
      let li = document.createElement("li");
      let textNode = document.createTextNode(text);
      let ulAttr = document.createAttribute("id");
      ulAttr.value = "ul_menu_id";
      let liAttr = document.createAttribute("id");
      liAttr.value = "li_menu_id";
      li.appendChild(textNode);
      ul.appendChild(li);
      ul.setAttributeNode(ulAttr);
      li.setAttributeNode(liAttr);
    });
    nav.appendChild(ul);
    let navUl = document.querySelector("#ul_menu_id");
    console.log(navUl);

    navUl.classList.add("menu");
    navUl.classList.add("flex-start-nav");

    toggleMenu = true;

    console.log(window.screen.width);
    console.log(toggleMenu);
    if (window.screen.width > 991 && toggleMenu == true) {
      // debugger;
      let navUl = document.querySelector("#ul_menu_id");
      navUl.classList.remove("menu");
      navUl.remove();
      toggleMenu = false;
    }
  } else {
    let navUl = document.querySelector("#ul_menu_id");
    navUl.classList.remove("menu");
    navUl.remove();
    toggleMenu = false;
  }
});
// if (window.matchMedia("(max-width: 992px)")) {

// }

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true
  });
});

// window.addEventListener("load",()=>{
//   console.log("done")
// })
