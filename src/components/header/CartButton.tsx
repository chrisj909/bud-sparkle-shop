import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";

export const CartButton = () => {
  const { items, totalItems, totalPrice, removeItem } = useCart();

  return (
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
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-8">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center space-y-4 py-8">
              <ShoppingCart className="h-12 w-12 text-gray-400" />
              <p className="text-center text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-start p-4 bg-accent/30 rounded-lg transition-all hover:bg-accent/50"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-base truncate">{item.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-sm font-medium text-primary">
                        ${item.price}
                      </p>
                      <span className="text-sm text-gray-500">×</span>
                      <p className="text-sm text-gray-500">{item.quantity}</p>
                    </div>
                    {item.size && (
                      <p className="text-xs text-gray-500 mt-1">
                        Size: {item.size}
                      </p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item.id, item.size)}
                    className="text-gray-500 hover:text-red-500 hover:bg-red-50"
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-bold text-primary">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <Button className="w-full py-6 text-base font-semibold">
                  Checkout
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};