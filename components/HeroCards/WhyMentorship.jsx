import { MessageCircleIcon, QuoteIcon, PenLine } from "lucide-react";

export default function WhyMentorship() {
  return (
    <div className=" px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-[#2D1537] mb-2">
        Why mentoring?
      </h2>
      <div className="flex justify-center mb-12">
        <svg
          width="60"
          height="12"
          viewBox="0 0 60 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 11L11 1L21 11L31 1L41 11L51 1L59 11"
            stroke="#2D1537"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <div className="w-12 h-12 rounded-full bg-[#2D1537] flex items-center justify-center mb-4">
            <QuoteIcon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-[#2D1537] mb-2">
            You don't know what you don't know
          </h3>
          <p className="text-gray-600">
            When learning a new language, the hardest part is not being aware of
            the gaps in your knowledge. Our mentors can look at your code and
            immediately see the ideas you're not familiar with and give you a
            level-up by unlocking new knowledge.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="w-12 h-12 rounded-full bg-[#2D1537] flex items-center justify-center mb-4">
            <PenLine className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-[#2D1537] mb-2">
            Learn language-specific conventions
          </h3>
          <p className="text-gray-600">
            Becoming fluent in a language is more than being able to write code
            in it - it's about being able to think in that language. Our mentors
            will help guide you to how to reshape your thinking to write
            idiomatic code.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="w-12 h-12 rounded-full bg-[#2D1537] flex items-center justify-center mb-4">
            <MessageCircleIcon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-[#2D1537] mb-2">
            Learning with others is fun
          </h3>
          <p className="text-gray-600">
            Getting feedback from real people is an amazingly exciting way to
            learn. And becoming a mentor and giving feedback yourself is an even
            bigger step forward. So complete the circle - be mentored and mentor
            🎉
          </p>
        </div>
      </div>
    </div>
  );
}
