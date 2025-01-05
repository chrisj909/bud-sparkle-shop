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
    <div className="container mx-auto py-8">
      <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors flex items-center gap-2 ${
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};