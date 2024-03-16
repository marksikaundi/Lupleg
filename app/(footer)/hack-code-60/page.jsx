import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function HackCode60() {
  return (
    <>
      <section className="w-full py-6 md:py-12">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Hack Code 60 Days Challenge
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Sharpen your skills with our 60-day coding challenge. Whether
              you're a beginner or an experienced developer, this challenge is
              designed to help you level up your coding expertise. Each day,
              you'll receive a new coding task to complete. Are you ready to
              take on the challenge?
            </p>
          </div>
          <div className="mx-auto flex max-w-sm flex-col gap-2 md:max-w-xl md:flex-row md:gap-4 lg:max-w-3xl lg:gap-4 xl:max-w-4xl xl:gap-6">
            <Link
              className="inline-flex h-10 w-full items-center justify-center rounded-md border border-gray-200  bg-white text-sm font-medium shadow-sm md:w-auto 2xl:mx-4 dark:border-gray-800  dark:bg-gray-950 dark:text-gray-50"
              href="#"
            >
              View Tasks
            </Link>
            <Link
              className="inline-flex h-10 w-full items-center justify-center rounded-md border border-gray-200  bg-white text-sm font-medium shadow-sm md:w-auto 2xl:mx-4 dark:border-gray-800  dark:bg-gray-950 dark:text-gray-50"
              href="#"
            >
              Submit Solution
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full border-t">
        <div className="container grid items-center gap-4 px-4 py-6 text-center md:grid-cols-2 md:px-6 md:py-12">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Challenge Timeline
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Start: April 1, 2024
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              End: May 30, 2024
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row">
            <Link
              className="inline-flex h-10 w-full items-center justify-center rounded-md border border-gray-200  bg-white text-sm font-medium shadow-sm md:w-auto 2xl:mx-4  dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50"
              href="#"
            >
              View Leaderboard
            </Link>
            <Link
              className="inline-flex h-10 w-full items-center justify-center rounded-md border border-gray-200  bg-white text-sm font-medium shadow-sm md:w-auto 2xl:mx-4  dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50"
              href="#"
            >
              View Notifications
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-12">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Challenge Progress
            </h2>
            <p className="text-gray-500 dark:text-gray-400">30% Complete</p>
          </div>
          <div className="mx-auto w-full max-w-sm" />
        </div>
      </section>
      <section className="w-full py-6 md:py-12">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Challenge Tasks
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Complete the following tasks to progress in the challenge
            </p>
          </div>
          <div className="mx-auto max-w-sm space-y-2 md:max-w-3xl">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Checkbox className="h-4 w-4" id="day-1" />
                <Label className="text-sm font-medium" htmlFor="day-1">
                  Day 1: Introduction to HTML
                </Label>
              </div>
              <Link
                className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200  bg-white px-4 text-xs font-medium shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View Task
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Checkbox className="h-4 w-4" id="day-2" />
                <Label className="text-sm font-medium" htmlFor="day-2">
                  Day 2: Styling with CSS
                </Label>
              </div>
              <Link
                className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-xs font-medium shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View Task
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Checkbox className="h-4 w-4" id="day-3" />
                <Label className="text-sm font-medium" htmlFor="day-3">
                  Day 3: JavaScript Basics
                </Label>
              </div>
              <Link
                className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200  bg-white px-4 text-xs font-medium shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View Task
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Checkbox className="h-4 w-4" id="day-4" />
                <Label className="text-sm font-medium" htmlFor="day-4">
                  Day 4: Responsive Design
                </Label>
              </div>
              <Link
                className="inline-flex h-8 items-center justify-center rounded-md border  border-gray-200 bg-white px-4 text-xs font-medium shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View Task
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Checkbox className="h-4 w-4" id="day-5" />
                <Label className="text-sm font-medium" htmlFor="day-5">
                  Day 5: Project Kickoff
                </Label>
              </div>
              <Link
                className="inline-flex h-8 items-center justify-center rounded-md border  border-gray-200 bg-white px-4 text-xs font-medium shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View Task
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-12">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Challenge Resources
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Access additional resources to help you succeed in the challenge
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row">
            <Link
              className="inline-flex h-10 w-full items-center justify-center rounded-md border  border-gray-200 bg-white text-sm font-medium shadow-sm md:w-auto 2xl:mx-4  dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50"
              href="#"
            >
              Documentation
            </Link>
            <Link
              className="inline-flex h-10 w-full items-center justify-center rounded-md border  border-gray-200 bg-white text-sm font-medium shadow-sm md:w-auto 2xl:mx-4  dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50"
              href="#"
            >
              Support Channel
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-12">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Challenge Leaderboard
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Check the leaderboard to see where you stand
            </p>
          </div>
          <div className="mx-auto max-w-sm space-y-2 md:max-w-3xl">
            <div className="flex items-center gap-4">
              <div className="text-sm font-medium">1. johndoe</div>
              <div className="flex items-center space-x-2">
                <AwardIcon className="h-4 w-4" />
                <span className="text-gray-500 dark:text-gray-400">
                  1000 points
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm font-medium">2. alicebob</div>
              <div className="flex items-center space-x-2">
                <AwardIcon className="h-4 w-4" />
                <span className="text-gray-500 dark:text-gray-400">
                  950 points
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm font-medium">3. codesmith</div>
              <div className="flex items-center space-x-2">
                <AwardIcon className="h-4 w-4" />
                <span className="text-gray-500 dark:text-gray-400">
                  900 points
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm font-medium">4. webdev</div>
              <div className="flex items-center space-x-2">
                <AwardIcon className="h-4 w-4" />
                <span className="text-gray-500 dark:text-gray-400">
                  850 points
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm font-medium">5. hackathon</div>
              <div className="flex items-center space-x-2">
                <AwardIcon className="h-4 w-4" />
                <span className="text-gray-500 dark:text-gray-400">
                  800 points
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-12">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Challenge Notifications
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Stay updated with the latest notifications and announcements
            </p>
          </div>
          <div className="mx-auto max-w-sm space-y-2 md:max-w-3xl">
            <div className="flex items-center gap-4">
              <CalendarIcon className="h-6 w-6 opacity-50" />
              <div className="space-y-1.5 text-sm">
                <strong className="font-medium">Day 10 Challenge</strong>
                <p className="text-xs opacity-70 dark:opacity-100">
                  You have unlocked the bonus round! Complete the extra tasks to
                  earn more points.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CalendarIcon className="h-6 w-6 opacity-50" />
              <div className="space-y-1.5 text-sm">
                <strong className="font-medium">Day 20 Challenge</strong>
                <p className="text-xs opacity-70 dark:opacity-100">
                  You're halfway there! Keep up the good work. Remember to
                  submit your solutions before the deadline.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CalendarIcon className="h-6 w-6 opacity-50" />
              <div className="space-y-1.5 text-sm">
                <strong className="font-medium">Final Day</strong>
                <p className="text-xs opacity-70 dark:opacity-100">
                  Congratulations! You have completed the 60-day challenge. Well
                  done, everyone!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AwardIcon(props) {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function CalendarIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}
