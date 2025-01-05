import { Header } from "./Header";
import { ProductCard } from "./ProductCard";
import { PRODUCTS } from "@/data/products";

interface BasePageProps {
  title: string;
  category: string;
  subcategory: string;
}

export const BasePage = ({ title, category, subcategory }: BasePageProps) => {
  const products = PRODUCTS.filter(
    product => 
      product.category === category && 
      product.subcategory === subcategory
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-accent to-white">
      <Header />
      <div className="container mx-auto px-2 md:px-4">
        <h1 className="text-2xl font-bold mb-4 pt-4">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};