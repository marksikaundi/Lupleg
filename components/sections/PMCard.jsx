import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CodeIcon,
  DatabaseIcon,
  BrainCircuitIcon,
  PanelTopIcon,
  BoxesIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    icon: <BrainCircuitIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />,
    title: "Top Interview 150",
    description: "Must-do List for Interview Prep",
    color: "bg-blue-900",
  },
  {
    icon: <CodeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-500" />,
    title: "Lupleg 75",
    description: "Ace Coding Interview with 75 Qs",
    color: "bg-indigo-900",
  },
  {
    icon: <DatabaseIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />,
    title: "SQL 50",
    description: "Crack SQL Interview in 50 Qs",
    color: "bg-blue-900",
  },
  {
    icon: <PanelTopIcon className="w-6 h-6 sm:w-8 sm:h-8 text-teal-500" />,
    title: "Introduction to Pandas",
    description: "Learn Basic Pandas in 15 Qs",
    color: "bg-teal-900",
    link: "",
  },
  {
    icon: <BoxesIcon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />,
    title: "30 Days of JavaScript",
    description: "Learn JS Basics with 30 Qs",
    color: "bg-yellow-900",
    link: "",
  },
  {
    icon: (
      <ShoppingCartIcon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
    ),
    title: "Amazon Spring '23 High Frequency",
    description: "Practice Amazon 25 Recently Asked Qs",
    color: "bg-orange-900",
    link: "",
  },
];

export default function PMCard() {
  return (
    <div className="p-4 sm:p-6 bg-gray-900">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white">Study Plan</h2>
        <a
          href="#"
          className="text-sm sm:text-base text-blue-400 hover:underline"
        >
          See all
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {courses.map((course, index) => (
          <Card key={index} className={`${course.color} text-white`}>
            <CardHeader className="flex flex-row items-center gap-3 sm:gap-4 p-3 sm:p-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-opacity-20 bg-white flex items-center justify-center flex-shrink-0">
                {course.icon}
              </div>
              <div className="space-y-0.5">
                <CardTitle className="text-sm sm:text-base font-semibold">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm mb-6 text-gray-300">
                  {course.description}
                </CardDescription>
                <div className="mt-6 ">
                  <Button className="bg-white hover:bg-white text-green-950">Learn more {course.link}</Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
