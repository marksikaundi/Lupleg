import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function TsCard() {
  return (
    <div className="min-h-screen  text-white p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <Card className="bg-[#2D1537] my-8 border-[#2D1537] ">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src="/ts.webp"
                alt="TypeScript logo with glowing effect"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    Solving TypeScript Errors
                  </h2>
                  <span className="bg-[#F3A833] text-black text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                </div>
                <p className="text-[#F3A833] text-sm mb-3 text-center sm:text-left">
                  10 EXERCISES
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  TypeScript boosts productivity but faces pitfalls like type
                  mismatches, null values, & puzzling errors. Learn to spot &
                  solve these for swift progress.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/typescript/solving-typescript-errors">
                    <Button variant="secondary" size="sm">
                      View →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#2D1537] my-8 border-[#2D1537] ">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src="/ts.webp"
                alt="TypeScript logo with glowing effect"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    React with TypeScript
                  </h2>
                  <span className="bg-[#F3A833] text-black text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                </div>
                <p className="text-[#F3A833] text-sm mb-3 text-center sm:text-left">
                  21 EXERCISES
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  Get productive building applications with React and TypeScript
                  with our interactive guide on React's types - from component
                  props to useRef.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/typescript/react-with-typescript">
                    <Button variant="secondary" size="sm">
                      View →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#2D1537] my-8 border-[#2D1537] ">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src="/ts.webp"
                alt="TypeScript logo with glowing effect"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    Beginner's TypeScript
                  </h2>
                  <span className="bg-[#F3A833] text-black text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                </div>
                <p className="text-[#F3A833] text-sm mb-3 text-center sm:text-left">
                  18 EXERCISES
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  Free interactive video tutorial that will help you get started
                  with TypeScript. Learn the basics and start building your own
                  web applications.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/typescript/beginners-typescript">
                    <Button variant="secondary" size="sm">
                      View →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#2D1537] my-8 border-[#2D1537] ">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src="/ts.webp"
                alt="TypeScript logo with glowing effect"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    Zod Tutorial
                  </h2>
                  <span className="bg-[#F3A833] text-black text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                </div>
                <p className="text-[#F3A833] text-sm mb-3 text-center sm:text-left">
                  10 EXERCISES
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  Zod is a TypeScript-first schema declaration and validation
                  library. In this tutorial, Mark Sikaundi has prepared a set of
                  exercises that will help you level up.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/typescript/zod">
                    <Button variant="secondary" size="sm">
                      View →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
