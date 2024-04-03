import Link from "next/link";

export default function SponsorShip() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Sponsor Us
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Join us in our mission to inspire and innovate. Your sponsorship
            helps us make a difference.
          </p>
        </div>
        <div className="grid max-w-sm mx-auto gap-4 lg:grid-cols-2 lg:max-w-none lg:gap-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="rounded-full p-3 bg-green-900 dark:bg-green-900">
              <UsersIcon className="w-6 h-6 text-white dark:text-white" />
            </div>
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-bold">Community Supporter</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Embrace the community
              </p>
            </div>
            <div className="text-2xl font-bold">$500</div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="rounded-full p-3 bg-green-900 dark:bg-green-900">
              <AwardIcon className="w-6 h-6 text-white dark:text-white" />
            </div>
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-bold">Gold Sponsor</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Stand out with gold
              </p>
            </div>
            <div className="text-2xl font-bold">$2000</div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="rounded-full p-3  bg-green-900 dark:bg-green-900">
              <ZapIcon className="w-6 h-6 text-white dark:text-white" />
            </div>
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-bold">Innovation Partner</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Power innovation
              </p>
            </div>
            <div className="text-2xl font-bold">$10000</div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="rounded-full p-3  bg-green-900 dark:bg-green-900">
              <GitBranchIcon className="w-6 h-6 text-white dark:text-white" />
            </div>
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-bold">Platinum Partner</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Excellence assured
              </p>
            </div>
            <div className="text-2xl font-bold">$25000</div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto grid gap-4 lg:gap-6">
          <p className="text-sm text-gray-500 md:text-base/relaxed dark:text-gray-400">
            For more information about our sponsorship packages, contact our
            team at{" "}
            <Link className="underline" href="mailto:info@lupleg.website">
              info@lupleg.website
            </Link>
          </p>
        </div>
      </div>
    </section>
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

function GitBranchIcon(props) {
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
      <line x1="6" x2="6" y1="3" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ZapIcon(props) {
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
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
