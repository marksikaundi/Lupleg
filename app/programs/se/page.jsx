import SeCard from "./se-card";
import MoreFQA from "@/components/FeaturesCards/MoreFAQ";

export default function SoftwareEngineering() {
  return (
    <div>
      <div className="min-h-screen bg-[#0A0A1B] text-white p-4 sm:p-6 md:p-8 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <img
              src="/ps/dev.svg"
              alt="Software Engineering at Lupleg"
              className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
              width={80}
              height={80}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Software Engineering Essentials
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl sm:max-w-2xl mx-auto px-4">
              Learn the basics of programming, web development, and software
              engineering. Get started with the Software Engineering Program.
            </p>
          </div>

          <SeCard />
        </div>
      </div>
      <MoreFQA />
    </div>
  );
}
