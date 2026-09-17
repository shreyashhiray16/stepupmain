import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Award, MapPin, Clock, ShieldCheck, ChevronRight, User } from 'lucide-react';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import CTASection from '../components/CTASection';
import heroTransformerImage from '../assets/about-hero-transformer.jpg';
import collageTransformerImage from '../assets/about-collage-transformer.jpg';
import { PAGE_SEO } from '../data/seo';
import { BUSINESS, telHref } from '../data/business';

const HERO_IMAGE = heroTransformerImage;
const COLLAGE_IMAGE = collageTransformerImage;

const stats = [
  { icon: Zap, value: '100 KVA \u2013 100 MVA', label: 'Transformer Capacity Serviced' },
  { icon: Shield, value: '11 \u2013 220 KV', label: 'Voltage Classes Covered' },
  { icon: Award, value: 'Govt. Approved', label: 'Licensed Electrical Contractor' },
  { icon: MapPin, value: 'Vapi, GIDC', label: 'Gujarat, India' },
];

const whyChoose = [
  {
    icon: Award,
    title: 'Govt. Approved Contractor',
    desc: 'Licensed and certified, ensuring all work meets regulatory compliance and government standards.',
  },
  {
    icon: Clock,
    title: 'Emergency Response',
    desc: 'Rapid deployment of emergency service transformers to minimize downtime at your facility.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified Work',
    desc: 'All services backed by proper testing, documentation, and compliance passing.',
  },
];

const floatingTags = [
  { label: 'Testing Lab', top: '14%', left: '8%' },
  { label: 'Transformer Design Specifications', top: '30%', left: '38%' },
  { label: 'Client Case Studies', top: '58%', left: '14%' },
  { label: 'Testing Labs', top: '76%', left: '4%' },
];

export default function About() {
  const [activeStat, setActiveStat] = useState(1);

  return (
    <>
      <SEO
        seo={PAGE_SEO.about}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
      />

      <section className="relative overflow-hidden bg-dark pt-36 pb-20 lg:pt-44 lg:pb-28">
        <img
          src={HERO_IMAGE}
          alt="Step-Up Energy Solutions technicians inspecting a power transformer at an industrial substation in Vapi"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
          width={1600}
          height={900}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/40" />
        <div className="absolute inset-0 hero-grid-pattern" />
        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <span className="font-heading text-xs font-semibold tracking-[0.2em] uppercase text-primary">About Us</span>
            <div className="w-12 h-0.5 bg-primary mt-2 mb-6" />
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
              Govt. Approved <span className="text-primary">Electrical Contractor</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
              {BUSINESS.name} is a government-approved electrical contractor based in Vapi GIDC, Gujarat, specializing in the repair, testing, and servicing of power and distribution transformers.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative bg-gray-bg border-b border-gray-border overflow-hidden" aria-label="Key facts">
        <div className="absolute inset-0 diagonal-pattern-light" />
        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {stats.map((stat, index) => {
              const isActive = index === activeStat;
              return (
                <div key={stat.label} className="relative">
                  <ScrollReveal delay={index * 0.08}>
                    <button
                      type="button"
                      onClick={() => setActiveStat(index)}
                      className={`stat-card w-full text-left relative overflow-hidden rounded-2xl border bg-white p-6 ${
                        isActive ? 'active border-primary' : 'border-gray-border'
                      }`}
                    >
                      <svg className="stat-sparkline" viewBox="0 0 56 32" fill="none" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0 26 L10 20 L18 24 L26 12 L34 16 L42 4 L56 8" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${isActive ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                        <stat.icon size={20} />
                      </div>
                      <div className="font-heading text-xl md:text-2xl font-bold text-dark mb-1 relative z-10">{stat.value}</div>
                      <div className="text-steel text-sm relative z-10">{stat.label}</div>
                    </button>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div>
                <span className="font-heading text-xs font-semibold tracking-[0.2em] uppercase text-primary">Our Mission</span>
                <div className="w-12 h-0.5 bg-primary mt-2 mb-6" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Keeping Industries Powered with Reliable Transformer Services</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Based in Vapi GIDC, Gujarat, Step-Up Energy Solutions provides comprehensive electrical services to industrial facilities, manufacturing plants, and commercial establishments across the region.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all">
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl p-8 lg:p-10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded" />
                <h3 className="font-heading text-2xl font-bold text-dark mb-8">Why Choose Step-Up Energy</h3>
                <div className="space-y-7">
                  {whyChoose.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading font-bold text-dark mb-1">{item.title}</h4>
                        <p className="text-steel text-sm mb-2">{item.desc}</p>
                        <Link to="/contact" className="inline-flex items-center gap-1 text-primary text-xs font-semibold hover:gap-1.5 transition-all">
                          Learn More <ChevronRight size={13} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-gray-bg">
        <div className="grid lg:grid-cols-2">
          <ScrollReveal className="relative min-h-[420px] lg:min-h-[520px] overflow-hidden">
            <img src={COLLAGE_IMAGE} alt="Power and distribution transformer units at Step-Up Energy Solutions facility" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1200} height={800} />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-dark/10" />
            {floatingTags.map((tag) => (
              <span key={tag.label} className="about-tag" style={{ top: tag.top, left: tag.left }}>
                <span className="about-tag-dot" />
                {tag.label}
              </span>
            ))}
          </ScrollReveal>

          <ScrollReveal direction="right" className="relative bg-white flex items-center p-10 lg:p-16 overflow-hidden">
            <div className="contact-card-pattern" aria-hidden="true" />
            <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full">
              <div className="w-24 h-24 rounded-xl border-2 border-primary flex-shrink-0 bg-gray-bg flex items-center justify-center" aria-hidden="true">
                <User size={40} className="text-primary/60" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-heading text-2xl font-bold text-dark mb-1">{BUSINESS.owner.name}</h3>
                <p className="text-steel mb-1">{BUSINESS.owner.title}</p>
                <p className="text-steel text-xs mb-5 italic">[Owner photo — replace when available]</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={telHref(BUSINESS.primaryPhone)} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm">
                    {BUSINESS.primaryPhoneDisplay}
                  </a>
                  {BUSINESS.secondaryPhones.map((phone) => (
                    <a key={phone.tel} href={telHref(phone.tel)} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-dark text-white font-semibold rounded-lg hover:bg-dark-light transition-colors text-sm">
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
