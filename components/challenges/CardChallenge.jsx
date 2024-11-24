import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, CodeIcon, DatabaseIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top banner with 5 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white lg:col-span-2">
            <CardContent className="p-4 flex flex-col justify-between h-full">
              <div>
                <p className="text-sm">ENDS DEC</p>
                <p className="text-4xl font-bold">23</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Bring LeetCode to Your School</h2>
                <span className="bg-white text-yellow-800 px-2 py-1 rounded text-sm font-bold">
                  $60 OFF Annual
                </span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-emerald-700">
            <CardContent className="p-4 flex flex-col justify-between h-full">
              <h2 className="text-xl font-bold mb-2">LeetCode's Interview Crash Course:</h2>
              <p className="mb-4">System Design for Interviews and Beyond</p>
              <Button className="self-start">Start Learning</Button>
            </CardContent>
          </Card>
          <Card className="bg-purple-700">
            <CardContent className="p-4 flex flex-col justify-between h-full">
              <h2 className="text-xl font-bold mb-2">LeetCode's Interview Crash Course:</h2>
              <p className="mb-4">Data Structures and Algorithms</p>
              <Button className="self-start">Start Learning</Button>
            </CardContent>
          </Card>
          <Card className="bg-blue-700">
            <CardContent className="p-4 flex flex-col justify-between h-full">
              <h2 className="text-xl font-bold mb-2">New! LeetCode Contest</h2>
              <p className="mb-4">Weekly coding challenges</p>
              <Button className="self-start">Join Now</Button>
            </CardContent>
          </Card>
        </div>

        {/* Study Plan section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Study Plan</h2>
            <Button variant="link" className="text-blue-400">
              See all
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <StudyCard
              icon={<CodeIcon className="w-8 h-8" />}
              title="Top Interview 150"
              description="Must-do List for Interview Prep"
              color="bg-teal-700"
            />
            <StudyCard
              icon={<CodeIcon className="w-8 h-8" />}
              title="LeetCode 75"
              description="Ace Coding Interview with 75 Qs"
              color="bg-indigo-700"
            />
            <StudyCard
              icon={<DatabaseIcon className="w-8 h-8" />}
              title="SQL 50"
              description="Crack SQL Interview in 50 Qs"
              color="bg-blue-700"
            />
            <StudyCard
              icon={<CodeIcon className="w-8 h-8" />}
              title="Introduction to Pandas"
              description="Learn Basic Pandas in 15 Qs"
              color="bg-emerald-700"
            />
            <StudyCard
              icon={<CodeIcon className="w-8 h-8" />}
              title="30 Days of JavaScript"
              description="Learn JS Basics with 30 Qs"
              color="bg-yellow-600"
            />
            <StudyCard
              icon={<CalendarIcon className="w-8 h-8" />}
              title="Amazon Spring '23 High Frequency"
              description="Practice Amazon 25 Recently Asked Qs"
              color="bg-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function StudyCard({ icon, title, description, color }) {
  return (
    <Card className={`${color} text-white`}>
      <CardContent className="p-4 flex items-center space-x-4">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <p className="text-sm opacity-80">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}