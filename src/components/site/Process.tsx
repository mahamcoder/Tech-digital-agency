import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Reveal, SectionLabel } from "./Reveal";
import { Link } from "@tanstack/react-router";
import {
  Search,
  Compass,
  Rocket,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  Cpu,
  BarChart3,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    id: "01",
    icon: Search,
    title: "Diagnose & Audit",
    subtitle: "Identify bottlenecks & architecture gaps",
    duration: "Weeks 1–2",
    description:
      "We conduct a deep-dive technical audit across your codebases, cloud infrastructure, API latency, and security protocols to identify performance leaks and scaling friction.",
    points: [
      "Codebase & architecture teardown",
      "API latency & database query profiling",
      "Cloud cost & infrastructure audit",
      "Security & vulnerability assessment",
    ],
    metric: "100% Transparency",
    metricLabel: "Audit Coverage",
    badge: "Discovery Phase",
  },
  {
    id: "02",
    icon: Compass,
    title: "Architect & Blueprint",
    subtitle: "Design scalable cloud & AI systems",
    duration: "Weeks 3–4",
    description:
      "We create a comprehensive 90-day technical roadmap: choosing microservice boundaries, database schema optimizations, AI workflows, and CI/CD pipelines.",
    points: [
      "Microservices & API schema design",
      "AI workflow integration blueprint",
      "Multi-cloud & container strategy",
      "90-day sprint execution roadmap",
    ],
    metric: "3x Velocity",
    metricLabel: "Est. Shipping Speed",
    badge: "Architecture Phase",
  },
  {
    id: "03",
    icon: Rocket,
    title: "Deploy & Sprint",
    subtitle: "Ship weekly with zero downtime",
    duration: "Weeks 5–10",
    description:
      "Dedicated senior engineering pods execute in 1-week sprints. Every Friday we ship production-ready code with automated testing, code reviews, and live demos.",
    points: [
      "Weekly production ship cadence",
      "Automated CI/CD & zero-downtime deploys",
      "Full-stack & mobile feature delivery",
      "Real-time monitoring & error tracing",
    ],
    metric: "100% On-Time",
    metricLabel: "Sprint Reliability",
    badge: "Execution Phase",
  },
  {
    id: "04",
    icon: RefreshCw,
    title: "Scale & Compound",
    subtitle: "Continuous optimization & 24/7 support",
    duration: "Ongoing",
    description:
      "Post-launch, we continuously monitor performance, optimize database indexes, automate repetitive tasks, and scale cloud infrastructure as traffic compounds.",
    points: [
      "24/7 automated monitoring & SLA response",
      "Continuous load & security testing",
      "Infrastructure auto-scaling",
      "Quarterly architecture reviews",
    ],
    metric: "99.99%",
    metricLabel: "Target Uptime SLA",
    badge: "Scaling Phase",
  },
];

const highlights = [
  { value: "500+", label: "Projects Delivered", icon: Sparkles },
  { value: "98%", label: "Client Satisfaction", icon: Shield },
  { value: "200+", label: "Global Clients", icon: Layers },
  { value: "< 2 hrs", label: "Support SLA", icon: Zap },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-we-work" className="relative isolate overflow-hidden py-28 md:py-36">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[550px] w-[950px] max-w-[130vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[170px]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 0.16) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.16) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(65% 55% at 50% 50%, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(65% 55% at 50% 50%, black, transparent 80%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Header */}
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.06] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl">
              An engineering process
              <span className="mt-2 block font-serif text-[0.88em] font-normal italic text-primary">
                built for speed & scale
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-md text-[15px] leading-[1.8] text-muted-foreground lg:text-right">
              From audit to deployment, we follow a transparent 4-stage operating system that eliminates risk, accelerates development, and ships production code weekly.
            </p>
          </Reveal>
        </div>

        {/* Asymmetrical 40/60 Layout */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.4fr_0.6fr] lg:gap-12">
          {/* Left Column: Vertical Step Selector */}
          <div className="space-y-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = activeStep === i;
              return (
                <Reveal key={step.id} delay={i * 0.06}>
                  <button
                    type="button"
                    onClick={() => setActiveStep(i)}
                    className={`group relative flex w-full items-center gap-5 rounded-2xl p-5 text-left transition-all duration-400 ${
                      isActive
                        ? "glass border-primary/40 bg-foreground/6 shadow-[var(--shadow-elegant)]"
                        : "border border-transparent hover:bg-foreground/3"
                    }`}
                  >
                    {/* Step Number Badge */}
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl font-display text-sm font-bold transition-all duration-300 ${
                        isActive
                          ? "bg-[var(--gradient-cta)] text-primary-foreground shadow-[0_0_20px_-4px_var(--violet)]"
                          : "bg-foreground/5 text-muted-foreground group-hover:bg-foreground/10 group-hover:text-foreground"
                      }`}
                    >
                      {step.id}
                    </span>

                    {/* Content preview */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`font-display text-base font-semibold tracking-tight transition-colors ${
                            isActive ? "text-foreground" : "text-foreground/80"
                          }`}
                        >
                          {step.title}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.18em] text-primary/70">
                          {step.duration}
                        </span>
                      </div>
                      <p className="mt-1 truncate text-xs text-muted-foreground">
                        {step.subtitle}
                      </p>
                    </div>

                    {/* Active indicator bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeStepBar"
                        className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-primary"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                </Reveal>
              );
            })}
          </div>

          {/* Right Column: Detailed Active Showcase Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {(() => {
                const current = steps[activeStep];
                const Icon = current.icon;
                return (
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 16, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -16, scale: 0.98 }}
                    transition={{ duration: 0.45, ease }}
                    className="glass relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] p-8 sm:p-10"
                  >
                    {/* Glowing background orb */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-[70px]" />

                    <div>
                      {/* Top bar */}
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                          <Icon className="h-3.5 w-3.5" />
                          {current.badge}
                        </span>
                        <span className="font-display text-xs text-muted-foreground">
                          Phase {current.id} of 04
                        </span>
                      </div>

                      {/* Main Title & Description */}
                      <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                        {current.title}
                      </h3>
                      <p className="mt-3 text-[14.5px] leading-[1.75] text-muted-foreground">
                        {current.description}
                      </p>

                      {/* Deliverable Checklist Grid */}
                      <div className="mt-8">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                          Key Sprint Deliverables
                        </p>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          {current.points.map((pt, index) => (
                            <motion.div
                              key={pt}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.06 }}
                              className="flex items-center gap-3 rounded-xl bg-foreground/4 px-4 py-3 text-xs font-medium text-foreground/90 transition-colors hover:bg-foreground/8"
                            >
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                              <span>{pt}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Metric & CTA Bar */}
                    <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6">
                      <div>
                        <p className="font-display text-2xl font-semibold tracking-tight text-primary">
                          {current.metric}
                        </p>
                        <p className="mt-0.5 text-[11px] text-muted-foreground">
                          {current.metricLabel}
                        </p>
                      </div>

                      <Link
                        to="/process"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
                      >
                        Detailed 90-day roadmap
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Highlight Stats Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <Reveal key={h.label} delay={i * 0.06}>
                <div className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all duration-400 hover:-translate-y-1 hover:border-primary/30">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-xl font-semibold tracking-tight text-foreground">
                      {h.value}
                    </p>
                    <p className="text-[11px] text-muted-foreground">{h.label}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
