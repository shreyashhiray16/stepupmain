/** Single source of truth for business NAP and contact details. */

export const BUSINESS = {
  name: 'Step-Up Energy Solutions',
  legalName: 'Step-Up Energy Solutions',
  tagline: 'Electrical & Transformer Services',
  description:
    'Govt. Approved Electrical Contractor specializing in repairing, testing, and servicing of Power & Distribution Transformers.',
  /** Set VITE_SITE_URL in .env when production domain is ready. */
  siteUrl: import.meta.env.VITE_SITE_URL as string | undefined,

  primaryPhone: '+919979781064',
  primaryPhoneDisplay: '+91 99797 81064',
  secondaryPhones: [
    { tel: '+917041735701', display: '+91 70417 35701', label: 'WhatsApp' },
  ],

  primaryEmail: 'stepupenergysolutions@gmail.com',
  secondaryEmails: ['info@stepupenergy.in'],

  address: {
    streetAddress: 'Crony Chem Fab Compound, Plot No. 3504, Behind Canal, GIDC',
    addressLocality: 'Vapi',
    addressRegion: 'Gujarat',
    postalCode: '396195',
    addressCountry: 'IN',
    full: 'Crony Chem Fab Compound, Plot No. 3504, Behind Canal, GIDC, Vapi – 396 195, Gujarat, India',
    short: 'GIDC, Vapi - 396195, Gujarat, India',
  },

  geo: {
    latitude: 20.3616937,
    longitude: 72.9592891,
  },

  hours: {
    weekdays: 'Monday–Saturday',
    open: '09:00',
    close: '19:00',
    display: 'Mon – Sat: 9:00 AM – 7:00 PM',
    sunday: 'Sunday: Closed',
  },

  serviceAreas: [
    'Vapi',
    'Vapi GIDC',
    'Valsad',
    'Umbergaon',
    'Daman',
    'Silvassa',
    'Dadra',
  ],

  sameAs: [
    'https://www.instagram.com/stepupenergysolutions/',
    'https://maps.app.goo.gl/ukB2cXVrduatCMAH6',
  ],

  whatsappUrl: 'https://wa.me/917041735701?text=Hello%20Step-Up%20Energy%20Solutions',
  instagramUrl: 'https://www.instagram.com/stepupenergysolutions/',
  mapsUrl: 'https://maps.app.goo.gl/ukB2cXVrduatCMAH6',

  owner: {
    name: 'Dharmesh',
    title: 'Owner & Lead Contractor',
  },
} as const;

export function getSiteUrl(): string | undefined {
  const url = BUSINESS.siteUrl?.trim();
  if (!url) return undefined;
  return url.replace(/\/$/, '');
}

export function absoluteUrl(path: string): string | undefined {
  const base = getSiteUrl();
  if (!base) return undefined;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function telHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, '')}`;
}

export function mailtoHref(email: string): string {
  return `mailto:${email}`;
}
