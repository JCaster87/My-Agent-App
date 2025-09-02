import SectorHero from '@/components/marketing/SectorHero';

export default function Page() {
  return (
    <SectorHero
      brandName="ContentForge"
      eyebrow="Built for ContentForge"
      title="Never run out of content again."
      subtitle="Transform your ideas into daily posts, newsletters, and courses with one click."
      bullets={[ \"Social posts and newsletter drafts generated every morning.\", \"Course outlines and lesson scripts tailored to your niche.\", \"Consistent publishing without the burnout.\" ]}
      ctaText="Forge your next masterpiece today."
      accentClass="from-amber-500/10 to-amber-200/40"
    />
  );
}
