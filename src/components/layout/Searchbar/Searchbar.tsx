"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

export async function fetchFoods() {
  return await client.fetch<FoodItem[]>(`*[_type == "food"]{_id, foodName, slug}`);
}

export interface FoodItem {
  _id: string;
  foodName?: string;
  slug: {
    current: string;
  };
}

const Searchbar: React.FC = () => {
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getFoods = async () => {
      try {
        const data = await fetchFoods();
        setFoods(data || []);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };
    getFoods();
  }, []);

  const filteredFoods = foods.filter(
    (food) => food.foodName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative w-64">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Food Here....."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border border-gray-600 bg-transparent text-gray-400 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      {/* Search Results Dropdown */}
      {searchQuery && (
        <ul className="absolute w-full mt-1 bg-black text-white border border-gray-600 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
          {filteredFoods.length > 0 ? (
            filteredFoods.map((food) => (
              <li
                key={food._id}
                className="p-2 hover:bg-gray-800 transition-all"
              >
                <Link href={ `/product/${food.slug.current}`} className="block w-full">
                  {food.foodName}
                </Link>
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-400">No food found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;