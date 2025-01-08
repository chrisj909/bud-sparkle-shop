import { ProductType } from "@/types/product";

export const GUMMY_PRODUCTS: ProductType[] = [
  {
    id: "21",
    name: "Berry Blast Gummies",
    price: 29.99,
    image_url: "https://wqztshxvsvleflllblrk.supabase.co/storage/v1/object/public/product-images/gummy-berries.png",
    category: "Gummies",
    thc_content: "500MG",
    cbd_content: "0%",
    terpenes: [],
    category_type: "Edibles",
    personality: "Sweet & Potent",
    description: "Mixed berry flavored gummies with 25mg per piece. Each gummy is carefully crafted to provide a consistent and enjoyable experience.",
    sizes: [{ size: "1", unit: "unit", price: 29.99 }],
    in_stock: true
  },
  {
    id: "22",
    name: "Tropical Paradise Gummies",
    price: 34.99,
    image_url: "https://wqztshxvsvleflllblrk.supabase.co/storage/v1/object/public/product-images/gummy-tropical.png",
    category: "Gummies",
    thc_content: "1000MG",
    cbd_content: "0%",
    terpenes: [],
    category_type: "Edibles",
    personality: "Tropical & Strong",
    description: "Tropical fruit medley gummies with 50mg per piece. Experience the taste of paradise with these potent, fruit-flavored edibles.",
    sizes: [{ size: "1", unit: "unit", price: 34.99 }],
    in_stock: true
  }
] as const satisfies ProductType[];