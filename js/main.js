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
    let liUl = document.querySelectorAll("#ul_menu_id li");
    liUl.forEach(el => {
      el.style.padding = "10px";
    });
    console.log(liUl);
    console.log(navUl);

    navUl.classList.add("menu");
    navUl.classList.add("flex-start-nav");
    toggleMenu = true;
  } else {
    let navUl = document.querySelector("#ul_menu_id");
    navUl.classList.remove("menu");
    navUl.remove();
    toggleMenu = false;
  }
});

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true
  });
});

// window.addEventListener("load",()=>{
//   console.log("done")
// })
