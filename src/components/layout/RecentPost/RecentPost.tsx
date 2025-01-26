import React from 'react'
import Image from 'next/image'


const RecentPost = () => {
  return (
    <div className="flex flex-col h-[520px] md:w-[400px] sm:w-[300px] md:border-[1px]  ">
        <h3 className="text-xl ml-4 mt-4 font-semibold mb-4">Recent Post</h3>
            <div className="space-y-6 ml-4">
              {[ 
                {
                  id: 1,
                  Image: "/choose1.png",
                  title: "Lorem ipsum dolor sit amet, nobis  a quos  elit.",
                },
                {
                  id: 2,
                  Image: "/menupost3.png",
                  title: "Lorem ipsum dolor sit amet, nobis  a quos elit.",
                },
                {
                  id: 3,
                  Image: "/grid5.png",
                  title: "Lorem ipsum dolor sit amet, nobis  a quos  elit. ",
                },
                {
                    id: 4,
                    Image: "/menupost2.png",
                    title: "Lorem ipsum dolor sit amet, nobis  a quos elit.",
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
                  <div>
                  <p className="text-sm text-gray-500">Jan 22,2022</p>
                    <h1>
                      {items.title}
                      </h1>
                  
                  </div>
                </div>
              ))}
            </div>
            
    </div>
  )
}

export default RecentPost
