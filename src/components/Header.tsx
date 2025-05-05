"use client";

import { BookHeadphones, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";

export default function Header() {
  return (
    <header className="relative w-full overflow-hidden">
      <div className="relative z-40 border-b backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-24">
          <div className="flex items-center gap-2">
            <div className="hidden relative sm:flex items-center">
              <div className="absolute -inset-1 rounded-full blur-sm bg-slate-200/80 dark:bg-gray-700/50"></div>
              <BookHeadphones className="relative size-8 text-slate-700 dark:text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white sm:text-2xl">
              TimeTunes
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <Button className="sm:inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white border-0 shadow-md shadow-emerald-200/30 dark:shadow-emerald-900/30 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-200/60 dark:hover:shadow-emerald-900/40 transition-all">
              <Music className="size-4" />
              <span>Connect</span>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
