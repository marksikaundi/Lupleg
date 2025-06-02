"use client";
import { Scale, Mail, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Terms() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 100);
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
    { id: "introduction", title: "1. Introduction" },
    { id: "agreement", title: "2. Agreement to Terms" },
    { id: "premium", title: "3. PRO/Premium Features" },
    { id: "refund", title: "4. Refund Policy" },
    { id: "usage", title: "5. Product Usage" },
    { id: "disclaimer", title: "6. Disclaimer" },
    { id: "liability", title: "7. Liability" },
    { id: "changes", title: "8. Changes" },
    { id: "law", title: "9. Governing Law" },
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
        {/* Header with floating animation */}
        <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-white rounded-full shadow-lg">
              <Scale className="w-12 h-12 text-[#2D1537] animate-float" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D1537] mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-600">Last Updated: 08 December, 2024</p>
        </div>

        {/* Table of Contents with hover effects */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 mb-8 hover:shadow-xl transition-all duration-300">
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

        {/* Content sections with hover effects */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 space-y-12">
          <section
            id="introduction"
            className="group hover:bg-gray-50/50 rounded-lg p-4 transition-colors duration-300"
          >
            <div className="relative">
              <div className="absolute -left-3 top-0 h-8 w-1 bg-[#2D1537] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl font-bold text-[#2D1537] mb-4 group-hover:pl-2 transition-all duration-300">
                1. Introduction
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              By using lupleg.org you confirm your acceptance of, and agree to
              be bound by, these terms and conditions.
            </p>
          </section>

          <section
            id="agreement"
            className="group hover:bg-gray-50/50 rounded-lg p-4 transition-colors duration-300"
          >
            <div className="relative">
              <div className="absolute -left-3 top-0 h-8 w-1 bg-[#2D1537] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl font-bold text-[#2D1537] mb-4 group-hover:pl-2 transition-all duration-300">
                2. Agreement to Terms and Conditions
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              This Agreement takes effect on the date on which you first use the
              lupleg.org application.
            </p>
          </section>

          <section
            id="premium"
            className="group hover:bg-gray-50/50 rounded-lg p-4 transition-colors duration-300"
          >
            <div className="relative">
              <div className="absolute -left-3 top-0 h-8 w-1 bg-[#2D1537] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl font-bold text-[#2D1537] mb-4 group-hover:pl-2 transition-all duration-300">
                3. PRO/Premium Features
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              You will be able to use all (or some of) the PRO/Premium features
              after you purchase a PRO/Premium tier. The details of the
              PRO/Premium features are available on the premium page.
            </p>
          </section>

          <section
            id="refund"
            className="group hover:bg-gray-50/50 rounded-lg p-4 transition-colors duration-300"
          >
            <div className="relative">
              <div className="absolute -left-3 top-0 h-8 w-1 bg-[#2D1537] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl font-bold text-[#2D1537] mb-4 group-hover:pl-2 transition-all duration-300">
                4. Refund Policy
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We allow refunds within 14 days of purchase. Contact us via email
              at{" "}
              <a
                href="mailto:payment@lupleg.org"
                className="text-[#2D1537] font-medium hover:underline inline-flex items-center group"
              >
                payment@lupleg.org{" "}
                <Mail className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>{" "}
              or in our Slack Community and we will give you a refund.
            </p>
          </section>

          <section
            id="usage"
            className="group hover:bg-gray-50/50 rounded-lg p-4 transition-colors duration-300"
          >
            <div className="relative">
              <div className="absolute -left-3 top-0 h-8 w-1 bg-[#2D1537] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl font-bold text-[#2D1537] mb-4 group-hover:pl-2 transition-all duration-300">
                5. Product Usage
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              By using lupleg.org, you agree to receive important product
              updates, newsletters, marketing or promotional materials and other
              information that may be of interest to you. You may opt out of
              receiving any, or all, of these communications from us by
              following the unsubscribe link or instructions provided in any
              email we send or by contacting us.
            </p>
          </section>

          <section
            id="disclaimer"
            className="group hover:bg-gray-50/50 rounded-lg p-4 transition-colors duration-300"
          >
            <div className="relative">
              <div className="absolute -left-3 top-0 h-8 w-1 bg-[#2D1537] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl font-bold text-[#2D1537] mb-4 group-hover:pl-2 transition-all duration-300">
                6. Disclaimer
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              It is not warranted that Lupleg will meet your requirements or
              that its operation will be uninterrupted or error free. All
              express and implied warranties or conditions not stated in this
              Agreement are excluded to the fullest extent permitted by law.
            </p>
          </section>

          <section
            id="liability"
            className="group hover:bg-gray-50/50 rounded-lg p-4 transition-colors duration-300"
          >
            <div className="relative">
              <div className="absolute -left-3 top-0 h-8 w-1 bg-[#2D1537] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl font-bold text-[#2D1537] mb-4 group-hover:pl-2 transition-all duration-300">
                7. Liability
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, we exclude all liability
              for damages arising out of or in connection with your use of this
              website. This includes, without limitation, direct loss, loss of
              business or profits (whether or not the loss of such profits was
              foreseeable, arose in the normal course of things or you have
              advised us of the possibility of such potential loss), damage
              caused to your computer, computer software, systems and programs
              and the data thereon or any other direct or indirect,
              consequential and incidental damages.
            </p>
          </section>

          <section
            id="changes"
            className="group hover:bg-gray-50/50 rounded-lg p-4 transition-colors duration-300"
          >
            <div className="relative">
              <div className="absolute -left-3 top-0 h-8 w-1 bg-[#2D1537] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl font-bold text-[#2D1537] mb-4 group-hover:pl-2 transition-all duration-300">
                8. Changes
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material we will try to
              provide at least 30 days notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion. By continuing to access or use our Service
              after those revisions become effective, you agree to be bound by
              the revised terms. If you do not agree to the new terms, please
              stop using the Service.
            </p>
          </section>

          <section
            id="law"
            className="group hover:bg-gray-50/50 rounded-lg p-4 transition-colors duration-300"
          >
            <div className="relative">
              <div className="absolute -left-3 top-0 h-8 w-1 bg-[#2D1537] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl font-bold text-[#2D1537] mb-4 group-hover:pl-2 transition-all duration-300">
                9. Governing Law
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed and construed in accordance with the
              laws of Zambia (ZM), without regard to its conflict of law
              provisions. Our failure to enforce any right or provision of these
              Terms will not be considered a waiver of those rights. If any
              provision of these Terms is held to be invalid or unenforceable by
              a court, the remaining provisions of these Terms will remain in
              effect.
            </p>
          </section>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-[#2D1537] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0"
        }`}
        aria-label="Scroll to top"
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
