"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar1 from "./components/Navbar1";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiWineGlass } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { PiQuotesLight } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { CiPizza } from "react-icons/ci";
import { PiHamburgerLight } from "react-icons/pi";
import Experience from "@/components/layout/Experience/Experience";
import FoodCategory from "@/components/layout/FoodCategory/FoodCategory";
import RestaurantProcess from "@/components/layout/RestaurantProcess/RestaurantProcess";
import BlogPost from "@/components/layout/BlogPost/BlogPost";
import MenuPost from "@/components/layout/MenuPost/MenuPost";

const testimonials = [
  {
    id: 1,
    image: "/testimonial1.png",
    name: "Alamin Hasan",
    role: "Food Specialist",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
  },
  {
    id: 2,
    image: "/testimonial1.png",
    name: "Alamin Hasan",
    role: "Food Specialist",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
  },
  {
    id: 3,
    image: "/testimonial1.png",
    name: "Alamin Hasan",
    role: "Food Specialist",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
  },
  {
    id: 4,
    image: "/testimonial1.png",
    name: "Alamin Hasan",
    role: "Food Specialist",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
  },
];

const chefs = [
  {
    image: "/chef1.png",
    name: "D.Estwood",
    role: "Chief Chef",
  },
  {
    image: "/chef2.png",
    name: "D.Scoriesh",
    role: "Assistant Chef",
  },
  {
    image: "/chef3.png",
    name: "M.William",
    role: "Advertising Chef",
  },
  {
    image: "/chef4.png",
    name: "W.Readfroad",
    role: "Chef",
  },
];

const images = [
  "/grid1.png",
  "/grid2.png",
  "/grid3.png",
  "/grid4.png",
  "/grid5.png",
  "/grid6.png",
];

export default function Home() {
  const router = useRouter();
  return (
    <div className=" bg-black min-h-screen">
      <Navbar1 />

      {/* first layout */}
      <div className="  text-white   relative overflow-hidden">
        <div className="container mx-auto px-4 h-full">
          <div className="grid md:grid-cols-2  gap-8 items-center h-full ">
            {/* Left Content */}

            <div className="hidden  sm:flex absolute top-10 h-[150px]   border-l-[1px] border-white  flex-col  ">
              {/* Add icons or links */}
              <div className="flex flex-col -ml-2 pt-40 space-y-7 ">
                <a href="#">
                  <GrFacebookOption className=" hover:text-[#FF9F0D]" />
                </a>
                <a href="#">
                  <FaTwitter className=" text-[#FF9F0D]" />
                </a>
                <a href="#">
                  <FaInstagram className="hover:text-[#FF9F0D]" />
                </a>
              </div>
              <div className="absolute  top-72 h-[150px] border-l-[1px] border-white"></div>
            </div>

            <div className="space-y-6 mx-auto">
              <h1 className="font-playwrite  text-[#ff9f0d] text-3xl">
                Its Quick & Amusing!
              </h1>
              <h1 className="text-3xl md:text-6xl font-bold leading-tight">
                <span className="text-[#ff9f0d]">Th</span>e Art of speed
                <br />
                food <span>Quality</span>
              </h1>
              <p className="text-gray-400 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                sed pharetra dictum neque massa congue
              </p>
              <Link
                href="/menu"
                className="inline-block bg-[#ff9f0d] text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors"
              >
                See Menu
              </Link>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative  ">
              <div className="relative w-full aspect-square">
                <Image
                  src="/home-pic-.png"
                  alt="Delicious dish with rice and eggs"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second layout */}

      <div className=" bg-black text-white pt-20 relative overflow-hidden">
  <div className="container mx-auto px-4 h-full">
    <div className="grid md:grid-cols-2 gap-8 items-center h-full py-12">
      {/* Left Content */}
      <div className="space-y-6 mx-auto">
        <p className="font-playwrite text-[#ff9f0d] text-3xl">About us</p>
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          <span className="text-[#ff9f0d]">We </span>Create the best
          <br />
          foody <span>product</span>
        </h1>
        <p className="text-gray-400 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
        </p>
        <ul className="space-y-2">
          <li>✔️ Lorem ipsum dolor sit amet, consectetur</li>
          <li>✔️ Lorem ipsum dolor sit amet, consectetur</li>
          <li>✔️ Lorem ipsum dolor sit amet, consectetur</li>
        </ul>
        <Link
          href="/menu"
          className="inline-block bg-[#ff9f0d] text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors"
        >
          Read More
        </Link>
      </div>

      {/* Right Content - Hero Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl">
        {/* Top Image */}
        <div className="relative w-full h-64 lg:col-span-2">
          <Image
            src="/home-second1.png"
            alt="Avocado Toast with Egg"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Bottom Left Image */}
        <div className="relative w-full h-64">
          <Image
            src="/home-second2.png"
            alt="Grilled Sandwich with Salad"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Bottom Right Image */}
        <div className="relative w-full h-64">
          <Image
            src="/home-second3.png"
            alt="Fresh Veggie Sandwich"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>






    </div>
  </div>
</div>



      {/*food-catogories */}

      <FoodCategory />

      {/* why choose us */}

      <div className="pt-20 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-2 h-full">
          <div className="grid md:grid-cols-2 gap-8 items-center h-full py-12">
            <div className="relative">
              {/* Image Section Start */}

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                  <div key={index} className="overflow-hidden rounded-lg">
                    <Image
                      src={src}
                      alt={`Food item ${index + 1}`}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Image Section End */}
            </div>

            <div className="space-y-6 mx-auto">
              <p className="font-playwrite  text-[#ff9f0d] text-3xl">
                Why Choose us
              </p>
              <p className="text-3xl md:text-6xl font-bold  leading-tight">
                <span className="text-[#ff9f0d]">Ex</span>tra ordinary taste and
                Experienced
              </p>
              <p className="text-gray-400 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                sed pharetra dictum neque massa congue
              </p>
              {/* Button Section Start  */}
              <div className=" text-white -ml-9 p-6">
                {/* Icons Section */}
                <div className="flex justify-start items-start -mt-6 gap-x-1">
                  {/*Box  1 Start*/}
                  <div className=" w-[110px] h-[130px] flex justify-center items-center flex-col gap-y-3 ">
                    <div
                      className=" w-[70px] h-[70px] rounded-[6px] bg-[#ff9f0d] justify-center invalid:items-center 
           "
                    >
                      {/*Image*/}
                      <PiHamburgerLight className="text-5xl mt-2 ml-2 text-white pt-2" />
                    </div>

                    <div>
                      <p className="  text-center  ">Fast Food</p>
                    </div>
                  </div>
                  {/*Box 1 End*/}

                  {/*Box  2 Start*/}
                  <div className=" w-[110px] h-[130px] flex justify-center items-center flex-col gap-y-3 ">
                    <div
                      className=" w-[70px] h-[70px] rounded-[6px] bg-[#ff9f0d] justify-center invalid:items-center 
           "
                    >
                      {/*Image*/}
                      <CiPizza className="text-5xl mt-2 ml-2 text-white pt-2" />
                    </div>

                    <div>
                      <p className="  text-center  ">Lunch</p>
                    </div>
                  </div>
                  {/*Box 2 End*/}

                  {/*Box  3 Start*/}
                  <div className=" w-[110px] h-[130px] flex justify-center items-center flex-col gap-y-3 ">
                    <div
                      className=" w-[70px] h-[70px] rounded-[6px] bg-[#ff9f0d] justify-center invalid:items-center 
           "
                    >
                      {/*Image*/}
                      <GiWineGlass className="text-5xl mt-2 ml-2 text-white pt-2" />
                    </div>

                    <div>
                      <p className="  text-center  ">Dinner</p>
                    </div>
                  </div>
                  {/*Box 3 End*/}
                </div>
                {/* Experience Section */}

                <div className="bg-white ml-5 w-[300px] h-[80px]   text-center  py-4 rounded-md">
                  <p className="text-3xl text-[#ff9f0d] ml-0 font-bold">30+</p>
                  <p className=" text-lg text-black ">Years of Experienced</p>
                </div>
              </div>

              {/* Button Section End  */}
            </div>
          </div>
        </div>
      </div>

      {/*  Experience Layout */}
      <Experience />

      {/*  Our Menu */}
      <MenuPost />
      {/*Our Chef Start*/}

      <section className="relative py-24 bg-transparent overflow-hidden">
        {/* Background Image */}
        <div className="absolute left-0 bottom-0 z-0">
          <Image
            src="/teambackground.png"
            alt="Background decoration"
            width={500}
            height={500}
            className="object-contain opacity-10 -rotate-45 scale-150"
          />
        </div>

        <div className="absolute right-0 top-0 z-0">
          <Image
            src="/teambackground.png"
            alt="Background decoration"
            width={500}
            height={500}
            className="object-contain opacity-10 rotate-[135deg] scale-150"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h3 className="font-playwrite  text-[#ff9f0d] text-3xl mb-2">
              Chefs
            </h3>
            <h2 className="text-[#FF9F0D] text-4xl font-bold">
              Me<span className="text-white">et Our Chef</span>
            </h2>
          </div>

          {/* Chefs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {chefs.map((chef, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg"
              >
                {/* Chef Image */}
                <div className="relative h-[400px] w-full">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Chef Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold mb-1">
                    {chef.name}
                  </h3>
                  <p className="text-[#FF9F0D] text-lg">{chef.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button */}
          <div className="flex justify-center">
            <button
              className="px-8 py-3 border border-[#FF9F0D] text-white  rounded-full bg-transparent hover:bg-[#FF9F0D]
           hover:text-white transition-colors duration-300"
              onClick={() => router.push("/about/chef")}
            >
              See More
            </button>
          </div>
        </div>
      </section>

      {/*Our Chef End*/}

      {/*Client*/}
      <div className="">
        <section className=" py-24  relative overflow-hidden">
          <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <h3 className="font-playwrite text-[#ff9f0d] text-3xl text-center mb-5">
              Testimonials
            </h3>
            <h1 className="text-white mb-2 text-4xl font-bold text-center">
              What Our Clients Say
            </h1>

            {/* Testimonial Card */}
            <div className="max-w-3xl mx-auto bg-slate-50 text-center  shadow-lg p-12  ">
              {/* Quote Icon */}
              {/* Quote Icon */}
              <div className="flex justify-center mb-4 ">
                <Image
                  src="/Ellipse6.png"
                  alt="quote"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
              <div className="flex justify-center mb-8">
                <PiQuotesLight className="text-[#FF9F0D] text-5xl" />
              </div>

              {/* Testimonial Content */}
              <div className="mb-5">
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {testimonials[0].text}
                </p>

                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`text-2xl ${
                        index < testimonials[0].rating
                          ? "text-[#FF9F0D]"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Name and Role */}
                <h4 className="text-2xl font-bold mb-2">
                  {testimonials[0].name}
                </h4>
                <p className="text-gray-500">{testimonials[0].role}</p>
              </div>
              {/* Carousel Dots */}
              <div className="flex justify-center gap-2">
                {[...Array(4)].map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === 0 ? "bg-[#FF9F0D]" : "bg-[#FF9F0D]/20"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*Restaurant Process*/}

      <div className="mt-16 mb-16">
        <RestaurantProcess />{" "}
      </div>
      {/*Blogs Post*/}
      <BlogPost />
    </div>
  );
}
