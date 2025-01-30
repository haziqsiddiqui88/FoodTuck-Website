'use client'
import React from "react";
import Dessert from "@/components/layout/Dessert/Dessert";
import Drink from "@/components/layout/Drinks/Drinks";
import Experience from "@/components/layout/Experience/Experience";
import MainCourse from "@/components/layout/MainCourse/MainCourse";
import StarterMenu from "@/components/layout/StarterMenu/StarterMenu";
import PartnersAndClients from "@/components/layout/PartnerClient/PartnerClient";
import Link from 'next/link'

import {  User, ShoppingBag,} from 'lucide-react'
import Searchbar from "@/components/layout/Searchbar/Searchbar";


export default function Menu() {
    


  return (
    
    <div className='min-h-screen'>
        {/* navbar */}
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
            <Link href="/menu" className="text-orange-500">
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
            <Link href="/contact" className="text-white hover:text-orange-500">
              Contact
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
          <Searchbar />
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
          <h1 className="mb-4 text-5xl font-bold text-white">Our Menu</h1>
          <div className="flex items-center gap-2 text-lg">
            <Link href="/" className="text-white hover:text-orange-500">
              Home
            </Link>
            <span className="text-white">&gt;</span>
            <span className="text-orange-500">Menu</span>
          </div>
        </div>
      </div>
    </header>
    {/* navbar end */}




  <StarterMenu/>
  <MainCourse/>
  <Experience/>
  <Dessert/>
  <Drink/>	
  <PartnersAndClients/>





    </div>
  )
}

