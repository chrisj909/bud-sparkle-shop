import { ProductType } from "@/types/product";

export const CLASSIC_VAPES: ProductType[] = [
  {
    id: "v3",
    name: "Gelato Select Cart",
    price: 42.99,
    image_url: "https://images.unsplash.com/photo-1579129347143-0bba21fc5bfa?w=800&auto=format&fit=crop",
    category: "THCA Vapes",
    thc_content: "94% THC",
    cbd_content: "0%",
    terpenes: ["Limonene", "Caryophyllene", "Humulene"],
    category_type: "Hybrid",
    personality: "Balanced & Smooth",
    description: "Our select cartridge delivers the authentic Gelato experience with sweet, creamy notes and balanced effects.",
    sizes: [
      { size: "1", unit: "gram", price: 42.99 }
    ],
    in_stock: true
  },
  {
    id: "v4",
    name: "Wedding Cake Live Rosin",
    price: 54.99,
    image_url: "https://images.unsplash.com/photo-1565126947283-099c6c800991?w=800&auto=format&fit=crop",
    category: "THCA Vapes",
    thc_content: "87% THC",
    cbd_content: "0%",
    terpenes: ["Caryophyllene", "Limonene", "Myrcene"],
    category_type: "Indica Hybrid",
    personality: "Euphoric & Relaxing",
    description: "Solventless live rosin vape capturing the essence of Wedding Cake with vanilla and pepper notes.",
    sizes: [
      { size: "1", unit: "gram", price: 54.99 }
    ],
    in_stock: true
  }
];