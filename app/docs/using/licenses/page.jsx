import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoHome } from "react-icons/io5";

export default function Licenses() {
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
              Licenses used on Lupleg
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A copy of the various licenses used on Lupleg
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
              Lupleg uses various licenses for different repositories and
              content. We provide a central copy of them here.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              MIT License
            </h2>
            <p className="text-gray-700 mb-8">
              The MIT License is a permissive free software license originating
              at the Massachusetts Institute of Technology. As a permissive
              license, it puts only very limited restriction on reuse and has,
              therefore, high license compatibility.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Apache License 2.0
            </h2>
            <p className="text-gray-700 mb-8">
              The Apache License is a permissive free software license written
              by the Apache Software Foundation. It allows users to use the
              software for any purpose, to distribute it, to modify it, and to
              distribute modified versions of the software under the terms of
              the license.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              GNU General Public License v3.0
            </h2>
            <p className="text-gray-700 mb-8">
              The GNU General Public License is a series of widely used free
              software licenses that guarantee end users the freedom to run,
              study, share, and modify the software. The licenses were
              originally written by Richard Stallman, former head of the Free
              Software Foundation (FSF), for the GNU Project.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Creative Commons License
            </h2>
            <p className="text-gray-700 mb-8">
              A Creative Commons (CC) license is one of several public copyright
              licenses that enable the free distribution of an otherwise
              copyrighted work.
            </p>

            <Button
              href="/docs/using/feedbacks"
              className="mt-8 bg-[#2D1537] hover:bg-[#2D1537]"
            >
              Feedbacks
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
