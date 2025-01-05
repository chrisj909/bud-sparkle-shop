import { Button } from "@/components/ui/button";
import { ProductType } from "@/types/product";
import { ShoppingCart } from "lucide-react";

interface DesktopProductInfoProps {
  product: ProductType;
  onAddToCart: () => void;
}

export const DesktopProductInfo = ({
  product,
  onAddToCart,
}: DesktopProductInfoProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-2xl font-semibold text-green-700 mt-2">
          ${product.price.toFixed(2)}
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div>
            <span className="text-sm font-medium">THC Content:</span>
            <span className="text-sm ml-2">{product.thc_content}</span>
          </div>
          <div>
            <span className="text-sm font-medium">CBD Content:</span>
            <span className="text-sm ml-2">{product.cbd_content}</span>
          </div>
        </div>
        {product.description && (
          <p className="text-gray-600">{product.description}</p>
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