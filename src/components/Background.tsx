export function Background() {
  return (
    <div className="fixed inset-0 w-screen h-screen -z-10">
      {/* Fondo base */}
      <div className="absolute inset-0 w-full h-full bg-white dark:bg-black"></div>

      {/* Sombras verdes grandes y más visibles */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/20 dark:from-emerald-500/15 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-emerald-400/20 dark:from-emerald-600/15 via-transparent to-transparent"></div>

      {/* Sombra central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen rounded-full bg-emerald-300/10 dark:bg-emerald-700/10 blur-[150px]"></div>

      {/* Patrón sutil en toda la página */}
      <div className="absolute inset-0 w-full h-full opacity-10 dark:opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Bordes sutiles en toda la página */}
      <div className="absolute top-0 left-0 right-0 h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-500/30 dark:via-emerald-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-500/30 dark:via-emerald-500/20 to-transparent"></div>
    </div>
  );
}
