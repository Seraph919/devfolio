import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, Check, GitBranch, Server } from 'lucide-react';

function SystemShowcase() {
  return (
    <div className="hero-portrait hero-enter" style={{ animationDelay: '180ms' }}>
      <div className="portrait-orbit" aria-hidden="true" />
      <div className="portrait-frame">
        <div className="portrait-topline">
          <span>Architecture sketch</span>
          <span>01 / AS</span>
        </div>
        <div className="workspace-visual" role="img" aria-label="Illustration of a deployed microservice system, with gateway, API, database, and monitoring services">
          <div className="workspace-dots"><i /><i /><i /><span>guild-chat / infrastructure</span></div>
          <div className="workspace-label">Deployments / service health</div>
          <div className="system-node system-node-main"><Server size={16} aria-hidden="true" /><span>NGINX / WAF</span><b>gateway</b></div>
          <div className="system-connector" aria-hidden="true"><span /><span /><span /></div>
          <div className="system-services">
            <div className="system-node"><GitBranch size={15} aria-hidden="true" /><span>services</span><b>healthy</b></div>
            <div className="system-node"><span className="node-symbol">DB</span><span>postgres</span><b>online</b></div>
            <div className="system-node"><span className="node-symbol">OBS</span><span>metrics</span><b>live</b></div>
          </div>
          <div className="workspace-bottom"><span><Check size={14} aria-hidden="true" /> Illustrative service topology</span><span>● 3/3</span></div>
        </div>
        <div className="portrait-caption">
          <span className="eyebrow">Behind every interface</span>
          <p>Systems that actually run.</p>
        </div>
      </div>
      <span className="workspace-float workspace-float-one" aria-hidden="true">{`{ API }`}</span>
      <span className="workspace-float workspace-float-two" aria-hidden="true">&lt;/&gt;</span>
    </div>
  );
}

export default function ProfileSection() {
  return (
    <section className="hero-grid" aria-labelledby="intro-heading">
      <div className="hero-copy">
        <p className="eyebrow hero-enter">Ayoub Soudani · Backend developer &amp; systems builder</p>
        <h1 id="intro-heading" className="hero-title hero-enter" style={{ animationDelay: '90ms' }}>
          Ayoub<br /><span>Soudani.</span>
        </h1>
        <p className="hero-tagline hero-enter" style={{ animationDelay: '140ms' }}>
          Backend engineering · Infrastructure · Open source
        </p>
        <p className="hero-lead hero-enter" style={{ animationDelay: '180ms' }}>
          I build the things behind the screen: <strong>APIs, distributed systems and reliable infrastructure.</strong> I&apos;m a developer at 1337 Coding School in Morocco, turning complex problems into working software.
        </p>
        <div className="hero-actions hero-enter" style={{ animationDelay: '270ms' }}>
          <Link href="/#work" className="action-primary">Explore my work <ArrowDownRight size={17} aria-hidden="true" /></Link>
          <Link href="/about" className="action-text">More about me <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="hero-current hero-enter" style={{ animationDelay: '360ms' }}>
          <span className="status-dot" aria-hidden="true" />
          <p><span>Open to <strong>backend engineering internships</strong></span><span className="block text-foreground/55">opportunities · Morocco &amp; worldwide</span></p>
        </div>
      </div>
      <SystemShowcase />
    </section>
  );
}
