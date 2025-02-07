
import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
const FoodCategory = () => {
       // Items array containing food details
  const items = [
    { id: 1, Image: "/food1.png", label: "Save 30% on Fast Food" },
    { id: 2, Image: "/food4.png", label: "Delicious Burgers" },
    { id: 3, Image: "/food3.png", label: "Healthy Salads" },
    { id: 4, Image: "/food2.png", label: "Desserts" },
  ];

  return (
  
  
    <section className="bg-black  text-white py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Title */}
        <p className="font-playwrite  text-[#ff9f0d] text-3xl">Food Category</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-[#ff9f0d]">Choose</span> Food Item
        </h2>

        {/* Grid of food items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative">
              {/* Image of the food item */}
             <Link href='/shop'> <Image
                src={item.Image}
                alt={item.label}
                width={500}
                height={500}
                className="w-full h-56 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
                 </Link>
              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 bg-white opacity-90 px-4 py-2 rounded-md">
                <span className="text-orange-500 font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
  
export default FoodCategory