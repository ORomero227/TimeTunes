import { Song } from "@/types/song";
import CreatePlaylistForm from "@/components/playlist/CreatePlaylistForm";
import { createPlaylist } from "@/lib/playlist-api";

type CreatePlaylistProps = {
  billboardSongs?: Song[];
};

export default function CreatePLaylist({
  billboardSongs,
}: CreatePlaylistProps) {
  async function handleCreatePlaylist(playlistName: string, songs: Song[]) {
    await createPlaylist(playlistName, songs);
  }

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
