import React from 'react';
import { Search, ShoppingBag, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PiCalendarCheckDuotone } from "react-icons/pi";
import { FaRegComments } from "react-icons/fa6";
import { RiAdminLine } from "react-icons/ri";
import BlogItem from '@/components/layout/BlogItem/BlogItem';
import RecentPost from '@/components/layout/RecentPost/RecentPost';
import BlogMenu from '@/components/layout/BlogMenu/BlogMenu';
import BlogTag from '@/components/layout/BlogTag/BlogTag';
import BlogGallery from '@/components/layout/BlogGallery/BlogGallery';
import FollowUs from '@/components/layout/AboutItem/FollowUS/FollowUs';
import Searchbar from '@/components/layout/Searchbar/Searchbar';

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="top-0 left-0 right-0 z-50">
        <nav className="bg-black px-4 md:px-6">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center text-xl font-bold text-white">
              Food<span className="text-orange-500">tuck</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              <Link href="/" className="text-white hover:text-orange-500">Home</Link>
              <Link href="/menu" className="text-white hover:text-orange-500">Menu</Link>
              <Link href="/blog" className="text-orange-500">Blog</Link>
              <Link href="/pages" className="text-white hover:text-orange-500">Pages</Link>
              <Link href="/about" className="text-white hover:text-orange-500">About</Link>
              <Link href="/shop" className="text-white hover:text-orange-500">Shop</Link>
              <Link href="/contact" className="text-white hover:text-orange-500">Contact</Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <Searchbar />
              <Link href="/account">
                <button className="text-white hover:text-orange-500">
                  <User className="h-5 w-5" />
                </button>
              </Link>
              <Link href="/cart">
                <button className="text-white hover:text-orange-500">
                  <ShoppingBag className="h-5 w-5" />
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
            <h1 className="mb-4 text-4xl sm:text-5xl font-bold text-white">Blog List</h1>
            <div className="flex items-center gap-2 text-lg">
              <Link href="/" className="text-white hover:text-orange-500">Home</Link>
              <span className="text-white">&gt;</span>
              <span className="text-orange-500">Blog</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="lg:ml-[60px] mt-10 p-4 lg:p-8  flex flex-col lg:flex-row gap-[200px]">
        {/* Left Side - Blog Posts */}
        <div className="flex-1 space-y-16">
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
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aspernatur provident inventore dolore dignissimos. Ratione accusantium fugit repellat unde esse totam quam, iste in natus. Velit fugit itaque tenetur minus  Perferendis, natus. Modi nostrum nulla asperiores ipsum aspernatur cum!",
            },
            {
              src: "/blog-4.png",
              title: "Pizza Toast",
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aspernatur provident inventore dolore dignissimos. Ratione accusantium fugit repellat unde esse totam quam, iste in natus. Velit fugit itaque tenetur minus  Perferendis, natus. Modi nostrum nulla asperiores ipsum aspernatur cum!",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col gap-8">
              <div className="rounded-lg overflow-hidden">
                <Image src={item.src} alt={item.title} width={800} height={510} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center text-gray-600 space-x-4">
                  <div className="flex items-center space-x-2">
                    <PiCalendarCheckDuotone className="text-[#ff9f0d] text-lg" />
                    <span>Feb 14, 2022</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaRegComments className="text-[#ff9f0d] text-lg" />
                    <span>3 Comments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RiAdminLine className="text-[#ff9f0d] text-lg" />
                    <span>Admin</span>
                  </div>
                </div>
                <h2 className="mt-3 text-lg sm:text-xl font-bold text-gray-800">{item.title}</h2>
                <p className="text-gray-600 mt-4 line-clamp-4">{item.description}</p>
                <Link href="/error">
                  <button className="mt-4 px-4 py-2 flex items-center justify-center gap-2 text-[#ff9f0d] border border-[#ff9f0d] rounded hover:bg-[#ff9f0d] hover:text-white transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Sidebar */}
        <aside className="flex-1   space-y-3">
          <div className="flex items-center lg:w-[400px] w-full  rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search Your Keyword..."
              className="flex-grow px-4 py-2 border bg-transparent focus:outline-none"
            />
            <Link href="/error">
              <button className="px-4 py-2 bg-[#FF9F0D] text-white hover:text-orange-500 transition">
                <Search />
              </button>
            </Link>
          </div>
          <BlogItem />
          <RecentPost />
          <BlogMenu />
          <BlogTag />
          <BlogGallery />
          <FollowUs />
        </aside>
      </div>
    </div>
  );
}
