import { BookHeadphones } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-gray-800 py-8 sm:py-10">
      <div className="container mx-auto px-4 lg:px-24">
        <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <BookHeadphones className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700 dark:text-gray-100" />
            <span className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">
              TimeTunes
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400">
            © {new Date().getFullYear()} Oscar Romero Barbosa
          </p>
        </div>
      </div>
    </footer>
  );
}
