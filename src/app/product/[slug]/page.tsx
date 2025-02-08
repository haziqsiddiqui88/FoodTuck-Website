import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import React from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import DescReview from "@/components/layout/DescReview/DescReview";
import AddToCartButton from "@/components/layout/AddToCartButton/AddToCartButton";
import QuantitySelector from "@/components/layout/QuantitySelector/QuantitySelector";
import Rating from "@/components/layout/Rating/Rating";
import Navbar from "@/app/navbar/Navbar";

export const revalidate = 60; // ISR

export async function generateStaticParams() {
  const query = `*[_type=='food']{ "slug": slug.current }`;
  const slugs = await client.fetch(query);
  return slugs.map((item: { slug: string }) => ({ slug: item.slug }));
}

const Page = async ({ params }: { params?: { slug?: string } }) => {
  // ✅ Ensure params is properly handled
  if (!params || !params.slug) {
    return <div className="text-center text-red-500">Error: Invalid product slug</div>;
  }

  const { slug } = params; // ✅ Destructure safely

  // ✅ Fetch product details safely
  const query = `*[_type=='food' && slug.current == $slug][0] {
    _id, foodName, price, tags, image, description, available, category, originalPrice, summary
  }`;
  const food = await client.fetch(query, { slug });

  if (!food) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  // ✅ Fetch similar products
  const similarProductsQuery = `*[_type=='food' && slug.current != $slug][0...4] {
    foodName, price, image, "slug": slug.current
  }`;
  const similarProducts = await client.fetch(similarProductsQuery, { slug });

  return (
    <div className="min-h-screen">
      <header className="top-0 left-0 right-0 z-50">
        <nav className="bg-black px-4 md:px-6">
          <Navbar />
        </nav>
        <div
          className="relative h-[300px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url('/home-pic-1.png')` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
            <h1 className="mb-4 text-5xl font-bold text-white">Product Detail</h1>
            <div className="flex items-center gap-2 text-lg">
              <Link href="/" className="text-white hover:text-orange-500">Home</Link>
              <span className="text-white">&gt;</span>
              <span className="text-orange-500">Detail</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex gap-8">
            <div className="flex flex-col gap-4">
              {[1, 2, 3, 4].map((num) => (
                <Image
                  key={num}
                  src={`/shop${num}.png`}
                  alt={`Thumbnail ${num}`}
                  width={96}
                  height={96}
                  className="object-cover rounded-lg cursor-pointer"
                />
              ))}
            </div>
            <div>
              {food.image && (
                <Image
                  src={urlFor(food.image).url()}
                  alt={food.foodName}
                  width={500}
                  height={500}
                  className="w-96 h-96 rounded-lg"
                />
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:mt-16">
            <h2 className="text-3xl font-bold font-playwrite">{food.foodName}</h2>
            <p className="text-gray-600 font-sans mt-2 border-b pb-4">{food.description}</p>
            <div className="flex mt-4 space-x-3">
              {food.originalPrice > food.price && (
                <p className="text-xl text-red-600 font-bold line-through">${food.originalPrice}</p>
              )}
              <p className="font-bold text-xl text-black">${food.price}</p>
              {food.originalPrice > food.price && (
                <p className="text-sm text-green-600 font-medium">
                  {Math.round(((food.originalPrice - food.price) / food.originalPrice) * 100)}% OFF
                </p>
              )}
            </div>
            <div className="flex items-center space-x-2 mt-3 text-gray-600 text-md">
              <Rating />
              <span>| 5.0 Rating | 22 Reviews</span>
            </div>
            <div className="mt-3">
              <p className="text-gray-500">{food.category}</p>
            </div>
            <div className="mt-2 flex items-center gap-[20px] border-b pb-4">
              <QuantitySelector />
              <AddToCartButton
                food={{
                  id: food._id,
                  name: food.foodName,
                  price: food.price,
                  image: food.image || "/default-image.jpeg",
                }}
              />
            </div>
          </div>
        </div>

        {/* Description and Reviews */}
        <div className="mt-12 border-b pb-4">
          <DescReview food={food} />
        </div>

        {/* Similar Products */}
        <div className="mt-12">
          <h3 className="text-2xl font-serif font-bold mb-6"><i>Similar Products</i></h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map((product: { foodName: string; price: number; image: string; slug: string }) => (
              <Link href={`/product/${product.slug}`} key={product.slug}>
                <div className="border p-4 rounded-lg hover:shadow-md transition">
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      width={300}
                      height={200}
                      alt={product.foodName}
                      className="w-full h-48 object-cover rounded"
                    />
                  )}
                  <h4 className="mt-2 text-lg font-semibold">{product.foodName}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
