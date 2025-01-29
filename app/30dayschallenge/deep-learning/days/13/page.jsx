import SharePost from "../shareCard";
import Link from "next/link";
import Image from "next/image";

export default function Component() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-sm text-gray-500 uppercase text-center my-8">
        RESEARCH
      </div>
      <h1 className="text-4xl font-bold mb-2 text-center">
        Convolutional Neural Networks (CNNs) are a powerful type of Neural
        Network
      </h1>
      <div className="text-center text-gray-500 mb-4">29 JANUARY 2025</div>
      <div className="text-center text-gray-700 mb-6">
        Mark Sikaundi - Data Scientist and AI Researcher.
      </div>
      <div className="flex justify-center mb-8">
        <SharePost className="w-4 h-4 mr-2" />
      </div>
      <Image
        src="/ml/new.webp"
        alt="A new generation of African talent brings cutting-edge AI to scientific challenges"
        height="400"
        width="800"
        className="w-full rounded-lg mb-8"
      />
      <p className="font-mono text-lg mb-6"></p>
      <div className="space-y-4 text-gray-700">
        <p></p>{" "}
        <div>
          <h2></h2>
          <p>
            Explore on from our:
            <Link
              className="ml-4 font-bold italic"
              href="https://github.com/Lupleg/30DaysOfDeepLearning/blob/main/13/Into_CNN.md"
            >
              Lupleg Community
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
