'use client';


import { useState } from "react";


const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      {/* Quantity Selector */}
      <div className="flex items-center mt-2 ">
        <button
          className="w-[30px] h-[30px] border rounded-md bg-gray-100"
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
        >
          −
        </button>
        <span className="mx-3">{quantity}</span>
        <button
          className="w-[30px] h-[30px] border rounded-md bg-gray-100"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>

     
    </div>
  );
};

export default QuantitySelector;
