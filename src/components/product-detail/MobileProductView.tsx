import { Button } from "@/components/ui/button";
import { ProductType } from "@/types/product";
import { ShoppingCart } from "lucide-react";

interface MobileProductViewProps {
  product: ProductType;
  onAddToCart: () => void;
}

export const MobileProductView = ({
  product,
  onAddToCart,
}: MobileProductViewProps) => {
  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-lg">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-xl font-semibold text-green-700">
          ${product.price.toFixed(2)}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">THC Content:</span>
          <span className="text-sm">{product.thc_content}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">CBD Content:</span>
          <span className="text-sm">{product.cbd_content}</span>
        </div>
        {product.description && (
          <p className="text-sm text-gray-600">{product.description}</p>
        )}
        <Button
          onClick={onAddToCart}
          className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};