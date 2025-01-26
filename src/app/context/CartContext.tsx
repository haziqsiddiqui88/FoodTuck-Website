"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string; // Add image URL to the CartItem interface
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize cart state with an empty array (to avoid hydration mismatch)
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from local storage after component mounts (client-side only)
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    const existingItem = cart.find((product) => product.id === item.id);
    if (existingItem) {
      setCart((prev) =>
        prev.map((product) =>
          product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product
        )
      );
    } else {
      setCart((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prev) =>
      prev
        .map((product) =>
          product.id === id ? { ...product, quantity } : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};