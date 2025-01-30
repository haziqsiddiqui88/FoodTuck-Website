
import {  ShoppingBag, User } from "lucide-react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React from "react";
import ShopProduct from "@/components/layout/ShopProduct/ShopProduct";
import Searchbar from "@/components/layout/Searchbar/Searchbar";

export const revalidate = 60; //seconds

const Shop = async () => {
  const query = `*[_type == "food"]{
    _id,
    foodName,
    price,
    originalPrice,
    description,
    tags,
    available,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }`;
  const foods = await client.fetch(query);


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
              <Link href="/shop" className=" text-orange-500">
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
              <Searchbar />
              <Link href="/account">
                <button className="text-white hover:text-orange-500">
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

        {/* Hero Section */}
        <div
          className="relative h-[300px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url('/home-pic-1.png')` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
            <h1 className="mb-4 text-5xl font-bold text-white">Our Shop</h1>
            <div className="flex items-center gap-2 text-lg">
              <Link href="/" className="text-white hover:text-orange-500">
                Home
              </Link>
              <span className="text-white">&gt;</span>
              <span className="text-orange-500">Shop</span>
            </div>
          </div>
        </div>
      </header>
      {/* navbar end */}

      {/*Content Start */}
      <div className="min-h-screen mt-5 mb-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sort and Filter Section */}
          <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
            <div className="flex flex-wrap gap-2 items-center">
            <p className="p-2">Category:</p>
            <select
       
        className=" p-3 text-left relative w-[190px] max-w-xs bg-white border border-gray-600 rounded-md shadow-md focus:ring-2 focus:ring-orange-500"
      >
         <option>Select a Category </option> 
        
      </select>
             
              <p className="p-2">SortBy:</p>
              <select className=" p-3 text-left relative w-[190px] max-w-xs bg-white border border-gray-600 rounded-md shadow-md focus:ring-2 focus:ring-orange-500">
                <option>Default</option>
                <option>Popular</option>
              </select>
            </div>
            <Searchbar />
          </div>
          {/* Foods Products */}
          <div className="mt-[20px] mb-[20px] lg:px-[20px]">
            <ShopProduct foods={foods} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shop;
