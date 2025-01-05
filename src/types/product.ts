export type ProductCategory = "Hemp Flower" | "THCA Vapes" | "Gummies" | "Mushrooms";

export interface ProductType {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: ProductCategory;
  thcContent: string;
  cbdContent: string;
  terpenes: string[];
  categoryType: string;
  personality: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type ProductCardProps = ProductType;