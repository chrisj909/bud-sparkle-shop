import { Button } from "@/components/ui/button";
import { ProductType } from "@/types/product";
import { LeafyGreen, Cannabis, Flower, ThumbsUp, Leaf, Flag, Award, Check, ShoppingCart } from "lucide-react";

interface DesktopProductInfoProps {
  product: ProductType;
  onAddToCart: () => void;
}

export const DesktopProductInfo = ({ product, onAddToCart }: DesktopProductInfoProps) => {
  return (
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
        onClick={onAddToCart}
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
  );
};