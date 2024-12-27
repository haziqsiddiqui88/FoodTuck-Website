import React from 'react'
import Image from 'next/image'
import { FaEye } from "react-icons/fa";
const BlogGallery = () => {

  const blogGallery = [
    {
      id: 1,
      image: "/gallery1.png",
     title: 'Gallery Photo',
    },
    {
      id: 2,
      image: "/gallery2.png",
      title: 'Gallery Photo',
    },
    {
      id: 3,
      image: "/gallery3.png",
      title: 'Gallery Photo',
    },
    {
      id: 4,
      image: "/gallery4.png",
      title: 'Gallery Photo',
    },
    {
      id: 5,
      image: "/gallery5.png",
      title: 'Gallery Photo',
    },
    {
      id: 6,
      image: "/gallery6.png",
      title: 'Gallery Photo',
    },
  ]
  
  return (
    <div className="flex flex-col h-[300px] w-[400px] border-[1px] ">
     <h3 className="text-xl ml-4 mt-4 font-semibold mb-4">Blog Gallery</h3>
     <div className="grid grid-cols-3 ml-2 ">
     
      {blogGallery.map((gallery) => (
          <div
          key={gallery.id}
          className="group cursor-auto  border-2 border-white"
        >
          {/* Image Container */}
                      <div className="relative  mb-6 overflow-hidden ">
                        <Image
                          src={gallery.image}
                          alt={gallery.title}
                          width={115}
                          height={100}
                         
                          className="object-cover "
                        />
                        <div className='bg-black bg-opacity-50 absolute w-[115px] h-0 bottom-0
                       overflow-hidden group-hover:h-full transition-all duration-500  flex justify-center items-center  '>
                              <button className='text-white text-2xl'><FaEye /></button>
                          </div>
                      </div>
                      </div>
      ))}
      </div>
       
     
    
               
    
    
</div>
  )
}

export default BlogGallery