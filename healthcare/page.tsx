import SectorHero from '@/components/marketing/SectorHero';

export default function Page() {
  return (
    <SectorHero
      brandName="CareConnect AI"
      eyebrow="Built for CareConnect AI"
      title="Grow census. Simplify referrals."
      subtitle="The only AI assistant built for senior living and rehab facilities."
      bullets={[ \"Weekly census growth and outreach plans, ready to execute.\", \"Personalized letters and email campaigns for referral sources.\", \"Family communication digests that keep everyone aligned.\" ]}
      ctaText="Boost your census with CareConnect AI."
      accentClass="from-rose-500/10 to-rose-200/40"
    />
  );
}
