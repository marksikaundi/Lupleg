import {
  FileText,
  X,
  Check,
  Cog,
  Layers,
  Zap,
  Database,
  Box,
  Cpu,
} from "lucide-react";
import MoreFQA from "@/components/FeaturesCards/MoreFAQ";

export default function LuplegFeatures() {
  return (
    <div>
      <div className="bg-[#2D1537] mt-0 text-white min-h-screen p-8">
        <div className="mb-20">
          <p className="text-white mb-2 mt-20">Everything you need</p>
          <h1 className="text-5xl font-bold mb-4">Fully Featured</h1>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Our programs comes with everything you need to build a modern
            website or web apps from scratch to advanced. All features we cover
            in our development can be viewed below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<FileTextIcon />}
              title="Content Collections"
              description="Organize your Markdown and MDX with built-in TypeScript type-safety and frontmatter validation."
            >
              <div className="flex items-center space-x-2 mt-4">
                <FileText className="text-gray-600" />
                <FileText className="text-gray-600" />
                <FileText className="text-blue-500" />
                <div className="relative">
                  <X className="absolute -top-2 -left-2 w-4 h-4 text-[#2D1537]" />
                  <X className="absolute -top-2 left-6 w-4 h-4 text-[#2D1537]" />
                  <Check className="absolute -top-2 right-2 w-4 h-4 text-blue-500" />
                </div>
              </div>
            </FeatureCard>

            <FeatureCard
              icon={<div className="text-8xl font-bold text-gray-200">0</div>}
              title="Zero JavaScript, By Default"
              description="We only ships the JavaScript you need and automatically strips away the rest for a faster website."
            />

            <FeatureCard
              icon={<ViewTransitionsIcon />}
              title="View Transitions"
              description="Seamlessly morph, fade, and swipe across pages with built-in, browser-native View Transition APIs."
            />

            <FeatureCard
              icon={<Cog />}
              title="Middleware"
              description="Wrap incoming requests with custom logic like authentication, logging, or data fetching."
            />

            <FeatureCard
              icon={<Zap />}
              title="Actions"
              description="Write type-safe backend functions that you can call directly from your frontend JavaScript client code."
            />

            <FeatureCard
              icon={<Database />}
              title="Environment Variables"
              description="Avoid common configuration mistakes with a built-in API to manage your environment variables."
            />

            <FeatureCard
              icon={<Box />}
              title="Deployment Adapters"
              description="Add an integration to instantly customize your project for Vercel, AWS, or your favorite hosting platform."
            />

            <FeatureCard
              icon={<Layers />}
              title="UI Integrations"
              description="Bring your favorite UI frameworks and component libraries with Astro's flexible island architecture."
            />

            <FeatureCard
              icon={<Cpu />}
              title="Dev Toolbar"
              description="Extend your development environment with apps and integrations for the built-in development toolbar."
            />
          </div>
        </div>
      </div>
      <MoreFQA />
    </div>
  );
}

function FeatureCard({ icon, title, description, children }) {
  return (
    <div className="bg-[#45364b] rounded-lg p-6 flex flex-col">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 flex-grow">{description}</p>
      {children}
    </div>
  );
}

function FileTextIcon() {
  return (
    <div className="relative">
      <FileText className="text-[#F3A833] w-12 h-12" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-lg" />
    </div>
  );
}

function ViewTransitionsIcon() {
  return (
    <div className="grid grid-cols-3 gap-1">
      <div className="bg-green-700 rounded aspect-square" />
      <div className="bg-green-900 rounded aspect-square" />
      <div className="bg-green-700 rounded aspect-square" />
      <div className="bg-[#2D1537] rounded col-span-2 aspect-[2/1]" />
      <div className="bg-[#2D1537] rounded aspect-square" />
    </div>
  );
}
