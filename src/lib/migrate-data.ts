import { supabase } from "@/integrations/supabase/client";
import { PRODUCTS } from "@/data/products";
import { ProductType } from "@/types/product";

export async function migrateProducts() {
  for (const product of PRODUCTS) {
    const productData: Omit<ProductType, 'id' | 'created_at' | 'updated_at'> = {
      name: product.name,
      price: product.price,
      image_url: product.image,
      category: product.category as ProductType['category'],
      thc_content: product.thcContent,
      cbd_content: product.cbdContent,
      terpenes: product.terpenes,
      category_type: product.category_type,
      personality: product.personality,
      description: product.description
    };

    const { error } = await supabase
      .from('products')
      .insert([productData]);

    if (error) {
      console.error('Error migrating product:', product.name, error);
      throw error;
    }
  }
  console.log('Products migration completed successfully');
}

// Run this in the browser console to migrate the data:
// import { migrateProducts } from '@/lib/migrate-data';
// migrateProducts().then(() => console.log('Migration complete'));