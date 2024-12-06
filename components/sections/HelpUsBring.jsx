import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HelpUsBring() {
  return (
    <Card className="bg-blue-50 mt-10 border-none shadow-none">
      <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#2D1537]"
            >
              <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
              <path d="M16.5 9.4 7.55 4.24" />
              <polyline points="3.29 7 12 12 20.71 7" />
              <line x1="12" y1="22" x2="12" y2="12" />
              <circle cx="18.5" cy="15.5" r="2.5" />
              <path d="M20.27 17.27 22 19" />
            </svg>
            <h2 className="text-2xl font-bold text-[#2D1537]">
              Help us bring the joy of programming to everyone, everywhere
              <span className="text-yellow-400">✨</span>
            </h2>
          </div>
          <p className="text-black">
            We rely on open-source contributions and cash donations to achieve
            our mission. Can you spare some time or money to support our
            mission?
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#2D1537] hover:bg-[#2D1537] text-white">
              Donate to Lupleg
            </Button>
            <Button
              variant="outline"
              className="text-[#2D1537] border-purple-300 hover:bg-purple-100"
            >
              See tasks that need help <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/help.svg"
            alt="Illustration of a person holding a dollar sign balloon"
            width={150}
            height={150}
            className="rounded-full bg-blue-200"
          />
        </div>
      </CardContent>
    </Card>
  );
}
