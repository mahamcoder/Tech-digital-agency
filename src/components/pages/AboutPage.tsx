import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import {
  MapPin,
  Clock,
  Users,
  Trophy,
  Sparkles,
  Globe,
  Star,
  Cpu,
  Zap,
  ShieldCheck,
  Layers,
  Linkedin,
  Github,
  Twitter,
  CheckCircle2,
  Calendar,
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
    color: "from-purple-500/30 to-violet-500/10",
    social: { linkedin: "https://linkedin.com", github: "https://github.com", twitter: "https://twitter.com" },
  },
  {
    name: "Alex Chen",
    role: "VP Engineering",
    specialization: "Full-Stack Architecture",
    bio: "Ex-Google tech lead, 12+ years building high-throughput microservices and distributed databases.",
    initials: "AC",
    color: "from-blue-500/30 to-cyan-500/10",
    social: { linkedin: "https://linkedin.com", github: "https://github.com", twitter: "https://twitter.com" },
  },
  {
    name: "Maya Okafor",
    role: "Head of Mobile & UI/UX",
    specialization: "iOS & Android",
    bio: "Built 30+ native and React Native apps with millions of active users and award-winning interfaces.",
    initials: "MO",
    color: "from-emerald-500/30 to-teal-500/10",
    social: { linkedin: "https://linkedin.com", github: "https://github.com", twitter: "https://twitter.com" },
  },
  {
    name: "Sarah Kim",
    role: "Lead DevOps & QA",
    specialization: "CI/CD & Cloud Infrastructure",
    bio: "Specializes in Kubernetes, AWS multi-cloud automation, and automated zero-downtime deployments.",
    initials: "SK",
    color: "from-amber-500/30 to-orange-500/10",
    social: { linkedin: "https://linkedin.com", github: "https://github.com", twitter: "https://twitter.com" },
  },
];

const timelineMilestones = [
  { year: "2020", title: "Agency Founded", desc: "Started as a high-precision software engineering shop specializing in full-stack cloud applications." },
  { year: "2022", title: "AI & ML R&D Lab", desc: "Integrated dedicated artificial intelligence workflows, LLM automation, and predictive analytics into core client deliverables." },
  { year: "2024", title: "Global Expansion", desc: "Established strategic regional hubs in London, New York, and Bahawalpur HQ to serve 200+ clients across 15 countries." },
  { year: "2026", title: "500+ Projects Scale", desc: "Delivering autonomous AI software agents, enterprise SaaS, and modern mobile solutions with guaranteed SLAs." },
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
      <PageHero
        badge="About CanbeTech"
        aiVariant="about"
        title={
          <>
            Building tomorrow's
            <span className="mt-2 block bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              technology solutions today
            </span>
          </>
        }
        description="CanbeTech is a modern software company delivering professional digital solutions powered by AI, intelligent automation, and scalable cloud architectures — built to transform how businesses operate in the digital age."
        primaryCta={{ label: "Start Your Project", to: "/contact" }}
        secondaryCta={{ label: "Explore Services", to: "/services" }}
      >
        {/* Stat bar */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 + i * 0.08, ease }}
                whileHover={{ y: -4 }}
                className="glass group relative overflow-hidden rounded-2xl p-5 text-center transition-colors duration-500 hover:border-primary/30"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <Icon className="mx-auto h-5 w-5 text-primary/60" />
                <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs text-muted-foreground">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </PageHero>

      {/* ─── VISION & MISSION ─── */}
      <section className="border-y border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="glass rounded-[2rem] p-8 sm:p-10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary">Our Vision</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  Empowering global organizations with AI & Cloud
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  To be the world's most trusted technology partner — empowering organizations of every size to harness
                  the full potential of AI, intelligent automation, and cloud-native architectures to build a smarter, more connected future.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass rounded-[2rem] p-8 sm:p-10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary">Our Mission</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  Precision-engineered digital solutions
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  To deliver precision-engineered digital solutions that solve complex business challenges — combining deep technical
                  expertise with a relentless focus on quality, scalability, and measurable outcomes for every client we serve.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── TEAM SECTION ─── */}
      <section className="relative mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
        <Reveal className="text-left">
          <SectionLabel>Leadership & Engineering</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Meet the Minds Behind{" "}
            <span className="bg-gradient-to-r from-violet-400 via-primary to-purple-300 bg-clip-text text-transparent">
              CanbeTech
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Our team brings together senior architects, AI researchers, UI designers, and DevOps engineers with decades of combined experience.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -7 }}
                transition={{ duration: 0.35, ease }}
                className="glass group relative flex h-full flex-col overflow-hidden rounded-[2rem] transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15"
              >
                {/* Gradient Top Strip */}
                <div className={`h-28 w-full bg-gradient-to-br ${m.color} relative overflow-hidden`}>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_60%)]" />
                  {/* Floating Specialization Badge */}
                  <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-background/60 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-foreground font-medium backdrop-blur-md">
                    {m.specialization}
                  </span>
                </div>

                {/* Avatar overlapping the strip */}
                <div className="relative -mt-10 px-6">
                  <div className={`grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br ${m.color} font-display text-2xl font-bold tracking-wider text-foreground ring-4 ring-background shadow-lg transition-transform duration-300 group-hover:scale-105`}>
                    {m.initials}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between px-6 pb-6 pt-4">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">{m.name}</h3>
                    <p className="mt-0.5 text-sm font-medium bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">{m.role}</p>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{m.bio}</p>
                  </div>

                  {/* Social Links */}
                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                    <a href={m.social.linkedin} target="_blank" rel="noopener noreferrer" className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-muted-foreground transition-all hover:bg-primary/15 hover:text-primary">
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                    <a href={m.social.github} target="_blank" rel="noopener noreferrer" className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-muted-foreground transition-all hover:bg-primary/15 hover:text-primary">
                      <Github className="h-3.5 w-3.5" />
                    </a>
                    <a href={m.social.twitter} target="_blank" rel="noopener noreferrer" className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-muted-foreground transition-all hover:bg-primary/15 hover:text-primary">
                      <Twitter className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── GROWTH TIMELINE ─── */}
      <section className="border-y border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="text-left">
            <SectionLabel>Our Journey</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Timeline of{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {timelineMilestones.map((ms, i) => (
              <Reveal key={ms.year} delay={i * 0.08}>
                <div className="glass relative flex h-full flex-col justify-between rounded-3xl p-7 transition-all hover:border-primary/30">
                  <div>
                    <span className="inline-block rounded-xl bg-primary/12 px-3.5 py-1.5 font-display text-lg font-bold text-primary">
                      {ms.year}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground">
                      {ms.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {ms.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="relative mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
        <Reveal className="text-left">
          <SectionLabel>Why Choose CanbeTech</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            We Don't Just Write Code —{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              We Engineer Solutions
            </span>
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
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ─── GLOBAL LOCATIONS ─── */}
      <section className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="text-left">
            <SectionLabel>Global Operations</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Four Hubs,{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                Global Reach
              </span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-[340px_1fr]">
            <div className="space-y-2">
              {locations.map((loc, i) => (
                <button
                  key={loc.city}
                  type="button"
                  onClick={() => setActiveLocation(i)}
                  className={`group flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-400 ${activeLocation === i
                    ? "glass border-primary/30 bg-foreground/5"
                    : "border border-transparent hover:bg-foreground/3"
                    }`}
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors ${activeLocation === i
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
