import ShortMentorships from "@/components/HeroCards/ShortMentorships";
import Programming from "@/components/HeroCards/Programming";
import HomeHero from "@/components/HomeHero";
import { IndieBoosting } from "@indieboosting/react";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <HomeHero />
      <Programming />
      <ShortMentorships />
      <IndieBoosting channelId="Q2ODFY2OLI" title="Lupleg Community" />
    </div>
  );
}
