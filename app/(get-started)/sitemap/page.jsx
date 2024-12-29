import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Sitemap() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded bg-green-100 p-3 mb-8 text-sm dark:bg-gray-800">
                  Our Sitemap
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Faster iteration. More innovation.
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Stress free you can easily access all what you looking for
                  from our Sitemap. All the relevant pages are accessible from
                  here without much stress.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">
                  <Link href="/programs">
                    {" "}
                    Digital Skills Training
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  The Digital Skills Training Programs are short courses that
                  are designed to help you learn new skills and advance your
                  career.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">
                  <Link href="/programs">
                    Office Productivity Softwares
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  The Office Productivity Softwares Training Programs are short
                  courses that are designed to help you learn how to use popular
                  office productivity software.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">
                  <Link href="/programs">
                    Master Your Freelance Hustle
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  The Master Your Freelance Hustle Mentorship is a 3-month
                  program that is designed to help you become a successful
                  freelancer.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">
                  <Link href="/programs">Frontend Development</Link>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  The Frontend Development Mentorship is a 3-month program that
                  is designed to help you become a frontend developer.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">
                  <Link href="/programs">Backend Development</Link>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  The Backend Development Mentorship is a 3-month program that
                  is designed to help you become a backend developer.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">
                  <Link href="/programs">Mastering React with JavaScript</Link>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Learn React from Facebook engineers. This course will take
                  your React skills to the next level.
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
              <Link
                href="contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#C24229] px-8 text-sm font-medium text-gray-50 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Contact Sales
              </Link>
              <Link
                href="https://lab.lupleg.org"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-green-900 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Tour the Platform
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the workflow the best frontend teams love.
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let your team focus on bussiness prospects instead of managing
                development and managing infrastructures
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1"
                />
                <Button
                  type="submit"
                  className="bg-[#C24229] hover:bg-[#C24229] "
                >
                  Sign Up
                </Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified for any latest.
                <Link
                  href="/terms"
                  className="underline underline-offset-2 text-[#2D1537]"
                  prefetch={false}
                >
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="w-" />
      </main>
    </div>
  );
}
