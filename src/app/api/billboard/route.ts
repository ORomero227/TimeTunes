import { getBillboardSongs } from "@/services/getBillboardSongs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date") || undefined;

  if (!date) {
    return NextResponse.json({ error: "Date is required" }, { status: 400 });
  }

  try {
    const songs = await getBillboardSongs(date);

    if (!songs) {
      return NextResponse.json(
        { error: "No songs found for the given date" },
        { status: 404 }
      );
    }

    return NextResponse.json(songs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch billboard songs" },
      { status: 500 }
    );
  }
}
