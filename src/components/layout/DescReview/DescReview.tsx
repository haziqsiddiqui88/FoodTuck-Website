// components/ProductDetails.tsx (Client Component)
"use client";

import { useState } from "react";

const ProductDetails = ({ food }: { food: any }) => {
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
        {activeTab === "reviews" && <p>Reviews content goes here.</p>}
      </div>
      
    </div>
  );
};

export default ProductDetails;
