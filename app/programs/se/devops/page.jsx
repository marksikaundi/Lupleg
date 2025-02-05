import { Button } from "@/components/ui/button";
import { ChevronDown, Lock, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaCloud } from "react-icons/fa";
import FAQCard from "../faq-card";

export default function DevOps() {
  return (
    <div>
      <div className="min-h-screen bg-[#2D1537] text-gray-100">
        <header className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2D1537]"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <Link
              href="/programs/se"
              className="inline-flex items-center text-sm text-white mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              All Programs
            </Link>
            <div className="md:flex md:justify-between md:items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  DevOps for Beginners
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
                  <Link href="https://forum.devcircleafrica.com/forum/programming/">
                    <Button className="bg-white hover:bg-white text-[#2D1537]">
                      Start Learning
                    </Button>
                  </Link>
                  <Link href="https://mentor.lupleg.org">
                    <Button className=" bg-[#F3A833] text-white hover:bg-[#F3A833]">
                      <FaCloud className="mr-2 h-4 w-4" />
                      Join Community
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/frontend/cloud.svg"
                  alt="DevOps for Beginners at Lupleg"
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
                DevOps is a set of practices that combines software development
                (Dev) and IT operations (Ops). It aims to shorten the systems
                development life cycle and provide continuous delivery with high
                software quality. DevOps is complementary with Agile software
                development; several DevOps aspects came from Agile methodology.
              </p>
              <p>
                In the program, you will learn how to automate the process of IT
                operations, build, test, and deploy software applications. You
                will also learn how to use tools like Docker, Kubernetes, and
                Jenkins to automate the process of software development.
              </p>
              <p>
                The program will cover the basics of DevOps and provide you with
                a comprehensive learning path to become proficient in DevOps
                with AWS.
              </p>

              <h2 className="text-xl font-semibold">What you will learn:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Introduction to DevOps</li>
                <li>DevOps Principles</li>
                <li>DevOps Tools</li>
                <li>Continuous Integration and Deployment</li>
                <li>Infrastructure as Code</li>
                <li>Monitoring and Logging</li>
              </ul>

              <h2 className="text-xl font-semibold">Prerequisites:</h2>
              <p>
                No prior knowledge of{" "}
                <Link className="text-orange-400" href="/programs/se/backends">
                  backend development
                </Link>{" "}
                is required. However, a basic understanding of programming
                concepts will be helpful. You should also have access to a
                computer with an internet connection.
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
              <div className="bg-[#56425F] rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">
                  Contents
                  <span className="text-sm font-normal"> Sections</span>
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Introduction</span>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                  <div className="pl-4 space-y-2 text-white">
                    <p>1. What is DevOps?</p>
                    <p>2. Why use DevOps?</p>
                    <p>3. Adding DevOps to a Project</p>
                    <p>4. DevOps in Frameworks</p>
                    <p>5. Navigating DevOps Types</p>
                    <p>6. DevOps and Jenkins</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Continuous Integration</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Continuous Deployment</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Infrastructure as Code</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Monitoring and Logging</span>

                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Real-world projects</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
              <div className="bg-[#56425F] rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Coming soon</h2>
                <div className="bg-[#2D1537] rounded-lg p-8 flex flex-col items-center justify-center">
                  <div className=" bg-[#56425F] rounded-full p-4 mb-4">
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
