import { ProductType } from "@/types/product";

export const GUMMY_PRODUCTS: ProductType[] = [
  {
    id: "21",
    name: "Berry Blast Gummies",
    price: 29.99,
    image_url: "https://images.unsplash.com/photo-1620928572438-075c466c48c6?w=800&auto=format&fit=crop",
    category: "Gummies",
    thc_content: "500MG",
    cbd_content: "0%",
    terpenes: [],
    category_type: "Edibles",
    personality: "Sweet & Potent",
    description: "Mixed berry flavored gummies with 25mg per piece.",
    sizes: [{ size: "1", unit: "unit", price: 29.99 }],
    in_stock: true
  },
  {
    id: "22",
    name: "Tropical Paradise Gummies",
    price: 34.99,
    image_url: "https://images.unsplash.com/photo-1619021016992-06cb257b31a6?w=800&auto=format&fit=crop",
    category: "Gummies",
    thc_content: "1000MG",
    cbd_content: "0%",
    terpenes: [],
    category_type: "Edibles",
    personality: "Tropical & Strong",
    description: "Tropical fruit medley gummies with 50mg per piece.",
    sizes: [{ size: "1", unit: "unit", price: 34.99 }],
    in_stock: true
  }
] as const satisfies ProductType[];