import React from "react";

const BlogTag = () => {
  return (
    <div className="flex flex-col h-[300px] w-[400px] border-[1px] ">
      <h3 className="text-xl ml-4 mt-4 font-semibold mb-4">Popular Tags</h3>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row gap-[10px] text-gray-600 items-center justify-center">
          <button className="w-[140px] h-[40px] border-[1px] hover:bg-gray-300 ">
            <p>Sandwich</p>{" "}
          </button>
          <button className="w-[100px] h-[40px] border-[1px] hover:bg-gray-300 ">
            <p>Tikka</p>{" "}
          </button>
          <button className="w-[100px] h-[40px] border-[1px] hover:bg-gray-300 ">
            <p>Bbq</p>{" "}
          </button>
        </div>
        <div className="flex flex-row gap-[10px] text-gray-600 items-center justify-center">
          <button className="w-[140px] h-[40px] border-[1px] hover:bg-gray-300 ">
            <p>Restaurant</p>{" "}
          </button>
          <button className="w-[170px] h-[40px] border-[1px] hover:bg-gray-300">
            <p>Chicken Shawarma</p>{" "}
          </button>
        </div>
        <div className="flex flex-row gap-[10px] text-gray-600 items-center justify-center">
          <button className="w-[100px] h-[40px] border-[1px] hover:bg-gray-300 ">
            <p>Health</p>{" "}
          </button>
          <button className="w-[150px] h-[40px] border-[1px] hover:bg-gray-300 ">
            <p>Fast Food</p>{" "}
          </button>
          <button className="w-[100px] h-[40px] border-[1px]  hover:bg-gray-300">
            <p>Food</p>{" "}
          </button>
        </div>
        <div className="flex flex-row gap-[10px] text-gray-600 items-center justify-center">
          <button className="w-[100px] h-[40px] border-[1px] hover:bg-gray-300 ">
            <p>Pizza</p>{" "}
          </button>
          <button className="w-[150px] h-[40px] border-[1px] hover:bg-gray-300 ">
            <p>Burger</p>{" "}
          </button>
          <button className="w-[100px] h-[40px] border-[1px] hover:bg-gray-300">
            <p>Chicken</p>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogTag;
