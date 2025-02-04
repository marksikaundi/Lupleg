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

Understanding closures is crucial for mastering JavaScript. A closure is formed when a function retains access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. This powerful feature enables data privacy and state preservation in JavaScript applications.

Closures are particularly useful for creating private variables and implementing the module pattern. For example, consider a counter function:

 <pre class="font-mono text-sm text-gray-800 bg-red-800">
       
        
            function createCounter() {
                let count = 0;
                return {
                    increment: () => ++count,
                    getCount: () => count
                };
            }

            const counter = createCounter();
            console.log(counter.increment()); // 1
            console.log(counter.increment()); // 2
            console.log(counter.getCount()); // 2
        
    </pre>

Here, the count variable remains private and can only be accessed through the returned methods, demonstrating encapsulation through closures.

## Functional Programming

Functional programming techniques can lead to cleaner, more maintainable code. JavaScript's support for first-class functions and higher-order functions makes it well-suited for functional programming paradigms. Key concepts include:

- Pure functions: Functions that always produce the same output for the same input and have no side effects
- Immutability: Working with unchangeable data to prevent bugs and improve predictability
- Higher-order functions: Functions that take other functions as arguments or return functions
- Function composition: Building complex functions by combining simpler ones

Common functional programming methods in JavaScript include map, reduce, and filter. These methods promote declarative programming and help avoid mutation of state:

<pre>
<code>

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

const evenNumbers = numbers.filter(n => n % 2 === 0);
 
</code>
</pre>


## Asynchronous JavaScript

Promises and async/await have revolutionized how we handle asynchronous operations in JavaScript. Promises provide a cleaner alternative to callback-based approaches, while async/await offers an even more intuitive way to work with asynchronous code.

Promises have three states:
- Pending: Initial state, neither fulfilled nor rejected
- Fulfilled: Operation completed successfully
- Rejected: Operation failed

Example using async/await:

<pre>
<code>

async function fetchUserData() {
    try {
        const response = await fetch('api/users');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

fetchUserData().then(data => console.log(data));

</code>
</pre>



Error handling becomes more straightforward with try/catch blocks, and the code reads more like synchronous operations.

## Conclusion

By mastering these advanced JavaScript concepts through kata practice, you'll become a more confident and capable developer. Regular practice with closures helps understand scope and data privacy, while functional programming exercises improve code organization and maintainability. Working with asynchronous JavaScript challenges prepares you for real-world scenarios involving API calls and other async operations.

Remember that these concepts are interconnected – closures often appear in functional programming patterns, and async functions frequently use closures behind the scenes. Continuous practice and application of these concepts in different contexts will strengthen your JavaScript expertise and make you a more effective programmer.

As you continue your journey, focus on understanding not just how to use these features, but also why and when to apply them in your projects. This deeper understanding will help you write more elegant and efficient JavaScript code.
        `,
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
