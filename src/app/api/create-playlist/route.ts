import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createSpotifyPlaylistWithBillboardSongs } from "@/services/spotify/createPlaylistWithSongs";

export async function POST(request: Request) {
  // Get access token from cookies
  const cookieStore = cookies();
  const accessToken = (await cookieStore).get("spotify_token")?.value;

  if (!accessToken) {
    return NextResponse.json(
      { error: "No access token found. Please log in to Spotify." },
      { status: 401 }
    );
  }

  try {
    // Parse the request body to get the date
    const body = await request.json();
    const { playlistName, billboardSongs } = body;

    if (!playlistName) {
      return NextResponse.json(
        { error: "Playlistname is required." },
        { status: 400 }
      );
    }

    if (!billboardSongs) {
      return NextResponse.json(
        { error: "Billboard songs are required." },
        { status: 400 }
      );
    }

    // Create playlist
    const playlistUrl = await createSpotifyPlaylistWithBillboardSongs(
      accessToken,
      billboardSongs,
      playlistName
    );

    if (!playlistUrl) {
      return NextResponse.json(
        { error: "Failed to create playlist." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Playlist created successfully.",
        playlistUrl,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating playlist:", error);
    return NextResponse.json(
      { error: "Failed to create playlist." },
      { status: 500 }
    );
  }
}
