import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { ACCENT_MAP } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Background from "@/components/layout/Background";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Project } from "@/types";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

const statusAccents: Record<string, string> = {
  blue: "text-[#60A5FA] border-[#3B82F6]/30 bg-[#3B82F6]/10",
  violet: "text-[#C084FC] border-[#8B5CF6]/30 bg-[#8B5CF6]/10",
  cyan: "text-[#22D3EE] border-[#06B6D4]/30 bg-[#06B6D4]/10",
  amber: "text-[#FBBF24] border-[#D97706]/30 bg-[#D97706]/10",
  rose: "text-[#F87171] border-[#F43F5E]/30 bg-[#F43F5E]/10",
  emerald: "text-[#34D399] border-[#10B981]/30 bg-[#10B981]/10",
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#09090B]">
      <Background />
      <Navbar />
      <main className="relative pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09090B]/60 to-[#09090B] z-10" />
          <div className={cn("absolute inset-0 bg-gradient-to-br opacity-30 mix-blend-screen", ACCENT_MAP[project.accent])} />
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            <img
              src={project.cover}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/30 to-transparent" />
          </div>

          <div className="relative z-20 -mt-32 md:-mt-40">
            <div className="mx-auto max-w-6xl px-6">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#09090B]/80 px-4 py-2 text-[13px] text-white/70 backdrop-blur transition-all hover:border-white/25 hover:text-white"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Projects
              </Link>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-white/12 bg-black/30 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/85 backdrop-blur">
                  {project.year}
                </span>
                {project.status && (
                  <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 font-sans text-[10.5px] font-medium uppercase tracking-[0.14em] backdrop-blur", statusAccents[project.accent])}>
                    {project.status}
                  </span>
                )}
                <span className="inline-flex items-center rounded-full border border-white/12 bg-black/30 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/85 backdrop-blur">
                  {project.role}
                </span>
                <span className="inline-flex items-center rounded-full border border-white/12 bg-black/30 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/85 backdrop-blur">
                  {project.duration}
                </span>
              </div>

              <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-white/60 md:text-[16px]">
                {project.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="pb-32 pt-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="space-y-12 md:col-span-2">
                <div>
                  <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
                    Overview
                  </h2>
                  <p className="mt-4 text-[15px] leading-[1.8] text-white/70">
                    {project.overview}
                  </p>
                </div>

                <div>
                  <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
                    Highlights
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[14.5px] text-white/75">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/45" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
                    Challenges
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {project.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-[14.5px] text-white/75">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/45" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.gallery.length > 1 && (
                  <div>
                    <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
                      Gallery
                    </h2>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {project.gallery.map((g, i) => (
                        <div
                          key={i}
                          className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/8"
                        >
                          <img
                            src={g}
                            alt={`${project.title} screenshot ${i + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <aside className="space-y-6">
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
                  <h3 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/45">
                    Technologies
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
                  <h3 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/45">
                    Links
                  </h3>
                  <div className="mt-4 flex flex-col gap-2">
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.02] px-3.5 py-2.5 text-[13px] text-white/85 transition-colors hover:border-white/25 hover:bg-white/[0.05]"
                      >
                        <span className="inline-flex items-center gap-2">
                          <ExternalLink className="h-3.5 w-3.5" /> Live site
                        </span>
                        <ArrowLeft className="h-3.5 w-3.5 rotate-[225deg]" />
                      </a>
                    )}
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.02] px-3.5 py-2.5 text-[13px] text-white/85 transition-colors hover:border-white/25 hover:bg-white/[0.05]"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Github className="h-3.5 w-3.5" /> Source
                        </span>
                        <ArrowLeft className="h-3.5 w-3.5 rotate-[225deg]" />
                      </a>
                    )}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <div className="border-t border-white/5 py-12">
          <div className="mx-auto max-w-6xl px-6">
            <Link
              href="/#work"
              className="group inline-flex items-center gap-3 text-[14px] text-white/50 transition-colors hover:text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:border-white/25">
                <ArrowLeft className="h-4 w-4" />
              </span>
              Back to all projects
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
