import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { ListPlusIcon } from "lucide-react";
import { Song } from "@/types/song";
import { Input } from "@/components/ui/input";

type CreatePlaylistFormProps = {
  billboardSongs?: Song[];
  createListPlaylist: (playlistName: string, songs: Song[]) => void;
};

export default function CreateButton({
  billboardSongs,
  createListPlaylist,
}: CreatePlaylistFormProps) {
  const [formData, setFormData] = useState({ playlistName: "" });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { playlistName } = formData;

    if (playlistName.trim()) {
      try {
        createListPlaylist(playlistName, billboardSongs || []);
      } catch (error) {
        console.error("Error creating playlist:", error);
      } finally {
        setFormData({ playlistName: "" });
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <Input
            type="text"
            name="playlistName"
            value={formData.playlistName}
            onChange={handleChange}
            placeholder="Enter playlist name"
            className="w-full rounded-lg border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] px-4 py-3 text-slate-800 dark:text-white focus:border-emerald-500 dark:focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:focus:ring-emerald-600"
          />
        </div>

        <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:from-emerald-600 hover:to-teal-600 dark:hover:from-emerald-700 dark:hover:to-teal-700 transition-all flex items-center justify-center gap-2">
          <ListPlusIcon className="h-5 w-5" />
          <span>Create Playlist</span>
        </Button>
      </div>
    </form>
  );
}
