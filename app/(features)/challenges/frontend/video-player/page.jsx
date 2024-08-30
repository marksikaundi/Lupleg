import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Help from "@/components/FeaturesCards/Help";

export default function Navbar() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Link
        href="/challenges/frontend"
        className="inline-flex items-center text-sm text-green-900 hover:text-green-800 mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 mb-6">Navbar UI 001</h1>

      <div className="flex items-center mb-6">
        <Image
          src="/mark.jpg"
          alt="Mark Sikaundi"
          width={40}
          height={40}
          className="rounded-full w-10 h-10 mr-3"
        />
        <div>
          <p className="font-medium text-gray-900">Mark Sikaundi </p>
          <p className="text-sm text-gray-500">August 24, 2024</p>
        </div>
      </div>

      <p className="text-gray-700 mb-8">
        Once you join Lupleg learning community, you will have access to a wide
        range of resources and support to help you achieve your goals. We offer
        a range of services to help you succeed, including:{" "}
        <Link href="/all-mentorships">
          <span className="text-[#F3A833]">
            mentorships, tutoring, academic & career advising
          </span>
        </Link>
        , and more. We also offer a range of workshops and events to help you
        develop your skills and build your network. Our goal is to help you
        succeed in your studies and achieve your goals. We look forward to
        welcoming you to our community!
      </p>

      <div className="flex justify-center space-x-2 mb-8">
        <div className="w-2 h-2 bg-[#F3A833] rounded-full"></div>
        <div className="w-2 h-2 bg-[#F3A833] rounded-full"></div>
        <div className="w-2 h-2 bg-[#F3A833] rounded-full"></div>
      </div>

      <div className="bg-purple-100 p-8 rounded-lg mb-8">
        <div className="flex justify-center items-center space-x-8">
          <div className="bg-white p-4 rounded-full shadow-lg">
            <div className="w-16 h-16 bg-[#F3A833] rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-sm transform rotate-45"></div>
            </div>
          </div>
          <div className="text-4xl font-bold text-[#F3A833]">+</div>
          <div className="bg-white p-4 rounded-full shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-8 bg-[#F3A833] rounded-sm flex items-center justify-center">
                <div className="w-6 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 mb-4">
        Today we are excited to announce that Lupleg soon is opening some
        scholarship opportunities for students who are interested in learning
        more about technology and software development. We are partnering with
        Warrant to provide scholarships to students who are passionate about
        technology and want to learn more about software development.{" "}
      </p>

      <p className="text-gray-700 mb-8">
        The scholarships will cover the cost of tuition for the Lupleg learning
        community, as well as provide additional support and resources to help
        students succeed. We are excited to partner with Warrant to provide
        these scholarships, and we look forward to welcoming students to our
        community.
      </p>

      <Help />
    </div>
  );
}
