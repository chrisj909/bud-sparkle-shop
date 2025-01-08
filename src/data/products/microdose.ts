export const MUSHROOM_PRODUCTS = [
  {
    id: "m1",
    name: "Golden Teacher Blend",
    price: 49.99,
    image_url: "https://images.unsplash.com/photo-1516044437274-45baa3386a03",
    category: "Mushrooms",
    thc_content: "250MG",
    cbd_content: "0%",
    terpenes: [],
    category_type: "Mushrooms",
    personality: "Clarity & Focus",
    description: "Premium microdose capsules for enhanced cognitive function.",
    sizes: [{ size: "1", unit: "unit", price: 49.99 }],
    in_stock: true
  },
  {
    id: "m2",
    name: "B+ Harmony Capsules",
    price: 54.99,
    image_url: "https://images.unsplash.com/photo-1516044437274-45baa3386a03",
    category: "Microdose",
    thc_content: "500MG",
    cbd_content: "0%",
    terpenes: [],
    category_type: "Mushrooms",
    personality: "Balance & Wellness",
    description: "Balanced microdose formula for overall wellness.",
  },
  {
    id: "m3",
    name: "Focus Formula Plus",
    price: 52.99,
    image_url: "https://images.unsplash.com/photo-1516044437274-45baa3386a03",
    category: "Microdose",
    thc_content: "300MG",
    cbd_content: "0%",
    terpenes: [],
    category_type: "Mushrooms",
    personality: "Mental Clarity",
    description: "Enhanced focus blend for productivity and mental clarity.",
  },
  {
    id: "m4",
    name: "Creativity Boost",
    price: 48.99,
    image_url: "https://images.unsplash.com/photo-1516044437274-45baa3386a03",
    category: "Microdose",
    thc_content: "200MG",
    cbd_content: "0%",
    terpenes: [],
    category_type: "Mushrooms",
    personality: "Creative Flow",
    description: "Specially formulated blend to enhance creative thinking.",
  },
  {
    id: "m5",
    name: "Calm & Collected",
    price: 51.99,
    image_url: "https://images.unsplash.com/photo-1516044437274-45baa3386a03",
    category: "Microdose",
    thc_content: "400MG",
    cbd_content: "0%",
    terpenes: [],
    category_type: "Mushrooms",
    personality: "Stress Relief",
    description: "Calming blend for stress management and relaxation.",
  },
  {
    id: "m6",
    name: "Energy Elevate",
    price: 53.99,
    image_url: "https://images.unsplash.com/photo-1516044437274-45baa3386a03",
    category: "Microdose",
    thc_content: "350MG",
    cbd_content: "0%",
    terpenes: [],
    category_type: "Mushrooms",
    personality: "Natural Energy",
    description: "Natural energy boost without the jitters.",
  },
  {
    id: "m7",
    name: "Night Rest Formula",
    price: 47.99,
    image_url: "https://images.unsplash.com/photo-1516044437274-45baa3386a03",
    category: "Microdose",
    thc_content: "150MG",
    cbd_content: "0%",
    terpenes: [],
    category_type: "Mushrooms",
    personality: "Sleep Support",
    description: "Gentle blend to support natural sleep patterns.",
  },
  {
    id: "m8",
    name: "Mood Lift Plus",
    price: 50.99,
    image_url: "https://images.unsplash.com/photo-1516044437274-45baa3386a03",
    category: "Microdose",
    thc_content: "250MG",
    cbd_content: "0%",
    terpenes: [],
    category_type: "Mushrooms",
    personality: "Mood Balance",
    description: "Balanced formula for emotional well-being.",
  },
  {
    id: "m9",
    name: "Focus Flow Formula",
    price: 49.99,
    image_url: "https://images.unsplash.com/photo-1516044437274-45baa3386a03",
    category: "Microdose",
    thc_content: "200MG",
    cbd_content: "0%",
    terpenes: [],
    category_type: "Mushrooms",
    personality: "Focus & Clarity",
    description: "Enhanced focus blend for productivity.",
  },
  {
    id: "m10",
    name: "Creative Spark",
    price: 51.99,
    image_url: "https://images.unsplash.com/photo-1516044437274-45baa3386a03",
    category: "Microdose",
    thc_content: "300MG",
    cbd_content: "0%",
    terpenes: [],
    category_type: "Mushrooms",
    personality: "Creative & Inspired",
    description: "Creativity-enhancing microdose blend.",
  },
  {
    id: "m11",
    name: "Zen Master",
    price: 48.99,
    image_url: "https://images.unsplash.com/photo-1516044437274-45baa3386a03",
    category: "Microdose",
    thc_content: "250MG",
    cbd_content: "0%",
    terpenes: [],
    category_type: "Mushrooms",
    personality: "Calm & Centered",
    description: "Balanced blend for inner peace.",
  },
].map(product => ({
  ...product,
  category: "Mushrooms" as const,
  sizes: [{ size: "1", unit: "unit", price: product.price }],
  in_stock: true
}));
