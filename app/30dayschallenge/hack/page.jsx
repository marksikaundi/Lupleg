import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { HackCard } from "@/components/challenges/HackCard"
import { NotificationBanner } from "@/components/challenges/NotificationBanner"

export default function ChallengePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Search and Filter Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="search"
            placeholder="Search challenges, hackathons and practice by difficulty, industry, skills and country"
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:[#2D1537]"
          />
        </div>
        <Select defaultValue="prize">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="prize">Top prize first</SelectItem>
            <SelectItem value="deadline">Deadline</SelectItem>
            <SelectItem value="participants">Participants</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Notification Banner */}
      <NotificationBanner />

      {/* Challenges Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#2D1537] mb-6">Open Challenges: 3</h1>
        <div className="grid gap-6">
          <HackCard
            title="CGIAR Root Volume Estimation Challenge"
            image="/30/xl.svg" 
            prize="$15 000 USD"
            region="Helping Africa"
            participants={555}
            timeLeft="~1 month left"
            href="/challenges/cgiar-root-volume"
          />
          <HackCard
            title="Inundata: Mapping Floods in South Africa"
            image="/30/xl.svg" 
            prize="$10 000 USD"
            region="Helping South Africa"
            participants={1170}
            timeLeft="Closing soon! (12 days left)"
            urgent
            href="/challenges/inundata-floods"
          />
          <HackCard
            title="Telangana Crop Health Challenge"
            image="/30/xl.svg" 
            prize="€6 900 EUR"
            region="Helping India"
            participants={1008}
            timeLeft="Closing soon! (5 days left)"
            urgent
            href="/challenges/telangana-crop-health"
          />
        </div>
      </div>
    </main>
  )
}

