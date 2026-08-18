import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Reveal, SectionLabel } from "./Reveal";

const faqs = [
  {
    q: "What services does CanbeTech offer?",
    a: "We provide AI-powered software development, web and mobile applications, custom software solutions, UI/UX development, API integrations, and scalable digital products.",
  },
  {
    q: "What types of businesses do you work with?",
    a: "We work with startups, growing businesses, and established companies looking to build, improve, or scale their digital products.",
  },
  {
    q: "Can you build a custom software solution from scratch?",
    a: "Yes. We develop custom solutions based on your business requirements, including planning, UI/UX design, development, integrations, testing, and deployment.",
  },
  {
    q: "Do you use AI in your development process?",
    a: "Yes. We use AI-assisted development workflows to accelerate development, improve productivity, automate repetitive tasks, and build intelligent features where they provide real business value.",
  },
  {
    q: "How long does it take to build a website or software product?",
    a: "The timeline depends on the project's scope, features, and complexity. A simple website may take a few weeks, while a custom software product can take several months.",
  },
  {
    q: "Can you integrate third-party APIs and services?",
    a: "Yes. We can integrate payment gateways, authentication systems, CRMs, cloud services, AI APIs, analytics platforms, and other third-party services.",
  },
  {
    q: "How do we start a project with CanbeTech?",
    a: "Simply book a call or contact us with your idea. We'll discuss your goals, requirements, timeline, and recommended approach before moving forward.",
  },
  {
    q: "Can you improve or rebuild an existing website or application?",
    a: "Absolutely. We can audit your existing product, identify technical and UX issues, modernize the design, improve performance, and rebuild or enhance the system where needed.",
  },

];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative isolate overflow-hidden py-14 md:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[440px] w-[760px] max-w-[130vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl">
            Questions,{" "}
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              Answered Clearly
            </span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Still unsure whether we're the right partner? Ask us directly — we'll tell
            you honestly if we're not.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[13px] text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Talk to a strategist
          </a>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.06}>
                <div
                  className={`glass overflow-hidden rounded-3xl transition-colors duration-500 ${isOpen ? "border-primary/40" : "hover:border-primary/25"
                    }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >
                    <span className="text-[15px] font-medium tracking-tight">{f.q}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-500 ${isOpen
                        ? "rotate-45 border-primary/40 bg-[var(--gradient-cta)] text-primary-foreground"
                        : "border-border text-muted-foreground"
                        }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
