// MENU TOGGLE
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuButton.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
});

// FOOTER
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// TEMPLE ARRAY
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  // EXTRA 3 REQUIRED
  {
    templeName: "Salt Lake Temple",
    location: "Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-lds-1879556-wallpaper.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-temple-lds-782194-wallpaper.jpg"
  }
];

// DISPLAY FUNCTION
const container = document.querySelector(".container");

function displayTemples(list) {
  container.innerHTML = "";

  list.forEach(t => {
    const card = document.createElement("section");

    card.innerHTML = `
      <h3>${t.templeName}</h3>
      <p><strong>Location:</strong> ${t.location}</p>
      <p><strong>Dedicated:</strong> ${t.dedicated}</p>
      <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
      <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

// INITIAL LOAD
displayTemples(temples);

// FILTERS
document.getElementById("home").onclick = () => displayTemples(temples);

document.getElementById("old").onclick = () =>
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));

document.getElementById("new").onclick = () =>
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));

document.getElementById("large").onclick = () =>
  displayTemples(temples.filter(t => t.area > 90000));

document.getElementById("small").onclick = () =>
  displayTemples(temples.filter(t => t.area < 10000));