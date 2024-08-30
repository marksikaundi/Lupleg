import { LightbulbIcon, SquareIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import LuplegMentoring from "@/components/sections/LuplegMentoring";
import WhyBecomeMentor from "@/components/sections/WhyBecomeMentor";

export default function Component() {
  return (
    <div>
      <div className="relative w-full max-w-3xl mx-auto p-8 text-center mt-10">
        {/* Decorative elements */}
        <SquareIcon className="absolute top-4 left-4 text-yellow-400 w-6 h-6" />
        <div className="absolute top-8 right-8 w-4 h-4 bg-emerald-400 rotate-45" />
        <div className="absolute bottom-8 left-8 w-4 h-4 border-2 border-emerald-400" />
        <div className="absolute bottom-4 right-4 w-0 h-0 border-l-[12px] border-l-transparent border-t-[20px] border-t-amber-400 border-r-[12px] border-r-transparent" />

        {/* Main content */}
        <div className="mb-8 mt-16">
          <img
            src="/mentoring.svg?height=150&width=150"
            alt="People working together"
            className="mx-auto mb-6"
            width={150}
            height={150}
          />
          <h1 className="text-4xl font-bold mb-4 text-green-950">
            Share your knowledge with others
          </h1>
          <p className="text-lg mb-4">
            <span className="text-blue-600 font-medium">Mentoring</span> is a
            fun and rewarding way to reinforce your own learning, while helping
            others learn and discover things they don't know.{" "}
            <span className="text-green-800 font-medium">
              Mentoring also earns reputation.
            </span>
          </p>
        </div>

        {/* Info box */}
        <div className="bg-blue-100 p-4 rounded-lg mb-8">
          <p className="text-blue-800">
            Not sure if you can mentor effectively? Some of our best mentors
            worried too.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <Button className="bg-green-950 hover:bg-green-950 text-white px-6 py-2 rounded-full">
            Sign up to try mentoring
          </Button>
          <Button
            variant="outline"
            className="border-green-950 text-green-950 hover:bg-green-50 px-6 py-2 rounded-full"
          >
            Log in
          </Button>
        </div>

        {/* Lightbulb icon */}
        <LightbulbIcon className="absolute top-1/4 right-4 text-yellow-400 w-6 h-6" />
      </div>
      <LuplegMentoring />
      <WhyBecomeMentor />
    </div>
  );
}
