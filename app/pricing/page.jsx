/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3nX9J5RnUBs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Addons from "@/components/FeaturesCards/Addons";

export default function Component() {
  return (
    <div className="bg-[#e0f2fe] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          Choose your plan to deliver exceptional service
        </h1>
        <div className="mt-8 flex justify-center">
          <Button className="mr-4 bg-white py-2 px-4 text-sm font-medium text-indigo-600 shadow-sm hover:bg-gray-50">
            For most businesses
          </Button>
          <Button className="bg-white py-2 px-4 text-sm font-medium text-indigo-600 shadow-sm hover:bg-gray-50">
            For smaller teams
          </Button>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Growth</CardTitle>
            <CardDescription>
              For teams looking to streamline support workflows and improve
              performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">
              $59USD <span className="text-lg">/seat/mo</span>
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Billed annually, minimum 2 seats
            </p>
            <Button className="mt-6 w-full bg-red-600 py-3 text-white">
              Get started
            </Button>
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Omnichannel shared inboxes</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Real-time collaboration features</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Up to 20 rules to automate workflows</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>
                  Analytics on team performance, customer satisfaction, SLAs and
                  more
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>
                  Built-in knowledge base, live chat with chatbots, and 50+
                  integrations
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link className="text-indigo-600 hover:text-indigo-500" href="#">
              Compare all plans
            </Link>
          </CardFooter>
        </Card>
        <Card className="relative bg-white">
          <Badge
            className="absolute top-0 right-0 mt-4 mr-4"
            variant="secondary"
          >
            MOST POPULAR
          </Badge>
          <CardHeader>
            <CardTitle>Scale</CardTitle>
            <CardDescription>
              For teams that need total workflow flexibility and advanced user
              management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">
              $99USD <span className="text-lg">/seat/mo</span>
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Billed annually, minimum 20 seats
            </p>
            <Button className="mt-6 w-full bg-red-600 py-3 text-white">
              Talk to sales
            </Button>
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Everything in Growth, plus...</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Multiple workspaces for distinct teams</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>
                  User management with SSO, SCIM provisioning, and custom
                  permissions
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>
                  No-code dynamic objects to connect backend systems and apps to
                  Zoho rules
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Analytics by customer from your CRM</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Onboarding and solution design</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link className="text-indigo-600 hover:text-indigo-500" href="#">
              Compare all plans
            </Link>
          </CardFooter>
        </Card>
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Premier</CardTitle>
            <CardDescription>
              For teams looking for professional services and partnership to
              meet enterprise needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">
              $229USD <span className="text-lg">/seat/mo</span>
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Billed annually, minimum 50 seats
            </p>
            <Button className="mt-6 w-full bg-red-600 py-3 text-white">
              Talk to sales
            </Button>
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Everything in Scale, plus...</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Highest usage caps across all features</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>
                  Additional success services including Premier Onboarding
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>
                  Custom Build Hours including API advisory and integration
                  development
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Video conferencing support</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link className="text-[#4F46E5] hover:text-indigo-500" href="#">
              Compare all plans
            </Link>
          </CardFooter>
        </Card>
      </div>
      <Addons />
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
