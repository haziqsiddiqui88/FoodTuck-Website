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

 <div className="min-h-screen ">
      <div className="container mx-auto p-6">
        {/* Sort and Filter Section */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <p className="p-2">Sort By:</p>
            <select className="border text-gray-600 p-2 w-[180px] h-[40px] rounded-md">
              <option>Newest</option>
              <option>Oldest</option>
            </select>
            <p className="p-2">Show:</p>
            <select className="border text-gray-600 p-2 w-[180px] h-[40px] rounded-md">
              <option>Default</option>
              <option>Popular</option>
            </select>
         
          <div className="flex items-center lg:ml-[400px] sm:w-[300px] w-[350px] h-[50px]  rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search Your Product"
              className="flex-grow px-4 py-2 border-[1px] bg-transparent  focus:outline-none"
            />
            <Link href="/error" >
            <button className="px-4 py-2 bg-[#FF9F0D] h-[43px] hover:text-orange-500 text-white font-medium">
              <Search />
            </button>
            </Link>
          </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* Products Grid */}
          <div className="col-span-3 grid grid-cols-3 gap-6">
            {[
              {
                title: "Fresh Lime",
                price: "$4.00",
                oldPrice: "$6.00",
                image: "/shop1.png",
              },
              {
                title: "Chocolate Muffin",
                price: "$3.00",
                image: "/shop2.png",
              },
              {
                title: "Burger",
                price: "$7.00",
                oldPrice: "$9.00",
                image: "/shop3.png",
              },
              { title: "Country Burger", price: "$10.00", image: "/shop4.png" },
              { title: "Drink", price: "$2.50", image: "/shop5.png" },
              { title: "Pizza", price: "$12.00", image: "/shop6.png" },
              { title: "Cheese Butter", price: "$6.00", image: "/shop7.png" },
              { title: "Sandwiches", price: "$5.00", image: "/shop8.png" },
              { title: "Chicken Chop", price: "$8.00", image: "/shop9.png" },
              {
                title: "Fresh Lime",
                price: "$4.00",
                oldPrice: "$6.00",
                image: "/shop1.png",
              },
              {
                title: "Chocolate Muffin",
                price: "$3.00",
                image: "/shop2.png",
              },
              {
                title: "Burger",
                price: "$7.00",
                oldPrice: "$9.00",
                image: "/shop3.png",
              },
              {
                title: "Fresh Lime",
                price: "$4.00",
                oldPrice: "$6.00",
                image: "/shop4.png",
              },
              {
                title: "Chocolate Muffin",
                price: "$3.00",
                image: "/shop5.png",
              },
              {
                title: "Burger",
                price: "$7.00",
                oldPrice: "$9.00",
                image: "/shop6.png",
              },
            ].map((product, index) => (
              <div
                key={index}
                className=" p-4  shadow hover:shadow-lg transition"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={200}
                  className=" mb-4 shadow hover:shadow-lg transition"
                />
                <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-[#ff9f0d] font-bold">{product.price}</p>
                  {product.oldPrice && (
                    <p className="text-gray-400 line-through">
                      {product.oldPrice}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Sidebar Filters */}
          <aside className="col-span-1 bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Category</h3>
            <div>
              {[
                "Sandwiches",
                "Burger",
                "Chicken Chop",
                "Drinks",
                "Pizza",
                "Non Veg",
                "Thi",
                "Uncategorized",
              ].map((category) => (
                <label className="flex items-center mb-2" key={category}>
                  <input type="checkbox" className="mr-2" />
                  {category}
                </label>
              ))}
            </div>
            <div
              className="mt-7  text-white w-[245px] h-[280px]"
              style={{ backgroundImage: `url('/black2.png')` }}
            >
              <div className="p-8 grid grid-rows-3 gap-[5px] ">
              <h3 className=" font-semibold ">Perfect Taste</h3>
              <h1 className="font-semibold text-xl">Classic Restaurant</h1>
              <h1 className="font-semibold text-[#ff9f0d]">45.00$</h1>
              </div>
              <Link
                href="/"
                className="flex hover:text-gray-300   text-white ml-7 mt-16  "
              >
                <p>Shop Now</p><IoArrowForwardOutline  className="text-2xl ml-2" />
                 
              </Link>
            </div>
            <div className="mt-5 -ml-2">
              <PriceFilter />
            </div>
            <div className='-ml-2'>
              <LatestProduct />
            </div>
            <div className='-ml-2 mt-5'>
             <ShopTag />
            </div>


            
          </aside>
        </div>
      </div>
    </div>


    </div>
  )
}
