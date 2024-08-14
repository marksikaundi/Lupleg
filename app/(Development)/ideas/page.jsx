/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VI1vcvYTKK3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="w-full">
      <section className="w-full bg-primary py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl/none">
                  Unlock Your Potential with Our Mentorship Program
                </h1>
                <p className="max-w-[600px] text-primary-foreground/90 md:text-xl">
                  Gain valuable insights, guidance, and support from experienced industry leaders. Join our mentorship
                  program and accelerate your growth.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Join the Program
              </Link>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Mentorship"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Mentors</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our mentors are experienced professionals who are passionate about helping you achieve your goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-4">
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Mentor"
                className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
              />
              <div className="space-y-1 text-center">
                <h3 className="text-lg font-bold">John Doe</h3>
                <p className="text-muted-foreground">Software Engineer</p>
                <p className="text-sm text-muted-foreground">
                  John has over 10 years of experience in the tech industry and is passionate about helping others grow
                  their careers.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Mentor"
                className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
              />
              <div className="space-y-1 text-center">
                <h3 className="text-lg font-bold">Jane Smith</h3>
                <p className="text-muted-foreground">Product Manager</p>
                <p className="text-sm text-muted-foreground">
                  Jane has a wealth of experience in product management and loves to share her knowledge with aspiring
                  PMs.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Mentor"
                className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
              />
              <div className="space-y-1 text-center">
                <h3 className="text-lg font-bold">Michael Johnson</h3>
                <p className="text-muted-foreground">UX Designer</p>
                <p className="text-sm text-muted-foreground">
                  Michael has been designing user experiences for over 15 years and is passionate about mentoring the
                  next generation of designers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <aside className="w-full bg-muted py-12 md:py-24 lg:py-32">
        <div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Benefits of Our Mentorship Program
            </h2>
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <CheckIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Personalized Guidance</h3>
                  <p className="text-muted-foreground">
                    Work one-on-one with an experienced mentor to get tailored advice and support.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <CheckIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Skill Development</h3>
                  <p className="text-muted-foreground">
                    Enhance your skills and knowledge through hands-on workshops and training sessions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <CheckIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Networking Opportunities</h3>
                  <p className="text-muted-foreground">
                    Connect with a community of like-minded professionals and expand your network.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <CheckIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Career Advancement</h3>
                  <p className="text-muted-foreground">
                    Receive guidance and support to help you achieve your professional goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Mentorship Program
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Unlock Your Potential with Our Mentorship Program
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our mentorship program is designed to help you achieve your professional goals and unlock your full
              potential. Join now and start your journey to success.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Join the Program
            </Link>
          </div>
        </div>
      </aside>
    </div>
  )
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}