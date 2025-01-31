import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

const categories = [
  { name: "Author's Corner", slug: "authors-corner" },
  { name: "Career Insights", slug: "career-insights" },
  { name: "Programming", slug: "programming" },
];

const posts = [
  {
    id: 1,
    title: "How many Kata did you complete in 2024?",
    excerpt:
      "2024 was one of our busiest years yet; let's take a moment to celebrate it.",
    image:
      "https://sjc.microlink.io/dzzPYDNUjRE-ZJDrx92QWIsZJunE4XrQZG4cgJyO7KQzfMTozL_Mr5PPN4F1qHqZHE92k1eThc98ojhw3mBjkg.jpeg",
    author: {
      name: "Vanessa Greene",
      avatar: "/placeholder.svg",
    },
    date: "January 14, 2025",
    slug: "kata-completion-2024",
    category: "Author's Corner",
  },
  {
    id: 2,
    title: "Mastering JavaScript: Advanced Kata Techniques",
    excerpt:
      "Deep dive into advanced JavaScript concepts through practical kata examples and expert solutions.",
    image:
      "https://sjc.microlink.io/dzzPYDNUjRE-ZJDrx92QWIsZJunE4XrQZG4cgJyO7KQzfMTozL_Mr5PPN4F1qHqZHE92k1eThc98ojhw3mBjkg.jpeg",
    author: {
      name: "David Chen",
      avatar: "/placeholder.svg",
    },
    date: "January 10, 2025",
    slug: "mastering-javascript-kata",
    category: "Programming",
  },
  {
    id: 3,
    title: "From Kata to Career: Success Stories",
    excerpt:
      "Meet developers who transformed their careers through consistent practice and dedication to coding challenges.",
    image:
      "https://sjc.microlink.io/dzzPYDNUjRE-ZJDrx92QWIsZJunE4XrQZG4cgJyO7KQzfMTozL_Mr5PPN4F1qHqZHE92k1eThc98ojhw3mBjkg.jpeg",
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg",
    },
    date: "January 7, 2025",
    slug: "kata-success-stories",
    category: "Career Insights",
  },
  {
    id: 4,
    title: "Python Best Practices: Lessons from Top Kata Solutions",
    excerpt:
      "Learn Python best practices and clean coding techniques from the most elegant kata solutions.",
    image:
      "https://sjc.microlink.io/dzzPYDNUjRE-ZJDrx92QWIsZJunE4XrQZG4cgJyO7KQzfMTozL_Mr5PPN4F1qHqZHE92k1eThc98ojhw3mBjkg.jpeg",
    author: {
      name: "Michael Zhang",
      avatar: "/placeholder.svg",
    },
    date: "January 5, 2025",
    slug: "python-best-practices",
    category: "Programming",
  },
  {
    id: 5,
    title: "Building Your Developer Portfolio with Codewars",
    excerpt:
      "How to leverage your kata solutions and achievements to create a compelling developer portfolio.",
    image:
      "https://sjc.microlink.io/dzzPYDNUjRE-ZJDrx92QWIsZJunE4XrQZG4cgJyO7KQzfMTozL_Mr5PPN4F1qHqZHE92k1eThc98ojhw3mBjkg.jpeg",
    author: {
      name: "Emma Rodriguez",
      avatar: "/placeholder.svg",
    },
    date: "January 3, 2025",
    slug: "portfolio-building",
    category: "Career Insights",
  },
  {
    id: 6,
    title: "The Art of Creating Kata: A Guide for Authors",
    excerpt:
      "Expert tips and guidelines for creating challenging and educational kata that engage the community.",
    image:
      "https://sjc.microlink.io/dzzPYDNUjRE-ZJDrx92QWIsZJunE4XrQZG4cgJyO7KQzfMTozL_Mr5PPN4F1qHqZHE92k1eThc98ojhw3mBjkg.jpeg",
    author: {
      name: "James Wilson",
      avatar: "/placeholder.svg",
    },
    date: "January 1, 2025",
    slug: "creating-kata-guide",
    category: "Author's Corner",
  },
];

export default function BlogPage() {
  return (
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Developer Blog
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Developer resources & insights from the Codewars team and our
            partners
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={category.slug}
                variant="secondary"
                className="bg-gray-800 hover:bg-gray-700 text-gray-300"
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="bg-[#25262C] border-gray-800 overflow-hidden hover:border-gray-700 transition-colors">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[1fr_1.5fr] gap-6">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        {post.title}
                      </h2>
                      <p className="text-gray-400 mb-6">{post.excerpt}</p>
                      <div className="flex gap-2 mb-4">
                        <Badge
                          variant="secondary"
                          className="bg-gray-800 hover:bg-gray-700 text-gray-300"
                        >
                          {post.category}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaUserCircle
                        width={40}
                        height={40}
                        className="rounded-full"
                        />
                        <Image
                          src={post.author.avatar || "/mark.jpg"}
                          alt={post.author.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <div className="font-medium">{post.author.name}</div>
                          <div className="text-sm text-gray-400">
                            {post.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
  );
}
