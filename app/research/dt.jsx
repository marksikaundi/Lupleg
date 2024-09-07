import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu } from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Hero section with interlocking mesh background */}
      <div className="relative isolate overflow-hidden">
        {/* Mesh background */}
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-300 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(12)"
            >
              <path d="M.5 40V.5H40" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#grid-pattern)"
          />
          <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#grid-pattern)"
          />
        </svg>
        <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Advancing Research for a Better Tomorrow
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our institute is dedicated to pushing the boundaries of scientific
              knowledge and innovation. Join us in our quest to solve the
              world's most pressing challenges.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button>Explore Our Work</Button>
              <Link
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Research areas section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Research Areas
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Exploring the Frontiers of Science
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our multidisciplinary approach allows us to tackle complex
              problems from various angles, leading to groundbreaking
              discoveries and innovations.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {[
                {
                  name: "Artificial Intelligence",
                  description:
                    "Developing advanced AI systems to solve complex problems and enhance decision-making processes.",
                },
                {
                  name: "Quantum Computing",
                  description:
                    "Exploring the potential of quantum mechanics to revolutionize computing and cryptography.",
                },
                {
                  name: "Biotechnology",
                  description:
                    "Harnessing the power of biology to create sustainable solutions for health and environmental challenges.",
                },
                {
                  name: "Climate Science",
                  description:
                    "Studying the Earth climate system to predict and mitigate the impacts of global change.",
                },
              ].map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                        />
                      </svg>
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Newsletter section */}
      <div className="bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
            <h2 className="inline sm:block lg:inline xl:block">
              Want research updates?
            </h2>{" "}
            <p className="inline sm:block lg:inline xl:block">
              Sign up for our newsletter.
            </p>
          </div>
          <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
            <div className="flex gap-x-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-auto"
              />
              <Button type="submit">Subscribe</Button>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              We care about your data. Read our{" "}
              <Link href="#" className="font-semibold text-white">
                privacy&nbsp;policy
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
