import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { PRODUCTS } from "@/data/products";
import { useParams, useNavigate } from "react-router-dom";
import { Cannabis, Flag, ShoppingCart, LeafyGreen, ThumbsUp, Flower, Check, Award, Leaf, ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();
  
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
    <div className="container mx-auto md:px-8 md:py-8">
      {/* Mobile View */}
      <div className="relative h-screen md:hidden">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="absolute top-4 left-2 z-20 text-white hover:text-white/80"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back
        </Button>

        {/* Full-screen Image */}
        <div className="absolute inset-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          
          <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
            <div className="flex items-center gap-2">
              <Cannabis className="h-5 w-5" />
              <span>{product.thcContent}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-sm opacity-90">
            {product.terpenes.map((terpene) => (
              <span key={terpene} className="bg-white/10 px-2 py-1 rounded-full">
                {terpene}
              </span>
            ))}
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full bg-[#F97316] hover:bg-[#EA580C] transition-all duration-300 
            transform hover:scale-105 text-lg py-6"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg md:rounded-xl shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:grid grid-cols-2 gap-4">
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
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-bold mb-2">
                {product.name}
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-primary-light">
                ${product.price.toFixed(2)}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <LeafyGreen className="h-5 w-5 text-green-500" />
                <p className="text-sm md:text-base">{product.category_type}</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Cannabis className="h-5 w-5 text-green-500" />
                <p className="text-sm md:text-base">{product.thcContent}</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 col-span-2 md:col-span-1">
                <Flower className="h-5 w-5 text-green-500" />
                <div className="flex flex-wrap gap-1 justify-center md:justify-start">
                  {product.terpenes.map((terpene, index) => (
                    <span key={terpene} className="text-sm md:text-base">
                      {terpene}{index < product.terpenes.length - 1 ? "," : ""}&nbsp;
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 col-span-2 md:col-span-1">
                <ThumbsUp className="h-5 w-5 text-green-500" />
                <p className="text-sm md:text-base">{product.personality}</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 md:gap-4 py-4 md:py-6">
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-1 md:mb-2 bg-accent rounded-full flex items-center justify-center">
                  <Leaf className="w-8 h-8 md:w-10 md:h-10 text-primary stroke-[1.5]" />
                </div>
                <p className="text-xs md:text-sm">Organic</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-1 md:mb-2 bg-accent rounded-full flex items-center justify-center">
                  <Flag className="w-8 h-8 md:w-10 md:h-10 text-primary stroke-[1.5]" />
                </div>
                <p className="text-xs md:text-sm">USA</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-1 md:mb-2 bg-accent rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 md:w-10 md:h-10 text-primary stroke-[1.5]" />
                </div>
                <p className="text-xs md:text-sm">Premium</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-1 md:mb-2 bg-accent rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 md:w-10 md:h-10 text-primary stroke-[1.5]" />
                </div>
                <p className="text-xs md:text-sm">Tested</p>
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

        {/* Tabs Section */}
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
    </div>
  );
};

export default ProductDetail;
