
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