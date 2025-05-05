"use client";

import { useState } from "react";
import HeroSection from "@/components/hero/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import SongsSection from "@/components/SongsSection";
import TimeMachine from "@/components/TimeMachine";
import { Song } from "@/types/song";

export default function Home() {
  const [songs, setSongs] = useState<Song[] | undefined>();
  const [loading, setLoading] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8 lg:px-24">
      <HeroSection />
      <TimeMachine setSongs={setSongs} setLoading={setLoading} />
      <SongsSection billboardSongs={songs} loading={loading} />
      <HowItWorks />
    </div>
  );
}
