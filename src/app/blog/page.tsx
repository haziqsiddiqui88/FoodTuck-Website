import React from 'react'
import { Search, ShoppingBag, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { PiCalendarCheckDuotone } from "react-icons/pi";
import { FaRegComments } from "react-icons/fa6";
import { RiAdminLine } from "react-icons/ri";
import BlogItem from '@/components/BlogItem/BlogItem';
import RecentPost from '@/components/RecentPost/RecentPost';
import BlogMenu from '@/components/BlogMenu/BlogMenu';
import BlogTag from '@/components/BlogTag/BlogTag';
import BlogGallery from '@/components/BlogGallery/BlogGallery';
import FollowUs from '@/components/FollowUS/FollowUs';
export default function page() {
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
            <Link href="/menu" className="text-white hover:text-orange-500">
              Menu
            </Link>
            <Link href="/blog" className="text-orange-500">
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
          <h1 className="mb-4 text-5xl font-bold text-white">Blog List</h1>
          <div className="flex items-center gap-2 text-lg">
            <Link href="/" className="text-white hover:text-orange-500">
              Home
            </Link>
            <span className="text-white">&gt;</span>
            <span className="text-orange-500">Blog</span>
          </div>
        </div>
      </div>
        </header>
        {/* navbar end */}


        {/* main content */}
<div className='mt-10 lg:ml-[100px]  flex flex-col lg:flex-row gap-[50px] p-8 '>
   
        {/* Left Side - Multiple Images with Content */}
        <div className=" flex-1 ml-10 mb-4 flex flex-col gap-8 mx-auto  ">
        {[
          {
            src: "/blog-1.png",
            title: "10 Reasons To Do A Digital Detox Challenge",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aspernatur provident inventore dolore dignissimos. Ratione accusantium fugit repellat unde esse totam quam, iste in natus. Velit fugit itaque tenetur minus  Perferendis, natus. Modi nostrum nulla asperiores ipsum aspernatur cum!",
          },
          {
            src: "/blog-2.png",
            title: "Traditional Soft Pretzels with Sweet Beer Cheese",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aspernatur provident inventore dolore dignissimos. Ratione accusantium fugit repellat unde esse totam quam, iste in natus. Velit fugit itaque tenetur minus  Perferendis, natus. Modi nostrum nulla asperiores ipsum aspernatur cum!",
          },
          {
            src: "/blog-3.png", 
            title: "Egg Burger",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aspernatur provident inventore dolore dignissimos. Ratione accusantium fugit repellat unde esse totam quam, iste in natus. Velit fugit itaque tenetur minus  Perferendis, natus. Modi nostrum nulla asperiores ipsum aspernatur cum!"
  
          },
          {
            src: "/blog-4.png", 
            title: "Pizza toast",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aspernatur provident inventore dolore dignissimos. Ratione accusantium fugit repellat unde esse totam quam, iste in natus. Velit fugit itaque tenetur minus  Perferendis, natus. Modi nostrum nulla asperiores ipsum aspernatur cum!",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col gap-4">
            {/* Image */}
            <div className="rounded-lg overflow-hidden">
              <Image
                src={item.src}
                alt={`Image `}
                width={800}
                height={510}
                
              />
            </div>
            {/* Content */}
            <div className="flex flex-col ">
              <div className='flex flex-row ml-3  text-gray-600'><PiCalendarCheckDuotone className='text-[#ff9f0d] text-[20px]'  /><span className='ml-3'> Feb 14, 2022 /</span>
              <FaRegComments  className='ml-3 text-[#ff9f0d] text-[20px]' /><span className='ml-3'>3 / </span>  <RiAdminLine className='ml-3 text-[#ff9f0d] text-[20px] ' /> <span className='ml-3'> Admin</span></div>
              <h1 className="text-xl mt-3 font-bold text-gray-800">{item.title}</h1>
              <p className="text-gray-600 mt-10 line-clamp-4">{item.description}</p>
              <Link href="/error"> 
              <button className="mt-10 px-4 py-2 flex items-center justify-center gap-2 text-[#ff9f0d] border border-[#ff9f0d] rounded hover:bg-[#ff9f0d] hover:text-white transition-colors">
                    Read More
                   
                    </button>
                    </Link>
            </div>
          </div>
        ))}
      </div>

{/* Right Side Content */}

    <div className='sm:items-center flex flex-1 flex-col '>

    <div className="flex items-center w-[400px] h-[50px]  rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Search Your Keword..."
              className="flex-grow px-4 py-2 border-[1px] bg-transparent  focus:outline-none"
            />
             <Link href="/error" >
            <button className="px-4 py-2 bg-[#FF9F0D] h-[43px] hover:text-orange-500 text-white font-medium">
             <Search />
            </button>
            </Link>
          </div>
     <div className='mt-3'>
      <BlogItem />
     </div>
     <div className='mt-7'>
       <RecentPost />
     </div>
     <div className='mt-7'>
       <BlogMenu />
     </div>
     <div className='mt-7'>
       <BlogTag />
     </div>
     <div className='mt-7'>
       <BlogGallery />
     </div>
     <div className='mt-7'>
       <FollowUs />
     </div>

    </div>







      </div>
</div>
  )
}
