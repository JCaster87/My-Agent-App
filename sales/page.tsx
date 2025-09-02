import SectorHero from '@/components/marketing/SectorHero';

export default function Page() {
  return (
    <SectorHero
      brandName="PipelinePro AI"
      eyebrow="Built for PipelinePro AI"
      title="Fill your pipeline, daily."
      subtitle="Cold emails, lead lists, and call scripts — delivered fresh to your inbox."
      bullets={[ \"Prospecting lists curated for your exact target audience.\", \"Personalized cold email drafts with follow-up sequences.\", \"Call prep sheets so reps sound confident on every pitch.\" ]}
      ctaText="Book more calls with PipelinePro AI."
      accentClass="from-fuchsia-500/10 to-fuchsia-200/40"
    />
  );
}
