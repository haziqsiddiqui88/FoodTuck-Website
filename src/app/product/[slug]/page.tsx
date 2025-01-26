

import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";
import { urlFor } from "@/sanity/lib/image"; // Ensure this is correct
import React from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image"; // Import Image from Next.js for optimized images
import DescReview from "@/components/layout/DescReview/DescReview";

export const revalidate = 60; // seconds

export async function generateStaticParams() {
  const query = `*[_type=='food']{
    "slug":slug.current
  }`;
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((item: { slug: string }) => item.slug);
  console.log(slugRoutes);
  return slugRoutes.map((slug: string) => ({ slug }));
}

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {

 
  const query = `*[_type=='food' && slug.current=='${slug}'] {
    foodName, price, tags, image, description, available,category,originalPrice,summary
  }[0]`;

  const food = await client.fetch(query);
  console.log(food);

  return (
    <div className="min-h-screen">
      <header className="top-0 left-0 right-0 z-50">
      <header className="top-0 left-0 right-0 z-50">
  <nav className="bg-black px-4 md:px-6">
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center text-xl font-bold text-white">
        Food<span className="text-orange-500">tuck</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-8 md:flex">
        
        <Link href="/" className="text-white hover:text-orange-500">
          Home
        </Link>
        <Link href="/menu" className="text-white hover:text-orange-500">
          Menu
        </Link>
        <Link href="/blog" className="text-white hover:text-orange-500">
          Blog
        </Link>
        <Link href="/pages" className="text-white hover:text-orange-500">
          Pages
        </Link>
        <Link href="/about" className="text-white hover:text-orange-500">
          About
        </Link>
        <Link href="/shop" className=" text-orange-500">
          Shop
        </Link>
        <Link href="/contact" className="text-white hover:text-orange-500">
          Contact
        </Link>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
      <Link href="/error" >
        <button className="text-white hover:text-orange-500">
          <Search className=" h-5 w-5" />
          <span className="sr-only">Search</span>
        </button>
        </Link>
        <Link
        href="/account">
        <button className="text-white hover:text-orange-500">
          <User className="h-5 w-5" />
          <span className="sr-only">Account</span>
        </button>
        </Link>
        <Link href="/cart">
        <button className="text-white hover:text-orange-500">
          <ShoppingBag className="h-5 w-5" />
          <span className="sr-only">Cart</span>
        </button>
        </Link>
        </div>
      </div>
  </nav>

  {/* Hero Section */}
  <div className="relative h-[300px] w-full bg-cover bg-center" style={{ backgroundImage: `url('/home-pic-1.png')` }}>
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-5xl font-bold text-white">Our Shop</h1>
      <div className="flex items-center gap-2 text-lg">
        <Link href="/" className="text-white hover:text-orange-500">
          Home
        </Link>
        <span className="text-white">&gt;</span>
        <span className="text-orange-500">Shop</span>
      </div>
    </div>
  </div>
</header>
{/* navbar end */}
      </header>
      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            {/* Using the urlFor function to get image URL */}
            {food.image && (
              <Image
                src={urlFor(food.image).url()} 
                alt={food.foodName}
                width={500}
                height={500}
                className="w-96 h-96 rounded-lg"
              />
            )}
            <div className="flex gap-4 mt-4">
              <img
                src="/shop6.png"
                alt="Thumbnail"
                className="w-24 h-24 object-cover rounded-lg"
              />
               <img
                src="/shop5.png"
                alt="Thumbnail"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <img
                src="/shop4.png"
                alt="Thumbnail"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <img
                src="/shop3.png"
                alt="Thumbnail"
                className="w-24 h-24 object-cover rounded-lg"
              />
             
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h2 className="text-2xl font-bold font-playwrite">{food.foodName}</h2>
            <p className="text-gray-600 font-sans mt-2">{food.description}</p>
            <div className="flex mt-4 space-x-3">
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
            <div className="flex items-center gap-2 mt-4">
              <input
                type="number"
                defaultValue={1}
                className="w-16 text-center border rounded-lg"
              />
              <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition">
                Add to Cart
              </button>
            </div>

            <div className="text-sm text-gray-600 mt-4">
              <p>Category: {food.category}</p>
              <p>Tags: {food.tags}</p>
            </div>
          </div>
        </div>

        {/* Tabs and Similar Products */}
        <div className="mt-12">
           {/* Product Description */}
          <div className="border-b pb-4">
        <DescReview   food={food} />

         
          </div>
         
           {/* Key Benefits */}
          <div className="border-b pb-4 mt-3">
            <h3 className="text-xl font-extralight">Key Benefits</h3>
            <div className="p-6 font-sans">
      <ul className="list-none space-y-2">
        <li className="relative pl-6">
          <span className="absolute left-0 text-[#ff9f0d] text-lg">•</span>
          <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit.
        </li>
        <li className="relative pl-6">
          <span className="absolute left-0 text-[#ff9f0d] text-lg">•</span>
          <strong>Maecenas ullamcorper est</strong> et massa mattis condimentum.
        </li>
        <li className="relative pl-6">
          <span className="absolute left-0 text-[#ff9f0d] text-lg">•</span>
          <strong>Vestibulum sed massa vel</strong> ipsum imperdiet malesuada id tempus nisl.
        </li>
        <li className="relative pl-6">
          <span className="absolute left-0 text-[#ff9f0d] text-lg">•</span>
          <strong>Etiam nec massa et lectus</strong> faucibus ornare congue in nunc.
        </li>
        <li className="relative pl-6">
          <span className="absolute left-0 text-[#ff9f0d] text-lg">•</span>
          <strong>Mauris eget diam magna</strong>, in blandit turpis.
        </li>
      </ul>
    </div>
          </div>
         
          {/* Similar Products */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Similar Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border p-4 rounded-lg">
                {/* Featured Image */}
                {food.image && (
                  <Image
                    src={urlFor(food.image).url()} // Ensure `.url()` is added here as well
                    width={500}
                    height={500}
                    alt={food.foodName}
                    className="rounded"
                  />
                )}
                <h4 className="mt-2 text-lg font-semibold">Fresh Lime</h4>
                <p className="text-gray-600">$32.00</p>
              </div>
              {/* Other Similar Products */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
