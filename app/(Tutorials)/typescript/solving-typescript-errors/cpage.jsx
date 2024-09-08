import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LockIcon } from "lucide-react";
import TsHero from "@/components/TutorialHeader/TsHero";

export default function STError() {
  return (
    <div >
      <TsHero />
      <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-green-400">
              TypeScript Error Handling Tutorial
            </h1>
            <p>
              Type checking is awesome, but sometimes it gives you error
              messages that can be challenging to interpret and resolve.
            </p>
            <p>
              Whether you're new to TypeScript or looking to deepen your
              understanding, this tutorial is your guide to understanding some
              of TypeScript's most common errors.
            </p>
            <p>
              In this tutorial, you'll find challenges centered around reading
              error messages and practical solutions to solving the issues they
              describe. You'll gain insights into:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Type Not Assignable Error:</strong> Understand why type
                mismatches occur and explore solutions like widening type
                definitions.
              </li>
              <li>
                <strong>Property Does Not Exist on Type Error:</strong> Learn
                how to deal with undeclared properties and the use of Record
                types.
              </li>
              <li>
                <strong>Possibly Null or Undefined Error:</strong> Tackle
                nullability issues with techniques like optional chaining and
                type narrowing.
              </li>
              <li>
                <strong>Types of Property are Incompatible Error:</strong>{" "}
                Decode complex error messages and refine your type definitions.
              </li>
              <li>
                <strong>Type Unknown Error:</strong> Handle unknown types
                effectively.
              </li>
              <li>
                <strong>
                  Expression of Type String Can't Be Used to Index Type Error:
                </strong>{" "}
                Overcome indexing issues with strategic type refinements.
              </li>
              <li>
                <strong>
                  Property Has No Initializer and Is Not Definitely Assigned in
                  Constructor Error:
                </strong>{" "}
                Address class property initialization challenges.
              </li>
              <li>
                <strong>Conversion of Type May Be a Mistake Error:</strong>{" "}
                Navigate type conversion with caution.
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400">Contents</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] pr-6">
                  <ol className="list-decimal text-white list-inside space-y-2">
                    <li>Fixing "X Is Not Assignable To Y"</li>
                    <li>Fixing "Property Does Not Exist On Type"</li>
                    <li>Fixing "X is Possibly Null Or Undefined"</li>
                    <li>Fixing "Types Of Property Are Incompatible"</li>
                    <li>Fixing "X Is Of Type Unknown"</li>
                    <li>Fixing "Expression Can't Be Used To Index Type X"</li>
                    <li>Fixing "Property X Has No Initializer"</li>
                    <li>Fixing "Conversion Of Type X May Be A Mistake"</li>
                    <li>Fixing "Cannot Redeclare Block-Scoped Variable"</li>
                    <li>Fixing "Could Not Find A Declaration File"</li>
                  </ol>
                </ScrollArea>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400">Coming Soon</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center h-[200px] bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg">
                <LockIcon className="w-10 h-10 text-green-500 mb-4" />
                <p className="text-center text-white text-sm">
                  Complete all lessons to unlock this certificate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
