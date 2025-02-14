import { supabase } from "@/integrations/supabase/client";
import { ProductType, ProductCategory } from "@/types/product";

export async function fetchProducts(): Promise<ProductType[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    console.error('Error fetching products:', error);
    throw error;
  }

  return data.map(product => ({
    ...product,
    sizes: product.sizes as ProductType['sizes']
  })) as ProductType[];
}

export async function fetchProductsByCategory(category: ProductCategory): Promise<ProductType[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', category);

  if (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }

  return data.map(product => ({
    ...product,
    sizes: product.sizes as ProductType['sizes']
  })) as ProductType[];
}

export async function fetchProductById(id: string): Promise<ProductType | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    console.error('Error fetching product by id:', error);
    throw error;
  }

  return data ? {
    ...data,
    sizes: data.sizes as ProductType['sizes']
  } as ProductType : null;
}