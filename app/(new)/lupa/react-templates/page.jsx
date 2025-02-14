import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Lupa() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-orange-50 p-2">
        <div className="container mx-auto">
          <p className="text-orange-800 text-sm flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            Last updated on 14th February, 2025 - Added support for React v19 and TailwindCSS v3!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2D1537]">
              Free Modern React Templates for every need.
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              Easily customizable modern React UI Templates and Components built using TailwindCSS which are also
              lightweight and simple to setup. All components are modular and fully responsive for great mobile
              experience as well as big desktop screens. Brand Colors are also fully customizable. Free for personal as
              well as commercial use.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="text-[#2D1537] w-5 h-5" />
                  <span>7 Landing Page Demos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-[#2D1537] w-5 h-5" />
                  <span>52 Components</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-[#2D1537] w-5 h-5" />
                  <span>Fully Responsive</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="text-[#2D1537] w-5 h-5" />
                  <span>8 Inner Pages</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-[#2D1537] w-5 h-5" />
                  <span>Uses TailwindCSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-[#2D1537] w-5 h-5" />
                  <span>Fully Customizable</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#2D1537] hover:bg-[#2D1537]">
                Explore Demos
              </Button>
              <Button size="lg" variant="secondary">
                View Components
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-[4/3]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-14%20at%2011.16.06%20PM-WbP0AaOpophrzOm65PYYnLmILo9ja9.png"
                alt="React templates preview showing multiple screens with modern designs"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

