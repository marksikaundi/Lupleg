import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const languages = [
  { name: "Python", icon: "🐍", students: 463956, color: "bg-blue-100" },
  { name: "JavaScript", icon: "JS", students: 375305, color: "bg-yellow-100" },
  { name: "Java", icon: "☕", students: 183213, color: "bg-red-100" },
  { name: "C++", icon: "C++", students: 121162, color: "bg-purple-100" },
  { name: "Go", icon: "🐹", students: 120215, color: "bg-cyan-100" },
  { name: "C#", icon: "C#", students: 117863, color: "bg-indigo-100" },
  { name: "Rust", icon: "🦀", students: 106167, color: "bg-orange-100" },
  { name: "C", icon: "C", students: 98767, color: "bg-teal-100" },
  { name: "TypeScript", icon: "TS", students: 70418, color: "bg-blue-100" },
  { name: "Bash", icon: "🐚", students: 60511, color: "bg-gray-100" },
  { name: "Ruby", icon: "💎", students: 53608, color: "bg-red-100" },
  { name: "PHP", icon: "🐘", students: 47013, color: "bg-purple-100" },
];

export default function Programming() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold my-4">Explore and get fluent in</h1>
        <h2 className="text-3xl font-bold mb-6">71 programming languages</h2>
        <div className="flex justify-center">
          <svg className="w-24 h-6" viewBox="0 0 100 20">
            <path
              d="M0 10 Q25 20 50 10 T100 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {languages.map((lang) => (
          <Card key={lang.name} className="overflow-hidden">
            <CardContent className={`p-6 ${lang.color}`}>
              <div className="text-3xl mb-2">{lang.icon}</div>
              <h3 className="font-semibold mb-1">{lang.name}</h3>
              <p className="text-sm text-gray-600">
                {lang.students.toLocaleString()} students
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button variant="outline" className="text-primary">
          See all 71 Language Tracks
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
