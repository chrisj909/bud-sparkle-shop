import { ProductCard } from "@/components/ProductCard";
import { MUSHROOM_PRODUCTS } from "@/data/products/mushrooms";

const Mushrooms = () => {
  return (
    <div className="min-h-screen bg-accent/30">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Mushrooms</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MUSHROOM_PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mushrooms;