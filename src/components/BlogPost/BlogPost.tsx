import React from "react";
import Image from "next/image";

import { GoShareAndroid } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";
import { LiaCommentDotsSolid } from "react-icons/lia";
import Link from "next/link";

const BlogPost = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/choose1.png",
      date: "10 February 2022",
      title: "Your Dreamy Burger Awaits ",
    },
    {
      id: 2,
      image: "/choose2.png",
      date: "10 February 2022",
      title: "Fully Loaded Chesee Pizza",
    },
    {
      id: 3,
      image: "/choose3.png",
      date: "10 February 2022",
      title: "Fresh Mexican Tacos",
    },
  ];

  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="font-playwrite  text-[#ff9f0d] text-3xl mb-4">
            Blog Post
          </h3>
          <h2 className="text-[#FF9F0D] text-6xl font-bold">
            La<span className="text-white">test News & Blog</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group cursor-auto  border-2 border-white"
            >
              {/* Image Container */}
              <div className="relative  h-[300px] mb-6 overflow-hidden ">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between text-[#FF9F0D]">
                  <span>{post.date}</span>
                  <div className= "flex flex-row  gap-4    text-white">
               <Link href="#"> <AiOutlineLike   className="hover:text-[#ff9f0d] cursor-pointer text-2xl" /></Link>
               <Link href="#">  <LiaCommentDotsSolid className="text-[#ff9f0d] cursor-pointer text-2xl" /></Link>
               <Link href="#">   <GoShareAndroid  className="hover:text-[#ff9f0d] cursor-pointer text-2xl" /></Link>

                </div>
                </div>
                <h3 className="text-white text-xl font-bold hover:text-[#FF9F0D] transition-colors">
                  {post.title}
                </h3>

                <button className="text-white  hover:text-gray-400">
                  Learn More
                </button>
                
               

                </div>
               
             



            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
