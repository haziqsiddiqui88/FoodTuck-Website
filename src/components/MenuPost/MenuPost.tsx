

import React from 'react'
import Image from 'next/image'
import MenuItem from '../MenuItem/MenuItem'

const Menu = () => {
  const categories = [
    { id: 1, name: 'Breakfast', active: true },
    { id: 2, name: 'Lunch' },
    { id: 3, name: 'Dinner' },
    { id: 4, name: 'Dessert' },
    { id: 5, name: 'Drink' },
    { id: 6, name: 'Snack' },
    { id: 7, name: 'Soups' },
  ]

  const menuItems = [
    {
      image: '/menupost1.png',
      title: 'Lettuce Leaf',
      description: 'Lacus nisi, et ac dapibus velit in consequat.',
      price: '12.5'
    },
    {
        image: '/menupost3.png',
        title: 'Fresh Breakfast',
        description: 'Lacus nisi, et ac dapibus velit in consequat.',
        price: '12.5'
      },
      {
        image: '/menupost4.png',
        title: 'Mild Butter',
        description: 'Lacus nisi, et ac dapibus velit in consequat.',
        price: '12.5'
      },
      {
        image: '/menupost2.png',
        title: 'Fresh Shake',
        description: 'Lacus nisi, et ac dapibus velit in consequat.',
        price: '14.5'
      },{
        image: '/menupost5.png',
        title: 'Glow Cheese',
        description: 'Lacus nisi, et ac dapibus velit in consequat.',
        price: '12.5'
      },

      {
        image: '/choose2.png',
        title: 'Italian Pizza',
        description: 'Lacus nisi, et ac dapibus velit in consequat.',
        price: '14.5'
      },
      {
        image: '/home-second3.png',
        title: 'Slice Beaf',
        description: 'Lacus nisi, et ac dapibus velit in consequat.',
        price: '12.5'
      },
      {
        image: '/grid3.png',
        title: 'Mushroom Burger',
        description: 'Lacus nisi, et ac dapibus velit in consequat.',
        price: '12.5'
      },
    
  ]

  return (
    <section className="py-12 md:py-24 bg-transparent ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        
        <div className="text-center mb-8 md:mb-12">
          <h3 className="font-playwrite  text-[#ff9f0d] text-3xl md:text-3xl mb-2">
            Choose & pick
          </h3>
          <h2 className="text-[#FF9F0D] text-4xl md:text-6xl font-bold">
            Fr<span className="text-white">om Our Menu</span>
          </h2>
        </div>

        {/* Categories */}
        
        <div className="flex flex-wrap justify-center md:justify-between gap-4 max-w-4xl mx-auto mb-8 md:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`text-lg md:text-xl ${
                category.active 
                  ? 'text-[#FF9F0D] font-bold' 
                  : 'text-white font-normal hover:text-[#FF9F0D] transition-colors'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Image and Items */}
       
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="w-full lg:w-1/2 max-w-md">
            <Image 
              src="/heromenu.png"
              alt="Our Menu"
              width={515}
              height={500}
              className="w-full object-contain"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 w-full lg:w-1/2">
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu 
