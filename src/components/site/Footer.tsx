import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { Logo } from "./Logo";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Youtube,
  ShieldCheck,
} from "lucide-react";

const cols = [
  {
    h: "Company",
    items: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Case Studies", href: "/work" },
      { label: "Industry Solutions", href: "/industries" },
      { label: "How We Work", href: "/process" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    h: "Services",
    items: [
      { label: "Mobile Apps", href: "/services" },
      { label: "Web Development", href: "/services" },
      { label: "DevOps & Cloud", href: "/services" },
      { label: "Quality Assurance", href: "/services" },
      { label: "Maintenance", href: "/services" },
    ],
  },
  {
    h: "Legal & Trust",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/privacy" },
      { label: "Security & Compliance", href: "/privacy" },
      { label: "Cookie Preferences", href: "/privacy" },
    ],
  },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative isolate overflow-hidden rounded-t-[100px] sm:rounded-t-[160px]">
      {/* radial branded gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px]"
        style={{
          background:
            "radial-gradient(65% 100% at 50% -6%, oklch(0.78 0.16 220 / 0.45) 0%, oklch(0.62 0.22 255 / 0.35) 18%, oklch(0.48 0.22 275 / 0.25) 36%, oklch(0.3 0.14 290 / 0.15) 55%, transparent 78%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 pb-12 pt-14 md:px-10 md:pt-20">
        <Reveal className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#06B6D4]">
            AI-INFUSED EXCELLENCE
          </p>
          <h2 className="mt-6 max-w-4xl mx-auto font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#F8FAFC] sm:text-6xl md:text-7xl">
            Systems That Keep{" "}
            <span className="block bg-gradient-to-r from-[#06B6D4] via-[#2563FF] to-[#8B5CF6] bg-clip-text text-transparent">
              Growing, Long After Launch
            </span>
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-[#CBD5E1] sm:text-lg">
            Hundreds of brands trust CanbeTech to build the growth infrastructure that compounds — not campaigns that expire the day they end.
          </p>
          <Link
            to="/contact"
            className="btn-cta mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-[#F8FAFC]"
          >
            Schedule a Call
          </Link>
        </Reveal>

        <div className="glass mt-12 grid gap-10 rounded-[2rem] p-8 md:mt-16 md:grid-cols-[1.3fr_repeat(3,minmax(0,1fr))] md:p-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5 font-display text-2xl tracking-tight text-foreground">
              <Logo size={32} />
              <span className="font-bold">
                Canbe<span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Tech</span>
                <span className="text-primary">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              CanbeTech builds production-grade growth systems for ambitious brands — engineering brand strategy, performance media, and lifecycle infrastructure that compounds.
            </p>

            <div className="mt-6 space-y-2 text-xs text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                191-B Hashmi Garden, Bahawalpur
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary" />
                info@canbetech.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-primary" />
                +92 305 1545730 | +92 305 7554620
              </p>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Connect With Us</p>
              <div className="mt-3 flex items-center gap-3">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/15 hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.h}>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{c.h}</p>
              <ul className="mt-4 space-y-2.5">
                {c.items.map((i) => (
                  <li key={i.label}>
                    <Link
                      to={i.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar with Privacy & Legal Links */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground border-t border-white/10 pt-6">
          <p>© {new Date().getFullYear()} CanbeTech. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-primary">
              Terms of Service
            </Link>
            <a href="mailto:info@canbetech.com" className="transition-colors hover:text-primary">
              info@canbetech.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
