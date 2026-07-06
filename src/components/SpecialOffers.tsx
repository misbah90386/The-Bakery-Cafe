import { useState } from 'react';
import { Tag, Copy, Check, MessageCircle, ExternalLink, Calendar } from 'lucide-react';
import { SPECIAL_OFFERS } from '../data';
import { motion } from 'motion/react';

export default function SpecialOffers() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="special-offers" className="py-20 lg:py-28 bg-cream-light scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-gold/10 border border-gold/20 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-gold">
              Irresistible Promos & Deals
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-dark-brown mb-4 leading-tight">
            Exclusive Deals & <span className="italic text-burgundy font-medium">Combo Offers</span>
          </h2>
          <div className="h-0.5 w-16 bg-gold/50 mx-auto mb-6" />
          <p className="text-sm sm:text-base text-dark-brown/75 leading-relaxed">
            Feast with your loved ones without breaking the bank. Redeem our special discount codes when ordering or show them to your server at dine-in.
          </p>
        </div>

        {/* Promo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIAL_OFFERS.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-cream rounded-3xl overflow-hidden shadow-md border border-gold/15 flex flex-col h-full group"
            >
              {/* Image and badges */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden shrink-0">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/60 to-transparent" />
                
                {/* Save Badges */}
                {offer.badge && (
                  <span className="absolute top-4 left-4 bg-burgundy text-gold text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg border border-gold/10">
                    {offer.badge}
                  </span>
                )}
                
                {/* Price Display */}
                {offer.price && (
                  <span className="absolute bottom-4 right-4 bg-dark-brown text-gold text-sm font-bold font-mono px-3 py-1.5 rounded-lg border border-gold/15 shadow-md">
                    {offer.price}
                  </span>
                )}
              </div>

              {/* Promo Info */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-dark-brown mb-2.5 leading-snug group-hover:text-burgundy transition-colors duration-200">
                  {offer.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-dark-brown/70 leading-relaxed mb-6 flex-grow">
                  {offer.description}
                </p>

                {/* Redeem Code Section */}
                {offer.discountCode && (
                  <div className="bg-cream-light border border-dashed border-gold/40 p-3.5 rounded-2xl flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Tag size={15} className="text-burgundy" />
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase text-dark-brown/45 font-bold tracking-wider">Promo Code</span>
                        <span className="font-mono text-xs font-bold tracking-wider text-dark-brown select-all uppercase">
                          {offer.discountCode}
                        </span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleCopyCode(offer.id, offer.discountCode!)}
                      className="p-2 bg-cream hover:bg-gold/10 text-dark-brown hover:text-burgundy rounded-lg transition-all duration-200 border border-gold/15 flex items-center justify-center cursor-pointer"
                      title="Copy promo code"
                    >
                      {copiedId === offer.id ? (
                        <Check size={14} className="text-green-600 stroke-3" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                )}

                {/* WhatsApp Order Action */}
                <a
                  href={`https://wa.me/923339071074?text=Hi%20The%20Bakery%20Cafe!%20I%20would%20like%20to%20order%20the%20special%20deal%3A%20${encodeURIComponent(offer.title)}%20using%20promo%20code%20${offer.discountCode || 'NONE'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-burgundy hover:bg-burgundy-dark text-gold py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md transition-all duration-300 w-full"
                >
                  <MessageCircle size={15} className="fill-gold" />
                  <span>Order Deal via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Limited Terms */}
        <div className="flex items-center justify-center space-x-2 mt-12 text-dark-brown/50 text-[11px] font-medium tracking-wide">
          <Calendar size={13} />
          <span>Terms apply. Special offers are subject to ingredient availability. Limited period offer only.</span>
        </div>

      </div>
    </section>
  );
}
