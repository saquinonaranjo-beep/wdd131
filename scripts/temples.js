const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
})


const currentYear = document.querySelector("#currentYear");
currentYear.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;
