import { Link } from "@tanstack/react-router";
import { Hash } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
];

export function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-center gap-2">
          <Hash className="h-7 w-7 text-violet" strokeWidth={3} />
          <div className="leading-none">
            <div className="font-display text-xl font-bold tracking-tight">Viral Booom</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">By Outtpace</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-foreground/85 transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-coral px-6 py-3 text-sm font-semibold text-coral-foreground transition-transform hover:scale-[1.03]"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}
