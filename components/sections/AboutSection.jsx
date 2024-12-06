import { Target } from "lucide-react"

export default function Component() {
  return (
    <div className="bg-blue-50 p-8 mt-20 rounded-lg">
      <div className="flex items-start mb-8">
        <div className="bg-[#2D1537] p-2 rounded-lg mr-4">
          <Target className="text-white w-8 h-8" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#2D1537] mb-2">Purpose</h2>
          <p className="text-gray-700 max-w-2xl">
            We're here to help everyone get really good at programming, regardless of their background. We want to share our love of programming, and help people upskill as part of their upward social mobility.
          </p>
        </div>
        <img
          src="/purpose.svg?height=150&width=150"
          alt="Illustration of a person with a laptop"
          className="ml-auto hidden md:block"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            number: 1,
            title: "ATTAIN MASTERY",
            description: "We want people to experience the joy of programming — the deep satisfaction from being a fluent programmer."
          },
          {
            number: 2,
            title: "HAVE FUN",
            description: "Developing programming skills should be empowering and fun, not competitive, frustrating or stressful."
          },
          {
            number: 3,
            title: "SOCIAL MOBILITY",
            description: "We want everyone, especially the economically deprived, to achieve upward mobility through learning to code."
          }
        ].map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-8 h-8 bg-[#c9c0cd] text-[#2D1537] rounded-sm flex items-center justify-center font-bold mb-4">
              {card.number}
            </div>
            <h3 className="text-lg font-bold text-[#2D1537] mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}