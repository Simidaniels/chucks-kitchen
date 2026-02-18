/* eslint-disable react-refresh/only-export-components */
// src/context/CartContext.jsx
import { createContext, useState } from "react";

// 1️⃣ Create the context
export const CartContext = createContext();

// 2️⃣ Create the provider component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
