import { Star, Users, Utensils, Truck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onReserveClick: () => void;
  onMenuClick: () => void;
}

export default function Hero({ onReserveClick, onMenuClick }: HeroProps) {
  const trustBadges = [
    { icon: <Star className="text-gold fill-gold" size={16} />, text: '4.1 Customer Rating' },
    { icon: <Users className="text-gold" size={16} />, text: 'Family Friendly' },
    { icon: <Utensils className="text-gold" size={16} />, text: 'Dine-In Available' },
    { icon: <Truck className="text-gold" size={16} />, text: 'Takeaway & Delivery' },
    { icon: <Sparkles className="text-gold" size={16} />, text: 'Freshly Prepared Daily' },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-dark-brown pt-20 overflow-hidden">
      {/* Background Image with elegant overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/bakery_cafe_hero_1783352290174.jpg"
          alt="Premium Bakery and Restaurant Food Selection"
          className="w-full h-full object-cover object-center scale-105 animate-subtle-zoom"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered sophisticated overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-brown via-dark-brown/90 to-transparent lg:bg-gradient-to-r" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-brown via-transparent to-dark-brown/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-burgundy/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-gold/30 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
            <span className="text-[11px] uppercase tracking-widest text-gold font-bold">
              The Finest Dining In Mardan
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-cream leading-[1.1] mb-6 tracking-tight"
          >
            Freshly Baked, <br />
            <span className="text-gold italic font-normal">Expertly Crafted,</span> <br />
            Served with Passion
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-cream-light/85 mb-8 max-w-xl sm:max-w-2xl leading-relaxed"
          >
            Experience delicious bakery items, gourmet meals, premium coffee, pizzas, steaks, and desserts all under one roof.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16"
          >
            <button
              onClick={onMenuClick}
              className="bg-gold hover:bg-gold-dark text-dark-brown font-bold px-8 py-3.5 rounded-lg shadow-lg hover:shadow-gold/20 transform hover:-translate-y-0.5 transition-all duration-300 text-center text-sm tracking-wider uppercase"
            >
              View Menu
            </button>
            <button
              onClick={() => handleScrollTo('#menu')}
              className="bg-burgundy hover:bg-burgundy-dark text-gold font-bold px-8 py-3.5 rounded-lg shadow-lg hover:shadow-burgundy/20 border border-gold/30 transform hover:-translate-y-0.5 transition-all duration-300 text-center text-sm tracking-wider uppercase"
            >
              Order Online
            </button>
            <button
              onClick={onReserveClick}
              className="bg-transparent hover:bg-cream/10 text-cream font-bold px-8 py-3.5 rounded-lg border border-cream/50 hover:border-cream transform hover:-translate-y-0.5 transition-all duration-300 text-center text-sm tracking-wider uppercase"
            >
              Reserve a Table
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="border-t border-cream/15 pt-8"
          >
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {trustBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 bg-cream/5 hover:bg-cream/10 border border-cream/10 px-3.5 py-1.5 rounded-md transition-colors duration-200"
                >
                  {badge.icon}
                  <span className="text-xs text-cream-light font-medium tracking-wide">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide-down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center cursor-pointer opacity-75 hover:opacity-100 transition-opacity duration-200" onClick={() => handleScrollTo('#about')}>
        <span className="text-[10px] uppercase tracking-widest text-cream/70 mb-2 font-semibold">Discover More</span>
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
