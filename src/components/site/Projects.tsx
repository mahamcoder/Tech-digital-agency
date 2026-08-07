import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionLabel } from "./Reveal";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import p1 from "@/assets/image copy.png";
import p2 from "@/assets/image copy 2.png";
import p3 from "@/assets/image copy 3.png";
import p4 from "@/assets/image copy 4.png";

const projects = [
  {
    img: p1,
    title: "Nova Finance",
    tag: "Analytics & Performance",
    result: "-42% CAC",
    span: "lg:col-span-7",
    caseStudyUrl: "/work",
  },
  {
    img: p2,
    title: "Halo Health",
    tag: "Brand & Creative",
    result: "3.1x ROAS",
    span: "lg:col-span-5",
    caseStudyUrl: "/work",
  },
  {
    img: p3,
    title: "Lumen Labs",
    tag: "Commerce Launch",
    result: "$18M GMV",
    span: "lg:col-span-5",
    caseStudyUrl: "/work",
  },
  {
    img: p4,
    title: "Atlas Cloud",
    tag: "Lifecycle CRM",
    result: "+68% LTV",
    span: "lg:col-span-7",
    caseStudyUrl: "/work",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden py-14 md:py-20"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[900px] max-w-[130vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="max-w-3xl text-left">
          <SectionLabel>Selected projects</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl">
            Work That Moved{" "}
            <span className="block sm:inline bg-gradient-to-r from-violet-400 via-primary to-purple-300 bg-clip-text text-transparent">
              The Numbers
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className={p.span}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass group relative h-full overflow-hidden rounded-[2rem] p-2 transition-colors duration-500 hover:border-primary/40"
              >
                <div className="relative overflow-hidden rounded-[1.6rem]">
                  <img
                    src={p.img}
                    alt={`${p.title} — ${p.tag} case study`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-[260px] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] sm:h-[320px]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-primary/30 bg-background/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                    {p.tag}
                  </span>

                  {/* Hover overlay with Show Case Study button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                    <Link
                      to={p.caseStudyUrl}
                      className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-5 py-2.5 text-xs font-medium text-primary backdrop-blur-md transition-all duration-300 hover:bg-primary/25 hover:scale-105"
                    >
                      Show Case Study
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="flex items-end justify-between gap-4 px-4 pb-4 pt-5">
                  <div className="min-w-0">
                    <h3 className="text-xl tracking-tight">{p.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Growth partnership
                    </p>
                  </div>
                  <span className="shrink-0 text-lg text-primary">
                    {p.result}
                  </span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {/* See More Button */}
        <Reveal delay={0.3}>
          <div className="mt-10 flex justify-center">
            <Link
              to="/work"
              className="group inline-flex items-center gap-2.5 rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
            >
              See more projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
