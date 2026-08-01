import { Reveal, SectionLabel } from "./Reveal";

const quotes = [
  {
    q: "They rebuilt our entire demand engine in a quarter. The board finally trusts the marketing number.",
    n: "Priya Raman",
    r: "CMO, Nova Finance",
  },
  {
    q: "The creative is gorgeous, but it's the measurement rigour behind it that changed our economics.",
    n: "Daniel Okafor",
    r: "VP Growth, Halo Health",
  },
  {
    q: "Feels less like an agency and more like the best team we've ever hired.",
    n: "Mara Lindqvist",
    r: "Founder, Lumen Labs",
  },
];

export function Testimonials() {
  return (
    <section id="our-customers" className="relative mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-36">
      <Reveal className="max-w-2xl">
        <SectionLabel>Our customers</SectionLabel>
        <h2 className="mt-6 font-display text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
          Partners who
          <span className="font-serif italic"> stay in orbit</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {quotes.map((t, i) => (
          <Reveal key={t.n} delay={i * 0.08}>
            <figure className="glass group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40">
              <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-primary/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <blockquote className="text-[15px] leading-relaxed text-foreground/90">
                “{t.q}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/10 text-xs text-primary">
                  {t.n.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm">{t.n}</span>
                  <span className="block truncate text-xs text-muted-foreground">{t.r}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
