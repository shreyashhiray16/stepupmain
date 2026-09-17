import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import logoMark from '../assets/logo.png';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { getEditableServicePillars } from '../data/contentStore';
import { BUSINESS, telHref } from '../data/business';

export default function Navbar() {
  const servicePillars = getEditableServicePillars();
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`navbar ${isScrolled ? 'nav-scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-left">
          <Link to="/" className="brand" aria-label={`${BUSINESS.name} — Home`}>
            <div className="brand-logo">
              <img src={logoMark} alt="" aria-hidden="true" className="brand-logo-img" loading="eager" decoding="async" />
            </div>
            <div className="brand-text">
              <span className="brand-title">STEP-UP ENERGY</span>
              <span className="brand-subtitle">SOLUTIONS</span>
            </div>
          </Link>

          <div className="nav-divider" />

          <div className="govt-tag">
            <span className="pulse-indicator">
              <span className="pulse-ping" />
              <span className="pulse-dot" />
            </span>
            <span className="govt-label">Govt. Approved Electrical Contractor</span>
          </div>
        </div>

        <div className="nav-right hidden lg:flex">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services', hasDropdown: true },
            { name: 'Gallery', path: '/gallery' },
            { name: 'Reviews', path: '/reviews' },
            { name: 'Contact', path: '/contact' },
          ].map((link) => (
            <div key={link.name} className="relative">
              {link.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`nav-link flex items-center gap-1 ${
                      location.pathname.startsWith('/services') ? 'active' : ''
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-border rounded-lg shadow-xl overflow-hidden"
                      >
                        <div className="p-2">
                          {servicePillars.map((pillar) => (
                            <Link
                              key={pillar.slug}
                              to={`/services/${pillar.slug}`}
                              className="block px-4 py-3 text-sm text-dark/80 hover:text-primary hover:bg-gray-bg rounded-md transition-colors"
                            >
                              {pillar.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link to="/contact" className="btn-quote">Get a Quote</Link>
        </div>

        <button
          className="lg:hidden text-dark p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] z-50 bg-white shadow-2xl lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <Link to="/" aria-label="Home">
                  <Logo size={32} showText={false} />
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-dark p-2" aria-label="Close menu">
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-1">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Services', path: '/services', hasDropdown: true },
                  { name: 'Gallery', path: '/gallery' },
                  { name: 'Reviews', path: '/reviews' },
                  { name: 'Contact', path: '/contact' },
                ].map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 text-dark hover:text-primary transition-colors"
                        >
                          {link.name}
                          <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                              <div className="pl-4 space-y-1">
                                <Link to="/services" className="block px-4 py-2 text-sm text-steel hover:text-primary transition-colors">All Services</Link>
                                {servicePillars.map((pillar) => (
                                  <Link key={pillar.slug} to={`/services/${pillar.slug}`} className="block px-4 py-2 text-sm text-steel hover:text-primary transition-colors">
                                    {pillar.title}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className={`block px-4 py-3 transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-dark hover:text-primary'}`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-border space-y-4">
                <a href={telHref(BUSINESS.primaryPhone)} className="flex items-center gap-3 text-steel hover:text-primary transition-colors">
                  <Phone size={18} /> <span className="text-sm">{BUSINESS.primaryPhoneDisplay}</span>
                </a>
                {BUSINESS.secondaryPhones.map((phone) => (
                  <a key={phone.tel} href={telHref(phone.tel)} className="flex items-center gap-3 text-steel hover:text-primary transition-colors">
                    <Phone size={18} /> <span className="text-sm">{phone.display}</span>
                  </a>
                ))}
                <Link to="/contact" className="block w-full text-center px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-primary-dark transition-colors">
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
