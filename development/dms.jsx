import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#1C1D21] text-white">
      <header className="border-b border-gray-800">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_VERCEL_URL}/placeholder.svg`}
                alt="Codewars"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="font-semibold">codewars</span>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                For Educators
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                For Companies
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Codewars Red
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              Log in
            </Button>
            <Button variant="default" className="bg-red-600 hover:bg-red-700">
              Join
            </Button>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

