import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF]">
      <div className="container mx-auto px-4 py-8 ">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 lg:gap-16">
          <div>
            <h5 className="mb-4 font-bold uppercase">Products</h5>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline" href="#">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  B2B
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Open Source
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Developer Community
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 font-bold uppercase">Using Lupleg</h5>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline" href="#">
                  Workflow
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Research
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  African Developers
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Docs
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Integrations & API
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Lupleg Program
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 font-bold uppercase">Resources</h5>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline" href="#">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Lupleg Community
                </Link>
              </li>

              <li>
                <Link className="hover:underline" href="#">
                  Help Center
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Customer Stories
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Channel Partnerships
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Admin Certification
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 font-bold uppercase">Learn</h5>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline" href="academy">
                  Lupleg Academy
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="podcasts">
                  Podcasts
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  100 Days of Code
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Tech Talks
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 font-bold uppercase">Company</h5>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline" href="#">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Press
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Interns
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="affiliates">
                  Affiliates
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="contacts">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-sm">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <p>© 2024 Lupleg LLC. All rights reserved.</p>
            <div className="mt-4 flex space-x-4 sm:mt-0">
              <Link className="hover:underline" href="#">
                SaaS Agreement
              </Link>
              <Link className="hover:underline" href="#">
                Privacy Policy
              </Link>
              <Link className="hover:underline" href="#">
                Terms of use
              </Link>
              <Link className="hover:underline" href="sitemap">
                Sitemap
              </Link>
            </div>
            <div className="mt-4 flex space-x-4 sm:mt-0">
              <Link
                className="hover:underline"
                href="https://twitter.com/Lupleg_Dev"
              >
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link
                className="hover:underline"
                href="https://facebook.com/Lupleg"
              >
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link
                className="hover:underline"
                href="https://linkedin.com/in/lupleg"
              >
                <LinkedinIcon className="h-6 w-6" />
              </Link>
              <Link
                className="hover:underline"
                href="https://instagram.com/marksikaundi"
              >
                <InstagramIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
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

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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
