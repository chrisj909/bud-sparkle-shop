import { ProductType } from "@/types/product";

export const VAPES_PRODUCTS: ProductType[] = [
  {
    id: "11",
    name: "Runtz Vape",
    price: 39.99,
    image_url: "https://images.unsplash.com/photo-1542219550-2da790bf52e9?w=800&auto=format&fit=crop",
    category: "Vapes",
    thc_content: "92%",
    cbd_content: "0%",
    terpenes: ["Myrcene", "Limonene"],
    category_type: "Hybrid",
    personality: "Energetic",
    description: "Experience the sweet and fruity flavors of Runtz in this high-potency vape.",
    sizes: [
      { size: "1", unit: "gram", price: 39.99 }
    ],
    in_stock: true
  },
  {
    id: "12",
    name: "Blue Dream Vape",
    price: 44.99,
    image_url: "https://images.unsplash.com/photo-1542219550-2da790bf52e9?w=800&auto=format&fit=crop",
    category: "Vapes",
    thc_content: "89%",
    cbd_content: "0%",
    terpenes: ["Pinene", "Myrcene"],
    category_type: "Hybrid",
    personality: "Balanced",
    description: "A balanced hybrid vape with sweet berry aroma and smooth vapor.",
    sizes: [
      { size: "1", unit: "gram", price: 44.99 }
    ],
    in_stock: true
  }
];