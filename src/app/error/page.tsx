import Link from "next/link";

export default function page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Error Section */}
      <section className="p-6 sm:p-10 relative bg-white pt-24 sm:pt-36 flex flex-col items-center">
        <div className="w-full max-w-lg text-center px-4 sm:px-0">
          <h3 className="text-[64px] sm:text-[96px] font-bold text-[#FF9F0D] mb-6">
            404
          </h3>
          <p className="font-bold text-[24px] sm:text-[32px] mb-4">
            Oops! Looks like something went wrong
          </p>
          <p className="text-[16px] sm:text-[18px] mb-4">
            Page cannot be found! We’ll have it figured out in no time.
          </p>
          <p className="text-[16px] sm:text-[18px] mb-6">
            Meanwhile, check out these fresh ideas:
          </p>
          {/* Button */}
          <Link href="/">
            <button className="bg-[#FF9F0D] text-white text-[16px] sm:text-[18px] font-bold px-4 sm:px-6 py-2 rounded hover:bg-[#e8890b]">
              Go Back to Home
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
