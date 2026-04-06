// PRODUCTS ARRAY
const products = [
    { name: "Silver Ring", price: 25 },
    { name: "Silver Necklace", price: 40 },
    { name: "Silver Bracelet", price: 30 }
];

// DISPLAY PRODUCTS
function displayProducts() {
    const container = document.querySelector(".container");

    if (!container) return;

    let html = '<div class="product-grid">';

    products.forEach(product => {
        html += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="buy-btn">Buy</button>
            </div>
        `;
    });

    html += '</div>';

    container.innerHTML += html;
}

// CLICK EVENT + localStorage
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("buy-btn")) {

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push("item");

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Item added!");
    }
});

// CONDITION FUNCTION
function checkCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length > 0) {
        console.log(`Cart items: ${cart.length}`);
    } else {
        console.log("Cart is empty");
    }
}

// RUN FUNCTIONS
document.addEventListener("DOMContentLoaded", displayProducts);
checkCart();