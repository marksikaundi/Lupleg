import { Button } from "@/components/ui/button";
import { ChevronDown, Lock, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FAQCard from "../faq-card";
import { MdForum } from "react-icons/md";

export default function DigitalMarketing() {
  return (
    <div>
      <div className="min-h-screen bg-[#2D1537] text-white">
        <header className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2D1537]"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <Link
              href="/programs/digital-skills"
              className="inline-flex items-center text-sm text-white mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              All Programs
            </Link>
            <div className="md:flex md:justify-between md:items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Digital Marketing
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
                  <Link href="https://forum.devcircleafrica.com/forum/digital-marketing/">
                    <Button className="bg-white hover:bg-white text-[#2D1537]">
                      Start Learning
                    </Button>
                  </Link>
                  <Link href="https://mentor.lupleg.org">
                    <Button className=" bg-[#F3A833] text-white hover:bg-[#F3A833]">
                      <MdForum className="mr-2 h-4 w-4" />
                      Join Community
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/skills/marketing.svg"
                  alt="Digital Marketing"
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
                The Digital Marketing program is designed to help you learn how
                to use Digital Marketing navigate around the digital space. Get
                started today with our use to use learning approach.
              </p>
              <p>
                The program will cover the basics of Digital Marketing and
                provide you with a comprehensive learning path to become
                proficient in Digital Marketing.
              </p>
              <p>
                The program is designed for beginners and will cover the basics
                of Digital Marketing. You will learn how to use Digital
                Marketing applications and tools to create and manage your own
                Digital Marketing campaigns and many more.
              </p>

              <h2 className="text-xl font-semibold">What you will learn:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Introduction to Digital Marketing</li>
                <li>SEO and SEM</li>
                <li>Email Marketing</li>
                <li>Social Media Marketing</li>
                <li>Technical Writing</li>
                <li>Content Marketing</li>
                <li>Google Analytics</li>
              </ul>

              <h2 className="text-xl font-semibold">Prerequisites:</h2>
              <p>
                No prior knowledge of digital marketing is required. However, a
                basic understanding of digital concepts will be helpful. You
                should also have access to a computer with an internet
                connection.
              </p>

              <h2 className="text-xl font-semibold">
                Who should take this program:
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Beginner in digital marketing</li>
                <li>Students</li>
                <li>Professionals looking to switch career</li>
                <li>Anyone interested in learning digital marketing</li>
              </ul>

              <h2 className="text-xl font-semibold">Duration:</h2>
              <p>04 weeks</p>
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
                    <p>What is Digital Marketing?</p>
                    <p>Why Digital Marketing?</p>
                    <p>How to get started with Digital Marketing</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>SEO and SEM</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Email Marketing</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Social Media Marketing</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span>Content Marketing</span>
                  <ChevronDown className="w-5 h-5" />
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <span>Real-world projects</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
              <div className="bg-[#56425F] rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Coming soon</h2>
                <div className="bg- bg-[#2D1537] rounded-lg p-8 flex flex-col items-center justify-center">
                  <div className="  bg-[#56425F]  rounded-full p-4 mb-4">
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
