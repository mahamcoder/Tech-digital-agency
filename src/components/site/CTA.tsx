import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-14 text-center md:px-10 md:py-20">
      <Reveal>
        <div className="glass relative isolate overflow-hidden rounded-[2.5rem] px-8 py-16 md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-x-0 -bottom-1/2 -z-10 h-[520px]"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-40 w-[70%] -translate-x-1/2 rounded-full bg-primary/25 blur-[110px]" />

          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#06B6D4] text-center">
            Ready when you are
          </p>
          <h2 className="mt-6 mx-auto font-display text-3xl font-medium leading-[1.08] tracking-[-0.03em] text-[#F8FAFC] sm:text-5xl md:text-6xl text-center">
            Let's Build a Growth Engine{" "}
            <span className="block bg-gradient-to-r from-[#06B6D4] via-[#2563FF] to-[#8B5CF6] bg-clip-text text-transparent">
              That Compounds
            </span>
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-base leading-relaxed text-[#CBD5E1] sm:text-lg">
            A 30-minute diagnostic call. We'll map where your growth is leaking and
            what it would take to fix it — no pitch deck.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="btn-cta rounded-full px-8 py-3.5 text-sm font-semibold text-[#F8FAFC]"
            >
              Book a diagnostic
            </a>
            <a
              href="/work"
              className="btn-secondary rounded-full px-8 py-3.5 text-sm font-medium text-[#F8FAFC]"
            >
              See the work
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
