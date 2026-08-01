import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import {
  ArrowRight,
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronRight,
  Calendar,
  Smartphone,
  Globe2,
  Cpu,
  ShieldCheck,
  Wrench,
  Kanban,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  { label: "Mobile App Development", icon: Smartphone },
  { label: "Web Development", icon: Globe2 },
  { label: "DevOps & Cloud", icon: Cpu },
  { label: "Quality Assurance", icon: ShieldCheck },
  { label: "Maintenance & Upgrades", icon: Wrench },
  { label: "Project Management", icon: Kanban },
];

const budgetTiers = [
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
];

const timelines = ["Immediate (< 2 weeks)", "1 month", "2-3 months", "Just exploring"];

const calendarSlots = [
  { day: "Mon", date: "Aug 4", slots: ["10:00 AM", "2:00 PM", "4:30 PM"] },
  { day: "Tue", date: "Aug 5", slots: ["9:30 AM", "11:00 AM", "3:00 PM"] },
  { day: "Wed", date: "Aug 6", slots: ["10:00 AM", "1:00 PM"] },
  { day: "Thu", date: "Aug 7", slots: ["9:00 AM", "2:30 PM", "4:00 PM"] },
  { day: "Fri", date: "Aug 8", slots: ["10:30 AM", "3:30 PM"] },
];

export function ContactPage() {
  const [step, setStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("");

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const canProgress = () => {
    if (step === 0) return selectedServices.length > 0;
    if (step === 1) return selectedBudget !== "" && selectedTimeline !== "";
    if (step === 2) return name.trim() !== "" && email.trim() !== "";
    return true;
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const totalSteps = 3;

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative isolate overflow-hidden pb-16 pt-32 sm:pt-40 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[12%] top-[18%] h-[380px] w-[500px] rounded-full bg-primary/10 blur-[160px]" />
          <div className="absolute right-[8%] top-[25%] h-[300px] w-[400px] rounded-full bg-accent/8 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <SectionLabel>Contact CanbeTech</SectionLabel>
          </motion.div>

          <div className="mt-7 grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease }}
              className="font-display text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl"
            >
              Ready to build something
              <span className="mt-2 block font-serif text-[0.88em] font-normal italic text-primary">
                extraordinary?
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease }}
              className="max-w-md text-[15px] leading-[1.8] text-muted-foreground lg:text-right"
            >
              Schedule a call or submit your project brief. Our engineering team responds
              within 2 hours with actionable technical roadmap insights.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── CONTACT SPLIT ─── */}
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-12">
          {/* Left: Direct contact info */}
          <Reveal>
            <div className="space-y-6">
              {/* Response SLA */}
              <div className="glass rounded-[1.75rem] p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/12 text-primary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">Response SLA</p>
                    <p className="text-xs text-muted-foreground">Under 2 hours guaranteed during business hours</p>
                  </div>
                </div>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease }}
                    className="h-full rounded-full bg-[var(--gradient-cta)]"
                  />
                </div>
                <p className="mt-2 text-[10px] text-muted-foreground/60">98% client satisfaction rate across 500+ projects</p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3">
                <a
                  href="mailto:info@canbetech.com"
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-primary/30"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-foreground/5 text-muted-foreground transition-colors group-hover:bg-primary/12 group-hover:text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">info@canbetech.com</p>
                    <p className="text-xs text-muted-foreground">Direct Engineering Inquiries</p>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </a>

                <a
                  href="tel:+923026833531"
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-primary/30"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-foreground/5 text-muted-foreground transition-colors group-hover:bg-primary/12 group-hover:text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">+92 302 6833531</p>
                    <p className="text-xs text-muted-foreground">Secondary: +92 305 7554620</p>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </a>

                <div className="glass flex items-center gap-4 rounded-2xl p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-foreground/5 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">191-B Hashmi Garden</p>
                    <p className="text-xs text-muted-foreground">Bahawalpur, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Quick Book */}
              <div className="glass rounded-[1.75rem] p-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary/60" />
                  <h3 className="text-sm font-medium text-foreground">Schedule Consultation</h3>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">Select a 30-min technical consultation slot.</p>

                <div className="mt-5 flex gap-2 overflow-x-auto">
                  {calendarSlots.map((cs, i) => (
                    <button
                      key={cs.date}
                      type="button"
                      onClick={() => { setSelectedDay(i); setSelectedSlot(""); }}
                      className={`flex shrink-0 flex-col items-center rounded-xl px-3 py-2 text-center transition-all duration-300 ${
                        selectedDay === i
                          ? "bg-primary/15 text-primary border border-primary/30"
                          : "bg-foreground/3 text-muted-foreground border border-transparent hover:bg-foreground/5"
                      }`}
                    >
                      <span className="text-[10px] uppercase tracking-wide">{cs.day}</span>
                      <span className="mt-0.5 text-xs font-medium">{cs.date}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {calendarSlots[selectedDay].slots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`rounded-lg px-3 py-1.5 text-xs transition-all duration-300 ${
                        selectedSlot === slot
                          ? "bg-primary text-primary-foreground"
                          : "bg-foreground/4 text-muted-foreground hover:bg-foreground/8 hover:text-foreground"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Multi-step project brief */}
          <Reveal delay={0.1}>
            <div className="glass relative overflow-hidden rounded-[2rem] p-7 sm:p-9">
              <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-primary/15 blur-[60px]" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease }}
                  className="flex flex-col items-center py-16 text-center"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-primary/12 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-foreground">
                    Project Brief Received
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Thank you! A CanbeTech senior solution architect will review your project details
                    and contact you at {email} within 2 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                        Project Specification Brief
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        Step {step + 1} of {totalSteps}
                      </span>
                    </div>
                    <div className="mt-3 flex gap-1.5">
                      {Array.from({ length: totalSteps }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                            i <= step ? "bg-primary" : "bg-border"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {step === 0 && (
                      <motion.div
                        key="step-0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease }}
                      >
                        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                          What solutions do you need?
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-2.5">
                          {services.map((s) => {
                            const Icon = s.icon;
                            const active = selectedServices.includes(s.label);
                            return (
                              <button
                                key={s.label}
                                type="button"
                                onClick={() => toggleService(s.label)}
                                className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm transition-all duration-300 ${
                                  active
                                    ? "bg-primary/12 text-foreground border border-primary/30"
                                    : "bg-foreground/3 text-muted-foreground border border-transparent hover:bg-foreground/6"
                                }`}
                              >
                                <Icon className={`h-4 w-4 shrink-0 ${active ? "text-primary" : ""}`} />
                                <span className="text-[13px]">{s.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {step === 1 && (
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease }}
                        className="space-y-6"
                      >
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                            Estimated Budget Range
                          </p>
                          <div className="mt-3 grid grid-cols-2 gap-2">
                            {budgetTiers.map((b) => (
                              <button
                                key={b}
                                type="button"
                                onClick={() => setSelectedBudget(b)}
                                className={`rounded-xl px-4 py-3 text-[13px] transition-all duration-300 ${
                                  selectedBudget === b
                                    ? "bg-primary/12 text-foreground border border-primary/30"
                                    : "bg-foreground/3 text-muted-foreground border border-transparent hover:bg-foreground/6"
                                }`}
                              >
                                {b}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                            Target Timeline
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {timelines.map((t) => (
                              <button
                                key={t}
                                type="button"
                                onClick={() => setSelectedTimeline(t)}
                                className={`rounded-full px-4 py-2 text-[13px] transition-all duration-300 ${
                                  selectedTimeline === t
                                    ? "bg-primary/12 text-foreground border border-primary/30"
                                    : "bg-foreground/3 text-muted-foreground border border-transparent hover:bg-foreground/6"
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease }}
                        className="space-y-5"
                      >
                        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                          Contact Details
                        </p>
                        <div className="space-y-3">
                          <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-xl border border-border bg-foreground/3 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary/50 focus:bg-foreground/5"
                          />
                          <div className="grid gap-3 sm:grid-cols-2">
                            <input
                              type="email"
                              placeholder="Business Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full rounded-xl border border-border bg-foreground/3 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary/50 focus:bg-foreground/5"
                            />
                            <input
                              type="tel"
                              placeholder="Phone Number (Optional)"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className="w-full rounded-xl border border-border bg-foreground/3 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary/50 focus:bg-foreground/5"
                            />
                          </div>
                          <textarea
                            placeholder="Describe your project, features, or architectural goals..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={4}
                            className="w-full resize-none rounded-xl border border-border bg-foreground/3 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary/50 focus:bg-foreground/5"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-8 flex items-center justify-between">
                    {step > 0 ? (
                      <button
                        type="button"
                        onClick={() => setStep((s) => s - 1)}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        ← Back
                      </button>
                    ) : (
                      <span />
                    )}

                    {step < totalSteps - 1 ? (
                      <button
                        type="button"
                        disabled={!canProgress()}
                        onClick={() => setStep((s) => s + 1)}
                        className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-5 py-2.5 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary/25 disabled:opacity-40 disabled:hover:bg-primary/15"
                      >
                        Continue
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled={!canProgress()}
                        onClick={handleSubmit}
                        className="btn-cta inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-primary-foreground disabled:opacity-40"
                      >
                        Submit Brief
                        <Send className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
