import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Play } from "lucide-react"

const blocks = [
  {
    title: "With Background Image",
    component: (
      <div className="relative bg-purple-900">
        {/* Previous background image hero remains the same */}
        <div className="absolute inset-x-0 top-0 z-10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-[#2D1537] text-white w-8 h-8 flex items-center justify-center font-bold rounded">
                  T
                </div>
                <span className="text-white font-semibold text-xl">Lupui</span>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <nav className="flex items-center gap-6">
                  {["About", "Blog", "Locations", "Pricing"].map((item) => (
                    <a key={item} href="#" className="text-white/90 hover:text-white transition-colors">
                      {item}
                    </a>
                  ))}
                </nav>
                <Button className="bg-[#2D1537] hover:bg-purple-700">Hire Us</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%206.50.11%20PM-HQEmtuTS9VUQCGRDPSddf36weQGc80.png"
            alt="Marketing team working together"
            className="w-full object-cover"
            style={{ height: "600px" }}
          />
          <div className="absolute inset-0 bg-purple-900/70">
            <div className="container mx-auto px-6 h-full flex items-center">
              <div className="max-w-2xl space-y-6 py-20">
                <p className="text-purple-200 border-l-4 border-purple-500 pl-3">
                  We have now launched operations in Europe.
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white space-y-2">
                  <span className="block">Hire the best</span>
                  <span className="bg-white text-[#2D1537] px-4 py-1 inline-block">Marketing Team.</span>
                </h1>
                <Button variant="secondary" size="lg">
                  Read Customer Stories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "With Image Illustration and Video",
    component: (
      <div className="bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-[#2D1537] text-white w-8 h-8 flex items-center justify-center font-bold rounded">
                T
              </div>
              <span className="text-gray-900 font-semibold text-xl">Lupui</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                {["About", "Blog", "Pricing", "Contact Us"].map((item) => (
                  <a key={item} href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    {item}
                  </a>
                ))}
              </nav>
              <div className="flex items-center gap-4">
                <Button variant="ghost">Login</Button>
                <Button className="bg-[#2D1537] hover:bg-purple-700">Sign Up</Button>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Modern React Templates, <span className="text-[#2D1537]">Just For You</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Our templates are easy to setup, understand and customize. Fully modular components with a variety of
                pages and components.
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-[#2D1537] hover:bg-purple-700">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Play className="w-4 h-4" /> Watch Video
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%206.58.22%20PM-x7RbypXn4Sjgl96c8IU5FAY7KxBZXf.png"
                alt="Modern illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "With Features And Customer Testimonial",
    component: (
      <div className="bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-[#2D1537] text-white w-8 h-8 flex items-center justify-center font-bold rounded">
                T
              </div>
              <span className="text-gray-900 font-semibold text-xl">Lupui</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                {["About", "Blog", "Pricing", "Contact Us", "Testimonials"].map((item) => (
                  <a key={item} href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    {item}
                  </a>
                ))}
              </nav>
              <div className="flex items-center gap-4">
                <Button variant="ghost">Login</Button>
                <Button className="bg-[#2D1537] hover:bg-purple-700">Sign Up</Button>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold">
                <span className="text-[#2D1537]">Better, Faster and</span>
                <br />
                <span className="text-[#2D1537]">Cheaper Cloud.</span>
              </h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <Button size="lg" className="bg-[#2D1537] hover:bg-purple-700">
                Get Started
              </Button>
              <div className="space-y-4 pt-4">
                {["Available in 7 Locations", "Premium Internet Backbone", "99.99% Uptime SLA"].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="text-[#2D1537] w-5 h-5" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%206.59.05%20PM-2jSeUtN8Tw2cjHpMvwaLgtP0M6jtcx.png"
                alt="Customer testimonial"
                className="w-full rounded-lg"
              />
              <div className="absolute bottom-8 right-8 bg-[#2D1537] p-6 rounded-lg max-w-md text-white">
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                <div>
                  <p className="font-semibold">Charlotte Hale</p>
                  <p className="text-purple-200">Delos Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Full Width With Image",
    component: (
      <div className="bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-[#2D1537] text-white w-8 h-8 flex items-center justify-center font-bold rounded">
                T
              </div>
              <span className="text-gray-900 font-semibold text-xl">Lupui</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                {["About", "Blog", "Pricing", "Login"].map((item) => (
                  <a key={item} href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 mt-8">
          <div className="container mx-auto px-6 py-16">
            <div className="max-w-xl space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold">
                Find Perfect Hotels
                <br />
                <span className="text-[#2D1537]">anywhere you go.</span>
              </h1>
              <p className="text-gray-600 text-lg">
                We've been in the hotels business across the world for 5 years now. We assure you that you will always
                enjoy your stay with us.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-[#2D1537] hover:bg-purple-700">
                  Sign Up
                </Button>
                <Button size="lg" variant="secondary">
                  Search Hotels
                </Button>
              </div>
            </div>
          </div>
          <div className="relative h-[600px]">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%206.59.49%20PM-AMBg8AyX2Mawf758l8ePDXccJqjObd.png"
              alt="Luxury hotel view"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    ),
  },
]

export default function BlocksSection() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-[#2D1537] inline-block border-b-4 border-[#2D1537]">
              Hero Section
            </h2>
          </div>

          <div className="grid gap-8">
            {blocks.map((block, index) => (
              <div key={index} className="rounded-2xl overflow-hidden border shadow-lg">
                <div className="flex items-center justify-between p-4 border-b bg-white">
                  <span className="text-gray-600">{block.title}</span>
                  <Button variant="link" className="text-[#2D1537] font-medium">
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
  )
}

