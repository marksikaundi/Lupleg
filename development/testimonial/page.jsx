import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
// import Video from 'next-video';
// import Dm from "/videos/dm.mov";
import TMCard from "./tm-card";

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

      <TMCard />

    </div>
  );
}
