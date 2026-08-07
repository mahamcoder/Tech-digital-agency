import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/FAQ";
import {
  Smartphone,
  Globe2,
  Cpu,
  ShieldCheck,
  Wrench,
  Kanban,
  ChevronRight,
  ArrowRight,
  Database,
  Cloud,
  Code2,
  Layers,
  Terminal,
  Zap,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const capabilities = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    body: "Cross-platform and native mobile applications with scalable architecture, modern UI, and high performance built for iOS and Android.",
    deliverables: [
      "React Native & Flutter cross-platform",
      "Swift & Kotlin native apps",
      "Offline-first & real-time architecture",
      "App Store & Google Play deployment",
    ],
    accent: "from-violet-500/20 to-transparent",
  },
  {
    icon: Globe2,
    title: "Web Development",
    body: "Modern web applications with responsive design, scalable backend infrastructure, and optimized performance for high traffic volumes.",
    deliverables: [
      "React, Next.js & Vue.js front-ends",
      "Node.js, Python & Go backends",
      "REST & GraphQL API design",
      "Microservices & Serverless architecture",
    ],
    accent: "from-blue-500/20 to-transparent",
  },
  {
    icon: Cpu,
    title: "AI & DevOps Engineering",
    body: "AI-powered development pipelines, CI/CD automation, cloud deployment, and infrastructure scaling for resilient systems.",
    deliverables: [
      "AI Code Generation & Workflow automation",
      "CI/CD with GitHub Actions & GitLab",
      "Docker & Kubernetes orchestration",
      "AWS, GCP & Azure Cloud Deployments",
    ],
    accent: "from-cyan-500/20 to-transparent",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance & Testing",
    body: "Automated testing suites, performance profiling, and vulnerability assessments ensuring flawless software delivery.",
    deliverables: [
      "Unit, integration & E2E automation",
      "Performance & load testing",
      "Security vulnerability assessments",
      "UAT & compliance validation",
    ],
    accent: "from-emerald-500/20 to-transparent",
  },
  {
    icon: Wrench,
    title: "Maintenance & Upgrades",
    body: "24/7 system monitoring, performance tuning, regular security patches, and legacy code modernization.",
    deliverables: [
      "24/7 monitoring & incident response",
      "Security patches & core upgrades",
      "Performance profiling & optimization",
      "Legacy system refactoring",
    ],
    accent: "from-amber-500/20 to-transparent",
  },
  {
    icon: Kanban,
    title: "Agile Project Management",
    body: "Agile planning, sprint execution, risk mitigation, and transparent delivery tracking to ship software on time and budget.",
    deliverables: [
      "Agile & Scrum sprint management",
      "Cross-team workflow optimization",
      "Risk mitigation & reporting",
      "Transparent client communications",
    ],
    accent: "from-rose-500/20 to-transparent",
  },
];

const techStack = [
  { name: "React & Next.js", icon: Code2 },
  { name: "Flutter & React Native", icon: Smartphone },
  { name: "Node.js & Python", icon: Terminal },
  { name: "AWS & Google Cloud", icon: Cloud },
  { name: "Docker & Kubernetes", icon: Layers },
  { name: "PostgreSQL & Redis", icon: Database },
  { name: "AI Workflows", icon: Sparkles },
  { name: "CI/CD Automation", icon: Zap },
  { name: "GraphQL & REST", icon: Globe2 },
  { name: "TypeScript", icon: Code2 },
  { name: "Firebase & Supabase", icon: Database },
  { name: "Tailwind CSS", icon: Layers },
  { name: "Swift & Kotlin", icon: Smartphone },
  { name: "Terraform & IaC", icon: Wrench },
  { name: "LangChain & LLMs", icon: Cpu },
  { name: "Monitoring & APM", icon: ShieldCheck },
];

const engagementModels = [
  {
    name: "Dedicated Tech Team",
    duration: "Monthly / Long-Term",
    ideal: "Companies needing full-stack engineers, AI specialists, and DevOps embedded in their workflow.",
    features: [
      "Senior full-stack engineers",
      "Agile sprint management",
      "AI-accelerated development",
      "Weekly demos & code reviews",
    ],
    highlight: true,
  },
  {
    name: "Fixed Scope Project",
    duration: "Milestone-Based",
    ideal: "Businesses looking to build an MVP, mobile app, or modern web platform with clear deliverables.",
    features: [
      "Defined scope & architecture plan",
      "Fixed budget & timeline guarantee",
      "End-to-end QA & deployment",
      "Post-launch support period",
    ],
    highlight: false,
  },
  {
    name: "Modernization & QA Audit",
    duration: "2-4 Weeks Sprint",
    ideal: "Existing products needing cloud migration, security upgrades, or performance optimization.",
    features: [
      "Architecture & security teardown",
      "Performance profiling report",
      "Refactoring & CI/CD setup",
      "Legacy system roadmap",
    ],
    highlight: false,
  },
];

export function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  // Estimator state
  const [teamSize, setTeamSize] = useState(3);
  const [durationMonths, setDurationMonths] = useState(6);
  const monthlyCost = teamSize * 8500;
  const totalCost = monthlyCost * durationMonths;

  return (
    <>
      {/* ─── HERO ─── */}
      <PageHero
        badge="CanbeTech Services"
        aiVariant="services"
        title={
          <>
            Intelligent Software Solutions,{" "}
            <span className="mt-2 block bg-gradient-to-r from-violet-400 via-primary to-purple-300 bg-clip-text text-transparent">
              Engineered to Scale
            </span>
          </>
        }
        description="From AI-powered development workflows and native mobile apps to scalable cloud microservices, CanbeTech delivers end-to-end software solutions tailored for modern enterprises worldwide."
        primaryCta={{ label: "Start Your Project", to: "/contact" }}
        secondaryCta={{ label: "Explore Work", to: "/work" }}
      >
        {/* Centered Cost Estimator */}
        <div className="mx-auto max-w-2xl">
          <div className="glass relative overflow-hidden rounded-[2rem] p-7 sm:p-8 text-left">
            <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-primary/20 blur-[60px]" />
            <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
              Software Team Estimator
            </h3>
            <p className="mt-1.5 text-xs text-muted-foreground">
              Calculate estimated investment for a dedicated CanbeTech engineering pod.
            </p>

            <div className="mt-7 space-y-6">
              <div>
                <div className="flex items-baseline justify-between">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Dedicated Engineers
                  </label>
                  <span className="font-display text-lg font-semibold text-foreground">
                    {teamSize} Senior Devs
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-[0_0_12px_var(--violet)]"
                />
                <div className="mt-1 flex justify-between text-[10px] text-muted-foreground/60">
                  <span>1 Engineer</span>
                  <span>10 Engineers</span>
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Project Duration
                  </label>
                  <span className="font-display text-lg font-semibold text-foreground">
                    {durationMonths} Months
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={12}
                  step={1}
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value))}
                  className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-[0_0_12px_var(--violet)]"
                />
                <div className="mt-1 flex justify-between text-[10px] text-muted-foreground/60">
                  <span>1 Month</span>
                  <span>12 Months</span>
                </div>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-foreground/5 p-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Monthly Investment</p>
                <p className="mt-1.5 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  ${monthlyCost.toLocaleString()}
                </p>
              </div>
              <div className="rounded-2xl bg-primary/8 p-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Est. Total</p>
                <p className="mt-1.5 font-display text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                  ${totalCost.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageHero>

      {/* ─── CAPABILITIES SWITCHER ─── */}
      <section className="relative mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
        <Reveal className="text-left">
          <SectionLabel>Full-Spectrum Engineering</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl">
            Modern Technologies,{" "}
            <span className="block bg-gradient-to-r from-violet-400 via-primary to-purple-300 bg-clip-text text-transparent">
              Flawless Execution
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[340px_1fr]">
          <div className="space-y-2">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <button
                  key={cap.title}
                  type="button"
                  onClick={() => setActiveService(i)}
                  className={`group flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-400 ${activeService === i
                      ? "glass border-primary/40 bg-foreground/5"
                      : "border border-transparent hover:bg-foreground/3"
                    }`}
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors duration-300 ${activeService === i
                        ? "bg-primary/15 text-primary"
                        : "bg-foreground/5 text-muted-foreground group-hover:text-foreground"
                      }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span
                      className={`block text-sm font-medium tracking-tight transition-colors ${activeService === i ? "text-foreground" : "text-foreground/80"
                        }`}
                    >
                      {cap.title}
                    </span>
                  </span>
                  <ChevronRight
                    className={`ml-auto h-4 w-4 shrink-0 transition-all duration-300 ${activeService === i
                        ? "translate-x-0 text-primary opacity-100"
                        : "-translate-x-1 text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                      }`}
                  />
                </button>
              );
            })}
          </div>

          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
            className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-10"
          >
            <div className={`pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br ${capabilities[activeService].accent} blur-[60px]`} />

            {(() => {
              const cap = capabilities[activeService];
              const Icon = cap.icon;
              return (
                <>
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/12 text-primary">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                        {cap.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 max-w-lg text-[15px] leading-[1.8] text-muted-foreground">
                    {cap.body}
                  </p>
                  <div className="mt-8">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      Capabilities & Features
                    </p>
                    <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {cap.deliverables.map((d, di) => (
                        <motion.div
                          key={d}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: di * 0.06, ease }}
                          className="flex items-center gap-3 rounded-xl bg-foreground/4 px-4 py-3 text-sm text-foreground/80"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          {d}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </div>
      </section>

      {/* ─── TECH STACK GRID ─── */}
      <section className="border-y border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              Modern Tech Ecosystem
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl md:text-6xl">
              Built With Cutting-Edge{" "}
              <span className="bg-gradient-to-r from-violet-400 via-primary to-purple-300 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {techStack.map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal key={t.name} delay={i * 0.05}>
                  <div className="glass group flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-all duration-400 hover:-translate-y-1 hover:border-primary/30">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-foreground/5 text-muted-foreground transition-colors duration-300 group-hover:bg-primary/12 group-hover:text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[12px] font-medium tracking-wide text-foreground">
                      {t.name}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ENGAGEMENT MODELS ─── */}
      <section className="relative mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
        <Reveal className="text-left">
          <SectionLabel>Engagement Options</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl">
            Flexible Models,{" "}
            <span className="bg-gradient-to-r from-violet-400 via-primary to-purple-300 bg-clip-text text-transparent">
              Predictable Results
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {engagementModels.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-7 transition-colors duration-500 ${tier.highlight
                    ? "glass border-primary/40"
                    : "glass hover:border-primary/25"
                  }`}
              >
                {tier.highlight && (
                  <span className="absolute right-5 top-5 rounded-full bg-[var(--gradient-cta)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-foreground">
                    Recommended
                  </span>
                )}

                <p className="text-[10px] uppercase tracking-[0.2em] text-primary/70">{tier.duration}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground">
                  {tier.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tier.ideal}</p>

                <ul className="mt-6 flex-1 space-y-2.5 border-t border-border/60 pt-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] text-foreground/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${tier.highlight
                      ? "btn-cta text-primary-foreground"
                      : "border border-border text-foreground/80 hover:border-primary/40 hover:text-foreground"
                    }`}
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── FREQUENTLY ASKED QUESTIONS ─── */}
      <FAQ />
    </>
  );
}
