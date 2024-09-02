import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckIcon, XIcon } from "lucide-react"

const plans = [
  {
    name: "Business",
    description: "Level up with more power and enhanced features.",
    price: 3.99,
    originalPrice: 13.99,
    discount: 71,
    period: "For 48-month term",
    renewalPrice: 8.99,
    features: [
      "~100 000 visits monthly",
      "Up to 100 websites",
      "200 GB NVMe storage",
      "400 000 files and directories (inodes)",
      "60 PHP workers",
      "1.5 GB RAM",
      "Free domain ($9.99 value)",
      "Free SSL",
      "Free email",
      "Free CDN",
      { name: "Dedicated IP address", included: false },
      { name: "Priority support", included: false },
    ],
  },
  {
    name: "Cloud Startup",
    description: "Enjoy optimized performance & powerful resources.",
    price: 7.99,
    originalPrice: 24.99,
    discount: 68,
    period: "For 48-month term",
    renewalPrice: 19.99,
    popular: true,
    features: [
      "~200 000 visits monthly",
      "Up to 300 websites",
      "200 GB NVMe storage",
      "2 000 000 files and directories (inodes)",
      "100 PHP workers",
      "3 GB RAM",
      "Free domain ($9.99 value)",
      "Free SSL",
      "Free email",
      "Free CDN",
      "Dedicated IP address",
      "Priority support",
    ],
  },
  {
    name: "Cloud Professional",
    description: "Optimized for advanced WooCommerce stores.",
    price: 14.99,
    originalPrice: 39.99,
    discount: 62,
    period: "For 48-month term",
    renewalPrice: 32.99,
    features: [
      "~300 000 visits monthly",
      "Up to 300 websites",
      "250 GB NVMe storage",
      "3 000 000 files and directories (inodes)",
      "200 PHP workers",
      "6 GB RAM",
      "Free domain ($9.99 value)",
      "Free SSL",
      "Free email",
      "Free CDN",
      "Dedicated IP address",
      "Priority support",
    ],
  },
]

export default function Component() {
  return (
    <div className=" p-4 sm:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card key={plan.name} className={`bg-gray-800 border-gray-700 ${plan.popular ? 'border-[#F3A833]' : ''}`}>
            {plan.popular && (
              <div className="bg-[#F3A833] text-white text-center py-1 text-xs sm:text-sm font-semibold">
                MOST POPULAR
              </div>
            )}
            <CardHeader className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-white">{plan.name}</h2>
              <p className="text-sm sm:text-base text-gray-400">{plan.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-xs sm:text-sm text-gray-400 line-through">${plan.originalPrice.toFixed(2)}</div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-3xl sm:text-4xl font-bold text-white">${plan.price.toFixed(2)}</span>
                  <span className="text-sm sm:text-base text-gray-400">/mo</span>
                  <Badge variant="secondary" className="bg-[#F3A833] text-white text-xs sm:text-sm">Save {plan.discount}%</Badge>
                </div>
                <div className="text-xs sm:text-sm text-gray-400">{plan.period}</div>
              </div>
              <Button className={`w-full ${plan.popular ? 'bg-[#F3A833] hover:bg-purple-600' : 'bg-white text-black hover:bg-gray-200'}`}>
                Choose plan
              </Button>
              <div className="text-xs sm:text-sm text-gray-400">
                ${plan.renewalPrice.toFixed(2)}/mo when you renew
              </div>
              <div className="space-y-2 text-sm sm:text-base">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    {typeof feature === 'string' ? (
                      <CheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : feature.included ? (
                      <CheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`${typeof feature === 'string' || feature.included ? 'text-gray-300' : 'text-gray-500'} break-words`}>
                      {typeof feature === 'string' ? feature : feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="w-full text-white text-sm sm:text-base">
                See all features
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}