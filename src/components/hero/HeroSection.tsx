import HeroInfo from "@/components/hero/HeroInfo";
import { VinylRecord } from "./VinylRecord";

export default function HeroSection() {
  return (
    <section className="pt-14 mb-10 sm:mb-16 lg:mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <HeroInfo />
        </div>
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <VinylRecord />
        </div>
      </div>
    </section>
  );
}
