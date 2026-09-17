import { motion } from 'framer-motion';
import { BUSINESS } from '../data/business';

type FloatingButtonProps = {
  href: string;
  label: string;
  ariaLabel: string;
  delay: number;
  ringColor: string;
  glow: string;
  background: string;
  children: React.ReactNode;
};

function FloatingButton({
  href,
  label,
  ariaLabel,
  delay,
  ringColor,
  glow,
  background,
  children,
}: FloatingButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className="group relative flex items-center"
      initial={{ opacity: 0, scale: 0.4, x: 24 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ delay, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
    >
      <span
        className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-dark px-3.5 py-2 font-[Barlow_Condensed] text-[13px] font-semibold uppercase tracking-wide text-white opacity-0 shadow-lg shadow-black/20 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2"
      >
        {label}
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-dark" />
      </span>

      <span
        className="absolute inset-0 rounded-full animate-ping opacity-40"
        style={{ backgroundColor: ringColor, animationDuration: '2.2s' }}
      />

      <span
        className="absolute -inset-1 rounded-full opacity-60 blur-md transition-opacity duration-300 group-hover:opacity-90"
        style={{ backgroundColor: ringColor }}
      />

      <span
        className="relative flex h-14 w-14 items-center justify-center rounded-full text-white ring-2 ring-white/70 transition-transform duration-300"
        style={{ background, boxShadow: `0 10px 30px ${glow}, 0 2px 8px rgba(0,0,0,0.25)` }}
      >
        {children}
      </span>
    </motion.a>
  );
}

export default function FloatingSocialButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-4 sm:bottom-6 sm:right-6">
      <FloatingButton
        href={BUSINESS.instagramUrl}
        label="Follow us"
        ariaLabel="Follow Step-Up Energy Solutions on Instagram"
        delay={0.5}
        ringColor="#E4405F"
        glow="rgba(228,64,95,0.45)"
        background="radial-gradient(circle at 30% 110%, #FEDA77 0%, #F58529 25%, #DD2A7B 45%, #8134AF 68%, #515BD4 100%)"
      >
        <svg aria-hidden="true" width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm4.5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
        </svg>
      </FloatingButton>

      <FloatingButton
        href={BUSINESS.whatsappUrl}
        label="Chat with us"
        ariaLabel="Chat with Step-Up Energy Solutions on WhatsApp"
        delay={0.7}
        ringColor="#25D366"
        glow="rgba(37,211,102,0.5)"
        background="linear-gradient(145deg, #34E37A 0%, #25D366 55%, #128C4A 100%)"
      >
        <svg aria-hidden="true" width="27" height="27" viewBox="0 0 24 24" fill="currentColor" className="block shrink-0 translate-y-[0.5px]">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.005c5.46 0 9.9-4.45 9.9-9.92 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.26.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.55-3.7 8.25-8.25 8.25a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.55 3.71-8.25 8.26-8.25Zm-4.52 4.16c-.16 0-.42.06-.64.3-.22.25-.85.83-.85 2.02s.87 2.34 1 2.51c.12.16 1.68 2.69 4.15 3.67 2.06.81 2.48.65 2.93.61.45-.04 1.44-.59 1.64-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.47-.28-.25-.13-1.44-.71-1.67-.79-.22-.08-.39-.13-.55.12-.16.25-.63.79-.77.95-.14.16-.28.18-.53.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.23-1.45-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.28.37-.42.12-.14.16-.25.24-.4.08-.16.04-.31-.02-.44-.06-.12-.55-1.31-.75-1.8-.2-.47-.4-.4-.55-.4h-.47Z" />
        </svg>
      </FloatingButton>
    </div>
  );
}
