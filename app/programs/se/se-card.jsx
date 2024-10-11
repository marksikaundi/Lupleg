import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function SeCard() {
  return (
    <div className="min-h-screen  text-white p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <Card className="bg-[#13132B] my-8 border-gray-700">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src="/frontend/html.svg"
                alt="Frontend Development at Lupleg"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    Frontend with JavaScript
                  </h2>
                  <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                </div>
                <p className="text-green-400 text-sm mb-3 text-center sm:text-left">
                  06 Modules
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  Learn the basics to advanced of frontend development with our
                  interactive guide. Get started today from zero to advanced.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/se/frontends">
                    <Button variant="secondary" size="sm">
                      View →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#13132B] my-8 border-gray-700">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src="/frontend/server.svg"
                alt="Backend Development with Node.js"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    Backend with Node.js
                  </h2>
                  <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                </div>
                <p className="text-green-400 text-sm mb-3 text-center sm:text-left">
                  04 Modules
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  Learn how to build backend applications with Node.js. All
                  content are beginner friend you will get along with no time.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/se/backends">
                    <Button variant="secondary" size="sm">
                      View →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#13132B] my-8 border-gray-700">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src="/frontend/db.png"
                alt="Database with MongoDB at Lupleg"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    Database with MongoDB
                  </h2>
                  <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                </div>
                <p className="text-green-400 text-sm mb-3 text-center sm:text-left">
                  02 Modules
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  Learn everything about MongoDB. This program covers all core
                  concept with its usecase in modern development.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/se/databases">
                    <Button variant="secondary" size="sm">
                      View →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#13132B] my-8 border-gray-700">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src="/frontend/cloud.svg"
                alt="DevOps for Beginners at Lupleg"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    DevOps for Beginners
                  </h2>
                  <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                </div>
                <p className="text-green-400 text-sm mb-3 text-center sm:text-left">
                  04 Modules
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  Learn how platform like AWS, GCP & Azure are used for
                  deploying applications during development with our easy step
                  by step.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/se/devops">
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
