// PRODUCTS ARRAY (objects)
const products = [
    { name: "Silver Ring", price: 25 },
    { name: "Silver Necklace", price: 40 },
    { name: "Silver Bracelet", price: 30 }
];

// DISPLAY PRODUCTS
function displayProducts() {
    const container = document.getElementById("product-list");

    if (!container) return;

    let html = "";

    products.forEach(product => {
        html += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="buy-btn">Buy</button>
            </div>
        `;
    });

    container.innerHTML = html;
}

// ADD TO CART (localStorage + event)
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("buy-btn")) {

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push("item");

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Item added to cart!");
    }
});

// CHECK CART (conditional)
function checkCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length > 0) {
        console.log(`Cart items: ${cart.length}`);
    } else {
        console.log("Cart is empty");
    }
}

// FORM HANDLING
const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;

        if (name === "") {
            alert("Please enter your name");
        } else {
            alert(`Thank you, ${name}! Your message has been sent.`);
        }
    });
}

// RUN FUNCTIONS
document.addEventListener("DOMContentLoaded", displayProducts);
checkCart();