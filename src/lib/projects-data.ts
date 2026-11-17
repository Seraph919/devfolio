/** Featured and supporting work. Only verified public destinations are linked. */
export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  status?: string;
  isFeatured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'guild-chat',
    title: 'Guild Chat',
    category: 'Distributed systems · Team project',
    description:
      'A real-time team collaboration platform built as a microservice system. I led the technical architecture and built the deployment stack: NGINX and ModSecurity gateway, Docker orchestration, CI/CD, monitoring, alerting, and backups.',
    stack: ['Microservices', 'Docker', 'NGINX', 'PostgreSQL', 'RabbitMQ'],
    githubUrl: 'https://github.com/Seraph919/guild-chat.tech',
    liveUrl: 'https://guild-chat.tech',
    status: 'Deployed',
    isFeatured: true,
  },
  {
    slug: 'store-studio',
    title: 'Store Studio',
    category: 'Full-stack · E-commerce platform',
    description:
      'An open-source, self-hosted e-commerce platform built with Java 21, Spring Boot 4, and React 19. Features JWT/RBAC security, Flyway migrations, Redis caching, Cloudflare R2 media storage, customizable storefront layouts, and seller dashboards.',
    stack: ['Java 21', 'Spring Boot 4', 'React 19', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/Seraph919/store-studio',
    liveUrl: 'https://storestudio.asoudani.dev',
    status: 'Live',
    isFeatured: true,
  },
  {
    slug: 'dailycode',
    title: 'DailyCode',
    category: 'Java backend · Automation',
    description:
      'A Discord bot that brings a fresh LeetCode challenge to your server. Built with Java and Spring Boot, using scheduled jobs, LeetCode data synchronization, PostgreSQL, and containerized deployment.',
    stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Docker', 'Discord API'],
    githubUrl: 'https://github.com/Seraph919/DailyCode',
    liveUrl: 'https://dailycode.asoudani.dev',
    status: 'Live',
    isFeatured: true,
  },
  {
    slug: 'webserv',
    title: 'Webserv',
    category: 'C++ · Networking',
    description:
      'An HTTP server implemented in C++ as part of the 42 curriculum. Worked with sockets, non-blocking I/O, request parsing, routing, and the details behind how web servers actually work.',
    stack: ['C++', 'HTTP/1.1', 'Sockets', 'Linux'],
    status: '42 project',
    isFeatured: true,
  },
  {
    slug: 'inception',
    title: 'Inception',
    category: 'Infrastructure · Containers',
    description:
      'A containerized multi-service infrastructure project. Set up Docker services, isolated networking, persistent volumes, and reverse-proxy configuration.',
    stack: ['Docker Compose', 'NGINX', 'Linux', 'Networking'],
    status: '42 project',
  },
  {
    slug: 'minishell',
    title: 'Minishell',
    category: 'C · Systems programming',
    description:
      'A Unix shell implementation with command parsing, pipelines, redirections, environment variables, built-ins, and process management.',
    stack: ['C', 'Unix', 'Processes', 'File descriptors'],
    status: '42 project',
  },
];
