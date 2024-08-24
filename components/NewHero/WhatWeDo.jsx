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
            Enterprise SSO
            <br />
            (and a whole lot more)
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mb-6">
            WorkOS is a set of building blocks for quickly adding enterprise
            features to your app. You'll be shipping quickly with a
            market-proven solution for your customers.
          </p>
          <Link href="">
            <Button className="bg-green-950 hover:bg-green-800 text-white px-6 py-3 font-thin rounded-full text-lg">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src="/wedo.png"
            alt="What We Do Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureItem
          icon={<LockKeyhole className="w-12 h-12 text-green-950 mb-10 " />}
          title="Auth for all SSO providers"
          description="Support any SAML or OIDC identity provider with a single integration"
        />
        <FeatureItem
          icon={<Users className="w-12 h-12 text-green-950 mb-10" />}
          title="Complete User Management"
          description="Manage users and organizations, set policies, and support all auth types"
        />
        <FeatureItem
          icon={<LogIn className="w-12 h-12 text-green-950 mb-10" />}
          title="Social authentication"
          description="Sign in to your app with Microsoft, Google, and more"
        />
        <FeatureItem
          icon={<Fingerprint className="w-12 h-12 text-green-950 mb-10" />}
          title="AuthKit"
          description="Flexible authentication UI powered by WorkOS and Radix"
        />
        <FeatureItem
          icon={<KeyRound className="w-12 h-12 text-green-950 mb-10" />}
          title="Magic Auth"
          description="Passwordless auth with a six-digit code sent via email"
        />
        <FeatureItem
          icon={<ShieldCheck className="w-12 h-12 text-green-950 mb-10" />}
          title="Multi-Factor Auth"
          description="Manage users and organizations, set policies, and support all auth types"
        />
      </div>
    </div>
  );
}
