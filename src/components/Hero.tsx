import { Phone, Zap, Shield, Activity, Clock3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { BUSINESS, telHref } from '../data/business';
import heroPoster from '../assets/hero.png';

export default function Hero() {
  return (
    <section className="hero-section relative flex items-center overflow-hidden" aria-label="Hero">
      {/* Static poster on mobile to reduce data + improve LCP; video on md+ */}
      <img
        src={heroPoster}
        alt=""
        aria-hidden="true"
        className="hero-video absolute inset-0 h-full w-full object-cover md:hidden"
        width={1280}
        height={720}
      />
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover hidden md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={heroPoster}
        aria-hidden="true"
      >
        <source src="/videos/transaformwr.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />
      <div className="hero-grid-pattern absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 lg:px-8 py-20 lg:py-24 w-full">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hero-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-5"
          >
            Electrical &amp; Transformer
            <br />
            Services in <span className="text-primary">Vapi</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
              {BUSINESS.name} — government-approved electrical contractor for transformer repair, testing, maintenance, switchgear panels, wiring, and earthing across Vapi, Valsad, and Gujarat industrial areas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href={telHref(BUSINESS.primaryPhone)}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
            >
              <Phone size={18} />
              Request a Technical Quote
            </a>
            <a
              href={BUSINESS.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border border-white/25 text-white font-semibold rounded hover:bg-white/10 transition-all"
            >
              WhatsApp Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hero-metrics flex flex-wrap gap-8"
          >
            {[
              { icon: Zap, label: '100 kVA–100 MVA', sublabel: 'Transformer Capacity' },
              { icon: Shield, label: '11 kV–220 kV', sublabel: 'Voltage Classes' },
              { icon: Activity, label: 'Licensed Electrical', sublabel: 'Compliance & Expertise' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="metric-icon w-10 h-10 flex items-center justify-center">
                  <stat.icon size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="hero-cta-note mt-5 flex items-center gap-2 text-xs text-gray-400">
            <Clock3 size={14} /> Rapid response for industrial and commercial requirements in Vapi GIDC.
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
}
