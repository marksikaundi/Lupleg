import Link from "next/link";
import { notFound } from "next/navigation";

const challenges = {
  "responsive-portfolio-website": {
    title: "Responsive Portfolio Website",
    level: "Beginner",
    description:
      "Create a personal portfolio website that showcases your projects and skills. The website should be fully responsive and implement modern design principles.",
    duration: "1-2 weeks",
    requirements: [
      "Responsive design that works on all devices",
      "Project showcase section",
      "About me section",
      "Contact form",
      "Skills/Technologies section",
    ],
    prerequisites: [
      "Basic HTML knowledge",
      "CSS fundamentals",
      "JavaScript basics",
    ],
    steps: [
      {
        title: "Project Setup",
        description:
          "Set up your development environment and project structure",
      },
      {
        title: "HTML Structure",
        description: "Create the basic HTML structure for all sections",
      },
      {
        title: "Styling",
        description: "Implement responsive CSS using modern techniques",
      },
      {
        title: "Interactivity",
        description:
          "Add JavaScript functionality for enhanced user experience",
      },
      {
        title: "Testing & Optimization",
        description: "Test across devices and optimize performance",
      },
    ],
  },
  "interactive-dashboard": {
    title: "Interactive Dashboard",
    level: "Intermediate",
    description:
      "Build a dynamic dashboard application with data visualization, real-time updates, and interactive features using modern frontend frameworks.",
    duration: "2-3 weeks",
    requirements: [
      "Real-time data visualization",
      "Filtering and sorting capabilities",
      "Responsive layout",
      "State management",
      "Performance optimization",
    ],
    prerequisites: [
      "React fundamentals",
      "TypeScript knowledge",
      "Experience with CSS frameworks",
      "Basic data visualization concepts",
    ],
    steps: [
      {
        title: "Project Setup",
        description: "Initialize project with React and TypeScript",
      },
      {
        title: "UI Components",
        description: "Create reusable dashboard components",
      },
      {
        title: "Data Integration",
        description: "Implement data fetching and state management",
      },
      {
        title: "Visualization",
        description: "Add charts and graphs using Chart.js",
      },
      {
        title: "Optimization",
        description: "Implement performance optimizations",
      },
    ],
  },
  "e-commerce-product-page": {
    title: "E-commerce Product Page",
    level: "Intermediate",
    description:
      "Create a fully functional e-commerce product page with image gallery, cart functionality, and dynamic pricing updates.",
    duration: "1-2 weeks",
    requirements: [
      "Product image gallery",
      "Add to cart functionality",
      "Size/color selection",
      "Price calculations",
      "Shopping cart preview",
    ],
    prerequisites: [
      "Next.js experience",
      "React knowledge",
      "CSS Modules understanding",
      "State management concepts",
    ],
    steps: [
      {
        title: "Project Setup",
        description: "Set up Next.js project with required dependencies",
      },
      {
        title: "Product Display",
        description: "Create product image gallery and details section",
      },
      {
        title: "Shopping Cart",
        description: "Implement cart functionality and state management",
      },
      {
        title: "Styling",
        description: "Style components using CSS Modules",
      },
      {
        title: "Testing",
        description: "Add unit tests and perform UI testing",
      },
    ],
  },
  "social-media-app-ui": {
    title: "Social Media App UI",
    level: "Advanced",
    description:
      "Develop a complex social media application interface with real-time updates, infinite scroll, and interactive features.",
    duration: "3-4 weeks",
    requirements: [
      "Real-time updates",
      "Infinite scroll",
      "User interactions",
      "Responsive design",
      "Performance optimization",
    ],
    prerequisites: [
      "Advanced React knowledge",
      "Redux experience",
      "WebSocket understanding",
      "Performance optimization techniques",
    ],
    steps: [
      {
        title: "Project Architecture",
        description: "Set up project structure and state management",
      },
      {
        title: "UI Components",
        description: "Build core UI components and features",
      },
      {
        title: "Real-time Features",
        description: "Implement WebSocket integration",
      },
      {
        title: "Infinite Scroll",
        description: "Add infinite scroll with optimization",
      },
      {
        title: "Polish & Deploy",
        description: "Optimize performance and prepare for deployment",
      },
    ],
  },
};

export default function ChallengePage({ params }) {
  const challenge = challenges[params.slug];

  if (!challenge) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/challenges/frontend"
            className="inline-flex items-center text-[#2D1537] hover:text-[#2D1537]"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Challenges
          </Link>
        </div>

        {/* Challenge Header */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900">
                {challenge.title}
              </h1>
              <span className="px-4 py-2 text-sm font-semibold rounded-full bg-blue-100 text-blue-800">
                {challenge.level}
              </span>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              {challenge.description}
            </p>
            <div className="text-sm text-gray-500">
              Expected Duration: {challenge.duration}
            </div>
          </div>
        </div>

        {/* Challenge Details */}
        <div className="mt-8 grid gap-8">
          {/* Requirements */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Requirements
              </h2>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                {challenge.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prerequisites */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Prerequisites
              </h2>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                {challenge.prerequisites.map((prereq, index) => (
                  <li key={index}>{prereq}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Steps */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Challenge Steps
              </h2>
              <div className="space-y-6">
                {challenge.steps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2D1537] text-white">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Start Challenge Button */}
        <div className="mt-8 flex justify-center">
          <button className="px-8 py-3 text-lg font-medium rounded-md text-white bg-[#2D1537] hover:bg-[#2D1537] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D1537]">
            Start Challenge
          </button>
        </div>
      </div>
    </div>
  );
}
