"use client";

import CartPage from "@/components/layout/CartPage/CartPage";
import { UserProvider } from "../context/UserContext";

const Cart = () => {
  return ( 
    <UserProvider>
    <CartPage />
  </UserProvider>
  )
};

export default Cart;