import { HelpCircle, Sparkles, HandshakeIcon } from "lucide-react";

export default function WhyBecomeMentor() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-[#2D1537] mb-2">
        Why become a mentor?
      </h2>
      <div className="w-24 h-1 bg-[#2D1537] mx-auto mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-[#2D1537]" />
          </div>
          <h3 className="text-xl font-semibold text-[#2D1537] mb-2">
            Challenge your knowledge
          </h3>
          <p className="text-gray-600">
            Teaching is one of the best ways to solidify your own knowledge,
            discover your weak spots, and see innovative ideas you'd never have
            dreamed of.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-[#2D1537]" />
          </div>
          <h3 className="text-xl font-semibold text-[#2D1537] mb-2">
            Provide opportunity for others
          </h3>
          <p className="text-gray-600">
            Mentors can have a tremendous impact on students' learning, rapidly
            accelerating their skills. Be that catalyst for change in another's
            life.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <HandshakeIcon className="w-8 h-8 text-[#2D1537]" />
          </div>
          <h3 className="text-xl font-semibold text-[#2D1537] mb-2">
            Develop your "soft skills"
          </h3>
          <p className="text-gray-600">
            Soft skills like communication and being able to take feedback are
            paramount in progressing in any field or profession.
          </p>
        </div>
      </div>
    </div>
  );
}
