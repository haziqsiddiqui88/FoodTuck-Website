import React from 'react'
import Image from 'next/image'


const  LatestProduct = () => {
  return (
    <div className="flex flex-col   ">
        <h3 className="text-xl ml-4 mt-4 font-semibold mb-4">Latest Product</h3>
            <div className="space-y-6 ml-4">
              {[ 
                {
                  id: 1,
                  Image: "/shop6.png",
                  title: "Pizza",
                },
                {
                  id: 2,
                  Image: "/shop7.png",
                  title: "Cup Chake",
                },
                {
                  id: 3,
                  Image: "/shop5.png",
                  title: "Cookies ",
                },
                {
                    id: 4,
                    Image: "/choose1.png",
                    title: "Burger",
                  },
              ].map((items) => (
                <div key={items.id} className="flex gap-4">
                  <Image
                    src={items.Image}
                    alt="Blog post thumbnail"
                    width={100}
                    height={40}
                    className="rounded"
                  />
                  <div className='mt-5'>
                  
                    <h1>
                      {items.title}
                      </h1>
                      <p className="text-sm text-gray-500">$35.00</p>
                  </div>
                </div>
              ))}
            </div>
            
    </div>
  )
}

export default LatestProduct