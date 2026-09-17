import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp, MessageCircle, Camera } from 'lucide-react';
import Logo from './Logo';
import { getEditableServicePillars } from '../data/contentStore';
import { BUSINESS, telHref, mailtoHref } from '../data/business';

export default function Footer() {
  const servicePillars = getEditableServicePillars();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-dark text-white" role="contentinfo">
      <div className="h-1 bg-gradient-to-r from-primary via-maroon to-primary" />
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-1">
            <Logo size={40} showText={true} variant="light" className="mb-6" />
            <p className="text-white/60 text-sm leading-relaxed mb-2 font-semibold text-white/80">
              {BUSINESS.tagline}
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {BUSINESS.description}
            </p>
            <div className="flex items-start gap-2 text-white/60 text-sm">
              <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
              <span>{BUSINESS.address.full}</span>
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }, { name: 'Services', path: '/services' }, { name: 'Gallery', path: '/gallery' }, { name: 'Reviews', path: '/reviews' }, { name: 'Contact', path: '/contact' }].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/60 hover:text-primary text-sm transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {servicePillars.map((pillar) => (
                <li key={pillar.slug}>
                  <Link to={`/services/${pillar.slug}`} className="text-white/60 hover:text-primary text-sm transition-colors">{pillar.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-6">Service Areas</h3>
            <ul className="space-y-2">
              {BUSINESS.serviceAreas.map((area) => (
                <li key={area} className="text-white/60 text-sm">{area}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href={telHref(BUSINESS.primaryPhone)} className="flex items-center gap-3 text-white/60 hover:text-primary text-sm transition-colors">
                  <Phone size={16} className="text-primary flex-shrink-0" /> {BUSINESS.primaryPhoneDisplay}
                </a>
              </li>
              {BUSINESS.secondaryPhones.map((phone) => (
                <li key={phone.tel}>
                  <a href={telHref(phone.tel)} className="flex items-center gap-3 text-white/60 hover:text-primary text-sm transition-colors">
                    <Phone size={16} className="text-primary flex-shrink-0" /> {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={mailtoHref(BUSINESS.primaryEmail)} className="flex items-center gap-3 text-white/60 hover:text-primary text-sm transition-colors break-all">
                  <Mail size={16} className="text-primary flex-shrink-0" /> {BUSINESS.primaryEmail}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Step-Up Energy Solutions"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/15 px-3 py-2 text-sm font-semibold text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle size={17} /> WhatsApp
              </a>
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram @stepupenergysolutions"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white/75 transition-colors hover:bg-[#E4405F] hover:text-white"
              >
                <Camera size={17} /> @stepupenergysolutions
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">&copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-white/40 hover:text-primary text-xs transition-colors" aria-label="Back to top">
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
