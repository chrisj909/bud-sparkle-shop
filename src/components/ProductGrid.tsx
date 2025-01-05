import { useState } from "react";
import { ProductCard } from "./ProductCard";

const SAMPLE_PRODUCTS = [
  {
    id: "1",
    name: "Premium CBD Oil",
    price: 49.99,
    image: "/placeholder.svg",
    category: "CBD",
  },
  {
    id: "2",
    name: "Hemp Rolling Papers",
    price: 4.99,
    image: "/placeholder.svg",
    category: "Accessories",
  },
  {
    id: "3",
    name: "Glass Water Pipe",
    price: 89.99,
    image: "/placeholder.svg",
    category: "Glassware",
  },
  {
    id: "4",
    name: "Herbal Grinder",
    price: 24.99,
    image: "/placeholder.svg",
    category: "Accessories",
  },
];

const CATEGORIES = ["All", "CBD", "Accessories", "Glassware"];

export const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? SAMPLE_PRODUCTS
    : SAMPLE_PRODUCTS.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto py-8">
      <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? "bg-primary text-white"
                : "bg-accent hover:bg-accent-dark"
            }`}
          >
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