import React from 'react'


interface AboutItemProps {
  
  title: string
  description: string
  price: string
}

const AboutItem = ({ title, description, price }: AboutItemProps) => {
  return (
  <div className="flex items-start  gap-[100px] md:gap-6 w-full max-w-[600px] min-h-[79px] mx-auto">
       
  
        {/* Content */}
        <div className="grid grid-rows-2 w-full ">
          <h3 className="text-black hover:text-[#FF9F0D] hover:cursor-pointer text-lg md:text-xl font-bold mb-1 truncate">
            {title}
          </h3>
          <p className="text-gray-700 text-xs md:text-sm  line-clamp-2">
            {description}
          </p>
          </div>
          <span className="text-[#FF9F0D] text-base md:text-lg font-bold">
          {price}$
        </span>
        
      </div>
  )
}

export default AboutItem