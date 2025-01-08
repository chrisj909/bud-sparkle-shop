import { ProductType } from "@/types/product";

export const PREMIUM_VAPES: ProductType[] = [
  {
    id: "v1",
    name: "Blue Dream Elite",
    price: 52.99,
    image_url: "https://images.unsplash.com/photo-1561041695-d2faad35a965?w=800&auto=format&fit=crop",
    category: "THCA Vapes",
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
    image_url: "https://images.unsplash.com/photo-1587407627257-27b7127c868c?w=800&auto=format&fit=crop",
    category: "THCA Vapes",
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