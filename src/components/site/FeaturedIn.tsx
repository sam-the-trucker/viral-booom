const outlets = ["Forbes", "TechCrunch", "Adweek", "Business Insider", "Fast Company", "The Verge"];

export function FeaturedIn() {
  return (
    <section className="relative border-y border-border/60 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-coral">To be featured in</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {outlets.map((o) => (
            <span
              key={o}
              className="font-display text-2xl font-semibold tracking-tight text-foreground/80 transition-colors hover:text-foreground md:text-3xl"
            >
              {o}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
