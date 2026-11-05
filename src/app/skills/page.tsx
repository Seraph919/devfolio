import PageFooter from '@/components/page-footer';
import SkillsClientPage from '@/components/skills-client-page';
import type { Metadata } from 'next';
import { pageSocialMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Skills & Technologies',
  description: 'Languages, frameworks, databases and DevOps tools Ayoub Soudani uses in backend engineering and infrastructure projects.',
  alternates: { canonical: '/skills' },
  ...pageSocialMetadata('Skills & Technologies · Ayoub Soudani', 'Java, Spring Boot, Docker, Linux, PostgreSQL and the rest of my toolkit.', '/skills'),
};

export default function SkillsPage() {
  return <div className="site-shell inner-page relative z-10"><header className="journey-header"><p className="eyebrow">What I use to build</p><h1>My toolkit.</h1><p className="page-intro">A practical, evolving mix of low-level languages, backend frameworks, data systems, and infrastructure tools.</p></header><SkillsClientPage /><PageFooter /></div>;
}
