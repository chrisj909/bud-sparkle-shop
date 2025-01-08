import { supabase } from "@/integrations/supabase/client";
import { PRODUCTS } from "@/data/products";
import { ProductType } from "@/types/product";

export async function migrateProducts() {
  const products = PRODUCTS.map(product => ({
    id: product.id,
    name: product.name,
    price: product.price,
    image_url: product.image_url,
    category: product.category,
    thc_content: product.thc_content,
    cbd_content: product.cbd_content,
    terpenes: product.terpenes,
    category_type: product.category_type,
    personality: product.personality,
    description: product.description,
    sizes: product.category === "Hemp Flower" 
      ? [
          { size: "3.5", unit: "oz", price: product.price },
          { size: "7", unit: "oz", price: product.price * 1.8 },
          { size: "14", unit: "oz", price: product.price * 3.2 }
        ]
      : [{ size: "1", unit: "unit", price: product.price }],
    in_stock: true,
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