const products = [
    { name: "Silver Ring", price: 25, image: "images/ring.webp" },
    { name: "Silver Necklace", price: 40, image: "images/necklace.webp" },
    { name: "Silver Bracelet", price: 30, image: "images/bracelet.webp" }
];

function displayProducts() {
    const container = document.getElementById("product-list");
    if (!container) return;

    let html = "";

    products.forEach(product => {
        html += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="buy-btn" data-name="${product.name}">Buy</button>
            </div>
        `;
    });

    container.innerHTML = html;
}

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("buy-btn")) {

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const name = e.target.dataset.name;
        cart.push(name);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`${name} added to cart!`);
    }
});

function checkCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length > 0) {
        console.log(`Cart items: ${cart.length}`);
    } else {
        console.log("Cart is empty");
    }
}

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

document.addEventListener("DOMContentLoaded", displayProducts);
checkCart();