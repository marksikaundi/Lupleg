import MoreFQA from "@/components/FeaturesCards/MoreFAQ";
import AcademyHeader from "@/components/HeroCards/AcademyHeader";
import Link from "next/link";

export default function Academy() {
  return (
    <div className="flex min-h-screen flex-col">
      <AcademyHeader />

      <section className="bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-2 xl:gap-16">
            {/* Course 00 */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Office Productivity Suite
                </h2>
                <p className="text-2xl font-bold tracking-tighter text-gray-500 sm:text-3xl dark:text-gray-400">
                  $15
                </p>
              </div>
              <p className="mx-auto max-w-md text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                This course will introduce you to the world of office
                productivity suite. You will learn how to use Microsoft Office,
                Google Docs, and other productivity tools.
              </p>
              <Link
                href="/office-productivity-software"
                className="btn inline-block w-full text-green-900 hover:text-orange-500 md:w-auto"
              >
                Learn more →
              </Link>
            </div>
            <div className="aspect-w-16 aspect-h-9 mx-auto overflow-hidden rounded-xl sm:order-last sm:aspect-video">
              <img
                alt="React Course"
                className="object-cover"
                src="https://utfs.io/f/dcdb26ac-4a38-4a3b-affa-2c16d3f5473a-t3524v.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-2 xl:gap-16">
            {/* Course 01 */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Introduction to Web Development
                </h2>
                <p className="text-2xl font-bold tracking-tighter text-gray-500 sm:text-3xl dark:text-gray-400">
                  $199
                </p>
              </div>
              <p className="mx-auto max-w-md text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                This course will introduce you to the world of web development.
                You will learn HTML, CSS, and JavaScript from scratch.
              </p>
              <Link
                href="#"
                className="btn inline-block w-full text-green-900 hover:text-orange-500 md:w-auto"
              >
                Learn more →
              </Link>
            </div>
            <div className="aspect-w-16 aspect-h-9 mx-auto overflow-hidden rounded-xl sm:order-last sm:aspect-video">
              <img
                alt="Web Development Course"
                className="object-cover"
                src="/web.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-2 xl:gap-16">
            {/* Course 02 */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Mastering React with JavaScript
                </h2>
                <p className="text-2xl font-bold tracking-tighter text-gray-500 sm:text-3xl dark:text-gray-400">
                  $10
                </p>
              </div>
              <p className="mx-auto max-w-md text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                Learn React from Facebook engineers. This course will take your
                React skills to the next level.
              </p>
              <Link
                href="#"
                className="btn inline-block w-full text-green-900 hover:text-orange-500 md:w-auto"
              >
                Learn more →
              </Link>
            </div>
            <div className="aspect-w-16 aspect-h-9 mx-auto overflow-hidden rounded-xl sm:order-last sm:aspect-video">
              <img
                alt="React Course"
                className="object-cover"
                src="/reactjs.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-2 xl:gap-16">
            {/* Course 03 */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Master Your Freelance Hustle
                </h2>
                <p className="text-2xl font-bold tracking-tighter text-gray-500 sm:text-3xl dark:text-gray-400">
                  $10
                </p>
              </div>
              <p className="mx-auto max-w-md text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                The Master Your Freelance Hustle Mentorship is a 3-month program
                that is designed to help you become a successful freelancer. You
                will learn how to find clients, negotiate contracts, and deliver
                high-quality work on time and on budget.
              </p>
              <Link
                href="/master-your-freelance-hustle"
                className="btn inline-block w-full text-green-900 hover:text-orange-500 md:w-auto"
              >
                Learn more →
              </Link>
            </div>
            <div className="aspect-w-16 aspect-h-9 mx-auto overflow-hidden rounded-xl sm:order-last sm:aspect-video">
              <img
                alt="Freelancing Course"
                className="object-cover"
                src="https://utfs.io/f/06caf2fd-5a18-40ce-86c1-57db0534d677-u2t8af.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-2 xl:gap-16">
            {/* Course 04 */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Git & GitHub for Beginners
                </h2>
                <p className="text-2xl font-bold tracking-tighter text-gray-500 sm:text-3xl dark:text-gray-400">
                  $10
                </p>
              </div>
              <p className="mx-auto max-w-md text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                This course will introduce you to how to use git and github for
                version control and collaboration with other developers.
              </p>
              <Link
                href="#"
                className="btn inline-block w-full text-green-900 hover:text-orange-500 md:w-auto"
              >
                Learn more →
              </Link>
            </div>
            <div className="aspect-w-16 aspect-h-9 mx-auto overflow-hidden rounded-xl sm:order-last sm:aspect-video">
              <img
                alt="Git & GitHub Course"
                className="object-cover"
                src="/github.png"
              />
            </div>
          </div>
        </div>
      </section>
      <MoreFQA />
    </div>
  );
}
