"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SearchIcon } from "lucide-react";
import changelogData from "./data"; // Ensure this path is correct
import Link from "next/link";

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
      <header className=" top-20 left-0 right-0  p-4 z-0 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center">
          <div className="relative ml-4 flex-grow">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
            <Input
              className="w-full pl-10 bg-[#2D1537] border-[#2D1537] text-white"
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
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[#2D1537]"></div>

          <div className="space-y-12 ml-12">
            {filteredChangelog.map((item) => (
              <div key={item.id} className="relative">
                <div className="absolute -left-[37px] top-0 w-3 h-3 bg-[#2D1537] rounded"></div>
                {item.id === 0 ? (
                  <Card className="bg-[#2D1537] mr-4 p-4 border-gray-900">
                    <h2 className="text-lg font-semibold text-[#F3A833] mb-2">
                      Progress: {item.title}
                    </h2>
                    <p className="text-white mb-4">{item.content}</p>
                    <p className="text-white text-sm mb-4">{item.date}</p>
                  </Card>
                ) : (
                  <div>
                    <h2 className="text-lg font-semibold text-[#2D1537] mb-2">
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
