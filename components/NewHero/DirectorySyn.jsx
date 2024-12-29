import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserIcon, Users } from "lucide-react";

export default function Component() {
  return (
    <div className="bg-white p-8 md:p-16 lg:p-24 relative z-0">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-24">
          <h3 className="text-[#2D1537] font-semibold mb-4">Directory Sync</h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            SCIM and HRIS integrations?
            <br />
            No sweat.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Quickly enable full user lifecycle management by syncing your app
            with dozens of enterprise employee directory systems.
          </p>
          <Button className="bg-[#2D1537] hover:bg-green-900 text-white px-6 py-3 rounded-full text-md font-thin">
            Get Started
          </Button>

          <div className="absolute top-0 right-0 w-96 h-96 hidden lg:block">
            <div className="absolute top-4 right-4 w-12 h-12 bg-[#2D1537] rounded-full flex items-center justify-center">
              <UserIcon className="text-white w-6 h-6" />
            </div>
            <div className="absolute bottom-24 right-48 w-12 h-12 bg-[#F3A833] rounded-full flex items-center justify-center">
              <Users className="text-white w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          <Card className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl mb-6 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-[#2D1537]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 22V12H15V22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#2D1537] mb-2">
                SCIM provisioning
              </h2>
              <p className="text-gray-600">
                with Okta, Entra ID, ADFS, and more
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl mb-6 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-[#2D1537]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M7 8H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 12H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 16H13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#2D1537] mb-2">
                HRIS integration
              </h2>
              <p className="text-gray-600">with Bamboo, Rippling, and others</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
