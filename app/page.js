import ShortMentorships from "@/components/HeroCards/ShortMentorships";
import WelcomeHero from "@/components/NewHero/WelcomeHero";
import WhatWeDo from "@/components/NewHero/WhatWeDo";
import DemoView from "@/components/NewHero/DemoView";
import Head from "@/components/Head";
import New from "@/components/NewHero/New";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <New />
      <Head />
      <WelcomeHero />
      <WhatWeDo />
      <DemoView />
      <ShortMentorships />
    </div>
  );
}
