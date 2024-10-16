"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const allTips = [
  {
    title: "HTML / CSS Basics",
    duration: "1 min",
    link: "/learning/frontend/1",
  },
  {
    title: "Introduction to JavaScript",
    duration: "1 min",
    link: "/learning/frontend/2",
  },
  {
    title: "Data Types in JavaScript",
    duration: "45 mins",
    link: "/learning/frontend/3",
  },
  {
    title: "DOM Manipulation",
    duration: "1 hr",
    link: "/learning/frontend/4",
  },
  {
    title: "Getting started with React",
    duration: "2 mins",
    link: "/learning/frontend/5",
  },
  {
    title: "Core Concepts in React",
    duration: "2 mins",
    link: "/learning/frontend/6",
  },
  {
    title: "Components in React",
    duration: "2 mins",
    link: "/learning/frontend/7",
  },
  {
    title: "Hooks in React",
    duration: "4 mins",
    link: "/learning/frontend/8",
  },
  {
    title: "React States",
    duration: "4 mins",
    link: "/learning/frontend/9",
  },
  {
    title: "Props in React",
    duration: "3 mins",
    link: "/learning/frontend/10",
  },
  {
    title: "Components in React",
    duration: "2 mins",
    link: "/learning/frontend/11",
  },
  {
    title: "Hooks in React",
    duration: "4 mins",
    link: "/learning/frontend/12",
  },
  {
    title: "React States",
    duration: "4 mins",
    link: "/learning/frontend/13",
  },
  {
    title: "Props in React",
    duration: "3 mins",
    link: "/learning/frontend/14",
  },
  {
    title: "Routing",
    duration: "5 mins",
    link: "/learning/frontend/15",
  },
  {
    title: "Tailwind CSS",
    duration: "1 hr",
    link: "/learning/frontend/16",
  },
  {
    title: "Sitemap ",
    duration: "4 mins",
    link: "/learning/frontend/17",
  },
  {
    title: "Git & GitHub basics ",
    duration: "4 mins",
    link: "/learning/frontend/18",
  },
  {
    title: "Basic Commands ",
    duration: "5 mins",
    link: "/learning/frontend/19",
  },
  {
    title: "Code Reviews & PRs ",
    duration: "5 mins",
    link: "/learning/frontend/20",
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

        <h1 className="text-5xl font-bold text-center">
          Get started with Frontend Development Today!
        </h1>
        <p className="text-lg text-center text-gray-400">
          Here are some learning materials to help you get started with frontend
          development. We
          <br />
          recommend you go through them in order.
        </p>

        <div className="relative">
          <Input
            className="w-full bg-[#1a1b26] border-none text-white placeholder-gray-500 pl-10 pr-4 py-2 rounded-md"
            placeholder={`Search through ${allTips.length} available learning materials`}
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
