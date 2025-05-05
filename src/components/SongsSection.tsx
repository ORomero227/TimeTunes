import { Song } from "@/types/song";
import SongCard from "./songs/SongCard";

const billboardSongs: Song[] = [
  {
    id: 1,
    title: "Flowers",
    artist: "Miley Cyrus",
    image: "https://placehold.co/50x50",
    position: 1,
  },
  {
    id: 2,
    title: "Kill Bill",
    artist: "SZA",
    image: "https://placehold.co/75x75",
    position: 2,
  },
  {
    id: 1,
    title: "Flowers",
    artist: "Miley Cyrus",
    image: "https://placehold.co/50x50",
    position: 3,
  },
  {
    id: 2,
    title: "Kill Bill",
    artist: "SZA",
    image: "https://placehold.co/75x75",
    position: 4,
  },
  {
    id: 1,
    title: "Flowers",
    artist: "Miley Cyrus",
    image: "https://placehold.co/50x50",
    position: 5,
  },
  {
    id: 2,
    title: "Kill Bill",
    artist: "SZA",
    image: "https://placehold.co/75x75",
    position: 6,
  },
  {
    id: 1,
    title: "Flowers",
    artist: "Miley Cyrus",
    image: "https://placehold.co/50x50",
    position: 7,
  },
  {
    id: 2,
    title: "Kill Bill",
    artist: "SZA",
    image: "https://placehold.co/75x75",
    position: 8,
  },
];

export default function SongsSection() {
  return (
    <section className="mb-16 sm:mb-24">
      <div className="mb-6 sm:mb-10 flex items-center justify-between">
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight">
          🔥Top Hits from Your Date
        </h2>
      </div>

      {/* Cuadrícula de canciones */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        {billboardSongs.map((song, index) => (
          <SongCard key={index} song={song} />
        ))}
      </div>
    </section>
  );
}
