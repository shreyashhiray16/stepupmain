import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  /** Optional high-resolution illustrated icon; when provided it replaces the vector `icon` in the badge. */
  iconImage?: string;
  index?: number;
}

export default function ServiceCard({ slug, title, description, image, icon: Icon, iconImage, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/services/${slug}`}
        data-service-card={slug}
        className="group block h-full bg-[#fff7f4] rounded-[24px] border border-primary/[0.08] hover:border-transparent service-card relative overflow-hidden shadow-[0_16px_32px_rgba(15,23,42,0.05)]"
      >
        <div className="service-card-media">
          <img src={image} alt={`${title} — ${description.slice(0, 60)}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={600} height={400} />
          <div className="service-card-overlay" />
          <div className="service-icon-wrapper absolute left-5 top-5 z-10">
            {iconImage ? (
              <img
                src={iconImage}
                alt=""
                aria-hidden="true"
                className="h-10 w-10 rounded-full object-cover"
                width={40}
                height={40}
                loading="lazy"
              />
            ) : (
              <Icon size={22} className="text-primary transition-colors duration-300" />
            )}
          </div>
        </div>

        <div className="p-6 lg:p-7">
          <h3 className="font-heading text-2xl font-bold text-dark mb-2 group-hover:text-primary transition-colors leading-none">
            {title}
          </h3>

          <p className="text-steel text-sm leading-relaxed mb-6">{description}</p>

          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Learn more
            <ArrowRight size={16} className="learn-more-arrow" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
