"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SiSlack } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

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
                If you have any challenges, feel free to ask for help from the
                community.
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
                <span className="font-semibold">0:14</span>
                What are HTML tags and how do they work? This is a question that
                many beginners ask when they are first learning HTML. In this
                module, we will explore the basics of HTML tags and how they
                work. We will also discuss some common HTML tags and their uses.
              </p>
              <p className="text-sm">
                <span className="font-semibold">0:28</span>
                What are HTML attributes and how do they work? This is another
                question that many beginners ask when they are first learning
                HTML. In this module, we will explore the basics of HTML
                attributes and how they work. We will also discuss some common
                HTML attributes and their uses.
              </p>

              <p className="text-sm">
                <span className="font-semibold">0:42</span>
                What are HTML elements and how do they work? This is yet another
                question that many beginners ask when they are first learning
                HTML. In this module, we will explore the basics of HTML
                elements and how they work. We will also discuss some common
                HTML elements and their uses.
              </p>

              <p className="text-sm">
                <span className="font-semibold">0:56</span>
                What are HTML forms and how do they work? This is a question
                that many beginners ask when they are first learning HTML. In
                this module, we will explore the basics of HTML forms and how
                they work. We will also discuss some common HTML form elements
                and their uses. We will also discuss some common HTML form tags
                and their uses. We will also discuss some common HTML form
                attributes and their uses. We will also discuss some common HTML
                form elements and their uses.
              </p>

              <p className="text-sm">
                <span className="font-semibold">1:10</span> What are HTML tables
                and how do they work? This is a question that many beginners ask
                when they are first learning HTML. In this module, we will
                explore the basics of HTML tables and how they work. We will
                also discuss some common HTML table elements and their uses. We
                will also discuss some common HTML table tags and their uses. We
                will also discuss some common HTML table attributes and their
                uses. We will also discuss some common HTML table elements and
                their uses.
              </p>

              <p className="text-sm">
                <span className="font-semibold">1:24</span> What are HTML links
                and how do they work? This is a question that many beginners ask
                when they are first learning HTML. In this module, we will
                explore the basics of HTML links and how they work. We will also
                discuss some common HTML link elements and their uses. We will
                also discuss some common HTML link tags and their uses. We will
                also discuss some common HTML link attributes and their uses. We
                will also discuss some common HTML link elements and their uses.
                We will also discuss some common HTML link tags and their uses.
                We will also discuss some common HTML link attributes and their
                uses.
              </p>

              <p className="text-sm">
                <span className="font-semibold">1:38</span> What are HTML images
                and how do they work? This is a question that many beginners ask
                when they are first learning HTML. In this module, we will
                explore the basics of HTML images and how they work. We will
                also discuss some common HTML image elements and their uses. We
                will also discuss some common HTML image tags and their uses. We
                will also discuss some common HTML image attributes and their
                uses. We will also discuss some common HTML image elements and
                their uses. We will also discuss some common HTML image tags and
                their uses. We will also discuss some common HTML image
                attributes and their uses. We will also discuss some common HTML
                image elements and their uses. We will also discuss some common
                HTML image tags and their uses. We will also discuss some common
                HTML image attributes and their uses.
              </p>
            </CardContent>
            <CardHeader>
              <CardTitle>CSS Basics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                <span className="font-semibold">0:00</span>
                What's up, Wizards? In this module we shall cover basics of css
                and its use case.
              </p>
              <p className="text-sm">
                <span className="font-semibold">0:14</span>
                What is CSS and how does it work? This is a question that many
                beginners ask when they are first learning CSS. In this module,
                we will explore the basics of CSS and how it works. We will also
                discuss some common CSS properties and their uses.
              </p>
              <p className="text-sm">
                <span className="font-semibold">0:28</span>
                What are CSS selectors and how do they work? This is another
                question that many beginners ask when they are first learning
                CSS. In this module, we will explore the basics of CSS selectors
                and how they work. We will also discuss some common CSS
                selectors and their uses.
              </p>

              <p className="text-sm">
                <span className="font-semibold">0:42</span>
                What are CSS classes and how do they work? This is yet another
                question that many beginners ask when they are first learning
                CSS. In this module, we will explore the basics of CSS classes
                and how they work. We will also discuss some common CSS classes
                and their uses.
              </p>

              <p className="text-sm">
                <span className="font-semibold">0:56</span>
                What are CSS IDs and how do they work? This is a question that
                many beginners ask when they are first learning CSS. In this
                module, we will explore the basics of CSS IDs and how they work.
                We will also discuss some common CSS IDs and their uses.
              </p>

              <p className="text-sm">
                <span className="font-semibold">1:10</span>
                What are CSS properties and how do they work? This is a question
                that many beginners ask when they are first learning CSS. In
                this module, we will explore the basics of CSS properties and
                how they work. We will also discuss some common CSS properties
                and their uses.
              </p>

              <p className="text-sm">
                <span className="font-semibold">1:24</span>
                What are CSS values and how do they work? This is a question
                that many beginners ask when they are first learning CSS. In
                this module, we will explore the basics of CSS values and how
                they work. We will also discuss some common CSS values and their
                uses.
              </p>

              <p className="text-sm">
                <span className="font-semibold">1:38</span>
                What are CSS units and how do they work? This is a question that
                many beginners ask when they are first learning CSS. In this
                module, we will explore the basics of CSS units and how they
                work. We will also discuss some common CSS units and their uses.
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
                  <Link href="/learning/frontend/details">
                    <p className="font-semibold"> Introductions </p>
                    <p className="text-sm text-zinc-600">1 min</p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <Link href="/learning/frontend/details">
                    <p className="font-semibold">HTML Tags </p>
                    <p className="text-sm text-zinc-600">4 mins</p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <Link href="/learning/frontend/details">
                    <p className="font-semibold">HTML attributes</p>
                    <p className="text-sm text-zinc-600">5 mins</p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <Link href="/learning/frontend/details">
                    <p className="font-semibold">What are HTML elements</p>
                    <p className="text-sm text-zinc-600">6 mins</p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <Link href="/learning/frontend/details">
                    <p className="font-semibold">What are HTML forms</p>
                    <p className="text-sm text-zinc-600">1 min</p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <Link href="/learning/frontend/details">
                    <p className="font-semibold">What are HTML tables</p>
                    <p className="text-sm text-zinc-600">1 min</p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <Link href="/learning/frontend/details">
                    <p className="font-semibold">
                      What are HTML links & Images
                    </p>
                    <p className="text-sm text-zinc-600">1 min</p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <Link href="/learning/frontend/details">
                    <p className="font-semibold">Practical Session</p>
                    <p className="text-sm text-zinc-600">1 min</p>
                  </Link>
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
