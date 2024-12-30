import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
const FollowUs = () => {
  return (
     <div className="flex flex-col h-[180px] items-center justify-center md:w-[400px] sm:w-[300px] border-[1px] " style={{backgroundImage: `url('/home-second2.png')` }}>
         <h3 className="text-3xl -ml-[150px] font-semibold underline   font-playwrite mb-8">Follow Us</h3>
            <div className="flex flex-row gap-[20px]   text-3xl ">
            <button className='h-[50px] w-[50px] rounded-lg backdrop-blur-xl hover:scale-105 transition-transform duration-300'><FaTwitter className='ml-2' /></button>
            <button className='h-[50px] w-[50px] rounded-lg backdrop-blur-xl hover:scale-105 transition-transform duration-300'><GrFacebookOption  className='ml-2' /></button>
            <button className='h-[50px] w-[50px] rounded-lg backdrop-blur-xl hover:scale-105 transition-transform duration-300'> <FaInstagram  className='ml-2' /></button>
            <button className='h-[50px] w-[50px] rounded-lg backdrop-blur-xl hover:scale-105 transition-transform duration-300'><FaYoutube  className='ml-2' /></button>
            
            </div>
          
            </div>
        
       

  )
}

export default FollowUs