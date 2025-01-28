"use client";

import Image from "next/image";
import { useCart } from '../../../app/context/CartContext';
import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  // Function to calculate the total price for an item
  const calculateTotalPrice = (price: number, quantity: number) => {
    return (price * quantity).toFixed(2); // Ensure the price is formatted to 2 decimal places
  };

  // Calculate the grand total for all items in the cart
  const grandTotal = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    
       <div className="min-h-screen">
      <header className="top-0 left-0 right-0 z-50">
        <nav className="bg-black px-4 md:px-6">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center text-xl font-bold text-white"
            >
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
              <Link
                href="/contact"
                className="text-white hover:text-orange-500"
              >
                Contact
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <Link href="/error">
                <button className="text-white hover:text-orange-500">
                  <Search className=" h-5 w-5" />
                  <span className="sr-only">Search</span>
                </button>
              </Link>
              <Link href="/account">
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
        <div
          className="relative h-[300px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url('/home-pic-1.png')` }}
        >
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
      <div className="p-4 sm:p-8">
        {cart.length === 0 ? (
          <p className="text-2xl  font-thin">Your cart is empty.</p>
        ) : (
          <div className="space-y-4 max-w-6xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">Cart</h1>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between border p-4 rounded-lg shadow"
              >
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={30}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-600 font-semibold">
                      Total: ${calculateTotalPrice(item.price, item.quantity)}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 sm:flex-row items-center text-lg space-y-2 sm:space-y-0 sm:space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-white text-black text-sm sm:text-lg rounded border border-gray-300 hover:bg-gray-100 transition"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-white text-black text-sm sm:text-lg rounded border border-gray-300 hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-orange-500 text-white text-sm sm:text-base rounded hover:bg-orange-700 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-6 text-left">
              <p className="text-xl font-semibold">Total: ${grandTotal}</p>
            </div>
            <div className="mt-6 text-right">
              <Link href="/generate-tracking">
                <button
                  disabled={cart.length === 0}
                  className={`px-4 py-2 sm:px-6 sm:py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition ${
                    cart.length === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
