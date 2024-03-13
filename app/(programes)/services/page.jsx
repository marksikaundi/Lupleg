export default function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid max-w-5xl gap-4 px-4 text-center md:gap-8 md:px-6 xl:max-w-6xl">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            From software development to mentorship, we offer a wide range of
            services to help you succeed. For more{" "}
            <a
              className="mt-6 text-base font-semibold text-indigo-600 hover:text-indigo-500"
              href="mailto:dev@lupleg.website"
            >
              Contact →
            </a>
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-stretch justify-center gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
          <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-4 shadow-sm md:flex-row md:items-start md:justify-start md:gap-4 md:p-6 dark:border-gray-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 md:h-16 md:w-16 dark:bg-gray-950">
              <CodeIcon className="h-6 w-6 fill-gray-500 md:h-8 md:w-8 dark:fill-gray-400" />
            </div>
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-lg font-bold tracking-tight">
                Software Development
              </h3>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                Let us build your next big idea. Our team of experts will turn
                your vision into reality.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-4 shadow-sm md:flex-row md:items-start md:justify-start md:gap-4 md:p-6 dark:border-gray-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 md:h-16 md:w-16 dark:bg-gray-950">
              <UnderlineIcon className="h-6 w-6 fill-gray-500 md:h-8 md:w-8 dark:fill-gray-400" />
            </div>
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-lg font-bold tracking-tight">
                WordPress Development
              </h3>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                Make your website stand out with our WordPress expertise. We'll
                create a beautiful and functional site for you.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-4 shadow-sm md:flex-row md:items-start md:justify-start md:gap-4 md:p-6 dark:border-gray-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 md:h-16 md:w-16 dark:bg-gray-950">
              <PenToolIcon className="h-6 w-6 fill-gray-500 md:h-8 md:w-8 dark:fill-gray-400" />
            </div>
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-lg font-bold tracking-tight">
                Graphic Design
              </h3>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                Our designers are ready to bring your brand to life. From logos
                to marketing materials, we've got you covered.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-4 shadow-sm md:flex-row md:items-start md:justify-start md:gap-4 md:p-6 dark:border-gray-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 md:h-16 md:w-16 dark:bg-gray-950">
              <AppWindowIcon className="h-6 w-6 fill-gray-500 md:h-8 md:w-8 dark:fill-gray-400" />
            </div>
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-lg font-bold tracking-tight">
                App Development
              </h3>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                Need a mobile app? Our team is experienced in creating
                user-friendly and feature-rich applications.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-4 shadow-sm md:flex-row md:items-start md:justify-start md:gap-4 md:p-6 dark:border-gray-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 md:h-16 md:w-16 dark:bg-gray-950">
              <MilestoneIcon className="h-6 w-6 fill-gray-500 md:h-8 md:w-8 dark:fill-gray-400" />
            </div>
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-lg font-bold tracking-tight">Mentorship</h3>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                Learn from the best. Our mentors are here to guide you in your
                career and help you grow.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-4 shadow-sm md:flex-row md:items-start md:justify-start md:gap-4 md:p-6 dark:border-gray-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 md:h-16 md:w-16 dark:bg-gray-950">
              <LinkedinIcon className="h-6 w-6 fill-gray-500 md:h-8 md:w-8 dark:fill-gray-400" />
            </div>
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-lg font-bold tracking-tight">Internships</h3>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                Looking for real-world experience? Our internship programs
                provide valuable insights and hands-on learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppWindowIcon(props) {
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
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M10 4v4" />
      <path d="M2 8h20" />
      <path d="M6 4v4" />
    </svg>
  );
}

function CodeIcon(props) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
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

function MilestoneIcon(props) {
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
      <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
      <path d="M12 13v8" />
      <path d="M12 3v3" />
    </svg>
  );
}

function PenToolIcon(props) {
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
      <path d="m12 19 7-7 3 3-7 7-3-3z" />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="m2 2 7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function UnderlineIcon(props) {
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
      <path d="M6 4v6a6 6 0 0 0 12 0V4" />
      <line x1="4" x2="20" y1="20" y2="20" />
    </svg>
  );
}
