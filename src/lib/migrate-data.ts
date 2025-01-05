import { supabase } from "@/integrations/supabase/client";
import { PRODUCTS } from "@/data/products";
import { ProductType } from "@/types/product";

export async function migrateProducts() {
  for (const product of PRODUCTS) {
    const productData = {
      name: product.name,
      price: product.price,
      image_url: product.image_url,
      category: product.category,
      thc_content: product.thc_content,
      cbd_content: product.cbd_content,
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