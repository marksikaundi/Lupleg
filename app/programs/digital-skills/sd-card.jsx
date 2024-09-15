"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const elements = [
  {
    title: "Productivity",
    shortDesc: "Cover all productivity tools",
    longDesc:
      "Productivity software (also called personal productivity software or office productivity software) is application software used for producing information (such as documents, presentations, worksheets, databases, charts, graphs, digital paintings, electronic music, and digital video).",
  },
  {
    title: "Development",
    shortDesc: "Cover all development tools",
    longDesc:
      "Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.",
  },
  {
    title: "P Management",
    shortDesc: "Cover all project management tools",
    longDesc:
        "Project management is the process of leading the work of a team to achieve goals and meet success criteria at a specified time. The primary challenge of project management is to achieve all of the project goals within the given constraints.",
  },
  {
    title: "SM Marketing",
    shortDesc: "Promoting products and services",
    longDesc:
      "Social media marketing is the use of social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic. This involves publishing great content on your social media profiles, listening to and engaging your followers, analyzing your results, and running social media advertisements.",
  },
  {
    title: "Freelancing",
    shortDesc: "Promoting products and services",
    longDesc:
      "A freelancer is a self-employed person who offers services, often working on several jobs for multiple clients at one time. Freelancers usually earn money on a per-job basis, charging hourly or daily rates for their work. Freelance work is usually short-term.",
  },
];

export default function SDCard() {
  const [selectedElement, setSelectedElement] = useState(elements[0]);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 p-6 bg-[#13132B] border border-gray-400 rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Packages Included</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {elements.map((element) => (
          <button
            key={element.title}
            onClick={() => {
              setSelectedElement(element);
              setIsExpanded(false);
            }}
            className={`px-4 py-2 rounded text-sm sm:text-base transition-colors duration-200 ${
              selectedElement.title === element.title
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {element.title}
          </button>
        ))}
      </div>
      <motion.div layout className="bg-secondary/50 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-3">{selectedElement.title}</h3>
        <p className="text-lg">{selectedElement.shortDesc}</p>
        <AnimatePresence>
          {isExpanded && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-base"
            >
              {selectedElement.longDesc}
            </motion.p>
          )}
        </AnimatePresence>
        <motion.button
          layout
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
        >
          <span className="mr-2 text-lg">
            {isExpanded ? "Read less" : "Read more"}
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
}
