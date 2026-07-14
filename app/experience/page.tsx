import Link from "next/link";
import { ArrowLeft, GraduationCap, Briefcase } from "lucide-react";
import Background from "@/components/layout/Background";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";

const KIND_ICON = {
  work: Briefcase,
  internship: Briefcase,
  freelance: Briefcase,
  education: GraduationCap,
} as const;

const KIND_LABEL = {
  work: "Full-time",
  internship: "Internship",
  freelance: "Freelance",
  education: "Education",
} as const;

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#09090B]">
      <Background />
      <Navbar />
      <main className="relative pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#09090B]/80 px-4 py-2 text-[13px] text-white/70 backdrop-blur transition-all hover:border-white/25 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to home
          </Link>

          <h1 className="mt-8 font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            My journey so far.
          </h1>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/60 md:text-[16px]">
            From learning the basics of programming to building full-stack applications — a timeline of my growth as a developer.
          </p>

          <div className="mt-14">
            <div className="relative ml-3 md:ml-6">
              <div className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-white/25 via-white/8 to-transparent md:left-4" />
              <ul className="space-y-10">
                {experience.map((item, i) => {
                  const Icon = KIND_ICON[item.kind];
                  return (
                    <li
                      key={item.id}
                      className="relative pl-10 md:pl-14"
                    >
                      <span className="absolute left-0 top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#0F0F12] text-white/70 md:left-1 md:h-8 md:w-8">
                        <Icon className="h-3.5 w-3.5" />
                      </span>

                      {item.current && (
                        <span className="absolute left-3 top-4 flex h-2 w-2 md:left-4">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                      )}

                      <div className="group rounded-2xl border border-white/8 bg-[#0D0D10]/60 p-5 backdrop-blur-sm transition-colors hover:border-white/20 md:p-6">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                          <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
                            {KIND_LABEL[item.kind]}
                          </span>
                          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
                            {item.period}
                          </span>
                          {item.current && (
                            <span className="ml-auto rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                              Current
                            </span>
                          )}
                        </div>

                        <h3 className="mt-3 font-display text-[19px] font-semibold tracking-tight text-white md:text-[22px]">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-[13.5px] text-white/60">
                          {item.company} · <span className="text-white/40">{item.location}</span>
                        </p>

                        <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-white/70">
                          {item.summary}
                        </p>

                        <ul className="mt-4 space-y-2">
                          {item.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-3 text-[13.5px] text-white/70">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                              {h}
                            </li>
                          ))}
                        </ul>

                        {item.tech && item.tech.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-1.5">
                            {item.tech.map((t) => (
                              <span
                                key={t}
                                className={cn(
                                  "rounded-full border border-white/8 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/65"
                                )}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
