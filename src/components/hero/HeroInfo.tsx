import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroInfo() {
  return (
    <div className="text-left">
      <div className="inline-block mb-2 px-3 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium backdrop-blur-sm">
        Musical Time Travel
      </div>
      <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
        Travel back to the{" "}
        <span className="text-slate-900 dark:text-white">
          soundtrack of any era
        </span>
      </h2>
      <p className="mb-8 sm:mb-10 max-w-xl text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
        Relive the soundtrack of any era with TimeTunes. Just pick a date, and
        we'll generate a Spotify playlist using the Billboard hits from that
        time instantly transporting you to the music that defined that moment in
        history.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 shadow-md shadow-emerald-200/50 dark:shadow-emerald-900/30 hover:shadow-lg hover:shadow-emerald-200/60 dark:hover:shadow-emerald-900/40 transition-all">
          <Link href="#time-machine">Get Started</Link>
        </Button>
        <Button
          variant="outline"
          className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Link href="#how-it-works">Learn More</Link>
        </Button>
      </div>
    </div>
  );
}
