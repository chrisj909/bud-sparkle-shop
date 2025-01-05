import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <div className="bg-card hover:bg-card-hover rounded-lg p-4 transition-all duration-300 animate-slideUp">
      <div className="aspect-square overflow-hidden rounded-md mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-gray-500 uppercase">{category}</p>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-primary-light font-bold">${price.toFixed(2)}</p>
        <Button
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-primary-hover transition-colors"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};