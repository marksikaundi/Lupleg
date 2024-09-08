import { Button } from "@/components/ui/button"

export default function DsFQ() {
  return (
    <div className="min-h-screen bg-[#0A0A1B] text-white p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 bg-green-400 opacity-20 rounded-full blur-xl"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-16 h-16 text-green-400"
              >
                <path d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.03 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v4.94a.75.75 0 001.5 0v-4.94l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
          <Button className="bg-green-400 hover:bg-green-500 text-[#0A0A1B] font-semibold py-2 px-4 rounded">
            Get Access Now
          </Button>
        </div>
        <div className="space-y-8 mt-12">
          <div>
            <h2 className="text-2xl font-semibold mb-2">What discounts are available?</h2>
            <p className="text-gray-300">
              There are no hidden special discounts available. We support purchase power parity. This is automated based on IP address of the computer you are using to make the purchase. It's an imperfect system and the discount does not always display.
            </p>
            <p className="text-gray-300 mt-2">
              Note that if you use the PPP discount your purchase will be restricted to the country you purchased it from.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">How do the "team" seats work? What is a "seat" in this context?</h2>
            <p className="text-gray-300">
              When you buy a team seat, you receive a link that can be used to register for the number of accounts you have purchased. The license is non-transferable (you cannot reassign a license from one person to another).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}