import { useEffect } from 'react';

const services = [
  'Repairing, Servicing, Testing and Maintenance of Power and Distribution Transformers in the range of 100 KVA to 100 MVA, across voltage classes 11, 22, 33, 66, 110, and 220 KV.',
  'On-site Oil Filtration, Maintenance & Testing of Power & Distribution Transformers up to 100 MVA.',
  'Sales & Purchase of Transformers, plus emergency service-transformer supply.',
  'OLTC (On-Load Tap Changer) Repairing & Servicing, Testing, and Sales of OLTC Spare Parts.',
  'Earthing Installation & Testing.',
  'ACB, VCB, HT & LT Panel Servicing, Testing & Maintenance.',
  'AB Switch, DO Fuse & Structure Maintenance.',
  'Cable Laying, Commissioning & Cable Jointing Works.',
  'All Industrial & Residential Wiring.',
  'Power Passing Work & ERDA Passing.',
];

export default function ChecklistSection() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.complete-service-card'));

    if (!cards.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target as HTMLElement;
          const index = cards.indexOf(card);

          if (entry.isIntersecting) {
            card.classList.remove('visible');

            window.setTimeout(() => {
              card.classList.add('visible');
            }, (index % 4) * 120);
          } else {
            card.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const col1 = services.slice(0, 5);
  const col2 = services.slice(5);

  return (
    <section className="services-section py-20 lg:py-28 bg-gray-bg" aria-label="Complete service list">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="section-header text-center mb-14">
          <span className="badge font-heading text-xs font-semibold tracking-[0.2em] uppercase text-primary">Full Capabilities</span>
          <div className="w-12 h-0.5 bg-primary mx-auto mt-2 mb-4" />
          <h2 className="title font-heading text-3xl md:text-4xl font-bold text-dark">Our Complete Service Range</h2>
        </div>

        <div className="services-grid grid md:grid-cols-2 gap-x-5 gap-y-5">
          {[col1, col2].map((column, colIndex) => (
            <div key={colIndex} className="space-y-4">
              {column.map((service, index) => {
                const isLeftColumn = colIndex === 0;
                const directionClass = isLeftColumn ? 'slide-left' : 'slide-right';

                return (
                  <div
                    key={`${colIndex}-${index}`}
                    className={`complete-service-card ${directionClass}`}
                  >
                    <svg
                      className="card-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="9 12 12 15 16 10" />
                    </svg>
                    <p className="card-text text-dark/80 text-sm leading-relaxed">{service}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
