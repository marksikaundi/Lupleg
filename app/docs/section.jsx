import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoDocuments } from "react-icons/io5";

import Image from "next/image";

export default function Section() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center items-center">
            <IoDocuments className="text-lg bg-gray-200 border size-20 border-gray-400 p-4 rounded-full" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            Welcome to Lupleg&apos;s docs 👋
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-12">
            Find out everything you need to know about using and contributing to
            Lupleg.
          </p>

          {/* Decorative Wave */}
          <div className="mb-16">
            <svg
              className="mx-auto text-purple-600"
              viewBox="0 0 100 20"
              width="100"
            >
              <path
                d="M0 10 Q25 20 50 10 T100 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Using Lupleg Section */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-purple-900 mb-4">
                Using Lupleg
              </h2>
              <p className="text-gray-600 mb-8">
                Learn how to make the make the most from your time on Lupleg.
                Find answers to all your questions, understand how to make the
                most out of mentoring, and discover how to be a great Lupleg
                citizen.
              </p>
              <Button
                asChild
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-lg text-lg"
              >
                <Link href="/get-started">Get started →</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/docs/hacker.svg"
                height="400"
                width="400"
                alt="Illustration of person using laptop"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
