import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    category: "RESEARCH",
    title: "Basics of Python and Machine Learning All you need know",
    description:
      "Basic Python syntax, covering variables, data types, loops, and conditionals with examples and explanations.",
    date: "19 JANUARY 2025",
    image: "https://www.lupleg.org/ml/alpha.webp",
    link: "/30dayschallenge/deep-learning/days/1",
  },
  {
    category: "RESEARCH",
    title: "Setting up a Python environment in all operating systems",
    description:
      "How can you set up a Python environment in all operating systems?",
    date: "24 JANUARY 2025",
    image: "https://www.lupleg.org/ml/FermiNet.webp",
    link: "/30dayschallenge/deep-learning/days/2",
  },
  {
    category: "RESEARCH",
    title: "The basics of using Matplotlib and Seaborn for data visualization",
    description:
      "We'll cover how to create basic plots such as line plots, bar plots...",
    date: "24 JANUARY 2025",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/3",
  },
  {
    category: "RESEARCH",
    title:
      "Introduction to Machine Learning with some key concepts and examples",
    description:
      "We'll cover the basics of machine learning, and then we'll walk through ...",
    date: "24 JANUARY 2025",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/4",
  },
  {
    category: "RESEARCH",
    title:
      "Linear Regression and Logistic Regression, including their concepts",
    description:
      "Exploring the mathematical foundations of linear and logistic regression in ...",
    date: "24 JANUARY 2025",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/5",
  },
  {
    category: "RESEARCH",
    title:
      "Basic steps to implement a Logistic Regression model using Scikit-Learn",
    description:
      "For dataset, will use Iris dataset, which is commonly used for classification tasks",
    date: "24 JANUARY 2025",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/6",
  },
  {
    category: "RESEARCH",
    title:
      " Data preprocessing is a crucial step in the data analysis and machine learning pipeline",
    description:
      "Common preprocessing techniques include scaling, normalization, and encoding.......",
    date: "24 JANUARY 2025",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/7",
  },
  {
    category: "RESEARCH",
    title: "Basics of Neural Networks and understand the key components",
    description:
      "A neural network is a computational model inspired by the way biological neural networks..",
    date: "26 JANUARY 2025",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/8",
  },
  {
    category: "RESEARCH",
    title:
      "Basic Classification with a Neural Network with Keras and TensorFlow",
    description:
      "Keras models are typically built using the Sequential API or the Functional API",
    date: "26 JANUARY 2025",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/9",
  },
  {
    category: "RESEARCH",
    title: "Building Simple Neural Network(NN) from Scratch with Python",
    description:
      "Today we are going to build and train a simple neural network using the MNIST dataset...",
    date: "26 JANUARY 2025",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/10",
  },
  {
    category: "RESEARCH",
    title:
      "Practical Concepts in Deep Learning for Beginners with TensorFlow and Keras",
    description:
      "We'll cover the basics of deep learning, and then we'll walk through...",
    date: "26 JANUARY 2025",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/11",
  },
  {
    category: "RESEARCH",
    title:
      "Implementation of dropout and batch normalization in a neural network model",
    description:
      "We'll cover the basics of dropout and batch normalization, and then we'll walk through...",
    date: "26 JANUARY 2025",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/12",
  },
  {
    category: "RESEARCH",
    title:
      "Convolutional Neural Networks (CNNs) are a powerful type of Neural Network",
    description:
      "Let's build and train a simple CNN using Python and the popular deep learning library... ",
    date: "26 JANUARY 2025",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/13",
  },
  {
    category: "RESEARCH",
    title:
      "Evaluating the performance of a Convolutional Neural Network (CNN)",
    description:
      "Evaluating the performance of a CNN is crucial to understand how well the model is performing...",
    date: "26 JANUARY 2025",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/14",
  },
  {
    category: "RESEARCH",
    title:
      "Improving the performance and robustness of Machine Learning Model",
    description:
      "Data augmentation is a technique used to artificially increase the size of a dataset...",
    date: "26 JANUARY 2025",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/15",
  }
];

export default function CardHeader() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-5xl text-[#2D1537] font-bold border border-[#2D1537] p-4 ">
          Latest challenge
        </h2>
        <Link
          href="https://github.com/Lupleg/30DaysOfDeepLearning"
          className="text-[#2D1537] hover:underline"
        >
          Markdown Repository
        </Link>
      </div>
      <p className="text-gray-600 mb-8">
        Everything you need to know about deep learning in 30 days.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                {item.category}
              </p>
              <h3 className="text-xl mb-2 text-black">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">{item.date}</p>
                <Link
                  href={item.link}
                  className="text-[#2D1537] hover:underline"
                >
                  <p className="">Read more</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
