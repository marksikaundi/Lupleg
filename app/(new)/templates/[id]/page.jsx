import { templates } from "../data";
import Link from "next/link";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";

export async function generateStaticParams() {
  return templates.map((template) => ({
    id: template.id,
  }));
}

export default function TemplatePage({ params }) {
  const template = templates.find((t) => t.id === params.id);

  if (!template) {
    return null;
  }

  const Icon = template.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <div className="bg-[#2D1537]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/templates"
            className="inline-flex mt-10 items-center text-sm text-white hover:text-indigo-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Templates
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#2D1537] text-white pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Content */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Icon className="w-8 h-8 opacity-80" />
                <span className="text-lg font-medium text-indigo-200">
                  {template.category}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                {template.title}
              </h1>
              <p className="text-xl text-indigo-100 leading-relaxed mb-8">
                {template.longDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={template.demoUrl}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#2D1537] font-medium hover:bg-indigo-50 transition-colors"
                >
                  View Live Demo
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
                >
                  Get This Template
                </Link>
              </div>
            </div>

            {/* Preview */}
            <div className="mt-12 lg:mt-0">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-90`}
                />
                <Icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-white opacity-25" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features & Tech Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Features */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Features</h2>
            <ul className="space-y-4">
              {template.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {template.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-gray-200 bg-white shadow-sm"
                >
                  <span className="font-medium text-gray-900">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#2D1537] mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to use this template?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={template.demoUrl}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-[#2D1537] font-medium hover:bg-indigo-50 transition-colors"
              >
                View Live Demo
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
