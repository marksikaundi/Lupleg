import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function Configlet() {
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
              Configlet
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Configlet is a tool that helps you manage configuration files in
              your project. It allows you to define configuration settings in a
              single file and then generate configuration files for different
              environments based on that file.
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
              Configlet is designed to be simple to use and easy to integrate
              into your project. It is ideal for projects that have multiple
              environments (e.g., development, staging, production) and need to
              manage configuration settings for each environment.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Getting Started
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              To get started with Configlet, you need to create a configuration
              file in your project. This file should contain all the
              configuration settings that you want to manage. You can define
              settings for different environments by using the environment
              keyword. For example:
            </p>

            <pre className="bg-gray-100 p-4 rounded-md text-sm">
              {`{
  "development": {
    "apiUrl": "http://localhost:300
  },
  "staging": {
    "apiUrl": "https://staging.example.com"
  },
  "production": {
    "apiUrl": "https://api.example.com"
  }
}`}
            </pre>

            <p className="text-xl text-gray-600 mt-8">
              In this example, we have defined configuration settings for three
              environments: development, staging, and production. Each
              environment has its own set of settings, such as the API URL. You
              can define as many settings as you need for each environment.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">Usage</h2>
            <p className="text-xl text-gray-600 mb-8">
              Once you have created your configuration file, you can use
              Configlet to generate configuration files for different
              environments. To do this, run the following command in your
              project directory:
            </p>

            <pre className="bg-gray-100 p-4 rounded-md text-sm">
              {`configlet generate`}
            </pre>

            <p className="text-xl text-gray-600 mt-8">
              This command will generate configuration files for all the
              environments defined in your configuration file. The generated
              files will be saved in a directory called configlet in your
              project directory. You can then use these files in your project to
              load the configuration settings for the appropriate environment.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              Conclusion
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Configlet is a simple and easy-to-use tool for managing
              configuration files in your project. It allows you to define
              configuration settings in a single file and generate configuration
              files for different environments based on that file. Configlet is
              ideal for projects that have multiple environments and need to
              manage configuration settings for each environment.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
