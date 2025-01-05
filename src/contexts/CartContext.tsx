import React, { createContext, useContext, useState, useCallback, useMemo, useEffect } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: {
    id: string;
    name: string;
    price: number;
    image: string;
  }) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getItemQuantity: (id: string) => number;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'hemp-house-cart';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [items]);

  const addItem = useCallback((product: {
    id: string;
    name: string;
    price: number;
    image: string;
  }) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const getItemQuantity = useCallback((id: string) => {
    return items.find((item) => item.id === id)?.quantity || 0;
  }, [items]);

  const totalItems = useMemo(() => 
    items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );
  
  const totalPrice = useMemo(() => 
    items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const value = useMemo(() => ({
    items,
    addItem,
    removeItem,
    clearCart,
    getItemQuantity,
    totalItems,
    totalPrice,
  }), [items, addItem, removeItem, clearCart, getItemQuantity, totalItems, totalPrice]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}