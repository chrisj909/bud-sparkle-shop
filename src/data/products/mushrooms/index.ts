import { ProductType } from "@/types/product";

export const MUSHROOM_PRODUCTS: ProductType[] = [
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
    category: "Mushrooms",
    thc_content: "500MG",
    cbd_content: "0%",
    terpenes: [],
    category_type: "Mushrooms",
    personality: "Balance & Wellness",
    description: "Balanced microdose formula for overall wellness.",
    sizes: [{ size: "1", unit: "unit", price: 54.99 }],
    in_stock: true
  }
] as const satisfies ProductType[];