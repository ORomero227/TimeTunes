import { delay } from "@/lib/utils";

// Function to add songs to a Spotify playlist
export async function addSongsToSpotifyPlaylist(
  token: string,
  playlistId: string,
  songIds: string[]
): Promise<boolean> {
  try {
    // Spotify API has a limit of 100 tracks per request
    // Let's handle our songs in smaller chunks of 25 to be safer with rate limits
    const chunkSize = 25;

    for (let i = 0; i < songIds.length; i += chunkSize) {
      const chunk = songIds.slice(i, i + chunkSize);
      console.log(
        `Adding chunk ${Math.floor(i / chunkSize) + 1} of ${Math.ceil(
          songIds.length / chunkSize
        )} (${chunk.length} songs)`
      );

      let retries = 3;
      let success = false;
      let waitTime = 1000; // Start with 1 second wait time

      // Try up to 3 times with exponential backoff for each chunk
      while (retries > 0 && !success) {
        try {
          const response = await fetch(
            `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                uris: chunk.map((id) => `spotify:track:${id}`),
              }),
            }
          );

          // Get the response body for more detailed error information
          const responseData = await response.json().catch(() => null);

          if (response.ok) {
            success = true;
            console.log(
              `Successfully added chunk ${Math.floor(i / chunkSize) + 1}`
            );
          } else if (response.status === 429) {
            // Handle rate limiting
            retries--;

            // Get retry time from header or use our exponential backoff
            const retryAfter = response.headers.get("Retry-After");
            waitTime = retryAfter
              ? parseInt(retryAfter, 10) * 1000
              : waitTime * 2;

            console.log(
              `Rate limited. Waiting ${waitTime}ms before retry. ${retries} retries left.`
            );
            await delay(waitTime);
          } else {
            console.error("Spotify API error details:", responseData);
            throw new Error(
              `Spotify add songs failed: ${
                response.statusText
              } - ${JSON.stringify(responseData)}`
            );
          }
        } catch (error) {
          retries--;
          if (retries <= 0) throw error;

          console.log(
            `Error occurred. Retrying in ${waitTime}ms. ${retries} retries left.`
          );
          await delay(waitTime);
          waitTime *= 2; // Exponential backoff
        }
      }

      if (!success) {
        throw new Error(
          `Failed to add chunk ${
            Math.floor(i / chunkSize) + 1
          } after multiple retries`
        );
      }

      // Add a delay between chunks to avoid hitting rate limits
      if (i + chunkSize < songIds.length) {
        const betweenChunkDelay = 1000; // 1 second between chunks
        console.log(`Waiting ${betweenChunkDelay}ms before next chunk...`);
        await delay(betweenChunkDelay);
      }
    }

    return true;
  } catch (error) {
    console.error("Error adding songs to playlist:", error);
    return false;
  }
}
