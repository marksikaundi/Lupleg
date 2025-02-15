import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Nav() {
  return (
    <div className="bg-[#ffffff] ">
      <header className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center"> 
            {/* "25Lupleg.png" */}
              <Image
                src="/25Lupleg.png"              
                alt="Lupleg Logo"
                width={150}
                height={100}
                className="h-12 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/programs" className="text-[#2D1537] hover:text-[#2D1537]">
                Programs
              </Link>
              <Link
                href="/challenges"
                className="text-[#2D1537] hover:text-[#2D1537]"
              >
                Challenges
              </Link>
              <Link
                href="/lupa"
                className="text-[#2D1537] hover:text-[#2D1537]"
              >
                Lupa
              </Link>
              <Link
                href="/templates"
                className="text-[#2D1537] hover:text-[#2D1537]"
              >
                Templates
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/premium"
              className="text-[#2D1537] hover:text-[#2D1537] hidden md:block"
            >
              Premium
            </Link>
            <Link
              href="https://wa.me/+260776578583"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md border border-[#2D1537]  px-4 text-sm text-[#2D1537]"
            >
              Talk to us
            </Link>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-[#2D1537] px-4 text-sm font-medium text-[#ffffff] hover:bg-[#2D1537]"
            >
               Mentorship
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
