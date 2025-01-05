import { AgeVerificationModal } from "@/components/AgeVerificationModal";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AgeVerificationModal />
      <header className="bg-primary text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Shop</h1>
          <p className="text-lg md:text-xl opacity-90">Premium Products, Exceptional Service</p>
        </div>
      </header>
      <main>
        <ProductGrid />
      </main>
      <footer className="bg-primary text-white py-8 mt-16">
        <div className="container mx-auto text-center">
          <p>© 2024 Your Shop Name. Must be 21 or older.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;