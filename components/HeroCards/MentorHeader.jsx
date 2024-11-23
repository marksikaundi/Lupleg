import Link from "next/link";
import { Button } from "../ui/button";

export default function MentorHeader() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 text-primary-foreground">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Empower Your Growth with Mentorship
                </h1>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Our mentorship program is designed to help you grow your
                  skills and advance your career. You will learn from
                  experienced professionals and get personalized feedback on
                  your work. By the end of the program, you will have the skills
                  and confidence to succeed in your chosen field
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Link href="https://app.lupleg.org">
                  <Button variant="secondary" className="w-full">
                    Apply Now
                  </Button>
                </Link>
                <p className="text-xs text-primary-foreground/80">
                  Join our mentorship program and get personalized feedback on
                  your work from experienced professionals.
                </p>
              </div>
            </div>
            <img
              src="/educator.svg"
              width="550"
              height="310"
              alt="Mentorship"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
