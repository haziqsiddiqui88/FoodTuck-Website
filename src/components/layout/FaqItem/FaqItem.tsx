import React from 'react'


interface FaqItemProps {
  
  title: string
  description: string

}
  
const FaqItem = ({ title, description }: FaqItemProps) => {
 
  return (
  <div className="flex items-start gap-[100px]  md:gap-6 w-full max-w-[600px] min-h-[79px] mx-auto">
       
  
        {/* Content */}
        <div className="grid grid-rows-2 w-[400px] bg-slate-50  shadow-md">
          <h3 className="text-black text-lg md:text-xl ml-3 font-bold mt-4  truncate">
            {title}
          </h3>
          <p className="text-gray-700 text-xs md:text-sm ml-3 line-clamp-3">
            {description}
          </p>
          </div>
         
        
      </div>
  )
}

export default FaqItem