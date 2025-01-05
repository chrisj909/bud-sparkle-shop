import { AgeVerificationModal } from "@/components/AgeVerificationModal";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AgeVerificationModal />
      <header className="bg-primary text-white py-5 px-4">
        <div className="container mx-auto"></div>
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