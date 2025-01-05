import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Cannabis, Star, ShoppingCart } from "lucide-react";

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
    <div className="bg-card hover:bg-card-hover rounded-lg overflow-hidden transition-all duration-300 animate-slideUp">
      <Link to={`/product/${id}`} className="block">
        <div className="aspect-square md:aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-3 space-y-2">
          <h3 className="font-semibold text-lg md:text-xl truncate">{name}</h3>
          <div className="flex justify-between items-center">
            <p className="text-primary-light font-bold text-lg flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary-light" />
              ${price.toFixed(2)}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Cannabis className="h-4 w-4" />
              <span>{thcContent}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="px-3 pb-3">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-[#F97316] hover:bg-[#EA580C] transition-all duration-300 
          transform hover:scale-105 flex items-center justify-center gap-2
          py-2 md:py-4 text-sm md:text-base font-semibold
          shadow-lg hover:shadow-xl"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </Button>
      </div>
    </div>
  );
};