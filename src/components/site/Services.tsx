import { ArrowUpRight, Music, Youtube, Instagram } from "lucide-react";

const items = [
  {
    icon: Music,
    title: "TikTok Influencer Marketing",
    body: "We connect your brand with the TikTok creators your audience already trusts — driving real purchasing decisions at scale.",
  },
  {
    icon: Youtube,
    title: "YouTube Influencer Marketing",
    body: "YouTube builds brand affinity that short-form can't match. We place your brand with creators who turn engaged viewers into customers.",
  },
  {
    icon: Instagram,
    title: "Instagram Influencer Marketing",
    body: "Instagram is the gold standard for visual storytelling. We match you with creators to drive results across feed, Reels, and Stories.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div >
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              We handle every stage of your influencer campaigns — from planning to performance.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We handle every part of your influencer marketing strategy — from finding the right creators and producing content to managing partnerships, paid campaigns, and performance tracking.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-coral px-7 py-3.5 font-semibold text-coral-foreground transition-transform hover:scale-[1.03]"
            >
              Book a Call
            </a>
          </div>

          {/* Image stuff. */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-grad-hero opacity-70 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=70"
                alt="Influencer creating content"
                width={800}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>


        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative flex flex-col rounded-3xl border border-border bg-card p-8 transition-colors hover:border-violet/60"
            >
              <Icon className="h-10 w-10 text-coral" strokeWidth={1.75} />
              <h3 className="mt-8 font-display text-2xl font-semibold">{title}</h3>
              <p className="mt-4 flex-1 text-muted-foreground">{body}</p>
              <a
                href="#contact"
                className="mt-8 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors group-hover:bg-coral group-hover:text-coral-foreground"
                aria-label={`Learn more about ${title}`}
              >
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
