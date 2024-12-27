import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { CiStopwatch } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="bg-black font-sans text-white relative">
      <div className="container px-4 py-12 mx-auto">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-[#FF9F0D]">St</span>ill You Need Our
              Support?
            </h2>
            <p className="text-gray-400">
              Don&apos;t wait make a smart & logical quote here. Its pretty
              easy.
            </p>
          </div>
          <div className="flex items-center w-[450px] h-[50px] bg-[#FF9F0D] rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-grow px-4 py-2 text-white bg-transparent placeholder-white focus:outline-none"
            />
            <button className="px-6 py-2 bg-white h-[50px] hover:text-orange-500 text-[#FF9F0D] font-medium">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-[#FF9F0D] pt-12">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us.</h3>
            <p className="text-white text-[14px] mb-4">
              Corporate clients and leisure travelers hasbeen relying on
              Groundlink for dependablesafe, and professional chauffeured
              carservice in major cities across World.
            </p>
            {/* Timing */}
            <div className="flex items-start gap-3">
              <div className="bg-[#FF9F0D] flex justify-center items-center rounded-md mt-1 w-[60px] h-[55px]">
                <CiStopwatch className="text-white" size={35} />
              </div>
              <div>
                <h4 className="text-[18px]">Opening Hours</h4>
                <p className="text-white text-[12px]">
                  Mon - Sat (8:00 - 6:00)
                </p>
                <p className="text-white text-[12px]">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold  mb-4">Useful Links</h3>
            <ul className="space-y-3 text-white">
              <li className="hover:text-[#ff9f0d]">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-[#ff9f0d]">
                <Link href="/news">News</Link>
              </li>
              <li className="hover:text-[#ff9f0d]">
                <Link href="/partners">Partners</Link>
              </li>
              <li className="hover:text-[#ff9f0d]">
                <Link href="/team">Team</Link>
              </li>
              <li className="hover:text-[#ff9f0d]">
                <Link href="/menu">Menu</Link>
              </li>
              <li className="hover:text-[#ff9f0d]">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Help?</h3>
            <ul className="space-y-3 text-white ">
              <li className="hover:text-[#ff9f0d]">
                <Link href="/faq">FAQ</Link>
              </li>
              <li className="hover:text-[#ff9f0d]">
                <Link href="/term">Term & Condition</Link>
              </li>
              <li className="hover:text-[#ff9f0d]">
                <Link href="/reporting">Reporting</Link>
              </li>
              <li className="hover:text-[#ff9f0d]">
                <Link href="/documentation">Documentation</Link>
              </li>
              <li className="hover:text-[#ff9f0d]">
                <Link href="/support">Support Policy</Link>
              </li>
              <li className="hover:text-[#ff9f0d]">
                <Link href="/privacy">Privacy</Link>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Post</h3>
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  Image: "/thumbnail1.png",
                  title: "Keep Your Business",
                },
                {
                  id: 2,
                  Image: "/thumbnail2.png",
                  title: "Keep Your Business",
                },
                {
                  id: 3,
                  Image: "/thumbnail3.png",
                  title: "Keep Your Business",
                },
              ].map((items) => (
                <div key={items.id} className="flex gap-3">
                  <Image
                    src={items.Image}
                    alt="Blog post thumbnail"
                    width={40}
                    height={20}
                    className="rounded"
                  />
                  <div>
                    <Link
                      href="#"
                      className="hover:text-[#FF9F0D] transition-colors"
                    >
                      {items.title}
                    </Link>
                    <p className="text-sm text-gray-500">February 28,2022</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex flex-col w-full bg-[#4F4F4F] mt-10">
      {/* Footer Container */}
      <div className="flex flex-col md:flex-row md:justify-between items-center h-auto p-5 md:p-8">
        {/* Copyright Section */}
        <p className="text-white font-normal text-center md:text-left md:ml-0">
          Copyright 2022 by Ayeman. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 mr-20 md:mt-0">
          {[
            { name: "Facebook", icon: Facebook },
            { name: "Twitter", icon: Twitter },
            { name: "Instagram", icon: Instagram },
            { name: "Youtube", icon: Youtube },
          ].map(({ name, icon: Icon }) => (
            <Link
              key={name}
              href={`#${name.toLowerCase()}`}
              className="bg-white p-2 rounded-sm hover:bg-[#FF9F0D] transition-colors flex items-center justify-center"
            >
              <Icon className="h-6 w-6 text-black" />
              <span className="sr-only">{name}</span>
            </Link>
          ))}
        </div>
      </div>

     
    </div>






     
    </footer>
 
  );
}
