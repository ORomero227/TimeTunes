import { Song } from "@/types/song";
import CreatePlaylistForm from "@/components/playlist/CreatePlaylistForm";

type CreatePlaylistProps = {
  billboardSongs?: Song[];
};

export default function CreatePLaylist({
  billboardSongs,
}: CreatePlaylistProps) {
  const handleCreatePlaylist = async (playlistName: string, songs: Song[]) => {
    try {
      const response = await fetch("/api/create-playlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          playlistName: playlistName,
          billboardSongs: songs,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create playlist");
      }
    } catch (error) {
      console.error("Error creating playlist:", error);
    }
  };
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <div className="w-full max-w-md mx-auto">
        <div className="mb-6 text-center">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
            Save Your Time Hits
          </h3>
          <p className="text-slate-600 dark:text-gray-400">
            Create a Spotify playlist with these Billboard hits
          </p>
        </div>

        <CreatePlaylistForm
          billboardSongs={billboardSongs}
          createListPlaylist={handleCreatePlaylist}
        />
      </div>
    </div>
  );
}
