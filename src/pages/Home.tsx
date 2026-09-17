import { Link } from 'react-router-dom';
import { ClipboardCheck, Search, Wrench, BadgeCheck, Landmark, ArrowRight, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ChecklistSection from '../components/ChecklistSection';
import IndustriesSection from '../components/IndustriesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import CTASection from '../components/CTASection';
import ScrollReveal from '../components/ScrollReveal';
import { getEditableServicePillars } from '../data/contentStore';
import { PAGE_SEO } from '../data/seo';
import { BUSINESS, telHref } from '../data/business';

const processSteps = [
  {
    icon: ClipboardCheck,
    step: '01',
    title: 'Initial Contact',
    description: 'Reach out via phone or email. We respond quickly and prioritize urgent breakdown support when downtime matters most.',
    image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Search,
    step: '02',
    title: 'Site Assessment',
    description: 'Our team inspects the equipment and site conditions to define the scope, risk, and precise service requirements.',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Wrench,
    step: '03',
    title: 'Service Execution',
    description: 'Skilled technicians perform on-site or workshop repair, testing, installation, and maintenance using approved methods.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: BadgeCheck,
    step: '04',
    title: 'Testing & Certification',
    description: 'Every job is inspected, tested, documented, and certified to confirm safety, compliance, and reliable long-term operation.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80',
  },
];

const marqueeItems = [
  'Transformer Repair', 'Oil Filtration', 'OLTC Servicing', 'Panel Maintenance',
  'Earthing Installation', 'Cable Jointing', 'Power Passing', 'ERDA Compliance',
  '11 KV to 220 KV', '100 KVA to 100 MVA', 'Emergency Supply', 'On-Site Testing',
];

export default function Home() {
  const servicePillars = getEditableServicePillars();
  return (
    <>
      <SEO seo={PAGE_SEO.home} includeWebSite />
      <Hero />

      {/* Scrolling capability marquee */}
      <div className="bg-dark py-3 overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-3 text-sm font-medium text-white/70">
              <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Local intro — WHO / WHAT / WHERE */}
      <section className="py-14 bg-white border-b border-gray-border" aria-label="About Step-Up Energy Solutions">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-4">
                Professional Electrical Solutions in Vapi &amp; Valsad
              </h2>
              <p className="text-steel leading-relaxed mb-6">
                <strong className="text-dark">{BUSINESS.name}</strong> is a government-approved electrical contractor based in Vapi GIDC, Gujarat. We provide transformer repair, testing, and maintenance, switchgear and panel services, wiring and ERDA compliance, earthing and cabling, and old transformer buy &amp; sell — serving manufacturing plants and industrial units across Vapi, Valsad, Umbergaon, Daman, Silvassa, and Dadra.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                Explore all services <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16 px-4 text-center bg-white" aria-label="Our services">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="services-section-header text-center max-w-2xl mx-auto mb-12 lg:mb-14">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-50 text-orange-500 border border-orange-100">
                <Zap size={14} fill="currentColor" className="text-red-400" />
                Our Services
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
                Comprehensive <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">Electrical Solutions</span>
              </h2>
              <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed">End-to-end equipment reliability and seamless power management for modern infrastructure.</p>
            </div>
          </ScrollReveal>
          <div className="services-cards-wrapper relative">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
            {servicePillars.map((pillar, index) => (
              <ServiceCard key={pillar.slug} slug={pillar.slug} title={pillar.title} description={pillar.shortDescription} image={pillar.image} icon={pillar.icon} iconImage={pillar.iconImage} index={index} />
            ))}
            </div>
          </div>
          <div className="flex items-center justify-center mt-9">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(229,37,33,0.25)] transition-all hover:gap-3 hover:bg-primary/90"
            >
              View Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work - Process */}
      <section className="process-section py-20 lg:py-28 bg-gray-bg" aria-label="Our process">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="badge font-heading text-xs font-semibold tracking-[0.2em] uppercase text-primary">Our Process</span>
              <div className="w-12 h-0.5 bg-primary mx-auto mt-2 mb-4" />
              <h2 className="section-title font-heading text-3xl md:text-4xl font-bold text-dark">How We Work</h2>
              <p className="section-subtitle text-steel mt-4 max-w-xl mx-auto">A streamlined process from initial contact to certified completion.</p>
            </div>
          </ScrollReveal>

          <div className="cards-wrapper grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.1}>
                <div className="process-card group relative flex h-full flex-col overflow-hidden rounded-[18px] border border-slate-100 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(229,37,33,0.12)] hover:border-red-200">
                  <div className="card-image-wrap relative h-[180px] overflow-hidden">
                    <img src={step.image} alt={`${step.title} — Step-Up Energy Solutions electrical service process`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" width={900} height={180} />
                    <span className="step-badge absolute right-3.5 top-3.5 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-primary shadow-sm backdrop-blur-sm">
                      {step.step}
                    </span>
                  </div>

                  <div className="card-content flex flex-1 flex-col items-center px-5 pb-6 pt-0 text-center">
                    <div className="icon-wrapper -mt-6 mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-primary shadow-[0_0_0_5px_#ffffff] transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <step.icon size={20} strokeWidth={2.2} />
                    </div>
                    <h3 className="card-title mb-2 font-heading text-[1.12rem] font-bold text-slate-900">{step.title}</h3>
                    <p className="card-text text-[0.88rem] leading-[1.6] text-slate-500">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ChecklistSection />

      <IndustriesSection />

      <WhyChooseUs />

      {/* Service area highlight */}
      <section className="py-16 bg-gray-bg border-y border-gray-border">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Landmark size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-dark">Serving GIDC Vapi & Gujarat</h3>
                  <p className="text-steel text-sm">On-site services available across industrial estates in Gujarat</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a href={telHref(BUSINESS.primaryPhone)} className="px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-primary-dark transition-colors text-sm">
                  Call: {BUSINESS.primaryPhoneDisplay}
                </a>
                <Link to="/contact" className="px-6 py-3 bg-dark text-white font-semibold rounded hover:bg-dark-light transition-colors text-sm">
                  Get Directions
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
