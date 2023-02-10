// When the user scrolls the page, execute function to add the sticky class to the content-navbar when you reach its scroll position.
var navbar = document.getElementById("top-nav-bar");
var contentNavBar = document.getElementById("content-bar")
var sticky = navbar.offsetTop;
window.onscroll = function() {
  {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      contentNavBar.classList.add("sticky-content");
    } else {
      navbar.classList.remove("sticky");
      contentNavBar.classList.remove("sticky-content");
    }
  }
};
