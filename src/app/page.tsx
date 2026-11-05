import ProfileSection from '@/components/profile-section';
import LinkCards from '@/components/link-cards';
import Link from 'next/link';
import { ArrowUpRight, Code2, Cpu, UsersRound } from 'lucide-react';
import PageFooter from '@/components/page-footer';
import Skills from '@/components/skills';
import Projects from '@/components/projects';

export default function Home() {
  return (
    <div className="site-shell relative z-10">
      <ProfileSection />
      <div id="work" className="home-section section-reveal"><Projects featuredOnly /></div>
      <section className="journey-preview section-reveal" aria-labelledby="journey-preview-heading">
        <div className="journey-preview-copy">
          <p className="eyebrow">The path behind the projects</p>
          <h2 id="journey-preview-heading">More than code.</h2>
          <p>From peer learning at 1337 to leading events and delivering production-style systems. Here&apos;s how it connects.</p>
          <Link href="/about" className="action-text">Explore my journey <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="journey-preview-icons" aria-hidden="true"><span><Code2 size={28} /></span><span><UsersRound size={28} /></span><span><Cpu size={28} /></span></div>
      </section>
      <div className="home-section section-reveal"><Skills /></div>
      <section className="setup-section section-reveal" aria-labelledby="setup-heading">
        <div className="setup-icons" aria-hidden="true"><Code2 size={40} /><span>+</span><Cpu size={40} /></div>
        <div><p className="eyebrow">Linux · My daily environment</p><h2 id="setup-heading">A workflow built to ship.</h2><p>Linux, Git, containers and clean developer tooling. Practical workflows from local development to deployment.</p></div>
        <a href="https://github.com/Seraph919" target="_blank" rel="noopener noreferrer" className="action-text">Explore my GitHub <ArrowUpRight size={17} aria-hidden="true" /></a>
      </section>
      <LinkCards />
      <PageFooter />
    </div>
  );
}
