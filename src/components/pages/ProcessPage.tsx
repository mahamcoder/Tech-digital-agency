import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
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
  Target,
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
    gradient: "from-violet-500/20 via-primary/10 to-transparent",
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
    gradient: "from-blue-500/20 via-primary/10 to-transparent",
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
    gradient: "from-cyan-500/20 via-primary/10 to-transparent",
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
    gradient: "from-emerald-500/20 via-primary/10 to-transparent",
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
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  return (
    <>
      {/* ─── HERO ─── */}
      <PageHero
        badge="How We Work"
        aiVariant="process"
        title={
          <>
            A Disciplined Orbit{" "}
            <span className="mt-2 block bg-gradient-to-r from-violet-400 via-primary to-purple-300 bg-clip-text text-transparent">
              Around Your Revenue
            </span>
          </>
        }
        description="No retainer theatre. A small senior team, a shared dashboard, and a cadence that turns marketing into a predictable operating system."
        primaryCta={{ label: "Start your 90-day sprint", to: "/contact" }}
        secondaryCta={{ label: "See results first", to: "/work" }}
      />

      {/* ─── 4-PHASE OPERATING SYSTEM (2×2 Card Grid) ─── */}
      <section className="relative mx-auto max-w-7xl px-5 pb-14 md:px-10 md:pb-20">
        <Reveal className="text-left">
          <SectionLabel>The Operating System</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl">
            Four Phases,{" "}
            <span className="bg-gradient-to-r from-violet-400 via-primary to-purple-300 bg-clip-text text-transparent">
              Zero Waste
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            const isExpanded = expandedPhase === i;

            return (
              <Reveal key={phase.n} delay={i * 0.08}>
                <motion.div
                  layout
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease }}
                  className="glass group relative overflow-hidden rounded-[2rem] p-7 sm:p-8 transition-colors duration-500 hover:border-primary/30 cursor-pointer"
                  onClick={() => setExpandedPhase(isExpanded ? null : i)}
                >
                  {/* Gradient glow */}
                  <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${phase.gradient} blur-[50px] opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                          {phase.n}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
                          {phase.meta}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">
                        {phase.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-muted-foreground">{phase.subtitle}</p>
                    </div>
                  </div>

                  {/* Body */}
                  <p className="mt-5 text-[15px] leading-[1.75] text-muted-foreground">
                    {phase.body}
                  </p>

                  {/* Expandable deliverables */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 border-t border-border/60 pt-5">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        Deliverables
                      </p>
                      <ul className="mt-3 space-y-2">
                        {phase.deliverables.map((d) => (
                          <li key={d} className="flex items-center gap-2.5 text-sm text-foreground/80">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary/70" />
                            {d}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 rounded-xl bg-primary/6 p-4">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-primary/70">Expected Outcome</p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/80">{phase.outcome}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Toggle hint */}
                  <p className="mt-4 text-[11px] text-muted-foreground/50 transition-colors group-hover:text-muted-foreground">
                    {isExpanded ? "Click to collapse ↑" : "Click to see deliverables →"}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ─── HORIZONTAL TIMELINE ─── */}
      <section className="border-y border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="text-left">
            <SectionLabel>90-Day Roadmap</SectionLabel>
            <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl">
              Your First 90 Days{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                Mapped Out
              </span>
            </h2>
          </Reveal>

          {/* Horizontal stepper */}
          <div className="relative mt-16 overflow-x-auto no-scrollbar pb-4">
            <div className="flex min-w-max items-start gap-0">
              {milestones.map((m, i) => {
                const isLast = i === milestones.length - 1;
                return (
                  <Reveal key={m.week} delay={i * 0.04}>
                    <div className="flex items-start">
                      <div className="flex flex-col items-center" style={{ width: 120 }}>
                        {/* Node */}
                        <div
                          className={`relative z-10 grid h-10 w-10 place-items-center rounded-full border-2 transition-colors ${
                            m.done
                              ? "border-primary bg-primary/15"
                              : "border-border bg-background"
                          }`}
                        >
                          {m.done ? (
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          ) : (
                            <span className="h-2.5 w-2.5 rounded-full bg-border" />
                          )}
                        </div>

                        {/* Label */}
                        <p className={`mt-3 text-center text-[12px] font-medium leading-tight ${m.done ? "text-foreground" : "text-muted-foreground"}`}>
                          {m.label}
                        </p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60">
                          {m.week}
                        </p>
                      </div>

                      {/* Connector line */}
                      {!isLast && (
                        <div className="mt-[18px] h-0.5 w-8 shrink-0 -mx-2">
                          <div className={`h-full rounded-full ${m.done ? "bg-primary/40" : "bg-border/60"}`} />
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPERATING PRINCIPLES ─── */}
      <section className="relative mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-36">
        <div className="pointer-events-none absolute right-[10%] top-1/3 -z-10 h-[350px] w-[450px] rounded-full bg-primary/8 blur-[160px]" />

        <Reveal className="text-left">
          <SectionLabel>Principles</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl">
            How We Think About{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              Growth
            </span>
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
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
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
