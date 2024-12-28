import { Plus } from "lucide-react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function GoodMember() {
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
              className=" text-[#2D1537] border-b-2 border-[#2D1537] hover:text-gray-900 h-full flex items-center flex-shrink-0"
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
        {/* Sidebar */}
        <aside className="w-64 border-r p-4 hidden md:block">
          <nav className="space-y-4">
            <div className="space-y-2">
              <Link
                href="/docs/community"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Community
              </Link>
              <Link
                href="/docs/community/contributors"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Contributors
              </Link>
              <Link
                href="/docs/community/maintainers"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Maintainers
              </Link>
              <Link
                href="/docs/community/administrators"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Administrators
              </Link>
              <Link
                href="/docs/community/gmember"
                className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Good Member
                <span className="text-[#2D1537]">
                  <Plus />
                </span>
              </Link>
            </div>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-[#2D1537] mb-4">
              Good Member Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              This guide covers the basics of being a good community member in
              the Lupleg community.
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

            <p id="community" className="text-gray-700 mb-8">
              Being a good member of the Lupleg community is important to us.
              Here are some tips to help you be a good member of the community.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Be Respectful
            </h2>
            <p className="text-gray-700 mb-8">
              Being respectful to other community members is important. We want
              to create a welcoming and inclusive community where everyone feels
              safe and respected.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Be Helpful
            </h2>
            <p className="text-gray-700 mb-8">
              Helping others in the community is a great way to contribute. If
              you see someone asking for help, try to help them out. If you have
              a question, don't be afraid to ask for help.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Be Positive
            </h2>
            <p className="text-gray-700 mb-8">
              Being positive and encouraging is important. We want to create a
              positive and supportive community where everyone feels welcome.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Be Open-Minded
            </h2>
            <p className="text-gray-700 mb-8">
              Being open-minded and willing to listen to others is important. We
              want to create a community where everyone feels heard and
              respected.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
