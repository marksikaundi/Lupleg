/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4OmdKMRJE9m
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white">
      <div className="flex items-center space-x-4">
        <FlagIcon className="h-6 w-6 text-[#bd1e59]" />
        <span className="font-bold text-xl">Front</span>
      </div>
      <nav className="flex space-x-6">
        <Link className="text-sm font-medium hover:text-gray-900" href="#">
          Product
        </Link>
        <Link className="text-sm font-medium hover:text-gray-900" href="#">
          Solutions
        </Link>
        <Link className="text-sm font-medium hover:text-gray-900" href="#">
          Pricing
        </Link>
        <Link className="text-sm font-medium hover:text-gray-900" href="#">
          Resources
        </Link>
        <Link className="text-sm font-medium hover:text-gray-900" href="#">
          Contact Us
        </Link>
      </nav>
      <div className="flex space-x-2">
        <Button className="text-sm bg-transparent hover:bg-gray-100 text-gray-700">Sign In</Button>
        <Button className="text-sm bg-[#1e40af] text-white hover:bg-[#1c39bb]">Get started</Button>
      </div>
    </header>
  )
}

function FlagIcon(props) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}
