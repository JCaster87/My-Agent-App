import SectorHero from '@/components/marketing/SectorHero';
import PricingSection from '@/components/marketing/PricingSection';
import TemplateGallery from '@/components/marketing/TemplateGallery';

const templates = [{ key: 'sample', name: 'Example', blurb: 'Replace with gallery zip files.', sampleTitle: 'Preview', sampleBody: '...' }];

export default function Page() {
  return (
    <>
      <SectorHero
        brandName="Marketers App"
        eyebrow="Built for marketers"
        title="A tailored solution for marketers."
        subtitle="Automate your work with AI templates."
        bullets={["Time savings", "Lead generation", "Reports"]}
        ctaText="Start for $9.99"
        accentClass="from-indigo-500/10 to-indigo-200/40"
        buttonClass="bg-indigo-600"
        outlineClass="border-indigo-600 text-indigo-700"
        showPlanButtons
        sector="marketers"
      />
      <TemplateGallery templates={templates} />
      <PricingSection sector="marketers" />
    </>
  );
}
