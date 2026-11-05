import PageFooter from '@/components/page-footer';
import { journey } from '@/lib/journey-data';
import { ArrowUpRight, BookOpen, Code2, GraduationCap, Rocket, Server, UsersRound } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { pageSocialMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'My Journey',
  description: 'From 1337 Coding School to backend engineering projects and community leadership. Get to know Ayoub Soudani.',
  alternates: { canonical: '/about' },
  ...pageSocialMetadata('About Ayoub Soudani', 'My engineering journey, education, projects and community work.', '/about'),
};

const symbols = {
  code: Code2,
  graduation: GraduationCap,
  community: UsersRound,
  server: Server,
  launch: Rocket,
  book: BookOpen,
};

export default function AboutPage() {
  return (
    <div className="site-shell inner-page relative z-10">
      <header className="journey-header">
        <p className="eyebrow">Behind the projects</p>
        <h1>My journey.</h1>
        <p className="page-intro">I&apos;m Ayoub, a backend-focused software developer from Morocco. I care about how things work under the hood: clean APIs, reliable deployments, and the systems that support real users.</p>
      </header>
      <section className="building-note section-reveal" aria-labelledby="building-heading">
        <div><p className="eyebrow">What drives me</p><h2 id="building-heading">Curious by default.<br />Practical by design.</h2></div>
        <div><p>I study at <strong>1337 Coding School (42 Network)</strong>, where hands-on engineering, peer collaboration, and learning through projects are part of everyday life. My work spans <strong>Java / Spring Boot backend development</strong>, systems programming, and <strong>Docker-based infrastructure</strong>. I&apos;m now focusing on backend engineering opportunities where I can keep growing and ship useful software.</p><Link href="/projects" className="action-text mt-4">See what I&apos;ve built <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
      </section>
      <section id="journey" className="journey-section" aria-labelledby="journey-heading">
        <div className="section-heading"><div><p className="eyebrow">The story so far · newest first</p><h2 id="journey-heading">Along the way.</h2></div><p>Projects, people, and the experiences that shaped how I work.</p></div>
        <ol className="journey-timeline">
          {journey.map((event, index) => {
            const Icon = symbols[event.symbol];
            return (
              <li key={event.title} className="journey-item section-reveal">
                <div className="journey-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
                <div className="journey-event">
                  <div className="journey-event-copy"><p className="eyebrow">{event.tag}</p><h3>{event.title}</h3><p>{event.detail}</p>{event.link && <a href={event.link.href} target="_blank" rel="noopener noreferrer" className="action-text journey-post-link">{event.link.text}<ArrowUpRight size={17} aria-hidden="true" /></a>}</div>
                  <div className="journey-art" aria-hidden="true"><div className="journey-art-grid" /><div className="journey-art-symbol"><Icon size={54} strokeWidth={1.3} /></div><div className="journey-art-footer"><span>{String(index + 1).padStart(2, '0')} / 05</span><span>{event.label}</span></div></div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
      <section className="journey-outro"><p>Always building. Always learning.</p><Link href="/#contact" className="action-primary">Let&apos;s connect <ArrowUpRight size={17} aria-hidden="true" /></Link></section>
      <PageFooter />
    </div>
  );
}
