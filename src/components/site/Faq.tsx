import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Which social media platforms does Viral Booom specialize in?",
    a: "Viral Booom runs influencer campaigns across every major social platform: TikTok, Instagram, YouTube, X, Facebook, and beyond. While we have deep roots in TikTok and a proven track record driving results there, we don't believe in a one-size-fits-all approach. Every engagement starts with a thorough analysis of your brand, audience, and goals, so we can recommend the platform — or mix of platforms — that will actually move the needle for your business.",
  },
  {
    q: "What industries do you run influencer marketing for?",
    a: "We've run campaigns for businesses in both B2B and B2C spaces. Example industries include clothing & apparel, retail, crypto, gaming, 3D printing, consumer electronics, skincare, beauty, e-commerce, food & restaurants, fintech, and much more.",
  },
  {
    q: "How does Viral Booom select influencers for campaigns?",
    a: "We look for true content creators, not merely people with large followings. Our full-time team focuses on three Rs: resonance, relevance, and reach — making sure each creator already has the trust of your target community, makes content tied to your niche, and consistently drives real engagement.",
  },
  {
    q: "What type of brands has Viral Booom worked with?",
    a: "We worked with growing brands across industries — from startups and ecommerce businesses to consumer brands looking to scale through creator partnerships. Our focus is helping brands build campaigns that drive awareness, engagement, and growth."
  },
  {
    q: "How does Viral Booom measure campaign success?",
    a: "We measure success based on your goals. Whether you want massive brand awareness at a target CPM or direct revenue at a target CPA, we'll set KPIs that make sense for you and report against them.",
  },
  {
    q: "Does Viral Booom only work with large brands, or smaller brands too?",
    a: "We specialize in medium to enterprise-sized brands, but work with any brand that meets our minimum budget. No matter your size, we'll build a strategy that fits your brand and your goals.",
  },
  {
    q: "Can Viral Booom help me run paid ads?",
    a: "Yes. Depending on your goals, we often recommend ads as part of our overall package. We amplify the best-performing UGC with ads to dial in targeting and turn awareness into conversions.",
  },
  {
    q: "What services does Viral Booom offer?",
    a: "We're a full-service influencer marketing agency: creative strategy, creator selection, outreach and negotiations, content briefing, posting, performance tracking, and optimization — across TikTok, Facebook, Instagram, and YouTube.",
  },
];

export function Faq() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-12 font-display text-4xl font-bold md:text-5xl">Commonly asked questions</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6"
            >
              <AccordionTrigger className="py-6 text-left font-display text-lg font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
