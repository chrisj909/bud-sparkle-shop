export interface ProductType {
  id: string;
  name: string;
  price: number;
  image_url: string;
  category: "Hemp Flower" | "THCA Vapes" | "Gummies" | "Microdose";
  thc_content: string;
  cbd_content: string;
  terpenes: string[];
  category_type: string;
  personality: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ProductCardProps extends ProductType {}