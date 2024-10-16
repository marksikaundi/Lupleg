import { Button } from "@/components/ui/button";
import { ChevronDown, Lock, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaSimplybuilt } from "react-icons/fa6";
import FAQCard from "../faq-card";

export default function Frontend() {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <header className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <Link
              href="/programs/se"
              className="inline-flex items-center text-sm text-green-400 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              All Programs
            </Link>
            <div className="md:flex md:justify-between md:items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Frontend Development
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
                  <Link href="/learning/frontend">
                    <Button className="bg-green-400 hover:bg-green-500 text-green-900">
                      Start Learning
                    </Button>
                  </Link>
                  <Link href="https://forum.devcircleafrica.com/forum/programming/">
                    <Button className=" border border-green-500 text-white hover:bg-gray-800">
                      <FaSimplybuilt className="mr-2 h-4 w-4" />
                      Join Community
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/frontend/html.svg"
                  alt="Frontend Development at Lupleg"
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
                Frontend Development is a program that teaches you how to build
                a modern web application using the latest technologies. You will
                learn how to build a responsive and accessible web application
                using HTML, CSS, and JavaScript. You will also learn how to use
                popular frontend frameworks and Libraries like React, Nextjs,
                and Vue.js to build interactive web applications.
              </p>
              <p>
                The program will cover the basics of frontend development and
                gradually move to more advanced topics like state management,
                routing, and authentication. You will also learn how to use
                version control systems like Git and GitHub to collaborate with
                other developers.
              </p>
              <p>
                By the end of the program, you will have built a portfolio of
                projects that you can showcase to potential employers. You will
                also have the skills to work as a frontend developer in a
                professional setting.
              </p>

              <h2 className="text-xl font-semibold">What you will learn:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Git and GitHub</li>
              </ul>

              <h2 className="text-xl font-semibold">Prerequisites:</h2>
              <p>
                No prior knowledge of frontend development is required. However,
                a basic understanding of programming concepts will be helpful.
                You should also have access to a computer with an internet
                connection.
              </p>

              <h2 className="text-xl font-semibold">
                Who should take this program:
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Beginner web developers</li>
                <li>Students</li>
                <li>Professionals looking to switch to frontend development</li>
                <li>Anyone interested in learning frontend development</li>
              </ul>

              <h2 className="text-xl font-semibold">Duration:</h2>
              <p>12 weeks</p>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">
                  Contents
                  <span className="text-sm font-normal"> Sections</span>
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Introduction</span>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                  <div className="pl-4 space-y-2 text-gray-400">
                    <p>1. What is JavaScript?</p>
                    <p>2. Why use JavaScript with React?</p>
                    <p>3. Adding React to a JavaScript Project</p>
                    <p>4. JavaScript in React Frameworks</p>
                    <p>5. Navigating JSX Types</p>
                    <p>6. JavaScript and React Hooks</p>
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

                <div className="mt-4 flex justify-between items-center">
                  <span>States</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Props</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Routing</span>
                  <ChevronDown className="w-5 h-5" />
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <span>Deployment</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Coming soon</h2>
                <div className="bg-gray-700 rounded-lg p-8 flex flex-col items-center justify-center">
                  <div className="bg-green-600 rounded-full p-4 mb-4">
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
      <FAQCard />
    </div>
  );
}
