"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  TrendingUp,
} from "lucide-react";

const blocks = [
  {
    title: "Three Column Contact Details Cards",
    component: (
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <p className="text-[#2D1537] font-medium">Locations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Offices
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Secure",
              "24/7 Support",
              "Reliable",
              "Easy",
              "Customizable",
              "Fast",
            ].map((title, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {title}
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum donor amet siti ceali ut enim ad minim veniam,
                  quis nostrud.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Three Column Slider",
    component: (
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Popular Hotels</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Wyatt Residency",
                rating: "4.8",
                location: "Rome, Italy",
                price: "USD 39/Day",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.47.52%20PM-GPvmrhJ3qlAat46UnR7dLfxxMYU95s.png",
              },
              {
                name: "Soho Paradise",
                rating: "4.9",
                location: "Ibiza, Spain",
                price: "USD 50/Day",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.47.52%20PM-GPvmrhJ3qlAat46UnR7dLfxxMYU95s.png",
              },
              {
                name: "Hotel Baja",
                rating: "5.0",
                location: "Palo Alto, CA",
                price: "USD 19/Day",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.47.52%20PM-GPvmrhJ3qlAat46UnR7dLfxxMYU95s.png",
              },
            ].map((hotel, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={hotel.image || "/placeholder.svg"}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{hotel.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm">{hotel.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {hotel.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {hotel.price}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor nova incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Button className="w-full bg-[#2D1537] hover:bg-[#2D1537]">
                    Book Now
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
    title: "Two Column Portfolio Cards With Images",
    component: (
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[#2D1537] font-medium">Our Portfolio</p>
                <h2 className="text-4xl font-bold text-gray-900">
                  We've done some{" "}
                  <span className="text-[#2D1537]">amazing projects.</span>
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  enim ad minim veniam.
                </p>
                <Button variant="link" className="text-[#2D1537] p-0">
                  View all Projects <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="grid gap-8">
              {[
                {
                  client: "Tesla Inc.",
                  type: "Ad Campaign",
                  title: "Personalized Ad Campaign using Google AdWords",
                  duration: "90 DAYS CAMPAIGN",
                  location: "NEW YORK",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.47.37%20PM-SOH3cgOm2JwHGRDn36QiBf8Ft8mfzv.png",
                },
                {
                  client: "Nestle",
                  type: "SEO Marketing",
                  title: "Ranking #1 for keywords like Chocolate, Snack",
                  duration: "180 DAY CAMPAIGN",
                  location: "PALO ALTO",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.47.37%20PM-SOH3cgOm2JwHGRDn36QiBf8Ft8mfzv.png",
                },
              ].map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {project.client}
                        </p>
                        <p className="text-sm text-gray-600">{project.type}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {project.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </div>
                    </div>
                    <Button className="w-full bg-[#2D1537] hover:bg-[#2D1537]">
                      Read Case Study
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Two Trending Preview Cards With Images",
    component: (
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Trending Tours
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua enim
                ad minim veniam.
              </p>
              <Button variant="link" className="text-[#2D1537] p-0">
                View All Tours <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {[
                {
                  type: "Beachfront",
                  price: "$99",
                  title: "A Trip to the Bahamas and the Carribean Ocean",
                  duration: "7 DAYS TOUR",
                  location: "AFRICA",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.47.15%20PM-F2rFNOXl7SBAU4XuRfKkGRl7Ozt0IG.png",
                },
                {
                  type: "Cruise",
                  price: "$169",
                  title: "Cruise to the Mariana Trench and the Phillipines",
                  duration: "15 DAYS TOUR",
                  location: "AUSTRALIA",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.47.15%20PM-F2rFNOXl7SBAU4XuRfKkGRl7Ozt0IG.png",
                },
              ].map((tour, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden border hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={tour.image || "/placeholder.svg"}
                      alt={tour.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[#2D1537] font-medium">
                        {tour.type}
                      </span>
                      <div className="text-xl font-bold">
                        {tour.price}
                        <span className="text-sm text-gray-600 font-normal">
                          {" "}
                          per day
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{tour.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1 text-[#2D1537]" />
                        TRENDING
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {tour.location}
                      </div>
                    </div>
                    <Button className="w-full bg-[#2D1537] hover:bg-[#2D1537]">
                      Book Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function CardsBlocks() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-[#2D1537] inline-block border-b-4 border-[#2D1537]">
              Cards
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
                  <Button
                    variant="link"
                    className="text-[#2D1537] font-medium"
                  >
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
