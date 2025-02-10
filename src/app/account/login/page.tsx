import React from 'react'
import Link from "next/link";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Navbar from '@/app/navbar/Navbar';

export default function page() {
  return (
    <div className='min-h-screen'>
<header className="top-0 left-0 right-0 z-50">
  <nav className="bg-black px-4 md:px-6">
   <Navbar />
  </nav>

  {/* Hero Section */}
  <div className="relative h-[300px] w-full bg-cover bg-center" style={{ backgroundImage: `url('/home-pic-1.png')` }}>
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-5xl font-bold text-white">Sign In Page</h1>
      <div className="flex items-center gap-2 text-lg">
        <Link href="/" className="text-white hover:text-orange-500">
          Home
        </Link>
        <span className="text-white">&gt;</span>
        <span className="text-orange-500">Sign In</span>
      </div>
    </div>
  </div>
    </header>
    {/* navbar end */}
    <div className="flex mt-10 mb-10 items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 bg-white  shadow-md">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 text-start">
            Sign In
          </h2>

          {/* Form  */}
          <form className="mt-6 space-y-4">
            {/* Name  Field */}
            <div>
              <div className="relative mt-1">
                <i className="absolute  left-3 top-2 text-gray-400 ">
                  <LuUserRound className="h-[20px] w-[20px]" />
                </i>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full pl-10 py-2 top-3 border   focus:outline-none focus:ring-2 focus:ring-[#ff9f0d]"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <div className="relative mt-1">
                <i className="absolute left-3 top-2 text-gray-400 ">
                  <MdOutlineMail className="h-[25px] w-[20px]" />
                </i>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 py-2 border  focus:outline-none focus:ring-2 focus:ring-[#ff9f0d]"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="relative mt-1">
                <i className="absolute left-3 top-2 text-gray-400 ">
                  <TbLockPassword className="   h-[25px] w-[20px]" />
                </i>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 py-2  border   focus:outline-none focus:ring-2 focus:ring-[#ff9f0d]"
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="inline-flex items-center">
                <input type="checkbox" className=" accent-[#ff9f0d]" />
                <span className="ml-2 text-sm text-gray-600">Remember me?</span>
              </label>
            </div>

            {/* Sign up Button */}
            <button
              type="submit"
              className="w-full py-2 text-white bg-[#ff9f0d]  hover:bg-orange-600"
            >
              Sign In
            </button>
            <div className="flex items-center justify-end">
              <a
                href="#"
                className=" text-sm text-gray-600 hover:text-[#ff9f0d] hover:underline"
              >
                Forget password?
              </a>
            </div>
            
          </form>

          {/* Divider*/}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-sm text-gray-600">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Social sign-Up Options */}
          <div className="space-y-4">
            <button
              type="button"
              className="flex items-start justify-start w-full py-2 border   hover:bg-gray-100"
            >
              <i className=" ">
                <FcGoogle className="text-2xl  ml-4  mr-24 " />
              </i>{" "}
              Sign up with Google
            </button>
            <button
              type="button"
              className="flex items-start justify-start w-full py-2 border  hover:bg-gray-100"
            >
              <i className=" text-black ">
                <FaApple className="text-2xl ml-4  mr-24" />
              </i>{" "}
              Sign up with Apple
            </button>
          </div>
        </div>
      </div>




    </div>
    
  )
}
