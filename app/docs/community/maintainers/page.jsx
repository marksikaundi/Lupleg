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
              Maintainers(Incomplete)
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn about Lupleg's Maintainers
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

            <h1 className="text-2xl font-bold text-[#2D1537] mb-4">
              Introduction
            </h1>

            <p className="text-gray-700 mb-8">
              Lupleg's Maintainers are volunteers that manage the different
              parts of our ecosystem. They are senior members of our community
              who have demonstrated their alignment to Lupleg's values, the
              quality of their work, and a level of commitment to spending time
              working on Lupleg.
            </p>

            <p className="text-md text-gray-700 mb-8">
              This document outlines a formal process to become and remain a
              Maintainer, which has been designed to make it achievable and fair
              for everyone. If you want to one day become a Maintainer (yay!!),
              then please read on! But remember, most people who help build
              Lupleg are not Maintainers - they are Contributors. There is no
              barrier to contributing to Lupleg and every bit of help is
              gratefully received.
              <br />
              We aim to have at least two active Maintainers for each Track, and
              at least one active maintainer for all the parts of the platform.
              <br />
              <i>
                Note: the sections below generally discuss Track Maintainers.
                The process for becoming a Maintainer of different parts of the
                ecosystem varies.
              </i>
            </p>

            <h1 className="text-2xl font-bold text-[#2D1537] mb-4">
              Responsibilities
            </h1>
            <p className="text-md mb-4">
              Maintainers are responsible for ensuring that a Track works well
              within Lupleg, and continues to grow and develop. That
              specifically means that Maintainers:
            </p>
            <ul className="text-md mb-4">
              <li>
                Set technical direction for a Track: Choosing the right language
                versions, tooling, etc.
              </li>
              <li>
                Manage the syllabus of a Track: Designing, choosing and defining
                the right Concepts and Exercises for a Track, and ensuring they
                are linked and structured appropriately.
              </li>
              <li>
                Ensure a Track works well: Ensuring the Track is up to date,
                that its test-runner is fast, etc.
              </li>
              <li>
                Ensure the Track conforms to Lupleg's standards: Lupleg has
                specifications and standards for each language Track to ensure a
                degree of consistency within the platform. While Maintainers
                have free reign over much of the Track, all Tracks must conform
                to Lupleg's standards.
              </li>
            </ul>

            <p className="text-md mb-4">
              Maintainers are also responsible for interacting with our
              contributor community. They review PRs from the community, acting
              as gatekeepers, shepherds, and cheerleaders for Lupleg. They are
              responsible for keeping documentation and contribution guidelines
              up to date, and ensure that there are relevant open issues for
              potential contributors to action.
            </p>
            <p className="text-md mb-4">
              Maintainers should both embody Lupleg's values of empathy and
              kindness, and maintain the high standards we want to build into
              our educational platform.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
