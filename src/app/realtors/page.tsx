import SectorHero from '@/components/marketing/SectorHero';
import PricingSection from '@/components/marketing/PricingSection';

export default function Page() {
  return (
    <>
      <SectorHero
        brandName="OpenHouse Agent"
        eyebrow="Built for realtors"
        title="Your always-on real estate assistant."
        subtitle="Prospect smarter, follow up automatically, and close more deals without burning out."
        bullets={[ "Curated lists of local homeowners and referral partners.", "Ready-to-send follow-up emails and texts.", "Market snapshot reports for your clients — done in minutes." ]}
        ctaText="Start for $9.99"
        accentClass="from-emerald-500/10 to-emerald-200/40"
        buttonClass="bg-emerald-600"
        outlineClass="border-emerald-600 text-emerald-700"
      />
      <PricingSection />
    </>
  );
}
