"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { client } from "@/sanity/lib/client";
import { getCartItems } from "@/lib/actions";
import {  ShoppingBag, User } from "lucide-react";
import { useUser } from "@/app/context/UserContext";
import { createCheckoutSession, Metadata } from "../../../../action/createCheckoutSession";
import Searchbar from "../Searchbar/Searchbar";
import Navbar from "@/app/navbar/Navbar";
// Define Food Type
interface Food {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image?: any;
}

// Define Form Values Type
interface FormValues {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zipCode: string;
  phone: string;
  email: string;
}

export default function CheckOut() {
  const [cartItems, setCartItems] = useState<Food[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [loading, setLoading] = useState(false);
const { user } = useUser();
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const cart = getCartItems();
    setCartItems(cart || []);

    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const validateForm = () => {
    const errors: Record<string, boolean> = {
      firstName: !formValues.firstName.trim(),
      lastName: !formValues.lastName.trim(),
      address: !formValues.address.trim(),
      city: !formValues.city.trim(),
      zipCode: !formValues.zipCode.trim(),
      phone: !/^\d{10,15}$/.test(formValues.phone), // Ensures a valid phone number
      email: !/\S+@\S+\.\S+/.test(formValues.email), // Ensures a valid email format
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      toast.error("Please fill in all fields correctly.");
      return;
    }
  
    setLoading(true);
  
    try {
      // Step 1: Save Order in Sanity
      const orderData = {
        _type: "order",
        ...formValues,
        cartItems: cartItems.map((item) => ({
          _type: "cartItem",
          _key: item._id || crypto.randomUUID(),
          foodItem: {
            _type: "reference",
            _ref: item._id,
          },
          quantity: item.quantity, // Ensure quantity is included
          price: item.price, // Store price for record keeping
        })),
        
        total,
        discount,
        orderDate: new Date().toISOString(),
        status: "Pending Payment",
      };
      const orderResponse = await client.create(orderData);
      if (!orderResponse) {
        throw new Error("Failed to create order in Sanity");
      }
  
      // Step 2: Create Stripe Checkout Session
      const modifiedCartItems = cartItems.map((item) => ({
        product: {
          id: item._id,
          name: item.name,
          price: item.price,
          image: item.image ? urlFor(item.image).url() : "",
        },
        quantity: item.quantity,
      }));
  
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? "Unknown",
        customerEmail: user?.emailAddress[0]?.emailAddress ?? "Unknown",
        ClerkUserId: user!.id,
      };

      const checkoutUrl = await createCheckoutSession(
        modifiedCartItems,
        metadata
      );
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
    <div className="min-h-screen bg-white">

 {/* Navbar & Hero Section */}
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
            <h1 className="mb-4 text-5xl font-bold text-white">Our Shop</h1>
            <div className="flex items-center gap-2 text-lg">
              <Link href="/" className="text-white hover:text-orange-500">
                Home
              </Link>
              <span className="text-white">&gt;</span>
              <span className="text-orange-500">Checkout</span>
            </div>
          </div>
        </div>
      </header>





      {/* Breadcrumb */}
      <div className="mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-3.5">
            <Link href="/cart" className="text-[#666666] hover:text-black text-sm">
              Cart
            </Link>
            <ChevronRight className="w-4 h-4 text-[#666666]" />
            <span className="text-sm">Checkout</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="border rounded-sm p-6 space-y-4">
            <h2 className="text-xl font-medium">Order Summary</h2>
            {cartItems.map((item, index) => (
              <div key={item._id || index} className="flex items-center gap-4 py-3 border-b">
                <div className="w-16 h-16 overflow-hidden rounded">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-xs text-[#666666]">Quantity: {item.quantity}</p>
                </div>
                <p className="text-sm">${item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          {/* Billing Form */}
          <div className="border rounded-sm p-6 space-y-4">
            <h2 className="text-xl font-medium">Billing Information</h2>

            {Object.keys(formValues).map((field) => (
              <div key={field}>
                <Label htmlFor={field}>{field.replace(/([A-Z])/g, " $1")}</Label>
                <Input
                  id={field}
                  placeholder={`Enter your ${field}`}
                  value={formValues[field as keyof FormValues]}
                  onChange={(e) => setFormValues({ ...formValues, [field]: e.target.value })}
                />
                {formErrors[field] && <p className="text-red-500 text-sm">{field} is required</p>}
              </div>
            ))}

            <div className="flex justify-between py-3 border-b">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span>Discount:</span>
              <span>-${discount}</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span>Shipping:</span>
              <span className="text-[#666666]">Free</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span>Total:</span>
              <span>${total}</span>
            </div>

            <Button
              className="w-full h-12 bg-[#ff9f0d] hover:bg-yellow-500 rounded-sm mt-4"
              onClick={handlePlaceOrder}
              disabled={loading}
            >
              {loading ? "Processing..." : "Place Order"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
