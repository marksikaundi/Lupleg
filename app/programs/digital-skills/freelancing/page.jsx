import { Button } from "@/components/ui/button";
import { ChevronDown, Lock, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaSimplybuilt } from "react-icons/fa6";
import FAQCard from "../faq-card";

export default function Freelance() {
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
              href="/programs/digital-skills"
              className="inline-flex items-center text-sm text-green-400 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              All Programs
            </Link>
            <div className="md:flex md:justify-between md:items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Freelancing for Beginners
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
                <Link href="/programs/digital-skills/sources/4">
                    <Button className="bg-green-400 hover:bg-green-500 text-green-900">
                      Start Learning
                    </Button>
                  </Link>
                  <Link href="https://forum.devcircleafrica.com/forum/freelancing-gigs/">
                    <Button className=" border border-green-500 text-white hover:bg-gray-800">
                      <FaSimplybuilt className="mr-2 h-4 w-4" />
                      Join Community
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/skills/freelance.svg"
                  alt="Freelancing"
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
                Learn how to start freelancing and build a successful career as
                a freelancer. This program will teach you the skills you need to
                succeed as a freelancer, including how to find clients, manage
                projects & how to apply for gigs.
              </p>
              <p>
                The program is designed for everyone from the beginners
                perspective to advanced level. The core skills you will gain
                from this program, will give you 100% success career as a
                freelancer. You will learn by doing and working on practical
                assignments. You will also have access to a mentor who will
                guide you through the program and provide feedback on your
                proctical assessments.
              </p>
              <p>
                By the end of the program, you will have the skills and
                knowledge you need to start freelancing and build a successful
                career as a freelancer. You will also receive a certificate of
                completion to showcase your new skills to potential clients.
              </p>

              <h2 className="text-xl font-semibold">What you will learn:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Introduction to freelancing</li>
                <li>Finding clients</li>
                <li>Managing projects</li>
                <li>Building a portfolio</li>
                <li>Setting your rates</li>
                <li>Marketing yourself</li>
              </ul>

              <h2 className="text-xl font-semibold">Prerequisites:</h2>
              <p>
                No prior knowledge of freelancing is required. However,
                a basic understanding or some concepts in freelancing will be helpful.
                You should also have access to a computer with an internet
                connection.
              </p>

              <h2 className="text-xl font-semibold">
                Who should take this program:
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Beginners who want to be freelancers</li>
                <li>Students</li>
                <li>Professionals looking to start freelancing</li>
                <li>Anyone interested in freelancing</li>
              </ul>

              <h2 className="text-xl font-semibold">Duration:</h2>
              <p>04 weeks</p>
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
                    <p>What is Freelancing?</p>
                    <p>Why Freelancing?</p>
                    <p>How to get started with Freelancing</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Getting Started</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Building a Portfolio</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Setting your rates</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Marketing yourself</span>

                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Real-world projects</span>
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
