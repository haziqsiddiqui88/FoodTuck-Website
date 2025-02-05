"use client";

import React from "react";
import { Search, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from '../context/CartContext'
import { useRouter } from "next/navigation";
import Searchbar from "@/components/layout/Searchbar/Searchbar";

export default function Checkout() {
  const { cart, cartTotal, discount, clearCart } = useCart();
  const router = useRouter();

  const handleOrderPlacement = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Order placed successfully!");
    clearCart(); 
    router.push("/order-success"); 
  };
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
            <div className="flex items-center  gap-4 ">
             <Searchbar />
              <Link href="/account">
                <button className="text-white hover:text-orange-500">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Account</span>
                </button>
              </Link>
              <Link href="/cart">
                <button className="text-orange-500">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </button>
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div
          className="relative h-[300px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url('/home-pic-1.png')` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
            <h1 className="mb-4 text-5xl font-bold text-white">
              Checkout Page
            </h1>
            <div className="flex items-center gap-2 text-lg">
              <Link href="/" className="text-white hover:text-orange-500">
                Home
              </Link>
              <span className="text-white">&gt;</span>
              <span className="text-orange-500">Checkout</span>
            </div>
          </div>
        </div>
      </header>
      {/* navbar end */}

      <div className="flex flex-col md:flex-row gap-8 px-4 py-6">
      {/* Left Side: Shipping and Billing Address */}
      <div className="flex-1 bg-white text-black p-6 mt-12 ">
          <h2 className="text-lg font-bold mb-4">Shipping Address</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full p-2 bg-white border-[1px] "
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full p-2 bg-white border-[1px] "
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-2 bg-white border-[1px] "
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full p-2 bg-white border-[1px] "
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company"
                className="w-full p-2 bg-white border-[1px] "
              />
              <select className="w-full p-2 bg-white border-[1px] ">
                <option value="Select">Select Country</option>
                <option value="pakistan">Pakistan</option>
                <option value="china">China</option>
                <option value="america">America</option>
                <option value="japan>">Japan</option>
                <option value="afghnistan">Afghanistan</option>
                <option value="argentina">Argentina</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="palestine">Palestine</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="w-full p-2 bg-white border-[1px] "
              type="text"
              placeholder="City"
              />
              <input
                type="text"
                placeholder="Zip code"
                className="w-full p-2 bg-white border-[1px] "
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Address 1"
                className="w-full p-2 bg-white border-[1px] "
              />
              <input
                type="text"
                placeholder="Address 2"
                className="w-full p-2 bg-white border-[1px] "
              />
            </div>
            <div>
              <h3 className="-mb-3 font-semibold">Billing Address</h3>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="billing" className=" " />
              <label htmlFor="billing" className="text-sm">
                Same as shipping address
              </label>
            </div>
          </form>

          <div className="grid grid-cols-2  mt-5">
            
            <button className=" w-[390px] h-[40px] border-[1px]  hover:bg-gray-500 text-black py-2 px-4 ">
              Back to cart
            </button>
            <button className="ml-3 w-[390px] bg-[#ff9f0d] hover:bg-orange-600 text-black py-2 px-4">
              Proceed to shipping
            </button>
          </div>
        </div>
        {/* Right Side: Order Summary */}
        <div className="w-full md:w-1/3 bg-white border p-6">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <Image src={item.image} alt={item.name} width={50} height={50} className="w-16 h-16" />
                <div>
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="text-sm">Qty: {item.quantity}</p>
                  <p className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
            <div className="border-t pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${(cartTotal - discount).toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handleOrderPlacement}
              className="w-full bg-[#ff9f0d] hover:bg-orange-600 text-white py-2"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>





      
      </div>
   
  );
}
