import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const challenges = [
  {
    title: "Responsive Navigation Bar",
    description:
      "Create a responsive navigation bar that collapses into a hamburger menu on mobile devices.",
    level: "Beginner",
    duration: "3-4 days",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png",
    link: "/challenges/frontend/nav-bar",
  },
  {
    title: "Interactive Pricing Component",
    description:
      "Build an interactive pricing component with a toggle for monthly/yearly billing.",
    level: "Intermediate",
    duration: "4-5 days",
    techStack: ["React", "CSS", "State Management"],
    image: "https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png",
    link: "/challenges/frontend/pricing-card",
  },
  {
    title: "Dark Mode Toggle",
    description:
      "Implement a dark mode toggle that switches between light and dark themes.",
    level: "Intermediate",
    duration: "3-4 days",
    techStack: ["React", "CSS Variables", "Local Storage"],
    image: "https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png",
    link: "/challenges/frontend/dark-mode-toggle",
  },
  {
    title: "Drag and Drop Area",
    description:
      "Create a drag and drop Area with functionality displaying name of file uploaded.",
    level: "Advanced",
    duration: "1 week",
    techStack: ["React", "File API", "Drag & Drop API"],
    image: "https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png",
    link: "/challenges/frontend/drag-and-drop",
  },
  {
    title: "Animated Page Transitions",
    description:
      "Implement smooth page transitions using CSS animations or a animation library.",
    level: "Advanced",
    duration: "1 week",
    techStack: ["React", "Framer Motion", "CSS Animations"],
    image: "https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png",
    link: "/challenges/frontend/animation",
  },
  {
    title: "Custom Video Player",
    description:
      "Build a custom video player with play, pause, seek, and volume controls.",
    level: "Intermediate",
    duration: "5-6 days",
    techStack: ["HTML5", "JavaScript", "Media API"],
    image: "https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png",
    link: "/challenges/frontend/video-player",
  },
  {
    title: "Pay Card Form",
    description:
      "Create a credit card form with card number, expiry date, and CVC code.",
    level: "Advanced",
    duration: "1 week",
    techStack: ["React", "Form Validation", "Payment APIs"],
    image: "https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png",
    link: "/challenges/frontend/pay",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2D1537] to-purple-600 mb-6 animate-fade-in">
            Frontend Development Challenges
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master frontend development through hands-on challenges and
            real-world projects. Perfect your skills with our carefully curated
            challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden border border-gray-100"
            >
              <div className="relative">
                <Image
                  src={challenge.image}
                  alt={challenge.title}
                  width={400}
                  height={200}
                  className="w-full object-cover h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-4 py-1.5 text-sm font-medium rounded-full 
                      ${
                        challenge.level === "Beginner"
                          ? "bg-green-100 text-green-800"
                          : challenge.level === "Intermediate"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-purple-100 text-purple-800"
                      } 
                      shadow-sm backdrop-blur-sm bg-opacity-90`}
                  >
                    {challenge.level}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#2D1537] transition-colors">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {challenge.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-center text-gray-500 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm">
                      Duration:{" "}
                      <span className="font-medium text-gray-900">
                        {challenge.duration}
                      </span>
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {challenge.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href={challenge.link} className="block">
                  <Button className="w-full bg-white hover:bg-[#2D1537] text-[#2D1537] hover:text-white border-2 border-[#2D1537] font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group">
                    View Challenge
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
