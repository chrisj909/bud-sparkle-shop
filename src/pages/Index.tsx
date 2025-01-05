import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

const Index = () => {
  const getFeaturedProducts = (category: string, subcategory?: string) => {
    return PRODUCTS.filter(product => 
      product.category === category && 
      (!subcategory || product.subcategory === subcategory)
    ).slice(0, 4);
  };

  const categories = [
    { name: "Hemp", subcategory: "Flower", route: "hemp/flower" },
    { name: "Hemp", subcategory: "Edibles", route: "hemp/edibles" },
    { name: "Hemp", subcategory: "Concentrates", route: "hemp/concentrates" },
    { name: "Mushrooms", subcategory: "Gummies", route: "mushrooms/gummies" },
    { name: "Mushrooms", subcategory: "Drinks", route: "mushrooms/drinks" },
    { name: "Mushrooms", subcategory: "Snacks", route: "mushrooms/snacks" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-accent to-white">
      <Header />
      <div className="container mx-auto px-2 md:px-4 flex-grow">
        {categories.map(({ name, subcategory, route }) => (
          <div key={`${name}-${subcategory}`}>
            <div className="flex justify-between items-center mb-4 pt-4">
              <h2 className="text-2xl font-bold">{`${name} ${subcategory}`}</h2>
              <Link 
                to={`/${route}`}
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
              {getFeaturedProducts(name, subcategory).map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Index;