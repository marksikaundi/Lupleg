import { ArrowRight, Square } from "lucide-react";
import Link from "next/link";
import AboutSection from "@/components/sections/AboutSection";
import AboutPurpose from "@/components/sections/AboutPurpose";
import HowLupleg from "@/components/sections/HowLupleg";
import HelpUsBring from "@/components/sections/HelpUsBring";

export default function About() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-4 mt-16 relative ">
      <div className="absolute top-4 left-4 w-16 h-6 border-2 border-cyan-400 rotate-45"></div>
      <div className="absolute top-8 left-8 w-4 h-1 bg-[#2D1537] -rotate-45"></div>
      <div className="absolute top-4 right-4 w-4 h-4 bg-yellow-400"></div>
      <div className="absolute top-8 right-8 w-6 h-6">
        <Square className="text-[#2D1537]" />
      </div>
      <div className="text-center max-w-2xl">
        <div className="mb-4 flex justify-center">
          <div className="text-4xl text-[#2D1537] font-bold">
            {"{"}
            <span className="inline-block -mt-2">^</span>
            <span className="inline-block -mt-2 transform scale-y-[-1]">^</span>
            {"}"}
          </div>
        </div>
        <h1 className="text-5xl font-bold text-[#2D1537] mb-4">Lupleg</h1>
        <div className="flex justify-center mb-6">
          <svg
            width="60"
            height="10"
            viewBox="0 0 60 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5C10 -1.66667 20 -1.66667 29 5C38 11.6667 48 11.6667 57 5"
              stroke="#2D1537"
              strokeWidth="2"
            />
          </svg>
        </div>
        <p className="text-xl text-black-900 mb-8">
          We're building a place where anyone can learn and master
          <br />
          tech skills at balanced, without ever feeling lost or stupid.
        </p>
        <Link href="mailto:payment@lupleg.org">
          <button className="bg-[#2D1537] text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center justify-center transition-all hover:bg-[#2D1537] hover:shadow-lg">
            Donate to Lupleg
            <ArrowRight className="ml-2" />
          </button>
        </Link>
      </div>
      <AboutSection />
      <AboutPurpose />
      <HowLupleg />
      <HelpUsBring />
    </div>
  );
}
