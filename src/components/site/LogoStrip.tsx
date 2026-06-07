const logos = ["Olipop", "Blueland", "Caraway", "MUD/WTR", "Bokksu Market", "Hydrant"];

export function LogoStrip() {
  return (
    <section className="border-y border-border/60 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">Who we've worked with</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
          {logos.map((l) => (
            <span key={l} className="font-display text-2xl font-semibold tracking-tight text-foreground/90">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
