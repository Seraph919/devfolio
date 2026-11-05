export const siteUrl = 'https://asoudani.dev';
export const socialImage = '/og-ayoub.png';

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: 'Ayoub Soudani · Backend Engineer',
};

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: 'Ayoub Soudani',
  url: siteUrl,
  description:
    'Backend-focused software developer and 1337 Coding School student in Morocco, building APIs, distributed systems and developer tools.',
  homeLocation: { '@type': 'Country', name: 'Morocco' },
  alumniOf: [
    { '@type': 'EducationalOrganization', name: 'Ibn Zohr University' },
  ],
  affiliation: {
    '@type': 'EducationalOrganization',
    name: '1337 Coding School · 42 Network',
  },
  sameAs: [
    'https://github.com/Seraph919',
    'https://www.linkedin.com/in/ayoubsoudani',
  ],
};

export function pageSocialMetadata(
  title: string,
  description: string,
  path: string
) {
  return {
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName: 'Ayoub Soudani',
      images: [{ url: socialImage, width: 1200, height: 630, alt: 'Ayoub Soudani — backend engineer and systems builder' }],
      locale: 'en_US',
      type: 'website' as const,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      images: [{ url: socialImage, alt: 'Ayoub Soudani portfolio' }],
    },
  };
}
