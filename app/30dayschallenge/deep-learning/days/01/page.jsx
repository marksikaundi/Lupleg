import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";


export default function Component() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card className="bg-[#2D1537] text-white">
            <CardContent className="p-6">
              <div className="aspect-video bg-zinc-800 rounded-lg mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white opacity-50" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                {" "}
                Introduction to Deep Learning
              </h2>
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
                    January 18th, 2025 | 21:1 | 0
                  </p>
                </div>
              </div>
              <p className="mb-4">
                Deep learning is a subset of machine learning where artificial
                neural networks, algorithms inspired by the human brain, learn
                from large amounts of data. Similarly to how we learn from
                experience, the deep learning algorithm would perform a task
                repeatedly, each time tweaking it a little to improve the
                outcome. We refer to 'deep learning' because the neural networks
                have various (deep) layers that enable learning.
              </p>
              <p className="mb-4">
                Deep learning is a key technology behind driverless cars,
                enabling them to recognize a stop sign, or to distinguish a
                pedestrian from a lamppost. It is the key to voice control in
                consumer devices like phones, tablets, TVs, and hands-free
                speakers. Deep learning is getting lots of attention lately and
                for good reason. It's achieving results that were not possible
                before.
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="bg-black">
                  <FaXTwitter className="w-4 h-4 mr-2" />
                  Tweet
                </Button>
                <Button variant="outline" size="sm" className="bg-black">
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                A Comprehensive Introduction to Neural Networks and Deep Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-600 mb-4">
                In this comprehensive guide, you'll learn the basics of deep
                learning, how neural networks work, and how to train them. You'll also learn about
                the different types of neural networks and how to use them in practice.
              </p>
              <Button size="sm" className="bg-[#2D1537]">
                <FaXTwitter className="w-4 h-4 mr-2" />
                Discuss on Twitter
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Basics of Python</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                <span className="font-semibold">0:00</span> What's up, Wizards?
                We look at the basics of Python, how to install it, and how to get started with it.


              </p>
              <p className="text-sm">
                <span className="font-semibold">0:14</span> 
                We also look at the different types of Python, and how to use them in practice.

                
              </p>
              <p className="text-sm">
                <span className="font-semibold">0:28</span> 
                
                
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
                New TypeScript tips delivered to your inbox:
              </h3>
              <div className="flex space-x-2">
                <Input placeholder="Preferred name" className="flex-grow" />
                <Input placeholder="you@example.com" className="flex-grow" />
              </div>
              <Button className="w-full mt-2">
                Subscribe for TypeScript tips
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
