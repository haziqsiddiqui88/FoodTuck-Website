import PriceFilter from '@/components/PriceFilter/PriceFilter'
import { Search, ShoppingBag, User } from 'lucide-react'
import { IoArrowForwardOutline } from "react-icons/io5";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LatestProduct from '@/components/LatestProduct/LatestProduct';
import ShopTag from '@/components/ShopTag/ShopTag';

export default function Shop() {
  return (
    <div className='min-h-screen'>
        <header className="top-0 left-0 right-0 z-50">
      <nav className="bg-black px-4 md:px-6">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center text-xl font-bold text-white">
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
            <Link href="/contact" className="text-white hover:text-orange-500">
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
            <Link
            href="/account">
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
      <div className="relative h-[300px] w-full bg-cover bg-center" style={{ backgroundImage: `url('/home-pic-1.png')` }}>
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
            <p className="p-2">Sort By:</p>
            <select className="border text-gray-600 p-2 w-[180px] rounded-md">
              <option>Newest</option>
              <option>Oldest</option>
            </select>
            <p className="p-2">Show:</p>
            <select className="border text-gray-600 p-2 w-[180px] rounded-md">
              <option>Default</option>
              <option>Popular</option>
            </select>
          </div>
          <div className="flex items-center w-full md:w-[350px] h-[50px] rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search Your Product"
              className="flex-grow px-4 py-2 border-[1px] bg-transparent focus:outline-none"
            />
             <Link href="/error" >
            <button className="px-4 py-2 bg-[#FF9F0D] h-[43px] hover:text-orange-500 text-white font-medium">
              <Search />
            </button></Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Products Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="p-4 shadow hover:shadow-lg transition rounded-md bg-white"
              >
                <Image
                  src={`/shop${(index % 9) + 1}.png`}
                  alt={`Product ${index + 1}`}
                  width={300}
                  height={200}
                  className="mb-4 rounded-md"
                />
                <h3 className="font-semibold text-lg mb-2">Product {index + 1}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-[#ff9f0d] font-bold">$10.00</p>
                  <p className="text-gray-400 line-through">$15.00</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Filters */}
          <aside className="col-span-1 bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Category</h3>
            <div>
              {["Sandwiches", "Burger", "Chicken Chop", "Drinks", "Pizza", "Non Veg", "Thi", "Uncategorized"].map(
                (category) => (
                  <label className="flex items-center mb-2" key={category}>
                    <input type="checkbox" className="mr-2" />
                    {category}
                  </label>
                )
              )}
            </div>
            <div
              className="mt-7 text-white rounded-lg overflow-hidden"
              style={{ backgroundImage: `url('/black2.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="p-6 grid gap-4">
                <h3 className="font-semibold">Perfect Taste</h3>
                <h1 className="font-semibold text-xl">Classic Restaurant</h1>
                <h1 className="font-semibold text-[#ff9f0d]">$45.00</h1>
              </div>
              <Link
                href="/error"
                className="flex items-center hover:text-gray-300 text-white px-4 py-2"
              >
                <p>Shop Now</p>
                <IoArrowForwardOutline className="text-2xl ml-2" />
              </Link>
            </div>
            <div className="mt-5">
              <PriceFilter />
            </div>
            <div className="mt-4">
              <LatestProduct />
            </div>
            <div className="mt-5">
              <ShopTag />
            </div>
          </aside>
        </div>
      </div>
    </div>


    </div>
  )
}
