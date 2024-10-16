"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SiSlack } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";

export default function Component() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("https://mentor.lupleg.org");
  };
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card className="bg-zinc-900 text-white">
            <CardContent className="p-6">
              <div className="aspect-video bg-zinc-800 rounded-lg mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white opacity-50" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2"> HTML/CSS Basics </h2>
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
                    October 16th, 2024 | 21:1 | 0
                  </p>
                </div>
              </div>
              <p className="mb-4">
                In this tutorial, we will cover the basics of HTML and CSS. We
                will learn how to create a simple webpage.
              </p>
              <p className="mb-4">
                To get started, we shall explore the basic tags and attributes
                in HTML.
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="text-black">
                  <BsTwitterX className="w-4 h-4 mr-2" />
                  Tweet
                </Button>
                <Button variant="outline" size="sm" className="text-black">
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                {" "}
                Here is a catch, if you have some challenges{" "}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-600 mb-4">
                You can easily connect with other people in our community, where
                you can get direct support from our team and others. Everything
                is done on one easy join now ⤵️
              </p>
              <Button
                onClick={handleRedirect}
                variant="outline"
                size="sm"
                className="border border-green-950"
              >
                <SiSlack className="w-4 h-4 mr-2" />
                Discuss on Community
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>HTML 101</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                <span className="font-semibold">0:00</span> What's up, Wizards?
                In this module we shall cover basics of html and its use case.
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
            <CardHeader>
              <CardTitle>CSS Basics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                <span className="font-semibold">0:00</span> What's up, Wizards?
                In this module we shall cover basics of html and its use case.
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
              <CardTitle>Table of Contents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <p className="font-semibold">Type Predicates</p>
                  <p className="text-sm text-zinc-600">1 min</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <p className="font-semibold">How to Name your Types</p>
                  <p className="text-sm text-zinc-600">4 mins</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <p className="font-semibold">
                    Don't use return types, unless...
                  </p>
                  <p className="text-sm text-zinc-600">5 mins</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <p className="font-semibold">TypeScript 5.0 Beta Deep Dive</p>
                  <p className="text-sm text-zinc-600">6 mins</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <p className="font-semibold">
                    Conform a Derived Type Without Losing Its Literal Values
                  </p>
                  <p className="text-sm text-zinc-600">1 min</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <p className="font-semibold">
                    Conform a Derived Type Without Losing Its Literal Values
                  </p>
                  <p className="text-sm text-zinc-600">1 min</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <p className="font-semibold">
                    Conform a Derived Type Without Losing Its Literal Values
                  </p>
                  <p className="text-sm text-zinc-600">1 min</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <p className="font-semibold">
                    Conform a Derived Type Without Losing Its Literal Values
                  </p>
                  <p className="text-sm text-zinc-600">1 min</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">
                Tech tips delivered direct to your inbox:
              </h3>
              <div className="flex space-x-2">
                <Input placeholder="Preferred name" className="flex-grow" />
                <Input placeholder="you@example.com" className="flex-grow" />
              </div>
              <Button className="w-full mt-2 bg-green-950">
                Subscribe to LuplegX for more tips
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
