import { motion } from "motion/react";
import { Reveal, SectionLabel } from "./Reveal";
import {
  BrainCircuit,
  Zap,
  Layers,
  ShieldCheck,
  Headphones,
  Gauge,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI-First Development",
    description:
      "We embed intelligent AI workflows, custom LLM fine-tuning, and autonomous agents directly into your core product architecture.",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    border: "group-hover:border-violet-500/50",
    glow: "group-hover:shadow-violet-500/20",
    badge: "Intelligence",
  },
  {
    icon: Zap,
    title: "Fast Delivery Cadence",
    description:
      "Production-ready code shipped every single week. Our 1-week sprint cycles accelerate product launches by 3x.",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    border: "group-hover:border-amber-500/50",
    glow: "group-hover:shadow-amber-500/20",
    badge: "Speed",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Built for millions of requests. We design resilient microservices, serverless backends, and auto-scaling cloud infrastructure.",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    border: "group-hover:border-blue-500/50",
    glow: "group-hover:shadow-blue-500/20",
    badge: "Infrastructure",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Bank-grade data encryption, automated vulnerability scanning, and strict compliance standards built in from line one.",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    border: "group-hover:border-emerald-500/50",
    glow: "group-hover:shadow-emerald-500/20",
    badge: "Security",
  },
  {
    icon: Headphones,
    title: "Dedicated Engineering Support",
    description:
      "Direct Slack access to your dedicated senior tech pod. Instant response SLAs with 24/7 proactive infrastructure monitoring.",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    border: "group-hover:border-pink-500/50",
    glow: "group-hover:shadow-pink-500/20",
    badge: "Support",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Sub-100ms API response times, database query tuning, and aggressive caching strategies for maximum conversion performance.",
    gradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
    border: "group-hover:border-cyan-500/50",
    glow: "group-hover:shadow-cyan-500/20",
    badge: "Performance",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative isolate overflow-hidden py-14 md:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[900px] max-w-[130vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[170px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="max-w-3xl text-left">
          <SectionLabel>Why Choose CanbeTech</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl">
            Engineering Excellence That{" "}
            <span className="block sm:inline bg-gradient-to-r from-violet-400 via-primary to-purple-300 bg-clip-text text-transparent">
              Compounds
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We don't just write code — we engineer high-performance software systems designed for speed, scale, and long-term enterprise value.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className={`glass group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.2rem] border border-white/10 p-8 transition-all duration-500 hover:shadow-2xl ${f.border} ${f.glow}`}
                >
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${f.gradient} blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid h-13 w-13 place-items-center rounded-2xl bg-white/5 text-primary ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15 group-hover:ring-primary/30">
                        <Icon className="h-6.5 w-6.5 transition-transform duration-300 group-hover:rotate-6" />
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-primary">
                        {f.badge}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                      {f.title}
                    </h3>

                    <p className="mt-3.5 text-base leading-relaxed text-muted-foreground">
                      {f.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span>Learn more</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
