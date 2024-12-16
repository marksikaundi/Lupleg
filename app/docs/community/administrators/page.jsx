import { Plus } from "lucide-react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function Community() {
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
              Community
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn how Lupleg's community works
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
              This section covers various things to know about the Lupleg
              community, looking at how to be a good community member, and
              understanding the roles different people fulfill.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
