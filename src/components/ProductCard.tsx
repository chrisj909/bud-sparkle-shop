import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { ShoppingCart, Pill } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { ProductCardProps, ProductSize } from "@/types/product";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export const ProductCard = ({ 
  id, 
  name, 
  price, 
  image_url, 
  thc_content,
  category,
  sizes = [],
  in_stock = true,
}: ProductCardProps) => {
  const { toast } = useToast();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<ProductSize>(sizes[0] || { size: "1", unit: "unit", price });

  const handleAddToCart = () => {
    addItem({ 
      id, 
      name, 
      price: selectedSize.price, 
      image: image_url,
      size: selectedSize.size,
      unit: selectedSize.unit,
    });
    toast({
      title: "Added to cart",
      description: `${name} (${selectedSize.size}${selectedSize.unit}) has been added to your cart.`,
    });
  };

  if (!in_stock) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-sm opacity-60">
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
              <span className="text-red-700 font-bold">Out of Stock</span>
              <div className="flex items-center gap-1 text-gray-600">
                <Pill className="h-4 w-4" />
                <span>{thc_content}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

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
            <span className="text-green-700 font-bold">${selectedSize.price.toFixed(2)}</span>
            <div className="flex items-center gap-1 text-gray-600">
              <Pill className="h-4 w-4" />
              <span>{thc_content}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4 space-y-2">
        {sizes.length > 1 && (
          <Select
            value={`${selectedSize.size}${selectedSize.unit}`}
            onValueChange={(value) => {
              const size = sizes.find(s => `${s.size}${s.unit}` === value);
              if (size) setSelectedSize(size);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {sizes.map((size) => (
                <SelectItem key={`${size.size}${size.unit}`} value={`${size.size}${size.unit}`}>
                  {size.size}{size.unit} - ${size.price.toFixed(2)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
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