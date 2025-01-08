import React, { createContext, useContext, useEffect, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  unit?: string;
}

interface AddItemParams {
  id: string;
  name: string;
  price: number;
  image: string;
  size?: string;
  unit?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: AddItemParams) => void;
  removeItem: (id: string, size?: string) => void;
  updateQuantity: (id: string, quantity: number, size?: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const savedItems = localStorage.getItem("cart");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addItem = ({ id, name, price, image, size, unit }: AddItemParams) => {
    setItems((currentItems) => {
      const existingItemIndex = currentItems.findIndex(
        item => item.id === id && item.size === size
      );

      if (existingItemIndex > -1) {
        return currentItems.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }

      return [...currentItems, { id, name, price, image, quantity: 1, size, unit }];
    });
  };

  const removeItem = (id: string, size?: string) => {
    setItems(currentItems => 
      currentItems.filter(item => !(item.id === id && item.size === size))
    );
  };

  const updateQuantity = (id: string, quantity: number, size?: string) => {
    setItems(currentItems =>
      currentItems.map(item => {
        if (item.id === id && item.size === size) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};