import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";

export default function Component() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card className="bg-[#2D1537] text-white">
            <CardContent className="p-6">
              <div className="aspect-video bg-white rounded-lg mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-[#2D1537] opacity-50" />
                </div>
              </div>
              <h2 className="mb-4">TypeScript 5.8 Beta is OUT!</h2>
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src="/mark.jpg"
                  alt="Mark Sikaundi"
                  width={40}
                  height={40}
                  className="rounded-full w-16 h-16 mr-3 sm:mr-6"
                />
                <div>
                  <p className="font-semibold">Mark Sikaundi</p>
                  <p className="text-sm text-zinc-400">
                    February 09th, 2025 | 21:1 | 0
                  </p>
                </div>
              </div>
              <p className="mb-4">
                Everything you need to know in latest TypeScript 5.8 Beta
              </p>
              <p className="mb-4">
                To get started using the beta, you can get it through NuGet or
                through npm with the NPM command:
              </p>
              <pre className="mb-4">
                <code>{`npm install -D typescript@beta`}</code>
              </pre>

              <div className="flex space-x-2">
                <Button
                  size="sm"
                  className="bg-white hover:bg-white text-[#2D1537]  "
                >
                  <FaXTwitter className="w-4 h-4 mr-2" />
                  Tweet
                </Button>
                <Button
                  size="sm"
                  className="bg-white hover:bg-white text-[#2D1537]  "
                >
                  <IoMdShare className="w-4 h-4 mr-2" /> Share
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>TypeScript 5.8 Beta is OUT!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-600 mb-4">
                TypeScript 5.1 unblocks React Server Components, brings some
                nice usability updates to functions returning undefined, and
                some perf improvements.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="bg-[#2D1537] hover:bg-[#2D1537] text-white hover:text-white"
              >
                <FaXTwitter className="w-4 h-4 mr-2" />
                Discuss on Twitter
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Transcript</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                <span className="font-semibold">0:00</span> What's up, Wizards?
                The TypeScript 5.1 Beta is out. My neighbors are building
                something in their back garden, so apologies for the noise, but
                I have to get this out right now. There are two main things that
                come from this release. The first one is undefined-returning
                functions.
              </p>
              <p className="text-sm">
                <span className="font-semibold">0:14</span> Functions that don't
                return anything in JavaScript just return undefined. In
                TypeScript, they're inferred as void. This one here, for
                instance, this function that's just returning absolutely
                nothing, is inferred as a function with no parameters that just
                returns void.
              </p>
              <p className="text-sm">
                <span className="font-semibold">0:28</span> What if the type of
                the function that you're passing in or the type that's expected
                actually returns undefined? This, currently, in TypeScript 5,
                will be an error. There are a bunch of these different cases
                here. This actually makes it less usable than you might
                expect...
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>More Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-[#2D1537]" />
                <div>
                  <p className="font-semibold">Type Predicates</p>
                  <p className="text-sm text-zinc-600">1 min</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-[#2D1537]" />
                <div>
                  <p className="font-semibold">How to Name your Types</p>
                  <p className="text-sm text-zinc-600">4 mins</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-[#2D1537]" />
                <div>
                  <p className="font-semibold">
                    Don't use return types, unless...
                  </p>
                  <p className="text-sm text-zinc-600">5 mins</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-[#2D1537]" />
                <div>
                  <p className="font-semibold">TypeScript 5.0 Beta Deep Dive</p>
                  <p className="text-sm text-zinc-600">6 mins</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">
                New TypeScript tips delivered to your inbox:
              </h3>
              <div className="flex space-x-2">
                <Input placeholder="Preferred name" className="flex-grow" />
                <Input placeholder="you@example.com" className="flex-grow" />
              </div>
              <Button className="w-full mt-2 bg-[#2D1537] hover:bg-[#2D1537] ">
                Subscribe for TypeScript tips
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
