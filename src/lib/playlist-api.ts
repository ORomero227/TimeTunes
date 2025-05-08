import { Song } from "@/types/song";
import { toast } from "sonner";

export const createPlaylist = async (playlistName: string, songs: Song[]) => {
  // Start the toast immediately when the function is called
  const promise = toast.promise(
    // This is the actual API call wrapped in a promise
    (async () => {
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

        // Return the playlist name for the success message
        return { name: playlistName };
      } catch (error) {
        console.error("Error creating playlist:", error);
        // Re-throw the error so toast.promise can catch it
        throw error;
      }
    })(),
    {
      loading: "Creating playlist...",
      success: (res: { name: string }) => {
        return `Playlist ${res.name} created successfully!`;
      },
      error: "Failed to create playlist",
    }
  );

  return promise;
};
