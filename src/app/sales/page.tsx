import SectorHero from '@/components/marketing/SectorHero';
import PricingSection from '@/components/marketing/PricingSection';

export default function Page() {
  return (
    <>
      <SectorHero
        brandName="PipelinePro AI"
        eyebrow="Built for sales teams"
        title="Fill your pipeline, daily."
        subtitle="Cold emails, lead lists, and call scripts — delivered fresh to your inbox."
        bullets={[ "Prospecting lists curated for your exact target audience.", "Personalized cold email drafts with follow-up sequences.", "Call prep sheets so reps sound confident on every pitch." ]}
        ctaText="Start for $9.99"
        accentClass="from-fuchsia-500/10 to-fuchsia-200/40"
        buttonClass="bg-fuchsia-600"
        outlineClass="border-fuchsia-600 text-fuchsia-700"
      />
      <PricingSection />
    </>
  );
}
