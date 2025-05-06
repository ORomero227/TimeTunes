import { NextResponse } from "next/server";

const client_id = process.env.SPOTIFY_CLIENT_ID!;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI!;
const scope = "playlist-modify-public playlist-modify-private";

export async function GET() {
  const state = Math.random().toString(36).substring(2, 15);
  const authUrl = new URL("https://accounts.spotify.com/authorize");
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("client_id", client_id);
  authUrl.searchParams.set("scope", scope);
  authUrl.searchParams.set("redirect_uri", redirect_uri);
  authUrl.searchParams.set("state", state);

  return NextResponse.redirect(authUrl.toString());
}
