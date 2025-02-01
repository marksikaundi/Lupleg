import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

function getPost(slug) {
  const posts = [
    {
      slug: "how-do-you-fight-the-urge-to-procrastinate",
      title: "How do you fight the urge to procrastinate?",
      content: `Procrastination is a common problem that affects many people. It can be difficult to overcome, but there are strategies you can use to help you stay focused and productive.
                
        ## Reflect on Your Goals

        One of the most effective ways to combat procrastination is to reflect on your goals and priorities. By reminding yourself of what you hope to achieve, you can stay motivated and focused on the task at hand.
                
        ## Break Tasks into Smaller Steps
                
        Large tasks can be overwhelming, leading to procrastination. Break down your tasks into smaller, more manageable steps to make them less daunting.
        
        ## Reward Yourself

        Rewarding yourself for completing tasks can help you stay motivated and avoid procrastination. Consider treating yourself to something you enjoy after finishing a task.
                
        ## Seek Accountability

        Sharing your goals with others can help you stay accountable and motivated. Consider finding a friend or mentor who can help keep you on track.

        ## Conclusion

        Procrastination is a common challenge, but with the right strategies, you can overcome it and achieve your goals. By reflecting on your goals, breaking tasks into smaller steps, rewarding yourself, and seeking accountability, you can stay focused and productive. 
        
        `,
      image:
        "https://www.lupleg.org/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F7c679591-6991-4402-bc63-0ee97010fc6f-1g.png&w=640&q=75",
      author: {
        name: "Mark Sikaundi",
        avatar: "/placeholder.svg",
      },
      date: "January 30, 2025",
      category: "Author's Corner",
    },
    {
      slug: "mastering-javascript-kata",
      title: "Mastering JavaScript: Advanced Kata Techniques",
      content: `Deep dive into advanced JavaScript concepts through practical kata examples and expert solutions.
        
        ## Closures and Scope
        
        Understanding closures is crucial for mastering JavaScript. Let's explore a kata that demonstrates this concept.
        
        ## Functional Programming
        
        Functional programming techniques can lead to cleaner, more maintainable code. We'll look at some kata that exercise these skills.
        
        ## Asynchronous JavaScript
        
        Promises and async/await have revolutionized how we handle asynchronous operations. We'll tackle some challenging kata in this area.`,
      image:
        "https://www.lupleg.org/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F7c679591-6991-4402-bc63-0ee97010fc6f-1g.png&w=640&q=75",
      author: {
        name: "Mark Sikaundi",
        avatar: "/placeholder.svg",
      },
      date: "January 10, 2025",
      category: "Programming",
    },
    {
      slug: "kata-success-stories",
      title: "From Kata to Career: Success Stories",
      content: `Meet developers who transformed their careers through consistent practice and dedication to coding challenges.
        
        ## Sarah's Journey
        
        Sarah went from a complete beginner to a senior developer in just three years. She credits her success to daily kata practice.
        
        ## The Power of Persistence
        
        John's story shows how tackling increasingly difficult kata can lead to breakthroughs in problem-solving skills.
        
        ## Kata in the Workplace
        
        Many developers report that skills honed through kata directly translate to improved performance in their jobs.`,
      image:
        "https://www.lupleg.org/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F7c679591-6991-4402-bc63-0ee97010fc6f-1g.png&w=640&q=75",
      author: {
        name: "Mark Sikaundi",
        avatar: "/placeholder.svg",
      },
      date: "January 7, 2025",
      category: "Career Insights",
    },
    {
      slug: "python-best-practices",
      title: "Python Best Practices: Lessons from Top Kata Solutions",
      content: `Learn Python best practices and clean coding techniques from the most elegant kata solutions.
        
        ## Pythonic Code
        
        We'll explore what makes code truly "Pythonic" and how to write more idiomatic Python.
        
        ## Effective Use of Built-ins
        
        Python's built-in functions and libraries offer powerful tools. We'll look at kata solutions that leverage these effectively.
        
        ## Code Readability
        
        Clear, readable code is crucial. We'll examine kata solutions that exemplify excellent code organization and documentation.`,
      image:
        "https://www.lupleg.org/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F7c679591-6991-4402-bc63-0ee97010fc6f-1g.png&w=640&q=75",
      author: {
        name: "Mark Sikaundi",
        avatar: "/placeholder.svg",
      },
      date: "January 5, 2025",
      category: "Programming",
    },
    {
      slug: "portfolio-building",
      title: "Building Your Developer Portfolio with Codewars",
      content: `How to leverage your kata solutions and achievements to create a compelling developer portfolio.
        
        ## Showcasing Your Skills
        
        Learn how to select and present your best kata solutions to demonstrate your coding abilities.
        
        ## Kata Difficulty Progression
        
        We'll discuss how to show your growth as a developer through your kata difficulty progression.
        
        ## Integrating Codewars with GitHub
        
        Discover how to effectively link your Codewars profile with your GitHub projects for a comprehensive portfolio.`,
      image:
        "https://www.lupleg.org/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F7c679591-6991-4402-bc63-0ee97010fc6f-1g.png&w=640&q=75",
      author: {
        name: "Mark Sikaundi",
        avatar: "/placeholder.svg",
      },
      date: "January 3, 2025",
      category: "Career Insights",
    },
    {
      slug: "creating-kata-guide",
      title: "The Art of Creating Kata: A Guide for Authors",
      content: `Expert tips and guidelines for creating challenging and educational kata that engage the community.
        
        ## Choosing the Right Difficulty
        
        We'll explore how to gauge the appropriate difficulty level for your kata to ensure it's both challenging and accessible.
        
        ## Writing Clear Instructions
        
        Learn the art of writing concise yet comprehensive instructions for your kata.
        
        ## Crafting Test Cases
        
        Discover how to create robust test cases that cover edge cases and provide meaningful feedback to users.`,
      image:
        "https://www.lupleg.org/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F7c679591-6991-4402-bc63-0ee97010fc6f-1g.png&w=640&q=75",
      author: {
        name: "Mark Sikaundi",
        avatar: "/placeholder.svg",
      },
      date: "January 1, 2025",
      category: "Author's Corner",
    },
  ];

  return posts.find((post) => post.slug === slug) || null;
}

function formatContent(content) {
  return content.split("\n\n").map((paragraph, index) => {
    if (paragraph.startsWith("## ")) {
      return (
        <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
          {paragraph.replace("## ", "")}
        </h2>
      );
    }
    return (
      <p key={index} className="mb-4">
        {paragraph}
      </p>
    );
  });
}

export default function BlogPost({ params }) {
  const post = getPost(params.slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <p className="text-gray-400">
          The blog post you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-[#2D1537] hover:text-[#2D1537] mb-6"
        >
          <IoIosArrowRoundBack className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>
        <Badge
          variant="secondary"
          className="bg-[#c3aacd] hover:bg-[#2D1537] hover:text-white text-[#2D1537] p-2 ml-4"
        >
          {post.category}
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2D1537]">
          {post.title}
        </h1>
        <div className="flex items-center gap-3">
          <Image
            src="/mark.jpg"
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
            style={{ borderRadius: "50%", width: 40, height: 40 }}
          />
          <div>
            <div className="font-medium">{post.author.name}</div>
            <div className="text-sm text-gray-400">{post.date}</div>
          </div>
        </div>
      </div>

      <div className="aspect-[16/9] relative mb-8">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="prose prose-invert max-w-none text-[#2D1537] ">
        {formatContent(post.content)}
      </div>
    </article>
  );
}
