import { AgeVerificationModal } from "@/components/AgeVerificationModal";
import { ProductGrid } from "@/components/ProductGrid";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Facebook, Instagram, Discord } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Index = () => {
  const { items, totalItems, totalPrice, removeItem } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <AgeVerificationModal />
      <header className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
            alt="Forest background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative py-4 md:py-8 px-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-left">
              <h1 className="text-xl md:text-3xl font-bold text-white">Hemp House</h1>
              <h2 className="text-sm md:text-lg text-gray-100">Smoke Shop & Vape</h2>
            </div>
            
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex gap-6 text-white mr-6">
                <Link to="/" className="hover:text-gray-200">Home</Link>
                <Link to="/about" className="hover:text-gray-200">About</Link>
                <Link to="/contact" className="hover:text-gray-200">Contact</Link>
              </nav>
              
              <div className="hidden md:block text-right text-white">
                <p className="leading-snug">Top Shelf Products &</p>
                <p className="leading-snug">Unmatched Experience</p>
              </div>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="relative bg-white/10 border-white/20 hover:bg-white/20">
                    <ShoppingCart className="h-5 w-5 text-white" />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
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
      </header>
      <main>
        <ProductGrid />
      </main>
      <footer className="bg-primary text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-medium">Hemp House</p>
              <p className="text-sm opacity-80">120 Doug Baker BLVD, STE 110</p>
              <p className="text-sm opacity-80">Hoover, AL 35242</p>
            </div>
            
            <div className="text-center">
              <p className="text-sm opacity-80">
                <a href="tel:205.326.7888" className="hover:opacity-100">205.326.7888</a>
              </p>
              <p className="text-sm opacity-80">
                <a href="mailto:RedMountainHemp@gmail.com" className="hover:opacity-100">
                  RedMountainHemp@gmail.com
                </a>
              </p>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="opacity-80 hover:opacity-100">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100">
                <Discord className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-sm opacity-80">
            <p>© 2024 Hemp House. Must be 21 or older.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;