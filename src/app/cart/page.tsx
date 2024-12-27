'use client';
import Link from "next/link";
import { Input } from "@/components/ui/input"
import React, { useState } from 'react';
import { Search, ShoppingBag, User } from "lucide-react";

import Image from "next/image"

const initialCartItems = [
  { name: "Burger", price: 10.99, quantity: 2, image: "/cart1.png"   },
  { name: "Fresh Lime", price: 3.49, quantity: 1, image: "/cart2.png" },
  { name: "Pizza", price: 9.99, quantity: 4, image: "/cart3.png" },
  { name: "Chocolate Muffin", price: 4.49, quantity: 1, image: "/cart4.png" },
  { name: "Cheese Butter", price: 11.99, quantity: 3, image: "/cart5.png" },
];

const ShoppingCart: React.FC = () => {
 
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleApplyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(0.1); // 10% discount
    } else {
      setDiscount(0);
    }
  };

  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCharges = 30.0;
  const totalAmount = cartSubtotal - cartSubtotal * discount + shippingCharges;

  return (
    <div className="min-h-screen">
    <header className="top-0 left-0 right-0 z-50">
      <nav className="bg-black px-4 md:px-6">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center text-xl font-bold text-white"
          >
            Food<span className="text-orange-500">tuck</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-white hover:text-orange-500">
              Home
            </Link>
            <Link href="/menu" className="text-white hover:text-orange-500">
              Menu
            </Link>
            <Link href="/blog" className="text-white hover:text-orange-500">
              Blog
            </Link>
            <Link href="/pages" className="text-white hover:text-orange-500">
              Pages
            </Link>
            <Link href="/about" className="text-white hover:text-orange-500">
              About
            </Link>
            <Link href="/shop" className="text-white hover:text-orange-500">
              Shop
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-orange-500"
            >
              Contact
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
          <Link href="/error" >
            <button className="text-white hover:text-orange-500">
              <Search className=" h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            </Link>
            <Link href="/account">
              <button className="text-orange-500">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </button>
            </Link>
            <Link href="/cart">
              <button className="text-white hover:text-orange-500">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
{/*Navbar end*/}


      {/* Hero Section */}
      <div
        className="relative h-[300px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url('/home-pic-1.png')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">Shopping Cart </h1>
          <div className="flex items-center gap-2 text-lg">
            <Link href="/" className="text-white hover:text-orange-500">
              Home
            </Link>
            <span className="text-white">&gt;</span>
            <span className="text-orange-500">Cart</span>
          </div>
        </div>
      </div>
    </header>
    {/* navbar end */}



    <div className="bg-white font-sans">
      <header className="bg-cover bg-center h-48 flex items-center justify-center" style={{ backgroundImage: 'url(/path/to/header-bg.jpg)' }}>
        <h1 className="text-5xl font-bold text-white tracking-wide">Shopping Cart</h1>
      </header>
      <main className="py-12 px-6 md:px-16 lg:px-28">
        <table className="w-full border-collapse">
          <thead>
            <tr className=" text-left">
              <th className="p-4  font-medium text-[22px]">Product</th>
              <th className="p-4 font-medium   text-[22px]">Price</th>
              <th className="p-4 font-medium   text-[22px]">Quantity</th>
              <th className="p-4 font-medium   text-[22px]">Total</th>
              <th className="p-4 font-medium   text-[22px]">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 flex items-center">
                  <Image src={item.image.trim() }  alt={item.name} height={93} width={96} className="  object-cover rounded mr-4" />
                  <span>{item.name}</span>   
                  
                  
                </td>
              
                <td className="p-4">${item.price.toFixed(2)}</td>
                <td className="p-4">
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 0)}
                    className="w-16 border rounded px-2 py-1 text-center"
                    min="0"
                  />
                </td>
                <td className="p-4">${(item.price * item.quantity).toFixed(2)}</td>
                <td className="p-8 text-red-500    text-3xl cursor-pointer" onClick={() => handleRemoveItem(index)}>
                  &times;
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-10">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold mb-2">Coupon Code</h2>
            <div className="flex items-center">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter your code"
                className="flex-grow border rounded-l px-4 py-2"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-[#ff9f0d]  hover:bg-orange-500 text-white px-6 py-2 rounded-r font-semibold"
              >
                Apply
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className=" p-6 border-[1px] ">
              <div className="flex justify-between mb-4  font-semibold text-lg">
                <span>Cart Subtotal</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
             
              <div className="flex justify-between text-gray-500 mb-4">
                <span>Shipping Charges</span>
                <span>${shippingCharges.toFixed(2)}</span>
              </div>
              <div className="w-[330px] mb-3 border-t-[1px]"></div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total Amount</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              </div>
              <Link href="/cart/checkout">
              <button  className="w-full bg-[#ff9f0d] hover:bg-orange-500 text-white mt-4 py-3 font-semibold">
                Proceed to Checkout
              </button>
              </Link>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
};

export default ShoppingCart;