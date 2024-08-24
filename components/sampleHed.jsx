import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Transparent pricing
          </h2>
          <p className="text-lg text-gray-600">
            Integrate corporate directories and HRIS systems to power the user
            lifecycle management of your app.
          </p>
          <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
            View pricing
          </Button>
        </div>
        <Card className="p-6">
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase">
              UNLIMITED USERS
            </h3>
            <div className="flex items-baseline mt-2">
              <span className="text-4xl font-extrabold">$125</span>
              <span className="ml-1 text-xl text-gray-500">
                per connection / month
              </span>
            </div>
            <p className="mt-1 text-sm text-indigo-500">
              Automatic volume discounts
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900">INCLUDED AT NO CHARGE</h4>
            {[
              "Support dozens of SCIM & HRIS services",
              "User + group lifecycle event tracking",
              "Realtime updates via events API",
            ].map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckIcon className="h-5 w-5 text-indigo-500 mr-2" />
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card className="mt-12 p-8">
        <h3 className="text-2xl font-bold text-center mb-8">
          <span className="text-indigo-500">Built for the most demanding </span>
          <span className="text-teal-400">apps</span>
        </h3>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "99.99% uptime",
              description: "Guaranteed uptime SLAs for enterprise customers",
              action: "View uptime SLAs",
            },
            {
              title: "Premium support",
              description:
                "Expert guided integration support and response time SLAs",
              action: "View support plans",
            },
            {
              title: "Custom enterprise plans",
              description:
                "Contract-based plans tailored to your business requirements",
              action: "Contact sales",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <Button
                variant="link"
                className="text-indigo-500 hover:text-indigo-600"
              >
                {item.action}
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
