import SectorHero from '@/components/marketing/SectorHero';
import PricingSection from '@/components/marketing/PricingSection';
import TemplateGallery from '@/components/marketing/TemplateGallery';

const templates = [
    { key: 'drip', name: 'Home Seller Drip', blurb: '3-email follow-up sequence.', imageSrc: '/screens/realtors_1.png', sampleTitle: 'Email #1', sampleBody: 'Subject: Your home’s 7-day market snapshot\nHi {firstName}, here’s what changed this week...'},
    { key: 'partners', name: 'Referral Partner Builder', blurb: '20 local partners with contact info.', imageSrc: '/screens/realtors_2.png', sampleTitle: 'List preview', sampleList: ['Staging pro — jane@...', 'Mortgage broker — tom@...', 'Photographer — snap@...']},
    { key: 'market', name: 'Market Snapshot', blurb: 'Neighborhood stats in a sharable summary.', imageSrc: '/screens/realtors_3.png', sampleTitle: 'Stats', sampleBody: 'Median list price: $412k\nAvg DOM: 21\nInventory: +8% MoM'}
  ];

export default function Page() {
  return (
    <>
      <SectorHero
        brandName="OpenHouse Agent"
        eyebrow="Built for realtors"
        title="Your always-on real estate assistant."
        subtitle="Prospect smarter, follow up automatically, and close more deals without burning out."
        bullets={[ "Curated lists of local homeowners and referral partners.", "Ready-to-send follow-up emails and texts.", "Market snapshot reports for your clients — done in minutes." ]}
        ctaText="Start for $9.99"
        accentClass="from-emerald-500/10 to-emerald-200/40"
        buttonClass="bg-emerald-600"
        outlineClass="border-emerald-600 text-emerald-700"
      />
      <TemplateGallery templates=[('Prospect List', 'CSV with 50 leads matching your ICP.', 'Name, Role, Email\\nJack Lee, CTO, jack@startup.com'), ('Cold Email Sequence', '3-touch sequence with personalization hooks.', 'Subject: Quick idea for {{Company}}'), ('Call Script', 'Structured talk track with objection handling.', 'Intro → Discovery → Value → Close')] />
      <PricingSection sector="realtors" />
    </>
  );
}
