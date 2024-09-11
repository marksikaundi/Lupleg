import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WelcomeHero() {
  return (
    <div className="flex flex-col lg:flex-row ml-6 items-center justify-between p-4 sm:p-8 bg-white">
      <div className="w-full lg:max-w-2xl mt-20 mb-8 pt-10 lg:mb-0">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          Ready for,
          <br />
          <span className="bg-gradient-to-r from-[#F3A833] via-blue-500 to-teal-500 text-transparent bg-clip-text">
            Enterprise Learning.
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
          Lupleg is the fastest way you can learn and build ready softwares.
          <br className="hidden sm:inline" />
          Get started with our mentorship program today.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
          <Link href="/programs">
            <Button className="w-full sm:w-auto bg-green-950 hover:bg-green-950 text-white px-6 py-3 rounded-full text-md">
              Get started
            </Button>
          </Link>
          <Link
            href="mailto:mark@lupleg.org"
            className="text-gray-600 hover:text-gray-800 flex items-center hover:underline"
          >
            Talk to an expert
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
        <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 hover:border-2 rounded-full text-sm">
          <span className="text-gray-600">Lupleg acquires Warrant</span>
          <Link
            href="/resources/announcements"
            className="text-[#F3A833] hover:text-[#F3A833] flex items-center"
          >
            Read the announcement
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
      {/* <div className="relative w-full max-w-md lg:w-96 h-64 sm:h-80 lg:h-96 mt-8 lg:mt-0 hidden sm:block">
        <img
          src="/placeholder.svg?height=384&width=384"
          alt="Enterprise Ready Illustration"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div> */}
    </div>
  );
}
