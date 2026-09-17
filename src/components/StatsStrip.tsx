import { Zap, Shield, MapPin, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const stats = [
  { icon: Zap, value: '100 KVA \u2013 100 MVA', label: 'Transformer Capacity Serviced' },
  { icon: Shield, value: '11 \u2013 220 KV', label: 'Voltage Classes Covered' },
  { icon: Award, value: 'Govt. Approved', label: 'Licensed Electrical Contractor' },
  { icon: MapPin, value: 'Vapi, GIDC', label: 'Gujarat, India' },
];

export default function StatsStrip() {
  return (
    <section className="bg-gray-bg border-y border-gray-border relative overflow-hidden" aria-label="Key facts">
      <div className="absolute inset-0 diagonal-pattern-light" />
      <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="text-center lg:text-left">
                <stat.icon size={24} className="text-primary mx-auto lg:mx-0 mb-3" />
                <div className="font-heading text-xl md:text-2xl font-bold text-dark mb-1">{stat.value}</div>
                <div className="text-steel text-sm">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
