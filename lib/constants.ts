export const EASE = {
  out: [0.22, 1, 0.36, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  outSoft: [0.16, 1, 0.3, 1] as const,
};

export const DURATION = {
  fast: 0.35,
  base: 0.6,
  slow: 0.9,
  hero: 1.05,
};

export const ACCENT_MAP = {
  blue: "from-[#3B82F6]/60 to-[#8B5CF6]/40",
  violet: "from-[#8B5CF6]/60 to-[#EC4899]/30",
  cyan: "from-[#22D3EE]/60 to-[#3B82F6]/30",
  amber: "from-[#F59E0B]/50 to-[#EF4444]/30",
  rose: "from-[#F43F5E]/50 to-[#8B5CF6]/30",
  emerald: "from-[#10B981]/50 to-[#3B82F6]/30",
} as const;

export const ACCENT_DOT = {
  blue: "bg-[#3B82F6] shadow-[0_0_12px_2px_rgba(59,130,246,0.65)]",
  violet: "bg-[#8B5CF6] shadow-[0_0_12px_2px_rgba(139,92,246,0.65)]",
  cyan: "bg-[#22D3EE] shadow-[0_0_12px_2px_rgba(34,211,238,0.65)]",
  amber: "bg-[#F59E0B] shadow-[0_0_12px_2px_rgba(245,158,11,0.65)]",
  rose: "bg-[#F43F5E] shadow-[0_0_12px_2px_rgba(244,63,94,0.65)]",
  emerald: "bg-[#10B981] shadow-[0_0_12px_2px_rgba(16,185,129,0.65)]",
} as const;
