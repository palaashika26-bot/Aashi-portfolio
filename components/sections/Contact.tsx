"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Loader2, MapPin, Mail, Github, Linkedin, Phone } from "lucide-react";
import { useState } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { EASE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulated submit — this is a static portfolio (no backend).
    // Replace this with a real endpoint (Formspree, Resend, etc.) when deploying.
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", message: "" });
      }, 2600);
    }, 1400);
  };

  return (
    <Section id="contact">
      <Container size="lg">
        <SectionHeading
          eyebrow="Get in touch"
          title={
            <>
              Have a project in mind?
              <br />
              <span className="text-gradient-brand">Let's build it right.</span>
            </>
          }
          description="Have a question, collaboration idea, or just want to say hello? Drop a message and I'll get back to you as soon as possible."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE.out }}
            className="md:col-span-2 space-y-3"
          >
            <InfoCard icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
            <InfoCard
              icon={MapPin}
              label="Location"
              value={`${site.location} · ${site.timezone}`}
            />
            <InfoCard
              icon={Phone}
              label="Phone"
              value="+91 8169022374"
              href="tel:+918169022374"
            />
            <InfoCard
              icon={Linkedin}
              label="LinkedIn"
              value="/in/aashikapal"
              href={site.socials.linkedin}
            />
            <InfoCard
              icon={Github}
              label="GitHub"
              value="palaashika26-bot"
              href={site.socials.github}
            />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7, ease: EASE.out }}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-5"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-emerald-300">
                  {site.availability}
                </p>
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-white/60">
                Open to internship and collaboration opportunities. Let's build something great together.
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.form
            suppressHydrationWarning
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE.out }}
            onSubmit={onSubmit}
            className="md:col-span-3 relative overflow-hidden rounded-2xl border border-white/8 bg-[#0D0D10]/60 p-6 backdrop-blur-sm md:p-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Your name">
                <input
                  suppressHydrationWarning
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Aashika"
                  className="w-full rounded-xl border border-white/8 bg-white/[0.02] px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/30 focus:border-white/25 focus:outline-none focus:ring-2 focus:ring-white/10"
                />
              </Field>
              <Field label="Your email">
                <input
                  suppressHydrationWarning
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/8 bg-white/[0.02] px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/30 focus:border-white/25 focus:outline-none focus:ring-2 focus:ring-white/10"
                />
              </Field>
            </div>

            <Field label="Tell me about your project" className="mt-4">
              <textarea
                suppressHydrationWarning
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project, idea, or just say hello!"
                className="w-full resize-none rounded-xl border border-white/8 bg-white/[0.02] px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/30 focus:border-white/25 focus:outline-none focus:ring-2 focus:ring-white/10"
              />
            </Field>

            <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-[12.5px] text-white/40">
                Prefer email? Reach me at{" "}
                <a href={`mailto:${site.email}`} className="text-white/80 underline underline-offset-4 hover:text-white">
                  {site.email}
                </a>
              </p>
              <button
                suppressHydrationWarning
                type="submit"
                disabled={status !== "idle"}
                className={cn(
                  "group relative inline-flex min-w-[180px] items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-5 py-2.5 text-[14px] font-medium text-black transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed",
                  status === "success" && "bg-emerald-400 text-black"
                )}
              >
                {status === "idle" && (
                  <>
                    Send message
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
                {status === "loading" && (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                )}
                {status === "success" && (
                  <>
                    <Check className="h-4 w-4" />
                    Received — talk soon
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </Container>
    </Section>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/45">
        {label}
      </span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3 transition-colors hover:border-white/20">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/85">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
          {label}
        </p>
        <p className="mt-0.5 truncate text-[13.5px] text-white/85">{value}</p>
      </div>
      {href && <ArrowUpRight className="h-3.5 w-3.5 text-white/40" />}
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
