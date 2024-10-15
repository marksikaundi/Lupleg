import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AnnounceCard from "@/components/FeaturesCards/AnnounceCard";

export default function PreBuilts() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Link
        href="/blogs"
        className="inline-flex items-center text-sm text-green-900 hover:text-green-800 mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Blog
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Comparison between homegrown and pre-built solutions
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
        For high growth startups, time is the single most important resource.
        It's so important that months of delay in shipping SSO and SCIM can
        result in a potential revenue loss of $7.95M compared to using a
        pre-built solution. The ROI difference is staggering too: 9% for a
        homegrown solution vs. 1,954% for a pre-built one. This article explains
        the methodologies used to calculate these numbers. As the popularity of
        Software as a Service (SaaS) continues to grow, businesses are faced
        with the decision of whether to invest in pre-built solutions or develop
        their own homegrown SaaS platforms.
        <br />
        Both options have their advantages and disadvantages, making it
        essential for companies to carefully consider their unique needs and
        resources before making a decision.
      </p>

      <div className="flex justify-center space-x-2 mb-8">
        <div className="w-2 h-2 bg-[#F3A833] rounded-full"></div>
        <div className="w-2 h-2 bg-[#F3A833] rounded-full"></div>
        <div className="w-2 h-2 bg-[#F3A833] rounded-full"></div>
      </div>

      <div className="bg-purple-100 p-8 rounded-lg mb-8">
        <div className="flex justify-center items-center space-x-8">
          <div className="bg-white p-4 rounded-full shadow-lg">
            <div className="w-16 h-16 bg-[#F3A833] rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-sm transform rotate-45"></div>
            </div>
          </div>
          <div className="text-4xl font-bold text-[#F3A833]">+</div>
          <div className="bg-white p-4 rounded-full shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-8 bg-[#F3A833] rounded-sm flex items-center justify-center">
                <div className="w-6 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 mb-4">
        Pre-built SaaS solutions, offered by companies like Salesforce,
        Microsoft, and Google, typically provide a wide range of features and
        functionalities right out of the box. These solutions are often more
        affordable and easier to implement, as they have already been tested and
        optimized for various industries.
      </p>

      <p className="text-gray-700 mb-4">
        On the other hand, homegrown SaaS platforms offer businesses the
        flexibility to tailor the software to their specific requirements. This
        can be particularly beneficial for companies with unique workflows or
        specialized processes that may not be catered to by pre-built solutions.
        However, developing a homegrown SaaS platform can be time-consuming,
        costly, and require specialized technical expertise.
      </p>

      <p className="text-gray-700 mb-8">
        Ultimately, the decision between homegrown and pre-built SaaS solutions
        will depend on factors such as budget, time constraints, and the level
        of customization required. It is important for businesses to thoroughly
        evaluate their options and consider consulting with industry experts
        before making a decision.
      </p>

      <AnnounceCard />
    </div>
  );
}
