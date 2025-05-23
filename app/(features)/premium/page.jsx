"use client";

import { useState } from "react";
import { Check, HelpCircle, Zap, X } from "lucide-react";
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
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Free",
    price: { monthly: "$0", annual: "$0" },
    description: "Perfect for getting started with learning",
    badge: "",
    features: [
      {
        category: "Learning Resources",
        items: [
          {
            name: "Access to frontend challenges",
            tooltip: "All frontend challenges available",
            included: true,
          },
          {
            name: "Basic learning materials",
            tooltip: "Access to fundamental tutorials and guides",
            included: true,
          },
          {
            name: "Community forum access",
            tooltip: "Connect and learn from other students",
            included: true,
          },
        ],
      },
      {
        category: "Mentorship",
        items: [
          {
            name: "15 days of basic mentorship",
            tooltip: "Join Monday to Friday mentorship for 30 minutes",
            included: true,
          },
          {
            name: "Group learning sessions",
            tooltip: "Join weekly group learning sessions",
            included: true,
          },
        ],
      },
      {
        category: "Projects & Practice",
        items: [
          {
            name: "2 practice projects",
            tooltip: "Access to 2 projects for 15 days",
            included: true,
          },
          {
            name: "Basic code reviews",
            tooltip: "Get feedback on your code",
            included: true,
          },
        ],
      },
      {
        category: "Career Support",
        items: [
          {
            name: "CV/Resume review",
            tooltip: "One-time review of your CV/Resume",
            included: true,
          },
          {
            name: "GitHub profile review",
            tooltip: "Basic review of your GitHub profile",
            included: true,
          },
        ],
      },
    ],
  },
  {
    name: "Pro",
    price: { monthly: "$29.99", annual: "$299.99" },
    description: "For serious developers ready to excel",
    badge: "Most Popular",
    features: [
      {
        category: "Learning Resources",
        items: [
          {
            name: "All Free Plan features",
            tooltip: "Everything in the Free Plan, plus more",
            included: true,
          },
          {
            name: "Advanced frontend challenges",
            tooltip: "Premium frontend challenges with modern technologies",
            included: true,
          },
          {
            name: "Backend challenges",
            tooltip: "Comprehensive backend development challenges",
            included: true,
          },
          {
            name: "Architecture workshops",
            tooltip: "Learn system design and architecture",
            included: true,
          },
        ],
      },
      {
        category: "Mentorship & Support",
        items: [
          {
            name: "Daily mentorship (2 hours)",
            tooltip: "Extended mentorship sessions Monday to Friday",
            included: true,
          },
          {
            name: "1-on-1 coding sessions",
            tooltip: "Personal guidance on your projects",
            included: true,
          },
          {
            name: "Priority support",
            tooltip: "Get answers within 24 hours",
            included: true,
          },
        ],
      },
      {
        category: "Projects & Practice",
        items: [
          {
            name: "Unlimited project access",
            tooltip: "Access to all projects and solutions",
            included: true,
          },
          {
            name: "Real-world projects",
            tooltip: "Work on production-grade applications",
            included: true,
          },
          {
            name: "Advanced code reviews",
            tooltip: "Detailed code reviews with best practices",
            included: true,
          },
        ],
      },
      {
        category: "Career Growth",
        items: [
          {
            name: "Mock interviews",
            tooltip: "Practice technical interviews with feedback",
            included: true,
          },
          {
            name: "Internship opportunity",
            tooltip: "Priority access to internship positions",
            included: true,
          },
          {
            name: "Job search strategy",
            tooltip: "Personalized career path guidance",
            included: true,
          },
          {
            name: "Portfolio development",
            tooltip: "Help building a standout portfolio",
            included: true,
          },
        ],
      },
    ],
  },
];

export default function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Choose Your Learning Path
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Unlock your potential with our comprehensive learning plans
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span
              className={`text-sm ${
                !isAnnual ? "text-purple-600 font-medium" : "text-slate-600"
              }`}
            >
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="bg-purple-600"
            />
            <span
              className={`text-sm ${
                isAnnual ? "text-purple-600 font-medium" : "text-slate-600"
              }`}
            >
              Annually{" "}
              <span className="text-emerald-500 font-medium">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                selectedPlan === plan.name
                  ? "border-purple-600 shadow-purple-100 dark:shadow-purple-900/20"
                  : "border-slate-200 dark:border-slate-800"
              }`}
            >
              {plan.badge && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-slate-900 dark:text-white">
                    {isAnnual ? plan.price.annual : plan.price.monthly}
                    <span className="text-base font-normal text-slate-600 dark:text-slate-400">
                      /{isAnnual ? "year" : "month"}
                    </span>
                  </p>
                  {isAnnual && plan.name === "Pro" && (
                    <p className="text-sm text-emerald-500">
                      Save $59.89 yearly
                    </p>
                  )}
                </div>

                <div className="space-y-6">
                  {plan.features.map((category, idx) => (
                    <div key={idx} className="space-y-3">
                      <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        {category.category}
                      </h3>
                      <ul className="space-y-3">
                        {category.items.map((feature) => (
                          <li
                            key={feature.name}
                            className="flex items-center gap-2"
                          >
                            <div className="flex-shrink-0">
                              {feature.included ? (
                                <Check className="h-5 w-5 text-emerald-500" />
                              ) : (
                                <X className="h-5 w-5 text-slate-300" />
                              )}
                            </div>
                            <span className="text-slate-700 dark:text-slate-300">
                              {feature.name}
                            </span>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <HelpCircle className="h-4 w-4 text-slate-400" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="text-sm">{feature.tooltip}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${
                    plan.name === "Pro"
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "bg-white hover:bg-slate-50 text-slate-900 border border-slate-200"
                  }`}
                  onClick={() => setSelectedPlan(plan.name)}
                >
                  {plan.name === "Pro" && <Zap className="mr-2 h-4 w-4" />}
                  {selectedPlan === plan.name
                    ? "Selected"
                    : `Choose ${plan.name}`}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
