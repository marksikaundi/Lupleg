import { Button } from "@/components/ui/button";
import { ChevronDown, Lock, ArrowLeft, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function STError() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <a
            href="/typescript"
            className="inline-flex items-center text-sm text-[#2D1537] mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            All Tutorials
          </a>
          <div className="md:flex md:justify-between md:items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                TypeScript Error Handling Tutorial
              </h1>
              <div className="flex items-center mb-6">
                <Image
                  src="/mark.jpg"
                  alt="Mark Sikaundi"
                  width={40}
                  height={40}
                  className="rounded-full w-16 h-16 mr-3 sm:mr-6"
                />
                <span>Mark Sikaundi</span>
              </div>
              <div className="flex space-x-4">
                <Link href="https://app.lupleg.org">
                  <Button className="bg-[#2D1537] hover:bg-green-500 text-[#2D1537]">
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
            <div className="hidden md:block">
              <Image
                src="/ts.webp"
                alt="TypeScript Illustration"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p>
              TypeScript's features and developer experience make a great
              combination with React, but it can be confusing to get started.
            </p>
            <p>
              What's the best way to type component props? What are these weird{" "}
              <code className="bg-gray-800 px-1 rounded">useRef</code> errors?
            </p>
            <p>That's where this React with TypeScript tutorial comes in!</p>
            <p>
              Starting from the very beginning of bringing TS support to a React
              project, you'll soon find yourself properly typing hooks and
              mastering components. You'll learn everything you need to know to
              get productive with React and TypeScript.
            </p>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">
                Tutorial topics include:
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Reading React's type definitions to debug errors and ensure
                  correct usage
                </li>
                <li>
                  Defining props for custom and{" "}
                  <code className="bg-gray-800 px-1 rounded">React.FC</code>{" "}
                  function components
                </li>
                <li>Putting TypeScript's inference to work for you</li>
                <li>Supporting component children</li>
                <li>Typing and overriding event handlers</li>
                <li>
                  Utilizing{" "}
                  <code className="bg-gray-800 px-1 rounded">
                    ComponentProps
                  </code>{" "}
                  to extract properties from imported components or HTML DOM
                  elements
                </li>
                <li>
                  Utilizing ComponentProps to extract properties from imported
                  components or HTML DOM elements
                </li>
                <li>
                  Understanding the APIs and typing for useState, useCallback,
                  useEffect, and other React Hooks. By the end of this workshop,
                  you'll be confident when using React with TypeScript in your
                  own projects!
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">
                Contents
                <span className="text-sm font-normal">3 Sections</span>
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Introduction</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="pl-4 space-y-2 text-gray-400">
                  <p>1. Adding React to a TypeScript Project</p>
                  <p>2. TypeScript in React Frameworks</p>
                  <p>3. Navigating JSX Types</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span>Components</span>
                <ChevronDown className="w-5 h-5" />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span>Hooks</span>
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Coming soon</h2>
              <div className="bg-gray-700 rounded-lg p-8 flex flex-col items-center justify-center">
                <div className="bg-[#2D1537] rounded-full p-4 mb-4">
                  <Lock className="w-8 h-8 " />
                </div>
                <p className="text-center">
                  Complete all lessons to unlock this certificate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
