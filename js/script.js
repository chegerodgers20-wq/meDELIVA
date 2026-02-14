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
  {
    name: "CERAVE HYDRATING CLEANSER 473ml",
    price: "ksh 2293",
    image: "images/products/CERAVE HYDRATING CLEANSER 473ML-kes 2,293.jpg",
  },
  {
    name: "CERAVE HYDRATING CREAM TO FOAM CLEANSER FOR NORMAL TO DRY SKIN 236ml",
    price: "ksh 2112",
    image:
      "images/products/CERAVE HYDRATING CREAM TO FOAM CLEANSER FOR NORMAL TO DRY SKIN 236ml-kes 2,112.jpeg",
  },
  {
    name: "CERAVE HYDRATING HYALURONIC ACID SYRUM 30ml",
    price: "ksh 2870",
    image:
      "images/products/CERAVE HYDRATING HYALURONIC ACID SYRUM 30ml-KES 2,870.webp",
  },
  {
    name: "CERAVE INTENSIVE MOISTURIZING LOTION 236ml",
    price: "ksh 2206",
    image:
      "images/products/CERAVE INTENSIVE MOISTURIZING LOTION 236ml-kes 2,206.webp",
  },
  {
    name: "CERAVE MOISTURIZING CREAM 340g",
    price: "ksh 2413",
    image: "images/products/CERAVE MOISTURIZING CREAM 340g-kes 2,413.jpg",
  },
  {
    name: "CERAVE MOISTURIZING CREAM 454g",
    price: "ksh 2913",
    image: "images/products/CERAVE MOISTURIZING CREAM 454g-kes 2,913.webp",
  },
  {
    name: "CERAVE OIL CONTROL MOISTURIZING GEL-CREAM",
    price: "ksh 2456",
    image:
      "images/products/CERAVE OIL CONTROL MOISTURIZING GEL-CREAM -kes 2,456.jpg",
  },
  {
    name: "CERAVE PM FACIAL MOISTURIZING LOTION 1.75FL 52ml",
    price: "ksh 2232",
    image:
      "images/products/CERAVE PM FACIAL MOISTURIZING LOTION 1.75FL 52ml-KES 2,232.webp",
  },
  {
    name: "CERAVE REPARATIVE HAND CREAM 50ml",
    price: "ksh 941",
    image: "images/products/CERAVE REPARATIVE HAND CREAM 50ml -kes 941.webp",
  },
  {
    name: "CERAVE RESURFACING RETINAL SERUM",
    price: "ksh 3340",
    image: "images/products/CERAVE RESURFACING RETINAL SERUM -kes 3,340.jpeg",
  },
  {
    name: "CERAVE SA RENEWING FOOT CREAM 88ML",
    price: "ksh 2045",
    image: "images/products/CERAVE SA RENEWING FOOT CREAM 88ML -kes 2,045.jpg",
  },
  {
    name: "CERAVE SA SMOOTHING CLEANSER 236ml",
    price: "ksh 2163",
    image: "images/products/CERAVE SA SMOOTHING CLEANSER 236ml-kes 2,163.webp",
  },
  {
    name: "CERAVE SA SMOOTHING CREAM FOR DRY ROUGH BUMPY SKIN 340g",
    price: "ksh 3215",
    image:
      "images/products/CERAVE SA SMOOTHING CREAM FOR DRY ROUGH BUMPY SKIN 340g -kes 3,215.jpg",
  },
  {
    name: "CERAVE SKIN RENEWING PEPTIDE FOR FACE 48ml",
    price: "ksh 3000",
    image:
      "images/products/CERAVE SKIN RENEWING PEPTIDE FOR FACE 48ml-KES 3,000.jpeg",
  },
  {
    name: "La Roche Posay Anthelios Shaka Invisible Spray SPF50 Peaux Sensibles 200ml",
    price: "ksh 4293",
    image:
      "images/products/La Roche Posay Anthelios Shaka Invisible Spray SPF50 Peaux Sensibles 200ml-kes 4,293.webp",
  },
  {
    name: "La Roche Posay Anthelios UVMune 200ml",
    price: "ksh 4293",
    image:
      "images/products/La Roche Posay Anthelios UVMune 200ml-kes 4,293.webp",
  },
  {
    name: "La Roche Posay ANTHELIOS UVMUNE 400 50ml",
    price: "ksh 2931",
    image:
      "images/products/La Roche Posay ANTHELIOS UVMUNE 400 50ml-kes 2,931.jpeg",
  },
  {
    name: "La Roche Posay ANTHELIOS UVMUNE 400 50ml",
    price: "ksh 2931",
    image:
      "images/products/La Roche Posay ANTHELIOS UVMUNE 400 50ml-kes 2,931.jpg",
  },
  {
    name: "La Roche Posay Anthelois Oil Control 50ml",
    price: "ksh 2931",
    image:
      "images/products/La Roche Posay Anthelois Oil Control 50ml-kes 2,931.webp",
  },
  {
    name: "La Roche Posay Thermal Water 150Ml",
    price: "ksh 2210",
    image: "images/products/La Roche Posay Thermal Water 150Ml-kes 2,210.0.jpg",
  },
  {
    name: "La Roche-Posay Anthel.Fluid UVMune 400 Spf50",
    price: "ksh 3200",
    image:
      "images/products/La Roche-Posay Anthel.Fluid UVMune 400 Spf50-kes 3,200.00.webp",
  },
  {
    name: "LRP ANTHELIOS ANTI SHINE MIST Spf50 75ml",
    price: "ksh 2543",
    image:
      "images/products/LRP ANTHELIOS ANTI SHINE MIST Spf50 75ml-kes 2,543.webp",
  },
  {
    name: "LRP ANTHELIOS BABY LOTION 50ml",
    price: "ksh 3189",
    image: "images/products/LRP ANTHELIOS BABY LOTION 50ml-kes 3,189 (2).jpg",
  },
  {
    name: "LRP ANTHELIOS LOTION spf50 eco-tube 250ml",
    price: "ksh 4827",
    image:
      "images/products/LRP ANTHELIOS LOTION spf50 eco-tube 250ml-kes 4,827.jpg",
  },
  {
    name: "LRP EFFACLAR 30ml",
    price: "ksh 5344",
    image: "images/products/LRP EFFACLAR 30ml-kes 5,344.jpg",
  },
  {
    name: "LRP EFFACLAR 40ml",
    price: "ksh 2491",
    image: "images/products/LRP EFFACLAR 40ml -kes 2,491.jpg",
  },
  {
    name: "LRP EFFACLAR 40ml",
    price: "ksh 3271",
    image: "images/products/LRP EFFACLAR 40ml-kes 3,271.webp",
  },
  {
    name: "LRP EFFACLAR 400ml",
    price: "ksh 3620",
    image: "images/products/LRP EFFACLAR 400ml-kes 3,620.webp",
  },
  {
    name: "LRP EFFACLAR A.Z GEL 40ml",
    price: "ksh 4870",
    image: "images/products/LRP EFFACLAR A.Z GEL 40ml-kes 4,870.webp",
  },
  {
    name: "LRP EFFACLAR ACNE ROUTINE",
    price: "ksh 3705",
    image: "images/products/LRP EFFACLAR ACNE ROUTINE-3,705.webp",
  },
  {
    name: "LRP EFFACLAR DUO+M 22pc",
    price: "ksh 1724",
    image: "images/products/LRP EFFACLAR DUO+M 22pc-kes 1,724.webp",
  },
  {
    name: "LRP EFFACLAR DUO+M 40ml",
    price: "ksh 3012",
    image: "images/products/LRP EFFACLAR DUO+M 40ml-kes 3,012.webp",
  },
  {
    name: "LRP EFFACLAR DUO+M UNIFIANT 40ml",
    price: "ksh 3012",
    image: "images/products/LRP EFFACLAR DUO+M UNIFIANT 40ml-kes 3,012.jpg",
  },
  {
    name: "LRP EFFACLAR FOAM 200ml",
    price: "ksh 2365",
    image: "images/products/LRP EFFACLAR FOAM 200ml-2,365.webp",
  },
  {
    name: "LRP EFFACLAR FOAM 400ml",
    price: "ksh 3405",
    image: "images/products/LRP EFFACLAR FOAM 400ml-kes 3,405.jpg",
  },
  {
    name: "LRP EFFACLAR H 40ml",
    price: "ksh 3060",
    image: "images/products/LRP EFFACLAR H 40ml-kes 3,060.jpg",
  },
  {
    name: "LRP EFFACLAR H ISO-BIOME 200ml",
    price: "ksh 2913",
    image: "images/products/LRP EFFACLAR H ISO-BIOME 200ml-kes 2,913.webp",
  },
  {
    name: "LRP LIPIKAR BAUME 75ml",
    price: "ksh 1706",
    image: "images/products/LRP LIPIKAR BAUME 75ml-kes 1,706.webp",
  },
  {
    name: "LRP LIPIKAR BAUME 200ml",
    price: "ksh 2672",
    image: "images/products/LRP LIPIKAR BAUME 200ml-kes 2,672.webp",
  },
  {
    name: "LRP LIPIKAR BAUME 400ml",
    price: "ksh 3275",
    image: "images/products/LRP LIPIKAR BAUME 400ml-3,275.webp",
  },
  {
    name: "LRP LIPIKAR CLEANSING",
    price: "ksh 948",
    image: "images/products/LRP LIPIKAR CLEANSING-kes 948.webp",
  },
  {
    name: "LRP LIPIKAR SYNDET 200ml",
    price: "ksh 1818",
    image: "images/products/LRP LIPIKAR SYNDET 200ml-kes 1,818.webp",
  },
  {
    name: "LRP LIPIKAR SYNDET 200ml",
    price: "ksh 2241",
    image: "images/products/LRP LIPIKAR SYNDET 200ml-kes 2,241.webp",
  },
  {
    name: "LRP LIPIKAR SYNDET 400ml",
    price: "ksh 2633",
    image: "images/products/LRP LIPIKAR SYNDET 400ml-kes 2,633.avif",
  },
  {
    name: "LRP LIPIKAR",
    price: "ksh 2577",
    image: "images/products/LRP LIPIKAR-kes 2,577.jpg",
  },
  {
    name: "LRP MELA B3",
    price: "ksh 3620",
    image: "images/products/LRP MELA B3-kes 3,620.jpg",
  },
  {
    name: "LRP MELA B3",
    price: "ksh 5000",
    image: "images/products/LRP MELA B3-kes 5,000.jpg",
  },
  {
    name: "LRP MELA B3",
    price: "ksh 6030",
    image: "images/products/LRP MELA B3-kes 6,030.webp",
  },
  {
    name: "LRP PIGMENTCLAR",
    price: "ksh 3335",
    image: "images/products/LRP PIGMENTCLAR kes 3,335.webp",
  },
  {
    name: "LRP PURE VITAMIN C10 SERUM 30ML",
    price: "ksh 4605",
    image: "images/products/LRP PURE VITAMIN C10 SERUM 30ML-kes 4,605.webp",
  },
  {
    name: "LRP Thermal Spring Water 50ml ",
    price: "ksh 1905",
    image: "images/products/LRP Thermal Spring Water 50ml kes 1,905.png",
  },
  {
    name: "LRP toleriane dermallergo fluid 40ml",
    price: "ksh 4049",
    image: "images/products/LRP toleriane dermallergo fluid 40ml-kes 4,049.jpg",
  },
  {
    name: "LRP TOLERIANE DOUBLE 400ml",
    price: "ksh 3474",
    image: "images/products/LRP TOLERIANE DOUBLE 400ml-kes 3,474.webp",
  },
  {
    name: "lrp-cicaplast-baume-b5-100ml",
    price: "ksh 3073",
    image: "images/products/lrp-cicaplast-baume-b5-100ml-kes 3,073.jpg",
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
