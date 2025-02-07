'use client'
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/app/navbar/Navbar'


export default function page() {
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
      <h1 className="mb-4 text-5xl font-bold text-white">Our Chef</h1>
      <div className="flex items-center gap-2 text-lg">
        <Link href="/" className="text-white hover:text-orange-500">
          Home
        </Link>
        <span className="text-white">&gt;</span>
        <span className="text-orange-500">Chef</span>
      </div>
    </div>
  </div>
    </header>
    {/* navbar end */}

    <div className='flex justify-center mt-7 mb-7'>
        <div className='flex justify-center mt-7 mb-7'>
            <Image
            src="/Chef.png"
            alt='shop'
            height={1320}
            width={1386}
            className='cursor-pointer'/>
        </div>
    </div>
    </div>
  )
}
