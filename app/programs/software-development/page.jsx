import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import SECard from "./se-card";
import SEFQ from "./se-fq";

export default function SE() {
  return (
    <div>
      <div className="min-h-screen bg-[#0A0A1B] text-white p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link href="/programs">
              <Button variant="link" className="text-green-400 p-0">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Pro Essentials
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Software Engineering
                <br />
                Pro Essentials
              </h1>
              <div className="flex items-center mb-6">
                <Image
                  src="/mark.jpg"
                  alt="Mark Sikaundi"
                  width={40}
                  height={40}
                  className="rounded-full w-16 h-16 mr-3 sm:mr-6"
                />
                <span>Mark Sikaundi</span>
              </div>
              <div className="space-x-4 mb-8">
                <Link href="https://lab.lupleg.org">
                  <Button className="bg-green-500 hover:bg-green-600">
                    Preview  
                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                  </Button>
                </Link>
                <Link href="https://github.com/Lupleg">
                  <Button className=" border border-green-500 text-white hover:bg-gray-800">
                    <FaGithub className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link>
              </div>
              <p className="mb-6">
                A collection of professional, exercise-driven, in-depth, self-paced
                software engineering workshops for you to achieve software
                engineering wizardry. 
              </p>
              <p>
                This course is designed to help you understand the core concepts
                of software engineering and how to apply them in real-world
                projects. We'll cover everything from the basics of software to
                the more advanced topics like design patterns, testing, and
                deployment. By the end of this course, you'll have the skills
                you need to build robust, scalable, and maintainable software
                applications.
              </p>
            </div>
            <div className="order-first md:order-last mb-8 md:mb-0">
              <Image
                src="/ts.webp"
                alt="TypeScript Course"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl text-white font-bold mb-6">
              Bundle & Save
            </h2>
            <Card className="bg-[#13132B] p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/ts.webp"
                    alt="Complete Volume"
                    width={80}
                    height={80}
                    className="mr-4"
                  />
                  <div>
                    <h3 className="text-xl text-white font-bold">
                      Complete Volume
                    </h3>
                    <p className="text-gray-200">Includes 5 projects.</p>
                  </div>
                </div>
                <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  BEST VALUE
                </span>
              </div>
            </Card>
          </div>
        </div>
        <SECard />
        <SEFQ />
      </div>
    </div>
  );
}
