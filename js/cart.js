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
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    let sum = 0;

    cartItems.innerHTML = ""; // Clear existing items to prevent duplicates

    items.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList = "cart_item";
        cartItem.innerHTML = `
            <span class="cart_item_id hidden">${item.id}</span>
            <p class="cart_item_title">${item.title}</p>
            <img src="${item.image}" alt="${item.title}" class="cart_img">
            <p class="cart_item_subtotal">$${item.price}</p>
            <button class="cart_item_delete">Delete</button>
        `;

        // Add delete functionality to the button
        cartItem.querySelector(".cart_item_delete").addEventListener("click", () => {
            deleteCartItem(index); // Call function to delete item by index
        });

        cartItems.appendChild(cartItem);
        sum += parseFloat(item.price); // Sum up item prices
    });

    cart_total_p.innerHTML = `<strong>Total: </strong>$${sum.toFixed(2)}`;
}

function deleteCartItem(index) {
    alert("Do You Delete Date");
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    items.splice(index, 1); 
    localStorage.setItem('cart', JSON.stringify(items));

    displayCartItems(); 
}

displayCartItems();
