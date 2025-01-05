import { Link } from "react-router-dom";
import { ShoppingCart, Home, User, Mail, Leaf, Flower, Candy, Droplet, Mushroom, GlassWater, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { CATEGORIES } from "@/data/categories";

export const Header = () => {
  const { items, totalItems, totalPrice, removeItem } = useCart();

  const getCategoryIcon = (category: string, size: "sm" | "default" = "default") => {
    const iconSize = size === "sm" ? "w-3 h-3 md:w-4 md:h-4" : "w-4 h-4";
    switch (category) {
      case "Hemp":
        return <Leaf className={iconSize} />;
      case "Flower":
        return <Flower className={iconSize} />;
      case "Edibles":
        return <Candy className={iconSize} />;
      case "Concentrates":
        return <Droplet className={iconSize} />;
      case "Mushrooms":
        return <Mushroom className={iconSize} />;
      case "Drinks":
        return <GlassWater className={iconSize} />;
      case "Snacks":
        return <Cookie className={iconSize} />;
      default:
        return <Leaf className={iconSize} />;
    }
  };

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
            {Object.values(CATEGORIES).map((category) => (
              <div key={category.name} className="group relative">
                <div className="flex items-center gap-1.5 text-xs text-gray-800 hover:text-gray-600 whitespace-nowrap transition-colors cursor-pointer">
                  {getCategoryIcon(category.name)}
                  <span>{category.name}</span>
                </div>
                <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                  <div className="bg-white rounded-lg shadow-lg p-2 min-w-[150px]">
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory.id}
                        to={`/${subcategory.route}`}
                        className="flex items-center gap-1.5 px-3 py-2 text-xs text-gray-800 hover:text-gray-600 hover:bg-gray-50 rounded-md whitespace-nowrap transition-colors"
                      >
                        {getCategoryIcon(subcategory.name, "sm")}
                        <span>{subcategory.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};