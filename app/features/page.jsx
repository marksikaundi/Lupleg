import Link from "next/link";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Supercharge your team with Lupleg
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The all-in-one platform for collaboration. Streamline your
              workflow, connect your tools, and ship better code with automated
              CI/CD.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Collaboration</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Break down silos and bring your team together with built-in
              collaboration tools.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Automation</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Let your robots do the work with customizable automation that fits
              your workflow.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Security</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Ship with confidence using the industry's most secure development
              platform.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Continuous Integration</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Catch bugs before they reach production with automated testing and
              built-in CI.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Continuous Deployment</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Go from code to cloud with the push of a button using integrated
              CD.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Code Review</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Collaborate on code with pull requests that make it easy to leave
              feedback.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl gap-6 lg:max-w-none lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-2">
            <div className="font-medium">Trusted by the best</div>
            <p className="md:leading-loose/relaxed lg:leading-loose/relaxed xl:leading-loose/relaxed leading-loose text-gray-500 dark:text-gray-400">
              "Lupleg has transformed the way our team works. We're able to ship
              features faster and with fewer bugs, thanks to the seamless
              automation and collaboration the platform provides."
            </p>
            <div className="font-semibold">
              - Mark Sikaundi, CTO at DevCircle Africa
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-medium">Trusted by the best</div>
            <p className="md:leading-loose/relaxed lg:leading-loose/relaxed xl:leading-loose/relaxed leading-loose text-gray-500 dark:text-gray-400">
              "As a developer, I love how easy Lupleg makes it to get my code
              into the hands of users. The CI/CD pipeline is a game-changer and
              the integrated code review tools have improved the quality of our
              software."
            </p>
            <div className="font-semibold">- David Jiri, Software Engineer</div>
          </div>
        </div>
        <div className="flex flex-col justify-center min-[400px]:flex-row">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="contacts"
          >
            Contact Sales
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="docs"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
