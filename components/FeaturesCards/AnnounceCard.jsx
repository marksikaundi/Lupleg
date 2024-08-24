import React from "react";
import { Building, ChevronRight, Users } from "lucide-react";
import Link from "next/link";

export default function AnnounceCard() {
  return (
    <div className="mb-10 mt-40">
      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Users className="text-green-900 w-6 h-6 mr-2" />
            <h3 className="text-lg font-semibold text-green-900">
              We're hiring
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Our global team is growing and we're hiring all types of roles.
          </p>
          <Link
            href="/careers"
            className="text-green-900 hover:text-green-800 inline-flex items-center"
          >
            View open roles
            <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Building className="text-green-900 w-6 h-6 mr-2" />
            <h3 className="text-lg font-semibold text-green-900">About us</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Find out more about our company, our team, and our mission.
           
          </p>
          <Link
            href="/about-us"
            className="text-green-900 hover:text-green-800 inline-flex items-center"
          >
            Learn more
            <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
