import { Check, X, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const freePlanFeatures = [
  {
    name: "All Free Plan features",
    description: "Everything in the Free Plan, plus more",
    included: true,
  },
  {
    name: "Priority email support",
    description: "Get help via email within 24 hours",
    included: true,
  },
  {
    name: "Access to community",
    description: "Join our user community forum",
    included: true,
  },
  {
    name: "Coding challenges",
    description: " All coding challenges available ",
    included: true,
  },
  {
    name: "2hrs Mentroship call ",
    description: "Join me from Monday to Friday mentorship",
    included: false,
  },
  {
    name: "Access to all solutions",
    description: "Solution avaialable to our challenges",
    included: false,
  },
  {
    name: "Practical technical interviews",
    description: "We help you be accessed for the interview",
    included: false,
  },
  {
    name: "Internship opportunity",
    description: "Earn your intership to work with real world products",
    included: false,
  },
  {
    name: "Resume/CV review",
    description: "After completing will review your resume",
    included: false,
  },
];

const proPlanFeatures = [
  {
    name: "All Free Plan features",
    description: "Everything in the Free Plan, plus more",
    included: true,
  },
  {
    name: "Priority email support",
    description: "Get help via email within 24 hours",
    included: true,
  },
  {
    name: "Access to community",
    description: "Join our user community forum",
    included: true,
  },
  {
    name: "Coding challenges",
    description: " All coding challenges available ",
    included: true,
  },
  {
    name: "2hrs Mentroship call ",
    description: "Join me from Monday to Friday mentorship",
    included: true,
  },
  {
    name: "Access to all solutions",
    description: "Solution avaialable to our challenges",
    included: true,
  },
  {
    name: "Practical technical interviews",
    description: "We help you be accessed for the interview",
    included: true,
  },
  {
    name: "Internship opportunity",
    description: "Earn your intership to work with real world products",
    included: true,
  },
  {
    name: "Resume/CV review",
    description: "After completing will review your resume",
    included: true,
  },
];

function FeatureItem({ feature }) {
  return (
    <li className="flex items-center">
      {feature.included ? (
        <Check className="text-green-500 mr-2 h-5 w-5 flex-shrink-0" />
      ) : (
        <X className="text-red-500 mr-2 h-5 w-5 flex-shrink-0" />
      )}
      <span className={feature.included ? "" : "text-gray-400"}>
        {feature.name}
      </span>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" className="p-0 h-auto ml-1">
              <HelpCircle className="h-4 w-4 text-gray-400" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{feature.description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </li>
  );
}

export default function Premium() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Choose Your Plan
      </h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        <Card className="w-full md:w-1/2 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Free Plan
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Perfect for getting started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-2">
              {freePlanFeatures.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-full md:w-1/2 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Pro Plan
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              For power users and teams
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <span className="text-4xl font-bold">$19</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-2">
              {proPlanFeatures.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              Upgrade to Pro
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
