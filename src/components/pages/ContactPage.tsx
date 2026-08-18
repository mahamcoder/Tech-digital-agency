import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Smartphone,
  Globe2,
  Cpu,
  ShieldCheck,
  Wrench,
  Kanban,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const servicesList = [
  {
    id: "web",
    label: "Web Development",
    desc: "React, Next.js & high-performance web platforms",
    icon: Globe2,
  },
  {
    id: "mobile",
    label: "Mobile App Development",
    desc: "Cross-platform iOS & Android apps built for scale",
    icon: Smartphone,
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    desc: "CI/CD pipelines, Docker & AWS cloud deployment",
    icon: Cpu,
  },
  {
    id: "qa",
    label: "Quality Assurance",
    desc: "Automated testing, security audits & bug-free delivery",
    icon: ShieldCheck,
  },
  {
    id: "maintenance",
    label: "Maintenance & Upgrades",
    desc: "24/7 monitoring, security patches & performance tuning",
    icon: Wrench,
  },
  {
    id: "pm",
    label: "Project Management",
    desc: "Agile sprints, roadmap planning & transparent delivery",
    icon: Kanban,
  },
];

const budgetTiers = [
  { label: "$5,000 – $15,000", desc: "MVP or core feature build" },
  { label: "$15,000 – $50,000", desc: "Full web or mobile application" },
  { label: "$50,000 – $100,000", desc: "Enterprise scale software system" },
  { label: "$100,000+", desc: "Custom multi-platform architecture" },
];

const timelines = [
  "Immediate (< 2 weeks)",
  "1 month",
  "2 – 3 months",
  "Flexible / Exploring",
];

const steps = [
  { id: 1, name: "Services" },
  { id: 2, name: "Budget & Timeline" },
  { id: 3, name: "Your Details" },
];

export function ContactPage() {
  const [step, setStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>(["Web Development"]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s)
        ? prev.length > 1
          ? prev.filter((x) => x !== s)
          : prev
        : [...prev, s]
    );
  };

  const canProgress = () => {
    if (step === 0) return selectedServices.length > 0;
    if (step === 1) return selectedBudget !== "" && selectedTimeline !== "";
    if (step === 2) return name.trim() !== "" && email.trim() !== "" && message.trim() !== "";
    return true;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!canProgress() || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const formData = new FormData();
      formData.append("access_key", "41c14ede-c1c4-414a-932c-f04af76b29ad");
      formData.append("subject", `New CanbeTech Inquiry from ${name}`);
      formData.append("from_name", "CanbeTech Official Website");
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone || "Not provided");
      formData.append("services", selectedServices.join(", "));
      formData.append("budget_tier", selectedBudget);
      formData.append("timeline", selectedTimeline);
      formData.append("message", message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please check your connection or email info@canbetech.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <PageHero
        badge="Contact Us"
        aiVariant="contact"
        title={
          <>
            Let's Build Something{" "}
            <span className="mt-2 block bg-gradient-to-r from-violet-400 via-primary to-purple-300 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </>
        }
        description="Select your project requirements below and send your brief. Our engineering team responds within 2 hours."
      />

      {/* ─── MAIN FORM SECTION ─── */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-10 md:pb-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-10 items-start">

          {/* ── LEFT: Clean Step-by-Step Form ── */}
          <Reveal>
            <div className="glass relative overflow-hidden rounded-[2rem] p-7 sm:p-9 border border-border/60 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease }}
                  className="flex flex-col items-center py-14 text-center"
                >
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/15 text-primary border border-primary/30">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                    Project Brief Received!
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Thank you, <strong className="text-foreground">{name}</strong>. Our solution architects have received your requirements and will reply to <strong className="text-foreground">{email}</strong> within 2 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setStep(0);
                      setName("");
                      setEmail("");
                      setPhone("");
                      setMessage("");
                      setSelectedBudget("");
                      setSelectedTimeline("");
                    }}
                    className="btn-cta mt-8 rounded-full px-8 py-3 text-sm font-medium text-primary-foreground"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* ── Form Title ── */}
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      Get in Touch
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      Fill out the project brief below to receive a custom engineering proposal within 2 hours.
                    </p>
                  </div>

                  {/* ── Clean 3-Step Indicator Bar ── */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between border-b border-border/40 pb-4">
                      {steps.map((st, i) => {
                        const isCurrent = step === i;
                        const isCompleted = step > i;
                        return (
                          <button
                            key={st.id}
                            type="button"
                            onClick={() => {
                              if (isCompleted) setStep(i);
                            }}
                            className={`flex items-center gap-2 text-xs font-semibold transition-colors ${isCurrent
                                ? "text-primary font-bold"
                                : isCompleted
                                  ? "text-foreground cursor-pointer"
                                  : "text-muted-foreground/60 cursor-default"
                              }`}
                          >
                            <span
                              className={`grid h-6 w-6 place-items-center rounded-full text-[11px] font-bold ${isCurrent
                                  ? "bg-primary text-primary-foreground"
                                  : isCompleted
                                    ? "bg-primary/20 text-primary border border-primary/40"
                                    : "bg-foreground/5 text-muted-foreground"
                                }`}
                            >
                              {isCompleted ? "✓" : st.id}
                            </span>
                            <span className="hidden sm:inline">{st.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* ── Step Content Panes ── */}
                  <AnimatePresence mode="wait">
                    {/* STEP 1: Services */}
                    {step === 0 && (
                      <motion.div
                        key="step-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease }}
                        className="space-y-4"
                      >
                        <div>
                          <h4 className="font-display text-xl font-semibold text-foreground">
                            Which services do you need?
                          </h4>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Select one or multiple categories for your project.
                          </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2 pt-2">
                          {servicesList.map((s) => {
                            const Icon = s.icon;
                            const active = selectedServices.includes(s.label);
                            return (
                              <button
                                key={s.id}
                                type="button"
                                onClick={() => toggleService(s.label)}
                                className={`flex items-start gap-3.5 rounded-2xl p-4 text-left transition-all duration-300 ${active
                                    ? "bg-primary/20 text-foreground border border-primary/60 shadow-[0_0_20px_-4px_rgba(59,130,246,0.35)]"
                                    : "bg-foreground/4 text-muted-foreground border border-border/40 hover:bg-foreground/8 hover:text-foreground"
                                  }`}
                              >
                                <span
                                  className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-colors ${active
                                      ? "bg-primary text-primary-foreground"
                                      : "bg-foreground/6 text-muted-foreground"
                                    }`}
                                >
                                  <Icon className="h-4 w-4" />
                                </span>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center justify-between gap-1">
                                    <span className="text-sm font-semibold text-foreground">
                                      {s.label}
                                    </span>
                                    {active && (
                                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                                    )}
                                  </div>
                                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                    {s.desc}
                                  </p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 2: Budget & Timeline */}
                    {step === 1 && (
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease }}
                        className="space-y-6"
                      >
                        <div>
                          <h4 className="font-display text-xl font-semibold text-foreground">
                            Budget & Timeline
                          </h4>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Select your budget tier and launch expectations.
                          </p>
                        </div>

                        {/* Budget Section */}
                        <div className="space-y-3">
                          <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                            Estimated Budget Range <span className="text-primary">*</span>
                          </label>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {budgetTiers.map((b) => {
                              const active = selectedBudget === b.label;
                              return (
                                <button
                                  key={b.label}
                                  type="button"
                                  onClick={() => setSelectedBudget(b.label)}
                                  className={`rounded-2xl p-4 text-left transition-all duration-300 ${active
                                      ? "bg-primary/20 text-foreground border border-primary/60 shadow-[0_0_15px_-3px_rgba(168,85,247,0.3)] font-medium"
                                      : "bg-foreground/4 text-muted-foreground border border-border/40 hover:bg-foreground/8 hover:text-foreground"
                                    }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-foreground">{b.label}</span>
                                    {active && <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />}
                                  </div>
                                  <p className="mt-1 text-xs text-muted-foreground">{b.desc}</p>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Timeline Section */}
                        <div className="space-y-3">
                          <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                            Target Delivery Timeline <span className="text-primary">*</span>
                          </label>
                          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                            {timelines.map((t) => {
                              const active = selectedTimeline === t;
                              return (
                                <button
                                  key={t}
                                  type="button"
                                  onClick={() => setSelectedTimeline(t)}
                                  className={`rounded-xl px-3 py-3 text-center text-xs font-medium transition-all duration-300 ${active
                                      ? "bg-primary/20 text-foreground border border-primary/50 shadow-[0_0_12px_-3px_rgba(168,85,247,0.3)]"
                                      : "bg-foreground/4 text-muted-foreground border border-border/40 hover:bg-foreground/8 hover:text-foreground"
                                    }`}
                                >
                                  {t}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 3: Contact & Message */}
                    {step === 2 && (
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease }}
                        className="space-y-5"
                      >
                        <div>
                          <h4 className="font-display text-xl font-semibold text-foreground">
                            Your Contact Details
                          </h4>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Enter your details so we can deliver your technical proposal.
                          </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
                              Full Name <span className="text-primary">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="John Doe"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full rounded-xl border border-border/80 bg-foreground/5 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-colors focus:border-primary focus:bg-foreground/8"
                            />
                          </div>

                          <div>
                            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
                              Business Email <span className="text-primary">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="john@company.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full rounded-xl border border-border/80 bg-foreground/5 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-colors focus:border-primary focus:bg-foreground/8"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
                            Phone / WhatsApp <span className="text-muted-foreground/60 font-normal">(Optional)</span>
                          </label>
                          <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full rounded-xl border border-border/80 bg-foreground/5 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-colors focus:border-primary focus:bg-foreground/8"
                          />
                        </div>

                        <div>
                          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
                            Project Description <span className="text-primary">*</span>
                          </label>
                          <textarea
                            required
                            rows={4}
                            placeholder="Tell us about your project goals or key requirements..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full resize-none rounded-xl border border-border/80 bg-foreground/5 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-colors focus:border-primary focus:bg-foreground/8"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {errorMessage && (
                    <p className="text-xs text-red-400 font-medium">{errorMessage}</p>
                  )}

                  {/* ── Navigation Buttons ── */}
                  <div className="mt-8 flex items-center justify-between border-t border-border/40 pt-5">
                    {step > 0 ? (
                      <button
                        type="button"
                        disabled={isSubmitting}
                        onClick={() => setStep((s) => s - 1)}
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground disabled:opacity-50"
                      >
                        ← Back
                      </button>
                    ) : (
                      <span />
                    )}

                    {step < 2 ? (
                      <button
                        type="button"
                        disabled={!canProgress()}
                        onClick={() => setStep((s) => s + 1)}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 disabled:opacity-40"
                      >
                        Continue
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled={!canProgress() || isSubmitting}
                        onClick={() => handleSubmit()}
                        className="btn-cta inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-primary-foreground disabled:opacity-40"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Project Brief
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </Reveal>

          {/* ── RIGHT: Direct Contact Cards ── */}
          <div className="space-y-4 lg:pt-1">
            <Reveal delay={0.05}>
              <div className="glass relative overflow-hidden rounded-[2rem] p-7 sm:p-8 border border-border/60 shadow-xl space-y-6">
                <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-primary/10 blur-[60px]" />

                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    Direct Engineering Contact
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Have an urgent question or need immediate technical advice? Contact our engineering leads directly.
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  <a
                    href="mailto:info@canbetech.com"
                    className="glass group flex items-center justify-between rounded-2xl p-4.5 border border-border/50 transition-all hover:border-primary/40 hover:bg-foreground/5"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
                        <p className="text-sm font-medium text-foreground">info@canbetech.com</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </a>

                  <a
                    href="tel:+923026833531"
                    className="glass group flex items-center justify-between rounded-2xl p-4.5 border border-border/50 transition-all hover:border-primary/40 hover:bg-foreground/5"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Phone / WhatsApp</p>
                        <p className="text-sm font-medium text-foreground">+92 302 6833531</p>
                        <p className="text-[11px] text-muted-foreground">+92 305 7554620</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </a>

                  <div className="glass flex items-center gap-3.5 rounded-2xl p-4.5 border border-border/50">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Office Address</p>
                      <p className="text-sm font-medium text-foreground">191-B Hashmi Garden</p>
                      <p className="text-xs text-muted-foreground">Bahawalpur, Pakistan</p>
                    </div>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="rounded-2xl border border-primary/25 bg-primary/8 p-4.5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/20 text-primary">
                      <Sparkles className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-foreground">Guaranteed 2-Hour Response</p>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
                        Our solution architects review every brief personally and provide a custom technical proposal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>
    </>
  );
}
