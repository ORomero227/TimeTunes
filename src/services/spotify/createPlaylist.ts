const SPOTIFY_API_URL = "https://api.spotify.com/v1";

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
          description: "Created By TimeTunes",
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
