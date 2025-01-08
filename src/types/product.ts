export type ProductSize = {
  size: string;
  unit: string;
  price: number;
};

export type ProductCategory = "Hemp Flower" | "Vapes" | "Gummies";

export type ProductType = {
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
  description: string;
  sizes: ProductSize[];
  in_stock: boolean;
  // Add the new properties that match our database schema
  additional_images?: string[];
  effects?: string[];
  usage_instructions?: string | null;
  lab_results?: string | null;
  additional_info?: string | null;
};

export type ProductCardProps = ProductType;