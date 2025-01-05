import { supabase } from "@/integrations/supabase/client";
import { ProductType, ProductCardProps } from "@/types/product";

const mapToProductCard = (product: ProductType): ProductCardProps => ({
  id: product.id,
  name: product.name,
  price: product.price,
  image_url: product.image_url,
  category: product.category,
  thc_content: product.thc_content,
  cbd_content: product.cbd_content,
  category_type: product.category_type,
  terpenes: product.terpenes,
  personality: product.personality,
  description: product.description,
});

export async function fetchProducts(): Promise<ProductCardProps[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    console.error('Error fetching products:', error);
    throw error;
  }

  return data.map(mapToProductCard);
}

export async function fetchProductsByCategory(category: string): Promise<ProductCardProps[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', category);

  if (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }

  return data.map(mapToProductCard);
}

export async function fetchProductById(id: string): Promise<ProductCardProps | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching product by id:', error);
    throw error;
  }

  return data ? mapToProductCard(data) : null;
}