import { Hash } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-grad-hero opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <Hash className="h-7 w-7 text-violet" strokeWidth={3} />
              <div className="font-display text-xl font-bold">Viral Booom</div>
            </div>
            <p className="mt-6 max-w-sm text-muted-foreground">
              The influencer marketing agency built for brands who demand results.
            </p>
            <a
              href="#"
              className="mt-8 inline-block rounded-full bg-coral px-7 py-3.5 font-semibold text-coral-foreground transition-transform hover:scale-[1.03]"
            >
              Start your campaign
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <div className="mb-4 font-semibold">Company</div>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground">About</a></li>
                <li><a href="#services" className="hover:text-foreground">Services</a></li>
                <li><a href="#results" className="hover:text-foreground">Results</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-4 font-semibold">Platforms</div>
              <ul className="space-y-3 text-muted-foreground">
                <li>TikTok</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Viral Booom. All rights reserved.</div>
          <div>By Outtpace</div>
        </div>
      </div>
    </footer>
  );
}
