'use client'
import React from "react";
import Dessert from "@/components/layout/Dessert/Dessert";
import Drink from "@/components/layout/Drinks/Drinks";
import Experience from "@/components/layout/Experience/Experience";
import MainCourse from "@/components/layout/MainCourse/MainCourse";
import StarterMenu from "@/components/layout/StarterMenu/StarterMenu";
import PartnersAndClients from "@/components/layout/PartnerClient/PartnerClient";
import Link from 'next/link'


import Navbar from "../navbar/Navbar";


export default function Menu() {
    


  return (
    
    <div className='min-h-screen'>
        {/* navbar */}
    <header className="top-0 left-0 right-0 z-50">
      <nav className="bg-black px-4 md:px-6">
      <Navbar />
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

