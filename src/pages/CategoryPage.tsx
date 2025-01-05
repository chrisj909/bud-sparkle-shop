import { useParams } from "react-router-dom";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const CategoryPage = () => {
  const { category } = useParams();
  
  const categoryName = category?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const filteredProducts = PRODUCTS.filter(
    product => product.category.toLowerCase().replace(/\s+/g, '-') === category
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{categoryName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;