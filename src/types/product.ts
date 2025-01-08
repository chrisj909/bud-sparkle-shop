export type ProductSize = {
  size: string;
  unit: string;
  price: number;
};

export type ProductCategory = "Hemp Flower" | "THCA Vapes" | "Gummies" | "Microdose";

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
};

export type ProductCardProps = ProductType;