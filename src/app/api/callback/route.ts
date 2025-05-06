import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  const client_id = process.env.SPOTIFY_CLIENT_ID!;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
  const redirect_uri = process.env.SPOTIFY_REDIRECT_URI!;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code: code!,
    redirect_uri,
    client_id,
    client_secret,
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  const data = await res.json();

  if (data.access_token) {
    const response = NextResponse.redirect(baseUrl);

    // ✅ Guardar token en cookie segura
    response.cookies.set("spotify_token", data.access_token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 3600, // 1 hora
      path: "/",
    });

    return response;
  } else {
    return NextResponse.json({ error: "Token fetch failed" }, { status: 500 });
  }
}
