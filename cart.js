// cart.js

// Initialize the shopping cart
let cart = [];

// Function to add an item to the cart
function addToCart(item) {
    cart.push(item);
    saveCart();
    updateCartIcon();
}

// Function to save the cart to localStorage
function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

// Function to load the cart from localStorage
function loadCart() {
    const loadedCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if (loadedCart) {
        cart = loadedCart;
    }
    updateCartIcon();
}

// Function to update the cart icon (e.g. item count)
function updateCartIcon() {
    const cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
        cartIcon.innerText = cart.length;
    }
}

// Load the cart when the script runs
loadCart();