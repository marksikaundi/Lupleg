import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import DsCard from "./ds-card";
import DsFQ from "./ds-fq";
import SDCard from "./sd-card";
import DataFlow from "./flow.data";

export default function DigitalSkills() {
  return (
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
              Digital Skills
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
              The Digital Skills Training program is designed to equip you with
              the knowledge and skills needed to succeed in the tech industry.
              Whether you're looking to start a career in data analysis, graphic
              design, or web development, this program will provide you with the
              foundational skills and hands-on experience to kickstart your
              journey as a digital professional.
            </p>
            <p>
              The program is led by an experienced mentor who will guide you
              through the curriculum, provide personalized coaching, and support
              you in developing a strong portfolio of projects to showcase your
              skills to potential employers.
            </p>
          </div>
          <div className="order-first md:order-last mb-8 md:mb-0">
            <Image
              src="/ps/setup.svg"
              alt="TypeScript Course"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl text-white font-bold mb-6">Bundle & Save</h2>
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
      <DsCard />
      <SDCard/>
      <DataFlow/>
      <DsFQ />
    </div>
  );
}
