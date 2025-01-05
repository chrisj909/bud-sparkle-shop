import { AgeVerificationModal } from "@/components/AgeVerificationModal";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AgeVerificationModal />
      <header className="bg-primary text-white py-2 md:py-5 px-4">
        <div className="container mx-auto text-center space-y-1 md:space-y-2">
          <h1 className="text-xl md:text-3xl font-bold">Hemp House</h1>
          <h2 className="text-base md:text-xl">Smoke Shop & Vape</h2>
          <p className="text-xs md:text-base text-gray-200">Top Shelf Products & Unmatched Experience</p>
        </div>
      </header>
      <main>
        <ProductGrid />
      </main>
      <footer className="bg-primary text-white py-8 mt-16">
        <div className="container mx-auto text-center">
          <p>© 2024 Hemp House. Must be 21 or older.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;