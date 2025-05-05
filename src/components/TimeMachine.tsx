"use client";
import SpotifyButton from "@/components/timeMachine/SpotifyButton";
import DateSelector from "@/components/timeMachine/DateSelector";
import { Dispatch, SetStateAction } from "react";
import { Song } from "@/types/song";

type TimeMachineProps = {
  setSongs: Dispatch<SetStateAction<Song[] | undefined>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export default function TimeMachine({
  setSongs,
  setLoading,
}: TimeMachineProps) {
  const fetchBillboardSongs = async (date: string) => {
    setLoading(true);
    const response = await fetch(`/api/billboard?date=${date}`);
    const data = await response.json();
    setSongs(data);
    setLoading(false);
  };

  return (
    <section className="mb-16 sm:mb-24" id="time-machine">
      <div className="container max-w-4xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-white/60 dark:bg-[#111111] backdrop-blur-md shadow-xl border border-white/80 dark:border-gray-800/50">
          {/* Columans */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column */}
            <div>
              <h3 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-slate-800 dark:text-white">
                Set Your Time Coordinates
              </h3>
              <p className="text-slate-600 dark:text-gray-300 mb-6">
                Want to keep the music? Connect with Spotify to save your
                playlist.
              </p>

              {/* Spotify Button */}
              <div className="mb-2">
                <SpotifyButton />
              </div>
            </div>
            {/* Right Column */}
            <div className="mb-4">
              <DateSelector onDateSubmit={fetchBillboardSongs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
