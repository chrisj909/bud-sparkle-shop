import { AgeVerificationModal } from "@/components/AgeVerificationModal";
import { ProductGrid } from "@/components/ProductGrid";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Facebook, Instagram, MessageCircle } from "lucide-react";
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
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-12">
              <div>
                <h1 className="text-lg font-medium text-gray-900">Hemp House</h1>
                <p className="text-xs text-gray-500">Smoke Shop & Vape</p>
              </div>
              <nav className="hidden md:flex items-center gap-8">
                <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Home</Link>
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900">About</Link>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link>
              </nav>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="hidden md:block text-right">
                <p className="text-sm text-gray-600">Top Shelf Products &</p>
                <p className="text-sm text-gray-600">Unmatched Experience</p>
              </div>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
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

      <footer className="border-t border-gray-100 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-8">
              <span>Hemp House</span>
              <a href="tel:205.326.7888" className="hover:text-gray-900">205.326.7888</a>
              <a href="mailto:RedMountainHemp@gmail.com" className="hover:text-gray-900">RedMountainHemp@gmail.com</a>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-gray-900">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-gray-900">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-gray-900">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
          <p className="text-xs text-center text-gray-400 mt-6">
            © 2024 Hemp House. Must be 21 or older.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;