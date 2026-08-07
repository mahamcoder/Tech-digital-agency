import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
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
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const industriesData = [
  {
    id: "fintech",
    name: "FinTech & Banking",
    icon: Landmark,
    badge: "$400M+ Transactions",
    description: "Secure payment processing, real-time fraud detection AI, compliance engines, and modern digital banking portals.",
    solutions: [
      "AI-Powered Real-Time Fraud Detection Engine",
      "PCI-DSS Compliant Payment Gateway Integration",
      "Automated KYC/AML Verification Pipelines",
      "High-Frequency Algorithmic Trading Dashboards",
    ],
    techStack: ["Node.js", "Python AI", "PostgreSQL", "Redis", "AWS Security"],
    result: "99.999% Uptime & -65% Fraud Losses",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: Activity,
    badge: "2.4M Patients Served",
    description: "HIPAA-compliant medical portals, AI-assisted diagnostic models, EHR systems, and secure telemedicine platforms.",
    solutions: [
      "HIPAA-Compliant Telehealth & Video Consultations",
      "AI Medical Imaging & Diagnostic Assistant",
      "EHR/EMR Interoperability & FHIR API Pipelines",
      "Patient Engagement & Remote Monitoring Apps",
    ],
    techStack: ["React Native", "Python TensorFlow", "Docker", "GCP Healthcare"],
    result: "4.8/5 Patient Satisfaction Score",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "realestate",
    name: "Real Estate & PropTech",
    icon: Building2,
    badge: "10k+ Properties Managed",
    description: "Smart property management suites, 3D listing engines, automated valuation models, and tenant portals.",
    solutions: [
      "Automated Property Valuation & Yield Predictor",
      "Multi-Tenant Property Management SaaS",
      "Interactive 3D Virtual Tour Integration",
      "Smart Lease Agreement & Digital Signature Flow",
    ],
    techStack: ["Next.js", "Three.js", "Supabase", "Stripe Connect"],
    result: "3.5x Faster Deal Closures",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    id: "ecommerce",
    name: "E-Commerce & Retail",
    icon: ShoppingBag,
    badge: "$80M+ GMV Processed",
    description: "High-concurrency digital storefronts, AI recommendation engines, inventory intelligence, and custom checkout funnels.",
    solutions: [
      "Personalized AI Product Recommendation System",
      "Headless E-Commerce Architecture (Shopify Storefront API)",
      "Real-Time Inventory & Multi-Warehouse Sync",
      "Sub-Second Page Loads & Checkout Optimization",
    ],
    techStack: ["Next.js", "GraphQL", "Shopify Plus", "Redis Cache"],
    result: "+42% Conversion Rate Improvement",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
  },
  {
    id: "edtech",
    name: "Education & EdTech",
    icon: GraduationCap,
    badge: "500k+ Active Learners",
    description: "Interactive learning management systems (LMS), adaptive AI tutors, live virtual classrooms, and gamified assessments.",
    solutions: [
      "Adaptive AI Tutor & Personalized Learning Paths",
      "Real-Time Collaborative Classroom Whiteboards",
      "Automated Grading & Assessment Engines",
      "Mobile-First Offline Learning Sync",
    ],
    techStack: ["React", "WebRTC", "Python PyTorch", "AWS DynamoDB"],
    result: "+85% Student Course Completion",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    id: "saas",
    name: "B2B SaaS & Cloud",
    icon: Cloud,
    badge: "99.99% Guaranteed SLA",
    description: "Multi-tenant cloud platforms, automated subscription billing engines, enterprise analytics dashboards, and REST APIs.",
    solutions: [
      "Enterprise Multi-Tenant Tenant Isolation",
      "Automated Tiered Billing & Usage Metering",
      "Real-Time Analytics & Custom Report Generators",
      "Single Sign-On (SSO / SAML 2.0 / OAuth)",
    ],
    techStack: ["TypeScript", "Golang", "Kubernetes", "ClickHouse"],
    result: "10x Scalability with 0 Downtime",
    gradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    icon: Truck,
    badge: "40% Faster Delivery",
    description: "AI route optimization engines, fleet tracking dashboards, automated warehouse management, and IoT tracking.",
    solutions: [
      "AI Dynamic Route Optimization & Dispatch",
      "Real-Time IoT Fleet Tracking & Geofencing",
      "Automated Warehouse Inventory Management",
      "Predictive Maintenance Alert System",
    ],
    techStack: ["Flutter", "Python OR-Tools", "Kafka", "AWS IoT Core"],
    result: "28% Reduction in Logistics Fuel Costs",
    gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
  },
  {
    id: "startups",
    name: "High-Growth AI Startups",
    icon: Rocket,
    badge: "120+ MVPs Shipped",
    description: "Rapid MVP development sprints, scalable AI model integrations, investor-ready prototypes, and architecture advisory.",
    solutions: [
      "6-Week Investor-Ready MVP Sprint",
      "Custom LLM Fine-Tuning & RAG Pipeline Setup",
      "Cloud Infrastructure & CI/CD Pipeline Setup",
      "Product Strategy & Pitch Deck Tech Support",
    ],
    techStack: ["OpenAI API", "LangChain", "Next.js", "Supabase"],
    result: "$50M+ Total Client Capital Raised",
    gradient: "from-fuchsia-500/20 via-violet-500/10 to-transparent",
  },
];

export function IndustriesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const currentInd = industriesData[activeTab];

  return (
    <>
      {/* ─── HERO ─── */}
      <PageHero
        badge="Domain Expertise"
        aiVariant="industries"
        title={
          <>
            Tailored software solutions for
            <span className="mt-2 block bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              high-impact industries
            </span>
          </>
        }
        description="We combine deep vertical knowledge with modern AI, web, and cloud engineering to solve sector-specific challenges for market leaders globally."
        primaryCta={{ label: "Request Industry Brief", to: "/contact" }}
        secondaryCta={{ label: "View Case Studies", to: "/work" }}
      />

      {/* ─── INDUSTRY CARDS GRID ─── */}
      <section className="relative isolate overflow-hidden py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="text-left">
            <SectionLabel>Sector Capabilities</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Industries We{" "}
              <span className="bg-gradient-to-r from-violet-400 via-primary to-purple-300 bg-clip-text text-transparent">
                Transform
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Explore how CanbeTech builds specialized, compliant, and scalable software architectures across key global economic sectors.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industriesData.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <Reveal key={ind.id} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.35, ease }}
                    onClick={() => setActiveTab(i)}
                    className={`glass group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl p-7 transition-all duration-300 ${activeTab === i
                        ? "border-primary/50 shadow-xl shadow-primary/10"
                        : "hover:border-primary/30"
                      }`}
                  >
                    <div
                      className={`pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-to-br ${ind.gradient} blur-[50px] opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />

                    <div>
                      <div className="flex items-center justify-between">
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 text-primary ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                          {ind.badge}
                        </span>
                      </div>

                      <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
                        {ind.name}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {ind.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-primary">
                      <span>Explore Breakdown</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE INDUSTRY SOLUTIONS TEARDOWN ─── */}
      <section className="border-t border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="text-left">
            <SectionLabel>Architecture Deep Dive</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Engineered Solutions by{" "}
              <span className="bg-gradient-to-r from-violet-400 via-primary to-purple-300 bg-clip-text text-transparent">
                Industry
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Select an industry below to inspect the tailored software architectures, security models, and tech stacks we deploy.
            </p>
          </Reveal>

          {/* Tab Selector Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {industriesData.map((ind, i) => (
              <button
                key={ind.id}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${activeTab === i
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
              >
                {ind.name}
              </button>
            ))}
          </div>

          {/* Active Industry Showcase Panel */}
          <motion.div
            key={currentInd.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
            className="glass relative mt-12 overflow-hidden rounded-[2.5rem] p-8 sm:p-12"
          >
            <div className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${currentInd.gradient} blur-[80px]`} />

            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              {/* Left Column: Solutions List */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                    <currentInd.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {currentInd.name}
                    </h3>
                    <span className="text-xs text-primary font-medium">{currentInd.badge}</span>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {currentInd.description}
                </p>

                <div className="mt-8 space-y-3">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Custom Built Modules & Workflows
                  </p>
                  {currentInd.solutions.map((sol) => (
                    <div
                      key={sol}
                      className="flex items-start gap-3 rounded-2xl bg-foreground/4 p-4 text-sm text-foreground/90 transition-all hover:bg-foreground/7"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Stack & Results Highlight */}
              <div className="flex flex-col justify-between rounded-3xl bg-foreground/3 p-6 sm:p-8 border border-white/5">
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.2em] text-primary">
                    Recommended Tech Stack
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {currentInd.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-primary/20 bg-primary/8 px-3.5 py-1.5 text-xs font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-primary/10 p-6 border border-primary/20">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary/80">Proven Client Result</p>
                  <p className="mt-2 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {currentInd.result}
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="btn-cta mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-primary-foreground"
                >
                  Discuss {currentInd.name} Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-10">
        <Reveal>
          <div className="glass relative isolate overflow-hidden rounded-[2.5rem] px-6 py-16 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-40 w-[70%] -translate-x-1/2 rounded-full bg-primary/20 blur-[110px]" />
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Don't see your industry?
              <span className="block text-primary"> We build custom software.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Our engineering team architects custom digital systems for specialized verticals and unique business models.
            </p>
            <Link
              to="/contact"
              className="btn-cta mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-primary-foreground"
            >
              Book a Strategy Call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
