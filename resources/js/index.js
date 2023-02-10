/* Toggle between "responsive" class to top-nav-bar when user clicks on the hamburger icon */
function expandNavBar() {
    var x = document.getElementById("top-nav-bar");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }
  }
// When the user scrolls the page, execute function to add the sticky class to the navbar when you reach its scroll position.
var navbar = document.getElementById("top-nav-bar");
var sticky = navbar.offsetTop;
window.onscroll = function() {
  {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
};

// Expand the collapse content on clicking read more.
var coll = document.getElementsByClassName("collapse");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var description = this.nextElementSibling;
    if (description.style.maxHeight) {
      description.style.maxHeight = null;
    } else {
      description.style.maxHeight = description.scrollHeight + "px";
    }
  });
}

// When the user clicks on Top button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
