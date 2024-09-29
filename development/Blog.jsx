import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    title: "Open-Source Bounties at PearAI",
    date: "September 28, 2024",
    description: "PearAI introduces monetary bounties for significant open-source contributions. Solve big issues, get paid, and help build the best AI code editor in the...",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Open Source AI Code Editor"
  },
  {
    title: "Why Open Source Matters for AI Code Editors",
    date: "September 26, 2024",
    description: "Discover why open source is crucial for AI code editors and how PearAI leverages this approach to create a superior product with a thriving community.",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Open Source AI Code Editor"
  },
  {
    title: "How to setup WSL in PearAI",
    date: "September 19, 2024",
    description: "Easy step by step guide to setup WSL in PearAI, and get started with AI-powered coding in WSL.",
    image: "/placeholder.svg?height=200&width=300",
    alt: "WSL Logo"
  },
  {
    title: "How to use GPT o1-mini and o1-preview in PearAI",
    date: "September 15, 2024",
    description: "Learn how to integrate and effectively use GPT o1-mini and o1-preview models in PearAI, along with important considerations for optimal usage.",
    image: "/placeholder.svg?height=200&width=300",
    alt: "OpenAI o1 Logo"
  },
  {
    title: "New Leetcode Feature in PearAI - Supercharge Your Interview Prep With AI",
    date: "September 15, 2024",
    description: "Improve your coding skills and interview readiness with PearAI's LeetCode integration. A practical tool for efficient technical interview preparation.",
    image: "/placeholder.svg?height=200&width=300",
    alt: "LeetCode Logo"
  },
  {
    title: "Install PearAI on Linux: Simple Guide for All Distros",
    date: "September 11, 2024",
    description: "An easy-to-follow guide for downloading and installing PearAI on a wide range of Linux distributions, ensuring a smooth setup for both...",
    image: "/placeholder.svg?height=200&width=300",
    alt: "GNU/Linux Logo"
  }
];

export default function BlogSection() {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <Image
                src={post.image}
                alt={post.alt}
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <p className="text-gray-300 text-sm">{post.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
