'use client'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Link from "next/link";
import {  User } from "lucide-react";
import { HiX } from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import Searchbar from "@/components/layout/Searchbar/Searchbar";

import { PiBowlFood } from "react-icons/pi";
import { useCart } from "../context/CartContext";
import { usePathname } from "next/navigation";
export default function Navbar() {
   const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  // Function to check if link is active
  const getLinkClasses = (path: string) =>
    `hover:text-[#FF9F0D] transition-colors ${
      pathname === path ? "text-[#FF9F0D] font-semibold" : "text-white"
    }`;

  return (
    <div>
      <div className="text-center hidden sm:block overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <Link
            href="/"
            className="flex items-center text-4xl font-serif text-[#FF9F0D]"
          >
            <span className="flex items-center">
              FLAV<span className="text-white">ORA</span>
            </span>
            <PiBowlFood className="ml-2" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 5s linear infinite;
        }
      `}</style>
      <nav className="left-0 right-0 z-50 bg-black/95 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className=" text-2xl sm:hidden  font-bold text-[#FF9F0D]"
            >
              Food<span className="text-white">tuck</span>
            </Link>

            {/* Toggle Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none hover:text-[#ff9f0d]"
              >
                {isOpen ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiOutlineMenu className="h-6 w-6" />
                )}
              </button>
            </div>

           {/* Desktop Navigation with Active Highlight */}
           <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={getLinkClasses("/")}>Home</Link>
            <Link href="/menu" className={getLinkClasses("/menu")}>Menu</Link>
            <Link href="/blog" className={getLinkClasses("/blog")}>Blog</Link>
            <Link href="/faq" className={getLinkClasses("/faq")}>Faq</Link>
            <Link href="/about" className={getLinkClasses("/about")}>About</Link>
            <Link href="/shop" className={getLinkClasses("/shop")}>Shop</Link>
            <Link href="/contact" className={getLinkClasses("/contact")}>Contact</Link>
          </div>

            {/* Search and Cart */}
            <div className="hidden sm:flex items-center space-x-4">
              <Searchbar />

             
               {/* Shopping Cart with Badge */}
               <Link href="/cart" className="relative">
                <HiOutlineShoppingBag className="h-6 w-6 text-white hover:text-orange-500" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link href="/account">
                <button className="text-white hover:text-orange-500 mt-1">
                  <User className="h-6 w-6 " />
                  <span className="sr-only">Account</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-black/90 text-white space-y-4 py-4">
              <Link href="/" className="block px-4 py-2 hover:text-[#FF9F0D]">
                Home
              </Link>
              <Link
                href="/menu"
                className="block px-4 py-2 hover:text-[#FF9F0D]"
              >
                Menu
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-2 hover:text-[#FF9F0D]"
              >
                Blog
              </Link>
              <Link
                href="/pages"
                className="block px-4 py-2 hover:text-[#FF9F0D]"
              >
                Pages
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 hover:text-[#FF9F0D]"
              >
                About
              </Link>
              <Link
                href="/shop"
                className="block px-4 py-2 hover:text-[#FF9F0D]"
              >
                Shop
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 hover:text-[#FF9F0D]"
              >
                Contact
              </Link>

               {/* Cart & Account in Mobile Menu */}
            <div className="flex justify-center space-x-6 mt-4">
              <Link href="/cart" className="relative flex items-center">
                <HiOutlineShoppingBag className="h-6 w-6 text-white hover:text-orange-500" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link href="/account">
                <User className="h-6 w-6 text-white hover:text-orange-500" />
              </Link>
            </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
