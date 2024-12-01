import { LightbulbIcon, SquareIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import LuplegMentoring from "@/components/sections/LuplegMentoring";
import WhyBecomeMentor from "@/components/sections/WhyBecomeMentor";
import Link from "next/link";

export default function Mentoring() {
  return (
    <div>
      <div className="relative w-full max-w-3xl mx-auto p-8 text-center mt-10">
        <SquareIcon className="absolute top-4 left-4 text-yellow-400 w-6 h-6" />
        <div className="absolute top-8 right-8 w-4 h-4 bg-[#2D1537] rotate-45" />
        <div className="absolute bottom-8 left-8 w-4 h-4 border-2 border-[#2D1537]" />
        <div className="absolute bottom-4 right-4 w-0 h-0 border-l-[12px] border-l-transparent border-t-[20px] border-t-amber-400 border-r-[12px] border-r-transparent" />

        <div className="mb-8 mt-16">
          <img
            src="/mentoring.svg?height=150&width=150"
            alt="People working together"
            className="mx-auto mb-6"
            width={150}
            height={150}
          />
          <h1 className="text-4xl font-bold mb-4 text-[#2D1537]">
            Share your knowledge with others
          </h1>
          <p className="text-lg mb-4">
            <Link href="https://mentor.lupleg.org/auth">
              <span className="text-[#2D1537] font-medium">Mentoring</span> at
              Lupleg{" "}
            </Link>
            is a fun and rewarding way to reinforce your own learning, while
            helping others learn and discover things they don't know.{" "}
            <span className="text-[#2D1537] font-medium">
              Mentoring also earns reputation.
            </span>
          </p>
        </div>

        <div className="bg-blue-100 p-2 rounded-lg mb-8">
          <p className="text-[#2D1537]">
            Not sure if you can mentor effectively? Some of our best mentors
            worried too.
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Link href="https://mentor.lupleg.org/auth">
            <Button className="bg-[#2D1537] hover:bg-[#2D1537] text-white px-6 py-2 rounded-full">
              Sign up to try mentoring
            </Button>
          </Link>
          <Link href="https://mentor.lupleg.org/auth">
            <Button
              variant="outline"
              className="border-[#2D1537] text-[#2D1537] hover:bg-green-50 px-6 py-2 rounded-full"
            >
              Log in
            </Button>
          </Link>
        </div>

        <LightbulbIcon className="absolute top-1/4 right-4 text-yellow-400 w-6 h-6" />
      </div>
      <LuplegMentoring />
      <WhyBecomeMentor />
    </div>
  );
}
