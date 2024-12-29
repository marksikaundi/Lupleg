"use client";
import { ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function New() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("mark@lupleg.org");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 bg-gradient-to-br from-black via-black to-green-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="bg-green-700 text-white text-xs sm:text-sm font-medium px-3 py-2 rounded-full flex flex-wrap items-center justify-center gap-2 max-w-full">
            <span className="whitespace-nowrap">Beta</span>
            <div className="hidden sm:block w-px h-4 bg-green-500"></div>
            <Link
              href="https://menter.lupleg.org"
              className="flex items-center hover:underline whitespace-nowrap"
            >
              <span className="sm:hidden">Public Beta</span>
              <span className="hidden sm:inline">
                New experimental mentor platform
              </span>
              <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
            </Link>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          The platform for learning,
          <br />
          build and connect
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-purple-200 mb-8">
          Lupleg is a platform where you can learn, build, and collaborate
          <br className="hidden sm:inline" /> on websites, blogs, e-commerce ,
          hackathons and more.
        </p>

        <div className="flex flex-col items-center space-y-4 p-4">
          <Link
            href="/programs"
            className="bg-white text-green-950 font-semibold px-6 sm:px-8 py-0 sm:py-3 rounded-full text-base sm:text-lg hover:bg-purple-100 transition duration-300"
          >
            Get Started
          </Link>

          {/* <div className="bg-[#2D1537] rounded-lg p-2 flex items-center space-x-2 max-w-full overflow-x-auto">
            <code className="text-purple-200 font-mono text-xs sm:text-sm whitespace-nowrap">
              mark@lupleg.org
            </code>
            <button
              onClick={copyCommand}
              className="text-purple-200 hover:text-white transition-colors flex-shrink-0"
              aria-label="Copy command"
            >
              {copied ? (
                <Check className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Copy className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
