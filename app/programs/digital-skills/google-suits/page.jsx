import { Button } from "@/components/ui/button";
import { ChevronDown, Lock, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaSimplybuilt } from "react-icons/fa6";
import FAQCard from "../faq-card";

export default function GSuits() {
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
                  Google Workspace 101
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
                  <Link href="/programs/digital-skills/sources/2">
                    <Button className="bg-green-400 hover:bg-green-500 text-green-900">
                      Start Learning
                    </Button>
                  </Link>
                  <Link href="https://forum.devcircleafrica.com/forum/office365/">
                    <Button className=" border border-green-500 text-white hover:bg-gray-800">
                      <FaSimplybuilt className="mr-2 h-4 w-4" />
                      Join Community
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/skills/docs.svg"
                  alt="Google Suits"
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
                Google Workspace is a suite of cloud computing, productivity,
                and collaboration tools developed by Google. The suite includes
                Gmail, Google Drive, Google Docs, Google Sheets, Google Slides,
                Google Forms, Google Sites, and Google Meet.
              </p>
              <p>
                In this program, you will learn how to use Google Workspace to
                be more productive and collaborate with your team. You will
                learn how to create and share documents, spreadsheets, and
                presentations, and how to use Google Meet for video
                conferencing.
              </p>
              <p>
                The program is designed to be hands-on and proctical. You
                will learn by doing, with practical exercises and real-world
                projects that will help you build your skills and confidence.
              </p>

              <h2 className="text-xl font-semibold">What you will learn:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Introduction to Google Workspace</li>
                <li>Using Gmail and Google Drive</li>
                <li>
                  Creating and sharing documents, spreadsheets, and
                  presentations
                </li>
                <li>Using Google Meet for video conferencing</li>
                <li>Collaborating with your team</li>
              </ul>

              <h2 className="text-xl font-semibold">Prerequisites:</h2>
              <p>
                No prior experience with Google Workspace is required. This
                program is designed for beginners.
              </p>

              <h2 className="text-xl font-semibold">
                Who should take this program:
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Beginners</li>
                <li>Students</li>
                <li>Professionals </li>
                <li>Anyone interested in Google Workspace</li>
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
                    <p>What is Google Workspace?</p>
                    <p>Why use Google Workspace?</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Getting Started</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Using Gmail and Google Drive</span>
                  <ChevronDown className="w-5 h-5" />
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <span>
                    Creating and sharing documents, sheets, and slides
                  </span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Using Google Meet for video conferencing</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Collaborating with your team</span>
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
