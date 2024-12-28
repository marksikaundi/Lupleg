import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function Building() {
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
              An overview on how to contribute to Lupleg.
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
              Lupleg is an open-source project and we welcome contributions from
              the community. This document explains how to contribute to the
              project.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Getting Started
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              To get started, you need to fork the repository on GitHub. You can
              then clone the repository to your local machine and start making
              changes. Once you are done, you can create a pull request to merge
              your changes back into the main repository.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Creating a Pull Request
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              To create a pull request, follow these steps:
            </p>
            <ol className="list-decimal list-inside text-xl text-gray-600 mb-8">
              <li>Fork the repository on GitHub.</li>
              <li>Clone the repository to your local machine.</li>
              <li>Create a new branch for your changes.</li>
              <li>Make your changes and commit them to your branch.</li>
              <li>Push your changes to your fork on GitHub.</li>
              <li>Create a pull request on GitHub.</li>
            </ol>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Code of Conduct
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              All contributors are expected to adhere to the project's code of
              conduct. Please read the code of conduct before contributing to
              the project.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">License</h2>
            <p className="text-xl text-gray-600 mb-8">
              By contributing to the project, you agree to license your
              contributions under the project's license. Please read the license
              before contributing to the project.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Questions
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              If you have any questions about contributing to the project,
              please contact us at{" "}
              <a href="mailto:support@lupleg.org">Support Email</a>.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Resources
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              For more information on contributing to the project, please refer
              to the following resources:
            </p>

            <ul className="list-disc list-inside text-xl text-gray-600 mb-8">
              <li>
                <a
                  href=" https://opensource.guide/how-to-contribute/"
                  className="text-[#2D1537] hover:text-gray-900"
                >
                  How to Contribute to Open Source
                </a>
              </li>
              <li>
                <a
                  href="https://www.contributor-covenant.org/"
                  className="text-[#2D1537] hover:text-gray-900"
                >
                  Contributor Covenant
                </a>
              </li>
              <li>
                <a
                  href="https://choosealicense.com/"
                  className="text-[#2D1537] hover:text-gray-900"
                >
                  Choose a License
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">Feedback</h2>
            <p className="text-xl text-gray-600 mb-8">
              We welcome feedback on how we can improve the contribution
              process. If you have any suggestions, please let us know.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
