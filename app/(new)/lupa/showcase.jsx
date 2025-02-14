import { Button } from "@/components/ui/button"
import { Clock, Shield, Smile } from "lucide-react"

export default function Showcase() {
  const templates = [
    {
      title: "Delicious & Affordable",
      highlight: "Meals Near You.",
      description: "Find the best local restaurants and get your favorite meals delivered right to your doorstep.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%2012.17.36%20AM-yl90uTUaQSEVr54cGe5fo8UcxChx9y.png",
      features: ["Online Menu", "Real-Time Orders", "Fast Delivery"],
    },
    {
      title: "Find Perfect Hotels",
      highlight: "anywhere you go.",
      description: "Get all kinds of accommodation options for your next trip that will delight your stay with us.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%2012.17.36%20AM-yl90uTUaQSEVr54cGe5fo8UcxChx9y.png",
      features: ["Secure", "24/7 Support", "Customizable"],
    },
    {
      title: "Beautiful React Templates",
      highlight: "for you.",
      description:
        "Our templates are easy to setup, understand and customize. Each packed with a variety of widgets and components.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%2012.17.36%20AM-yl90uTUaQSEVr54cGe5fo8UcxChx9y.png",
      features: ["Reliable", "Fast", "Easy"],
    },
  ]

  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
              {/* Header */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">
                  {template.title}{" "}
                  <span className="bg-[#2D1537] text-white px-2 py-1 rounded-md inline-block">
                    {template.highlight}
                  </span>
                </h3>
                <p className="text-gray-600">{template.description}</p>
              </div>

              {/* Features */}
              <div className="px-6 pb-6">
                <div className="flex gap-4 flex-wrap">
                  {template.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm text-gray-600">
                      {i === 0 && <Shield className="w-4 h-4 text-[#2D1537]" />}
                      {i === 1 && <Clock className="w-4 h-4 text-[#2D1537]" />}
                      {i === 2 && <Smile className="w-4 h-4 text-[#2D1537]" />}
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Preview Image */}
              <div className="relative h-64 bg-gray-100">
                <img
                  src={template.image || "/placeholder.svg"}
                  alt={`${template.title} template preview`}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Demo Button */}
              <div className="p-6">
                <Button className="w-full bg-[#2D1537] hover:bg-[#2D1537]">View Live Demo</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

