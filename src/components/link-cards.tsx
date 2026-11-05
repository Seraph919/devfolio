import { ArrowUpRight, Mail, Globe } from 'lucide-react';
import { LinkedinIcon } from './icons/linkedin';
import { GithubIcon } from './icons/github';

const links = [
  { href: 'https://github.com/Seraph919', title: 'GitHub', Icon: GithubIcon },
  { href: 'https://www.linkedin.com/in/ayoubsoudani', title: 'LinkedIn', Icon: LinkedinIcon },
  { href: 'mailto:asoudani.contact@gmail.com', title: 'Email', Icon: Mail },
];

export default function LinkCards() {
  return (
    <section id="contact" className="contact-section section-reveal" aria-labelledby="contact-heading">
      <div>
        <p className="eyebrow">Have something in mind?</p>
        <h2 id="contact-heading">Let&apos;s build something.</h2>
        <p className="contact-intro">Looking for a backend intern, working on a developer tool, or want to talk architecture? My inbox is open.</p>
        <a href="mailto:asoudani.contact@gmail.com" className="contact-email">Send me an email <ArrowUpRight size={20} aria-hidden="true" /></a>
        <p className="contact-address">asoudani.contact@gmail.com</p>
      </div>
      <div className="contact-links">
        {links.map(({ href, title, Icon }) => <a key={title} href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'} className="contact-link"><Icon className="h-5 w-5" /><span>{title}</span><ArrowUpRight className="ml-auto h-4 w-4" aria-hidden="true" /></a>)}
      </div>
    </section>
  );
}
