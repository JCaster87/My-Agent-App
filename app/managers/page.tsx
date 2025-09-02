import SectorHero from '@/components/marketing/SectorHero';
import PricingSection from '@/components/marketing/PricingSection';
import TemplateGallery from '@/components/marketing/TemplateGallery';

const templates = [
    { key: 'pulse', name: 'Weekly Team Pulse', blurb: 'Auto-summary of wins, risks, blockers.', sampleTitle: 'Risks', sampleBody: 'Hiring delay may slip Q4 milestone by ~2 weeks.'},
    { key: 'oneonone', name: '1:1 Prep Assistant', blurb: 'Talking points & coaching prompts.', sampleTitle: 'Prompts', sampleList: ['What felt hardest this week?', 'Where do you want more clarity?', 'One thing I can unblock?']},
    { key: 'qreport', name: 'Quarterly Report', blurb: 'Exec summary + highlights + next quarter.', sampleTitle: 'Outline', sampleBody: 'OKR progress, Highlights, Learnings, Risks, Next quarter focus.'}
  ];

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
      />
      <TemplateGallery templates=[('Prospect List', 'CSV with 50 leads matching your ICP.', 'Name, Role, Email\\nJack Lee, CTO, jack@startup.com'), ('Cold Email Sequence', '3-touch sequence with personalization hooks.', 'Subject: Quick idea for {{Company}}'), ('Call Script', 'Structured talk track with objection handling.', 'Intro → Discovery → Value → Close')] />
      <PricingSection />
    </>
  );
}
