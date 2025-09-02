import SectorHero from '@/components/marketing/SectorHero';
import PricingSection from '@/components/marketing/PricingSection';

export default function Page() {
  return (
    <>
      <SectorHero
        brandName="CareConnect AI"
        eyebrow="Built for senior living & rehab"
        title="Grow census. Simplify referrals."
        subtitle="The only AI assistant built for senior living and rehab facilities."
        bullets={[ "Weekly census growth and outreach plans, ready to execute.", "Personalized letters and email campaigns for referral sources.", "Family communication digests that keep everyone aligned." ]}
        ctaText="Start for $9.99"
        accentClass="from-rose-500/10 to-rose-200/40"
        buttonClass="bg-rose-600"
        outlineClass="border-rose-600 text-rose-700"
      />
      <PricingSection />
    </>
  );
}
