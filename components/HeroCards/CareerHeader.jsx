import Link from "next/link";
import { Button } from "../ui/button";


export default function CareerHeader() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#2D1537]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 text-primary-foreground">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Career opportunity at Lupleg
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">
                  We are always looking for talented individuals to join our
                  team. If you are passionate about technology and want to make
                  a difference in the world, we would love to hear from you.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Link href="mailto:recruit@lupleg.org">
                  <Button className="w-full bg-white hover:bg-white text-[#2D1537] ">
                    Apply Now
                  </Button>
                </Link>
                <p className="text-xs text-white">
                  We are an equal opportunity employer and value diversity at
                  our company. We do not discriminate on the any basis.
                </p>
              </div>
            </div>
            <img
              src="/file.svg"
              width="550"
              height="330"
              alt="Creative"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
