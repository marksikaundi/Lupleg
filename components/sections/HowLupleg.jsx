import { Users } from "lucide-react";

export default function HowLupleg() {
  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-8 items-start">
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src="/moreus.svg?height=200&width=200"
          alt="Three cartoon people standing together"
          className="w-48 h-48 object-cover"
        />
      </div>
      <div className="w-full md:w-2/3 space-y-6">
        <div className="flex items-center gap-2 text-[#2D1537]">
          <Users size={24} />
          <h1 className="text-2xl font-bold">How Lupleg is run</h1>
        </div>
        <p className="text-gray-700">
          Lupleg is developed through a mixture of top-down leadership and a
          collaborative community. We believe that most decisions are worth
          their taking time over, and so we think hard before we act.
        </p>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[#2D1537]">Reflective</h2>
          <p className="text-gray-700">
            We focus on being strategy-driven and product-driven, looking to the
            long term, not just the immediate impact, and considering the
            holistic impact of decisions. We work closely with key volunteer
            contributors to canvas opinions and knowledge, understanding our
            strengths and weaknesses and trying to improve Lupleg daily, while
            also staying focussed on our long-term vision.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[#2D1537]">
            A small team with a big vision
          </h2>
          <p className="text-gray-700">
            We also place a high focus on quality. We want what we do to be good
            - to work well, be accessible to all, and to be innovative. We have
            a tiny core team who take responsibility for ensuring that Lupleg
            grows and evolves in line with its vision. Through donations from
            our community, philanthropists and philanthropic foundations, we are
            expanding our team in a sustainable and responsible way. We have
            funding milestones that we publicize and fundraise towards, which
            allow us to hire more people to develop further.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[#2D1537]">
            Grounded in ethics
          </h2>
          <p className="text-gray-700">
            We try to pay fairly, respecting and considering both the time and
            value of our staff and the generosity of our donors. We act
            ethically as a company and as an employer, treating our team with
            respect and never asking something of them that we wouldn't do
            ourselves, and not using techniques or technologies that we wouldn't
            want used on us.
          </p>
        </div>
      </div>
    </div>
  );
}
