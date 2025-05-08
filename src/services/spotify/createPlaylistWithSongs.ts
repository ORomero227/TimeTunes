import { Song } from "@/types/song";
import { getCurrentUserSpotifyProfile } from "@/services/spotify/getCurrentProfile";
import { createSpotifyPlaylist } from "@/services/spotify/createPlaylist";
import { searchSpotifySong } from "@/services/spotify/searchSong";
import { addSongsToSpotifyPlaylist } from "@/services/spotify/addSongToPlaylist";

// Function to create playlist utilizing the billboard songs
export async function createSpotifyPlaylistWithBillboardSongs(
  token: string,
  songs: Song[],
  playlistName: string
): Promise<string | null> {
  try {
    // Get the current user profile
    const userProfile = await getCurrentUserSpotifyProfile(token);
    if (!userProfile) {
      throw new Error("Failed to fetch user profile");
    }

    // Create a new playlist
    const newPlaylistName =
      playlistName || `Billboard Songs ${new Date().toLocaleDateString()}`;

    const playlistId = await createSpotifyPlaylist(
      token,
      userProfile.id,
      newPlaylistName
    );
    if (!playlistId) {
      throw new Error("Failed to create playlist");
    }

    // Search for each song and add it to the playlist
    const songPromises = songs.map((song) =>
      searchSpotifySong(token, song.title, song.artist)
    );

    const songIds = (await Promise.all(songPromises)).filter(
      (id) => id !== null
    ) as string[];

    console.log(
      `Found ${songIds.length} out of ${songs.length} songs on Spotify.`
    );

    if (songIds.length === 0) {
      throw new Error("No songs found on Spotify to add to the playlist.");
    }

    try {
      const added = await addSongsToSpotifyPlaylist(token, playlistId, songIds);

      if (!added) {
        return `Playlist created with ${songIds.length} songs, but some songs couldn't be added.
        `;
      }

      return `Playlist created with ${songIds.length} songs. Check it out on Spotify!`;
    } catch (error) {
      console.warn("Failed to add songs automatically to the playlist", error);
      return `Playlist created with ${songIds.length} songs, but some songs couldn't be added.`;
    }
  } catch (error) {
    console.error("Error creating playlist with songs:", error);
    return null;
  }
}
