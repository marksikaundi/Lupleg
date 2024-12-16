import Link from "next/link";
import { ChevronDown, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoHome } from "react-icons/io5";

export default function Building() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <nav className="border-b sticky top-0 bg-white z-10">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex items-center h-16 space-x-8 whitespace-nowrap">
            <Link
              href="/docs"
              className="text-gray-600 hover:text-gray-900 flex-shrink-0"
            >
              <IoHome className="h-5 w-5" />
            </Link>
            <Link
              href="/docs/using"
              className=" text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              Using Lupleg
            </Link>
            <Link
              href="/docs/building"
              className=" text-[#2D1537] border-b-2 border-[#2D1537] hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              Building Lupleg
            </Link>
            <Link
              href="/docs/mentoring"
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              Mentoring
            </Link>
            <Link
              href="/docs/community"
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              Community
            </Link>
            <Link
              href="/docs/tracks"
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              Track Specific
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex pt-16">
        {" "}
        {/* Add pt-16 here */}
        {/* Sidebar */}
        <aside className="w-64 border-r p-4 hidden md:block">
          <nav className="space-y-4">
            <div className="font-semibold text-purple-600">Using Lupleg</div>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-between">
                Settings and options
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Button variant="ghost" className="w-full justify-between">
                Getting Feedback
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Button variant="ghost" className="w-full justify-between">
                Solving exercises
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Button variant="ghost" className="w-full justify-between">
                Legal Information
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Contact Us
              </Link>
              <Link
                href="/report-abuse"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Report Abuse
              </Link>
              <Link
                href="/getting-started"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Getting Started
              </Link>
              <Link
                href="/faq"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Frequently asked questions
              </Link>
              <Button variant="ghost" className="w-full justify-between">
                Licenses used on Lupleg
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Button variant="ghost" className="w-full justify-between">
                The Various editions of Lupleg
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Button variant="ghost" className="w-full justify-between">
                Product
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-purple-900 mb-4">
              Using Lupleg
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn how to make the most of our experience on Lupleg
            </p>

            {/* Decorative Wave */}
            <div className="mb-8">
              <svg className="text-purple-600" viewBox="0 0 100 20" width="100">
                <path
                  d="M0 10 Q25 20 50 10 T100 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <p className="text-gray-700 mb-8">
              These documents describe how to make the most of your experience
              on Lupleg.
            </p>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/getting-started"
                  className="text-purple-600 hover:text-purple-700"
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-purple-600 hover:text-purple-700"
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/solving-exercises"
                  className="text-purple-600 hover:text-purple-700"
                >
                  Solving Exercises
                </Link>
              </li>
              <li>
                <Link
                  href="/getting-feedback"
                  className="text-purple-600 hover:text-purple-700"
                >
                  Getting Feedback
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="text-purple-600 hover:text-purple-700"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-purple-600 hover:text-purple-700"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/report-abuse"
                  className="text-purple-600 hover:text-purple-700"
                >
                  Report Abuse
                </Link>
              </li>
              <li>
                <Link
                  href="/legal-policies"
                  className="text-purple-600 hover:text-purple-700"
                >
                  Legal Policies
                </Link>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
