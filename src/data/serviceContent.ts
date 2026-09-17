import type { ServiceSlug } from './seo';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceContentExtras {
  applications: string[];
  process: { title: string; description: string }[];
  benefits: string[];
  whyChoose: string[];
  faqs: FAQItem[];
  relatedSlugs: ServiceSlug[];
  relatedAnchors: Record<ServiceSlug, string>;
}

const defaultProcess = [
  {
    title: 'Initial Contact',
    description: 'Reach out via phone or email. We respond quickly and prioritize urgent breakdown support when downtime matters most.',
  },
  {
    title: 'Site Assessment',
    description: 'Our team inspects the equipment and site conditions to define the scope, risk, and precise service requirements.',
  },
  {
    title: 'Service Execution',
    description: 'Skilled technicians perform on-site or workshop repair, testing, installation, and maintenance using approved methods.',
  },
  {
    title: 'Testing & Certification',
    description: 'Every job is inspected, tested, documented, and certified to confirm safety, compliance, and reliable long-term operation.',
  },
];

export const SERVICE_CONTENT: Record<ServiceSlug, ServiceContentExtras> = {
  'transformer-services': {
    applications: [
      'Manufacturing plants and GIDC industrial units in Vapi and Valsad',
      'Power and distribution transformers from 100 KVA to 100 MVA',
      'Voltage classes from 11 KV to 220 KV',
      'Emergency transformer replacement during breakdowns',
      'Routine maintenance and oil filtration programs',
    ],
    process: defaultProcess,
    benefits: [
      'Reduced downtime with emergency transformer supply',
      'On-site oil filtration without moving heavy equipment',
      'OLTC repair and genuine spare parts supply',
      'Government-approved testing and documentation',
      'Coverage across all major voltage classes used in Gujarat industries',
    ],
    whyChoose: [
      'Specialized focus on power and distribution transformers',
      'On-site and workshop repair capabilities',
      'Emergency response for industrial breakdowns',
      'Based in Vapi GIDC with fast deployment across Gujarat',
    ],
    faqs: [
      {
        question: 'What transformer services do you provide?',
        answer:
          'We provide repair, servicing, testing, and maintenance of power and distribution transformers from 100 KVA to 100 MVA across 11, 22, 33, 66, 110, and 220 KV voltage classes.',
      },
      {
        question: 'Do you provide transformer testing?',
        answer:
          'Yes. We perform on-site and workshop transformer testing and diagnostics as part of our repair and maintenance services.',
      },
      {
        question: 'Do you provide transformer maintenance?',
        answer:
          'Yes. Routine maintenance includes oil filtration, OLTC servicing, inspection, and preventive care for industrial transformers.',
      },
      {
        question: 'Do you handle emergency transformer requirements?',
        answer:
          'Yes. We supply emergency service transformers to minimize downtime when a unit fails or needs urgent replacement.',
      },
    ],
    relatedSlugs: ['switchgear-panels', 'electrical-services', 'old-transformer-buy-sell'],
    relatedAnchors: {
      'transformer-services': 'Explore transformer repair services',
      'switchgear-panels': 'View switchgear and panel services',
      'wiring-compliance': 'View wiring and compliance services',
      'earthing-cabling': 'Explore earthing and cabling services',
      'old-transformer-buy-sell': 'Learn about old transformer buy and sell',
      'electrical-services': 'View electrical services for your facility',
    },
  },
  'switchgear-panels': {
    applications: [
      'HT and LT panel rooms in industrial plants',
      'ACB and VCB maintenance for distribution systems',
      'AB switch and DO fuse upkeep for substations',
      'Panel testing before commissioning or after faults',
      'GIDC manufacturing and chemical facility electrical rooms',
    ],
    process: defaultProcess,
    benefits: [
      'Safer operation of HT and LT distribution panels',
      'Reduced fault risk through scheduled testing and maintenance',
      'Expert handling of ACB, VCB, and protection equipment',
      'Compliance-ready documentation after servicing',
    ],
    whyChoose: [
      'Full-range switchgear and panel expertise',
      'Testing and diagnostics included in every service',
      'Experienced with industrial GIDC electrical infrastructure',
      'Government-approved contractor standards',
    ],
    faqs: [
      {
        question: 'What switchgear panels do you service?',
        answer:
          'We service ACB, VCB, HT panels, LT panels, AB switches, and DO fuses along with associated structure maintenance.',
      },
      {
        question: 'Do you service HT and LT panels?',
        answer: 'Yes. We provide servicing, testing, and maintenance for both HT and LT panels.',
      },
      {
        question: 'Do you provide panel testing and maintenance?',
        answer:
          'Yes. Panel testing, diagnostics, and scheduled maintenance are core parts of our switchgear services.',
      },
    ],
    relatedSlugs: ['transformer-services', 'wiring-compliance', 'electrical-services'],
    relatedAnchors: {
      'transformer-services': 'Explore transformer repair services',
      'switchgear-panels': 'View switchgear and panel services',
      'wiring-compliance': 'View wiring and compliance services',
      'earthing-cabling': 'Explore earthing and cabling services',
      'old-transformer-buy-sell': 'Learn about old transformer buy and sell',
      'electrical-services': 'View electrical services for your facility',
    },
  },
  'wiring-compliance': {
    applications: [
      'New industrial and residential wiring installations',
      'Power passing work for new connections',
      'ERDA passing and electrical compliance certification',
      'Factory and commercial building electrical upgrades',
      'GIDC unit wiring and regulatory approvals',
    ],
    process: defaultProcess,
    benefits: [
      'Certified wiring work meeting government standards',
      'ERDA passing support for compliant operations',
      'Safe industrial and residential installations',
      'Documentation for audits and regulatory checks',
    ],
    whyChoose: [
      'Government-approved electrical contractor',
      'End-to-end wiring from installation to certification',
      'Experience with GIDC industrial compliance requirements',
      'Reliable project execution and testing',
    ],
    faqs: [
      {
        question: 'What electrical wiring services do you provide?',
        answer:
          'We provide complete industrial and residential wiring, power passing work, and ERDA passing for regulatory compliance.',
      },
      {
        question: 'Do you provide electrical compliance support?',
        answer:
          'Yes. We handle ERDA passing and compliance documentation to ensure your facility meets applicable electrical standards.',
      },
    ],
    relatedSlugs: ['earthing-cabling', 'electrical-services', 'switchgear-panels'],
    relatedAnchors: {
      'transformer-services': 'Explore transformer repair services',
      'switchgear-panels': 'View switchgear and panel services',
      'wiring-compliance': 'View wiring and compliance services',
      'earthing-cabling': 'Explore earthing and cabling services',
      'old-transformer-buy-sell': 'Learn about old transformer buy and sell',
      'electrical-services': 'View electrical services for your facility',
    },
  },
  'earthing-cabling': {
    applications: [
      'Industrial earthing systems for manufacturing plants',
      'Cable laying for HT and LT distribution networks',
      'Cable jointing and commissioning works',
      'Earthing testing for safety compliance',
      'GIDC facility electrical infrastructure projects',
    ],
    process: defaultProcess,
    benefits: [
      'Improved electrical safety through proper earthing',
      'Reliable cable connections with professional jointing',
      'Neat, standards-compliant cable laying',
      'Testing and verification after installation',
    ],
    whyChoose: [
      'Dedicated earthing and cabling expertise',
      'Safety-first approach for industrial environments',
      'On-site installation across Vapi and surrounding areas',
      'Integrated with our broader electrical services',
    ],
    faqs: [
      {
        question: 'Do you provide earthing installation and testing?',
        answer:
          'Yes. We install and test earthing systems for industrial and commercial facilities to meet safety requirements.',
      },
      {
        question: 'Do you handle cable laying and jointing?',
        answer:
          'Yes. We perform cable laying, commissioning, and cable jointing works using industry-standard methods.',
      },
    ],
    relatedSlugs: ['wiring-compliance', 'electrical-services', 'transformer-services'],
    relatedAnchors: {
      'transformer-services': 'Explore transformer repair services',
      'switchgear-panels': 'View switchgear and panel services',
      'wiring-compliance': 'View wiring and compliance services',
      'earthing-cabling': 'Explore earthing and cabling services',
      'old-transformer-buy-sell': 'Learn about old transformer buy and sell',
      'electrical-services': 'View electrical services for your facility',
    },
  },
  'old-transformer-buy-sell': {
    applications: [
      'Decommissioning old power and distribution transformers',
      'Selling scrap or used transformers from plant upgrades',
      'Purchasing refurbished second-hand transformers',
      'Fair valuation before asset disposal',
      'Quick pickup from industrial sites across Gujarat',
    ],
    process: [
      {
        title: 'Contact & Details',
        description: 'Share transformer capacity, voltage class, condition, and location. We respond with next steps quickly.',
      },
      {
        title: 'On-Site Inspection',
        description: 'We visit your site for a free inspection and fair market valuation of the unit.',
      },
      {
        title: 'Quote & Agreement',
        description: 'Receive an instant quote. For buyers, we match tested refurbished units to your requirements.',
      },
      {
        title: 'Pickup or Delivery',
        description: 'We arrange pickup with prompt payment for sellers, or tested delivery for buyers.',
      },
    ],
    benefits: [
      'Fair market valuation with on-site inspection',
      'Quick payment and hassle-free pickup',
      'Tested refurbished transformers for buyers',
      'Eco-friendly disposal of scrap units',
    ],
    whyChoose: [
      'Technical expertise in transformer evaluation',
      'Trusted by industries across Vapi and Gujarat',
      'Pickup available from your site',
      'Backed by our repair and testing capabilities',
    ],
    faqs: [
      {
        question: 'Do you buy used transformers?',
        answer:
          'Yes. We buy old, used, and scrap power and distribution transformers after on-site inspection and fair valuation.',
      },
      {
        question: 'Do you buy scrap transformers?',
        answer: 'Yes. We purchase scrap transformers and arrange pickup from your facility.',
      },
      {
        question: 'How is an old transformer valued?',
        answer:
          'We conduct a free on-site inspection considering capacity, voltage class, condition, and market demand to provide a fair quote.',
      },
    ],
    relatedSlugs: ['transformer-services', 'electrical-services'],
    relatedAnchors: {
      'transformer-services': 'Explore transformer repair services',
      'switchgear-panels': 'View switchgear and panel services',
      'wiring-compliance': 'View wiring and compliance services',
      'earthing-cabling': 'Explore earthing and cabling services',
      'old-transformer-buy-sell': 'Learn about old transformer buy and sell',
      'electrical-services': 'View electrical services for your facility',
    },
  },
  'electrical-services': {
    applications: [
      'Industrial electrical installation and maintenance in GIDC units',
      'Transformer, panel, wiring, and earthing support under one contractor',
      'Electrical testing and compliance for manufacturing plants',
      'Emergency electrical support for production downtime',
      'Facilities across Vapi, Valsad, Umbergaon, Daman, Silvassa, and Dadra',
    ],
    process: defaultProcess,
    benefits: [
      'Single contractor for multiple electrical disciplines',
      'Government-approved standards on every project',
      'Fast response for urgent industrial requirements',
      'Local team based in Vapi GIDC',
    ],
    whyChoose: [
      'Full-spectrum electrical contractor — not just one specialty',
      'Transformer expertise combined with panels, wiring, and earthing',
      'Serving Gujarat industrial belt since establishment in Vapi GIDC',
      'Emergency transformer and electrical support available',
    ],
    faqs: [
      {
        question: 'What electrical services do you provide in Vapi?',
        answer:
          'We provide transformer repair and testing, switchgear panel maintenance, wiring and ERDA compliance, earthing and cabling, and old transformer buy and sell — all as a government-approved electrical contractor.',
      },
      {
        question: 'Do you serve Valsad and nearby industrial areas?',
        answer:
          'Yes. We serve Vapi, Valsad, Vapi GIDC, Umbergaon, Daman, Silvassa, and Dadra for on-site electrical work.',
      },
      {
        question: 'Can I request a quote for multiple services?',
        answer:
          'Yes. Contact us with your requirements and we will assess scope across transformer, panel, wiring, and related electrical needs.',
      },
    ],
    relatedSlugs: ['transformer-services', 'switchgear-panels', 'wiring-compliance'],
    relatedAnchors: {
      'transformer-services': 'Explore transformer repair services',
      'switchgear-panels': 'View switchgear and panel services',
      'wiring-compliance': 'View wiring and compliance services',
      'earthing-cabling': 'Explore earthing and cabling services',
      'old-transformer-buy-sell': 'Learn about old transformer buy and sell',
      'electrical-services': 'View electrical services for your facility',
    },
  },
};

export function getServiceContent(slug: string): ServiceContentExtras | undefined {
  return SERVICE_CONTENT[slug as ServiceSlug];
}
