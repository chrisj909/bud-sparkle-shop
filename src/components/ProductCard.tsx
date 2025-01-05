import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Cannabis, Star, ShoppingCart, Leaf } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  thcContent: string;
  cbdContent: string;
  category_type: string;
}

export const ProductCard = ({ 
  id, 
  name, 
  price, 
  image, 
  category,
  thcContent,
  cbdContent,
  category_type
}: ProductCardProps) => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <div className="bg-card hover:bg-card-hover rounded-lg p-4 transition-all duration-300 animate-slideUp">
      <Link to={`/product/${id}`} className="block">
        <div className="aspect-square overflow-hidden rounded-md mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Cannabis className="h-4 w-4 text-primary" />
            <p className="text-sm text-gray-500 uppercase">{category}</p>
          </div>
          <h3 className="font-semibold text-xl">{name}</h3>
          <div className="flex justify-between items-center">
            <p className="text-primary-light font-bold text-lg flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary-light" />
              ${price.toFixed(2)}
            </p>
            <div className="text-sm text-gray-600">
              <p className="flex items-center gap-1">
                <Cannabis className="h-3 w-3" />
                THC: {thcContent}
              </p>
              <p className="flex items-center gap-1">
                <Cannabis className="h-3 w-3" />
                CBD: {cbdContent}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <Leaf className="h-4 w-4" />
            {category_type}
          </p>
        </div>
      </Link>
      <Button
        onClick={handleAddToCart}
        className="w-full bg-[#F97316] hover:bg-[#EA580C] transition-all duration-300 
        transform hover:scale-105 mt-4 flex items-center justify-center gap-2
        md:py-6 md:text-lg
        sm:py-4 sm:text-base
        shadow-lg hover:shadow-xl"
      >
        <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
        <span className="font-semibold">Add to Cart</span>
      </Button>
    </div>
  );
};
