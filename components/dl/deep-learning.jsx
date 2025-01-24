import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    category: "RESEARCH",
    title:
      "Basics of Python and Machine Learning All you need know",
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
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/2",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/2",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/3",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/3",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/4",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/4",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/5",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/5",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/3",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/6",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/6",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/7",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/7",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/8",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/8",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/9",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/9",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/10",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/10",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/11",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/11",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/12",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/12",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/13",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/13",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/14",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/14",
  },
  {
    category: "PROJECTS IDEAS",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/30dayschallenge/deep-learning/days/15",
  },
];

export default function DeepLearning() {
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
