import { AgeVerificationModal } from "@/components/AgeVerificationModal";
import { ProductGrid } from "@/components/ProductGrid";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
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
              <p className="hidden md:block text-right text-white">Top Shelf Products & Unmatched Experience</p>
              
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
        <div className="container mx-auto text-center">
          <p>© 2024 Hemp House. Must be 21 or older.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;