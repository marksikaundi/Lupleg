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
        A confusion matrix is a table that is often used to describe the
        performance of a classification model on a set of test data for which
        the true values are known. It allows you to see the number of correct
        and incorrect predictions made by the model compared to the actual
        classifications in the test data.
      </p>
      <div className="space-y-4 text-gray-700">
        <h2 className="my-4 font-bold">Confusion Matrix</h2>
       
        <p>
          The confusion matrix is a 2x2 table that contains 4 outputs provided
          by the binary classifier. Various measures, such as error-rate,
          accuracy, specificity, sensitivity, precision, and recall, can be
          derived from the confusion matrix.
        </p>

        <h2 className="my-4 font-bold">How to run CNNs</h2>

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
