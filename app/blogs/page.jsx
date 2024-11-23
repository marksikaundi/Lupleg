import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "Comparison between homegrown and pre-built solutions",
      excerpt:
        "For high-growth startups, time is the single most important resource. It's so important that months of delay in shipping SSO and SCIM can result in a potential revenue loss of $7.95M compared to using a pre-built solution. The ROI difference is staggering too: 9% for a homegrown solution vs. 1,954% for a pre-built one. This article explains the methodologies used to calculate these numbers.",
      category: "Guides",
      date: "Aug 22, 2024",
      authors: [{ name: "Mark Sikaundi", avatar: "/mark.jpg" }],
      image:
        "https://utfs.io/f/7VIvQ6butVFYMLEIhAUWpDyXQwsIS92qUJ0HGmONublYKPz7",
      link: "/blogs/articles/comparison-between-homegrown-and-pre-built-solutions",
    },
    {
      id: 2,
      title: "The Future of AI in Web Development",
      excerpt:
        "Artificial Intelligence is revolutionizing the way we approach web development. From automated coding assistants to intelligent design systems, AI is reshaping the landscape of web creation. This post explores the current state of AI in web development and predicts future trends.",
      category: "Technology",
      date: "Aug 21, 2024",
      authors: [{ name: "Mark Sikaundi", avatar: "/mark.jpg" }],
      image:
        "https://utfs.io/f/7VIvQ6butVFYMLEIhAUWpDyXQwsIS92qUJ0HGmONublYKPz7",
      link: "/blogs/articles/the-future-of-ai-in-web-development",
    },
    {
      id: 3,
      title: "Optimizing React Performance",
      excerpt:
        "React applications can sometimes suffer from performance issues as they grow in complexity. This guide dives deep into advanced optimization techniques, including memoization, code splitting, and efficient state management, to help you build lightning-fast React apps.",
      category: "Development",
      date: "Aug 15, 2024",
      authors: [{ name: "Mark Sikaundi", avatar: "/mark.jpg" }],
      image:
        "https://utfs.io/f/7VIvQ6butVFYMLEIhAUWpDyXQwsIS92qUJ0HGmONublYKPz7",
      link: "/blogs/articles/optimizing-react-performance",
    },
    {
      id: 4,
      title: "The Rise of Serverless Architecture",
      excerpt:
        "Serverless architecture is gaining traction in the world of cloud computing. This post examines the benefits and challenges of serverless, and how it's changing the way developers build and deploy applications. We'll also look at some real-world use cases and best practices.",
      category: "Cloud",
      date: "Aug 10, 2024",
      authors: [{ name: "Mark Sikaundi", avatar: "/mark.jpg" }],
      image:
        "https://utfs.io/f/7VIvQ6butVFYMLEIhAUWpDyXQwsIS92qUJ0HGmONublYKPz7",
      link: "/blogs/articles/the-rise-of-serverless-architecture",
    },
    {
      id: 5,
      title: "Accessibility in Web Design: A Comprehensive Guide",
      excerpt:
        "Creating accessible websites is not just a legal requirement, it's a moral imperative. This comprehensive guide covers everything from WCAG guidelines to practical implementation techniques, helping you make your web applications usable by everyone, regardless of their abilities.",
      category: "Design",
      date: "Aug 5, 2024",
      authors: [{ name: "Mark Sikaundi", avatar: "/mark.jpg" }],
      image:
        "https://utfs.io/f/7VIvQ6butVFYMLEIhAUWpDyXQwsIS92qUJ0HGmONublYKPz7",
      link: "/blogs/articles/accessibility-in-web-design",
    },
    {
      id: 6,
      title: "The State of Remote Work in 2024",
      excerpt:
        "Remote work has become the new norm for many companies around the world. This post explores the latest trends and statistics in the remote work landscape, including the rise of hybrid work models, the impact on employee productivity, and the future of remote work post-pandemic.",
      category: "Business",
      date: "Aug 1, 2024",
      authors: [{ name: "Mark Sikaundi", avatar: "/mark.jpg" }],
      image:
        "https://utfs.io/f/7VIvQ6butVFYMLEIhAUWpDyXQwsIS92qUJ0HGmONublYKPz7",
      link: "/blogs/articles/the-state-of-remote-work",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-16 mt-20">
        <div className="flex justify-between items-baseline">
          <h1 className="text-4xl  font-bold text-green-900">Blogs</h1>
          <p className="text-sm text-gray-500 font-thin border mr-9 border-gray-200 rounded-full p-2">
            Subscribe via{" "}
            <Link
              href="mailto:writer@lupleg.org"
              className="text-green-900 hover:underline"
            >
              email
            </Link>{" "}
            or{" "}
            <Link href="#" className="text-green-900 hover:underline">
              RSS
            </Link>
          </p>
        </div>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={700}
              className="object-cover w-full h-48"
            />
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <h2 className="text-2xl font-semibold">{post.title}</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {post.authors.map((author, index) => (
                    <Avatar key={index} className="border-2 border-white">
                      <AvatarImage src={author.avatar} alt={author.name} />
                      <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>

                <Link
                  href={post.link || ""}
                  className="text-green-800 hover:underline"
                >
                  Read more
                </Link>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
