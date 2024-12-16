"use client";
import { ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { FaArrowDownLong } from "react-icons/fa6";

export default function FrontendHero() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("npm create astro@latest");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 bg-[#2D1537] ">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="bg-white text-[#2D1537] text-xs sm:text-sm font-medium px-3 py-2 rounded-full flex flex-wrap items-center justify-center gap-2 max-w-full">
            <span className="whitespace-nowrap">Free</span>
            <div className="hidden sm:block w-px h-4 bg-white"></div>
            <Link
              href="#ui"
              className="flex items-center hover:underline whitespace-nowrap"
            >
              <span className="sm:hidden">no hustle</span>
              <span className="hidden sm:inline">
                Lupleg is here to help you learn and build
              </span>
              <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
            </Link>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          UI coding Challenges
          <br />
          are now open & free
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-purple-200 mb-8">
          Lupleg is a platform where you can learn, build, and collaborate
          <br className="hidden sm:inline" /> on websites, blogs, e-commerce
          websites, and more.
        </p>

        <div className="flex flex-col items-center space-y-4">
          <Link
            href="#ui"
            className="bg-white text-[#2D1537] font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg hover:bg-purple-100 transition duration-300"
          >
            Join Now
          </Link>

          <div className="text-white animate-bounce  p-1 flex items-center space-x-2 max-w-full overflow-x-auto">
            <FaArrowDownLong className="mt-20 " />
          </div>
        </div>
      </div>
    </section>
  );
}
