import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoHome } from "react-icons/io5";
import { FaFire } from "react-icons/fa";

import Image from "next/image";

export default function CodeDaysChallenges() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <nav className="border-b sticky top-0 bg-white z-10">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex items-center h-16 space-x-8 whitespace-nowrap">
            <Link
              href="/30dayschallenge"
              className="text-[#2D1537] hover:text-[#2D1537] flex-shrink-0"
            >
              {/* <Home className="h-5 w-5" /> */}
              <IoHome className="h-5 w-5" />
            </Link>
            <Link
              href="/30dayschallenge/ml"
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              Machine Learning
            </Link>
            <Link
              href="/30dayschallenge/deep-learning"
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              Deep Learning
            </Link>
            <Link
              href="/30dayschallenge/tk"
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              Tensorflow & Keras
            </Link>
            <Link
              href="/30dayschallenge/pf"
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              PyTorch & FastAI
            </Link>

            <Link
              href="/30dayschallenge/#hack"
              className="text-[#2D1537] hover:text-black font-extrabold h-full flex items-center flex-shrink-0"
            >
              Hack
              <FaFire />
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Machine Learning Section */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-[#2D1537] mb-4">
                Machine Learning
              </h2>
              <p className="text-gray-600 mb-8">
                Key concept of Machine Learning, how to get started, and how to
                make the most of your time on Lupleg. Find answers to all your
                questions, understand how to make the most out of mentoring, and
                discover how to be a great Lupleg citizen.
              </p>
              <Button
                asChild
                className="bg-[#2D1537] hover:bg-[#2D1537] text-white px-8 py-6 rounded-lg text-lg"
              >
                <Link href="#">Get started →</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/30/Machine.png"
                height="100"
                width="100"
                alt="Illustration of person using laptop"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Deep Learning Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
            <div className="md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-[#2D1537] mb-4">
                Deep Learning
              </h2>
              <p className="text-gray-600 mb-8">
                Solve real-world problems with Deep Learning, how to get started
                with Deep Learning, and how to make the most of your time on the
                platform. Find answers to all your questions, understand how to
                make the most out of mentoring, and discover how to be a great
                Lupleg citizen.
              </p>
              <Button
                asChild
                className="bg-[#2D1537] hover:bg-[#2D1537] text-white px-8 py-6 rounded-lg text-lg"
              >
                <Link href="/30dayschallenge/deep-learning">Get started →</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/30/Deep.svg"
                height="100"
                width="100"
                alt="Illustration of person using laptop"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Tensorflow Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
            <div className="md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-[#2D1537] mb-4">
                Tensorflow & Keras
              </h2>
              <p className="text-gray-600 mb-8">
                Learn how to build models with Tensorflow & Keras, how to get
                started, and how to make the most of your time on Lupleg. Find
                answers to all your questions, understand how to make the most
                out of mentoring, and discover how to be a great Lupleg citizen.
              </p>
              <Button
                asChild
                className="bg-[#2D1537] hover:bg-[#2D1537] text-white px-8 py-6 rounded-lg text-lg"
              >
                <Link href="#">Get started →</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/30/Tensorflow.png"
                height="100"
                width="100"
                alt="Illustration of person using laptop"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Pytorch Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
            <div className="md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-[#2D1537] mb-4">
                PyTorch & FastAI
              </h2>
              <p className="text-gray-600 mb-8">
                Learn how to build models with PyTorch & FastAI, how to get
                started, and how to make the most of your time on Lupleg. Find
                answers to all your questions, understand how to make the most
                out of mentoring, and discover how to be a great Lupleg citizen.
              </p>
              <Button
                asChild
                className="bg-[#2D1537] hover:bg-[#2D1537] text-white px-8 py-6 rounded-lg text-lg"
              >
                <Link href="#">Get started →</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/30/Pytorch.webp"
                height="100"
                width="100"
                alt="Illustration of person using laptop"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Hackathon Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
            <div className="md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-[#2D1537] mb-4">
                Lupleg Hackathon
              </h2>
              <p className="text-gray-600 mb-8">
                This is the Lupleg Hackathon, where you can participate in
                coding challenges, hackathons, and other events to win prizes.
                Find answers to all your questions, understand how to make the
                most out of mentoring, and discover how to be a great Lupleg
                citizen.
              </p>
              <Button
                asChild
                className="bg-[#2D1537] hover:bg-[#2D1537] text-white px-8 py-6 rounded-lg text-lg"
              >
                <Link href="#">Get started →</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/docs/community.svg"
                height="100"
                width="100"
                alt="Illustration of person using laptop"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
