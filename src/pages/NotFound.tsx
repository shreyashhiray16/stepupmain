import { Link } from 'react-router-dom';
import { ArrowLeft, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import { PAGE_SEO } from '../data/seo';

export default function NotFound() {
  return (
    <>
      <SEO seo={PAGE_SEO.notFound} />
      <section className="relative min-h-[80vh] flex items-center bg-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid-pattern opacity-30" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <span className="font-heading text-8xl md:text-9xl font-black text-primary/20 block mb-4">404</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Power Lost.</h1>
          <p className="text-white/60 text-lg max-w-md mx-auto mb-10">
            The page you&apos;re looking for couldn&apos;t be found.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded hover:bg-primary-dark transition-colors"
            >
              <ArrowLeft size={18} /> Back Home
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/25 text-white font-semibold rounded hover:bg-white/10 transition-colors"
            >
              <Zap size={18} /> View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
