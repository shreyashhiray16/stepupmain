import { Zap, Shield, Cable, Wrench, Settings, CircuitBoard, Plug, HardHat, FileCheck, Activity, RefreshCw, IndianRupee, ShieldCheck, ClipboardCheck, Home, Scroll, Scissors, Recycle, HandCoins, Award, Truck, Handshake, Users, Headphones } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { SVGProps } from 'react';
import switchgearPanelsHero from '../assets/switchgear-panels-hero.jpg';
import transformerServicesHero from '../assets/transformer-services-hero.jpg';
import wiringComplianceHero from '../assets/wiring-compliance-hero.jpg';
import earthingCablingHero from '../assets/earthing-cabling-hero.jpg';
import oldTransformerBuySellHero from '../assets/old-transformer-buy-sell-hero.jpg';
import electricalServicesHeroImage from '../assets/electrical-services-hero.png';
import transformerServicesIcon from '../assets/service-icons/transformer-services.png';
import switchgearPanelsIcon from '../assets/service-icons/switchgear-panels.png';
import wiringComplianceIcon from '../assets/service-icons/wiring-compliance.png';
import earthingCablingIcon from '../assets/service-icons/earthing-cabling.png';
import oldTransformerBuySellIcon from '../assets/service-icons/old-transformer-buy-sell.png';
import electricalServicesIcon from '../assets/service-icons/electrical-services.png';

// Custom icon: electrical earthing/ground symbol (not available in lucide-react)
function GroundIcon({ size = 24, ...rest }: SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <line x1="12" y1="2" x2="12" y2="13" />
      <line x1="5" y1="16" x2="19" y2="16" />
      <line x1="8" y1="19" x2="16" y2="19" />
      <line x1="10.5" y1="22" x2="13.5" y2="22" />
    </svg>
  );
}

// Custom icon: pliers/jointing tool (rotated Scissors glyph to match the crossed-tool mark)
function PliersIcon({ size = 24, style, ...rest }: SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <Scissors
      size={size}
      style={{ transform: 'rotate(135deg)', ...style }}
      {...rest}
    />
  );
}

// Custom icon: distribution transformer (not available in lucide-react)
function TransformerBoxIcon({ size = 24, ...rest }: SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <rect x="3" y="9" width="18" height="11" rx="1.5" />
      <path d="M8 9V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3" />
      <line x1="7" y1="13" x2="7" y2="16" />
      <line x1="12" y1="13" x2="12" y2="16" />
      <line x1="17" y1="13" x2="17" y2="16" />
    </svg>
  );
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface HeroFeature {
  icon: LucideIcon;
  label: string;
}

export interface HeroStat {
  icon: LucideIcon;
  value: string;
  label: string;
}

export interface ServicePillar {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  icon: LucideIcon;
  /** Optional high-resolution illustrated icon shown on the service card badge (overrides `icon` there). */
  iconImage?: string;
  items: ServiceItem[];
  heroFeatures: HeroFeature[];
  /** Optional floating trust badges shown over the hero photo (right side). */
  heroBadges?: HeroFeature[];
  /** Optional custom stats strip for this service's hero (overrides the default). */
  heroStats?: HeroStat[];
}

export const allServices: ServiceItem[] = [
  {
    id: 1,
    title: 'Transformer Repair, Servicing, Testing & Maintenance',
    description: 'Repairing, Servicing, Testing and Maintenance of Power and Distribution Transformers in the range of 100 KVA to 100 MVA, across voltage classes 11, 22, 33, 66, 110, and 220 KV.',
    icon: Zap,
  },
  {
    id: 2,
    title: 'On-Site Oil Filtration & Testing',
    description: 'On-site Oil Filtration, Maintenance & Testing of Power & Distribution Transformers up to 100 MVA.',
    icon: Activity,
  },
  {
    id: 3,
    title: 'Transformer Sales & Emergency Supply',
    description: 'Sales & Purchase of Transformers, plus emergency service-transformer supply.',
    icon: Shield,
  },
  {
    id: 4,
    title: 'OLTC Repairing & Servicing',
    description: 'OLTC (On-Load Tap Changer) Repairing & Servicing, Testing, and Sales of OLTC Spare Parts.',
    icon: Settings,
  },
  {
    id: 5,
    title: 'Earthing Installation & Testing',
    description: 'Complete earthing installation and testing services for industrial and commercial facilities.',
    icon: HardHat,
  },
  {
    id: 6,
    title: 'Panel Servicing & Maintenance',
    description: 'ACB, VCB, HT & LT Panel Servicing, Testing & Maintenance.',
    icon: CircuitBoard,
  },
  {
    id: 7,
    title: 'Switch & Fuse Maintenance',
    description: 'AB Switch, DO Fuse & Structure Maintenance.',
    icon: Wrench,
  },
  {
    id: 8,
    title: 'Cable Laying & Jointing',
    description: 'Cable Laying, Commissioning & Cable Jointing Works.',
    icon: Cable,
  },
  {
    id: 9,
    title: 'Industrial & Residential Wiring',
    description: 'All Industrial & Residential Wiring.',
    icon: Plug,
  },
  {
    id: 10,
    title: 'Power Passing & ERDA Passing',
    description: 'Power Passing Work & ERDA Passing.',
    icon: FileCheck,
  },
  {
    id: 11,
    title: 'Old Transformer Buy & Sell',
    description: 'We buy old, used and scrap Power & Distribution Transformers, and supply refurbished, tested second-hand transformers at competitive prices.',
    icon: RefreshCw,
  },
  {
    id: 12,
    title: 'Fair Valuation & Instant Quotes',
    description: 'Free on-site inspection and fair market valuation for your old transformer, with instant quotes and quick pickup/payment.',
    icon: IndianRupee,
  },
];

export const servicePillars: ServicePillar[] = [
  {
    slug: 'transformer-services',
    title: 'Transformer Services',
    shortDescription: 'Complete repair, testing, maintenance, and emergency supply for power and distribution transformers from 100 KVA to 100 MVA.',
    longDescription: 'Step-Up Energy Solutions provides comprehensive transformer services covering the full lifecycle of power and distribution transformers. From routine maintenance and oil filtration to emergency transformer supply, our team handles units across all voltage classes — 11, 22, 33, 66, 110, and 220 KV — with capacity ranging from 100 KVA to 100 MVA. We also specialize in OLTC (On-Load Tap Changer) repair and servicing, including the supply of genuine OLTC spare parts.',
    image: transformerServicesHero,
    icon: Zap,
    iconImage: transformerServicesIcon,
    items: [allServices[0], allServices[1], allServices[2], allServices[3]],
    heroFeatures: [
      { icon: Wrench, label: 'Expert Repair & Maintenance' },
      { icon: ClipboardCheck, label: 'Testing & Diagnostics' },
      { icon: Zap, label: 'Emergency Power Supply' },
      { icon: ShieldCheck, label: 'Safe & Reliable Operations' },
    ],
  },
  {
    slug: 'switchgear-panels',
    title: 'Switchgear & Panels',
    shortDescription: 'Expert servicing, testing, and maintenance of ACB, VCB, HT & LT panels, AB switches, and DO fuses.',
    longDescription: 'Our switchgear and panel services cover the full range of industrial electrical protection and distribution equipment. We provide thorough servicing, testing, and maintenance for Air Circuit Breakers (ACB), Vacuum Circuit Breakers (VCB), and both High Tension (HT) and Low Tension (LT) panels. Additionally, we handle AB Switch, DO Fuse, and structure maintenance to ensure your electrical infrastructure operates safely and reliably.',
    image: switchgearPanelsHero,
    icon: CircuitBoard,
    iconImage: switchgearPanelsIcon,
    items: [allServices[5], allServices[6]],
    heroFeatures: [
      { icon: CircuitBoard, label: 'ACB, VCB, HT & LT Panels' },
      { icon: Settings, label: 'AB Switch & DO Fuse' },
      { icon: ClipboardCheck, label: 'Testing & Diagnostics' },
      { icon: ShieldCheck, label: 'Safe & Reliable Operations' },
    ],
  },
  {
    slug: 'earthing-cabling',
    title: 'Earthing & Cabling',
    shortDescription: 'Professional earthing installation, cable laying, commissioning, and cable jointing works.',
    longDescription: 'Step-Up Energy Solutions delivers professional earthing and cabling services for industrial and commercial facilities. Our earthing installation and testing services ensure your facility meets all safety standards and regulatory requirements. We also perform cable laying, commissioning, and cable jointing works using industry-standard materials and techniques for reliable, long-lasting electrical connections.',
    image: earthingCablingHero,
    icon: Cable,
    iconImage: earthingCablingIcon,
    items: [allServices[4], allServices[7]],
    heroFeatures: [
      { icon: GroundIcon as unknown as LucideIcon, label: 'Expert Earthing Solutions' },
      { icon: Scroll, label: 'Safe & Neat Cable Laying' },
      { icon: PliersIcon as unknown as LucideIcon, label: 'Precise Cable Jointing' },
      { icon: ShieldCheck, label: 'Safety First Always' },
    ],
  },
  {
    slug: 'wiring-compliance',
    title: 'Wiring & Compliance',
    shortDescription: 'Industrial and residential wiring, power passing, and ERDA compliance — from installation to certification.',
    longDescription: 'From new installations to compliance certifications, Step-Up Energy Solutions handles all aspects of electrical wiring and regulatory approvals. We perform complete industrial and residential wiring projects, as well as Power Passing Work and ERDA Passing to ensure your facility is fully certified and compliant with all applicable electrical standards and government regulations.',
    image: wiringComplianceHero,
    icon: Plug,
    iconImage: wiringComplianceIcon,
    items: [allServices[8], allServices[9]],
    heroFeatures: [
      { icon: Home, label: 'Industrial & Residential Wiring' },
      { icon: Zap, label: 'Safe Power Passing' },
      { icon: ClipboardCheck, label: 'ERDA Compliance' },
      { icon: ShieldCheck, label: 'Certified & Reliable' },
    ],
  },
  {
    slug: 'old-transformer-buy-sell',
    title: 'Old Transformer Buy & Sell',
    shortDescription: 'Buying and selling of old, used, and scrap power & distribution transformers with fair valuation and quick payment.',
    longDescription: 'Step-Up Energy Solutions offers a dedicated buy-and-sell desk for old, used, and scrap Power & Distribution Transformers. Whether you are decommissioning an old unit or looking for a cost-effective refurbished transformer, we make the process simple. We conduct free on-site inspection and fair market valuation, offer instant quotes, and arrange quick pickup with prompt payment for units you want to sell. For buyers, we supply tested, refurbished second-hand transformers across various capacities at competitive rates, backed by our technical expertise in repair and testing.',
    image: oldTransformerBuySellHero,
    icon: RefreshCw,
    iconImage: oldTransformerBuySellIcon,
    items: [allServices[10], allServices[11]],
    heroFeatures: [
      { icon: RefreshCw, label: 'Fair Valuation' },
      { icon: HandCoins, label: 'Quick Payment' },
      { icon: ShieldCheck, label: 'Hassle-Free Process' },
      { icon: Recycle, label: 'Eco-Friendly Disposal' },
    ],
    heroBadges: [
      { icon: Award, label: 'Best Price Guarantee' },
      { icon: Truck, label: 'Pickup Available' },
      { icon: Handshake, label: 'Trusted by Industries' },
    ],
    heroStats: [
      { icon: TransformerBoxIcon as unknown as LucideIcon, value: '1000+', label: 'Transformers Traded' },
      { icon: Users, value: '500+', label: 'Happy Clients' },
      { icon: ShieldCheck, value: '15+', label: 'Years of Market Experience' },
      { icon: Headphones, value: '24/7', label: 'Support' },
    ],
  },
  {
    slug: 'electrical-services',
    title: 'Electrical Services',
    shortDescription: 'Complete industrial electrical services in Vapi and Valsad — installation, testing, maintenance, and compliance under one government-approved contractor.',
    longDescription: 'Step-Up Energy Solutions is your single point of contact for industrial electrical services across Vapi GIDC, Valsad, and surrounding Gujarat industrial areas. As a government-approved electrical contractor, we combine transformer expertise with switchgear panel maintenance, wiring and ERDA compliance, earthing and cabling, and emergency electrical support. Whether you need a new installation, scheduled maintenance, or urgent breakdown assistance, our team delivers safe, reliable, and compliant electrical solutions tailored to manufacturing plants, GIDC units, and commercial facilities.',
    image: electricalServicesHeroImage,
    icon: HardHat,
    iconImage: electricalServicesIcon,
    items: [
      allServices[0],
      allServices[5],
      allServices[8],
      allServices[4],
    ],
    heroFeatures: [
      { icon: HardHat, label: 'Industrial Electrical Work' },
      { icon: CircuitBoard, label: 'Panels & Switchgear' },
      { icon: ClipboardCheck, label: 'Testing & Compliance' },
      { icon: ShieldCheck, label: 'Govt. Approved Contractor' },
    ],
  },
];

export const getServiceBySlug = (slug: string): ServicePillar | undefined => {
  return servicePillars.find((pillar) => pillar.slug === slug);
};
