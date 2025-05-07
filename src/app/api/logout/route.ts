import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

  (await cookieStore).delete("spotify_token");

  return NextResponse.redirect(baseUrl);
}
