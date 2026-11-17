import { projects } from '@/lib/projects-data';
import { ArrowRight, ArrowUpRight, Globe, Layers2 } from 'lucide-react';
import { GithubIcon } from '@/components/icons/github';
import Link from 'next/link';

export default function Projects({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const shown = featuredOnly ? projects.filter((project) => project.isFeatured) : projects;
  return (
    <section className="projects-section">
      {featuredOnly && (
        <div className="section-heading">
          <div><p className="eyebrow">Selected work / 2024—2026</p><h2>Built to work.</h2></div>
          <p>Real systems, practical problems, and a lot of learning by shipping.</p>
        </div>
      )}
      <div className={`project-grid ${featuredOnly ? 'project-grid-featured' : ''}`}>
        {shown.map((project, index) => (
          <article key={project.slug} className={`project-card section-reveal ${project.slug === 'guild-chat' ? 'project-primary' : ''}`}>
            <div className="project-card-top"><span className="project-index">{String(index + 1).padStart(2, '0')}</span><span className="project-category">{project.category}</span></div>
            <div className="project-mark" aria-hidden="true"><Layers2 size={20} /></div>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags" aria-label="Technologies">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="project-card-footer">
              <span className="project-status"><span aria-hidden="true" className="project-status-dot" />{project.status ?? 'Project'}</span>
              <div className="project-links">
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code`}><GithubIcon width={15} height={15} aria-hidden="true" /> Code <ArrowUpRight size={13} /></a>}
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} website`}><Globe size={15} /> Live <ArrowUpRight size={13} /></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
      {featuredOnly && <div className="mt-7 flex justify-end"><Link href="/projects" className="action-text">View all projects <ArrowRight size={17} aria-hidden="true" /></Link></div>}
    </section>
  );
}
