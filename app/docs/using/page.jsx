import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function Using() {
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
              className=" text-[#2D1537] border-b-2 border-[#2D1537] hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              Using Lupleg
            </Link>
            <Link
              href="/docs/building"
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0"
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
            <div className="space-y-2">
              <Link
                href="/docs/using"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Using
              </Link>
              <Link
                href="/docs/using/abuse"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Abuse
              </Link>
              <Link
                href="/docs/using/editions"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Editions
              </Link>
              <Link
                href="/docs/using/legal"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Legal
              </Link>
              <Link
                href="/docs/using/feedbacks"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Feedbacks
              </Link>
              <Link
                href="/docs/using/licenses"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Licenses
              </Link>

              <Link
                href="/docs/using/options"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Options
              </Link>

              <Link
                href="/docs/using/solving"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Solving
              </Link>
            </div>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-[#2D1537] mb-4">
              Using Lupleg
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn how to make the most of our experience on Lupleg
            </p>

            {/* Decorative Wave */}
            <div className="mb-8">
              <svg className="text-[#2D1537]" viewBox="0 0 100 20" width="100">
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
                  href="/docs/using/solving"
                  className="text-[#2D1537] hover:text-[#2D1537]"
                >
                  Solving Problems
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/using/options"
                  className="text-[#2D1537] hover:text-[#2D1537]"
                >
                  Options
                </Link>
              </li>

              <li>
                <Link
                  href="/docs/using/editions"
                  className="text-[#2D1537] hover:text-[#2D1537]"
                >
                  Edition Specifics
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="text-[#2D1537] hover:text-[#2D1537]"
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/using/conduct"
                  className="text-[#2D1537] hover:text-[#2D1537]"
                >
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/using/feedbacks"
                  className="text-[#2D1537] hover:text-[#2D1537]"
                >
                  Getting Feedback
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/using/lecenses"
                  className="text-[#2D1537] hover:text-[#2D1537]"
                >
                  Licenses and Options
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#2D1537] hover:text-[#2D1537]"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/using/abuse"
                  className="text-[#2D1537] hover:text-[#2D1537]"
                >
                  Report Abuse
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/using/legal"
                  className="text-[#2D1537] hover:text-[#2D1537]"
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
