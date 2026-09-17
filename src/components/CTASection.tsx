import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { BUSINESS, telHref } from '../data/business';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden" aria-label="Emergency service">
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark-light to-dark" />
      <div className="absolute right-0 top-0 bottom-0 w-1/4">
        <svg viewBox="0 0 200 400" fill="none" className="h-full w-full opacity-10" aria-hidden="true">
          <path d="M200 0L0 400H200V0Z" fill="#E31E24" />
        </svg>
      </div>
      <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4 max-w-2xl">
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="flex-shrink-0 mt-1">
              <Phone size={32} className="text-primary" aria-hidden="true" />
            </motion.div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">Transformer Down?</h2>
              <p className="text-white/60 text-lg">We provide emergency service transformers to keep your operations running. Available for rapid deployment across Gujarat.</p>
            </div>
          </div>
          <a href={telHref(BUSINESS.primaryPhone)} className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold text-lg rounded hover:bg-primary-dark transition-all flex-shrink-0 shadow-lg shadow-primary/30">
            <Phone size={22} aria-hidden="true" /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
