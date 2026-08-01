const items = [
  "Brand Strategy",
  "Performance Media",
  "SEO & Content",
  "Lifecycle CRM",
  "Creative Studio",
  "Web Experience",
  "Growth Analytics",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border/60 py-6">
      <div className="marquee-track flex w-max gap-14 whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex gap-14">
            {items.map((it) => (
              <span
                key={it}
                className="flex items-center gap-14 text-sm uppercase tracking-[0.2em] text-muted-foreground"
              >
                {it}
                <span className="h-1 w-1 rounded-full bg-primary/70" />
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
