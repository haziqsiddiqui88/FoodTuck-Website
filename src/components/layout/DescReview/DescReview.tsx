
"use client";

import { useState } from "react";

interface Food {
  summary: string;
  
}

const DescReview   = ({ food }: { food: Food }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab("description")}
          className={`text-md w-[130px] h-[35px] font-light rounded-md shadow-lg ${
            activeTab === "description" ? "bg-[#ff9f0d] text-white" : "bg-gray-200 text-black"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`text-md w-[130px] h-[35px] font-light rounded-md shadow-lg ${
            activeTab === "reviews" ? "bg-[#ff9f0d] text-white" : "bg-gray-200 text-black"
          }`}
        >
          Reviews (22)
        </button>
      </div>

      <div className="p-3 font-sans  ">
        {activeTab === "description" && <p>{food.summary}</p>}
        {activeTab === "reviews" && <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti autem assumenda repudiandae minus quasi quia ab culpa. Iure perferendis placeat, non, neque doloribus consequuntur labore fugiat vitae, praesentium provident iste.</p>}
      </div>
      
    </div>
  );
};

export default DescReview ;
