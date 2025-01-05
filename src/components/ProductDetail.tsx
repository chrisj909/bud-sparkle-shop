import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { PRODUCTS } from "@/data/products";
import { useParams } from "react-router-dom";
import { Cannabis, Star, ShoppingCart, LeafyGreen, ThumbsUp, Flower } from "lucide-react";

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
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
              <Cannabis className="h-8 w-8 text-primary" />
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-primary-light flex items-center gap-2">
              <Star className="h-6 w-6 fill-primary-light" />
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
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Flower className="h-5 w-5 text-primary" />
              WHAT'S IN A STRAIN?
            </h2>
            <p className="text-gray-700">{product.description}</p>
          </div>
          
          <div className="grid grid-cols-4 gap-4 py-6">
            <div className="text-center">
              <img src="/placeholder.svg" alt="Organically Grown" className="w-16 h-16 mx-auto mb-2" />
              <p className="text-sm">Organically Grown</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg" alt="Made in USA" className="w-16 h-16 mx-auto mb-2" />
              <p className="text-sm">Made in USA</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg" alt="Premium Quality" className="w-16 h-16 mx-auto mb-2" />
              <p className="text-sm">Premium Quality</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg" alt="Third Party Tested" className="w-16 h-16 mx-auto mb-2" />
              <p className="text-sm">Third Party Tested</p>
            </div>
          </div>
          
          <Button
            onClick={handleAddToCart}
            className="w-full bg-primary hover:bg-primary-hover text-lg py-6 flex items-center justify-center gap-2"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};