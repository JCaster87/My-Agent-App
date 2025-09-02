import SectorHero from '@/components/marketing/SectorHero';

export default function Page() {
  return (
    <SectorHero
      brandName="ExecuBot"
      eyebrow="Built for ExecuBot"
      title="A chief of staff in your pocket."
      subtitle="Let AI handle the prep, summaries, and follow-ups, so you can lead with clarity."
      bullets={[ \"Weekly team pulse reports and meeting recaps auto-generated.\", \"1:1 coaching prompts and training plans for your staff.\", \"Status dashboards that update without manual chasing.\" ]}
      ctaText="Upgrade your management game now."
      accentClass="from-sky-500/10 to-sky-200/40"
    />
  );
}
