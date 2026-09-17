import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ServiceSlug } from '../data/seo';
import { getServiceContent } from '../data/serviceContent';
import { getEditableServicePillars } from '../data/contentStore';

interface RelatedServicesProps {
  currentSlug: string;
  relatedSlugs: ServiceSlug[];
}

export default function RelatedServices({ currentSlug, relatedSlugs }: RelatedServicesProps) {
  const pillars = getEditableServicePillars();
  const content = getServiceContent(currentSlug);
  const anchors: Partial<Record<ServiceSlug, string>> = content?.relatedAnchors ?? {};

  const related = relatedSlugs
    .map((slug) => pillars.find((p) => p.slug === slug))
    .filter(Boolean);

  if (!related.length) return null;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {related.map((pillar) => (
        <Link
          key={pillar!.slug}
          to={`/services/${pillar!.slug}`}
          className="group flex items-center justify-between p-5 bg-gray-bg rounded-xl border border-gray-border hover:border-primary/40 hover:bg-white transition-all"
        >
          <span className="text-sm font-semibold text-dark group-hover:text-primary transition-colors pr-4">
            {anchors[pillar!.slug as ServiceSlug] ?? pillar!.title}
          </span>
          <ArrowRight size={16} className="text-steel group-hover:text-primary flex-shrink-0 transition-colors" />
        </Link>
      ))}
      <Link
        to="/contact"
        className="group flex items-center justify-between p-5 bg-primary/5 rounded-xl border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all sm:col-span-2 lg:col-span-1"
      >
        <span className="text-sm font-semibold text-primary">Contact our electrical service team</span>
        <ArrowRight size={16} className="text-primary flex-shrink-0" />
      </Link>
    </div>
  );
}
