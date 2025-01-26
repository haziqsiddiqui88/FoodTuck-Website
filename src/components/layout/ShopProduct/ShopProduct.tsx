
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../AddToCartButton/AddToCartButton";



// TypeScript types for food data
type Food = {
  _id: string;
  foodName: string;
  price: number;
  originalPrice: number;
  description?: string;
  tags?: string[];
  available: boolean;
  imageUrl?: string; // Optional property
  slug: string;
};

// Props interface for ShopProduct
interface ShopProductProps {
  foods: Food[];
}

const ShopProduct = ({ foods }: ShopProductProps) => {
  return (
    <section className="body-font">
      <div className="container px-5 py-24 lg:mx-auto">
        <div className="flex flex-wrap -m-4">
          {foods.map((food) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={food._id}>
              <a className="block relative h-48 rounded overflow-hidden">
                
                {food.originalPrice > food.price && (
                  <p
                    className="bg-red-600 text-white font-bold px-2 py-1 rounded-full shadow-lg absolute top-2 right-2 text-xs transform"
                    style={{ transform: "rotate(-10deg)" }}
                  >
                    {Math.round(
                      ((food.originalPrice - food.price) / food.originalPrice) *
                        100
                    )}
                    % OFF
                  </p>
                )}

                <Image
                  alt={food.foodName || "Food Image"}
                  className="object-cover object-center w-full h-full block"
                  src={food.imageUrl ? food.imageUrl : "/default-image.jpeg"} // Default image path
                  width={200}
                  height={200}
                />
              </a>
              <h2 className="text-lg font-semibold text-gray-800 mt-4">
                {food.foodName}
              </h2>
              <div className="flex py-2 justify-between px-4 md:px-6">
                {/* Original price */}
                <p className="text-xl text-red-600 font-bold line-through">
                  ${food.originalPrice}
                </p>

                <div className="flex gap-2 food-center">
                  {/* Discounted price */}
                  <p className="font-bold text-xl text-black">${food.price}</p>

                  {/* Display discount percentage only if there is a discount */}
                  {food.originalPrice > food.price && (
                    <p className="text-sm text-green-600 font-medium">
                      {Math.round(
                        ((food.originalPrice - food.price) /
                          food.originalPrice) *
                          100
                      )}
                      % OFF
                    </p>
                  )}
                </div>
              </div>
              <p
                className={`text-sm font-medium mt-3 ${
                  food.available ? "text-green-600" : "text-red-600"
                }`}
              >
                {food.available ? "Available" : "Not Available"}
              </p>
              <div className="flex gap-3">
                <div className="bg-[#ff9f0d] w-[120px] text-center h-[30px] rounded-md mt-2 hover:text-white hover:scale-105 transition-transform duration-300">
                  <Link href={`/product/${food.slug}`}>
                    <button className="mt-1 text-[14px]">View details</button>
                  </Link>
                </div>
                <AddToCartButton 
                food={{
                  id: food._id,
                  name: food.foodName,
                  price: food.price,
                  image: food.imageUrl || "/default-image.jpeg",
                }}
              />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopProduct;
