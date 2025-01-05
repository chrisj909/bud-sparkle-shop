import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { Leaf, Sun, Moon, GitBranch, Cigarette, Candy, Mushroom } from "lucide-react";

export const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0]);

  const filteredProducts = PRODUCTS.filter(
    product => product.category === selectedCategory
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Hemp Flower":
        return <Leaf className="w-3 h-3 md:w-4 md:h-4" />;
      case "THCA Vapes":
        return <Cigarette className="w-3 h-3 md:w-4 md:h-4" />;
      case "Gummies":
        return <Candy className="w-3 h-3 md:w-4 md:h-4" />;
      case "Microdose":
        return <Mushroom className="w-3 h-3 md:w-4 md:h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-2 md:px-4 py-2 md:py-8">
      <div className="flex gap-1 md:gap-4 mb-2 md:mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-2 md:px-4 py-1 md:py-2 rounded-full transition-colors flex items-center gap-1 md:gap-2 whitespace-nowrap text-xs md:text-base ${
              selectedCategory === category
                ? "bg-primary text-white"
                : "bg-accent hover:bg-accent-dark"
            }`}
          >
            {getCategoryIcon(category)}
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};