"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SearchIcon } from "lucide-react";
import changelogData from "./data"; // Ensure this path is correct

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(changelogData);
  }, []);

  const filteredChangelog = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative min-h-screen mb-20 text-white">
      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 bg-black p-4 z-50 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center">
          <h1 className="text-2xl font-bold text-white">Changelog</h1>
          <div className="relative ml-4 flex-grow">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              className="w-full pl-10 bg-gray-900 border-gray-700 text-white"
              placeholder="Search for a feature, about the changes from..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search changelog"
            />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-20 pb-8 overflow-auto">
        {" "}
        {/* Adjust padding-top to account for fixed header */}
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-black"></div>

          <div className="space-y-12 ml-12">
            {filteredChangelog.map((item) => (
              <div key={item.id} className="relative">
                <div className="absolute -left-[37px] top-0 w-3 h-3 bg-black rounded"></div>
                {item.id === 0 ? (
                  <Card className="bg-black mr-4 p-4 border-gray-900">
                    <h2 className="text-lg font-semibold text-[#F3A833] mb-2">
                      Progress: {item.title}
                    </h2>
                    <p className="text-white mb-4">{item.content}</p>
                    <p className="text-white text-sm mb-4">{item.date}</p>
                  </Card>
                ) : (
                  <div>
                    <h2 className="text-lg font-semibold text-black mb-2">
                      {item.title}
                    </h2>
                    <p className="text-black mb-4">{item.content}</p>
                    <p className="text-black text-sm mb-4">{item.date}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
