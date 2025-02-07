"use client";

import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";
import TeamMember from "@/components/layout/TeamMember/TeamMember";
import Testimonials from "@/components/layout/Testimonials/Testimonials";
import AboutItem from "@/components/layout/AboutItem/AboutItem";
import Link from "next/link";

import React from "react";

import Navbar from "../navbar/Navbar";

export default function page() {
  const categories = [
    { id: 1, name: "Breakfast", active: true },
    { id: 2, name: "Lunch" },
    { id: 3, name: "Dinner" },
    { id: 4, name: "Dessert" },
    { id: 5, name: "Drink" },
    { id: 6, name: "Snack" },
    { id: 7, name: "Soups" },
  ];

  const aboutItems = [
    {
      title: "Alder Grilled Chinook Salmon",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "32",
    },
    {
      title: "Alder Grilled Chinook Salmon",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "32",
    },
    {
      title: "Alder Grilled Chinook Salmon",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "32",
    },
    {
      title: "Alder Grilled Chinook Salmon",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "32",
    },
    {
      title: "Alder Grilled Chinook Salmon",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "32",
    },

    {
      title: "Alder Grilled Chinook Salmon",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "32",
    },
    {
      title: "Alder Grilled Chinook Salmon",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "32",
    },
    {
      title: "Alder Grilled Chinook Salmon",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "32",
    },
  ];

  const teamMembers = [
    {
      name: "Mark Henry",
      role: "Owner",
      img: "/chef1.png",
    },
    {
      name: "Lucky Helen",
      role: "Chef",
      img: "/chef2.png",
    },
    {
      name: "Moon Henry",
      role: "Founder",
      img: "/chef3.png",
    },
    {
      name: "Tom Monrow",
      role: "Specialist",
      img: "/chef4.png",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* navbar */}
      <header className="top-0 left-0 right-0 z-50">
        <nav className="bg-black px-4 md:px-6">
          <Navbar />
        </nav>

        {/* Hero Section */}
        <div
          className="relative h-[300px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url('/home-pic-1.png')` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
            <h1 className="mb-4 text-5xl font-bold text-white">About Us</h1>
            <div className="flex items-center gap-2 text-lg">
              <Link href="/" className="text-white hover:text-orange-500">
                Home
              </Link>
              <span className="text-white">&gt;</span>
              <span className="text-orange-500">About</span>
            </div>
          </div>
        </div>
      </header>
      {/* navbar end */}

      {/* First Section: Content and Buttons */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Images Group */}
            <div className="w-full lg:w-1/2  flex flex-col md:flex-row gap-4">
              <Image
                className="w-full md:w-1/2 h-[550px] rounded-lg object-cover hover:scale-105 transition-transform duration-300 "
                alt="hero"
                src="/grid4.png"
                width={309}
                height={536}
                priority
              />
              <div className="flex flex-col gap-4">
                <Image
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 "
                  alt="image2"
                  src="/grid6.png"
                  width={309}
                  height={271}
                />
                <Image
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  alt="image3"
                  src="/aboutus3.png"
                  width={309}
                  height={380}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-2">
                <span className="font-playwrite  text-[#ff9f0d] text-3xl font-medium">
                  About us
                </span>
                <div className="w-12 h-[2px] bg-[#FF9F0D]"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Food Is An Important Part Of A Balanced Diet
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-[#FF9F0D] text-white rounded-lg hover:bg-[#ff8c00] transition-colors">
                  Show More
                </button>
                <button className="px-6 py-3 flex items-center gap-2 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                  <IoPlayOutline size={24} />
                  Watch video
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
          </div>
          <div className="relative w-full">
            <Image
              src="/aboutchoose.png"
              alt="Why Choose Us"
              width={1320}
              height={386}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6  text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/Student.png"
                  width={80}
                  height={80}
                  alt="Best Chef"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Best Chef</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6  text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/Coffee.png"
                  width={80}
                  height={80}
                  alt="120 Item Food"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">120 Item Food</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6  text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/Person.png"
                  width={80}
                  height={80}
                  alt="Clean Environment"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Clean Environment</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Member Section */}
      <section className="w-full py-20 bg-[#ffa425]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Team Member</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.img}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="w-full bg-[#fff]"
        style={{ backgroundImage: `url('/menu-bg.png')` }}
      >
        <Testimonials />
      </section>

      {/* Menu Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-black font-bold mb-4">
              Our Food Menu
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Varius sed pharetra dictum neque massa congue
            </p>
            <div className="flex flex-wrap justify-center md:justify-between gap-4 max-w-4xl mx-auto mt-10 mb-8 md:mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`text-lg md:text-xl ${
                    category.active
                      ? "text-[#FF9F0D] "
                      : "text-gray-800 font-normal hover:text-[#FF9F0D]  transition-colors"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="hidden lg:flex border-t-[1px] w-[1200px]"></div>

            <div
              className="lg:-ml-16 grid grid-cols-1  md:grid-cols-2  md:gap-2 mt-7 w-full lg:full"
              style={{ backgroundImage: `url('/bg-3.png')` }}
            >
              {aboutItems.map((item, index) => (
                <AboutItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <button
                className="px-8 py-3 border border-[#FF9F0D] text-[#FF9F0D]   bg-transparent hover:bg-[#FF9F0D]
           hover:text-black transition-colors duration-300"
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
