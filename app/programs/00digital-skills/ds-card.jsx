import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function DsCard() {
  return (
    <div className="min-h-screen bg-[#0A0A1B] text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Previous content remains the same */}

        {/* New content starts here */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Program Structure:</h2>
            <p className="mb-6">
              The program is divided into three months, each focusing on a
              different aspect of digital skills training. The curriculum is
              designed to become progressively more challenging, allowing you to
              build on your knowledge and skills as you progress through the
              program.
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Month 1: Foundational Skills (Weeks 1-4)</li>
              <li>Month 2: Specialization Tracks (Weeks 5-8)</li>
              <li>Month 3: Project & Portfolio Development (Weeks 9-12)</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4"> Weekly Breakdown:</h2>

            <p className="mb-6"></p>
            <p className="mb-6"></p>
            <p className="mb-6">Month 1: Foundational Digital Skills</p>
            <p className="mb-6">
              The first month of the program focuses on building a strong
              foundation in digital skills, including microsoft office, google
              suite, social media marketing, and basic programming concepts .
              The goal is to equip you with the essential knowledge and skills
              needed to succeed in the tech industry.
            </p>
            <h2 className="text-2xl font-bold mb-4"></h2>
            <p className="mb-4"></p>
            <p className="mb-4"></p>
            <p></p>
          </div>
          <div>
            <Card className="bg-[#13132B] p-6">
              <h3 className="text-xl text-white font-bold mb-2">
                Individual Workshop
              </h3>
              <div className="flex items-baseline mb-4">
                <span className="text-sm text-gray-200 mr-1">US</span>
                <span className="text-4xl text-white font-bold">$250</span>
                <span className="text-sm text-gray-400 ml-1">.00</span>
              </div>
              <p className="text-green-400 mb-4">Full access</p>
              <div className="flex items-center text-white justify-between mb-4">
                <span>For myself</span>
                <Switch />
                <span>For my team</span>
              </div>
              <Link href="/premium">
                <Button className="w-full bg-[#F3A833] hover:bg-[#F3A833] text-green-950 mb-4">
                  Buy Now
                </Button>
              </Link>
              <p className="text-center text-sm text-white mb-6">
                30-Day Money-Back Guarantee
              </p>
              <div className="bg-gray-200 p-4 rounded-lg mb-4">
                <p className="text-sm mb-2">
                  We noticed that you're from 🇿🇲 Zambia. To help facilitate
                  global learning, we are offering purchasing power parity
                  pricing.
                </p>
                <p className="text-sm mb-4">
                  Please note that you will only be able to view content from
                  within Zambia, and no bonuses will be provided.
                </p>
                <p className="text-sm mb-2">
                  If that is something that you need:
                </p>
                <div className="flex items-center">
                  <Checkbox id="regional-pricing" className="mr-2" />
                  <label htmlFor="regional-pricing" className="text-sm">
                    Activate 70% off with regional pricing
                  </label>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
