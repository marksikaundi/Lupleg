"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const allTips = [
  {
    title: "Type Predicates",
    duration: "1 min",
    link: "/learning/tutorials/1",
  },
  {
    title: "TypeScript 5.1 Beta is OUT!",
    duration: "2 mins",
    link: "/learning/tutorials/2",
  },
  {
    title: "How to Name your Types",
    duration: "4 mins",
    link: "/learning/tutorials/3",
  },
  {
    title: "Don't use return types, unless...",
    duration: "4 mins",
    link: "/learning/tutorials/4",
  },
  {
    title: "Understanding Generic Types",
    duration: "3 mins",
    link: "/learning/tutorials/5",
  },
  {
    title: "Advanced TypeScript Interfaces",
    duration: "5 mins",
    link: "/learning/tutorials/6",
  },
  {
    title: "Mastering Union and Intersection Types",
    duration: "4 mins",
    link: "/learning/tutorials/7",
  },
];

export default function TipsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [learning, setTips] = useState(allTips);

  const handleSearch = () => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredTips = allTips.filter((tip) =>
      tip.title.toLowerCase().includes(query)
    );
    setTips(filteredTips);
  };

  return (
    <div className="min-h-screen bg-[#0a0b14] text-white  mb-10 p-8 flex flex-col items-center justify-start">
      <div className="w-full max-w-3xl space-y-8">
        {/* Comet image placeholder */}
        <div className="h-40 flex items-center justify-center">
          <div className="w-20 h-20 bg-green-400 rounded-full blur-2xl opacity-50"></div>
        </div>

        <h1 className="text-5xl font-bold text-center">Software Engineering Essentials</h1>
        <p className="text-lg text-center text-gray-400">
          A collection of useful learning that you wish you
          <br />
          knew when you started using TypeScript.
        </p>

        <div className="relative">
          <Input
            className="w-full bg-[#1a1b26] border-none text-white placeholder-gray-500 pl-10 pr-4 py-2 rounded-md"
            placeholder={`Search through ${allTips.length} learning`}
            value={searchQuery}
            onChange={handleSearch}
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
            ⌘K
          </span>
        </div>

        <div className="space-y-4">
          {learning.map((tip, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-[#1a1b26] p-4 rounded-md"
            >
              <div className="w-12 h-12 bg-gray-700 rounded-md flex items-center justify-center">
                <span className="text-2xl">▶️</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">
                  {tip.link ? (
                    <Link href={tip.link}>{tip.title}</Link>
                  ) : (
                    <span>{tip.title}</span>
                  )}
                </h3>
              </div>
              <span className="text-sm text-gray-500">{tip.duration}</span>
            </div>
          ))}
        </div>

        {learning.length === 0 && (
          <p className="text-center text-gray-500">
            No learning found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
