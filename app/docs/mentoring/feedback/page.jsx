import { Plus } from "lucide-react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function Feedback() {
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
                How to give great feedback
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
              How to give great feedback
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              You've chosen an exercise to mentor - now give some great
              feedback.
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
              Giving feedback is a key part of mentoring. It's how you help
              someone learn and grow. Here are some tips to help you give great
              feedback.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Be specific
            </h2>

            <p className="text-gray-700 mb-8">
              When you're giving feedback, be specific. Instead of saying "good
              job", say "I like how you used a loop to solve this problem". This
              helps the person you're mentoring understand what they did well.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">Be kind</h2>

            <p className="text-gray-700 mb-8">
              Feedback should be kind and encouraging. Remember that everyone
              makes mistakes, and that's how we learn. Be kind and supportive
              when you're giving feedback.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Be constructive
            </h2>

            <p className="text-gray-700 mb-8">
              Feedback should be constructive. Instead of just saying "this is
              wrong", explain why it's wrong and how it can be improved. This
              helps the person you're mentoring learn and grow.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Be honest
            </h2>

            <p className="text-gray-700 mb-8">
              Feedback should be honest. If you think something could be
              improved, say so. Honesty helps the person you're mentoring learn
              and grow.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Be timely
            </h2>

            <p className="text-gray-700 mb-8">
              Feedback should be timely. Try to give feedback as soon as
              possible after the person you're mentoring has completed an
              exercise. This helps them learn and grow while the exercise is
              still fresh in their mind.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Be balanced
            </h2>

            <p className="text-gray-700 mb-8">
              Feedback should be balanced. Try to give both positive and
              negative feedback. This helps the person you're mentoring
              understand what they're doing well and what they can improve.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
