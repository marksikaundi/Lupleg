import { ChevronDownIcon, PencilIcon, SunIcon, ExternalLinkIcon } from "lucide-react"

const tasks = [
  { id: 1, title: 'Add Concept Exercise Metadata files: "the-realm-of-echoes"', project: "Cairo", type: "docs" },
  { id: 2, title: 'Add Concept Exercise Metadata files: "chrono-realms-time-tree"', project: "Cairo", type: "docs" },
  { id: 3, title: 'Add Concept Exercise Metadata Files: "chrono-realms"', project: "Cairo", type: "docs" },
  { id: 4, title: 'Add Concept Exercise: "the-farm"', project: "Cairo", type: "content" },
  { id: 5, title: 'Add Concept Exercise: "red-vs-blue-darwin-style"', project: "Cairo", type: "content" },
  { id: 6, title: 'Add Concept Exercise: "magical-measurements"', project: "Cairo", type: "content" },
  { id: 7, title: 'Add Concept Exercise: "election-day"', project: "Cairo", type: "content" },
]

export default function Component() {
  return (
    <div className="container mx-auto p-4 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold text-purple-900">
          <span className="block sm:inline">Showing {tasks.length} tasks</span>{' '}
          <span className="font-normal text-gray-600 text-sm sm:text-base">/ out of {tasks.length} possible tasks</span>
        </h1>
        <button className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 w-full sm:w-auto justify-center sm:justify-start">
          Sort by most recent
          <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" />
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-4 rounded-lg shadow">
            <div className="flex items-start sm:items-center space-x-4 mb-2 sm:mb-0">
              <div className="bg-gray-100 rounded-full p-2 flex-shrink-0">
                <PencilIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-purple-900">{task.title}</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  for <span className="font-medium text-red-500">Cairo</span>{' '}
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                    task.type === 'docs' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {task.type}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex space-x-2 mt-2 sm:mt-0">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <SunIcon className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <ExternalLinkIcon className="h-5 w-5" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
