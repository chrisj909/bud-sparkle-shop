export interface ProductType {
  id: string;
  name: string;
  price: number;
  image_url: string;
  category: "Hemp Flower" | "THCA Vapes" | "Gummies" | "Mushrooms";
  thc_content: string;
  cbd_content: string;
  terpenes: string[];
  category_type: string;
  personality: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
}

// Helper type for the frontend components that expect the old property names
export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  thcContent: string;
  cbdContent: string;
  category_type: string;
  terpenes: string[];
  personality: string;
}