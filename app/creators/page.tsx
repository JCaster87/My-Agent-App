import SectorHero from '@/components/marketing/SectorHero';
import PricingSection from '@/components/marketing/PricingSection';
import TemplateGallery from '@/components/marketing/TemplateGallery';

const templates = [
    { key: 'newsletter', name: 'Newsletter Draft', blurb: 'Issue outline + 2 sections fully written.', imageSrc: '/screens/creators_1.png', sampleTitle: 'Subject', sampleBody: '3 ways to grow without paid ads'},
    { key: 'course', name: 'Course Outline Builder', blurb: 'Syllabus + lesson objectives.', imageSrc: '/screens/creators_2.png', sampleTitle: 'Modules', sampleList: ['Mindset fundamentals', 'Audience research', 'Offer design']},
    { key: 'social', name: 'Daily Social Pack', blurb: '5 posts with hooks + CTAs.', imageSrc: '/screens/creators_3.png', sampleTitle: 'Hooks', sampleList: ['I built a $1k/mo system by...', 'Most people overcomplicate...', 'Steal my 10-minute template...']}
  ];

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
      />
      <TemplateGallery templates=[('Prospect List', 'CSV with 50 leads matching your ICP.', 'Name, Role, Email\\nJack Lee, CTO, jack@startup.com'), ('Cold Email Sequence', '3-touch sequence with personalization hooks.', 'Subject: Quick idea for {{Company}}'), ('Call Script', 'Structured talk track with objection handling.', 'Intro → Discovery → Value → Close')] />
      <PricingSection sector="creators" />
    </>
  );
}
