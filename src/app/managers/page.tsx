import SectorHero from '@/components/marketing/SectorHero';
import TemplateGallery from '@/components/marketing/TemplateGallery';
import PricingSection from '@/components/marketing/PricingSection';

export default function Page() {
  return (
    <>
      <SectorHero
        brandName="ExecuBot"
        eyebrow="Built for managers"
        title="A chief of staff in your pocket."
        subtitle="Let AI handle the prep, summaries, and follow-ups, so you can lead with clarity."
        bullets={[ "Weekly team pulse reports and meeting recaps auto-generated.", "1:1 coaching prompts and training plans for your staff.", "Status dashboards that update without manual chasing." ]}
        ctaText="Start for $9.99"
        accentClass="from-sky-500/10 to-sky-200/40"
        buttonClass="bg-sky-600"
        outlineClass="border-sky-600 text-sky-700"
        showPlanButtons
        sector="managers"
      />
      <TemplateGallery templates=[{"{ key: 'sample', name: 'Example', blurb: 'Replace with gallery zip files.', sampleTitle: 'Preview', sampleBody: '...' }"}] />
      <PricingSection sector="managers" />
    </>
  );
}
