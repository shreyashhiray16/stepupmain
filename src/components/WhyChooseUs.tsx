import { useEffect, useState, type CSSProperties } from 'react';
import { ShieldCheck, Zap, Droplets, Activity, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Differentiator {
  icon: typeof ShieldCheck;
  title: string;
  description: string;
  glowA: string;
  glowB: string;
}

const differentiators: Differentiator[] = [
  {
    icon: ShieldCheck,
    title: 'Govt. Approved Contractor',
    description: 'Licensed and government-approved electrical contractor ensuring all work meets regulatory standards and compliance requirements.',
    glowA: '#22d3ee',
    glowB: '#ef4444',
  },
  {
    icon: Zap,
    title: 'Emergency Transformer Service',
    description: 'Rapid emergency response with service-transformer supply to minimize downtime and keep your operations running.',
    glowA: '#facc15',
    glowB: '#ef4444',
  },
  {
    icon: Droplets,
    title: 'On-Site Oil Filtration & Testing',
    description: 'Complete on-site oil filtration, maintenance, and testing services for transformers up to 100 MVA \u2014 no need to move your equipment.',
    glowA: '#f59e0b',
    glowB: '#94a3b8',
  },
  {
    icon: Activity,
    title: '11 KV to 220 KV Range',
    description: 'Full coverage across voltage classes from 11 KV to 220 KV, handling power and distribution transformers from 100 KVA to 100 MVA.',
    glowA: '#ec4899',
    glowB: '#3b82f6',
  },
];

const sparks = [
  { x: '6%', y: '18%', d: '0s', s: 5 },
  { x: '92%', y: '12%', d: '0.6s', s: 4 },
  { x: '15%', y: '78%', d: '1.2s', s: 6 },
  { x: '48%', y: '10%', d: '1.8s', s: 4 },
  { x: '80%', y: '70%', d: '0.3s', s: 5 },
  { x: '35%', y: '85%', d: '2.1s', s: 4 },
  { x: '62%', y: '55%', d: '1.5s', s: 5 },
  { x: '4%', y: '50%', d: '0.9s', s: 4 },
];

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((current) => (current + 1) % differentiators.length);
    }, 2600);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="whychoose-section relative overflow-hidden py-20 lg:py-28 bg-white" aria-label="Why choose us">
      <div className="whychoose-bg" aria-hidden="true">
        {sparks.map((spark, i) => (
          <span
            key={i}
            className="whychoose-spark"
            style={{ '--x': spark.x, '--y': spark.y, '--d': spark.d, '--s': `${spark.s}px` } as CSSProperties}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="font-heading text-xs font-semibold tracking-[0.2em] uppercase text-primary">Why Choose Us</span>
            <div className="w-12 h-0.5 bg-primary mx-auto mt-2 mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">Why Step-Up Energy Solutions</h2>
          </div>
        </ScrollReveal>

        <div className="whychoose-grid relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => {
            const isActive = index === active;
            return (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div
                  className={`choose-card group relative text-center p-8 rounded-xl h-full border transition-all duration-500 ease-out ${
                    isActive
                      ? 'active border-transparent shadow-2xl -translate-y-2 scale-[1.03] bg-white/80'
                      : 'border-white/60 bg-white/50 hover:bg-white/70 hover:shadow-xl hover:-translate-y-1'
                  }`}
                  style={{ '--glow-a': item.glowA, '--glow-b': item.glowB } as CSSProperties}
                  onMouseEnter={() => {
                    setPaused(true);
                    setActive(index);
                  }}
                  onMouseLeave={() => setPaused(false)}
                  onClick={() => setActive(index)}
                >
                  <div
                    className={`choose-icon-wrap relative w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-500 ${
                      isActive ? 'bg-transparent scale-125' : 'bg-primary/10 group-hover:bg-primary'
                    }`}
                  >
                    <item.icon
                      size={isActive ? 34 : 28}
                      strokeWidth={isActive ? 1.6 : 2}
                      className={
                        isActive
                          ? 'choose-icon-glow'
                          : 'text-primary transition-colors duration-300 group-hover:text-white'
                      }
                    />
                  </div>
                  <h3 className="relative z-10 font-heading text-lg font-bold text-dark mb-3">{item.title}</h3>
                  <p className="relative z-10 text-steel text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}

          <div className="whychoose-dots flex md:hidden items-center justify-center gap-2 col-span-2 mt-2">
            {differentiators.map((item, index) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Show ${item.title}`}
                onClick={() => setActive(index)}
                className={`whychoose-dot ${index === active ? 'active' : ''}`}
              />
            ))}
          </div>

          <Sparkles className="whychoose-diamond hidden lg:block" size={20} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
