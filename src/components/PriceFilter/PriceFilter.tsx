'use client'
import { useState } from "react";

const PriceFilter = () => {
  const [price, setPrice] = useState([0, 8000]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Debugging: Log the event details
    console.log(`Slider Changed: ${name} = ${value}`);

    // Update state based on the slider moved
    if (name === "min") {
      setPrice([Math.min(Number(value), price[1]), price[1]]);
    } else {
      setPrice([price[0], Math.max(Number(value), price[0])]);
    }
  };

  return (
    <div className="flex flex-col  w-full p-4 ">
      <h2 className="text-lg font-bold mb-4 ">Filter By Price</h2>
      <div className="flex items-center w-full ">
        <input
          type="range"
          min="0"
          max="8000"
          step="1"
          name="min"
          value={price[0]}
          onChange={handleSliderChange}
          className="w-full appearance-none bg-orange-500 h-1 rounded outline-none"
        />
        <input
          type="range"
          min="0"
          max="8000"
          step="1"
          name="max"
          value={price[1]}
          onChange={handleSliderChange}
          className="w-full appearance-none bg-orange-500 h-1 rounded outline-none"
        />
      </div>
      <div className="flex justify-between w-full mt-2 text-sm text-gray-700">
        <span>From ${price[0]}</span>
        <span>To ${price[1]}</span>
      </div>
     
    </div>
  );
};

export default PriceFilter;