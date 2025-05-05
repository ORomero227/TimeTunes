import { Song } from "@/types/song";
import SongCard from "@/components/songs/SongCard";
import { Sparkles } from "lucide-react";

type SongsSectionProps = {
  billboardSongs: Song[] | undefined;
};

export default function SongsSection({ billboardSongs }: SongsSectionProps) {
  const noSongs = billboardSongs?.length === 0 || !billboardSongs;

  return (
    <section className="mb-16 sm:mb-24">
      <div className="mb-6 sm:mb-10 flex items-center justify-between">
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight">
          🔥Top Hits from Your Date
        </h2>
      </div>

      {/* Cuadrícula de canciones */}
      {noSongs ? (
        <div className="text-center py-10 px-4 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl bg-white/60 dark:bg-[#111111]">
          <Sparkles className="mx-auto mb-4 size-10 text-emerald-500 dark:text-emerald-400 animate-pulse" />
          <p className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
            Start your time travel!
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Select a date to discover the Billboard Top 100 hits of that time.
            🎶
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
          {billboardSongs.map((song, index) => (
            <SongCard key={index} song={song} />
          ))}
        </div>
      )}
    </section>
  );
}
