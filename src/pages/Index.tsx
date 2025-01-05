import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import { Link } from "react-router-dom";

const Index = () => {
  const getFeaturedProducts = (category: string) => {
    return PRODUCTS.filter(product => product.category === category).slice(0, 4);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-accent to-white">
      <Header />
      <div className="container mx-auto px-2 md:px-4">
        {["Hemp Flower", "THCA Vapes", "Gummies", "Microdose"].map((category) => (
          <div key={category}>
            <div className="flex justify-between items-center mb-4 pt-4">
              <h2 className="text-2xl font-bold">{category}</h2>
              <Link 
                to={`/${category.toLowerCase().replace(/\s+/g, '-').replace('thca-', '')}`}
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
              {getFeaturedProducts(category).map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;