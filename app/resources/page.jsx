import CheckResource from "@/components/Resource/CheckResources";
import { Users, FileText, HelpCircle } from "lucide-react";
import Link from "next/link";
import { BsDatabaseGear } from "react-icons/bs";


export default function Resources() {
  return (
    <div className="min-h-screen bg-white p-4 mt-16 md:p-8">
      <header className="flex justify-between items-center mb-8">
        <div className="text-[#2D1537]">
          <BsDatabaseGear size={32} />
        </div>
        <div className="flex space-x-4">
          <div className="w-6 h-6 bg-yellow-400 rounded-sm"></div>
          <div className="w-6 h-6 bg-gray-200 rounded-sm"></div>
          <div className="w-6 h-6 bg-[#2D1537] rounded-sm"></div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold text-[#2D1537] mb-4">
              Welcome to Lupleg Resources 
            </h1>
            <p className="text-gray-600 mb-4">
              Lupleg is a{" "}
              <span className="text-[#2D1537]">
                platform entirely developed, to help
              </span>{" "}
              developers, designers, and other tech enthusiasts to contribute to real world products.

            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/contributing.svg?height=300&width=300"
              alt="Illustration of three people wearing Lupleg t-shirts"
              className="w-full max-w-sm"
            />
          </div>
        </div>

        <nav className="flex flex-wrap justify-between items-center border-b border-gray-200 pb-4 mb-8">
          <Link href="#">
            <button className="flex items-center space-x-2 text-[#2D1537] font-semibold pb-4 border-b-2 border-[#2D1537]">
              <FileText size={20} />
              <span>Getting Started</span>
            </button>
          </Link>
          <Link href="/contributing/tasks">
            <button className="flex items-center space-x-2 text-gray-600 font-semibold">
              <FileText size={20} />
              <span>Explore tasks</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                425
              </span>
            </button>
          </Link>

          <Link href="#contri">
            <button className="flex items-center space-x-2 text-gray-600 font-semibold">
              <Users size={20} />
              <span>Contributors</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                14,811
              </span>
            </button>
          </Link>

          <Link href="https://github.com/lupleg">
            <button className="flex items-center space-x-2 text-gray-600 font-semibold">
              <HelpCircle size={20} />
              <span>Contributing Help</span>
            </button>
          </Link>
        </nav>

        <section>
          <h2 className="text-2xl md:text-4xl font-bold text-[#2D1537] text-center mt-6 mb-8">
              Key resources you can find here
          </h2>
          <div className="flex justify-center">
            <svg viewBox="0 0 100 20" className="w-24">
              <path
                d="M0 10 Q25 20 50 10 T100 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-[#2D1537]"
              />
            </svg>
          </div>
        </section>
      </main>
      <CheckResource />
    </div>
  );
}
