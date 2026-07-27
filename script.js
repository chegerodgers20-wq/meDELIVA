// ===== PRODUCT DATA =====
const products = [
  // Medicines
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "medicines",
    price: 120,
    originalPrice: 150,
    image: "images/paracetamol.jpg",
    badge: "Popular",
    rating: 4.8,
    reviews: 124,
    description:
      "Fast-acting pain relief and fever reducer. 24 tablets per pack.",
    prescription: false,
  },
  {
    id: 2,
    name: "Amoxicillin 250mg",
    category: "medicines",
    price: 340,
    originalPrice: 400,
    image: "images/amoxicillin.jpg",
    badge: "Rx",
    rating: 4.7,
    reviews: 89,
    description: "Broad-spectrum antibiotic. Prescription required.",
    prescription: true,
  },
  {
    id: 3,
    name: "Ibuprofen 400mg",
    category: "medicines",
    price: 180,
    originalPrice: 220,
    image: "images/ibuprofen.jpg",
    badge: "Sale",
    rating: 4.6,
    reviews: 97,
    description: "Anti-inflammatory pain relief. 20 tablets per pack.",
    prescription: false,
  },
  {
    id: 4,
    name: "Metformin 500mg",
    category: "medicines",
    price: 290,
    originalPrice: 350,
    image: "images/metformin.jpg",
    badge: "Rx",
    rating: 4.5,
    reviews: 63,
    description: "Diabetes management medication. Prescription required.",
    prescription: true,
  },
  // Supplements
  {
    id: 5,
    name: "Vitamin C 1000mg",
    category: "supplements",
    price: 850,
    originalPrice: 1000,
    image: "images/vitaminc.jpg",
    badge: "Best Seller",
    rating: 4.9,
    reviews: 215,
    description: "Immune system booster. 60 effervescent tablets.",
    prescription: false,
  },
  {
    id: 6,
    name: "Omega-3 Fish Oil",
    category: "supplements",
    price: 1200,
    originalPrice: 1450,
    image: "images/omega3.jpg",
    badge: "Premium",
    rating: 4.7,
    reviews: 178,
    description: "Heart & brain health. 90 softgel capsules.",
    prescription: false,
  },
  {
    id: 7,
    name: "Multivitamin Daily",
    category: "supplements",
    price: 950,
    originalPrice: 1100,
    image: "images/multivitamin.jpg",
    badge: "Popular",
    rating: 4.6,
    reviews: 142,
    description: "Complete daily nutrition. 30 tablets.",
    prescription: false,
  },
  {
    id: 8,
    name: "Zinc + Magnesium",
    category: "supplements",
    price: 780,
    originalPrice: 920,
    image: "images/zinc.jpg",
    badge: "New",
    rating: 4.4,
    reviews: 56,
    description: "Immunity & recovery support. 60 capsules.",
    prescription: false,
  },
  // Personal Care
  {
    id: 9,
    name: "Antiseptic Hand Gel",
    category: "personal-care",
    price: 250,
    originalPrice: 300,
    image: "images/handgel.jpg",
    badge: "Essential",
    rating: 4.8,
    reviews: 304,
    description: "70% alcohol sanitizer. 500ml pump bottle.",
    prescription: false,
  },
  {
    id: 10,
    name: "Oral Rehydration Salts",
    category: "personal-care",
    price: 80,
    originalPrice: 100,
    image: "images/ors.jpg",
    badge: "Popular",
    rating: 4.7,
    reviews: 189,
    description: "Fast rehydration for diarrhoea. Pack of 10 sachets.",
    prescription: false,
  },
  {
    id: 11,
    name: "Medical Face Mask",
    category: "personal-care",
    price: 150,
    originalPrice: 200,
    image: "images/mask.jpg",
    badge: "3-Ply",
    rating: 4.5,
    reviews: 267,
    description: "Surgical-grade protection. Box of 50 masks.",
    prescription: false,
  },
  {
    id: 12,
    name: "First Aid Kit",
    category: "personal-care",
    price: 1500,
    originalPrice: 1800,
    image: "images/firstaid.jpg",
    badge: "Complete",
    rating: 4.9,
    reviews: 93,
    description: "Complete 42-piece home first aid kit.",
    prescription: false,
  },
  // Baby Products
  {
    id: 13,
    name: "Baby Gripe Water",
    category: "baby",
    price: 420,
    originalPrice: 500,
    image: "images/gripewater.jpg",
    badge: "Trusted",
    rating: 4.8,
    reviews: 312,
    description: "Gentle colic & gas relief for infants.",
    prescription: false,
  },
  {
    id: 14,
    name: "Infant Paracetamol Syrup",
    category: "baby",
    price: 280,
    originalPrice: 330,
    image: "images/babypara.jpg",
    badge: "Gentle",
    rating: 4.9,
    reviews: 278,
    description: "Safe pain & fever relief for babies 2months+.",
    prescription: false,
  },
  {
    id: 15,
    name: "Baby Vitamin D Drops",
    category: "baby",
    price: 650,
    originalPrice: 780,
    image: "images/vitamind.jpg",
    badge: "Essential",
    rating: 4.7,
    reviews: 145,
    description: "Daily vitamin D supplement for newborns.",
    prescription: false,
  },
  // Medical Devices
  {
    id: 16,
    name: "Digital Thermometer",
    category: "devices",
    price: 890,
    originalPrice: 1100,
    image: "images/thermometer.jpg",
    badge: "Fast Read",
    rating: 4.8,
    reviews: 198,
    description: "Accurate 10-second reading. Oral/rectal/axillary.",
    prescription: false,
  },
  {
    id: 17,
    name: "Blood Pressure Monitor",
    category: "devices",
    price: 3500,
    originalPrice: 4200,
    image: "images/bpmonitor.jpg",
    badge: "Automatic",
    rating: 4.7,
    reviews: 167,
    description: "Upper arm automatic BP & pulse monitor.",
    prescription: false,
  },
  {
    id: 18,
    name: "Glucometer Kit",
    category: "devices",
    price: 2800,
    originalPrice: 3200,
    image: "images/glucometer.jpg",
    badge: "Precise",
    rating: 4.6,
    reviews: 134,
    description: "Blood sugar testing kit with 25 strips.",
    prescription: false,
  },
  // Wellness & Skincare (La Roche-Posay & CeraVe)
  {
    id: 19,
    name: "Aloe Vera Gel",
    category: "wellness",
    price: 450,
    originalPrice: 550,
    image: "images/aloevera.jpg",
    badge: "Natural",
    rating: 4.6,
    reviews: 221,
    description: "Pure 99% aloe vera soothing gel. 200ml.",
    prescription: false,
  },
  {
    id: 20,
    name: "Lavender Essential Oil",
    category: "wellness",
    price: 680,
    originalPrice: 800,
    image: "images/lavender.jpg",
    badge: "Organic",
    rating: 4.7,
    reviews: 189,
    description: "Therapeutic grade lavender oil. 30ml.",
    prescription: false,
  },
  {
    id: 21,
    name: "LRP Retinol Serum 30ml",
    category: "wellness",
    price: 4680,
    originalPrice: 5200,
    image: "products/(ANTI WRINKLES)LRP RETINOL SERUM 30ML-kes 4,680.webp",
    badge: "Anti-Aging",
    rating: 4.8,
    reviews: 156,
    description:
      "Anti-wrinkle retinol serum. Reduces fine lines and boosts skin renewal.",
    prescription: false,
  },
  {
    id: 22,
    name: "LRP Hyalu B5 Serum 30ml",
    category: "wellness",
    price: 4605,
    originalPrice: 5100,
    image: "products/(FINE LINES) LRP HYALU B5 SERUM 30ML-kes 4,605.jpg",
    badge: "Hydrating",
    rating: 4.9,
    reviews: 203,
    description:
      "Pure hyaluronic acid serum with vitamin B5. Plumps skin and smooths fine lines.",
    prescription: false,
  },
  {
    id: 23,
    name: "Anthelios UVmune Cream SPF50 50ml",
    category: "wellness",
    price: 3017,
    originalPrice: 3350,
    image: "products/Anthelios UVmune Cream SPF50 50ml-kes 3,017.png",
    badge: "SPF50",
    rating: 4.7,
    reviews: 178,
    description:
      "Broad-spectrum UVA/UVB protection with MEXORYL 400 filter. Invisible finish.",
    prescription: false,
  },
  {
    id: 24,
    name: "CeraVe Advanced Repair Ointment 88ml",
    category: "wellness",
    price: 1594,
    originalPrice: 1770,
    image: "products/CERAVE ADVANCED REPAIR OINTMENT 88ml-kes 1,594.jpeg",
    badge: "Repair",
    rating: 4.6,
    reviews: 134,
    description:
      "Intensive barrier repair with 3 essential ceramides. For very dry, cracked skin.",
    prescription: false,
  },
  {
    id: 25,
    name: "CeraVe AM Facial Moisturizing Lotion SPF30 52ml",
    category: "wellness",
    price: 2232,
    originalPrice: 2480,
    image: "products/CERAVE AM FACIAL MOIST LOTION Spf30 52ml-kes 2,232.jpg",
    badge: "SPF30",
    rating: 4.7,
    reviews: 189,
    description:
      "Daytime moisturizer with ceramides, niacinamide & broad-spectrum SPF30.",
    prescription: false,
  },
  {
    id: 26,
    name: "CeraVe AM Facial Moisturizing Lotion SPF50 52ml",
    category: "wellness",
    price: 2405,
    originalPrice: 2670,
    image:
      "products/CERAVE AM FACIAL MOISTURIZING  LOTION Spf50 52ml-kes 2,405.webp",
    badge: "SPF50",
    rating: 4.8,
    reviews: 156,
    description:
      "High protection SPF50 moisturizer with 3 ceramides and hyaluronic acid.",
    prescription: false,
  },
  {
    id: 27,
    name: "CeraVe Blemish Control Cleanser 236ml",
    category: "wellness",
    price: 1945,
    originalPrice: 2160,
    image: "products/CERAVE BLEMISH CONTROL -kes 1,883.jpeg",
    badge: "Acne Care",
    rating: 4.6,
    reviews: 167,
    description:
      "Salicylic acid cleanser for acne-prone skin. Unclogs pores and reduces blemishes.",
    prescription: false,
  },
  {
    id: 28,
    name: "CeraVe Blemish Control Gel",
    category: "wellness",
    price: 1883,
    originalPrice: 2090,
    image: "products/CERAVE BLEMISH CONTROL -kes 1,883.jpeg",
    badge: "Acne Care",
    rating: 4.5,
    reviews: 143,
    description:
      "Non-drying acne treatment gel with salicylic acid. Clears and prevents breakouts.",
    prescription: false,
  },
  {
    id: 29,
    name: "CeraVe Daily Moisturizing Lotion 473ml",
    category: "wellness",
    price: 2629,
    originalPrice: 2920,
    image: "products/CERAVE DAILY MOISTURIZING 473ml-kes 2,629.webp",
    badge: "Best Seller",
    rating: 4.8,
    reviews: 245,
    description:
      "Lightweight, oil-free moisturizer with ceramides & hyaluronic acid. 24-hour hydration.",
    prescription: false,
  },
  {
    id: 30,
    name: "CeraVe Daily Moisturizing Lotion 236ml",
    category: "wellness",
    price: 1982,
    originalPrice: 2200,
    image: "products/Cerave Daily Moisturizing Lotion 236ml-kes 1,982.webp",
    badge: "Popular",
    rating: 4.7,
    reviews: 198,
    description:
      "Lightweight face & body lotion with MVE Technology for all-day moisture.",
    prescription: false,
  },
  {
    id: 31,
    name: "CeraVe Foaming Cleanser 236ml",
    category: "wellness",
    price: 2000,
    originalPrice: 2220,
    image: "products/CERAVE FOAM CLEANSER 236ml-kes 2,000.jpg",
    badge: "Oil Control",
    rating: 4.6,
    reviews: 176,
    description:
      "Foaming face wash for normal to oily skin. Removes excess oil without stripping.",
    prescription: false,
  },
  {
    id: 32,
    name: "CeraVe Hydrating Cleanser 236ml",
    category: "wellness",
    price: 1512,
    originalPrice: 1680,
    image: "products/CERAVE HYDRATING CLEANSER 236ml-kes 1,512.jpg",
    badge: "Gentle",
    rating: 4.8,
    reviews: 234,
    description:
      "Non-foaming cleanser for normal to dry skin. With ceramides & hyaluronic acid.",
    prescription: false,
  },
  {
    id: 33,
    name: "CeraVe Hydrating Cleanser 473ml",
    category: "wellness",
    price: 2293,
    originalPrice: 2550,
    image: "products/CERAVE HYDRATING CLEANSER 473ML-kes 2,293.jpg",
    badge: "Value",
    rating: 4.7,
    reviews: 189,
    description:
      "Gentle, non-stripping cleanser with 3 essential ceramides. Large family size.",
    prescription: false,
  },
  {
    id: 34,
    name: "CeraVe Hydrating Cream-to-Foam Cleanser 236ml",
    category: "wellness",
    price: 2112,
    originalPrice: 2350,
    image:
      "products/CERAVE HYDRATING CREAM TO FOAM CLEANSER FOR NORMAL TO DRY SKIN 236ml-kes 2,112.jpeg",
    badge: "Gentle",
    rating: 4.6,
    reviews: 156,
    description:
      "Cream-to-foam formula for normal to dry skin. Removes makeup & hydrates.",
    prescription: false,
  },
  {
    id: 35,
    name: "CeraVe Hydrating Hyaluronic Acid Serum 30ml",
    category: "wellness",
    price: 2870,
    originalPrice: 3190,
    image:
      "products/CERAVE HYDRATING HYALURONIC ACID SYRUM 30ml-KES 2,870.webp",
    badge: "Hydrating",
    rating: 4.8,
    reviews: 212,
    description:
      "Highest concentration of hyaluronic acid with vitamin B5. 24-hour hydration boost.",
    prescription: false,
  },
  {
    id: 36,
    name: "CeraVe Intensive Moisturizing Lotion 236ml",
    category: "wellness",
    price: 2206,
    originalPrice: 2450,
    image: "products/CERAVE INTENSIVE MOISTURIZING LOTION 236ml-kes 2,206.webp",
    badge: "Intensive",
    rating: 4.7,
    reviews: 167,
    description:
      "Rich, fast-absorbing lotion for dry skin. Restores barrier with ceramides.",
    prescription: false,
  },
  {
    id: 37,
    name: "CeraVe Moisturizing Cream 340g",
    category: "wellness",
    price: 2413,
    originalPrice: 2680,
    image: "products/CERAVE MOISTURIZING CREAM 340g-kes 2,413.jpg",
    badge: "Rich",
    rating: 4.9,
    reviews: 278,
    description:
      "Rich, non-greasy cream for face & body. Ideal for dry to very dry skin.",
    prescription: false,
  },
  {
    id: 38,
    name: "CeraVe Moisturizing Cream 454g",
    category: "wellness",
    price: 2913,
    originalPrice: 3240,
    image: "products/CERAVE MOISTURIZING CREAM 454g-kes 2,913.webp",
    badge: "Value",
    rating: 4.8,
    reviews: 234,
    description:
      "Large family size moisturizing cream. Long-lasting hydration for dry skin.",
    prescription: false,
  },
  {
    id: 39,
    name: "CeraVe Oil Control Moisturizing Gel-Cream",
    category: "wellness",
    price: 2456,
    originalPrice: 2730,
    image: "products/CERAVE OIL CONTROL MOISTURIZING GEL-CREAM -kes 2,456.jpg",
    badge: "Oil Control",
    rating: 4.5,
    reviews: 134,
    description:
      "Lightweight gel-cream for oily skin. Mattifies and hydrates with niacinamide.",
    prescription: false,
  },
  {
    id: 40,
    name: "CeraVe PM Facial Moisturizing Lotion 52ml",
    category: "wellness",
    price: 2232,
    originalPrice: 2480,
    image:
      "products/CERAVE PM FACIAL MOISTURIZING LOTION 1.75FL 52ml-KES 2,232.webp",
    badge: "Night Repair",
    rating: 4.7,
    reviews: 189,
    description:
      "Nighttime moisturizer with niacinamide & ceramides. Oil-free, non-comedogenic.",
    prescription: false,
  },
  {
    id: 41,
    name: "CeraVe Reparative Hand Cream 50ml",
    category: "wellness",
    price: 941,
    originalPrice: 1050,
    image: "products/CERAVE REPARATIVE HAND CREAM 50ml -kes 941.webp",
    badge: "Essential",
    rating: 4.6,
    reviews: 145,
    description:
      "Fast-absorbing hand cream with ceramides. Repairs dry, cracked hands.",
    prescription: false,
  },
  {
    id: 42,
    name: "CeraVe Resurfacing Retinol Serum",
    category: "wellness",
    price: 3340,
    originalPrice: 3710,
    image: "products/CERAVE RESURFACING RETINAL SERUM -kes 3,340.jpeg",
    badge: "Anti-Aging",
    rating: 4.7,
    reviews: 167,
    description:
      "Encapsulated retinol serum for post-acne marks. Smooths skin texture.",
    prescription: false,
  },
  {
    id: 43,
    name: "CeraVe SA Renewing Foot Cream 88ml",
    category: "wellness",
    price: 2045,
    originalPrice: 2270,
    image: "products/CERAVE SA RENEWING FOOT CREAM 88ML -kes 2,045.jpg",
    badge: "Exfoliating",
    rating: 4.5,
    reviews: 123,
    description:
      "Salicylic acid foot cream exfoliates & softens rough, dry feet.",
    prescription: false,
  },
  {
    id: 44,
    name: "CeraVe SA Smoothing Cleanser 236ml",
    category: "wellness",
    price: 2163,
    originalPrice: 2400,
    image: "products/CERAVE SA SMOOTHING CLEANSER 236ml-kes 2,163.webp",
    badge: "Smoothing",
    rating: 4.6,
    reviews: 156,
    description:
      "Salicylic acid cleanser for rough & bumpy skin. Gently exfoliates and smoothes.",
    prescription: false,
  },
  {
    id: 45,
    name: "CeraVe SA Smoothing Cream 340g",
    category: "wellness",
    price: 3215,
    originalPrice: 3570,
    image:
      "products/CERAVE SA SMOOTHING CREAM FOR DRY ROUGH BUMPY SKIN 340g -kes 3,215.jpg",
    badge: "Smoothing",
    rating: 4.7,
    reviews: 189,
    description:
      "For dry, rough, bumpy skin. Salicylic acid & lactic acid exfoliate and soften.",
    prescription: false,
  },
  {
    id: 46,
    name: "CeraVe Skin Renewing Peptide Cream 48ml",
    category: "wellness",
    price: 3000,
    originalPrice: 3330,
    image: "products/CERAVE SKIN RENEWING PEPTIDE FOR FACE 48ml-KES 3,000.jpeg",
    badge: "Peptide",
    rating: 4.8,
    reviews: 134,
    description:
      "Peptide complex cream reduces look of tired skin. Firms and brightens.",
    prescription: false,
  },
  {
    id: 47,
    name: "LRP Anthelios Shaka Spray SPF50 200ml",
    category: "wellness",
    price: 4293,
    originalPrice: 4770,
    image:
      "products/La Roche Posay Anthelios Shaka Invisible Spray SPF50 Peaux Sensibles 200ml-kes 4,293.webp",
    badge: "SPF50",
    rating: 4.7,
    reviews: 156,
    description:
      "Invisible spray sunscreen for sensitive skin. Ultra-resistant to water & sweat.",
    prescription: false,
  },
  {
    id: 48,
    name: "LRP Anthelios UVMune 200ml",
    category: "wellness",
    price: 4293,
    originalPrice: 4770,
    image: "products/La Roche Posay Anthelios UVMune 200ml-kes 4,293.webp",
    badge: "SPF50",
    rating: 4.8,
    reviews: 178,
    description:
      "High protection body sunscreen. Invisible finish with MEXORYL 400.",
    prescription: false,
  },
  {
    id: 49,
    name: "LRP Anthelios UVMune 400 50ml",
    category: "wellness",
    price: 2931,
    originalPrice: 3260,
    image: "products/La Roche Posay ANTHELIOS UVMUNE 400 50ml-kes 2,931.jpeg",
    badge: "SPF50+",
    rating: 4.9,
    reviews: 234,
    description:
      "Invisible fluid with MEXORYL 400. Ultimate UVA protection for all skin types.",
    prescription: false,
  },
  {
    id: 50,
    name: "LRP Anthelios UVMune 400 Fluid 50ml",
    category: "wellness",
    price: 2931,
    originalPrice: 3260,
    image: "products/La Roche Posay ANTHELIOS UVMUNE 400 50ml-kes 2,931.jpeg",
    badge: "SPF50+",
    rating: 4.8,
    reviews: 198,
    description:
      "Ultra-light fluid sunscreen. Non-greasy, invisible finish with high UVA defense.",
    prescription: false,
  },
  {
    id: 51,
    name: "LRP Anthelios Oil Control 50ml",
    category: "wellness",
    price: 2931,
    originalPrice: 3260,
    image: "products/La Roche Posay Anthelois Oil Control 50ml-kes 2,931.webp",
    badge: "Matte",
    rating: 4.6,
    reviews: 167,
    description:
      "Mattifying sunscreen for oily, acne-prone skin. Controls shine all day.",
    prescription: false,
  },
  {
    id: 52,
    name: "LRP Thermal Spring Water 150ml",
    category: "wellness",
    price: 2210,
    originalPrice: 2460,
    image: "products/La Roche Posay Thermal Water 150Ml-kes 2,210.0.jpg",
    badge: "Soothing",
    rating: 4.7,
    reviews: 312,
    description:
      "Soothing thermal spring water spray. Rich in minerals & antioxidants for sensitive skin.",
    prescription: false,
  },
  {
    id: 53,
    name: "LRP Anthelios UVMune 400 Fluid SPF50",
    category: "wellness",
    price: 3200,
    originalPrice: 3560,
    image:
      "products/La Roche-Posay Anthel.Fluid UVMune 400 Spf50-kes 3,200.00.webp",
    badge: "SPF50+",
    rating: 4.8,
    reviews: 189,
    description:
      "Dermatologist-recommended fluid sunscreen. Ultra-long UVA protection.",
    prescription: false,
  },
  {
    id: 54,
    name: "LRP Anthelios Anti-Shine Mist SPF50 75ml",
    category: "wellness",
    price: 2543,
    originalPrice: 2830,
    image: "products/LRP ANTHELIOS ANTI SHINE MIST Spf50 75ml-kes 2,543.webp",
    badge: "Matte",
    rating: 4.5,
    reviews: 134,
    description:
      "Anti-shine face mist with SPF50. Perfect for makeup touch-ups and oily skin.",
    prescription: false,
  },
  {
    id: 55,
    name: "LRP Anthelios Baby Lotion SPF50 50ml",
    category: "wellness",
    price: 3189,
    originalPrice: 3540,
    image: "products/LRP ANTHELIOS BABY LOTION 50ml-kes 3,189 (2).jpg",
    badge: "Baby Safe",
    rating: 4.8,
    reviews: 145,
    description:
      "Gentle mineral sunscreen for babies. Fragrance-free, water-resistant formula.",
    prescription: false,
  },
  {
    id: 56,
    name: "LRP Anthelios Lotion SPF50 Eco-Tube 250ml",
    category: "wellness",
    price: 4827,
    originalPrice: 5370,
    image: "products/LRP ANTHELIOS LOTION spf50 eco-tube 250ml-kes 4,827.jpg",
    badge: "Eco",
    rating: 4.7,
    reviews: 123,
    description:
      "Eco-friendly tube packaging. High protection body sunscreen, ocean-respect formula.",
    prescription: false,
  },
  {
    id: 57,
    name: "LRP Effaclar Serum 30ml",
    category: "wellness",
    price: 5344,
    originalPrice: 5940,
    image: "products/LRP EFFACLAR 30ml-kes 5,344.jpg",
    badge: "Premium",
    rating: 4.8,
    reviews: 167,
    description:
      "Ultra-concentrated serum with salicylic, glycolic & lipo-hydroxy acids. Decongests pores.",
    prescription: false,
  },
  {
    id: 58,
    name: "LRP Effaclar Duo+M 40ml",
    category: "wellness",
    price: 2491,
    originalPrice: 2770,
    image: "products/LRP EFFACLAR 40ml -kes 2,491.jpg",
    badge: "Acne Care",
    rating: 4.7,
    reviews: 234,
    description:
      "Anti-blemish corrective gel moisturizer. Salicylic acid, niacinamide & zinc PCA.",
    prescription: false,
  },
  {
    id: 59,
    name: "LRP Effaclar Duo+M 40ml (New Formula)",
    category: "wellness",
    price: 3271,
    originalPrice: 3640,
    image: "products/LRP EFFACLAR 40ml-kes 3,271.webp",
    badge: "New",
    rating: 4.8,
    reviews: 189,
    description:
      "Updated formula for oily, spot-prone skin. Lightweight hydration fades scarring.",
    prescription: false,
  },
  {
    id: 60,
    name: "LRP Effaclar Cleanser 400ml",
    category: "wellness",
    price: 3620,
    originalPrice: 4020,
    image: "products/LRP EFFACLAR 400ml-kes 3,620.webp",
    badge: "Value",
    rating: 4.6,
    reviews: 198,
    description:
      "Large size purifying foaming gel cleanser. Removes excess oil for oily skin.",
    prescription: false,
  },
  {
    id: 61,
    name: "LRP Effaclar A.Z Gel 40ml",
    category: "wellness",
    price: 4870,
    originalPrice: 5410,
    image: "products/LRP EFFACLAR A.Z GEL 40ml-kes 4,870.webp",
    badge: "Anti-Aging",
    rating: 4.7,
    reviews: 145,
    description:
      "Azelaic acid gel cream for mature blemish-prone skin. Hydrates while fighting acne.",
    prescription: false,
  },
  {
    id: 62,
    name: "LRP Effaclar Acne Routine Kit",
    category: "wellness",
    price: 3705,
    originalPrice: 4120,
    image: "products/LRP EFFACLAR ACNE ROUTINE-3,705.webp",
    badge: "Kit",
    rating: 4.8,
    reviews: 234,
    description:
      "Complete 3-step acne routine: cleanser, toner & moisturizer. Dermatologist tested.",
    prescription: false,
  },
  {
    id: 63,
    name: "LRP Effaclar Duo+M 22pc",
    category: "wellness",
    price: 1724,
    originalPrice: 1920,
    image: "products/LRP EFFACLAR DUO+M 22pc-kes 1,724.webp",
    badge: "Travel",
    rating: 4.5,
    reviews: 98,
    description:
      "Travel-size anti-blemish moisturizer. Perfect for trying or on-the-go skincare.",
    prescription: false,
  },
  {
    id: 64,
    name: "LRP Effaclar Duo+M 40ml (Standard)",
    category: "wellness",
    price: 3012,
    originalPrice: 3350,
    image: "products/LRP EFFACLAR DUO+M 40ml-kes 3,012.webp",
    badge: "Popular",
    rating: 4.7,
    reviews: 312,
    description:
      "Best-selling anti-blemish moisturizer. Reduces breakouts and evens skin tone.",
    prescription: false,
  },
  {
    id: 65,
    name: "LRP Effaclar Duo+M Unifiant 40ml",
    category: "wellness",
    price: 3012,
    originalPrice: 3350,
    image: "products/LRP EFFACLAR DUO+M 40ml-kes 3,012.webp",
    badge: "Tinted",
    rating: 4.6,
    reviews: 134,
    description:
      "Tinted version with light coverage. Unifies complexion while treating blemishes.",
    prescription: false,
  },
  {
    id: 66,
    name: "LRP Effaclar Foaming Gel 200ml",
    category: "wellness",
    price: 2365,
    originalPrice: 2630,
    image: "products/LRP EFFACLAR FOAM 200ml-2,365.webp",
    badge: "Cleanser",
    rating: 4.7,
    reviews: 245,
    description:
      "Purifying foaming gel for oily skin. Removes impurities without over-drying.",
    prescription: false,
  },
  {
    id: 67,
    name: "LRP Effaclar Foaming Gel 400ml",
    category: "wellness",
    price: 3405,
    originalPrice: 3780,
    image: "products/LRP EFFACLAR FOAM 400ml-kes 3,405.jpg",
    badge: "Value",
    rating: 4.8,
    reviews: 198,
    description:
      "Large family size foaming cleanser. pH-balanced for daily oily skin care.",
    prescription: false,
  },
  {
    id: 68,
    name: "LRP Effaclar H 40ml",
    category: "wellness",
    price: 3060,
    originalPrice: 3400,
    image: "products/LRP EFFACLAR H 40ml-kes 3,060.jpg",
    badge: "Soothing",
    rating: 4.6,
    reviews: 123,
    description:
      "Soothing moisturizer for skin weakened by acne treatments. Restores comfort.",
    prescription: false,
  },
  {
    id: 69,
    name: "LRP Effaclar H Iso-Biome 200ml",
    category: "wellness",
    price: 2913,
    originalPrice: 3240,
    image: "products/LRP EFFACLAR H ISO-BIOME 200ml-kes 2,913.webp",
    badge: "Biome",
    rating: 4.7,
    reviews: 145,
    description:
      "Prebiotic cleanser for acne-prone skin. Supports healthy skin microbiome.",
    prescription: false,
  },
  {
    id: 70,
    name: "LRP Lipikar Baume 75ml",
    category: "wellness",
    price: 1706,
    originalPrice: 1900,
    image: "products/LRP LIPIKAR BAUME 75ml-kes 1,706.webp",
    badge: "Travel",
    rating: 4.6,
    reviews: 134,
    description:
      "Travel-size anti-itch body balm. For dry, eczema-prone skin. Instant relief.",
    prescription: false,
  },
  {
    id: 71,
    name: "LRP Lipikar Baume 200ml",
    category: "wellness",
    price: 2672,
    originalPrice: 2970,
    image: "products/LRP LIPIKAR BAUME 200ml-kes 2,672.webp",
    badge: "Popular",
    rating: 4.8,
    reviews: 267,
    description:
      "Intensive anti-itch body balm. 48-hour hydration for very dry, atopic skin.",
    prescription: false,
  },
  {
    id: 72,
    name: "LRP Lipikar Baume 400ml",
    category: "wellness",
    price: 3275,
    originalPrice: 3640,
    image: "products/LRP LIPIKAR BAUME 400ml-3,275.webp",
    badge: "Family",
    rating: 4.9,
    reviews: 312,
    description:
      "Large family size body balm. Relieves dryness and itching for whole family.",
    prescription: false,
  },
  {
    id: 73,
    name: "LRP Lipikar Cleansing Oil",
    category: "wellness",
    price: 948,
    originalPrice: 1050,
    image: "products/LRP LIPIKAR CLEANSING-kes 948.webp",
    badge: "Gentle",
    rating: 4.5,
    reviews: 98,
    description:
      "Lipid-replenishing cleansing oil for dry skin. Nourishes while cleansing.",
    prescription: false,
  },
  {
    id: 74,
    name: "LRP Lipikar Syndet 200ml",
    category: "wellness",
    price: 1818,
    originalPrice: 2020,
    image: "products/LRP LIPIKAR SYNDET 200ml-kes 1,818.webp",
    badge: "Gentle",
    rating: 4.7,
    reviews: 156,
    description:
      "Creamy wash for sensitive skin. Soap-free, pH-balanced with niacinamide.",
    prescription: false,
  },
  {
    id: 75,
    name: "LRP Lipikar Syndet 200ml (New)",
    category: "wellness",
    price: 2241,
    originalPrice: 2490,
    image: "products/LRP LIPIKAR SYNDET 200ml-kes 2,241.webp",
    badge: "New",
    rating: 4.6,
    reviews: 123,
    description:
      "Updated formula with prebiotic complex. For dry, sensitive skin.",
    prescription: false,
  },
  {
    id: 76,
    name: "LRP Lipikar Syndet 400ml",
    category: "wellness",
    price: 2633,
    originalPrice: 2930,
    image: "products/LRP LIPIKAR SYNDET 400ml-kes 2,633.avif",
    badge: "Value",
    rating: 4.7,
    reviews: 189,
    description:
      "Large size creamy body wash. Gentle cleansing for dry, eczema-prone skin.",
    prescription: false,
  },
  {
    id: 77,
    name: "LRP Lipikar AP+M Body Balm",
    category: "wellness",
    price: 2577,
    originalPrice: 2860,
    image: "products/LRP LIPIKAR-kes 2,577.jpg",
    badge: "Anti-Itch",
    rating: 4.8,
    reviews: 234,
    description:
      "Anti-itch body balm with Aqua Posae Filiformis. For atopic eczema-prone skin.",
    prescription: false,
  },
  {
    id: 78,
    name: "LRP Mela B3 Serum 30ml",
    category: "wellness",
    price: 3620,
    originalPrice: 4020,
    image: "products/LRP MELA B3-kes 3,620.jpg",
    badge: "Brightening",
    rating: 4.8,
    reviews: 189,
    description:
      "Anti-dark spot serum with Melasyl. Fades pigmentation & prevents new spots.",
    prescription: false,
  },
  {
    id: 79,
    name: "LRP Mela B3 Serum 50ml",
    category: "wellness",
    price: 5000,
    originalPrice: 5560,
    image: "products/LRP MELA B3-kes 5,000.jpg",
    badge: "Brightening",
    rating: 4.9,
    reviews: 156,
    description:
      "Larger size anti-pigmentation serum. 10% niacinamide + retinol for even tone.",
    prescription: false,
  },
  {
    id: 80,
    name: "LRP Mela B3 Intensive Serum",
    category: "wellness",
    price: 6030,
    originalPrice: 6700,
    image: "products/LRP MELA B3-kes 6,030.webp",
    badge: "Premium",
    rating: 4.9,
    reviews: 134,
    description:
      "Maximum strength anti-dark spot treatment. Dermatologist-developed for pigmentation.",
    prescription: false,
  },
  {
    id: 81,
    name: "LRP Pigmentclar Serum",
    category: "wellness",
    price: 3335,
    originalPrice: 3710,
    image: "products/LRP PIGMENTCLAR kes 3,335.webp",
    badge: "Brightening",
    rating: 4.7,
    reviews: 167,
    description:
      "Brightening serum for uneven skin tone. LHA promotes cell turnover.",
    prescription: false,
  },
  {
    id: 82,
    name: "LRP Pure Vitamin C10 Serum 30ml",
    category: "wellness",
    price: 4605,
    originalPrice: 5120,
    image: "products/LRP PURE VITAMIN C10 SERUM 30ML-kes 4,605.webp",
    badge: "Vitamin C",
    rating: 4.8,
    reviews: 212,
    description:
      "10% pure ascorbic acid serum. Brightens, boosts radiance & antioxidant protection.",
    prescription: false,
  },
  {
    id: 83,
    name: "LRP Thermal Spring Water 50ml",
    category: "wellness",
    price: 1905,
    originalPrice: 2120,
    image: "products/LRP Thermal Spring Water 50ml kes 1,905.png",
    badge: "Travel",
    rating: 4.6,
    reviews: 189,
    description:
      "Pocket-size soothing spray. Rich in selenium for sensitive skin relief.",
    prescription: false,
  },
  {
    id: 84,
    name: "LRP Toleriane Dermallergo Fluid 40ml",
    category: "wellness",
    price: 4049,
    originalPrice: 4500,
    image: "products/LRP toleriane dermallergo fluid 40ml-kes 4,049.jpg",
    badge: "Sensitive",
    rating: 4.7,
    reviews: 145,
    description:
      "Ultra-soothing fluid for hypersensitive skin. Reduces redness & strengthens barrier.",
    prescription: false,
  },
  {
    id: 85,
    name: "LRP Toleriane Double Repair 400ml",
    category: "wellness",
    price: 3474,
    originalPrice: 3860,
    image: "products/LRP TOLERIANE DOUBLE 400ml-kes 3,474.webp",
    badge: "Repair",
    rating: 4.8,
    reviews: 234,
    description:
      "Double repair moisturizer with ceramide-3 & niacinamide. For dry, sensitive skin.",
    prescription: false,
  },
  {
    id: 86,
    name: "LRP Cicaplast Baume B5 100ml",
    category: "wellness",
    price: 3073,
    originalPrice: 3420,
    image: "products/lrp-cicaplast-baume-b5-100ml-kes 3,073.jpg",
    badge: "Repair",
    rating: 4.9,
    reviews: 345,
    description:
      "Multi-purpose repairing balm with vitamin B5. For irritated, damaged skin barrier.",
    prescription: false,
  },
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

  let filtered = products.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch =
      (p.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.description || "").toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results"><div class="no-results-icon">🔍</div><p>No products found. Try a different search or category.</p></div>`;
    return;
  }

  grid.innerHTML = filtered
    .map(
      (p) => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-image-wrap">
        <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="product-img-placeholder" style="display:none">
          ${getCategoryIcon(p.category)}
        </div>
        <span class="product-badge badge-${p.badge.toLowerCase().replace(/[^a-z]/g, "-")}">${p.badge}</span>
        ${p.prescription ? '<span class="rx-badge">Rx</span>' : ""}
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
          <span class="product-discount">${Math.round((1 - p.price / p.originalPrice) * 100)}% off</span>
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
  `,
    )
    .join("");
}

function getCategoryIcon(cat) {
  const icons = {
    medicines: "💊",
    supplements: "🧴",
    "personal-care": "🧼",
    baby: "👶",
    devices: "🩺",
    wellness: "🌿",
  };
  return `<div class="cat-icon-big">${icons[cat] || "💊"}</div>`;
}

function getCategoryLabel(cat) {
  const labels = {
    medicines: "Medicines",
    supplements: "Supplements",
    "personal-care": "Personal Care",
    baby: "Baby Products",
    devices: "Medical Devices",
    wellness: "Wellness",
  };
  return labels[cat] || cat;
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = "";
  for (let i = 0; i < full; i++) stars += '<span class="star full">★</span>';
  if (half) stars += '<span class="star half">★</span>';
  for (let i = full + (half ? 1 : 0); i < 5; i++)
    stars += '<span class="star empty">★</span>';
  return stars;
}

// ===== CART FUNCTIONS =====
function addToCart(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;
  const existing = cart.find((item) => item.id === id);
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
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else {
    saveCart();
    updateCartUI();
    renderCartItems();
  }
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
  container.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
      <div class="cart-item-icon">
          <img src="${item.image}" alt="" style="width:40px;height:40px;object-fit:cover;border-radius:6px;" onerror="this.style.display='none'; this.parentElement.innerHTML+=\'${getCategoryIcon(item.category)}\';">
          <div style="display:none">${getCategoryIcon(item.category)}</div>
        </div>
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
  `,
    )
    .join("");
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
  document.querySelectorAll(".cat-btn").forEach((btn) => {
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
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== WISHLIST =====
let wishlist = JSON.parse(localStorage.getItem("medelivery_wishlist")) || [];
function toggleWishlist(id) {
  const btn = document.querySelector(
    `.product-card[data-id="${id}"] .wishlist-btn`,
  );
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter((w) => w !== id);
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
  if (cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }
  const items = cart
    .map((i) => `${i.qty}x ${i.name} (KSh${i.price})`)
    .join("%0A");
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
  document.querySelectorAll(".reveal").forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) el.classList.add("visible");
  });
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  document.querySelectorAll(".stat-num[data-target]").forEach((el) => {
    const target = parseInt(el.dataset.target);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent =
        Math.floor(current).toLocaleString() + (el.dataset.suffix || "");
    }, 16);
  });
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartUI();

  // Apply wishlist state
  wishlist.forEach((id) => {
    const btn = document.querySelector(
      `.product-card[data-id="${id}"] .wishlist-btn`,
    );
    if (btn) btn.textContent = "♥";
  });

  // Search input
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.addEventListener("input", handleSearch);

  // Category buttons
  document.querySelectorAll(".cat-btn").forEach((btn) => {
    btn.addEventListener("click", () => filterCategory(btn.dataset.cat));
  });

  // Cart
  document.getElementById("cart-overlay")?.addEventListener("click", closeCart);

  // Scroll
  window.addEventListener("scroll", () => {
    handleScroll();
    revealOnScroll();
  });
  revealOnScroll();

  // Counter animation on stats section
  const statsSection = document.querySelector(".stats-section");
  if (statsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(statsSection);
  }

  // Prescription form
  document.getElementById("rx-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast(
      "✅ Prescription submitted! Our pharmacist will contact you shortly.",
    );
    closePrescriptionModal();
    e.target.reset();
  });
});
