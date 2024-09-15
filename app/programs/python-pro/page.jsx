import PoCard from "./po-card";
import MoreFQA from "@/components/FeaturesCards/MoreFAQ";

export default function PythonPro() {
  return (
    <div>
      <div className="min-h-screen bg-[#0A0A1B] text-white p-4 sm:p-6 md:p-8 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <img
              src="/ps/re.svg"
              alt="Glowing potion bottle"
              className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
              width={80}
              height={80}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Free Python Pro Tutorials
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl sm:max-w-2xl mx-auto px-4">
              A collection of free, exercise-driven, in-depth Python Pro
              tutorials for you to use on your journey to Python Pro wizardry.
            </p>
          </div>

          <PoCard />
        </div>
      </div>
      <MoreFQA />
    </div>
  );
}
