import { supabase } from "@/integrations/supabase/client";
import { PRODUCTS } from "@/data/products";

export async function migrateProducts() {
  for (const product of PRODUCTS) {
    const { error } = await supabase
      .from('products')
      .insert([{
        name: product.name,
        price: product.price,
        image_url: product.image,
        category: product.category,
        thc_content: product.thcContent,
        cbd_content: product.cbdContent,
        terpenes: product.terpenes,
        category_type: product.category_type,
        personality: product.personality,
        description: product.description
      }]);

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