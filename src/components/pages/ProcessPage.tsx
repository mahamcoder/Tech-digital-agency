import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import {
  ArrowRight,
  Search,
  Compass,
  Rocket,
  RefreshCw,
  CheckCircle2,
  Clock,
  Users,
  BarChart3,
  Zap,
  Target,
  TrendingUp,
  Layers,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const phases = [
  {
    n: "01",
    icon: Search,
    title: "Diagnose",
    subtitle: "Find where growth is leaking",
    meta: "Week 1–2",
    body: "We audit data, creative and channel economics to find where growth is actually leaking. No assumptions — just clean diagnosis based on your real numbers.",
    deliverables: [
      "Full-funnel performance audit",
      "Attribution & measurement teardown",
      "Competitor landscape analysis",
      "Creative fatigue assessment",
      "Channel economics modeling",
    ],
    outcome: "A clear map of where money is wasted and where opportunity lives.",
  },
  {
    n: "02",
    icon: Compass,
    title: "Architect",
    subtitle: "Design the growth blueprint",
    meta: "Week 3–4",
    body: "A 90-day growth blueprint covering positioning, channel mix, creative system and measurement model — all tied to your unit economics.",
    deliverables: [
      "Channel mix & budget model",
      "Creative system architecture",
      "Measurement & attribution plan",
      "90-day execution roadmap",
      "KPI framework & targets",
    ],
    outcome: "A documented system your team can execute against with confidence.",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Deploy",
    subtitle: "Ship weekly, measure everything",
    meta: "Week 5–10",
    body: "Embedded pods ship campaigns, pages and journeys weekly — with clear owners and targets. Every week we ship, every week we learn.",
    deliverables: [
      "Weekly campaign shipping cadence",
      "Landing page experiments",
      "Lifecycle journey activation",
      "Creative production pipeline",
      "Real-time performance dashboard",
    ],
    outcome: "Rapid velocity with measurable improvements every single week.",
  },
  {
    n: "04",
    icon: RefreshCw,
    title: "Compound",
    subtitle: "Reinvest in what works",
    meta: "Ongoing",
    body: "Test, learn and reinvest. Every cycle raises the ceiling on efficient, durable revenue. Growth compounds — so does our operating model.",
    deliverables: [
      "Incrementality testing program",
      "Budget reallocation framework",
      "Quarterly strategic roadmap",
      "Executive performance reviews",
      "Continuous creative optimization",
    ],
    outcome: "A self-improving system that gets better with every dollar spent.",
  },
];

const milestones = [
  { week: "Week 1", label: "Kickoff & data access", done: true },
  { week: "Week 2", label: "Audit delivery & readout", done: true },
  { week: "Week 3", label: "Blueprint presentation", done: true },
  { week: "Week 4", label: "Roadmap sign-off", done: true },
  { week: "Week 5", label: "First campaigns live", done: false },
  { week: "Week 6", label: "Landing page tests ship", done: false },
  { week: "Week 8", label: "Lifecycle flows active", done: false },
  { week: "Week 10", label: "First optimization cycle", done: false },
  { week: "Week 12", label: "Quarterly strategy review", done: false },
];

const principles = [
  {
    icon: Clock,
    title: "Speed over perfection",
    body: "We ship weekly. Good enough this week beats perfect next quarter.",
  },
  {
    icon: BarChart3,
    title: "Measure everything",
    body: "If we can't measure the impact, we don't ship it. Every initiative has a number.",
  },
  {
    icon: Users,
    title: "Senior-led pods",
    body: "No junior handoffs. The people in strategy are the people doing execution.",
  },
  {
    icon: Target,
    title: "Outcome-aligned",
    body: "We optimize for your business metrics — revenue, margin, LTV — not platform vanity metrics.",
  },
];

export function ProcessPage() {
  const [activePhase, setActivePhase] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineScale = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative isolate overflow-hidden pb-16 pt-32 sm:pt-40 md:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[10%] top-[20%] h-[380px] w-[480px] rounded-full bg-primary/10 blur-[150px]" />
          <div className="absolute right-[20%] top-[10%] h-[300px] w-[420px] rounded-full bg-accent/8 blur-[140px]" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(1 0 0 / 0.16) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.16) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(55% 50% at 50% 45%, black, transparent 80%)",
            WebkitMaskImage: "radial-gradient(55% 50% at 50% 45%, black, transparent 80%)",
          }}
        />

        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease }}
              >
                <SectionLabel>How We Work</SectionLabel>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease }}
                className="mt-7 font-display text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl"
              >
                A disciplined orbit
                <span className="mt-2 block font-serif text-[0.88em] font-normal italic text-primary">
                  around your revenue
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease }}
              className="max-w-md text-[15px] leading-[1.8] text-muted-foreground lg:text-right"
            >
              No retainer theatre. A small senior team, a shared dashboard, and a
              cadence that turns marketing into a predictable operating system.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── 4-PHASE OPERATING SYSTEM ─── */}
      <section ref={sectionRef} className="relative mx-auto max-w-7xl px-5 pb-24 md:px-10 md:pb-32">
        <Reveal>
          <SectionLabel>The Operating System</SectionLabel>
          <h2 className="mt-6 max-w-lg font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
            Four phases,
            <span className="font-serif italic text-primary"> zero waste</span>
          </h2>
        </Reveal>

        {/* Phase switcher + detail */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Phase selector */}
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-[27px] top-0 hidden h-full w-px bg-border/60 lg:block">
              <motion.div
                style={{ scaleY: lineScale }}
                className="h-full w-px origin-top bg-primary/50"
              />
            </div>

            <div className="space-y-3">
              {phases.map((phase, i) => {
                const Icon = phase.icon;
                return (
                  <button
                    key={phase.n}
                    type="button"
                    onClick={() => setActivePhase(i)}
                    className={`group relative flex w-full items-start gap-5 rounded-2xl px-4 py-5 text-left transition-all duration-400 lg:pl-14 ${
                      activePhase === i
                        ? "glass border-primary/30"
                        : "border border-transparent hover:bg-foreground/3"
                    }`}
                  >
                    {/* Node */}
                    <span
                      className={`relative z-10 hidden h-[54px] w-[54px] shrink-0 lg:grid lg:place-items-center lg:rounded-full lg:border lg:absolute lg:left-0 lg:top-5 lg:translate-x-0 ${
                        activePhase === i
                          ? "border-primary/40 bg-background"
                          : "border-border bg-background"
                      }`}
                    >
                      <span
                        className={`grid h-9 w-9 place-items-center rounded-full font-display text-[11px] font-bold tracking-wide transition-colors ${
                          activePhase === i
                            ? "bg-[var(--gradient-cta)] text-primary-foreground"
                            : "bg-foreground/5 text-muted-foreground"
                        }`}
                      >
                        {phase.n}
                      </span>
                    </span>

                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-foreground/5 text-muted-foreground transition-colors lg:hidden">
                      <Icon className="h-5 w-5" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-primary/60">
                        {phase.meta}
                      </span>
                      <span
                        className={`mt-0.5 block font-display text-lg font-semibold tracking-tight transition-colors ${
                          activePhase === i ? "text-foreground" : "text-foreground/70"
                        }`}
                      >
                        {phase.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {phase.subtitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active phase detail */}
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
            className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-10"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/15 blur-[60px]" />
            
            {(() => {
              const phase = phases[activePhase];
              const Icon = phase.icon;
              return (
                <>
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/12 text-primary">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-primary/60">{phase.meta}</p>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                        {phase.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-5 text-[15px] leading-[1.8] text-muted-foreground">
                    {phase.body}
                  </p>

                  <div className="mt-7">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      Deliverables
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {phase.deliverables.map((d, di) => (
                        <motion.li
                          key={d}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.35, delay: di * 0.05, ease }}
                          className="flex items-center gap-3 text-sm text-foreground/80"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary/70" />
                          {d}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 rounded-xl bg-primary/6 p-4">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-primary/70">Expected Outcome</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">{phase.outcome}</p>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </div>
      </section>

      {/* ─── SPRINT ROADMAP ─── */}
      <section className="border-y border-border/60 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="text-center">
            <SectionLabel>90-Day Roadmap</SectionLabel>
            <h2 className="mx-auto mt-6 max-w-lg font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
              Your first 90 days <span className="font-serif italic text-primary">mapped out</span>
            </h2>
          </Reveal>

          <div className="mx-auto mt-14 max-w-3xl">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 h-full w-px bg-border/60 sm:left-6" />

              <div className="space-y-1">
                {milestones.map((m, i) => (
                  <Reveal key={m.week} delay={i * 0.04}>
                    <div className="relative flex items-start gap-5 py-3 pl-10 sm:pl-14">
                      {/* Node */}
                      <span
                        className={`absolute left-2 top-4 h-5 w-5 rounded-full border-2 sm:left-4 ${
                          m.done
                            ? "border-primary bg-primary/20"
                            : "border-border bg-background"
                        }`}
                      >
                        {m.done && (
                          <span className="absolute inset-1 rounded-full bg-primary" />
                        )}
                      </span>
                      <div className="flex flex-1 items-baseline justify-between gap-3">
                        <span className={`text-sm ${m.done ? "text-foreground" : "text-muted-foreground"}`}>
                          {m.label}
                        </span>
                        <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                          {m.week}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPERATING PRINCIPLES ─── */}
      <section className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <div className="pointer-events-none absolute right-[10%] top-1/3 -z-10 h-[350px] w-[450px] rounded-full bg-primary/8 blur-[160px]" />

        <Reveal>
          <SectionLabel>Principles</SectionLabel>
          <h2 className="mt-6 max-w-lg font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
            How we think about
            <span className="font-serif italic text-primary"> growth</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease }}
                  className="glass group relative h-full overflow-hidden rounded-[1.75rem] p-7 transition-colors duration-500 hover:border-primary/30"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-foreground/5 text-muted-foreground transition-colors duration-300 group-hover:bg-primary/12 group-hover:text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-16 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="btn-cta inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-primary-foreground"
            >
              Start your 90-day sprint
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              See results first
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
