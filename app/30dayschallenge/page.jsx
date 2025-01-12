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
              href="/30dayschallenge/hack"
              className="text-[#2D1537] hover:text-black font-extrabold h-full flex items-center flex-shrink-0"
            >
            Hack
            <FaFire/>

            </Link>
           
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Using Lupleg Section */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-[#2D1537] mb-4">
                Using Lupleg
              </h2>
              <p className="text-gray-600 mb-8">
                Learn how to make the make the most from your time on Lupleg.
                Find answers to all your questions, understand how to make the
                most out of mentoring, and discover how to be a great Lupleg
                citizen.
              </p>
              <Button
                asChild
                className="bg-[#2D1537] hover:bg-[#2D1537] text-white px-8 py-6 rounded-lg text-lg"
              >
                <Link href="/docs/using">Get started →</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/docs/hacker.svg"
                height="100"
                width="100"
                alt="Illustration of person using laptop"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Building Lupleg Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
            <div className="md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-[#2D1537] mb-4">
                Building Lupleg
              </h2>
              <p className="text-gray-600 mb-8">
                Learn how to make the make the most from your time on Lupleg.
                Find answers to all your questions, understand how to make the
                most out of mentoring, and discover how to be a great Lupleg
                citizen.
              </p>
              <Button
                asChild
                className="bg-[#2D1537] hover:bg-[#2D1537] text-white px-8 py-6 rounded-lg text-lg"
              >
                <Link href="/docs/building">Get started →</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/docs/build.svg"
                height="100"
                width="100"
                alt="Illustration of person using laptop"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Mentoring Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
            <div className="md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-[#2D1537] mb-4">
                Mentoring
              </h2>
              <p className="text-gray-600 mb-8">
                Learn how to make the make the most from your time on Lupleg.
                Find answers to all your questions, understand how to make the
                most out of mentoring, and discover how to be a great Lupleg
                citizen.
              </p>
              <Button
                asChild
                className="bg-[#2D1537] hover:bg-[#2D1537] text-white px-8 py-6 rounded-lg text-lg"
              >
                <Link href="/docs/mentoring">Get started →</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/docs/mentor.svg"
                height="100"
                width="100"
                alt="Illustration of person using laptop"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Community Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
            <div className="md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-[#2D1537] mb-4">
                Community
              </h2>
              <p className="text-gray-600 mb-8">
                Learn how the community works, how to get involved, and how to
                make the most of your time on Lupleg. Find answers to all your
                questions, understand how to make the most out of mentoring, and
                discover how to be a great Lupleg citizen.
              </p>
              <Button
                asChild
                className="bg-[#2D1537] hover:bg-[#2D1537] text-white px-8 py-6 rounded-lg text-lg"
              >
                <Link href="/docs/community">Get started →</Link>
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
