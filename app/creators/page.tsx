import SectorHero from '@/components/marketing/SectorHero';
import TemplateGallery from '@/components/marketing/TemplateGallery';
import PricingSection from '@/components/marketing/PricingSection';

export default function Page() {
  return (
    <>
      <SectorHero
        brandName="ContentForge"
        eyebrow="Built for creators & coaches"
        title="Never run out of content again."
        subtitle="Transform your ideas into daily posts, newsletters, and courses with one click."
        bullets={[ "Social posts and newsletter drafts generated every morning.", "Course outlines and lesson scripts tailored to your niche.", "Consistent publishing without the burnout." ]}
        ctaText="Start for $9.99"
        accentClass="from-amber-500/10 to-amber-200/40"
        buttonClass="bg-amber-600"
        outlineClass="border-amber-600 text-amber-700"
        showPlanButtons
        sector="creators"
      />
      <TemplateGallery templates=[{"{ key: 'sample', name: 'Example', blurb: 'Replace with gallery zip files.', sampleTitle: 'Preview', sampleBody: '...' }"}] />
      <PricingSection sector="creators" />
    </>
  );
}
