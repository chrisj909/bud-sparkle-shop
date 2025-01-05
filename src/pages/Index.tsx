import { ShoppingCart, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CATEGORIES } from "@/data/products";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AgeVerificationModal } from "@/components/AgeVerificationModal";
import { ProductGrid } from "@/components/ProductGrid";
import { useCart } from "@/contexts/CartContext";

const Index = () => {
  const { items, totalItems, totalPrice, removeItem } = useCart();

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
      
      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-[#E5D5C0]/95 backdrop-blur-md border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-12">
              <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="flex items-center h-[40px]">
                  <span className="text-[#39FF14] font-bold text-3xl tracking-tight leading-none">H</span>
                  <span className="text-[#39FF14] font-bold text-3xl tracking-tight leading-none">H</span>
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-sm text-gray-800 font-medium leading-tight">Smoke Shop</p>
                  <p className="text-sm text-gray-800 font-medium leading-tight">CBD + Vape</p>
                </div>
              </Link>
            </div>
            
            <div className="flex items-center gap-8">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative text-gray-800 hover:text-gray-600">
                    <ShoppingCart className="h-5 w-5" />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-[#39FF14] text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Your Cart</SheetTitle>
                  </SheetHeader>
                  <div className="mt-8">
                    {items.length === 0 ? (
                      <p className="text-center text-gray-500">Your cart is empty</p>
                    ) : (
                      <div className="space-y-4">
                        {items.map((item) => (
                          <div key={item.id} className="flex gap-4 items-center">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-gray-500">
                                ${item.price} × {item.quantity}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                            >
                              Remove
                            </Button>
                          </div>
                        ))}
                        <div className="pt-4 border-t">
                          <div className="flex justify-between font-medium">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                          </div>
                          <Button className="w-full mt-4">
                            Checkout
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Product Navigation */}
        <div className="border-t border-gray-300 bg-[#E5D5C0]/80">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-center md:justify-start gap-6 py-2 overflow-x-auto scrollbar-hide">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => scrollToSection(category.toLowerCase().replace(' ', '-'))}
                  className="flex items-center gap-1.5 text-xs text-gray-800 hover:text-gray-600 whitespace-nowrap transition-colors"
                >
                  <span className="text-base">{getCategoryIcon(category)}</span>
                  <span>{category}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <ProductGrid />
      </main>

      <footer className="border-t border-gray-300 bg-[#E5D5C0]/95 text-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <span className="text-sm font-medium text-[#39FF14]">Hemp House</span>
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