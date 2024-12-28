import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function Contribute() {
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
              href="/docs/docs/building/"
              className=" text-[#2D1537] border-b-2 border-[#2D1537] hover:text-gray-900 h-full flex items-center flex-shrink-0"
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
                href="/docs/building/contribute"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Contribute
              </Link>
              <Link
                href="/docs/building/configlet"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Configlet
              </Link>
              <Link
                href="/docs/building/github"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Github
              </Link>
              <Link
                href="/docs/building/markdown"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Markdown
              </Link>
            </div>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-[#2D1537] mb-4">
              Contributing to Lupleg
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Welcome to the Lupleg project! We are excited that you are
              interested in contributing to the project. This document explains
              how you can contribute to the project and what you need to know
              before getting started. If you have any questions, please contact
              us at <a href="mailto:support@lupleg.org">Support</a>.
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

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">Overview</h2>
            <p className="text-xl text-gray-600 mb-8">
              The Lupleg project is an open-source project that welcomes
              contributions from the community. We are always looking for
              talented individuals who are passionate about technology and
              education to help us improve the project. Whether you are a
              developer, designer, writer, or educator, there are many ways you
              can contribute to the project. We value diversity and inclusion
              and welcome contributors from all backgrounds. If you are
              interested in contributing to the project, please read the
              following guidelines to get started.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Getting Started
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              To get started contributing to the Lupleg project, you will need
              to follow these steps:
            </p>

            <ol className="list-decimal list-inside text-lg text-gray-600 mb-8">
              <li>
                <strong>Sign Up for a GitHub Account:</strong> If you do not
                already have a GitHub account, you will need to sign up for one
                at <a href="https://github.com">github.com</a>.
              </li>
              <li>
                <strong>Join the Lupleg Organization:</strong> Once you have a
                GitHub account, you will need to join the Lupleg organization at{" "}
                <a href="https://github.com/lupleg">github.com/lupleg</a>.
              </li>
              <li>
                <strong>Read the Contribution Guidelines:</strong> Before
                contributing to the project, please read the{" "}
                <a href="https://lupleg.org/contributing">contribution</a>{" "}
                guidelines to learn about the project's coding standards and
                best practices.
              </li>
              <li>
                <strong>Find an Issue to Work On:</strong> To get started
                contributing to the project, you can look for an issue that
                interests you on the{" "}
                <a href="https://lupleg.org/issues">issues</a> page. If you are
                a beginner, you can look for issues labeled{" "}
                <code>good first issue</code> or <code>beginner friendly</code>{" "}
                to get started.
              </li>
              <li>
                <strong>Create a Pull Request:</strong> Once you have found an
                issue to work on, you can create a pull request with your
                changes. Make sure to follow the{" "}
                <a href="https://lupleg.org/pull-request">pull request</a>{" "}
                guidelines when creating your pull request.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Contributing
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              There are many ways you can contribute to the Lupleg project,
              including:
            </p>

            <ul className="list-disc list-inside text-lg text-gray-600 mb-8">
              <li>Fixing bugs and issues</li>
              <li>Adding new features</li>
              <li>Improving the documentation</li>
              <li>Writing tests</li>
              <li>Reviewing pull requests</li>
              <li>Helping others in the community</li>
            </ul>

            <p className="text-xl text-gray-600 mb-8">
              If you are interested in contributing to the project, please read
              the <a href="https://lupleg.org/contributing">contribution</a>{" "}
              guidelines to learn more about how you can help. We appreciate all
              contributions to the project and look forward to working with you!
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Resources
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              If you have any questions or need help getting started
              contributing to the project, please contact us at{" "}
              <a href="mailto:support@lupleg.org">Support</a>. We are here to
              help and answer any questions you may have. You can also find more
              information about contributing to the project on the{" "}
              <a href="https://lupleg.org/contributing">contribution</a> page.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
