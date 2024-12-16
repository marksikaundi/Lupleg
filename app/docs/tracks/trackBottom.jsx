"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TrackBottom() {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("https://mentor.lupleg.org");
  };

  const handleExplore = () => {
    router.push("/programs");
  };

  return (
    <div className="min-h-screen text-white">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-8">
        <div className="mb-16">
          <div className="max-w-3xl mb-8">
            <h1 className="text-[#2D1537] text-4xl md:text-5xl font-bold mb-6">
              Code practice and mentorship for everyone
            </h1>
            <p className="text-[#2D1537] text-lg md:text-xl opacity-90">
              Develop fluency in programming languages with our unique blend of
              learning, practice and mentoring. Lupleg is fun, effective and
              100% free, for basics use.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleSignUp}
              size="lg"
              className="bg-[#2D1537] hover:bg-[#2D1537] text-white"
            >
              Sign up for free
            </Button>
            <Button
              onClick={handleExplore}
              size="lg"
              className="text-[#2D1537] hover:text-[#2D1537] bg-white hover:bg-white border border-[#2D1537]"
            >
              Explore programs
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
