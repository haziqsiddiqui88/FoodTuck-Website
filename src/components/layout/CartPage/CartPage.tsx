"use client";

import Image from "next/image";
import { useState} from "react";
import { useCart } from "../../../app/context/CartContext";
import { useUser } from "@/app/context/UserContext";

import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";
import { createCheckoutSession, Metadata } from "../../../../action/createCheckoutSession";

const CartPage = () => {
const [loading, setLoading]= useState(false)

  const { cart, updateQuantity, removeFromCart } = useCart();
  const { user } = useUser();
  const [coupon, setCoupon] = useState(""); // Store entered coupon code
  const [discount, setDiscount] = useState(0); // Store discount amount

  // Updated validCoupons with index signature
  const validCoupons: { [key: string]: number } = {
    SAVE10: 10,
    FOOD20: 20,
  };

  // Function to calculate the total price for an item
  const calculateTotalPrice = (price: number, quantity: number) => {
    return (price * quantity).toFixed(2); // Ensure price is formatted to 2 decimal places
  };

 

  // Calculate the grand total for all items in the cart
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discountedTotal = (cartTotal - discount).toFixed(2); // Apply discount

  // Handle coupon code
  const applyCoupon = () => {
    if (validCoupons[coupon]) {
      setDiscount(validCoupons[coupon]); // Apply discount
    } else {
      alert("Invalid coupon code!"); // Error message
      setDiscount(0); // Reset discount if invalid
    }
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
    
      const modifiedCartItems = cart.map(item => ({
        product: {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
        
        },
        quantity: item.quantity,
      }));
  
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? "Unknown",
        customerEmail: user?.emailAddress[0]?.emailAddress ?? "Unknown",
        ClerkUserId: user!.id,
      };
  
      const checkoutUrl = await createCheckoutSession(modifiedCartItems, metadata);
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setLoading(false);
    }
  };
  
    
    
  

  return (
    <div className="min-h-screen">
      {/* Navbar & Hero Section */}
      <header className="top-0 left-0 right-0 z-50">
        <nav className="bg-black px-4 md:px-6">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-xl font-bold text-white"
            >
              Food<span className="text-orange-500">tuck</span>
            </Link>
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
              <Link href="/shop" className="text-orange-500">
                Shop
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-orange-500"
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/error">
                <Search className="h-5 w-5 text-white hover:text-orange-500" />
              </Link>
              <Link href="/account">
                <User className="h-5 w-5 text-white hover:text-orange-500" />
              </Link>
              <Link href="/cart">
                <ShoppingBag className="h-5 w-5 text-white hover:text-orange-500" />
              </Link>
            </div>
          </div>
        </nav>
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

      {/* Cart Section */}
      <div className="p-4 sm:p-8">
        {cart.length === 0 ? (
          <p className="text-2xl font-thin">Your cart is empty.</p>
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
                <div className="flex flex-row gap-4 sm:flex-row items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 bg-white text-black border border-gray-300 rounded hover:bg-gray-100 transition"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 bg-white text-black border border-gray-300 rounded hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-3 py-1 bg-[#ff9f0d] text-white rounded hover:bg-orange-700 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:gap-6">
              {/* Coupon Code */}
              <div className="w-full sm:w-1/2 border p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-3">Coupon Code</h2>
                <p className="text-gray-600 mb-2">
                  Enter your coupon code to get a discount.
                </p>
                <div className="flex">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Enter Here"
                    className="border p-2 flex-grow rounded-l-lg"
                  />
                  <button
                    onClick={applyCoupon}
                    className="bg-[#ff9f0d] text-white px-4 py-2 rounded-r-lg hover:bg-orange-600"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="w-full sm:w-1/2 border p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-3">Total Bill</h2>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Cart Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total Amount</span>
                    <span>${discountedTotal}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="mt-6  text-center sm:text-right">
              
                <button 
                onClick={handleCheckout}
                className="px-4 py-3 w-full sm:w-1/2 bg-[#ff9f0d] text-white font-semibold rounded hover:bg-yellow-600 transition">
                  Proceed to Checkout
                </button>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
