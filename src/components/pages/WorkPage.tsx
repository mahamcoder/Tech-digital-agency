import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  X,
  TrendingUp,
  DollarSign,
  Users,
  BarChart3,
  Target,
  Video,
  Mail,
  Monitor,
} from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

type CaseStudy = {
  img: string;
  client: string;
  tag: string;
  category: string;
  result: string;
  metric: string;
  note: string;
  span: string;
  challenge: string;
  strategy: string;
  execution: string[];
  stats: { value: string; label: string }[];
};

const cases: CaseStudy[] = [
  {
    img: p1,
    client: "Nova Finance",
    tag: "Analytics & Performance",
    category: "Performance Media",
    result: "-42% CAC",
    metric: "-42%",
    note: "cost per acquisition reduction",
    span: "lg:col-span-7",
    challenge: "Nova's blended CAC had risen 3x in 18 months as they scaled past $5M ARR. Their attribution was broken and creative had staled.",
    strategy: "We rebuilt their measurement model, launched a full-funnel creative testing system, and shifted budget from bottom-funnel search to mid-funnel social proof campaigns.",
    execution: ["Attribution model redesign", "Creative testing framework", "Budget reallocation across 4 channels", "Weekly optimization cadence"],
    stats: [
      { value: "-42%", label: "CAC Reduction" },
      { value: "3.2x", label: "Pipeline Growth" },
      { value: "68%", label: "Faster Sales Cycle" },
      { value: "$4.1M", label: "Revenue Added" },
    ],
  },
  {
    img: p2,
    client: "Halo Health",
    tag: "Brand & Creative",
    category: "Creative Studio",
    result: "3.1x ROAS",
    metric: "+312%",
    note: "qualified pipeline in 9 months",
    span: "lg:col-span-5",
    challenge: "A DTC wellness brand struggling with creative fatigue across Meta and TikTok. Static ads were underperforming and the brand lacked visual consistency.",
    strategy: "Built a modular creative system with reusable visual components, UGC strategy, and a testing matrix that shipped 40+ variants monthly.",
    execution: ["Brand identity refresh", "UGC creator network", "40+ monthly ad variants", "Cross-platform creative optimization"],
    stats: [
      { value: "3.1x", label: "Blended ROAS" },
      { value: "40+", label: "Monthly Variants" },
      { value: "2.4x", label: "CTR Improvement" },
      { value: "$2.8M", label: "Revenue Lift" },
    ],
  },
  {
    img: p3,
    client: "Lumen Labs",
    tag: "Commerce Launch",
    category: "CRM & Analytics",
    result: "$18M GMV",
    metric: "+128%",
    note: "net revenue retention lift",
    span: "lg:col-span-5",
    challenge: "Pre-launch B2B SaaS with zero brand awareness and a complex product requiring high-touch education.",
    strategy: "Designed a content-led acquisition funnel paired with lifecycle email journeys that educated and converted enterprise prospects.",
    execution: ["Content strategy & SEO foundation", "Email nurture sequences", "Webinar funnel system", "Enterprise landing pages"],
    stats: [
      { value: "$18M", label: "GMV Generated" },
      { value: "+128%", label: "NRR Lift" },
      { value: "4.2x", label: "Email ROI" },
      { value: "34%", label: "Open Rate" },
    ],
  },
  {
    img: p4,
    client: "Atlas Retail",
    tag: "Lifecycle CRM",
    category: "Performance Media",
    result: "+68% LTV",
    metric: "6.8x",
    note: "return on ad spend at scale",
    span: "lg:col-span-7",
    challenge: "Multi-channel retailer with $50M+ revenue but no retention strategy. 78% of revenue came from one-time buyers.",
    strategy: "Implemented lifecycle CRM with behavioral segmentation, win-back flows, VIP tiers, and predictive churn modeling.",
    execution: ["Full CRM migration", "12 automated email flows", "SMS integration", "VIP loyalty program design"],
    stats: [
      { value: "+68%", label: "LTV Increase" },
      { value: "6.8x", label: "ROAS at Scale" },
      { value: "42%", label: "Repeat Rate" },
      { value: "$12M", label: "Attributed Revenue" },
    ],
  },
];

const filters = ["All", "Performance Media", "Creative Studio", "CRM & Analytics"];

const categoryIcons: Record<string, typeof TrendingUp> = {
  "Performance Media": TrendingUp,
  "Creative Studio": Video,
  "CRM & Analytics": Mail,
};

const metricStats = [
  { icon: DollarSign, value: "$240M+", label: "Media Managed" },
  { icon: Users, value: "120+", label: "Brands Scaled" },
  { icon: TrendingUp, value: "4.8x", label: "Avg. Blended ROAS" },
  { icon: BarChart3, value: "94%", label: "Client Retention" },
];

export function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filtered = activeFilter === "All" ? cases : cases.filter((c) => c.category === activeFilter);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative isolate overflow-hidden pb-16 pt-32 sm:pt-40 md:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[20%] top-[15%] h-[350px] w-[500px] rounded-full bg-accent/10 blur-[150px]" />
          <div className="absolute right-[15%] bottom-[10%] h-[280px] w-[400px] rounded-full bg-primary/10 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <SectionLabel>Case Studies</SectionLabel>
          </motion.div>

          <div className="mt-7 grid items-end gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease }}
              className="font-display text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl"
            >
              Outcomes, not
              <span className="mt-1 block font-serif text-[0.88em] font-normal italic text-primary">
                impressions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease }}
              className="max-w-md text-[15px] leading-[1.8] text-muted-foreground lg:text-right"
            >
              Real results from real partnerships. Every case study is measured by the
              metrics that matter — revenue, margin, and sustainable growth.
            </motion.p>
          </div>

          {/* Headline stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease }}
            className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {metricStats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="glass rounded-2xl p-5 transition-colors duration-400 hover:border-primary/30">
                  <Icon className="h-5 w-5 text-primary/70" />
                  <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── FILTERABLE PORTFOLIO ─── */}
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10 md:pb-32">
        {/* Filter tabs */}
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={`rounded-full px-4 py-2 text-[13px] transition-all duration-300 ${
                  activeFilter === f
                    ? "bg-primary/15 text-primary font-medium border border-primary/30"
                    : "border border-border text-muted-foreground hover:border-primary/25 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Project Grid */}
        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <AnimatePresence mode="wait">
            {filtered.map((p, i) => (
              <motion.div
                key={p.client}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className={p.span}
              >
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.5, ease }}
                  onClick={() => setSelectedCase(p)}
                  className="glass group relative h-full cursor-pointer overflow-hidden rounded-[2rem] p-2 transition-colors duration-500 hover:border-primary/40"
                >
                  <div className="relative overflow-hidden rounded-[1.6rem]">
                    <img
                      src={p.img}
                      alt={`${p.client} — ${p.tag} case study`}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="h-[260px] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] sm:h-[320px]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-primary/30 bg-background/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                      {p.tag}
                    </span>
                    <span className="absolute bottom-4 right-4 rounded-full bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-md transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      View study →
                    </span>
                  </div>

                  <div className="flex items-end justify-between gap-4 px-4 pb-4 pt-5">
                    <div className="min-w-0">
                      <h3 className="font-display text-xl tracking-tight text-foreground">{p.client}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">Growth partnership</p>
                    </div>
                    <span className="shrink-0 font-display text-lg text-primary">{p.result}</span>
                  </div>
                </motion.article>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ─── CASE STUDY DRAWER ─── */}
      <AnimatePresence>
        {selectedCase && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedCase(null)}
              className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease }}
              className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-xl flex-col overflow-y-auto bg-background border-l border-border/50"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between bg-background/90 px-6 py-4 backdrop-blur-md border-b border-border/50">
                <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">
                  {selectedCase.client}
                </h2>
                <button
                  type="button"
                  onClick={() => setSelectedCase(null)}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 px-6 py-8">
                <img
                  src={selectedCase.img}
                  alt={selectedCase.client}
                  className="w-full rounded-2xl object-cover h-48"
                />

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {selectedCase.stats.map((s) => (
                    <div key={s.label} className="rounded-xl bg-foreground/5 p-4">
                      <p className="font-display text-xl font-semibold tracking-tight text-primary">{s.value}</p>
                      <p className="mt-1 text-[11px] text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h4 className="text-[11px] uppercase tracking-[0.2em] text-primary/70">The Challenge</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{selectedCase.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-[0.2em] text-primary/70">Our Strategy</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{selectedCase.strategy}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-[0.2em] text-primary/70">Execution</h4>
                    <ul className="mt-3 space-y-2">
                      {selectedCase.execution.map((e) => (
                        <li key={e} className="flex items-center gap-2.5 text-sm text-foreground/80">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="btn-cta mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-primary-foreground"
                >
                  Start a similar project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ─── CTA ─── */}
      <section className="mx-auto max-w-7xl px-5 pb-12 md:px-10">
        <Reveal>
          <div className="glass relative isolate overflow-hidden rounded-[2.5rem] px-6 py-16 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-40 w-[70%] -translate-x-1/2 rounded-full bg-primary/20 blur-[110px]" />
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Ready to build
              <span className="font-serif italic text-primary"> your case study?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Let's discuss what compounding growth looks like for your brand.
            </p>
            <Link
              to="/contact"
              className="btn-cta mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-primary-foreground"
            >
              Book a diagnostic
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
