import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "@/lib/products";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import { ProductType } from "@/types/product";
import { DesktopProductInfo } from "./product-detail/DesktopProductInfo";
import { MobileProductView } from "./product-detail/MobileProductView";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const { addItem } = useCart();

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id as string),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          Loading...
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center text-red-600">
          Error loading product
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image_url,
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              {product.additional_images && product.additional_images.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {product.additional_images.map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <DesktopProductInfo
              product={product as ProductType}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
        <div className="md:hidden">
          <MobileProductView
            product={product as ProductType}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;