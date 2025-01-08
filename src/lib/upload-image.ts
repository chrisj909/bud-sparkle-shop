import { supabase } from "@/integrations/supabase/client";

export async function uploadProductImage(file: File): Promise<string> {
  const { data, error } = await supabase.functions.invoke('upload-product-image', {
    body: { file },
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  if (error) {
    console.error('Error uploading image:', error);
    throw error;
  }

  return data.publicUrl;
}