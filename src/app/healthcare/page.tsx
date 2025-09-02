import SectorHero from '@/components/marketing/SectorHero';
import PricingSection from '@/components/marketing/PricingSection';
import TemplateGallery from '@/components/marketing/TemplateGallery';

const templates = [
    { key: 'census', name: 'Census Growth Plan', blurb: 'Outreach calendar + call scripts.', sampleTitle: 'Week 1', sampleBody: 'Mon: Hospitalist calls\nWed: Discharge planner emails\nFri: Family follow-ups'},
    { key: 'physician', name: 'Physician Outreach Letter', blurb: 'Personalized intro + services + CTA.', sampleTitle: 'Letter', sampleBody: 'Dear Dr. Smith — We support safe, fast transitions with...'},
    { key: 'family', name: 'Family Update Digest', blurb: 'Weekly summary for families.', sampleTitle: 'Sections', sampleList: ['Care updates', 'Activities', 'Upcoming appointments']}
  ];

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
      <TemplateGallery templates=[('Prospect List', 'CSV with 50 leads matching your ICP.', 'Name, Role, Email\\nJack Lee, CTO, jack@startup.com'), ('Cold Email Sequence', '3-touch sequence with personalization hooks.', 'Subject: Quick idea for {{Company}}'), ('Call Script', 'Structured talk track with objection handling.', 'Intro → Discovery → Value → Close')] />
      <PricingSection />
    </>
  );
}
