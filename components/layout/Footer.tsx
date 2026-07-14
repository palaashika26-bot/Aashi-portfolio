import Container from "@/components/ui/Container";
import { site, socialLinks } from "@/data/site";
import { navLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] mt-24">
      <Container size="lg">
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] font-display text-[13px] font-semibold">
                {site.name.charAt(0)}
              </span>
              <span className="font-display text-[15px] tracking-tight text-white/90">
                {site.name}
              </span>
            </div>
            <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-white/45">
              A second year B.Sc Computer Science student at Mithibai College, Mumbai.
              Passionate about full stack development and building scalable web applications.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-white/40">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((n) => (
                <li key={n.id}>
                  <a
                    href={n.href}
                    className="text-[13.5px] text-white/70 transition-colors hover:text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-white/40">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2 text-[13.5px] text-white/70 transition-colors hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon className="h-3.5 w-3.5 opacity-70" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] py-6 text-[12.5px] text-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Aashika Pal. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.18em]">
            {site.location} · {site.timezone}
          </p>
        </div>
      </Container>
    </footer>
  );
}
