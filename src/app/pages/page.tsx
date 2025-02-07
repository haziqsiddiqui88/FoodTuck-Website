"use client";



import Error from "@/app/error/page";
import Navbar from "../navbar/Navbar";

const page = () => {
  return (
    <div className="min-h-screen">
       {/* navbar  */}
     <div className="bg-black"><Navbar /></div>

      <Error />
    </div>
  );
};

export default page;
