import { Button } from "@/components/ui/button";
import { ProductType } from "@/types/product";
import { ShoppingCart, Leaf, Brain, Clock, Beaker, ShieldCheck, Package, Truck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {product.additional_images && product.additional_images.length > 0 && (
        <div className="grid grid-cols-2 gap-2">
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

        <div className="flex flex-wrap gap-2 py-2">
          {product.effects?.map((effect, index) => (
            <div key={index} className="flex items-center gap-1 text-sm text-gray-600">
              <Brain className="h-4 w-4" />
              <span>{effect}</span>
            </div>
          ))}
        </div>

        <Button
          onClick={onAddToCart}
          className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>

        <Tabs defaultValue="description" className="w-full">
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="lab-results">Lab Results</TabsTrigger>
            <TabsTrigger value="additional">Additional Info</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-4">
            <div className="prose max-w-none">
              <p className="text-gray-600">{product.description}</p>
              {product.terpenes && product.terpenes.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Terpenes</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.terpenes.map((terpene, index) => (
                      <div key={index} className="flex items-center gap-1">
                        <Leaf className="h-4 w-4 text-green-600" />
                        <span>{terpene}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="usage" className="mt-4">
            <div className="prose max-w-none">
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-gray-600 mt-1" />
                <p className="text-gray-600">{product.usage_instructions || "Usage instructions not available."}</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="lab-results" className="mt-4">
            <div className="prose max-w-none">
              <div className="flex items-start gap-2">
                <Beaker className="h-5 w-5 text-gray-600 mt-1" />
                <p className="text-gray-600">{product.lab_results || "Lab results not available."}</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="additional" className="mt-4">
            <div className="prose max-w-none">
              <p className="text-gray-600">{product.additional_info || "No additional information available."}</p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-2 gap-4 pt-6 border-t">
          <div className="flex flex-col items-center text-center gap-2 p-3 bg-accent rounded-lg">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium">Quality Assured</span>
            <p className="text-xs text-gray-600">Lab tested for purity</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2 p-3 bg-accent rounded-lg">
            <Package className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium">Premium Sourcing</span>
            <p className="text-xs text-gray-600">Top-tier suppliers</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2 p-3 bg-accent rounded-lg">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium">Natural Products</span>
            <p className="text-xs text-gray-600">Organic cultivation</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2 p-3 bg-accent rounded-lg">
            <Truck className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium">Fast Shipping</span>
            <p className="text-xs text-gray-600">Quick delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};
