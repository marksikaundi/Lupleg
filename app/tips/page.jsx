"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const allTips = [
  {
    title: "Type Predicates",
    duration: "1 min",
    link: "/tips/ts/type-predicates",
  },
  {
    title: "TypeScript 5.1 Beta is OUT!",
    duration: "2 mins",
    link: "/tips/ts/typeScript-beta-is-out",
  },
  {
    title: "How to Name your Types",
    duration: "4 mins",
    link: "/tips/ts/how-to-name-your-types",
  },
  {
    title: "Don't use return types, unless",
    duration: "4 mins",
    link: "/tips/ts/dont-use-return-types-unless",
  },
  {
    title: "Understanding Generic Types",
    duration: "3 mins",
    link: "/tips/ts/understanding-generic-types",
  },
  {
    title: "Advanced TypeScript Interfaces",
    duration: "5 mins",
    link: "/tips/ts/advanced-typescript-interfaces",
  },
  {
    title: "Mastering Union and Intersection Types",
    duration: "4 mins",
    link: "/tips/ts/mastering-union-and-intersection-types",
  },
];

export default function TipsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tips, setTips] = useState(allTips);

  const handleSearch = () => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredTips = allTips.filter((tip) =>
      tip.title.toLowerCase().includes(query)
    );
    setTips(filteredTips);
  };

  return (
    <div className="min-h-screen  text-white  mb-10 p-8 flex flex-col items-center justify-start">
      <div className="w-full max-w-3xl space-y-8">
        {/* Comet image placeholder */}
        <div className="h-40 flex items-center justify-center">
          <div className="w-20 h-20 bg-[#2D1537] rounded-full blur-2xl opacity-50"></div>
        </div>

        <h1 className="text-5xl font-bold text-center text-[#2D1537] ">
          TypeScript Tips
        </h1>
        <p className="text-lg text-center text-[#2D1537] ">
          A collection of useful tips that you wish you
          <br />
          knew when you started using TypeScript.
        </p>

        <div className="relative">
          <Input
            className="search-input w-full bg-[#2D1537] border-none text-white placeholder-white pl-10 pr-4 py-2 rounded-md"
            placeholder={`Search through ${allTips.length} tips`}
            value={searchQuery}
            onChange={handleSearch}
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
            size={20}
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-sm">
            ⌘K
          </span>
        </div>

        <div className="space-y-4">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-[#2D1537] p-4 rounded-md"
            >
              <div className="w-12 h-12 bg-[#846e8e] rounded-md flex items-center justify-center">
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
              <span className="text-sm text-white">{tip.duration}</span>
            </div>
          ))}
        </div>

        {tips.length === 0 && (
          <p className="text-center text-[#2D1537]">
            No tips found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
