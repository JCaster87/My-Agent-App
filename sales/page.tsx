import SectorHero from '@/components/marketing/SectorHero';
import PricingSection from '@/components/marketing/PricingSection';
import TemplateGallery from '@/components/marketing/TemplateGallery';

const templates = [
    { key: 'prospect', name: 'Prospecting List', blurb: '50 accounts with ICP notes.', sampleTitle: 'Columns', sampleList: ['Company', 'Contact', 'Title', 'Email', 'ICP reason']},
    { key: 'emails', name: 'Cold Email Sequence', blurb: '3-touch sequence with personalization slots.', sampleTitle: 'Email 1', sampleBody: 'Subject: Quick idea for {{company}}\nSaw you just...'},
    { key: 'call', name: 'Call Script Prep', blurb: 'Objection handlers + discovery questions.', sampleTitle: 'Questions', sampleList: ['What triggers a project?', 'How do you evaluate tools?', 'Who signs off?']}
  ];

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
      <TemplateGallery templates=[('Prospect List', 'CSV with 50 leads matching your ICP.', 'Name, Role, Email\\nJack Lee, CTO, jack@startup.com'), ('Cold Email Sequence', '3-touch sequence with personalization hooks.', 'Subject: Quick idea for {{Company}}'), ('Call Script', 'Structured talk track with objection handling.', 'Intro → Discovery → Value → Close')] />
      <PricingSection />
    </>
  );
}
