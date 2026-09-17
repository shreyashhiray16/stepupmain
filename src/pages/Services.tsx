import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import ChecklistSection from '../components/ChecklistSection';
import CTASection from '../components/CTASection';
import { getEditableServicePillars } from '../data/contentStore';
import { PAGE_SEO } from '../data/seo';
import servicesHeroImage from '../assets/services-hero-transformer.jpg';
import { Users, Shield, Award, Clock, Zap, Radio, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const servicePillars = getEditableServicePillars();
  return (
    <>
      <SEO
        seo={PAGE_SEO.services}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
      />
      {/* Hero Section - Premium with Clear Transformer Image */}
      <section className="relative w-full overflow-hidden bg-black">
        {/* Background with image */}
        <div className="absolute inset-0">
          <img
            src={servicesHeroImage}
            alt="Power transformer at industrial electrical substation — Step-Up Energy Solutions Vapi"
            className="w-full h-full object-cover"
            width={1600}
            height={900}
            fetchPriority="high"
          />
          {/* Lighter gradient overlay - more transparent to show image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 via-black/30 to-black/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-[80vh] flex items-center py-20">
          <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-8">
            <div className="lg:max-w-2xl">
              {/* Label */}
              <ScrollReveal>
                <div className="mb-6">
                  <span className="font-heading text-xs font-bold tracking-widest uppercase text-primary">OUR SERVICES</span>
                  <div className="w-16 h-1.5 bg-primary mt-3" />
                </div>
              </ScrollReveal>

              {/* Heading - Compact */}
              <ScrollReveal>
                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
                  <span className="text-white block">Electrical</span>
                  <span className="text-primary block -mt-2">Services</span>
                </h1>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
                  From transformer repair and on-site testing to complete electrical installations, Step-Up Energy Solutions delivers reliable, government-approved services across Gujarat.
                </p>
              </ScrollReveal>

              {/* Feature Cards - 2x2 Grid Compact */}
              <ScrollReveal>
                <div className="grid grid-cols-2 gap-8 mb-10 max-w-md">
                  {[
                    { icon: Users, label: 'Expert\nProfessionals' },
                    { icon: Shield, label: 'Safe & Reliable\nSolutions' },
                    { icon: Lock, label: 'Govt. Approved\n& Compliant' },
                    { icon: Clock, label: 'On-Time\nEvery Time' },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center mb-3">
                        <item.icon size={32} className="text-primary" strokeWidth={1.5} />
                      </div>
                      <p className="text-white text-xs font-semibold whitespace-pre-line leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* CTA Button */}
              <ScrollReveal>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold text-base rounded-lg hover:bg-red-600 transition-colors shadow-xl shadow-primary/60"
                >
                  <Zap size={18} />
                  Get a Quote
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Separate Section */}
      <section className="relative bg-gradient-to-b from-black to-black/95 py-12 lg:py-16 border-t border-primary/20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { icon: Zap, value: '1000+', label: 'Transformers\nServiced' },
              { icon: Users, value: '500+', label: 'Happy\nClients' },
              { icon: Award, value: '15+', label: 'Years of Market\nExperience' },
              { icon: Radio, value: '24/7', label: 'Support\nAvailable' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <stat.icon size={28} className="text-primary mb-3" strokeWidth={1.5} />
                <div className="font-heading text-2xl lg:text-3xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-gray-400 text-xs lg:text-sm whitespace-pre-line leading-tight font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pillars Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="font-heading text-xs font-semibold tracking-[0.2em] uppercase text-primary">Service Areas</span>
              <div className="w-12 h-0.5 bg-primary mx-auto mt-2 mb-6" />
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
                Six Pillars of <span className="text-primary">Expertise</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {servicePillars.map((pillar, index) => (
              <ServiceCard key={pillar.slug} slug={pillar.slug} title={pillar.title} description={pillar.shortDescription} image={pillar.image} icon={pillar.icon} iconImage={pillar.iconImage} index={index} />
            ))}
          </div>
        </div>
      </section>
      <ChecklistSection />
      <CTASection />
    </>
  );
}
