import nix_and_kix from "@/assets/nix_and_kix.webp";
import momo_kobuncha from "@/assets/momo_kombucha.webp";
import xoxo from "@/assets/xoxo_soda.webp";
import typology_france from "@/assets/typology_france.webp";

const brands = [
  { name: "Nix & Kis", img: nix_and_kix },
  { name: "MOMO Kombucha", img: momo_kobuncha},
  { name: "Typology", img: typology_france },
  { name: "XOXO", img: xoxo },
];

const creators = [
  { name: "@ava.lane", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=70" },
  { name: "@marcusb", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=70" },
  { name: "@sofiq", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=70" },
  { name: "@jdrew", img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=400&q=70" },
];

function Tile({ name, img, accent }: { name: string; img: string; accent: "violet" | "coral" }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border">
      <img src={img} alt={name} loading="lazy" className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-52" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
      <div className={`absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-semibold ${accent === "coral" ? "bg-coral text-coral-foreground" : "bg-violet text-foreground"}`}>
        {name}
      </div>
    </div>
  );
}

export function Match() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-grad-hero opacity-60" />
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-coral/20 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
          A match made in influencer marketing heaven.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          We're basically a dating app, but for brands and social media creators.
        </p>

        <div className="mt-16 grid items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-coral">Brands</div>
            <div className="grid grid-cols-2 gap-4">
              {brands.map((b) => (
                <Tile key={b.name} name={b.name} img={b.img} accent="coral" />
              ))}
            </div>
          </div>
          <div className="font-display text-5xl text-violet md:text-6xl">♥</div>
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet">Creators</div>
            <div className="grid grid-cols-2 gap-4">
              {creators.map((c) => (
                <Tile key={c.name} name={c.name} img={c.img} accent="violet" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
