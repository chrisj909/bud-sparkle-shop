import { useToast } from "@/hooks/use-toast";
import { PRODUCTS } from "@/data/products";
import { useParams } from "react-router-dom";
import { ProductHeader } from "./product-detail/ProductHeader";
import { ProductGallery } from "./product-detail/ProductGallery";
import { ProductInfo } from "./product-detail/ProductInfo";
import { ProductTabs } from "./product-detail/ProductTabs";

export const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  const product = PRODUCTS.find(p => p.id === id);
  
  if (!product) {
    return <div className="container mx-auto py-8">Product not found</div>;
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="container mx-auto md:px-8 md:py-8">
      <ProductHeader {...product} handleAddToCart={handleAddToCart} />

      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <ProductGallery image={product.image} name={product.name} />
          <ProductInfo {...product} handleAddToCart={handleAddToCart} />
        </div>

        <ProductTabs name={product.name} />
      </div>
    </div>
  );
};