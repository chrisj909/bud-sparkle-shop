import { ProductType } from "@/types/product";

export const HEMP_FLOWER_PRODUCTS: ProductType[] = [
  {
    id: "1",
    name: "Gumbo Runtz (8-10-24)",
    price: 44.95,
    image_url: "https://images.unsplash.com/photo-1603909223429-69858cd6ce06?w=800&auto=format&fit=crop",
    category: "Hemp Flower",
    thc_content: "0.3%",
    cbd_content: "18%",
    terpenes: ["Myrcene", "Limonene", "Caryophyllene"],
    category_type: "Hybrid",
    personality: "Creative",
    description: "A legendary strain from Hemp House offering an uplifting and creative experience with sweet and earthy notes.",
    sizes: [
      { size: "3.5", unit: "oz", price: 44.95 },
      { size: "7", unit: "oz", price: 80.91 },
      { size: "14", unit: "oz", price: 143.84 }
    ],
    in_stock: true
  },
  {
    id: "2",
    name: "Blue Dream",
    price: 39.99,
    image_url: "https://images.unsplash.com/photo-1514516872020-1c1e1e1e1e1e?w=800&auto=format&fit=crop",
    category: "Hemp Flower",
    thc_content: "21%",
    cbd_content: "0.1%",
    terpenes: ["Myrcene", "Pinene", "Caryophyllene"],
    category_type: "Sativa",
    personality: "Relaxed",
    description: "A classic strain known for its balanced effects and sweet berry aroma.",
    sizes: [
      { size: "3.5", unit: "oz", price: 39.99 },
      { size: "7", unit: "oz", price: 75.00 },
      { size: "14", unit: "oz", price: 140.00 }
    ],
    in_stock: true
  },
  {
    id: "3",
    name: "OG Kush",
    price: 49.99,
    image_url: "https://images.unsplash.com/photo-1514516872020-1c1e1e1e1e1e?w=800&auto=format&fit=crop",
    category: "Hemp Flower",
    thc_content: "20%",
    cbd_content: "0.2%",
    terpenes: ["Limonene", "Caryophyllene", "Humulene"],
    category_type: "Indica",
    personality: "Euphoric",
    description: "A potent strain with a unique flavor profile and relaxing effects.",
    sizes: [
      { size: "3.5", unit: "oz", price: 49.99 },
      { size: "7", unit: "oz", price: 90.00 },
      { size: "14", unit: "oz", price: 170.00 }
    ],
    in_stock: true
  },
  {
    id: "4",
    name: "Pineapple Express",
    price: 45.00,
    image_url: "https://images.unsplash.com/photo-1514516872020-1c1e1e1e1e1e?w=800&auto=format&fit=crop",
    category: "Hemp Flower",
    thc_content: "19%",
    cbd_content: "0.1%",
    terpenes: ["Myrcene", "Limonene", "Caryophyllene"],
    category_type: "Hybrid",
    personality: "Happy",
    description: "A tropical strain that provides a long-lasting energetic buzz.",
    sizes: [
      { size: "3.5", unit: "oz", price: 45.00 },
      { size: "7", unit: "oz", price: 85.00 },
      { size: "14", unit: "oz", price: 160.00 }
    ],
    in_stock: true
  }
];
