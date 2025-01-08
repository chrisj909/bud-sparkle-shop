import { ProductType } from "@/types/product";

export const PREMIUM_VAPES: ProductType[] = [
  {
    id: "v1",
    name: "Blue Dream Elite",
    price: 52.99,
    image_url: "/lovable-uploads/829e07a7-e6b2-4b31-8300-77a12134f72b.png",
    category: "Vapes",
    thc_content: "93% THC",
    cbd_content: "0%",
    terpenes: ["Myrcene", "Pinene", "Limonene"],
    category_type: "Sativa Dominant",
    personality: "Energetic & Creative",
    description: "Experience the sweet berry notes and smooth vapor of our Blue Dream Elite vape. Perfect for daytime use with uplifting effects.",
    sizes: [
      { size: "1", unit: "gram", price: 52.99 }
    ],
    in_stock: true
  },
  {
    id: "v2",
    name: "Purple Punch Live Resin",
    price: 44.99,
    image_url: "/lovable-uploads/9ee2b4c9-5525-45e4-b911-bc6ed2802e94.png",
    category: "Vapes",
    thc_content: "89% THC",
    cbd_content: "0%",
    terpenes: ["Caryophyllene", "Linalool", "Myrcene"],
    category_type: "Indica Dominant",
    personality: "Relaxing & Calming",
    description: "Premium live resin vape capturing the full spectrum of Purple Punch terpenes. Known for its grape candy aroma.",
    sizes: [
      { size: "1", unit: "gram", price: 44.99 }
    ],
    in_stock: true
  }
];