import { Helmet } from 'react-helmet-async';
import { BUSINESS, absoluteUrl } from '../data/business';
import { buildPageGraph } from '../data/schema';
import type { PageSEO } from '../data/seo';

export interface SEOProps {
  seo: PageSEO;
  breadcrumbs?: { name: string; path: string }[];
  serviceName?: string;
  faqs?: { question: string; answer: string }[];
  includeWebSite?: boolean;
}

export default function SEO({ seo, breadcrumbs, serviceName, faqs, includeWebSite }: SEOProps) {
  const canonical = absoluteUrl(seo.path);
  const ogImage = absoluteUrl('/og-image.jpg') ?? '/og-image.jpg';
  const robots = seo.noindex ? 'noindex, nofollow' : 'index, follow';

  const jsonLd = buildPageGraph(seo, {
    breadcrumbs,
    serviceName,
    faqs,
    includeWebSite,
  });

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content={robots} />
      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:type" content={seo.ogType ?? 'website'} />
      <meta property="og:site_name" content={BUSINESS.name} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:locale" content="en_IN" />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
