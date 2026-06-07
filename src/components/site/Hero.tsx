import heroImg from "@/assets/hero-creator.jpg";
import { Music2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-grad-hero pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-coral">
            Influencer Marketing Agency
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Scale Influencer Marketing That Actually Drives Revenue
          </h1>
          <p className="mt-8 max-w-md text-lg text-muted-foreground">
            Making creator partnerships faster, more transparent, and more profitable — globally.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-block rounded-full bg-coral px-8 py-4 font-semibold text-coral-foreground transition-transform hover:scale-[1.03]"
          >
            Find Influencers
          </a>
        </div>
        <div className="relative">
          <div className="dot-grid absolute -left-6 top-0 hidden h-full w-12 lg:block" />
          <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={heroImg}
              alt="Creator portrait"
              width={800}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-background/40 px-4 py-3 backdrop-blur-md">
              <Music2 className="h-5 w-5 text-foreground" />
              <div className="leading-tight">
                <div className="text-sm font-semibold">Maria Saris</div>
                <div className="text-xs text-muted-foreground">4 million followers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
