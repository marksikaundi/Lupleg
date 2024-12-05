"use client";

import { useState } from "react";
import { Check, HelpCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Best for individuals and small teams",
    features: [
      {
        name: "Free forever",
        tooltip: "No credit card required",
      },
      {
        name: "Access to frontend challenges",
        tooltip: " All frontend challenges available ",
      },

      {
        name: "15 days of mentorship",
        tooltip: "Join me from Monday to Friday mentorship 3o minutes",
      },

      {
        name: "15 days access to 2 projects",
        tooltip: " Access to 2 projects for 15 days",
      },

      {
        name: "CV/Resume review",
        tooltip: " We help you review your CV/Resume",
      },
    ],
  },
  {
    name: "Pro",
    price: "$29.99",
    description: "Better for growing teams",
    features: [
      {
        name: "All Free Plan features",
        tooltip: "Everything in the Free Plan, plus more",
      },

      {
        name: "Access to frontend challenges",
        tooltip: " All frontend challenges available ",
      },
      {
        name: "Access to backend challenges",
        tooltip: " All backend challenges available ",
      },
      {
        name: "Daily mentorship from Monday to Friday",
        tooltip: " Join me from Monday to Friday mentorship 2hours",
      },
      {
        name: " Access to all projects",
        tooltip: " Solution avaialable to our challenges",
      },
      {
        name: "Practical technical interviews",
        tooltip: " We help you be accessed for the interview",
      },
      {
        name: "Internship opportunity",
        tooltip: " Earn your intership to work with real world products",
      },
      {
        name: "Resume/CV review",
        tooltip: " After completing will review your resume",
      },
    ],
  },
];

export default function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState();

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`flex flex-col w-full ${
              selectedPlan === plan.name ? "border-primary" : ""
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-4xl font-bold mb-4">
                {plan.price}
                <span className="text-sm font-normal">/month</span>
              </p>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center">
                    <Check className="h-5 w-5 text-[#2D1537] mr-2" />
                    <span>{feature.name}</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-muted-foreground ml-2" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{feature.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="p-6 pt-0">
              <Button
                className="w-full"
                variant={plan.name === "Pro" ? "default" : "outline"}
                onClick={() => setSelectedPlan(plan.name)}
              >
                {plan.name === "Pro" && <Zap className="mr-2 h-4 w-4" />}
                {selectedPlan === plan.name
                  ? "Selected"
                  : `Choose ${plan.name}`}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
