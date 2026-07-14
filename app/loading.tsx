export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-[#09090B]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-9 w-9 animate-spin rounded-full border-2 border-white/10 border-t-white/70" />
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/50">
          Loading
        </p>
      </div>
    </div>
  );
}
