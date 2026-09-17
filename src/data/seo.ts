/** Per-route SEO metadata. Titles and descriptions are unique per page. */

export interface PageSEO {
  title: string;
  description: string;
  h1: string;
  keywords: string[];
  path: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
}

export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  gallery: '/gallery',
  reviews: '/reviews',
  contact: '/contact',
} as const;

export const SERVICE_SLUGS = [
  'transformer-services',
  'switchgear-panels',
  'wiring-compliance',
  'earthing-cabling',
  'old-transformer-buy-sell',
  'electrical-services',
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export const PAGE_SEO: Record<string, PageSEO> = {
  home: {
    path: '/',
    title: 'Step-Up Energy Solutions | Electrical & Transformer Services in Vapi, Gujarat',
    description:
      'Govt. approved electrical contractor in Vapi GIDC for transformer repair, testing, maintenance, switchgear panels, wiring, earthing, and emergency transformer supply across Gujarat.',
    h1: 'Electrical & Transformer Services in Vapi',
    keywords: [
      'electrical contractor in Vapi',
      'electrical services in Vapi',
      'transformer services in Vapi',
      'transformer repair in Vapi',
      'electrical contractor Vapi Gujarat',
    ],
  },
  about: {
    path: '/about',
    title: 'About Step-Up Energy Solutions | Govt. Approved Electrical Contractor in Vapi',
    description:
      'Learn about Step-Up Energy Solutions — a government-approved electrical contractor based in Vapi GIDC, Gujarat, specializing in power and distribution transformer services.',
    h1: 'Govt. Approved Electrical Contractor',
    keywords: ['electrical contractor Vapi Gujarat', 'transformer contractor Vapi'],
  },
  services: {
    path: '/services',
    title: 'Electrical & Transformer Services in Vapi & Valsad | Step-Up Energy Solutions',
    description:
      'Complete electrical and transformer services in Vapi and Valsad — repair, testing, switchgear panels, wiring, earthing, cabling, and old transformer buy & sell.',
    h1: 'Electrical Services',
    keywords: ['electrical services Vapi', 'industrial electrical services Vapi', 'GIDC electrical contractor'],
  },
  gallery: {
    path: '/gallery',
    title: 'Electrical Projects & Transformer Gallery | Step-Up Energy Solutions',
    description:
      'View transformer repair, panel servicing, and electrical installation projects completed by Step-Up Energy Solutions across Vapi, Valsad, and Gujarat industrial areas.',
    h1: 'Project Gallery',
    keywords: ['transformer projects Vapi', 'electrical work gallery Gujarat'],
  },
  reviews: {
    path: '/reviews',
    title: 'Client Reviews | Step-Up Energy Solutions',
    description:
      'Read what industrial and commercial clients across Vapi, Valsad, Umbergaon, and Gujarat say about Step-Up Energy Solutions transformer and electrical services.',
    h1: 'What Our Clients Say',
    keywords: ['Step-Up Energy Solutions reviews', 'electrical contractor reviews Vapi'],
  },
  contact: {
    path: '/contact',
    title: 'Contact Step-Up Energy Solutions | Electrical Contractor in Vapi',
    description:
      'Contact Step-Up Energy Solutions in Vapi GIDC for transformer repair, electrical services, quotes, and emergency support. Call, email, or request a quote online.',
    h1: 'Get in Touch',
    keywords: ['contact electrical contractor Vapi', 'transformer service quote Vapi'],
  },
  notFound: {
    path: '/404',
    title: 'Page Not Found | Step-Up Energy Solutions',
    description: 'The page you are looking for could not be found.',
    h1: 'Power Lost',
    keywords: [],
    noindex: true,
  },
  admin: {
    path: '/admin',
    title: 'Admin | Step-Up Energy Solutions',
    description: 'Admin panel.',
    h1: 'Admin',
    keywords: [],
    noindex: true,
  },
};

export const SERVICE_SEO: Record<ServiceSlug, PageSEO> = {
  'transformer-services': {
    path: '/services/transformer-services',
    title: 'Transformer Repair & Services in Vapi, Gujarat | Step-Up Energy Solutions',
    description:
      'Transformer repair, testing, maintenance, oil filtration, OLTC servicing, and emergency supply in Vapi — 100 KVA to 100 MVA, 11 KV to 220 KV.',
    h1: 'Transformer Services',
    keywords: [
      'transformer services in Vapi',
      'transformer repair in Vapi',
      'transformer testing in Vapi',
      'transformer maintenance Gujarat',
    ],
  },
  'switchgear-panels': {
    path: '/services/switchgear-panels',
    title: 'Switchgear & Panel Services in Vapi, Gujarat | Step-Up Energy Solutions',
    description:
      'ACB, VCB, HT and LT panel servicing, testing, and maintenance in Vapi. AB switch and DO fuse maintenance for industrial electrical systems.',
    h1: 'Switchgear & Panels',
    keywords: ['switchgear panel services Vapi', 'HT LT panel services Vapi'],
  },
  'wiring-compliance': {
    path: '/services/wiring-compliance',
    title: 'Wiring & Electrical Compliance Services in Vapi | Step-Up Energy Solutions',
    description:
      'Industrial and residential wiring, power passing, and ERDA compliance services in Vapi and Valsad for certified, government-approved electrical work.',
    h1: 'Wiring & Compliance',
    keywords: ['electrical compliance Vapi', 'ERDA passing Vapi', 'industrial wiring Vapi'],
  },
  'earthing-cabling': {
    path: '/services/earthing-cabling',
    title: 'Earthing & Cabling Services in Vapi, Gujarat | Step-Up Energy Solutions',
    description:
      'Earthing installation and testing, cable laying, commissioning, and cable jointing for industrial and commercial facilities in Vapi GIDC and Gujarat.',
    h1: 'Earthing & Cabling',
    keywords: ['earthing services Vapi', 'cable laying Vapi', 'earthing contractor Vapi'],
  },
  'old-transformer-buy-sell': {
    path: '/services/old-transformer-buy-sell',
    title: 'Old Transformer Buy & Sell in Gujarat | Step-Up Energy Solutions',
    description:
      'Buy or sell old, used, and scrap power and distribution transformers in Gujarat. Fair valuation, on-site inspection, and quick pickup from Vapi.',
    h1: 'Old Transformer Buy & Sell',
    keywords: ['old transformer buy sell Gujarat', 'used transformer buyer Vapi'],
  },
  'electrical-services': {
    path: '/services/electrical-services',
    title: 'Electrical Services in Vapi & Valsad | Step-Up Energy Solutions',
    description:
      'Industrial electrical services in Vapi and Valsad — installation, testing, maintenance, panel work, wiring, and compliance for manufacturing and GIDC facilities.',
    h1: 'Electrical Services',
    keywords: [
      'electrical services Valsad',
      'electrical contractor in Valsad',
      'Vapi GIDC electrical services',
      'industrial electrical services Vapi',
    ],
  },
};

export function getServiceSEO(slug: string): PageSEO | undefined {
  return SERVICE_SEO[slug as ServiceSlug];
}

export const ALL_INDEXABLE_PATHS: string[] = [
  '/',
  '/about',
  '/services',
  ...SERVICE_SLUGS.map((s) => `/services/${s}`),
  '/gallery',
  '/reviews',
  '/contact',
];
