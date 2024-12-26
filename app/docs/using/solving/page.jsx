import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function Solving() {
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
              Solving exercises
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn how to solve exercises on Lupleg
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

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Solving exercises
            </h2>
            <p className="text-gray-700 mb-8">
              Learn how to solve exercises on Lupleg
            </p>

            <h3 className="text-xl font-bold text-[#2D1537] mb-4">
              How to solve exercises on Lupleg ?
            </h3>
            <p className="text-gray-700 mb-8">
              To solve exercises on Lupleg, you need to follow these steps:
            </p>

            <ol className="list-decimal list-inside text-gray-700 mb-8">
              <li>Go to the exercise page</li>
              <li>Read the exercise description</li>
              <li>Write your solution</li>
              <li>Submit your solution</li>
              <li>Wait for the result</li>
            </ol>

            <h3 className="text-xl font-bold text-[#2D1537] mb-4">
              How to go to the exercise page ?
            </h3>

            <p className="text-gray-700 mb-8">
              To go to the exercise page, you need to follow these steps:
            </p>

            <ol className="list-decimal list-inside text-gray-700 mb-8">
              <li>Go to the home page</li>
              <li>Click on the exercise you want to solve</li>
            </ol>

            <h3 className="text-xl font-bold text-[#2D1537] mb-4">
              How to read the exercise description ?
            </h3>

            <p className="text-gray-700 mb-8">
              To read the exercise description, you need to follow these steps:
            </p>

            <ol className="list-decimal list-inside text-gray-700 mb-8">
              <li>Go to the exercise page</li>
              <li>Read the exercise description</li>
            </ol>

            <h3 className="text-xl font-bold text-[#2D1537] mb-4">
              How to write your solution ?
            </h3>

            <p className="text-gray-700 mb-8">
              To write your solution, you need to follow these steps:
            </p>

            <ol className="list-decimal list-inside text-gray-700 mb-8">
              <li>Go to the exercise page</li>
              <li>Read the exercise description</li>
              <li>Write your solution</li>
            </ol>

            <h3 className="text-xl font-bold text-[#2D1537] mb-4">
              How to submit your solution ?
            </h3>

            <p className="text-gray-700 mb-8">
              To submit your solution, you need to follow these steps:
            </p>

            <ol className="list-decimal list-inside text-gray-700 mb-8">
              <li>Go to the exercise page</li>
              <li>Read the exercise description</li>
              <li>Write your solution</li>
              <li>Submit your solution</li>
            </ol>
          </div>
        </main>
      </div>
    </div>
  );
}
