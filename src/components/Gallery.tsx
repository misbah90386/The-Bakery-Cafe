import React, { useState, useMemo } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, Grid, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = [
  { id: 'all', label: 'All Snaps' },
  { id: 'bakery', label: 'Bakery' },
  { id: 'cakes', label: 'Cakes' },
  { id: 'pizza', label: 'Pizzas' },
  { id: 'steaks', label: 'Steaks' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'dining', label: 'Dining & Vibe' },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredGallery = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      return selectedCategory === 'all' || item.category === selectedCategory;
    });
  }, [selectedCategory]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredGallery.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredGallery.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-cream border-t border-b border-gold/10 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-gold/10 border border-gold/20 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-gold">
              Visual Culinary Art
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-dark-brown mb-4 leading-tight">
            Our Gallery & <span className="italic text-burgundy font-medium">Ambiance</span>
          </h2>
          <div className="h-0.5 w-16 bg-gold/50 mx-auto mb-6" />
          <p className="text-sm sm:text-base text-dark-brown/75 leading-relaxed">
            Take a visual tour of our freshly baked pastries, signature sizzling steaks, cozy family dining room, and artisanal coffees prepared adjacent to Mardan Mega Mart.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-burgundy text-gold shadow-md'
                  : 'bg-cream-light text-dark-brown/80 border border-gold/15 hover:bg-cream hover:text-burgundy hover:border-burgundy/25'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(index)}
                className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gold/15 group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark Hover overlay with Eye Icon */}
                <div className="absolute inset-0 bg-dark-brown/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <div className="bg-gold text-dark-brown p-3 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Eye size={20} className="stroke-2" />
                  </div>
                  <h4 className="font-serif text-cream text-lg font-bold text-center mt-4 tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-gold uppercase tracking-widest font-semibold mt-1">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Zoom Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 bg-dark-brown/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8"
            >
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-cream/10 text-cream hover:bg-cream/20 hover:text-gold transition-colors duration-200 z-50 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={26} />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-6 p-3 rounded-full bg-cream/10 text-cream hover:bg-cream/20 hover:text-gold transition-colors duration-200 z-50 cursor-pointer"
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Zoomed Box */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl max-h-[80vh] w-full flex flex-col items-center"
              >
                <img
                  src={filteredGallery[lightboxIndex].image}
                  alt={filteredGallery[lightboxIndex].title}
                  className="max-h-[70vh] max-w-full object-contain rounded-2xl border border-gold/15 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Lightbox Caption */}
                <div className="text-center mt-4">
                  <h4 className="font-serif text-cream text-xl font-bold tracking-wide">
                    {filteredGallery[lightboxIndex].title}
                  </h4>
                  <p className="text-xs text-gold uppercase tracking-widest font-semibold mt-1">
                    Category: {filteredGallery[lightboxIndex].category}
                  </p>
                </div>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-6 p-3 rounded-full bg-cream/10 text-cream hover:bg-cream/20 hover:text-gold transition-colors duration-200 z-50 cursor-pointer"
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
