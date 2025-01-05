import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { PRODUCTS } from "@/data/products";
import { useParams } from "react-router-dom";
import { Cannabis, Star, ShoppingCart, LeafyGreen, ThumbsUp, Flower, Check, Percent, Leaf } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ProductDetail = () => {
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

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden rounded-md">
              <img
                src={product.image}
                alt={`${product.name} thumbnail 1`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-md">
              <img
                src={product.image}
                alt={`${product.name} thumbnail 2`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-primary-light">
              ${product.price.toFixed(2)}
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <LeafyGreen className="h-5 w-5 text-green-500" />
              <p>CATEGORY: {product.category_type}</p>
            </div>
            <div className="flex items-center gap-2">
              <Flower className="h-5 w-5 text-green-500" />
              <p>MAJOR TERPENES: {product.terpenes.join(", ")}</p>
            </div>
            <div className="flex items-center gap-2">
              <Cannabis className="h-5 w-5 text-green-500" />
              <p>THC CONTENT: {product.thcContent}</p>
            </div>
            <div className="flex items-center gap-2">
              <ThumbsUp className="h-5 w-5 text-green-500" />
              <p>PERSONALITY: {product.personality}</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 py-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-accent rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm">Organically Grown</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-accent rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm">Made in USA</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-accent rounded-full flex items-center justify-center">
                <Percent className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm">Premium Quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-accent rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm">Third Party Tested</p>
            </div>
          </div>
          
          <Button
            onClick={handleAddToCart}
            className="w-full bg-[#F97316] hover:bg-[#EA580C] transition-all duration-300 
            transform hover:scale-105 text-lg py-6 flex items-center justify-center gap-2
            md:py-8 md:text-xl
            sm:py-6 sm:text-lg
            shadow-lg hover:shadow-xl"
          >
            <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
            <span className="font-semibold">Add to Cart</span>
          </Button>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-accent">
            <TabsTrigger value="description" className="text-sm md:text-base">
              Description
            </TabsTrigger>
            <TabsTrigger value="lab-results" className="text-sm md:text-base">
              Lab Results Page
            </TabsTrigger>
            <TabsTrigger value="faqs" className="text-sm md:text-base">
              FAQs - THCA Flower
            </TabsTrigger>
            <TabsTrigger value="shipping" className="text-sm md:text-base">
              Processing & Shipping Times
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6 p-6 border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">HAVE YOU MET ZAZA?</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                As part of the ZAZA Exotic Indoor THCA Flower line, {product.name} is grown with meticulous care to ensure the highest quality. 
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
  );
};