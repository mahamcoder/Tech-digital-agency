import { Reveal, SectionLabel } from "./Reveal";

const services = [
  {
    title: "Mobile App Development",
    body: "React Native, Flutter, Swift, Kotlin — cross-platform and native iOS/Android apps",
    icon: (
      <>
        <circle cx="24" cy="24" r="14" />
        <circle cx="24" cy="24" r="5" />
        <path d="M24 2v8M24 38v8M2 24h8M38 24h8" />
      </>
    ),
  },
  {
    title: "Web Development",
    body: "React, Next.js, Node.js/Python/Go backends, REST/GraphQL, microservices",
    icon: (
      <>
        <path d="M6 34l10-12 8 7 12-17" />
        <path d="M28 12h8v8" />
        <path d="M6 42h36" />
      </>
    ),
  },
  {
    title: "DevOps",
    body: "CI/CD pipelines, Docker, Kubernetes, AWS/Azure/GCP, automated testing, environment provisioning",
    icon: (
      <>
        <rect x="6" y="12" width="24" height="24" rx="4" />
        <path d="M30 22l12-7v18l-12-7z" />
      </>
    ),
  },
  {
    title: "Quality Assurance",
    body: "Manual testing, automated test suites, performance testing, security checks and QA strategy",
    icon: (
      <>
        <path d="M8 14h32v20H8z" />
        <path d="M8 16l16 12 16-12" />
      </>
    ),
  },
  {
    title: "Maintenance & Upgrades",
    body: "Ongoing support, feature additions, performance optimization and security updates",
    icon: (
      <>
        <rect x="6" y="9" width="36" height="28" rx="4" />
        <path d="M6 18h36M13 13.5h.01M18 13.5h.01" />
      </>
    ),
  },
  {
    title: "Project Management",
    body: "Agile workflows, Scrum, Kanban, Jira/Asana, regular syncs, transparent progress tracking",
    icon: (
      <>
        <path d="M10 38V22M22 38V10M34 38V28" />
        <path d="M6 42h36" />
      </>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[300px] w-[700px] max-w-[120vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]" />

      <Reveal className="max-w-3xl text-left">
        <SectionLabel>What we do</SectionLabel>
        <h2 className="mt-6 font-display text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl">
          A Full Growth Engine,{" "}
          <span className="block bg-gradient-to-r from-violet-400 via-primary to-purple-300 bg-clip-text text-transparent">
            Built in One Orbit
          </span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <article className="glass group relative h-full overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <svg
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 text-primary transition-transform duration-500 group-hover:scale-110"
              >
                {s.icon}
              </svg>
              <h3 className="mt-6 text-lg font-medium tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
