"use client";


import CheckOut from "@/components/layout/CheckOut/CheckOut";
import { UserProvider } from "../context/UserContext";

const Checkout = () => {
  return ( 
    <UserProvider>
    <CheckOut />
  </UserProvider>
  )
};

export default Checkout;