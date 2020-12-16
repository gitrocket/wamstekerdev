
// fade-in for logo when page loads
$(document).ready(function() {
  $(".intro").fadeIn("slow");
});


// this function sets the active class for the menu
function myFunction(e) {
  var elems = document.querySelectorAll(".active");
  [].forEach.call(elems, function(el) {
    el.classList.remove("active");
  });
  e.target.className = "active";
}

// source of active class
// https://jsfiddle.net/uu152uu9/

// smooth scrolling with vanilla JS
const links = document.querySelectorAll("#navbar1 ul a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}