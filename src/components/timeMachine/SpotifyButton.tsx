"use client";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function SpotifyButton() {
  const [displayName, setDisplayName] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.isAuth) {
          setDisplayName(data.displayName);
        }
      });
  }, []);

  return (
    <button
      className="group relative w-full overflow-hidden rounded-xl bg-black text-white p-1 transition-all hover:shadow-lg hover:shadow-slate-300/20 dark:hover:shadow-black/40 cursor-pointer"
      onClick={() => {
        window.location.href = "/api/login";
      }}
    >
      {/* Contenido del botón */}
      <div className="relative flex items-center justify-between bg-black rounded-lg px-5 py-4">
        <div className="flex items-center gap-3">
          {/* Logo de Spotify */}
          <div className="hidden sm:flex flex-shrink-0 w-10 h-10 rounded-full bg-[#1DB954] items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-white"
              fill="currentColor"
            >
              <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.5576 16.6777C16.3319 17.0449 15.8628 17.1553 15.4956 16.9296C13.4553 15.6496 10.8829 15.4281 7.53141 16.2276C7.11946 16.3292 6.70246 16.0662 6.60087 15.6543C6.49928 15.2423 6.76229 14.8253 7.17424 14.7237C10.8426 13.8522 13.7484 14.1202 16.0057 15.5157C16.3729 15.7414 16.4833 16.2105 16.2576 16.5777ZM17.7379 13.8528C17.4548 14.3071 16.8682 14.4451 16.4139 14.162C14.0474 12.7015 10.5371 12.3498 7.52096 13.3373C7.01254 13.4933 6.48378 13.1982 6.32772 12.6898C6.17166 12.1814 6.46678 11.6526 6.97521 11.4966C10.4903 10.3565 14.4984 10.7643 17.2287 12.4288C17.683 12.7119 17.821 13.2985 17.5379 13.7528ZM17.8345 10.9374C15.0165 9.23069 9.83949 9.03604 7.16747 9.89255C6.56112 10.0766 5.91908 9.72905 5.73501 9.1227C5.55094 8.51635 5.89847 7.87431 6.50482 7.69024C9.59668 6.70219 15.3595 6.93791 18.6443 8.91997C19.1919 9.25896 19.3825 9.96582 19.0435 10.5134C18.7045 11.061 17.9977 11.2516 17.4501 10.9126C17.4452 10.9093 17.4404 10.9059 17.4356 10.9025L17.8345 10.9374Z" />
            </svg>
          </div>
          <div className="text-left">
            {displayName ? (
              <>
                <p className="text-sm text-gray-300">Connected as</p>
                <p className="font-bold text-lg">{displayName}</p>
              </>
            ) : (
              <>
                <p className="text-sm text-gray-300">Connect with</p>
                <p className="font-bold text-lg">Spotify</p>
              </>
            )}
          </div>
        </div>
        <div className="bg-[#1DB954] rounded-full p-2 sm:p-3 transition-transform group-hover:translate-x-1">
          <ArrowRight className="h-5 w-5" />
        </div>
      </div>
    </button>
  );
}
