import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight, ShieldCheck, Award, Headphones, Users, Wrench, Search, BadgeCheck } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import ServiceFAQ from '../components/ServiceFAQ';
import ServiceAreas from '../components/ServiceAreas';
import RelatedServices from '../components/RelatedServices';
import ScrollReveal from '../components/ScrollReveal';
import CTASection from '../components/CTASection';
import { getEditableServicePillars } from '../data/contentStore';
import { getServiceSEO } from '../data/seo';
import { getServiceContent } from '../data/serviceContent';
import { BUSINESS, telHref } from '../data/business';

const heroStats = [
  { icon: ShieldCheck, value: '100+', label: 'Projects Completed' },
  { icon: Users, value: '50+', label: 'Happy Clients' },
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Headphones, value: '24/7', label: 'Support' },
];

const processIcons = [Search, Wrench, BadgeCheck, ShieldCheck];

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const servicePillars = getEditableServicePillars();
  const service = slug ? servicePillars.find((pillar) => pillar.slug === slug) : undefined;
  const seo = slug ? getServiceSEO(slug) : undefined;
  const extras = slug ? getServiceContent(slug) : undefined;

  if (!service || !seo) return <Navigate to="/services" replace />;

  const currentIndex = servicePillars.findIndex((p) => p.slug === slug);
  const nextPillar = servicePillars[(currentIndex + 1) % servicePillars.length];
  const isElectricalServicesHero = service.slug === 'electrical-services';

  const titleWords = service.title.split(' ');
  const titleLead = titleWords.slice(0, -1).join(' ');
  const titleLast = titleWords[titleWords.length - 1];

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.title, path: `/services/${slug}` },
  ];

  return (
    <>
      <SEO
        seo={seo}
        breadcrumbs={breadcrumbs}
        serviceName={service.title}
        faqs={extras?.faqs}
      />

      <section className={`relative overflow-hidden bg-dark ${isElectricalServicesHero ? 'aspect-[21/8] min-h-[420px] lg:min-h-[600px]' : 'pt-32 pb-16 lg:pt-40 lg:pb-20'}`}>
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={`${service.title} — Step-Up Energy Solutions, Vapi Gujarat`}
            className={`absolute inset-0 h-full w-full object-cover ${isElectricalServicesHero ? 'object-center' : 'lg:left-auto lg:right-0 lg:w-[62%]'}`}
            width={1200}
            height={800}
            fetchPriority="high"
          />
          {!isElectricalServicesHero && <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/10 lg:to-transparent" />}
          {!isElectricalServicesHero && <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />}
          {service.heroBadges && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          )}
        </div>

        {service.heroBadges && (
          <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-10 flex-col gap-4">
            {service.heroBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-3 px-5 py-3 bg-dark/70 backdrop-blur-sm border border-white/10 rounded-lg"
              >
                <span className="w-9 h-9 rounded-full border border-primary flex items-center justify-center flex-shrink-0">
                  <badge.icon size={18} className="text-primary" />
                </span>
                <span className="text-white text-sm font-medium leading-snug">{badge.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className={`relative z-10 max-w-[1280px] mx-auto px-4 lg:px-8 ${isElectricalServicesHero ? 'sr-only' : ''}`}>
          <ScrollReveal>
            <Breadcrumbs items={breadcrumbs} className="mb-6" />

            <Link to="/services" className="flex items-center gap-2 text-white/50 hover:text-primary text-sm mb-6 transition-colors w-fit">
              <ArrowLeft size={16} /> All Services
            </Link>

            <span className="flex items-center gap-2 font-heading text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              <span className="w-4 h-px bg-primary" /> Service Detail
            </span>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6 max-w-2xl">
              <span className="text-white">{titleLead}{titleLead ? ' ' : ''}</span>
              <span className="text-primary">{titleLast}</span>
            </h1>

            <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed mb-10">
              {service.shortDescription}
            </p>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-6 mb-10 max-w-xl">
              {service.heroFeatures.map((feature) => (
                <div key={feature.label} className="flex flex-col items-start gap-3 max-w-[150px]">
                  <span className="w-12 h-12 rounded-full border border-primary flex items-center justify-center">
                    <feature.icon size={20} className="text-white" />
                  </span>
                  <span className="text-white text-sm leading-snug">{feature.label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="relative z-20 inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 mb-12 cursor-pointer"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>

            <div className="max-w-3xl rounded-xl border border-white/10 bg-dark/60 backdrop-blur-sm px-6 py-6 sm:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:divide-x sm:divide-white/10">
                {(service.heroStats ?? heroStats).map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3 sm:pl-6 first:pl-0">
                    <stat.icon size={22} className="text-primary flex-shrink-0" />
                    <div>
                      <div className="font-heading text-lg md:text-xl font-bold text-white leading-none mb-1">{stat.value}</div>
                      <div className="text-white/50 text-xs leading-tight">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              <ScrollReveal>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-6">Overview</h2>
                <p className="text-steel leading-relaxed mb-10">{service.longDescription}</p>
                <h3 className="font-heading text-xl font-bold text-dark mb-6">What We Provide</h3>
                <div className="space-y-4">
                  {service.items.map((item) => (
                    <div key={item.id} className="flex gap-4 items-start p-5 bg-gray-bg rounded-xl border border-gray-border hover:border-primary/30 transition-colors">
                      <CheckCircle size={22} className="text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-heading font-bold text-dark mb-1">{item.title}</h4>
                        <p className="text-steel text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {extras?.applications && (
                <ScrollReveal>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-6">Applications</h2>
                  <ul className="space-y-3">
                    {extras.applications.map((app) => (
                      <li key={app} className="flex gap-3 text-steel text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              )}

              {extras?.process && (
                <ScrollReveal>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-8">Our Process</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {extras.process.map((step, index) => {
                      const Icon = processIcons[index] ?? ShieldCheck;
                      return (
                        <div key={step.title} className="p-6 bg-gray-bg rounded-xl border border-gray-border">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Icon size={18} className="text-primary" />
                            </span>
                            <span className="font-heading font-bold text-dark">{step.title}</span>
                          </div>
                          <p className="text-steel text-sm leading-relaxed">{step.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </ScrollReveal>
              )}

              {extras?.benefits && (
                <ScrollReveal>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-6">Benefits</h2>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {extras.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-3 p-4 bg-gray-bg rounded-lg border border-gray-border text-sm text-steel">
                        <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              )}

              {extras?.whyChoose && (
                <ScrollReveal>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-6">Why Choose Step-Up</h2>
                  <ul className="space-y-3">
                    {extras.whyChoose.map((reason) => (
                      <li key={reason} className="flex gap-3 text-steel text-sm leading-relaxed">
                        <ShieldCheck size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              )}

              <ScrollReveal>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-6">Service Areas</h2>
                <p className="text-steel text-sm mb-6 leading-relaxed">
                  On-site services available across Vapi GIDC and surrounding industrial areas in Gujarat.
                </p>
                <ServiceAreas />
              </ScrollReveal>

              {extras?.faqs && (
                <ScrollReveal>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-6">Frequently Asked Questions</h2>
                  <ServiceFAQ faqs={extras.faqs} />
                </ScrollReveal>
              )}

              {extras?.relatedSlugs && (
                <ScrollReveal>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-6">Related Services</h2>
                  <RelatedServices currentSlug={slug!} relatedSlugs={extras.relatedSlugs} />
                </ScrollReveal>
              )}
            </div>

            <div className="lg:col-span-1">
              <ScrollReveal direction="right">
                <div className="sticky top-28 space-y-8">
                  <div className="bg-dark rounded-xl p-8">
                    <h3 className="font-heading text-xl font-bold text-white mb-4">Need This Service?</h3>
                    <p className="text-white/60 text-sm mb-6">Contact us for a quote or emergency service.</p>
                    <div className="space-y-3">
                      <a href={telHref(BUSINESS.primaryPhone)} className="block w-full text-center px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-primary-dark transition-colors">
                        Call: {BUSINESS.primaryPhoneDisplay}
                      </a>
                      <Link to="/contact" className="block w-full text-center px-6 py-3 bg-white/10 text-white font-semibold rounded border border-white/20 hover:bg-white/20 transition-colors">
                        Request a Quote
                      </Link>
                      <a href={BUSINESS.whatsappUrl} target="_blank" rel="noreferrer" className="block w-full text-center px-6 py-3 bg-[#25D366]/15 text-[#25D366] font-semibold rounded border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white transition-colors">
                        WhatsApp Us
                      </a>
                    </div>
                  </div>
                  <div className="bg-gray-bg rounded-xl p-8 border border-gray-border">
                    <h3 className="font-heading text-lg font-bold text-dark mb-4">Other Services</h3>
                    <div className="space-y-2">
                      {servicePillars.filter((p) => p.slug !== slug).map((pillar) => (
                        <Link key={pillar.slug} to={`/services/${pillar.slug}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-white transition-colors group">
                          <span className="text-sm text-dark group-hover:text-primary transition-colors">{pillar.title}</span>
                          <ArrowRight size={14} className="text-steel group-hover:text-primary transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-bg border-y border-gray-border">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-steel text-sm">Next Service</span>
                <h3 className="font-heading text-2xl font-bold text-dark">{nextPillar.title}</h3>
              </div>
              <Link to={`/services/${nextPillar.slug}`} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-primary-dark transition-colors">
                View Service <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
