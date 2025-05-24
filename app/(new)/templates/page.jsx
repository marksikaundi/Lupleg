"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Code,
  Layers,
  Laptop,
  PenTool,
  Search,
  Filter,
} from "lucide-react";

import { templates } from "./data";

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(templates.map((t) => t.category))];

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section with Glassmorphism */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 " />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center relative z-10">
            <h1 className="text-4xl font-extrabold text-[#2D1537] sm:text-5xl md:text-6xl [text-wrap:balance] bg-clip-text">
              Stunning Website Templates
            </h1>
            <p className="mt-6 max-w-md mx-auto text-lg text-[#2D1537]0 sm:text-xl md:mt-8 md:max-w-3xl">
              Discover our collection of professionally crafted templates.
              Transform your ideas into reality with just a few clicks.
            </p>

            {/* Search and Filter Bar */}
            <div className="mt-10 max-w-2xl mx-auto">
              <div className="flex gap-4 p-2 bg-[#2D1537] backdrop-blur-lg rounded-full shadow-lg border border-white/10">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search templates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border-0 rounded-full text-white placeholder-white/60 focus:ring-2 focus:ring-white/25 focus:outline-none"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-white/5 border-0 rounded-full text-white focus:ring-2 focus:ring-white/25 focus:outline-none appearance-none cursor-pointer"
                >
                  {categories.map((category) => (
                    <option
                      key={category}
                      value={category}
                      className="text-gray-900"
                    >
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((template, index) => (
            <div
              key={index}
              className="group relative bg-[#2D1537]/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/10"
            >
              {/* Preview Image with Gradient Overlay */}
              <div className="aspect-w-16 aspect-h-9 bg-[#2D1537] relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-90 transition-opacity group-hover:opacity-100`}
                />
                <template.icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white opacity-25 transition-all duration-500 group-hover:scale-110 group-hover:opacity-40" />
              </div>

              {/* Content with Hover Effects */}
              <div className="p-6 transition-transform duration-500 group-hover:transform group-hover:translate-y-[-4px]">
                <div className="flex items-center space-x-2">
                  <template.icon className="w-5 h-5 text-white/70" />
                  <span className="text-sm font-medium text-white/70">
                    {template.category}
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-bold text-white">
                  {template.title}
                </h3>
                <p className="mt-2 text-white/70 line-clamp-2">
                  {template.description}
                </p>

                <Link
                  href={`/templates/${template.id}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-indigo-300 hover:text-indigo-200 group/link"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-indigo-300 after:transition-transform after:duration-300 group-hover/link:after:scale-x-100">
                    View Template
                  </span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className=" relative overflow-hidden">
        <div className="absolute inset-0  " />
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 relative z-10">
          <div className="bg-[#2D1537] backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block">Ready to transform your project?</span>
                <span className="block mt-2 text-indigo-200 text-2xl">
                  Choose from our premium collection of templates.
                </span>
              </h2>
              <div className="mt-8 lg:mt-0 flex flex-col sm:flex-row gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-[#2D1537] bg-white hover:bg-indigo-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Browse All Templates
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white/10 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
