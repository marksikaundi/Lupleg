import { Button } from "@/components/ui/button";
import {
  LockKeyhole,
  Users,
  LogIn,
  Fingerprint,
  KeyRound,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-3">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default function WhatWeDo() {
  return (
    <div className=" px-4 py-12 sm:px-6 lg:px-8 ">
      <div className="flex flex-col md:flex-row items-center justify-between mb-20">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-green-900 text-lg font-semibold mb-2">
            The all-in-one solution
          </h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            What we do
            <br />
            (and a whole lot more)
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mb-6">
            Lupleg is a community platform that enables teams to streamline and
            help novice scale up their career in tech. We provide a complete set
            of tools to help you build secure, reliable, and scalable software
            durring our programs.
          </p>
          <Link href="/lupleg-features">
            <Button className="bg-green-950 hover:bg-green-800 text-white px-6 py-3 font-thin rounded-full text-lg">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src="/teaching.svg"
            alt="What We Do Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureItem
          icon={<LockKeyhole className="w-12 h-12 text-green-950 mb-10 " />}
          title="Privacy and Security"
          description="We do make sure you learn everything from privacy to security in tech"
        />
        <FeatureItem
          icon={<Users className="w-12 h-12 text-green-950 mb-10" />}
          title="Collaboration and Community"
          description="We provide a platform for you to collaborate with other learners and mentors"
        />
        <FeatureItem
          icon={<LogIn className="w-12 h-12 text-green-950 mb-10" />}
          title="Network and Connect"
          description="During our programs, you get to network with industry professionals"
        />
        <FeatureItem
          icon={<Fingerprint className="w-12 h-12 text-green-950 mb-10" />}
          title="Unlocked Potential"
          description="We help you unlock your potential and scale up your career in tech"
        />
        <FeatureItem
          icon={<KeyRound className="w-12 h-12 text-green-950 mb-10" />}
          title="Everywhere Access"
          description="Access to our platform from anytime, anywhere, and using any device"
        />
        <FeatureItem
          icon={<ShieldCheck className="w-12 h-12 text-green-950 mb-10" />}
          title="Manage and Support"
          description="We provide support and help you manage your learning journey"
        />
      </div>
    </div>
  );
}
