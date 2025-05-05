export default function EmptyBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center py-10 px-4 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl bg-white/60 dark:bg-[#111111]">
      {children}
    </div>
  );
}
