import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function Mindset() {
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
              The Mentoring Mindset
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              An examination of the mentoring mindset
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

            <h1> What is a mindset?</h1>

            <p id="community" className="text-gray-700 mb-8">
              Before examining the mentoring mindset, it may be helpful to
              understand what a mindset is. According to the Oxford English
              Dictionary, Mindset is an "established set of attitudes, esp.
              regarded as typical of a particular group's social or cultural
              values." A person may have an individual motivation for engaging
              in an activity, but a mindset directs that the motivation is in
              line with a group's values. For the Exercism mentor, that means
              approaching the mentoring process within the spirit of the
              Exercism community.
            </p>
            <h1> The Mentoring Mindset</h1>
            <p id="community" className="text-gray-700 mb-8">
              The mentoring mindset is a set of attitudes and values that guide
              the mentor in their interactions with the mentee. The mentor's
              mindset is important because it sets the tone for the mentoring
              relationship. The mentor's mindset can be broken down into three
              key components: empathy, respect, and encouragement.
            </p>

            <h2>Empathy</h2>
            <p id="community" className="text-gray-700 mb-8">
              Empathy is the ability to understand and share the feelings of
              another person. In the context of mentoring, empathy means
              listening to the mentee's concerns and understanding their
              perspective. Empathy is important because it helps the mentor
              build a strong relationship with the mentee and creates a safe
              space for the mentee to share their thoughts and feelings.
            </p>

            <h2>Respect</h2>
            <p id="community" className="text-gray-700 mb-8">
              Respect is the recognition of the value and worth of another
              person. In the context of mentoring, respect means treating the
              mentee with dignity and acknowledging their expertise and
              experience. Respect is important because it helps the mentor build
              trust with the mentee and creates a positive learning environment.
            </p>

            <h2>Encouragement</h2>
            <p id="community" className="text-gray-700 mb-8">
              Encouragement is the act of giving support, confidence, or hope to
              someone. In the context of mentoring, encouragement means
              motivating the mentee to achieve their goals and celebrating their
              successes. Encouragement is important because it helps the mentor
              inspire the mentee and build their confidence and self-esteem.
            </p>

            <h1>Conclusion</h1>
            <p id="community" className="text-gray-700 mb-8">
              The mentoring mindset is an essential component of effective
              mentoring. By cultivating empathy, respect, and encouragement, the
              mentor can create a positive and supportive learning environment
              for the mentee. The mentoring mindset is not only beneficial for
              the mentee but also for the mentor, as it helps them develop their
              mentoring skills and build strong relationships with their
              mentees.
            </p>

            <h1>Additional Resources</h1>
            <p id="community" className="text-gray-700 mb-8">
              For more information on the mentoring mindset, check out the
              following resources:
            </p>

            <ul className="list-disc pl-8 mb-8">
              <li>
                <a
                  href="https://www.forbes.com/sites/forbescoachescouncil/2021/08/09/why-empathy-is-the-most-important-leadership-skill/?sh=5d3f6f0d6b4e"
                  className="text-blue-600 hover:underline"
                >
                  Why Empathy Is The Most Important Leadership Skill
                </a>
              </li>
              <li>
                <a
                  href="https://www.psychologytoday.com/us/blog/what-mentally-strong-people-dont-do/201708/5-ways-encourage-others"
                  className="text-blue-600 hover:underline"
                >
                  5 Ways To Encourage Others
                </a>
              </li>
              <li>
                <a
                  href="https://www.verywellmind.com/how-to-show-respect-4588636"
                  className="text-blue-600 hover:underline"
                >
                  How to Show Respect
                </a>
              </li>
            </ul>

            <h1>Feedback</h1>
            <p id="community" className="text-gray-700 mb-8">
              If you have any feedback or suggestions for this page, please
              email us at <a href="mailto:support@lupleg">Email us here</a>
            </p>

            <h1>Contributors</h1>
            <div className="flex items-center space-x-2 mb-8">
              <img
                src="/mark.jpg"
                alt="Profile Picture"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-gray-700">Mark Sikaundi</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
