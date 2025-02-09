import ShortMentorships from "@/components/HeroCards/ShortMentorships";
import Programming from "@/components/HeroCards/Programming";
import HomeHero from "@/components/HomeHero";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <HomeHero />
      <Programming />
      <ShortMentorships />
    </div>
  );
}
