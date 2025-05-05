import { Calendar, ListMusic, Music, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import StepCard from "@/components/howWorks/StepCard";
import Link from "next/link";

const steps = [
  {
    title: "Select a Date",
    description: "Choose a date from the calendar to find the hits.",
    Icon: Calendar,
  },
  {
    title: "Scrap Billboard",
    description: "We scrape the Billboard Hot 100 chart for the selected date.",
    Icon: Search,
  },
  {
    title: "View Playlist",
    description: "See the top 100 songs from that dates",
    Icon: ListMusic,
  },
  {
    title: "Connect to Spotify",
    description: "Optionally connect to Spotify to save your playlist.",
    Icon: Music,
  },
];

export default function HowItWorks() {
  return (
    <section
      className="my-24 sm:mb-20 rounded-lg border border-slate-50 dark:border-none"
      id="how-it-works"
    >
      <div className="relative p-6 sm:p-10 md:p-12 flex flex-col items-center">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center mb-3 px-3 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              Simple Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
              How TimeTunes Works
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-slate-600 dark:text-gray-300">
              Discover the Billboard Hot 100 hits from any date in just a few
              simple steps
            </p>
          </div>

          <div className="mb-8 grid gap-6 sm:gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                title={step.title}
                description={step.description}
                Icon={step.Icon}
              />
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700 border-0 shadow-md shadow-emerald-200/50 dark:shadow-emerald-900/30 hover:shadow-lg hover:shadow-emerald-200/60 dark:hover:shadow-emerald-900/40 transition-all text-white">
              <Link href="#time-machine">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
