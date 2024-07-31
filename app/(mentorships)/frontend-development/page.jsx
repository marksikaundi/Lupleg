import Publications from "@/components/LastUpdated/Publications";
import Link from "next/link";
import React from "react";
import { LuListStart } from "react-icons/lu";

export default function FrontendDevelopment() {
  return (
    <div class="flex flex-col items-center container px-4 mx-auto">
      <h1 class="text-black text-center text-4xl font-bold tracking-tight md:text-5xl mt-10 mb-12">
        Frontend Development
      </h1>
      <div class=" max-w-2xl ml-4 flex-1 [&amp;&gt;p]:mb-12 [&amp;&gt;h2]:text-xl [&amp;&gt;h2]:font-bold">
        <p>
          This mentorship program is designed to guide aspiring frontend
          developers through a comprehensive learning path over three months.
          The program covers fundamental and advanced topics, practical
          projects, and career guidance to help mentees become proficient in
          frontend development.
        </p>
        <h2 className="font-mono font-bold my-6 ">Program Structure:</h2>
        <p>
          The program is divided into three core months, each focusing on a
          specific key part to help you become a successful frontend developer:
        </p>
        <ul className="px-6 py-2 list-disc">
          <li>Month 1: Fundamentals and Basic Interactivity</li>
          <li>
            Month 2: Advanced Concepts and Frameworks (React, Vue, Angular)
          </li>
          <li>Month 3: Advanced React and Professional Development</li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">Weekly Breakdown:</h2>
        <ul className="px-6 py-2 list-disc">
          <li>
            {" "}
            Workshops: Interactive sessions led by the mentor covering key
            topics relevant to the program theme for that month.
            (e.g.,Hackathons, HTML/CSS Basics, JavaScript Fundamentals, React
            Hooks and Context API)
          </li>
          <li>
            Group Discussions: Opportunities to connect with fellow program
            participants, share experiences, and ask questions in a supportive
            environment.
          </li>
          <li>
            Guest Speaker Sessions: Learn from established freelancers and
            industry experts who will share their insights and practical advice.
          </li>
          <li>
            Action Steps: Weekly takeaways to ensure you're implementing the
            learnings and making progress towards your goals.
          </li>
          <li>
            One-on-One Coaching: Regular individual coaching sessions with the
            mentor to address your specific needs and challenges, and develop a
            personalized action plan.
          </li>
        </ul>

        <ul className="px-6 py-2 list-disc">
          <li>Week 1-2: HTML and CSS Basics</li>
          <li>Week 3-4: JavaScript Fundamentals</li>
          <li>Week 5-6: DOM Manipulation and Event Handling</li>
          <li>Week 7-8: Introduction to React</li>
          <li>Week 9-10: Advanced React Concepts and Project Work</li>
          <li>Week 11-12: Build Tools and Deployment</li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">Month 1: ⛲️ Foundations</h2>
        <p>
          This month is all about setting yourself up for success as a frontend
          developer. You'll solidify your understanding of HTML and CSS, learn
          the basics of JavaScript, and start building interactive web pages.
        </p>
        <h2 className="font-mono font-bold my-6 ">
          {" "}
          Week 1-2: HTML and CSS Basics
        </h2>
        <ul className="py-6 list-disc">
          <li>HTML structure, semantic elements, forms</li>
          <li>CSS selectors, box model, flexbox, grid</li>
          <li>Responsive design principles</li>
          <li>Project: Personal portfolio website</li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Week 3-4: JavaScript Fundamentals
        </h2>
        <ul className="py-6 list-disc">
          <li>Variables, data types, operators</li>
          <li>Functions, conditionals, loops</li>
          <li>DOM manipulation, event listeners</li>
          <li>Project: Interactive web elements</li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Month 2: Advanced Concepts and Frameworks
        </h2>
        <h2 className="font-mono font-bold my-6 ">
          Week 5-6: Advanced JavaScript and ES6+
        </h2>
        <ul className="py-6 list-disc">
          <li>Arrow functions, destructuring, spread operator</li>
          <li>Classes, modules, promises, async/await</li>
          <li>Key: Fetch API, async data handling</li>
          <li>Project: Weather app using APIs</li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Week 7-8: Introduction to React
        </h2>
        <ul className="py-6 list-disc">
          <li>React fundamentals (components, props, state)</li>
          <li>Hooks (useState, useEffect)</li>
          <li>Routing with React Router</li>
          <li>State management with Context API</li>
          <li>Project: TODO list app</li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Month 3: Advanced React and Professional Development
        </h2>
        <h2 className="font-mono font-bold my-6 ">
          Week 9-10: Advanced React and State Management
        </h2>
        <ul className="py-6 list-disc">
          <li>Performance optimization techniques</li>
          <li>Redux fundamentals and integration with React</li>
          <li>Testing React applications (Jest, React Testing Library)</li>
          <li>Project: Ecommerce Website</li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Week 11-12: Build Tools and Deployment
        </h2>
        <ul className="py-6 list-disc">
          <li>Webpack, Babel, ESLint</li>
          <li>Version control with Git and GitHub </li>
          <li>CI/CD pipelines, deployment strategies</li>
          <li>Hosting options (Netlify, Vercel)</li>
          <li>Final project: Full-fledged web application</li>
        </ul>

        <h2 className="font-mono font-bold my-6 "> Additional Resources:</h2>
        <p>
          This mentorship program aims to provide a comprehensive foundation in
          frontend development, focusing on practical skills and
          industry-relevant technologies. The structure allows for flexibility
          to adapt to the mentee's pace and learning style while ensuring steady
          progress towards becoming a proficient frontend developer. Would you
          like me to elaborate on any specific part of this mentorship plan?
        </p>
        <p>
          <Link href="https://developer.mozilla.org/en-US/docs/Learn/HTML">
            {" "}
            MDN Web Docs - HTML
          </Link>{" "}
          <br />
          <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">
            Web Docs - HTML
          </Link>{" "}
          <br />
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS">
            Web Docs - CSS
          </Link>
          <br />
          <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            Web Docs - JavaScript
          </Link>
          <br />
          <Link href="https://reactjs.org/docs/getting-started.html">
            React Docs
          </Link>
          <br />
        </p>
        <p>
          <Link href="/resources/FullStack Dev Roadmap.pdf">Download Roadmap</Link>
        </p>

        <Publications />
      </div>
    </div>
  );
}
