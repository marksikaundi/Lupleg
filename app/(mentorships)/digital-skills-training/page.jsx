import React from "react";
import { LuListStart } from "react-icons/lu";

export default function DigitalSkills() {
  return (
    <div class="flex flex-col items-center container px-4 mx-auto">
      <h1 class="text-black text-center text-4xl font-bold tracking-tight md:text-5xl mt-10 mb-12">
        Digital Skills Training
      </h1>
      <div class=" max-w-2xl ml-4 flex-1 [&amp;&gt;p]:mb-12 [&amp;&gt;h2]:text-xl [&amp;&gt;h2]:font-bold">
        <p>
          The Digital Skills Training Program is designed to help you develop a
          strong foundation in backend development and acquire the skills needed
          to succeed in the tech industry. The program is structured to provide
          you with a comprehensive understanding of backend technologies,
          frameworks, and best practices, as well as hands-on experience
          building real-world projects.
        </p>
        <h2 className="font-mono font-bold my-6 ">Program Structure:</h2>
        <p>
          The program is divided into three months, each focusing on a different
          aspect of digital skills training. The curriculum is designed to
          become progressively more challenging, allowing you to build on your
          knowledge and skills as you progress through the program.
        </p>
        <hr className="my-10" />
        <ul className="px-6 py-2 list-disc">
          <li>Month 1: Foundational Skills (Weeks 1-4)</li>
          <li>Month 2: Specialization Tracks (Weeks 5-8)</li>
          <li>Month 3: Project & Portfolio Development (Weeks 9-12)</li>
        </ul>
        <hr className="my-10" />

        <h2 className="font-mono font-bold my-6 ">Weekly Breakdown:</h2>
        <ul className="px-6 py-2 list-disc">
          <li>
            {" "}
            <span className="font-bold">Workshops:</span> Interactive sessions
            led by the mentor covering key topics relevant to the program theme
            for that month. Workshops will be a mix of theory and hands-on
            exercises.
          </li>
          <li>
            <span className="font-bold">Group Discussions:</span> Opportunities
            to connect with fellow program participants, share experiences, and
            ask questions in a supportive environment.
          </li>
          <li>
            <span className="font-bold">Guest Speaker Sessions:</span> Learn
            from established freelancers and industry experts who will share
            their insights and practical advice.
          </li>
          <li>
            <span className="font-bold">Action Steps:</span> Weekly takeaways to
            ensure you're implementing the learnings and making progress towards
            your goals.
          </li>
          <li>
            <span className="font-bold">One on One Coaching:</span> Regular
            individual coaching sessions with the mentor to address your
            specific needs and challenges, and develop a personalized action
            plan.
          </li>
        </ul>

        <ul className="px-6 py-2 list-disc">
          <li>
            {" "}
            <span className="font-bold">Mentorship Program Overview:</span> This
            document provides an overview of the mentorship program structure,
            curriculum, and additional resources to help you succeed as a
            digital Skills.
          </li>
          <li>
            <span className="font-bold">Weekly Breakdown:</span> A detailed
            breakdown of the weekly activities and learning objectives for each
            month of the program.
          </li>
          <li>
            <span className="font-bold">Additional Resources:</span> Links to
            external resources, tools, and articles to supplement your learning
            and deepen your understanding of digital skills.
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Month 1: Foundations and Basic Web Development
        </h2>
        <p>
          This month is all about setting yourself up for success as a backend
          developer. You'll learn the core concepts of programming, version
          control, and basic web development technologies to build a strong
          foundation for the rest of the program.
        </p>
        <h2 className="font-mono font-bold my-6 ">
          {" "}
          Week 1-2: Programming Fundamentals
        </h2>
        <ul className="py-6 list-disc">
          <li>
            Review core programming concepts (variables, data types, control
            structures){" "}
          </li>
          <li>Object-Oriented Programming principles</li>
          <li>Version control with Git and GitHub</li>
          <li>Command line basics</li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Week 3-4: Web Development Basics
        </h2>
        <ul className="py-6 list-disc">
          <li>HTTP protocol and request-response cycle</li>
          <li>Introduction to APIs and RESTful services</li>
          <li>
            Basic frontend technologies (HTML, CSS, JavaScript) for context
          </li>
          <li>
            Introduction to backend languages (e.g., Python, Node.js, Java)
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Month 2: Backend Frameworks and Databases
        </h2>
        <h2 className="font-mono font-bold my-6 ">
          Week 5-6: Backend Frameworks
        </h2>
        <ul className="py-6 list-disc">
          <li>
            Choose a framework (e.g., Django for Python, Express for Node.js,
            Spring for Java){" "}
          </li>
          <li>Setup and project structure</li>
          <li>Routing and middleware</li>
          <li>Authentication and authorization</li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">Week 7-8: Databases</h2>
        <ul className="py-6 list-disc">
          <li>Relational vs. Non-relational databases</li>
          <li>SQL basics and database design</li>
          <li>ORM (Object-Relational Mapping) concepts</li>
          <li>Database operations and optimization</li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Month 3: Advanced Topics and Project
        </h2>
        <h2 className="font-mono font-bold my-6 ">
          Week 9-10: Advanced Backend Concepts
        </h2>
        <ul className="py-6 list-disc">
          <li>API design and documentation</li>
          <li>Caching strategies</li>
          <li>Message queues and background jobs</li>
          <li>Containerization with Docker</li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Week 11-12: Final Project and Deployment
        </h2>
        <ul className="py-6 list-disc">
          <li>Design and implement a full-stack application</li>
          <li>Server management and deployment </li>
          <li>Continuous Integration/Continuous Deployment (CI/CD) </li>
          <li>Monitoring and logging</li>
        </ul>

        <h2 className="font-mono font-bold my-6 "> Additional Resources:</h2>
        <p>
          This program is designed to take a mentee from basic programming
          knowledge to a job-ready backend developer. The curriculum can be
          adjusted based on the mentee's prior experience and learning pace.
          Would you like me to elaborate on any specific part of this mentorship
          program?
        </p>

        <p className="mb-14 font-mono">
          <span className="font-bold">Last updated:</span> 21 July 2024.
        </p>
      </div>
    </div>
  );
}
