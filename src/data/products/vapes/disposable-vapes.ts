import { ProductType } from "@/types/product";

export const DISPOSABLE_VAPES: ProductType[] = [
  {
    id: "v5",
    name: "Sour Diesel Express",
    price: 39.99,
    image_url: "/lovable-uploads/829e07a7-e6b2-4b31-8300-77a12134f72b.png",
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
    image_url: "https://images.unsplash.com/photo-1527661591475-5bcf1dae4b08?w=800&auto=format&fit=crop",
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