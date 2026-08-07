import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, SectionLabel } from "./Reveal";
import { X, Quote, Star, ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Testimonial {
  id: number;
  q: string;
  fullQuote: string;
  n: string;
  r: string;
  company: string;
  rating: number;
  metric: string;
  metricLabel: string;
  avatar: string;
}

const quotes: Testimonial[] = [
  {
    id: 1,
    q: "They rebuilt our entire demand engine in a quarter. The board finally trusts the marketing numbers.",
    fullQuote:
      "Before partnering with CanbeTech, our marketing metrics were fragmented and attribution was guesswork. CanbeTech came in, audited our entire stack, re-architected our analytics pipelines, and optimized our performance campaigns. Within 90 days, qualified pipeline grew by over 300%. They operating with complete engineering discipline.",
    n: "Priya Raman",
    r: "Chief Marketing Officer",
    company: "Nova Finance",
    rating: 5,
    metric: "+312%",
    metricLabel: "Pipeline Growth",
    avatar: "P",
  },
  {
    id: 2,
    q: "The creative is gorgeous, but it's the measurement rigour behind it that changed our economics.",
    fullQuote:
      "Most digital agencies focus solely on surface design. CanbeTech combines high-end visual design with deep data engineering. Their real-time dashboard gave us complete visibility into unit economics and reduced our CAC by 41% while maintaining record scaling speed.",
    n: "Daniel Okafor",
    r: "VP of Growth",
    company: "Halo Health",
    rating: 5,
    metric: "4.8x ROAS",
    metricLabel: "Blended Return",
    avatar: "D",
  },
  {
    id: 3,
    q: "Feels less like an agency and more like the best internal team we've ever hired.",
    fullQuote:
      "The engineering velocity was staggering. Weekly sprint deliveries, zero downtime deployments, and direct access to senior tech leads over Slack. CanbeTech delivered our mobile e-commerce platform 2 weeks ahead of schedule.",
    n: "Mara Lindqvist",
    r: "Founder & CEO",
    company: "Lumen Labs",
    rating: 5,
    metric: "$18M GMV",
    metricLabel: "Processed Volume",
    avatar: "M",
  },
  {
    id: 4,
    q: "Transformed our legacy infrastructure into a high-speed microservices cloud architecture.",
    fullQuote:
      "Our legacy codebase was choking our customer growth. CanbeTech executed a seamless migration to modern cloud infrastructure without a single second of service disruption. Database query speeds jumped 5x immediately.",
    n: "Alexander Vance",
    r: "Head of Infrastructure",
    company: "Atlas Retail",
    rating: 5,
    metric: "99.99%",
    metricLabel: "Uptime SLA",
    avatar: "A",
  },
  {
    id: 5,
    q: "Their AI workflow integration automated 60% of our manual customer operations.",
    fullQuote:
      "Integrating intelligent AI automations was a game changer for our operations. CanbeTech built custom workflow tools that saved our support team 250+ hours every month while boosting user satisfaction.",
    n: "Sophia Chen",
    r: "Director of Operations",
    company: "Vortex Tech",
    rating: 5,
    metric: "250+ hrs",
    metricLabel: "Monthly Time Saved",
    avatar: "S",
  },
];

export function Testimonials() {
  const [selectedClient, setSelectedClient] = useState<Testimonial | null>(null);

  return (
    <section id="our-customers" className="relative isolate overflow-hidden py-14 md:py-20">
      {/* Glow background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[900px] max-w-[130vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="max-w-3xl text-left">
          <SectionLabel>Our customers</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl">
            Partners Who{" "}
            <span className="bg-gradient-to-r from-violet-400 via-primary to-purple-300 bg-clip-text text-transparent">
              Stay in Orbit
            </span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Click any client card to read their full story and growth metrics.
          </p>
        </Reveal>
      </div>

      {/* Infinite Horizontal Scrolling Track */}
      <div className="mt-14 overflow-hidden py-4">
        <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]">
          {[...quotes, ...quotes, ...quotes].map((t, idx) => (
            <figure
              key={`${t.id}-${idx}`}
              onClick={() => setSelectedClient(t)}
              className="glass group relative w-[350px] shrink-0 cursor-pointer overflow-hidden rounded-3xl p-7 transition-all duration-400 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 sm:w-[400px]"
            >
              <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-primary/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Rating stars */}
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <blockquote className="mt-4 text-[14.5px] leading-relaxed text-foreground/90">
                “{t.q}”
              </blockquote>

              <figcaption className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                    {t.avatar}
                  </span>
                  <div className="min-w-0">
                    <span className="block truncate text-sm font-medium text-foreground">{t.n}</span>
                    <span className="block truncate text-xs text-muted-foreground">{t.r}, {t.company}</span>
                  </div>
                </div>

                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {t.metric}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Client Full Modal Popup */}
      <AnimatePresence>
        {selectedClient && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedClient(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="glass relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2.5rem] border border-white/15 bg-[#141224]/95 p-7 shadow-2xl backdrop-blur-2xl sm:p-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedClient(null)}
                className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/5 p-2 text-muted-foreground transition-colors hover:bg-white/15 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3">
                <Quote className="h-8 w-8 text-primary opacity-80" />
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                  {selectedClient.company} Case Story
                </span>
              </div>

              {/* Stars */}
              <div className="mt-5 flex items-center gap-1 text-amber-400">
                {Array.from({ length: selectedClient.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              {/* Full Quote */}
              <p className="mt-5 text-base leading-relaxed text-foreground/90 sm:text-lg">
                "{selectedClient.fullQuote}"
              </p>

              {/* Metrics highlight bar */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <div>
                  <p className="text-2xl font-bold text-primary">{selectedClient.metric}</p>
                  <p className="text-xs text-muted-foreground">{selectedClient.metricLabel}</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Verified Client Partner</span>
                </div>
              </div>

              {/* Client Bio */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 font-display text-lg font-bold text-white shadow-lg">
                    {selectedClient.avatar}
                  </span>
                  <div>
                    <h4 className="text-base font-semibold text-white">{selectedClient.n}</h4>
                    <p className="text-xs text-muted-foreground">{selectedClient.r} at {selectedClient.company}</p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setSelectedClient(null)}
                  className="btn-cta inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium"
                >
                  Start Project
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
