import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { LogoStrip } from "@/components/site/LogoStrip";
import { Services } from "@/components/site/Services";
import { Testimonial } from "@/components/site/Testimonial";
import { CaseStudy } from "@/components/site/CaseStudy";
import { Match } from "@/components/site/Match";
import { FeaturedIn } from "@/components/site/FeaturedIn";
import { Founder } from "@/components/site/Founder";
import { Faq } from "@/components/site/Faq";
import { SocialStrip } from "@/components/site/SocialStrip";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Viral Booom — Influencer Marketing Agency" },
      { name: "description", content: "Accelerate your influencer marketing machine. Full-service influencer campaigns on TikTok, Instagram, and YouTube." },
      { property: "og:title", content: "Viral Booom — Influencer Marketing Agency" },
      { property: "og:description", content: "Making creator partnerships fast, transparent, and profitable — worldwide." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <LogoStrip />
        <Services />
        <Testimonial />
        <CaseStudy />
        <Match />
        <FeaturedIn />
        <Founder />
        <Faq />
        <SocialStrip />
      </main>
      <Footer />
    </div>
  );
}
