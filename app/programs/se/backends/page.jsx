import { Button } from "@/components/ui/button";
import { ChevronDown, Lock, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaSimplybuilt } from "react-icons/fa6";
import FAQCard from "../faq-card";

export default function Backend() {
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
                  Backend Development
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
                <Link href="/programs/se/sources/2">
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
                  src="/frontend/server.svg"
                  alt="Backend Development at Lupleg"
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
                This mentorship program is designed to guide aspiring backend
                developers through a comprehensive learning path over three
                months. The program covers fundamental and advanced topics,
                practical projects, and career guidance to help mentees become
                proficient in backend development.
              </p>
              <p>
                In this program, you will learn how to build scalable and secure
                backend applications using Node.js, Express, and{" "}
                <Link className="text-orange-400" href="/programs/se/databases">
                  MongoDB
                </Link>{" "}
                . You will also learn how to deploy your applications to the
                cloud using services like{" "}
                <Link className="text-orange-400" href="/programs/se/devops">
                  Heroku and AWS
                </Link>
                .
              </p>
              <p>
                By the end of the program, you will have built several backend
                applications and have a strong foundation in backend
                development. You will also have a portfolio of projects to show
                to potential employers.
              </p>

              <h2 className="text-xl font-semibold">What you will learn:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Node.js and Express</li>
                <li>RESTful APIs</li>
                <li>Database Design and Management</li>
                <li>Authentication and Authorization</li>
                <li>Deployment and Hosting</li>
              </ul>

              <h2 className="text-xl font-semibold">Prerequisites:</h2>
              <p>
                No prior knowledge of backend development is required. However,
                a basic understanding of programming concepts will be helpful.
                You should also have access to a computer with an internet
                connection.
              </p>

              <h2 className="text-xl font-semibold">
                Who should take this program:
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Beginners to backend development</li>
                <li>Students</li>
                <li>Professionals looking to switch to backend development</li>
                <li>Anyone interested in learning backend development</li>
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
                    <p>Get started with nodejs </p>
                    <p> Express basics</p>
                    <p> Implementing routes</p>
                    <p>Creating controllers</p>
                    <p>Creating models</p>
                    <p>Hundling middlewares</p>
                    <p>Creating services</p>
                    <p>Adding utils</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Database</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Authentication</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Authorization</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>CD/CI</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Testing</span>
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
