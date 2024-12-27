import React from 'react'
import Image from 'next/image'
const BlogMenu = () => {
  return (
    <div className="flex flex-col h-[550px] w-[400px] border-[1px] ">
         <h3 className="text-xl ml-4 mt-4  font-semibold mb-4">Filter By Menu</h3>
                    <div className="space-y-7 ml-4">
                      {[ 
                        {
                          id: 1,
                          Image: "/menupost1.png",
                          title: "Fast Food",
                         number: '26'
                          
                        },
                        {
                          id: 2,
                          Image: "/grid1.png",
                          title: "Fast Food ",
                          number: '46'
                        },
                        {
                          id: 3,
                          Image: "/menupost5.png",
                          title: "Fast Food ",
                          number: '16'
                        },
                        {
                            id: 4,
                            Image: "/menupost3.png",
                            title: "Fast Food",
                            number: '36'
                          },
                          {
                            id: 5,
                            Image: "/menupost2.png",
                            title: "Fast Food",
                            number: '16'
                          },
                      ].map((items) => (
                        <div key={items.id} className="flex gap-4">
                          <Image
                            src={items.Image}
                            alt="Blog post thumbnail"
                            width={70}
                            height={20}
                            className="rounded"
                          />
                          <div className='items-center justify-center flex flex-row gap-[130px] '>
                         
                            <h1 className='font-semibold '>
                              {items.title}
                              </h1>

                              <p>{items.number}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
    </div>
  )
}

export default BlogMenu