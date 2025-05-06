// src/app/api/me/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const token = (await cookies()).get("spotify_token")?.value;
  if (!token) {
    return NextResponse.json({ isAuth: false }, { status: 200 });
  }

  const res = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    return NextResponse.json({ isAuth: false }, { status: 401 });
  }

  const user = await res.json();
  return NextResponse.json({ isAuth: true, displayName: user.display_name });
}
