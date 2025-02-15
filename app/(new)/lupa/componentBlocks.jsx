import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function BlocksSection() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-purple-600 inline-block border-b-4 border-purple-600">
              Hero Section
            </h2>
          </div>

          {/* Block Preview */}
          <div className="rounded-2xl overflow-hidden border shadow-lg">
            {/* Preview Header */}
            <div className="flex items-center justify-between p-4 border-b bg-white">
              <span className="text-gray-600">With Background Image</span>
              <Button variant="link" className="text-purple-600 font-medium">
                View Live Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Hero Section Preview */}
            <div className="relative">
              <div className="relative bg-purple-900">
                {/* Navigation */}
                <div className="absolute inset-x-0 top-0 z-10">
                  <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="bg-purple-600 text-white w-8 h-8 flex items-center justify-center font-bold rounded">
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
                        <Button className="bg-purple-600 hover:bg-purple-700">Hire Us</Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hero Content */}
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
                          <span className="bg-white text-purple-600 px-4 py-1 inline-block">Marketing Team.</span>
                        </h1>
                        <Button variant="secondary" size="lg">
                          Read Customer Stories
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

