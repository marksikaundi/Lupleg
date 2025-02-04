import Link from "next/link"
import Image from "next/image"
import { Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HackCard({
  title,
  image,
  prize,
  region,
  participants,
  timeLeft,
  urgent,
  href,
}) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative h-48 md:h-auto">
          <Image src={image || "github.png"} alt={title} fill className="object-cover" />
        </div>
        <div className="flex-1 p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="space-y-2">
              <Link href={href} className="text-xl font-semibold text-purple-900 hover:text-purple-700">
                {title}
              </Link>
              <p className="text-gray-600">{region}</p>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="h-4 w-4" />
                <span>{participants}</span>
              </div>
              <p className={urgent ? "text-red-500 font-medium" : "text-gray-600"}>{timeLeft}</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="text-2xl font-bold text-teal-500">{prize}</p>
              <Button variant="default" className="bg-purple-900 hover:bg-purple-800">
                Join
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

