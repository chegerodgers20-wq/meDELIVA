const products = [
  {
    name: "(ANTI WRINKLES)LRP RETINOL SERUM 30ML",
    price: "Ksh 4680",
    image:
      "images/products/(ANTI WRINKLES)LRP RETINOL SERUM 30ML-kes 4,680.webp",
  },
  {
    name: "(FINE LINES) LRP HYALU B5 SERUM 30ML",
    price: "ksh 4605",
    image: "images/products/(FINE LINES) LRP HYALU B5 SERUM 30ML-kes 4,605.jpg",
  },
  {
    name: "Anthelios UVmune Cream SPF50 50ml",
    price: "ksh 3017",
    image: "images/products/Anthelios UVmune Cream SPF50 50ml-kes 3,017.png",
  },
  {
    name: "CERAVE ADVANCED REPAIR OINTMENT 88ml",
    price: "ksh 1594",
    image:
      "images/products/CERAVE ADVANCED REPAIR OINTMENT 88ml-kes 1,594.jpeg",
  },
  {
    name: "CERAVE AM FACIAL MOIST LOTION Spf30 52ml",
    price: "ksh 2232",
    image:
      "images/products/CERAVE AM FACIAL MOIST LOTION Spf30 52ml-kes 2,232.jpg",
  },
  {
    name: "CERAVE AM FACIAL MOISTURIZING  LOTION Spf50 52ml",
    price: "ksh 2405",
    image:
      "images/products/CERAVE AM FACIAL MOISTURIZING  LOTION Spf50 52ml-kes 2,405.webp",
  },
  {
    name: "Cerave Blemish Control Cleanser 236ml",
    price: "ksh 1945",
    image:
      "images/products/Cerave Blemish Control Cleanser 236ml-kes 1,945.jpg",
  },
  {
    name: "CERAVE BLEMISH CONTROL",
    price: "ksh 1883",
    image: "images/products/CERAVE BLEMISH CONTROL -kes 1,883.jpeg",
  },
  {
    name: "CERAVE DAILY MOISTURIZING 473ml",
    price: "ksh 2629",
    image: "images/products/CERAVE DAILY MOISTURIZING 473ml-kes 2,629.webp",
  },
  {
    name: "Cerave Daily Moisturizing Lotion 236ml",
    price: "ksh 1982",
    image:
      "images/products/Cerave Daily Moisturizing Lotion 236ml-kes 1,982.webp",
  },
  {
    name: "CERAVE FOAM CLEANSER 236ml",
    price: "ksh 2000",
    image: "images/products/CERAVE FOAM CLEANSER 236ml-kes 2,000.jpg",
  },
  {
    name: "CERAVE HYDRATING CLEANSER 236ml",
    price: "ksh 1512",
    image: "images/products/CERAVE HYDRATING CLEANSER 236ml-kes 1,512.jpg",
  },
];

// Select the grid container
const grid = document.getElementById("product-grid");

// Function to render products dynamically
function renderProducts() {
  grid.innerHTML = ""; // Clear existing products
  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>S
    `;

    grid.appendChild(card);
  });
}

// Call the function to display products
renderProducts();

// ===============================
// Optional: Add interactivity
// ===============================

// Example: Search filter (if you add a search bar in HTML)
function filterProducts(query) {
  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  );
  grid.innerHTML = "";
  filtered.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    `;
    grid.appendChild(card);
  });
}
