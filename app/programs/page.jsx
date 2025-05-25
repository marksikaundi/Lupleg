import PsCard from "./ps-card";
import MoreFQA from "@/components/FeaturesCards/MoreFAQ";

export default function Programs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center relative z-10">
            <div className="relative inline-block animate-float">
              <div className="absolute inset-0 bg-blue-500 opacity-20 blur-xl rounded-full" />
              <img
                src="/pg.svg"
                alt="Programs icon"
                className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-8 transform transition-transform duration-500 hover:scale-110"
                width={128}
                height={128}
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              Our Programs
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
              Embark on your journey to tech mastery with our carefully crafted
              programs. Choose your path and transform your future.
            </p>
          </div>
        </div>
      </div>

      {/* Programs Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-lg font-medium text-gray-500">
              Available Programs
            </span>
          </div>
        </div>

        <div className="mt-12">
          <PsCard />
        </div>
      </div>

      {/* FAQ Section with updated styling */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <MoreFQA />
        </div>
      </div>
    </div>
  );
}
