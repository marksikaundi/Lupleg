import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

export default function HomeHero() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D1537] leading-tight">
              The platform for learning, build and connect.
            </h1>
            <p className="text-lg md:text-xl text-[#2D1537] max-w-2xl">
              Join us in shaping the future of technology! Our developer
              community empowers individuals with the skills and resources to
              solve problems, drive innovation, and create a more sustainable
              future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#2D1537] px-6 text-sm font-medium text-white hover:bg-[#2D1537]"
              >
                Join Mentorship
              </Link>
              <Link
                href="https://wa.me/+260776578583"
                className="inline-flex h-12 items-center justify-center rounded-md border border-[#2D1537] bg-white/10 px-6 text-sm text-[#2D1537] hover:bg-white/20"
              >
                Talk to us
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <span className="text-[#2D1537] font-medium">4.7 stars</span>
                <span className="text-[#2D1537]">
                  {" "}
                  Trusted by over 1,000+ developers and communities
                </span>
              </div>
              {/* <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <span className="text-white font-medium">4.5 stars</span>
                <span className="text-white/60">250+ reviews</span>
              </div> */}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden backdrop-blur">
              <Image
                src="/edu.svg"
                alt="Front platform interface"
                width={800}
                height={400}
                className="w-full h-full  contain"
              />
            </div>
          </div>
        </div>
        {/* <div className="mt-24 text-center">
          <p className="text-white/80 text-lg">
            Trusted by over 1,000+ developers and companies
          </p>
        </div> */}
      </section>
    </div>
  );
}
