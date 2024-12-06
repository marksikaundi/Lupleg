import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BottomSection() {
  return (
    <div className=" p-4 space-y-8">
      <Card className="p-8 text-center space-y-6">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#2D1537]"
          >
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#2D1537] sm:text-3xl">
          Lupleg is also supported by
        </h2>
        <p className="text-4xl font-bold text-[#2D1537] sm:text-5xl">
          4054 generous individuals  
        </p>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="16"
            viewBox="0 0 64 16"
            fill="none"
          >
            <path d="M0 8H64" stroke="#122E17" strokeWidth="2" />
            <path d="M28 1L32 8L36 1" stroke="#122E17" strokeWidth="2" />
          </svg>
        </div>
        <Button variant="link" className="text-[#2D1537] hover:text-[#2D1537]">
          See all of our individual supporters
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </Card>

      <Card className="p-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center space-x-4">
          <img
            alt="Mark Sikaundi"
            className="rounded-full"
            height="64"
            src="/mark.jpg"
            style={{
              aspectRatio: "64/64",
              objectFit: "cover",
            }}
            width="64"
          />
          <div>
            <h3 className="text-lg font-semibold">
              Want to discuss how you can help Lupleg?
            </h3>
            <p className="text-sm text-gray-500">
              Get in touch with Mark Sikaundi, Lupleg's CEO.
            </p>
          </div>
        </div>
        <Link href="mailto:mark@lupleg.org">
          <Button className="w-full sm:w-auto bg-[#2D1537] hover:bg-[#2D1537] text-white">
            <Mail className="mr-2 h-4 w-4" />
            mark@lupleg.org
          </Button>
        </Link>
      </Card>
    </div>
  );
}
