"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface OrderDetails {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  total: number;
  discount: number;
  items: {
    name: string;
    price: number;
    quantity: number;
  }[];
}

const ReceiptPage = () => {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const receiptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (orderNumber) {
      // Fetch order details from Sanity or local storage
      const storedOrder = localStorage.getItem(`order_${orderNumber}`);
      if (storedOrder) {
        setOrderDetails(JSON.parse(storedOrder));
      }
    }
  }, [orderNumber]);

  const handleDownload = () => {
    if (receiptRef.current) {
      html2canvas(receiptRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
        pdf.save(`receipt_${orderNumber}.pdf`);
      });
    }
  };

  if (!orderDetails) {
    return <p className="text-center mt-10">Loading order details...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full" ref={receiptRef}>
        <h2 className="text-2xl font-bold text-center mb-6">Order Receipt</h2>
        <p><strong>Order Number:</strong> {orderDetails.orderNumber}</p>
        <p><strong>Customer:</strong> {orderDetails.customerName}</p>
        <p><strong>Email:</strong> {orderDetails.customerEmail}</p>
        
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Items Purchased:</h3>
          <ul className="space-y-2">
            {orderDetails.items.map((item, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span>{item.name} (x{item.quantity})</span>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 border-t pt-4">
          <p><strong>Discount:</strong> ${orderDetails.discount}</p>
          <p className="text-lg font-semibold"><strong>Total:</strong> ${orderDetails.total}</p>
        </div>

        <div className="mt-6 flex justify-between">
          <Button className="bg-blue-500 text-white" onClick={handleDownload}>
            Download Receipt
          </Button>
          <Button className="bg-gray-500 text-white" onClick={() => window.print()}>
            Print Receipt
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPage;
