import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { ShieldCheck, Sparkles, Zap, Clock, Server } from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "AI & Cloud Projects",
    sub: "Delivered on schedule",
    icon: Sparkles,
  },
  {
    value: "15+",
    label: "Core Technologies",
    sub: "Full-stack & AI models",
    icon: Zap,
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    sub: "Long-term partnerships",
    icon: ShieldCheck,
  },
  {
    value: "24/7",
    label: "Dedicated Support",
    sub: "< 2 hr SLA response",
    icon: Clock,
  },
  {
    value: "99.9%",
    label: "Target Uptime SLA",
    sub: "Enterprise reliability",
    icon: Server,
  },
];

export function Statistics() {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/10 bg-white/2 py-20 md:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[300px] w-[800px] max-w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col items-center text-center"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 text-primary ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-primary/15 group-hover:ring-primary/30">
                    <Icon className="h-6 w-6" />
                  </span>

                  <span className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                    {s.value}
                  </span>

                  <span className="mt-2 text-sm font-semibold tracking-wide text-foreground">
                    {s.label}
                  </span>

                  <span className="mt-1 text-xs text-muted-foreground">
                    {s.sub}
                  </span>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
