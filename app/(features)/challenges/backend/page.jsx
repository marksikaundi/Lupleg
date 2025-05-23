import Link from "next/link";

export default function Backend() {
  const backendChallenges = [
    {
      title: "RESTful API Development",
      description:
        "Build a complete REST API with authentication, rate limiting, and data validation",
      level: "Intermediate",
      duration: "2 weeks",
      techStack: ["Node.js", "Express", "MongoDB"],
    },
    {
      title: "Database Design",
      description:
        "Design and implement a scalable database schema for an e-commerce platform",
      level: "Advanced",
      duration: "1 week",
      techStack: ["PostgreSQL", "Database Design", "SQL"],
    },
    {
      title: "Authentication System",
      description: "Create a secure authentication system with JWT and OAuth2",
      level: "Intermediate",
      duration: "1 week",
      techStack: ["Node.js", "JWT", "OAuth2"],
    },
    {
      title: "Microservices Architecture",
      description:
        "Build a microservices-based application with service discovery and load balancing",
      level: "Advanced",
      duration: "3 weeks",
      techStack: ["Docker", "Kubernetes", "Node.js"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Backend Development Challenges
          </h1>
          <p className="text-xl text-gray-600">
            Master backend development through hands-on challenges and
            real-world projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {backendChallenges.map((challenge, index) => (
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
                    href={`/challenges/backend/${challenge.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
