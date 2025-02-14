import ShortMentorships from "@/components/HeroCards/ShortMentorships";
import Programming from "@/components/HeroCards/Programming";
import HomeHero from "@/components/HomeHero";
import IndieCard from "@/components/IndieCard";
import KofiWidget from "@/components/KofiWidget";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <HomeHero />
      <Programming />
      <ShortMentorships />
      <IndieCard />
      <KofiWidget />
    </div>
  );
}
