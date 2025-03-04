// Sample product data
const products = [
    { id: 1, name: "Product 1", price: 29.99, image: "https://via.placeholder.com/250" },
    { id: 2, name: "Product 2", price: 39.99, image: "https://via.placeholder.com/250" },
    { id: 3, name: "Product 3", price: 49.99, image: "https://via.placeholder.com/250" }
];

// Function to render products in the product list
function renderProducts() {
    const productList = document.querySelector(".product-list");
    productList.innerHTML = ""; // Clear existing products

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;

        productList.appendChild(productDiv);
    });

    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", addToCart);
    });
}

// Cart array to hold items
let cart = [];

// Function to add items to the cart
function addToCart(event) {
    const productId = event.target.dataset.id;
    const product = products.find(p => p.id == productId);

    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Function to remove an item from the cart
function removeFromCart(event) {
    const productId = event.target.dataset.id;
    cart = cart.filter(item => item.id != productId); // Remove item by ID
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsContainer = document.querySelector(".cart-items");
    const checkoutButton = document.querySelector(".checkout-btn");

    cartItemsContainer.innerHTML = ""; // Clear existing cart items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        checkoutButton.disabled = true;
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");

            cartItem.innerHTML = `
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
                <button class="remove-item" data-id="${item.id}">Remove</button>
            `;

            // Add event listener to the remove button
            const removeButton = cartItem.querySelector(".remove-item");
            removeButton.addEventListener("click", removeFromCart);

            cartItemsContainer.appendChild(cartItem);
        });

        checkoutButton.disabled = false;
    }
}

// Function to handle checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Proceeding to checkout...");
        // You can implement further checkout functionality here
    }
}

// Event listener for checkout button
document.querySelector(".checkout-btn").addEventListener("click", checkout);

// Initialize the page
renderProducts();
