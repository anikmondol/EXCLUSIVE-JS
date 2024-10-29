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


// countdown

let countDownDate = new Date("Jan 1, 2025 15:37:25").getTime();

// Function to update the countdown
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

    // Calculate time units
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // If the countdown is over, stop the timer and set all values to "00"
  days = days < 10 ? "0" + days : days;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // get the reference of the variable
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

// Update the countdown every second
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdown").innerHTML = "EXPIRED";
  }
}, 1000);


// swiper-slide

var swiper = new Swiper(".mySwiper", {
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
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

// trending countdown

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 5); 

// Function to update the countdown
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Calculate time units
  const trending_days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const trending_hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const trending_minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const trending_seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in each corresponding element
  document.getElementById("trending_days").textContent = trending_days.toString().padStart(2, '0');
  document.getElementById("trending_hours").textContent = trending_hours.toString().padStart(2, '0');
  document.getElementById("trending_minutes").textContent = trending_minutes.toString().padStart(2, '0');
  document.getElementById("trending_seconds").textContent = trending_seconds.toString().padStart(2, '0');

  // If the countdown is over, stop the timer and set all values to "00"
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("trending_days").textContent = "00";
    document.getElementById("trending_hours").textContent = "00";
    document.getElementById("trending_minutes").textContent = "00";
    document.getElementById("trending_seconds").textContent = "00";
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);


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





const addToCarts = document.querySelectorAll(".add_to_cart");

addToCarts.forEach(button => {
 
  button.addEventListener("click", e =>{
   const id = button.getAttribute("date-id");
   const title = button.getAttribute("date-title");
   const image = button.getAttribute("date-image");
   const price = button.getAttribute("data-price");

   const cartItem = {id, title, image, price};

   const cart = JSON.parse(localStorage.getItem('cart')) || [];

   
   const itemExists = cart.some(item => item.id === id);

   if (!itemExists) {
    
     alert("Do You Wont Add To Cart")
     cart.push(cartItem);
  
  
     localStorage.setItem('cart', JSON.stringify(cart));
   } else {
     alert(`Item with ID ${id} is already in the cart.`);
   }

  })
  
});





//mobile nav 
const hamburger = document.querySelector(".hamburger");
const mobile_nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", e =>{
  mobile_nav.classList.toggle("mobile_nav_hind");
});


