import { BUSINESS, getSiteUrl, absoluteUrl } from './business';
import type { PageSEO } from './seo';

export function buildOrganizationSchema() {
  const base = getSiteUrl();
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS.name,
    description: BUSINESS.description,
    email: BUSINESS.primaryEmail,
    telephone: BUSINESS.primaryPhoneDisplay,
    logo: base ? `${base}/favicon.svg` : '/favicon.svg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.addressCountry,
    },
    sameAs: BUSINESS.sameAs,
  };
  if (base) schema.url = base;
  return schema;
}

export function buildLocalBusinessSchema() {
  const base = getSiteUrl();
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ElectricalContractor',
    name: BUSINESS.name,
    description: BUSINESS.description,
    email: BUSINESS.primaryEmail,
    telephone: BUSINESS.primaryPhoneDisplay,
    image: base ? `${base}/favicon.svg` : '/favicon.svg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: BUSINESS.hours.open,
        closes: BUSINESS.hours.close,
      },
    ],
    areaServed: BUSINESS.serviceAreas.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    sameAs: BUSINESS.sameAs,
  };
  if (base) schema.url = base;
  return schema;
}

export function buildWebSiteSchema() {
  const base = getSiteUrl();
  if (!base) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BUSINESS.name,
    url: base,
    description: BUSINESS.description,
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.name,
    },
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  const base = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(base ? { item: `${base}${item.path}` } : {}),
    })),
  };
}

export function buildServiceSchema(seo: PageSEO, serviceName: string) {
  const base = getSiteUrl();
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: seo.description,
    provider: {
      '@type': 'ElectricalContractor',
      name: BUSINESS.name,
      telephone: BUSINESS.primaryPhoneDisplay,
      address: {
        '@type': 'PostalAddress',
        addressLocality: BUSINESS.address.addressLocality,
        addressRegion: BUSINESS.address.addressRegion,
        addressCountry: BUSINESS.address.addressCountry,
      },
    },
    areaServed: BUSINESS.serviceAreas.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
  };
  if (base) schema.url = absoluteUrl(seo.path);
  return schema;
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildPageGraph(
  seo: PageSEO,
  options?: {
    breadcrumbs?: { name: string; path: string }[];
    serviceName?: string;
    faqs?: { question: string; answer: string }[];
    includeWebSite?: boolean;
  },
) {
  const graph: Record<string, unknown>[] = [
    buildOrganizationSchema(),
    buildLocalBusinessSchema(),
  ];

  if (options?.includeWebSite) {
    const webSite = buildWebSiteSchema();
    if (webSite) graph.push(webSite);
  }

  if (options?.breadcrumbs?.length) {
    graph.push(buildBreadcrumbSchema(options.breadcrumbs));
  }

  if (options?.serviceName) {
    graph.push(buildServiceSchema(seo, options.serviceName));
  }

  const faqSchema = options?.faqs?.length ? buildFAQSchema(options.faqs) : null;
  if (faqSchema) graph.push(faqSchema);

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
