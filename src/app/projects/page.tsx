import PageFooter from '@/components/page-footer';
import Projects from '@/components/projects';
import type { Metadata } from 'next';
import { pageSocialMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore Ayoub Soudani’s software projects: Guild Chat, DailyCode, Webserv, Inception, Minishell and more.',
  alternates: { canonical: '/projects' },
  ...pageSocialMetadata('Projects by Ayoub Soudani', 'Backend systems, infrastructure and tools built by Ayoub Soudani.', '/projects'),
};

export default function ProjectsPage() {
  return <div className="site-shell inner-page relative z-10"><header className="journey-header"><p className="eyebrow">Selected + ongoing work</p><h1>Projects.</h1><p className="page-intro">The best way I learn is to build. Here&apos;s a selection of applications, developer tooling, and low-level engineering projects I&apos;ve worked on.</p></header><Projects /><PageFooter /></div>;
}
