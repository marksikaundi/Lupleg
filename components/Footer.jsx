"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const footerData = [
  {
    title: "Company",
    links: [
      { name: "About us", path: "/about-us" },
      { name: "Terms", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "FAQ", path: "/faq" },
    ],
  },
  {
    title: "Links",
    links: [
      { name: "Challenge", path: "/challenge" },
      { name: "Academy", path: "/resources/academy" },
      { name: "Partner with Us", path: "/resources/supporting/partner" },
      { name: "Research", path: "/research" },
      { name: "Changelog", path: "/changelogs" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Affiliates", path: "/affiliates" },
      { name: "Sitemap", path: "/sitemap" },
      { name: "Quize", path: "https://ac.lupleg.website" },
      { name: "Templates", path: "https://ui.lupleg.website" },
      { name: "Docs", path: "https://docs.lupleg.website" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="pt-28">
      <footer className="bg-green-950 p-10 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-4">
          {footerData.map((section, index) => (
            <div key={index}>
              <h5 className="mb-4 font-bold">{section.title}</h5>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    {/* Use Link for internal paths */}
                    {link.path.startsWith("http") ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.path}>{link.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h5 className="mb-4 font-bold">Newsletter</h5>
            <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <Input
                className="rounded-md text-black"
                placeholder="Enter Your Email Here"
                type="text"
              />
              <Button
                type="submit"
                className="w-full md:w-auto bg-[#F3A833] hover:bg-[#F3A833]"
              >
                Subscribe
              </Button>
            </div>

            <div className="mt-8">
              <h5 className="mb-4 font-bold">Support →</h5>
              <p>
                <a href="mailto:mark@lupleg.website">mark@lupleg.website</a>
              </p>
            </div>
            <div className="pt-5">
              <Button className="bg-[#F3A833] hover:bg-[#F3A833]">
                <Link href="/careers" className="p-2">
                  Careers
                </Link>
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between border-t border-gray-600 py-6 md:flex-row">
          <div className="flex items-center space-x-4">
            <Link href="https://twitter.com/Lupleg_Dev">
              <TwitterIcon className="text-white" />
            </Link>
            <Link href="https://facebook.com/lupleg">
              <FacebookIcon className="text-white" />
            </Link>
            <Link href="https://linkedin.com/school/lupleg">
              <LinkedinIcon className="text-white" />
            </Link>
          </div>
          <div className="mt-4 text-center md:mt-0 md:text-left">
            <p>© Copyright 2024, All Rights Reserved</p>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-white">
          <p>
            Disclaimer: The programs, courses, and opportunities described on
            this website are based on real offerings. However, any images or
            photographs used are for illustrative purposes only and do not
            represent actual participants or individuals involved. We take this
            step to protect the privacy of those associated with the programs we
            offer.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
