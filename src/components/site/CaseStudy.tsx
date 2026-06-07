import caseImg from "@/assets/case-study.webp";

export function CaseStudy() {
  return (
    <section id="how" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl">
            <img src={caseImg} alt="XOXO campaign" width={1024} height={768} loading="lazy" className="w-3/4 object-cover mx-auto rounded-3xl" />
          </div>
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-coral">Case study</p>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              How XOXO Soda generated 305M views, lowered CPM by 37%, and increased online sales
            </h2>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-full border border-border px-7 py-3.5 font-semibold transition-colors hover:bg-coral hover:text-coral-foreground hover:border-coral"
            >
              Read case study
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
