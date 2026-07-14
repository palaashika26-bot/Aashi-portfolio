export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#09090B]"
    >
      {/* Faint grid, fades to center */}
      <div className="absolute inset-0 bg-grid mask-radial-fade opacity-70" />

      {/* Top blue glow */}
      <div
        className="absolute -top-40 left-1/2 h-[720px] w-[1100px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(59,130,246,0.35), rgba(59,130,246,0.10) 55%, transparent 75%)",
        }}
      />

      {/* Purple secondary glow */}
      <div
        className="absolute top-[40vh] -right-40 h-[600px] w-[820px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,92,246,0.30), rgba(139,92,246,0.06) 55%, transparent 75%)",
        }}
      />

      {/* Deep bottom glow */}
      <div
        className="absolute -bottom-60 left-10 h-[560px] w-[720px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(59,130,246,0.22), transparent 70%)",
        }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
