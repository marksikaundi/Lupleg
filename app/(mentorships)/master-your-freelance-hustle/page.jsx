import Publications from "@/components/LastUpdated/Publications";
import React from "react";
import { LuListStart } from "react-icons/lu";

export default function FreelanceHustle() {
  return (
    <div class="flex flex-col items-center container px-4 mx-auto">
      <h1 class="text-black text-center text-4xl font-bold tracking-tight md:text-5xl mt-10 mb-12">
        Master Your Freelance Hustle
      </h1>
      <div class=" max-w-2xl ml-4 flex-1 [&amp;&gt;p]:mb-12 [&amp;&gt;h2]:text-xl [&amp;&gt;h2]:font-bold">
        <p>
          The Master Your Freelance Hustle Mentorship is a 3-month program that
          is designed to help you become a successful freelancer. You will learn
          how to find clients, negotiate contracts, and deliver high-quality
          work on time and on budget. You will also learn how to manage your
          time, set your rates, and build your personal brand. By the end of the
          program, you will have a portfolio of projects that you can show to
          potential clients, and the skills and confidence to succeed as a
          freelancer.
        </p>
        <h2 className="font-mono font-bold my-6 ">Program Structure:</h2>
        <p>
          The program is divided into three core months, each focusing on a
          specific stage of your freelance journey:
        </p>
        <ul className="px-6 py-2 list-disc">
          <li>Month 1: Foundations (Laying the groundwork for success)</li>
          <li>
            Month 2: Building Your Business (Crafting your brand and attracting
            clients){" "}
          </li>
          <li>
            Month 3: Scaling & Sustainability (Growing your business and
            achieving long-term success)
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">Weekly Breakdown:</h2>
        <p>
          Each week will consist of a combination of the following elements:
        </p>
        <ul className="px-6 py-2 list-disc">
          <li>
            {" "}
            Workshops: Interactive sessions led by the mentor covering key
            topics relevant to the program theme for that month. (e.g., Setting
            Up Your Freelance Business, Client Acquisition Strategies, Time
            Management for Freelancers)
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

        <h2 className="font-mono font-bold my-6 ">Month 1: ⛲️ Foundations</h2>
        <p>
          This month is all about setting yourself up for success as a
          freelancer. You'll solidify your niche, define your goals, and
          establish the core elements of your freelance business.
        </p>
        <ul className="py-6 list-disc">
          <li>
            {" "}
            Week 1: Introduction to Freelancing - Understanding the freelance
            landscape, identifying your niche, and setting freelancing goals.
          </li>
          <li>
            Week 2: Building Your Brand - Crafting a compelling personal brand
            that resonates with your ideal clients.
          </li>
          <li>
            Week 3: Setting Up Your Business - Establishing your legal
            structure, financial systems, and essential tools.
          </li>
          <li>
            Week 4: Mastering Your Rates & Proposals - Learning to price your
            services competitively and creating winning proposals.
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Month 2: 🔩 Building Your Business
        </h2>

        {/* <h2 className="font-mono font-bold my-6 flex items-center">
          Month 1: <LuListStart className="mx-2" /> Foundations
        </h2> */}
        <p>
          Now that your foundation is set, Month 2 focuses on attracting
          clients, building strong relationships, and delivering exceptional
          work.
        </p>
        <ul className="py-6 list-disc">
          <li>
            {" "}
            Week 5: Client Acquisition Strategies - Exploring various methods to
            attract high-quality clients, including networking, cold emailing,
            and online marketplaces.
          </li>
          <li>
            Week 6: Building a Strong Client Relationship - Mastering
            communication, managing expectations, and delivering exceptional
            client service.
          </li>
          <li>
            Week 7: Project Management for Freelancers - Developing effective
            project management skills to ensure timely project delivery and
            client satisfaction.
          </li>
          <li>
            Week 8: Building Your Portfolio & Showcasing Your Work - Creating a
            compelling portfolio website and showcasing your work effectively to
            attract clients.
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Month 3: ✅ Scaling & Sustainability
        </h2>
        <p>
          Month 3 equips you with the tools to grow your business sustainably
          and achieve your long-term freelance goals.
        </p>
        <ul className="py-6 list-disc">
          <li>
            {" "}
            Week 9: Streamlining Your Workflow - Implementing time-saving
            techniques and productivity hacks to optimize your workflow.
          </li>
          <li>
            Week 10: Building a Sustainable Income Stream - Exploring strategies
            for recurring revenue and diversifying your income sources.
          </li>
          <li>
            Week 11: Mastering the Art of Negotiation - Learning to negotiate
            effectively with clients on rates, contracts, and project scope.
          </li>
          <li>
            Week 12: Building Your Dream Freelance Business - Developing a
            long-term vision for your freelance business and taking steps to
            achieve your goals.
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 "> Additional Resources:</h2>

        <p>
          Throughout the program, you'll also have access to a comprehensive
          resource library that includes templates, worksheets, and other
          helpful materials to support your learning journey.
        </p>

        <Publications />
      </div>
    </div>
  );
}
