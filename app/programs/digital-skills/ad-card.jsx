import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function AsCard() {
  return (
    <div className="min-h-screen  text-white p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <Card className="bg-[#13132B] my-8 border-gray-700">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src="/skills/office.svg"
                alt="Office 365"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    Office 365
                  </h2>
                  <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                </div>
                <p className="text-green-400 text-sm mb-3 text-center sm:text-left">
                  04 Modules
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  Learn how to how to use Office 365 applications. Get started
                  with the Office 365 Module today.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/digital-skills/office365 ">
                    <Button variant="secondary" size="sm">
                      View →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#13132B] my-8 border-gray-700">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src="/skills/docs.svg"
                alt="Google Workspace"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    Google Workspace(GSuite)
                  </h2>
                  <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                </div>
                <p className="text-green-400 text-sm mb-3 text-center sm:text-left">
                  06 Modules
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  Learn how to use Google Workspace applications. Get started
                  with the Google Workspace Module today.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/digital-skills/google-suits">
                    <Button variant="secondary" size="sm">
                      View →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#13132B] my-8 border-gray-700">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src="/skills/marketing.svg"
                alt="Digital Marketing"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    Digital Marketing
                  </h2>
                  <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                </div>
                <p className="text-green-400 text-sm mb-3 text-center sm:text-left">
                  08 Modules
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  Learn how to use Digital Marketing applications. Get started
                  with the Digital Marketing Module today.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/digital-skills/digital-marketing">
                    <Button variant="secondary" size="sm">
                      View →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#13132B] my-8 border-gray-700">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src="/skills/freelance.svg"
                alt="Freelancing for Beginners"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    Freelancing for Beginners
                  </h2>
                  <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                </div>
                <p className="text-green-400 text-sm mb-3 text-center sm:text-left">
                  02 Modules
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  Learn how to use Freelancing applications. Get started with the
                  Freelancing Module today.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/digital-skills/freelancing  ">
                    <Button variant="secondary" size="sm">
                      View →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
