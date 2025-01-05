import { useToast } from "@/hooks/use-toast";
import { PRODUCTS } from "@/data/products";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileProductView } from "./product-detail/MobileProductView";
import { DesktopProductInfo } from "./product-detail/DesktopProductInfo";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  const product = PRODUCTS.find(p => p.id === id);
  
  if (!product) {
    return <div className="container mx-auto py-8">Product not found</div>;
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  // Transform the product to match the expected format
  const transformedProduct = {
    ...product,
    image: product.image_url,
    thcContent: product.thc_content,
    cbdContent: product.cbd_content
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <MobileProductView product={transformedProduct} onAddToCart={handleAddToCart} />

      <div className="hidden md:block flex-grow container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg md:rounded-xl shadow-lg">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-md">
                <img
                  src={product.image_url}
                  alt={`${product.name} thumbnail 1`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-md">
                <img
                  src={product.image_url}
                  alt={`${product.name} thumbnail 2`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <DesktopProductInfo product={transformedProduct} onAddToCart={handleAddToCart} />
        </div>

        <div className="hidden md:block mt-12">
          <Tabs defaultValue="description">
            <TabsList className="w-full grid grid-cols-4 bg-accent">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="lab-results">Lab Results</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6 p-6 border rounded-lg">
              <h2 className="text-2xl font-bold mb-4">WELCOME TO HEMP HOUSE</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  As part of the Hemp House Exotic Indoor THCA Flower line, {product.name} is grown with meticulous care to ensure the highest quality. 
                  These premium indoor buds are grown according to Living Soil cultivation standards to enhance their potency, flavor, and overall appeal.
                </p>
                <p>
                  This cultivation method harnesses the true rhythms of Mother Nature, producing unparalleled flower quality, potency, 
                  and an experience that is second to none. Our flower is a true celebration of the natural harmony between plant and soil, 
                  benefiting from the careful encouragement of the soil's beneficial bacteria and mycorrhizal fungi.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="lab-results" className="mt-6 p-6 border rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Lab Results</h2>
              <p className="text-gray-700">Lab results and certificates of analysis coming soon.</p>
            </TabsContent>
            
            <TabsContent value="faqs" className="mt-6 p-6 border rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4 text-gray-700">
                <p>Common questions about THCA flower and their answers will be displayed here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-6 p-6 border rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Processing & Shipping Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>Details about processing times and shipping options will be displayed here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;