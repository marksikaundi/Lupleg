"use client";
import Link from "next/link";
import { Button } from "./ui/button";

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
      { name: "Challenge", path: "/challenges/frontend" },
      { name: "Affiliates", path: "/affiliates" },
      { name: "Partner with Us", path: "/resources/supporting/partner" },
      { name: "Research", path: "/research" },
      { name: "Publications", path: "/publications" },
      { name: "Changelog", path: "/changelogs" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Web Editor", path: "https://web.lupleg.org" },
      { name: "Sitemap", path: "/sitemap" },
      { name: "Tips", path: "/tips" },
      { name: "Projects", path: "https://projects.lupleg.org" },
      { name: "Docs", path: "https://docs.lupleg.org" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="pt-28">
      <footer className="bg-[#2D1537] p-10 text-white">
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

          {/* Support */}
          <div>
            <h5 className="mb-4 font-bold">Support us</h5>
            <div className="mt-8">
              <Button className="bg-[#F3A833] hover:bg-[#F3A833]">
                <DonateIcon className="mr-2" />
                Donate
              </Button>
            </div>
            <div className="pt-5">
              <Button className="border border-[#F3A833] ">
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
            <Link href="https://github.com/lupleg">
              <GitHubIcon className="text-white" />
            </Link>
          </div>
          <div className="mt-4 text-center md:mt-0 md:text-left">
            <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
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

function DonateIcon(props) {
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
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function GitHubIcon(props) {
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
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
    </svg>
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
