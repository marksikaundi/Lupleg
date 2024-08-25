import React from "react";
import { Building, ChevronRight, Code, HelpCircle, Users } from "lucide-react";
import Link from "next/link";

export default function AnnounceCard() {
  return (
    <div className="mb-10 mt-40">
      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Code className="text-green-900 w-6 h-6 mr-2" />
            <h3 className="text-lg font-semibold text-green-900">
              Are you stuck?
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            You can view our solutions just for you to have an idea how we did it.
          </p>
          <Link
            href="/challenges/solutions"
            className="text-green-900 hover:text-green-800 inline-flex items-center"
          >
            View solutions
            <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <HelpCircle className="text-green-900 w-6 h-6 mr-2" />
            <h3 className="text-lg font-semibold text-green-900">Need Assistance</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Our team of experts is here to help you with any questions you have.           
          </p>
          <Link
            href="https://github.com/orgs/Lupleg/discussions"
            className="text-green-900 hover:text-green-800 inline-flex items-center"
          >
            Ask for help
            <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
