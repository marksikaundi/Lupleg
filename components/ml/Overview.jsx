import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    category: "RESEARCH",
    title:
      "AlphaProteo generates novel proteins for biology and health research",
    description:
      "New AI system designs proteins that successfully bind to target molecules, with...",
    date: "5 SEPTEMBER 2024",
    image: "https://www.lupleg.org/ml/alpha.webp",
    link: "/research/machine-learning/1",
  },
  {
    category: "RESEARCH",
    title: "FermiNet: Quantum physics and chemistry from first principles",
    description:
      "Using deep learning to solve fundamental problems in computational quantum...",
    date: "22 AUGUST 2024",
    image: "https://www.lupleg.org/ml/FermiNet.webp",
    link: "/research/machine-learning/2",
  },
  {
    category: "COMPANY",
    title:
      "A new generation of African talent brings cutting-edge AI to scientific challenges",
    description:
      "Food security, healthcare and exploring the cosmos are among the ways students of a...",
    date: "5 AUGUST 2024",
    image: "https://www.lupleg.org/_next/image?url=%2Fml%2Fnew.webp&w=828&q=75",
    link: "/research/machine-learning/3",
  },
];

export default function LatestNews() {  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Latest updates</h2>
        <Link href="#/all-posts" className="text-[#2D1537] hover:underline">
          Repository
        </Link>
      </div>
      <p className="text-gray-600 mb-8">
        Discover our latest AI breakthroughs and updates from the Lupleg lab
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
