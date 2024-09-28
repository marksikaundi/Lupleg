import PMCard from "@/components/sections/PMCard";
import PMQcard from "@/components/sections/PMQcard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Problemsets() {
  return (
    <div>
      <div className="bg-[#0A0A1B] text-white min-h-screen p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <Card className="bg-gradient-to-r from-yellow-700 to-yellow-600 text-white">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-bold mb-2">
                    Bring Lupleg to Your School
                  </h2>
                  <p className="text-sm mb-2">$60 OFF Annual</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold">SEP</p>
                  <p className="text-4xl font-bold">23</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-green-600 text-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold mb-2">
                Lupleg's Interview Crash Course:
              </h2>
              <p className="text-sm mb-4">
                System Design for Interviews and Beyond
              </p>
              <Button variant="secondary" size="sm">
                Start Learning
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-purple-600 text-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold mb-2">
                Lupleg's Interview Crash Course:
              </h2>
              <p className="text-sm mb-4">Data Structures and Algorithms</p>
              <Button variant="secondary" size="sm">
                Start Learning
              </Button>
            </CardContent>
          </Card>
        </div>

        <PMCard />
        <PMQcard />
      </div>
    </div>
  );
}
