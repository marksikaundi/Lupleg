import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function Editions() {
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
              Code of Conduct
            </h1>
            <p className="text-xl text-gray-600 mb-8"></p>

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
              Introductions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Lupleg is a platform centered around empathetic conversation. We
              have a low tolerance for communication that makes anyone feel
              unwelcome, unsupported, insulted or discriminated against.
            </p>

            <h1 className="text-2xl font-bold text-[#2D1537] mb-4">
              Seen or experienced something uncomfortable?
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              If you see or experience abuse, harassment, discrimination, or
              feel unsafe or upset, please email abuse@lupleg.org. We will take
              your report seriously.
            </p>

            <h1 className="text-2xl font-bold text-[#2D1537] mb-4">
              Enforcement
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              We actively monitor for{" "}
              <Link className="text-[#2D1537] font-bold" href="/docs/using/conducts">
                Code of Conduct (CoC)
              </Link>{" "}
              violations and take any reports of violations extremely seriously.
              We have banned contributors, mentors and users due to violations.
              <br />
              After we receive a report of a CoC violation, we view that
              person's conversation history on Lupleg and related communication
              channels and attempt to understand whether someone has
              deliberately broken the CoC, or accidentally crossed a line. We
              generally reach out to the person who has been reported to discuss
              any concerns we have and warn them that repeated violations will
              result in a ban. Sometimes we decide that no violation has
              occurred and that no action is required and sometimes we will also
              ban people on a first offense. We strive to be fair, but will err
              on the side of protecting the culture of our community.
              <br />
              Lupleg's leadership reserve the right to take whatever action they
              feel appropriate with regards to CoC violations.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
