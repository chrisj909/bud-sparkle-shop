export type ProductCategory = "Hemp Flower" | "THCA Vapes" | "Gummies" | "Microdose";

export interface ProductSize {
  size: string;
  unit: string;
  price: number;
}

export interface ProductType {
  id: string;
  name: string;
  price: number;
  image_url: string;
  category: ProductCategory;
  thc_content: string;
  cbd_content: string;
  terpenes: string[];
  category_type: string;
  personality: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
  sizes: ProductSize[];
  in_stock?: boolean;
}

export type ProductCardProps = ProductType;