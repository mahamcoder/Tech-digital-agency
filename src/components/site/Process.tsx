import { motion } from "motion/react";
import { Reveal, SectionLabel } from "./Reveal";
import { Search, Palette, TestTube, Package } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Research",
    duration: "1 Week",
    description:
      "We explore challenges and user pain points to uncover what people truly need from your product.",
  },
  {
    id: 2,
    icon: Palette,
    title: "Visual Design",
    duration: "2 Week",
    description:
      "We build a clean, energetic design with easy navigation, motivating visuals, and interactive features that keep users engaged.",
  },
  {
    id: 3,
    icon: TestTube,
    title: "Prototype & Test",
    duration: "1-2 Days",
    description:
      "We run multiple test rounds to refine the experience, making sure the product feels smooth, secure, and enjoyable for every user.",
  },
  {
    id: 4,
    icon: Package,
    title: "Final Delivery",
    duration: "1-2 Days",
    description:
      "We wrap it all up with a polished presentation that demonstrates the product's value — showing how it empowers users.",
  },
];

export function Process() {
  return (
    <section
      id="how-we-work"
      className="relative isolate overflow-hidden py-14 md:py-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[550px] w-[950px] max-w-[130vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[170px]" />

      <div className="mx-auto max-w-6xl px-5 md:px-10">
        {/* Header */}
        <Reveal className="text-left">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Our 4-Step{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              Engineering Process
            </span>
          </h2>
        </Reveal>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_auto]">
          <Reveal delay={0.1}>
            <p className="max-w-md text-[15px] leading-[1.8] text-muted-foreground">
              Beyond just building apps, we craft experiences that delight users
              at every step — from personalized flows to clean visuals that make
              interaction feel simple and rewarding.
            </p>
          </Reveal>

          {/* Timeline Dates */}
          <Reveal delay={0.15}>
            <div className="flex items-center gap-3">
              <span className="rounded-xl border border-border px-4 py-2 text-xs text-muted-foreground">
                Start Date
              </span>
              <span className="rounded-xl bg-primary/15 px-4 py-2 text-xs font-semibold text-primary">
                Delivery
              </span>
            </div>
          </Reveal>
        </div>

        {/* Zigzag Timeline */}
        <div className="relative mt-20">
          {/* Vertical dashed connector line (center on lg) */}
          <div className="absolute left-8 top-0 hidden h-full w-px border-l-2 border-dashed border-primary/25 lg:left-1/2 lg:block lg:-translate-x-px" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <Reveal key={step.id} delay={i * 0.1}>
                  <div
                    className={`relative grid items-start gap-8 lg:grid-cols-2 ${isLeft ? "" : "lg:direction-rtl"
                      }`}
                  >
                    {/* Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, ease }}
                      className={`glass relative overflow-hidden rounded-[2rem] p-7 sm:p-8 ${isLeft
                          ? "lg:col-start-1"
                          : "lg:col-start-2"
                        }`}
                      style={{ direction: "ltr" }}
                    >
                      {/* Subtle glow */}
                      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/15 blur-[50px]" />

                      {/* Duration badge */}
                      <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-foreground/8 px-3.5 py-1.5">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                          {step.duration}
                        </span>
                      </div>

                      {/* Title row */}
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="text-xl font-semibold tracking-tight text-foreground">
                          {step.id} {step.title}
                        </h3>
                      </div>

                      <p className="mt-4 text-sm leading-[1.7] text-muted-foreground">
                        {step.description}
                      </p>
                    </motion.div>

                    {/* Center dot on timeline */}
                    <div
                      className={`absolute left-6 top-6 hidden h-5 w-5 rounded-full border-2 border-primary bg-background ring-4 ring-background lg:left-1/2 lg:block lg:-translate-x-1/2 ${i === steps.length - 1
                          ? "bg-primary"
                          : ""
                        }`}
                    >
                      {i < steps.length - 1 && (
                        <span className="absolute inset-1 rounded-full bg-primary/40" />
                      )}
                      {i === steps.length - 1 && (
                        <span className="absolute inset-0.5 rounded-full bg-primary" />
                      )}
                    </div>

                    {/* Empty column for zigzag spacing */}
                    <div
                      className={`hidden lg:block ${isLeft ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"
                        }`}
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
