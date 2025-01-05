export type ProductCategory = "Hemp Flower" | "THCA Vapes" | "Gummies" | "Microdose";

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
}

export type ProductCardProps = ProductType;