import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/products";
import { Leaf, Cigarette, Candy, Pill } from "lucide-react";
import { ProductType } from "@/types/product";

export const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Hemp Flower":
        return <Leaf className="w-3 h-3 md:w-4 md:h-4" />;
      case "THCA Vapes":
        return <Cigarette className="w-3 h-3 md:w-4 md:h-4" />;
      case "Gummies":
        return <Candy className="w-3 h-3 md:w-4 md:h-4" />;
      case "Microdose":
        return <Pill className="w-3 h-3 md:w-4 md:h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-2 md:px-4">
      {CATEGORIES.map((category) => (
        <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')}>
          <h2 className="text-2xl font-bold mb-4 pt-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
            {PRODUCTS.filter(product => product.category === category).map((product) => (
              <ProductCard key={product.id} {...(product as ProductType)} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};