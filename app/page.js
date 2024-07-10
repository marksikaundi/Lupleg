import ProgramSummary from "@/components/FeaturesCards/ProgramSummary";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto pt-25 pb-25 px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800">
          <span className="block xl:inline">The efficiency of help and</span>{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400 xl:inline">
            Collaboration with
          </span>{" "}
          <span className="block xl:inline">Developers</span>{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 xl:inline">
            empowers
          </span>
        </h1>

        {/* TODO: For future uncomment this code */}
        {/* <p className="mt-4 p-12 text-base sm:text-lg md:text-2xl text-gray-600">
          Lupleg is a community platform that enables teams to streamline and
          help novice scale up their career in tech.
        </p> */}
        <button className="W-15 mt-8 px-8 py-3 text-md bg-green-950 font-semibold border-2 border-green-950 p-6 text-white rounded  hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-opacity-50 transition duration-300">
          <Link href="challenge">Register </Link>
        </button>
        <br />
      </div>
      <ProgramSummary />
    </div>
  );
}
