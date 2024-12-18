import { Plus } from "lucide-react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function Tips() {
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
              Mentoring Tips
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              An assortment of tips for mentoring
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
            <h1>Mentoring Notes</h1>

            <p id="community" className="text-gray-700 mb-8">
              One of the biggest helps to mentoring can be to have a file to
              hold notes for each exercise you mentor. You may find that many
              solutions can benefit from the same suggestions, so, by keeping
              notes, you don't need to keep writing up the same suggestions from
              memory. And, by having the suggestions in one place, you can keep
              refining them over time to make them clearer.
            </p>
            <p id="community" className="text-gray-700 mb-8">
              You can also use the notes to keep track of the solutions you've
              mentored, so you can see how a student's work has progressed over
              time.
            </p>
            <h1>Be Kind</h1>
            <p id="community" className="text-gray-700 mb-8">
              Remember that the person you're mentoring is a human being with
              feelings. Be kind and respectful in your feedback. Remember that
              the goal is to help them improve, not to make them feel bad.
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
            <h1>Be Constructive</h1>
            <p id="community" className="text-gray-700 mb-8">
              When giving feedback, be constructive. Instead of just pointing
              out what's wrong, suggest ways to improve. This helps the person
              you're mentoring learn how to improve their work.
            </p>
            <h1>Be Patient</h1>
            <p id="community" className="text-gray-700 mb-8">
              Remember that learning takes time. Be patient with the person
              you're mentoring and give them the time they need to learn and
              improve.
            </p>
            <h1>Be Encouraging</h1>
            <p id="community" className="text-gray-700 mb-8">
              Encourage the person you're mentoring. Let them know when they're
              doing well and when they're making progress. This can help keep
              them motivated and engaged.
            </p>
            <h1>Be Available</h1>
            <p id="community" className="text-gray-700 mb-8">
              Be available to the person you're mentoring. Answer their
              questions, provide feedback, and offer support when they need it.
              This can help them feel supported and motivated to learn.
            </p>
            <h1>Be Flexible</h1>
            <p id="community" className="text-gray-700 mb-8">
              Be flexible in your mentoring approach. Everyone learns
              differently, so be willing to adapt your mentoring style to meet
              the needs of the person you're mentoring.
            </p>
            <h1>Be Positive</h1>
            <p id="community" className="text-gray-700 mb-8">
              Be positive in your mentoring. Focus on the person's strengths and
              help them build on them. This can help boost their confidence and
              motivation to learn.
            </p>
            <h1>Be Supportive</h1>
            <p id="community" className="text-gray-700 mb-8">
              Be supportive of the person you're mentoring. Offer encouragement,
              guidance, and assistance when they need it. This can help them
              feel supported and motivated to learn.
            </p>
            <h1>Be Respectful</h1>
            <p id="community" className="text-gray-700 mb-8">
              Be respectful of the person you're mentoring. Treat them with
              kindness, empathy, and understanding. This can help create a
              positive and supportive learning environment.
            </p>
            <h1>Be Empathetic</h1>
            <p id="community" className="text-gray-700 mb-8">
              Be empathetic to the person you're mentoring. Try to understand
              their perspective, feelings, and challenges. This can help you
              provide more effective support and guidance.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
