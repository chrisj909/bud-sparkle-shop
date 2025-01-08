import { ProductType } from "@/types/product";

export const VAPE_PRODUCTS: ProductType[] = [
  {
    id: "11",
    name: "Runtz Vape",
    price: 39.99,
    image_url: "https://images.unsplash.com/photo-1542219550-2da790bf52e9",
    category: "Vapes",
    thc_content: "95% THCA",
    cbd_content: "0%",
    terpenes: ["Myrcene", "Limonene"],
    category_type: "Hybrid",
    personality: "Smooth & Potent",
    description: "Premium THCA vape with authentic Runtz terpene profile.",
    sizes: [{ size: "1", unit: "unit", price: 39.99 }],
    in_stock: true
  },
  {
    id: "12",
    name: "Gelato Vape",
    price: 39.99,
    image_url: "https://images.unsplash.com/photo-1527661591475-5bcf1dae4b08",
    category: "Vapes",
    thc_content: "92% THCA",
    cbd_content: "0%",
    terpenes: ["Caryophyllene", "Linalool"],
    category_type: "Hybrid",
    personality: "Sweet & Smooth",
    description: "Gelato-inspired THCA vape with rich, creamy flavor.",
    sizes: [{ size: "1", unit: "unit", price: 39.99 }],
    in_stock: true
  }
] as const satisfies ProductType[];