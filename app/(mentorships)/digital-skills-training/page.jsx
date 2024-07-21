import Link from "next/link";
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
          The Digital Skills Training program is designed to equip you with the
          knowledge and skills needed to succeed in the tech industry. Whether
          you're looking to start a career in data analysis, graphic design, or
          web development, this program will provide you with the foundational
          skills and hands-on experience to kickstart your journey as a digital
          professional. The program is led by an experienced mentor who will
          guide you through the curriculum, provide personalized coaching, and
          support you in developing a strong portfolio of projects to showcase
          your skills to potential employers.
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
            document provides an overview of the{" "}
            <Link href="/mentorships" className="text-green-700">
              mentorship program
            </Link>{" "}
            structure, curriculum, and additional resources to help you succeed
            as a digital Skills.
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
          Month 1: Foundational Digital Skills
        </h2>
        <p>
          The first month of the program focuses on building a strong foundation
          in digital skills, including microsoft office, google suite, social
          media marketing, and{" "}
          <Link href="/frontend-development" className="text-green-700">
            basic programming concepts
          </Link>{" "}
          . The goal is to equip you with the essential knowledge and skills
          needed to succeed in the tech industry.
        </p>
        <h2 className="font-mono font-bold my-6 ">
          {" "}
          Week 1-2: Microsoft Office and Google Suite
        </h2>
        <ul className="py-6 list-disc">
          <li>
            Microsoft Word: Formatting, editing, and creating professional
            documents and reports in Word.
          </li>
          <li>
            Microsoft Excel: Basic formulas, functions, and data analysis in
            Excel.
          </li>
          <li>
            Microsoft PowerPoint: Designing engaging presentations and
            slideshows in PowerPoint.
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Week 3-4: Google Suite and Social Media Marketing
        </h2>
        <ul className="py-6 list-disc">
          <li>
            Google Docs, Sheets, and Slides: Collaborating and sharing
            documents, spreadsheets, and presentations using Google Suite.
          </li>
          <li>
            Google Drive: Organizing and managing files and folders in Google
            Drive.
          </li>
          <li>
            Google Calendar: Scheduling and managing events and appointments in
            Google Calendar.
          </li>
          <li>Gmail: Managing emails, contacts, and tasks in Gmail.</li>
          <li>
            Social Media Marketing: Understanding social media platforms,
            content creation, and engagement strategies.
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Month 2: Specialization Tracks (Weeks 5-8)
        </h2>
        <p>
          Choose one specialization track to delve deeper into a specific
          skillset:
        </p>
        <h2 className="font-mono font-bold my-6 ">Track A: Data Analysis</h2>
        <ul className="py-6 list-disc">
          <li>
            Data Analysis Fundamentals: Introduction to data analysis concepts
          </li>
          <li>
            Data Visualization: Creating visualizations and dashboards to convey
            insights from data sets.
          </li>
          <li>
            Statistical Analysis: Applying statistical methods to analyze and
            interpret data.
          </li>
          <li>
            Machine Learning: Introduction to machine learning algorithms and
            models.
          </li>
          <li>
            Python for Data Analysis: Using Python libraries like Pandas and
            NumPy for data manipulation and analysis.
          </li>
          <li>SQL for Data Analysis: Querying and analyzing data using SQL.</li>
          <li>
            Data Analysis Tools: Working with tools like Excel, Tableau, and
            Power BI for data analysis.
          </li>
          <li>
            Data Analysis Projects: Hands-on projects to apply data analysis
            skills to real-world data sets.
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">Track B: Graphic Design</h2>

        <ul className="py-6 list-disc">
          <li>
            Graphic Design Fundamentals: Introduction to design principles and
            concepts.
          </li>
          <li>
            Adobe Photoshop: Image editing, retouching, and manipulation in
            Photoshop.
          </li>
          <li>
            Adobe Illustrator: Creating vector graphics and illustrations in
            Illustrator.
          </li>
          <li>
            Adobe InDesign: Designing layouts and publications in InDesign.
          </li>
          <li>
            UI/UX Design: User interface and user experience design principles.
          </li>
          <li>
            Branding and Identity: Creating brand assets and visual identities.
          </li>
          <li>
            Graphic Design Tools: Working with tools like Canva, Sketch, and
            Figma.
          </li>
          <li>
            Graphic Design Projects: Hands-on projects to apply graphic design
            skills.
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Track C: Coding Fundamentals
        </h2>
        <ul className="py-6 list-disc">
          <li>
            Programming Fundamentals: Introduction to programming concepts
          </li>
          <li>
            HTML and CSS: Building and styling web pages with HTML and CSS
          </li>
          <li>
            JavaScript: Adding interactivity and functionality with JavaScript
          </li>
          <li>Version Control: Using Git and GitHub for version control</li>
          <li>
            Web Development Tools: Working with tools like VS Code and Chrome
            DevTools
          </li>
          <li>
            Responsive Design: Creating responsive and mobile-friendly websites
          </li>
          <li>
            Web Development Projects: Hands-on projects to apply web development
            skills
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Month 3: Project & Portfolio Development (Weeks 9-12)
        </h2>
        <h2 className="font-mono font-bold my-6 ">
          Week 9: Project Selection & Planning:
        </h2>
        <ul className="py-6 list-disc">
          <li>Identify a project idea based on your specialization track</li>
          <li>Define project scope, requirements, and timeline</li>
          <li>Create a project plan and outline key milestones</li>
          <li>Set up project management tools and version control systems</li>
          <li>
            Develop a project proposal and present it to the mentor for feedback
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Week 10-11: Project Development
        </h2>
        <ul className="py-6 list-disc">
          <li>Implement the project plan and work on developing the project</li>
          <li>
            Collaborate with the mentor and fellow participants for feedback and
            support
          </li>
          <li>
            Iterate on the project based on feedback and make necessary
            adjustments
          </li>
          <li>Document the project development process and challenges faced</li>
          <li>
            Prepare a project presentation and demo to showcase the project
          </li>
          <li>
            Review and refine the project based on feedback from the mentor and
            peers
          </li>
          <li>
            Finalize the project and prepare it for inclusion in your portfolio
          </li>
          <li>
            Update your resume, LinkedIn profile, and portfolio with the project
            details
          </li>
          <li>
            Prepare for job interviews and showcase your project during
            networking events
          </li>
          <li>
            Reflect on the project development process and identify areas for
            improvement
          </li>
          <li>
            Share your project and portfolio with the mentor and fellow
            participants for feedback and support
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Week 12: Portfolio Building & Career Preparation:
        </h2>

        <ul className="py-6 list-disc">
          <li>
            Develop a professional portfolio showcasing your projects and skills
          </li>
          <li>
            Create a personal brand and online presence to attract potential
            employers
          </li>
          <li>
            Prepare for job interviews, networking events, and career fairs to
            land your dream job.
          </li>
          <li>
            Review and refine your resume, cover letter, and LinkedIn profile to
            stand out to employers
          </li>
          <li>
            Practice interview questions and scenarios to build confidence and
            improve your communication skills
          </li>
          <li>
            Develop a job search strategy and apply to relevant job openings in
            your field
          </li>
          <li>
            Connect with industry professionals and build your network to
            increase your job prospects
          </li>
          <li>
            Reflect on your learning journey and celebrate your achievements and
            growth throughout the program
          </li>
          <li>
            Share your portfolio and career goals with the mentor and fellow
            participants for feedback and support
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6">Benefits:</h2>
        <ul className="py-6 list-disc">
          <li>
            Gain practical skills and hands-on experience in digital skills.
          </li>
          <li>
            Build a strong portfolio of projects to showcase your skills to
            potential employers
          </li>
          <li>
            Receive personalized coaching and support from an experienced mentor
          </li>
          <li>
            Connect with industry professionals and expand your professional
            network
          </li>
          <li>
            Develop a job search strategy and prepare for interviews and
            networking events
          </li>
          <li>
            Join a community of like-minded individuals and share your learning
            journey
          </li>
          <li>
            Gain confidence in your abilities and take the next step in your
            career as a backend developer
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 "> Additional Resources:</h2>
        <p>
          The following resources are recommended to supplement your learning
          and deepen your understanding of digital skills: <br />
          <span className="font-bold">Books:</span> "Cracking the Coding
          Interview" by Gayle Laakmann McDowell, "Design for Hackers" by David
          Kadavy, "Data Science for Business" by Foster Provost and Tom Fawcett.{" "}
          <br />
          <span className="font-bold">Online Courses:</span> Coursera, Udemy,
          and Codecademy offer a wide range of courses on digital skills, data
          analysis, graphic design, and coding. <br />
          <span className="font-bold">Blogs and Articles:</span> Medium, Towards
          Data Science, and Smashing Magazine are great resources for reading up
          on the latest trends and best practices in digital skills. <br />
          <span className="font-bold">Communities:</span> Join online
          communities like Stack Overflow, GitHub, and Reddit to connect with
          other developers and designers, ask questions, and share your
          knowledge.{" "}
        </p>

        <p className="my-6 font-mono">
          <span className="font-bold">Last updated:</span> 21 July 2024.
        </p>
      </div>
    </div>
  );
}
