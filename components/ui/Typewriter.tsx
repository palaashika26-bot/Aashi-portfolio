"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseFull?: number;
  pauseEmpty?: number;
}

export default function Typewriter({
  words,
  className,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseFull = 1400,
  pauseEmpty = 300,
}: TypewriterProps) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const current = words[i % words.length];
    const speed = deleting ? deletingSpeed : typingSpeed;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pauseFull);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setI((v) => v + 1);
      }, pauseEmpty);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setText((prev) =>
        deleting
          ? current.slice(0, prev.length - 1)
          : current.slice(0, prev.length + 1)
      );
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, words, typingSpeed, deletingSpeed, pauseFull, pauseEmpty]);

  return <span className={cn("caret", className)}>{text}</span>;
}
