import { Braces, CloudCog, Database, Layers3, Monitor } from 'lucide-react';
import Image from 'next/image';
import type { ReactNode } from 'react';

export interface Skill {
  name: string;
  icon: ReactNode;
  projects: string[];
}

export interface SkillCategory {
  title: string;
  icon: ReactNode;
  subtitle: string;
  skills: Skill[];
}

function skill(name: string, slug: string, projects: string[]): Skill {
  return {
    name,
    projects,
    icon: (
      <Image
        src={`https://cdn.simpleicons.org/${slug}/FFC300`}
        alt=""
        width={40}
        height={40}
        unoptimized
        className="h-full w-full object-contain"
      />
    ),
  };
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Languages',
    icon: <Braces size={32} />,
    subtitle: 'From low-level foundations to application-level engineering.',
    skills: [
      skill('Java', 'openjdk', ['Store Studio', 'DailyCode', 'Backend services']),
      skill('C', 'c', ['Minishell', '42 core']),
      skill('C++', 'cplusplus', ['Webserv', '42 modules']),
      skill('Python', 'python', ['Automation', 'FastAPI']),
      skill('TypeScript', 'typescript', ['Store Studio', 'Web development']),
      skill('Bash', 'gnubash', ['Infrastructure', 'Automation']),
    ],
  },
  {
    title: 'Backend & APIs',
    icon: <Layers3 size={32} />,
    subtitle: 'Service boundaries, API design, persistence and messaging.',
    skills: [
      skill('Spring Boot', 'springboot', ['Store Studio', 'DailyCode']),
      skill('FastAPI', 'fastapi', ['Python services']),
      skill('Node.js', 'nodedotjs', ['Guild Chat']),
      skill('Hibernate', 'hibernate', ['Java persistence']),
      skill('RabbitMQ', 'rabbitmq', ['Guild Chat notifications']),
      skill('gRPC', 'grpc', ['Guild Chat services']),
    ],
  },
  {
    title: 'Infrastructure & DevOps',
    icon: <CloudCog size={32} />,
    subtitle: 'Deploying, protecting and observing running services.',
    skills: [
      skill('Docker', 'docker', ['Guild Chat', 'DailyCode', 'Inception']),
      skill('NGINX', 'nginx', ['Gateway', 'Inception']),
      skill('Linux', 'linux', ['Daily development', 'Systems projects']),
      skill('GitHub Actions', 'githubactions', ['CI/CD pipelines']),
      skill('Prometheus', 'prometheus', ['Guild Chat monitoring']),
      skill('Grafana', 'grafana', ['Guild Chat dashboards']),
      skill('Cloudflare', 'cloudflare', ['R2 object storage']),
      skill('Git', 'git', ['Every project']),
    ],
  },
  {
    title: 'Databases & storage',
    icon: <Database size={32} />,
    subtitle: 'Persistent and ephemeral data for real services.',
    skills: [
      skill('PostgreSQL', 'postgresql', ['Guild Chat', 'DailyCode']),
      skill('MongoDB', 'mongodb', ['Guild Chat messages']),
      skill('Redis', 'redis', ['Guild Chat presence']),
      skill('S3 / R2', 'cloudflare', ['Guild Chat media']),
    ],
  },
  {
    title: 'Frontend & exploring',
    icon: <Monitor size={32} />,
    subtitle: 'Enough frontend to deliver and understand the complete product; currently learning Angular.',
    skills: [
      skill('Tailwind', 'tailwindCSS', ['Guild Chat']),
      skill('Angular', 'angular', ['Currently learning']),
      skill('HTML', 'html5', ['Web interfaces']),
      skill('CSS', 'css', ['Web interfaces']),
    ],
  },
];
