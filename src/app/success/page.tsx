"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const SuccessContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Extract order details from URL
  const orderNumber = searchParams.get("orderNumber");
  const customerName = searchParams.get("customerName") || "Unknown";
  const customerEmail = searchParams.get("customerEmail") || "Unknown";
  const total = searchParams.get("total") ? Number(searchParams.get("total")) : 0;
  const discount = searchParams.get("discount") ? Number(searchParams.get("discount")) : 0;
  const items = JSON.parse(searchParams.get("items") || "[]");

  useEffect(() => {
    if (orderNumber) {
      const orderDetails = {
        orderNumber,
        customerName,
        customerEmail,
        total,
        discount,
        items,
      };

      // Store order details in localStorage for receipt page
      localStorage.setItem(`order_${orderNumber}`, JSON.stringify(orderDetails));
    }
  }, [orderNumber, customerName, customerEmail, total, discount, items]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
        <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
        <p className="mt-2 text-gray-600">Thank you for your order.</p>

        <div className="mt-4">
          <p><strong>Order Number:</strong> {orderNumber}</p>
          <p><strong>Total Paid:</strong> ${total}</p>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <Button className="bg-blue-500 text-white" onClick={() => router.push(`/receipt?orderNumber=${orderNumber}`)}>
            Get Receipt
          </Button>
          <Button className="bg-gray-500 text-white" onClick={() => router.push("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

const SuccessPage = () => {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading...</p>}>
      <SuccessContent />
    </Suspense>
  );
};

export default SuccessPage;
