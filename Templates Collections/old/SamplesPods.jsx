import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-12">
        <h1 className="text-5xl font-bold mb-4">
          Crossing the
          <br />
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Enterprise Chasm
          </span>
        </h1>
        <p className="text-lg text-gray-600">
          A podcast about startups and their journeys moving up-market to serve enterprise customers.
        </p>
      </header>

      <div className="mb-12">
        <p className="text-sm text-gray-500 mb-2">Listen & Subscribe:</p>
        <div className="flex space-x-4">
          <Image src="/placeholder.svg?height=24&width=24" alt="Spotify" width={24} height={24} />
          <Image src="/placeholder.svg?height=24&width=24" alt="Apple Podcasts" width={24} height={24} />
          <Image src="/placeholder.svg?height=24&width=24" alt="Google Podcasts" width={24} height={24} />
          <span className="text-sm text-gray-500">or RSS</span>
        </div>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-gray-500 mb-4">FEATURED EPISODE</h2>
        <Card className="bg-gradient-to-br from-purple-100 to-cyan-100">
          <CardContent className="p-6 flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-square bg-gradient-to-br from-purple-300 to-cyan-300 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Episode cover"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                The Power of Developer Evangelism, Authentic Content, and Simple Messaging
              </h3>
              <p className="text-gray-600">
                WorkOS CEO, Michael Grinich, and Datadog CMO, Sara Varni, discuss learnings from Twilio's growth from
                $400 million to $2.8 billion in revenue, the importance of developer evangelism as a function, and the
                nuances of marketing a broad platform like Datadog.
              </p>
              <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                Listen
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}