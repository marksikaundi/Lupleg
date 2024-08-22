import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex flex-col justify-center p-4 md:p-8 ">
      <div className="max-w-4xl space-y-8 text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Your app,
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Enterprise Ready.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
          Start selling to enterprise customers with just a few lines of code.
          Implement features like single sign-on in minutes instead of months.
        </p>
        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-white text-purple-600 hover:bg-purple-100 text-lg px-8 py-3 rounded-full">
            Get started
          </Button>
          <Button variant="link" className="text-white hover:text-purple-200 text-lg pl-0">
            Talk to an expert
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="mt-16 text-white/60 flex items-center space-x-2">
        <span>WorkOS acquires Warrant</span>
        <Link href="#" className="text-white hover:text-purple-200 flex items-center">
          Read the announcement
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}