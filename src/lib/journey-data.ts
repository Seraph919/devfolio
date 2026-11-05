export interface JourneyEvent {
  title: string;
  tag: string;
  detail: string;
  label: string;
  symbol: 'code' | 'graduation' | 'community' | 'server' | 'launch' | 'book';
  link?: { href: string; text: string };
}

/** Milestones from Ayoub's education, projects and community work. */
export const journey: JourneyEvent[] = [
  {
    title: 'Shipping Guild Chat',
    tag: '2026 · Capstone project',
    detail:
      'As Tech Lead of a five-person team, I worked on the architecture of a real-time chat and collaboration platform. My focus was the infrastructure that keeps a distributed system secure, observable, and deployable: gateway protection, Docker services, CI/CD, monitoring and recovery.',
    label: 'Microservices in production',
    symbol: 'server',
    link: { href: 'https://guild-chat.tech', text: 'Visit Guild Chat' },
  },
  {
    title: 'Building DailyCode',
    tag: '2026 · Independent project',
    detail:
      'I started building a Java/Spring Boot bot to automate daily LeetCode challenges for Discord communities. It became a practical project for scheduled tasks, external APIs, persistence, and deploying a service that runs continuously.',
    label: 'Code, every day',
    symbol: 'launch',
    link: { href: 'https://github.com/Seraph919/DailyCode', text: 'View the code' },
  },
  {
    title: 'Leading community events',
    tag: '2025–2026 · Leets Events',
    detail:
      'As Vice President and Project Manager of Leets Events at 1337, I helped organize student experiences, activities, and technical events. Planning across volunteers and teams has taught me a lot about ownership, communication, and execution.',
    label: 'Build with people',
    symbol: 'community',
  },
  {
    title: 'Learning systems from the ground up',
    tag: '2024–present · 1337 Coding School',
    detail:
      'I joined 1337 (the 42 Network), where peer learning and project-based evaluation shaped how I approach engineering. C, C++, Unix systems, networking, and collaboration provided the foundation for my backend and infrastructure work.',
    label: '42 Network',
    symbol: 'code',
  },
  {
    title: 'A foundation beyond code',
    tag: '2021–2024 · Ibn Zohr University',
    detail:
      'Before focusing on software engineering, I studied English at Ibn Zohr University. Writing, researching, and communicating clearly still influence how I document systems and work with teams.',
    label: 'English studies',
    symbol: 'book',
  },
];
