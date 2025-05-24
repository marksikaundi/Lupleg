import Link from "next/link";

export default function Frontend() {
  const frontendChallenges = [
    {
      title: "Responsive Portfolio Website",
      level: "Beginner",
      description:
        "Create a personal portfolio website that showcases your projects and skills. Focus on responsive design and modern CSS techniques.",
      duration: "1-2 weeks",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Interactive Dashboard",
      level: "Intermediate",
      description:
        "Build a dynamic dashboard with real-time data visualization, filtering, and sorting capabilities using modern frontend frameworks.",
      duration: "2-3 weeks",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    },
    {
      title: "E-commerce Product Page",
      level: "Intermediate",
      description:
        "Develop a fully functional product page with image gallery, cart functionality, and dynamic pricing updates.",
      duration: "1-2 weeks",
      techStack: ["Next.js", "React", "CSS Modules"],
    },
    {
      title: "Social Media App UI",
      level: "Advanced",
      description:
        "Create a complex social media application interface with real-time updates, infinite scroll, and interactive features.",
      duration: "3-4 weeks",
      techStack: ["React", "Redux", "Tailwind CSS", "Socket.io"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frontend Development Challenges
          </h1>
          <p className="text-xl text-gray-600">
            Master frontend development through hands-on challenges and modern
            UI/UX projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {frontendChallenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {challenge.title}
                  </h3>
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
                    {challenge.level}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500">
                    Duration:{" "}
                  </span>
                  <span className="text-sm text-gray-900">
                    {challenge.duration}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {challenge.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    href={`/challenges/frontend/${challenge.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#2D1537] hover:bg-[#2D1537] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    View Challenge
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
