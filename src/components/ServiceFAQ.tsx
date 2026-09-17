import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../data/serviceContent';

interface ServiceFAQProps {
  faqs: FAQItem[];
}

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question} className="border border-gray-border rounded-xl overflow-hidden bg-white">
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-bg transition-colors"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="font-heading font-bold text-dark text-sm md:text-base">{faq.question}</span>
              <ChevronDown
                size={18}
                className={`text-primary flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-steel text-sm leading-relaxed border-t border-gray-border pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
