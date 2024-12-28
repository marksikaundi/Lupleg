import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function Markdown() {
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
              Markdown Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              This is a guide to using Markdown in Lupleg. Markdown is a
              lightweight markup language that is easy to read and write. It is
              used to format text on the web.
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
              Markdown is a lightweight markup language that is easy to read and
              write. It is used to format text on the web. Markdown is often
              used to format README files, for writing messages in online
              discussion forums, and to create rich text using a plain text
              editor.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">Syntax</h2>
            <p className="text-xl text-gray-600 mb-8">
              Markdown uses a simple syntax to format text. Here are some common
              elements:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600 mb-8">
              <li>Headings</li>
              <li>Paragraphs</li>
              <li>Lists</li>
              <li>Links</li>
              <li>Images</li>
              <li>Code Blocks</li>
              <li>Blockquotes</li>
              <li>Horizontal Rules</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Resources
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Here are some resources to help you learn more about Markdown:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600 mb-8">
              <li>
                <a
                  href="https://www.markdownguide.org/"
                  className="text-[#2D1537] hover:text-gray-900"
                >
                  The Markdown Guide
                </a>
              </li>
              <li>
                <a
                  href="https://www.markdownguide.org/basic-syntax/"
                  className="text-[#2D1537] hover:text-gray-900"
                >
                  Basic Syntax
                </a>
              </li>
              <li>
                <a
                  href="https://www.markdownguide.org/extended-syntax/"
                  className="text-[#2D1537] hover:text-gray-900"
                >
                  Extended Syntax
                </a>
              </li>

              <li>
                <a
                  href="https://www.markdownguide.org/tools/"
                  className="text-[#2D1537] hover:text-gray-900"
                >
                  Tools
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">Examples</h2>
            <p className="text-xl text-gray-600 mb-8">
              Here are some examples of Markdown syntax:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-gray-600">
              {`# Heading 1
## Heading 2
### Heading 3


- List Item 1
- List Item 2
- List Item 3


[Link Text](https://www.example.com)


![Image Alt Text](https://www.example.com/image.jpg)


\`\`\`javascript
console.log('Hello, World!');
\`\`\`

> Blockquote

---`}
            </pre>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Conclusion
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Markdown is a simple and easy-to-use markup language that is
              widely used on the web. It is a great way to format text without
              having to use a complex editor. We hope this guide has helped you
              learn more about Markdown and how to use it in Lupleg.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
