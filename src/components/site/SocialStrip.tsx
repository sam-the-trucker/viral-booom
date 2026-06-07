import { Instagram, Youtube, Twitter, Linkedin, Facebook, Music2 } from "lucide-react";

const socials = [
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Music2, label: "TikTok", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Facebook, label: "Facebook", href: "#" },
];

export function SocialStrip() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-grad-hero opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Follow the conversation</h2>
        <p className="mt-3 text-muted-foreground">Catch us across the platforms we help brands win on.</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {socials.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="group relative flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card/60 backdrop-blur transition-all hover:-translate-y-1 hover:border-coral hover:bg-coral hover:text-coral-foreground"
            >
              <Icon className="h-7 w-7" strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
