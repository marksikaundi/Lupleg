import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import MoreFQA from "@/components/FeaturesCards/MoreFAQ";

export default function MentorInfo() {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-950">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl">
              About Our Mentorship and Training Program
            </h1>
            <p className="max-w-[700px] mx-auto text-primary-foreground md:text-xl">
              Gain invaluable insights, guidance, and support from experienced
              professionals in your field.
            </p>
            <Link
              href="https://app.lupleg.website/mentorships"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-md font-medium text-primary shadow transition-colors hover:bg-primary-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-6">
          <Card>
            <CardHeader>
              <div className="bg-green-950 rounded-md p-3 flex items-center justify-center">
                <UsersIcon className="w-6 h-6 text-primary-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold">Experienced Mentors</h3>
              <p className="text-muted-foreground">
                Connect with industry leaders who are dedicated to helping you
                grow and succeed.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-green-950 rounded-md p-3 flex items-center justify-center">
                <ClipboardIcon className="w-6 h-6 text-primary-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold">Structured Program</h3>
              <p className="text-muted-foreground">
                Benefit from a well-designed curriculum that covers key topics
                and milestones.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-green-950 rounded-md p-3 flex items-center justify-center">
                <LightbulbIcon className="w-6 h-6 text-primary-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold">Personalized Guidance</h3>
              <p className="text-muted-foreground">
                Receive tailored advice and support to help you achieve your
                unique goals.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <MoreFQA />
    </div>
  );
}

function ClipboardIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function LightbulbIcon(props) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
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
