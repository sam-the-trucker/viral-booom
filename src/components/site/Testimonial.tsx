import avatar from "@/assets/testimonial-avatar.jpg";

const brandLogos = ["Olipop", "Blueland", "Caraway", "MUD/WTR", "Bokksu Market", "Hydrant", "XOXO", "Magic Spoon"];

export function Testimonial() {
  return (
    <section id="results" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-grad-hero opacity-80" />
      <div className="absolute left-1/2 top-0 -z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-violet/30 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-violet/30 bg-card/70 p-10 backdrop-blur-md md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-coral/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-violet/40 blur-3xl" />
          <div className="relative">
            <div className="mb-8 font-display text-3xl font-bold tracking-tight">XOXO Soda</div>
            <blockquote className="font-display text-2xl leading-relaxed md:text-3xl">
              "We've worked with a few influencer agencies before, but Viral Booom stood out because of how easy they made the entire process. From finding the right creators to managing campaigns and communication, everything felt organized and transparent. The team moved fast, stayed proactive, and helped us get better results than we expected."
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <img src={avatar} alt="Sarah Minami" width={56} height={56} loading="lazy" className="h-14 w-14 rounded-full object-cover" />
              <div>
                <div className="font-semibold">Rory Paterson</div>
                <div className="text-sm text-muted-foreground">XOXO Soda</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-tight md:text-5xl">
            The influencer marketing company chosen by the brands you trust.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Our clients include the best of the best — firms of all sizes and companies from every vertical.
            What do they have in common? They demand an influencer marketing agency that delivers results with
            business intelligence, not just flashy metrics.
          </p>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {brandLogos.map((b) => (
              <div
                key={b}
                className="flex h-24 items-center justify-center rounded-2xl border border-border bg-card/60 px-4 text-center font-display text-lg font-semibold text-foreground/90 transition-colors hover:border-violet/50 hover:text-coral"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
