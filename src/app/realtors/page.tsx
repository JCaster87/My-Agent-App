import SectorHero from '@/components/marketing/SectorHero';

export default function Page() {
  return (
    <SectorHero
      brandName="OpenHouse Agent"
      eyebrow="Built for OpenHouse Agent"
      title="Your always-on real estate assistant."
      subtitle="Prospect smarter, follow up automatically, and close more deals without burning out."
      bullets={[ \"Curated lists of local homeowners and referral partners.\", \"Ready-to-send follow-up emails and texts.\", \"Market snapshot reports for your clients — done in minutes.\" ]}
      ctaText="Get more leads with OpenHouse Agent."
      accentClass="from-emerald-500/10 to-emerald-200/40"
    />
  );
}
