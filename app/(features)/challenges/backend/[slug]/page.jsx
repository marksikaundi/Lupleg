import { notFound } from 'next/navigation';

const challenges = {
  'restful-api-development': {
    title: 'RESTful API Development',
    description: 'Build a complete REST API with authentication, rate limiting, and data validation',
    level: 'Intermediate',
    duration: '2 weeks',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    objectives: [
      'Design and implement RESTful endpoints',
      'Implement JWT authentication',
      'Add rate limiting middleware',
      'Create data validation schemas',
      'Handle error responses properly',
      'Implement proper API documentation'
    ],
    requirements: [
      'Basic knowledge of JavaScript/Node.js',
      'Understanding of HTTP protocols',
      'Familiarity with databases'
    ],
    steps: [
      {
        title: 'Project Setup',
        description: 'Initialize a Node.js project and install necessary dependencies'
      },
      {
        title: 'Database Configuration',
        description: 'Set up MongoDB connection and create data models'
      },
      {
        title: 'API Routes Implementation',
        description: 'Create CRUD endpoints and implement business logic'
      },
      {
        title: 'Authentication',
        description: 'Implement JWT-based authentication system'
      },
      {
        title: 'Middleware Development',
        description: 'Add rate limiting and request validation'
      }
    ]
  },
  'database-design': {
    title: 'Database Design',
    description: 'Design and implement a scalable database schema for an e-commerce platform',
    level: 'Advanced',
    duration: '1 week',
    techStack: ['PostgreSQL', 'Database Design', 'SQL'],
    objectives: [
      'Design normalized database schemas',
      'Implement complex relationships',
      'Create efficient indexes',
      'Write optimized queries',
      'Handle data migration strategies'
    ],
    requirements: [
      'Basic SQL knowledge',
      'Understanding of database concepts',
      'Experience with PostgreSQL'
    ],
    steps: [
      {
        title: 'Requirements Analysis',
        description: 'Analyze e-commerce platform requirements and identify entities'
      },
      {
        title: 'Schema Design',
        description: 'Create ERD and design normalized database schema'
      },
      {
        title: 'Implementation',
        description: 'Write SQL for table creation and relationships'
      },
      {
        title: 'Optimization',
        description: 'Add indexes and optimize query performance'
      },
      {
        title: 'Testing',
        description: 'Test schema with sample data and complex queries'
      }
    ]
  },
  'authentication-system': {
    title: 'Authentication System',
    description: 'Create a secure authentication system with JWT and OAuth2',
    level: 'Intermediate',
    duration: '1 week',
    techStack: ['Node.js', 'JWT', 'OAuth2'],
    objectives: [
      'Implement secure user authentication',
      'Set up OAuth2 with multiple providers',
      'Handle JWT token management',
      'Implement password reset flow',
      'Add 2FA support'
    ],
    requirements: [
      'Node.js experience',
      'Understanding of authentication concepts',
      'Basic security knowledge'
    ],
    steps: [
      {
        title: 'Basic Auth Setup',
        description: 'Implement local authentication with JWT'
      },
      {
        title: 'OAuth Integration',
        description: 'Add Google and GitHub OAuth providers'
      },
      {
        title: 'Security Features',
        description: 'Implement 2FA and password reset'
      },
      {
        title: 'Token Management',
        description: 'Handle token refresh and revocation'
      },
      {
        title: 'Testing & Security Audit',
        description: 'Test authentication flows and security measures'
      }
    ]
  },
  'microservices-architecture': {
    title: 'Microservices Architecture',
    description: 'Build a microservices-based application with service discovery and load balancing',
    level: 'Advanced',
    duration: '3 weeks',
    techStack: ['Docker', 'Kubernetes', 'Node.js'],
    objectives: [
      'Design microservices architecture',
      'Implement service discovery',
      'Set up container orchestration',
      'Handle inter-service communication',
      'Implement monitoring and logging'
    ],
    requirements: [
      'Docker experience',
      'Understanding of microservices',
      'Node.js proficiency'
    ],
    steps: [
      {
        title: 'Architecture Design',
        description: 'Plan microservices and their interactions'
      },
      {
        title: 'Service Implementation',
        description: 'Create individual microservices'
      },
      {
        title: 'Containerization',
        description: 'Dockerize services and set up Kubernetes'
      },
      {
        title: 'Service Mesh',
        description: 'Implement service discovery and load balancing'
      },
      {
        title: 'Monitoring Setup',
        description: 'Add logging, monitoring, and tracing'
      }
    ]
  }
};

export default function ChallengePage({ params }) {
  const challenge = challenges[params.slug];
  
  if (!challenge) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-900">{challenge.title}</h1>
            <span className="px-4 py-2 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
              {challenge.level}
            </span>
          </div>
          
          <p className="text-xl text-gray-600 mb-4">{challenge.description}</p>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Duration: {challenge.duration}
            </span>
          </div>
        </div>

        <div className="grid gap-8">
          {/* Tech Stack */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {challenge.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Learning Objectives */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Learning Objectives</h2>
            <ul className="space-y-3">
              {challenge.objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Requirements */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Requirements</h2>
            <ul className="space-y-3">
              {challenge.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Challenge Steps */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Challenge Steps</h2>
            <div className="space-y-6">
              {challenge.steps.map((step, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Start Challenge Button */}
          <div className="mt-8 flex justify-center">
            <button className="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Start Challenge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
