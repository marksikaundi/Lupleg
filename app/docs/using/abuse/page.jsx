import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function Abuse() {
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
              Report Abuse
            </h1>
            <p className="text-xl text-gray-600 mb-8"></p>

            {/* Decorative Wave */}
            <div className="mb-8">
              <svg className="text-" viewBox="0 0 100 20" width="100">
                <path
                  d="M0 10 Q25 20 50 10 T100 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <p className="text-gray-700 mb-8">
              Feeling uncomfortable? Had a worrying or uncomfortable interaction
              with someone on the site? Has something written on Lupleg
              concerned or upset you?
              <br />
              Please reach out to us and we will try to fix or resolve the issue
              respecting both you and your privacy. The best way to contact us
              is through <a className=" font-mono bg-[#2D1537] px-2 text-white" href="mailto:abuse@lupleg.org">Our Email </a>
              <br />
              In addition to reporting abuse community members are welcome to
              refer users to the{" "}
              <Link
                className="text-md font-mono bg-[#2D1537] px-2 text-white"
                href="/docs/using/conducts"
              >
                Code of Conduct
              </Link>
              if they feel safe doing so. Keep in mind that this type of action
              is meant to resolve issues. As such, it is better to pose it as a
              question, eg. "Do you feel like that comment is aligned to
              Lupleg's COC" rather than "You're in violation of the COC"
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              What to include in your report of abuse or harassment
            </h2>
            <p className="text-gray-700 mb-8">
              When reporting abuse or harassment, please include the following
            </p>

            <ul className="list-disc list-inside">
              <li> Your name and contact information</li>
              <li> The name of the person who is harassing you</li>
              <li> The name of the person who is being harassed</li>
              <li> A description of the incident</li>
              <li> The date and time of the incident</li>
              <li> The location of the incident</li>
              <li> Any other information that you think is relevant</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
