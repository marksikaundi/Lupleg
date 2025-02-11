import { X } from "lucide-react"
import Link from "next/link"

export function NotificationBanner() {
  return (
    <div className="bg-teal-50 p-4 rounded-lg mb-8 relative">
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 bg-[#2D1537] rounded-lg flex items-center justify-center text-white">🎯</div>
        <div>
          <Link
            href="/practice"
            className="text-lg font-semibold text-[#2D1537] hover:text-[#2D1537] flex items-center gap-2"
          >
            Get started with practice challenges
            <span className="text-xl">→</span>
          </Link>
          <p className="text-gray-600">Learn how to join a challenge, submit your results and get on the leaderboard</p>
        </div>
      </div>
      <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
        <X className="h-5 w-5" />
        <span className="sr-only">Dismiss</span>
      </button>
    </div>
  )
}

