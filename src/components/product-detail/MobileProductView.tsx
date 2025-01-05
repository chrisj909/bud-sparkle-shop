import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, Cannabis } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ProductCardProps } from "@/types/product";

interface MobileProductViewProps {
  product: ProductCardProps;
  onAddToCart: () => void;
}

export const MobileProductView = ({ product, onAddToCart }: MobileProductViewProps) => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen md:hidden">
      <Button 
        variant="ghost" 
        className="absolute top-4 left-2 z-20 text-white hover:text-white/80"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-5 w-5 mr-1" />
        Back
      </Button>

      <div className="absolute inset-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

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
          onClick={onAddToCart}
          className="w-full bg-[#F97316] hover:bg-[#EA580C] transition-all duration-300 
          transform hover:scale-105 text-lg py-6"
        >
          <ShoppingCart className="h-5 w-5 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};