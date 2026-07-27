// ===== PRODUCT DATA =====
const products = [
  // Medicines
  { id: 1, name: "Paracetamol 500mg", category: "medicines", price: 120, originalPrice: 150, image: "images/paracetamol.jpg", badge: "Popular", rating: 4.8, reviews: 124, description: "Fast-acting pain relief and fever reducer. 24 tablets per pack.", prescription: false },
  { id: 2, name: "Amoxicillin 250mg", category: "medicines", price: 340, originalPrice: 400, image: "images/amoxicillin.jpg", badge: "Rx", rating: 4.7, reviews: 89, description: "Broad-spectrum antibiotic. Prescription required.", prescription: true },
  { id: 3, name: "Ibuprofen 400mg", category: "medicines", price: 180, originalPrice: 220, image: "images/ibuprofen.jpg", badge: "Sale", rating: 4.6, reviews: 97, description: "Anti-inflammatory pain relief. 20 tablets per pack.", prescription: false },
  { id: 4, name: "Metformin 500mg", category: "medicines", price: 290, originalPrice: 350, image: "images/metformin.jpg", badge: "Rx", rating: 4.5, reviews: 63, description: "Diabetes management medication. Prescription required.", prescription: true },
  // Supplements
  { id: 5, name: "Vitamin C 1000mg", category: "supplements", price: 850, originalPrice: 1000, image: "images/vitaminc.jpg", badge: "Best Seller", rating: 4.9, reviews: 215, description: "Immune system booster. 60 effervescent tablets.", prescription: false },
  { id: 6, name: "Omega-3 Fish Oil", category: "supplements", price: 1200, originalPrice: 1450, image: "images/omega3.jpg", badge: "Premium", rating: 4.7, reviews: 178, description: "Heart & brain health. 90 softgel capsules.", prescription: false },
  { id: 7, name: "Multivitamin Daily", category: "supplements", price: 950, originalPrice: 1100, image: "images/multivitamin.jpg", badge: "Popular", rating: 4.6, reviews: 142, description: "Complete daily nutrition. 30 tablets.", prescription: false },
  { id: 8, name: "Zinc + Magnesium", category: "supplements", price: 780, originalPrice: 920, image: "images/zinc.jpg", badge: "New", rating: 4.4, reviews: 56, description: "Immunity & recovery support. 60 capsules.", prescription: false },
  // Personal Care
  { id: 9, name: "Antiseptic Hand Gel", category: "personal-care", price: 250, originalPrice: 300, image: "images/handgel.jpg", badge: "Essential", rating: 4.8, reviews: 304, description: "70% alcohol sanitizer. 500ml pump bottle.", prescription: false },
  { id: 10, name: "Oral Rehydration Salts", category: "personal-care", price: 80, originalPrice: 100, image: "images/ors.jpg", badge: "Popular", rating: 4.7, reviews: 189, description: "Fast rehydration for diarrhoea. Pack of 10 sachets.", prescription: false },
  { id: 11, name: "Medical Face Mask", category: "personal-care", price: 150, originalPrice: 200, image: "images/mask.jpg", badge: "3-Ply", rating: 4.5, reviews: 267, description: "Surgical-grade protection. Box of 50 masks.", prescription: false },
  { id: 12, name: "First Aid Kit", category: "personal-care", price: 1500, originalPrice: 1800, image: "images/firstaid.jpg", badge: "Complete", rating: 4.9, reviews: 93, description: "Complete 42-piece home first aid kit.", prescription: false },
  // Baby Products
  { id: 13, name: "Baby Gripe Water", category: "baby", price: 420, originalPrice: 500, image: "images/gripewater.jpg", badge: "Trusted", rating: 4.8, reviews: 312, description: "Gentle colic & gas relief for infants.", prescription: false },
  { id: 14, name: "Infant Paracetamol Syrup", category: "baby", price: 280, originalPrice: 330, image: "images/babypara.jpg", badge: "Gentle", rating: 4.9, reviews: 278, description: "Safe pain & fever relief for babies 2months+.", prescription: false },
  { id: 15, name: "Baby Vitamin D Drops", category: "baby", price: 650, originalPrice: 780, image: "images/vitamind.jpg", badge: "Essential", rating: 4.7, reviews: 145, description: "Daily vitamin D supplement for newborns.", prescription: false },
  // Medical Devices
  { id: 16, name: "Digital Thermometer", category: "devices", price: 890, originalPrice: 1100, image: "images/thermometer.jpg", badge: "Fast Read", rating: 4.8, reviews: 198, description: "Accurate 10-second reading. Oral/rectal/axillary.", prescription: false },
  { id: 17, name: "Blood Pressure Monitor", category: "devices", price: 3500, originalPrice: 4200, image: "images/bpmonitor.jpg", badge: "Automatic", rating: 4.7, reviews: 167, description: "Upper arm automatic BP & pulse monitor.", prescription: false },
  { id: 18, name: "Glucometer Kit", category: "devices", price: 2800, originalPrice: 3200, image: "images/glucometer.jpg", badge: "Precise", rating: 4.6, reviews: 134, description: "Blood sugar testing kit with 25 strips.", prescription: false },
  // Wellness
  { id: 19, name: "Aloe Vera Gel", category: "wellness", price: 450, originalPrice: 550, image: "images/aloevera.jpg", badge: "Natural", rating: 4.6, reviews: 221, description: "Pure 99% aloe vera soothing gel. 200ml.", prescription: false },
  { id: 20, name: "Lavender Essential Oil", category: "wellness", price: 680, originalPrice: 800, image: "images/lavender.jpg", badge: "Organic", rating: 4.7, reviews: 189, description: "Therapeutic grade lavender oil. 30ml.", prescription: false },
];

// ===== CART STATE =====
let cart = JSON.parse(localStorage.getItem("medelivery_cart")) || [];
let activeCategory = "all";
let searchQuery = "";

// ===== SAVE CART =====
function saveCart() {
  localStorage.setItem("medelivery_cart", JSON.stringify(cart));
}

// ===== RENDER PRODUCTS =====
function renderProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  let filtered = products.filter(p => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results"><div class="no-results-icon">🔍</div><p>No products found. Try a different search or category.</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-image-wrap">
        <div class="product-img-placeholder">
          ${getCategoryIcon(p.category)}
        </div>
        <span class="product-badge badge-${p.badge.toLowerCase().replace(/[^a-z]/g,'-')}">${p.badge}</span>
        ${p.prescription ? '<span class="rx-badge">Rx</span>' : ''}
        <button class="wishlist-btn" onclick="toggleWishlist(${p.id})" title="Save for later">♡</button>
      </div>
      <div class="product-info">
        <p class="product-category">${getCategoryLabel(p.category)}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <div class="product-rating">
          ${renderStars(p.rating)}
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-pricing">
          <span class="product-price">KSh ${p.price.toLocaleString()}</span>
          <span class="product-original">KSh ${p.originalPrice.toLocaleString()}</span>
          <span class="product-discount">${Math.round((1 - p.price/p.originalPrice)*100)}% off</span>
        </div>
        <div class="product-actions">
          <button class="btn-add-cart" onclick="addToCart(${p.id})">
            <span>🛒</span> Add to Cart
          </button>
          <a class="btn-whatsapp" href="https://wa.me/+254715270443?text=Hi%2C%20I%20want%20to%20order%20${encodeURIComponent(p.name)}%20-%20KSh${p.price}" target="_blank">
            <span>💬</span> WhatsApp
          </a>
        </div>
      </div>
    </div>
  `).join("");
}

function getCategoryIcon(cat) {
  const icons = {
    medicines: "💊", supplements: "🧴", "personal-care": "🧼",
    baby: "👶", devices: "🩺", wellness: "🌿"
  };
  return `<div class="cat-icon-big">${icons[cat] || "💊"}</div>`;
}

function getCategoryLabel(cat) {
  const labels = {
    medicines: "Medicines", supplements: "Supplements",
    "personal-care": "Personal Care", baby: "Baby Products",
    devices: "Medical Devices", wellness: "Wellness"
  };
  return labels[cat] || cat;
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = "";
  for (let i = 0; i < full; i++) stars += '<span class="star full">★</span>';
  if (half) stars += '<span class="star half">★</span>';
  for (let i = full + (half ? 1 : 0); i < 5; i++) stars += '<span class="star empty">★</span>';
  return stars;
}

// ===== CART FUNCTIONS =====
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`✅ ${product.name} added to cart!`);
  animateCartBadge();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { saveCart(); updateCartUI(); renderCartItems(); }
}

function updateCartUI() {
  const count = cart.reduce((a, i) => a + i.qty, 0);
  const badge = document.getElementById("cart-badge");
  if (badge) badge.textContent = count;
  const total = cart.reduce((a, i) => a + i.price * i.qty, 0);
  const totalEl = document.getElementById("cart-total");
  if (totalEl) totalEl.textContent = `KSh ${total.toLocaleString()}`;
}

function renderCartItems() {
  const container = document.getElementById("cart-items");
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Your cart is empty</p><p class="cart-empty-sub">Add some products to get started</p></div>`;
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-icon">${getCategoryIcon(item.category)}</div>
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">KSh ${item.price.toLocaleString()}</p>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑</button>
      </div>
    </div>
  `).join("");
}

function animateCartBadge() {
  const badge = document.getElementById("cart-badge");
  if (!badge) return;
  badge.classList.remove("bounce");
  void badge.offsetWidth;
  badge.classList.add("bounce");
}

// ===== CART DRAWER =====
function openCart() {
  renderCartItems();
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("cart-overlay").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("show");
  document.body.style.overflow = "";
}

// ===== CATEGORY FILTER =====
function filterCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.cat === cat);
  });
  renderProducts();
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

// ===== SEARCH =====
function handleSearch(e) {
  searchQuery = e.target.value;
  renderProducts();
}

// ===== TOAST NOTIFICATION =====
function showToast(msg) {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => { toast.classList.remove("show"); setTimeout(() => toast.remove(), 300); }, 3000);
}

// ===== WISHLIST =====
let wishlist = JSON.parse(localStorage.getItem("medelivery_wishlist")) || [];
function toggleWishlist(id) {
  const btn = document.querySelector(`.product-card[data-id="${id}"] .wishlist-btn`);
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(w => w !== id);
    if (btn) btn.textContent = "♡";
    showToast("Removed from wishlist");
  } else {
    wishlist.push(id);
    if (btn) btn.textContent = "♥";
    showToast("❤️ Added to wishlist!");
  }
  localStorage.setItem("medelivery_wishlist", JSON.stringify(wishlist));
}

// ===== PRESCRIPTION MODAL =====
function openPrescriptionModal() {
  document.getElementById("rx-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closePrescriptionModal() {
  document.getElementById("rx-modal").classList.remove("open");
  document.body.style.overflow = "";
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  document.getElementById("mobile-menu").classList.toggle("open");
}

// ===== CHECKOUT =====
function proceedToCheckout() {
  if (cart.length === 0) { showToast("Your cart is empty!"); return; }
  const items = cart.map(i => `${i.qty}x ${i.name} (KSh${i.price})`).join("%0A");
  const total = cart.reduce((a, i) => a + i.price * i.qty, 0);
  const msg = `Hello MeDELIVA! I'd like to order:%0A%0A${items}%0A%0ATotal: KSh${total.toLocaleString()}%0A%0APlease confirm availability and delivery.`;
  window.open(`https://wa.me/+254715270443?text=${msg}`, "_blank");
  closeCart();
}

// ===== SCROLL BEHAVIOUR =====
function handleScroll() {
  const header = document.getElementById("site-header");
  if (window.scrollY > 80) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
}

// ===== SCROLL REVEAL =====
function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) el.classList.add("visible");
  });
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  document.querySelectorAll(".stat-num[data-target]").forEach(el => {
    const target = parseInt(el.dataset.target);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current).toLocaleString() + (el.dataset.suffix || "");
    }, 16);
  });
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartUI();

  // Apply wishlist state
  wishlist.forEach(id => {
    const btn = document.querySelector(`.product-card[data-id="${id}"] .wishlist-btn`);
    if (btn) btn.textContent = "♥";
  });

  // Search input
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.addEventListener("input", handleSearch);

  // Category buttons
  document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", () => filterCategory(btn.dataset.cat));
  });

  // Cart
  document.getElementById("cart-overlay")?.addEventListener("click", closeCart);

  // Scroll
  window.addEventListener("scroll", () => { handleScroll(); revealOnScroll(); });
  revealOnScroll();

  // Counter animation on stats section
  const statsSection = document.querySelector(".stats-section");
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { animateCounters(); observer.disconnect(); } });
    }, { threshold: 0.3 });
    observer.observe(statsSection);
  }

  // Prescription form
  document.getElementById("rx-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("✅ Prescription submitted! Our pharmacist will contact you shortly.");
    closePrescriptionModal();
    e.target.reset();
  });
});
