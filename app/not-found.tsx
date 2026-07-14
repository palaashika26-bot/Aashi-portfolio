import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#09090B] px-6 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid mask-radial-fade opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(59,130,246,0.30), transparent 70%)",
        }}
      />
      <div className="relative z-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/50">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-[52px] font-semibold leading-none tracking-tight text-gradient sm:text-[76px]">
          Not found.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/55">
          The page you're looking for has drifted somewhere between commits.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-medium text-black transition-transform hover:scale-[1.02]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>
      </div>
    </main>
  );
}
