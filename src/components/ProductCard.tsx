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
  cbdContent,
  category,
  category_type
}: ProductCardProps) => {
  const { toast } = useToast();
  const { addItem, getItemQuantity } = useCart();
  const quantity = getItemQuantity(id);

  const handleAddToCart = () => {
    addItem({ id, name, price, image });
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  const getContentIcon = () => {
    switch (category) {
      case "Hemp Flower":
        return <Cannabis className="h-3 w-3 md:h-4 md:w-4" />;
      case "Gummies":
      case "Microdose":
        return <Pill className="h-3 w-3 md:h-4 md:w-4" />;
      default:
        return <Cannabis className="h-3 w-3 md:h-4 md:w-4" />;
    }
  };

  return (
    <div className="bg-card hover:bg-card-hover rounded-lg overflow-hidden transition-all duration-300 animate-slideUp">
      <Link to={`/product/${id}`} className="block">
        <div className="aspect-square md:aspect-[4/3] h-[80vh] md:h-auto overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-2 md:p-3 space-y-1 md:space-y-2">
          <h3 className="font-semibold text-base md:text-xl truncate">{name}</h3>
          <div className="flex justify-between items-center">
            <p className="text-primary-light font-bold text-lg">
              ${price.toFixed(2)}
            </p>
            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-600">
              {getContentIcon()}
              <span>{thcContent}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="px-2 md:px-3 pb-2 md:pb-3">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-[#F97316] hover:bg-[#EA580C] transition-all duration-300 
          transform hover:scale-105 flex items-center justify-center gap-2
          py-1 md:py-4 text-sm md:text-base font-semibold
          shadow-lg hover:shadow-xl"
        >
          <ShoppingCart className="h-3 w-3 md:h-4 md:w-4" />
          <span>{quantity > 0 ? `Add Another (${quantity} in cart)` : 'Add to Cart'}</span>
        </Button>
      </div>
    </div>
  );
};