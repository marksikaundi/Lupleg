"use client";
import { Shield, ExternalLink, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function PrivacyPolicy() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show back to top button after 100px of scroll
      setShowBackToTop(window.scrollY > 100);

      // Calculate scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "information-collection", title: "Information Collection" },
    { id: "information-usage", title: "Information Usage" },
    { id: "third-party-links", title: "Third-Party Links" },
    { id: "your-rights", title: "Your Rights" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-[#2D1537] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-white rounded-full shadow-lg">
              <Shield className="w-12 h-12 text-[#2D1537]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D1537] mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last Updated: 30 July, 2024</p>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 mb-8 hover:shadow-xl transition-shadow duration-300">
          <div className="relative">
            <div className="absolute -left-3 top-0 bottom-0 w-1 bg-[#2D1537] rounded" />
            <h2 className="text-xl font-semibold text-[#2D1537] mb-4 pl-2">
              Table of Contents
            </h2>
          </div>
          <nav>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-gray-600 hover:text-[#2D1537] hover:pl-2 block transition-all duration-300 py-1"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
          <section id="introduction" className="mb-12 group">
            <div className="relative">
              <div className="absolute -left-3 top-0 h-8 w-1 bg-[#2D1537] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl font-bold text-[#2D1537] mb-4 group-hover:pl-2 transition-all duration-300">
                Introduction
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. It is Lupleg&#x27;s policy to
              respect your privacy regarding any information we may collect from
              you across our website,{" "}
              <a
                href="https://lupleg.org"
                className="text-[#2D1537] font-medium hover:underline inline-flex items-center group"
              >
                Lupleg{" "}
                <ExternalLink className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              , and other sites we own and operate.
            </p>
          </section>

          <section id="information-collection" className="mb-12 group">
            <div className="relative">
              <div className="absolute -left-3 top-0 h-8 w-1 bg-[#2D1537] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl font-bold text-[#2D1537] mb-4 group-hover:pl-2 transition-all duration-300">
                Information Collection
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We only ask for personal information when we truly need it to
              provide a service to you. We collect it by fair and lawful means,
              with your knowledge and consent. We also let you know why
              we&#x27;re collecting it and how it will be used.
            </p>
          </section>

          <section id="information-usage" className="mb-12 group">
            <div className="relative">
              <div className="absolute -left-3 top-0 h-8 w-1 bg-[#2D1537] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl font-bold text-[#2D1537] mb-4 group-hover:pl-2 transition-all duration-300">
                Information Usage
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We only retain collected information for as long as necessary to
              provide you with your requested service. What data we store,
              we&#x27;ll protect within commercially acceptable means to prevent
              loss and theft, as well as unauthorised access, disclosure,
              copying, use or modification.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We don&#x27;t share any personally identifying information
              publicly or with third-parties, except when required to by law.
            </p>
          </section>

          <section id="third-party-links" className="mb-12 group">
            <div className="relative">
              <div className="absolute -left-3 top-0 h-8 w-1 bg-[#2D1537] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl font-bold text-[#2D1537] mb-4 group-hover:pl-2 transition-all duration-300">
                Third-Party Links
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our website may link to external sites that are not operated by
              us. Please be aware that we have no control over the content and
              practices of these sites, and cannot accept responsibility or
              liability for their respective privacy policies.
            </p>
          </section>

          <section id="your-rights" className="mb-12 group">
            <div className="relative">
              <div className="absolute -left-3 top-0 h-8 w-1 bg-[#2D1537] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl font-bold text-[#2D1537] mb-4 group-hover:pl-2 transition-all duration-300">
                Your Rights
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              You are free to refuse our request for your personal information
              (such as your email), with the understanding that we may be unable
              to provide you with some of your desired services. Your continued
              use of our website will be regarded as acceptance of our practices
              around privacy and personal information.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              If you have any questions about how we handle user data and
              personal information, feel free to contact us.
            </p>
          </section>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-[#2D1537] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0"
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-[#2D1537]/5 to-transparent opacity-30" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-radial from-[#2D1537]/5 to-transparent opacity-30" />
      </div>
    </div>
  );
}
