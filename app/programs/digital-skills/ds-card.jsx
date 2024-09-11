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
            <p className="mb-6">
              You will learning the basics of digital skills, from the core
              benefits and concepts of digital skills: From working with
              microsoft 365, google workspace, and other digital tools.
            </p>
            <p className="mb-6">
              Whether you're picking up digital skills for the first time, or
              want to deepen your knowledge, Pro Essentials is the course for
              you. Here's what's included:
            </p>
            <p className="mb-6">
              Whether you're picking up TypeScript for the first time, or want
              to deepen your knowledge, Pro Essentials is the course for you.
            </p>
            <p className="mb-6">Here's what's included:</p>
            <h2 className="text-2xl font-bold mb-4">
              Introduction to TypeScript
            </h2>
            <p className="mb-4">
              Kickstart your TypeScript setup with a refresher on the core
              benefits and concepts of TypeScript: initial configuration, the
              TypeScript compiler, and type inference.
            </p>
            <p className="mb-4">
              Follow the recommended setup and extensions for your editor, with
              a focus on Visual Studio Code, and become familiar with features
              like navigation, autocompletion, refactoring, and writing
              self-documenting code.
            </p>
            <p>
              Understand TypeScript's role in the build process, and why
              browsers can't run TypeScript directly.
            </p>
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
