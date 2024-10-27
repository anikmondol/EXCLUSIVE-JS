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

hamburger.addEventListener("click", e =>{
  mobile_nav.classList.toggle("mobile_nav_hind");
});

const cartItems = document.querySelector(".cart_items");
const cart_total_p = document.querySelector(".cart_total_p");

function displayCartItems() {
    const items = JSON.parse(localStorage.getItem('cart')) || []; // Handle case where cart is empty
    let sum = 0;

    items.forEach(item => { 
        const cartItem = document.createElement("div");
        cartItem.classList = "cart_item";
        cartItem.innerHTML = `
            <span class="cart_item_id">${item.id}</span>
            <p class="cart_item_title">${item.title}</p>
            <img src="${item.image}" alt="${item.title}" class="cart_img">
            <p class="cart_item_subtotal">$${item.price}</p>
            <p class="cart_item_delete">Delete</p>
        `;
        cartItems.appendChild(cartItem);

        // Ensure the price is treated as a number and add to sum
        sum += parseFloat(item.price);
    });

    // Update total price display
    cart_total_p.innerText = `$${sum.toFixed(2)}`;
}

displayCartItems();
