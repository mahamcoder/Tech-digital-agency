import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-8 md:px-10">
      <Reveal>
        <div className="glass relative isolate overflow-hidden rounded-[2.5rem] px-6 py-16 text-center md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-x-0 -bottom-1/2 -z-10 h-[520px]"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-40 w-[70%] -translate-x-1/2 rounded-full bg-primary/25 blur-[110px]" />

          <p className="text-[11px] uppercase tracking-[0.28em] text-foreground/60">
            Ready when you are
          </p>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
            Let's build a growth engine
            <span className="block font-serif italic">that compounds</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            A 30-minute diagnostic call. We'll map where your growth is leaking and
            what it would take to fix it — no pitch deck.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="btn-cta rounded-full px-7 py-3 text-sm font-medium text-primary-foreground"
            >
              Book a diagnostic
            </a>
            <a
              href="#projects"
              className="rounded-full border border-border px-7 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              See the work
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
