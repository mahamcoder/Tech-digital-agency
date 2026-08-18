import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionLabel } from "./Reveal";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectMockup } from "./ProjectMockup";

const projects = [
  {
    id: "maven-clinic",
    title: "Maven Clinic",
    tag: "Healthcare / Virtual Care",
    result: "2.4M+ Patients",
    note: "Virtual care & specialist consultations",
    span: "lg:col-span-7",
    caseStudyUrl: "/work",
  },
  {
    id: "track-pod",
    title: "Track-POD",
    tag: "Logistics / Delivery Management",
    result: "99.4% On-Time",
    note: "Cloud dispatch & driver mobile ePOD",
    span: "lg:col-span-5",
    caseStudyUrl: "/work",
  },
  {
    id: "lasa-property",
    title: "LASA Property Management",
    tag: "Property / Rental Management",
    result: "10k+ Units",
    note: "Multi-role leasing & maintenance portal",
    span: "lg:col-span-5",
    caseStudyUrl: "/work",
  },
  {
    id: "beli",
    title: "Beli",
    tag: "Restaurant Discovery / Social",
    result: "5M+ Ratings",
    note: "Social ranking tier lists & foodie maps",
    span: "lg:col-span-7",
    caseStudyUrl: "/work",
  },
  {
    id: "zama-app",
    title: "ZamaApp",
    tag: "School Management / EdTech",
    result: "50k+ Students",
    note: "Admin ERP, gradebook & parent portal",
    span: "lg:col-span-7",
    caseStudyUrl: "/work",
  },
  {
    id: "traveloup",
    title: "Traveloup",
    tag: "Travel Marketplace / Booking",
    result: "100k+ Tours",
    note: "Curated trip booking & tour operator SaaS",
    span: "lg:col-span-5",
    caseStudyUrl: "/work",
  },
];

export function Projects({ isTeaser }: { isTeaser?: boolean } = {}) {
  const displayProjects = isTeaser ? projects.slice(0, 4) : projects;

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden py-14 md:py-20"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[900px] max-w-[130vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="max-w-3xl text-left">
          <SectionLabel>Selected real-world references</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl">
            Real Products,{" "}
            <span className="block sm:inline bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              Proven Architecture
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            Explore production-grade web platforms, mobile applications, and backend workflows across diverse industries.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {displayProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className={p.span}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass group relative h-full overflow-hidden rounded-[2rem] p-2 transition-colors duration-500 hover:border-primary/40"
              >
                <div className="relative h-[260px] w-full overflow-hidden rounded-[1.6rem] sm:h-[320px]">
                  <ProjectMockup
                    id={p.id}
                    className="h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  <span className="absolute left-4 top-4 rounded-full border border-slate-200/80 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-800 shadow-sm backdrop-blur-md">
                    {p.tag}
                  </span>

                  {/* Hover overlay with Show Case Study button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                    <Link
                      to={p.caseStudyUrl}
                      className="btn-cta inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105"
                    >
                      Show Case Study
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="flex items-end justify-between gap-4 px-4 pb-4 pt-5">
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold tracking-tight text-white">{p.title}</h3>
                    <p className="mt-1 text-xs text-slate-300">
                      {p.note}
                    </p>
                  </div>
                  <span className="shrink-0 text-lg font-semibold text-primary">
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
              See all 9 real-world case studies
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
