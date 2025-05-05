import { Song } from "@/types/song";

type SongCardProps = {
  song: Song;
};

export default function SongCard({ song }: SongCardProps) {
  return (
    <div className="overflow-hidden transition-all duration-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-900 dark:bg-[#111111] border-slate-200 flex items-center p-3 sm:p-4">
      {/* Número de posición */}
      <div className="w-8 sm:w-10 flex-shrink-0 text-center">
        <span className="text-lg sm:text-xl font-bold text-emerald-500 dark:text-emerald-400">
          {song.position}
        </span>
      </div>

      {/* Imagen */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-md overflow-hidden ml-2 sm:ml-3">
        <img
          src={song.image || "/placeholder.svg"}
          alt={`${song.title} by ${song.artist}`}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Información de la canción */}
      <div className="ml-3 sm:ml-4 flex-1 min-w-0">
        <h3 className="font-medium text-slate-800 dark:text-white text-base truncate">
          {song.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 truncate">
          {song.artist}
        </p>
      </div>
    </div>
  );
}
