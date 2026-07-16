"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/constants";

interface Token {
  text: string;
  color: string;
}

interface Line {
  tokens: Token[];
}

const code: Line[] = [
  {
    tokens: [
      { text: "export ", color: "text-blue-400" },
      { text: "const ", color: "text-blue-400" },
      { text: "developer", color: "text-cyan-300" },
      { text: " = {", color: "text-white/80" },
    ],
  },
  {
    tokens: [
      { text: "  name", color: "text-cyan-300" },
      { text: ': "', color: "text-white/40" },
      { text: "Aashika Pal", color: "text-orange-300" },
      { text: '",', color: "text-white/40" },
    ],
  },
  {
    tokens: [
      { text: "  role", color: "text-cyan-300" },
      { text: ': "', color: "text-white/40" },
      { text: "Full Stack Developer", color: "text-orange-300" },
      { text: '",', color: "text-white/40" },
    ],
  },
  {
    tokens: [
      { text: "  tech", color: "text-cyan-300" },
      { text: ": [", color: "text-white/80" },
    ],
  },
  {
    tokens: [
      { text: '    "', color: "text-white/40" },
      { text: "Next.js", color: "text-orange-300" },
      { text: '",', color: "text-white/40" },
    ],
  },
  {
    tokens: [
      { text: '    "', color: "text-white/40" },
      { text: "React", color: "text-orange-300" },
      { text: '",', color: "text-white/40" },
    ],
  },
  {
    tokens: [
      { text: '    "', color: "text-white/40" },
      { text: "TypeScript", color: "text-orange-300" },
      { text: '",', color: "text-white/40" },
    ],
  },
  {
    tokens: [
      { text: '    "', color: "text-white/40" },
      { text: "Python", color: "text-orange-300" },
      { text: '"', color: "text-white/40" },
    ],
  },
  {
    tokens: [
      { text: "  ];", color: "text-white/80" },
    ],
  },
  {
    tokens: [
      { text: "  currentlyBuilding", color: "text-cyan-300" },
      { text: ': "', color: "text-white/40" },
      { text: "Scalable Web Applications", color: "text-orange-300" },
      { text: '",', color: "text-white/40" },
    ],
  },
  {
    tokens: [
      { text: "  availableFor", color: "text-cyan-300" },
      { text: ': "', color: "text-white/40" },
      { text: "Software Engineering Internships", color: "text-orange-300" },
      { text: '"', color: "text-white/40" },
    ],
  },
  {
    tokens: [
      { text: "}", color: "text-white/80" },
    ],
  },
];

export default function CodeEditor() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  const CHAR_SPEED = 30;
  const LINE_PAUSE = 100;

  const getLineLength = (line: Line): number =>
    line.tokens.reduce((acc, t) => acc + t.text.length, 0);

  const getVisibleTokens = (line: Line, chars: number) => {
    const result: Token[] = [];
    let remaining = chars;
    for (const token of line.tokens) {
      if (remaining <= 0) break;
      const len = Math.min(remaining, token.text.length);
      result.push({ text: token.text.slice(0, len), color: token.color });
      remaining -= len;
    }
    return result;
  };

  useEffect(() => {
    if (done) return;

    if (lineIndex >= code.length) {
      setDone(true);
      return;
    }

    const line = code[lineIndex];
    const lineLen = getLineLength(line);

    if (charIndex < lineLen) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), CHAR_SPEED);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, LINE_PAUSE);
      return () => clearTimeout(t);
    }
  }, [lineIndex, charIndex, done]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.25, ease: EASE.out }}
      className="w-full max-w-[400px]"
    >
      <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-[#18181b]/70 backdrop-blur-xl shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(59,130,246,0.05)_inset]">
        <div className="flex items-center gap-2 border-b border-white/[0.05] px-3 py-2">
          <div className="flex gap-[5px]" aria-hidden>
            <div className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
            <div className="h-[9px] w-[9px] rounded-full bg-[#febb2e]" />
            <div className="h-[9px] w-[9px] rounded-full bg-[#28c840]" />
          </div>
          <div className="ml-1.5 rounded bg-white/[0.05] px-2 py-[1.5px] text-[9.5px] font-mono text-white/40">
            Hero.tsx
          </div>
        </div>

        <div className="overflow-x-auto p-3 font-mono text-[11.5px] leading-[1.7] sm:text-[12px] sm:leading-[1.65]">
          {code.slice(0, lineIndex).map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-2.5 w-[14px] shrink-0 text-right text-[9.5px] text-white/[0.1] select-none">
                {i + 1}
              </span>
              <span className="whitespace-pre">
                {line.tokens.map((t, j) => (
                  <span key={j} className={t.color}>{t.text}</span>
                ))}
              </span>
            </div>
          ))}

          {lineIndex < code.length && (
            <div className="flex">
              <span className="mr-2.5 w-[14px] shrink-0 text-right text-[9.5px] text-white/[0.1] select-none">
                {lineIndex + 1}
              </span>
              <span className="whitespace-pre">
                {getVisibleTokens(code[lineIndex], charIndex).map((t, j) => (
                  <span key={j} className={t.color}>{t.text}</span>
                ))}
                <span className="inline-block w-[1.5px] h-[1em] bg-white/50 ml-[1px] align-middle animate-[pulse_0.9s_step-end_infinite]" />
              </span>
            </div>
          )}

          {done && (
            <div className="flex">
              <span className="mr-2.5 w-[14px] shrink-0 text-right text-[9.5px] text-white/[0.1] select-none">
                {code.length + 1}
              </span>
              <span className="inline-block w-[1.5px] h-[1em] bg-white/40 ml-[1px] align-middle animate-[pulse_0.9s_step-end_infinite]" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
