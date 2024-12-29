import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Help from "@/components/FeaturesCards/Help";
import PricePreview from "@/components/UIPreviews/PricePreview";

const pricingTiers = [
  { pageviews: "10K", price: 8 },
  { pageviews: "50K", price: 12 },
  { pageviews: "100K", price: 16 },
  { pageviews: "500K", price: 24 },
  { pageviews: "1M", price: 36 },
];

export default function PricingCard() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Link
        href="/challenges/frontend"
        className="inline-flex items-center text-sm text-[#2D1537] hover:text-[#2D1537] mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Interactive Pricing Card
      </h1>

      <div className="flex items-center mb-6">
        <Image
          src="/mark.jpg"
          alt="Mark Sikaundi"
          width={40}
          height={40}
          className="rounded-full w-10 h-10 mr-3"
        />
        <div>
          <p className="font-medium text-gray-900">Mark Sikaundi </p>
          <p className="text-sm text-gray-500">August 24, 2024</p>
        </div>
      </div>

      <p className="text-gray-700 mb-8">
        Create an Interactive Pricing Component using React and Tailwind CSS.
        This pricing component should have interactive pricing cards that change
        the pricing based on the user's selection. The pricing component should
        include the following features:
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        This Interactive Pricing Component includes the following features:
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-8">
        <li>A slider to select different pageview tiers</li>
        <li>A toggle switch to choose between monthly and yearly billing</li>
        <li>
          Dynamic price calculation based on the selected tier and billing
          frequency
        </li>
        <li>A 25% discount applied for yearly billing</li>
        <li>Responsive design for various screen sizes</li>
        <li>A list of included features</li>
        <li>A call-to-action button</li>
      </ul>

      <code className="text-gray-700 mb-8">
        <p className="text-black font-bold mb-2">USE THIS DATA</p>
        {JSON.stringify(pricingTiers, null, 2)}
      </code>

      <h2 className="text-2xl font-bold text-gray-900 my-6">
        The component uses the following shadcn/ui components:
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-8">
        <li>
          {" "}
          <b>`Slider`</b> for selecting the pageview tier
        </li>
        <li>
          {" "}
          <b>`Switch`</b> for toggling between monthly and yearly billing
        </li>
        <li>
          <b>`Button`</b> for the call-to-action
        </li>
        <li>
          <b>`Tooltip`</b> for displaying additional information about yearly
          billing savings
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Here's a preview of Price Card:
      </h2>

      <PricePreview />
      <h2 className="text-2xl font-bold text-gray-900 my-4">Note:</h2>
      <p className="text-gray-700 mb-8">
        The component should use Tailwind CSS for styling, making it easy to
        customize colors, spacing, and other design aspects. The pricing
        component should be interactive and update the pricing in real-time
        based on the user's selection. The component should be responsive and
        adapt to different screen sizes.
      </p>

      <Help />
    </div>
  );
}
