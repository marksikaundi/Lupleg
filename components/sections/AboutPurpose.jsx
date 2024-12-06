import { PenLine, ArrowRight } from "lucide-react";

export default function AboutPurpose() {
  return (
    <div className="bg-white p-8  max-w-2xl mx-auto">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-[#c9c0cd] p-3 rounded-full mb-4">
          <PenLine className="w-6 h-6 text-[#2D1537]" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Principles</h2>
        <svg
          className="w-24 h-6 text-[#2D1537]"
          viewBox="0 0 100 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 12C16.6667 12 16.6667 24 33.3333 24C50 24 50 0 66.6667 0C83.3333 0 83.3333 12 100 12"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
      <ul className="space-y-6">
        {[
          "Lupleg should be enjoyable, challenging and valuable.",
          "Lupleg should encourage a growth-mindset, clear and empathetic communication, and emphasize the value in learning together.",
          "Lupleg should feel safe and nurturing.",
          "Lupleg focusses on the learning journey, not the destination. The process and enjoyment of learning is more important than absolute factual correctness.",
        ].map((principle, index) => (
          <li key={index} className="flex items-start">
            <div className="bg-[#c9c0cd] p-1 rounded-full mr-4 mt-1">
              <ArrowRight className="w-4 h-4 text-[#2D1537]" />
            </div>
            <p className="text-gray-700 flex-1">{principle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
