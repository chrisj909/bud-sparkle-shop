import { Button } from "@/components/ui/button";
import { ProductType } from "@/types/product";
import { ShoppingCart, Leaf, Brain, Clock, Beaker } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

        <div className="flex gap-4 py-4">
          {product.effects?.map((effect, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
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
      </div>
    </div>
  );
};