
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Link from "next/link"
import { HiX } from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import Searchbar from "@/components/layout/Searchbar/Searchbar";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="text-center hidden sm:block">
        <Link href="/" className="text-4xl font-bold text-[#FF9F0D]">
          Food<span className="text-white">tuck</span>
        </Link>
      </div>
      <nav className="left-0 right-0 z-50 bg-black/95 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className=" text-2xl sm:hidden  font-bold text-[#FF9F0D]">
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#FF9F0D]">
                Home
              </Link>
              <Link href="/menu" className="hover:text-[#FF9F0D] transition-colors">
                Menu
              </Link>
              <Link href="/blog" className="hover:text-[#FF9F0D] transition-colors">
                Blog
              </Link>
              <Link href="/pages" className="hover:text-[#FF9F0D] transition-colors">
                Pages
              </Link>
              <Link href="/about" className="hover:text-[#FF9F0D] transition-colors">
                About
              </Link>
              <Link href="/shop" className="hover:text-[#FF9F0D] transition-colors">
                Shop
              </Link>
              <Link href="/contact" className="hover:text-[#FF9F0D] transition-colors">
                Contact
              </Link>
            </div>

            {/* Search and Cart */}
            <div className="hidden sm:flex items-center space-x-4">
              <Searchbar />
             
              <Link href="/cart" className="relative">
                <HiOutlineShoppingBag className="hover:text-[#FF9F0D] h-[32px] w-[24px]" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-black/90 text-white space-y-4 py-4">
              <Link href="/" className="block px-4 py-2 hover:text-[#FF9F0D]">
                Home
              </Link>
              <Link href="/menu" className="block px-4 py-2 hover:text-[#FF9F0D]">
                Menu
              </Link>
              <Link href="/blog" className="block px-4 py-2 hover:text-[#FF9F0D]">
                Blog
              </Link>
              <Link href="/pages" className="block px-4 py-2 hover:text-[#FF9F0D]">
                Pages
              </Link>
              <Link href="/about" className="block px-4 py-2 hover:text-[#FF9F0D]">
                About
              </Link>
              <Link href="/shop" className="block px-4 py-2 hover:text-[#FF9F0D]">
                Shop
              </Link>
              <Link href="/contact" className="block px-4 py-2 hover:text-[#FF9F0D]">
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
