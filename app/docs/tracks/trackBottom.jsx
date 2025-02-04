"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TrackBottom() {
  const router = useRouter();

  const handleSignUp = () => {
    router.push(
      "https://mentor.lupleg.org/join/kn7cgky38v0nd89j0z17kgfesd74jj3t"
    );
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
              free 15 days JOIN with <code className="font-mono">B0798T</code>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleSignUp}
              size="lg"
              className="bg-[#2D1537] hover:bg-[#2D1537] text-white"
            >
              15 days free trial
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
