import { Github, Twitter, Facebook } from 'lucide-react'
import Link from "next/link"

export default function FooterSection() {
  return (
    <footer className=" text-white py-16 px-4 md:px-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Lupleg is open source and 100% free.
        </h2>
        <p className="text-gray-300 text-sm md:text-base">
          Help us provide opportunity for people of all backgrounds by helping them develop their
          programming skills through code practice and mentorship.
        </p>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-gray-600 mb-16"></div>

      {/* Footer Links */}
      {/* <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
        <div>
          <h3 className="font-bold mb-4 text-lg">Editions</h3>
          <div className="space-y-2">
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Exercism</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Learn to Code</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Exercism Bootcamp</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Exercism for Teams</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Exercism Research</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-lg">About</h3>
          <div className="space-y-2">
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">About Exercism</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Our team</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Contributors</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Partners</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Individual supporters</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-lg">Get involved</h3>
          <div className="space-y-2">
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Exercism Insiders</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Contribute</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Mentor</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Donate</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-lg">Legal & policies</h3>
          <div className="space-y-2">
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Terms of usage</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Privacy policy</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Cookie policy</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Code of conduct</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Accessibility statement</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-lg">Keep in touch</h3>
          <div className="space-y-2">
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Exercism's blog</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Discuss on GitHub</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Contact us</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Report abuse</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-lg">Get help</h3>
          <div className="space-y-2">
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Exercism's Docs</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Getting started</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">FAQs</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Installing the CLI</Link>
            <Link href="#" className="block text-gray-300 hover:text-[#3CC7C8] text-sm">Interactive CLI Walkthrough</Link>
          </div>
        </div>
      </div> */}

      {/* Social Links */}
      {/* <div className="flex justify-center space-x-4">
        <Link href="#" className="p-2 rounded-full bg-[#1DA1F2] hover:opacity-90">
          <Twitter className="w-6 h-6" />
        </Link>
        <Link href="#" className="p-2 rounded-full bg-[#4267B2] hover:opacity-90">
          <Facebook className="w-6 h-6" />
        </Link>
        <Link href="#" className="p-2 rounded-full bg-[#333] hover:opacity-90">
          <Github className="w-6 h-6" />
        </Link>
      </div> */}
    </footer>
  )
}

