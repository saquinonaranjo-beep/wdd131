const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {

navMenu.classList.toggle("show");

if(navMenu.classList.contains("show")){
menuButton.textContent = "✖";
}
else{
menuButton.textContent = "☰";
}

});

document.querySelector("#currentYear").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;