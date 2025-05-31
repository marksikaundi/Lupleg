import Link from "next/link";

export default function Sitemap() {
  const sitemapData = {
    Learning: [
      {
        title: "Programs",
        href: "/programs",
        description: "Browse all our educational programs",
      },
      {
        title: "Digital Skills",
        href: "/programs/digital-skills",
        description: "Master essential digital skills",
      },
      {
        title: "Python Pro",
        href: "/programs/python-pro",
        description: "Become a Python expert",
      },
      {
        title: "TypeScript",
        href: "/programs/typescript",
        description: "Learn TypeScript development",
      },
    ],
    Resources: [
      {
        title: "Documentation",
        href: "/docs",
        description: "Detailed guides and documentation",
      },
      {
        title: "Blog",
        href: "/blogs",
        description: "Latest articles and updates",
      },
      {
        title: "Research",
        href: "/research",
        description: "Our research and findings",
      },
      {
        title: "Podcasts",
        href: "/resources/podcasts",
        description: "Listen to our tech talks",
      },
    ],
    Company: [
      {
        title: "About Us",
        href: "/about-us",
        description: "Learn about our mission",
      },
      { title: "Careers", href: "/careers", description: "Join our team" },
      { title: "Contact", href: "/contact", description: "Get in touch" },
      {
        title: "Changelog",
        href: "/changelogs",
        description: "Latest updates",
      },
    ],
    Community: [
      {
        title: "Contributing",
        href: "/contributing",
        description: "Help improve Lupleg",
      },
      {
        title: "Mentorship",
        href: "/mentorships/mentoring",
        description: "Get mentored or become a mentor",
      },
      {
        title: "Challenges",
        href: "/challenges",
        description: "Take part in coding challenges",
      },
      { title: "FAQ", href: "/faq", description: "Frequently asked questions" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-green-100 rounded-full text-sm font-medium text-green-800 mb-4">
            Site Navigation
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Explore Lupleg
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Find everything you need to navigate through our platform. All pages
            and resources are organized here for easy access.
          </p>
        </div>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {Object.entries(sitemapData).map(([category, items]) => (
            <div key={category} className="space-y-6">
              <div className="border-b border-gray-200 pb-2">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {category}
                </h2>
              </div>
              <div className="grid gap-6">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-green-200"
                  >
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-green-600">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-600">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#C24229] text-white hover:bg-[#B03220] transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="https://lab.lupleg.org"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Visit Lab
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
