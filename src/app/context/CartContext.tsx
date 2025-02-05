"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string; // Image URL
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void; // Function to clear the cart
  cartTotal: number;
  discount: number;
  setDiscount: (value: number) => void; // Function to set discount
}



const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [discount, setDiscount] = useState<number>(0); // Default discount is 0%

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existingItem = prev.find((product) => product.id === item.id);
      if (existingItem) {
        return prev.map((product) =>
          product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
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

  const clearCart = () => {
    setCart([]); // Empty the cart
  };

  // Calculate cart total before discount
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartTotal = subtotal - (subtotal * discount) / 100; // Apply discount percentage

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, cartTotal, discount, setDiscount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};