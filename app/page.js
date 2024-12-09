import ShortMentorships from "@/components/HeroCards/ShortMentorships";
import WelcomeHero from "@/components/NewHero/WelcomeHero";
import WhatWeDo from "@/components/NewHero/WhatWeDo";
import DemoView from "@/components/NewHero/DemoView";
import New from "@/components/NewHero/New";
import Programming from "@/components/HeroCards/Programming";
import HomeHero from "@/components/HomeHero";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <HomeHero />
      {/* <New /> */}
      <Programming />
      {/* <WelcomeHero /> */}
      {/* <WhatWeDo /> */}
      {/* <DemoView /> */}
      <ShortMentorships />
    </div>
  );
}
