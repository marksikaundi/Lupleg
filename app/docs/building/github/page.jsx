import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function Github() {
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
              Github Contribution Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Lupleg is an open-source project and we welcome contributions from
              the community. This document explains how to contribute to the
              project.
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
              The Lupleg project is hosted on GitHub. You can contribute to the
              project by creating issues, submitting pull requests, and
              participating in discussions. This document explains how you can
              contribute to the project.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Creating an Issue
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              If you find a bug or have a feature request, you can create an
              issue on GitHub. To create an issue, follow these steps:
            </p>

            <ol className="list-decimal list-inside text-xl text-gray-600 mb-8">
              <li>Go to the Lupleg GitHub repository.</li>
              <li>Click on the "Issues" tab.</li>
              <li>Click on the "New issue" button.</li>
              <li>Fill out the issue template.</li>
              <li>Click on the "Submit new issue" button.</li>
            </ol>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Submitting a Pull Request
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              If you want to contribute code to the project, you can submit a
              pull request on GitHub. To submit a pull request, follow these
              steps:
            </p>

            <ol className="list-decimal list-inside text-xl text-gray-600 mb-8">
              <li>Fork the Lupleg repository.</li>
              <li>Create a new branch.</li>
              <li>Make your changes.</li>
              <li>Push your changes to your fork.</li>
              <li>Create a pull request.</li>
            </ol>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Participating in Discussions
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              You can participate in discussions on GitHub by commenting on
              issues and pull requests. To participate in a discussion, follow
              these steps:
            </p>

            <ol className="list-decimal list-inside text-xl text-gray-600 mb-8">
              <li>Go to the Lupleg GitHub repository.</li>
              <li>Click on an issue or pull request.</li>
              <li>Scroll down to the comment box.</li>
              <li>Write your comment.</li>
              <li>Click on the "Comment" button.</li>
            </ol>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Conclusion
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Contributing to an open-source project like Lupleg is a rewarding
              experience. By creating issues, submitting pull requests, and
              participating in discussions, you can help improve the project and
              make it better for everyone. We welcome contributions from the
              community and look forward to your contributions.
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
              <a href="/docs/building/contribute">contribution</a> page.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
