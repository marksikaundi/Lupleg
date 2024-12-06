import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Mail } from "lucide-react";
import Link from "next/link";
import TopSection from "@/components/support/TopSection";
import BottomSection from "@/components/support/BottomSection";

export default function Partner() {
  return (
    <div>
      <TopSection />
      <div className="w-full max-w-6xl mx-auto p-4 my-20 space-y-8">
        <Card className="w-full overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center p-6 bg-purple-100 border-purple-300 border rounded-lg">
            <Image
              src="/mark.jpg"
              alt="Mark Sikaundi"
              width={80}
              height={80}
              className="rounded-full w-20 h-20 mr-3 sm:mr-6"
            />
            <div className="flex-grow text-center sm:text-left mb-4 sm:mb-0">
              <h2 className="text-2xl font-bold text-[#2D1537]">
                Want to discuss how you can help Lupleg?
              </h2>
              <p className="text-[#37273e]">
                Get in touch with Mark Sikaundi, Lupleg's CEO.
              </p>
            </div>
            <Link href="mailto:mark@lupleg.org">
              <Button className="w-full sm:w-auto bg-[#2D1537] hover:bg-[#2D1537] text-white">
                <Mail className="mr-2 h-4 w-4" />
                mark@lupleg.org
              </Button>
            </Link>
          </div>
        </Card>

        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-2/3 space-y-4">
            <div className="flex items-center space-x-4">
              <Target className="text-[#2D1537] h-8 w-8" />
              <h2 className="text-3xl font-bold text-[#2D1537]">
                Support from our funders is crucial to achieving Lupleg's goals
              </h2>
            </div>
            <div className="border-t border-green-200 my-4"></div>
            <div className="space-y-4 text-black">
              <p>
                While much of Lupleg is run by our volunteer community, the
                website and core infrastructure are managed by a full-time team.
              </p>
              <p>
                We also undertake specific larger projects, such as the
                development of our automated analyzers, which require a
                committed team working more intensely on something over a fixed
                period of time.
              </p>
              <p>
                In order to fund this core team and these products we rely on
                grant funding from companies or organisation that wish to
                contribute to our vision of helping providing some free programming
                education for everyone while reserved other programs paid.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/support.svg"
              alt="Mountain with flag"
              width={300}
              height={300}
              className="rounded-full bg-purple-100 p-4"
            />
          </div>
        </div>
      </div>
      <BottomSection />
    </div>
  );
}
