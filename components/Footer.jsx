import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// bg-[#370C0C]
export default function Footer() {
  return (
    <footer className="bg-green-950 p-10 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-4">
        <div>
          <h5 className="mb-4 font-bold">Lupleg LLC</h5>
          <ul className="space-y-3">
            <li>
              <Link href="#">For Businesses</Link>
            </li>
            <li>
              <Link href="for-orgs">For NGOs</Link>
            </li>
            <li>
              <Link href="#">Trainings</Link>
            </li>
            <li>
              <Link href="affiliatesclear">Affiliates</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 font-bold">Links</h5>
          <ul className="space-y-3">
            <li>
              <Link href="partner">Partner with Us</Link>
            </li>
            <li>
              <Link href="talent">Recruit Talent</Link>
            </li>
            <li>
              <Link href="train">Partner to train</Link>
            </li>
            <li>
              <Link href="sponsor">Sponsor</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 font-bold">Resources</h5>
          <ul className="space-y-3">
            <li>
              <Link href="podcasts">Podcasts</Link>
            </li>
            <li>
              <Link href="our-why">Our Why</Link>
            </li>
            <li>
              <Link href="faq">FAQ</Link>
            </li>
            <li>
              <Link href="https://youtube.com/lupleg">Youtube Playlist</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 font-bold">Newsletter</h5>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <Input
                className="rounded-md"
                placeholder="Enter Your Email Here"
              />
              <Button className="ml-2 bg-orange-700 hover:bg-orange-950">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="mt-8">
            <h5 className="mb-4 font-bold">Helpdesk</h5>
            <p>
              <a href="mailto:dev@lupleg.website">dev@lupleg</a>
            </p>
          </div>
          <div className="mt-8">
            <h5 className="mb-4 font-bold">Email US</h5>
            <p>
              {" "}
              <a href="mailto:mark@lupleg.website">mark@lupleg.website</a>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-between border-t border-gray-600 py-6 md:flex-row">
        <div className="flex items-center space-x-4">
          <Link href="https://twitter.com/Lupleg_Dev">
            <TwitterIcon className="text-white" />
          </Link>
          <Link href="https://facebook.com/Lupleg">
            <FacebookIcon className="text-white" />
          </Link>
          <Link href="https://linkedin.com/company/lupleg">
            <LinkedinIcon className="text-white" />
          </Link>
        </div>
        <div className="mt-4 text-center md:mt-0 md:text-left">
          <p>© Copyright 2024, All Rights Reserved</p>
        </div>
      </div>
      <div className="mt-4 text-center text-xs text-white">
        <p>
          Disclaimer: The programs, courses, and opportunities described on this
          website are based on real offerings. However, any images or
          photographs used are for illustrative purposes only and do not
          represent actual participants or individuals involved. We take this
          step to protect the privacy of those associated with the programs we
          offer.
        </p>
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
