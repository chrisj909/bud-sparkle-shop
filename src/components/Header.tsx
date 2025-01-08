import { Link } from "react-router-dom";
import { ShoppingCart, Home, User, Mail, Cannabis, Cigarette, Candy } from "lucide-react";
import { Mushroom } from "./icons/Mushroom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";

export const Header = () => {
  const { items, totalItems, totalPrice, removeItem } = useCart();

  return (
    <>
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
                  <p className="text-sm text-white font-medium leading-tight">Smoke Shop</p>
                  <p className="text-sm text-white font-medium leading-tight">CBD + Vape</p>
                </div>
              </Link>
              <nav className="hidden md:flex items-center gap-8">
                <Link to="/" className="flex items-center gap-2 text-sm text-gray-800 hover:text-gray-600">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
                <Link to="/about" className="flex items-center gap-2 text-sm text-gray-800 hover:text-gray-600">
                  <User className="w-4 h-4" />
                  <span>About</span>
                </Link>
                <Link to="/contact" className="flex items-center gap-2 text-sm text-gray-800 hover:text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </Link>
              </nav>
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
      </header>
      <div className="border-t border-gray-300 bg-[#E5D5C0]/80">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center md:justify-start gap-6 py-2 overflow-x-auto scrollbar-hide">
            <Link
              to="/hemp-flower"
              className="flex items-center gap-1.5 text-xs text-gray-800 hover:text-gray-600 whitespace-nowrap transition-colors"
            >
              <Cannabis className="w-4 h-4" />
              <span>Hemp Flower</span>
            </Link>
            <Link
              to="/vapes"
              className="flex items-center gap-1.5 text-xs text-gray-800 hover:text-gray-600 whitespace-nowrap transition-colors"
            >
              <Cigarette className="w-4 h-4" />
              <span>Vapes</span>
            </Link>
            <Link
              to="/gummies"
              className="flex items-center gap-1.5 text-xs text-gray-800 hover:text-gray-600 whitespace-nowrap transition-colors"
            >
              <Candy className="w-4 h-4" />
              <span>Gummies</span>
            </Link>
            <Link
              to="/mushrooms"
              className="flex items-center gap-1.5 text-xs text-gray-800 hover:text-gray-600 whitespace-nowrap transition-colors"
            >
              <Mushroom className="w-4 h-4" />
              <span>Mushrooms</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};
