"use client";

import { Song } from "@/types/song";
import SongCard from "@/components/songs/SongCard";
import { Sparkles } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import EmptyBox from "@/components/songs/EmptyBox";
import CreatePLaylist from "./playlist/CreatePLaylist";
import { useState, useEffect } from "react";

type SongsSectionProps = {
  billboardSongs: Song[] | undefined;
  loading?: boolean;
};

export default function SongsSection({
  billboardSongs,
  loading,
}: SongsSectionProps) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/api/me");
      const data = await res.json();
      if (res.ok) {
        setIsAuth(data.isAuth);
      }
    };

    checkAuth();
  }, []);

  const noSongs = billboardSongs?.length === 0 || !billboardSongs;

  return (
    <section className="mb-16 sm:mb-24">
      <div className="mb-6 sm:mb-10 flex items-center justify-between">
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight">
          🔥Top Hits from Your Date
        </h2>
      </div>

      {/* Cuadrícula de canciones */}
      {loading ? (
        <EmptyBox>
          <Spinner />
        </EmptyBox>
      ) : noSongs ? (
        <EmptyBox>
          <Sparkles className="mx-auto mb-4 size-10 text-emerald-500 dark:text-emerald-400 animate-pulse" />
          <p className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
            Start your time travel!
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Select a date to discover the Billboard Top 100 hits of that time.
            🎶
          </p>
        </EmptyBox>
      ) : (
        <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-gray-100 dark:scrollbar-track-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            {billboardSongs.map((song, index) => (
              <SongCard key={index} song={song} />
            ))}
          </div>
        </div>
      )}

      {isAuth && Array.isArray(billboardSongs) && billboardSongs.length > 0 && (
        <CreatePLaylist billboardSongs={billboardSongs} />
      )}
    </section>
  );
}
