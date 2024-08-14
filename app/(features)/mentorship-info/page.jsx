import Link from "next/link";
import MoreFQA from "@/components/FeaturesCards/MoreFAQ";
import AboutMentor from "@/components/HeroCards/AboutMentor";
import MentorHeader from "@/components/HeroCards/MentorHeader";

export default function MentorshipInfo() {
  return (
    <div className="w-full">
      <MentorHeader />

      <aside className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Benefits of Our Mentorship Program
            </h2>
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <div className="bg-green-950 rounded-md p-3 flex items-center justify-center">
                  <CheckIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Personalized Guidance
                  </h3>
                  <p className="text-muted-foreground">
                    Work one-on-one with an experienced mentor to get tailored
                    advice and support.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-950 rounded-md p-3 flex items-center justify-center">
                  <CheckIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Skill Development</h3>
                  <p className="text-muted-foreground">
                    Enhance your skills and knowledge through hands-on workshops
                    and training sessions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-950 rounded-md p-3 flex items-center justify-center">
                  <CheckIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Networking Opportunities
                  </h3>
                  <p className="text-muted-foreground">
                    Connect with a community of like-minded professionals and
                    expand your network.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-950 rounded-md p-3 flex items-center justify-center">
                  <CheckIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Career Advancement</h3>
                  <p className="text-muted-foreground">
                    Receive guidance and support to help you achieve your
                    professional goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <div className="inline-block rounded-lg bg-green-950 px-3 py-1 text-sm text-primary-foreground">
              Mentorship Program
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Unlock Your Potential with Our Mentorship Program
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our mentorship program is designed to help you achieve your
              professional goals and unlock your full potential. Join now and
              start your journey to success.
            </p>
            <Link
              href="https://app.lupleg.website"
              className="inline-flex h-10 items-center justify-center rounded-md bg-green-950 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-green-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Join the Program
            </Link>
          </div>
        </div>
      </aside>

      <div>
        <AboutMentor />
      </div>

      <MoreFQA />
    </div>
  );
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
  );
}
