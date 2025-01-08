import { ProductType } from "@/types/product";

export const DISPOSABLE_VAPES: ProductType[] = [
  {
    id: "v5",
    name: "Sour Diesel Express",
    price: 39.99,
    image_url: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&auto=format&fit=crop",
    category: "THCA Vapes",
    thc_content: "91% THC",
    cbd_content: "0%",
    terpenes: ["Myrcene", "Caryophyllene", "Limonene"],
    category_type: "Sativa",
    personality: "Energizing & Focused",
    description: "Classic Sour Diesel strain in a convenient disposable format. Known for its diesel aroma and energizing effects.",
    sizes: [
      { size: "1", unit: "gram", price: 39.99 }
    ],
    in_stock: true
  },
  {
    id: "v6",
    name: "Northern Lights Pod",
    price: 45.99,
    image_url: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&auto=format&fit=crop",
    category: "THCA Vapes",
    thc_content: "90% THC",
    cbd_content: "0%",
    terpenes: ["Myrcene", "Pinene", "Terpinolene"],
    category_type: "Indica",
    personality: "Relaxing & Sleepy",
    description: "Premium pod system featuring the legendary Northern Lights strain. Perfect for evening relaxation.",
    sizes: [
      { size: "1", unit: "gram", price: 45.99 }
    ],
    in_stock: true
  }
];