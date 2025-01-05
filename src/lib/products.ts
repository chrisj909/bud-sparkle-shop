import { supabase } from "@/integrations/supabase/client";
import { ProductType, ProductCardProps } from "@/types/product";

const mapToProductCard = (product: ProductType): ProductCardProps => ({
  ...product
});

export async function fetchProducts(): Promise<ProductCardProps[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    console.error('Error fetching products:', error);
    throw error;
  }

  return (data as ProductType[]).map(mapToProductCard);
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

  return (data as ProductType[]).map(mapToProductCard);
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

  return data ? mapToProductCard(data as ProductType) : null;
}