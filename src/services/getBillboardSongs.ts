import * as cheerio from "cheerio";
import { Song } from "@/types/song";

export const getBillboardSongs = async (date: string): Promise<Song[]> => {
  const url = `https://www.billboard.com/charts/hot-100/${date}`;

  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  const songs: Song[] = [];

  $("ul.o-chart-results-list-row").each((index, element) => {
    const title = $(element).find("h3.c-title").text().trim();
    const artist = $(element)
      .find("span.c-label.a-no-trucate")
      .first()
      .text()
      .trim();
    const image =
      $(element).find("img.c-lazy-image__img").attr("src") || undefined;

    if (title && artist) {
      songs.push({
        title,
        artist,
        image,
        position: index + 1,
      });
    }
  });

  return songs;
};
