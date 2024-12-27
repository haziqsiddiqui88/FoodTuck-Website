import React from "react";

const ShopTag = () => {
  return (
    <div className="flex flex-col ">
      <h3 className="text-xl ml-4 mt-4 font-semibold mb-4">Product Tags</h3>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row gap-[10px] text-gray-600 items-center justify-center">
          <button className="w-[140px] h-[40px]  underline hover:bg-gray-300 ">
            <p>Services</p>{" "}
          </button>
          <button className="w-[100px] h-[40px] underline hover:bg-gray-300 ">
            <p>Tikka</p>{" "}
          </button>
          <button className="w-[100px] h-[40px] underline hover:bg-gray-300 ">
            <p> Menu</p>{" "}
          </button>
        </div>
        <div className="flex flex-row gap-[10px] text-gray-600 items-center justify-center">
          <button className="w-[140px] h-[40px] underline hover:bg-gray-300 ">
            <p>Cup Chake</p>{" "}
          </button>
          <button className="w-[170px] h-[40px] underline hover:bg-gray-300">
            <p>Tandoori Chicken </p>{" "}
          </button>
        </div>
        <div className="flex flex-row gap-[10px] text-gray-600 items-center justify-center">
          <button className="w-[100px] h-[40px] underline hover:bg-gray-300 ">
            <p>Cookies</p>{" "}
          </button>
          <button className="w-[150px] h-[40px] underline hover:bg-gray-300 ">
            <p>Burger</p>{" "}
          </button>
          <button className="w-[100px] h-[40px] underline  hover:bg-gray-300">
            <p>Shop</p>{" "}
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ShopTag;
