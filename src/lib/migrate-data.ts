import { supabase } from "@/integrations/supabase/client";
import { PRODUCTS } from "@/data/products";
import { ProductType } from "@/types/product";

export async function migrateProducts() {
  const products = PRODUCTS.map(product => ({
    ...product,
    sizes: product.category === "Hemp Flower" 
      ? [
          { size: "3.5", unit: "oz", price: product.price },
          { size: "7", unit: "oz", price: product.price * 1.8 },
          { size: "14", unit: "oz", price: product.price * 3.2 }
        ]
      : [{ size: "1", unit: "unit", price: product.price }],
    in_stock: true,
    image_url: product.image_url,
    thc_content: product.thc_content,
    cbd_content: product.cbd_content,
  })) as unknown as ProductType[];

  const { error } = await supabase
    .from('products')
    .insert(products);

  if (error) {
    console.error('Error migrating products:', error);
    throw error;
  }

  console.log('Products migrated successfully');
}