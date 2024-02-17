import { Button } from "@/components/ui/button";
import Cards from "/components/FeaturesCards/Cards.jsx"

export default function Component() {
  return (
    <div className="bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800">
          <span className="block xl:inline">The efficiency of a help</span>{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400 xl:inline">
            desk with the
          </span>{" "}
          <span className="block xl:inline">familiarity</span>{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 xl:inline">
            of email
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600">
          Front is a customer operations platform that enables teams to
          streamline communication and deliver exceptional service at scale.
        </p>
        <Button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300">
          Get started
        </Button><br/>
      </div>
      <div className="mt-50">
      <Cards/>
      </div>
    </div>
  );
}
