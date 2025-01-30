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
        Evaluating the performance of a Convolutional Neural Network (CNN)
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
      <p className="font-mono text-lg mb-6">
        Convolutional Neural Networks (CNNs) involves understanding both the
        theoretical concepts and practical implementation details. Here are key
        areas and best practices to focus on.
      </p>
      <div className="space-y-4 text-gray-700">
        <p>
          <strong>1. Convolutional Neural Networks (CNNs)</strong> are a
          powerful type of Neural Network that can learn useful features from
          raw data. They are widely used in image and video recognition,
          recommender systems, and natural language processing.
        </p>{" "}
        <p>
          <strong>2. How to run CNNs</strong> involves understanding both the
          theoretical concepts and practical implementation details. Here are
          key areas and best practices to focus on. Convolutional Neural Networks
          (CNNs) are a powerful type of Neural Network that can learn useful
          features from raw data. They are widely used in image and video
          recognition, recommender systems, and natural language processing.
          </p>{" "}
          




        <h2 className="my-4 font-bold">How can run CNNs</h2>
        <ul className="list-disc ml-8">
          <li>Define a simple CNN model</li>
          <li>Add layers to the model</li>
          <li>Compile the model</li>
          <li>Train the model</li>
          <li>Evaluate the model</li>
        </ul>


        <h2 className="my-4 font-bold">How to run CNNs</h2>
        





        
        <div>
          <h2></h2>
          <p>
            Credit source from:
            <Link
              className="ml-4 font-bold italic"
              href="https://deepmind.google/discover/blog/a-new-generation-of-african-talent-brings-cutting-edge-ai-to-scientific-challenges/"
            >
              Google DeepMind
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
