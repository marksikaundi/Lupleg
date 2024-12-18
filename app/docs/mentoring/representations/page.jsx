import { Plus } from "lucide-react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function Representations() {
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
              className=" text-[#2D1537] border-b-2 border-[#2D1537] hover:text-gray-900 h-full flex items-center flex-shrink-0"
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
        {/* Sidebar */}
        <aside className="w-64 border-r p-4 hidden md:block">
          <nav className="space-y-4">
            <div className="space-y-2">
              <Link
                href="/docs/mentoring"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Mentoring
              </Link>
              <Link
                href="/docs/mentoring/choosing"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Choosing a Solution
              </Link>
              <Link
                href="/docs/mentoring/feedback"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                How to give great feedback
              </Link>
              <Link
                href="/docs/mentoring/mentoring-faq"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Mentoring FAQ
              </Link>
              <Link
                href="/docs/mentoring/representations"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                How to give feedback on representations
              </Link>
              <Link
                href="/docs/mentoring/markdown"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                How to use Markdown in mentoring
              </Link>

              <Link
                href="/docs/mentoring/mindset"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                The Mentoring Mindset
              </Link>

              <Link
                href="/docs/mentoring/tips"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Mentoring Tips
              </Link>
            </div>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-[#2D1537] mb-4">
              How to give feedback on representations
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Considerations for giving feedback on representations.
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
              Giving feedback on a representation is different from giving
              feedback on a single solution.
            </p>
            <p className="text-gray-700 mb-8">
              When giving feedback on a representation, you should consider the
              following:
            </p>
            <ul className="list-disc pl-8 mb-8">
              <li>
                The representation should be clear and easy to understand.
              </li>
              <li>
                The representation should be complete and cover all aspects of
                the problem.
              </li>
              <li>
                The representation should be well-structured and easy to follow.
              </li>
              <li>
                The representation should be well-documented and include
                references to any external sources.
              </li>
            </ul>
            <p className="text-gray-700 mb-8">
              When giving feedback on a representation, you should focus on the
              following:
            </p>
            <ul className="list-disc pl-8 mb-8">
              <li>
                Providing constructive feedback that helps the author improve
                their representation.
              </li>
              <li>
                Pointing out any errors or omissions in the representation.
              </li>
              <li>
                Suggesting improvements or alternative approaches to the
                representation.
              </li>
              <li>
                Encouraging the author to continue working on their
                representation and providing positive reinforcement.
              </li>
            </ul>
            <p className="text-gray-700 mb-8">
              When giving feedback on a representation, you should avoid the
              following:
            </p>
            <ul className="list-disc pl-8 mb-8">
              <li>Being overly critical or negative.</li>
              <li>
                Focusing on minor details or nitpicking without providing
                constructive feedback.
              </li>
              <li>
                Making personal attacks or disparaging remarks about the author.
              </li>
              <li>
                Dismissing the representation without providing any feedback or
                suggestions for improvement.
              </li>
            </ul>

            <p className="text-gray-700 mb-8">
              Remember that the goal of giving feedback on a representation is
              to help the author improve their work and learn from the feedback
              they receive.
            </p>
            <p className="text-gray-700 mb-8">
              By providing constructive feedback that is focused on helping the
              author improve, you can help them develop their skills and
              knowledge in a positive and supportive way.
            </p>
            <p className="text-gray-700 mb-8">
              Remember that learning takes time and practice, so be patient and
              supportive as the author works to improve their representation.
            </p>
            <p className="text-gray-700 mb-8">
              And remember, the goal is to help them improve, not to make them
              feel bad.
            </p>
            <h1>Ask Questions</h1>
            <p id="community" className="text-gray-700 mb-8">
              When you're mentoring, ask questions to help the person you're
              mentoring think through the problem. This can help them learn more
              effectively than just giving them the answer.
            </p>
            <h1>Be Specific</h1>
            <p id="community" className="text-gray-700 mb-8">
              When giving feedback, be specific. Instead of saying "this is
              wrong", say "this part of your solution is incorrect because...".{" "}
              <br />
              <br />
              Specific feedback helps the person you're mentoring understand
              what they need to improve and how to do it.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
