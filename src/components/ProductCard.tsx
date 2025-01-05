import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Cannabis, ShoppingCart, Pill } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

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
  category,
}: ProductCardProps) => {
  const { toast } = useToast();
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({ id, name, price, image });
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <div className="flex justify-between items-center mb-2">
            <span className="text-green-700 font-bold">${price.toFixed(2)}</span>
            <div className="flex items-center gap-1 text-gray-600">
              <Pill className="h-4 w-4" />
              <span>{thcContent}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-medium"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};