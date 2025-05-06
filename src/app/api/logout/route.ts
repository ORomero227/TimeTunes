import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();

  (await cookieStore).delete("spotify_token");

  return NextResponse.redirect("http://localhost:3000");
}
