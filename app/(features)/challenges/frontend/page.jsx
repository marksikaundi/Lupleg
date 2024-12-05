import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FrontendHero from "@/components/sections/FrontendHero";

const challenges = [
  {
    title: "Responsive Navigation Bar",
    description:
      "Create a responsive navigation bar that collapses into a hamburger menu on mobile devices.",
    difficulty: "Beginner",
    image: "https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png",
    link: "/challenges/frontend/nav-bar",
  },
  {
    title: "Interactive Pricing Component",
    description:
      "Build an interactive pricing component with a toggle for monthly/yearly billing.",
    difficulty: "Intermediate",
    image: "https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png",
    link: "/challenges/frontend/pricing-card",
  },
  {
    title: "Dark Mode Toggle",
    description:
      "Implement a dark mode toggle that switches between light and dark themes.",
    difficulty: "Intermediate",
    image: "https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png",
    link: "/challenges/frontend/dark-mode-toggle",
  },
  {
    title: "Drag and Drop Area",
    description:
      "Create a drag and drop Area with functionality displaying name of file uploaded.",
    difficulty: "Advanced",
    image: "https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png",
    link: "/challenges/frontend/drag-and-drop",
  },
  {
    title: "Animated Page Transitions",
    description:
      "Implement smooth page transitions using CSS animations or a animation library.",
    difficulty: "Advanced",
    image: "https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png",
    link: "/challenges/frontend/animation",
  },
  {
    title: "Custom Video Player",
    description:
      "Build a custom video player with play, pause, seek, and volume controls.",
    difficulty: "Intermediate",
    image: "https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png",
    link: "/challenges/frontend/video-player",
  },
  {
    title: "Pay Card Form",
    description:
      "Create a credit card form with card number, expiry date, and CVC code.",
    difficulty: "Advanced",
    image: "https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png",
    link: "/challenges/frontend/pay",
  },
];

export default function UIOview() {   
  return (
    <div className="flex flex-col min-h-screen">
      <FrontendHero />
      <main className="flex-1">
        <section id="ui" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {challenges.map((challenge, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image
                    src={challenge.image}
                    alt={challenge.title}
                    width={400}
                    height={200}
                    className="w-full object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{challenge.title}</CardTitle>
                    <CardDescription>{challenge.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">{challenge.difficulty}</Badge>
                  </CardContent>
                  <CardFooter>
                    <Link href={challenge.link || "#"}>
                      <Button className="w-full bg-[#2D1537] hover:bg-[#2D1537]">
                        Start Challenge
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
