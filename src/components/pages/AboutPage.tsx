import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import {
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Trophy,
  Sparkles,
  Globe,
  Star,
  CheckCircle2,
  Cpu,
  Zap,
  ShieldCheck,
  Layers,
  Code2,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "500+", label: "Projects Delivered", icon: Trophy },
  { value: "200+", label: "Clients Worldwide", icon: Globe },
  { value: "98%", label: "Client Satisfaction", icon: Sparkles },
  { value: "5.0 ★", label: "Clutch & G2 Rating", icon: Star },
];

const team = [
  {
    name: "Ali Hassan",
    role: "Founder & Lead Architect",
    specialization: "Cloud & AI Systems",
    bio: "10+ years engineering scalable software architectures, multi-tenant platforms, and AI-powered workflows.",
    initials: "AH",
  },
  {
    name: "Alex Chen",
    role: "VP Engineering",
    specialization: "Full-Stack Architecture",
    bio: "Ex-Google tech lead, 12+ years building high-throughput microservices and distributed databases.",
    initials: "AC",
  },
  {
    name: "Maya Okafor",
    role: "Head of Mobile & UI/UX",
    specialization: "iOS & Android",
    bio: "Built 30+ native and React Native apps with millions of active users and award-winning interfaces.",
    initials: "MO",
  },
  {
    name: "Sarah Kim",
    role: "Lead DevOps & QA",
    specialization: "CI/CD & Cloud Infrastructure",
    bio: "Specializes in Kubernetes, AWS multi-cloud automation, and automated zero-downtime deployments.",
    initials: "SK",
  },
];

const locations = [
  {
    city: "Bahawalpur",
    timezone: "Asia/Karachi",
    address: "191-B Hashmi Garden",
    teamSize: "40+ Engineers",
    focus: "HQ & Product Development",
  },
  {
    city: "London",
    timezone: "Europe/London",
    address: "Shoreditch High St",
    teamSize: "15 Specialists",
    focus: "EMEA Strategy & Solutions",
  },
  {
    city: "New York",
    timezone: "America/New_York",
    address: "401 Broadway, SoHo",
    teamSize: "20 Specialists",
    focus: "US Client Operations",
  },
  {
    city: "Remote",
    timezone: "UTC",
    address: "Worldwide",
    teamSize: "30+ Engineers",
    focus: "DevOps & AI Research",
  },
];

const features = [
  {
    icon: Cpu,
    title: "AI-Powered SDLC",
    body: "We integrate artificial intelligence into code generation, automated review, and test orchestration to ship 3x faster.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    body: "Designed from ground up to scale horizontally, handling millions of users without degrading uptime or performance.",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous QA & Security",
    body: "Automated unit, E2E, and load testing pipelines ensure every release meets enterprise-grade stability standards.",
  },
  {
    icon: Zap,
    title: "Agile & Transparent",
    body: "Weekly demos, real-time code repositories, and direct Slack communication with your dedicated dev pod.",
  },
];

function LiveClock({ timezone }: { timezone: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      try {
        setTime(
          new Intl.DateTimeFormat("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: timezone,
            hour12: true,
          }).format(new Date())
        );
      } catch {
        setTime("--:--");
      }
    };
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, [timezone]);

  return <span>{time}</span>;
}

export function AboutPage() {
  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative isolate overflow-hidden pb-20 pt-32 sm:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[8%] top-[15%] h-[400px] w-[500px] rounded-full bg-primary/10 blur-[160px]" />
          <div className="absolute right-[15%] bottom-[5%] h-[300px] w-[380px] rounded-full bg-accent/8 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease }}
              >
                <SectionLabel>About CanbeTech</SectionLabel>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease }}
                className="mt-7 font-display text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl"
              >
                Building tomorrow's
                <span className="mt-2 block font-serif text-[0.88em] font-normal italic text-primary">
                  technology solutions today
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease }}
                className="mt-8 space-y-5"
              >
                <p className="max-w-[56ch] text-[15px] leading-[1.8] text-muted-foreground">
                  CanbeTech is a modern software company delivering professional digital solutions powered by AI,
                  intelligent automation, and scalable cloud architectures — built to transform how businesses operate
                  in the digital age.
                </p>
                <p className="max-w-[56ch] text-[15px] leading-[1.8] text-muted-foreground">
                  We combine deep technical expertise with a relentless focus on quality, scalability, and measurable
                  outcomes for over 200+ companies across 14+ countries.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease }}
                className="mt-9 flex flex-wrap gap-3"
              >
                <Link
                  to="/contact"
                  className="btn-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground"
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>

            {/* Right: Live stat matrix */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3, ease }}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.35, ease }}
                    className="glass group relative overflow-hidden rounded-2xl p-6 transition-colors duration-500 hover:border-primary/30"
                  >
                    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                    <Icon className="h-5 w-5 text-primary/60" />
                    <p className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground">
                      {s.value}
                    </p>
                    <p className="mt-1.5 text-xs text-muted-foreground">{s.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── VISION & MISSION ─── */}
      <section className="border-y border-border/60 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="glass rounded-[2rem] p-8 sm:p-10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary/70">Our Vision</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                  Empowering global organizations with AI & Cloud
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  To be the world's most trusted technology partner — empowering organizations of every size to harness
                  the full potential of AI, intelligent automation, and cloud-native architectures to build a smarter, more connected future.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass rounded-[2rem] p-8 sm:p-10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary/70">Our Mission</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                  Precision-engineered digital solutions
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  To deliver precision-engineered digital solutions that solve complex business challenges — combining deep technical
                  expertise with a relentless focus on quality, scalability, and measurable outcomes for every client we serve.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <SectionLabel>Why Choose CanbeTech</SectionLabel>
          <h2 className="mt-6 max-w-lg font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
            We don't just write code —
            <span className="font-serif italic text-primary"> we engineer solutions</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.07}>
                <div className="glass group relative h-full overflow-hidden rounded-[1.75rem] p-7 transition-colors duration-500 hover:border-primary/30">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-foreground/5 text-muted-foreground transition-colors group-hover:bg-primary/12 group-hover:text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ─── GLOBAL LOCATIONS ─── */}
      <section className="border-t border-border/60 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <SectionLabel>Global Operations</SectionLabel>
            <h2 className="mt-6 max-w-lg font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Four hubs,
              <span className="font-serif italic text-primary"> global reach</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-[340px_1fr]">
            <div className="space-y-2">
              {locations.map((loc, i) => (
                <button
                  key={loc.city}
                  type="button"
                  onClick={() => setActiveLocation(i)}
                  className={`group flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-400 ${
                    activeLocation === i
                      ? "glass border-primary/30 bg-foreground/5"
                      : "border border-transparent hover:bg-foreground/3"
                  }`}
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors ${
                      activeLocation === i
                        ? "bg-primary/15 text-primary"
                        : "bg-foreground/5 text-muted-foreground"
                    }`}
                  >
                    {loc.city === "Remote" ? (
                      <Globe className="h-5 w-5" />
                    ) : (
                      <MapPin className="h-5 w-5" />
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className={`block text-sm font-medium tracking-tight ${activeLocation === i ? "text-foreground" : "text-foreground/80"}`}>
                      {loc.city}
                    </span>
                    <span className="block text-xs text-muted-foreground">{loc.focus}</span>
                  </div>
                </button>
              ))}
            </div>

            <motion.div
              key={activeLocation}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease }}
              className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-10"
            >
              {(() => {
                const loc = locations[activeLocation];
                return (
                  <>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-display text-3xl font-semibold tracking-tight text-foreground">
                          {loc.city}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">{loc.focus}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1.5 text-sm text-foreground">
                          <Clock className="h-3.5 w-3.5 text-primary/60" />
                          <LiveClock timezone={loc.timezone} />
                        </div>
                        <p className="mt-0.5 text-[10px] text-muted-foreground/60">Local time</p>
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-foreground/4 p-4">
                        <MapPin className="h-4 w-4 text-primary/60" />
                        <p className="mt-2 text-sm text-foreground/80">{loc.address}</p>
                        <p className="mt-0.5 text-[10px] text-muted-foreground">Location</p>
                      </div>
                      <div className="rounded-xl bg-foreground/4 p-4">
                        <Users className="h-4 w-4 text-primary/60" />
                        <p className="mt-2 text-sm text-foreground/80">{loc.teamSize}</p>
                        <p className="mt-0.5 text-[10px] text-muted-foreground">Engineering team</p>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
