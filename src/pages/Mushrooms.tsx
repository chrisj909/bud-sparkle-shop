import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductType } from "@/types/product";

const Mushrooms = () => {
  const products = PRODUCTS.filter(product => product.category === "Mushrooms").map(product => ({
    ...product,
    image_url: product.image_url,
    thc_content: product.thc_content,
    cbd_content: product.cbd_content
  })) as ProductType[];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-accent to-white">
      <Header />
      <div className="container mx-auto px-2 md:px-4 flex-grow">
        <h1 className="text-2xl font-bold mb-4 pt-4">Mushrooms</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mushrooms;