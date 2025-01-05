import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

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
          <p className="text-sm text-gray-500 uppercase">{category}</p>
          <h3 className="font-semibold text-xl">{name}</h3>
          <div className="flex justify-between items-center">
            <p className="text-primary-light font-bold text-lg">${price.toFixed(2)}</p>
            <div className="text-sm text-gray-600">
              <p>THC: {thcContent}</p>
              <p>CBD: {cbdContent}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">{category_type}</p>
        </div>
      </Link>
      <Button
        onClick={handleAddToCart}
        className="w-full bg-primary hover:bg-primary-hover transition-colors mt-4"
      >
        Add to Cart
      </Button>
    </div>
  );
};