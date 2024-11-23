import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowUpRight, Box, Code2, Bell, Blocks, Layers } from "lucide-react";
import Link from "next/link";

export default function DemoView() {
  return (
    <div className="bg-[#0A0A1B] text-white min-h-screen p-4 sm:p-8">
      {/* <div className="max-w-6xl mx-auto"> */}
      <div className="">
        <header className="mb-8 mt-8 sm:mb-12">
          <h2 className="text-green-50 text-sm font-semibold mb-2">
            Developer-first design
          </h2>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
            A unified platform with modern APIs
          </h1>
          <p className="text-gray-400 mb-6">
            Lupleg provides a single, elegant interface that abstracts dozens of
            enterprise integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://docs.lupleg.org">
              <Button className="bg-[#F3A833] text-green-950 hover:bg-[#F3A833] w-full sm:w-auto">
                Read the docs
              </Button>
            </Link>

            <Link href="#">
              <Button
                variant="outline"
                className="text-green-950 hover:text-green-950 w-full sm:w-auto"
              >
                {/* TODO: API implementation */}
                Get your API key
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-[#13132B] border-0 overflow-hidden">
              <Tabs defaultValue="python" className="w-full">
                <TabsList className="bg-[#0D0D1F] p-0 h-12 overflow-x-auto flex-nowrap">
                  {[
                    "Node.js",
                    "Ruby",
                    "Python",
                    "Go",
                    "PHP",
                    "Java",
                    ".NET",
                    "cURL",
                  ].map((lang) => (
                    <TabsTrigger
                      key={lang}
                      value={lang.toLowerCase()}
                      className="px-4 h-12 data-[state=active]:bg-[#13132B] whitespace-nowrap"
                    >
                      {lang}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <TabsContent value="python" className="p-4 overflow-x-auto">
                  <pre className="text-gray-300 text-sm sm:text-base">
                    <code>
                      {`# Get a user's access token and
# profile data from an Identity Provider

import lupleg
from lupleg import client

lupleg.api_key = 'sk_example_123456789'
lupleg.client_id = 'client_123456789'

client.sso.get_profile_and_token('01E295MCHPKBSQZ2SRDAP23X23')`}
                    </code>
                  </pre>
                </TabsContent>
                {/* Add other TabsContent for different languages */}
              </Tabs>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <FeatureItem
              icon={<Code2 className="h-6 w-6" />}
              title="RESTful APIs, JSON responses, and normalized objects"
            />
            <FeatureItem
              icon={<Layers className="h-6 w-6" />}
              title="Dashboard seamlessly integrates Lupleg into your application"
            />
            <FeatureItem
              icon={<Bell className="h-6 w-6" />}
              title="Realtime updates from directory services with webhook events"
            />
            <FeatureItem
              icon={<Box className="h-6 w-6" />}
              title="Modern SDKs for Node.js, Ruby, Python, .NET, Go and more"
            />
            <FeatureItem
              icon={<Blocks className="h-6 w-6" />}
              title="Multiple environments to map to your application development process"
            />
            <FeatureItem
              icon={<Layers className="h-6 w-6" />}
              title="Supports 20+ enterprise services with a single integration point"
            />
          </div>
        </div>

        <Card className="mt-8 mb-10 bg-[#13132B] border-0 p-4 overflow-hidden">
          <h3 className="text-[#F3A833] mb-2">HTTP 200</h3>
          <div className="overflow-x-auto">
            <pre className="text-sm sm:text-base text-gray-300 min-w-max">
              <code>
                {`{
  "access_token": "01DMEK0J53CV0C32CK55E0WZBQ",
  "profile": {
    "id": "prof_01DRA1XNSJDKGKM68ZFGGJXKXJ",
    "connection_id": "conn_01E4ZCR3K6J08K1ZX8XZWH6HDC",
    "connection_type": "okta",
    "email": "mark@lupleg-corp.com",
    "first_name": "Mark",
    "last_name": "Sikaundi",
    "idp_id": "00ujl29u0le5T6Aj10h7",
    "object": "profile",
    "raw_attributes": { ... }
  }
}`}
              </code>
            </pre>
          </div>
        </Card>
      </div>
    </div>
  );
}

function FeatureItem({ icon, title }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-[#13132B] p-2 rounded-lg shrink-0">{icon}</div>
      <p className="text-sm text-gray-300">{title}</p>
    </div>
  );
}
