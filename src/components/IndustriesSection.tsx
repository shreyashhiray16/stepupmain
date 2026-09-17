import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Building2, Settings2, FlaskConical, Hospital, Landmark } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import industriesHeroImage from '../assets/industries-refinery-sunset-hero.jpg';

const industries = [
  { icon: Factory, name: 'Manufacturing Plants' },
  { icon: Building2, name: 'Commercial Complexes' },
  { icon: Settings2, name: 'GIDC Industrial Units' },
  { icon: FlaskConical, name: 'Chemical & Pharma' },
  { icon: Hospital, name: 'Healthcare Facilities' },
  { icon: Landmark, name: 'Government Projects' },
];

export default function IndustriesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black" aria-label="Industries we serve">
      {/* Background with image */}
      <div className="absolute inset-0">
        <img
          src={industriesHeroImage}
          alt="Industrial refinery at sunset representing the sectors served by Step-Up Energy Solutions in Vapi Gujarat"
          className="w-full h-full object-cover object-[62%_center] sm:object-[68%_center]"
          loading="lazy"
          width={2000}
          height={845}
        />
        {/* Premium dark navy/black gradient overlay - strong on the left for text readability, fading out to reveal the sunset on the right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #05070d 0%, #06090f 30%, #070a13 42%, rgba(8,11,20,0.84) 50%, rgba(9,13,23,0.59) 58%, rgba(9,13,23,0.35) 66%, rgba(9,13,23,0.18) 74%, rgba(9,13,23,0.05) 84%, transparent 92%)',
          }}
        />
        {/* Subtle bottom-to-top vignette for extra depth and premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[650px] lg:min-h-[720px] flex flex-col justify-center py-16">
        <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-8 flex-1 flex items-center">
          <div className="lg:max-w-xl">
            {/* Label */}
            <ScrollReveal>
              <div className="mb-5">
                <span className="font-heading text-xs font-bold tracking-[0.2em] uppercase">
                  <span className="text-primary">WHAT</span>{' '}
                  <span className="text-white">WE SERVE</span>
                </span>
                <div className="flex gap-1.5 mt-2.5">
                  <div className="w-9 h-[3px] bg-primary" />
                  <div className="w-5 h-[3px] bg-white/40" />
                </div>
              </div>
            </ScrollReveal>

            {/* Heading */}
            <ScrollReveal>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-5">
                <span className="text-white block">Industries &amp;</span>
                <span className="text-primary block -mt-1">Sectors</span>
              </h2>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal>
              <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-7 max-w-md">
                Based in Vapi GIDC, we serve a diverse range of industrial and
                commercial sectors with reliable, scalable, and innovative
                solutions for manufacturing, infrastructure, energy, and more.
              </p>
            </ScrollReveal>

            {/* Industries Grid */}
            <ScrollReveal>
              <div className="grid grid-cols-3 gap-2.5 mb-7 max-w-lg">
                {industries.map((industry) => (
                  <div
                    key={industry.name}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-md bg-[#0b0f1a]/60 backdrop-blur-md border border-white/10 shadow-lg shadow-black/30 hover:border-primary/50 hover:bg-[#0b0f1a]/75 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-md bg-[#3d101b]/90 flex items-center justify-center">
                      <industry.icon size={16} className="text-white" />
                    </div>
                    <span className="text-white text-xs font-semibold leading-tight">
                      {industry.name}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA Button */}
            <ScrollReveal>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-bold rounded-md hover:bg-red-600 transition-colors shadow-xl shadow-primary/40"
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Tagline */}
        <ScrollReveal>
          <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <span className="w-5 h-[2px] bg-primary" />
              <span className="text-gray-400 text-[11px] font-semibold tracking-[0.25em] uppercase">
                Building a Stronger Tomorrow
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
