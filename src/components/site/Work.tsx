import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal, SectionLabel } from "./Reveal";

const work = [
  { client: "Halo Health", tag: "Performance + Lifecycle", metric: "+312%", note: "qualified pipeline in 9 months" },
  { client: "Nova Finance", tag: "Brand + Web Experience", metric: "-41%", note: "blended cost per acquisition" },
  { client: "Atlas Retail", tag: "Creative + Media", metric: "6.8x", note: "return on ad spend at scale" },
  { client: "Lumen Labs", tag: "Growth Analytics", metric: "+128%", note: "net revenue retention lift" },
];

export function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section id="case-studies" ref={ref} className="relative overflow-hidden py-28 md:py-36">
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-[420px] w-[900px] max-w-[130vw] rounded-full bg-accent/12 blur-[170px]"
      />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="max-w-2xl">
          <SectionLabel>Case studies</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
            Outcomes, not
            <span className="font-serif italic"> impressions</span>
          </h2>
        </Reveal>

        <div id="work" className="mt-14 divide-y divide-border/70 border-y border-border/70">
          {work.map((w, i) => (
            <Reveal key={w.client} delay={i * 0.05}>
              <a
                href="#contact"
                className="group relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-7 transition-colors sm:flex sm:justify-between"
              >
                <span className="pointer-events-none absolute inset-x-[-2rem] inset-y-0 -z-10 rounded-3xl bg-gradient-to-r from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="min-w-0">
                  <h3 className="truncate text-2xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                    {w.client}
                  </h3>
                  <p className="mt-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {w.tag}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-display text-2xl text-primary sm:text-3xl">{w.metric}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{w.note}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
