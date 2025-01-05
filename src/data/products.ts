export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
  thcContent: string;
  cbdContent: string;
  terpenes: string[];
  category_type: string;
  personality: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  // Hemp Flower Products
  {
    id: "1",
    name: "Gumbo Runtz (8-10-24)",
    price: 44.95,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    category: "Hemp",
    subcategory: "Flower",
    thcContent: "32.5% THCA",
    cbdContent: "0.1%",
    terpenes: ["Myrcene", "Pinene", "Caryophyllene"],
    category_type: "70% Sativa Dominant Hybrid",
    personality: "Energetic & Creative",
    description: "A legendary strain from Hemp House offering an uplifting and creative experience with sweet berry notes and earthy undertones.",
  },
  {
    id: "2",
    name: "Cotton Candy (8-16-24)",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    category: "Hemp",
    subcategory: "Flower",
    thcContent: "28.7% THCA",
    cbdContent: "0.1%",
    terpenes: ["Limonene", "Caryophyllene", "Humulene"],
    category_type: "50/50 Hybrid",
    personality: "Balanced & Focused",
    description: "A perfect balance of sweet and sour notes, this hemp flower provides a balanced effect ideal for any time of day.",
  },
  {
    id: "3",
    name: "Gelato (8-16-24)",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    category: "Hemp",
    subcategory: "Flower",
    thcContent: "35.2% THCA",
    cbdContent: "0.1%",
    terpenes: ["Myrcene", "Pinene", "Terpinolene"],
    category_type: "60% Sativa Dominant",
    personality: "Tropical & Uplifting",
    description: "Tropical fruit notes meet earthy undertones in this uplifting strain that's perfect for daytime use.",
  },
  {
    id: "4",
    name: "Presidential Kush (9-8-24)",
    price: 47.99,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    category: "Hemp",
    subcategory: "Flower",
    thcContent: "37.8% THCA",
    cbdContent: "0.1%",
    terpenes: ["Myrcene", "Caryophyllene", "Linalool"],
    category_type: "80% Indica Dominant",
    personality: "Relaxing & Calming",
    description: "A classic strain known for its relaxing properties, featuring sweet coffee and chocolate notes.",
  },
  {
    id: "5",
    name: "9lb Hammer (9-8-24)",
    price: 41.99,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    category: "Hemp",
    subcategory: "Flower",
    thcContent: "31.9% THCA",
    cbdContent: "0.1%",
    terpenes: ["Terpinolene", "Ocimene", "Caryophyllene"],
    category_type: "65% Sativa Dominant",
    personality: "Energizing & Clear",
    description: "True to its name, this strain provides an uplifting experience with fresh, citrusy notes.",
  },
  {
    id: "6",
    name: "Pineapple Express (9-8-24)",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    category: "Hemp",
    subcategory: "Flower",
    thcContent: "29.4% THCA",
    cbdContent: "0.1%",
    terpenes: ["Farnesene", "Myrcene", "Bisabolol"],
    category_type: "60% Indica Dominant",
    personality: "Soothing & Peaceful",
    description: "A unique blend of sweet and spicy notes, perfect for evening relaxation.",
  },
  {
    id: "7",
    name: "Dante's Inferno (9-25-24)",
    price: 43.99,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    category: "Hemp",
    subcategory: "Flower",
    thcContent: "33.6% THCA",
    cbdContent: "0.1%",
    terpenes: ["Myrcene", "Pinene", "Farnesene"],
    category_type: "50/50 Hybrid",
    personality: "Balanced & Sweet",
    description: "Sweet cherry notes with a wine-like finish, providing a perfectly balanced experience.",
  },
  {
    id: "8",
    name: "LSD (10-4-24)",
    price: 40.99,
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
    category: "Hemp",
    subcategory: "Flower",
    thcContent: "34.8% THCA",
    cbdContent: "0.1%",
    terpenes: ["Myrcene", "Caryophyllene", "Pinene"],
    category_type: "55% Sativa Dominant",
    personality: "Focused & Alert",
    description: "An energizing strain with pine and citrus notes, perfect for maintaining focus.",
  },
  {
    id: "9",
    name: "Gelato 41 (10-4-24)",
    price: 46.99,
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    category: "Hemp",
    subcategory: "Flower",
    thcContent: "36.2% THCA",
    cbdContent: "0.1%",
    terpenes: ["Caryophyllene", "Humulene", "Farnesene"],
    category_type: "60% Sativa Dominant",
    personality: "Creative & Upbeat",
    description: "Sweet and spicy notes combine in this uplifting strain that promotes creativity.",
  },
  {
    id: "10",
    name: "Venom OG (10-4-24)",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    category: "Hemp",
    subcategory: "Flower",
    thcContent: "30.5% THCA",
    cbdContent: "0.1%",
    terpenes: ["Pinene", "Limonene", "Myrcene"],
    category_type: "70% Indica Dominant",
    personality: "Grounding & Peaceful",
    description: "Strong pine notes with citrus undertones, providing a grounding and peaceful experience.",
  },
  
  // THCA Vapes
  {
    id: "11",
    name: "Runtz Vape",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1542219550-2da790bf52e9",
    category: "THCA Vapes",
    subcategory: "Vapes",
    thcContent: "95% THCA",
    cbdContent: "0%",
    terpenes: ["Myrcene", "Limonene"],
    category_type: "Hybrid",
    personality: "Smooth & Potent",
    description: "Premium THCA vape with authentic Runtz terpene profile.",
  },
  {
    id: "12",
    name: "Gelato Vape",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1527661591475-5bcf1dae4b08",
    category: "THCA Vapes",
    subcategory: "Vapes",
    thcContent: "92% THCA",
    cbdContent: "0%",
    terpenes: ["Caryophyllene", "Linalool"],
    category_type: "Hybrid",
    personality: "Sweet & Smooth",
    description: "Gelato-inspired THCA vape with rich, creamy flavor.",
  },

  // Gummies
  {
    id: "21",
    name: "Berry Blast Gummies",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1620980776848-84ac10194945",
    category: "Gummies",
    subcategory: "Edibles",
    thcContent: "500MG",
    cbdContent: "0%",
    terpenes: [],
    category_type: "Edibles",
    personality: "Sweet & Potent",
    description: "Mixed berry flavored gummies with 25mg per piece.",
  },
  {
    id: "22",
    name: "Tropical Paradise Gummies",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1620980776848-84ac10194945",
    category: "Gummies",
    subcategory: "Edibles",
    thcContent: "1000MG",
    cbdContent: "0%",
    terpenes: [],
    category_type: "Edibles",
    personality: "Tropical & Strong",
    description: "Tropical fruit medley gummies with 50mg per piece.",
  },

  // Microdose Mushrooms
  {
    id: "31",
    name: "Golden Teacher Blend",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1516044437274-45baa3386a03",
    category: "Microdose",
    subcategory: "Mushrooms",
    thcContent: "250MG",
    cbdContent: "0%",
    terpenes: [],
    category_type: "Mushrooms",
    personality: "Clarity & Focus",
    description: "Premium microdose capsules for enhanced cognitive function.",
  },
  {
    id: "32",
    name: "B+ Harmony Capsules",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1516044437274-45baa3386a03",
    category: "Microdose",
    subcategory: "Mushrooms",
    thcContent: "500MG",
    cbdContent: "0%",
    terpenes: [],
    category_type: "Mushrooms",
    personality: "Balance & Wellness",
    description: "Balanced microdose formula for overall wellness.",
  }
];

export const CATEGORIES = ["Hemp", "Mushrooms"] as const;
export type ProductCategory = typeof CATEGORIES[number];
