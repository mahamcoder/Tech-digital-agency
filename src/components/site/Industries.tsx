import { motion } from "motion/react";
import { Reveal, SectionLabel } from "./Reveal";
import {
  Activity,
  Landmark,
  GraduationCap,
  Building2,
  ShoppingBag,
  Rocket,
  Cloud,
  Truck,
  ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

const industries = [
  {
    name: "Healthcare & Life Sciences",
    description: "HIPAA-compliant platforms, AI diagnostics, and telemedicine systems.",
    icon: Activity,
    stats: "2.4M Patients Served",
  },
  {
    name: "FinTech & Banking",
    description: "Secure payment gateways, fraud detection models, and banking portals.",
    icon: Landmark,
    stats: "$400M+ Transactions",
  },
  {
    name: "Education & EdTech",
    description: "Interactive learning portals, LMS platforms, and AI tutor applications.",
    icon: GraduationCap,
    stats: "500k+ Active Learners",
  },
  {
    name: "Real Estate & PropTech",
    description: "Property management software, 3D listing engines, and valuation algorithms.",
    icon: Building2,
    stats: "10k+ Properties Listed",
  },
  {
    name: "E-Commerce & Retail",
    description: "High-concurrency storefronts, inventory intelligence, and checkout funnels.",
    icon: ShoppingBag,
    stats: "$80M+ GMV Processed",
  },
  {
    name: "High-Growth Startups",
    description: "Rapid MVP development, scalable Cloud architecture, and product strategy.",
    icon: Rocket,
    stats: "120+ MVPs Launched",
  },
  {
    name: "B2B SaaS Platforms",
    description: "Multi-tenant architectures, subscription billing, and real-time dashboards.",
    icon: Cloud,
    stats: "99.99% Uptime",
  },
  {
    name: "Logistics & Supply Chain",
    description: "Route optimization AI, fleet tracking, and automated warehouse management.",
    icon: Truck,
    stats: "40% Faster Delivery",
  },
];

export function Industries() {
  return (
    <section id="industries" className="relative isolate overflow-hidden py-14 md:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[550px] w-[950px] max-w-[130vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[170px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="max-w-3xl">
          <SectionLabel>Domain Expertise</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
            Industries We <span className="text-primary">Transform</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We bring deep domain engineering experience to build specialized, compliant, and market-leading software across core global sectors.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.name} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -7 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="glass group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 p-7 transition-all duration-400 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 text-primary ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15 group-hover:ring-primary/30">
                        <Icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                        {ind.stats}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
                      {ind.name}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {ind.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-primary opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                    <span>Explore Solutions</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14 flex items-center justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
            >
              Have a custom industry project? Let's talk
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
