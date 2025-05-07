import { Song } from "@/types/song";

const SPOTIFY_API_URL = "https://api.spotify.com/v1";

// Function to search for a song on Spotify
export async function searchSpotifySong(
  token: string,
  title: string,
  artist: string
): Promise<string | null> {
  try {
    const query = encodeURIComponent(`track:${title} artis:${artist}`);
    const response = await fetch(
      `${SPOTIFY_API_URL}/search?q=${query}&type=track&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Spotify search failed: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.tracks.items.length === 0) {
      console.log(`No track found for ${title} by ${artist}`);
      return null;
    }

    return data.tracks.items[0].id;
  } catch (error) {
    console.error("Error searching for track:", error);
    return null;
  }
}

// Function to create a playlist on Spotify
export async function createSpotifyPlaylist(
  token: string,
  userId: string,
  playlistName: string
): Promise<string | null> {
  try {
    const response = await fetch(
      `${SPOTIFY_API_URL}/users/${userId}/playlists`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: playlistName,
          public: true,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Spotify playlist creation failed: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.id;
  } catch (error) {
    console.error("Error creating playlist:", error);
    return null;
  }
}

// Function to add songs to a Spotify playlist
export async function addSongsToSpotifyPlaylist(
  token: string,
  playlistId: string,
  songIds: string[]
): Promise<boolean> {
  try {
    const response = await fetch(
      `${SPOTIFY_API_URL}/playlists/${playlistId}/tracks`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uris: songIds,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Spotify add songs failed: ${response.statusText}`);
    }

    return true;
  } catch (error) {
    console.error("Error adding songs to playlist:", error);
    return false;
  }
}

// Function to get the current user spotify profile
export async function getCurrentUserSpotifyProfile(
  token: string
): Promise<{ id: string; name: string } | null> {
  try {
    const response = await fetch(`${SPOTIFY_API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Spotify user profile fetch failed: ${response.statusText}`
      );
    }

    const data = await response.json();
    return { id: data.id, name: data.display_name };
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}

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

    // Add songs to the playlist
    const added = await addSongsToSpotifyPlaylist(token, playlistId, songIds);
    if (!added) {
      throw new Error("Failed to add songs to the playlist.");
    }

    return `Playlist created successfully check it out here: https://open.spotify.com/playlist/${playlistId}`;
  } catch (error) {
    console.error("Error creating playlist with songs:", error);
    return null;
  }
}
