import { Star, Users, CheckCircle, Award, Clock, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import CTASection from '../components/CTASection';
import servicesHeroImage from '../assets/services-hero-transformer.jpg';
import { Link } from 'react-router-dom';
import { PAGE_SEO } from '../data/seo';

interface Review {
  name: string;
  title: string;
  company: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    name: 'Jignesh Patel',
    title: 'Maintenance Manager',
    company: 'Shreeji Chemical Industries, Vapi',
    rating: 5,
    text: 'Our 630 KVA transformer developed an oil leak on a Sunday and the team reached site within a few hours with a replacement unit. Zero production downtime. Extremely professional and government-approved paperwork was sorted the same week.',
  },
  {
    name: 'Bhavesh Osouza',
    title: 'Electrical Head',
    company: 'GIDC Estate, Umbergaon',
    rating: 5,
    text: 'Step-Up handled complete OLTC servicing and on-site oil filtration for two of our power transformers. Testing and ERDA documentation was thorough and delivered on time. Highly reliable for critical industrial work.',
  },
  {
    name: 'Haresh Shah',
    title: 'Proprietor',
    company: 'Shah Plastic Pvt. Ltd., Valsad',
    rating: 5,
    text: 'Got a fair valuation and quick payment when we sold our old distribution transformer to them. No hassle, honest pricing, and they picked it up within two days. Would deal with them again.',
  },
];

const totalReviews = reviews.length;

function Stars({ rating, size = 20 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? 'fill-primary text-primary' : 'fill-gray-300 text-gray-300'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <>
      <SEO
        seo={PAGE_SEO.reviews}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Reviews', path: '/reviews' },
        ]}
      />
      {/* Hero Section - Premium with Transformer Image */}
      <section className="relative w-full overflow-hidden bg-black">
        {/* Background with image */}
        <div className="absolute inset-0">
          <img
            src={servicesHeroImage}
            alt="Power transformer at industrial substation — Step-Up Energy Solutions client reviews"
            className="w-full h-full object-cover object-center"
            width={1600}
            height={900}
            fetchPriority="high"
          />
          {/* Keep the copy readable while preserving the transformer detail on the right. */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.72)_30%,rgba(0,0,0,0.28)_62%,rgba(0,0,0,0.04)_100%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-[80vh] lg:min-h-[675px] flex items-center py-20">
          <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-8">
            <div className="lg:max-w-2xl">
              {/* Label */}
              <ScrollReveal>
                <div className="mb-6">
                  <span className="font-heading text-xs font-bold tracking-widest uppercase text-primary">CLIENT REVIEWS</span>
                  <div className="w-16 h-1.5 bg-primary mt-3" />
                </div>
              </ScrollReveal>

              {/* Heading */}
              <ScrollReveal>
                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
                  <span className="text-white block">What Our</span>
                  <span className="text-primary block -mt-2">Clients Say</span>
                </h1>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-10 max-w-xl">
                  Trusted by manufacturing plants, chemical units, and industrial estates across Vapi, Valsad, Umbergaon, Daman, Silvassa, and Dadra.
                </p>
              </ScrollReveal>

              {/* Rating Section */}
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-8">
                  <Stars rating={5} size={24} />
                  <p className="text-gray-400 text-sm">
                    {totalReviews} verified client {totalReviews === 1 ? 'review' : 'reviews'}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Separate Section */}
      <section className="relative bg-gradient-to-b from-black to-black/95 py-12 lg:py-16 border-t border-primary/20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { icon: Users, value: '500+', label: 'Happy Clients' },
              { icon: CheckCircle, value: '1000+', label: 'Projects Completed' },
              { icon: Award, value: '15+', label: 'Years of Experience' },
              { icon: Clock, value: '24/7', label: 'Support Available' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <stat.icon size={28} className="text-primary mb-3" strokeWidth={1.5} />
                <div className="font-heading text-2xl lg:text-3xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-gray-400 text-xs lg:text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-black" aria-label="Client reviews">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ScrollReveal key={review.name} delay={index * 0.1}>
                <div className="h-full bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 relative group">
                  {/* Quote icon background */}
                  <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                    <MessageCircle size={40} className="text-primary" />
                  </div>

                  {/* Stars */}
                  <div className="mb-4">
                    <Stars rating={review.rating} size={18} />
                  </div>

                  {/* Review text */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-8">"{review.text}"</p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-primary/30 to-transparent mb-6" />

                  {/* Client info */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Users size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-white text-sm">
                        {review.name}
                      </p>
                      <p className="text-primary text-xs mt-1">{review.title}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{review.company}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback CTA */}
      <section className="py-16 lg:py-20 bg-black border-t border-primary/20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/30 rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <ScrollReveal>
              <div>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-2">
                  Have feedback to share?
                </h3>
                <p className="text-gray-400 text-sm lg:text-base">
                  We value your experience and strive to serve you better.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-primary text-white font-bold rounded-lg hover:bg-red-600 transition-colors shadow-xl shadow-primary/60 whitespace-nowrap"
              >
                <MessageCircle size={18} />
                Write a Review
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
