import { motion } from "motion/react";
import { Reveal, SectionLabel } from "./Reveal";
import {
  Cpu,
  Bot,
  Sparkles,
  Code2,
  Globe,
  Server,
  Terminal,
  Database,
  Cloud,
  Layers,
  Box,
  Flame,
} from "lucide-react";

const technologies = [
  { name: "OpenAI", category: "AI & LLM Engine", icon: Bot, color: "from-emerald-500/20 to-teal-500/10" },
  { name: "Claude", category: "Anthropic AI", icon: Sparkles, color: "from-amber-500/20 to-orange-500/10" },
  { name: "Gemini", category: "Google AI", icon: Cpu, color: "from-blue-500/20 to-indigo-500/10" },
  { name: "React", category: "Frontend Framework", icon: Code2, color: "from-cyan-500/20 to-blue-500/10" },
  { name: "Next.js", category: "Fullstack Framework", icon: Globe, color: "from-purple-500/20 to-violet-500/10" },
  { name: "Node.js", category: "Backend Runtime", icon: Server, color: "from-green-500/20 to-emerald-500/10" },
  { name: "Python", category: "AI & ML Core", icon: Terminal, color: "from-yellow-500/20 to-amber-500/10" },
  { name: "TensorFlow", category: "Deep Learning", icon: Layers, color: "from-orange-500/20 to-red-500/10" },
  { name: "MongoDB", category: "NoSQL Database", icon: Database, color: "from-emerald-500/20 to-green-500/10" },
  { name: "Supabase", category: "Postgres Backend", icon: Flame, color: "from-teal-500/20 to-emerald-500/10" },
  { name: "AWS", category: "Cloud Infrastructure", icon: Cloud, color: "from-amber-500/20 to-orange-500/10" },
  { name: "Docker", category: "Containerization", icon: Box, color: "from-sky-500/20 to-blue-500/10" },
];

export function TrustedTech() {
  return (
    <section id="trusted-tech" className="relative isolate overflow-hidden py-12 md:py-16">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[450px] w-[850px] max-w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="text-left">
          <SectionLabel>Technology Stack</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Trusted Technologies{" "}<br/>
            <span className="bg-gradient-to-r from-violet-400 via-primary to-purple-300 bg-clip-text text-transparent">
               & AI Frameworks
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            We architect production-grade software using the industry’s most powerful AI models, modern full-stack web frameworks, and cloud infrastructure.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {technologies.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.name} delay={i * 0.04}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="glass group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 p-5 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${t.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15">
                    <Icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
                  </span>

                  <span className="mt-3 text-base font-semibold tracking-tight text-foreground">
                    {t.name}
                  </span>

                  <span className="mt-1 text-[11px] text-muted-foreground">
                    {t.category}
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
