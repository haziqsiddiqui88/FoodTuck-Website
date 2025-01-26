
import Link from "next/link";
import { Search, ShoppingBag, User } from 'lucide-react'

import React from "react";
import { client } from "@/sanity/lib/client";


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
    foodName, price, tags, image, description, available
  }[0]`;

  const food = await client.fetch(query);
  console.log(food);

  return (
    <div className='min-h-screen'>
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



      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <img
              src="/Shopdetail-img/Image-1.png"
              alt="Product"
              className="w-96 h-96 rounded-lg"
            />
            <div className="flex gap-4 mt-4">
              <img
                src="/Shopdetail-img/Image-2.png"
                alt="Thumbnail"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <img
                src="/Shopdetail-img/Image-3.png"
                alt="Thumbnail"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <img
                src="/Shopdetail-img/Image-4.png"
                alt="Thumbnail"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <img
                src="/Shopdetail-img/Image-5.png"
                alt="Thumbnail"
                className="w-24 h-24 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h2 className="text-2xl font-bold">Yummy Chicken Chup</h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex autem, quae, ducimus id laborum quasi, numquam provident sapiente modi accusantium?
               Obcaecati corporis asperiores corrupti incidunt non dicta ratione recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim suscipit aliquid, veritatis reiciendis quaerat! Dicta, repudiandae repellendus
                provident adipisci perferendis aliquid fuga cumque labore ratione vel. Impedit, labore ratione.
            </p>
            <p className="text-3xl font-bold mt-4">$54.00</p>

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
              <p>Category: Pizza</p>
              <p>Tags: Pizza, Shop</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="border-b pb-4">
            <h3 className="text-xl font-bold">Description</h3>
          </div>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem incidunt maiores
             illum eius explicabo reprehenderit aliquam consequuntur illo. Eius, quas. At veritatis facilis asperiores 
             qui velit blanditiis perspiciatis delectus?.

             Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nam dolores odit adipisci maiores atque nesciunt
              iste eveniet possimus labore. Adipisci laborum natus magnam repudiandae quisquam alias unde, itaque dolor.
          </p>

          <h4 className="font-bold mt-6">Key Benefits:</h4>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Delicious and creamy textures</li>
            <li>Rich protein and flavor</li>
            <li>Perfect for family meals</li>
            <li>Rich protein and flavor</li>
            <li>Perfect for family meals</li>
          </ul>
        </div>

        {/* Similar Products */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Similar Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border p-4 rounded-lg">
              <img
                src="/Shopdetail-img/Image-6.png"
                alt="Product"
                className="w-full h-40 object-cover rounded-lg"
              />
              <h4 className="mt-2 text-lg font-semibold">Fresh Lime</h4>
              <p className="text-gray-600">$32.00</p>
            </div>
            <div className="border p-4 rounded-lg">
              <img
                src="/Shopdetail-img/Image-7.png"
                alt="Product"
                className="w-full h-40 object-cover rounded-lg"
              />
              <h4 className="mt-2 text-lg font-semibold">Chocolate Muffin</h4>
              <p className="text-gray-600">$16.00</p>
            </div>
            <div className="border p-4 rounded-lg">
              <img
                src="/Shopdetail-img/Image-8.png"
                alt="Product"
                className="w-full h-40 rounded-lg"
                style={{ objectFit: 'cover' }} 
              />
              <h4 className="mt-2 text-lg font-semibold">Burger</h4>
              <p className="text-gray-600">$19.00</p>
            </div>
            <div className="border p-4 rounded-lg">
              <img
                src="/Shopdetail-img/Image-9.png"
                alt="Product"
                className="w-full h-40 object-cover rounded-lg"
              />
              <h4 className="mt-2 text-lg font-semibold">Fresh Salad</h4>
              <p className="text-gray-600">$22.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;