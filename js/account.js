 // Get the navbar element
 const navbar = document.querySelector(".nav");
 const toggle = document.querySelector(".toggle_icon");
 const nav_form = document.querySelector(".nav_form");

 // Get the offset position of the navbar
 const sticky = navbar.offsetTop + 200;

 // Add the sticky class to the navbar when you reach its scroll position
 // Remove the sticky class when you leave the scroll position
 function stickyNavbar() {
    //  console.log(window.pageYOffset);
     if (window.pageYOffset >= sticky) {
         navbar.classList.add("sticky");
         toggle.classList.add("none");
         nav_form.classList.add("white");
     } else {
         navbar.classList.remove("sticky");
         toggle.classList.remove("none");
         nav_form.classList.remove("white");
     }
 }
 // When the user scrolls the page, execute stickyNavbar
 window.onscroll = function() {
     stickyNavbar();
 };
