import { Headphones } from "lucide-react";

export function VinylRecord() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-square">
      {/* Círculos decorativos */}
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full border-2 border-dashed border-slate-200 dark:border-slate-700 opacity-60 animate-[spin_60s_linear_infinite]"></div>
      <div className="absolute top-20 -right-5 w-24 h-24 rounded-full border border-slate-200 dark:border-slate-700 opacity-60"></div>

      {/* Disco de vinilo */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Disco exterior */}
        <div className="relative w-[80%] aspect-square rounded-full bg-gradient-to-br from-slate-900 to-slate-800 dark:from-black dark:to-slate-900 shadow-xl animate-[spin_20s_linear_infinite]">
          {/* Surcos del disco */}
          <div className="absolute inset-[10%] rounded-full border border-slate-700 dark:border-slate-600"></div>
          <div className="absolute inset-[20%] rounded-full border border-slate-700 dark:border-slate-600"></div>
          <div className="absolute inset-[30%] rounded-full border border-slate-700 dark:border-slate-600"></div>
          <div className="absolute inset-[40%] rounded-full border border-slate-700 dark:border-slate-600"></div>

          {/* Centro del disco */}
          <div className="absolute inset-[45%] rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center">
            <div className="w-[30%] aspect-square rounded-full bg-slate-100 dark:bg-slate-400"></div>
          </div>

          {/* Etiqueta del disco */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full bg-emerald-500 dark:bg-emerald-600 flex items-center justify-center shadow-inner">
            <Headphones className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>

      {/* Ondas de sonido */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-16 flex items-end justify-around">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="bg-emerald-400 dark:bg-emerald-500 w-1.5 rounded-t-full animate-pulse"
            style={{
              height: `${Math.random() * 100}%`,
              animationDuration: `${0.8 + Math.random() * 1.2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Años flotantes */}
      <div className="absolute -top-8 right-10 px-3 py-1 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md text-sm font-medium text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
        1980s
      </div>
      <div className="absolute top-20 -left-4 px-3 py-1 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md text-sm font-medium text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
        1970s
      </div>
      <div className="absolute bottom-10 right-0 px-3 py-1 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md text-sm font-medium text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
        2000s
      </div>
    </div>
  );
}
