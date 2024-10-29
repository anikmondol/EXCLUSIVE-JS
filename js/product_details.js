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



// Animations
ScrollReveal().reveal(".top_nav", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
});

ScrollReveal().reveal(".nav", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    delay: 100,
});

ScrollReveal().reveal(".header", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    delay: 200,
});

ScrollReveal().reveal(".section", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    duration: 900,
    delay: 100,
});

ScrollReveal().reveal(".footer", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    duration: 900,
    delay: 100,
});



//mobile nav 
const hamburger = document.querySelector(".hamburger");
const mobile_nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", e => {
    mobile_nav.classList.toggle("mobile_nav_hind");
});

//user toggle 
const toggle_icon = document.querySelector(".toggle_icon");
const user_toggle = document.querySelector(".user_toggle");

toggle_icon.addEventListener("click", e => {
    user_toggle.classList.toggle("user_toggle_hind");
});

// swiper-slide

var swiper = new Swiper(".mySwiper", {
    // direction: "vertical",
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
    },
});


function changeMainImage(thumbnail) {

    const mainImage = document.getElementById('mainImage');

    mainImage.src = thumbnail.src;
}

//  swiper-slide

var swiper = new Swiper(".mySwiper1", {
    // direction: "vertical",
    loop: true,
    freeMode: true,
    //   autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   },
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
    },
});

let min = document.querySelector(".min");
let ans = document.querySelector(".ans");
let increase = document.querySelector(".add");




min.addEventListener('click', function () {

    
    let currentValue = parseInt(ans.textContent);
    if (currentValue > 1) {
        ans.textContent = currentValue - 1;
    }
});


increase.addEventListener('click', function () {
    let currentValue = parseInt(ans.textContent);
    ans.textContent = currentValue + 1;
});


