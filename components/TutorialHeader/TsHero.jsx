import Image from "next/image";
import { GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

export default function TsHero() {
  return (
    <div className=" relative bg-gray-900 text-white p-8 overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + "px",
              height: Math.random() * 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex justify-between items-center">
        <div className="space-y-6">
          <a
            href="/typescript"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            ← All Tutorials
          </a>
          <h1 className="text-5xl font-bold leading-tight">
            Solving
            <br />
            TypeScript Errors
          </h1>
          <div className="flex items-center  space-x-4">
            <Image
              src="/mark.jpg"
              alt="Mark Sikaundi"
              width={80}
              height={80}
              className="rounded-full w-16 h-16 mr-3 sm:mr-6"
            />
            <span>Mark Sikaundi</span>
          </div>
          <div className="flex space-x-4">
            <Link href="https://app.lupleg.org">
              <Button className="bg-green-400 hover:bg-green-500 text-green-900">
                Start Learning
              </Button>
            </Link>
            <Link href="https://github.com/Lupleg">
              <Button className=" border border-green-500 text-white hover:bg-gray-800">
                <FaGithub className="mr-2 h-4 w-4" />
                Code
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative w-80 h-80">
          <Image
            src="/ts.webp"
            alt="TypeScript Logo"
            width={320}
            height={320}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-radial from-red-500/30 to-transparent rounded-full" />
        </div>
      </div>
    </div>
  );
}
