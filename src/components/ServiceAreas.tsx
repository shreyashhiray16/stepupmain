import { MapPin } from 'lucide-react';
import { BUSINESS } from '../data/business';

export default function ServiceAreas() {
  return (
    <div className="flex flex-wrap gap-3">
      {BUSINESS.serviceAreas.map((area) => (
        <span
          key={area}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-bg border border-gray-border rounded-full text-sm text-dark font-medium"
        >
          <MapPin size={14} className="text-primary flex-shrink-0" aria-hidden="true" />
          {area}
        </span>
      ))}
    </div>
  );
}
