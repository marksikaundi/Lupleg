"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const blocks = [
  {
    title: "Three Plans With Primary Background at Top",
    component: (
      <div className="bg-[#2D1537] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Affordable Pricing
            </h2>
            <p className="text-purple-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore magna aliqua.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "PERSONAL",
                price: "9",
                features: [
                  "2 Core Xeon CPU",
                  "1 GB RAM",
                  "30 GB SSD",
                  "1 TB Transfer",
                  "99.9% Uptime",
                ],
              },
              {
                name: "BUSINESS",
                price: "15",
                popular: true,
                features: [
                  "4 Core Xeon CPU",
                  "2 GB RAM",
                  "50 GB SSD",
                  "2 TB Transfer",
                  "99.9% Uptime",
                  "Free Domain & SSL",
                  "Free DNS Management",
                ],
              },
              {
                name: "ENTERPRISE",
                price: "25",
                features: [
                  "8 Core Xeon CPU",
                  "4 GB RAM",
                  "100 GB SSD",
                  "Unlimited Transfer",
                  "99.99% Uptime",
                  "Free Domain & SSL",
                  "Free DNS Management",
                  "Free Offsite Backup",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 rounded-lg overflow-hidden relative"
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-bold mb-4">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className="text-gray-500 ml-1">/month</span>
                  </div>
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-[#2D1537]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 border-t">
                  <Button className="w-full bg-[#2D1537] hover:bg-purple-700">
                    Create Server
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Two Plans With Duration Switcher",
    component: (
      <div className="bg-white py-16 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-100 rounded-full -translate-x-1/2 blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl opacity-50" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Flexible Plans.
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore magna aliqua.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <span className={`text-sm font-medium`}>Weekly</span>
              <Switch />
              <span className={`text-sm font-medium`}>Yearly</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Free Plan",
                price: "0",
                description: "For Personal blogs",
                features: [
                  "10 Templates",
                  "2 Landing Pages",
                  "5 Internal Pages",
                  "Basic Assistance",
                ],
              },
              {
                name: "Pro Plan",
                price: "49",
                description: "Suited for Production Websites",
                features: [
                  "All Templates",
                  "All Landing Pages",
                  "All Internal Pages",
                  "Priority Assistance",
                  "Lifetime Updates",
                ],
              },
            ].map((plan, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-500 ml-2">/month</span>
                    </div>
                    <h3 className="font-medium text-gray-500">{plan.name}</h3>
                  </div>
                  <div className="space-y-3 pt-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-[#2D1537]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-[#2D1537] hover:bg-purple-700">
                    Buy Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Simple Three Plans",
    component: (
      <div className="bg-white py-16 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl opacity-50" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Flexible Plans.
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore magna aliqua.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "PERSONAL",
                price: "17.99",
                description: "Suited for Personal Blogs",
                color: "bg-teal-500",
                hoverColor: "hover:bg-teal-600",
                features: [
                  "10 Templates",
                  "2 Landing Pages",
                  "10 Internal Pages",
                  "Basic Assistance",
                ],
              },
              {
                name: "BUSINESS",
                price: "37.99",
                description: "Suited for Production Websites",
                color: "bg-[#2D1537]",
                hoverColor: "hover:bg-purple-700",
                features: [
                  "40 Templates",
                  "8 Landing Pages",
                  "22 Internal Pages",
                  "Priority Assistance",
                ],
              },
              {
                name: "ENTERPRISE",
                price: "57.99",
                description: "Suited for Big Companies",
                color: "bg-pink-500",
                hoverColor: "hover:bg-pink-600",
                features: [
                  "90 Templates",
                  "22 Landing Pages",
                  "37 Internal Pages",
                  "Personal Assistance",
                ],
              },
            ].map((plan, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-sm text-gray-900">
                      {plan.name}
                    </h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-500 ml-2">MONTHLY</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      {plan.description}
                    </p>
                  </div>
                  <div className="space-y-3 pt-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full mt-6 ${plan.color} ${plan.hoverColor} text-white`}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export default function PricingBlocks() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-[#2D1537] inline-block border-b-4 border-[#2D1537]">
              Pricing Section
            </h2>
          </div>

          <div className="grid gap-8">
            {blocks.map((block, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border shadow-lg"
              >
                <div className="flex items-center justify-between p-4 border-b bg-white">
                  <span className="text-gray-600">{block.title}</span>
                  <Button variant="link" className="text-[#2D1537] font-medium">
                    View Live Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="relative">{block.component}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
