import Layout from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

function getPost(slug) {
  const posts = [
    {
      slug: "kata-completion-2024",
      title: "How many Kata did you complete in 2024?",
      content: `2024 was one of our busiest years yet; let's take a moment to celebrate it.
              
      In this retrospective, we'll explore the incredible achievements of our community members and highlight some of the most popular and challenging kata that defined the year.
              
      ## Community Achievements
              
      This year saw unprecedented engagement levels, with developers from around the world pushing their limits and helping others grow. Here are some highlights:
              
      - Over 1 million kata completed
      - 50,000 new warriors joined our community
      - 5,000 new kata created by our dedicated authors
              
      ## Most Popular Kata
              
      The following kata received the highest participation and positive feedback:
              
      1. "Advanced Array Methods"
      2. "Functional Programming Basics"
      3. "Algorithm Optimization Challenges"
              
      ## Looking Forward
              
      As we move into 2025, we're excited to announce new features and challenges that will help you continue your coding journey.`,
      image:
        "https://sjc.microlink.io/dzzPYDNUjRE-ZJDrx92QWIsZJunE4XrQZG4cgJyO7KQzfMTozL_Mr5PPN4F1qHqZHE92k1eThc98ojhw3mBjkg.jpeg",
      author: {
        name: "Vanessa Greene",
        avatar: "/placeholder.svg",
      },
      date: "January 14, 2025",
      category: "Author's Corner",
    },
    // Add more posts as needed
  ]

  return posts.find((post) => post.slug === slug) || null
}

function formatContent(content) {
  return content.split("\n\n").map((paragraph, index) => {
    if (paragraph.startsWith("## ")) {
      return (
        <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
          {paragraph.replace("## ", "")}
        </h2>
      )
    }
    return (
      <p key={index} className="mb-4">
        {paragraph}
      </p>
    )
  })
}

export default function BlogPost({ params }) {
  const post = getPost(params.slug)

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <p className="text-gray-400">The blog post you're looking for doesn't exist.</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8">
          <Badge variant="secondary" className="bg-gray-800 text-gray-300 mb-6">
            {post.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-3">
            <Image
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <div className="font-medium">{post.author.name}</div>
              <div className="text-sm text-gray-400">{post.date}</div>
            </div>
          </div>
        </div>

        <div className="aspect-[16/9] relative mb-8">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-lg" />
        </div>

        <div className="prose prose-invert max-w-none">{formatContent(post.content)}</div>
      </article>
    </Layout>
  )
}

