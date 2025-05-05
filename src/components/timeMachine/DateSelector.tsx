"use client";
import { Clock, AudioWaveform } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChangeEvent, FormEvent, useState } from "react";

type TimeMachineProps = {
  onDateSubmit: (date: string) => void;
};

export default function DateSelector({ onDateSubmit }: TimeMachineProps) {
  const [formData, setFormData] = useState({ date: "" });
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { date } = formData;
    if (date) {
      onDateSubmit(date);
      setFormData({ date: "" });
    }

    setFormData({ date: "" });
  }

  return (
    <>
      <div className="text-left mb-4">
        <span className="text-sm font-medium text-slate-700 dark:text-gray-300 flex items-center gap-2">
          <Clock className="size-4 text-emerald-500 dark:text-emerald-400" />
          Transport to any date
        </span>
        <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">
          Choose a date to discover the music that was popular at that time.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            max={today}
            min={"1900-01-01"}
            className="w-full rounded-lg border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] px-4 py-3 text-slate-800 dark:text-white focus:border-emerald-500 dark:focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:focus:ring-emerald-600"
          />
        </div>

        <Button
          variant="default"
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600 text-white py-6 rounded-lg font-medium hover:from-emerald-600 hover:to-teal-600 dark:hover:from-emerald-700 dark:hover:to-teal-700 transition-all flex items-center justify-center gap-2"
        >
          <span>Discover the Hits</span>
          <AudioWaveform className="size-4" />
        </Button>
      </form>
    </>
  );
}
