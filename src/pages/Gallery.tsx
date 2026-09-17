import { useEffect, useRef, useState } from 'react';
import { Camera, Plus, Trash2, X, ImageOff } from 'lucide-react';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import CTASection from '../components/CTASection';
import { addGalleryPhoto, getGalleryPhotos, removeGalleryPhoto, type GalleryPhoto } from '../data/contentStore';
import { PAGE_SEO } from '../data/seo';

const MIN_SLOTS = 8;

export default function Gallery() {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [pendingCaption, setPendingCaption] = useState('');
  const [previewOpen, setPreviewOpen] = useState<GalleryPhoto | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const refresh = () => setPhotos(getGalleryPhotos());

  useEffect(() => {
    refresh();
    window.addEventListener('stepup-gallery-updated', refresh);
    return () => window.removeEventListener('stepup-gallery-updated', refresh);
  }, []);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        addGalleryPhoto(reader.result, pendingCaption.trim());
        setPendingCaption('');
      }
    };
    reader.readAsDataURL(file);
  };

  const openPicker = () => fileInputRef.current?.click();

  const emptySlotCount = Math.max(0, MIN_SLOTS - photos.length);

  return (
    <>
      <SEO
        seo={PAGE_SEO.gallery}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery' },
        ]}
      />
      {/* Page header */}
      <section className="bg-gray-bg pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden border-b border-gray-border">
        <div className="absolute inset-0 grid-pattern-light" />
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-primary/[0.03] hidden lg:block" />
        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <span className="font-heading text-xs font-semibold tracking-[0.2em] uppercase text-primary">Our Work</span>
            <div className="w-12 h-0.5 bg-primary mt-2 mb-6" />
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Project <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-steel text-lg max-w-2xl leading-relaxed">
              A look at transformers, panels, and installations we've serviced across Vapi, Valsad, and the surrounding GIDC industrial belt. Upload photos below to showcase your latest site work.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Upload + Gallery grid */}
      <section className="py-20 lg:py-28 bg-white" aria-label="Photo gallery">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          {/* Caption input for next upload */}
          <ScrollReveal>
            <div className="mb-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-gray-bg border border-gray-border rounded-xl p-4">
              <div className="flex items-center gap-2 text-steel text-sm flex-shrink-0 px-2">
                <Camera size={18} className="text-primary" />
                Add a caption, then choose a photo to upload:
              </div>
              <input
                type="text"
                value={pendingCaption}
                onChange={(e) => setPendingCaption(e.target.value)}
                placeholder="e.g. 630 KVA transformer repair — Vapi GIDC"
                className="flex-1 px-4 py-2.5 rounded-lg border border-gray-border bg-white text-sm text-dark placeholder:text-steel-light focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                type="button"
                onClick={openPicker}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors flex-shrink-0"
              >
                <Plus size={16} /> Upload Photo
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFile(file);
                  e.target.value = '';
                }}
              />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            {photos.map((photo, index) => (
              <ScrollReveal key={photo.id} delay={index * 0.05}>
                <div className="group relative aspect-square rounded-xl overflow-hidden border border-gray-border bg-gray-bg">
                  <button
                    type="button"
                    onClick={() => setPreviewOpen(photo)}
                    className="block w-full h-full"
                    aria-label={`View ${photo.caption || 'gallery photo'}`}
                  >
                    <img src={photo.url} alt={photo.caption || 'Step-Up Energy Solutions electrical project work in Vapi Gujarat'} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </button>
                  {photo.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/80 to-transparent p-3 pointer-events-none">
                      <p className="text-white text-xs font-medium line-clamp-2">{photo.caption}</p>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => removeGalleryPhoto(photo.id)}
                    aria-label="Remove photo"
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-dark/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </ScrollReveal>
            ))}

            {/* Empty upload placeholder tiles */}
            {Array.from({ length: emptySlotCount }).map((_, i) => (
              <ScrollReveal key={`empty-${i}`} delay={(photos.length + i) * 0.05}>
                <button
                  type="button"
                  onClick={openPicker}
                  className="w-full aspect-square rounded-xl border-2 border-dashed border-gray-border hover:border-primary/50 bg-gray-bg hover:bg-primary/[0.03] flex flex-col items-center justify-center gap-2 text-steel-light hover:text-primary transition-colors"
                >
                  <Camera size={26} />
                  <span className="text-xs font-medium">Add Photo</span>
                </button>
              </ScrollReveal>
            ))}
          </div>

          {photos.length === 0 && (
            <div className="mt-10 flex flex-col items-center justify-center text-center text-steel-light">
              <ImageOff size={28} className="mb-3" />
              <p className="text-sm">No project photos yet — use the empty tiles above to add photos of completed work.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox preview */}
      {previewOpen && (
        <div
          className="fixed inset-0 z-[60] bg-dark/90 flex items-center justify-center p-6"
          onClick={() => setPreviewOpen(null)}
        >
          <button
            type="button"
            aria-label="Close preview"
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-primary transition-colors"
            onClick={() => setPreviewOpen(null)}
          >
            <X size={20} />
          </button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={previewOpen.url} alt={previewOpen.caption || 'Project photo'} className="w-full max-h-[75vh] object-contain rounded-lg" />
            {previewOpen.caption && <p className="text-white/80 text-sm text-center mt-4">{previewOpen.caption}</p>}
          </div>
        </div>
      )}

      <CTASection />
    </>
  );
}
