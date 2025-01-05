import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "@/data/products";
import { AgeVerificationModal } from "@/components/AgeVerificationModal";
import { ProductGrid } from "@/components/ProductGrid";
import { Header } from "@/components/Header";

const Index = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Hemp Flower":
        return "🌿";
      case "THCA Vapes":
        return "💨";
      case "Gummies":
        return "🍬";
      case "Microdose":
        return "💊";
      default:
        return "•";
    }
  };

  const scrollToSection = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const headerOffset = 120; // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-accent to-white">
      <AgeVerificationModal />
      <Header />
      
      {/* Product Navigation */}
      <div className="border-t border-gray-300 bg-[#E5D5C0]/80">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center md:justify-start gap-6 py-2 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => scrollToSection(category.toLowerCase().replace(/\s+/g, '-'))}
                className="flex items-center gap-1.5 text-xs text-gray-800 hover:text-gray-600 whitespace-nowrap transition-colors"
              >
                <span className="text-base">{getCategoryIcon(category)}</span>
                <span>{category}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <main className="flex-grow">
        <ProductGrid />
      </main>

      <footer className="border-t border-gray-300 bg-[#E5D5C0]/95 text-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <span className="text-sm font-medium text-gray-800">Hemp House Smoke Shop CBD + Vape</span>
              <a href="tel:205.326.7888" className="text-sm text-gray-800 hover:text-gray-600 transition-colors">205.326.7888</a>
              <span className="text-xs text-gray-500">© 2024 Hemp House. Must be 21 or older.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
