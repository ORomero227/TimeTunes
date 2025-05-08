const SPOTIFY_API_URL = "https://api.spotify.com/v1";

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
