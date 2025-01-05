import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductTabsProps {
  name: string;
}

export const ProductTabs = ({ name }: ProductTabsProps) => {
  return (
    <div className="hidden md:block mt-12">
      <Tabs defaultValue="description">
        <TabsList className="w-full grid grid-cols-4 bg-accent">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="lab-results">Lab Results</TabsTrigger>
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="mt-6 p-6 border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">WELCOME TO HEMP HOUSE</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              As part of the Hemp House Exotic Indoor THCA Flower line, {name} is grown with meticulous care to ensure the highest quality. 
              These premium indoor buds are grown according to Living Soil cultivation standards to enhance their potency, flavor, and overall appeal.
            </p>
            <p>
              This cultivation method harnesses the true rhythms of Mother Nature, producing unparalleled flower quality, potency, 
              and an experience that is second to none. Our flower is a true celebration of the natural harmony between plant and soil, 
              benefiting from the careful encouragement of the soil's beneficial bacteria and mycorrhizal fungi.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="lab-results" className="mt-6 p-6 border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Lab Results</h2>
          <p className="text-gray-700">Lab results and certificates of analysis coming soon.</p>
        </TabsContent>
        
        <TabsContent value="faqs" className="mt-6 p-6 border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            <p>Common questions about THCA flower and their answers will be displayed here.</p>
          </div>
        </TabsContent>
        
        <TabsContent value="shipping" className="mt-6 p-6 border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Processing & Shipping Information</h2>
          <div className="space-y-4 text-gray-700">
            <p>Details about processing times and shipping options will be displayed here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};