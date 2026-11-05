import React from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import AnimatedBackground from '@/components/animated-background';
import MainNav from '@/components/main-nav';
import { pageSocialMetadata, personJsonLd, siteUrl, websiteJsonLd } from '@/lib/seo';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#18191b',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Ayoub Soudani | Backend Developer & Systems Builder', template: '%s | Ayoub Soudani' },
  description: 'Ayoub Soudani is a backend-focused developer at 1337 Coding School, building distributed systems, Java services and reliable infrastructure in Morocco.',
  authors: [{ name: 'Ayoub Soudani', url: siteUrl }],
  creator: 'Ayoub Soudani',
  keywords: ['Ayoub Soudani', 'Backend Developer', 'Software Engineer', '1337 Coding School', '42 Network', 'Java', 'Spring Boot', 'Docker', 'Microservices', 'Portfolio', 'Morocco'],
  ...pageSocialMetadata('Ayoub Soudani | Backend Developer & Systems Builder', 'Explore the backend engineering, infrastructure projects and journey of Ayoub Soudani.', '/'),
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd).replace(/</g, '\\u003c') }} />
      </head>
      <body className="font-body antialiased">
        <AnimatedBackground />
        <MainNav />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
