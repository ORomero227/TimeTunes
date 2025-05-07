const SPOTIFY_API_URL = "https://api.spotify.com/v1";

// Function to search for a song on Spotify
export async function searchSpotifySong(
  token: string,
  title: string,
  artist: string
): Promise<string | null> {
  try {
    // Clean title and artist strings
    const cleanTitle = title.replace(/\(.*?\)/g, "").trim(); // Remove anything in parentheses
    const cleanArtist = artist.replace(/(Presents|Featuring|&.*)/gi, "").trim();

    const searchQuery = encodeURIComponent(
      `track:"${cleanTitle}" artist:"${cleanArtist}"`
    );

    const response = await fetch(
      `${SPOTIFY_API_URL}/search?q=${searchQuery}&type=track&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      return null; // Return null if the search fails
    }

    const data = await response.json();

    // If song matches are found with title and artist
    if (data.tracks.items.length > 0) {
      return data.tracks.items[0].id;
    }

    // If no exact match is found, try with a title-only search
    const titleSearchQuery = encodeURIComponent(`track:"${cleanTitle}"`);

    const titleSearchResponse = await fetch(
      `${SPOTIFY_API_URL}/search?q=${titleSearchQuery}&type=track&limit=5`, // Increasing limit to check multiple results
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!titleSearchResponse.ok) {
      return null; // Return null if the title search fails
    }

    const titleSearchData = await titleSearchResponse.json();

    if (titleSearchData.tracks.items.length > 0) {
      // Fixed: Added return statement in the callback function
      const foundSong = titleSearchData.tracks.items.find((song: any) =>
        song.name.toLowerCase().includes(cleanTitle.toLowerCase())
      );

      if (foundSong) {
        return foundSong.id;
      }

      // If no specific match found in the filtered results, return the first result
      return titleSearchData.tracks.items[0].id;
    }
    return null;
  } catch (error) {
    console.error("Error searching for track:", error);
    return null;
  }
}
