import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
// import Video from 'next-video';
import Dm from "/videos/dm.mov";

export default function TestimonialPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          What Our Customers Say
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our satisfied customers
          have to say about their experience with us.
        </p>
      </header>

      {/* Video Section */}
      <section className="mb-16">
        <div className="aspect-w-16 aspect-h-9 bg-muted rounded-lg overflow-hidden">
          {/* Replace the div below with your actual video embed code */}
          <div className="flex items-center justify-center">
            {/* <Video src={Dm} /> */}
            <video width="320" height="240" controls preload="none">
              <source
                src="https://bpohx2ibxhjdljpx.public.blob.vercel-storage.com/sample/mark-pre4bMqC6HiZeU8JJgoJFOlQ0Tlft9"
                type="video/mov"
              />
            </video>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <p className="text-lg mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to join our satisfied customers?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Experience the difference for yourself. Start your journey with us
          today.
        </p>
        <Button size="lg">Get Started Now</Button>
      </section>
    </div>
  );
}

// Sample testimonial data
const testimonials = [
  {
    quote:
      "This product has completely transformed our workflow. It's intuitive, powerful, and a joy to use every day.",
    name: "Alex Johnson",
    title: "CTO, TechCorp",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The customer support is unparalleled. They went above and beyond to ensure our success.",
    name: "Samantha Lee",
    title: "Operations Manager, InnovateCo",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "I can't imagine running my business without this tool. It's been a game-changer for our productivity.",
    name: "Michael Chen",
    title: "Founder, StartUp Inc.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The ROI we've seen since implementing this solution has been phenomenal. Highly recommended!",
    name: "Emily Rodriguez",
    title: "CFO, GrowthCorp",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "From onboarding to daily use, everything about this product is top-notch. It's clear they put the user first.",
    name: "David Kim",
    title: "Product Manager, InnovateNow",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "This solution has helped us scale our operations effortlessly. It's been crucial to our recent growth.",
    name: "Sarah Thompson",
    title: "COO, ScaleUp Ltd.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];
