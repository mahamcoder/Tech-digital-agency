import { Reveal, SectionLabel } from "./Reveal";
import { Link } from "@tanstack/react-router";
import {
  Smartphone,
  Globe2,
  Infinity as InfinityIcon,
  ShieldCheck,
  Wrench,
  Kanban,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tag: "iOS & Android",
    body: "React Native, Flutter, Swift, Kotlin — cross-platform and native iOS/Android apps built for speed, offline reliability, and buttery-smooth UX.",
    icon: Smartphone,
  },
  {
    slug: "web-development",
    title: "Web Development",
    tag: "Full-Stack & APIs",
    body: "React, Next.js, Node.js/Python/Go backends, REST/GraphQL, microservices, and high-concurrency web architecture tailored for hyper-scale.",
    icon: Globe2,
  },
  {
    slug: "devops-cloud",
    title: "DevOps & Cloud",
    tag: "CI/CD & Cloud",
    body: "CI/CD pipelines, Docker, Kubernetes, AWS/Azure/GCP, automated testing, environment provisioning, and 99.99% uptime infrastructure resilience.",
    icon: InfinityIcon,
  },
  {
    slug: "quality-assurance",
    title: "Quality Assurance",
    tag: "QA & Security",
    body: "Manual testing, automated test suites, end-to-end regression, performance benchmarking, security vulnerability checks and rigorous QA audits.",
    icon: ShieldCheck,
  },
  {
    slug: "maintenance-upgrades",
    title: "Maintenance & Upgrades",
    tag: "24/7 Monitoring",
    body: "Ongoing SLA support, continuous feature rollouts, legacy code refactoring, speed optimization, and regular enterprise security patches.",
    icon: Wrench,
  },
  {
    slug: "project-management",
    title: "Project Management",
    tag: "Agile & Delivery",
    body: "Agile workflows, Scrum, Kanban, Jira/Asana dashboards, transparent sprint velocity tracking, and clear executive milestone alignment.",
    icon: Kanban,
  },
];

export function Services({ isTeaser }: { isTeaser?: boolean } = {}) {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[380px] w-[800px] max-w-[120vw] -translate-x-1/2 rounded-full bg-primary/12 blur-[160px]" />

      <Reveal className="max-w-3xl text-left">
        <SectionLabel>What we do</SectionLabel>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
          A Full Growth Engine,{" "}
          <span className="block bg-gradient-to-r from-[#06B6D4] via-[#2563FF] to-[#8B5CF6] bg-clip-text text-transparent">
            Built in One Orbit
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Specialized end-to-end software engineering pods that design, build, test, and scale mission-critical products.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = s.icon;
          const targetUrl = `/services?service=${s.slug}#capabilities`;

          return (
            <Reveal key={s.title} delay={i * 0.07}>
              <Link
                to={targetUrl}
                className="group block h-full focus:outline-none"
              >
                <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0E1526]/90 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_-5px_rgba(37,99,255,0.25)]">
                  {/* Corner ambient glow on hover */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Subtle top border illumination */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                  <div>
                    {/* Icon badge + Tag */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/8 shadow-[0_0_20px_-4px_rgba(37,99,255,0.3)] transition-transform duration-500 group-hover:scale-110">
                        <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
                      </div>

                      <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/8 px-3 py-1 text-xs font-semibold tracking-wide text-blue-300">
                        {s.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-[0.935rem] leading-relaxed text-slate-300">
                      {s.body}
                    </p>
                  </div>

                  {/* Footer CTA */}
                  <div className="mt-6 flex items-center gap-1.5 border-t border-white/5 pt-4 text-xs font-semibold text-slate-400 transition-colors duration-300 group-hover:text-white">
                    <span className="group-hover:underline">Explore capabilities</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-400" />
                  </div>
                </article>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
