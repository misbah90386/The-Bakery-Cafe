import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Star, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface BestSellersProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function BestSellers({ onAddToCart }: BestSellersProps) {
  const bestSellers = MENU_ITEMS.filter((item) => item.isBestSeller);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? bestSellers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === bestSellers.length - 1 ? 0 : prev + 1));
  };

  const activeItem = bestSellers[activeIndex];

  // Variants for sliding animation
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section id="best-sellers" className="py-20 lg:py-28 bg-dark-brown text-cream-light relative overflow-hidden">
      {/* Decorative Gold Rings */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 border border-gold/10 rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 border border-gold/10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-gold/10 border border-gold/20 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-gold">
                Highly Requested Delights
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4 tracking-tight">
              Our Signatures & <span className="italic text-gold font-normal">Best Sellers</span>
            </h2>
            <p className="text-sm text-cream-light/75 leading-relaxed">
              Mardan's favorites. These are our most beloved and frequently ordered bakery, dinner, and café items, highly recommended by hundreds of families.
            </p>
          </div>
          
          {/* Slider Controllers */}
          <div className="flex space-x-3 shrink-0 self-start md:self-end">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-cream/5 border border-gold/30 text-gold hover:bg-gold hover:text-dark-brown transition-all duration-300 shadow-md cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-cream/5 border border-gold/30 text-gold hover:bg-gold hover:text-dark-brown transition-all duration-300 shadow-md cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Slide Layout */}
        <div className="bg-dark-brown-light rounded-3xl p-6 sm:p-10 border border-gold/20 shadow-2xl relative min-h-[420px] md:min-h-[350px] flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 w-full items-center">
            
            {/* Slide Image Box */}
            <div className="md:col-span-5 relative h-56 sm:h-72 md:h-80 w-full rounded-2xl overflow-hidden shadow-xl border border-gold/15 group">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={activeIndex}
                  src={activeItem.image}
                  alt={activeItem.name}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/60 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 bg-gold text-dark-brown font-bold text-[9px] uppercase tracking-widest px-2.5 py-1.5 rounded-md flex items-center gap-1">
                <Sparkles size={11} className="fill-dark-brown" />
                <span>Mardan's Choice</span>
              </div>
            </div>

            {/* Slide Details Content */}
            <div className="md:col-span-7 flex flex-col justify-center min-h-[200px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div>
                    {/* Star ratings */}
                    <div className="flex items-center space-x-1 mb-3">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={14} className="fill-gold text-gold" />
                      ))}
                      <span className="text-[10px] text-gold font-semibold uppercase tracking-wider ml-2">
                        5.0 Perfect Rating
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream tracking-wide mb-3 leading-tight">
                      {activeItem.name}
                    </h3>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {activeItem.tags?.map((t, idx) => (
                        <span key={idx} className="text-[10px] uppercase font-bold tracking-wider text-gold bg-gold/10 border border-gold/20 px-2.5 py-0.5 rounded-full">
                          {t}
                        </span>
                      ))}
                      <span className="text-[10px] uppercase font-bold tracking-wider text-cream-light bg-cream/5 px-2.5 py-0.5 rounded-full">
                        {activeItem.category}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-cream-light/85 mb-8 leading-relaxed max-w-xl">
                      {activeItem.description}
                    </p>
                  </div>

                  {/* Pricing and Action Area */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-cream/15 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-cream/55 tracking-widest font-semibold">Price per serving</span>
                      <span className="font-mono text-xl sm:text-2xl font-bold text-gold">
                        Rs. {activeItem.price.toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(activeItem)}
                      className="bg-gold hover:bg-gold-dark text-dark-brown font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-gold/10 hover:scale-[1.02]"
                    >
                      <ShoppingBag size={15} className="stroke-2" />
                      <span>Order best seller</span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Bullet Progress Indicators */}
        <div className="flex justify-center space-x-2.5 mt-8">
          {bestSellers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'bg-gold w-8' : 'bg-cream/20 w-2 hover:bg-cream/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
