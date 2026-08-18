import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  X,
  TrendingUp,
  DollarSign,
  Users,
  BarChart3,
  CheckCircle2,
  ExternalLink,
  Smartphone,
  Globe,
} from "lucide-react";
import { ProjectMockup } from "@/components/site/ProjectMockup";

const ease = [0.22, 1, 0.36, 1] as const;

export type CaseStudy = {
  id: string;
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
  officialWebsite: string;
  mobileApp: string;
  liveUrl: string;
};

export const cases: CaseStudy[] = [
  {
    id: "maven-clinic",
    client: "Maven Clinic",
    tag: "Healthcare / Virtual Care",
    category: "Healthcare",
    result: "2.4M+ Patients",
    metric: "2.4M+",
    note: "virtual care consultations delivered",
    span: "lg:col-span-7",
    challenge: "A virtual healthcare ecosystem requiring seamless multi-channel patient-to-specialist connectivity, strict HIPAA compliance, and frictionless video consultation scaling.",
    strategy: "Engineered an omnichannel telehealth platform integrating real-time WebRTC video & messaging, automated specialist appointment matching, digital prescription pipelines, and care program tracking.",
    execution: [
      "WebRTC HD video consultation & encrypted patient chat",
      "Cross-platform iOS & Android patient mobile applications",
      "Specialist care matching & dynamic scheduling engine",
      "Digital prescriptions & EHR synchronization pipelines",
    ],
    stats: [
      { value: "2.4M+", label: "Patients Served" },
      { value: "98%", label: "Care Satisfaction" },
      { value: "350+", label: "Specialty Sub-tracks" },
      { value: "99.99%", label: "HIPAA Uptime SLA" },
    ],
    officialWebsite: "https://www.mavenclinic.com/",
    mobileApp: "Google Play · Apple App Store",
    liveUrl: "https://www.mavenclinic.com/",
  },
  {
    id: "track-pod",
    client: "Track-POD",
    tag: "Logistics / Delivery Management",
    category: "Logistics",
    result: "99.4% On-Time",
    metric: "99.4%",
    note: "on-time delivery dispatch rate",
    span: "lg:col-span-5",
    challenge: "Complex last-mile logistics operations suffering from paper-based manifests, inaccurate route calculations, lack of real-time GPS visibility, and delayed proof of delivery.",
    strategy: "Built a cloud dispatch dashboard connected to a native mobile driver app featuring dynamic route optimization, real-time live vehicle tracking, electronic proof of delivery (ePOD), barcode scanning, and instant signature capture.",
    execution: [
      "Multi-stop AI route planning algorithm",
      "Live GPS tracking & driver status dashboard",
      "Electronic Proof of Delivery (signatures & photos)",
      "Offline-first driver mobile app syncing",
    ],
    stats: [
      { value: "99.4%", label: "On-Time Deliveries" },
      { value: "-28%", label: "Fuel & Route Costs" },
      { value: "100%", label: "Paperless ePOD" },
      { value: "15M+", label: "Parcels Tracked" },
    ],
    officialWebsite: "https://www.track-pod.com/",
    mobileApp: "Google Play — Delivery Driver App",
    liveUrl: "https://www.track-pod.com/",
  },
  {
    id: "lasa-property",
    client: "LASA Property Management",
    tag: "Property / Rental Management",
    category: "PropTech",
    result: "10k+ Units",
    metric: "10k+",
    note: "properties & units under management",
    span: "lg:col-span-5",
    challenge: "Fragmented property management workflows across owners, tenants, applicants, agents, inspectors, and maintenance contractors causing high vacancy turnaround and billing disputes.",
    strategy: "Developed a unified multi-role property ecosystem that centralizes online leasing, automated rent collection, digital work orders, tenant screening, and maintenance scheduling.",
    execution: [
      "Multi-role portal for owners, tenants, agents & staff",
      "Automated ACH & Card rent payment engine",
      "Maintenance dispatch & vendor work orders tracker",
      "Digital lease generation & compliant e-signatures",
    ],
    stats: [
      { value: "10k+", label: "Units Managed" },
      { value: "-45%", label: "Work Order Resolution Time" },
      { value: "99.2%", label: "On-Time Rent Collection" },
      { value: "$140M+", label: "Annual Rent Processed" },
    ],
    officialWebsite: "https://lasapm.com/",
    mobileApp: "Google Play — LASAEPM",
    liveUrl: "https://lasapm.com/",
  },
  {
    id: "beli",
    client: "Beli",
    tag: "Restaurant Discovery / Social",
    category: "Social Discovery",
    result: "5M+ Ratings",
    metric: "5M+",
    note: "restaurant bookmarks & ranking lists",
    span: "lg:col-span-7",
    challenge: "Traditional restaurant review platforms were cluttered with fake ratings and lacked personalized social recommendations from trusted friends.",
    strategy: "Engineered an interactive, gamified social food discovery app where foodies rank dining spots in tier lists, map places visited, bookmark want-to-go spots, and get algorithmic recommendations.",
    execution: [
      "Interactive map with customized map pins & smart filters",
      "Algorithmic personalized taste recommendations",
      "Social activity feeds & friend tier lists",
      "High-speed photo review upload & indexing",
    ],
    stats: [
      { value: "5M+", label: "Ratings & Lists" },
      { value: "4.9 ★", label: "App Store Rating" },
      { value: "6.2x", label: "Monthly User Engagement" },
      { value: "85+", label: "Global Metro Cities" },
    ],
    officialWebsite: "https://beliapp.com/",
    mobileApp: "Google Play · Apple App Store",
    liveUrl: "https://beliapp.com/",
  },
  {
    id: "zama-app",
    client: "ZamaApp",
    tag: "School Management / EdTech",
    category: "EdTech",
    result: "50k+ Students",
    metric: "50k+",
    note: "students & faculty managed",
    span: "lg:col-span-7",
    challenge: "Schools struggled with manual paper attendance, delayed fee collection notifications, disjointed grade reporting, and lack of real-time parent-teacher communication.",
    strategy: "Created an integrated school management ERP and parent mobile portal providing automated attendance alerts, online fee payments, report card generation, and exam schedules.",
    execution: [
      "Admin & Teacher gradebook and exam dashboard",
      "Parent mobile app with instant push notifications",
      "Digital fee ledger & online invoice payments",
      "Automated daily SMS & in-app attendance alerts",
    ],
    stats: [
      { value: "50k+", label: "Active Students" },
      { value: "92%", label: "Parent Engagement" },
      { value: "-75%", label: "Administrative Paperwork" },
      { value: "180+", label: "Partner Institutions" },
    ],
    officialWebsite: "http://zamaschool.pk/",
    mobileApp: "Google Play — ZamaApp",
    liveUrl: "http://zamaschool.pk/",
  },
  {
    id: "traveloup",
    client: "Traveloup",
    tag: "Travel Marketplace / Booking",
    category: "Marketplace",
    result: "100k+ Tours",
    metric: "100k+",
    note: "itineraries & trips booked",
    span: "lg:col-span-5",
    challenge: "Travelers faced fragmented tour options without verified operator credibility, while tour operators lacked digital tooling for booking inventory and real-time customer messaging.",
    strategy: "Built a two-sided travel marketplace enabling travelers to discover, customize, and book verified curated excursions, with dedicated vendor portals for itinerary publishing and booking analytics.",
    execution: [
      "Custom tour discovery & multi-currency booking checkout",
      "Operator SaaS portal for inventory & promotions",
      "Interactive day-by-day itinerary visualizer",
      "Real-time traveler-operator messaging & support",
    ],
    stats: [
      { value: "100k+", label: "Bookings Processed" },
      { value: "450+", label: "Verified Tour Operators" },
      { value: "96%", label: "Booking Completion Rate" },
      { value: "$22M+", label: "Gross Marketplace Value" },
    ],
    officialWebsite: "https://traveloup.pk/",
    mobileApp: "Google Play — Traveloup",
    liveUrl: "https://traveloup.pk/",
  },
  {
    id: "farm4trade",
    client: "Farm4Trade",
    tag: "Smart Farming / Livestock Management",
    category: "AgriTech",
    result: "1M+ Animals",
    metric: "1M+",
    note: "livestock & farm assets tracked",
    span: "lg:col-span-5",
    challenge: "Large-scale livestock farmers lacked digital traceability for animal health, feeding optimization, breeding cycles, and veterinary compliance across decentralized ranches.",
    strategy: "Architected a cloud-based smart livestock management suite with RFID tracking, weight/feeding intelligence, veterinary health logs, and automated farm task assignment.",
    execution: [
      "RFID animal identification & genealogical registry",
      "Feed rationing & growth curve forecasting",
      "Veterinary vaccination schedule & disease alerts",
      "Offline mobile app sync for remote farm zones",
    ],
    stats: [
      { value: "1M+", label: "Livestock Monitored" },
      { value: "+32%", label: "Feed Efficiency" },
      { value: "-40%", label: "Mortality Reduction" },
      { value: "30+", label: "Agricultural Countries" },
    ],
    officialWebsite: "https://www.farm4trade.com/",
    mobileApp: "Google Play — Farm4Trade",
    liveUrl: "https://www.farm4trade.com/",
  },
  {
    id: "lunga",
    client: "Lunga",
    tag: "Farm Management / Agriculture",
    category: "AgriTech",
    result: "40k+ Farmers",
    metric: "40k+",
    note: "smallholder farmers empowered",
    span: "lg:col-span-7",
    challenge: "Smallholder livestock farmers struggled with lack of affordable veterinary diagnostics and fair market access to buy quality feed and sell farm output.",
    strategy: "Delivered an end-to-end farm management and agricultural commerce app combining digital herd recordkeeping, veterinary telemedicine, and a B2B agri-marketplace.",
    execution: [
      "Mobile farm recordkeeping & productivity reports",
      "On-demand veterinary advisory and diagnostics",
      "Input procurement marketplace (seeds, feeds, vaccines)",
      "Direct-to-buyer farm commodity marketplace",
    ],
    stats: [
      { value: "40k+", label: "Registered Farmers" },
      { value: "+45%", label: "Farmer Income Increase" },
      { value: "24hr", label: "Vet Advisory Response" },
      { value: "$8.5M+", label: "Trade Volume" },
    ],
    officialWebsite: "https://phemaagri.com/",
    mobileApp: "Google Play — Lunga",
    liveUrl: "https://phemaagri.com/",
  },
  {
    id: "jumeni",
    client: "Jumeni",
    tag: "Waste Management / Collection",
    category: "Logistics",
    result: "500k+ Pickups",
    metric: "500k+",
    note: "waste collection tasks completed",
    span: "lg:col-span-12",
    challenge: "Municipal and commercial waste collection operators faced scheduling chaos, uncollected customer bins, manual billing friction, and unoptimized truck fleet routes.",
    strategy: "Engineered an enterprise waste management and collection platform enabling customers to book recurring pickups while providing dispatchers with automated fleet routing and payment reconciliation.",
    execution: [
      "Customer mobile app for one-time & recurring pickups",
      "Smart truck route optimization & GPS driver tracking",
      "Automated billing, invoicing & digital wallet payments",
      "Service history, customer support ticketing & SLA logs",
    ],
    stats: [
      { value: "500k+", label: "Pickups Completed" },
      { value: "99.6%", label: "Collection SLA Adherence" },
      { value: "-34%", label: "Fleet Mileage Reduced" },
      { value: "65k+", label: "Homes & Businesses Served" },
    ],
    officialWebsite: "https://jumeni.com/",
    mobileApp: "Google Play — Jumeni",
    liveUrl: "https://jumeni.com/",
  },
];

const filters = [
  "All",
  "Healthcare",
  "Logistics",
  "PropTech",
  "Social Discovery",
  "EdTech",
  "Marketplace",
  "AgriTech",
];

const metricStats = [
  { icon: DollarSign, value: "$240M+", label: "Value Handled" },
  { icon: Users, value: "10M+", label: "Active Users" },
  { icon: TrendingUp, value: "99.4%", label: "Avg. Platform SLA" },
  { icon: BarChart3, value: "9+", label: "Live Production Ecosystems" },
];

export function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  // Stop background page scroll & Lenis when case study drawer is open
  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if ((window as any).lenis) {
        (window as any).lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if ((window as any).lenis) {
        (window as any).lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if ((window as any).lenis) {
        (window as any).lenis.start();
      }
    };
  }, [selectedCase]);

  const filtered =
    activeFilter === "All"
      ? cases
      : cases.filter((c) => c.category === activeFilter);

  return (
    <>
      {/* ─── HERO ─── */}
      <PageHero
        badge="Case Studies"
        aiVariant="work"
        title={
          <>
            Real-World Products,{" "}
            <span className="mt-1 block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              Proven Engineering
            </span>
          </>
        }
        description="A curated collection of real web platforms, mobile apps, backend systems, and operational workflows engineered across diverse industries."
      >
        {/* Metric stat cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {metricStats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 + i * 0.08, ease }}
                className="glass rounded-2xl p-5 text-center transition-colors duration-400 hover:border-primary/30"
              >
                <Icon className="mx-auto h-5 w-5 text-primary/70" />
                <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </PageHero>

      {/* ─── FILTERABLE PORTFOLIO ─── */}
      <section className="mx-auto max-w-7xl px-5 pb-28 md:px-10 md:pb-36">
        {/* Filter tabs */}
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={`rounded-full px-4 py-2 text-[13px] transition-all duration-300 ${activeFilter === f
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
                  <div className="relative h-[260px] w-full overflow-hidden rounded-[1.6rem] sm:h-[320px]">
                    <ProjectMockup
                      id={p.id}
                      className="h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    <span className="absolute left-4 top-4 rounded-full border border-slate-200/80 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-800 shadow-sm backdrop-blur-md">
                      {p.tag}
                    </span>
                    <span className="btn-cta absolute bottom-4 right-4 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur-md transition-all hover:scale-105">
                      View case study →
                    </span>
                  </div>

                  <div className="flex items-end justify-between gap-4 px-4 pb-4 pt-5">
                    <div className="min-w-0">
                      <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                        {p.client}
                      </h3>
                      <p className="mt-1 text-xs text-slate-300">{p.note}</p>
                    </div>
                    <span className="shrink-0 font-display text-lg font-semibold text-primary">
                      {p.result}
                    </span>
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
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              data-lenis-prevent="true"
              data-lenis-prevent-wheel="true"
              data-lenis-prevent-touch="true"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease }}
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-xl flex-col overflow-y-auto bg-background border-l border-border/50 shadow-2xl"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between bg-background/90 px-6 py-4 backdrop-blur-md border-b border-border/50">
                <div>
                  <h2 className="font-display text-lg font-bold tracking-tight text-foreground">
                    {selectedCase.client}
                  </h2>
                  <p className="text-xs text-primary font-medium">{selectedCase.tag}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCase(null)}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 px-6 py-8">
                <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-md">
                  <ProjectMockup id={selectedCase.id} className="h-full w-full" />
                </div>

                {/* Reference directory quick links */}
                <div className="mt-5 rounded-2xl bg-white/5 p-4 border border-white/10 space-y-2 text-xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Globe className="h-3.5 w-3.5 text-primary" /> Official Website:
                    </span>
                    <a
                      href={selectedCase.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary hover:underline truncate max-w-[240px]"
                    >
                      {selectedCase.officialWebsite}
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-2 border-t border-white/5 pt-2">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Smartphone className="h-3.5 w-3.5 text-cyan-400" /> Mobile Application:
                    </span>
                    <span className="font-medium text-foreground">
                      {selectedCase.mobileApp}
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {selectedCase.stats.map((s) => (
                    <div key={s.label} className="rounded-xl bg-foreground/5 p-4 border border-white/5">
                      <p className="font-display text-xl font-semibold tracking-tight text-primary">
                        {s.value}
                      </p>
                      <p className="mt-1 text-[11px] text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h4 className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                      The Challenge
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {selectedCase.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                      Our Strategy & Architecture
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {selectedCase.strategy}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                      Key Execution & Features
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {selectedCase.execution.map((e) => (
                        <li key={e} className="flex items-center gap-2.5 text-sm text-foreground/90">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Dual Action Buttons: Live Link + Contact */}
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  {selectedCase.liveUrl && (
                    <a
                      href={selectedCase.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-3.5 text-xs font-semibold text-primary transition-all hover:bg-primary/20 hover:scale-[1.02]"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit Official Website
                    </a>
                  )}
                  <Link
                    to="/contact"
                    onClick={() => setSelectedCase(null)}
                    className="btn-cta inline-flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    Start Similar Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ─── CTA ─── */}
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10">
        <Reveal>
          <div className="glass relative isolate overflow-hidden rounded-[2.5rem] px-6 py-16 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-40 w-[70%] -translate-x-1/2 rounded-full bg-primary/20 blur-[110px]" />
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl">
              Ready to Build{" "}
              <span className="bg-gradient-to-r from-violet-400 via-primary to-purple-300 bg-clip-text text-transparent">
                Your Next Product?
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-slate-300">
              Let's engineer and scale your web and mobile product ecosystem together.
            </p>
            <Link
              to="/contact"
              className="btn-cta mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-primary-foreground"
            >
              Start your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
