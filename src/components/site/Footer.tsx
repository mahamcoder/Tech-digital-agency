import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { MapPin, Mail, Phone } from "lucide-react";

const cols = [
  {
    h: "Company",
    items: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Case Studies", href: "/work" },
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
    h: "Solutions",
    items: [
      { label: "eCommerce", href: "/services" },
      { label: "Healthcare Tech", href: "/services" },
      { label: "FinTech & Banking", href: "/services" },
      { label: "EdTech Platforms", href: "/services" },
      { label: "Real Estate Apps", href: "/services" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="relative isolate overflow-hidden rounded-t-[100px] sm:rounded-t-[160px]">
      {/* radial branded gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px]"
        style={{
          background:
            "radial-gradient(65% 100% at 50% -6%, oklch(0.97 0.03 305 / 0.9) 0%, oklch(0.84 0.11 302 / 0.7) 14%, oklch(0.6 0.21 300 / 0.5) 30%, oklch(0.3 0.13 288 / 0.3) 52%, transparent 78%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 pb-12 pt-32 md:px-10 md:pt-44">
        <Reveal className="text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-foreground/70">
            Intelligent Software Solutions
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-6xl md:text-7xl">
            Systems That Keep
            <span className="block font-serif italic text-primary">Growing, Long After Launch</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-foreground/70">
           Hundreds of brands trust CanbeTech to build the growth infrastructure that compounds — not campaigns that expire the day they end.
          </p>
          <Link
            to="/contact"
            className="btn-cta mt-9 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-primary-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-background" />
            Schedule a Call
          </Link>
        </Reveal>

        <div className="glass mt-24 grid gap-10 rounded-[2rem] p-8 md:mt-32 md:grid-cols-[1.3fr_repeat(3,minmax(0,1fr))] md:p-12">
          <div>
            <Link to="/" className="font-display text-2xl tracking-tight text-foreground">
              CanbeTech<span className="text-primary">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
             CanbeTech builds production-grade growth systems for ambitious brands — engineering brand strategy, performance media, and lifecycle infrastructure that compounds, not campaigns that expire
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
                +92 302 6833531 | +92 305 7554620
              </p>
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

        <div className="mt-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 text-xs text-muted-foreground sm:flex sm:justify-between">
          <p className="min-w-0 truncate">© {new Date().getFullYear()} CanbeTech. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="mailto:info@canbetech.com" className="transition-colors hover:text-primary">
              info@canbetech.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
