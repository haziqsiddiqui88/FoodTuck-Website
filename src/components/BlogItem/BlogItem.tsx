import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
const BlogItem = () => {
  return (
    <div className="flex flex-col h-[450px] md:w-[400px] sm:w-[300px] md:border-[1px] items-center ">
      <div className="mt-10">
        <Image
          className="rounded-full"
          src={"/blogp-1.png"}
          alt={"profile"}
          height={120}
          width={120}
        />
      </div>
      <div className="mt-4 grid grid-col gap-3 text-center ">
        <h1 className="font-bold">Prince Miyako</h1>
        <p>Blogger/Photographer</p>

        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`text-2xl ${
                index ? "text-[#FF9F0D]" : "text-[#FF9F0D]"
              }`}
            />
          ))}
          <p className="text-gray-500"> (1 Review) </p>
        </div>

        <p className="w-[300px] text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Consequuntur, nulla! Soluta nobis ipsa a quos obcaecati.
        </p>
        <button  className="mt-3 ml-[70px] text-gray-600 flex flex-row gap-4 text-2xl ">
          
          <GrFacebookOption className="hover:text-black" />
          <FaTwitter className="hover:text-black"/>
          <FaInstagram className="hover:text-black" />
          <FaYoutube className="hover:text-black" />
        </button>
      </div>
    </div>
  );
};

export default BlogItem;
