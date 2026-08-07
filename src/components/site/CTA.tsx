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

          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary text-center">
            Ready when you are
          </p>
          <h2 className="mt-6 mx-auto font-display text-3xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl text-center">
            Let's Build a Growth Engine{" "}
            <span className="block bg-gradient-to-r from-violet-400 via-primary to-purple-300 bg-clip-text text-transparent">
              That Compounds
            </span>
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A 30-minute diagnostic call. We'll map where your growth is leaking and
            what it would take to fix it — no pitch deck.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="btn-cta rounded-full px-8 py-3.5 text-sm font-medium text-primary-foreground"
            >
              Book a diagnostic
            </a>
            <a
              href="/work"
              className="rounded-full border border-border px-8 py-3.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              See the work
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
