import HeroSection from "@/components/hero/HeroSection";
import SongsSection from "@/components/SongsSection";
import TimeMachine from "@/components/TimeMachine";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8 lg:px-24">
      <HeroSection />
      <TimeMachine />
      <SongsSection />
    </div>
  );
}
