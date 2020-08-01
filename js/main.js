let nav = document.querySelector("#hamburger_menu");
let navMenu = document.querySelector("svg");
let toggleMenu = false;

navMenu.addEventListener("click", () => {
  let ul = document.createElement("ul");
  let liTextNodes = ["Home", "Features", "Pricing", "Contact"];

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
  // console.log(ul);
  nav.appendChild(ul);
  let navUl = document.querySelector("#ul_menu_id");
  console.log(navUl);
  if (!toggleMenu) {
    navUl.classList.add("menu");
    toggleMenu = true;
  } else {
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
