import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Headphones,
  Settings,
  RefreshCcw,
  Zap,
  Users,
  DollarSign,
} from "lucide-react";

const blocks = [
  {
    title: "Three Column Simple",
    component: (
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Secure",
                description:
                  "We strictly only deal with vendors that provide top notch security.",
              },
              {
                icon: <Headphones className="w-6 h-6" />,
                title: "24/7 Support",
                description:
                  "Lorem ipsum donor amet siti ceali placeholder text",
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: "Customizable",
                description:
                  "Lorem ipsum donor amet siti ceali placeholder text",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-[#2D1537] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Button variant="link" className="text-[#2D1537]">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Two Column With Vertical Features and Button",
    component: (
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[#2D1537] font-medium">Our Expertise</p>
                <h2 className="text-4xl font-bold text-gray-900">
                  We have the most{" "}
                  <span className="text-[#2D1537]">professional</span> marketing
                  team.
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#2D1537]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Professionalism</h3>
                    <p className="text-gray-600">
                      We have the best professional marketing people across the
                      globe just to work with you.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Affordable</h3>
                    <p className="text-gray-600">
                      We promise to offer you the best rate we can - at par with
                      the industry standard.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-[#2D1537] hover:bg-[#2D1537]">
                See Our Portfolio
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="relative">
                  <div className="w-full aspect-square bg-gray-100 rounded-full overflow-hidden">
                    <img
                      src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.37.34%20PM-ibiGksacQZFAmXUqCDTR54HeQAPfMg.png`}
                      alt={`Team member ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
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
    title: "Three Column With Side Image",
    component: (
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#2D1537] font-medium mb-2">Features</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Amazing Features
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Secure",
                description:
                  "We strictly only deal with vendors that provide top notch security.",
              },
              {
                icon: <Headphones className="w-6 h-6" />,
                title: "24/7 Support",
                description:
                  "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: "Customizable",
                description:
                  "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
              },
              {
                icon: <RefreshCcw className="w-6 h-6" />,
                title: "Reliable",
                description:
                  "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Fast",
                description:
                  "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Easy",
                description:
                  "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-[#2D1537]">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Two Column With Image and Action Button",
    component: (
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[#2D1537] font-medium">Our Expertise</p>
                <h2 className="text-4xl font-bold text-gray-900">
                  Designed & Developed by{" "}
                  <span className="text-[#2D1537]">Professionals.</span>
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <Button className="bg-[#2D1537] hover:bg-[#2D1537]">
                Learn More
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="relative">
                  <div className="w-full aspect-square bg-gray-100 rounded-full overflow-hidden">
                    <img
                      src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.36.28%20PM-HBAU8i2iBBi00nw5xsceUg9HN16tlT.png`}
                      alt={`Team member ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
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
    title: "Three Column With Side Image With Primary Background",
    component: (
      <div className="bg-[#2D1537] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Amazing Features</h2>
            <p className="text-purple-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Secure",
                description:
                  "We strictly only deal with vendors that provide top notch security infrastructure.",
              },
              {
                icon: <Headphones className="w-6 h-6" />,
                title: "24/7 Support",
                description:
                  "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: "Customizable",
                description:
                  "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
              },
              {
                icon: <RefreshCcw className="w-6 h-6" />,
                title: "Reliable",
                description:
                  "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Fast",
                description:
                  "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Easy",
                description:
                  "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-purple-100">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Three Column With Dashed Primary Border",
    component: (
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Professional <span className="text-[#2D1537]">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Ads Management",
                description:
                  "We create and manage ads that you need, from creation to deployment. Lorem ipsum donor amet sit amet consicou.",
              },
              {
                icon: <Headphones className="w-6 h-6" />,
                title: "Video Marketing",
                description:
                  "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel.",
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: "Customer Relation",
                description:
                  "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel.",
              },
              {
                icon: <RefreshCcw className="w-6 h-6" />,
                title: "Product Outreach",
                description:
                  "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "PR Campaign",
                description:
                  "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Product Expansion",
                description:
                  "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 border-2 border-dashed border-[#2D1537] rounded-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-[#2D1537] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#2D1537]">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export default function FeaturesBlocks() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-[#2D1537] inline-block border-b-4 border-[#2D1537]">
              Features Section
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
  );
}
