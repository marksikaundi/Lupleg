import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] ">
      <div className="container">
        <div className="">
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight ">
            Version 2.0 is here
          </div>
          <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6  ">
            Pathway to productivity
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6 ">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and help you reach your goals.
          </p>
          <div className="flex gap-1 items-center mt-[30px] mb-20 ">
            <button className="bg-green-950 p-3 rounded text-white ">
              Get for free
            </button>
            <button className="gap-1 ">
              <span>Learn more</span>
              <FaLongArrowAltRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="mt-20">
          <Image src="/cog.png" alt="cog" width={500} height={500} />
        </div>
      </div>
    </section>
  );
}
