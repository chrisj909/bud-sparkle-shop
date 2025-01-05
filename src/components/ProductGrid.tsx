import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { PRODUCTS } from "@/data/products";
import { Leaf, Sun, Moon, GitBranch } from "lucide-react";

const CATEGORIES = ["All", "Sativa", "Indica", "Hybrid"];

export const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter(product => product.category_type.toLowerCase().includes(selectedCategory.toLowerCase()));

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "All":
        return <Leaf className="w-4 h-4" />;
      case "Sativa":
        return <Sun className="w-4 h-4" />;
      case "Indica":
        return <Moon className="w-4 h-4" />;
      case "Hybrid":
        return <GitBranch className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      <div className="flex gap-2 md:gap-4 mb-4 md:mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 md:px-4 py-2 rounded-full transition-colors flex items-center gap-2 whitespace-nowrap text-sm md:text-base ${
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};