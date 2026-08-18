import React from "react";
import {
  Video,
  Mic,
  Calendar,
  Clock,
  Heart,
  ShieldCheck,
  MapPin,
  Navigation,
  Truck,
  FileCheck2,
  Building2,
  DollarSign,
  CheckCircle2,
  Utensils,
  Star,
  Bookmark,
  GraduationCap,
  BookOpen,
  Bell,
  Compass,
  Plane,
  Activity,
  Wheat,
  MessageSquare,
  ShoppingBag,
  Trash2,
  BarChart3,
  TrendingUp,
  UserCheck,
  Search,
  ChevronRight,
  Sparkles,
  Award,
} from "lucide-react";

export type ProjectId =
  | "maven-clinic"
  | "track-pod"
  | "lasa-property"
  | "beli"
  | "zama-app"
  | "traveloup"
  | "farm4trade"
  | "lunga"
  | "jumeni";

interface ProjectMockupProps {
  id: string;
  className?: string;
}

export function ProjectMockup({ id, className = "" }: ProjectMockupProps) {
  // Normalize id
  const normId = id
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  return (
    <div
      className={`relative h-full w-full select-none overflow-hidden bg-[#F8FAFC] font-sans text-slate-800 transition-all ${className}`}
    >
      {/* Subtle Studio Light Backdrop Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/90 via-white/40 to-slate-100/50" />

      {/* Render specialized mockup design */}
      {renderMockup(normId)}
    </div>
  );
}

function renderMockup(id: string) {
  switch (id) {
    case "maven-clinic":
      return <MavenClinicMockup />;
    case "track-pod":
      return <TrackPodMockup />;
    case "lasa-property":
    case "lasapm":
    case "lasa":
      return <LasaPropertyMockup />;
    case "beli":
    case "beli-app":
      return <BeliMockup />;
    case "zama-app":
    case "zama":
    case "zamaschool":
      return <ZamaAppMockup />;
    case "traveloup":
      return <TraveloupMockup />;
    case "farm4trade":
      return <Farm4TradeMockup />;
    case "lunga":
      return <LungaMockup />;
    case "jumeni":
      return <JumeniMockup />;
    default:
      return <DefaultSaaSMockup id={id} />;
  }
}

/* ─────────────────────────────────────────────────────────────
   1. MAVEN CLINIC — Telehealth Video Consultation & Patient Care
───────────────────────────────────────────────────────────── */
function MavenClinicMockup() {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-3 sm:p-5">
      {/* Desktop Browser Window Mockup */}
      <div className="relative w-full max-w-[500px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
        {/* Browser Topbar */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-3.5 py-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-center gap-1.5 rounded-md bg-white px-2.5 py-0.5 text-[10px] font-medium text-slate-500 shadow-sm border border-slate-100">
            <ShieldCheck className="h-3 w-3 text-teal-600" />
            <span>mavenclinic.com/consultation/live</span>
          </div>
          <span className="text-[10px] font-semibold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">
            HIPAA Live
          </span>
        </div>

        {/* Browser Content */}
        <div className="grid grid-cols-12 gap-3 p-3.5 sm:p-4">
          {/* Main Video Call Box */}
          <div className="col-span-7 flex flex-col justify-between rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 p-3 text-white shadow-inner min-h-[140px] sm:min-h-[160px] relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-teal-500/20 blur-xl pointer-events-none" />
            
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-2 py-0.5 text-[10px] backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" /> 18:42
              </span>
              <span className="rounded-md bg-teal-500/30 px-1.5 py-0.5 text-[9px] font-medium text-teal-200">
                HD Encrypted
              </span>
            </div>

            {/* Doctor Avatar / Center Visual */}
            <div className="my-auto flex flex-col items-center justify-center text-center">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-teal-500 to-cyan-400 text-base font-bold text-white shadow-lg ring-2 ring-white/40">
                  DR
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-slate-900" />
              </div>
              <p className="mt-1.5 text-xs font-semibold">Dr. Sarah Jenkins, MD</p>
              <p className="text-[10px] text-teal-200/80">Obstetrics & Maternal Care</p>
            </div>

            {/* Call Action Bar */}
            <div className="flex items-center justify-center gap-2 pt-1">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md">
                <Mic className="h-3 w-3" />
              </span>
              <span className="grid h-6 w-6 place-items-center rounded-full bg-teal-500 text-white shadow-sm">
                <Video className="h-3 w-3" />
              </span>
              <span className="rounded-full bg-red-500/90 px-2 py-0.5 text-[9px] font-semibold">
                End
              </span>
            </div>
          </div>

          {/* Right Panel: Patient Chart & Care Roadmap */}
          <div className="col-span-5 flex flex-col justify-between space-y-2">
            <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-700">Patient Vitals</span>
                <Heart className="h-3 w-3 text-rose-500" />
              </div>
              <div className="mt-1.5 flex items-baseline gap-1">
                <span className="text-base font-extrabold text-slate-900">74</span>
                <span className="text-[10px] font-medium text-slate-400">bpm · Normal</span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500" />
              </div>
            </div>

            <div className="rounded-xl border border-teal-100 bg-teal-50/60 p-2.5">
              <div className="flex items-center gap-1.5 text-teal-800">
                <Calendar className="h-3 w-3" />
                <span className="text-[10px] font-bold">Next Session</span>
              </div>
              <p className="mt-1 text-[11px] font-semibold text-slate-800">Tomorrow · 10:00 AM</p>
              <p className="text-[9px] text-teal-700 font-medium">Virtual Nutrition Coach</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge Indicator */}
      <div className="absolute bottom-2 right-4 flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/95 px-3 py-1 text-[10px] font-semibold text-slate-700 shadow-md backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-teal-500 animate-ping" />
        <span>2.4M+ Telehealth Sessions</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   2. TRACK-POD — Real-time Route Dispatch & Driver ePOD
───────────────────────────────────────────────────────────── */
function TrackPodMockup() {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-3 sm:p-5">
      <div className="relative w-full max-w-[500px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
        {/* Topbar */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-3.5 py-2">
          <div className="flex items-center gap-2">
            <span className="grid h-5 w-5 place-items-center rounded bg-blue-600 text-[10px] font-black text-white">
              TP
            </span>
            <span className="text-xs font-bold text-slate-800">Live Dispatch Console</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            99.4% On-Time SLA
          </div>
        </div>

        {/* Map & Delivery Manifest Layout */}
        <div className="grid grid-cols-12 gap-3 p-3.5 sm:p-4">
          {/* Simulated Vector Route Map */}
          <div className="col-span-7 relative flex flex-col justify-between overflow-hidden rounded-xl border border-blue-100 bg-blue-50/50 p-3 min-h-[140px] sm:min-h-[160px]">
            {/* Map Grid Lines & Route Polyline */}
            <svg className="absolute inset-0 h-full w-full stroke-blue-200/80" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="35%" x2="100%" y2="35%" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="70%" x2="100%" y2="70%" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="30%" y1="0" x2="30%" y2="100%" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="70%" y1="0" x2="70%" y2="100%" strokeWidth="1" strokeDasharray="4 4" />
              {/* Route Curve */}
              <path
                d="M 25 120 Q 70 30 140 70 T 240 40"
                fill="none"
                stroke="#2563EB"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Waypoints */}
            <div className="relative flex items-center justify-between text-[10px]">
              <span className="flex items-center gap-1 rounded-md bg-white px-2 py-0.5 font-bold text-slate-700 shadow-sm border border-slate-200">
                <Truck className="h-3 w-3 text-blue-600" /> Van #14
              </span>
              <span className="rounded-full bg-blue-600 px-2 py-0.5 font-bold text-white shadow">
                Stop 8 of 12
              </span>
            </div>

            {/* Floating Live Waypoint Pin */}
            <div className="relative z-10 my-auto self-center flex items-center gap-2 rounded-xl bg-white/95 px-3 py-1.5 shadow-md border border-slate-200/80">
              <Navigation className="h-3.5 w-3.5 text-blue-600 animate-bounce" />
              <div>
                <p className="text-[10px] font-bold text-slate-800">452 Market St, Suite 400</p>
                <p className="text-[9px] text-emerald-600 font-semibold">ETA: 6 mins · In Transit</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between text-[9px] text-slate-500 font-medium">
              <span>Zone: Central District</span>
              <span>Speed: 38 mph</span>
            </div>
          </div>

          {/* Right Panel: Driver Electronic Signature Card */}
          <div className="col-span-5 flex flex-col justify-between space-y-2">
            <div className="rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-700">Proof of Delivery</span>
                <FileCheck2 className="h-3.5 w-3.5 text-emerald-600" />
              </div>
              <p className="mt-1 text-[11px] font-semibold text-slate-900">Sign-on-Glass (ePOD)</p>
              
              {/* Simulated Signature */}
              <div className="mt-1.5 h-10 w-full rounded-lg bg-slate-50 border border-slate-200/80 p-1 flex items-center justify-center">
                <span className="font-serif text-sm font-semibold text-blue-900 opacity-70 tracking-widest">
                  Alex M. Vance
                </span>
              </div>
              <p className="mt-1 text-[9px] text-slate-400">Signed 14:22 · GPS Confirmed</p>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-2 text-center">
              <p className="text-[10px] font-bold text-blue-900">15M+ Parcels Dispatched</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. LASA PROPERTY — Modern PropTech & Tenant Management
───────────────────────────────────────────────────────────── */
function LasaPropertyMockup() {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-3 sm:p-5">
      <div className="relative w-full max-w-[500px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
        {/* Topbar */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-3.5 py-2">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-indigo-600" />
            <span className="text-xs font-bold text-slate-800">LASA Property Portal</span>
          </div>
          <span className="rounded-full bg-indigo-50 border border-indigo-200/60 px-2.5 py-0.5 text-[10px] font-bold text-indigo-700">
            10,420 Active Units
          </span>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-12 gap-3 p-3.5 sm:p-4">
          {/* Revenue & Occupancy Metric */}
          <div className="col-span-6 rounded-xl border border-slate-100 bg-gradient-to-br from-indigo-50/60 to-white p-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Rent Collected</span>
              <DollarSign className="h-3.5 w-3.5 text-indigo-600" />
            </div>
            <p className="mt-1 text-lg font-extrabold text-slate-900">$142,500</p>
            <div className="mt-2 flex items-center justify-between text-[10px]">
              <span className="font-semibold text-emerald-600">99.2% On-Time</span>
              <span className="text-slate-400">Goal: $145k</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
              <div className="h-full w-[96%] rounded-full bg-indigo-600" />
            </div>
          </div>

          {/* Occupancy Rate Card */}
          <div className="col-span-6 rounded-xl border border-slate-100 bg-gradient-to-br from-emerald-50/60 to-white p-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Occupancy</span>
              <UserCheck className="h-3.5 w-3.5 text-emerald-600" />
            </div>
            <p className="mt-1 text-lg font-extrabold text-slate-900">98.6%</p>
            <p className="mt-1 text-[10px] font-medium text-slate-500">14 Vacancies / 1,020 Units</p>
            <span className="mt-2 inline-block rounded bg-emerald-100 px-1.5 py-0.5 text-[9px] font-bold text-emerald-800">
              Low Turnover
            </span>
          </div>

          {/* Maintenance Work Orders Bar */}
          <div className="col-span-12 flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping" />
              <span className="text-[11px] font-bold text-slate-800">Work Orders: 3 Pending Dispatch</span>
            </div>
            <span className="text-[10px] font-semibold text-indigo-600 hover:underline">
              Resolve Tickets →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   4. BELI — Social Foodie Discovery & Tier Lists
───────────────────────────────────────────────────────────── */
function BeliMockup() {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-3 sm:p-5">
      <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
        {/* Topbar */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-3.5 py-2">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-white">
              B
            </span>
            <span className="text-xs font-bold text-slate-800">Beli Restaurant Ranking</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
            <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
            5M+ Ratings
          </div>
        </div>

        {/* Tier List Showcase */}
        <div className="p-3.5 sm:p-4 space-y-2.5">
          {/* S-Tier Row */}
          <div className="flex items-center gap-2 rounded-xl border border-rose-200/70 bg-gradient-to-r from-rose-50/80 to-white p-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500 font-extrabold text-white text-xs shadow-sm">
              S
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-slate-900 truncate">L'Industrie Pizzeria · West Village</p>
              <p className="text-[10px] text-slate-500">Ranked #1 of 342 · Crispy Burrata Slice</p>
            </div>
            <span className="shrink-0 rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-bold text-rose-700">
              9.8 / 10
            </span>
          </div>

          {/* A-Tier Row */}
          <div className="flex items-center gap-2 rounded-xl border border-amber-200/70 bg-gradient-to-r from-amber-50/80 to-white p-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500 font-extrabold text-white text-xs shadow-sm">
              A
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-slate-900 truncate">Gramercy Tavern · Flatiron</p>
              <p className="text-[10px] text-slate-500">Seasonal Tasting Menu · Top Friend Pick</p>
            </div>
            <span className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800">
              9.3 / 10
            </span>
          </div>

          {/* Social Recommendation Pill */}
          <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-1.5 text-[10px] text-slate-600 border border-slate-200/60">
            <span className="flex items-center gap-1.5 font-medium">
              <Bookmark className="h-3 w-3 text-rose-500" />
              14 friends want to visit this week
            </span>
            <span className="font-bold text-rose-600">View Map Pin →</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   5. ZAMAAPP — School ERP & Gradebook Ecosystem
───────────────────────────────────────────────────────────── */
function ZamaAppMockup() {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-3 sm:p-5">
      <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
        {/* Topbar */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-3.5 py-2">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-emerald-600" />
            <span className="text-xs font-bold text-slate-800">ZamaApp School ERP</span>
          </div>
          <span className="rounded-full bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
            50,000+ Active Students
          </span>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-12 gap-3 p-3.5 sm:p-4">
          <div className="col-span-6 rounded-xl border border-slate-100 bg-emerald-50/50 p-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Attendance</span>
            <p className="mt-1 text-lg font-extrabold text-slate-900">96.8%</p>
            <p className="text-[10px] font-medium text-emerald-700">Daily SMS Sent to Parents</p>
          </div>

          <div className="col-span-6 rounded-xl border border-slate-100 bg-blue-50/50 p-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Fee Ledger</span>
            <p className="mt-1 text-lg font-extrabold text-slate-900">100% Paid</p>
            <p className="text-[10px] font-medium text-blue-700">Online Invoice Receipts</p>
          </div>

          {/* Exam Gradebook Table */}
          <div className="col-span-12 rounded-xl border border-slate-200/80 bg-white p-2.5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 text-[10px] font-bold text-slate-600">
              <span>Subject / Course</span>
              <span>Class Avg</span>
              <span>Status</span>
            </div>
            <div className="space-y-1.5 pt-1.5 text-[11px]">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800">Advanced Mathematics</span>
                <span className="font-bold text-slate-700">92%</span>
                <span className="rounded bg-emerald-100 px-1.5 py-0.2 text-[9px] font-bold text-emerald-800">Grade A+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800">Computer Science & AI</span>
                <span className="font-bold text-slate-700">95%</span>
                <span className="rounded bg-emerald-100 px-1.5 py-0.2 text-[9px] font-bold text-emerald-800">Grade A+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   6. TRAVELOUP — Curated Tour & Trip Booking Marketplace
───────────────────────────────────────────────────────────── */
function TraveloupMockup() {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-3 sm:p-5">
      <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
        {/* Topbar */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-3.5 py-2">
          <div className="flex items-center gap-2">
            <Compass className="h-4 w-4 text-cyan-600" />
            <span className="text-xs font-bold text-slate-800">Traveloup Marketplace</span>
          </div>
          <span className="rounded-full bg-cyan-50 border border-cyan-200/60 px-2.5 py-0.5 text-[10px] font-bold text-cyan-700">
            100k+ Tours Booked
          </span>
        </div>

        {/* Featured Tour Card */}
        <div className="p-3.5 sm:p-4 space-y-2.5">
          <div className="flex items-center justify-between rounded-xl bg-gradient-to-br from-cyan-900 to-slate-900 p-3 text-white">
            <div>
              <span className="rounded bg-cyan-400/20 px-1.5 py-0.5 text-[9px] font-bold uppercase text-cyan-300">
                Verified Excursion
              </span>
              <p className="mt-1 text-sm font-bold">5-Day Alpine Glacier Expedition</p>
              <p className="text-[10px] text-slate-300">All-Inclusive · Guided Safari · 4.9 ★ (1.2k reviews)</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400">from</span>
              <p className="text-base font-extrabold text-cyan-300">$650</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
            <div className="rounded-lg border border-slate-200/80 bg-slate-50 p-1.5 font-medium text-slate-700">
              🗓️ Daily Departures
            </div>
            <div className="rounded-lg border border-slate-200/80 bg-slate-50 p-1.5 font-medium text-slate-700">
              🛡️ Free Cancellation
            </div>
            <div className="rounded-lg border border-slate-200/80 bg-slate-50 p-1.5 font-bold text-cyan-700 bg-cyan-50">
              Instant Confirm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   7. FARM4TRADE — Smart Livestock & Herd Telemetry
───────────────────────────────────────────────────────────── */
function Farm4TradeMockup() {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-3 sm:p-5">
      <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
        {/* Topbar */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-3.5 py-2">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-emerald-600" />
            <span className="text-xs font-bold text-slate-800">Farm4Trade Livestock IoT</span>
          </div>
          <span className="rounded-full bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
            1M+ Animals Monitored
          </span>
        </div>

        <div className="grid grid-cols-12 gap-3 p-3.5 sm:p-4">
          <div className="col-span-6 rounded-xl border border-slate-100 bg-slate-50 p-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">RFID Herd Count</span>
            <p className="mt-1 text-lg font-extrabold text-slate-900">1,240 Heads</p>
            <p className="text-[10px] text-emerald-600 font-semibold">100% Traceable Tagging</p>
          </div>

          <div className="col-span-6 rounded-xl border border-slate-100 bg-slate-50 p-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Feed Efficiency</span>
            <p className="mt-1 text-lg font-extrabold text-slate-900">+32%</p>
            <p className="text-[10px] text-blue-600 font-semibold">Optimized Growth Curve</p>
          </div>

          <div className="col-span-12 flex items-center justify-between rounded-xl bg-emerald-600 px-3 py-2 text-white shadow-sm">
            <span className="text-[11px] font-semibold">Vaccination Schedule: All Cleared</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   8. LUNGA — AgriTech Telemedicine & Farmer Commerce
───────────────────────────────────────────────────────────── */
function LungaMockup() {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-3 sm:p-5">
      <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
        {/* Topbar */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-3.5 py-2">
          <div className="flex items-center gap-2">
            <Wheat className="h-4 w-4 text-amber-600" />
            <span className="text-xs font-bold text-slate-800">Lunga Agriculture Hub</span>
          </div>
          <span className="rounded-full bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 text-[10px] font-bold text-amber-700">
            40k+ Farmers
          </span>
        </div>

        <div className="p-3.5 sm:p-4 space-y-2.5">
          {/* Vet Advisory Chat Notification */}
          <div className="flex items-center gap-2.5 rounded-xl border border-amber-200/70 bg-amber-50/60 p-2.5">
            <MessageSquare className="h-4 w-4 text-amber-600 shrink-0" />
            <div className="min-w-0 flex-1 text-[11px]">
              <p className="font-bold text-slate-900">Dr. Ochieng (Agronomist)</p>
              <p className="text-slate-600 truncate">"Soil nitrogen treatment protocol confirmed for next cycle."</p>
            </div>
            <span className="text-[9px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
              24hr SLA
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50 px-3 py-2 text-[10px]">
            <span className="font-bold text-slate-700">Farmer Trade Volume Processed:</span>
            <span className="font-extrabold text-emerald-600 text-xs">$8.5M+ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   9. JUMENI — Smart Waste Logistics & Municipal Dispatch
───────────────────────────────────────────────────────────── */
function JumeniMockup() {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-3 sm:p-5">
      <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
        {/* Topbar */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-3.5 py-2">
          <div className="flex items-center gap-2">
            <Trash2 className="h-4 w-4 text-teal-600" />
            <span className="text-xs font-bold text-slate-800">Jumeni Fleet Logistics</span>
          </div>
          <span className="rounded-full bg-teal-50 border border-teal-200/60 px-2.5 py-0.5 text-[10px] font-bold text-teal-700">
            500k+ Completed Pickups
          </span>
        </div>

        <div className="grid grid-cols-12 gap-3 p-3.5 sm:p-4">
          <div className="col-span-6 rounded-xl border border-slate-100 bg-slate-50 p-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Route Efficiency</span>
            <p className="mt-1 text-lg font-extrabold text-slate-900">-34% Mileage</p>
            <p className="text-[10px] text-teal-600 font-semibold">AI Automated Dispatch</p>
          </div>

          <div className="col-span-6 rounded-xl border border-slate-100 bg-slate-50 p-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Service SLA</span>
            <p className="mt-1 text-lg font-extrabold text-slate-900">99.6%</p>
            <p className="text-[10px] text-blue-600 font-semibold">Verified Bin Sensors</p>
          </div>

          <div className="col-span-12 flex items-center justify-between rounded-xl bg-slate-900 px-3 py-2 text-white">
            <div className="flex items-center gap-2 text-[11px]">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Municipal Fleet Active: 65,000+ Accounts Served</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DefaultSaaSMockup({ id }: { id: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm">
        <p className="text-sm font-bold capitalize text-slate-800">{id.replace("-", " ")} Platform</p>
        <p className="text-xs text-slate-500">Production SaaS Architecture</p>
      </div>
    </div>
  );
}
