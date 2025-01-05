import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Cannabis, ShoppingCart, Pill } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { ProductCardProps } from "@/types/product";

export const ProductCard = ({ 
  id, 
  name, 
  price, 
  image_url, 
  thc_content,
  category,
}: ProductCardProps) => {
  const { toast } = useToast();
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({ id, name, price, image: image_url });
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
            src={image_url}
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
              <span>{thc_content}</span>
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