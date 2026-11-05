import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';

// Include the sitemap in the static export used by GitHub Pages.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/about', '/projects', '/skills'].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
