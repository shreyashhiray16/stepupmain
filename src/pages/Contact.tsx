import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Shield, ShieldCheck, Headphones, AlertCircle, Wrench, Cog, Settings, Leaf, FileCheck, Zap as ZapCircle, RotateCw, Cog as GearIcon, MessageCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import ContactForm from '../components/ContactForm';
import MapEmbed from '../components/MapEmbed';
import ServiceAreas from '../components/ServiceAreas';
import { PAGE_SEO } from '../data/seo';
import { BUSINESS, telHref, mailtoHref } from '../data/business';
import transformerServicesIcon from '../assets/service-icons/transformer-services.png';
import switchgearPanelsIcon from '../assets/service-icons/switchgear-panels.png';
import wiringComplianceIcon from '../assets/service-icons/wiring-compliance.png';
import earthingCablingIcon from '../assets/service-icons/earthing-cabling.png';
import oldTransformerBuySellIcon from '../assets/service-icons/old-transformer-buy-sell.png';
import electricalServicesIcon from '../assets/service-icons/electrical-services.png';
import contactHeroImg from '../assets/transformer-services-hero.jpg';

const serviceLinks = [
  { icon: ZapCircle, iconImage: transformerServicesIcon, title: 'Transformer Services', desc: 'Repair · Testing · Maintenance', slug: 'transformer-services' },
  { icon: Wrench, iconImage: switchgearPanelsIcon, title: 'Switchgear & Panels', desc: 'ACB · VCB · HT · LT Panels', slug: 'switchgear-panels' },
  { icon: FileCheck, iconImage: wiringComplianceIcon, title: 'Wiring & Compliance', desc: 'Installation · ERDA Certification', slug: 'wiring-compliance' },
  { icon: RotateCw, iconImage: earthingCablingIcon, title: 'Earthing & Cabling', desc: 'Earthing · Cable Laying · Jointing', slug: 'earthing-cabling' },
  { icon: GearIcon, iconImage: oldTransformerBuySellIcon, title: 'Old Transformer Buy & Sell', desc: 'Used · Scrap · Valuation', slug: 'old-transformer-buy-sell' },
  { icon: Cog, iconImage: electricalServicesIcon, title: 'Electrical Services', desc: 'Installation · Testing · Maintenance', slug: 'electrical-services' },
];

export default function Contact() {
  return (
    <>
      <SEO
        seo={PAGE_SEO.contact}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />

      <section id="contact" className="relative bg-white pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        {/* subtle diagonal backdrop */}
        <div className="absolute inset-0 hidden lg:block pointer-events-none">
          <div className="absolute top-0 right-[38%] w-[45%] h-full bg-gray-bg [clip-path:polygon(20%_0,100%_0,80%_100%,0_100%)]" />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="font-heading text-xs font-semibold tracking-[0.2em] uppercase text-primary">Contact Us</span>
                <div className="w-12 h-0.5 bg-primary mt-3 mb-6" />
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
                  Get in <span className="bg-gradient-to-r from-dark to-primary bg-clip-text text-transparent">Touch</span>
                </h1>
                <p className="text-steel text-lg leading-relaxed mb-8 max-w-xl">
                  Need a quotation, transformer service, emergency electrical support, or technical consultation? Our team in Vapi GIDC is ready to help.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-10">
                  {[
                    { icon: Zap, title: 'Fast Response', desc: 'Quick turnaround for all enquiries' },
                    { icon: Shield, title: 'Expert Team', desc: 'Skilled & certified professionals' },
                    { icon: Headphones, title: 'Emergency Support', desc: 'Rapid transformer assistance' },
                  ].map((item, i) => (
                    <div key={i} className="text-center bg-white rounded-xl shadow-md border border-gray-100 p-5">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <item.icon size={22} className="text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-dark text-sm mb-1">{item.title}</h3>
                      <p className="text-steel text-xs">{item.desc}</p>
                      <div className="w-6 h-0.5 bg-primary mx-auto mt-3" />
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <a href="#quote" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-shadow">
                    Contact Now <ArrowRight size={18} />
                  </a>
                  <div className="flex items-center gap-3 text-steel text-xs font-semibold uppercase tracking-wider">
                    <span className="w-8 h-px bg-gray-300" /> We Are Here to Help
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm">
                  {[
                    { icon: ShieldCheck, title: 'Trusted Support', desc: 'For Industrial Operations' },
                    { icon: Settings, title: 'Reliable Solutions', desc: 'Across Vapi GIDC' },
                    { icon: Leaf, title: 'A Brighter Tomorrow', desc: '' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 pr-6 border-r last:border-r-0 border-gray-200">
                      <item.icon size={20} className="text-dark shrink-0" />
                      <div>
                        <p className="font-semibold text-dark leading-tight">{item.title}</p>
                        {item.desc && <p className="text-steel text-xs">{item.desc}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px] lg:h-[520px]">
                <img src={contactHeroImg} alt="Electrical engineer at substation" className="w-full h-full object-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-transparent" />
                <span className="absolute top-6 right-6 font-heading italic text-white text-lg text-right leading-tight drop-shadow-lg">
                  Reliable<br />Electrical<br />Solutions
                </span>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-primary-dark/90 to-primary/70 px-6 py-4">
                  <p className="text-white font-heading font-bold uppercase tracking-wide text-sm">Safe · Reliable · Sustainable</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="quote" className="bg-dark py-20 lg:py-24">
        <div className="max-w-[900px] mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="bg-dark/60 backdrop-blur-md border border-white/15 rounded-2xl p-10 shadow-2xl">
              <h2 className="font-heading text-3xl font-bold text-white mb-8 text-center">Request a <span className="text-primary">Quote</span></h2>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-dark border-b border-primary/20 py-6">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <AlertCircle size={28} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-bold text-white text-lg mb-1">Emergency Transformer Support</h3>
                <p className="text-white/70">Power failure or transformer issue? Get in touch with our team.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={telHref(BUSINESS.primaryPhone)} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors whitespace-nowrap">
                Call Now →
              </a>
              <a href={BUSINESS.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366]/15 text-[#25D366] font-semibold rounded-lg border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white transition-colors whitespace-nowrap">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Phone, title: 'Call Our Team', tel: BUSINESS.primaryPhone, display: BUSINESS.primaryPhoneDisplay, time: BUSINESS.hours.display },
              { icon: Mail, title: 'Email Us', email: BUSINESS.primaryEmail, time: 'We reply within 24 hours' },
              { icon: MapPin, title: 'Visit Our Office', addr: BUSINESS.address.full, time: BUSINESS.hours.display },
              { icon: Clock, title: 'Working Hours', hours: BUSINESS.hours.weekdays, extended: '9:00 AM – 7:00 PM', sunday: BUSINESS.hours.sunday },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <card.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-dark text-lg mb-3">{card.title}</h3>
                  {'tel' in card && card.tel && (
                    <>
                      <a href={telHref(card.tel)} className="text-primary font-semibold text-base block mb-2 hover:text-primary-dark">{card.display}</a>
                      <p className="text-steel text-xs">{card.time}</p>
                    </>
                  )}
                  {'email' in card && card.email && (
                    <>
                      <a href={mailtoHref(card.email)} className="text-primary font-semibold text-base block mb-2 hover:text-primary-dark break-all">{card.email}</a>
                      <p className="text-steel text-xs">{card.time}</p>
                    </>
                  )}
                  {'addr' in card && (
                    <>
                      <a
                        href={BUSINESS.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary font-semibold text-base block mb-2 hover:text-primary-dark hover:underline"
                      >
                        {card.addr}
                      </a>
                      <p className="text-steel text-xs">{card.time}</p>
                    </>
                  )}
                  {'hours' in card && (
                    <>
                      <p className="text-dark font-semibold text-base block mb-1">{card.hours} <span className="text-primary">{card.extended}</span></p>
                      <p className="text-steel text-xs">{card.sunday}</p>
                    </>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-bg">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="bg-dark rounded-2xl p-8 h-full flex flex-col justify-center">
                <h2 className="font-heading text-3xl font-bold text-white mb-2">
                  Contact <span className="text-primary">Details</span>
                </h2>
                <p className="text-white/70 mb-8">Reach us for transformer services, electrical work, and quotes across Vapi and Gujarat.</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Address</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{BUSINESS.name}, {BUSINESS.address.full}</p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Phone</h3>
                    <a href={telHref(BUSINESS.primaryPhone)} className="text-white font-semibold text-lg hover:text-primary transition-colors block">{BUSINESS.primaryPhoneDisplay}</a>
                    {BUSINESS.secondaryPhones.map((phone) => (
                      <a key={phone.tel} href={telHref(phone.tel)} className="text-white/70 text-sm hover:text-primary transition-colors block mt-1">{phone.display}</a>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Email</h3>
                    <a href={mailtoHref(BUSINESS.primaryEmail)} className="text-white font-semibold text-base hover:text-primary transition-colors break-all">{BUSINESS.primaryEmail}</a>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Service Areas</h3>
                    <ServiceAreas />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl h-full min-h-[400px]">
                <MapEmbed />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
                What Can We <span className="text-primary">Help You With?</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceLinks.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 0.1}>
                <Link
                  to={`/services/${service.slug}`}
                  className="block p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/40 hover:shadow-xl transition-all text-center group"
                >
                  <div className="w-20 h-20 rounded-full bg-red-100/60 flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:bg-red-100/80 transition-all overflow-hidden">
                    {service.iconImage ? (
                      <img
                        src={service.iconImage}
                        alt=""
                        aria-hidden="true"
                        className="h-16 w-16 rounded-full object-cover"
                        width={64}
                        height={64}
                        loading="lazy"
                      />
                    ) : (
                      <service.icon size={40} className="text-primary stroke-[1.5]" />
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-dark mb-3 text-base group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-16 lg:py-20 border-y border-primary/20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '1000+', label: 'Transformers Serviced' },
              { value: '500+', label: 'Happy Clients' },
              { value: '15+', label: 'Years Experience' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div>
                  <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark relative overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark to-dark/80" />
          <img
            src="https://images.unsplash.com/photo-1461749280684-ddefd3519c7d?w=1200&h=600&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-15"
            loading="lazy"
            width={1200}
            height={600}
            aria-hidden="true"
          />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Have an <span className="text-primary">Electrical</span> Requirement?
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
                From consultation to completion — we deliver safe, efficient, and reliable electrical solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">
                  Get a Quote →
                </a>
                <a href={telHref(BUSINESS.primaryPhone)} className="inline-flex items-center gap-2 px-8 py-4 border border-primary/30 text-white font-semibold rounded-lg hover:border-primary hover:bg-primary/10 transition-colors">
                  Call Us Now →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
