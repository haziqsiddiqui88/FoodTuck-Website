'use client'
import React from 'react'



import Link from 'next/link'
import FaqItem from '@/components/layout/FaqItem/FaqItem'

import Navbar from '../navbar/Navbar'

export default function page() {




  const faqitems = [
    {
      
      title: 'How we serve food?',
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident pariatur voluptate nesciunt nostrum veniam inventore quos quod commodi?',
       
            
     
    },
    {
        
        title: 'How is our food quality?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident pariatur voluptate nesciunt nostrum veniam inventore quos quod commodi?',
         
      },
      {
       
        title: 'How do we give home delivery?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident pariatur voluptate nesciunt nostrum veniam inventore quos quod commodi?',
         
      },
      {
       
        title: 'how can we get in touch with you?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident pariatur voluptate nesciunt nostrum veniam inventore quos quod commodi?',
         
      },{
        
        title: 'what will be delivered? And When?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident pariatur voluptate nesciunt nostrum veniam inventore quos quod commodi?',
         
      },

      {
       
        title: 'Is this restaurant 24 hours open?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident pariatur voluptate nesciunt nostrum veniam inventore quos quod commodi?',
         
      },
    
    
  ]






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
      <h1 className="mb-4 text-5xl font-bold text-white">FAQ Page</h1>
      <div className="flex items-center gap-2 text-lg">
        <Link href="/" className="text-white hover:text-orange-500">
          Home
        </Link>
        <span className="text-white">&gt;</span>
        <span className="text-orange-500">FAQ</span>
      </div>
    </div>
  </div>
    </header>
    {/* navbar end */}
{/*Main Content */}
<div className="text-center mt-20">
            <h2 className="text-4xl md:text-5xl text-black font-bold mb-4">Questions Looks Here</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
</div>
<div className="lg:ml-[270px] lg:w-[850px] grid grid-cols-1    md:grid-cols-2  md:gap-2 mt-24 mx-auto mb-16" >
            {faqitems.map((item, index) => (
              <FaqItem
                key={index}
                title={item.title}
                description={item.description} 
                 
              />
            ))}


        </div>
        </div>
  )
}
